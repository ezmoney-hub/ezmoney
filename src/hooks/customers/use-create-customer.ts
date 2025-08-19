import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
	type CreateCustomerMutationRequest,
	getCustomersQueryKey,
} from "@/http/generated";
import { useCreateCustomer as useCreateCustomerGenerated } from "@/http/generated/hooks/useCreateCustomer";
import { useFormMutation } from "../form/use-form-mutation";

export const createCustomerMutationRequestSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	email: z
		.string()
		.optional()
		.refine(
			(email) => {
				if (!email || email.trim() === "") return true; // Allow empty
				return z.string().email().safeParse(email).success; // Validate if not empty
			},
			{ message: "Email inválido" }
		),
	phone: z.string().optional(),
	description: z.string().optional(),
});

export function useCreateCustomer() {
	const [isCreateCustomerSheetOpen, setIsCreateCustomerSheetOpen] =
		useState(false);

	const queryClient = useQueryClient();

	const form = useFormMutation<CreateCustomerMutationRequest>({
		schema: createCustomerMutationRequestSchema,
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			description: "",
		},
		onSubmit: (data) => {
			const sanitizedData = {
				name: data.name,
				email: data.email || undefined,
				phone: data.phone || undefined,
				description: data.description || undefined,
			};
			createCustomerFn({ data: sanitizedData });
		},
	});

	const { mutateAsync: createCustomerFn, isPending: isLoadingCreateCustomer } =
		useCreateCustomerGenerated({
			mutation: {
				onSuccess: (response) => {
					if (response.success) {
						queryClient.invalidateQueries({
							queryKey: getCustomersQueryKey(),
						});
						setIsCreateCustomerSheetOpen(false);
						form.reset();
						toast.success("Cliente criado com sucesso!");
						return;
					}

					toast.error("Erro ao criar cliente");
				},
				onError: (error) => {
					console.error("Erro ao criar cliente:", error);
					if (error.response?.data?.errors) {
						for (const errorMessage of error.response.data.errors) {
							toast.error(errorMessage);
						}
					} else {
						toast.error("Erro inesperado ao criar cliente");
					}
				},
			},
		});

	return {
		form,
		isLoadingCreateCustomer,
		createCustomer: createCustomerFn,
		isCreateCustomerSheetOpen,
		setIsCreateCustomerSheetOpen,
	};
}

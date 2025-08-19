import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import type { GetCustomers200 } from "@/http/generated";
import {
	getCustomersQueryKey,
	type UpdateCustomerMutationRequest,
	updateCustomerMutationRequestSchema,
} from "@/http/generated";
import { useUpdateCustomer as useUpdateCustomerGenerated } from "@/http/generated/hooks/useUpdateCustomer";
import { useFormMutation } from "../form/use-form-mutation";

export function useUpdateCustomer(
	customer: GetCustomers200["data"]["customers"][number]
) {
	const [isEditCustomerSheetOpen, setIsEditCustomerSheetOpen] = useState(false);

	const queryClient = useQueryClient();

	const form = useFormMutation<UpdateCustomerMutationRequest>({
		schema: updateCustomerMutationRequestSchema,
		defaultValues: {
			name: customer.name || "",
			email: customer.email || "",
			phone: customer.phone || "",
			description: customer.description || "",
		},
		onSubmit: (data) => {
			updateCustomerFn({ id: customer.id, data });
		},
	});

	const { mutateAsync: updateCustomerFn, isPending: isLoadingUpdateCustomer } =
		useUpdateCustomerGenerated({
			mutation: {
				onSuccess: (response) => {
					if (response.success) {
						queryClient.invalidateQueries({
							queryKey: getCustomersQueryKey(),
						});
						setIsEditCustomerSheetOpen(false);
						toast.success("Cliente atualizado com sucesso!");
						return;
					}

					toast.error("Erro ao atualizar cliente");
				},
				onError: (error) => {
					console.error("Erro ao atualizar cliente:", error);
					if (error.response?.data?.errors) {
						for (const errorMessage of error.response.data.errors) {
							toast.error(errorMessage);
						}
					} else {
						toast.error("Erro inesperado ao atualizar cliente");
					}
				},
			},
		});

	return {
		form,
		isLoadingUpdateCustomer,
		updateCustomer: updateCustomerFn,
		isEditCustomerSheetOpen,
		setIsEditCustomerSheetOpen,
	};
}

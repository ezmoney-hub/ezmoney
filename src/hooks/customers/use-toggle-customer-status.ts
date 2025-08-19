import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { useToggleCustomerStatus as useToggleCustomerStatusGenerated } from "@/http/generated/hooks/useToggleCustomerStatus";

export function useToggleCustomerStatus() {
	const [
		isToggleCustomerStatusDialogOpen,
		setIsToggleCustomerStatusDialogOpen,
	] = useState(false);

	const queryClient = useQueryClient();

	const {
		mutateAsync: toggleCustomerStatusFn,
		isPending: isLoadingToggleCustomerStatus,
	} = useToggleCustomerStatusGenerated({
		mutation: {
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({ queryKey: [{ url: "/customers" }] });
					setIsToggleCustomerStatusDialogOpen(false);
					toast.success("Status do cliente alterado com sucesso!");
					return;
				}

				toast.error("Erro ao alterar status do cliente");
			},
			onError: (error) => {
				console.error("Erro ao alterar status do cliente:", error);
				if (error.response?.data?.errors) {
					for (const errorMessage of error.response.data.errors) {
						toast.error(errorMessage);
					}
				} else {
					toast.error("Erro inesperado ao alterar status do cliente");
				}
			},
		},
	});

	return {
		toggleCustomerStatusFn,
		isLoadingToggleCustomerStatus,
		isToggleCustomerStatusDialogOpen,
		setIsToggleCustomerStatusDialogOpen,
	};
}


import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

type DeleteInvoiceResponse = HTTPSuccessResponse<null> | HTTPErrorResponse;

export async function deleteInvoice(
	invoiceId: string
): Promise<DeleteInvoiceResponse> {
	try {
		const response = await api.delete<HTTPSuccessResponse<null>>(
			`/invoices/${invoiceId}`
		);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}
		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}

export function useDeleteInvoice() {
	const [isDeleteInvoiceDialogOpen, setIsDeleteInvoiceDialogOpen] =
		useState(false);

	const { mutateAsync: deleteInvoiceFn, isPending: isLoadingDeleteInvoice } =
		useMutation({
			mutationKey: ["delete-invoice"],
			mutationFn: deleteInvoice,
		});

	return {
		deleteInvoiceFn,
		isLoadingDeleteInvoice,
		isDeleteInvoiceDialogOpen,
		setIsDeleteInvoiceDialogOpen,
	};
}

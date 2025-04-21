import { CreateInvoiceContainer } from "@/components/invoices/create-invoice/create-invoice-container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Adicionar Conta - EZMoney",
	description: "Adicionar uma nova conta",
	keywords: [
		"Adicionar Conta",
		"EZMoney",
		"Finanças",
		"Controle Financeiro",
		"Gerenciamento de Contas",
	],
};

export default function Page() {
	return <CreateInvoiceContainer />;
}

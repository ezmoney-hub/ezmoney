import type { Metadata } from "next";
import { InvoicesSummary } from "@/components/invoices/summary/summary";
import { InvoicesTableContainer } from "@/components/invoices/table/container";

export const metadata: Metadata = {
	title: "Dashboard | EZMoney",
	description: "Gerencie suas transações de forma fácil e eficiente",
};

export default function Dashboard() {
	return (
		<div className="w-full space-y-6">
			<InvoicesSummary />

			<InvoicesTableContainer />
		</div>
	);
}

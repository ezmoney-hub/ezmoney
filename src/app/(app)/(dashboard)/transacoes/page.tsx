import type { Metadata } from "next";
import { TransactionsSummary } from "@/components/transactions/summary/summary";
import { TransactionsTableContainer } from "@/components/transactions/table/container";

export const metadata: Metadata = {
	title: "Transações | EZMoney",
	description: "Gerencie suas transações de forma fácil e eficiente",
};

export default function Contas() {
	return (
		<div className="w-full space-y-6">
			<TransactionsSummary />

			<TransactionsTableContainer />
		</div>
	);
}

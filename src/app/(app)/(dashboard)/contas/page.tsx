import type { Metadata } from "next";
import { BankAccountsContainer } from "@/components/bank-accounts/container";

export const metadata: Metadata = {
	title: "Contas | EZMoney",
	description: "Gerencie suas contas de forma fácil e eficiente",
};

export default function Contas() {
	return (
		<div className="w-full space-y-6">
			<BankAccountsContainer />
		</div>
	);
}

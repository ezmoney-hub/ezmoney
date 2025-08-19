import type { Metadata } from "next";
import { BudgetsTableContainer } from "@/components/budgets/table/container";

export const metadata: Metadata = {
	title: "Orcamentos | EZMoney",
	description: "Gerencie seus orçamentos de forma fácil e eficiente",
};

export default function Orcamentos() {
	return <BudgetsTableContainer />;
}

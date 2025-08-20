"use client";
import {
	ArrowBigDownDash,
	ArrowBigUpDash,
	DollarSign,
	FileText,
} from "lucide-react";
import { useGetReportsSummary } from "@/hooks/budgets/use-get-budgets-summary";
import { ReportsSummaryCard } from "./summary-card";
import { ReportsSummarySkeleton } from "./summary-skeleton";

export function ReportsSummary() {
	const { summary, isLoadingSummary } = useGetReportsSummary();

	if (isLoadingSummary) {
		return <ReportsSummarySkeleton />;
	}

	return (
		<div className="w-full flex flex-wrap md:flex-nowrap gap-4">
			<ReportsSummaryCard
				label="Entradas"
				value={summary.income.value}
				count={summary.income.count}
				Icon={ArrowBigDownDash}
				singularDescription="transação"
				pluralDescription="transações"
			/>

			<ReportsSummaryCard
				label="Saídas"
				value={summary.expense.value}
				count={summary.expense.count}
				Icon={ArrowBigUpDash}
				singularDescription="transação"
				pluralDescription="transações"
			/>

			<ReportsSummaryCard
				label="Saldo Total"
				Icon={DollarSign}
				value={summary.totalBalance.value}
				count={summary.totalBalance.count}
				singularDescription="conta bancária"
				pluralDescription="contas bancárias"
			/>

			<ReportsSummaryCard
				label="Faturas Pendentes"
				Icon={FileText}
				value={summary.invoices.value}
				count={summary.invoices.count}
				singularDescription="fatura pendente"
				pluralDescription="faturas pendentes"
			/>
		</div>
	);
}

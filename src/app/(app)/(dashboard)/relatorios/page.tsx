import type { Metadata } from "next";
import { ReportsCharts } from "@/reports/charts/charts";
import { ReportsSummary } from "@/reports/summary/summary";

export const metadata: Metadata = {
	title: "Relatórios | EZMoney",
	description: "Gerencie seus relatórios de forma fácil e eficiente",
};

export default function ReportPage() {
	return (
		<div className="w-full space-y-6">
			<ReportsSummary />

			<ReportsCharts />
		</div>
	);
}

import type { Metadata } from "next";
import { DashboardChartsContainer } from "@/components/dashboard/charts/container";
import { ReportsSummary } from "@/components/reports/summary/summary";

export const metadata: Metadata = {
	title: "Dashboard | EZMoney",
	description: "Gerencie suas transações de forma fácil e eficiente",
};

export default function Dashboard() {
	return (
		<div className="w-full space-y-6 flex flex-col">
			<ReportsSummary />

			<DashboardChartsContainer />
		</div>
	);
}

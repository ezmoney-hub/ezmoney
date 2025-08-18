import { ReportsCharts } from "@/components/reports/charts/charts";
import { ReportsSummary } from "@/components/reports/summary/summary";

export default function ReportPage() {
	return (
		<div className="w-full space-y-6">
			<ReportsSummary />

			<ReportsCharts />
		</div>
	);
}

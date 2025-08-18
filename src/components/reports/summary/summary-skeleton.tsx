import { ReportsSummaryCardSkeleton } from "./summary-card-skeleton";

export function ReportsSummarySkeleton() {
	return (
		<div className="w-full flex gap-4">
			<ReportsSummaryCardSkeleton />
			<ReportsSummaryCardSkeleton />
			<ReportsSummaryCardSkeleton />
			<ReportsSummaryCardSkeleton />
		</div>
	);
}

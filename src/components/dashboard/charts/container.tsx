import { ExpensesByCategoryChart } from "./expenses-by-category/chart";
import { TransactionsChart } from "./transactions/chart";

export function DashboardChartsContainer() {
	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full lg:overflow-hidden">
			<div className="h-full overflow-hidden min-h-[400px]">
				<TransactionsChart />
			</div>

			<div className="h-full overflow-hidden min-h-[400px]">
				<ExpensesByCategoryChart />
			</div>
		</div>
	);
}

import { ExpensesByCategoryChart } from "./expenses-by-category/chart";
import { TransactionsChart } from "./transactions/chart";

export function DashboardChartsContainer() {
	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full overflow-hidden">
			<div className="h-full overflow-hidden min-h-0">
				<TransactionsChart />
			</div>

			<div className="h-full overflow-hidden min-h-0">
				<ExpensesByCategoryChart />
			</div>
		</div>
	);
}

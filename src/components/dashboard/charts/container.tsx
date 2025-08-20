import { ExpensesByCategoryChart } from "./expenses-by-category/chart";
import { TransactionsChart } from "./transactions/chart";

export function DashboardChartsContainer() {
	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
			<TransactionsChart />

			<ExpensesByCategoryChart />
		</div>
	);
}

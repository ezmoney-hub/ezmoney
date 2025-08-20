import { ExpensesByCategoryChart } from "./expenses-by-category";

export function ReportsCharts() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-1 gap-4">
			<ExpensesByCategoryChart />
		</div>
	);
}

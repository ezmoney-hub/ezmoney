import { GeistMono } from "geist/font/mono";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/format-currency";

export function ExpensesByCategoryChart() {
	const totalExpenses = 10000;

	const growthPercentage = 8.2;

	const expenseCategories = [
		{ category: "Moradia", amount: 2200, color: "bg-emerald-500" },
		{ category: "Alimentação", amount: 1500, color: "bg-pink-500" },
		{ category: "Transporte", amount: 950, color: "bg-purple-500" },
		{ category: "Saúde", amount: 800, color: "bg-blue-500" },
		{ category: "Lazer", amount: 650, color: "bg-yellow-500" },
		{ category: "Educação", amount: 550, color: "bg-orange-500" },
		{ category: "Tecnologia", amount: 500, color: "bg-indigo-500" },
		{ category: "Vestuário", amount: 400, color: "bg-red-500" },
		{ category: "Serviços", amount: 350, color: "bg-teal-500" },
		{ category: "Academia", amount: 300, color: "bg-lime-500" },
		{ category: "Cosméticos", amount: 280, color: "bg-rose-500" },
		{ category: "Telefone", amount: 250, color: "bg-cyan-500" },
		{ category: "Streaming", amount: 220, color: "bg-violet-500" },
		{ category: "Petshop", amount: 200, color: "bg-amber-500" },
		{ category: "Casa & Jardim", amount: 180, color: "bg-green-500" },
		{ category: "Presentes", amount: 150, color: "bg-fuchsia-500" },
		{ category: "Livros", amount: 130, color: "bg-slate-500" },
		{ category: "Restaurantes", amount: 120, color: "bg-stone-500" },
		{ category: "Farmácia", amount: 110, color: "bg-sky-500" },
		{ category: "Outros", amount: 160, color: "bg-gray-500" },
	];

	return (
		<Card className="p-6 border-border h-full">
			<CardHeader>
				<CardTitle>Gastos por Categoria</CardTitle>

				<CardDescription>Agosto 2024 - Agosto 2025</CardDescription>

				<div className="flex items-center gap-3">
					<span
						className={`text-2xl font-semibold text-foreground ${GeistMono.className}`}
					>
						{formatCurrency(totalExpenses)}
					</span>

					<span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded-full">
						+{growthPercentage}%
					</span>
				</div>
			</CardHeader>

			<div className="mb-6 max-h-[400px]">
				<div className="flex h-6 overflow-hidden">
					{expenseCategories.map((category) => {
						const percentage = (category.amount / totalExpenses) * 100;

						return (
							<div
								key={category.category}
								className={category.color}
								style={{ width: `${percentage}%` }}
								title={`${category.category}: ${percentage.toFixed(1)}%`}
							/>
						);
					})}
				</div>
			</div>

			<div className="max-h-[300px] overflow-y-auto space-y-3 pr-2 scrollbar-hide">
				{expenseCategories.map((category) => (
					<div
						key={category.category}
						className="flex items-center justify-between"
					>
						<div className="flex items-center gap-3">
							<div className={`w-2 h-2 rounded-full ${category.color}`} />
							<span className="text-sm text-muted-foreground">
								{category.category}
							</span>
						</div>
						<span className="text-sm font-medium font-mono">
							R$ {category.amount.toLocaleString()}
						</span>
					</div>
				))}
			</div>
		</Card>
	);
}

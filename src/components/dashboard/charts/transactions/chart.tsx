"use client";

import { GeistMono } from "geist/font/mono";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { formatCurrency } from "@/utils/format-currency";

const chartData = [
	{ month: "Ago/24", entradas: 42000, saidas: 28000, investimentos: 6500 },
	{ month: "Set/24", entradas: 38000, saidas: 31000, investimentos: 9200 },
	{ month: "Out/24", entradas: 56000, saidas: 35000, investimentos: 12000 },
	{ month: "Nov/24", entradas: 47000, saidas: 29000, investimentos: 8800 },
	{ month: "Dez/24", entradas: 72000, saidas: 48000, investimentos: 15000 },
	{ month: "Jan/25", entradas: 35000, saidas: 26000, investimentos: 5500 },
	{ month: "Fev/25", entradas: 44000, saidas: 33000, investimentos: 11000 },
	{ month: "Mar/25", entradas: 51000, saidas: 37000, investimentos: 13500 },
	{ month: "Abr/25", entradas: 49000, saidas: 32000, investimentos: 10200 },
	{ month: "Mai/25", entradas: 65000, saidas: 41000, investimentos: 18000 },
	{ month: "Jun/25", entradas: 58000, saidas: 39000, investimentos: 14800 },
	{ month: "Jul/25", entradas: 46000, saidas: 34000, investimentos: 9600 },
	{ month: "Ago/25", entradas: 61000, saidas: 43000, investimentos: 16500 },
];

const chartConfig = {
	entradas: {
		label: "Entradas",
		color: "#22c55e",
	},
	saidas: {
		label: "Saídas",
		color: "#ef4444",
	},
	investimentos: {
		label: "Investimentos",
		color: "#3b82f6",
	},
} satisfies ChartConfig;

export function TransactionsChart() {
	const totalTransactions = chartData.reduce(
		(sum, month) => sum + month.entradas + month.saidas + month.investimentos,
		0
	);

	const avgMonthly = totalTransactions / chartData.length;

	const lastMonth = chartData[chartData.length - 1];

	const lastMonthTotal =
		lastMonth.entradas + lastMonth.saidas + lastMonth.investimentos;

	const growthPercentage = (
		((lastMonthTotal - avgMonthly) / avgMonthly) *
		100
	).toFixed(1);

	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle>Transações</CardTitle>

				<CardDescription>Agosto 2024 - Agosto 2025</CardDescription>

				<div className="flex items-center gap-3">
					<span
						className={`text-2xl font-semibold text-foreground ${GeistMono.className}`}
					>
						{formatCurrency(totalTransactions / 1000)}
					</span>

					<span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded-full">
						+{growthPercentage}%
					</span>
				</div>
			</CardHeader>

			<CardContent>
				<ChartContainer config={chartConfig} className="max-h-[400px]">
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							content={<ChartTooltipContent hideLabel />}
							formatter={(value) => [
								`R$ ${Number(value).toLocaleString()}`,
								"",
							]}
							labelClassName="font-mono"
						/>
						<ChartLegend content={<ChartLegendContent />} />

						<Bar
							dataKey="entradas"
							stackId="a"
							fill={chartConfig.entradas.color}
							radius={0}
						/>

						<Bar
							dataKey="saidas"
							stackId="a"
							fill={chartConfig.saidas.color}
							radius={0}
						/>

						<Bar
							dataKey="investimentos"
							stackId="a"
							fill={chartConfig.investimentos.color}
							radius={0}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 leading-none font-medium">
					Crescimento de {growthPercentage}% este mês{" "}
					<TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Mostrando transações dos últimos 13 meses
				</div>
			</CardFooter>
		</Card>
	);
}

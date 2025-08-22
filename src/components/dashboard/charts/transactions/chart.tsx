"use client";
import { GeistMono } from "geist/font/mono";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { formatCurrency } from "@/utils/format-currency";

const chartData = [
	{ month: "Set", entradas: 6850, saidas: 7200 },
	{ month: "Out", entradas: 7450, saidas: 6900 },
	{ month: "Nov", entradas: 6200, saidas: 7800 },
	{ month: "Dez", entradas: 8100, saidas: 6500 },
	{ month: "Jan", entradas: 6750, saidas: 7350 },
	{ month: "Fev", entradas: 7900, saidas: 6100 },
	{ month: "Mar", entradas: 5800, saidas: 8200 },
	{ month: "Abr", entradas: 7600, saidas: 6800 },
	{ month: "Mai", entradas: 6950, saidas: 7150 },
	{ month: "Jun", entradas: 7250, saidas: 6950 },
	{ month: "Jul", entradas: 6400, saidas: 7700 },
	{ month: "Ago", entradas: 7800, saidas: 6300 },
];

const chartConfig = {
	entradas: {
		label: "Entradas",
		color: "oklch(0.72 0.19 150)",
	},
	saidas: {
		label: "Saídas",
		color: "oklch(0.65 0.22 25)",
	},
} satisfies ChartConfig;

export function TransactionsChart() {
	const totalTransferred = chartData.reduce((total, month) => {
		return total + month.entradas + month.saidas;
	}, 0);

	const growthPercentage = 12.5;

	return (
		<Card className="h-full flex flex-col bg-transparent">
			<CardHeader>
				<CardTitle>Transações por Mês</CardTitle>

				<CardDescription>Agosto 2024 - Agosto 2025</CardDescription>

				<div className="flex items-center gap-3">
					<span
						className={`text-2xl font-semibold text-foreground ${GeistMono.className}`}
					>
						{formatCurrency(totalTransferred)}
					</span>

					<span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded-full">
						+{growthPercentage}%
					</span>
				</div>
			</CardHeader>

			<CardContent className="flex-1 min-h-0 p-6">
				<ChartContainer config={chartConfig} className="h-full w-full">
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 0,
							right: 0,
							top: 5,
							bottom: 5,
						}}
					>
						<CartesianGrid
							vertical={false}
							strokeDasharray="3 3"
							className="!stroke-border dark:!stroke-zinc-800"
						/>

						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							padding={{ left: 16, right: 16 }}
							interval={0}
							angle={0}
							textAnchor="middle"
							tickFormatter={(value) => value}
						/>

						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>

						<Line
							dataKey="entradas"
							type="bump"
							stroke="oklch(0.72 0.19 150)"
							dot={false}
							strokeWidth={2}
						/>

						<Line
							dataKey="saidas"
							type="bump"
							stroke="oklch(0.65 0.22 25)"
							dot={false}
							strokeWidth={2}
						/>

						<defs>
							<filter
								id="rainbow-line-glow"
								x="-20%"
								y="-20%"
								width="140%"
								height="140%"
							>
								<feGaussianBlur stdDeviation="10" result="blur" />

								<feComposite in="SourceGraphic" in2="blur" operator="over" />
							</filter>
						</defs>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

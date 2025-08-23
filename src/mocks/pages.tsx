import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	DashboardSquare01Icon,
	BankIcon,
	ReceiptDollarIcon,
	PiggyBankIcon,
	UserMultiple02Icon,
	Tag01Icon,
	CreditCardIcon,
	Settings02Icon,
} from "@hugeicons/core-free-icons";

export const pages = [
	{
		href: "/",
		icon: (
			<HugeiconsIcon
				icon={DashboardSquare01Icon}
				className="w-[22px] h-[22px]"
			/>
		),
		label: "Dashboard",
	},
	{
		href: "/faturas",
		icon: (
			<HugeiconsIcon icon={ReceiptDollarIcon} className="w-[22px] h-[22px]" />
		),
		label: "Faturas",
	},
	{
		href: "/transacoes",
		icon: <HugeiconsIcon icon={CreditCardIcon} className="w-[22px] h-[22px]" />,
		label: "Transações",
	},
	{
		href: "/contas",
		icon: <HugeiconsIcon icon={BankIcon} className="w-[22px] h-[22px]" />,
		label: "Contas",
	},
	{
		href: "/clientes",
		icon: (
			<HugeiconsIcon icon={UserMultiple02Icon} className="w-[22px] h-[22px]" />
		),
		label: "Clientes",
	},
	{
		href: "/orcamentos",
		icon: <HugeiconsIcon icon={PiggyBankIcon} className="w-[22px] h-[22px]" />,
		label: "Orçamentos",
	},
	// {
	// 	href: "/relatorios",
	// 	icon: BarChart,
	// 	label: "Relatórios",
	// },
	{
		href: "/categorias",
		icon: <HugeiconsIcon icon={Tag01Icon} className="w-[22px] h-[22px]" />,
		label: "Categorias",
	},
	{
		href: "/configuracoes",
		icon: <HugeiconsIcon icon={Settings02Icon} className="w-[22px] h-[22px]" />,
		label: "Configurações",
	},
];

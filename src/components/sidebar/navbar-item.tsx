"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
	href: string;
	icon: ReactNode;
	label: string;
}

export function NavbarItem({ href, icon, label }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				"flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
				"hover:text-primary",
				isActive ? "text-primary" : "text-zinc-500"
			)}
		>
			<div>{icon}</div>

			<span>{label}</span>
		</Link>
	);
}

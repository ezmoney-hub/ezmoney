"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "../ui/skeleton";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ComputerIcon,
	Moon02Icon,
	Sun02Icon,
} from "@hugeicons/core-free-icons";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const cycleTheme = () => {
		if (theme === "light") setTheme("dark");
		else if (theme === "dark") setTheme("system");
		else setTheme("light");
	};

	if (!mounted) {
		return <Skeleton className="w-8 h-8 ml-auto" />;
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={cycleTheme}
			aria-label="Toggle theme"
		>
			{theme === "light" ? (
				<HugeiconsIcon icon={Sun02Icon} />
			) : theme === "dark" ? (
				<HugeiconsIcon icon={Moon02Icon} />
			) : (
				<HugeiconsIcon icon={ComputerIcon} />
			)}
		</Button>
	);
}

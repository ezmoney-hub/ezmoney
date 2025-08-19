"use client";
import { Power } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useToggleCustomerStatus } from "@/hooks/customers/use-toggle-customer-status";
import type { GetCustomers200 } from "@/http/generated";

interface ToggleCustomerStatusDialogProps {
	customer: GetCustomers200["data"]["customers"][number];
	children?: ReactNode;
}

export function ToggleCustomerStatusDialog({
	customer,
	children,
}: ToggleCustomerStatusDialogProps) {
	const {
		toggleCustomerStatusFn,
		isLoadingToggleCustomerStatus,
		isToggleCustomerStatusDialogOpen,
		setIsToggleCustomerStatusDialogOpen,
	} = useToggleCustomerStatus();

	const actionText = customer.isActive ? "desativar" : "ativar";

	return (
		<Dialog
			open={isToggleCustomerStatusDialogOpen}
			onOpenChange={setIsToggleCustomerStatusDialogOpen}
		>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						{customer.isActive ? "Desativar" : "Ativar"} cliente
					</DialogTitle>

					<DialogDescription>
						Você tem certeza que deseja {actionText} o cliente{" "}
						<strong>{customer.name}</strong>?
					</DialogDescription>
				</DialogHeader>

				<div className="w-full flex items-center justify-center py-8">
					<div
						className={`w-20 h-20 rounded-full ${
							customer.isActive
								? "bg-orange-50 dark:bg-orange-900/20"
								: "bg-green-50 dark:bg-green-900/20"
						} flex items-center justify-center`}
					>
						<Power
							className={`w-10 h-10 ${
								customer.isActive
									? "text-red-500 dark:text-red-400"
									: "text-green-500 dark:text-green-400"
							}`}
						/>
					</div>
				</div>

				<DialogFooter className="grid grid-cols-2 gap-4">
					<DialogClose asChild>
						<Button variant="outline" className="outline-none">
							Cancelar
						</Button>
					</DialogClose>

					<Button
						type="submit"
						variant={customer.isActive ? "destructive" : "default"}
						isLoading={isLoadingToggleCustomerStatus}
						onClick={() => {
							toggleCustomerStatusFn({ id: customer.id });
						}}
					>
						Confirmar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

"use client";
import { Ellipsis, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { GetCustomers200 } from "@/http/generated";
import { EditCustomerSheet } from "../modals/edit-customer-sheet";

interface CustomerActionsProps {
	customer: GetCustomers200["data"]["customers"][number];
}

export function CustomerActions({ customer }: CustomerActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Eye className="mr-2 h-4 w-4" />
						Visualizar
					</DropdownMenuItem>

					<EditCustomerSheet customer={customer} />
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

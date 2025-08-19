import { Switch } from "@/components/ui/switch";
import type { GetCustomers200 } from "@/http/generated";
import { ToggleCustomerStatusDialog } from "../modals/toggle-customer-status-dialog";

interface CustomerStatusProps {
	isActive: boolean;
	customer: GetCustomers200["data"]["customers"][number];
}

export function CustomerStatus({ isActive, customer }: CustomerStatusProps) {
	return (
		<ToggleCustomerStatusDialog customer={customer}>
			<Switch checked={isActive} />
		</ToggleCustomerStatusDialog>
	);
}

import { InvoicesSummary } from "@/components/invoices/summary/summary";
import { InvoicesTableContainer } from "@/components/invoices/table/container";

export default function Faturas() {
	return (
		<div className="w-full space-y-6">
			<InvoicesSummary />

			<InvoicesTableContainer />
		</div>
	);
}

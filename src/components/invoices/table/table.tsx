import { flexRender, type Table as TableType } from "@tanstack/react-table";
import { TableEmpty } from "@/components/table/table-empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Invoice } from "@/hooks/invoices/use-get-invoices";
import { InvoicesTableColumns } from "./columns";
import { InvoicesTableSkeleton } from "./skeleton";

interface InvoicesTableProps {
	table: TableType<Invoice>;
	isLoading: boolean;
	data: Invoice[];
	widths?: string[];
}

export function InvoicesTable({
	table,
	isLoading,
	data,
	widths = [
		"min-w-[270px]",
		"min-w-[150px]",
		"min-w-[100px]",
		"min-w-[100px]",
		"min-w-[150px]",
		"min-w-[120px]",
		"min-w-[120px]",
		"min-w-[50px]",
	],
}: InvoicesTableProps) {
	return (
		<Table>
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							return (
								<TableHead
									key={header.id}
									className={`h-5 ${widths[header.index] || "w-full"}`}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</TableHead>
							);
						})}
					</TableRow>
				))}
			</TableHeader>

			<TableBody>
				{isLoading && <InvoicesTableSkeleton />}

				{!isLoading &&
					data &&
					data.length > 0 &&
					table.getRowModel().rows?.length > 0 &&
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							data-state={row.getIsSelected() && "selected"}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}

				{!isLoading &&
					(!data ||
						data.length === 0 ||
						table.getRowModel().rows?.length === 0) && (
						<TableRow>
							<TableCell
								colSpan={InvoicesTableColumns.length}
								className="h-24 p-4"
							>
								<TableEmpty
									message="Você não possui faturas"
									description="Adicione uma fatura para começar."
								/>
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}

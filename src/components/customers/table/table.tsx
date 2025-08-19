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
import type { GetCustomers200 } from "@/http/generated";
import { CustomersTableColumns } from "./columns";
import { CustomerTableSkeleton } from "./skeleton";

interface CustomerTableProps {
	table: TableType<GetCustomers200["data"]["customers"][number]>;
	isLoading: boolean;
	data: GetCustomers200["data"]["customers"];
	widths?: string[];
}

export function CustomerTable({
	table,
	isLoading,
	data,
	widths = [
		"min-w-[200px]",
		"min-w-[200px]",
		"min-w-[150px]",
		"min-w-[200px]",
		"min-w-[120px]",
		"min-w-[150px]",
		"min-w-[50px]",
	],
}: CustomerTableProps) {
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
				{isLoading && <CustomerTableSkeleton />}

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
								colSpan={CustomersTableColumns.length}
								className="h-24 text-center"
							>
								<TableEmpty
									message="Você não possui clientes"
									description="Cadastre um cliente para começar."
								/>
							</TableCell>
						</TableRow>
					)}
			</TableBody>
		</Table>
	);
}

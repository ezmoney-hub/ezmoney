"use client";
import {
	type ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from "@tanstack/react-table";
import { Filter } from "lucide-react";
import React from "react";
import { TablePagination } from "@/components/table/table-pagination";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { useGetCustomers } from "@/hooks/customers/use-get-customers";
import { CreateCustomerSheet } from "../modals/create-customer-sheet";
import { CustomersTableColumns } from "./columns";
import { CustomerTable } from "./table";

interface CustomersTableContainerProps {
	dashboard?: boolean;
}

export function CustomersTableContainer({
	dashboard = false,
}: CustomersTableContainerProps) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [pagination, setPagination] = React.useState({
		pageIndex: 0,
		pageSize: 10,
	});

	const { customers, isLoadingGetCustomers } = useGetCustomers();

	const table = useReactTable({
		data: customers,
		columns: CustomersTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		onPaginationChange: setPagination,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination,
		},
	});

	return (
		<div className="w-full space-y-4 rounded-lg">
			{dashboard && (
				<div>
					<h1 className="text-2xl font-semibold">Clientes</h1>
					<span className="text-sm text-muted-foreground">
						Visualize os clientes cadastrados.
					</span>
				</div>
			)}

			{!dashboard && (
				<div className="flex items-center gap-4">
					<SearchInput
						className="!w-[400px]"
						placeholder="Pesquisar clientes..."
						value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
						onChange={(event) =>
							table.getColumn("name")?.setFilterValue(event.target.value)
						}
					/>

					<Button size="icon" variant="outline">
						<Filter />
					</Button>

					<CreateCustomerSheet />
				</div>
			)}

			<CustomerTable
				table={table}
				isLoading={isLoadingGetCustomers}
				data={customers}
			/>

			<TablePagination table={table} pagination={pagination} />
		</div>
	);
}

import type { ColumnDef } from "@tanstack/react-table";
import { TableSort } from "@/components/table/table-sort";
import type { GetCustomers200 } from "@/http/generated";
import { formatFromNow } from "@/utils/form-from-now";
import { CustomerActions } from "./menu";
import { CustomerStatus } from "./status";

type CustomerColumnDef = ColumnDef<
	GetCustomers200["data"]["customers"][number]
>;

export const CustomersTableColumns: CustomerColumnDef[] = [
	{
		accessorKey: "name",
		header: ({ column }) => <TableSort column={column}>Nome</TableSort>,
		cell: ({ row }) => (
			<div className="font-medium">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "email",
		header: ({ column }) => <TableSort column={column}>Email</TableSort>,
		cell: ({ row }) => (
			<div className="text-muted-foreground">
				{row.getValue("email") || "-"}
			</div>
		),
	},
	{
		accessorKey: "phone",
		header: ({ column }) => <TableSort column={column}>Telefone</TableSort>,
		cell: ({ row }) => <div>{row.getValue("phone") || "-"}</div>,
	},
	{
		accessorKey: "description",
		header: ({ column }) => <TableSort column={column}>Descrição</TableSort>,
		cell: ({ row }) => {
			const description = row.getValue("description") as string | null;
			return <div className="text-muted-foreground">{description || "-"}</div>;
		},
	},
	{
		accessorKey: "isActive",
		header: ({ column }) => <TableSort column={column}>Status</TableSort>,
		cell: ({ row }) => (
			<CustomerStatus
				isActive={row.getValue("isActive")}
				customer={row.original}
			/>
		),
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => <TableSort column={column}>Criado em</TableSort>,
		cell: ({ row }) => {
			return (
				<div className="flex flex-col gap-1">
					<span>{formatFromNow(row.getValue("createdAt")).date}</span>
					<span className="text-xs text-zinc-500">
						{formatFromNow(row.getValue("createdAt")).due}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: ({ column }) => <TableSort column={column}>Ações</TableSort>,
		cell: ({ row }) => <CustomerActions customer={row.original} />,
	},
];

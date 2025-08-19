import type { Metadata } from "next";
import { CustomersTableContainer } from "@/components/customers/table/container";

export const metadata: Metadata = {
	title: "Clientes | EZMoney",
	description: "Gerencie seus clientes de forma fácil e eficiente",
};

export default function Customers() {
	return <CustomersTableContainer />;
}

import type { Metadata } from "next";
import { CategoriesTableContainer } from "@/components/categories/table/container";

export const metadata: Metadata = {
	title: "Categorias | EZMoney",
	description: "Gerencie suas categorias de forma fácil e eficiente",
};

export default function Categorias() {
	return <CategoriesTableContainer />;
}

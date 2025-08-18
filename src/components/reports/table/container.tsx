"use client";
import { Filter, Plus } from "lucide-react";
import { TableEmpty } from "@/components/table/table-empty";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";

export function ReportsTableContainer() {
	return (
		<div className="w-full space-y-4 rounded-lg">
			<div className="flex items-center gap-4">
				<SearchInput
					className="!w-[400px]"
					placeholder="Pesquisar relatórios..."
					value={""}
					onChange={() => {}}
				/>

				<Button size="icon" variant="outline">
					<Filter />
				</Button>

				<Button variant="outline" className="ml-auto" disabled>
					<Plus />
					Novo Relatório
				</Button>
			</div>

			<TableEmpty
				message="Você não possui relatórios"
				description="Crie um relatório para começar."
				className="mt-20"
			/>
		</div>
	);
}

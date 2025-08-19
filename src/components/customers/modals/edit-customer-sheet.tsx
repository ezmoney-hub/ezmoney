"use client";
import { SquarePen } from "lucide-react";
import { FormInput } from "@/components/form/form-input";
import { SubmitButton } from "@/components/form/form-submit-button";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Form } from "@/components/ui/form";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useUpdateCustomer } from "@/hooks/customers/use-update-customer";
import type { GetCustomers200 } from "@/http/generated";

interface EditCustomerSheetProps {
	customer: GetCustomers200["data"]["customers"][number];
}

export function EditCustomerSheet({ customer }: EditCustomerSheetProps) {
	const {
		form,
		isLoadingUpdateCustomer,
		isEditCustomerSheetOpen,
		setIsEditCustomerSheetOpen,
	} = useUpdateCustomer(customer);

	return (
		<Sheet
			open={isEditCustomerSheetOpen}
			onOpenChange={setIsEditCustomerSheetOpen}
		>
			<SheetTrigger asChild>
				<DropdownMenuItem
					onSelect={(e) => {
						e.preventDefault();
					}}
				>
					<SquarePen className="mr-2 h-4 w-4" />
					Editar
				</DropdownMenuItem>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Editar Cliente</SheetTitle>
					<SheetDescription>
						Atualize as informações do cliente {customer.name}.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1 flex flex-col"
					>
						<FormInput
							form={form}
							entity="name"
							label="Nome"
							placeholder="Ex: João Silva"
						/>

						<FormInput
							form={form}
							entity="email"
							label="Email"
							placeholder="Ex: joao@exemplo.com"
							type="email"
						/>

						<FormInput
							form={form}
							entity="phone"
							label="Telefone"
							placeholder="Ex: (11) 99999-9999"
						/>

						<FormTextarea
							form={form}
							entity="description"
							label="Descrição"
							placeholder="Ex: Cliente recorrente, serviços de consultoria"
						/>

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<SubmitButton isLoading={isLoadingUpdateCustomer}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}

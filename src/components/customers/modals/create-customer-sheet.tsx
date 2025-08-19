"use client";
import { Plus } from "lucide-react";
import { FormInput } from "@/components/form/form-input";
import { FormPhoneInput } from "@/components/form/form-phone-input";
import { SubmitButton } from "@/components/form/form-submit-button";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
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
import { useCreateCustomer } from "@/hooks/customers/use-create-customer";

export function CreateCustomerSheet() {
	const {
		form,
		isLoadingCreateCustomer,
		isCreateCustomerSheetOpen,
		setIsCreateCustomerSheetOpen,
	} = useCreateCustomer();

	return (
		<Sheet
			open={isCreateCustomerSheetOpen}
			onOpenChange={setIsCreateCustomerSheetOpen}
		>
			<SheetTrigger asChild>
				<Button variant="outline" className="ml-auto">
					<Plus />
					Novo Cliente
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Novo Cliente</SheetTitle>
					<SheetDescription>
						Cadastre um novo cliente para organizar sua carteira.
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
							placeholder="Ex: Matheus"
						/>

						<FormInput
							form={form}
							entity="email"
							label="Email"
							placeholder="Ex: matheus@exemplo.com"
							type="email"
						/>

						<FormPhoneInput
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

							<SubmitButton isLoading={isLoadingCreateCustomer}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}

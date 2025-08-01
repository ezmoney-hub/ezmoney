"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import type {
	Control,
	FieldValues,
	Path,
	UseFormReturn,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ComboboxProps<TFieldValues extends FieldValues> {
	options: { label: string; value: string }[];
	translatedEntity: string;
	placeholder?: string;
	emptyMessage?: string;
	entity: Path<TFieldValues>;
	form: UseFormReturn<TFieldValues>;
}

export function FormCombobox<TFieldValues extends FieldValues>({
	options,
	form,
	entity,
	translatedEntity,
	emptyMessage = "Nenhum item encontrado.",
	placeholder,
}: ComboboxProps<TFieldValues>) {
	const [open, setOpen] = useState(false);

	return (
		<FormField
			control={form.control as Control<TFieldValues, unknown>}
			name={entity}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>{translatedEntity}</FormLabel>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									aria-expanded={open}
									className={cn(
										"justify-between text-base md:text-sm",
										"!bg-card dark:!border-zinc-800/50 dark:focus-visible:!border-zinc-800",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value
										? options.find((option) => option.value === field.value)
												?.label
										: `Selecionar ${translatedEntity}`}
									<ChevronsUpDown className="opacity-50" size={16} />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="p-0">
							<Command>
								<CommandInput
									placeholder={
										placeholder ||
										`Pesquisar ${translatedEntity.toLocaleLowerCase()}...`
									}
									className="h-9"
								/>
								<CommandList>
									<CommandEmpty>{emptyMessage}</CommandEmpty>

									<CommandGroup>
										{options.map((option) => (
											<CommandItem
												value={option.label}
												key={option.value}
												onSelect={() => {
													field.onChange(option.value);
													setOpen(false);
												}}
											>
												{option.label}
												<Check
													className={cn(
														"ml-auto",
														option.value === field.value
															? "opacity-100"
															: "opacity-0"
													)}
												/>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

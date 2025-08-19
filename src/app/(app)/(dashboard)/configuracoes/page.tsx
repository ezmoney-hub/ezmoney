import type { Metadata } from "next";
import SettingsContainer from "@/components/settings/container";

export const metadata: Metadata = {
	title: "Configurações | EZMoney",
	description: "Gerencie suas configurações de forma fácil e eficiente",
};

export default function Settings() {
	return <SettingsContainer />;
}

import { useGetCustomers as useGetCustomersGenerated } from "@/http/generated/hooks/useGetCustomers";

export function useGetCustomers() {
	const {
		data: customers,
		isLoading,
		error,
		refetch,
	} = useGetCustomersGenerated();

	return {
		customers: customers?.data.customers || [],
		isLoadingGetCustomers: isLoading,
		error,
		refetch,
	};
}

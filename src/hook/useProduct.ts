import useSWR, { SWRConfiguration } from "swr";
import { productApi } from "../api/product";
import { Params } from "../types/base";

type UseProductProps = {
  params?: Partial<Params>;
  options?: SWRConfiguration;
};
export function useProduct({ params, options }: UseProductProps) {
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    ["/product", params],
    () => productApi.getAll(params!),
    {
      keepPreviousData: true,
      ...options,
    }
  );

  return {
    data,
    error,
    isValidating,
    mutate,
    isLoading,
  };
}

export function useSearchProduct({ params, options }: UseProductProps) {
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    ["/search-product", params],
    () => productApi.getBySearchValue(params!),
    {
      keepPreviousData: true,
      ...options,
    }
  );

  return {
    data,
    error,
    isValidating,
    mutate,
    isLoading,
  };
}

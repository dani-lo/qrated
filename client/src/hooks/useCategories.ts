/* eslint max-params: ["error", 4] */

import { GqlCacheKeys } from "../queries"
import { GRAPHQL_ENDPOINT } from '@/src/config'

import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { gqlClient } from "@/src/utils/graphqlClient"
import { CREATE_CATEGORY, READ_CATEGORIES } from "../queries/categoryQueries"
import { CategoryApiData } from "../models/category"
import request from "graphql-request"
import { QueryFilterParams } from "../store/app"
import { useAtom } from "jotai"
import { toastAtom, toastWarning } from "../store/userAtoms"

interface CategoryInput {
    category_name: string, 
    user_id: number
    appId: number
}

export const useCategoriesWithArticlesCount = (
    appId: number, 
    dateFrom = '2000-01-01', 
    dateTo = '2030-12-31', 
    filterParams ?: Partial<QueryFilterParams>) => {
      
  const { 
      isLoading,
      isError,
      error,
      data,
      isFetching,
      // isPreviousData 
  } : UseQueryResult<{ categories: (CategoryApiData & { articles_count: number})[] }, unknown> = useQuery({

      queryKey: [GqlCacheKeys.categories, `${JSON.stringify(filterParams || {})}-${ dateFrom }-${ dateTo }`],
      queryFn: async () => {
          return await request(GRAPHQL_ENDPOINT, READ_CATEGORIES(appId, dateFrom, dateTo, filterParams))
      },
      keepPreviousData: true,
      suspense: true
  })

  return {
      isLoading,
      isError,
      error,
      data,
      isFetching,
      // isPreviousData
  }
}

export const useAddCategory = () => {

  const [, setToast] = useAtom(toastAtom)

  const client = useQueryClient()

  return useMutation({
      mutationFn: (input: CategoryInput) => {
        return gqlClient.request(
          CREATE_CATEGORY,
          {input}
        )
      },
      onSuccess: () => {
        client.invalidateQueries([GqlCacheKeys.categories])
      },
      onError: (err: any) : void => {
          
          const thrownError = err.response?.errors[0] || null

          toastWarning(setToast, thrownError?.message ? thrownError.message : 'An error occurred')
      }
  })
}


import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { gqlClient } from "../utils/graphqlClient";

import { GRAPHQL_ENDPOINT, READ_ARTICLES, GqlCacheKeys } from '@/src/queries'
import { request } from 'graphql-request'
import { ArticleAPiData } from "../models/article";
import { dateToPostgresDateString } from "../helpers/date";
import { ASSIGN_ARTICLE_EXTRAS, ArticlesSortby, BOOKMARK_ARTICLE, CREATE_ARTICLE, DELETE_ARTICLE } from "../queries/articleQueries";
import { FetchParams, QueryFilterParams } from "../store/app";

import { UpdateBoolInput } from ".";

interface ArticleApiDataResult {
    recordsCount: number;
    articles: ArticleAPiData[];
}

interface ArticleInput {
    article_id?: number;
    article_title: string;
    article_link: string;
    article_description: string; 
    app_id: number; 
}

export const usePaginatedArticles = (
        appId: number,
        params: FetchParams<ArticlesSortby>, 
        filters: Partial<QueryFilterParams>,
        cacheKey: string
        // eslint-disable-next-line max-params 
    ) => {

    const {
        offset,
        limit,
        sortBy,
        sortDir,
        dateFrom,
        dateTo
    } = params 
    
    const fromStr = dateToPostgresDateString(dateFrom)
    const toStr = dateToPostgresDateString(dateTo)

    const { 
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData 
    } : UseQueryResult<{ paginatedArticles:ArticleApiDataResult }, unknown> = useQuery({

        queryKey: [GqlCacheKeys.paginatedArticles, cacheKey],
        queryFn: async () => {
            return await request(
                GRAPHQL_ENDPOINT, 
                READ_ARTICLES(appId, offset, limit, sortBy, sortDir, fromStr, toStr, filters)
            )
        },
        keepPreviousData: true
    })

    return {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData
    }
} 

export const useBookmarkArticle = () => {
    
    const client = useQueryClient()
  
    return useMutation({ 
        mutationFn: (input: UpdateBoolInput) => {
            return gqlClient.request(
                BOOKMARK_ARTICLE,
                {input }
            )
        },
        onSuccess: () => {
            client.invalidateQueries([GqlCacheKeys.paginatedArticles])
        },
      })
}

export const useDeleteArticle = () => {
    const client = useQueryClient()
  
    return useMutation({
        mutationFn: (input: UpdateBoolInput) => {
            return gqlClient.request(
                DELETE_ARTICLE,
                { input }
            )
        },
        onSuccess: () => {
            client.invalidateQueries([GqlCacheKeys.paginatedArticles])
        },
      })
}

export const useAddArticle = () => {
    const client = useQueryClient()
  
    return useMutation({
        mutationFn: (input: ArticleInput) => {
            return gqlClient.request(
                CREATE_ARTICLE,
                { input }
            )
        },
        onSuccess: () => {
            client.invalidateQueries([GqlCacheKeys.paginatedArticles])
        },
      })
}

export const useArticlesDomains = () => {
    const client = useQueryClient()
  
    return useMutation({
        mutationFn: (input: ArticleInput) => {
            return gqlClient.request(
                CREATE_ARTICLE,
                { input }
            )
        },
        onSuccess: () => {
            client.invalidateQueries([GqlCacheKeys.paginatedArticles])
        },
      })
}

export const useArticleExtras = () => {
    const client = useQueryClient()
  
    return useMutation({ 
        mutationFn: (input: { article_id: number, user_id: number, watchlist_id: number | null, category_id: number | null }) => {
            return gqlClient.request(
                ASSIGN_ARTICLE_EXTRAS,
                { input }
            )
        },
        onSuccess: () => {
            client.invalidateQueries([GqlCacheKeys.paginatedArticles, GqlCacheKeys.watchilsts, GqlCacheKeys.categories])
        },
      })
}

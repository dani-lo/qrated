import { useContext, useState } from "react"

import { useCategoriesWithArticlesCount } from "@/src/hooks/useCategories"

import { CheckListComponent } from "@/components/widgets/selectablesList"

import { ApiParamsContext } from "@/context/apiParams.context"
import { useAtom } from "jotai"
import { dateToPostgresDateString } from "@/src/helpers/date"
import { getAppStaticSettings } from "@/src/store/static"

export const CategoryFilterSelectorComponent = () => {

    const ctx = useContext(ApiParamsContext)
    
    const [protectedFilters, setProtectedFilters] = useAtom(ctx?.filterParams?.articles.protect)
    const [publicFilters] = useAtom(ctx?.filterParams?.articles.pub)
    const [fetchParams]  = useAtom(ctx.queryParams.articles)

    const dateFrom = dateToPostgresDateString(fetchParams.dateFrom)
    const dateTo = dateToPostgresDateString(fetchParams.dateTo)

    const appId = getAppStaticSettings().appId

    const {
        data: rawData
    } = useCategoriesWithArticlesCount(appId, dateFrom, dateTo, publicFilters)

    const [limitopts] = useState(false)

    const data = rawData || { categories: []}
    
    const categoriesOptions = data.categories.map(t => {

        return {
            label:t.category_name,
            value: Number(t.category_id),
            payoff: ``
        }
    }).filter(t => {
        if (!limitopts) {
            return true
        }
        return protectedFilters.categories.includes(t.value)
    })

    const selected = protectedFilters.categories ? [...protectedFilters.categories] : []

    return <div>
        <CheckListComponent 
            selected={ selected }
            items={ categoriesOptions }
            onSelect={ (val: number, selected: boolean) => {

                const newCategory = protectedFilters.categories ? [...protectedFilters.categories] : []

                if (selected) {
                    
                    if (!newCategory.includes(val)) {
                        newCategory.push(val)

                        setProtectedFilters({ ...protectedFilters, categories : newCategory })
                    }
                    
                } else {
                    setProtectedFilters({ ...protectedFilters, categories: newCategory.filter(v => v !== val) })
                }
                
            }}
        />
    </div>
}
// import { useState } from "react"
// import Dropdown from 'react-dropdown'
import { CSSTransition } from 'react-transition-group'

import { StyledContainedBar } from "@/src/styles/main.styled"
import { CloseIconButtonComponent } from "../iconButtons/closeIconButton"
import { cnParagraph, cnSectionSmallTitle, cnSectionTitle } from "@/src/styles/classnames.tailwind"
import { IconTitleComponent } from "../iconed"
import { faClone } from "@fortawesome/free-solid-svg-icons"
// import { useCategorysWIthItemsCount } from "@/src/hooks/useCategory"
// import { ItemCategorys } from "../itemCategorys"
import { CategoryApiData } from "@/src/models/category"
import { getAppStaticSettings } from "@/src/store/static"
import { stripHtml } from "@/src/helpers/strip"
import { useEffect, useRef, useState } from "react"
import { later } from '@/src/helpers/later'
// import Link from "next/link"
// import { useUncategoryAuthor, useCategoryAuthor } from "@/src/hooks/useAuthors"

export const CategoryDetailModalComponent = ({
        category, 
        // userId,
        onClose 
    }: { 
        category: CategoryApiData; 
        onClose: () => void; 
        // userId: number;
    }) => {
        
    const modRef = useRef(null)
        
    const [act, setAct] = useState(false)

    useEffect(() => {

        const to = setTimeout(() => setAct(true), 200)

        return () => clearTimeout(to)
    }, [])

    // const { data: categorysData } = useCategorysWIthItemsCount()

    // const [wid, setWid] = useState<string | undefined>(undefined)
    
    // const categoryAuthorMuotation = useCategoryAuthor()
    // const uncategoryAuthorMutation = useUncategoryAuthor()

    // const disabledCategory = (categoryID: number) => category.categorys?.some(w => w.category_id === Number(categoryID))

    // const categoryOpts = categorysData?.categorys ? categorysData.categorys.map(w => {
    //     return { label: w.category_name, value: `${ w.category_id }`, className: disabledCategory(w.category_id) ? 'disabled' : '' }
    // }) : []

    // const onSetCategory = () => {

    //     categoryAuthorMuotation.mutate({
    //         category_id: Number(category.category_id),
    //         user_id: Number(userId),
    //         category_id: wid ? Number(wid) : 0,
    //     })
    // }

    // const onDeleteCategory = (categoryId: number) => {
        
    //     uncategoryAuthorMutation.mutate({
    //         category_id: Number(category.category_id),
    //         user_id: Number(userId),
    //         category_id: categoryId,
    //     })
    // }
    
    // if (category === null) {
    //     return null
    // }
    const {bg } = getAppStaticSettings()

    return <CSSTransition
            in={ act }
            nodeRef={modRef}
            timeout={200}
            classNames="widget"
            unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
        >
            <div className="overlay-full p-4 bg-white" style={{ overflowY: 'scroll' }} ref={ modRef }>
            <div className="overlay-full-content rounded-lg shadow">
                <StyledContainedBar>
                    <CloseIconButtonComponent onClose={ () => { 
                        setAct(false) 
                        later(300).then(onClose)
                    }} 
                    />
                </StyledContainedBar>
                <IconTitleComponent
                    text={ category?.category_name || ''}
                    icon={ faClone }
                    bgColor={ bg }
                />
                <div className="flex  px-6">
                    <div  style={{ overflowY: 'scroll', height: 'calc(100% - 200px)' }}>
                    <h3 className={ cnSectionTitle }>Articles</h3>
                    {
                        category?.articles?.length ? 
                            
                            category.articles.map(a => {
                                return <div  key={ a.article_id }>
                                
                                <h2 className={ cnSectionSmallTitle }><a href={ a.article_link} target="_blank">{ a.article_title }</a></h2>
                                <p className={ cnParagraph }>{ stripHtml(a.article_description) }</p>
                                </div>
                            })
                                
                            : 
                            <p className={ cnParagraph }>No articles found</p>
                    }
                    </div>
                </div>
            </div>
        </div>
    </CSSTransition>
}

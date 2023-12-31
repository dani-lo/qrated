// import { useState } from "react"
// import Dropdown from 'react-dropdown'

import { StyledContainedBar } from "@/src/styles/main.styled"
import { CloseIconButtonComponent } from "../iconButtons/closeIconButton"
import { cnParagraph, cnSectionSmallTitle, cnSectionTitle } from "@/src/styles/classnames.tailwind"
import { IconTitleComponent } from "../iconed"
import { faBinoculars } from "@fortawesome/free-solid-svg-icons"
// import { useWatchlistsWIthItemsCount } from "@/src/hooks/useWatchlist"
// import { ItemWatchlists } from "../itemWatchlists"
import { WatchlistApiData } from "@/src/models/watchlist"
import Link from "next/link"
import { PaginationComponent } from "../pagination"
import { PaginationCtrl } from "@/src/utils/paginationCtrl"
import { useState } from "react"
// import { useState } from "react"
// import { useUnwatchlistAuthor, useWatchlistAuthor } from "@/src/hooks/useAuthors"

const articlesPerPage = 2
const authorsPerPage = 8
const tagsPerPage = 8

const contStyle = {
    padding: '1rem',
    background: '#f2f2f2',
    borderRadius: '0.2rem',
    marginBottom: '0.5rem'
}

export const WatchlistDetailModalComponent = ({
        watchlist, 
        // userId,
        onClose 
    }: { 
        watchlist: WatchlistApiData; 
        onClose: () => void; 
        // userId: number;
    }) => {
    
    const [articlesPage, setArticlesPage] = useState(0)
    const [authorsPage, setAuthorsPage] = useState(0)
    const [tagsPage, setTagsPage] = useState(0)

    const paginationCtrlArticles = new PaginationCtrl(
        watchlist?.articles?.length ? watchlist.articles.length : 0, 
        articlesPage * articlesPerPage, 
        articlesPerPage
    )

    const paginationCtrlAuthors = new PaginationCtrl(
        watchlist?.authors?.length ? watchlist.authors.length : 0, 
        authorsPage * authorsPerPage, 
        authorsPerPage
    )

    const paginationCtrlTags = new PaginationCtrl(
        watchlist?.tags?.length ? watchlist.tags.length : 0, 
        tagsPage * tagsPerPage, 
        tagsPerPage
    )

    return <div className="overlay-full p-4 bg-white" style={{ overflowY: 'scroll' }}>
        <div className="overlay-full-content rounded-lg shadow article-detail">
            <StyledContainedBar>
                <CloseIconButtonComponent onClose={ onClose } />
            </StyledContainedBar>
            <IconTitleComponent
                text={ watchlist.watchlist_name }
                icon={ faBinoculars }
            />
            <div style={{ height: '100%' }}>
                {
                    watchlist.articles?.length ? 
                        <div style={ contStyle }>
                        <h3 className={ cnSectionTitle }>Articles</h3>
                        <div className="noflex">
                            {
                                watchlist.articles.map((a, i) => {
                                    return  paginationCtrlArticles.pageItemInRange(i) ? <div  key={ a.article_id }>
                                            <h2 className={ cnSectionSmallTitle }><a href={ a.article_link} target="_blank">{ a.article_title.substring(0, 20) }</a></h2>
                                            <p className={ cnParagraph }>{ a.article_description }</p>
                                        </div> :
                                        null
                                })
                            }
                        </div>
                        { 
                            (watchlist.articles?.length || 0) > articlesPerPage ?<PaginationComponent
                                paginationCtrl={  paginationCtrlArticles }
                                onSelectPage={ 
                                    (nextOffset: number) => setArticlesPage(Math.floor(nextOffset / articlesPerPage))
                                }
                            />: null
                        }
                        </div> : null
                }
                {
                    watchlist.authors?.length ? 
                    <div style={ contStyle }>
                        <h3 className={ cnSectionTitle }>Authors</h3>
                            <div className="flex">
                                {
                                    watchlist.authors.map((a, i) => {
                                        return  paginationCtrlAuthors.pageItemInRange(i) ?  <div  key={ a.author_id } className="mr-6">
                                            <h2 className={ cnSectionSmallTitle }><Link href={ `/authors?authorId=${ a.author_id }` } target="_blank">{ a.author_name.substring(0, 20) }</Link></h2>
                                            <p>{ a.articles?.length || 0 } articles</p>
                                        </div> : null
                                    })
                                }
                            </div>
                            { 
                                (watchlist.authors?.length || 0) > authorsPerPage ?<PaginationComponent
                                    paginationCtrl={  paginationCtrlAuthors }
                                    onSelectPage={ 
                                        (nextOffset: number) => setAuthorsPage(Math.floor(nextOffset / authorsPerPage))
                                    }
                                />: null
                            }
                            </div>: null
                }
                {
                    watchlist.tags?.length ? 
                    <div style={ contStyle }>
                        <h3 className={ cnSectionTitle }>Tags</h3>
                            <div  className="flex">
                                    {
                                        watchlist.tags.map((a, i) => {
                                            return  paginationCtrlTags.pageItemInRange(i) ? <div  key={ a.tag_id }  className="mr-6">
                                                <h2 className={ cnSectionSmallTitle }><Link href={ `/tags?tagId=${ a.tag_id }` } target="_blank">{ a.tag_name.substring(0, 20) }</Link></h2>
                                                <p>{ a.articles?.length || 0 } articles</p>
                                            </div> : null
                                        })
                                    }
                            </div>
                            { 
                                    (watchlist.tags?.length || 0) > tagsPerPage ?<PaginationComponent
                                        paginationCtrl={  paginationCtrlTags }
                                        onSelectPage={ 
                                            (nextOffset: number) => {
                                                setTagsPage(Math.floor(nextOffset / tagsPerPage))
                                            }
                                        }
                                    />: null
                                
                            }
                        </div> : 
                        null
                }
            </div>
        </div>
    </div>
}

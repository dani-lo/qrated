
import { useState } from "react"
import Dropdown from 'react-dropdown'

import { StyledContainedBar } from "@/src/styles/main.styled"
import { CloseIconButtonComponent } from "../iconButtons/closeIconButton"
import { cnButton, cnParagraph, cnSectionSmallTitle, cnSectionSubTitle, utils } from "@/src/styles/classnames.tailwind"
import { TagApiData } from "@/src/models/tag"
import { IconTitleComponent } from "../iconed"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { useWatchlistsWIthItemsCount } from "@/src/hooks/useWatchlist"
import { useUnwatchlistTag, useWatchlistTag } from "@/src/hooks/useTags"
import { ItemWatchlists } from "../itemWatchlists"
import { getAppStaticSettings } from "@/src/store/static"
import { PaginationCtrl } from "@/src/utils/paginationCtrl"
import { PaginationComponent } from "../pagination"

const ARTICLE_PER_PAGE = 4

export const TagDetailModalComponent = ({
        tag, 
        userId,
        onClose 
    }: { 
        tag: TagApiData | undefined; 
        onClose: () => void; 
        userId: number;
    }) => {
    
    const appId = getAppStaticSettings().appId
    const { data: watchlistsData } = useWatchlistsWIthItemsCount(appId)

    const [wid, setWid] = useState<string | undefined>(undefined)
    
    const watchlistTagMutation = useWatchlistTag()
    const unwatchlistTagMutation = useUnwatchlistTag()

    const [articlesOffset, setArticlesOffset] = useState(0)
    
    const numArticles = tag?.articles?.length || 0

    const paginator = numArticles > ARTICLE_PER_PAGE ? new PaginationCtrl(
        numArticles,
        articlesOffset,
        ARTICLE_PER_PAGE
    ) : null

    if (!tag) {
        return null
    }

    const disabledWatchlist = (watchlistID: number) => tag.watchlists?.some(w => w.watchlist_id === Number(watchlistID))

    const watchlistOpts = watchlistsData?.watchlists ? watchlistsData.watchlists.map(w => {
        return { label: w.watchlist_name, value: `${ w.watchlist_id }`, className: disabledWatchlist(w.watchlist_id) ? 'disabled' : '' }
    }) : []

    
    const onSetWatchlist = () => {

        watchlistTagMutation.mutate({
            tag_id: Number(tag.tag_id),
            user_id: Number(userId),
            watchlist_id: wid ? Number(wid) : 0,
        })
    }

    const onDeleteWatchlist = (watchlistId: number) => {

        unwatchlistTagMutation.mutate({
            tag_id: Number(tag.tag_id),
            user_id: Number(userId),
            watchlist_id: watchlistId,
        })
    }

    return <div className="overlay-full p-4 bg-white" style={{ overflowY: 'scroll' }}>
        <div className="overlay-full-content rounded-lg shadow">
            <StyledContainedBar>
                <CloseIconButtonComponent onClose={ onClose } />
            </StyledContainedBar>
            <IconTitleComponent
                text={ tag.tag_name }
                icon={ faTags }
            />
            <h4 className={ cnSectionSubTitle}>Added by: { tag.tag_origin === 'user' ? `User` : 'System' }</h4> 
            <div className="flex">
                <div style={{ width: '400px' }}>
                    <p className={ cnParagraph }>Add to Watchlist</p>
                    <Dropdown 
                        options={ watchlistOpts } 
                        onChange={(opt) =>  setWid(`${ opt.value }`) } 
                        value={watchlistOpts.find(wopt => wopt.value === wid) } 
                        placeholder="Select a watchlist" 
                    />
                    <div className="my-4 flex">
                        <div>
                            <button 
                                className={ !wid ? utils.disabled(cnButton) :  cnButton }
                                onClick={ () => setWid(undefined) }
                            >Discard</button>
                        </div>
                        <div>
                            <button 
                                className={ !wid ? utils.disabled(cnButton) :  cnButton }
                                onClick={ onSetWatchlist }
                            >Save</button>
                        </div>
                    </div>
                </div>
                { 
                    tag.watchlists?.length ? <ItemWatchlists
                        watchlists={ tag.watchlists || [] }
                        title="Member of watchlists"
                        onDeleteWatchlist={ onDeleteWatchlist }
                    /> : null
                }
            </div>
            {
                tag.articles ? 
                    <div className="my-8">
                        {
                            tag.articles.map((a, i) => {

                                if (paginator && !paginator.pageItemInRange(i)) {
                                    return null
                                }

                                return <div  key={ a.article_id }>
                                    <h2 className={ cnSectionSmallTitle }>
                                        <a href={ a.article_link} target="_blank">{ a.article_title }</a>
                                    </h2>
                                    <p className={ cnParagraph }>{ a.article_description }</p>
                                </div>
                            })
                        }
                    </div> : null
            }
            {
            paginator  ? 
                <PaginationComponent 
                    paginationCtrl={ paginator } 
                    onSelectPage={ (nextOffset) => { 
                        setArticlesOffset(nextOffset)
                    }} 
                /> 
                : null
            }
            </div>
    </div>
}

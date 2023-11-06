import { useState } from "react"
import Dropdown from 'react-dropdown'

import { StyledContainedBar } from "@/src/styles/main.styled"
import { CloseIconButtonComponent } from "../iconButtons/closeIconButton"
import { cnButton, cnParagraph, cnSectionSmallTitle, utils } from "@/src/styles/classnames.tailwind"
import { IconTitleComponent } from "../iconed"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { useWatchlistsWIthItemsCount } from "@/src/hooks/useWatchlist"
import { ItemWatchlists } from "../itemWatchlists"
import { AuthorApiData } from "@/src/models/author"
import { useUnwatchlistAuthor, useWatchlistAuthor } from "@/src/hooks/useAuthors"

export const AuthorDetailModalComponent = ({
        author, 
        userId,
        onClose 
    }: { 
        author: AuthorApiData; 
        onClose: () => void; 
        userId: number;
    }) => {
    
    const { data: watchlistsData } = useWatchlistsWIthItemsCount()

    const [wid, setWid] = useState<string | undefined>(undefined)
    
    const watchlistAuthorMuotation = useWatchlistAuthor()
    const unwatchlistAuthorMutation = useUnwatchlistAuthor()

    const disabledWatchlist = (watchlistID: number) => author.watchlists?.some(w => w.watchlist_id === Number(watchlistID))

    const watchlistOpts = watchlistsData?.watchlists ? watchlistsData.watchlists.map(w => {
        return { label: w.watchlist_name, value: `${ w.watchlist_id }`, className: disabledWatchlist(w.watchlist_id) ? 'disabled' : '' }
    }) : []

    const onSetWatchlist = () => {

        watchlistAuthorMuotation.mutate({
            author_id: Number(author.author_id),
            user_id: Number(userId),
            watchlist_id: wid ? Number(wid) : 0,
        })
    }

    const onDeleteWatchlist = (watchlistId: number) => {
        
        unwatchlistAuthorMutation.mutate({
            author_id: Number(author.author_id),
            user_id: Number(userId),
            watchlist_id: watchlistId,
        })
    }

    return <div className="overlay-full p-4 bg-white" style={{ overflowY: 'scroll' }}>
        <div className="overlay-full-content rounded-lg shadow article-detail">
            <StyledContainedBar>
                <CloseIconButtonComponent onClose={ onClose } />
            </StyledContainedBar>
            <IconTitleComponent
                text={ author.author_name }
                icon={ faTags }
            />
            { 
                author.watchlists?.length ? <ItemWatchlists
                    watchlists={ author.watchlists || [] }
                    title="Member of watchlists"
                    onDeleteWatchlist={ onDeleteWatchlist }
                /> : null
            }
            <div className="my-4" style={{ borderBottom: '1px dotted black' }}>
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
                author.articles ? 
                    <div style={{ height: '100%' }}>
                        <div  style={{ overflowY: 'scroll', height: 'calc(100% - 200px)' }}>
                        {
                            author.articles.map(a => {
                                return <div  key={ a.article_id }>
                                <h2 className={ cnSectionSmallTitle }><a href={ a.article_link} target="_blank">{ a.article_title }</a></h2>
                                <p className={ cnParagraph }>{ a.article_description }</p>
                                </div>
                            })
                        }
                        </div>
                    </div> : null
            }
            </div>
    </div>
}
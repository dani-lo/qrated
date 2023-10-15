import { FormEvent, useState } from "react"
 
import { CommentBaloonsComponent } from "@/components/comment/commentBaloons"
import { CloseIconButtonComponent } from "@/components/widgets/iconButtons/closeIconButton"

import { useAddComment } from "@/src/hooks/useComments"

import { ArticleBase } from "@/src/models/article"

import * as cnames from "@/src/styles/classnames.tailwind" 
import { StyledContainedBar } from "@/src/styles/main.styled"

export const ArticleCommentActionModalComponent = ({ article, onClose }: { article: ArticleBase, userId: number, onClose: () => void }) => {

    const [text, setText] = useState('')

    const addCommentMutation =  useAddComment()

    const handleSubmit = (e: FormEvent) => {
        
        e.preventDefault()

        addCommentMutation.mutate({
            comment_text: text,
            article_id: Number(article.article_id),
            user_id: 1
        })

        setText('')
    }

    const disabled = text === ''

    return <div className="overlay-filler p-4 bg-white" style={{ overflowY: 'scroll' }}>
        <StyledContainedBar>
            <CloseIconButtonComponent onClose={ onClose } />
        </StyledContainedBar>
        <h5 className={ cnames.cnSectionTitle +  ' mt-4 mb-4' }>{ article.article_title }</h5>
        <form method="post" onSubmit={handleSubmit}>
            <textarea
                name="postContent"
                value={ text }
                rows={4}
                cols={40}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-4">
                <button 
                    className={ disabled ? cnames.utils.disabled(cnames.cnButton) :  cnames.cnButton }
                >Save comment</button>
            </div>
        </form>
        <div className="mt-4">
            <CommentBaloonsComponent comments={ article.comments.reverse() } />
        </div>
    </div>
}


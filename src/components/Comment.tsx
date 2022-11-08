import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from './Avatar';
import { useState } from "react";

interface CommentProps {
    commentContent: string,
    onDeleteComment: (comment: string) => void;
} 


export function Comment({commentContent, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => { 
        onDeleteComment(commentContent);
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return(
        <div className = {styles.comment}>
            <Avatar src="https://www.github.com/berneves.png" />
            <div className = {styles.commentBox}>
                <div className = {styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bernardo Neves</strong>
                            <time title = "11 de maio 23:00" dateTime = "2022-05-11 08:13:20">
                                Cerca de 1hr atrás
                            </time>
                        </div>
                        <button onClick = {handleDeleteComment} title = "deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{commentContent}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
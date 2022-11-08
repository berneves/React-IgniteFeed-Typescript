import styles from "./Avatar.module.css"
import {ImgHTMLAttributes} from "react"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean,
}

export function Avatar({...props}:AvatarProps) {
    return (
        <img className={props.hasBorder ? styles.avatarWithBorder: styles.avatar} src={props.src} alt="minha foto" />
    )
}

// export function Avatar({hasborder = true, src}) {
//     return (
//         <img className={hasBorder ? styles.avatarWithBorder: styles.avatar} src={props.src} alt="minha foto" />
//     )
// } 
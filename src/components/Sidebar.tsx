import styles from './Sidebar.module.css';
import {PencilLine} from "phosphor-react"
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"/>
            <div className = {styles.profile}>
                <Avatar hasBorder = {true} src="https://www.github.com/berneves.png"/>
                <strong>Bernardo</strong>
                <span>Software Engineer</span>
            </div>
            <footer className = {styles.footer}>
                
               <a 
               href="www.google.com">
                <PencilLine size={20}/>
                Edite seu perfil
               </a>
            </footer>
        </aside>
    )
  }
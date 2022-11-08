import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/berneves.png",
      name: "Bernardo Neves",
      role: "Software Engineer",
    },
    publishedAt: new Date("2022-11-06 21:10:00"),
    content:[
     {type: "paragraph", content: 'Falaa galera'},
     {type: "paragraph", content: 'Acabei de subir mais um post'},
     {type: "link", content: 'beneves.io.com'}
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/berneves.png",
      name: "fernanda Neves",
      role: "dev",
    },
    publishedAt: new Date("2022-11-05 21:10:00"),
    content:[
     {type: "paragraph", content: 'opa galera'},
     {type: "paragraph", content: 'Acabadooo'},
     {type: "link", content: 'beneves.io.com'}
    ]
  },
  {
    id: 3,
    author: {
      avatarUrl: "http://github.com/berneves.png",
      name: "fernanda Neves",
      role: "dev",
    },
    publishedAt: new Date("2022-11-05 21:10:00"),
    content:[
     {type: "paragraph", content: 'opa galera'},
     {type: "paragraph", content: 'Acabadooo'},
     {type: "link", content: 'beneves.io.com'}
    ]
  },
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key = {post.id}
              author = {post.author}
              content = {post.content} 
              publishedAt = {post.publishedAt}
            />
            )
          })}
        </main>
        </div>
    </div>  
  )
}


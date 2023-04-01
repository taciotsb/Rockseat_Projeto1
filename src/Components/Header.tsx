import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Images/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { Post } from './Post';
import {v4 as uuidv4} from 'uuid';

export function Header(){
    
    const[TextPost,setTextPost]=useState('')
    const[PostList, setPostList]= React.useState<IResult[]>([])

    interface IResult { 
        Id: string,
        TextPost: string;
        isChecked: boolean;
        }
    

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPost(event.target.value);
      }

    const handleDelete = (Id: string) => {
        const newlist = PostList.filter(x => x.Id !== Id);
        setPostList(newlist);
    }

    const handleSubmit = () => {
        setPostList([...PostList, {Id:uuidv4() ,TextPost:TextPost, isChecked:false}]);
        setTextPost('');
    }

    return(
        <div>
        {/* <form onSubmit={handleSubmit}> */}
        <header className={styles.header}>
           <div className={styles.image}>
                <img src={Logo} alt='Logotipo'/>
           </div>
           <div className={styles.searchArea}>
                <textarea placeholder='Adicione um nova tarefa' value={TextPost} onChange={handleChange}/>
                <button onClick={handleSubmit} type="submit">Criar<PlusCircle size={20} /></button>
           </div>
        </header>
        {/* </form> */}
            <div className={styles.wrapper}>
            <main>
                <Post PostList={PostList} DeleteFunction={handleDelete}/>
            </main>
        </div>
        </div>
    );
}

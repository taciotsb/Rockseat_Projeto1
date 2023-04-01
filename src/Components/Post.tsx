import { useState } from 'react';
import styles from './Post.module.css';
import Clipboard from '../Images/Clipboard.svg';
import { Itens } from './Itens';
import {v4 as uuidv4} from 'uuid';

interface IResult { 
    Id: string,
    TextPost: string;
    isChecked: boolean;
    }

export function Post({PostList, DeleteFunction}: {PostList: IResult[], DeleteFunction: (texto:string) => void }){

    const[countersFinish, setcountersFinish]= useState(0);
    const handleCountFinish = (count: number) =>{
         setcountersFinish(countersFinish + count)
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.info}>
                    <div className={styles.countersCreate}>
                        <strong className={styles.TaskCreate} >Tarefas Criadas</strong>
                        <span className={styles.Count}>{PostList.length}</span>
                    </div>
                    <div className={styles.countersFinish}>
                        <strong className={styles.TaskFinished}>Concluídas</strong>
                        <span className={styles.Count}>{countersFinish} de {PostList.length}</span>
                    </div>
                </div>
            </header>
            <menu className={styles.Menu}>
                {PostList.length===0?
                <div className={styles.ListaVazia}>
                    <img src={Clipboard} alt='clipboard'/>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>crie tarefas e organize seus itens a fazer</span>
                </div>:
                PostList.map(item => 
                <Itens key={item.Id} Id={item.Id} TextPost={item.TextPost} DeleteFunction={DeleteFunction} FinishFunction={handleCountFinish}/>)}
            </menu>
        </article>
    );
}
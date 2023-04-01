import React, { useState, useEffect  } from 'react';
import styles from './Itens.module.css';
import { Trash } from 'phosphor-react';


export function Itens({Id,TextPost,DeleteFunction, FinishFunction}: {Id:string, TextPost:string, DeleteFunction: (texto:string) => void, FinishFunction: (count : number) => void }){
    
    const [isChecked, setIsChecked] = useState(false);
    const handleDelete = () => {DeleteFunction(Id);
        if(isChecked===true){
            FinishFunction(-1)
        }}
    const handleFinish = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        if(event.target.checked===true){
            FinishFunction(1)
        }
        else{
            FinishFunction(-1)
        }
     }
      
    return(
        <article className={styles.PostTextArea}>
                <input type="checkbox" onChange={handleFinish}  checked={isChecked} />
                <textarea disabled value={TextPost}/>
                <button onClick={handleDelete}><Trash size={20}/></button>
        </article>
    );
}
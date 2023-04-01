import { useState } from 'react';
import { Header } from './Components/Header';
import { Post } from './Components/Post';
import style from './App.module.css'
import './global.css';

function App() {
  return (
    <div>
      <Header/>
      {/* <div className={style.wrapper}>
        <main>
            <Post/>
        </main>
      </div> */}
    </div>
  )
}

export default App

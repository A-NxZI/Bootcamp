import { Component, useState } from 'react'
import './App.css'
import HelloWorld, {NavClass, NavFunction} from './components/component'
import Hello from './components/hello'
import { TryProps } from './components/prop'
import Foooter from './components/footer'

  const body = () => {
    return (
      alert("sigma kan dulu le")
    )
  }

  const teks = () => {
    return(
      <marquee>ooooomaaggaaaaa</marquee>
    )
  }

  function App(){
    const [getNavValue, setNavValue] = useState(" ");
    return(
      <div className='app'>

        <div className="nav">
        <NavFunction />
        <NavClass />
        </div>

        <div className="body">
        <Hello />
        <TryProps body={body}/>
        </div>

        <div className="Footer">
          <Foooter teks={teks}/>
        </div>

      </div>
    )
}

export default App;

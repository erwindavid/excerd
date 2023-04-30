import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef, useMemo } from 'react'

function App() {
    const z = {element1: 40, element2: 80}
    const [scrollPosition, setScrollPosition] = useState(z)
    
    function handleScroll(id, scrollTop) {
        setScrollPosition( currentPosition => {
            if (currentPosition[id] != scrollTop) {
                return {...currentPosition, [id]: scrollTop} }
            return currentPosition
        })
        // setScrollPosition({...scrollPosition, [id]: scrollTop})
    }
    
    function Element({id, scrollTop}) {
        console.log('render')
        const ref = useRef(null)
        useEffect(()=> {
          if (ref) {ref.current.scrollTop = scrollTop}
        },[scrollTop])
        
        return (
            <div 
            ref={ref}
            style={{ 'width':'150px', 'height': '100px', 'overflowY':'scroll', 'border': '1px solid black'}}
            onScroll={(e)=>handleScroll(id, e.target.scrollTop)}
            >Lorem ipsum hfkd ,dodf jfds ssf. Hdjdn idaf non nduoskdn sdk sd sdduods osd kl njosidoi yh nosod b osdoqwi sla, d0wqqj. Posmvjs yl jfi emmn.
            </div>)
    }
    
    return (
        <div className="App">
        <Element id='element1' scrollTop={scrollPosition['element1']}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
          Learcn Reac
        </a>
        </header>
        </div>
    );
}

export default App;
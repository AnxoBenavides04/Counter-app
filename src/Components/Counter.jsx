import React, { useState } from 'react';
import ResetButton from './ResetButton';
import DecressButton from './DecressButton';
import IncressButton from './IncressButton';
/*Title with a counter and 3 buttons, restart, incress and decress, background color*/

export default function Counter() {
    const [counter, setCounter] = useState(0);
    function incress(){
        setCounter(counter + 1)
    }
    function decress(){
        if ( counter > 0){
            setCounter(counter - 1)
        }
    }
    function reset () {
            setCounter(0)
    }
  return (
    <div id='Counter'>
        <h1>Counter: {counter}</h1>
        <div id='buttons'>
        <IncressButton onClick={incress}/>
        <DecressButton onClick={decress}/>
        <ResetButton onClick={reset}/>
        </div>
    </div>
  );
}


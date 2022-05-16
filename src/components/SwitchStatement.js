import React, { useState } from 'react';

function SwitchStatement() {
  const [ text, setText ] = useState();


  return (
    <div className='switch'>
      <h1>Switch Statement</h1> <br/>
    
      <p>
        {(() => {
          switch (text) {
            case "red":   return (
              <p className='red'>
                  RED TEXT
              </p>);

            case "green": return(
              <p className='green'>
                GREEN TEXT
              </p>
            );

            case "blue":  return(
              <p className='blue'>
                BLUE TEXT
              </p>
            );

            default:      return(
              <p className='black'>
                BLACK TEXT
              </p>);
          }
        })()}
      </p> <br/>

      <p className='select'> Selected Color </p>
      
      <button onClick={ () => {setText('red')} }>red</button>
      <button onClick={ () => {setText('green')} }>Green</button>
      <button onClick={ () => {setText('blue')} }>blue</button>

    </div>
  );
}

export default SwitchStatement;
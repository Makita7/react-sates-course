import { useEffect, useState } from 'react';

function ImperativeStates() {
    //compunded state
    const [state, setState] = useState({
        loading: false,
        error: false,
        correct: false,
        password: 'practicingReact',
        inputtedPass: '',
    });

    let CheckPass = () =>{
        if (state.inputtedPass === state.password){
            setState({
                ...state,
                correct: true,
            });
            setTimeout(() => {
                setState({
                    ...state,
                    correct: false,
                });
            }, 2000)
            
        } else{
                setState({
                    ...state,
                    error:true,
                })
                setTimeout(() =>{
                    setState({
                        ...state,
                        error:false,
                    })
                }, 2000);
            }
    }

    const UpdatePass = (e) =>{
        setState({
            ...state,
            inputtedPass: e.target.value
        })
    }
    console.log(state.inputtedPass);

  return (
    <div className='card'>
        <h1 className='title'>LET'S GO!!!!</h1>
        <p><strong>Password: </strong> {state.password}</p>
        
        <input type='text' placeholder="Input password..." onChange={UpdatePass}/> <br/>
        
        <button onClick={CheckPass}>Log In</button> <br/>

        { state.error ? 'incorrect password' : '' }

        { state.correct ? 'password was correct' : '' }

    </div>
  )
}

export default ImperativeStates
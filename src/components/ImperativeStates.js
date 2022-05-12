import { useState } from 'react';

function ImperativeStates() {
    //compunded state
    const [state, setState] = useState({
        loading: false,
        error: false,
        correct: false,
        password: 'practicingReact',
        inputtedPass: '',
    });

    const [changePass, setChangePass ] = useState(false);

    let CheckPass = () =>{
        if (state.inputtedPass === state.password){
            setState({
                correct: true,
            });
            setTimeout(() => {
                setState({
                    correct: false,
                });
            }, 2000)
            
        } else{
                setState({
                    error:true,
                })
                setTimeout(() =>{
                    setState({
                        error:false,
                    })
                }, 2000);
            }
    }

    const UpdateInput = (e) =>{
        setState({
            inputtedPass: e.target.value,
        });
    }

    const [temp, setTemp] = useState('');

    const Temporary = (e) => {
        setTemp(e.target.value);
    }

    const ChangePass = () => {
        setState({
            password :  temp
        });
        setChangePass(false);
    }

    const Enter = (e) => {
        if (e.key === 'Enter') {
        ChangePass();
      }
    }


    console.log(temp);
    
  return (
    <div>
        <div className='card'>
            <h1 className='title'>LET'S GO!!!!</h1>
            <p><strong>Password: </strong> {state.password}</p>
            
            <input type='text' placeholder="Input password..." onChange={UpdateInput}/> <br/>
            
            <button onClick={CheckPass}>Log In</button> <br/>

            { state.error ? 'incorrect password' : '' }

            { state.correct ? 'password was correct' : '' }

        </div>
        <div className='changePass center'>
            <p className='textCenter' type='text' onClick={() => {setChangePass(true)}}>
                { changePass ? ''
                             : 'Do you want to change password?'
                }
                </p>

            { changePass 
                ? 
                <div>
                    <p className='textCenter'>Input New Password</p> <br/>
                    <input className='center' placeholder='new password' onChange={Temporary} onKeyDown={Enter}/> <br/>
                    <div className='flex buttons'>

                    <button className='center' onClick={ChangePass}>Change</button>
                    <button className='center' onClick={() => {setChangePass(false)}}>Exit</button>
                    </div>
                </div>

                : ''
            }
        </div>

    </div>
  )
}

export default ImperativeStates
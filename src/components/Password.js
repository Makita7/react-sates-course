import { useState } from 'react';

function Password() {
    //compunded state
    // const [state, setState] = useState({
    //     loading: false,
    //     error: false,
    //     correct: false,
    // });


    //save password to localStorage

    const [error, setError ] = useState(false);
    const [correct, setCorrect ] = useState(false);
    const [password, setPassword ] = useState('practicingReact');
    const [noPass, setNoPass ] = useState(false);
    const [inputtedPass, setInputtedPass ] = useState('');
    const [changePass, setChangePass ] = useState(false);
    const [temp, setTemp] = useState('');


    let CheckPass = () =>{
        if (inputtedPass === password){
            setCorrect(true);

            setTimeout(() => {
                setCorrect(false);
            }, 2000)
            
        } else if (inputtedPass === ''){
            setNoPass(true);
            setTimeout(() =>{
                setNoPass(false);
            }, 2000);

        } else{
                setError(true);

                setTimeout(() =>{
                    setError(false);
                }, 2000);
            }
    }

    
    const UpdateInput = (e) =>{
        setInputtedPass(e.target.value);
    }
    
    const Temporary = (e) => {
        setTemp(e.target.value);
    }

    const ChangePassword = () => {
        setPassword(temp);
        setChangePass(false);
    }
    
    const Enter = (e) => {
        if (e.key === 'Enter') {
        ChangePassword();
    }
}


// console.log('input:',{inputtedPass});
console.log('pass:',{password});
console.log('error:',{error});
    
  return (
    <div>
        <div className='card'>
            <h1 className='title'>LET'S GO!!!!</h1>
            <p><strong>Password: </strong> {password}</p>
            
            <input type='text' placeholder="Input password..." onChange={ UpdateInput }/> <br/>
            
            <button onClick={CheckPass}>Log In</button> <br/>

            {error ? <p className='warning'>incorrect password</p> : '' }

            {correct ? <p className='warning'>password is correct</p> : '' }
            
            { noPass ? <p className='warning'>please input a password</p> : '' }

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

                    <button className='center' onClick={ChangePassword}>Change</button>
                    <button className='center' onClick={() => {setChangePass(false)}}>Exit</button>
                    </div>
                </div>

                : ''
            }
        </div>

    </div>
  );
}

export default Password;
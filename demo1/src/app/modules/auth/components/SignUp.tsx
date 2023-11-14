import React, {useState} from "react";
import clsx from "clsx";
import axios from "axios";

export function SignUp()
{
    const [username, setUsername] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [passwordRepeat, setPasswordRepeat] = useState<string | undefined>();

    const onSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8080/api/v1/users',{
          username,
          email,
          password
      })
    };

  return (
    <form onSubmit={onSubmit}>
        <h1>Sign Up</h1> <br/>
        <div>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Username</label>
            <input
                id={"username"}
                className={clsx('form-control bg-transparent')}
                onChange={(event) => setUsername(event.target.value)}
            />
        </div><br/>
        <div>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>E-mail</label>
            <input
                id={"email"}
                className={clsx('form-control bg-transparent',)}
                onChange={(event) => setEmail(event.target.value)}
            />
        </div><br/>
        <div>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
            <input
                type='password'
                id={"password"}
                className={clsx('form-control bg-transparent')}
                onChange={(event) => setPassword(event.target.value)}
            />
        </div><br/>
        <div>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password Repeat</label>
            <input
                type='password'
                id={"passwordRepeat"}
                className={clsx('form-control bg-transparent')}
                onChange={(event) => setPasswordRepeat(event.target.value)}
            />
        </div><br/>

        <div className='d-grid mb-10'>
            <button
                type='submit'
                id='kt_sign_in_submit'
                className='btn btn-primary'
                disabled={!password || (password != passwordRepeat)}
            >
                <span className='indicator-label'>Continue</span>
            </button>
        </div>
    </form>
  )
}

import React, {useEffect, useMemo, useState} from "react";
import {signUpApi} from "../api/ApiService";
import Input from "../components/Input";
import {Button} from "../components/Button";
import {toAbsoluteUrl} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [passwordRepeat, setPasswordRepeat] = useState<string | undefined>();
    const [apiProgress, setApiProgress] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | undefined>();
    const [errors, setErrors] = useState<any>({});
    const [generalErrors, setGeneralErrors] = useState<any>()

    useEffect(() => {
        setErrors(function(lastErrors){
            return{
                ...lastErrors,
                username:undefined
            }
        })
    },[username])

    useEffect(() => {
        setErrors(function(lastErrors){
            return{
                ...lastErrors,
                email:undefined
            }
        })
    },[email])

    useEffect(() => {
        setErrors(function(lastErrors){
            return{
                ...lastErrors,
                password:undefined
            }
        })
    },[password])

    useEffect(() => {
        setErrors(function(lastErrors){
            return{
                ...lastErrors,
                passwordRepeat:undefined
            }
        })
    },[passwordRepeat])

    const onSubmit = async(event) =>
    {
        event.preventDefault();
        setSuccessMessage(undefined);
        setGeneralErrors(undefined);
        setApiProgress(true);
        try
        {
            const response = await signUpApi({username, email, password})
            setSuccessMessage(response.data.message);
        }
        catch(axiosError:any)
        {
            if (axiosError.response.data)
            {
                if (axiosError.response.data.status === 400)
                {
                    setErrors(axiosError.response.data.validationErrors);
                }
                else
                {
                    setGeneralErrors(axiosError.response.data.message);
                }
            }
            else
            {
                setGeneralErrors("Unexpected error occurred. Please try again");
            }
        }
        finally {setApiProgress(false)}
    };

    const passwordRepeatError = useMemo(() => {
        if (password && password != passwordRepeat){
            return 'Password mismatch'
        }
        return ''
    },[password, passwordRepeat])

    return (
        <>
            <div className='text-center mb-11'>
                <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
                <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
            </div>

            <div className='row g-3 mb-9'>
                <div className='col-md-6'>
                    <a
                        href='#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                    >
                        <img
                            alt='Logo'
                            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                            className='h-15px me-3'
                        />
                        Sign in with Google
                    </a>
                </div>
                <div className='col-md-6'>
                    <a
                        href='#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                    >
                        <img
                            alt='Logo'
                            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
                            className='theme-light-show h-15px me-3'
                        />
                        <img
                            alt='Logo'
                            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
                            className='theme-dark-show h-15px me-3'
                        />
                        Sign in with Apple
                    </a>
                </div>
            </div>

            <div className='separator separator-content my-14'>
                <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
            </div>


            <div>
                <form onSubmit={onSubmit}>
                    <div className={"card-body"}>
                        {successMessage && <div className={"alert alert-success"}>{successMessage}</div>}
                        {generalErrors && <div className={"alert alert-danger"}>{generalErrors}</div>}
                        <Input
                            id={"username"}
                            label={"Username"}
                            error={errors.username}
                            onChange={(event) => setUsername(event.target.value)}
                        >
                        </Input>
                        <Input
                            id={"email"}
                            label={"E-mail"}
                            error={errors.email}
                            onChange={(event) => setEmail(event.target.value)}
                        >
                        </Input>
                        <Input
                            id={"password"}
                            label={"Password"}
                            error={errors.password}
                            onChange={(event) => setPassword(event.target.value)}
                            type={"password"}
                        >
                        </Input>
                        <Input
                            id={"passwordRepeat"}
                            label={"Password Repeat"}
                            error={passwordRepeatError}
                            onChange={(event) => setPasswordRepeat(event.target.value)}
                            type={"password"}
                        >
                        </Input>
                        <div className='d-grid mb-10'>
                            <Button
                                disabled={apiProgress || (!password || (password != passwordRepeat))}
                                apiProgress={apiProgress}
                            ></Button>
                        </div>
                    </div>
                    <div className='text-gray-500 text-center fw-semibold fs-6'>
                        Already registered?{' '}
                        <Link to='/auth/login' className='link-primary'>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;
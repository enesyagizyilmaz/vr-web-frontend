import React, {useContext, useEffect, useMemo, useState} from "react";
import {login, signUpApi} from "../api/ApiService";
import Input from "../components/Input";
import {Button} from "../components/Button";
import {AuthContext} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {toAbsoluteUrl} from "../../../_metronic/helpers";

const Login = () =>
{
    const authState = useContext(AuthContext);
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [apiProgress, setApiProgress] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [generalErrors, setGeneralErrors] = useState<any>()

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

    const onSubmit = async(event) =>
    {
        event.preventDefault();
        setGeneralErrors(undefined);
        setApiProgress(true);
        try
        {
            const response = await login({email,password});
            
            if (authState.onLoginSuccess)
            {
                authState.onLoginSuccess(response.data.user)
            }
        }
        catch(axiosError:any)
        {
            if (axiosError.response?.data)
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
        finally
        {
            setApiProgress(false)
        }
    };

    return (
        <>
            <div className='text-center mb-11'>
                <h1 className='text-dark fw-bolder mb-3'>Login</h1>
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
                    <div>
                        {generalErrors && <div className={"alert alert-danger"}>{generalErrors}</div>}
                        <div className='fv-row mb-8'>
                            <Input
                                label={"Email"}
                                id={"email"}
                                error={errors.email}
                                onChange={(event) => setEmail(event.target.value)}
                            >
                            </Input>
                        </div>
                        <div className='fv-row mb-8'>
                            <Input
                                id={"password"}
                                label={"Password"}
                                error={errors.password}
                                onChange={(event) => setPassword(event.target.value)}
                                type={"password"}
                            >
                            </Input>
                        </div>
                        <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'><div />
                            <Link to='/auth/forgot-password' className='link-primary'>
                                Forgot Password ?
                            </Link>
                        </div>
                        <div className='d-grid mb-10'>
                            <Button
                                disabled={!email && !password}
                                apiProgress={apiProgress}
                            ></Button>
                        </div>
                    </div>
                    <div className='text-gray-500 text-center fw-semibold fs-6'>
                        Not a Member yet?{' '}
                        <Link to='/auth/signup' className='link-primary'>
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Login;
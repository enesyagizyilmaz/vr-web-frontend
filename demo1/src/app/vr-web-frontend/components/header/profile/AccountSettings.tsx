import {KTIcon, toAbsoluteUrl} from "../../../../../_metronic/helpers";
import React, {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext";

const AccountSettings = () =>
{
    const authState = useContext(AuthContext);
    return(
        <>
            <h1>Account Settings</h1><br/>

            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                        <div className='me-7 mb-4'>
                            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                                <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
                                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                            </div>
                        </div>

                        <div className='flex-grow-1'>
                            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex align-items-center mb-2'>
                                        <a className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                                            {authState.username}
                                        </a>
                                        <a>
                                            <KTIcon iconName='verify' className='fs-1 text-primary' />
                                        </a>
                                    </div>

                                    <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                                        <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                                            <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                                            Student
                                        </a>
                                        <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                                            <KTIcon iconName='geolocation' className='fs-4 me-1' />
                                            Turkey, Ankara
                                        </a>
                                        <a className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'>
                                            <KTIcon iconName='sms' className='fs-4 me-1' />
                                            {authState.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <div className='row mb-6'>

                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Name</label>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-6 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        value={authState.username}
                                        placeholder={"Name"}
                                    /><br/>
                                </div>
                            </div>
                        </div>

                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email</label>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-6 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        value={authState.email}
                                        placeholder={"Email"}
                                    /><br/>
                                </div>
                            </div>
                        </div>

                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Password</label>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-6 fv-row'>
                                    <input
                                        type='password'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder="Your password"
                                    /><br/>
                                </div>
                            </div>
                        </div>

                        <div className=' d-flex justify-content-end py-6 px-9'>
                            <button type='submit' className='btn btn-primary'>
                                Save
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountSettings;
import React from "react";
import {toAbsoluteUrl} from "../../../../_metronic/helpers";

const WhatIsVR = () =>
{
    return(
        <>
            <h1>What is VR?</h1><br/>
            <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
                <div className='col-xxl-6'>
                    <div className={`card mb-5 mb-xxl-8`}>
                        <div className='card-body pb-0'>
                            <div className='mb-5'>
                                <div
                                    className='bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5'
                                    style={{
                                        backgroundImage: `url('${toAbsoluteUrl('/media/stock/900x600/vr1.jpg')}')`,
                                    }}
                                ></div>
                                <div className='text-gray-800 mb-5'>
                                    Virtual Reality is a type of technology that allows users to feel
                                    and interact within computer-generated simulations. VR offers an
                                    experience completely separate from the real world, often through
                                    devices such as special glasses, headsets, and sometimes gloves.
                                </div>
                                <div className='separator mb-4'></div>
                                <div className='text-gray-800 mb-5'>
                                    VR technology manipulates the user's senses, making them feel like
                                    they are in a real environment. Powered by elements such as 3D graphics,
                                    sound effects, and sometimes moving platforms, VR allows people to navigate,
                                    interact, and experience various simulations in the digital world.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
                    <div
                        className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10`}
                        style={{
                            backgroundColor: '#00A3E1'
                        }}
                    >
                        <div className='card-header pt-5'>
                            <div className='card-title d-flex flex-column'>
                                <span className='fs-3hx fw-bold text-white me-2 lh-5 ls-n2'>$59.9B</span>
                                <span className='text-white opacity-75 pt-10 fw-semibold fs-16'>Global Market Size, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10`}
                        style={{
                            backgroundColor: '#0A1551'
                        }}
                    >
                        <div className='card-header pt-5'>
                            <div className='card-title d-flex flex-column'>
                                <span className='fs-3hx fw-bold text-white me-2 lh-5 ls-n2'>39.0%</span>
                                <span className='text-white opacity-75 pt-10 fw-semibold fs-16'>Asia Pacific Market Revenue Share, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
                    <div
                        className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10`}
                        style={{
                            backgroundColor: '#FF6100'
                        }}
                    >
                        <div className='card-header pt-5'>
                            <div className='card-title d-flex flex-column'>
                                <span className='fs-3hx fw-bold text-white me-2 lh-5 ls-n2'>26.9%</span>
                                <span className='text-white opacity-75 pt-10 fw-semibold fs-16'>U.S. Market CAGR, 2023-2030</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10`}
                        style={{
                            backgroundColor: '#FFB21D'
                        }}
                    >
                        <div className='card-header pt-5'>
                            <div className='card-title d-flex flex-column'>
                                <span className='fs-3hx fw-bold text-white me-2 lh-5 ls-n2'>$435.36B</span>
                                <span className='text-white opacity-75 pt-10 fw-semibold fs-16'>Revenue forecast in 2030</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WhatIsVR;
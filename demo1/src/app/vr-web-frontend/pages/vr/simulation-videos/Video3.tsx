import {toAbsoluteUrl} from "../../../../../_metronic/helpers";
import React from "react";

const Video3 = () =>
{
    return(
        <>
            <h1>
                Video 3
            </h1>
            <div className={`card mb-5 mb-xxl-8`}>
                <div className='card-body pb-0'>
                    <div className='d-flex align-items-center mb-5'>
                        <div className='d-flex align-items-center flex-grow-1'>
                            <div className='symbol symbol-45px me-5'>
                                <img src={toAbsoluteUrl('/media/logos/vr6.png')} alt='' />
                            </div>
                            <div className='d-flex flex-column'>
                                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                                    VRevolution
                                </a>
                                <span className='text-gray-400 fw-semibold'>Where Science meets Virtual Reality</span>
                            </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className='text-gray-800 fs-6 fw-normal mb-5'>
                            VRevolution allows you to experience traveling in space
                        </div>
                        <div className='mb-5'>
                            <iframe
                                title='widget11-video'
                                className='embed-responsive-item rounded h-300px w-100'
                                src='https://www.youtube.com/embed/d5wDIrYd7WM'
                                allowFullScreen={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video3;
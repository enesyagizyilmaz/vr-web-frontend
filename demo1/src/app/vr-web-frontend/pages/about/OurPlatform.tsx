import {KTIcon, toAbsoluteUrl} from "../../../../_metronic/helpers";
import React from "react";

const OurPlatform = () => {

    return(
        <>
            <h1>Our Platform</h1>
            <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
                <div className='col-xxl-6'>
                    <div className={`card mb-5 mb-xxl-8`}>
                        <div className='card-body pb-0'>
                            <div className='mb-5'>
                                <div
                                    className='bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5'
                                    style={{
                                        backgroundImage: `url('${toAbsoluteUrl('/media/stock/900x600/78.jpg')}')`,
                                    }}
                                ></div>
                                <div className='text-gray-800 mb-5'>
                                    The purpose of this study is to examine and analyze an educational platform
                                    developed to support secondary school students' science learning. In particular,
                                    the focus is on how this platform is enriched with virtual reality (VR) technology
                                    and how mobile and web application platforms are integrated. Addressing the
                                    limitations of traditional methods in teaching science for secondary school
                                    students is the main motivation for this study.
                                </div>
                                <div className='separator mb-4'></div>
                                <div className='text-gray-800 mb-5'>
                                    Virtual reality technology has the
                                    potential to present students with abstract concepts through a concrete
                                    experience, enhance visual learning, and encourage student engagement.
                                    Therefore, the study examined in detail how this technology can enrich students'
                                    science learning and improve teaching materials. This study will be an important
                                    reference source for researchers and educators on how VR technology and
                                    digital platforms can be used to improve science education in the future.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-6'>
                    <div className='card card-xl-stretch mb-5 mb-xl-8'>
                        <div className='card-header border-0'>
                            <h3 className='card-title fw-bold text-dark'>Links for the Project</h3>
                        </div>
                        <div className='card-body pt-0'>
                            <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
                                <span className=' text-warning me-5'>
                                    <KTIcon iconName='abstract-26' className='text-warning fs-1 me-5' />
                                </span>
                                <div className='flex-grow-1 me-2'>
                                    <a href="https://github.com/CankayaUniversity/ceng-407-408-2023-2024-Simulating-Scientific-Experiments-Using-Virtual-Reality"
                                       target='_blank'
                                       data-bs-dismiss-='click'
                                       className='fw-bold text-gray-800 text-hover-primary fs-6'>
                                        Github
                                    </a>
                                    <span className='text-muted fw-semibold d-block'>Our Version Control System</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7'>
                                <span className=' text-success me-5'>
                                    <KTIcon iconName='abstract-26' className='text-success fs-1 me-5' />
                                </span>
                                <div className='flex-grow-1 me-2'>
                                    <a href="https://github.com/CankayaUniversity/ceng-407-408-2023-2024-Simulating-Scientific-Experiments-Using-Virtual-Reality/wiki/Literature-Review"
                                       target='_blank'
                                       data-bs-dismiss-='click'
                                       className='fw-bold text-gray-800 text-hover-primary fs-6'>
                                        Literature Review
                                    </a>
                                    <span className='text-muted fw-semibold d-block'>Resources used in project research</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7'>
                                <span className=' text-danger me-5'>
                                    <KTIcon iconName='abstract-26' className='text-danger fs-1 me-5' />
                                </span>
                                <div className='flex-grow-1 me-2'>
                                    <a href="https://github.com/CankayaUniversity/ceng-407-408-2023-2024-Simulating-Scientific-Experiments-Using-Virtual-Reality/wiki/SDD"
                                       target='_blank'
                                       data-bs-dismiss-='click'
                                       className='fw-bold text-gray-800 text-hover-primary fs-6'>
                                        SDD
                                    </a>
                                    <span className='text-muted fw-semibold d-block'>Software Design Description</span>
                                </div>
                            </div>


                            <div className='d-flex align-items-center bg-light-info rounded p-5 mb-7'>
                                <span className=' text-info me-5'>
                                    <KTIcon iconName='abstract-26' className='text-info fs-1 me-5' />
                                </span>
                                <div className='flex-grow-1 me-2'>
                                    <a href="https://github.com/CankayaUniversity/ceng-407-408-2023-2024-Simulating-Scientific-Experiments-Using-Virtual-Reality/wiki/SRS"
                                       target='_blank'
                                       data-bs-dismiss-='click'
                                       className='fw-bold text-gray-800 text-hover-primary fs-6'>
                                        SRS
                                    </a>
                                    <span className='text-muted fw-semibold d-block'>Software Requirements Specification</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
                                <span className=' text-warning me-5'>
                                    <KTIcon iconName='abstract-26' className='text-warning fs-1 me-5' />
                                </span>
                                <div className='flex-grow-1 me-2'>
                                    <a href="https://github.com/CankayaUniversity/ceng-407-408-2023-2024-Simulating-Scientific-Experiments-Using-Virtual-Reality/wiki/Project-Work-Plan"
                                       target='_blank'
                                       data-bs-dismiss-='click'
                                       className='fw-bold text-gray-800 text-hover-primary fs-6'>
                                        Project Plan
                                    </a>
                                    <span className='text-muted fw-semibold d-block'>Our process for CENG 407 Course</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OurPlatform;
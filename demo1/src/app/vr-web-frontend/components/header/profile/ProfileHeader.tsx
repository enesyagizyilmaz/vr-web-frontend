/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Link, useLocation} from 'react-router-dom'
import {Dropdown1} from '../../../../../_metronic/partials'
import {AuthContext} from "../../../context/AuthContext";

const ProfileHeader: React.FC = () => {
  const authState = useContext(AuthContext);

  return (
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
                  <a href='demo1/src/app/modules/profile#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    {authState.username}
                  </a>
                  <a href='demo1/src/app/modules/profile#'>
                    <KTIcon iconName='verify' className='fs-1 text-primary' />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='demo1/src/app/modules/profile#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    Student
                  </a>
                  <a
                    href='demo1/src/app/modules/profile#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='geolocation' className='fs-4 me-1' />
                    Turkey, Ankara
                  </a>
                  <a
                    href='demo1/src/app/modules/profile#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1' />
                    {authState.email}
                  </a>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-2 fw-bolder'>75</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Projects</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-2 fw-bolder'>60%</div>
                    </div>
                    <div className='fw-bold fs-6 text-gray-400'>Success Rate</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}

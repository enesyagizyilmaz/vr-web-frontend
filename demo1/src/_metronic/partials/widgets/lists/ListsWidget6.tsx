/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
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
  )
}

export {ListsWidget6}

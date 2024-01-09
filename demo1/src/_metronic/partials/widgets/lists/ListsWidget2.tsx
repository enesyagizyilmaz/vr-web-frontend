/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>User Number : {8}</h3>
      </div>

      <div className='card-body pt-2'>

        <div className='d-flex align-items-center mb-7'>
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Emma Smith
            </a>
            <span className='text-muted d-block fw-semibold'>Project Manager</span>
          </div>
        </div>

        <div className='d-flex align-items-center mb-7'>
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
          </div>
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              Sean Bean
            </a>
            <span className='text-muted d-block fw-semibold'>PHP, SQLite, Artisan CLI</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export {ListsWidget2}

/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useState} from 'react'
import {KTIcon} from '../../../_metronic/helpers'
import {CreateAppModal, Dropdown1} from '../../../_metronic/partials'
import {useLayout} from '../../../_metronic/layout/core'

const ToolbarClassic = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <div className='d-flex align-items-center gap-2 gap-lg-3'>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </div>
  )
}

export {ToolbarClassic}

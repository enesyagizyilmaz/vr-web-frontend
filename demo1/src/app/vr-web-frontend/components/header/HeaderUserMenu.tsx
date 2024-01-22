import {FC, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../modules/auth'
import {Languages} from '../../../../_metronic/partials/layout/header-menus/Languages'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {AuthContext} from "../../context/AuthContext";

const HeaderUserMenu: FC = () =>
{
  const authState = useContext(AuthContext);

  const onClickLogout = () =>
  {
    if (authState.onLogoutSuccess)
    {
      authState.onLogoutSuccess();
    }
  }

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/300-3.jpg')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {authState.username}
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>Student</span>
            </div>
            <a className='fw-bold text-muted text-hover-primary fs-7'>
              {authState.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          My Profile
        </Link>
      </div>

      <div className='menu-item px-5 my-1'>
        <Link to='account/settings' className='menu-link px-5'>
          Account Settings
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to='/login' className='menu-link px-5' onClick={onClickLogout}>
          Sign Out
        </Link>
      </div>
    </div>
  )
};

export {HeaderUserMenu}

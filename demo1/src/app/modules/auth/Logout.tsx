import {useContext, useEffect} from 'react'
import {Navigate, Routes} from 'react-router-dom'
import {useAuth} from './core/Auth'
import {AuthContext} from "../../vr-web-frontend/context/AuthContext";

export function Logout()
{
  const authState = useContext(AuthContext);
  useEffect(() =>
  {
    if (authState && authState.onLogoutSuccess)
    {
      authState.onLogoutSuccess();
    }
  }, [authState]);

  return (
    <Routes>
      <Navigate to='/login' />
    </Routes>
  )
}

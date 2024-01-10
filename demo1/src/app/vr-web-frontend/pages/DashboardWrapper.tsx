import React, {FC, useEffect, useState} from 'react'
import {getUserCountApi, getUsersWithEmailAndUsernameApi} from "../api/ApiService";

interface UserData
{
    username: string;
    email: string;
}

const DashboardWrapper: FC = () =>
{
  const [userCount, setUserCount] = useState(0);
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() =>
  {
      getUserCount();
      getUsernameAndEmails();
  }, []);
  const getUserCount = () =>
  {
    getUserCountApi()
        .then(response => {
          setUserCount(response.data)
        })
        .catch(error => console.log(error))
  };

  const getUsernameAndEmails = () =>
  {
      getUsersWithEmailAndUsernameApi()
          .then(response => {
              setUserData(response.data)
          })
          .catch(error => console.log(error))
  };

  return (
    <>
      <h1>Dashboard</h1><br/>
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
                <div className='row gy-5 g-xl-8'>
                    <div className={`card card-xl-stretch mb-xl-8`}>

                        <div className='card-header border-0'>
                            <h3 className='card-title fw-bold text-dark'>{userCount} users has registered on our platform</h3>
                        </div>

                        <div className='card-body pt-2'>

                            <table>
                                <tbody>
                                {userData.map(user => (
                                    <tr key={user.username}>
                                        <td><div className='d-flex align-items-center mb-7'>
                                            <div className='flex-grow-1'>
                                                <a className='text-dark fw-bold text-hover-primary fs-6'>
                                                    {user.username}
                                                </a>
                                                <span className='text-muted d-block fw-semibold'>{user.email}</span>
                                            </div>
                                        </div></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export {DashboardWrapper}

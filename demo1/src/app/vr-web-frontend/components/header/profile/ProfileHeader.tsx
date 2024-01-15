import React, {useContext, useEffect, useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Link, useLocation} from 'react-router-dom'
import {Dropdown1} from '../../../../../_metronic/partials'
import {AuthContext} from "../../../context/AuthContext";
import {getScoreByIdApi, getUserCountApi} from "../../../api/ApiService";

interface ScoreData
{
  grade: string,
  testNumber: string,
  score: number
}

const ProfileHeader: React.FC = () => {
  const authState = useContext(AuthContext);
  const [scoreData, setScoreData] = useState<ScoreData[]>([]);

  useEffect(() =>
  {
    getScoreData();
  }, []);
  const getScoreData = () =>
  {
    getScoreByIdApi(authState.id)
        .then(response => {
          setScoreData(response.data)
        })
        .catch(error => console.log(error))
  };

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
                  <a className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    {authState.username}
                  </a>
                  <a>
                    <KTIcon iconName='verify' className='fs-1 text-primary' />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    Student
                  </a>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                    <KTIcon iconName='geolocation' className='fs-4 me-1' />
                    Turkey, Ankara
                  </a>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'>
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
                      <div className='fs-2 fw-bolder'>{scoreData.length}</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Solved Test Number</div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <h2>Test Results</h2><br/>
        <div className={"table-responsive"}>
          <table className={"table table-rounded table-striped border gy-7 gs-7"}>
            <thead>
            <tr className={"fw-semibold fs-6 text-gray-800 border-bottom border-gray-200"}>
              <th><h3>Grade</h3></th>
              <th><h3>Test Number</h3></th>
              <th><h3>Score (Out of 100)</h3></th>
            </tr>
            </thead>
            <tbody>
            {scoreData.map((score, index) => (
                <tr key={index}>
                  <td>{score.grade}</td>
                  <td>{score.testNumber}</td>
                  <td>{(score.score)*20}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>


      </div>

    </div>
  )
}

export {ProfileHeader}

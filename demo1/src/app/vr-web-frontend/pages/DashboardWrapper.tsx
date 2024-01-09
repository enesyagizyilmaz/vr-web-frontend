import {FC, useEffect, useState} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'
import {AxiosError} from "axios";

const DashboardPage: FC = () => (
  <>
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>

      </div>
    </div>

  </>
)

const DashboardWrapper: FC = () =>
{


  return (
    <>
      <h1>Dashboard</h1>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}

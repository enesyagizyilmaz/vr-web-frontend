import React, {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/DashboardWrapper'
import {getCSSVariableValue} from '../../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../../_metronic/helpers'
import Video1 from "../pages/vr/simulation-videos/Video1";
import Video2 from "../pages/vr/simulation-videos/Video2";
import Video3 from "../pages/vr/simulation-videos/Video3";
import Video4 from "../pages/vr/simulation-videos/Video4";
import Video5 from "../pages/vr/simulation-videos/Video5";
import Test1Grade5 from "../pages/vr/tests/5-th/Test1Grade5";
import Test2Grade5 from "../pages/vr/tests/5-th/Test2Grade5";
import Test1Grade6 from "../pages/vr/tests/6-th/Test1Grade6";
import Test2Grade6 from "../pages/vr/tests/6-th/Test2Grade6";
import Test1Grade7 from "../pages/vr/tests/7-th/Test1Grade7";
import Test2Grade7 from "../pages/vr/tests/7-th/Test2Grade7";
import WhatIsVR from "../pages/about/WhatIsVR";
import OurPlatform from "../pages/about/OurPlatform";
import AccountSettings from "../components/header/profile/AccountSettings";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../components/header/profile/ProfilePage'))
  const AccountPage = lazy(() => import('../../modules/accounts/AccountPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />

        <Route path='dashboard' element={<DashboardWrapper />} />

        <Route path={'vr/simulation-videos/video-1'} element={<Video1/>}></Route>
        <Route path={'vr/simulation-videos/video-2'} element={<Video2/>}></Route>
        <Route path={'vr/simulation-videos/video-3'} element={<Video3/>}></Route>
        <Route path={'vr/simulation-videos/video-4'} element={<Video4/>}></Route>
        <Route path={'vr/simulation-videos/video-5'} element={<Video5/>}></Route>

        <Route path={'vr/what-is-vr'} element={<WhatIsVR/>}></Route>
        <Route path={'vr/our-platform'} element={<OurPlatform/>}></Route>

        <Route path={'tests/grade-5/test-1'} element={<Test1Grade5/>}></Route>
        <Route path={'tests/grade-5/test-2'} element={<Test2Grade5/>}></Route>
        <Route path={'tests/grade-6/test-1'} element={<Test1Grade6/>}></Route>
        <Route path={'tests/grade-6/test-2'} element={<Test2Grade6/>}></Route>
        <Route path={'tests/grade-7/test-1'} element={<Test1Grade7/>}></Route>
        <Route path={'tests/grade-7/test-2'} element={<Test2Grade7/>}></Route>

        <Route path={'account/settings'} element={<AccountSettings/>}></Route>

        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}

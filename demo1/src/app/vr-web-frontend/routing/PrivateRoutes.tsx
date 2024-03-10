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
import WhatIsVR from "../pages/about/WhatIsVR";
import OurPlatform from "../pages/about/OurPlatform";
import AccountSettings from "../components/header/profile/AccountSettings";
import {
  Test10Grade5, Test10Grade6,
  Test11Grade5, Test11Grade6,
  Test12Grade5, Test12Grade6,
  Test13Grade5, Test13Grade6,
  Test14Grade5, Test14Grade6,
  Test15Grade5, Test15Grade6,
  Test16Grade5, Test16Grade6,
  Test17Grade5, Test17Grade6,
  Test18Grade5, Test18Grade6, Test19Grade5, Test19Grade6,
  Test1Grade5,
  Test1Grade6,
  Test1Grade7, Test20Grade5, Test20Grade6, Test21Grade5, Test21Grade6,
  Test2Grade5,
  Test2Grade6,
  Test2Grade7,
  Test3Grade5,
  Test3Grade6,
  Test3Grade7,
  Test4Grade5, Test4Grade6,
  Test5Grade5, Test5Grade6,
  Test6Grade5, Test6Grade6,
  Test7Grade5, Test7Grade6,
  Test8Grade5, Test8Grade6,
  Test9Grade5, Test9Grade6
} from "../pages/vr/tests/TestPage";

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
        <Route path={'tests/grade-5/test-3'} element={<Test3Grade5/>}></Route>
        <Route path={'tests/grade-5/test-4'} element={<Test4Grade5/>}></Route>
        <Route path={'tests/grade-5/test-5'} element={<Test5Grade5/>}></Route>
        <Route path={'tests/grade-5/test-6'} element={<Test6Grade5/>}></Route>
        <Route path={'tests/grade-5/test-7'} element={<Test7Grade5/>}></Route>
        <Route path={'tests/grade-5/test-8'} element={<Test8Grade5/>}></Route>
        <Route path={'tests/grade-5/test-9'} element={<Test9Grade5/>}></Route>
        <Route path={'tests/grade-5/test-10'} element={<Test10Grade5/>}></Route>
        <Route path={'tests/grade-5/test-11'} element={<Test11Grade5/>}></Route>
        <Route path={'tests/grade-5/test-12'} element={<Test12Grade5/>}></Route>
        <Route path={'tests/grade-5/test-13'} element={<Test13Grade5/>}></Route>
        <Route path={'tests/grade-5/test-14'} element={<Test14Grade5/>}></Route>
        <Route path={'tests/grade-5/test-15'} element={<Test15Grade5/>}></Route>
        <Route path={'tests/grade-5/test-16'} element={<Test16Grade5/>}></Route>
        <Route path={'tests/grade-5/test-17'} element={<Test17Grade5/>}></Route>
        <Route path={'tests/grade-5/test-18'} element={<Test18Grade5/>}></Route>
        <Route path={'tests/grade-5/test-19'} element={<Test19Grade5/>}></Route>
        <Route path={'tests/grade-5/test-20'} element={<Test20Grade5/>}></Route>
        <Route path={'tests/grade-5/test-21'} element={<Test21Grade5/>}></Route>

        <Route path={'tests/grade-6/test-1'} element={<Test1Grade6/>}></Route>
        <Route path={'tests/grade-6/test-2'} element={<Test2Grade6/>}></Route>
        <Route path={'tests/grade-6/test-3'} element={<Test3Grade6/>}></Route>
        <Route path={'tests/grade-6/test-4'} element={<Test4Grade6/>}></Route>
        <Route path={'tests/grade-6/test-5'} element={<Test5Grade6/>}></Route>
        <Route path={'tests/grade-6/test-6'} element={<Test6Grade6/>}></Route>
        <Route path={'tests/grade-6/test-7'} element={<Test7Grade6/>}></Route>
        <Route path={'tests/grade-6/test-8'} element={<Test8Grade6/>}></Route>
        <Route path={'tests/grade-6/test-9'} element={<Test9Grade6/>}></Route>
        <Route path={'tests/grade-6/test-10'} element={<Test10Grade6/>}></Route>
        <Route path={'tests/grade-6/test-11'} element={<Test11Grade6/>}></Route>
        <Route path={'tests/grade-6/test-12'} element={<Test12Grade6/>}></Route>
        <Route path={'tests/grade-6/test-13'} element={<Test13Grade6/>}></Route>
        <Route path={'tests/grade-6/test-14'} element={<Test14Grade6/>}></Route>
        <Route path={'tests/grade-6/test-15'} element={<Test15Grade6/>}></Route>
        <Route path={'tests/grade-6/test-16'} element={<Test16Grade6/>}></Route>
        <Route path={'tests/grade-6/test-17'} element={<Test17Grade6/>}></Route>
        <Route path={'tests/grade-6/test-18'} element={<Test18Grade6/>}></Route>
        <Route path={'tests/grade-6/test-19'} element={<Test19Grade6/>}></Route>
        <Route path={'tests/grade-6/test-20'} element={<Test20Grade6/>}></Route>
        <Route path={'tests/grade-6/test-21'} element={<Test21Grade6/>}></Route>

        <Route path={'tests/grade-7/test-1'} element={<Test1Grade7/>}></Route>
        <Route path={'tests/grade-7/test-2'} element={<Test2Grade7/>}></Route>
        <Route path={'tests/grade-7/test-3'} element={<Test3Grade7/>}></Route>

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

import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {HeaderWrapper} from '../../_metronic/layout/components/header'
import {ScrollTop} from '../../_metronic/layout/components/scroll-top'
import {Content} from '../../_metronic/layout/components/content'
import {FooterWrapper} from '../../_metronic/layout/components/footer'
import {Sidebar} from '../../_metronic/layout/components/sidebar'
import {ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan} from '../../_metronic/partials'
import {PageDataProvider} from '../../_metronic/layout/core'
import {reInitMenu} from '../../_metronic/helpers'
import {ToolbarWrapper} from '../../_metronic/layout/components/toolbar'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
        <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
          <HeaderWrapper />
          <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
            <Sidebar />
            <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
              <div className='d-flex flex-column flex-column-fluid'>
                <ToolbarWrapper />
                <Content>
                  <Outlet />
                </Content>
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />

      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}

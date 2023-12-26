/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={"Dashboard"}
        fontIcon='bi-app-indicator'
      />

        <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
                <span className='menu-section text-muted text-uppercase fs-8 ls-1'>VR</span>
            </div>
        </div>

        <SidebarMenuItemWithSub
            to='/apps/chat'
            title='Simulation Videos'
            fontIcon='bi-chat-left'
            icon='message-text-2'
        >
            <SidebarMenuItem to='vr/simulation-videos/video-1' title='Video 1' hasBullet={true} />
            <SidebarMenuItem to='vr/simulation-videos/video-2' title='Video 2' hasBullet={true} />
            <SidebarMenuItem to='vr/simulation-videos/video-3' title='Video 3' hasBullet={true} />
            <SidebarMenuItem to='vr/simulation-videos/video-4' title='Video 4' hasBullet={true} />
            <SidebarMenuItem to='vr/simulation-videos/video-5' title='Video 5' hasBullet={true} />
        </SidebarMenuItemWithSub>

      <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Tests</span>
          </div>
      </div>

        <SidebarMenuItemWithSub
            to='/apps/chat'
            title='5. Grade'
            fontIcon='bi-chat-left'
            icon='message-text-2'
        >
            <SidebarMenuItem to='tests/grade-5/test-1' title='Test 1' hasBullet={true} />
            <SidebarMenuItem to='tests/grade-5/test-2' title='Test 2' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
            to='/apps/chat'
            title='6. Grade'
            fontIcon='bi-chat-left'
            icon='message-text-2'
        >
            <SidebarMenuItem to='tests/grade-6/test-1' title='Test 1' hasBullet={true} />
            <SidebarMenuItem to='tests/grade-6/test-2' title='Test 2' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
            to='/apps/chat'
            title='7. Grade'
            fontIcon='bi-chat-left'
            icon='message-text-2'
        >
            <SidebarMenuItem to='tests/grade-7/test-1' title='Test 1' hasBullet={true} />
            <SidebarMenuItem to='tests/grade-7/test-2' title='Test 2' hasBullet={true} />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
            to='/apps/chat'
            title='8. Grade'
            fontIcon='bi-chat-left'
            icon='message-text-2'
        >
            <SidebarMenuItem to='tests/grade-8/test-1' title='Test 1' hasBullet={true} />
            <SidebarMenuItem to='tests/grade-8/test-2' title='Test 2' hasBullet={true} />
        </SidebarMenuItemWithSub>

    </>
  )
}

export {SidebarMenuMain}

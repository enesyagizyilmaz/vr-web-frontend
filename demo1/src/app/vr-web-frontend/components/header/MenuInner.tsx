import {MenuItem} from '../../../../_metronic/layout/components/header/header-menus/MenuItem'
import {MenuInnerWithSub} from '../../../../_metronic/layout/components/header/header-menus/MenuInnerWithSub'
import React from "react";

export function MenuInner() {
  return (
    <>
      <MenuItem to='/dashboard'  title={"Dashboard"}/>

      <MenuInnerWithSub title='VR' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuInnerWithSub
            title='About'
            to=''
            icon='message-text-2'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='vr/what-is-vr' title='What is VR?' hasBullet={true} />
          <MenuItem to='vr/our-platform' title='Our Platform' hasBullet={true} />
        </MenuInnerWithSub>
        <MenuInnerWithSub
          title='Simulation Videos'
          to=''
          icon='message-text-2'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='vr/simulation-videos/video-1' title='Video 1' hasBullet={true} />
          <MenuItem to='vr/simulation-videos/video-2' title='Video 2' hasBullet={true} />
          <MenuItem to='vr/simulation-videos/video-3' title='Video 3' hasBullet={true} />
          <MenuItem to='vr/simulation-videos/video-4' title='Video 4' hasBullet={true} />
          <MenuItem to='vr/simulation-videos/video-5' title='Video 5' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub
          title='TESTS'
          to=''
          menuPlacement='bottom-start'
          menuTrigger='click'
      >
        <MenuInnerWithSub
            title='5. Grade'
            to=''
            fontIcon='bi-layers'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='tests/grade-5/test-1' title='Test 1' hasBullet={true} />
          <MenuItem to='tests/grade-5/test-2' title='Test 2' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
            title='6. Grade'
            to=''
            fontIcon='bi-layers'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='tests/grade-6/test-1' title='Test 1' hasBullet={true} />
          <MenuItem to='tests/grade-6/test-2' title='Test 2' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
            title='7. Grade'
            to=''
            fontIcon='bi-layers'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='tests/grade-7/test-1' title='Test 1' hasBullet={true} />
          <MenuItem to='tests/grade-7/test-2' title='Test 2' hasBullet={true} />
        </MenuInnerWithSub>


      </MenuInnerWithSub>
    </>
  )
}

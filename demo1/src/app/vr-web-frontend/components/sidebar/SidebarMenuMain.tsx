import React from 'react'
import {SidebarMenuItemWithSub} from '../../../../_metronic/layout/components/sidebar/sidebar-menu/SidebarMenuItemWithSub'
import {SidebarMenuItem} from '../../../../_metronic/layout/components/sidebar/sidebar-menu/SidebarMenuItem'

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
            title='About'
            fontIcon='bi-chat-left'
            icon='message-text-2'
        >
            <SidebarMenuItem to='vr/what-is-vr' title='What is VR?' hasBullet={true} />
            <SidebarMenuItem to='vr/our-platform' title='Our Platform' hasBullet={true} />
        </SidebarMenuItemWithSub>
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
            to='/crafted/pages'
            title='5. Grade'
            fontIcon='bi-archive'
            icon='element-plus'
        >
            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 1: Sun, Earth and Moon' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-1' title='Test 1 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-2' title='Test 2 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-3' title='Test 3 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 2: The World of Living Things' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-4' title='Test 4 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-5' title='Test 5 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-6' title='Test 6 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 3: Measurement of Force and Friction' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-7' title='Test 7 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-8' title='Test 8 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-9' title='Test 9 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 4: Matter and Change' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-10' title='Test 10 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-11' title='Test 11 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-12' title='Test 12 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 5: Propagation of Light' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-13' title='Test 13 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-14' title='Test 14 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-15' title='Test 15 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 6: Human and Environment' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-16' title='Test 16 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-17' title='Test 17 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-18' title='Test 18 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='UNIT 7: Electrical Circuit Elements' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-5/test-19' title='Test 19 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-20' title='Test 20 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-5/test-21' title='Test 21 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
            to='/crafted/pages'
            title='6. Grade'
            fontIcon='bi-archive'
            icon='element-plus'
        >
            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 1: Solar System and Eclipses' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-1' title='Test 1 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-2' title='Test 2 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-3' title='Test 3 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 2: Systems in Our Body' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-4' title='Test 4 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-5' title='Test 5 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-6' title='Test 6 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 3: Force and Motion' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-7' title='Test 7 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-8' title='Test 8 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-9' title='Test 9 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 4: Matter and Heat' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-10' title='Test 10 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-11' title='Test 11 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-12' title='Test 12 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 5: Sound and Its Properties' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-13' title='Test 13 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-14' title='Test 14 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-15' title='Test 15 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 6: Our Body Systems and Health' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-16' title='Test 16 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-17' title='Test 17 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-18' title='Test 18 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 7: Conduction of Electricity' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-6/test-19' title='Test 19 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-20' title='Test 20 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-6/test-21' title='Test 21 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
            to='/crafted/pages'
            title='7. Grade'
            fontIcon='bi-archive'
            icon='element-plus'
        >
            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 1: Solar System and Beyond' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-1' title='Test 1 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-2' title='Test 2 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-3' title='Test 3 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 2: Cell and Divisions' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-4' title='Test 4 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-5' title='Test 5 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-6' title='Test 6 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 3: Force and Energy' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-7' title='Test 7 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-8' title='Test 8 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-9' title='Test 9 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 4: Pure Substances and Mixtures' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-10' title='Test 10 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-11' title='Test 11 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-12' title='Test 12 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 5: Interaction of Light with Matter' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-13' title='Test 13 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-14' title='Test 14 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-15' title='Test 15 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 6: Reproduction, Growth and Development in Living Things' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-16' title='Test 16 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-17' title='Test 17 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-18' title='Test 18 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>

            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Unit 7: Electrical Circuits' hasBullet={true}>
                <SidebarMenuItem to='tests/grade-7/test-19' title='Test 19 (easy)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-20' title='Test 20 (normal)' hasBullet={true} />
                <SidebarMenuItem to='tests/grade-7/test-21' title='Test 21 (hard)' hasBullet={true} />
            </SidebarMenuItemWithSub>
        </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}

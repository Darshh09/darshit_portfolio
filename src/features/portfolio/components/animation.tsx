import React from 'react'
import { Panel, PanelTitleSup, PanelHeader, PanelTitle } from './panel'
import FirstAnimation from '@/components/firstAnimation'
import { SecondAnimation } from '@/components/secondAnimation'

export const Animation = () => {
  return (
    <Panel id="animations">
    <PanelHeader>
      <PanelTitle>
        Animations
        <PanelTitleSup>1</PanelTitleSup>
      </PanelTitle>
    </PanelHeader>
    <div className="relative py-6">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-2 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mx-4 items-center justify-center">
          <FirstAnimation />
          {/* <SecondAnimation /> */}
        </div>
      </div>
    </Panel>
  )
}

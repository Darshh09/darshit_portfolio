import React from 'react'
import { Panel, PanelTitleSup, PanelHeader, PanelTitle } from './panel'
import FirstAnimation from '@/components/firstAnimation'
import { SecondAnimation } from '@/components/secondAnimation'
import { Separator } from '@/components/ui/separator'

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

        <div className="grid grid-cols-2 gap-2 p-4 items-center justify-center">
          <FirstAnimation />

          {/* <SecondAnimation /> */}
        </div>
      </div>
    </Panel>
  )
}

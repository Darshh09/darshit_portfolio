import { DarshitMark } from '@/components/darshit-mark';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '@/components/text-reveal-card';

import { Panel, PanelHeader, PanelTitle } from './panel';

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <div className="flex items-center justify-center">
        <TextRevealCard
          text={<span className="text-lg font-bold text-center">Darshit Shukla || Design Engineer || Hover me to see the mark</span>}
          revealText={<DarshitMark className=" w-auto sm:h-24" />}
          className="w-full max-w-[40rem]"
        >

        </TextRevealCard>
      </div>
    </Panel>
  );
}

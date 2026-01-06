import { BrandContextMenu } from '@/components/brand-context-menu';
import { DarshitMark } from '@/components/darshit-mark';
import { TextRevealCard } from '@/components/text-reveal-card';
import { cn } from '@/lib/utils';

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          'aspect-2/1 border-x border-edge select-none sm:aspect-3/1',
          'flex items-center justify-center text-black dark:text-white',
          'screen-line-before screen-line-after before:-top-px after:-bottom-px',
          'bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5'
        )}
      >
       <div className="flex items-center justify-center">
        <TextRevealCard
          text={<span className="text-2xl font-bold text-center">Hover me to see the mark</span>}
          revealText={<DarshitMark className=" w-auto h-12" />}
          className="w-full max-w-[40rem]"
        >

        </TextRevealCard>
      </div>
      </div>
    </BrandContextMenu>
  );
}

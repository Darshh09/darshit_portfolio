import { ArrowUpRightIcon } from "lucide-react";

import type { SocialLink } from "@/features/portfolio/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({
  icon,
  title,
  description,
  href,
  isBookMeeting,
}: SocialLink) {
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target={isBookMeeting ? "_self" : "_blank"}
      rel={isBookMeeting ? "" : "noopener noreferrer"}
      data-book-meeting={isBookMeeting ? "true" : undefined}
    >
      <div className="relative size-12 shrink-0 flex items-center justify-center">
        <div className="[&_svg]:size-6 [&_svg]:text-muted-foreground">
          {icon}
        </div>
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}

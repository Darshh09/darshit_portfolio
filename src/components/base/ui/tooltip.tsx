"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

function TooltipRoot(props: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function Tooltip(props: TooltipPrimitive.Root.Props) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger(
  props: TooltipPrimitive.Trigger.Props & {
    asChild?: boolean;
    render?: React.ReactElement;
  }
) {
  const { asChild, children, render, ...rest } = props;
  // If asChild is used, convert to render prop pattern to avoid nested buttons
  if (asChild && React.isValidElement(children)) {
    const child = React.Children.only(children) as React.ReactElement<{
      onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    }>;
    return (
      <TooltipPrimitive.Trigger
        data-slot="tooltip-trigger"
        render={((triggerProps: any) => {
          // Merge onClick handlers - both from triggerProps and child props
          const existingOnClick = child.props.onClick;
          const triggerOnClick = triggerProps.onClick;

          const mergedProps = {
            ...triggerProps,
            onClick: (e: React.MouseEvent<HTMLElement>) => {
              // Call child's onClick first, then trigger's onClick
              existingOnClick?.(e);
              triggerOnClick?.(e);
            },
          };

          return React.cloneElement(child, mergedProps);
        }) as TooltipPrimitive.Trigger.Props["render"]}
        {...props}
      />
    );
  }

  // If render prop is provided, use it directly
  if (render && React.isValidElement(render)) {
    const renderElement = render as React.ReactElement<{
      onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    }>;
    return (
      <TooltipPrimitive.Trigger
        data-slot="tooltip-trigger"
        render={((triggerProps: any) => {
          // Merge onClick handlers
          const existingOnClick = renderElement.props.onClick;
          const triggerOnClick = triggerProps.onClick;

          const mergedProps = {
            ...triggerProps,
            onClick: (e: React.MouseEvent<HTMLElement>) => {
              existingOnClick?.(e);
              triggerOnClick?.(e);
            },
          };

          return React.cloneElement(render, mergedProps);
        }) as TooltipPrimitive.Trigger.Props["render"]}
        {...rest}
      >
        {children as React.ReactNode}
      </TooltipPrimitive.Trigger>
    );
  }

  // Default: render children normally
  return (
    <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...rest}>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

function TooltipContent({
  className,
  side = "top",
  sideOffset = 8,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "z-50 w-fit max-w-xs origin-(--transform-origin) bg-foreground text-background",
            "rounded-lg px-4 py-2 text-sm data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
            "data-instant:duration-0",
            "selection:bg-background selection:text-foreground",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow
            className={cn(
              "bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5",
              "size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs",
              "data-[side=bottom]:rounded-br-sm data-[side=top]:rounded-tl-sm"
            )}
          />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
};

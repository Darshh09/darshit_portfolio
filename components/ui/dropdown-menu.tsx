'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { IconChevronDown } from '@tabler/icons-react';

interface DropdownMenuContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

const DropdownMenuContext = createContext<DropdownMenuContextType | null>(null);

function useDropdownMenu() {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('DropdownMenu components must be used within DropdownMenu');
  }
  return context;
}

interface DropdownMenuProps {
  children: React.ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        triggerRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuTrigger({ asChild, children, className }: DropdownMenuTriggerProps) {
  const { open, setOpen, triggerRef } = useDropdownMenu();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: triggerRef,
      onClick: (e: React.MouseEvent) => {
        setOpen(!open);
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      },
      className: cn(children.props.className, className),
    });
  }

  return (
    <button
      ref={triggerRef}
      onClick={() => setOpen(!open)}
      className={cn('inline-flex items-center justify-center', className)}
    >
      {children}
    </button>
  );
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  collisionPadding?: number;
  onCloseAutoFocus?: (e: Event) => void;
}

export function DropdownMenuContent({
  children,
  className,
  collisionPadding = 8,
  onCloseAutoFocus,
}: DropdownMenuContentProps) {
  const { open, setOpen, triggerRef, contentRef } = useDropdownMenu();
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (open && triggerRef.current && contentRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = triggerRect.bottom + 8;
      let left = triggerRect.left;

      // Adjust if content would overflow right
      if (left + contentRect.width > viewportWidth - collisionPadding) {
        left = viewportWidth - contentRect.width - collisionPadding;
      }

      // Adjust if content would overflow left
      if (left < collisionPadding) {
        left = collisionPadding;
      }

      // Adjust if content would overflow bottom
      if (top + contentRect.height > viewportHeight - collisionPadding) {
        top = triggerRect.top - contentRect.height - 8;
      }

      setPosition({ top, left });
    }
  }, [open, collisionPadding, triggerRef, contentRef]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      className={cn(
        'fixed z-50 min-w-[8rem] overflow-hidden rounded-lg border border-white/10 bg-black/95 backdrop-blur-sm shadow-lg',
        className
      )}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {children}
    </div>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  asChild?: boolean;
}

export function DropdownMenuItem({ children, className, onClick, asChild }: DropdownMenuItemProps) {
  const { setOpen } = useDropdownMenu();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    if (!asChild) {
      setOpen(false);
    }
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      className: cn(
        'flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10',
        children.props.className,
        className
      ),
    });
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10',
        className
      )}
    >
      {children}
    </button>
  );
}


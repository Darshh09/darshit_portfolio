"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { motion } from "motion/react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MAIN_NAV } from "@/config/site";
import { Icons } from "@/components/icons";

import { Button } from "./ui/button";
import { Kbd, KbdGroup } from "./ui/kbd";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useHotkeys("mod+k, slash", (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  });

  return (
    <>
      <motion.div layoutId="command-menu-button">
        <Button
          variant="secondary"
          className="h-8 gap-1.5 rounded-full border border-input bg-white px-2.5 text-muted-foreground shadow-xs select-none hover:bg-white dark:bg-input/30 dark:hover:bg-input/30"
          onClick={() => setOpen(true)}
        >
          <Icons.search aria-hidden />

          <span className="font-sans text-sm/4 font-medium sm:hidden">
            Search
          </span>

          <KbdGroup className="hidden sm:in-[.os-macos_&]:flex">
            <Kbd className="w-5 min-w-5">⌘</Kbd>
            <Kbd className="w-5 min-w-5">K</Kbd>
          </KbdGroup>

          <KbdGroup className="hidden sm:not-[.os-macos_&]:flex">
            <Kbd>Ctrl</Kbd>
            <Kbd className="w-5 min-w-5">K</Kbd>
          </KbdGroup>
        </Button>
      </motion.div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {MAIN_NAV.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen(false);
              }}
            >
              Light
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen(false);
              }}
            >
              Dark
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen(false);
              }}
            >
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}


"use client"

import * as React from "react"
import { Sparkles, FileText, Upload, File, Keyboard } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchComponent({ open, onOpenChange }: CommandPaletteProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[640px] gap-0 p-0  bg-[#1C1C1C]">
        <Command className="rounded-lg border-0">
          <CommandInput
            placeholder="Search your library..."
            className="h-14 px-4 text-base text-white/90 bg-transparent border-0 focus:ring-0"
          />
          <CommandList className="px-2 pb-2">
            <CommandGroup heading="Actions" className="px-2">
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <Sparkles className="w-4 h-4" />
                <span>Ask AI...</span>
              </CommandItem>
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <FileText className="w-4 h-4" />
                <span>Create note</span>
              </CommandItem>
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <Upload className="w-4 h-4" />
                <span>Import file</span>
              </CommandItem>
            </CommandGroup>

            <CommandGroup heading="Library" className="px-2 mt-2">
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <File className="w-4 h-4" />
                <span>Untitled</span>
              </CommandItem>
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <FileText className="w-4 h-4" />
                <span>The Mechanisms of Nuclear Fission</span>
              </CommandItem>
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <FileText className="w-4 h-4" />
                <span>Welcome guide</span>
              </CommandItem>
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <FileText className="w-4 h-4" />
                <span>Prompts to get you started</span>
              </CommandItem>
              <CommandItem className="flex items-center gap-2 px-2 py-3 dark:text-white text-black rounded-md cursor-pointer bg-white/10">
                <Keyboard className="w-4 h-4" />
                <span>Keyboard shortcuts</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}


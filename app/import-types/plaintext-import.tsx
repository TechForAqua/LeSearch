"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Editor from "../components/editor"

interface PlainTextImportProps {
  onBack: () => void
}

export default function PlainTextImport({ onBack }: PlainTextImportProps) {



  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 dark:text-white/70 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>
      {/* <Textarea
        placeholder="Enter or paste your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
      />
      <Button onClick={handleImport}>Import</Button> */}
      <Editor />
    </div>
  )
}


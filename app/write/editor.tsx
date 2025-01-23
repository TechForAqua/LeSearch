"use client"

import type { Block } from "@blocknote/core"
import "@blocknote/core/fonts/inter.css"
import { useCreateBlockNote } from "@blocknote/react"
import { BlockNoteView } from "@blocknote/mantine"
import "@blocknote/mantine/style.css"
import { useState, useEffect } from "react"

export function Editor() {
  // Stores the document JSON.
  const [blocks, setBlocks] = useState<Block[]>([])
  console.log("blocks fix",blocks)
  const [mounted, setMounted] = useState(false)

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "heading",
        content: "This is a heading block",
      },
      {
        type: "paragraph",
        content: "This is a paragraph block",
      },
      {
        type: "paragraph",
      },
    ],
  })

  // Only render the editor after mounting on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex-1 bg-white rounded-lg shadow-inner overflow-hidden">
        <div className="p-4">Loading editor...</div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-white rounded-lg shadow-inner overflow-hidden">
      <BlockNoteView
        editor={editor}
        onChange={() => {
          setBlocks(editor.document)
        }}
        theme="light"
      />
    </div>
  )
}


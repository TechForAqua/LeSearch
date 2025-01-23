"use client";

import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";

export default function App() {
  // Stores the document JSON.
  const [blocks, setBlocks] = useState<Block[]>([]);

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
  });

  // Renders the editor instance and its document JSON.
  return (
    <div className="flex flex-col h-full p-6 bg-gray-50 rounded-lg shadow-sm">
      {/* Header */}
      <div className="text-2xl font-bold text-gray-800 mb-4">BlockNote Editor</div>

      {/* Editor Container */}
      <div className="flex-1 bg-white rounded-lg shadow-inner overflow-hidden">
        <BlockNoteView
          editor={editor}
          onChange={() => {
            // Saves the document JSON to state.
            setBlocks(editor.document);
          }}
          theme="light" // You can change this to "dark" for dark mode
        />
      </div>

      {/* Optional: Document JSON Preview */}
      {/* <div className="mt-6">
        <div className="text-lg font-semibold text-gray-700 mb-2">Document JSON:</div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
          <code className="text-sm text-gray-600">
            {JSON.stringify(blocks, null, 2)}
          </code>
        </pre>
      </div> */}
    </div>
  );
}
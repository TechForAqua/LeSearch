import { Editor } from "./editor"

export default function WritePage() {
  return (
    <div className="flex flex-col h-full p-6 bg-gray-50 rounded-lg shadow-sm">
      {/* Header */}
      <div className="text-2xl font-bold text-gray-800 mb-4">BlockNote Editor</div>

      {/* Editor Container */}
      <Editor />
    </div>
  )
}


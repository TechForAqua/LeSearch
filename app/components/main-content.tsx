import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Mic, Sparkles } from "lucide-react"
import { FileImport } from "./file-import"
import { AudioRecorder } from "./audio-recorder"




export function MainContent() {
  const [activeCard, setActiveCard] = useState<"write" | "import" | "record" | null>(null)

  return (
    <div className="flex-1 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Welcome to Unriddle Tarun</h1>
        <p className="text-gray-500 mb-8">Import documents and video, start writing or create a new recording</p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="p-6 hover:bg-gray-50 cursor-pointer" onClick={() => setActiveCard("write")}>
            <FileText className="h-6 w-6 mb-4" />
            <h3 className="font-semibold mb-1">Write</h3>
            <p className="text-sm text-gray-500">Write and cite with AI</p>
          </Card>
          <Card className="p-6 hover:bg-gray-50 cursor-pointer" onClick={() => setActiveCard("import")}>
            <Upload className="h-6 w-6 mb-4" />
            <h3 className="font-semibold mb-1">Import</h3>
            <p className="text-sm text-gray-500">Chat with docs and videos</p>
          </Card>
          <Card className="p-6 hover:bg-gray-50 cursor-pointer relative" onClick={() => setActiveCard("record")}>
            <Mic className="h-6 w-6 mb-4" />
            <h3 className="font-semibold mb-1">Record</h3>
            <p className="text-sm text-gray-500">Record and chat with audio</p>
            <Badge className="absolute top-4 right-4" variant="secondary">
              NEW
            </Badge>
          </Card>
        </div>

        {activeCard === "import" && <FileImport />}
        {activeCard === "record" && <AudioRecorder />}

        <Input placeholder="Search your library..." className="mb-8" />

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-2">Actions</h2>
            <Button variant="secondary" className="w-full justify-start gap-2">
              <Sparkles className="h-4 w-4" /> Ask AI...
            </Button>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-2">Library</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" /> The Mechanisms of Nuclear Fission
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" /> Welcome guide
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" /> Prompts to get you started
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" /> Keyboard shortcuts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


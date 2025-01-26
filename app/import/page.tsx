"use client"

import { useState } from "react"
import { FileText, Globe, Type, Image, Video, Mic, Info } from "lucide-react"
import { Card } from "@/components/ui/card"

import DocumentImport from "../import-types/document-import"
import WebsiteImport from "../import-types/website-import"
import PlainTextImport from "../import-types/plaintext-import"
import ImageImport from "../import-types/image-import"
import VideoImport from "../import-types/video-import"
import RecordingImport from "../import-types/recording-import"

// Dynamically import PDF viewer to avoid SSR issues

interface ImportOption {
  id: string
  icon: React.ComponentType
  label: string
  hasInfo?: boolean
  component: React.ComponentType<{ onBack: () => void }>
}

export default function DataImport() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const importOptions: ImportOption[] = [
    { id: "document", icon: FileText, label: "Document", hasInfo: true, component: DocumentImport },
    { id: "website", icon: Globe, label: "Website", component: WebsiteImport },
    { id: "plaintext", icon: Type, label: "Plain text", component: PlainTextImport },
    { id: "image", icon: Image, label: "Image", hasInfo: true, component: ImageImport },
    { id: "video", icon: Video, label: "Video", hasInfo: true, component: VideoImport },
    { id: "recording", icon: Mic, label: "Recording", hasInfo: true, component: RecordingImport },
  ]

  const handleOptionClick = (id: string) => {
    setSelectedOption(id)
  }

  const handleGoBack = () => {
    setSelectedOption(null)
  }

  const SelectedComponent = selectedOption
    ? importOptions.find((option) => option.id === selectedOption)?.component
    : null

  return (
    <div className="min-h-screen dark:bg-black dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        {selectedOption && SelectedComponent ? (
          <SelectedComponent onBack={handleGoBack} />
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-8">Select source to import data</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importOptions.map((option) => (
                <Card
                  key={option.id}
                  className="dark:bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer p-4"
                  onClick={() => handleOptionClick(option.id)}
                >
                  <div className="flex items-center gap-3">
                    <option.icon  />
                    <span className="text-lg">{option.label}</span>
                    {option.hasInfo && <Info className="w-4 h-4 text-white/30 ml-auto" />}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}


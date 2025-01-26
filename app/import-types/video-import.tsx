"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoImportProps {
  onBack: () => void
}

export default function VideoImport({ onBack }: VideoImportProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideoUrl(url)
    }
  }

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 dark:text-white/70 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>
      {videoUrl ? (
        <video src={videoUrl} controls className="w-full max-h-[600px] bg-zinc-900 rounded-lg" />
      ) : (
        <div className="text-center">
          <Button onClick={() => document.getElementById("video-upload")?.click()}>Upload Video</Button>
          <input id="video-upload" type="file" accept="video/*" className="hidden" onChange={handleFileUpload} />
        </div>
      )}
    </div>
  )
}


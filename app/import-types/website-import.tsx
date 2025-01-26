"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WebsiteImportProps {
  onBack: () => void
}

export default function WebsiteImport({ onBack }: WebsiteImportProps) {
  const [url, setUrl] = useState("")
  const [content, setContent] = useState<string | null>(null)

  const handleImport = async () => {
    // In a real application, you would implement web scraping here
    // For this example, we'll just set some dummy content
    setContent(`Imported content from ${url}`)
  }

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 dark:text-white/70 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>
      <div className="flex gap-2">
        <Input type="url" placeholder="Enter website URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <Button onClick={handleImport}>Import</Button>
      </div>
      {content && (
        <div className="mt-4 p-4 bg-zinc-900 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Imported Content:</h2>
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}


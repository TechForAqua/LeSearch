"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const PDFViewer = dynamic(() => import("../import/pdf-viewer"), { ssr: false })

interface DocumentImportProps {
  onBack: () => void
}

export default function DocumentImport({ onBack }: DocumentImportProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file)
      setPdfUrl(url)
    }
  }

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 dark:text-white/70 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>
      {pdfUrl ? (
        <div className="h-[800px] bg-white rounded-lg overflow-hidden">
          <PDFViewer url={pdfUrl} />
        </div>
      ) : (
        <div className="text-center">
          <Button onClick={() => document.getElementById("file-upload")?.click()}>Upload PDF</Button>
          <input id="file-upload" type="file" accept=".pdf" className="hidden" onChange={handleFileUpload} />
        </div>
      )}
    </div>
  )
}


"use client"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FileImport() {
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files))
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files) {
      setFiles(Array.from(event.dataTransfer.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <div
      className="p-6 border-2 border-dashed rounded-lg hover:border-gray-400 cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" multiple />
      <div className="text-center">
        <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <h3 className="font-semibold mb-1">Import</h3>
        <p className="text-sm text-gray-500 mb-4">Click or drag files to upload</p>
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Selected Files:</h4>
            <ul className="text-left">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between mb-2">
                  <span className="truncate">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(index)
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}


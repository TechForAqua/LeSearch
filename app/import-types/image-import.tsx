"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageImportProps {
  onBack: () => void
}

export default function ImageImport({ onBack }: ImageImportProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 dark:text-white/70 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>
      {imageUrl ? (
        <div className="relative h-[400px] bg-zinc-900 rounded-lg overflow-hidden">
          <Image src={imageUrl || "/placeholder.svg"} alt="Uploaded image" layout="fill" objectFit="contain" />
        </div>
      ) : (
        <div className="text-center">
          <Button onClick={() => document.getElementById("image-upload")?.click()}>Upload Image</Button>
          <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
        </div>
      )}
    </div>
  )
}


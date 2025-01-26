"use client"

import { useState, useRef } from "react"
import { ArrowLeft, Mic, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecordingImportProps {
  onBack: () => void
}

export default function RecordingImport({ onBack }: RecordingImportProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorderRef.current = new MediaRecorder(stream)
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data)
      }
    }
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" })
      const url = URL.createObjectURL(blob)
      setAudioUrl(url)
      chunksRef.current = []
    }
    mediaRecorderRef.current.start()
    setIsRecording(true)
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 dark:text-white/70 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>
      <div className="flex justify-center gap-4">
        {isRecording ? (
          <Button onClick={stopRecording} variant="destructive">
            <Square className="w-4 h-4 mr-2" />
            Stop Recording
          </Button>
        ) : (
          <Button onClick={startRecording}>
            <Mic className="w-4 h-4 mr-2" />
            Start Recording
          </Button>
        )}
      </div>
      {audioUrl && (
        <div className="mt-4">
          <audio src={audioUrl} controls className="w-full" />
        </div>
      )}
    </div>
  )
}


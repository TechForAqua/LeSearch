"use client"

import { useState, useRef } from "react"
import { Mic, Square, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          const audioURL = URL.createObjectURL(event.data)
          setAudioURL(audioURL)
        }
      }
      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Error accessing microphone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="p-6 border rounded-lg">
      <div className="text-center">
        <Mic className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <h3 className="font-semibold mb-1">Record</h3>
        <p className="text-sm text-gray-500 mb-4">Click to start recording audio</p>
        {isRecording ? (
          <Button onClick={stopRecording} variant="destructive">
            <Square className="h-4 w-4 mr-2" />
            Stop Recording
          </Button>
        ) : (
          <Button onClick={startRecording}>
            <Mic className="h-4 w-4 mr-2" />
            Start Recording
          </Button>
        )}
        {audioURL && (
          <div className="mt-4">
            <audio ref={audioRef} src={audioURL} />
            <Button onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? "Pause" : "Play"} Recording
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}


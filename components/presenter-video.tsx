"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Volume2, VolumeX, Play } from "lucide-react"

interface PresenterVideoProps {
  src: string
  label: string
  className?: string
}

export function PresenterVideo({ src, label, className = "" }: PresenterVideoProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
        setIsMuted(false)
        videoRef.current.muted = false
      }
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={`relative max-w-[280px] sm:max-w-[420px] w-full mx-auto ${className}`}>
      <p className="text-xs sm:text-sm font-medium text-slate-500 mb-2 sm:mb-3 text-center">{label}</p>
      <div
        className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          src={src}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          className="w-full aspect-[9/16] object-cover"
        ></video>

        {/* Play overlay when not playing - smaller on mobile */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="h-6 w-6 sm:h-8 sm:w-8 text-slate-900 ml-0.5 sm:ml-1" />
            </div>
          </div>
        )}

        {/* Mute/Unmute button - larger touch target on mobile */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 h-10 w-10 sm:h-10 sm:w-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" /> : <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        )}
      </div>
    </div>
  )
}

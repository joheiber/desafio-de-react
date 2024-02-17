"use client"
import { useState, useEffect, useRef } from "react";

export default function VideoPlayer({ src }) {
  const referenciaVideo = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (isPlaying) {
      referenciaVideo.current.play()
    } else {
      referenciaVideo.current.pause()
    }
  }, [isPlaying])

  return <video onClick={() => {
    setIsPlaying(!isPlaying); console.log(`click de video ${isPlaying}`)
  }} src={src} ref={referenciaVideo} loop autoplay></video>

}
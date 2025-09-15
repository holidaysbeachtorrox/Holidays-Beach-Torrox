"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface FloatingCTAProps {
  dict: any
}

export function FloatingCTA({ dict }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3"
      >
        <Phone className="w-5 h-5 mr-2" />
        {dict.hero.cta}
      </Button>
    </div>
  )
}

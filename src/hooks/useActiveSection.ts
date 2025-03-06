// hooks/useActiveSection.tsx
import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null) // Cambiado a string | null

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si la sección es 'imagen', se establece a null
            setActiveSection(
              entry.target.id === 'imagen' ? null : entry.target.id
            )
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [sectionIds])

  return activeSection
}
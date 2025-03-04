
import { Check, X } from "lucide-react"
import { useState, useEffect } from "react"

interface ChecklistSectionProps {
  imageSrc: string
  included: string[]
  excluded: string[]
}

export function ChecklistSection({ imageSrc, included, excluded }: ChecklistSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => setImageLoaded(true)
  }, [imageSrc])
  
  return (
    <div className="space-y-8">
      <div className="safari-image rounded-lg overflow-hidden h-80">
        <div className={`w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={imageSrc} 
            alt="Safari experience"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`absolute inset-0 bg-safari-200 image-loading transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg safari-shadow">
          <h3 className="text-xl font-display font-bold mb-4 text-safari-800 flex items-center">
            <Check className="h-5 w-5 mr-2 text-primary" />
            What's Included
          </h3>
          
          <ul className="space-y-3">
            {included.map((item, index) => (
              <li key={index} className="flex">
                <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-safari-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg safari-shadow">
          <h3 className="text-xl font-display font-bold mb-4 text-safari-800 flex items-center">
            <X className="h-5 w-5 mr-2 text-destructive" />
            What's Excluded
          </h3>
          
          <ul className="space-y-3">
            {excluded.map((item, index) => (
              <li key={index} className="flex">
                <X className="h-5 w-5 mr-3 text-destructive flex-shrink-0" />
                <span className="text-safari-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChecklistSection

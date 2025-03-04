
import { User } from "lucide-react"

interface GuideCardProps {
  name: string
  imageSrc: string
}

export function GuideCard({ name, imageSrc }: GuideCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => setImageLoaded(true)
  }, [imageSrc])

  return (
    <div className="bg-white p-6 rounded-lg safari-shadow hover:shadow-md transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-safari-100">
          <div className={`w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src={imageSrc} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <User className="h-8 w-8 text-safari-400" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-safari-800">{name}</h3>
          <p className="text-safari-600 text-sm">Safari Guide</p>
        </div>
      </div>
      
      <button className="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all">
        Read about your guide
      </button>
    </div>
  )
}

import { useState, useEffect } from "react"
export default GuideCard

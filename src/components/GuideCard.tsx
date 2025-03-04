
import { User, Star } from "lucide-react"
import { useState, useEffect } from "react"

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
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-safari-100 mb-4 ring-4 ring-primary/20">
          <div className={`w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src={imageSrc} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <User className="h-10 w-10 text-safari-400" />
          </div>
        </div>
        <h3 className="text-2xl font-display font-bold text-safari-800 mb-1">{name}</h3>
        <p className="text-safari-600 text-sm mb-2">Expert Safari Guide</p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
      </div>
      
      <p className="text-safari-600 text-center mb-6 italic">
        "With over 15 years of experience guiding safaris in Namibia, I'm excited to share my knowledge and passion for wildlife conservation with you."
      </p>
      
      <button className="w-full px-4 py-3 bg-white border-2 border-primary text-black rounded-lg hover:bg-primary hover:text-black transition-all font-medium">
        Meet Your Guide
      </button>
    </div>
  )
}

export default GuideCard

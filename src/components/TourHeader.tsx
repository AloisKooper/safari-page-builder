
import { MapPin, Phone } from "lucide-react"
import { useState, useEffect } from "react"

interface TourHeaderProps {
  tourName: string
  location: string
  description: string
  imageSrc: string
}

export function TourHeader({ tourName, location, description, imageSrc }: TourHeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => setImageLoaded(true)
  }, [imageSrc])

  return (
    <section className="relative w-full h-[40vh] md:h-[40vh] lg:h-[40vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-safari-900/30 z-10" />
      
      <div className="absolute inset-0 w-full h-full">
        <div className={`w-full h-full transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={imageSrc} 
            alt={tourName}
            className="w-full h-full object-cover animate-image-reveal"
          />
        </div>
        <div className={`absolute inset-0 bg-safari-200 image-loading transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      <div className="relative z-20 container mx-auto h-full flex flex-col md:flex-row">
        {/* Left column - handled by the background image */}
        <div className="w-full md:w-1/2 hidden md:block"></div>
        
        {/* Right column */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8">
          <div className="bg-white/90 safari-blur p-8 rounded-lg max-w-md w-full safari-shadow stagger-animation">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-primary h-5 w-5" />
              <span className="text-primary font-medium">{location}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-safari-900">{tourName}</h1>
            
            <p className="text-safari-700 mb-6">{description}</p>
            
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourHeader

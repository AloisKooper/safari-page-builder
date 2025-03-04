
import { MapPin, Phone, Calendar, Star } from "lucide-react"
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
    <section className="relative w-full h-[60vh]">
      {/* Hero content */}
      <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center">
        {/* Left column content */}
        <div className="w-full md:w-1/2 bg-safari-900 text-white flex flex-col justify-center h-full py-16 px-8">
          <div className="animate-fade-up animation-delay-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white/90 text-sm">100+ Reviews</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <span className="text-white font-medium text-lg">{location}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
              {tourName}
            </h1>
            
            <p className="text-white/90 text-xl mb-8 max-w-xl">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-primary text-black px-6 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium text-lg">
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-4 rounded-lg hover:bg-white/20 transition-all shadow-lg hover:shadow-xl font-medium text-lg">
                <Calendar className="h-5 w-5" />
                <span>View Availability</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right column with image that fills the column */}
        <div className="w-full md:w-1/2 h-full bg-safari-100">
          <img 
            src={imageSrc}
            alt={tourName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default TourHeader

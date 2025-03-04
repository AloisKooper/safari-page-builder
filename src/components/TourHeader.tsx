
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
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`w-full h-full transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={imageSrc} 
            alt={tourName}
            className="w-full h-full object-cover animate-image-reveal"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-safari-900/70 to-safari-900/30"></div>
        <div className={`absolute inset-0 bg-safari-200 image-loading transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Left column content */}
        <div className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center h-full py-20">
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
              <button className="flex items-center gap-2 bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium text-lg">
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
        
        {/* Right column with animated image or decorative element */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center">
          <div className="relative w-[400px] h-[500px] safari-image rounded-2xl overflow-hidden safari-shadow animate-fade-up animation-delay-300">
            <img 
              src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&q=85&w=800" 
              alt="Safari experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-safari-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((person) => (
                    <div key={person} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/${person % 2 === 0 ? 'women' : 'men'}/${person + 20}.jpg`}
                        alt="Tourist"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-white/90">Join our next tour</span>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg mt-3">
                <p className="text-white text-sm italic">
                  "The most incredible wildlife experience of my life. Our guide was exceptional!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourHeader

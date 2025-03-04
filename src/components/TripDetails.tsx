
import { useState } from "react"
import { Bed, Car, Clock, Users, Calendar, DollarSign, MapPin } from "lucide-react"

export interface DetailItem {
  icon: "bed" | "car" | "clock" | "users" | "calendar" | "dollar"
  title: string
  description: string
}

interface TripDetailsProps {
  details: DetailItem[]
}

export function TripDetails({ details }: TripDetailsProps) {
  const getIcon = (iconName: DetailItem["icon"]) => {
    switch (iconName) {
      case "bed":
        return <Bed className="h-6 w-6 text-primary" />
      case "car":
        return <Car className="h-6 w-6 text-primary" />
      case "clock":
        return <Clock className="h-6 w-6 text-primary" />
      case "users":
        return <Users className="h-6 w-6 text-primary" />
      case "calendar":
        return <Calendar className="h-6 w-6 text-primary" />
      case "dollar":
        return <DollarSign className="h-6 w-6 text-primary" />
      default:
        return <Clock className="h-6 w-6 text-primary" />
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-12">
              <h2 className="text-4xl font-display font-bold text-safari-800 relative z-10">
                Trip Details
              </h2>
              <div className="absolute -bottom-3 left-0 w-20 h-2 bg-secondary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {details.map((detail, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl safari-shadow group hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="h-2 bg-primary w-full"></div>
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-primary/10 rounded-full">
                      {getIcon(detail.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-safari-800 mb-3 group-hover:text-primary transition-colors">
                      {detail.title}
                    </h3>
                    <p className="text-safari-600">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Safari highlights image */}
          <div className="hidden md:block relative">
            <div className="sticky top-20">
              <div className="relative z-10 rounded-xl overflow-hidden safari-shadow h-[32rem] safari-image">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=85&w=600" 
                  alt="Safari highlights"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Wildlife Observation</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Unforgettable Encounters
                  </h3>
                  <p className="text-white/90">
                    Our expert guides will help you spot and learn about the incredible wildlife of Namibia
                  </p>
                </div>
              </div>
              
              <div className="absolute top-12 -left-12 w-40 h-40 bg-secondary/50 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TripDetails

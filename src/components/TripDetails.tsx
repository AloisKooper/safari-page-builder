import { useState } from "react"
import { Bed, Car, Clock, Users, Calendar, DollarSign, MapPin, Check } from "lucide-react"

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
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Safari Experience
          </span>
          <h2 className="text-5xl font-display font-bold text-safari-800 mb-6">
            Trip Details
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl group hover:shadow-xl transition-all duration-300 border border-safari-100 hover:border-primary/20 overflow-hidden"
            >
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {getIcon(detail.icon)}
                </div>
                <h3 className="text-xl font-display font-bold text-safari-800 mb-4 group-hover:text-primary transition-colors">
                  {detail.title}
                </h3>
                <p className="text-safari-600">{detail.description}</p>
              </div>
            </div>
          ))}
          
          {/* Price Card */}
          <div className="bg-gradient-to-br from-primary/90 to-primary rounded-2xl text-white hover:shadow-xl transition-all duration-300 border border-primary/20 overflow-hidden">
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 rounded-full">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                From $2,499 per person
              </h3>
              <p className="text-white/90 mb-6">
                All-inclusive package with luxury accommodations, expert guides, and unforgettable experiences
              </p>
              <button className="mt-2 py-3 px-6 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden h-[400px] safari-image">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=85&w=1200" 
                alt="Safari highlights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Wildlife Observation</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-3">
                  Unforgettable Encounters
                </h3>
                <p className="text-white/90 text-lg">
                  Our expert guides will help you spot and learn about the incredible wildlife of Namibia
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-display font-bold text-safari-800 mb-6">
              Safari Highlights
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-safari-800 mb-1">Expert Naturalist Guides</h4>
                  <p className="text-safari-600">Knowledgeable guides with years of experience in tracking wildlife</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-safari-800 mb-1">Premium Safari Vehicles</h4>
                  <p className="text-safari-600">Custom 4x4 vehicles with popup roofs for unobstructed wildlife viewing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-safari-800 mb-1">Luxury Accommodations</h4>
                  <p className="text-safari-600">Stay in exclusive lodges and tented camps with stunning views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TripDetails

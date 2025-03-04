
import { useState } from "react"
import { Bed, Car, Clock, Users, Calendar, DollarSign } from "lucide-react"

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
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-10 text-safari-800">Trip Details</h2>
            
            <div className="space-y-8">
              {details.map((detail, index) => (
                <div 
                  key={index} 
                  className="flex gap-5 p-5 bg-white rounded-lg safari-shadow group hover:shadow-md transition-all"
                >
                  <div className="mt-1 flex-shrink-0">
                    {getIcon(detail.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-safari-800 mb-2 group-hover:text-primary transition-colors">
                      {detail.title}
                    </h3>
                    <p className="text-safari-600">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - spacer */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  )
}

export default TripDetails

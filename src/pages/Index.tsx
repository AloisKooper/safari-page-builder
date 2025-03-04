
import { useState, useEffect } from "react"
import TourHeader from "@/components/TourHeader"
import TripDetails from "@/components/TripDetails"
import BookingSection from "@/components/BookingSection"
import ChecklistSection from "@/components/ChecklistSection"
import TabContent from "@/components/TabContent"
import GuideCard from "@/components/GuideCard"
import QASection from "@/components/QASection"
import GoogleMap from "@/components/GoogleMap"

const Index = () => {
  const [isReady, setIsReady] = useState(false)
  
  // Set isReady to true after component mounts to trigger animations
  useEffect(() => {
    setIsReady(true)
  }, [])
  
  // This is placeholder content that would be populated from your CMS
  const tourData = {
    name: "Namibian Wildlife Safari",
    location: "Etosha National Park, Namibia",
    description: "Experience the breathtaking wildlife and stunning landscapes of Namibia on this guided safari adventure with expert naturalist guides.",
    heroImage: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=1920",
    details: [
      {
        icon: "car" as const,
        title: "Transportation",
        description: "Comfortable 4x4 safari vehicles with experienced drivers throughout the tour"
      },
      {
        icon: "bed" as const,
        title: "Accommodation",
        description: "Stay in luxury safari lodges and tented camps with stunning views"
      },
      {
        icon: "users" as const,
        title: "Group Size",
        description: "Small groups of 4-8 people for a more personalized experience"
      },
      {
        icon: "clock" as const,
        title: "Duration",
        description: "7 days / 6 nights of unforgettable safari adventure"
      },
      {
        icon: "calendar" as const, 
        title: "Best Time to Visit",
        description: "Dry season (May-October) offers the best wildlife viewing conditions"
      }
    ],
    guide: {
      name: "Rion Haraeb",
      imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
    },
    faqs: [
      {
        question: "What should I pack for the safari?",
        answer: "Lightweight, neutral-colored clothing, comfortable walking shoes, hat, sunscreen, and binoculars are recommended."
      },
      {
        question: "Is this tour suitable for children?",
        answer: "This tour is suitable for children ages 8 and up with adult supervision."
      },
      {
        question: "What wildlife might we see?",
        answer: "Elephants, lions, giraffes, zebras, various antelope species, and if you're lucky, the endangered black rhino."
      },
      {
        question: "Is food included in the price?",
        answer: "Yes, all meals are included as specified in the itinerary."
      }
    ],
    safariImage: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=1920",
    included: [
      "All accommodations as specified in the itinerary",
      "Professional English-speaking safari guide",
      "All meals as specified in the itinerary",
      "Transportation in 4x4 safari vehicles",
      "All park entrance fees and conservation fees",
      "Complimentary bottled water during the safari",
      "Safari activities as listed in the itinerary"
    ],
    excluded: [
      "International airfare",
      "Visa fees",
      "Travel insurance",
      "Personal expenses and souvenirs",
      "Gratuities for guides and staff",
      "Alcoholic beverages",
      "Any activities not specified in the itinerary"
    ],
    mapLocation: {
      lat: -19.3456,
      lng: 16.5279,
      name: "Etosha National Park, Namibia"
    },
    tourRoute: [
      {
        day: "Day 1: Arrival in Windhoek",
        description: "Arrive at Hosea Kutako International Airport in Windhoek. Meet your guide and transfer to your hotel for an orientation meeting followed by a welcome dinner."
      },
      {
        day: "Day 2: Journey to Etosha National Park",
        description: "After breakfast, drive north to Etosha National Park. Enjoy a afternoon game drive in search of elephants, lions, and other wildlife. Overnight at a lodge near the park."
      },
      {
        day: "Day 3-4: Etosha Wildlife Viewing",
        description: "Two full days of game drives exploring the magnificent Etosha National Park, famous for its vast salt pan and abundant wildlife gathered around waterholes."
      },
      {
        day: "Day 5: Damaraland",
        description: "Travel to the scenic Damaraland region, known for its desert-adapted elephants and ancient rock art. Visit Twyfelfontein, a UNESCO World Heritage site."
      },
      {
        day: "Day 6-7: Swakopmund and Departure",
        description: "Continue to the coastal town of Swakopmund. Option for adventure activities or relaxation. Final night celebration dinner before transfer back to Windhoek for departure flights."
      }
    ],
    itinerary: [
      {
        time: "5:30 AM",
        activity: "Early morning wake-up call with hot beverages"
      },
      {
        time: "6:00 AM",
        activity: "Morning game drive when animals are most active"
      },
      {
        time: "9:30 AM",
        activity: "Return to camp for full breakfast"
      },
      {
        time: "11:00 AM",
        activity: "Guided nature walk or leisure time"
      },
      {
        time: "1:00 PM",
        activity: "Lunch at the camp"
      },
      {
        time: "4:00 PM",
        activity: "Afternoon game drive until sunset"
      },
      {
        time: "7:00 PM",
        activity: "Dinner under the stars with traditional entertainment"
      }
    ],
    accommodation: {
      description: "During this safari, you'll experience the perfect blend of comfort and authentic African wilderness. Our carefully selected accommodations range from luxury safari lodges to comfortable tented camps, all offering excellent service and amenities.",
      features: [
        "En-suite bathroom facilities in all accommodations",
        "Comfortable beds with quality linens",
        "Electricity (though some camps may use generators with limited hours)",
        "Swimming pools at most lodge locations",
        "Dining areas with full-service meals",
        "Viewing decks overlooking waterholes or scenic landscapes",
        "Wi-Fi available at most lodges (though connectivity may be limited)"
      ]
    }
  }
  
  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <TourHeader 
        tourName={tourData.name}
        location={tourData.location}
        description={tourData.description}
        imageSrc={tourData.heroImage}
      />
      
      {/* Trip Details Section */}
      <TripDetails details={tourData.details} />
      
      {/* Content Section */}
      <div className="py-24 bg-safari-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - narrow */}
            <div className="lg:col-span-1 space-y-8">
              {/* Booking Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Book Your Safari</h3>
                
                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-safari-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-safari-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Preferred Tour Date</label>
                    <input
                      type="date"
                      className="w-full p-4 border border-safari-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Number of Guests</label>
                    <select
                      className="w-full p-4 border border-safari-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg mt-4 font-medium text-lg"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
              
              {/* Guide Card */}
              <GuideCard
                name={tourData.guide.name}
                imageSrc={tourData.guide.imageSrc}
              />
              
              {/* Q&A Section */}
              <QASection faqs={tourData.faqs} />
            </div>
            
            {/* Right column - wide */}
            <div className="lg:col-span-2">
              <ChecklistSection 
                imageSrc={tourData.safariImage}
                included={tourData.included}
                excluded={tourData.excluded}
              />
              
              {/* Tab Content */}
              <div className="mt-12">
                <TabContent 
                  tourRoute={tourData.tourRoute}
                  itinerary={tourData.itinerary}
                  accommodation={tourData.accommodation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Maps Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tour Location
            </span>
            <h2 className="text-4xl font-display font-bold text-safari-800 mb-6">
              Explore Our Safari Route
            </h2>
            <p className="max-w-3xl mx-auto text-safari-600 text-lg">
              Our safari tour takes you through some of Namibia's most spectacular landscapes and wildlife-rich areas, 
              from the iconic Etosha National Park to the stunning Damaraland region.
            </p>
          </div>
          
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl border border-safari-100">
            <GoogleMap location={tourData.mapLocation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

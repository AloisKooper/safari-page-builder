
import { useState, useEffect } from "react"
import TourHeader from "@/components/TourHeader"
import TripDetails from "@/components/TripDetails"
import BookingSection from "@/components/BookingSection"
import ChecklistSection from "@/components/ChecklistSection"
import TabContent from "@/components/TabContent"

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
    heroImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1920",
    details: [
      {
        icon: "car",
        title: "Transportation",
        description: "Comfortable 4x4 safari vehicles with experienced drivers throughout the tour"
      },
      {
        icon: "bed",
        title: "Accommodation",
        description: "Stay in luxury safari lodges and tented camps with stunning views"
      },
      {
        icon: "users",
        title: "Group Size",
        description: "Small groups of 4-8 people for a more personalized experience"
      },
      {
        icon: "clock",
        title: "Duration",
        description: "7 days / 6 nights of unforgettable safari adventure"
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
      
      {/* Booking Section with Two Columns */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - narrow (30%) */}
            <div className="w-full md:w-1/3 space-y-8">
              {/* Booking Form */}
              <div className="bg-white p-6 rounded-lg safari-shadow">
                <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Book Your Safari</h3>
                
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-safari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-safari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-safari-700 font-medium block">Preferred Tour Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-safari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg mt-4"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
              
              {/* Guide Card */}
              <div className="bg-white p-6 rounded-lg safari-shadow hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={tourData.guide.imageSrc} 
                      alt={tourData.guide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-safari-800">{tourData.guide.name}</h3>
                    <p className="text-safari-600 text-sm">Safari Guide</p>
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all">
                  Read about your guide
                </button>
              </div>
              
              {/* Q&A Section */}
              <div className="bg-white p-6 rounded-lg safari-shadow">
                <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {tourData.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-safari-200 rounded-lg p-4"
                    >
                      <h4 className="font-medium text-safari-800 mb-2">{faq.question}</h4>
                      <p className="text-safari-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column - wide (70%) */}
            <div className="w-full md:w-2/3">
              <ChecklistSection 
                imageSrc={tourData.safariImage}
                included={tourData.included}
                excluded={tourData.excluded}
              />
            </div>
          </div>
          
          {/* Tab Content - Below Both Columns */}
          <TabContent 
            tourRoute={tourData.tourRoute}
            itinerary={tourData.itinerary}
            accommodation={tourData.accommodation}
          />
        </div>
      </div>
    </div>
  )
}

export default Index

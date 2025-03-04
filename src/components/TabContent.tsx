
import { useState } from "react"
import { Route, Map, Bed } from "lucide-react"

interface TabContentProps {
  tourRoute: Array<{ day: string; description: string }>
  itinerary: Array<{ time: string; activity: string }>
  accommodation: {
    description: string
    features: string[]
  }
}

export function TabContent({ tourRoute, itinerary, accommodation }: TabContentProps) {
  const [activeTab, setActiveTab] = useState('route')
  
  return (
    <div className="mt-16">
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full p-1 safari-shadow inline-flex">
          <button
            onClick={() => setActiveTab('route')}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeTab === 'route' 
                ? 'bg-primary text-white safari-shadow' 
                : 'text-safari-600 hover:text-safari-800'
            }`}
          >
            <Route className="h-5 w-5 mr-2" />
            Tour Route
          </button>
          
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeTab === 'itinerary' 
                ? 'bg-primary text-white safari-shadow' 
                : 'text-safari-600 hover:text-safari-800'
            }`}
          >
            <Map className="h-5 w-5 mr-2" />
            Itinerary
          </button>
          
          <button
            onClick={() => setActiveTab('accommodation')}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              activeTab === 'accommodation' 
                ? 'bg-primary text-white safari-shadow' 
                : 'text-safari-600 hover:text-safari-800'
            }`}
          >
            <Bed className="h-5 w-5 mr-2" />
            Accommodation
          </button>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg safari-shadow">
        {activeTab === 'route' && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Tour Route</h3>
            <div className="space-y-6">
              {tourRoute.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6">
                  {index < tourRoute.length - 1 && (
                    <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-primary"></div>
                  )}
                  <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-safari-800 mb-2">{item.day}</h4>
                  <p className="text-safari-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'itinerary' && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Detailed Itinerary</h3>
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-24 font-medium text-safari-900">{item.time}</div>
                  <div className="flex-1 text-safari-700">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'accommodation' && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Accommodation Details</h3>
            <p className="text-safari-700 mb-6">{accommodation.description}</p>
            
            <h4 className="text-lg font-semibold text-safari-800 mb-4">Accommodation Features:</h4>
            <ul className="space-y-3">
              {accommodation.features.map((feature, index) => (
                <li key={index} className="flex">
                  <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span className="text-safari-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

import { Check } from "lucide-react"
export default TabContent

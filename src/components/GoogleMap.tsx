
import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

interface GoogleMapProps {
  location: {
    lat: number
    lng: number
    name: string
  }
}

export function GoogleMap({ location }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  
  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMapsApi = () => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      
      window.initMap = () => {
        setMapLoaded(true)
      }
      
      document.head.appendChild(script)
      
      return () => {
        document.head.removeChild(script)
        delete window.initMap
      }
    }
    
    loadGoogleMapsApi()
  }, [])
  
  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      // Initialize map
      const mapOptions = {
        center: { lat: location.lat, lng: location.lng },
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#ebe3cd" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#b9d3c2" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#8ba876" }]
          }
        ]
      }
      
      const map = new google.maps.Map(mapRef.current, mapOptions)
      
      // Add marker for location
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        animation: google.maps.Animation.DROP
      })
      
      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `<div class="p-2"><strong>${location.name}</strong><p>Our safari destination</p></div>`
      })
      
      marker.addListener("click", () => {
        infoWindow.open(map, marker)
      })
      
      // Draw sample route path
      const routeCoordinates = [
        { lat: location.lat - 0.5, lng: location.lng - 0.5 }, // Windhoek (example)
        { lat: location.lat - 0.2, lng: location.lng - 0.2 }, // Route point
        { lat: location.lat, lng: location.lng },             // Etosha
        { lat: location.lat + 0.3, lng: location.lng - 0.3 }, // Damaraland (example)
        { lat: location.lat + 0.1, lng: location.lng - 0.6 }  // Swakopmund (example)
      ]
      
      const routePath = new google.maps.Polyline({
        path: routeCoordinates,
        geodesic: true,
        strokeColor: "#f97316",
        strokeOpacity: 1.0,
        strokeWeight: 3
      })
      
      routePath.setMap(map)
    }
  }, [mapLoaded, location])
  
  return (
    <div className="w-full h-full bg-safari-100 relative">
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-safari-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        </div>
      )}
      
      <div ref={mapRef} className="w-full h-full"></div>
      
      <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-safari-800 mb-1">{location.name}</h3>
            <p className="text-sm text-safari-600">Remember to add your Google Maps API key in the component for a fully functional map</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add this to make TypeScript happy with the global initMap function
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

export default GoogleMap

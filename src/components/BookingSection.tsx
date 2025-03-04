
import { useState } from "react"
import { User, Mail, Calendar } from "lucide-react"
import GuideCard from "./GuideCard"
import QASection from "./QASection"

interface BookingSectionProps {
  guideName: string
  guideImageSrc: string
  faqs: Array<{ question: string; answer: string }>
}

export function BookingSection({ guideName, guideImageSrc, faqs }: BookingSectionProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would connect to your booking system
    console.log("Booking request:", { name, email, date })
    // Reset form
    setName('')
    setEmail('')
    setDate('')
    // Show success message
    alert("Thank you for your booking request! We'll contact you shortly.")
  }
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - narrow (30%) */}
          <div className="w-full md:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-lg safari-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Book Your Safari</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-safari-700 font-medium block">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-safari-400" />
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 p-3 border border-safari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-safari-700 font-medium block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-safari-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 p-3 border border-safari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="date" className="text-safari-700 font-medium block">Preferred Tour Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-safari-400" />
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 p-3 border border-safari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg mt-4"
                >
                  Request Booking
                </button>
              </form>
            </div>
            
            <GuideCard 
              name={guideName}
              imageSrc={guideImageSrc}
            />
            
            <QASection faqs={faqs} />
          </div>
          
          {/* Right column - wide (70%) */}
          <div className="w-full md:w-2/3">
            {/* This will be populated with the main content */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection


import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface QASectionProps {
  faqs: Array<{ question: string; answer: string }>
}

export function QASection({ faqs }: QASectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }
  
  return (
    <div className="bg-white p-6 rounded-lg safari-shadow">
      <h3 className="text-2xl font-display font-bold mb-6 text-safari-800">Frequently Asked Questions</h3>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-safari-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-safari-50 transition-colors"
            >
              <span className="font-medium text-safari-800">{faq.question}</span>
              {openIndex === index ? 
                <ChevronUp className="h-5 w-5 text-safari-500" /> : 
                <ChevronDown className="h-5 w-5 text-safari-500" />
              }
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="p-4 pt-0 text-safari-600 bg-safari-50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QASection

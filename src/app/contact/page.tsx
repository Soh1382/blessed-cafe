'use client';

import { Button } from '@/components/ui/Button';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream">
      <div className="bg-espresso text-cream py-16 mb-8 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="max-w-xl mx-auto text-cream/80 text-lg">
          We'd love to hear from you. Visit us, call us, or send us a message.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div className="space-y-12">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-espresso/5">
              <h2 className="font-serif text-2xl font-bold mb-6 text-espresso">Contact Info</h2>
              <div className="space-y-6">
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-espresso/50 font-bold uppercase tracking-wider">Call Us</p>
                    <p className="text-xl text-espresso font-medium">{BUSINESS_INFO.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-espresso/50 font-bold uppercase tracking-wider">Visit Us</p>
                    <p className="text-lg text-espresso">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-espresso/5 rounded-full flex items-center justify-center text-espresso">
                    <Clock className="w-5 h-5" />
                  </div>
                   <div className="w-full">
                    <p className="text-sm text-espresso/50 font-bold uppercase tracking-wider mb-2">Opening Hours</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span className="text-espresso">Mon - Fri</span>
                      <span className="text-right text-espresso font-bold">{BUSINESS_INFO.hours.mon_fri}</span>
                      <span className="text-espresso">Saturday</span>
                      <span className="text-right text-red-500 font-bold">{BUSINESS_INFO.hours.sat}</span>
                       <span className="text-espresso">Sunday</span>
                      <span className="text-right text-red-500 font-bold">{BUSINESS_INFO.hours.sun}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Frame */}
            <div className="bg-gray-200 rounded-3xl h-64 w-full overflow-hidden shadow-inner">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Brooks%20Yard%2C%20Bradley%2C%20Huddersfield%2C%20HD2%201XE+(Forever%20Blessed%20Cafe)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Map"
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              ></iframe>
            </div>

          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-t-4 border-sage">
            <h2 className="font-serif text-3xl font-bold mb-2 text-espresso">Send a Message</h2>
            <p className="text-espresso/60 mb-8">Got a question or feedback? Fill out the form below.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-espresso/70 uppercase tracking-wider">Name</label>
                  <input type="text" id="name" className="w-full p-3 bg-cream rounded-xl border-transparent focus:border-sage focus:ring-0 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-espresso/70 uppercase tracking-wider">Email</label>
                  <input type="email" id="email" className="w-full p-3 bg-cream rounded-xl border-transparent focus:border-sage focus:ring-0 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-espresso/70 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={5} className="w-full p-3 bg-cream rounded-xl border-transparent focus:border-sage focus:ring-0 transition-colors" placeholder="How can we help?"></textarea>
              </div>

              <Button size="lg" className="w-full shadow-lg hover:shadow-xl transition-shadow">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

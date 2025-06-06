import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactSection(){
    return (
        <section className="py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">Visit Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Drop by for a coffee, a chat, or just to enjoy the atmosphere. We're always happy to see you.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/2 bg-[#5D4037] text-white p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p>123 Coffee Street</p>
                    <p>San Francisco, CA 94101</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p>Monday - Friday: 7am - 8pm</p>
                    <p>Saturday - Sunday: 8am - 9pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>hello@cafeserenity.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-1.79-1.9-4.73-2-6.65-.22-1.92 1.78-2.1 4.78-.42 6.73-2.96-.13-5.72-1.57-7.6-3.94-1 1.72-.5 3.93 1.16 5.03-.62-.01-1.21-.19-1.74-.5v.05c0 2.38 1.7 4.4 4.01 4.85-.33.09-.69.14-1.05.14-.25 0-.5-.02-.75-.07.63 1.96 2.42 3.28 4.49 3.32-1.64 1.29-3.71 2-5.87 2-.38 0-.75-.02-1.13-.07 2.12 1.37 4.6 2.1 7.14 2.1 8.57 0 13.25-7.1 13.25-13.25 0-.2 0-.4-.01-.6.91-.65 1.69-1.47 2.32-2.41z"/>
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12C2.04 17.5 6.5 21.96 12 21.96C17.5 21.96 21.96 17.5 21.96 12C21.96 6.5 17.5 2.04 12 2.04ZM15.84 8.35H13.53C13.38 8.35 13.24 8.49 13.24 8.69V10.1H15.84C15.77 11.04 15.63 11.91 15.63 11.91H13.23V19.31H10.82V11.91H9.41V10.1H10.82V8.92C10.82 8.00 10.75 6.78 12.3 6.78H15.84V8.35Z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22 .96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.27.06-2.14.26-2.9.55-.79.31-1.46.72-2.13 1.38-.66.67-1.07 1.34-1.38 2.13-.29.76-.49 1.63-.55 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.14.55 2.9.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.29 1.63.49 2.9.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.55.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.29-.76.49-1.63.55-2.9.06-1.28.07-1.7.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.55-2.9-.31-.79-.72-1.46-1.38-2.13-.67-.66-1.34-1.07-2.13-1.38-.76-.29-1.63-.49-2.9-.55C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zm0 10.15c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.41-11.24c-.8 0-1.44.64-1.44 1.44s.64 1.44 1.44 1.44c.8 0 1.44-.64 1.44-1.44s-.64-1.44-1.44-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold text-[#5D4037] mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B5A2B] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B5A2B] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B5A2B] focus:border-transparent"
                    placeholder="What would you like to tell us?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2 bg-[#5D4037] text-white rounded-full font-medium hover:bg-[#8B5A2B] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
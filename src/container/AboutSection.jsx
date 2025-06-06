export default function AboutSection(){
    return (
    <section className="py-16 bg-[#F9F5EB]" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2024, Café Calvin began as a small corner shop with a big dream: 
                to create a warm, inviting space where quality coffee and meaningful connections 
                could flourish. Our founder, Emma, believes that a truly great café offers more 
                than just exceptional beverages—it provides a sanctuary from the busy world outside.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every cup we serve is made with beans sourced directly from small-scale farmers 
                who practice sustainable growing methods. We roast in small batches to ensure 
                freshness and flavor, and our bakers arrive at dawn to prepare the day's pastries 
                from scratch.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Café Serenity remains committed to our original vision: creating a space 
                that feels like home, serving coffee that inspires conversation, and fostering a 
                community that celebrates the simple joy of a perfect cup shared with friends.
              </p>
            </div>
            
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg" 
                alt="Café interior with warm lighting and wooden tables"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#5D4037] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#5D4037] mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the highest quality beans and ingredients, 
                ensuring every sip and bite is exceptional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#5D4037] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#5D4037] mb-3">Sustainability</h3>
              <p className="text-gray-600">
                From farm to cup, we're committed to environmental 
                responsibility and ethical sourcing practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#5D4037] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#5D4037] mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in creating spaces where people connect, 
                ideas flourish, and community thrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
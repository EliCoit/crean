export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Meli's Protein Ice Cream</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Born from a passion for fitness and a love for ice cream, Meli's represents the perfect fusion of health and indulgence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                It all started with a simple question: "Why can't dessert be part of a healthy lifestyle?" 
                As fitness enthusiasts ourselves, we were tired of choosing between our health goals and our love for ice cream.
              </p>
              <p>
                After countless hours in the kitchen and laboratory, we created something revolutionary - ice cream that actually supports your fitness journey. Each pint is packed with high-quality protein while keeping calories low, without ever compromising on the rich, creamy taste you crave.
              </p>
              <p>
                Today, Meli's Protein Ice Cream is trusted by athletes, fitness enthusiasts, and anyone who believes that healthy living shouldn't mean giving up life's simple pleasures.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/500/400" 
              alt="Meli's founder in the kitchen" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To revolutionize the way people think about dessert by creating delicious, high-protein ice cream that fuels your body and satisfies your soul. We believe everyone deserves to enjoy their favorite treats while pursuing their health and fitness goals.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and never compromise on quality. Every batch is crafted with care and tested for perfection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Driven</h3>
              <p className="text-gray-600">
                Every product is designed to support your active lifestyle, providing the nutrition your body needs to perform at its best.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Taste Matters</h3>
              <p className="text-gray-600">
                Healthy doesn't mean boring. We believe that nutritious food should be delicious, satisfying, and something you actually look forward to eating.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Eli Coit</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Visionary entrepreneur and tech innovator behind Meli's Protein Ice Cream. 
                  Eli combines his passion for health, technology, and exceptional user experiences 
                  to create products that truly make a difference in people's lives.
                </p>
          
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center justify-center lg:justify-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Serial entrepreneur with multiple successful ventures</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Expert in product development and market innovation</span>
                  </div>
            
                  <div className="flex items-center justify-center lg:justify-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Committed to revolutionizing the health food industry</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Eli Coit - Founder of Meli's Protein Ice Cream" 
                  className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
                />
                <div className="mt-6">
                  <blockquote className="text-lg italic text-gray-700">
                    "Great products come from understanding what people truly need, 
                    then exceeding their expectations at every turn."
                  </blockquote>
                  <p className="text-blue-600 font-semibold mt-2">- Eli Coit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

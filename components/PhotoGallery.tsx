import { useState } from "react";
import { ChevronLeft, ChevronRight,Images } from "lucide-react";
export function PhotoGallery(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const galleryImages = [
    {
      url: "/nightturf.png",
      title: "Night Cricket Excellence",
      description: "Professional floodlit facility for evening matches"
    },
    {
      url: "/2024-09-01.webp",
      title: "Premium Turf Surface",
      description: "High-quality artificial grass for perfect gameplay"
    },
    {
      url: "/teamaction.jpeg",
      title: "Team Action",
    },
    {
      url: "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Training Sessions",
      description: "Ideal for practice and skill development"
    },
    {
      url: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Modern Amenities",
      description: "Clean changing rooms and player facilities"
    },
    {
      url: "https://images.pexels.com/photos/1661949/pexels-photo-1661949.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Championship Venue",
      description: "Host tournaments and special cricket events"
    }
  ]
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  return(
    <>
        {/* Photo Gallery Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-2 text-sm font-semibold mb-6">
              <Images className="h-4 w-4 text-yellow-400" />
              <span>Photo Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See the Difference
            </h2>
          </div>

          {/* Main Gallery Display */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-lg text-gray-200">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-20 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-4 ring-green-500 scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-green-500/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

    </>
  )

}
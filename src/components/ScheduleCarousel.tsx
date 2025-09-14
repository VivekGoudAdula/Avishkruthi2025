import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Preload images function
const preloadImages = (images: string[]) => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const ScheduleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const scheduleImages = [
    '/SCHEDULE/1.png',
    '/SCHEDULE/2.png',
    '/SCHEDULE/3.png',
    '/SCHEDULE/4.png',
    '/SCHEDULE/5.png',
    '/SCHEDULE/6.png',
    '/SCHEDULE/7.png',
    '/SCHEDULE/8.png',
  ];

  // Preload next and previous images
  const preloadAdjacentImages = useCallback((index: number) => {
    const preloadIndices = [
      (index - 1 + scheduleImages.length) % scheduleImages.length,
      (index + 1) % scheduleImages.length
    ];
    
    preloadIndices.forEach(i => {
      if (!loadedImages[i]) {
        const img = new Image();
        img.src = scheduleImages[i];
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [i]: true }));
        };
      }
    });
  }, [loadedImages]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? scheduleImages.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % scheduleImages.length;
    changeSlide(newIndex);
  };

  // Preload first image immediately
  useEffect(() => {
    const img = new Image();
    img.src = scheduleImages[0];
    img.onload = () => {
      setLoadedImages(prev => ({ ...prev, 0: true }));
      setIsLoading(false);
      preloadAdjacentImages(0);
    };
  }, []);

  // Handle slide change
  const changeSlide = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    preloadAdjacentImages(newIndex);
  }, [preloadAdjacentImages]);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    if (!isLoading) {
      const timer = setInterval(() => {
        const nextIndex = (currentIndex + 1) % scheduleImages.length;
        changeSlide(nextIndex);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isLoading, changeSlide]);

  return (
    <section id="schedule" className="py-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-400 mb-4 font-orbitron">
          Event Schedule
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Arrows */}
          <Button 
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-gray-900/90 hover:bg-gray-800/90 text-cyan-400 hover:text-cyan-300 -ml-4 shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>
          
          <Button 
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-gray-900/90 hover:bg-gray-800/90 text-cyan-400 hover:text-cyan-300 -mr-4 shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight className="h-10 w-10" />
          </Button>
          
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg shadow-xl bg-gray-800/50">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {scheduleImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {loadedImages[index] ? (
                    <img 
                      src={image} 
                      alt={`Schedule Page ${index + 1}`}
                      className="w-full h-auto object-contain max-h-[80vh] mx-auto"
                      loading={index > 1 ? 'lazy' : 'eager'}
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-[60vh] flex items-center justify-center bg-gray-800/30">
                      <div className="animate-pulse text-gray-400">Loading schedule...</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-1.5">
            {scheduleImages.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-cyan-400 w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCarousel;

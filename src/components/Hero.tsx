import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  
  const slides = [
    {
      image: 'url(https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      title: 'Game FOOD 269',
      description: t(
        'Send sandwiches to your loved ones in Foumbouni from anywhere in the world!',
        'Envoyez des sandwichs à vos proches à Foumbouni depuis n\'importe où dans le monde !'
      )
    },
    {
      image: 'url(https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      title: t('Fast Delivery', 'Livraison Rapide'),
      description: t(
        'Your orders arrive fresh and delicious within hours!',
        'Vos commandes arrivent fraîches et délicieuses en quelques heures !'
      )
    },
    {
      image: 'url(https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      title: t('Local Flavors', 'Saveurs Locales'),
      description: t(
        'Authentic Comorian sandwiches made with love',
        'Sandwichs comoriens authentiques préparés avec amour'
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides container */}
      <div className="absolute inset-0 flex transition-transform duration-700 [animation:custom-bounce_700ms] will-change-transform"
           style={{ 
             transform: `translateX(-${currentImage * 100}%)`,
           }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Slide background with parallax effect */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ 
                   backgroundImage: slide.image, 
                   opacity: 0.8,
                   transform: currentImage === index ? 'scale(1.02)' : 'scale(1)'
                 }}>
            </div>
            
            {/* Slide content */}
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="max-w-3xl mx-auto text-center text-white z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Fixed button */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center">
        <Link 
          to="/menu" 
          className="bg-white text-orange-600 px-8 py-3 rounded-md font-medium hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2"
        >
          <span>{t('Order Now', 'Commander Maintenant')}</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
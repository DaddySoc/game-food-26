import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      {/* Floating food illustrations (for visual interest) */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-white opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-white opacity-10 animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white opacity-10 animate-float-fast"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Game FOOD 269
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {t(
              'Send sandwiches to your loved ones in Foumbouni from anywhere in the world!',
              'Envoyez des sandwichs à vos proches à Foumbouni depuis n\'importe où dans le monde !'
            )}
          </p>
          <p className="text-lg mb-8">
            {t(
              'The first e-commerce site in Comoros that lets you buy from France and have your friends or family pick up locally.',
              'Le 1er site e-commerce des Comores qui vous permet d\'acheter depuis la France et de faire récupérer par vos amis ou votre famille sur place.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/menu" 
              className="bg-white text-orange-600 px-8 py-3 rounded-md font-medium hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('Order Now', 'Commander Maintenant')}</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/how-it-works" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center"
            >
              {t('How It Works', 'Comment Ça Marche')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
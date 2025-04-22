import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* Logo */}
          <span className={`text-2xl font-bold ${isScrolled ? 'text-orange-500' : 'text-white'}`}>
            Game FOOD 269
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-200'} transition-colors`}>
            {t('Home', 'Accueil')}
          </Link>
          <Link to="/menu" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-200'} transition-colors`}>
            {t('Menu', 'Menu')}
          </Link>
          <Link to="/how-it-works" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-200'} transition-colors`}>
            {t('How it Works', 'Comment ça marche')}
          </Link>
          <Link to="/contact" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-200'} transition-colors`}>
            {t('Contact', 'Contact')}
          </Link>
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Language selector */}
          <div className="relative">
            <button 
              onClick={toggleLanguageMenu}
              className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <Globe size={20} />
              <span>{language === 'en' ? 'EN' : 'FR'}</span>
              <ChevronDown size={16} />
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-20">
                <button 
                  onClick={() => { setLanguage('en'); setIsLanguageMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-100"
                >
                  English
                </button>
                <button 
                  onClick={() => { setLanguage('fr'); setIsLanguageMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-100"
                >
                  Français
                </button>
              </div>
            )}
          </div>
          
          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingBag size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {t('Home', 'Accueil')}
              </Link>
              <Link to="/menu" className="text-gray-800 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {t('Menu', 'Menu')}
              </Link>
              <Link to="/how-it-works" className="text-gray-800 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {t('How it Works', 'Comment ça marche')}
              </Link>
              <Link to="/contact" className="text-gray-800 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {t('Contact', 'Contact')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
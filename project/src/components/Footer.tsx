import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Game FOOD 269</h3>
            <p className="mb-4">
              {t(
                'The first e-commerce site in Comoros where you can buy from France, and your friend or family picks up locally in Foumbouni!',
                'Le 1er site e-commerce des Comores où vous pouvez acheter depuis la France, et votre ami ou votre famille récupère sur place à Foumbouni !'
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Quick Links', 'Liens Rapides')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  {t('Home', 'Accueil')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-orange-400 transition-colors">
                  {t('Menu', 'Menu')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-orange-400 transition-colors">
                  {t('How it Works', 'Comment ça marche')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">
                  {t('Contact', 'Contact')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition-colors">
                  {t('Terms & Conditions', 'Termes et Conditions')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-400 transition-colors">
                  {t('Privacy Policy', 'Politique de Confidentialité')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Contact Us', 'Contactez-nous')}</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@gamefood269.com" className="hover:text-orange-400 transition-colors">
                  info@gamefood269.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="https://wa.me/447897" className="hover:text-orange-400 transition-colors">
                  WhatsApp: +44 789 76
                </a>
              </p>
              <p>
                {t('Location: Foumbouni, Grande Comore', 'Emplacement: Foumbouni, Grande Comore')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Game FOOD 269. {t('All rights reserved.', 'Tous droits réservés.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
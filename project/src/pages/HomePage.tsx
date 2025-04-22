import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  // Show only a few featured products on the homepage
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <HowItWorks />
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('Popular Sandwiches', 'Sandwichs Populaires')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Discover our most popular sandwiches that you can send to your loved ones in Foumbouni.',
                'Découvrez nos sandwichs les plus populaires que vous pouvez envoyer à vos proches à Foumbouni.'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors inline-block"
            >
              {t('View All Menu', 'Voir Tout le Menu')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('What Our Customers Say', 'Ce Que Disent Nos Clients')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {t(
                  '"I was able to surprise my brother in Foumbouni with his favorite sandwich on his birthday, even though I\'m in Paris! It was so simple and he sent me a photo of him enjoying it. Great service!"',
                  '"J\'ai pu surprendre mon frère à Foumbouni avec son sandwich préféré le jour de son anniversaire, même si je suis à Paris ! C\'était tellement simple et il m\'a envoyé une photo de lui en train de le déguster. Super service !"'
                )}
              </p>
              <p className="font-medium text-gray-800">Marie, Paris</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {t(
                  '"Fast delivery and excellent sandwiches! My mom in Foumbouni was so happy with her Chicken Sandwich. The WhatsApp notifications kept me updated the whole time."',
                  '"Livraison rapide et sandwichs excellents ! Ma mère à Foumbouni était si heureuse avec son Sandwich au Poulet. Les notifications WhatsApp m\'ont tenu informé tout le temps."'
                )}
              </p>
              <p className="font-medium text-gray-800">Ahmed, Lyon</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {t(
                  '"What a brilliant idea! I ordered the Merguez & Fries for my cousin, and she picked it up without any issues. The payment was secure and the whole process was very smooth."',
                  '"Quelle brillante idée ! J\'ai commandé le Mergez Frite pour ma cousine, et elle l\'a récupéré sans aucun problème. Le paiement était sécurisé et tout le processus était très fluide."'
                )}
              </p>
              <p className="font-medium text-gray-800">Fatima, Marseille</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('Ready to Send Some Love to Foumbouni?', 'Prêt à Envoyer de l\'Amour à Foumbouni ?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t(
              'Order now and make someone\'s day special with a delicious sandwich delivered with love.',
              'Commandez maintenant et rendez la journée de quelqu\'un spéciale avec un délicieux sandwich livré avec amour.'
            )}
          </p>
          <Link 
            to="/menu" 
            className="bg-white text-orange-600 px-8 py-3 rounded-md font-medium hover:bg-orange-50 transition-colors inline-block"
          >
            {t('Order Now', 'Commander Maintenant')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  const categories = [
    { id: 'all', label: t('All', 'Tous') },
    { id: 'sandwich', label: t('Sandwiches', 'Sandwichs') },
    { id: 'dessert', label: t('Desserts', 'Desserts') }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t('Our Menu', 'Notre Menu')}
        </h1>
        
        {/* Category filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t('No products found in this category.', 'Aucun produit trouvé dans cette catégorie.')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
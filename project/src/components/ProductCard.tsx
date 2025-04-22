import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, recipientName: string, recipientPhone: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);
  const [error, setError] = useState('');
  const { language, t } = useLanguage();

  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  };

  const handleOrder = () => {
    setIsOrdering(true);
  };

  const handleSubmit = () => {
    if (!recipientName.trim()) {
      setError(t('Recipient name is required', 'Le nom du destinataire est requis'));
      return;
    }
    if (!recipientPhone.trim()) {
      setError(t('Recipient phone is required', 'Le téléphone du destinataire est requis'));
      return;
    }
    
    onAddToCart(product, quantity, recipientName, recipientPhone);
    setIsOrdering(false);
    setError('');
    setRecipientName('');
    setRecipientPhone('');
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={language === 'en' ? product.name : product.nameFr} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {language === 'en' ? product.name : product.nameFr}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {language === 'en' ? product.description : product.descriptionFr}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-orange-500 font-bold">€{product.price.toFixed(2)}</span>
          
          {!isOrdering && (
            <button 
              onClick={handleOrder}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              {t('Order', 'Commander')}
            </button>
          )}
        </div>

        {isOrdering && (
          <div className="mt-4 border-t pt-4">
            <h4 className="font-medium text-gray-800 mb-3">
              {t('Recipient Details:', 'Détails du destinataire:')}
            </h4>
            
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1">
                {t('Recipient Name', 'Nom du destinataire')}
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder={t('Enter name', 'Entrez le nom')}
              />
            </div>
            
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1">
                {t('Recipient Phone', 'Téléphone du destinataire')}
              </label>
              <input
                type="text"
                value={recipientPhone}
                onChange={(e) => setRecipientPhone(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder={t('Enter phone number', 'Entrez le numéro de téléphone')}
              />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm text-gray-600">
                {t('Quantity:', 'Quantité:')}
              </label>
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={decrementQuantity}
                  className="px-2 py-1 text-gray-600 hover:text-orange-500"
                >
                  <Minus size={16} />
                </button>
                <span className="px-3">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-2 py-1 text-gray-600 hover:text-orange-500"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            
            <div className="flex space-x-2">
              <button 
                onClick={handleSubmit}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors flex-grow"
              >
                {t('Add to Cart', 'Ajouter au panier')}
              </button>
              <button 
                onClick={() => setIsOrdering(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                {t('Cancel', 'Annuler')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
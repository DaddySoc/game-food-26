import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity, recipientName, recipientPhone } = item;
  const { language, t } = useLanguage();
  
  const incrementQuantity = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
      <div className="w-full sm:w-20 h-20 mb-3 sm:mb-0 mr-0 sm:mr-4">
        <img 
          src={product.image} 
          alt={language === 'en' ? product.name : product.nameFr}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-gray-800">
          {language === 'en' ? product.name : product.nameFr}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {t('For:', 'Pour:')} {recipientName} ({recipientPhone})
        </p>
      </div>
      
      <div className="flex items-center mt-3 sm:mt-0">
        <div className="flex items-center border rounded-md mr-4">
          <button 
            onClick={decrementQuantity}
            className="px-2 py-1 text-gray-600 hover:text-orange-500"
            disabled={quantity <= 1}
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
        
        <div className="text-orange-500 font-medium w-20 text-right">
          €{(product.price * quantity).toFixed(2)}
        </div>
        
        <button 
          onClick={() => onRemove(product.id)}
          className="ml-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
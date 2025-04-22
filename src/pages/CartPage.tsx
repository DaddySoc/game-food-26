import React, { useState } from 'react';
import CartItemComponent from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [customerEmail, setCustomerEmail] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const { t } = useLanguage();
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would integrate with PayPal or another payment processor
    // For now, we'll simulate a successful order
    
    // Simulate processing time
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {t('Order Confirmed!', 'Commande Confirmée !')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t(
              'Your order has been placed successfully. Your recipient will be notified to collect their food.',
              'Votre commande a été passée avec succès. Votre destinataire sera notifié pour venir chercher sa nourriture.'
            )}
          </p>
          <p className="text-gray-600 mb-6">
            {t(
              'A confirmation email has been sent to:',
              'Un email de confirmation a été envoyé à :'
            )} <strong>{customerEmail}</strong>
          </p>
          <Link 
            to="/" 
            className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors inline-block"
          >
            {t('Return to Home', 'Retour à l\'Accueil')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <ShoppingCart className="mr-2" size={28} />
          {t('Your Cart', 'Votre Panier')}
        </h1>
        
        <Link to="/menu" className="text-orange-500 hover:text-orange-600 flex items-center mb-8">
          <ArrowLeft size={16} className="mr-1" />
          {t('Continue Shopping', 'Continuer vos Achats')}
        </Link>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 mb-4">
              {t('Your cart is empty.', 'Votre panier est vide.')}
            </p>
            <Link 
              to="/menu" 
              className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors inline-block"
            >
              {t('Browse Menu', 'Parcourir le Menu')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {items.map((item, index) => (
                  <CartItemComponent
                    key={`${item.product.id}-${index}`}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {t('Order Summary', 'Récapitulatif de la Commande')}
                </h2>
                
                <div className="border-t border-b py-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{t('Subtotal', 'Sous-total')}</span>
                    <span className="font-medium">€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('Service Fee', 'Frais de Service')}</span>
                    <span className="font-medium">€0.00</span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold">{t('Total', 'Total')}</span>
                  <span className="text-lg font-bold">€{total.toFixed(2)}</span>
                </div>

                {/* Shipping Information */}
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <p className="font-bold text-orange-700 mb-2">
                    {total >= 10 
                      ? t('Free delivery!', 'Livraison gratuite !') 
                      : t('Delivery fee: €0.99 for orders under €10', ' Livraison gratuite pour les commandes de plus  de 10€')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('Free delivery for all orders of €10 or more', 'Livraison gratuite pour toute commande de 10€ ou plus')}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {t('Delivery zones:', 'Frais de livraison: 0,99€ Zones de livraison:')} Mâle, Ouropveni, Chindini, Simaboini, Dzahadjou, Koibani, Noumadzaha
                  </p>
                </div>

                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  <CreditCard className="mr-2" size={20} />
                  {t('Proceed to Checkout', 'Procéder au Paiement')}
                </button>

                {isCheckingOut && (
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('Email Address', 'Adresse Email')}
                      </label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder={t('Enter your email', 'Entrez votre email')}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {t(
                          'We\'ll send order confirmations to this address',
                          'Nous enverrons les confirmations de commande à cette adresse'
                        )}
                      </p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                      >
                        <CreditCard className="mr-2" size={20} />
                        {t('Pay with PayPal', 'Payer avec PayPal')}
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-2">
                        {t(
                          'By placing your order, you agree to our Terms of Service and Privacy Policy',
                          'En passant votre commande, vous acceptez nos Conditions de Service et notre Politique de Confidentialité'
                        )}
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
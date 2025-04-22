import React from 'react';
import { ShoppingCart, User, CreditCard, Bell } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ShoppingCart className="text-orange-500" size={36} />,
      title: t('Choose a sandwich', 'Choisissez un sandwich'),
      description: t(
        'Browse our menu and select the delicious sandwich you want to offer.',
        'Parcourez notre menu et sélectionnez le délicieux sandwich que vous souhaitez offrir.'
      )
    },
    {
      icon: <User className="text-orange-500" size={36} />,
      title: t('Enter recipient details', 'Indiquez les coordonnées du destinataire'),
      description: t(
        'Enter the name and phone number of your loved one in Foumbouni.',
        'Entrez le nom et le numéro de téléphone de votre proche à Foumbouni.'
      )
    },
    {
      icon: <CreditCard className="text-orange-500" size={36} />,
      title: t('Pay securely', 'Payez en toute sécurité'),
      description: t(
        'Pay directly from France with PayPal or credit card.',
        'Payez directement depuis la France avec PayPal ou carte bancaire.'
      )
    },
    {
      icon: <Bell className="text-orange-500" size={36} />,
      title: t('Receive notifications', 'Recevez des notifications'),
      description: t(
        'Your recipient gets a notification and picks up their sandwich. You\'ll be notified when they collect it.',
        'Votre destinataire reçoit une notification et vient chercher son sandwich. Vous serez notifié lorsqu\'il le récupère.'
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('How It Works', 'Comment Ça Marche')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Send a sandwich to someone in Foumbouni in just a few clicks. It\'s quick, simple and secure!',
              'Envoyez un sandwich à quelqu\'un à Foumbouni en quelques clics seulement. C\'est rapide, simple et sécurisé !'
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="mb-2 text-xl font-semibold text-gray-800">
                <span className="text-orange-500 mr-2">{index + 1}.</span>
                {step.title}
              </div>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-orange-50 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {t('Automatic Notifications', 'Notifications Automatiques')}
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>
                {t(
                  'You receive a confirmation email as soon as your order is picked up.',
                  'Vous recevez un email de confirmation dès que votre commande est récupérée.'
                )}
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>
                {t(
                  'The sandwich shop receives an immediate WhatsApp alert when an order is placed.',
                  'La sandwicherie reçoit une alerte WhatsApp immédiate dès qu\'une commande est passée.'
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
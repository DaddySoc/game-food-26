import React from 'react';
import HowItWorks from '../components/HowItWorks';
import { useLanguage } from '../context/LanguageContext';

const HowItWorksPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t('How It Works', 'Comment Ça Marche')}
        </h1>
        
        <HowItWorks />
        
        {/* Additional Details */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('Frequently Asked Questions', 'Questions Fréquemment Posées')}
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('How long will it take for my order to be ready?', 'Combien de temps faudra-t-il pour que ma commande soit prête ?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Orders are processed immediately, and your recipient will typically be notified within 15-30 minutes that their order is ready for pickup.',
                  'Les commandes sont traitées immédiatement, et votre destinataire sera généralement notifié dans les 15 à 30 minutes que sa commande est prête à être récupérée.'
                )}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('How will my recipient be notified?', 'Comment mon destinataire sera-t-il notifié ?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Your recipient will receive a WhatsApp message with details of the order and instructions for pickup at our Foumbouni location.',
                  'Votre destinataire recevra un message WhatsApp avec les détails de la commande et les instructions pour la récupération à notre emplacement à Foumbouni.'
                )}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('What if my recipient doesn\'t pick up the order?', 'Que se passe-t-il si mon destinataire ne récupère pas la commande ?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Orders remain available for pickup for 24 hours. If not collected within this time, we will contact you to discuss options, which may include rescheduling pickup or processing a refund.',
                  'Les commandes restent disponibles pour être récupérées pendant 24 heures. Si elles ne sont pas récupérées dans ce délai, nous vous contacterons pour discuter des options, qui peuvent inclure la reprogrammation du retrait ou le traitement d\'un remboursement.'
                )}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('Can I order for multiple people?', 'Puis-je commander pour plusieurs personnes ?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'Yes! You can add multiple items to your cart with different recipient information for each item. Each recipient will receive their own notification.',
                  'Oui ! Vous pouvez ajouter plusieurs articles à votre panier avec différentes informations de destinataire pour chaque article. Chaque destinataire recevra sa propre notification.'
                )}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('What payment methods do you accept?', 'Quels modes de paiement acceptez-vous ?')}
              </h3>
              <p className="text-gray-600">
                {t(
                  'We currently accept PayPal and major credit cards for secure international payments.',
                  'Nous acceptons actuellement PayPal et les principales cartes de crédit pour des paiements internationaux sécurisés.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual form submission logic
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t('Contact Us', 'Contactez-nous')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('Get In Touch', 'Prenez Contact')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t(
                'Have questions about our service? Need help with an order? We\'re here to help!',
                'Vous avez des questions sur notre service ? Besoin d\'aide pour une commande ? Nous sommes là pour vous aider !'
              )}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Mail className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t('Email', 'Email')}</h3>
                  <a href="mailto:info@gamefood269.com" className="text-orange-500 hover:underline">
                    info@gamefood269.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t('WhatsApp', 'WhatsApp')}</h3>
                  <a href="https://wa.me/447897" className="text-orange-500 hover:underline">
                    +44 789 76
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t('Location', 'Emplacement')}</h3>
                  <p className="text-gray-600">
                    Foumbouni, Grande Comore<br />
                    Comoros
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('Business Hours', 'Heures d\'Ouverture')}
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">{t('Monday - Friday', 'Lundi - Vendredi')}</span>
                  <span>9:00 - 22:00</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">{t('Saturday', 'Samedi')}</span>
                  <span>10:00 - 22:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">{t('Sunday', 'Dimanche')}</span>
                  <span>12:00 - 20:00</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t('Message Sent!', 'Message Envoyé !')}
                </h3>
                <p className="text-gray-600">
                  {t(
                    'Thank you for reaching out. We\'ll get back to you as soon as possible.',
                    'Merci de nous avoir contactés. Nous vous répondrons dès que possible.'
                  )}
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 text-orange-500 hover:text-orange-600"
                >
                  {t('Send another message', 'Envoyer un autre message')}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t('Send Us a Message', 'Envoyez-nous un Message')}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Your Name', 'Votre Nom')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder={t('Enter your name', 'Entrez votre nom')}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Your Email', 'Votre Email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder={t('Enter your email', 'Entrez votre email')}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('Your Message', 'Votre Message')}
                    </label>
                    <textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                      placeholder={t('Enter your message', 'Entrez votre message')}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2" size={18} />
                    {t('Send Message', 'Envoyer le Message')}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
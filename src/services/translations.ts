import { Translation } from '../types';

export const translations: Translation = {
  'nav.services': {
    en: 'Services',
    hi: 'सेवाएं',
    mr: 'सेवा'
  },
  'nav.caseStudies': {
    en: 'Case Studies',
    hi: 'केस स्टडी',
    mr: 'केस स्टडी'
  },
  'nav.aiAgents': {
    en: 'AI Agents',
    hi: 'AI एजेंट्स',
    mr: 'AI एजंट्स'
  },
  'nav.about': {
    en: 'About',
    hi: 'हमारे बारे में',
    mr: 'आमच्याबद्दल'
  },
  'nav.contact': {
    en: 'Contact',
    hi: 'संपर्क',
    mr: 'संपर्क'
  },
  'hero.title': {
    en: 'Transform Your Business with Cutting-Edge Technology',
    hi: 'अत्याधुनिक तकनीक के साथ अपने व्यवसाय को बदलें',
    mr: 'अत्याधुनिक तंत्रज्ञानाने आपला व्यवसाय बदला'
  },
  'hero.subtitle': {
    en: 'We build websites, mobile apps, custom software, and AI agents that help startups, businesses, and solopreneurs scale faster and work smarter.',
    hi: 'हम वेबसाइट, मोबाइल ऐप्स, कस्टम सॉफ्टवेयर, और AI एजेंट्स बनाते हैं जो स्टार्टअप्स, व्यवसायों, और व्यक्तिगत उद्यमियों को तेज़ी से बढ़ने और स्मार्ट काम करने में मदद करते हैं।',
    mr: 'आम्ही वेबसाइट्स, मोबाइल अॅप्स, कस्टम सॉफ्टवेअर आणि AI एजंट्स तयार करतो जे स्टार्टअप्स, व्यवसायांना आणि एकल उद्यमींना वेगाने वाढण्यास आणि हुशारीने कार्य करण्यास मदत करतात.'
  },
  'hero.cta': {
    en: 'Get Your Tech Quote',
    hi: 'अपना टेक कोट पाएं',
    mr: 'आपला टेक कोट मिळवा'
  },
  'services.title': {
    en: 'Our Services',
    hi: 'हमारी सेवाएं',
    mr: 'आमच्या सेवा'
  },
  'services.subtitle': {
    en: 'Comprehensive technology solutions tailored to your business needs',
    hi: 'आपकी व्यावसायिक आवश्यकताओं के अनुरूप व्यापक तकनीकी समाधान',
    mr: 'आपल्या व्यावसायिक गरजांनुसार सर्वसमावेशक तंत्रज्ञान समाधाने'
  }
};

export const t = (key: string, lang: string = 'en') => {
  return translations[key]?.[lang as keyof typeof translations[typeof key]] || key;
};
import { Injectable, signal, computed, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Language = 'EN' | 'AR' | 'KU' | 'UR';

const RTL_LANGUAGES: Language[] = ['AR', 'KU', 'UR'];

export interface HeroTitleLine { text: string; accent: boolean; }

export interface Translations {
  nav: { home: string; services: string; about: string; contact: string; };
  hero: {
    badge: string;
    titleLines: HeroTitleLine[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    storeLabel: string;
  };
  stats: Array<{ value: string; label: string; }>;
  features: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    items: Array<{ icon: string; title: string; desc: string; }>;
  };
  how: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    steps: Array<{ num: string; title: string; desc: string; }>;
  };
  about: {
    tag: string;
    headline: string;
    intro: string;
    commitmentTitle: string;
    commitmentText: string;
    innovationTitle: string;
    innovationText: string;
    expertiseTitle: string;
    expertiseItems: Array<{ icon: string; title: string; desc: string; }>;
    closing: string;
  };
  services: {
    tag: string;
    headline: string;
    subheadline: string;
    cards: Array<{
      icon: string;
      badge: string;
      title: string;
      desc: string;
      features: string[];
    }>;
    whyTag: string;
    whyTitle: string;
    whyItems: Array<{ icon: string; title: string; desc: string; }>;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  cta: { title: string; subtitle: string; btnPrimary: string; btnSecondary: string; };
  footer: {
    copy: string;
    links: Array<{ label: string; path: string; modal?: 'privacy' | 'terms' }>;
  };
  contact: {
    badge: string;
    pageTitle: string;
    pageSubtitle: string;
    infoCards: Array<{ icon: string; label: string; value: string; sub: string; }>;
    formTitle: string;
    form: {
      name: string; namePh: string;
      email: string; emailPh: string;
      phone: string; phonePh: string;
      subject: string; subjectPh: string;
      message: string; messagePh: string;
      submit: string;
      successMsg: string;
    };
    trustTitle: string;
    trustItems: Array<{ icon: string; text: string; }>;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {

  // ──────────────────────────────────────────────────────────────── EN
  EN: {
    nav: { home: 'Home', services: 'Our Services', about: 'About Us', contact: 'Get In Touch' },
    hero: {
      badge: 'FCA Regulated',
      titleLines: [
        { text: 'Send Money',        accent: false },
        { text: 'Across the World',  accent: true  },
        { text: 'Instantly',         accent: false },
      ],
      subtitle: 'Nema International Limited makes international money transfers fast, secure, and affordable — right from your phone.',
      ctaPrimary: 'Get Started Free',
      ctaSecondary: 'Learn More',
      storeLabel: 'Download the app:',
    },
    stats: [
      { value: '50+',   label: 'Countries'   },
      { value: '200K+', label: 'Customers'   },
      { value: '£2B+',  label: 'Transferred' },
      { value: '4.9★',  label: 'App Rating'  },
    ],
    features: {
      tag: 'Why Nema',
      titleLine1: 'Everything you need to',
      titleLine2: 'send money smarter',
      items: [
        { icon: 'airplane-take-off', title: 'Instant Transfers',    desc: 'Send money worldwide in seconds with real-time confirmation.'             },
        { icon: 'lock--v1',         title: 'Bank-Level Security',  desc: 'FCA regulated with 256-bit encryption protecting every transaction.'     },
        { icon: 'currency-exchange',title: 'Best Exchange Rates',  desc: 'Competitive rates updated live — no hidden fees, ever.'                  },
        { icon: 'earth-planet',     title: 'Global Reach',         desc: 'Transfer to 35+ countries across the Middle East, Asia & beyond.'        },
        { icon: 'smartphone',    title: 'Mobile First',         desc: 'Manage all your transfers on the go with our sleek mobile app.'          },
        { icon: 'headset',          title: '24/7 Support',         desc: 'Our team is always available to help you, day or night.'                 },
      ],
    },
    how: {
      tag: 'How It Works',
      titleLine1: 'Transfer in',
      titleLine2: '4 simple steps',
      steps: [
        { num: '01', title: 'Create Account', desc: 'Sign up in minutes with your ID and phone number.'               },
        { num: '02', title: 'Add Recipient',  desc: "Enter your recipient's details once and save for later."         },
        { num: '03', title: 'Send Money',     desc: 'Choose amount, confirm the rate and hit send.'                   },
        { num: '04', title: 'Money Delivered',desc: 'Recipient gets notified and funds arrive instantly.'             },
      ],
    },
    about: {
      tag: 'About Us',
      headline: 'Connecting People Through Technology and Trust.',
      intro: 'At NEMA International Limited, we believe that distance should never be a barrier to supporting the people you love. Headquartered in the United Kingdom, our mission is simple: to make international money transfers safer, easier, and more affordable for UK residents sending funds to their families abroad.',
      commitmentTitle: 'Our Commitment to You',
      commitmentText: 'We understand that every pound sent represents hard work and care. That is why we offer unique, competitive exchange rates and a security-first platform designed to give you peace of mind. We are not just a transfer service; we are a bridge connecting UK communities with their global families.',
      innovationTitle: 'Powered by Innovation',
      innovationText: 'What sets NEMA apart is our technological foundation. We are not only a finance company but a full-service FinTech and Software Development firm. Our in-house expertise allows us to build secure, robust systems for our clients and ourselves.',
      expertiseTitle: 'Our Expertise Includes',
      expertiseItems: [
        { icon: 'cash-in-hand',     title: 'International Remittance', desc: 'Secure, low-cost money transfers.'                                              },
        { icon: 'source-code',      title: 'Software Development',     desc: 'Full-stack solutions (Frontend, Backend, Database Architecture).'               },
        { icon: 'briefcase',        title: 'Business Solutions',       desc: 'Custom CRM builds and IT Service Management.'                                   },
        { icon: 'code', title: 'FinTech Services',         desc: 'Advanced financial technology integration for clients.'                         },
      ],
      closing: 'At NEMA International Limited, we combine financial expertise with technical excellence to serve individuals and businesses alike.',
    },
    services: {
      tag: 'What We Offer',
      headline: 'Comprehensive Financial & Technology Solutions',
      subheadline: 'From international money transfers to full-stack software development — NEMA delivers the tools and infrastructure modern businesses and individuals need.',
      cards: [
        {
          icon: 'cash-in-hand',
          badge: 'Core Service',
          title: 'International Money Transfer',
          desc: 'Send money across borders instantly, safely, and at the most competitive rates. FCA regulated and trusted by thousands of customers.',
          features: [
            'Instant transfers to 35+ countries',
            'Best-in-market exchange rates',
            'Zero hidden fees, ever',
            'Real-time transaction tracking',
            'FCA regulated & 256-bit encrypted',
          ],
        },
        {
          icon: 'source-code',
          badge: 'Technology',
          title: 'Software Development',
          desc: 'Full-stack development tailored to your exact needs. We build scalable, secure, and modern web and mobile applications from the ground up.',
          features: [
            'Frontend — Angular, React, Vue',
            'Backend APIs & Microservices',
            'Database Architecture & Optimisation',
            'iOS & Android Mobile Applications',
            'Cloud Infrastructure & DevOps',
          ],
        },
        {
          icon: 'briefcase',
          badge: 'Business',
          title: 'Business Solutions',
          desc: 'Streamline your operations with custom CRM systems and fully managed IT services designed around your specific business goals.',
          features: [
            'Custom CRM Development',
            'IT Service Management (ITSM)',
            'Business Process Automation',
            'System Integration & API Connectivity',
            'IT Consultancy & Strategic Planning',
          ],
        },
        {
          icon: 'code',
          badge: 'FinTech',
          title: 'FinTech Services',
          desc: 'Advanced financial technology solutions for businesses integrating payments, compliance, and digital finance into their products.',
          features: [
            'Payment Gateway Integration',
            'Compliance, KYC & AML Systems',
            'Digital Wallet Solutions',
            'Financial Data Analytics',
            'Open Banking & API Integrations',
          ],
        },
      ],
      whyTag: 'Why NEMA',
      whyTitle: 'Built on Trust, Driven by Technology',
      whyItems: [
        { icon: 'certificate',  title: 'FCA Regulated',       desc: 'Fully authorised and regulated by the Financial Conduct Authority.' },
        { icon: 'conference',   title: 'In-House Expertise',  desc: 'Our own team of engineers, analysts, and finance professionals.' },
        { icon: 'lock--v1',     title: 'Security First',      desc: '256-bit encryption and rigorous security standards across all services.' },
        { icon: 'earth-planet', title: 'Global Reach',        desc: 'Supporting individuals and businesses across 35+ countries.' },
        { icon: 'price-tag',    title: 'Transparent Pricing', desc: 'No hidden fees. No surprises. Just honest, competitive pricing.' },
        { icon: 'headset',      title: '24/7 Support',        desc: 'Our team is always available to assist you whenever you need us.' },
      ],
      ctaTitle: 'Ready to Work With Us?',
      ctaSubtitle: 'Whether you need to send money globally or build the next fintech product — our team is here to help.',
    },
    cta: {
      title: 'Ready to send money today?',
      subtitle: 'Join our customer family and trust your international transfers with Nema — with confidence and security.',
      btnPrimary: 'Start Sending',
      btnSecondary: 'Contact Us',
    },
    footer: {
      copy: '© 2026 Nema International Limited. Authorised and regulated by the Financial Conduct Authority.',
      links: [
        { label: 'Services',        path: '/ourservices' },
        { label: 'Contact',         path: '/getintouch'  },
        { label: 'Privacy Policy',   path: '#', modal: 'privacy' },
        { label: 'Terms of Service', path: '#', modal: 'terms'   },
      ],
    },
    contact: {
      badge: "We're Here to Help",
      pageTitle: 'Get In Touch',
      pageSubtitle: 'Our team is available 24/7 to assist you with anything you need.',
      infoCards: [
        { icon: 'email',         label: 'Email Us',      value: 'info@nema-international.co.uk',   sub: 'Reply within 2 hours'  },
        { icon: 'phone',         label: 'Call Us',       value: '+44 07460726920',     sub: 'Mon – Sun, 24 / 7'     },
        { icon: 'whatsapp',      label: 'WhatsApp',      value: '+44 07460726920',     sub: 'Instant messaging'     },
        { icon: 'place-marker',  label: 'Office 1, 24-26',   value: 'Birmingham, United Kingdom', sub: 'FCA Regulated'       },
      ],
      formTitle: 'Send Us a Message',
      form: {
        name: 'Full Name',        namePh: 'John Doe',
        email: 'Email Address',   emailPh: 'info@international.com',
        phone: 'Phone Number',    phonePh: '+44 00000000000',
        subject: 'Subject',       subjectPh: 'How can we help you?',
        message: 'Message',       messagePh: 'Write your message here…',
        submit: 'Send Message',
        successMsg: "Thank you! We'll get back to you shortly.",
      },
      trustTitle: 'Why Trust Nema?',
      trustItems: [
        { icon: '🏦', text: 'FCA Authorised & Regulated' },
        { icon: '🔒', text: '256-bit Encrypted & Secure' },
        { icon: '⭐', text: '4.9★ Rated by 200 K+ Customers' },
        { icon: '🌍', text: 'Serving 50+ Countries Worldwide' },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────── AR
  AR: {
    nav: { home: 'الرئيسية', services: 'خدماتنا', about: 'من نحن', contact: 'تواصل معنا' },
    hero: {
      badge: 'خاضع لرقابة FCA',
      titleLines: [
        { text: 'أرسل الأموال', accent: false },
        { text: 'عبر العالم',   accent: true  },
        { text: 'فوراً',        accent: false },
      ],
      subtitle: 'نيما إنترناشيونال ليميتد تجعل التحويلات الدولية سريعة وآمنة وبأسعار معقولة — من هاتفك مباشرةً.',
      ctaPrimary: 'ابدأ مجاناً',
      ctaSecondary: 'اعرف المزيد',
      storeLabel: 'حمّل التطبيق:',
    },
    stats: [
      { value: '+50',   label: 'دولة'           },
      { value: '+200K', label: 'عميل'           },
      { value: '+£2B',  label: 'تم تحويله'      },
      { value: '4.9★',  label: 'تقييم التطبيق' },
    ],
    features: {
      tag: 'لماذا نيما؟',
      titleLine1: 'كل ما تحتاجه',
      titleLine2: 'لإرسال أموالك بذكاء',
      items: [
        { icon: 'airplane-take-off', title: 'تحويلات فورية',           desc: 'أرسل الأموال حول العالم في ثوانٍ مع تأكيد فوري.'                     },
        { icon: 'lock--v1',         title: 'أمان بمستوى البنوك',       desc: 'مرخص من FCA مع تشفير 256-bit لحماية كل معاملة.'                     },
        { icon: 'currency-exchange',title: 'أفضل أسعار الصرف',        desc: 'أسعار تنافسية تُحدَّث لحظياً — بدون رسوم خفية.'                     },
        { icon: 'earth-planet',     title: 'انتشار عالمي',             desc: 'تحويل إلى أكثر من 35 دولة في الشرق الأوسط وآسيا وما بعدها.'        },
        { icon: 'smartphone-01',    title: 'تطبيق متطور',              desc: 'أدر تحويلاتك في أي وقت ومكان عبر تطبيقنا الأنيق.'                  },
        { icon: 'headset',          title: 'دعم على مدار الساعة',      desc: 'فريقنا متاح دائماً لمساعدتك في أي وقت.'                            },
      ],
    },
    how: {
      tag: 'كيف يعمل',
      titleLine1: 'أرسل في',
      titleLine2: '4 خطوات بسيطة',
      steps: [
        { num: '01', title: 'إنشاء حساب',    desc: 'سجّل في دقائق باستخدام هويتك ورقم هاتفك.'},
        { num: '02', title: 'إضافة مستلم',   desc: 'أدخل بيانات المستلم مرة واحدة واحفظها للمرات القادمة.'},
        { num: '03', title: 'إرسال الأموال', desc: 'اختر المبلغ، أكّد السعر، واضغط إرسال.'},
        { num: '04', title: 'وصول الأموال',  desc: 'يتلقى المستلم إشعاراً وتصل الأموال فوراً.'},
      ],
    },
    about: {
      tag: 'من نحن',
      headline: 'نربط الناس من خلال التكنولوجيا والثقة.',
      intro: 'في نيما إنترناشيونال ليميتد، نؤمن بأن المسافة يجب ألا تكون حاجزاً أمام دعم من تحب. يقع مقرنا في المملكة المتحدة، ومهمتنا بسيطة: جعل التحويلات المالية الدولية أكثر أماناً وسهولة وبأسعار معقولة لسكان المملكة المتحدة الذين يرسلون الأموال إلى عائلاتهم في الخارج.',
      commitmentTitle: 'التزامنا بك',
      commitmentText: 'ندرك أن كل جنيه يُرسل يمثل جهداً ورعايةً. لذا نقدم أسعار صرف تنافسية فريدة ومنصة تضع الأمان في المقدمة لمنحك راحة البال. نحن لسنا مجرد خدمة تحويل؛ بل نحن جسر يربط مجتمعات المملكة المتحدة بعائلاتهم حول العالم.',
      innovationTitle: 'مدعوم بالابتكار',
      innovationText: 'ما يميز نيما هو أساسها التكنولوجي. لسنا مجرد شركة مالية، بل شركة متكاملة للتقنية المالية وتطوير البرمجيات. تتيح لنا خبرتنا الداخلية بناء أنظمة آمنة وقوية لعملائنا ولأنفسنا.',
      expertiseTitle: 'مجالات خبرتنا',
      expertiseItems: [
        { icon: 'cash-in-hand',     title: 'التحويل الدولي',         desc: 'تحويلات مالية آمنة وبتكلفة منخفضة.'                                             },
        { icon: 'source-code',      title: 'تطوير البرمجيات',        desc: 'حلول متكاملة (الواجهة الأمامية والخلفية وبنية قواعد البيانات).'                  },
        { icon: 'briefcase',        title: 'حلول الأعمال',           desc: 'بناء أنظمة CRM مخصصة وإدارة خدمات تكنولوجيا المعلومات.'                       },
        { icon: 'code', title: 'خدمات التقنية المالية', desc: 'دمج متقدم لتكنولوجيا التمويل للعملاء.'                                           },
      ],
      closing: 'في نيما إنترناشيونال ليميتد، نجمع الخبرة المالية مع التميز التقني لخدمة الأفراد والشركات على حد سواء.',
    },
    services: {
      tag: 'ما نقدّمه',
      headline: 'حلول مالية وتقنية شاملة',
      subheadline: 'من التحويلات المالية الدولية إلى تطوير البرمجيات المتكامل — نيما توفر الأدوات والبنية التحتية التي يحتاجها الأفراد والشركات.',
      cards: [
        {
          icon: 'cash-in-hand',
          badge: 'الخدمة الأساسية',
          title: 'التحويل المالي الدولي',
          desc: 'أرسل الأموال عبر الحدود فوراً وبأمان وبأفضل الأسعار. مرخصة من هيئة FCA وموثوقة من آلاف العملاء.',
          features: [
            'تحويلات فورية لأكثر من 35 دولة',
            'أفضل أسعار الصرف في السوق',
            'بدون رسوم خفية مطلقاً',
            'تتبع فوري للمعاملات',
            'مرخص من FCA وتشفير 256-bit',
          ],
        },
        {
          icon: 'source-code',
          badge: 'تقنية',
          title: 'تطوير البرمجيات',
          desc: 'تطوير متكامل مخصص لاحتياجاتك. نبني تطبيقات ويب وموبايل حديثة وقابلة للتوسع وآمنة من الصفر.',
          features: [
            'الواجهة الأمامية — Angular, React, Vue',
            'واجهات برمجية خلفية وخدمات مصغرة',
            'بنية قواعد البيانات وتحسينها',
            'تطبيقات iOS وAndroid',
            'البنية السحابية وDevOps',
          ],
        },
        {
          icon: 'briefcase',
          badge: 'أعمال',
          title: 'حلول الأعمال',
          desc: 'طوّر عملياتك بأنظمة CRM مخصصة وخدمات IT مُدارة بالكامل مصممة حول أهداف عملك.',
          features: [
            'تطوير CRM مخصص',
            'إدارة خدمات IT (ITSM)',
            'أتمتة العمليات التجارية',
            'تكامل الأنظمة وربط API',
            'استشارات IT والتخطيط الاستراتيجي',
          ],
        },
        {
          icon: 'code',
          badge: 'تقنية مالية',
          title: 'خدمات التقنية المالية',
          desc: 'حلول تقنية مالية متقدمة للشركات الراغبة في دمج المدفوعات والامتثال والتمويل الرقمي في منتجاتها.',
          features: [
            'تكامل بوابات الدفع',
            'أنظمة الامتثال وKYC وAML',
            'حلول المحفظة الرقمية',
            'تحليلات البيانات المالية',
            'البنوك المفتوحة وتكاملات API',
          ],
        },
      ],
      whyTag: 'لماذا نيما',
      whyTitle: 'مبنية على الثقة، تحركها التقنية',
      whyItems: [
        { icon: 'certificate',  title: 'مرخّص من FCA',          desc: 'مرخصة ومنظمة بالكامل من قِبَل هيئة السلوك المالي.' },
        { icon: 'conference',   title: 'خبرة داخلية',           desc: 'فريقنا الخاص من المهندسين والمحللين وخبراء التمويل.' },
        { icon: 'lock--v1',     title: 'الأمان أولاً',          desc: 'تشفير 256-bit ومعايير أمان صارمة عبر جميع الخدمات.' },
        { icon: 'earth-planet', title: 'انتشار عالمي',           desc: 'ندعم الأفراد والشركات في أكثر من 35 دولة.' },
        { icon: 'price-tag',    title: 'أسعار شفافة',           desc: 'لا رسوم خفية. لا مفاجآت. أسعار صادقة وتنافسية.' },
        { icon: 'headset',      title: 'دعم 24/7',              desc: 'فريقنا متاح دائماً لمساعدتك متى احتجت.' },
      ],
      ctaTitle: 'مستعد للعمل معنا؟',
      ctaSubtitle: 'سواء كنت تحتاج إلى إرسال أموال عالمياً أو بناء منتج تقني مالي — فريقنا هنا لمساعدتك.',
    },
    cta: {
      title: 'هل أنت مستعد للإرسال اليوم؟',
      subtitle: 'انضم إلى عائلة عملائنا ووثّق تحويلاتك الدولية مع نيما بثقة وأمان.',
      btnPrimary: 'ابدأ الإرسال',
      btnSecondary: 'اتصل بنا',
    },
    footer: {
      copy: '© 2026 نيما إنترناشيونال ليميتد. مرخّصة ومُنظَّمة من قِبَل هيئة السلوك المالي.',
      links: [
        { label: 'الخدمات',       path: '/ourservices' },
        { label: 'تواصل معنا',    path: '/getintouch'  },
        { label: 'سياسة الخصوصية', path: '#', modal: 'privacy' },
        { label: 'شروط الخدمة',   path: '#', modal: 'terms'   },
      ],
    },
    contact: {
      badge: 'نحن هنا لمساعدتك',
      pageTitle: 'تواصل معنا',
      pageSubtitle: 'فريقنا متاح على مدار الساعة لمساعدتك في كل ما تحتاج.',
      infoCards: [
        { icon: 'email',        label: 'راسلنا',         value: 'info@nema-international.co.uk',    sub: 'الرد خلال ساعتين'             },
        { icon: 'phone',        label: 'اتصل بنا',        value: '+44 07460726920',      sub: 'الاثنين – الأحد، 24/7'        },
        { icon: 'whatsapp',     label: 'واتساب',          value: '+44 07460726920',      sub: 'رسائل فورية'                  },
        { icon: 'place-marker', label: 'المكتب الرئيسي',  value: 'برمنكهام، المملكة المتحدة', sub: 'خاضع لرقابة FCA'              },
      ],
      formTitle: 'أرسل لنا رسالة',
      form: {
        name: 'الاسم الكامل',         namePh: 'محمد أحمد',
        email: 'البريد الإلكتروني',    emailPh: 'example@email.com',
        phone: 'رقم الهاتف',           phonePh: '+44 7700 900 000',
        subject: 'الموضوع',            subjectPh: 'كيف يمكننا مساعدتك؟',
        message: 'الرسالة',            messagePh: 'اكتب رسالتك هنا…',
        submit: 'إرسال الرسالة',
        successMsg: 'شكراً! سنتواصل معك قريباً.',
      },
      trustTitle: 'لماذا تثق بنيما؟',
      trustItems: [
        { icon: '🏦', text: 'مرخص ومنظم من FCA' },
        { icon: '🔒', text: 'تشفير 256-bit وآمن تماماً' },
        { icon: '⭐', text: 'تقييم 4.9★ من أكثر من 200K عميل' },
        { icon: '🌍', text: 'نخدم أكثر من 50 دولة حول العالم' },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────── KU (Sorani)
  KU: {
    nav: { home: 'سەرەکی', services: 'خزمەتگوزاریەکان', about: 'دەربارەمان', contact: 'پەیوەندیمان پێوەبکە' },
    hero: {
      badge: 'FCA تەسدیقکراوە',
      titleLines: [
        { text: 'پارە بنێرە',         accent: false },
        { text: 'بۆ سەراسەری جیهان', accent: true  },
        { text: 'لەکاتدا',            accent: false },
      ],
      subtitle: 'نیما ئینتەرنەشنال لیمیتد گواستنەوەی پارەی نێودەوڵەتی دەکاتە خێرا، پارێزراو و بەنرخێکی گونجاو — ڕاستەوخۆ لە مۆبایلەکەت.',
      ctaPrimary: 'بەخۆڕایی دەستپێبکە',
      ctaSecondary: 'زیاتر بزانە',
      storeLabel: 'ئەپەکە دابەزێنە:',
    },
    stats: [
      { value: '+50',   label: 'وڵات'          },
      { value: '+200K', label: 'کڕیار'         },
      { value: '+£2B',  label: 'گواستراوەتەوە' },
      { value: '4.9★',  label: 'نمرەی ئەپ'    },
    ],
    features: {
      tag: 'بۆچی نیما؟',
      titleLine1: 'هەموو ئەوەی پێویستتە',
      titleLine2: 'بۆ ناردنی پارەت بە زیرەکی',
      items: [
        { icon: 'airplane-take-off', title: 'گواستنەوەی خێرا',  desc: 'پارە بنێرە بۆ سەراسەری جیهان لە چرکەیەکدا.'                            },
        { icon: 'lock--v1',         title: 'ئەمنی ئاستی بانک',  desc: 'تەسدیقکراوی FCA بە شیفرەکردنی 256-bit.'                                },
        { icon: 'currency-exchange',title: 'باشترین نرخی دراو', desc: 'نرخی ڕکابەری بەنوێکردنەوەی خێرا — بێ کرێی شاراوە.'                     },
        { icon: 'earth-planet',     title: 'گەیشتنی جیهانی',   desc: 'گواستنەوە بۆ زیاتر لە 35 وڵات.'                                         },
        { icon: 'phone',    title: 'ئەپی مۆبایل',       desc: 'هەموو گواستنەوەکانت بەڕێوەببە لە کاتی دیاریکراودا.'                    },
        { icon: 'headset',          title: 'پشتگیری 24/7',       desc: 'تیمەکەمان هەمیشە ئامادەیە یارمەتیت بدات.'                             },
      ],
    },
    how: {
      tag: 'چۆن کار دەکات',
      titleLine1: 'گواستنەوە لە',
      titleLine2: '4 هەنگاوی ئاسان',
      steps: [
        { num: '01', title: 'ئەکاونت دروستبکە', desc: 'لە چەند خولەکدا تۆمار بکە.'                                            },
        { num: '02', title: 'وەرگرەکە زیادبکە', desc: 'زانیاری وەرگرەکە یەک جار داخڵ بکە.'                                    },
        { num: '03', title: 'پارە بنێرە',         desc: 'مەبەڵەغ هەڵبژێرە، نرخ پشتڕاستبکەوە و بنێرە.'                          },
        { num: '04', title: 'پارە گەیشت',         desc: 'وەرگرەکە ئاگادار دەکرێتەوە و پارەکە دەگات.'                           },
      ],
    },
    about: {
      tag: 'دەربارەمان',
      headline: 'مرۆڤەکان بەرێگای تەکنەلۆژی و متمانە دەبەستینەوە.',
      intro: 'لە نیما ئینتەرنەشنال لیمیتددا، باوەڕمان ئەوەیە کە درێژایی نابێت بارییەک بێت لەبەرامبەر پشتگیری کردنی ئەوانەی خۆشدەویستت. مەرکەزمان لە کارەکتەری یەکگرتووی بریتانیایە، ئەرکمانیش سادەیە: گواستنەوەی پارەی نێودەوڵەتی ئەمنتر، ئاسانتر و گونجاوتر بکەین بۆ نیشتەجێکانی بریتانیا کە پارە دەنێرن بۆ خێزانەکانیان لە دەرەوە.',
      commitmentTitle: 'پابەندی ئێمە بۆ تۆ',
      commitmentText: 'دەزانین کە هەر پاوەندێکی نێرراو نوێنەری خەبات و خۆشەویستییە. بۆیە ئێمە نرخی دراوی تایبەتمەند و ڕکابەری و پلاتفۆرمێکی سەرلەهەموو ئەمنی پێشکەش دەکەین بۆ ئەوەی دڵنیاییت پێبدەین. ئێمە تەنها خزمەتگوزاری گواستنەوەمان نییە؛ بەڵکوو پردێکین کە کۆمەڵگاکانی بریتانیا بە خێزانە جیهانییەکانیانەوە دەبەستینەوە.',
      innovationTitle: 'هێزی داهێنان',
      innovationText: 'ئەوەی نیما جیاواز دەکات بنچینەی تەکنۆلۆژییەکەیەتی. ئێمە تەنها کۆمپانیایەکی داراییمان نییە، بەڵکوو کۆمپانیایەکی تەواوی فینتەک و گەشەپێدانی سۆفتوێرین. شارەزایی ناوخۆیمان ئەمکانمان دەدات سیستەمی ئەمن و بەهێز بنا بنێین بۆ کڕیارەکانمان و خۆمان.',
      expertiseTitle: 'شارەزایی ئێمە',
      expertiseItems: [
        { icon: 'cash-in-hand',     title: 'گواستنەوەی نێودەوڵەتی', desc: 'گواستنەوەی پارەی ئەمن و کەمتر کرێ.'                                           },
        { icon: 'source-code',      title: 'گەشەپێدانی سۆفتوێر',    desc: 'چارەسەری تەواو (فرۆنتێند، باکێند، بنچینەی داتابەیس).'                         },
        { icon: 'briefcase',        title: 'چارەسەری بازرگانی',       desc: 'دروستکردنی CRM تایبەتمەند و بەڕێوەبردنی خزمەتگوزاری IT.'                     },
        { icon: 'code', title: 'خزمەتگوزاری فینتەک',     desc: 'یەکگرتنی تەکنۆلۆژیای دارایی پێشکەوتوو بۆ کڕیاران.'                           },
      ],
      closing: 'لە نیما ئینتەرنەشنال لیمیتددا، شارەزایی دارایی و تایبەتمەندی تەکنیکی یەکدەخەینەوە بۆ خزمەتکردنی تاکەکەسان و کارگەکان بە یەکسانی.',
    },
    services: {
      tag: 'ئەوەی پێشکەش دەکەین',
      headline: 'چارەسەری دارایی و تەکنەلۆژی تەواو',
      subheadline: 'لە گواستنەوەی پارەی نێودەوڵەتی تا گەشەپێدانی سۆفتوێری تەواو — نیما ئامرازەکان و بنەمای دیجیتاڵی پێویست پێشکەش دەکات بۆ بازرگانییەکان و تاکەکەسان.',
      cards: [
        {
          icon: 'cash-in-hand',
          badge: 'خزمەتگوزاری سەرەکی',
          title: 'گواستنەوەی پارەی نێودەوڵەتی',
          desc: 'پارە بنێرە بە پاسایی، ئەمنی و بە باشترین نرخەکان. تەسدیقکراوی FCA و متمانەپێکراوی هەزاران کڕیار.',
          features: [
            'گواستنەوەی خێرا بۆ زیاتر لە 35 وڵات',
            'باشترین نرخی دراوی بازاڕ',
            'بێ کرێی شاراوە هەرگیز',
            'شوێنکردنەوەی مامەڵە لەکاتدا',
            'تەسدیقکراوی FCA و شیفرەکردنی 256-bit',
          ],
        },
        {
          icon: 'source-code',
          badge: 'تەکنەلۆژی',
          title: 'گەشەپێدانی سۆفتوێر',
          desc: 'گەشەپێدانی تەواو بەپێی پێداویستیەکانت. ئەپلیکەیشنی وێب و مۆبایلی نوێ، بەهێز و ئەمن دروست دەکەین لە سفرەوە.',
          features: [
            'فرۆنتێند — Angular, React, Vue',
            'باکێند API و مایکرۆسێرڤیس',
            'بنچینە و باشترکردنی داتابەیس',
            'ئەپلیکەیشنی iOS و Android',
            'بنەمای هەور و DevOps',
          ],
        },
        {
          icon: 'briefcase',
          badge: 'بازرگانی',
          title: 'چارەسەری بازرگانی',
          desc: 'کارەکانت باشتر بکە بە سیستەمی CRM تایبەتمەند و خزمەتگوزاری IT بەڕێوەبراوی تەواو.',
          features: [
            'گەشەپێدانی CRM تایبەتمەند',
            'بەڕێوەبردنی خزمەتگوزاری IT (ITSM)',
            'خۆکارکردنی پرۆسەی بازرگانی',
            'یەکگرتنی سیستەم و پەیوەندی API',
            'ڕاوێژکاری IT و پلانریزی ستراتیجی',
          ],
        },
        {
          icon: 'code',
          badge: 'فینتەک',
          title: 'خزمەتگوزاری فینتەک',
          desc: 'چارەسەری تەکنۆلۆژیای دارایی پێشکەوتوو بۆ بازرگانییەکانی خواستوو یەکگرتنی پارەدان و پابەندی و داراییی دیجیتاڵ.',
          features: [
            'یەکگرتنی دەروازەی پارەدان',
            'سیستەمی پابەندی و KYC و AML',
            'چارەسەری جزدانی دیجیتاڵ',
            'شیکاری داتای دارایی',
            'بانکداری کراوە و یەکگرتنەکانی API',
          ],
        },
      ],
      whyTag: 'بۆچی نیما',
      whyTitle: 'بنیاتنراو بەسەر متمانەدا، مەحرەکی تەکنەلۆژی',
      whyItems: [
        { icon: 'certificate',  title: 'تەسدیقکراوی FCA',       desc: 'مۆڵەتدار و سەرپەرشتیکراو بە تەواوی لە هەیئەتی ڕەفتاری دارایی.' },
        { icon: 'conference',   title: 'شارەزایی ناوخۆ',        desc: 'تیمی ئێمە لە ئەندازیار و شیکەر و متخەسسیسی دارایی پێکهاتووە.' },
        { icon: 'lock--v1',     title: 'ئەمن لەسەر هەموو شت',   desc: 'شیفرەکردنی 256-bit و ستانداردی ئەمنی توند لە هەموو خزمەتگوزارییەکاندا.' },
        { icon: 'earth-planet', title: 'گەیشتنی جیهانی',        desc: 'پشتگیری تاکەکەسان و بازرگانییەکان لە زیاتر لە 35 وڵات.' },
        { icon: 'price-tag',    title: 'نرخی ڕوون و دیار',       desc: 'بێ کرێی شاراوە. بێ مەترسی. نرخی ڕاستەقینە و ڕکابەری.' },
        { icon: 'headset',      title: 'پشتگیری 24/7',           desc: 'تیمەکەمان هەمیشە ئامادەیە یارمەتیت بدات کاتێک پێویستی پێی هەیت.' },
      ],
      ctaTitle: 'ئامادەی کارکردن لەگەڵمانیت؟',
      ctaSubtitle: 'جا پارەت دەنێری بۆ سەراسەری جیهان یان دەتەوێت بەرهەمی فینتەکی داهاتوو بنا — تیمەکەمان ئێرەیە بۆ یارمەتیت.',
    },
    cta: {
      title: 'ئامادەی ناردنی پارە ئەمڕۆیت؟',
      subtitle: 'بەشێکی خانەوادەی کڕیارەکانمان بە و گواستنەوەکانی نێودەوڵەتیت لەگەڵ نیما بە متمانە و ئەمنیت بسپێرە.',
      btnPrimary: 'دەستی ناردن بکە',
      btnSecondary: 'پەیوەندیمان پێوەبکە',
    },
    footer: {
      copy: '© 2026 نیما ئینتەرنەشنال لیمیتد. مۆڵەتدار و سەرپەرشتیکراوی هەیئەتی ڕەفتاری دارایی.',
      links: [
        { label: 'خزمەتگوزاریەکان',  path: '/ourservices' },
        { label: 'پەیوەندی',         path: '/getintouch'  },
        { label: 'سیاسەتی تایبەتمەندی', path: '#', modal: 'privacy' },
        { label: 'مەرج و مەرزەکان',     path: '#', modal: 'terms'   },
      ],
    },
    contact: {
      badge: 'ئێمە ئێرەین بۆ یارمەتیت',
      pageTitle: 'پەیوەندیمان پێوەبکە',
      pageSubtitle: 'تیمەکەمان 24/7 ئامادەیە یارمەتیت بدات لە هەموو ئەوەیدا پێویستتە.',
      infoCards: [
        { icon: 'email',        label: 'ئیمەیڵمان بکە',        value: 'info@nema-international.co.uk',          sub: 'وەڵام لە 2 کاتژمێردا'          },
        { icon: 'phone',        label: 'پەیوەندیمان پێوەبکە',  value: '+44 07460726920',            sub: 'دووشەممە – یەکشەممە، 24/7'     },
        { icon: 'whatsapp',     label: 'واتساپ',                value: '+44 07460726920',            sub: 'نامەی خێرا'                    },
        { icon: 'place-marker', label: 'نووسینگەی سەرەکی',      value: 'برمنكهام، کارەکتەری یەکگرتوو', sub: 'تەسدیقکراوی FCA'              },
      ],
      formTitle: 'نامەیەکمان بنێرە',
      form: {
        name: 'ناوی تەواو',      namePh: 'ئەحمەد محمد',
        email: 'ئیمەیڵ',         emailPh: 'example@email.com',
        phone: 'ژمارەی مۆبایل', phonePh: '+44 7700 900 000',
        subject: 'بابەت',        subjectPh: 'چۆن دەتوانین یارمەتیت بدەین؟',
        message: 'نامە',          messagePh: 'نامەکەت لێرە بنووسە…',
        submit: 'نامەکە بنێرە',
        successMsg: 'سپاس! بەم زووانە پەیوەندیت پێوەدەکەینەوە.',
      },
      trustTitle: 'بۆچی نیما متمانەپێدەکرێت؟',
      trustItems: [
        { icon: '🏦', text: 'مۆڵەتداری FCA' },
        { icon: '🔒', text: 'شیفرەکردنی 256-bit' },
        { icon: '⭐', text: 'نمرەی 4.9★ لە زیاتر لە 200K کڕیار' },
        { icon: '🌍', text: 'خزمەتگوزاری بۆ زیاتر لە 50 وڵات' },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────── UR
  UR: {
    nav: { home: 'ہوم', services: 'ہماری سروسز', about: 'ہمارے بارے میں', contact: 'رابطہ کریں' },
    hero: {
      badge: 'FCAمنظور شدہ ·',
      titleLines: [
        { text: 'پیسے بھیجیں',    accent: false },
        { text: 'دنیا بھر میں',   accent: true  },
        { text: 'فوری طور پر',    accent: false },
      ],
      subtitle: 'نیما انٹرنیشنل لمیٹڈ بین الاقوامی منی ٹرانسفر کو تیز، محفوظ اور سستا بناتی ہے — آپ کے فون سے۔',
      ctaPrimary: 'مفت شروع کریں',
      ctaSecondary: 'مزید جانیں',
      storeLabel: 'ایپ ڈاؤنلوڈ کریں:',
    },
    stats: [
      { value: '+50',   label: 'ممالک'      },
      { value: '+200K', label: 'گاہک'       },
      { value: '+£2B',  label: 'منتقل شدہ'  },
      { value: '4.9★',  label: 'ایپ ریٹنگ' },
    ],
    features: {
      tag: 'نیما کیوں؟',
      titleLine1: 'وہ سب کچھ جو آپ کو چاہیے',
      titleLine2: 'پیسے بھیجنے کے لیے',
      items: [
        { icon: 'airplane-take-off', title: 'فوری ٹرانسفر',       desc: 'سیکنڈوں میں دنیا بھر میں پیسے بھیجیں۔'                              },
        { icon: 'lock--v1',         title: 'بینک سطح کی سیکیورٹی',desc: 'FCA منظور شدہ، 256-bit انکرپشن کے ساتھ۔'                          },
        { icon: 'currency-exchange',title: 'بہترین شرح تبادلہ',   desc: 'مسابقتی نرخ — کوئی پوشیدہ فیس نہیں۔'                              },
        { icon: 'earth-planet',     title: 'عالمی رسائی',          desc: '35 سے زائد ممالک میں ٹرانسفر کریں۔'                               },
        { icon: 'smartphone-01',    title: 'موبائل ایپ',           desc: 'ہماری خوبصورت ایپ سے کہیں بھی ٹرانسفر کریں۔'                     },
        { icon: 'headset',          title: '24/7 سپورٹ',           desc: 'ہماری ٹیم دن رات آپ کی مدد کے لیے موجود ہے۔'                     },
      ],
    },
    how: {
      tag: 'یہ کیسے کام کرتا ہے',
      titleLine1: '4 آسان مراحل میں',
      titleLine2: 'ٹرانسفر کریں',
      steps: [
        { num: '01', title: 'اکاؤنٹ بنائیں',       desc: 'اپنے ID اور فون نمبر سے منٹوں میں رجسٹر کریں۔'                     },
        { num: '02', title: 'وصول کنندہ شامل کریں', desc: 'ایک بار تفصیلات درج کریں اور محفوظ کریں۔'                          },
        { num: '03', title: 'پیسے بھیجیں',          desc: 'رقم منتخب کریں، نرخ تصدیق کریں اور بھیجیں۔'                       },
        { num: '04', title: 'رقم پہنچ گئی',          desc: 'وصول کنندہ کو اطلاع ملتی ہے اور رقم فوری آتی ہے۔'                },
      ],
    },
    about: {
      tag: 'ہمارے بارے میں',
      headline: 'ٹیکنالوجی اور اعتماد کے ذریعے لوگوں کو جوڑنا۔',
      intro: 'NEMA انٹرنیشنل لمیٹڈ میں، ہم یقین رکھتے ہیں کہ فاصلہ کبھی اپنے پیاروں کی مدد کرنے میں رکاوٹ نہیں بننا چاہیے۔ برطانیہ میں قائم، ہمارا مشن سادہ ہے: UK میں رہنے والوں کے لیے بین الاقوامی منی ٹرانسفر کو محفوظ، آسان اور سستا بنانا جو اپنے خاندانوں کو بیرون ملک رقم بھیجتے ہیں۔',
      commitmentTitle: 'آپ سے ہمارا وعدہ',
      commitmentText: 'ہم سمجھتے ہیں کہ بھیجا گیا ہر پاؤنڈ محنت اور محبت کی نمائندگی کرتا ہے۔ اسی لیے ہم منفرد، مسابقتی شرح تبادلہ اور سیکیورٹی کو ترجیح دینے والا پلیٹ فارم پیش کرتے ہیں جو آپ کو ذہنی سکون دیتا ہے۔ ہم صرف ٹرانسفر سروس نہیں ہیں؛ ہم ایک پل ہیں جو UK کی کمیونٹیز کو ان کے عالمی خاندانوں سے جوڑتا ہے۔',
      innovationTitle: 'اختراع سے چلنے والے',
      innovationText: 'NEMA کو جو چیز ممتاز کرتی ہے وہ ہماری تکنیکی بنیاد ہے۔ ہم صرف ایک مالیاتی کمپنی نہیں ہیں بلکہ ایک مکمل سروس FinTech اور سافٹ ویئر ڈیولپمنٹ فرم ہیں۔ ہماری اندرونی مہارت ہمیں اپنے کلائنٹس اور خود اپنے لیے محفوظ، مضبوط سسٹم بنانے کے قابل بناتی ہے۔',
      expertiseTitle: 'ہماری مہارت',
      expertiseItems: [
        { icon: 'cash-in-hand',     title: 'بین الاقوامی ترسیلات زر', desc: 'محفوظ، کم لاگت منی ٹرانسفر۔'                                                 },
        { icon: 'source-code',      title: 'سافٹ ویئر ڈیولپمنٹ',      desc: 'مکمل اسٹیک حل (فرنٹ اینڈ، بیک اینڈ، ڈیٹابیس آرکیٹیکچر)۔'                  },
        { icon: 'briefcase',        title: 'کاروباری حل',              desc: 'کسٹم CRM بلڈز اور IT سروس مینجمنٹ۔'                                         },
        { icon: 'code', title: 'فن ٹیک سروسز',             desc: 'کلائنٹس کے لیے جدید مالیاتی ٹیکنالوجی انضمام۔'                             },
      ],
      closing: 'NEMA انٹرنیشنل لمیٹڈ میں، ہم افراد اور کاروبار دونوں کی خدمت کے لیے مالی مہارت کو تکنیکی عمدگی کے ساتھ جوڑتے ہیں۔',
    },
    services: {
      tag: 'ہم کیا پیش کرتے ہیں',
      headline: 'جامع مالیاتی اور تکنیکی حل',
      subheadline: 'بین الاقوامی منی ٹرانسفر سے لے کر مکمل سافٹ ویئر ڈیولپمنٹ تک — NEMA وہ ابزار اور انفراسٹرکچر فراہم کرتا ہے جو جدید کاروبار اور افراد کو درکار ہے۔',
      cards: [
        {
          icon: 'cash-in-hand',
          badge: 'بنیادی سروس',
          title: 'بین الاقوامی منی ٹرانسفر',
          desc: 'پیسے سرحد پار فوری، محفوظ اور بہترین نرخوں پر بھیجیں۔ FCA منظور شدہ اور ہزاروں صارفین کا اعتماد۔',
          features: [
            '35+ ممالک میں فوری ٹرانسفر',
            'بازار میں بہترین شرح تبادلہ',
            'کوئی پوشیدہ فیس نہیں',
            'ریئل ٹائم ٹرانزیکشن ٹریکنگ',
            'FCA منظور شدہ اور 256-bit انکرپشن',
          ],
        },
        {
          icon: 'source-code',
          badge: 'ٹیکنالوجی',
          title: 'سافٹ ویئر ڈیولپمنٹ',
          desc: 'آپ کی ضروریات کے مطابق مکمل ڈیولپمنٹ۔ ہم قابل توسیع، محفوظ اور جدید ویب اور موبائل ایپلیکیشنز ابتداء سے بناتے ہیں۔',
          features: [
            'فرنٹ اینڈ — Angular, React, Vue',
            'بیک اینڈ APIs اور Microservices',
            'ڈیٹابیس آرکیٹیکچر اور اوپٹیمائزیشن',
            'iOS اور Android ایپلیکیشنز',
            'کلاؤڈ انفراسٹرکچر اور DevOps',
          ],
        },
        {
          icon: 'briefcase',
          badge: 'کاروبار',
          title: 'کاروباری حل',
          desc: 'کسٹم CRM سسٹمز اور مکمل منیجڈ IT سروسز کے ساتھ اپنے آپریشنز کو بہتر بنائیں۔',
          features: [
            'کسٹم CRM ڈیولپمنٹ',
            'IT سروس مینجمنٹ (ITSM)',
            'بزنس پروسیس آٹومیشن',
            'سسٹم انٹیگریشن اور API کنیکٹیویٹی',
            'IT مشاورت اور اسٹریٹجک پلاننگ',
          ],
        },
        {
          icon: 'code',
          badge: 'فن ٹیک',
          title: 'فن ٹیک سروسز',
          desc: 'ادائیگیوں، تعمیل اور ڈیجیٹل فنانس کو اپنی مصنوعات میں شامل کرنے والے کاروباروں کے لیے جدید مالیاتی ٹیکنالوجی حل۔',
          features: [
            'پیمنٹ گیٹ وے انٹیگریشن',
            'تعمیل، KYC اور AML سسٹمز',
            'ڈیجیٹل والٹ سولیوشنز',
            'مالیاتی ڈیٹا تجزیات',
            'اوپن بینکنگ اور API انٹیگریشنز',
          ],
        },
      ],
      whyTag: 'نیما کیوں',
      whyTitle: 'اعتماد پر قائم، ٹیکنالوجی سے چلتے ہیں',
      whyItems: [
        { icon: 'certificate',  title: 'FCA منظور شدہ',       desc: 'فنانشل کنڈکٹ اتھارٹی کی طرف سے مکمل طور پر مجاز اور منظم۔' },
        { icon: 'conference',   title: 'اندرونی مہارت',       desc: 'ہمارے اپنے انجینئرز، تجزیہ کار اور مالیاتی پیشہ ور۔' },
        { icon: 'lock--v1',     title: 'سیکیورٹی پہلے',      desc: '256-bit انکرپشن اور تمام سروسز میں سخت سیکیورٹی معیار۔' },
        { icon: 'earth-planet', title: 'عالمی رسائی',          desc: '35+ ممالک میں افراد اور کاروبار کی مدد۔' },
        { icon: 'price-tag',    title: 'شفاف قیمتیں',         desc: 'کوئی پوشیدہ فیس نہیں۔ کوئی حیرانی نہیں۔ صرف دیانتدار، مسابقتی قیمتیں۔' },
        { icon: 'headset',      title: '24/7 سپورٹ',           desc: 'ہماری ٹیم جب بھی آپ کو ضرورت ہو مدد کے لیے ہمیشہ موجود ہے۔' },
      ],
      ctaTitle: 'ہمارے ساتھ کام کرنے کے لیے تیار ہیں؟',
      ctaSubtitle: 'چاہے آپ پیسے عالمی سطح پر بھیجنا چاہتے ہوں یا اگلا فن ٹیک پروڈکٹ بنانا — ہماری ٹیم مدد کے لیے یہاں ہے۔',
    },
    cta: {
      title: 'آج پیسے بھیجنے کے لیے تیار ہیں؟',
      subtitle: 'ہمارے صارفین کے خاندان کا حصہ بنیں اور اپنی بین الاقوامی ٹرانسفر نیما کے ساتھ اعتماد اور سلامتی کے ساتھ کریں۔',
      btnPrimary: 'بھیجنا شروع کریں',
      btnSecondary: 'ہم سے رابطہ کریں',
    },
    footer: {
      copy: '© 2026 نیما انٹرنیشنل لمیٹڈ۔ فنانشل کنڈکٹ اتھارٹی کے ذریعے مجاز اور منظم۔',
      links: [
        { label: 'سروسز',         path: '/ourservices' },
        { label: 'رابطہ',         path: '/getintouch'  },
        { label: 'پرائیویسی پالیسی', path: '#', modal: 'privacy' },
        { label: 'سروس کی شرائط',  path: '#', modal: 'terms'   },
      ],
    },
    contact: {
      badge: 'ہم آپ کی مدد کے لیے یہاں ہیں',
      pageTitle: 'ہم سے رابطہ کریں',
      pageSubtitle: 'ہماری ٹیم آپ کی ہر ضرورت میں مدد کے لیے 24/7 دستیاب ہے۔',
      infoCards: [
        { icon: 'email',        label: 'ای میل کریں',  value: 'info@nema-international.co.uk',  sub: '2 گھنٹوں میں جواب' },
        { icon: 'phone',        label: 'کال کریں',      value: '+44 07460726920',    sub: 'پیر – اتوار، 24/7'  },
        { icon: 'whatsapp',     label: 'واٹس ایپ',      value: '+44 07460726920',    sub: 'فوری پیغام'         },
        { icon: 'place-marker', label: 'ہیڈ آفس',        value: 'برمنكهام، برطانیہ',       sub: 'FCA منظور شدہ'      },
      ],
      formTitle: 'ہمیں پیغام بھیجیں',
      form: {
        name: 'پورا نام',              namePh: 'محمد احمد',
        email: 'ای میل ایڈریس',        emailPh: 'example@email.com',
        phone: 'فون نمبر',             phonePh: '+44 7700 900 000',
        subject: 'موضوع',              subjectPh: 'ہم آپ کی کیسے مدد کر سکتے ہیں؟',
        message: 'پیغام',              messagePh: 'یہاں اپنا پیغام لکھیں…',
        submit: 'پیغام بھیجیں',
        successMsg: 'شکریہ! ہم جلد آپ سے رابطہ کریں گے۔',
      },
      trustTitle: 'نیما پر بھروسہ کیوں؟',
      trustItems: [
        { icon: '🏦', text: 'FCA مجاز اور منظم' },
        { icon: '🔒', text: '256-bit انکرپشن، مکمل محفوظ' },
        { icon: '⭐', text: '200K+ گاہکوں کی 4.9★ ریٹنگ' },
        { icon: '🌍', text: '50+ ممالک میں خدمات' },
      ],
    },
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private doc = inject(DOCUMENT);

  currentLang = signal<Language>('EN');
  isRTL       = computed(() => RTL_LANGUAGES.includes(this.currentLang()));
  t           = computed(() => TRANSLATIONS[this.currentLang()]);
  imgFolder   = computed(() => this.currentLang().toLowerCase());

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    const rtl = RTL_LANGUAGES.includes(lang);
    this.doc.documentElement.setAttribute('dir',  rtl ? 'rtl' : 'ltr');
    this.doc.documentElement.setAttribute('lang', lang.toLowerCase());
  }
}

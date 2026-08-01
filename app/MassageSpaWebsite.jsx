'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Phone,
  MessageCircle,
  ArrowUp,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Sparkles,
  Leaf,
  HeartPulse,
  Dumbbell,
  Droplets,
  Shield,
  PersonStanding,
  Waves,
  Sun,
  Moon,
  MapPin,
  Clock,
  Award,
  Users,
  Footprints,
  Activity,
  Disc,
} from 'lucide-react';
import { CERT_IMAGES, BEFORE_IMAGE, AFTER_IMAGE } from './imageData';

/* ============================================================
   CONTENT / TRANSLATIONS
   ============================================================ */

const CONTENT = {
  ru: {
    nav: [
      'О специалисте',
      'Услуги',
      'До/После',
      'Сертификаты',
      'Отзывы',
      'Вопросы',
      'Контакты',
    ],
    langLabel: 'RU',
    heroEyebrow: 'alma_massage',
    heroTitle:
      'Профессиональный массаж для здоровья, восстановления и хорошего самочувствия',
    heroSubtitle:
      'Индивидуальный подход, медицинские знания и забота о каждом клиенте — в спокойной и уютной обстановке.',
    ctaBook: 'Записаться',
    ctaConsult: 'Бесплатная консультация',
    ctaWhatsapp: 'WhatsApp',
    aboutEyebrow: 'О специалисте',
    aboutTitle: 'Забота, основанная на знаниях и опыте',
    aboutText:
      'большой опыт в области лечебного и восстановительного массажа. Каждая программа строится индивидуально — с учётом состояния здоровья, целей и ощущений клиента.',
    aboutPoints: [
      {
        title: 'Индивидуальный подход',
        text: 'Программа подбирается под ваш организм и запрос',
      },
      {
        title: 'Медицинские знания',
        text: 'Понимание анатомии и противопоказаний',
      },
      {
        title: 'Безопасность процедур',
        text: 'Строгое соблюдение техники и стерильности',
      },
      {
        title: 'Забота о клиенте',
        text: 'Комфорт и внимание на каждом сеансе',
      },
    ],
    advTitle: 'Наши преимущества',
    advSubtitle: 'Всё для вашего спокойствия и результата',
    advantages: [
      'Бесплатная консультация',
      'Индивидуальный подход',
      'Сертифицированный специалист',
      'Качественные масла',
    ],
    servicesEyebrow: 'Виды массажа',
    servicesTitle: 'Подберём программу под ваш запрос',
    minutes: 'мин',
    from: 'от',
    tenge: '₸',
    beforeAfterEyebrow: 'Результаты',
    beforeAfterTitle: 'До / После',
    before: 'До',
    after: 'После',
    certEyebrow: 'Документы',
    certTitle: 'Сертификаты и дипломы',
    certHint: 'Нажмите на изображение, чтобы увеличить',
    reviewsEyebrow: 'Отзывы',
    reviewsTitle: 'Что говорят клиенты',
    faqEyebrow: 'Вопросы',
    faqTitle: 'Часто задаваемые вопросы',
    faq: [
      [
        'Можно ли делать массаж каждый день?',
        'Зависит от вида массажа и состояния организма. Расслабляющий можно чаще, лечебный — по индивидуальному плану, который мы обсудим на консультации.',
      ],
      [
        'Есть ли противопоказания?',
        'Да, как и у любой процедуры. Полный список обсуждается перед первым сеансом — важно сообщить о хронических заболеваниях и текущем самочувствии.',
      ],
      [
        'Нужно ли записываться заранее?',
        'Да, запись позволяет выделить для вас достаточно времени и подготовить кабинет.',
      ],
      [
        'Как проходит первый приём?',
        'Начинаем с короткой беседы о ваших целях и самочувствии, затем подбираем технику и переходим к процедуре.',
      ],
      [
        'Сколько длится процедура?',
        'От 30 до 90 минут в зависимости от вида массажа и зоны воздействия.',
      ],
      [
        'Что взять с собой?',
        'Ничего особенного — всё необходимое есть в кабинете. При желании можно взять сменную одежду.',
      ],
    ],
    consultTitle: 'Не знаете, какой массаж подойдёт именно вам?',
    consultText:
      'Получите бесплатную консультацию специалиста и индивидуальную рекомендацию.',
    consultCta: 'Получить консультацию',
    bookingEyebrow: 'Онлайн запись',
    bookingTitle: 'Запишитесь на удобное время',
    formName: 'Имя',
    formPhone: 'Телефон',
    formWhatsapp: 'WhatsApp',
    formService: 'Выбор массажа',
    formServicePlaceholder: 'Выберите вид массажа',
    formDate: 'Дата',
    formTime: 'Время',
    formComment: 'Комментарий',
    formCommentPlaceholder: 'Расскажите о своих пожеланиях (необязательно)',
    formSubmit: 'Записаться',
    formSuccess: 'Спасибо! Мы свяжемся с вами для подтверждения записи.',
    contactsEyebrow: 'Контакты',
    contactsTitle: 'Свяжитесь с нами',
    contactPhone: 'Телефон',
    contactWhatsapp: 'WhatsApp',
    contactInstagram: 'Instagram',
    contactAddress: 'Адрес',
    contactHours: 'Часы работы',
    hoursValue: 'Пн–Сб: 09:00–20:00',
    footerRights: 'Все права защищены.',
    footerPrivacy: 'Политика конфиденциальности',
    themeToggle: 'Тема',
    back: 'Наверх',
  },
  kk: {
    nav: [
      'Маман туралы',
      'Қызметтер',
      'Дейін/Кейін',
      'Сертификаттар',
      'Пікірлер',
      'Сұрақтар',
      'Байланыс',
    ],
    langLabel: 'ҚЗ',
    heroEyebrow: 'alma_massage',
    heroTitle:
      'Денсаулық, қалпына келу және жақсы көңіл-күй үшін кәсіби массаж',
    heroSubtitle:
      'Жеке тәсіл, медициналық білім және әр клиентке қамқорлық — тыныш әрі жайлы ортада.',
    ctaBook: 'Жазылу',
    ctaConsult: 'Тегін кеңес алу',
    ctaWhatsapp: 'WhatsApp',
    aboutEyebrow: 'Маман туралы',
    aboutTitle: 'Білім мен тәжірибеге негізделген қамқорлық',
    aboutText:
      'Емдік және қалпына келтіру массажы саласында мол тәжірибе. Әр бағдарлама денсаулық жағдайын, мақсаттарды және клиенттің сезімін ескере отырып жеке құрылады.',
    aboutPoints: [
      {
        title: 'Жеке тәсіл',
        text: 'Бағдарлама сіздің денеңізге және сұранысыңызға сай таңдалады',
      },
      {
        title: 'Медициналық білім',
        text: 'Анатомия мен қарсы көрсетілімдерді түсіну',
      },
      {
        title: 'Процедура қауіпсіздігі',
        text: 'Техника мен стерильдікті қатаң сақтау',
      },
      { title: 'Клиентке қамқорлық', text: 'Әр сеанста жайлылық пен назар' },
    ],
    advTitle: 'Біздің артықшылықтарымыз',
    advSubtitle: 'Сіздің тыныштығыңыз бен нәтижеңіз үшін бәрі бар',
    advantages: [
      'Тегін кеңес беру',
      'Жеке тәсіл',
      'Сертификатталған маман',
      'Сапалы майлар',
    ],
    servicesEyebrow: 'Массаж түрлері',
    servicesTitle: 'Сұранысыңызға сай бағдарлама таңдаймыз',
    minutes: 'мин',
    from: 'бастап',
    tenge: '₸',
    beforeAfterEyebrow: 'Нәтижелер',
    beforeAfterTitle: 'Дейін / Кейін',
    before: 'Дейін',
    after: 'Кейін',
    certEyebrow: 'Құжаттар',
    certTitle: 'Сертификаттар мен дипломдар',
    certHint: 'Үлкейту үшін суретті басыңыз',
    reviewsEyebrow: 'Пікірлер',
    reviewsTitle: 'Клиенттер не дейді',
    faqEyebrow: 'Сұрақтар',
    faqTitle: 'Жиі қойылатын сұрақтар',
    faq: [
      [
        'Массажды күн сайын жасауға бола ма?',
        'Массаж түріне және дене жағдайына байланысты. Релаксация массажын жиірек жасауға болады, емдік массаж — кеңесте талқыланатын жеке жоспар бойынша.',
      ],
      [
        'Қарсы көрсетілімдер бар ма?',
        'Иә, кез келген процедура сияқты. Толық тізім бірінші сеанс алдында талқыланады — созылмалы аурулар мен қазіргі жағдай туралы хабарлау маңызды.',
      ],
      [
        'Алдын ала жазылу керек пе?',
        'Иә, жазылу сізге жеткілікті уақыт бөліп, кабинетті дайындауға мүмкіндік береді.',
      ],
      [
        'Бірінші қабылдау қалай өтеді?',
        'Мақсаттарыңыз бен көңіл-күйіңіз туралы қысқа әңгімеден бастаймыз, содан кейін техниканы таңдап, процедураға көшеміз.',
      ],
      [
        'Процедура қанша уақытқа созылады?',
        'Массаж түрі мен әсер ету аймағына байланысты 30-дан 90 минутқа дейін.',
      ],
      [
        'Өзіммен не алып келуім керек?',
        'Ерекше ештеңе қажет емес — кабинетте бәрі бар. Қаласаңыз, ауыстыратын киім алуға болады.',
      ],
    ],
    consultTitle: 'Қандай массаж сізге сай екенін білмейсіз бе?',
    consultText: 'Маманнан тегін кеңес пен жеке ұсыныс алыңыз.',
    consultCta: 'Кеңес алу',
    bookingEyebrow: 'Онлайн жазылу',
    bookingTitle: 'Ыңғайлы уақытқа жазылыңыз',
    formName: 'Аты-жөні',
    formPhone: 'Телефон',
    formWhatsapp: 'WhatsApp',
    formService: 'Массаж түрін таңдау',
    formServicePlaceholder: 'Массаж түрін таңдаңыз',
    formDate: 'Күні',
    formTime: 'Уақыты',
    formComment: 'Пікір',
    formCommentPlaceholder: 'Тілектеріңізді жазыңыз (міндетті емес)',
    formSubmit: 'Жазылу',
    formSuccess: 'Рақмет! Жазылуды растау үшін сізбен хабарласамыз.',
    contactsEyebrow: 'Байланыс',
    contactsTitle: 'Бізбен байланысыңыз',
    contactPhone: 'Телефон',
    contactWhatsapp: 'WhatsApp',
    contactInstagram: 'Instagram',
    contactAddress: 'Мекенжай',
    contactHours: 'Жұмыс уақыты',
    addressValue: 'Астана қ.',
    footerRights: 'Барлық құқықтар қорғалған.',
    footerPrivacy: 'Құпиялылық саясаты',
    themeToggle: 'Тема',
    back: 'Жоғарыға',
  },
};

const SERVICES = [
  {
    icon: Sparkles,
    ru: [
      'Скульптурный массаж лица',
      'Подтягивает овал лица, снимает отёчность',
    ],
    kk: [
      'Бет скульптуралық массажы',
      'Бет пішінін тартады, ісінуді басады',
    ],
    time: 60,
    price: 15000,
  },
  {
    icon: Footprints,
    ru: [
      'Массаж ног',
      'Проработка мышц и снятие усталости ног',
      'Улучшает кровообращение, снимает тяжесть',
    ],
    kk: [
      'Аяқ массажы',
      'Аяқ бұлшықеттерін жұмсарту және шаршауды алу',
      'Қан айналымын жақсартады, ауырлықты алады',
    ],
    time: 40,
    price: 8000,
  },
  {
    icon: Waves,
    ru: [
      'Шейно-воротниковая зона',
      'Работа с шеей и плечами',
      'Снимает головные боли и напряжение',
    ],
    kk: [
      'Мойын-жаға аймағы',
      'Мойын және иықпен жұмыс',
      'Бас ауруын және кернеуді басады',
    ],
    time: 30,
    price: 8000,
  },
  {
    icon: Activity,
    ru: [
      'Висцеральный массаж',
      'Мягкое воздействие на область живота',
      'Улучшает работу пищеварительной системы',
    ],
    kk: [
      'Висцеральды массаж',
      'Іш аймағына жұмсақ әсер ету',
      'Ас қорыту жүйесінің жұмысын жақсартады',
    ],
    time: 40,
    price: 10000,
  },
  {
    icon: Users,
    ru: [
      'Общий массаж тела',
      'Комплексная проработка всего тела',
      'Общее оздоровление и восстановление сил',
    ],
    kk: [
      'Жалпы дене массажы',
      'Бүкіл денені кешенді өңдеу',
      'Жалпы сауықтыру және күш қалпына келтіру',
    ],
    time: 60,
    price: 15000,
  },
  {
    icon: PersonStanding,
    ru: [
      'Лечебный массаж спины',
      'Точечная работа с проблемными зонами спины',
      'Облегчает боли, восстанавливает подвижность',
    ],
    kk: [
      'Арқаның емдік массажы',
      'Арқаның проблемалы аймақтарымен нүктелі жұмыс',
      'Ауырсынуды жеңілдетеді, қозғалысты қалпына келтіреді',
    ],
    time: 40,
    price: 12000,
  },
  {
    icon: Dumbbell,
    ru: [
      'Миофасциальный массаж',
      'Работа с мышцами и фасциями',
      'Снимает зажимы, улучшает подвижность тела',
    ],
    kk: [
      'Миофасциальды массаж',
      'Бұлшықеттер мен фасциялармен жұмыс',
      'Қысымды алады, дене қозғалысын жақсартады',
    ],
    time: 60,
    price: 20000,
  },
  {
    icon: Leaf,
    ru: [
      'Релакс массаж',
      'Мягкая техника для полного расслабления',
      'Снижает стресс, улучшает сон',
    ],
    kk: [
      'Релакс массаж',
      'Толық демалу үшін жұмсақ техника',
      'Стрессті азайтады, ұйқыны жақсартады',
    ],
    time: 60,
    price: 15000,
  },
  {
    icon: Disc,
    ru: [
      'Вакуумная терапия',
      'Массаж специальными банками',
      'Улучшает лимфоток и тонус кожи',
    ],
    kk: [
      'Вакуумдық терапия',
      'Арнайы банкалармен массаж',
      'Лимфа ағынын және тері тонусын жақсартады',
    ],
    time: 30,
    price: 4000,
  },
];

const ADV_ICONS = [
  Check,
  Sparkles,
  Award,
  Shield,
  Check,
  Shield,
  Droplets,
  HeartPulse,
];

const REVIEWS = {
  ru: [
    {
      name: 'Алия К.',
      text: 'Очень внимательный специалист, чувствуется медицинский подход. После курса спина перестала болеть.',
    },
    {
      name: 'Асель Т.',
      text: 'Записался после травмы на тренировке — восстановился гораздо быстрее, чем ожидал.',
    },
    {
      name: 'Динара С.',
      text: 'Кабинет очень уютный, атмосфера располагает к полному расслаблению. Обязательно вернусь.',
    },
    {
      name: 'Айгуль Б.',
      text: 'Профессионально объяснили все нюансы перед процедурой. Чувствуется забота о клиенте.',
    },
  ],
  kk: [
    {
      name: 'Алия Қ.',
      text: 'Өте зейінді маман, медициналық көзқарас сезіледі. Курстан кейін арқам ауырмай қалды.',
    },
    {
      name: 'Асель Т.',
      text: 'Жаттығу кезіндегі жарақаттан кейін жаздым — күткеннен әлдеқайда тез қалпыма келдім.',
    },
    {
      name: 'Динара С.',
      text: 'Кабинет өте жайлы, атмосфера толық демалуға көмектеседі. Міндетті түрде қайта келемін.',
    },
    {
      name: 'Айгуль Б.',
      text: 'Процедура алдында барлық нюанстарды кәсіби түсіндірді. Клиентке қамқорлық сезіледі.',
    },
  ],
};

// Сертификаты и фото до/после теперь встроены напрямую в код (см. imageData.js) —
// никаких файлов в public/ класть не нужно, картинки уже "внутри".

// ⚠️ Замените на реальный номер WhatsApp в формате без "+" и пробелов, например "77001234567"
const WHATSAPP_NUMBER = '77082780761';

/* ============================================================
   PALETTE / TOKENS (see <style> block for full definitions)
   ============================================================ */

export default function MassageSpaWebsite() {
  const [lang, setLang] = useState('ru');
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [baSlider, setBaSlider] = useState(50);
  const [lightbox, setLightbox] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const t = CONTENT[lang];
  const sectionRefs = useRef({});

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setReviewIdx((i) => (i + 1) % REVIEWS[lang].length);
    }, 5000);
    return () => clearInterval(id);
  }, [lang]);

  // scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('reveal-visible');
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang, loaded]);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const navIds = [
    'about',
    'services',
    'before-after',
    'certificates',
    'reviews',
    'faq',
    'contacts',
  ];

  return (
    <div className={`msw-root ${theme}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        .msw-root {
          --cream: #F8F3E9;
          --warm-white: #FFFDF8;
          --beige: #E8DCC0;
          --gold: #B8923D;
          --gold-soft: #D8B968;
          --green: #1E3A2F;
          --green-deep: #142B21;
          --ink: #23301F;
          --on-dark: #FFFDF8;
          --glass-bg: rgba(255,253,248,0.65);
          --glass-border: rgba(184,146,61,0.25);
          --glass-dark-bg: rgba(20,32,26,0.45);
          --glass-dark-border: rgba(216,185,104,0.3);
          --ink-faint: rgba(35,48,31,0.4);
          --hero-glow: rgba(232,220,192,0.6);
          --radius-arch: 200px 200px 0 0;
          font-family: 'Manrope', -apple-system, sans-serif;
          background: var(--cream);
          color: var(--ink);
          position: relative;
          overflow-x: hidden;
        }
        .msw-root.dark {
          --cream: #16241D;
          --warm-white: #1B2C22;
          --beige: #24382C;
          --ink: #EFE9DA;
          --glass-bg: rgba(27,44,34,0.55);
          --ink-faint: rgba(239,233,218,0.4);
          --hero-glow: rgba(36,56,44,0.6);
        }
        .msw-root * { box-sizing: border-box; }
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .tracked { letter-spacing: 0.18em; }
        .eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .glass {
          background: var(--glass-bg);
          backdrop-filter: blur(14px);
          border: 1px solid var(--glass-border);
        }
        .msw-root.dark .glass {
          background: var(--glass-bg);
        }
        .glass-dark {
          background: var(--glass-dark-bg);
          backdrop-filter: blur(14px);
          border: 1px solid var(--glass-dark-border);
        }
        .arch { border-radius: var(--radius-arch); overflow: hidden; }
        .gold-line {
          width: 56px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-soft));
        }
        .btn-gold {
          background: linear-gradient(135deg, var(--gold-soft), var(--gold));
          color: #22200f;
          font-weight: 700;
        }
        .btn-gold:hover { filter: brightness(1.08); }
        .btn-outline {
          border: 1.5px solid var(--gold);
          color: var(--ink);
        }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .breathe { animation: breathe 4.5s ease-in-out infinite; }
        @keyframes breathe {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,146,61,0.35); }
          50% { box-shadow: 0 0 0 14px rgba(184,146,61,0); }
        }
        .preloader {
          position: fixed; inset: 0; z-index: 100;
          background: var(--green);
          display: flex; align-items: center; justify-content: center;
          transition: opacity 0.7s ease, visibility 0.7s ease;
        }
        .preloader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        .preload-ring {
          width: 56px; height: 56px; border-radius: 50%;
          border: 2px solid rgba(184,146,61,0.4);
          border-top-color: var(--gold);
          animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .fab {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
          transition: transform 0.25s ease;
        }
        .fab:hover { transform: translateY(-3px) scale(1.05); }
        .card-hover { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(20,40,30,0.12); }
        .faq-panel { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
        .msw-root ::selection { background: var(--gold-soft); color: #1b1b12; }
        input, select, textarea { font-family: inherit; }
        .msw-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1.5px solid rgba(184,146,61,0.3);
          background: var(--warm-white);
          color: var(--ink);
          font-weight: 500;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .msw-input:focus { border-color: var(--gold); }
        .msw-input::placeholder { color: var(--ink-faint); }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .breathe, .fab, .card-hover { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* PRELOADER */}
      <div className={`preloader ${loaded ? 'hidden' : ''}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="preload-ring" />
          <span
            className="font-display text-2xl tracking-widest"
            style={{ color: 'var(--gold-soft)' }}
          >
            alma_massage
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div
          className="glass"
          style={{ borderBottom: '1px solid rgba(184,146,61,0.2)' }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
            <div
              className="font-display text-2xl md:text-3xl"
              style={{ color: 'var(--ink)' }}
            >
              <span>alma_massage</span>
            </div>
            <nav className="hidden lg:flex items-center gap-7">
              {t.nav.map((label, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(navIds[i])}
                  className="text-sm font-semibold hover:opacity-70 transition"
                  style={{ color: 'var(--ink)' }}
                >
                  {label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'ru' ? 'kk' : 'ru')}
                className="text-xs font-bold tracked px-3 py-2 rounded-full btn-outline"
              >
                {lang === 'ru' ? '🇰🇿 ҚЗ' : '🇷🇺 RU'}
              </button>
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="w-9 h-9 rounded-full flex items-center justify-center btn-outline"
                aria-label="theme"
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              <button
                onClick={() => scrollTo('booking')}
                className="hidden md:block px-5 py-2.5 rounded-full text-sm btn-gold"
              >
                {t.ctaBook}
              </button>
              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden flex flex-col gap-1 px-5 pb-4">
              {t.nav.map((label, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(navIds[i])}
                  className="text-left py-2 text-sm font-semibold"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center pt-28 pb-16 px-5 md:px-8"
        style={{
          minHeight: '92vh',
          background:
            'radial-gradient(ellipse at 70% 20%, var(--hero-glow), transparent 60%), var(--cream)',
        }}
      >
        <div className="max-w-3xl mx-auto w-full text-center">
          <div className="reveal flex flex-col items-center">
            <p className="eyebrow mb-4">{t.heroEyebrow}</p>
            <h1
              className="font-display text-4xl md:text-6xl mb-6"
              style={{ color: 'var(--ink)', lineHeight: 1.08 }}
            >
              {t.heroTitle}
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-base md:text-lg mb-9 max-w-md opacity-80 mx-auto">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => scrollTo('booking')}
                className="breathe px-7 py-3.5 rounded-full btn-gold text-sm md:text-base"
              >
                {t.ctaBook}
              </button>
              <button
                onClick={() => scrollTo('consultation')}
                className="px-7 py-3.5 rounded-full btn-outline text-sm md:text-base"
              >
                {t.ctaConsult}
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full text-sm md:text-base flex items-center gap-2"
                style={{ background: 'var(--green)', color: 'var(--on-dark)' }}
              >
                <MessageCircle size={17} /> {t.ctaWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--warm-white)' }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="eyebrow mb-3">{t.aboutEyebrow}</p>
            <h2
              className="font-display text-3xl md:text-5xl mb-5"
              style={{ color: 'var(--ink)' }}
            >
              {t.aboutTitle}
            </h2>
            <div className="gold-line mb-6" />
            <p className="opacity-80 mb-8 max-w-lg">{t.aboutText}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {t.aboutPoints.map((p, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--green)' }}
                  >
                    <Check size={15} color="var(--gold-soft)" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{p.title}</p>
                    <p className="text-sm opacity-70">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="reveal order-1 lg:order-2 arch max-w-sm mx-auto w-full overflow-hidden"
            style={{ aspectRatio: '3 / 4' }}
          >
            <img
              src="/master.jpeg"
              alt="Фото специалиста"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--cream)' }}
      >
        <div className="max-w-7xl mx-auto text-center mb-14 reveal">
          <p className="eyebrow mb-3">{t.advSubtitle}</p>
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: 'var(--ink)' }}
          >
            {t.advTitle}
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.advantages.map((a, i) => {
            const Icon = ADV_ICONS[i % ADV_ICONS.length];
            return (
              <div
                key={i}
                className="reveal glass card-hover rounded-2xl p-6 flex flex-col items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--green)' }}
                >
                  <Icon size={19} color="var(--gold-soft)" />
                </div>
                <p className="font-semibold text-sm">{a}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--warm-white)' }}
      >
        <div className="max-w-7xl mx-auto text-center mb-14 reveal">
          <p className="eyebrow mb-3">{t.servicesEyebrow}</p>
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: 'var(--ink)' }}
          >
            {t.servicesTitle}
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const d = s[lang];
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="reveal glass card-hover rounded-2xl p-7 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'var(--green)' }}
                >
                  <Icon size={22} color="var(--gold-soft)" strokeWidth={1.5} />
                </div>
                <h3
                  className="font-display text-2xl mb-2"
                  style={{ color: 'var(--ink)' }}
                >
                  {d[0]}
                </h3>
                <p className="text-sm opacity-75 mb-2">{d[1]}</p>
                <p className="text-sm opacity-60 mb-5 italic">{d[2]}</p>
                <div
                  className="mt-auto flex items-center justify-between text-sm font-semibold pt-4"
                  style={{ borderTop: '1px solid rgba(184,146,61,0.25)' }}
                >
                  <span className="flex items-center gap-1.5 opacity-70">
                    <Clock size={14} /> {s.time} {t.minutes}
                  </span>
                  <span style={{ color: 'var(--gold)' }}>
                    {t.from} {s.price.toLocaleString()} {t.tenge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <div className="max-w-3xl mx-auto reveal">
        <div
          className="relative w-full rounded-3xl overflow-hidden select-none"
          style={{ aspectRatio: '16 / 10' }}
        >
          {/* 1. Изображение "ДО" (фон справа) */}
          <img
            src={BEFORE_IMAGE}
            alt="До"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span
            className="absolute right-6 top-6 z-10 text-xs font-bold tracked px-3 py-1 rounded-full shadow-md"
            style={{ background: 'var(--gold)', color: '#22200f' }}
          >
            {t.before}
          </span>

          {/* 2. Изображение "ПОСЛЕ" — полноразмерный слой, просто обрезается по ширине (clip-path), НЕ сжимается и не растягивается */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - baSlider}% 0 0)` }}
          >
            <img
              src={AFTER_IMAGE}
              alt="После"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span
              className="absolute left-6 top-6 z-10 text-xs font-bold tracked px-4 py-1.5 rounded-full shadow-md"
              style={{ background: 'var(--green)', color: 'var(--on-dark)' }}
            >
              {t.after}
            </span>
          </div>

          {/* Разделительная белая линия */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{ left: `${baSlider}%`, width: 2, background: '#ffffff' }}
          />

          {/* Ползунок (range input) */}
          <input
            type="range"
            min={0}
            max={100}
            value={baSlider}
            onChange={(e) => setBaSlider(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          {/* Белая круглая кнопка с иконкой по центру */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center pointer-events-none z-20 shadow-lg"
            style={{
              left: `calc(${baSlider}% - 20px)`,
              background: '#ffffff',
              color: '#22200f',
            }}
          >
            <span className="text-xs font-bold font-serif">◊</span>
          </div>
        </div>
      </div>
      {/* CERTIFICATES */}
      <section
        id="certificates"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--warm-white)' }}
      >
        <div className="max-w-7xl mx-auto text-center mb-4 reveal">
          <p className="eyebrow mb-3">{t.certEyebrow}</p>
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: 'var(--ink)' }}
          >
            {t.certTitle}
          </h2>
          <div className="gold-line mx-auto mt-6 mb-3" />
          <p className="text-xs opacity-60">{t.certHint}</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {CERT_IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className="reveal card-hover rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '3 / 4',
                background:
                  'linear-gradient(155deg, var(--beige), var(--cream))',
                border: '1px solid rgba(184,146,61,0.3)',
              }}
            >
              <img
                src={src}
                alt={`Сертификат ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(20,30,25,0.85)' }}
            onClick={() => setLightbox(null)}
          >
            <div
              className="glass rounded-3xl p-4 max-w-2xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox}
                alt="Сертификат"
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="mt-2 px-5 py-2 rounded-full btn-outline text-sm"
              >
                <X size={14} className="inline mr-1" /> Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--green)', color: 'var(--on-dark)' }}
      >
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <p className="eyebrow mb-3">{t.reviewsEyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl">
            {t.reviewsTitle}
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <div className="max-w-2xl mx-auto reveal">
          <div
            className="glass-dark rounded-3xl p-9 text-center transition-all duration-500"
            style={{ minHeight: 220 }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="var(--gold)"
                  color="var(--gold)"
                />
              ))}
            </div>
            <p className="text-lg font-display mb-6 leading-relaxed">
              "{REVIEWS[lang][reviewIdx].text}"
            </p>
            <p
              className="font-bold text-sm tracked"
              style={{ color: 'var(--gold-soft)' }}
            >
              {REVIEWS[lang][reviewIdx].name}
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS[lang].map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIdx(i)}
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background:
                    i === reviewIdx ? 'var(--gold)' : 'rgba(255,253,248,0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--cream)' }}
      >
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <p className="eyebrow mb-3">{t.faqEyebrow}</p>
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: 'var(--ink)' }}
          >
            {t.faqTitle}
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {t.faq.map(([q, a], i) => (
            <div key={i} className="reveal glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm md:text-base"
              >
                {q}
                <ChevronDown
                  size={18}
                  className="transition-transform shrink-0 ml-4"
                  style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'none',
                    color: 'var(--gold)',
                  }}
                />
              </button>
              <div
                className="faq-panel px-6"
                style={{ maxHeight: openFaq === i ? 200 : 0 }}
              >
                <p className="text-sm opacity-75 pb-5">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section
        id="consultation"
        className="py-24 px-5 md:px-8"
        style={{
          background:
            'linear-gradient(135deg, var(--green), var(--green-deep))',
        }}
      >
        <div className="max-w-3xl mx-auto text-center reveal">
          <Sparkles
            size={30}
            color="var(--gold-soft)"
            className="mx-auto mb-6"
          />
          <h2
            className="font-display text-3xl md:text-5xl mb-4"
            style={{ color: 'var(--on-dark)' }}
          >
            {t.consultTitle}
          </h2>
          <p
            className="opacity-75 mb-9 max-w-lg mx-auto"
            style={{ color: 'var(--on-dark)' }}
          >
            {t.consultText}
          </p>
          <button
            onClick={() => scrollTo('booking')}
            className="breathe px-8 py-4 rounded-full btn-gold"
          >
            {t.consultCta}
          </button>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--warm-white)' }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="eyebrow mb-3">{t.bookingEyebrow}</p>
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: 'var(--ink)' }}
          >
            {t.bookingTitle}
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.target);
            const name = fd.get('name') || '';
            const phone = fd.get('phone') || '';
            const whatsapp = fd.get('whatsapp') || '';
            const service = fd.get('service') || '';
            const date = fd.get('date') || '';
            const time = fd.get('time') || '';
            const comment = fd.get('comment') || '';

            const lines = [
              'Здравствуйте! Хочу записаться на массаж.',
              `${t.formName}: ${name}`,
              `${t.formPhone}: ${phone}`,
              whatsapp ? `${t.formWhatsapp}: ${whatsapp}` : null,
              service ? `${t.formService}: ${service}` : null,
              `${t.formDate}: ${date}`,
              `${t.formTime}: ${time}`,
              comment ? `${t.formComment}: ${comment}` : null,
            ].filter(Boolean);

            const message = encodeURIComponent(lines.join('\n'));
            window.open(
              `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
              '_blank'
            );

            setFormSent(true);
            setTimeout(() => setFormSent(false), 4000);
            e.target.reset();
          }}
          className="max-w-2xl mx-auto glass rounded-3xl p-7 md:p-10 grid sm:grid-cols-2 gap-5 reveal"
        >
          <Field label={t.formName}>
            <input required name="name" className="msw-input" type="text" />
          </Field>
          <Field label={t.formPhone}>
            <input
              required
              name="phone"
              className="msw-input"
              type="tel"
              placeholder="+7 (___) ___-__-__"
            />
          </Field>
          <Field label={t.formWhatsapp}>
            <input
              name="whatsapp"
              className="msw-input"
              type="tel"
              placeholder="+7 (___) ___-__-__"
            />
          </Field>
          <Field label={t.formService}>
            <select name="service" className="msw-input" defaultValue="">
              <option value="" disabled>
                {t.formServicePlaceholder}
              </option>
              {SERVICES.map((s, i) => (
                <option key={i} value={s[lang][0]}>
                  {s[lang][0]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.formDate}>
            <input required name="date" className="msw-input" type="date" />
          </Field>
          <Field label={t.formTime}>
            <input required name="time" className="msw-input" type="time" />
          </Field>
          <Field label={t.formComment} full>
            <textarea
              name="comment"
              className="msw-input"
              rows={3}
              placeholder={t.formCommentPlaceholder}
            />
          </Field>
          <button
            type="submit"
            className="sm:col-span-2 py-4 rounded-full btn-gold mt-2 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> {t.formSubmit}
          </button>
          {formSent && (
            <p
              className="sm:col-span-2 text-center text-sm font-semibold"
              style={{ color: 'var(--ink)' }}
            >
              {t.formSuccess}
            </p>
          )}
        </form>
      </section>

      {/* CONTACTS */}
      <section
        id="contacts"
        className="py-24 px-5 md:px-8"
        style={{ background: 'var(--cream)' }}
      >
        <div className="max-w-7xl mx-auto text-center mb-14 reveal">
          <p className="eyebrow mb-3">{t.contactsEyebrow}</p>
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: 'var(--ink)' }}
          >
            {t.contactsTitle}
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <div className="max-w-3xl mx-auto items-stretch">
          <div className="reveal grid sm:grid-cols-2 gap-5 content-start">
            <ContactCard
              icon={Phone}
              label={t.contactPhone}
              value="+708 278 07 61"
            />
            <ContactCard
              icon={MessageCircle}
              label={t.contactWhatsapp}
              value="+7 708 278 07 61"
            />
            <ContactCard
              icon={MessageCircle}
              label={t.contactInstagram}
              value="@alma.massage_astana"
            />
            <ContactCard
              icon={MapPin}
              label={t.contactAddress}
              value={t.addressValue}
              full
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-5 md:px-8"
        style={{ background: 'var(--green-deep)', color: 'var(--on-dark)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="font-display text-2xl"
            style={{ color: 'var(--gold-soft)' }}
          >
            alma.massage
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs opacity-70">
            <span>{t.addressValue}</span>
            <a href="#" className="hover:opacity-100">
              {t.footerPrivacy}
            </a>
            <span>© 2026 Serenity. {t.footerRights}</span>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,253,248,0.12)' }}
            >
              <MessageCircle size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,253,248,0.12)' }}
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {showBackTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fab"
            style={{ background: 'var(--green)', color: 'var(--on-dark)' }}
            aria-label={t.back}
          >
            <ArrowUp size={19} />
          </button>
        )}
        <a
          href="tel:+77082780761"
          className="fab"
          style={{ background: 'var(--green)', color: 'var(--on-dark)' }}
          aria-label="call"
        >
          <Phone size={19} />
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="fab breathe"
          style={{ background: '#25D366', color: '#fff' }}
          aria-label="whatsapp"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
}

function Field({ label, children, full }) {
  return (
    <label
      className={`flex flex-col gap-1.5 text-xs font-bold tracked ${
        full ? 'sm:col-span-2' : ''
      }`}
      style={{ color: 'var(--ink)' }}
    >
      {label}
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, label, value, full }) {
  return (
    <div
      className={`glass card-hover rounded-2xl p-5 flex items-start gap-3 ${
        full ? 'sm:col-span-2' : ''
      }`}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ background: 'var(--green)' }}
      >
        {Icon ? <Icon size={17} color="var(--gold-soft)" /> : <span>❌</span>}
      </div>

      <div>
        <p className="text-xs opacity-60 font-semibold uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}

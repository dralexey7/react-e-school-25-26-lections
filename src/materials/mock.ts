export const mockProducts = [
  {
    id: "p1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
    name: "iPhone 15 Pro",
    price: 999,
    description: "Новейший смартфон с процессором A17 Pro, камерой 48 МП и дисплеем Super Retina XDR",
    categories: ["Электроника"],
    brand: "Apple",
    rating: 4.8,
    specifications: {
      features: ["Процессор A17 Pro", "Камера 48 МП", "Дисплей Super Retina XDR"],
      details: {
        display: "6.1 дюйма",
        storage: "128GB, 256GB, 512GB, 1TB",
        colors: "Натуральный титан, Синий титан, Белый титан, Черный титан"
      },
      variants: ["128GB", "256GB", "512GB", "1TB"]
    },
  },
  {
    id: "p2b3c4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d",
    name: "Samsung Galaxy S24",
    price: 899,
    description: "Флагманский Android-смартфон с экраном Dynamic AMOLED 2X и тройной камерой",
    categories: ["Электроника"],
    brand: "Samsung",
    rating: 4.7,
    specifications: {
      features: ["Экран Dynamic AMOLED 2X", "Тройная камера", "Быстрая зарядка"],
      details: {
        display: "6.2 дюйма",
        storage: "128GB, 256GB, 512GB",
        colors: "Оникс черный, Мраморный серый, Кобальтовый фиолетовый"
      },
      variants: ["128GB", "256GB", "512GB"]
    },
  },
  {
    id: "p3c4d5e6-f7a8-9b0c-1d2e-3f4a5b6c7d8e",
    name: "MacBook Air M3",
    price: 1299,
    description: "Ультратонкий ноутбук с чипом Apple M3, дисплеем 13.6 дюйма и до 18 часов работы",
    categories: ["Электроника"],
    brand: "Apple",
    rating: 4.9,
    specifications: {
      features: ["Чип Apple M3", "Дисплей 13.6 дюйма", "До 18 часов работы"],
      details: {
        processor: "Apple M3",
        memory: "8GB, 16GB, 24GB",
        storage: "256GB, 512GB, 1TB, 2TB",
        colors: "Серебристый, Космический серый, Золотой, Полночный"
      },
      variants: ["8GB/256GB", "16GB/512GB", "24GB/1TB"]
    },
  },
  {
    id: "p4d5e6f7-a8b9-0c1d-2e3f-4a5b6c7d8e9f",
    name: "Sony WH-1000XM5",
    price: 399,
    description: "Беспроводные наушники с активным шумоподавлением и автономностью до 30 часов",
    categories: ["Электроника"],
    brand: "Sony",
    rating: 4.6,
    specifications: {
      features: ["Активное шумоподавление", "Автономность 30 часов", "Быстрая зарядка"],
      details: {
        battery: "30 часов",
        bluetooth: "5.2",
        colors: "Черный, Серебристый"
      },
      variants: ["Черный", "Серебристый"]
    },
  },
  {
    id: "p5e6f7a8-b9c0-1d2e-3f4a-5b6c7d8e9f0a",
    name: "Джинсы классические",
    price: 79,
    description: "Классические джинсы из денима премиум-качества, прямого кроя",
    categories: ["Одежда"],
    brand: "Levi's",
    rating: 4.5,
    specifications: {
      features: ["Деним премиум-качества", "Прямой крой", "Классический стиль"],
      details: {
        material: "98% хлопок, 2% эластан",
        fit: "Slim, Regular, Relaxed",
        sizes: "28, 30, 32, 34, 36, 38, 40",
        colors: "Синий, Черный, Светло-синий"
      },
      variants: ["28", "30", "32", "34", "36", "38", "40"]
    },
  },
  {
    id: "p6f7a8b9-c0d1-2e3f-4a5b-6c7d8e9f0a1b",
    name: "Кроссовки спортивные",
    price: 129,
    description: "Удобные кроссовки для бега и повседневной носки с амортизацией",
    categories: ["Одежда", "Спорт"],
    brand: "Nike",
    rating: 4.7,
    specifications: {
      features: ["Амортизация", "Дышащая сетка", "Усиленная пятка"],
      details: {
        material: "Синтетическая кожа и сетка",
        sizes: "38, 39, 40, 41, 42, 43, 44, 45, 46",
        colors: "Черный/Белый, Серый, Синий, Красный"
      },
      variants: ["38", "39", "40", "41", "42", "43", "44", "45", "46"]
    },
  },
  {
    id: "p7a8b9c0-d1e2-3f4a-5b6c-7d8e9f0a1b2c",
    name: "Куртка зимняя",
    price: 199,
    description: "Теплая зимняя куртка с утеплителем и водоотталкивающей пропиткой",
    categories: ["Одежда"],
    brand: "The North Face",
    rating: 4.6,
    specifications: {
      features: ["Водоотталкивающая пропитка", "Капюшон", "Карманы на молнии"],
      details: {
        material: "Нейлон с водоотталкивающим покрытием",
        insulation: "Пух 700 fill power",
        sizes: "XS, S, M, L, XL, XXL",
        colors: "Черный, Синий, Красный, Серый",
        temperature: "Комфорт при -10°C до -25°C"
      },
      variants: ["XS", "S", "M", "L", "XL", "XXL"]
    },
  },
  {
    id: "p8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d",
    name: "Футболка базовая",
    price: 29,
    description: "Классическая футболка из 100% хлопка, универсального кроя",
    categories: ["Одежда"],
    brand: "Uniqlo",
    rating: 4.4,
    specifications: {
      features: ["100% хлопок", "Универсальный крой", "Классический стиль"],
      details: {
        material: "100% хлопок",
        sizes: "XS, S, M, L, XL, XXL",
        colors: "Белый, Черный, Серый, Синий, Красный, Зеленый",
        fit: "Regular"
      },
      variants: ["XS", "S", "M", "L", "XL", "XXL"]
    },
  },
  {
    id: "p9c0d1e2-f3a4-5b6c-7d8e-9f0a1b2c3d4e",
    name: "Кофемашина автоматическая",
    price: 599,
    description: "Автоматическая кофемашина с функцией приготовления капучино и латте",
    categories: ["Дом и сад"],
    brand: "De'Longhi",
    rating: 4.8,
    specifications: {
      features: ["Автоматическое приготовление капучино", "Регулировка крепости", "Температура пара"],
      details: {
        waterTank: "1.8 литра",
        beanHopper: "250 грамм",
        power: "1450 Вт",
        dimensions: "43x45x60 см"
      },
      variants: ["Черный", "Белый", "Серебристый"]
    },
  },
  {
    id: "p0d1e2f3-a4b5-6c7d-8e9f-0a1b2c3d4e5f",
    name: "Пылесос робот",
    price: 349,
    description: "Умный робот-пылесос с навигацией и функцией влажной уборки",
    categories: ["Дом и сад"],
    brand: "Xiaomi",
    rating: 4.5,
    specifications: {
      features: ["LIDAR навигация", "Влажная уборка", "Приложение для управления"],
      details: {
        battery: "5200 мАч, 150 минут",
        dustbin: "0.57 литра",
        waterTank: "0.2 литра",
        navigation: "Картирование в реальном времени"
      },
      variants: ["Черный", "Белый"]
    },
  },
  {
    id: "p1e2f3a4-b5c6-7d8e-9f0a-1b2c3d4e5f6a",
    name: "Набор кастрюль",
    price: 149,
    description: "Набор из 5 кастрюль разного размера с антипригарным покрытием",
    categories: ["Дом и сад"],
    brand: "Tefal",
    rating: 4.6,
    specifications: {
      features: ["Антипригарное покрытие", "Стеклянные крышки", "Подходит для всех плит"],
      details: {
        pieces: "5 штук",
        sizes: "16, 18, 20, 22, 24 см",
        material: "Алюминий",
        compatibility: "Индукция, газовая, электрическая плита, духовка"
      },
      variants: ["Набор 5 шт"]
    },
  },
  {
    id: "p2f3a4b5-c6d7-8e9f-0a1b-2c3d4e5f6a7b",
    name: "Шампунь для волос",
    price: 12,
    description: "Шампунь для всех типов волос с натуральными компонентами",
    categories: ["Красота и здоровье"],
    brand: "Garnier",
    rating: 4.3,
    specifications: {
      features: ["Натуральные компоненты", "Без парабенов", "Без сульфатов"],
      details: {
        volume: "400 мл",
        ingredients: "Кокосовое масло, Экстракт алоэ, Витамин E",
        hairTypes: "Все типы волос"
      },
      variants: ["400 мл"]
    },
  },
  {
    id: "p3a4b5c6-d7e8-9f0a-1b2c-3d4e5f6a7b8c",
    name: "Велосипед горный",
    price: 449,
    description: "Горный велосипед с 21 передачей, алюминиевой рамой и дисковыми тормозами",
    categories: ["Спорт"],
    brand: "Trek",
    rating: 4.7,
    specifications: {
      features: ["21 передача", "Дисковые тормоза", "Передняя амортизация"],
      details: {
        frame: "Алюминий, 26 дюймов",
        gears: "3x7 скоростей",
        brakes: "Дисковые механические",
        sizes: "XS, S, M, L, XL",
        weight: "14.5 кг"
      },
      variants: ["XS", "S", "M", "L", "XL"]
    },
  },
  {
    id: "p4b5c6d7-e8f9-0a1b-2c3d-4e5f6a7b8c9d",
    name: "Гантели наборные",
    price: 89,
    description: "Наборные гантели с регулируемым весом от 2 до 20 кг каждая",
    categories: ["Спорт"],
    brand: "ProForm",
    rating: 4.5,
    specifications: {
      features: ["Регулируемый вес", "Чугунные диски", "Хромированная сталь"],
      details: {
        weight: "2-20 кг каждая",
        step: "1 кг",
        pieces: "2 штуки",
        material: "Чугун, сталь"
      },
      variants: ["2 шт"]
    },
  },
  {
    id: "p5c6d7e8-f9a0-1b2c-3d4e-5f6a7b8c9d0e",
    name: "Йога-мат",
    price: 24,
    description: "Профессиональный коврик для йоги с антискользящим покрытием",
    categories: ["Спорт"],
    brand: "Lululemon",
    rating: 4.6,
    specifications: {
      features: ["Антискользящее покрытие", "Водонепроницаемый", "Легко чистится"],
      details: {
        dimensions: "183x61 см",
        thickness: "5 мм",
        weight: "1.3 кг",
        material: "Полиуретан и каучук"
      },
      variants: ["Черный", "Серый", "Фиолетовый", "Розовый"]
    },
  },
  {
    id: "p6d7e8f9-a0b1-2c3d-4e5f-6a7b8c9d0e1f",
    name: "Беговая дорожка",
    price: 799,
    description: "Электрическая беговая дорожка с дисплеем и программами тренировок",
    categories: ["Спорт"],
    brand: "NordicTrack",
    rating: 4.4,
    specifications: {
      features: ["Дисплей 7 дюймов", "Программы тренировок", "Bluetooth"],
      details: {
        motor: "3.0 л.с.",
        maxSpeed: "20 км/ч",
        incline: "0-12%",
        runningSurface: "152x51 см",
        maxWeight: "150 кг"
      },
      variants: ["Стандарт"]
    },
  },
  {
    id: "p7e8f9a0-b1c2-3d4e-5f6a-7b8c9d0e1f2a",
    name: "Война и мир",
    price: 19,
    description: "Классический роман Льва Толстого в подарочном издании",
    categories: ["Книги"],
    brand: "АСТ",
    rating: 4.9,
    specifications: {
      features: ["Твердый переплет", "Подарочное издание", "Классика"],
      details: {
        pages: "1274",
        format: "Твердый переплет",
        language: "Русский",
        year: "2023",
        isbn: "978-5-17-123456-7"
      },
      variants: ["Твердый переплет"]
    },
  },
  {
    id: "p8f9a0b1-c2d3-4e5f-6a7b-8c9d0e1f2a3b",
    name: "JavaScript: Полное руководство",
    price: 45,
    description: "Современное руководство по JavaScript для разработчиков",
    categories: ["Книги"],
    brand: "O'Reilly",
    rating: 4.7,
    specifications: {
      features: ["7-е издание", "Актуальная информация", "Практические примеры"],
      details: {
        pages: "1096",
        format: "Мягкий переплет",
        language: "Английский",
        year: "2024",
        isbn: "978-1-491-90424-0"
      },
      variants: ["Мягкий переплет"]
    },
  },
  {
    id: "p9a0b1c2-d3e4-5f6a-7b8c-9d0e1f2a3b4c",
    name: "Гарри Поттер (полное собрание)",
    price: 89,
    description: "Все 7 книг о Гарри Поттере в подарочном издании",
    categories: ["Книги"],
    brand: "Bloomsbury",
    rating: 4.8,
    specifications: {
      features: ["7 книг в наборе", "Твердый переплет", "Подарочное издание"],
      details: {
        books: "7",
        totalPages: "4100",
        format: "Твердый переплет",
        language: "Русский"
      },
      variants: ["Полное собрание"]
    },
  },
  {
    id: "p0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    name: "Кулинарная книга",
    price: 32,
    description: "Сборник рецептов от лучших шеф-поваров мира",
    categories: ["Книги"],
    brand: "Penguin",
    rating: 4.5,
    specifications: {
      features: ["150 рецептов", "Цветные фотографии", "Пошаговые инструкции"],
      details: {
        pages: "512",
        format: "Твердый переплет",
        language: "Русский",
        recipes: "150",
        year: "2023"
      },
      variants: ["Твердый переплет"]
    },
  },
];

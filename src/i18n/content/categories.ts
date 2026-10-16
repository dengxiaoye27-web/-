import { Locale } from "../config";

export interface CategoryContent {
  name: string;
  shortDescription: string;
  heroTagline: string;
  sellingPoints?: string[];
}

type TranslatedLocale = Exclude<Locale, "en">;

export const categoryContentTranslations: Record<string, Record<TranslatedLocale, CategoryContent>> = {
  "power-distribution": {
    ar: {
      name: "توزيع الطاقة",
      shortDescription:
        "وحدات PDU للراك، ووحدات PDU الذكية، ووحدات PDU عالية القدرة، ووحدات ATS PDU وSTS لتوزيع طاقة موثوق ومراقَب على مستوى الراك.",
      heroTagline: "توزيع طاقة دقيق لكل راك ولكل حمل.",
      sellingPoints: [
        "معايير مخارج متعددة — شوكو، NEMA، بريطاني، IEC",
        "تركيب أفقي 1U أو رأسي 0U",
        "حماية اختيارية من الارتفاع المفاجئ للتيار (SPD)",
        "مستويات ذكاء متاحة: قياس، مراقبة أو تحكم بالتبديل",
        "توريد مباشر من المصنع مع دعم التخصيص OEM/ODM",
      ],
    },
    fr: {
      name: "Distribution électrique",
      shortDescription:
        "PDU de rack, PDU intelligents, PDU haute puissance, PDU ATS et STS pour une distribution électrique fiable et surveillée au niveau du rack.",
      heroTagline: "Une distribution électrique de précision pour chaque rack, chaque charge.",
      sellingPoints: [
        "Plusieurs normes de prises — Schuko, NEMA, UK, IEC",
        "Montage horizontal 1U ou vertical 0U au choix",
        "Protection contre les surtensions (SPD) en option",
        "Niveaux d'intelligence disponibles : mesuré, surveillé ou commutable",
        "Fourniture directe usine avec personnalisation OEM/ODM",
      ],
    },
    es: {
      name: "Distribución de energía",
      shortDescription:
        "PDU de rack, PDU inteligentes, PDU de alta potencia, PDU ATS y STS para una distribución de energía fiable y monitoreada a nivel de rack.",
      heroTagline: "Distribución de energía de precisión para cada rack, cada carga.",
      sellingPoints: [
        "Múltiples estándares de toma — Schuko, NEMA, UK, IEC",
        "Montaje horizontal 1U o vertical 0U a elegir",
        "Protección contra sobretensiones (SPD) opcional",
        "Niveles de inteligencia disponibles: medido, monitoreado o conmutable",
        "Suministro directo de fábrica con personalización OEM/ODM",
      ],
    },
    ru: {
      name: "Распределение питания",
      shortDescription:
        "Стоечные PDU, интеллектуальные PDU, PDU высокой мощности, ATS PDU и STS для надёжного и контролируемого распределения питания на уровне стойки.",
      heroTagline: "Точное распределение питания для каждой стойки и каждой нагрузки.",
      sellingPoints: [
        "Несколько стандартов розеток — Schuko, NEMA, UK, IEC",
        "Монтаж 1U горизонтально или 0U вертикально на выбор",
        "Опциональная защита от перенапряжения (SPD)",
        "Доступны уровни интеллекта: с измерением, мониторингом или переключением",
        "Прямая поставка с завода, поддержка OEM/ODM",
      ],
    },
    zh: {
      name: "配电",
      shortDescription: "机架PDU、智能PDU、大功率PDU、ATS PDU及STS，为机架级配电提供可靠、可监控的解决方案。",
      heroTagline: "为每一个机架、每一份负载提供精准配电。",
      sellingPoints: [
        "多种插座标准（德标/美标/英标/IEC）",
        "1U横装/0U竖装可选",
        "可选浪涌保护（SPD）",
        "支持计量/监控/可切换智能等级",
        "工厂直供，支持OEM/ODM定制",
      ],
    },
  },
  "ups-systems": {
    ar: {
      name: "أنظمة UPS",
      shortDescription: "أنظمة UPS للراك، البرجية، الأونلاين، المعيارية والصناعية توفر طاقة نظيفة ومستمرة للأحمال الحرجة.",
      heroTagline: "طاقة بلا انقطاع للبنية التحتية بالغة الأهمية.",
    },
    fr: {
      name: "Systèmes UPS",
      shortDescription:
        "Onduleurs de rack, tour, en ligne, modulaires et industriels fournissant une alimentation propre et continue pour les charges critiques.",
      heroTagline: "Une alimentation ininterrompue pour l'infrastructure mission-critique.",
    },
    es: {
      name: "Sistemas UPS",
      shortDescription:
        "Sistemas UPS de rack, torre, en línea, modulares e industriales que proporcionan energía limpia y continua para cargas críticas.",
      heroTagline: "Energía ininterrumpida para infraestructuras de misión crítica.",
    },
    ru: {
      name: "Системы ИБП",
      shortDescription:
        "Стоечные, напольные, онлайн, модульные и промышленные ИБП, обеспечивающие чистое и непрерывное питание критичных нагрузок.",
      heroTagline: "Бесперебойное питание для критически важной инфраструктуры.",
    },
    zh: {
      name: "UPS系统",
      shortDescription: "机架式、塔式、在线式、模块化及工业级UPS系统，为关键负载提供纯净、持续的电力供应。",
      heroTagline: "为关键任务基础设施提供不间断电力。",
    },
  },
  "network-server-cabinets": {
    ar: {
      name: "خزانات الشبكات والخوادم",
      shortDescription:
        "خزانات شبكات مقاس 19 بوصة، ورفوف خوادم، وخزانات مراكز بيانات مصممة لتدفق الهواء وسعة التحميل وإدارة الكابلات.",
      heroTagline: "أغلفة هندسية مصممة للكثافة وتدفق الهواء.",
    },
    fr: {
      name: "Armoires réseau et serveur",
      shortDescription:
        "Armoires réseau 19 pouces, racks serveur et armoires de data center conçues pour la circulation d'air, la capacité de charge et la gestion des câbles.",
      heroTagline: "Des enceintes conçues pour la densité et la circulation d'air.",
    },
    es: {
      name: "Gabinetes de red y servidores",
      shortDescription:
        "Gabinetes de red de 19 pulgadas, racks de servidores y gabinetes de centro de datos diseñados para el flujo de aire, la capacidad de carga y la gestión de cables.",
      heroTagline: "Gabinetes diseñados para la densidad y el flujo de aire.",
    },
    ru: {
      name: "Сетевые и серверные шкафы",
      shortDescription:
        "19-дюймовые сетевые шкафы, серверные стойки и шкафы дата-центров, спроектированные для воздушного потока, несущей способности и кабельного менеджмента.",
      heroTagline: "Корпуса, спроектированные для плотности и воздушного потока.",
    },
    zh: {
      name: "网络与服务器机柜",
      shortDescription: "19英寸网络机柜、服务器机架及数据中心机柜，专为气流组织、承重能力及布线管理而设计。",
      heroTagline: "为高密度与气流优化而设计的专业机柜。",
    },
  },
  "micro-modular-data-center": {
    ar: {
      name: "مركز بيانات الوحدة الصغيرة",
      shortDescription:
        "وحدات صغيرة مُدمجة في المصنع تجمع الخزانات وUPS والتبريد وPDU ومكافحة الحريق والمراقبة في نظام واحد.",
      heroTagline: "مركز بيانات كامل، مُدمج مسبقاً وجاهز للراك.",
    },
    fr: {
      name: "Micro data center modulaire",
      shortDescription:
        "Micro-modules intégrés en usine combinant armoires, onduleur, refroidissement, PDU, protection incendie et surveillance en un seul système.",
      heroTagline: "Un data center complet, préintégré et prêt pour le rack.",
    },
    es: {
      name: "Micro centro de datos modular",
      shortDescription:
        "Micro módulos integrados de fábrica que combinan gabinetes, UPS, refrigeración, PDU, protección contra incendios y monitoreo en un solo sistema.",
      heroTagline: "Un centro de datos completo, preintegrado y listo para el rack.",
    },
    ru: {
      name: "Микромодульный дата-центр",
      shortDescription:
        "Интегрированные на заводе микромодули, объединяющие шкафы, ИБП, охлаждение, PDU, пожаротушение и мониторинг в единой системе.",
      heroTagline: "Полноценный дата-центр, предварительно интегрированный и готовый к установке в стойку.",
    },
    zh: {
      name: "微模块化数据中心",
      shortDescription: "工厂预集成微模块，将机柜、UPS、制冷、PDU、消防及监控整合于一套系统之中。",
      heroTagline: "预集成、随时可上架的完整数据中心。",
    },
  },
  "containerized-data-center": {
    ar: {
      name: "مركز بيانات بحاوية",
      shortDescription:
        "مراكز بيانات بحاوية بحجم 20 و40 قدماً للنشر السريع في مواقع الاتصالات والتعدين والنفط والغاز والمواقع الطرفية.",
      heroTagline: "انشر مركز بيانات كاملاً خلال أسابيع، لا سنوات.",
    },
    fr: {
      name: "Data center conteneurisé",
      shortDescription:
        "Data centers conteneurisés de 20 et 40 pieds pour un déploiement rapide sur les sites télécoms, miniers, pétroliers et gaziers, et en périphérie.",
      heroTagline: "Déployez un data center complet en semaines, pas en années.",
    },
    es: {
      name: "Centro de datos contenerizado",
      shortDescription:
        "Centros de datos contenerizados de 20 y 40 pies para un despliegue rápido en sitios de telecomunicaciones, minería, petróleo y gas, y de borde.",
      heroTagline: "Despliegue un centro de datos completo en semanas, no en años.",
    },
    ru: {
      name: "Контейнерный дата-центр",
      shortDescription:
        "20- и 40-футовые контейнерные дата-центры для быстрого развёртывания на телеком-объектах, горнодобывающих, нефтегазовых и периферийных площадках.",
      heroTagline: "Разверните полноценный дата-центр за недели, а не годы.",
    },
    zh: {
      name: "集装箱式数据中心",
      shortDescription: "20英尺及40英尺集装箱式数据中心，适用于电信、矿业、石油天然气及边缘站点的快速部署。",
      heroTagline: "以数周而非数年的速度部署完整数据中心。",
    },
  },
  "cooling-solutions": {
    ar: {
      name: "حلول التبريد",
      shortDescription:
        "تكييف هواء دقيق، وتبريد على مستوى الصف وداخل الصف، وأنظمة تبريد سائل لأحمال تقنية المعلومات عالية الكثافة.",
      heroTagline: "إدارة حرارية مصممة للحوسبة عالية الكثافة.",
    },
    fr: {
      name: "Solutions de refroidissement",
      shortDescription:
        "Climatisation de précision, refroidissement en rangée et intra-rangée, et systèmes de refroidissement liquide pour les charges informatiques à haute densité.",
      heroTagline: "Une gestion thermique conçue pour le calcul haute densité.",
    },
    es: {
      name: "Soluciones de refrigeración",
      shortDescription:
        "Climatización de precisión, refrigeración a nivel de fila e intra-fila, y sistemas de refrigeración líquida para cargas de TI de alta densidad.",
      heroTagline: "Gestión térmica diseñada para computación de alta densidad.",
    },
    ru: {
      name: "Решения для охлаждения",
      shortDescription:
        "Прецизионное кондиционирование, рядное и внутрирядное охлаждение, а также системы жидкостного охлаждения для высокоплотных ИТ-нагрузок.",
      heroTagline: "Управление теплом, спроектированное для высокоплотных вычислений.",
    },
    zh: {
      name: "制冷解决方案",
      shortDescription: "精密空调、行级与列间制冷，以及液冷系统，满足高密度IT负载的散热需求。",
      heroTagline: "为高密度计算而设计的热管理方案。",
    },
  },
  "raised-floor": {
    ar: {
      name: "أرضيات مراكز البيانات",
      shortDescription:
        "أنظمة أرضيات مرفوعة مضادة للكهرباء الساكنة، وكبريتات الكالسيوم، والصلب الأسمنتي لإدارة تدفق الهواء وتوجيه الكابلات.",
      heroTagline: "طبقة الأساس لصالة بيانات هندسية متقنة.",
    },
    fr: {
      name: "Faux planchers de data center",
      shortDescription:
        "Systèmes de faux plancher antistatique, en sulfate de calcium et en acier cimentaire pour la gestion de la circulation d'air et le cheminement des câbles.",
      heroTagline: "La couche de fondation d'une salle de données bien conçue.",
    },
    es: {
      name: "Suelo técnico para centros de datos",
      shortDescription:
        "Sistemas de suelo técnico antiestático, de sulfato de calcio y de acero cementicio para la gestión del flujo de aire y el enrutamiento de cables.",
      heroTagline: "La capa base de una sala de datos bien diseñada.",
    },
    ru: {
      name: "Фальшполы для дата-центров",
      shortDescription:
        "Антистатические, сульфатно-кальциевые и стале-цементные фальшполы для управления воздушным потоком и прокладки кабелей.",
      heroTagline: "Базовый слой грамотно спроектированного зала дата-центра.",
    },
    zh: {
      name: "数据中心地板",
      shortDescription: "防静电地板、硫酸钙地板及钢制水泥基地板系统，用于气流组织与线缆走线管理。",
      heroTagline: "精心设计的数据机房的基础层。",
    },
  },
  "cable-management": {
    ar: {
      name: "إدارة الكابلات",
      shortDescription: "مدارج كابلات شبكية وسلمية لمسارات كابلات منظمة وقابلة للصيانة عبر مركز البيانات.",
      heroTagline: "مسارات منظمة لكابلات الطاقة والبيانات.",
    },
    fr: {
      name: "Gestion des câbles",
      shortDescription:
        "Chemins de câbles en treillis métallique et à échelle pour des parcours de câbles structurés et faciles à entretenir dans tout le data center.",
      heroTagline: "Des parcours structurés pour le câblage électrique et de données.",
    },
    es: {
      name: "Gestión de cables",
      shortDescription:
        "Bandejas de cables de malla y de escalera para rutas de cableado estructuradas y fáciles de mantener en todo el centro de datos.",
      heroTagline: "Rutas estructuradas para el cableado eléctrico y de datos.",
    },
    ru: {
      name: "Кабельный менеджмент",
      shortDescription:
        "Проволочные и лестничные кабельные лотки для структурированных, удобных в обслуживании кабельных трасс по всему дата-центру.",
      heroTagline: "Структурированные трассы для силовых и информационных кабелей.",
    },
    zh: {
      name: "线缆管理",
      shortDescription: "网格式与梯式桥架，为数据中心提供结构化、便于维护的线缆走线路径。",
      heroTagline: "为电力与数据线缆提供结构化走线路径。",
    },
  },
  "energy-storage": {
    ar: {
      name: "تخزين الطاقة",
      shortDescription: "أنظمة تخزين طاقة بالبطاريات، وأنظمة تخزين طاقة بحاويات، وأنظمة طاقة شمسية لطاقة موقع مرنة ومستدامة.",
      heroTagline: "تخزين طاقة مرن لتشغيل مستقل عن الشبكة.",
    },
    fr: {
      name: "Stockage d'énergie",
      shortDescription:
        "Systèmes de stockage d'énergie par batterie, ESS conteneurisés et systèmes d'énergie solaire pour une alimentation de site résiliente et durable.",
      heroTagline: "Un stockage d'énergie résilient pour un fonctionnement indépendant du réseau.",
    },
    es: {
      name: "Almacenamiento de energía",
      shortDescription:
        "Sistemas de almacenamiento de energía en baterías, ESS contenerizados y sistemas de energía solar para una alimentación del sitio resiliente y sostenible.",
      heroTagline: "Almacenamiento de energía resiliente para una operación independiente de la red.",
    },
    ru: {
      name: "Накопители энергии",
      shortDescription:
        "Аккумуляторные системы накопления энергии, контейнерные СНЭ и солнечные энергосистемы для устойчивого и экологичного энергоснабжения объекта.",
      heroTagline: "Устойчивое накопление энергии для работы независимо от сети.",
    },
    zh: {
      name: "储能",
      shortDescription: "电池储能系统、集装箱式储能系统及太阳能发电系统，为场站提供可靠、可持续的电力保障。",
      heroTagline: "为离网独立运行提供可靠的储能保障。",
    },
  },
};

export function getCategoryContent<
  T extends { name: string; shortDescription: string; heroTagline: string; sellingPoints?: string[] },
>(slug: string, locale: Locale, fallback: T): CategoryContent {
  if (locale === "en") return fallback;
  const translated = categoryContentTranslations[slug]?.[locale as TranslatedLocale];
  if (!translated) return fallback;
  return { ...translated, sellingPoints: translated.sellingPoints ?? fallback.sellingPoints };
}

import { Locale } from "../config";
import { AboutMessages } from "./types";

export const aboutMessages: Record<Locale, AboutMessages> = {
  en: {
    hero: {
      title: "About Wandtung",
      subtitle:
        "Guangdong Haisen New Building Materials Technology Co., Ltd. is a factory-direct manufacturer of data center infrastructure and critical power products, serving data center, telecom, government and industrial customers worldwide.",
    },
    overview: {
      eyebrow: "Company Overview",
      title: "Who We Are",
      paragraph1:
        "Wandtung designs and manufactures data center infrastructure and critical power products — rack PDUs and intelligent PDUs, UPS systems, network and server cabinets, micro modular and containerized data centers, precision and liquid cooling systems, raised flooring, cable management, and energy storage systems. We work directly with data center operators, telecom operators, system integrators, EPC contractors and distributors, supplying both standard catalog products and project-specific engineered systems.",
      paragraph2:
        "As a factory-direct manufacturer, Wandtung supports OEM and ODM programs, custom electrical and mechanical specifications, and engineering consultation from early project design through commissioning — positioning Wandtung as a single infrastructure partner rather than a single-product vendor.",
      stats: [
        { value: "9", label: "Product Categories" },
        { value: "OEM/ODM", label: "Custom Manufacturing" },
        { value: "6", label: "Target Export Regions" },
        { value: "Factory Direct", label: "Manufacturing Model" },
      ],
    },
    factory: {
      eyebrow: "Manufacturing",
      title: "Factory & Manufacturing",
      paragraph:
        "Wandtung operates factory-direct production for cabinets, power distribution and enclosure systems, with in-house engineering for electrical, mechanical and thermal design. Production is organized around standard catalog specifications as well as project-configured builds for micro modular and containerized data center orders.",
    },
    qualityControl: {
      eyebrow: "Assurance",
      title: "Quality Control",
      paragraph:
        "Products are tested at defined stages of production — incoming material inspection, in-process checks and final function/output testing before packing — with electrical safety and performance verified prior to shipment.",
    },
    certifications: {
      eyebrow: "Standards",
      title: "Certifications",
      description: "Our data center infrastructure products are manufactured at partner facilities certified to CE, UL, TÜV SÜD and IEC/EN standards.",
      heldByPartner: "Held by manufacturing partner",
      caption: "Certificates and test reports on file — click any card to view the full document.",
    },
    globalMarkets: {
      eyebrow: "Reach",
      title: "Global Markets",
      paragraph:
        "Wandtung exports data center infrastructure products and project solutions to the Middle East, Africa, Southeast Asia, Europe, South America and Central Asia, supporting distributors, wholesalers, EPC contractors and direct end-user projects.",
    },
    engineering: {
      eyebrow: "Engineering Support",
      title: "Custom Solutions & Project Delivery",
      paragraph:
        "Beyond catalog products, Wandtung's engineering team supports project-specific configuration — from PDU outlet layout and cabinet dimensions to complete micro modular and containerized data center system design — backed by technical documentation and delivery coordination for overseas projects.",
    },
    cta: { title: "Want to Work With Our Engineering Team?", button: "Contact Engineering Team" },
  },
  ar: {
    hero: {
      title: "عن واندتونغ",
      subtitle:
        "شركة قوانغدونغ هايسِن الجديدة لتكنولوجيا مواد البناء هي مُصنّع مباشر لمنتجات البنية التحتية لمراكز البيانات والطاقة الحرجة، تخدم عملاء مراكز البيانات والاتصالات والحكومة والصناعة حول العالم.",
    },
    overview: {
      eyebrow: "نظرة عامة على الشركة",
      title: "من نحن",
      paragraph1:
        "تُصمم واندتونغ وتُصنّع منتجات البنية التحتية لمراكز البيانات والطاقة الحرجة — وحدات توزيع الطاقة العادية والذكية، أنظمة UPS، خزانات الشبكات والخوادم، مراكز البيانات المعيارية المصغرة والحاوية، أنظمة التبريد الدقيق والسائل، الأرضيات المرتفعة، إدارة الكابلات، وأنظمة تخزين الطاقة. نعمل مباشرة مع مشغلي مراكز البيانات، ومشغلي الاتصالات، وشركات التكامل، ومقاولي EPC، والموزعين، ونوفر كلاً من المنتجات القياسية والأنظمة المصممة خصيصاً للمشاريع.",
      paragraph2:
        "بصفتها مُصنّعاً مباشراً من المصنع، تدعم واندتونغ برامج OEM وODM، والمواصفات الكهربائية والميكانيكية المخصصة، والاستشارات الهندسية من مراحل تصميم المشروع المبكرة وحتى التشغيل — ما يجعل واندتونغ شريكاً متكاملاً للبنية التحتية وليس مجرد مورّد لمنتج واحد.",
      stats: [
        { value: "9", label: "فئات المنتجات" },
        { value: "OEM/ODM", label: "تصنيع مخصص" },
        { value: "6", label: "أسواق تصدير مستهدفة" },
        { value: "مصنع مباشر", label: "نموذج التصنيع" },
      ],
    },
    factory: {
      eyebrow: "التصنيع",
      title: "المصنع والتصنيع",
      paragraph:
        "تدير واندتونغ إنتاجاً مباشراً من المصنع للخزانات وأنظمة توزيع الطاقة والهياكل، مع هندسة داخلية للتصميم الكهربائي والميكانيكي والحراري. يُنظَّم الإنتاج حول المواصفات القياسية للكتالوج، بالإضافة إلى الإنتاج المُهيأ حسب المشروع لطلبات مراكز البيانات المعيارية المصغرة والحاوية.",
    },
    qualityControl: {
      eyebrow: "ضمان الجودة",
      title: "مراقبة الجودة",
      paragraph:
        "يتم اختبار المنتجات في مراحل محددة من الإنتاج — فحص المواد الواردة، والفحوصات أثناء التصنيع، واختبار الوظائف والمخرجات النهائي قبل التعبئة — مع التحقق من السلامة الكهربائية والأداء قبل الشحن.",
    },
    certifications: {
      eyebrow: "المعايير",
      title: "الشهادات",
      description: "يتم تصنيع منتجات البنية التحتية لمراكز البيانات لدينا في منشآت شريكة حاصلة على شهادات CE وUL وTÜV SÜD ومعايير IEC/EN.",
      heldByPartner: "الشهادة مملوكة لشريك التصنيع",
      caption: "شهادات وتقارير اختبار موثقة لدينا — انقر على أي بطاقة لعرض المستند الكامل.",
    },
    globalMarkets: {
      eyebrow: "الانتشار",
      title: "الأسواق العالمية",
      paragraph:
        "تُصدّر واندتونغ منتجات البنية التحتية لمراكز البيانات وحلول المشاريع إلى الشرق الأوسط وأفريقيا وجنوب شرق آسيا وأوروبا وأمريكا الجنوبية وآسيا الوسطى، وتدعم الموزعين وتجار الجملة ومقاولي EPC ومشاريع المستخدمين النهائيين المباشرة.",
    },
    engineering: {
      eyebrow: "الدعم الهندسي",
      title: "حلول مخصصة وتسليم المشاريع",
      paragraph:
        "بالإضافة إلى منتجات الكتالوج، يدعم فريق هندسة واندتونغ التكوين الخاص بكل مشروع — من تخطيط منافذ PDU وأبعاد الخزانات إلى تصميم أنظمة كاملة لمراكز البيانات المعيارية المصغرة والحاوية — مدعوماً بوثائق تقنية وتنسيق التسليم للمشاريع الخارجية.",
    },
    cta: { title: "هل ترغب بالعمل مع فريقنا الهندسي؟", button: "تواصل مع فريق الهندسة" },
  },
  fr: {
    hero: {
      title: "À propos de Wandtung",
      subtitle:
        "Guangdong Haisen New Building Materials Technology Co., Ltd. est un fabricant direct de produits d'infrastructure de centres de données et d'alimentation critique, au service de clients dans les secteurs des centres de données, des télécommunications, du gouvernement et de l'industrie dans le monde entier.",
    },
    overview: {
      eyebrow: "Présentation de l'entreprise",
      title: "Qui sommes-nous",
      paragraph1:
        "Wandtung conçoit et fabrique des produits d'infrastructure de centres de données et d'alimentation critique — PDU en rack et PDU intelligents, onduleurs, baies réseau et serveur, centres de données modulaires micro et conteneurisés, systèmes de refroidissement de précision et liquide, planchers surélevés, gestion des câbles et systèmes de stockage d'énergie. Nous travaillons directement avec les opérateurs de centres de données, les opérateurs télécoms, les intégrateurs de systèmes, les entreprises EPC et les distributeurs, en fournissant à la fois des produits standards du catalogue et des systèmes conçus spécifiquement pour chaque projet.",
      paragraph2:
        "En tant que fabricant direct, Wandtung prend en charge les programmes OEM et ODM, les spécifications électriques et mécaniques sur mesure, ainsi qu'un accompagnement en ingénierie depuis la conception initiale du projet jusqu'à la mise en service — positionnant Wandtung comme un partenaire d'infrastructure complet plutôt qu'un simple fournisseur de produits.",
      stats: [
        { value: "9", label: "Catégories de produits" },
        { value: "OEM/ODM", label: "Fabrication personnalisée" },
        { value: "6", label: "Régions d'exportation cibles" },
        { value: "Fabrication directe", label: "Modèle de fabrication" },
      ],
    },
    factory: {
      eyebrow: "Fabrication",
      title: "Usine et fabrication",
      paragraph:
        "Wandtung exploite une production directe en usine pour les baies, les systèmes de distribution électrique et les enceintes, avec une ingénierie interne pour la conception électrique, mécanique et thermique. La production est organisée autour des spécifications standards du catalogue ainsi que des configurations spécifiques aux projets pour les commandes de centres de données modulaires micro et conteneurisés.",
    },
    qualityControl: {
      eyebrow: "Assurance",
      title: "Contrôle qualité",
      paragraph:
        "Les produits sont testés à des étapes définies de la production — inspection des matières entrantes, contrôles en cours de fabrication et test final des fonctions/performances avant l'emballage — avec vérification de la sécurité électrique et des performances avant expédition.",
    },
    certifications: {
      eyebrow: "Normes",
      title: "Certifications",
      description: "Nos produits d'infrastructure de centres de données sont fabriqués dans des usines partenaires certifiées CE, UL, TÜV SÜD et IEC/EN.",
      heldByPartner: "Certification détenue par le partenaire de fabrication",
      caption: "Certificats et rapports d'essai disponibles — cliquez sur une fiche pour consulter le document complet.",
    },
    globalMarkets: {
      eyebrow: "Présence",
      title: "Marchés internationaux",
      paragraph:
        "Wandtung exporte des produits d'infrastructure de centres de données et des solutions de projet vers le Moyen-Orient, l'Afrique, l'Asie du Sud-Est, l'Europe, l'Amérique du Sud et l'Asie centrale, en accompagnant distributeurs, grossistes, entreprises EPC et projets d'utilisateurs finaux directs.",
    },
    engineering: {
      eyebrow: "Support technique",
      title: "Solutions sur mesure et livraison de projets",
      paragraph:
        "Au-delà des produits du catalogue, l'équipe d'ingénierie de Wandtung accompagne la configuration spécifique à chaque projet — de la disposition des prises PDU et des dimensions des baies à la conception complète de systèmes de centres de données modulaires micro et conteneurisés — avec documentation technique et coordination de la livraison pour les projets à l'international.",
    },
    cta: { title: "Vous souhaitez travailler avec notre équipe d'ingénierie ?", button: "Contacter l'équipe d'ingénierie" },
  },
  es: {
    hero: {
      title: "Sobre Wandtung",
      subtitle:
        "Guangdong Haisen New Building Materials Technology Co., Ltd. es un fabricante directo de productos de infraestructura para centros de datos y energía crítica, que atiende a clientes de centros de datos, telecomunicaciones, gobierno e industria en todo el mundo.",
    },
    overview: {
      eyebrow: "Perfil de la empresa",
      title: "Quiénes somos",
      paragraph1:
        "Wandtung diseña y fabrica productos de infraestructura para centros de datos y energía crítica — PDU de rack e inteligentes, sistemas SAI, gabinetes de red y servidores, centros de datos modulares micro y en contenedores, sistemas de refrigeración de precisión y líquida, pisos elevados, gestión de cables y sistemas de almacenamiento de energía. Trabajamos directamente con operadores de centros de datos, operadores de telecomunicaciones, integradores de sistemas, contratistas EPC y distribuidores, suministrando tanto productos estándar de catálogo como sistemas diseñados específicamente para cada proyecto.",
      paragraph2:
        "Como fabricante directo, Wandtung respalda programas OEM y ODM, especificaciones eléctricas y mecánicas personalizadas, y asesoría de ingeniería desde el diseño inicial del proyecto hasta la puesta en marcha, posicionando a Wandtung como un socio integral de infraestructura y no solo como proveedor de un único producto.",
      stats: [
        { value: "9", label: "Categorías de productos" },
        { value: "OEM/ODM", label: "Fabricación personalizada" },
        { value: "6", label: "Regiones de exportación objetivo" },
        { value: "Fábrica directa", label: "Modelo de fabricación" },
      ],
    },
    factory: {
      eyebrow: "Fabricación",
      title: "Fábrica y fabricación",
      paragraph:
        "Wandtung opera producción directa de fábrica para gabinetes, sistemas de distribución de energía y recintos, con ingeniería interna para el diseño eléctrico, mecánico y térmico. La producción se organiza en torno a especificaciones estándar de catálogo, así como configuraciones específicas de proyecto para pedidos de centros de datos modulares micro y en contenedores.",
    },
    qualityControl: {
      eyebrow: "Garantía",
      title: "Control de calidad",
      paragraph:
        "Los productos se prueban en etapas definidas de la producción — inspección de materiales entrantes, controles durante el proceso y prueba final de función/salida antes del embalaje — verificando la seguridad eléctrica y el rendimiento antes del envío.",
    },
    certifications: {
      eyebrow: "Normativas",
      title: "Certificaciones",
      description: "Nuestros productos de infraestructura para centros de datos se fabrican en instalaciones asociadas certificadas según las normas CE, UL, TÜV SÜD e IEC/EN.",
      heldByPartner: "Certificación en poder del socio fabricante",
      caption: "Certificados e informes de prueba disponibles — haga clic en cualquier tarjeta para ver el documento completo.",
    },
    globalMarkets: {
      eyebrow: "Alcance",
      title: "Mercados globales",
      paragraph:
        "Wandtung exporta productos de infraestructura para centros de datos y soluciones de proyecto a Oriente Medio, África, el Sudeste Asiático, Europa, Sudamérica y Asia Central, apoyando a distribuidores, mayoristas, contratistas EPC y proyectos directos de usuarios finales.",
    },
    engineering: {
      eyebrow: "Soporte de ingeniería",
      title: "Soluciones personalizadas y entrega de proyectos",
      paragraph:
        "Más allá de los productos de catálogo, el equipo de ingeniería de Wandtung apoya la configuración específica de cada proyecto — desde la disposición de las tomas del PDU y las dimensiones del gabinete hasta el diseño completo de sistemas de centros de datos modulares micro y en contenedores — respaldado por documentación técnica y coordinación de entrega para proyectos internacionales.",
    },
    cta: { title: "¿Desea trabajar con nuestro equipo de ingeniería?", button: "Contactar al equipo de ingeniería" },
  },
  ru: {
    hero: {
      title: "О компании Wandtung",
      subtitle:
        "Guangdong Haisen New Building Materials Technology Co., Ltd. — прямой производитель оборудования для инфраструктуры ЦОД и критического электропитания, обслуживающий клиентов в сфере дата-центров, телекоммуникаций, госсектора и промышленности по всему миру.",
    },
    overview: {
      eyebrow: "О компании",
      title: "Кто мы",
      paragraph1:
        "Wandtung разрабатывает и производит оборудование для инфраструктуры ЦОД и критического электропитания — стоечные и интеллектуальные PDU, системы ИБП, сетевые и серверные шкафы, микромодульные и контейнерные дата-центры, системы прецизионного и жидкостного охлаждения, фальшполы, кабельный менеджмент и системы накопления энергии. Мы работаем напрямую с операторами ЦОД, телеком-операторами, системными интеграторами, EPC-подрядчиками и дистрибьюторами, поставляя как стандартную продукцию, так и инженерные решения под конкретные проекты.",
      paragraph2:
        "Как прямой производитель, Wandtung поддерживает программы OEM и ODM, индивидуальные электрические и механические спецификации, а также инженерное консультирование от ранних этапов проектирования до ввода в эксплуатацию — что делает Wandtung единым партнёром по инфраструктуре, а не поставщиком одного продукта.",
      stats: [
        { value: "9", label: "Категорий продукции" },
        { value: "OEM/ODM", label: "Индивидуальное производство" },
        { value: "6", label: "Целевых экспортных регионов" },
        { value: "Прямое производство", label: "Модель производства" },
      ],
    },
    factory: {
      eyebrow: "Производство",
      title: "Завод и производство",
      paragraph:
        "Wandtung осуществляет прямое заводское производство шкафов, систем распределения питания и корпусов, с собственной инженерной службой для электрического, механического и теплового проектирования. Производство организовано как по стандартным каталожным спецификациям, так и по индивидуальным проектным заказам для микромодульных и контейнерных дата-центров.",
    },
    qualityControl: {
      eyebrow: "Контроль",
      title: "Контроль качества",
      paragraph:
        "Продукция проверяется на определённых этапах производства — входной контроль материалов, промежуточные проверки и итоговое функциональное тестирование перед упаковкой — с подтверждением электробезопасности и характеристик перед отгрузкой.",
    },
    certifications: {
      eyebrow: "Стандарты",
      title: "Сертификаты",
      description: "Наша продукция для инфраструктуры ЦОД производится на партнёрских площадках, сертифицированных по стандартам CE, UL, TÜV SÜD и IEC/EN.",
      heldByPartner: "Сертификат принадлежит производственному партнёру",
      caption: "Имеющиеся сертификаты и протоколы испытаний — нажмите на карточку, чтобы просмотреть полный документ.",
    },
    globalMarkets: {
      eyebrow: "География",
      title: "Международные рынки",
      paragraph:
        "Wandtung поставляет оборудование для инфраструктуры ЦОД и проектные решения на Ближний Восток, в Африку, Юго-Восточную Азию, Европу, Южную Америку и Центральную Азию, поддерживая дистрибьюторов, оптовых поставщиков, EPC-подрядчиков и прямые проекты конечных заказчиков.",
    },
    engineering: {
      eyebrow: "Инженерная поддержка",
      title: "Индивидуальные решения и реализация проектов",
      paragraph:
        "Помимо каталожной продукции, инженерная команда Wandtung поддерживает индивидуальную конфигурацию под конкретный проект — от компоновки розеток PDU и габаритов шкафов до полного проектирования систем микромодульных и контейнерных дата-центров — с технической документацией и координацией поставки для зарубежных проектов.",
    },
    cta: { title: "Хотите работать с нашей инженерной командой?", button: "Связаться с инженерной командой" },
  },
  zh: {
    hero: {
      title: "关于万电通",
      subtitle:
        "广东海森新型建材科技有限公司是数据中心基础设施与关键电力产品的工厂直营制造商,服务于全球的数据中心、电信、政府及工业客户。",
    },
    overview: {
      eyebrow: "公司概况",
      title: "我们是谁",
      paragraph1:
        "万电通设计并制造数据中心基础设施与关键电力产品——机柜配电单元(PDU)与智能PDU、UPS系统、网络与服务器机柜、微模块及集装箱数据中心、精密与液冷制冷系统、防静电地板、线缆管理系统以及储能系统。我们直接对接数据中心运营商、电信运营商、系统集成商、EPC总承包商及经销商,既提供标准目录产品,也提供针对具体项目的工程化定制系统。",
      paragraph2:
        "作为工厂直营制造商,万电通支持OEM与ODM合作、定制电气与机械规格,并从项目早期设计到调试全程提供工程咨询支持——使万电通成为客户全方位的基础设施合作伙伴,而非单一产品供应商。",
      stats: [
        { value: "9", label: "产品类别" },
        { value: "OEM/ODM", label: "定制化制造" },
        { value: "6", label: "目标出口区域" },
        { value: "工厂直营", label: "制造模式" },
      ],
    },
    factory: {
      eyebrow: "生产制造",
      title: "工厂与生产",
      paragraph:
        "万电通为机柜、配电系统及机箱产品提供工厂直营生产,并配备自有电气、机械与热设计工程团队。生产体系既涵盖标准目录规格产品,也支持微模块及集装箱数据中心订单的项目定制化生产。",
    },
    qualityControl: {
      eyebrow: "质量保障",
      title: "质量控制",
      paragraph:
        "产品在生产的关键环节均经过检测——来料检验、过程检验及包装前的最终功能/性能测试——确保电气安全与性能在出货前得到充分验证。",
    },
    certifications: {
      eyebrow: "标准认证",
      title: "资质认证",
      description: "我们的数据中心基础设施产品，由通过 CE、UL、TÜV SÜD、IEC/EN 等国际认证的合作生产基地制造。",
      heldByPartner: "认证由生产基地持有",
      caption: "以下为我们持有的真实认证证书与测试报告——点击卡片可查看完整文件。",
    },
    globalMarkets: {
      eyebrow: "市场覆盖",
      title: "全球市场",
      paragraph:
        "万电通的数据中心基础设施产品及项目解决方案已出口至中东、非洲、东南亚、欧洲、南美及中亚地区,服务于经销商、批发商、EPC总承包商及终端客户的直接项目。",
    },
    engineering: {
      eyebrow: "工程支持",
      title: "定制方案与项目交付",
      paragraph:
        "除标准目录产品外,万电通工程团队还支持项目专属配置——从PDU出口布局、机柜尺寸,到完整的微模块及集装箱数据中心系统设计——并提供技术文档支持及海外项目交付协调。",
    },
    cta: { title: "希望与我们的工程团队合作？", button: "联系工程团队" },
  },
};

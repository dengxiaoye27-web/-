import { Locale } from "../config";

export interface SolutionContent {
  name: string;
  tagline: string;
  customerChallenge: string;
  solutionArchitecture: string;
  systemComponents: { name: string; description: string }[];
  howItWorks: string[];
  technicalAdvantages: string[];
  deploymentProcess: { step: string; description: string }[];
  typicalApplications: string[];
  faqs: { question: string; answer: string }[];
}

type TranslatedLocale = Exclude<Locale, "en">;

// Full translations for the 10 solution detail pages. English content
// lives in src/data/solutions.ts and is used directly (no duplication
// here) — this file only holds the ar/fr/es/ru/zh renderings, keyed by
// solution slug.
export const solutionContentTranslations: Record<string, Record<TranslatedLocale, SolutionContent>> = {
  "data-center-infrastructure": {
    ar: {
      name: "حل البنية التحتية لمركز البيانات",
      tagline: "منظومة بنية تحتية متكاملة ومنسقة من طاقة المرافق إلى الراك.",
      customerChallenge:
        "يحتاج المشغلون الذين يبنون أو يوسعون قاعة بيانات إلى تنسيق توزيع الطاقة وUPS والخزانات والتبريد وإدارة الكابلات والمراقبة من موردين متعددين — وهي عملية عرضة لفجوات التكامل وسوء تخطيط السعة ومخاطر الجدول الزمني.",
      solutionArchitecture:
        "تصمم هايسِن منظومة البنية التحتية الكاملة كنظام واحد منسق: يغذي دخل المرافق/المولد أنظمة UPS الزائدة، وتُوزَّع الطاقة إلى الراكات عبر وحدات PDU الذكية، ويقع حمل تكنولوجيا المعلومات في خزانات مصممة هندسياً مع احتواء الممر الساخن/البارد، ويُزيل التبريد الدقيق أو السائل الحرارة، وتربط طبقة المراقبة الطاقة والبيئة والأمن معاً.",
      systemComponents: [
        { name: "UPS وتوزيع الطاقة", description: "UPS معياري ووحدات PDU ذكية مُحجَّمة وفق هدف التكرار (N، N+1، 2N)." },
        { name: "الخزانات والاحتواء", description: "خزانات مركز البيانات مع احتواء الممر الساخن/البارد لفصل تدفق الهواء." },
        { name: "التبريد", description: "تكييف دقيق أو تبريد سائل يتناسب مع كثافة الراك." },
        { name: "إدارة الكابلات", description: "مسارات علوية منظمة وتوجيه تحت الأرضية للطاقة والبيانات." },
        { name: "المراقبة", description: "مراقبة متوافقة مع DCIM عبر الطاقة والبيئة والتحكم بالدخول." },
      ],
      howItWorks: [
        "تغذي طاقة المرافق والمولد أنظمة UPS الزائدة.",
        "يُوزَّع خرج UPS إلى الراكات عبر وحدات PDU ذكية مع مراقبة على مستوى المنفذ.",
        "يقع حمل تكنولوجيا المعلومات في خزانات مع احتواء الممر الساخن/البارد لعزل هواء التغذية والعائد.",
        "يزيل التبريد الدقيق أو السائل حمل الحرارة، بحجم يتناسب مع كثافة الراك.",
        "تجمع طبقة المراقبة بيانات الطاقة والبيئة والدخول لعمليات المنشأة.",
      ],
      technicalAdvantages: [
        "نقطة مسؤولية هندسية واحدة عبر أنظمة الطاقة والتبريد والخزانات",
        "تخطيط سعة منسق عبر UPS وPDU والتبريد منذ اليوم الأول",
        "اختبار في المصنع للأنظمة الفرعية الرئيسية قبل التسليم للموقع",
      ],
      deploymentProcess: [
        { step: "تقييم المتطلبات والحمل", description: "تحديد حمل تكنولوجيا المعلومات وهدف التكرار وقيود الموقع." },
        { step: "تصميم النظام", description: "هندسة تخطيط الطاقة والتبريد والخزانات كبنية واحدة منسقة." },
        { step: "التصنيع والاختبار في المصنع", description: "بناء واختبار الأنظمة الفرعية الرئيسية قبل الشحن." },
        { step: "التسليم والتركيب في الموقع", description: "تسليم وتركيب ودمج الأنظمة في الموقع." },
        { step: "التشغيل والتسليم", description: "تشغيل بالحمل الكامل، وتوثيق، وتدريب المشغلين." },
      ],
      typicalApplications: ["مراكز بيانات المؤسسات", "مرافق الاستضافة المشتركة", "قاعات بيانات حكومية ومالية"],
      faqs: [
        {
          question: "هل تصمم هايسِن بنية تحتية كاملة لمراكز البيانات وليس منتجات فردية فقط؟",
          answer:
            "نعم. تصمم هايسِن أنظمة متناسقة للطاقة والتبريد والخزانات والمراقبة كحل بنية تحتية واحد، مُحجَّم ومدمج معاً بدلاً من بيعه كمكونات منفصلة.",
        },
      ],
    },
    fr: {
      name: "Solution d'infrastructure de centre de données",
      tagline: "Une infrastructure complète et coordonnée, du réseau électrique jusqu'à la baie.",
      customerChallenge:
        "Les opérateurs qui construisent ou agrandissent une salle informatique doivent coordonner la distribution électrique, les onduleurs, les baies, le refroidissement, la gestion des câbles et la surveillance auprès de plusieurs fournisseurs — un processus propice aux lacunes d'intégration, à une planification de capacité inadaptée et à des risques de calendrier.",
      solutionArchitecture:
        "Haisen conçoit l'ensemble de l'infrastructure comme un système unique et coordonné : l'alimentation du réseau/groupe électrogène alimente des onduleurs redondants, l'énergie est distribuée aux baies via des PDU intelligents, la charge informatique est hébergée dans des baies conçues avec confinement des allées chaudes/froides, un refroidissement de précision ou liquide évacue la chaleur, et une couche de surveillance relie l'alimentation, l'environnement et la sécurité.",
      systemComponents: [
        { name: "Onduleurs et distribution électrique", description: "Onduleurs modulaires et PDU intelligents dimensionnés selon l'objectif de redondance (N, N+1, 2N)." },
        { name: "Baies et confinement", description: "Baies de centre de données avec confinement des allées chaudes/froides pour séparer les flux d'air." },
        { name: "Refroidissement", description: "Climatisation de précision ou refroidissement liquide adapté à la densité des baies." },
        { name: "Gestion des câbles", description: "Chemins de câbles aériens structurés et routage sous plancher pour l'alimentation et les données." },
        { name: "Surveillance", description: "Surveillance compatible DCIM couvrant l'alimentation, l'environnement et le contrôle d'accès." },
      ],
      howItWorks: [
        "L'alimentation du réseau et du groupe électrogène alimente des systèmes d'onduleurs redondants.",
        "La sortie des onduleurs est distribuée aux baies via des PDU intelligents avec surveillance au niveau des prises.",
        "La charge informatique est hébergée dans des baies avec confinement des allées chaudes/froides pour isoler l'air de soufflage et de reprise.",
        "Le refroidissement de précision ou liquide évacue la charge thermique, dimensionné selon la densité des baies.",
        "Une couche de surveillance agrège les données d'alimentation, d'environnement et d'accès pour l'exploitation de l'installation.",
      ],
      technicalAdvantages: [
        "Un point unique de responsabilité technique pour l'alimentation, le refroidissement et les enceintes",
        "Planification de capacité coordonnée entre onduleurs, PDU et refroidissement dès le premier jour",
        "Tests en usine des principaux sous-systèmes avant livraison sur site",
      ],
      deploymentProcess: [
        { step: "Évaluation des besoins et de la charge", description: "Définir la charge informatique, l'objectif de redondance et les contraintes du site." },
        { step: "Conception du système", description: "Concevoir l'alimentation, le refroidissement et la disposition des baies comme une architecture coordonnée unique." },
        { step: "Fabrication et tests en usine", description: "Construire et tester les principaux sous-systèmes avant expédition." },
        { step: "Livraison et installation sur site", description: "Livrer, installer et intégrer les systèmes sur site." },
        { step: "Mise en service et remise", description: "Mise en service en pleine charge, documentation et formation des opérateurs." },
      ],
      typicalApplications: ["Centres de données d'entreprise", "Installations de colocation", "Salles informatiques publiques et financières"],
      faqs: [
        {
          question: "Haisen conçoit-elle une infrastructure complète de centre de données, pas seulement des produits individuels ?",
          answer:
            "Oui. Haisen conçoit des systèmes coordonnés d'alimentation, de refroidissement, d'enceintes et de surveillance comme une solution d'infrastructure unique, dimensionnée et intégrée ensemble plutôt que vendue sous forme de composants séparés.",
        },
      ],
    },
    es: {
      name: "Solución de infraestructura para centros de datos",
      tagline: "Una infraestructura completa y coordinada, desde la acometida hasta el rack.",
      customerChallenge:
        "Los operadores que construyen o amplían una sala de datos deben coordinar la distribución de energía, el SAI, los gabinetes, la refrigeración, la gestión de cables y el monitoreo con múltiples proveedores, un proceso propenso a brechas de integración, planificación de capacidad desajustada y riesgos de cronograma.",
      solutionArchitecture:
        "Haisen diseña toda la infraestructura como un sistema único y coordinado: la entrada de red/generador alimenta SAI redundantes, la energía se distribuye a los racks mediante PDU inteligentes, la carga de TI se aloja en gabinetes diseñados con contención de pasillo frío/caliente, la refrigeración de precisión o líquida elimina el calor, y una capa de monitoreo une la energía, el entorno y la seguridad.",
      systemComponents: [
        { name: "SAI y distribución de energía", description: "SAI modular y PDU inteligentes dimensionados según el objetivo de redundancia (N, N+1, 2N)." },
        { name: "Gabinetes y contención", description: "Gabinetes de centro de datos con contención de pasillo frío/caliente para separar el flujo de aire." },
        { name: "Refrigeración", description: "Aire acondicionado de precisión o refrigeración líquida adaptada a la densidad del rack." },
        { name: "Gestión de cables", description: "Bandejas aéreas estructuradas y enrutamiento bajo el piso para energía y datos." },
        { name: "Monitoreo", description: "Monitoreo compatible con DCIM de energía, entorno y control de acceso." },
      ],
      howItWorks: [
        "La energía de red y del generador alimenta sistemas SAI redundantes.",
        "La salida del SAI se distribuye a los racks mediante PDU inteligentes con monitoreo a nivel de toma.",
        "La carga de TI se aloja en gabinetes con contención de pasillo frío/caliente para aislar el aire de suministro y retorno.",
        "La refrigeración de precisión o líquida elimina la carga térmica, dimensionada según la densidad del rack.",
        "Una capa de monitoreo agrega datos de energía, entorno y acceso para las operaciones de la instalación.",
      ],
      technicalAdvantages: [
        "Un único punto de responsabilidad de ingeniería para energía, refrigeración y gabinetes",
        "Planificación de capacidad coordinada entre SAI, PDU y refrigeración desde el primer día",
        "Pruebas de fábrica de los principales subsistemas antes de la entrega al sitio",
      ],
      deploymentProcess: [
        { step: "Evaluación de requisitos y carga", description: "Definir la carga de TI, el objetivo de redundancia y las restricciones del sitio." },
        { step: "Diseño del sistema", description: "Diseñar la energía, la refrigeración y la disposición de gabinetes como una arquitectura coordinada única." },
        { step: "Fabricación y pruebas de fábrica", description: "Construir y probar los principales subsistemas antes del envío." },
        { step: "Entrega e instalación en sitio", description: "Entregar, instalar e integrar los sistemas en el sitio." },
        { step: "Puesta en marcha y entrega", description: "Puesta en marcha a plena carga, documentación y capacitación del operador." },
      ],
      typicalApplications: ["Centros de datos empresariales", "Instalaciones de colocación", "Salas de datos gubernamentales y financieras"],
      faqs: [
        {
          question: "¿Haisen diseña infraestructura completa para centros de datos, no solo productos individuales?",
          answer:
            "Sí. Haisen diseña sistemas coordinados de energía, refrigeración, gabinetes y monitoreo como una solución de infraestructura única, dimensionada e integrada en conjunto en lugar de venderse como componentes desconectados.",
        },
      ],
    },
    ru: {
      name: "Решение для инфраструктуры ЦОД",
      tagline: "Полностью скоординированная инфраструктура — от ввода электропитания до стойки.",
      customerChallenge:
        "Операторам, строящим или расширяющим машинный зал, приходится согласовывать распределение питания, ИБП, шкафы, охлаждение, кабельный менеджмент и мониторинг у нескольких поставщиков — процесс, подверженный пробелам в интеграции, несогласованному планированию мощности и рискам по срокам.",
      solutionArchitecture:
        "Haisen проектирует всю инфраструктуру как единую согласованную систему: ввод от сети/генератора питает резервированные ИБП, электроэнергия распределяется по стойкам через интеллектуальные PDU, ИТ-нагрузка размещается в инженерных шкафах с изоляцией холодного/горячего коридора, прецизионное или жидкостное охлаждение отводит тепло, а уровень мониторинга объединяет питание, среду и безопасность.",
      systemComponents: [
        { name: "ИБП и распределение питания", description: "Модульные ИБП и интеллектуальные PDU, рассчитанные под целевой уровень резервирования (N, N+1, 2N)." },
        { name: "Шкафы и изоляция", description: "Шкафы ЦОД с изоляцией холодного/горячего коридора для разделения воздушных потоков." },
        { name: "Охлаждение", description: "Прецизионное кондиционирование или жидкостное охлаждение под плотность стоек." },
        { name: "Кабельный менеджмент", description: "Структурированные надпотолочные лотки и подпольная прокладка для силовых и информационных кабелей." },
        { name: "Мониторинг", description: "DCIM-совместимый мониторинг питания, среды и контроля доступа." },
      ],
      howItWorks: [
        "Питание от сети и генератора поступает на резервированные системы ИБП.",
        "Выход ИБП распределяется по стойкам через интеллектуальные PDU с мониторингом на уровне розетки.",
        "ИТ-нагрузка размещается в шкафах с изоляцией холодного/горячего коридора для разделения подающего и обратного воздуха.",
        "Прецизионное или жидкостное охлаждение отводит тепловую нагрузку, рассчитанную под плотность стоек.",
        "Уровень мониторинга агрегирует данные по питанию, среде и доступу для эксплуатации объекта.",
      ],
      technicalAdvantages: [
        "Единая точка инженерной ответственности за питание, охлаждение и шкафы",
        "Согласованное планирование мощности ИБП, PDU и охлаждения с самого начала",
        "Заводские испытания ключевых подсистем перед поставкой на объект",
      ],
      deploymentProcess: [
        { step: "Оценка требований и нагрузки", description: "Определение ИТ-нагрузки, целевого уровня резервирования и ограничений площадки." },
        { step: "Проектирование системы", description: "Проектирование питания, охлаждения и компоновки шкафов как единой согласованной архитектуры." },
        { step: "Производство и заводские испытания", description: "Сборка и испытание ключевых подсистем перед отгрузкой." },
        { step: "Поставка и монтаж на объекте", description: "Поставка, монтаж и интеграция систем на объекте." },
        { step: "Ввод в эксплуатацию и передача", description: "Пусконаладка под полной нагрузкой, документация и обучение персонала." },
      ],
      typicalApplications: ["Корпоративные ЦОД", "Колокейшн-объекты", "Государственные и финансовые машинные залы"],
      faqs: [
        {
          question: "Проектирует ли Haisen полную инфраструктуру ЦОД, а не только отдельные продукты?",
          answer:
            "Да. Haisen проектирует согласованные системы питания, охлаждения, шкафов и мониторинга как единое инфраструктурное решение, рассчитанное и интегрированное вместе, а не продаваемое как разрозненные компоненты.",
        },
      ],
    },
    zh: {
      name: "数据中心基础设施解决方案",
      tagline: "从市电到机柜的完整协同基础设施体系。",
      customerChallenge:
        "新建或扩建数据机房的运营商需要协调来自多个供应商的配电、UPS、机柜、制冷、线缆管理与监控系统——这一过程容易出现集成缺口、容量规划不匹配及工期风险。",
      solutionArchitecture:
        "海森将完整的基础设施体系设计为一套协同系统：市电/发电机输入为冗余UPS供电,电力通过智能PDU分配至机柜,IT负载置于配备冷热通道封闭的工程化机柜中,精密或液冷系统负责散热,监控层将电力、环境与安防统一整合。",
      systemComponents: [
        { name: "UPS与配电", description: "根据冗余目标(N、N+1、2N)配置的模块化UPS与智能PDU。" },
        { name: "机柜与气流封闭", description: "配备冷热通道封闭的数据中心机柜,实现气流隔离。" },
        { name: "制冷", description: "与机柜密度匹配的精密空调或液冷系统。" },
        { name: "线缆管理", description: "结构化的架空桥架与地板下布线,分别用于电力与数据线缆。" },
        { name: "监控", description: "覆盖电力、环境与门禁的DCIM兼容监控系统。" },
      ],
      howItWorks: [
        "市电与发电机电力接入冗余UPS系统。",
        "UPS输出通过具备出口级监控能力的智能PDU分配至各机柜。",
        "IT负载置于具备冷热通道封闭的机柜内,隔离送风与回风。",
        "精密或液冷系统按机柜密度移除热负载。",
        "监控层汇总电力、环境与门禁数据,支持机房运维。",
      ],
      technicalAdvantages: [
        "电力、制冷与机柜系统由统一工程团队负责,权责清晰",
        "UPS、PDU与制冷容量规划从项目伊始即协同进行",
        "主要子系统在交付现场前均完成工厂测试",
      ],
      deploymentProcess: [
        { step: "需求与负载评估", description: "确定IT负载、冗余目标与现场限制条件。" },
        { step: "系统设计", description: "将电力、制冷与机柜布局设计为统一协同架构。" },
        { step: "制造与工厂测试", description: "在发货前完成主要子系统的组装与测试。" },
        { step: "现场交付与安装", description: "完成系统的现场交付、安装与集成。" },
        { step: "调试与移交", description: "满载调试、技术文档交付及运维人员培训。" },
      ],
      typicalApplications: ["企业数据中心", "托管机房", "政府及金融机房"],
      faqs: [
        {
          question: "海森是否提供完整的数据中心基础设施设计,而不仅是单一产品？",
          answer: "是的。海森将电力、制冷、机柜与监控系统作为统一的基础设施解决方案进行协同设计与集成交付,而非作为分散的组件单独销售。",
        },
      ],
    },
  },

  "micro-modular-data-center": {
    ar: {
      name: "حل مركز البيانات المعياري المصغر",
      tagline: "مركز بيانات متكامل من المصنع للمواقع التي لا تملك مساحة لبنائه.",
      customerChallenge:
        "تحتاج المؤسسات والبنوك إلى غرف بيانات مخصصة في مواقع الفروع أو المناطق، لكن البناء التقليدي لأنظمة الطاقة والتبريد والحماية من الحريق بطيء، ويتطلب مقاولين متخصصين، ويصعب تكراره باستمرار عبر مواقع متعددة.",
      solutionArchitecture:
        "تدمج هايسِن مسبقاً خزانات تكنولوجيا المعلومات وUPS وPDU والتبريد والبطارية ومكافحة الحريق والتحكم بالدخول ومراقبة البيئة في وحدة مصغرة موحدة، تُختبر في المصنع كنظام كامل وتُشحن جاهزة للتموضع والتشغيل في الموقع.",
      systemComponents: [
        { name: "خزانات تكنولوجيا المعلومات", description: "خزانات صف واحد أو صفين مزدوجين مع الاحتواء." },
        { name: "UPS وPDU", description: "حماية وتوزيع طاقة متكاملان بحجم يتناسب مع سعة الوحدة." },
        { name: "التبريد", description: "تبريد داخل الصف أو دقيق يتناسب مع حجم الوحدة المغلقة." },
        { name: "مكافحة الحريق", description: "نظام إخماد تلقائي قائم على الغاز." },
        { name: "التحكم بالدخول والمراقبة", description: "دخول بالبطاقة/البيومترية ومراقبة بيئية مركزية." },
      ],
      howItWorks: [
        "تُهندَس الوحدة وتُجمَّع مسبقاً في المصنع كنظام كامل.",
        "تُدمج الطاقة والتبريد ومكافحة الحريق والمراقبة وتُختبر وظيفياً قبل الشحن.",
        "تُسلَّم الوحدة إلى الموقع وتُوصَّل بمرافق الطاقة والشبكة وإدارة المبنى.",
        "تُبلغ المراقبة المركزية عن حالة الطاقة والبيئة والأمن للمشغل.",
      ],
      technicalAdvantages: [
        "نشر متسق وقابل للتكرار عبر مواقع فروع/مناطق متعددة",
        "وقت بناء أقل في الموقع مقارنة بغرفة بيانات مبنية تقليدياً",
        "مراقبة جودة في المصنع قبل وصول النظام إلى الموقع",
      ],
      deploymentProcess: [
        { step: "تقييم الموقع والسعة", description: "تأكيد المساحة وتوافر الطاقة وهدف حمل تكنولوجيا المعلومات." },
        { step: "تكوين الوحدة", description: "اختيار تكوين الصف والتكرار ونوع التبريد." },
        { step: "البناء والاختبار في المصنع", description: "دمج واختبار الوحدة الكاملة قبل الشحن." },
        { step: "التموضع والتوصيل في الموقع", description: "وضع الوحدة وتوصيل المرافق والشبكة ونظام إدارة المبنى." },
        { step: "التشغيل", description: "التحقق من النظام الكامل وتسليمه للمشغل." },
      ],
      typicalApplications: ["غرف بيانات فروع البنوك", "مكاتب إقليمية للمؤسسات", "غرف تكنولوجيا المعلومات للتجزئة/الحرم الجامعي"],
      faqs: [
        {
          question: "ما هو مركز البيانات المعياري المصغر؟",
          answer:
            "مركز البيانات المعياري المصغر هو نظام مُدمج مسبقاً من المصنع يجمع بين خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد ومكافحة الحريق والتحكم بالدخول والمراقبة في وحدة موحدة واحدة، ما يقلل وقت البناء في الموقع مقارنة بغرفة بيانات مبنية تقليدياً.",
        },
      ],
    },
    fr: {
      name: "Solution de centre de données modulaire micro",
      tagline: "Un centre de données intégré en usine pour les sites sans espace pour en construire un.",
      customerChallenge:
        "Les entreprises et les banques ont besoin de salles de données dédiées dans leurs sites régionaux ou en agence, mais la construction traditionnelle des systèmes d'alimentation, de refroidissement et de protection incendie est lente, nécessite des entrepreneurs spécialisés et est difficile à reproduire de façon cohérente sur de nombreux sites.",
      solutionArchitecture:
        "Haisen préintègre les baies informatiques, l'onduleur, le PDU, le refroidissement, la batterie, l'extinction incendie, le contrôle d'accès et la surveillance environnementale dans un micro-module standardisé, testé en usine comme système complet et expédié prêt pour la mise en place et la mise en service sur site.",
      systemComponents: [
        { name: "Baies informatiques", description: "Baies en rangée simple ou double avec confinement." },
        { name: "Onduleur et PDU", description: "Protection et distribution électrique intégrées, dimensionnées selon la capacité du module." },
        { name: "Refroidissement", description: "Refroidissement en rangée ou de précision adapté au volume du module fermé." },
        { name: "Extinction incendie", description: "Système d'extinction automatique à base de gaz." },
        { name: "Contrôle d'accès et surveillance", description: "Accès par carte/biométrie et surveillance environnementale centralisée." },
      ],
      howItWorks: [
        "Le module est conçu et pré-assemblé en usine comme système complet.",
        "L'alimentation, le refroidissement, l'extinction incendie et la surveillance sont intégrés et testés fonctionnellement avant expédition.",
        "Le module est livré sur site et raccordé à l'alimentation, au réseau et à la gestion technique du bâtiment.",
        "La surveillance centralisée rapporte l'état de l'alimentation, de l'environnement et de la sécurité à l'exploitant.",
      ],
      technicalAdvantages: [
        "Déploiement cohérent et reproductible sur plusieurs sites en agence/région",
        "Temps de construction sur site réduit par rapport à une salle de données construite de façon traditionnelle",
        "Contrôle qualité en usine avant que le système n'arrive sur site",
      ],
      deploymentProcess: [
        { step: "Évaluation du site et de la capacité", description: "Confirmer l'espace, la disponibilité électrique et la charge informatique cible." },
        { step: "Configuration du module", description: "Choisir la configuration des rangées, la redondance et le type de refroidissement." },
        { step: "Construction et tests en usine", description: "Intégrer et tester le module complet avant expédition." },
        { step: "Mise en place et raccordement sur site", description: "Positionner le module, raccorder l'alimentation, le réseau et la GTB." },
        { step: "Mise en service", description: "Vérification complète du système et remise à l'exploitant." },
      ],
      typicalApplications: ["Salles de données d'agences bancaires", "Bureaux régionaux d'entreprise", "Salles IT de commerce de détail / campus"],
      faqs: [
        {
          question: "Qu'est-ce qu'un centre de données modulaire micro ?",
          answer:
            "Un centre de données modulaire micro est un système préintégré en usine combinant baies informatiques, distribution électrique, onduleur, refroidissement, extinction incendie, contrôle d'accès et surveillance en une seule unité standardisée, réduisant le temps de construction sur site par rapport à une salle de données construite de façon traditionnelle.",
        },
      ],
    },
    es: {
      name: "Solución de centro de datos modular micro",
      tagline: "Un centro de datos integrado en fábrica para sitios sin espacio para construir uno.",
      customerChallenge:
        "Las empresas y los bancos necesitan salas de datos dedicadas en sitios de sucursales o regionales, pero la construcción tradicional de sistemas de energía, refrigeración y protección contra incendios es lenta, requiere contratistas especializados y es difícil de replicar de manera consistente en muchos sitios.",
      solutionArchitecture:
        "Haisen preintegra gabinetes de TI, SAI, PDU, refrigeración, batería, supresión de incendios, control de acceso y monitoreo ambiental en un micromódulo estandarizado, probado en fábrica como sistema completo y enviado listo para su colocación y puesta en marcha en el sitio.",
      systemComponents: [
        { name: "Gabinetes de TI", description: "Gabinetes de fila simple o doble con contención." },
        { name: "SAI y PDU", description: "Protección y distribución de energía integradas, dimensionadas según la capacidad del módulo." },
        { name: "Refrigeración", description: "Refrigeración en fila o de precisión adaptada al volumen del módulo cerrado." },
        { name: "Supresión de incendios", description: "Sistema de supresión automática basado en gas." },
        { name: "Control de acceso y monitoreo", description: "Acceso por tarjeta/biométrico y monitoreo ambiental centralizado." },
      ],
      howItWorks: [
        "El módulo se diseña y preensambla en fábrica como sistema completo.",
        "La energía, la refrigeración, la supresión de incendios y el monitoreo se integran y prueban funcionalmente antes del envío.",
        "El módulo se entrega en el sitio y se conecta a la energía, la red y la gestión del edificio.",
        "El monitoreo centralizado informa el estado de energía, entorno y seguridad al operador.",
      ],
      technicalAdvantages: [
        "Implementación consistente y repetible en múltiples sitios de sucursales/regiones",
        "Menor tiempo de construcción en sitio frente a una sala de datos construida tradicionalmente",
        "Control de calidad de fábrica antes de que el sistema llegue al sitio",
      ],
      deploymentProcess: [
        { step: "Evaluación del sitio y la capacidad", description: "Confirmar el espacio, la disponibilidad de energía y la carga de TI objetivo." },
        { step: "Configuración del módulo", description: "Seleccionar la configuración de filas, la redundancia y el tipo de refrigeración." },
        { step: "Construcción y pruebas de fábrica", description: "Integrar y probar el módulo completo antes del envío." },
        { step: "Colocación y conexión en sitio", description: "Posicionar el módulo y conectar la energía, la red y el BMS." },
        { step: "Puesta en marcha", description: "Verificación completa del sistema y entrega al operador." },
      ],
      typicalApplications: ["Salas de datos de sucursales bancarias", "Oficinas regionales corporativas", "Salas de TI minoristas / de campus"],
      faqs: [
        {
          question: "¿Qué es un centro de datos modular micro?",
          answer:
            "Un centro de datos modular micro es un sistema preintegrado en fábrica que combina gabinetes de TI, distribución de energía, SAI, refrigeración, supresión de incendios, control de acceso y monitoreo en una sola unidad estandarizada, reduciendo el tiempo de construcción en sitio frente a una sala de datos construida tradicionalmente.",
        },
      ],
    },
    ru: {
      name: "Решение для микромодульного ЦОД",
      tagline: "Дата-центр, интегрированный на заводе, для площадок без места под строительство.",
      customerChallenge:
        "Предприятиям и банкам требуются выделенные серверные на площадках филиалов или в регионах, но традиционное строительство систем питания, охлаждения и пожарной защиты идёт медленно, требует специализированных подрядчиков и плохо тиражируется на множестве объектов.",
      solutionArchitecture:
        "Haisen предварительно интегрирует ИТ-шкафы, ИБП, PDU, охлаждение, батареи, пожаротушение, контроль доступа и мониторинг среды в стандартизированный микромодуль, который проходит заводские испытания как единая система и поставляется готовым к размещению и вводу в эксплуатацию на объекте.",
      systemComponents: [
        { name: "ИТ-шкафы", description: "Однорядная или двухрядная компоновка шкафов с изоляцией." },
        { name: "ИБП и PDU", description: "Интегрированная защита и распределение питания под мощность модуля." },
        { name: "Охлаждение", description: "Рядное или прецизионное охлаждение под объём замкнутого модуля." },
        { name: "Пожаротушение", description: "Автоматическая газовая система пожаротушения." },
        { name: "Контроль доступа и мониторинг", description: "Карточный/биометрический доступ и централизованный мониторинг среды." },
      ],
      howItWorks: [
        "Модуль проектируется и предварительно собирается на заводе как единая система.",
        "Питание, охлаждение, пожаротушение и мониторинг интегрируются и функционально тестируются перед отгрузкой.",
        "Модуль доставляется на объект и подключается к электропитанию, сети и системе управления зданием.",
        "Централизованный мониторинг передаёт оператору статус питания, среды и безопасности.",
      ],
      technicalAdvantages: [
        "Единообразное, тиражируемое развёртывание на множестве филиалов/регионов",
        "Сокращённое время строительства на объекте по сравнению с традиционной серверной",
        "Заводской контроль качества до прибытия системы на объект",
      ],
      deploymentProcess: [
        { step: "Оценка площадки и мощности", description: "Подтверждение площади, доступной мощности и целевой ИТ-нагрузки." },
        { step: "Конфигурация модуля", description: "Выбор рядной компоновки, уровня резервирования и типа охлаждения." },
        { step: "Сборка и заводские испытания", description: "Интеграция и испытание модуля в сборе перед отгрузкой." },
        { step: "Размещение и подключение на объекте", description: "Установка модуля, подключение питания, сети и BMS." },
        { step: "Ввод в эксплуатацию", description: "Полная проверка системы и передача оператору." },
      ],
      typicalApplications: ["Серверные банковских филиалов", "Региональные офисы предприятий", "ИТ-помещения розничных/кампусных объектов"],
      faqs: [
        {
          question: "Что такое микромодульный дата-центр?",
          answer:
            "Микромодульный дата-центр — это предварительно интегрированная на заводе система, объединяющая ИТ-шкафы, распределение питания, ИБП, охлаждение, пожаротушение, контроль доступа и мониторинг в единый стандартизированный блок, что сокращает время строительства на объекте по сравнению с традиционной серверной.",
        },
      ],
    },
    zh: {
      name: "微模块数据中心解决方案",
      tagline: "为没有建设空间的场地提供工厂集成数据中心。",
      customerChallenge:
        "企业与银行需要在分支或区域场地建设专用机房,但电力、制冷及消防系统的传统建设方式速度慢、依赖专业承包商,且难以在多个场地间一致复制。",
      solutionArchitecture:
        "海森将IT机柜、UPS、PDU、制冷、电池、气体消防、门禁及环境监控预集成为标准化微模块,在工厂作为完整系统进行测试,交付后即可在现场安装并调试。",
      systemComponents: [
        { name: "IT机柜", description: "单排或双排布局,配备气流封闭。" },
        { name: "UPS与PDU", description: "按模块容量匹配的一体化电力保护与配电。" },
        { name: "制冷", description: "与封闭模块容积匹配的行级或精密制冷。" },
        { name: "消防", description: "自动气体灭火系统。" },
        { name: "门禁与监控", description: "刷卡/生物识别门禁及集中式环境监控。" },
      ],
      howItWorks: [
        "模块在工厂完成设计与预组装,形成完整系统。",
        "发货前完成电力、制冷、消防与监控系统的集成及功能测试。",
        "模块运抵现场后接入市电、网络及楼宇管理系统。",
        "集中监控系统向运营方报告电力、环境与安防状态。",
      ],
      technicalAdvantages: [
        "跨多个分支/区域场地实现一致、可复制的部署",
        "相比传统建设机房大幅缩短现场施工时间",
        "系统抵达现场前已完成工厂质量把关",
      ],
      deploymentProcess: [
        { step: "场地与容量评估", description: "确认空间、供电条件及目标IT负载。" },
        { step: "模块配置", description: "选择排列方式、冗余等级与制冷类型。" },
        { step: "工厂组装与测试", description: "发货前完成整体模块的集成与测试。" },
        { step: "现场安装与接入", description: "模块就位并接入市电、网络及楼宇管理系统。" },
        { step: "系统调试", description: "完成全系统验证并移交运营方。" },
      ],
      typicalApplications: ["银行网点机房", "企业区域办公机房", "零售/园区IT机房"],
      faqs: [
        {
          question: "什么是微模块数据中心？",
          answer: "微模块数据中心是一种工厂预集成系统,将IT机柜、配电、UPS、制冷、消防、门禁与监控整合为单一标准化单元,相比传统建设机房大幅缩短现场施工时间。",
        },
      ],
    },
  },

  "containerized-data-center": {
    ar: {
      name: "حل مركز البيانات الحاوية",
      tagline: "مراكز بيانات مصنعة بالكامل ومستقلة عن الموقع للنشر السريع في أي مكان.",
      customerChallenge:
        "غالباً ما يحتاج مشغلو الاتصالات وشركات التعدين والنفط والغاز إلى سعة مركز بيانات في مواقع نائية أو مؤقتة حيث يكون البناء التقليدي بطيئاً أو مكلفاً أو مستحيلاً.",
      solutionArchitecture:
        "تدمج هايسِن خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد والحماية من الحريق والأمن والمراقبة داخل هيكل حاوية ISO معزول ومقوى، مصمم هندسياً للنشر الخارجي والتوصيل السريع بطاقة وشبكة الموقع.",
      systemComponents: [
        { name: "هيكل الحاوية", description: "غلاف معزول بتصنيف IP55 مصمم للنشر الخارجي." },
        { name: "تكنولوجيا المعلومات والطاقة", description: "خزانات تكنولوجيا معلومات قابلة للتكوين مع PDU ذكي وUPS معياري." },
        { name: "التبريد", description: "تكييف دقيق أو تبريد سائل لكثافة أعلى." },
        { name: "السلامة والأمن", description: "مكافحة حريق وتحكم بالدخول وبنية تحتية جاهزة للكاميرات." },
      ],
      howItWorks: [
        "تُجهَّز الحاوية وتُختبر وظيفياً في المصنع كمركز بيانات كامل.",
        "تُنقل الوحدة إلى الموقع عبر لوجستيات الحاويات القياسية.",
        "يقتصر العمل في الموقع على الأساسات وتوصيل الطاقة/الشبكة والتشغيل.",
        "يمكن ربط حاويات متعددة لتلبية متطلبات سعة أكبر.",
      ],
      technicalAdvantages: [
        "جداول زمنية للنشر تُقاس بالأسابيع وليس الأشهر",
        "مستقلة عن الموقع — مناسبة للمواقع النائية أو المؤقتة أو الطارئة",
        "قابلة للتوسع بإضافة وحدات حاوية مع نمو متطلبات السعة",
      ],
      deploymentProcess: [
        { step: "تحديد المتطلبات", description: "تأكيد حمل تكنولوجيا المعلومات والبيئة وقيود اللوجستيات." },
        { step: "هندسة الحاوية", description: "تصميم تخطيط الحاوية وتكوين الطاقة والتبريد." },
        { step: "الدمج والاختبار في المصنع", description: "بناء واختبار الحاوية بالكامل كنظام." },
        { step: "النقل والتموضع في الموقع", description: "شحن وتموضع الحاوية في موقع النشر." },
        { step: "التشغيل", description: "توصيل المرافق/الشبكة والتحقق من تشغيل النظام الكامل." },
      ],
      typicalApplications: ["توسعة شبكات الاتصالات", "مواقع التعدين والنفط والغاز", "الحوسبة الطرفية", "نشر حكومي/طوارئ"],
      faqs: [
        {
          question: "هل توفر هايسِن مراكز بيانات حاوية؟",
          answer:
            "نعم. تصنع هايسِن مراكز بيانات حاوية بطول 20 و40 قدماً مدمجة مسبقاً مع خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد والحماية من الحريق والمراقبة لنشر الاتصالات والتعدين والنفط والغاز والحوسبة الطرفية والحكومة.",
        },
      ],
    },
    fr: {
      name: "Solution de centre de données conteneurisé",
      tagline: "Des centres de données autonomes, fabriqués en usine, pour un déploiement rapide n'importe où.",
      customerChallenge:
        "Les opérateurs télécoms, les sociétés minières et pétrolières et gazières ont souvent besoin de capacité de centre de données sur des sites distants ou temporaires où la construction conventionnelle est lente, coûteuse ou impossible.",
      solutionArchitecture:
        "Haisen intègre les baies informatiques, la distribution électrique, l'onduleur, le refroidissement, la protection incendie, la sécurité et la surveillance à l'intérieur d'une coque de conteneur ISO renforcée et isolée, conçue pour un déploiement extérieur et une connexion rapide à l'alimentation et au réseau du site.",
      systemComponents: [
        { name: "Structure du conteneur", description: "Coque isolée, IP55, conçue pour un déploiement extérieur." },
        { name: "Informatique et alimentation", description: "Baies informatiques configurables avec PDU intelligent et onduleur modulaire." },
        { name: "Refroidissement", description: "Climatisation de précision ou refroidissement liquide pour une densité plus élevée." },
        { name: "Sécurité et sûreté", description: "Extinction incendie, contrôle d'accès et infrastructure prête pour la vidéosurveillance." },
      ],
      howItWorks: [
        "Le conteneur est équipé et testé fonctionnellement en usine comme un centre de données complet.",
        "L'unité est transportée sur site par la logistique conteneur standard.",
        "Le travail sur site se limite aux fondations, au raccordement électrique/réseau et à la mise en service.",
        "Plusieurs conteneurs peuvent être reliés pour des besoins de capacité plus importants.",
      ],
      technicalAdvantages: [
        "Délais de déploiement de l'ordre de quelques semaines, pas des mois",
        "Indépendant du site — adapté aux emplacements distants, temporaires ou d'urgence",
        "Évolutif par ajout d'unités conteneurisées à mesure que les besoins de capacité augmentent",
      ],
      deploymentProcess: [
        { step: "Définition des besoins", description: "Confirmer la charge informatique, l'environnement et les contraintes logistiques." },
        { step: "Ingénierie du conteneur", description: "Concevoir l'agencement du conteneur et la configuration de l'alimentation et du refroidissement." },
        { step: "Intégration et tests en usine", description: "Construire et tester entièrement le conteneur en tant que système." },
        { step: "Transport et mise en place sur site", description: "Expédier et positionner le conteneur sur le site de déploiement." },
        { step: "Mise en service", description: "Raccorder l'alimentation/le réseau et vérifier le fonctionnement complet du système." },
      ],
      typicalApplications: ["Extension de réseaux télécoms", "Sites miniers et pétroliers et gaziers", "Edge computing", "Déploiements gouvernementaux/d'urgence"],
      faqs: [
        {
          question: "Haisen propose-t-elle des centres de données conteneurisés ?",
          answer:
            "Oui. Haisen fabrique des centres de données conteneurisés de 20 et 40 pieds préintégrés avec baies informatiques, distribution électrique, onduleur, refroidissement, protection incendie et surveillance pour les déploiements télécoms, miniers, pétroliers et gaziers, d'edge computing et gouvernementaux.",
        },
      ],
    },
    es: {
      name: "Solución de centro de datos en contenedor",
      tagline: "Centros de datos autónomos, fabricados en fábrica, para un despliegue rápido en cualquier lugar.",
      customerChallenge:
        "Los operadores de telecomunicaciones y las empresas mineras y de petróleo y gas a menudo necesitan capacidad de centro de datos en sitios remotos o temporales donde la construcción convencional es lenta, costosa o imposible.",
      solutionArchitecture:
        "Haisen integra gabinetes de TI, distribución de energía, SAI, refrigeración, protección contra incendios, seguridad y monitoreo dentro de una carcasa de contenedor ISO reforzada y aislada, diseñada para despliegue exterior y conexión rápida a la energía y red del sitio.",
      systemComponents: [
        { name: "Estructura del contenedor", description: "Carcasa aislada, con clasificación IP55, para despliegue exterior." },
        { name: "TI y energía", description: "Gabinetes de TI configurables con PDU inteligente y SAI modular." },
        { name: "Refrigeración", description: "Aire acondicionado de precisión o refrigeración líquida para mayor densidad." },
        { name: "Seguridad", description: "Supresión de incendios, control de acceso e infraestructura lista para CCTV." },
      ],
      howItWorks: [
        "El contenedor se equipa y se prueba funcionalmente en fábrica como un centro de datos completo.",
        "La unidad se transporta al sitio mediante logística estándar de contenedores.",
        "El trabajo en sitio se limita a la cimentación, la conexión de energía/red y la puesta en marcha.",
        "Se pueden conectar varios contenedores para requisitos de mayor capacidad.",
      ],
      technicalAdvantages: [
        "Plazos de implementación de semanas, no meses",
        "Independiente del sitio: adecuado para ubicaciones remotas, temporales o de emergencia",
        "Escalable añadiendo unidades de contenedor a medida que crecen las necesidades de capacidad",
      ],
      deploymentProcess: [
        { step: "Definición de requisitos", description: "Confirmar la carga de TI, el entorno y las restricciones logísticas." },
        { step: "Ingeniería del contenedor", description: "Diseñar la disposición del contenedor y la configuración de energía y refrigeración." },
        { step: "Integración y pruebas de fábrica", description: "Construir y probar completamente el contenedor como sistema." },
        { step: "Transporte y colocación en sitio", description: "Enviar y posicionar el contenedor en el sitio de despliegue." },
        { step: "Puesta en marcha", description: "Conectar la energía/red y verificar el funcionamiento completo del sistema." },
      ],
      typicalApplications: ["Expansión de redes de telecomunicaciones", "Sitios mineros y de petróleo y gas", "Edge computing", "Despliegues gubernamentales/de emergencia"],
      faqs: [
        {
          question: "¿Haisen ofrece centros de datos en contenedores?",
          answer:
            "Sí. Haisen fabrica centros de datos en contenedores de 20 y 40 pies preintegrados con gabinetes de TI, distribución de energía, SAI, refrigeración, protección contra incendios y monitoreo para despliegues de telecomunicaciones, minería, petróleo y gas, edge computing y gobierno.",
        },
      ],
    },
    ru: {
      name: "Решение для контейнерного ЦОД",
      tagline: "Автономные, полностью заводские дата-центры для быстрого развёртывания в любой точке.",
      customerChallenge:
        "Телеком-операторам, горнодобывающим и нефтегазовым компаниям часто требуется мощность ЦОД на удалённых или временных площадках, где обычное строительство идёт медленно, дорого или вовсе невозможно.",
      solutionArchitecture:
        "Haisen интегрирует ИТ-шкафы, распределение питания, ИБП, охлаждение, пожарную защиту, безопасность и мониторинг внутри усиленного утеплённого корпуса ISO-контейнера, рассчитанного на наружное размещение и быстрое подключение к питанию и сети площадки.",
      systemComponents: [
        { name: "Конструкция контейнера", description: "Утеплённый корпус с классом защиты IP55 для наружного размещения." },
        { name: "ИТ и питание", description: "Настраиваемые ИТ-шкафы с интеллектуальным PDU и модульным ИБП." },
        { name: "Охлаждение", description: "Прецизионное кондиционирование или жидкостное охлаждение для повышенной плотности." },
        { name: "Безопасность", description: "Пожаротушение, контроль доступа и готовность к видеонаблюдению." },
      ],
      howItWorks: [
        "Контейнер оснащается и функционально тестируется на заводе как полноценный дата-центр.",
        "Модуль транспортируется на объект стандартной контейнерной логистикой.",
        "Работы на площадке ограничиваются фундаментом, подключением питания/сети и вводом в эксплуатацию.",
        "Несколько контейнеров можно объединять для увеличения требуемой мощности.",
      ],
      technicalAdvantages: [
        "Сроки развёртывания измеряются неделями, а не месяцами",
        "Независимость от площадки — подходит для удалённых, временных или аварийных локаций",
        "Масштабируемость за счёт добавления контейнерных модулей по мере роста потребностей",
      ],
      deploymentProcess: [
        { step: "Определение требований", description: "Подтверждение ИТ-нагрузки, условий среды и логистических ограничений." },
        { step: "Проектирование контейнера", description: "Разработка компоновки контейнера и конфигурации питания и охлаждения." },
        { step: "Заводская интеграция и испытания", description: "Сборка и полное испытание контейнера как системы." },
        { step: "Транспортировка и размещение на объекте", description: "Доставка и установка контейнера на площадке развёртывания." },
        { step: "Ввод в эксплуатацию", description: "Подключение питания/сети и проверка полной работоспособности системы." },
      ],
      typicalApplications: ["Расширение телеком-сетей", "Горнодобывающие и нефтегазовые объекты", "Периферийные вычисления", "Государственные/аварийные развёртывания"],
      faqs: [
        {
          question: "Предоставляет ли Haisen контейнерные дата-центры?",
          answer:
            "Да. Haisen производит контейнерные дата-центры длиной 20 и 40 футов с предварительно интегрированными ИТ-шкафами, распределением питания, ИБП, охлаждением, пожарной защитой и мониторингом для телеком-, горнодобывающих, нефтегазовых, периферийных и государственных проектов.",
        },
      ],
    },
    zh: {
      name: "集装箱数据中心解决方案",
      tagline: "工厂全预制、场地无关,可在任意地点快速部署的数据中心。",
      customerChallenge:
        "电信运营商、矿业及石油天然气企业常需要在偏远或临时场地部署数据中心容量,而传统建筑施工在这些场地往往缓慢、成本高昂甚至不可行。",
      solutionArchitecture:
        "海森将IT机柜、配电、UPS、制冷、消防、安防与监控集成于加固保温的ISO集装箱结构内,专为户外部署及快速接入现场电力与网络而设计。",
      systemComponents: [
        { name: "集装箱结构", description: "IP55防护等级的保温箱体,适用于户外部署。" },
        { name: "IT与电力", description: "可配置IT机柜,搭配智能PDU与模块化UPS。" },
        { name: "制冷", description: "精密空调或液冷系统,适应更高密度需求。" },
        { name: "安全与安防", description: "消防、门禁及预留监控接口的基础设施。" },
      ],
      howItWorks: [
        "集装箱在工厂完成装配并作为完整数据中心进行功能测试。",
        "整机通过标准集装箱物流运输至现场。",
        "现场工作仅限于基础施工、电力/网络接入及系统调试。",
        "多台集装箱可互联以满足更大容量需求。",
      ],
      technicalAdvantages: [
        "部署周期以周计,而非以月计",
        "场地无关——适用于偏远、临时或应急场所",
        "可通过增加集装箱单元灵活扩容",
      ],
      deploymentProcess: [
        { step: "需求确认", description: "确认IT负载、环境条件及物流限制。" },
        { step: "集装箱工程设计", description: "设计集装箱布局、电力与制冷配置。" },
        { step: "工厂集成与测试", description: "完成集装箱整体系统的组装与全面测试。" },
        { step: "运输与现场就位", description: "运输并将集装箱定位于部署现场。" },
        { step: "系统调试", description: "接入市电/网络并验证系统整体运行。" },
      ],
      typicalApplications: ["电信网络扩容", "矿业及石油天然气场地", "边缘计算", "政府/应急部署"],
      faqs: [
        {
          question: "海森是否提供集装箱数据中心？",
          answer: "是的。海森生产20英尺及40英尺集装箱数据中心,预集成IT机柜、配电、UPS、制冷及监控系统,适用于电信、矿业、石油天然气、边缘计算及政府类部署项目。",
        },
      ],
    },
  },

  "edge-data-center": {
    ar: {
      name: "حل مركز البيانات الطرفي",
      tagline: "بنية تحتية مدمجة ومرنة للحوسبة عند حافة الشبكة.",
      customerChallenge:
        "تتطلب التطبيقات منخفضة الكمون وتوزيع المحتوى سعة حوسبة قريبة من المستخدمين النهائيين، غالباً في مواقع ذات مساحة محدودة وتشغيل بدون مراقبة وجودة طاقة غير مستقرة.",
      solutionArchitecture:
        "تجمع هايسِن بين وحدات مصغرة مدمجة أو وحدات حاوية مع طاقة مرنة (UPS + بطارية) ومراقبة عن بُعد وإدارة بدون إضاءة للمواقع الطرفية غير المراقَبة.",
      systemComponents: [
        { name: "غلاف مدمج", description: "وحدة مصغرة أو مساحة حاوية صغيرة." },
        { name: "طاقة مرنة", description: "UPS مع وقت تشغيل بالبطارية يتناسب مع التشغيل غير المراقب." },
        { name: "مراقبة عن بُعد", description: "رؤية كاملة عن بُعد للمواقع بدون إضاءة." },
      ],
      howItWorks: [
        "يُنشر نظام طاقة وتبريد وغلاف مدمج في الموقع الطرفي.",
        "توفر المراقبة عن بُعد الرؤية دون الحاجة لموظفين في الموقع.",
        "تتيح وحدات PDU الذكية إعادة تدوير الطاقة عن بُعد للمعدات عند الحاجة.",
      ],
      technicalAdvantages: ["بصمة مساحية أدنى", "تشغيل غير مراقَب ومراقَب عن بُعد", "تكرار سريع متعدد المواقع"],
      deploymentProcess: [
        { step: "تقييم الموقع", description: "تقييم المساحة والطاقة والاتصال في كل موقع طرفي." },
        { step: "تصميم موحد", description: "تطبيق قالب غلاف/طاقة طرفي قابل للتكرار." },
        { step: "النشر", description: "التركيب والتوصيل في كل موقع." },
        { step: "التشغيل عن بُعد", description: "التحقق من المراقبة والإدارة عن بُعد قبل التشغيل الفعلي." },
      ],
      typicalApplications: ["عقد الحوسبة الطرفية/CDN", "مواقع محطات قواعد الاتصالات", "مواقع التجزئة والصناعة الطرفية"],
      faqs: [
        {
          question: "كيف يختلف مركز البيانات الطرفي عن مركز البيانات الحاوية؟",
          answer:
            "تُعطي مراكز البيانات الطرفية الأولوية للبصمة المدمجة والتشغيل عن بُعد/غير المراقَب للمواقع الموزعة، بينما تُحجَّم مراكز البيانات الحاوية عادةً لسعة أكبر ومستقلة في موقع نائي واحد — تُستخدم وحدات هايسِن المصغرة والحاوية الأصغر كلبنات بناء للنشر الطرفي.",
        },
      ],
    },
    fr: {
      name: "Solution de centre de données Edge",
      tagline: "Infrastructure compacte et résiliente pour le calcul en périphérie de réseau.",
      customerChallenge:
        "Les applications à faible latence et la diffusion de contenu distribué nécessitent une capacité de calcul proche des utilisateurs finaux, souvent sur des sites à l'espace limité, en fonctionnement sans surveillance et avec une qualité d'alimentation électrique irrégulière.",
      solutionArchitecture:
        "Haisen combine des micro-modules compacts ou des unités conteneurisées avec une alimentation résiliente (onduleur + batterie), une surveillance à distance et une gestion « lights-out » pour les sites edge non surveillés.",
      systemComponents: [
        { name: "Enceinte compacte", description: "Micro-module ou petite emprise conteneurisée." },
        { name: "Alimentation résiliente", description: "Onduleur avec autonomie batterie dimensionnée pour un fonctionnement sans surveillance." },
        { name: "Surveillance à distance", description: "Visibilité complète à distance pour les sites « lights-out »." },
      ],
      howItWorks: [
        "Un système compact d'alimentation, de refroidissement et d'enceinte est déployé sur le site edge.",
        "La surveillance à distance offre une visibilité sans nécessiter de personnel sur place.",
        "Les PDU intelligents permettent le cyclage d'alimentation à distance des équipements en cas de besoin.",
      ],
      technicalAdvantages: ["Emprise minimale", "Fonctionnement sans surveillance, contrôlé à distance", "Réplication rapide multi-sites"],
      deploymentProcess: [
        { step: "Évaluation du site", description: "Évaluer l'espace, l'alimentation et la connectivité de chaque emplacement edge." },
        { step: "Conception standardisée", description: "Appliquer un modèle reproductible d'enceinte/alimentation edge." },
        { step: "Déploiement", description: "Installer et raccorder sur chaque site." },
        { step: "Mise en service à distance", description: "Vérifier la surveillance et la gestion à distance avant la mise en production." },
      ],
      typicalApplications: ["Nœuds CDN / edge computing", "Sites de stations de base télécoms", "Sites edge de commerce de détail et industriels"],
      faqs: [
        {
          question: "En quoi un centre de données edge diffère-t-il d'un centre de données conteneurisé ?",
          answer:
            "Les centres de données edge privilégient une emprise compacte et un fonctionnement à distance/sans surveillance pour des sites distribués, tandis que les centres de données conteneurisés plus grands sont généralement dimensionnés pour une capacité autonome plus importante sur un seul site distant — les micro-modules et petites unités conteneurisées de Haisen servent de briques de base pour les déploiements edge.",
        },
      ],
    },
    es: {
      name: "Solución de centro de datos Edge",
      tagline: "Infraestructura compacta y resiliente para cómputo en el borde de la red.",
      customerChallenge:
        "Las aplicaciones de baja latencia y la entrega de contenido distribuido requieren capacidad de cómputo cerca de los usuarios finales, a menudo en sitios con espacio limitado, funcionamiento sin supervisión y calidad de energía inconsistente.",
      solutionArchitecture:
        'Haisen combina micromódulos compactos o unidades en contenedor con energía resiliente (SAI + batería), monitoreo remoto y gestión "lights-out" para sitios edge no supervisados.',
      systemComponents: [
        { name: "Recinto compacto", description: "Micromódulo o pequeña huella en contenedor." },
        { name: "Energía resiliente", description: "SAI con autonomía de batería dimensionada para operación no supervisada." },
        { name: "Monitoreo remoto", description: 'Visibilidad remota completa para sitios "lights-out".' },
      ],
      howItWorks: [
        "Se despliega un sistema compacto de energía, refrigeración y recinto en el sitio edge.",
        "El monitoreo remoto brinda visibilidad sin requerir personal en el sitio.",
        "Los PDU inteligentes permiten el ciclo de energía remoto del equipo cuando es necesario.",
      ],
      technicalAdvantages: ["Huella mínima", "Operación no supervisada y monitoreada remotamente", "Replicación rápida multisitio"],
      deploymentProcess: [
        { step: "Evaluación del sitio", description: "Evaluar el espacio, la energía y la conectividad en cada ubicación edge." },
        { step: "Diseño estandarizado", description: "Aplicar una plantilla repetible de recinto/energía edge." },
        { step: "Implementación", description: "Instalar y conectar en cada sitio." },
        { step: "Puesta en marcha remota", description: "Verificar el monitoreo y la gestión remota antes de la puesta en producción." },
      ],
      typicalApplications: ["Nodos CDN / edge computing", "Sitios de estaciones base de telecomunicaciones", "Ubicaciones edge minoristas e industriales"],
      faqs: [
        {
          question: "¿En qué se diferencia un centro de datos edge de uno en contenedor?",
          answer:
            "Los centros de datos edge priorizan la huella compacta y la operación remota/no supervisada para sitios distribuidos, mientras que los centros de datos en contenedor más grandes suelen dimensionarse para mayor capacidad autónoma en una sola ubicación remota; los micromódulos y las unidades en contenedor más pequeñas de Haisen sirven como bloques de construcción para despliegues edge.",
        },
      ],
    },
    ru: {
      name: "Решение для периферийного (Edge) ЦОД",
      tagline: "Компактная, отказоустойчивая инфраструктура для вычислений на границе сети.",
      customerChallenge:
        "Приложениям с низкой задержкой и распределённой доставкой контента требуется вычислительная мощность вблизи конечных пользователей — часто на площадках с ограниченным пространством, безлюдной эксплуатацией и нестабильным качеством электропитания.",
      solutionArchitecture:
        "Haisen сочетает компактные микромодули или контейнерные блоки с отказоустойчивым питанием (ИБП + батарея), удалённым мониторингом и безлюдным управлением для необслуживаемых периферийных площадок.",
      systemComponents: [
        { name: "Компактный корпус", description: "Микромодуль или небольшой контейнерный блок." },
        { name: "Отказоустойчивое питание", description: "ИБП с ёмкостью батарей, рассчитанной под безлюдную эксплуатацию." },
        { name: "Удалённый мониторинг", description: "Полная удалённая видимость для необслуживаемых площадок." },
      ],
      howItWorks: [
        "На периферийной площадке разворачивается компактная система питания, охлаждения и корпуса.",
        "Удалённый мониторинг обеспечивает видимость без необходимости присутствия персонала.",
        "Интеллектуальные PDU позволяют удалённо перезагружать оборудование по питанию при необходимости.",
      ],
      technicalAdvantages: ["Минимальная занимаемая площадь", "Безлюдная, удалённо контролируемая эксплуатация", "Быстрое тиражирование на множество площадок"],
      deploymentProcess: [
        { step: "Оценка площадки", description: "Оценка пространства, питания и связи на каждой периферийной локации." },
        { step: "Стандартизированное проектирование", description: "Применение тиражируемого шаблона корпуса/питания для edge-площадок." },
        { step: "Развёртывание", description: "Установка и подключение на каждой площадке." },
        { step: "Удалённый ввод в эксплуатацию", description: "Проверка мониторинга и удалённого управления перед запуском." },
      ],
      typicalApplications: ["Узлы CDN / edge-вычислений", "Площадки базовых станций операторов связи", "Периферийные объекты розничной торговли и промышленности"],
      faqs: [
        {
          question: "Чем периферийный (edge) дата-центр отличается от контейнерного?",
          answer:
            "Периферийные дата-центры делают акцент на компактности и удалённой/безлюдной эксплуатации для распределённых площадок, тогда как контейнерные дата-центры обычно рассчитаны на большую автономную мощность в одной удалённой локации — микромодули и небольшие контейнерные блоки Haisen служат строительными элементами для edge-развёртываний.",
        },
      ],
    },
    zh: {
      name: "边缘数据中心解决方案",
      tagline: "面向网络边缘计算的紧凑、高韧性基础设施。",
      customerChallenge: "低时延应用与分布式内容分发需要靠近终端用户的算力,而这类场地往往空间有限、无人值守且电力质量不稳定。",
      solutionArchitecture:
        "海森将紧凑型微模块或集装箱单元与高韧性电力(UPS+电池)、远程监控及无人值守管理相结合,适用于无人值守的边缘场地。",
      systemComponents: [
        { name: "紧凑机箱", description: "微模块或小型集装箱占地方案。" },
        { name: "高韧性电力", description: "配备适应无人值守运行时长的UPS电池系统。" },
        { name: "远程监控", description: "面向无人值守场地的完整远程可视化能力。" },
      ],
      howItWorks: [
        "在边缘场地部署紧凑型电力、制冷与机箱系统。",
        "远程监控在无需现场人员的情况下提供可视化能力。",
        "智能PDU可在需要时对设备进行远程电源循环重启。",
      ],
      technicalAdvantages: ["占地面积极小", "无人值守、远程监控运行", "多站点快速复制部署"],
      deploymentProcess: [
        { step: "场地评估", description: "评估各边缘场地的空间、电力与网络连接条件。" },
        { step: "标准化设计", description: "应用可复制的边缘机箱/电力模板。" },
        { step: "部署实施", description: "在各场地完成安装与接入。" },
        { step: "远程调试", description: "上线前验证监控与远程管理功能。" },
      ],
      typicalApplications: ["CDN/边缘计算节点", "电信基站场地", "零售与工业边缘场地"],
      faqs: [
        {
          question: "边缘数据中心与集装箱数据中心有何区别？",
          answer: "边缘数据中心更注重紧凑占地与分布式场地的远程/无人值守运行,而较大型的集装箱数据中心通常在单个远程场地提供更大的自持容量——海森的微模块与小型集装箱单元正是边缘部署的基础构建模块。",
        },
      ],
    },
  },

  "telecom-data-center": {
    ar: {
      name: "حل مركز بيانات الاتصالات",
      tagline: "طاقة وبنية تحتية مصممة هندسياً لمتطلبات موثوقية شبكات الاتصالات.",
      customerChallenge:
        "يحتاج مشغلو الاتصالات إلى بنية تحتية تلبي معايير وقت التشغيل وطاقة التيار المستمر الصارمة عبر المكاتب المركزية ومحطات القواعد وغرف معدات الشبكة، غالباً عبر شبكات كبيرة موزعة جغرافياً.",
      solutionArchitecture:
        "توفر هايسِن خزانات الراك والشبكة، وتوزيع طاقة التيار المستمر/المتردد، وUPS، وخيارات حاوية موحدة لغرف معدات الاتصالات وقابلة للتكرار السريع عبر مواقع عديدة.",
      systemComponents: [
        { name: "خزانات الشبكة", description: "خزانات بحجم 19 بوصة مناسبة لمعدات نقل وتحويل الاتصالات." },
        { name: "توزيع الطاقة", description: "وحدات PDU وATS لتبديل التغذية الزائدة." },
        { name: "UPS", description: "UPS بتركيب راك أو معياري يتناسب مع أهمية الموقع." },
      ],
      howItWorks: [
        "تُطبَّق قوالب موحدة للخزانات والطاقة عبر مواقع الاتصالات.",
        "توفر ATS/STS تبديلاً تلقائياً بين تغذيات الطاقة الزائدة.",
        "توزع وحدات PDU وتراقب الطاقة لمعدات النقل والتحويل.",
      ],
      technicalAdvantages: ["تصميم موقع موحد وقابل للتكرار", "تبديل تلقائي للتغذية لتحقيق التكرار", "بصمة مدمجة لغرف المعدات"],
      deploymentProcess: [
        { step: "تحديد معيار الشبكة", description: "وضع قالب موحد للخزانة/الطاقة للشبكة." },
        { step: "نشر الموقع", description: "نشر القالب الموحد عبر مواقع متعددة." },
        { step: "التشغيل", description: "التحقق من تبديل التكرار والمراقبة في كل موقع." },
      ],
      typicalApplications: ["المكاتب المركزية", "غرف معدات محطات القواعد", "مراكز عمليات الشبكة"],
      faqs: [
        {
          question: "ما استخدام ATS PDU في مواقع الاتصالات؟",
          answer:
            "يُبدِّل ATS PDU (مفتاح النقل التلقائي) الحمل تلقائياً بين تغذيتي طاقة مستقلتين — عادة المرافق والمولد، أو تغذيتي مرافق مزدوجتين — دون تدخل يدوي، محافظاً على وقت التشغيل إذا فشلت إحدى التغذيتين.",
        },
      ],
    },
    fr: {
      name: "Solution de centre de données télécom",
      tagline: "Alimentation et infrastructure conçues pour les exigences de fiabilité des réseaux télécoms.",
      customerChallenge:
        "Les opérateurs télécoms ont besoin d'une infrastructure répondant à des normes strictes de disponibilité et d'alimentation CC dans les centraux, les stations de base et les salles d'équipements réseau, souvent sur des réseaux vastes et géographiquement distribués.",
      solutionArchitecture:
        "Haisen fournit des baies rack et réseau, une distribution électrique CC/CA, des onduleurs et des options conteneurisées standardisées pour les salles d'équipements télécoms, rapidement reproductibles sur de nombreux sites.",
      systemComponents: [
        { name: "Baies réseau", description: "Baies 19 pouces dimensionnées pour les équipements de transmission et de commutation télécoms." },
        { name: "Distribution électrique", description: "PDU et ATS pour la commutation redondante des alimentations." },
        { name: "Onduleur", description: "Onduleur en rack ou modulaire adapté à la criticité du site." },
      ],
      howItWorks: [
        "Des modèles standardisés de baies et d'alimentation sont appliqués sur les sites télécoms.",
        "L'ATS/STS assure une commutation automatique entre alimentations redondantes.",
        "Les PDU distribuent et surveillent l'alimentation des équipements de transmission et de commutation.",
      ],
      technicalAdvantages: ["Conception de site standardisée et reproductible", "Commutation de transfert automatique pour la redondance des alimentations", "Emprise compacte pour les salles d'équipements"],
      deploymentProcess: [
        { step: "Définition du standard réseau", description: "Établir un modèle standard de baie/alimentation pour le réseau." },
        { step: "Déploiement sur site", description: "Déployer le modèle standard sur plusieurs sites." },
        { step: "Mise en service", description: "Vérifier la commutation de redondance et la surveillance sur chaque site." },
      ],
      typicalApplications: ["Centraux téléphoniques", "Salles d'équipements de stations de base", "Centres d'exploitation réseau"],
      faqs: [
        {
          question: "À quoi sert un PDU ATS sur les sites télécoms ?",
          answer:
            "Un PDU ATS (commutateur de transfert automatique) commute automatiquement la charge entre deux alimentations indépendantes — généralement réseau et groupe électrogène, ou deux alimentations réseau — sans intervention manuelle, maintenant la disponibilité en cas de défaillance d'une des alimentations.",
        },
      ],
    },
    es: {
      name: "Solución de centro de datos para telecomunicaciones",
      tagline: "Energía e infraestructura diseñadas para los requisitos de fiabilidad de redes de telecomunicaciones.",
      customerChallenge:
        "Los operadores de telecomunicaciones necesitan infraestructura que cumpla estrictos estándares de disponibilidad y energía de CC en centrales, estaciones base y salas de equipos de red, a menudo en redes extensas y geográficamente distribuidas.",
      solutionArchitecture:
        "Haisen suministra gabinetes de rack y red, distribución de energía CC/CA, SAI y opciones en contenedor estandarizadas para salas de equipos de telecomunicaciones, replicables rápidamente en muchos sitios.",
      systemComponents: [
        { name: "Gabinetes de red", description: "Gabinetes de 19 pulgadas dimensionados para equipos de transmisión y conmutación de telecomunicaciones." },
        { name: "Distribución de energía", description: "PDU y ATS para conmutación de alimentación redundante." },
        { name: "SAI", description: "SAI de rack o modular adaptado a la criticidad del sitio." },
      ],
      howItWorks: [
        "Se aplican plantillas estandarizadas de gabinetes y energía en los sitios de telecomunicaciones.",
        "El ATS/STS proporciona conmutación automática entre alimentaciones redundantes.",
        "Los PDU distribuyen y monitorean la energía de los equipos de transmisión y conmutación.",
      ],
      technicalAdvantages: ["Diseño de sitio estandarizado y repetible", "Conmutación de transferencia automática para redundancia de alimentación", "Huella compacta para salas de equipos"],
      deploymentProcess: [
        { step: "Definición del estándar de red", description: "Establecer una plantilla estándar de gabinete/energía para la red." },
        { step: "Implementación en sitio", description: "Desplegar la plantilla estándar en múltiples sitios." },
        { step: "Puesta en marcha", description: "Verificar la conmutación de redundancia y el monitoreo en cada sitio." },
      ],
      typicalApplications: ["Centrales telefónicas", "Salas de equipos de estaciones base", "Centros de operaciones de red"],
      faqs: [
        {
          question: "¿Para qué se usa un PDU ATS en sitios de telecomunicaciones?",
          answer:
            "Un PDU ATS (conmutador de transferencia automática) cambia automáticamente la carga entre dos alimentaciones independientes —normalmente red eléctrica y generador, o dos alimentaciones de red— sin intervención manual, manteniendo la disponibilidad si una de las alimentaciones falla.",
        },
      ],
    },
    ru: {
      name: "Решение для телеком-ЦОД",
      tagline: "Питание и инфраструктура, спроектированные под требования надёжности телеком-сетей.",
      customerChallenge:
        "Телеком-операторам требуется инфраструктура, отвечающая строгим стандартам доступности и питания постоянного тока на АТС, базовых станциях и в помещениях сетевого оборудования — часто в рамках крупных географически распределённых сетей.",
      solutionArchitecture:
        "Haisen поставляет стоечные и сетевые шкафы, распределение питания DC/AC, ИБП и контейнерные варианты, стандартизированные для помещений телеком-оборудования и легко тиражируемые на множестве объектов.",
      systemComponents: [
        { name: "Сетевые шкафы", description: "19-дюймовые шкафы под телекоммуникационное передающее и коммутационное оборудование." },
        { name: "Распределение питания", description: "PDU и АВР для переключения резервных вводов." },
        { name: "ИБП", description: "Стоечный или модульный ИБП, соответствующий критичности объекта." },
      ],
      howItWorks: [
        "На телеком-объектах применяются стандартизированные шаблоны шкафов и питания.",
        "АВР/СВР обеспечивает автоматическое переключение между резервными вводами питания.",
        "PDU распределяют и контролируют питание передающего и коммутационного оборудования.",
      ],
      technicalAdvantages: ["Стандартизированный, тиражируемый дизайн объекта", "Автоматическое переключение ввода для резервирования питания", "Компактность для помещений оборудования"],
      deploymentProcess: [
        { step: "Определение сетевого стандарта", description: "Разработка стандартного шаблона шкафов/питания для сети." },
        { step: "Тиражирование на объекты", description: "Развёртывание стандартного шаблона на множестве объектов." },
        { step: "Ввод в эксплуатацию", description: "Проверка переключения резерва и мониторинга на каждом объекте." },
      ],
      typicalApplications: ["АТС", "Помещения оборудования базовых станций", "Центры управления сетью"],
      faqs: [
        {
          question: "Для чего используется ATS PDU на телеком-объектах?",
          answer:
            "ATS PDU (автоматический переключатель ввода) автоматически переключает нагрузку между двумя независимыми вводами питания — как правило, сетью и генератором, либо двумя вводами сети — без ручного вмешательства, сохраняя работоспособность при отказе одного из вводов.",
        },
      ],
    },
    zh: {
      name: "电信数据中心解决方案",
      tagline: "专为电信网络可靠性要求设计的电力与基础设施。",
      customerChallenge: "电信运营商需要在中心机房、基站及网络设备间满足严格的正常运行时间与直流电力标准,且往往需要覆盖地域广泛、分布分散的网络。",
      solutionArchitecture: "海森为电信设备间提供标准化的机柜、网络机柜、直流/交流配电、UPS及集装箱选项,可在众多站点间快速复制部署。",
      systemComponents: [
        { name: "网络机柜", description: "适配电信传输与交换设备的19英寸机柜。" },
        { name: "配电系统", description: "用于冗余电源切换的PDU与ATS。" },
        { name: "UPS", description: "根据站点关键程度匹配的机架式或模块化UPS。" },
      ],
      howItWorks: [
        "标准化的机柜与电力模板应用于各电信站点。",
        "ATS/STS在冗余电源间实现自动切换。",
        "PDU为传输与交换设备分配电力并进行监控。",
      ],
      technicalAdvantages: ["标准化、可复制的站点设计", "自动电源切换实现冗余", "紧凑占地适合设备间"],
      deploymentProcess: [
        { step: "网络标准制定", description: "为网络建立标准机柜/电力模板。" },
        { step: "站点部署", description: "在多个站点推广标准模板。" },
        { step: "系统调试", description: "验证各站点的冗余切换与监控功能。" },
      ],
      typicalApplications: ["电信中心机房", "基站设备间", "网络运营中心"],
      faqs: [
        {
          question: "ATS PDU在电信站点中的作用是什么？",
          answer: "ATS(自动切换开关)PDU可在两路独立电源(通常为市电与发电机,或双路市电)之间自动切换负载,无需人工干预,当一路电源发生故障时仍能保持供电连续性。",
        },
      ],
    },
  },

  "ai-data-center": {
    ar: {
      name: "حل مركز بيانات الذكاء الاصطناعي",
      tagline: "بنية طاقة وتبريد عالية الكثافة لبنية تدريب واستدلال الذكاء الاصطناعي.",
      customerChallenge:
        "تستهلك راكات تدريب واستدلال الذكاء الاصطناعي طاقة لكل راك أكبر بكثير من الأحمال التقليدية لتكنولوجيا المعلومات، متجاوزة ما يمكن أن يدعمه التبريد الهوائي القياسي وتصاميم PDU، وتتطلب تخطيطاً دقيقاً لسعة الكهرباء والحرارة.",
      solutionArchitecture:
        "تقرن هايسِن وحدات PDU ثلاثية الطور عالية الطاقة وUPS عالي السعة مع التبريد السائل (صفيحة باردة + CDU) لدعم راكات GPU/الذكاء الاصطناعي الكثيفة، مع مراقبة مُعايرة لتتبع هامش الطاقة والحرارة في الوقت الفعلي.",
      systemComponents: [
        { name: "PDU عالي الطاقة", description: "توزيع ثلاثي الطور عالي التيار لراكات GPU/الذكاء الاصطناعي." },
        { name: "UPS عالي السعة", description: "مُحجَّم للحمل عالي الكثافة المستمر." },
        { name: "التبريد السائل وCDU", description: "تبريد مباشر للرقاقة عبر صفيحة باردة مع إدارة حلقة CDU." },
      ],
      howItWorks: [
        "توزع وحدات PDU عالية الطاقة الطاقة ثلاثية الطور على راكات GPU الكثيفة مع توازن الأطوار.",
        "يزيل التبريد السائل الحرارة مباشرة عند مستوى الرقاقة عبر الصفائح الباردة.",
        "تُدير CDU حلقات سائل التبريد الأساسية/الثانوية وتراقب التدفق ودرجة الحرارة.",
      ],
      technicalAdvantages: ["يدعم كثافات راك تتجاوز حدود التبريد الهوائي", "تصميم طاقة ثلاثي الطور متوازن لمجموعات GPU", "كشف تسرب ومراقبة حرارية متكاملان"],
      deploymentProcess: [
        { step: "تخطيط الكثافة والحمل", description: "تحديد كيلوواط مستهدف لكل راك وطريقة التبريد." },
        { step: "بنية الطاقة", description: "تصميم توزيع PDU عالي الطاقة وUPS." },
        { step: "دمج التبريد", description: "نشر حلقات CDU والتبريد السائل بالصفيحة الباردة." },
        { step: "التشغيل", description: "التحقق من توازن الطاقة وأداء التبريد والمراقبة." },
      ],
      typicalApplications: ["مجموعات تدريب الذكاء الاصطناعي", "مزارع استدلال GPU", "مراكز حوسبة عالية الأداء"],
      faqs: [
        {
          question: "لماذا تحتاج مراكز بيانات الذكاء الاصطناعي إلى تبريد سائل؟",
          answer:
            "يمكن أن تستهلك راكات تدريب الذكاء الاصطناعي وGPU كثافة طاقة أعلى بأضعاف من الخوادم التقليدية، ما يولد أحمال حرارة تتجاوز ما يمكن للتبريد الهوائي إزالته اقتصادياً على مستوى الراك — يستخرج التبريد السائل الحرارة مباشرة عند الرقاقة، ما يتيح كثافة أعلى بكثير لكل راك.",
        },
      ],
    },
    fr: {
      name: "Solution de centre de données IA",
      tagline: "Architecture d'alimentation et de refroidissement haute densité pour l'infrastructure d'entraînement et d'inférence IA.",
      customerChallenge:
        "Les baies d'entraînement et d'inférence IA consomment beaucoup plus d'énergie par baie que les charges informatiques traditionnelles, dépassant ce que les conceptions standard de refroidissement à air et de PDU peuvent supporter, et nécessitant une planification minutieuse de la capacité électrique et thermique.",
      solutionArchitecture:
        "Haisen associe des PDU triphasés haute puissance et des onduleurs haute capacité à un refroidissement liquide (plaque froide + CDU) pour prendre en charge les baies GPU/IA denses, avec une surveillance calibrée pour suivre en temps réel la marge de puissance et thermique.",
      systemComponents: [
        { name: "PDU haute puissance", description: "Distribution triphasée à fort courant pour les baies GPU/IA." },
        { name: "Onduleur haute capacité", description: "Dimensionné pour une charge haute densité soutenue." },
        { name: "Refroidissement liquide et CDU", description: "Refroidissement direct à la puce par plaque froide avec gestion de boucle CDU." },
      ],
      howItWorks: [
        "Les PDU haute puissance distribuent l'énergie triphasée aux baies GPU denses avec un équilibrage de phase.",
        "Le refroidissement liquide évacue la chaleur directement au niveau de la puce via des plaques froides.",
        "Un CDU gère les boucles de liquide de refroidissement primaire/secondaire et surveille le débit et la température.",
      ],
      technicalAdvantages: ["Prend en charge des densités de baies au-delà des limites du refroidissement à air", "Conception d'alimentation triphasée équilibrée pour les clusters GPU", "Détection de fuite et surveillance thermique intégrées"],
      deploymentProcess: [
        { step: "Planification de la densité et de la charge", description: "Définir le kW cible par baie et la méthode de refroidissement." },
        { step: "Architecture électrique", description: "Concevoir la distribution PDU haute puissance et onduleur." },
        { step: "Intégration du refroidissement", description: "Déployer les boucles CDU et de refroidissement liquide par plaque froide." },
        { step: "Mise en service", description: "Valider l'équilibre de puissance, la performance du refroidissement et la surveillance." },
      ],
      typicalApplications: ["Clusters d'entraînement IA", "Fermes d'inférence GPU", "Centres de calcul HPC"],
      faqs: [
        {
          question: "Pourquoi les centres de données IA ont-ils besoin de refroidissement liquide ?",
          answer:
            "Les baies d'entraînement IA et GPU peuvent consommer une densité de puissance plusieurs fois supérieure à celle des serveurs traditionnels, générant des charges thermiques dépassant ce que le refroidissement à air peut évacuer économiquement au niveau de la baie — le refroidissement liquide extrait la chaleur directement au niveau de la puce, permettant une densité par baie bien plus élevée.",
        },
      ],
    },
    es: {
      name: "Solución de centro de datos para IA",
      tagline: "Arquitectura de energía y refrigeración de alta densidad para infraestructura de entrenamiento e inferencia de IA.",
      customerChallenge:
        "Los racks de entrenamiento e inferencia de IA consumen mucha más energía por rack que las cargas de TI tradicionales, superando lo que los diseños estándar de refrigeración por aire y PDU pueden soportar, y requiriendo una planificación cuidadosa de la capacidad eléctrica y térmica.",
      solutionArchitecture:
        "Haisen combina PDU trifásicos de alta potencia y SAI de alta capacidad con refrigeración líquida (placa fría + CDU) para soportar racks densos de GPU/IA, con monitoreo ajustado para rastrear en tiempo real el margen de energía y térmico.",
      systemComponents: [
        { name: "PDU de alta potencia", description: "Distribución trifásica de alta corriente para racks de GPU/IA." },
        { name: "SAI de alta capacidad", description: "Dimensionado para carga sostenida de alta densidad." },
        { name: "Refrigeración líquida y CDU", description: "Refrigeración directa al chip mediante placa fría con gestión de bucle CDU." },
      ],
      howItWorks: [
        "Los PDU de alta potencia distribuyen energía trifásica a racks densos de GPU con equilibrio de fases.",
        "La refrigeración líquida elimina el calor directamente a nivel del chip mediante placas frías.",
        "Un CDU gestiona los bucles de refrigerante primario/secundario y monitorea el flujo y la temperatura.",
      ],
      technicalAdvantages: ["Soporta densidades de rack más allá de los límites de la refrigeración por aire", "Diseño de energía trifásica equilibrada para clústeres de GPU", "Detección de fugas y monitoreo térmico integrados"],
      deploymentProcess: [
        { step: "Planificación de densidad y carga", description: "Definir el kW objetivo por rack y el método de refrigeración." },
        { step: "Arquitectura de energía", description: "Diseñar la distribución de PDU de alta potencia y SAI." },
        { step: "Integración de refrigeración", description: "Desplegar los bucles de CDU y refrigeración líquida por placa fría." },
        { step: "Puesta en marcha", description: "Validar el equilibrio de energía, el rendimiento de refrigeración y el monitoreo." },
      ],
      typicalApplications: ["Clústeres de entrenamiento de IA", "Granjas de inferencia GPU", "Centros de cómputo HPC"],
      faqs: [
        {
          question: "¿Por qué los centros de datos de IA necesitan refrigeración líquida?",
          answer:
            "Los racks de entrenamiento de IA y GPU pueden consumir una densidad de potencia varias veces mayor que los servidores tradicionales, generando cargas térmicas que superan lo que la refrigeración por aire puede eliminar económicamente a nivel de rack; la refrigeración líquida extrae el calor directamente en el chip, permitiendo una densidad mucho mayor por rack.",
        },
      ],
    },
    ru: {
      name: "Решение для ИИ-дата-центра",
      tagline: "Архитектура питания и охлаждения высокой плотности для инфраструктуры обучения и инференса ИИ.",
      customerChallenge:
        "Стойки для обучения и инференса ИИ потребляют значительно больше энергии на стойку, чем традиционные ИТ-нагрузки, превышая возможности стандартного воздушного охлаждения и конструкции PDU, что требует тщательного планирования электрической и тепловой мощности.",
      solutionArchitecture:
        "Haisen сочетает мощные трёхфазные PDU и ИБП высокой ёмкости с жидкостным охлаждением (холодная плита + CDU) для поддержки плотных GPU/ИИ-стоек, с мониторингом, настроенным на отслеживание запаса по питанию и температуре в реальном времени.",
      systemComponents: [
        { name: "Мощный PDU", description: "Трёхфазное распределение высокого тока для GPU/ИИ-стоек." },
        { name: "ИБП высокой ёмкости", description: "Рассчитан на устойчивую нагрузку высокой плотности." },
        { name: "Жидкостное охлаждение и CDU", description: "Прямое охлаждение чипа холодной плитой с управлением контуром через CDU." },
      ],
      howItWorks: [
        "Мощные PDU распределяют трёхфазное питание по плотным GPU-стойкам со сбалансированной нагрузкой по фазам.",
        "Жидкостное охлаждение отводит тепло непосредственно на уровне чипа через холодные плиты.",
        "CDU управляет первичным/вторичным контурами хладагента и контролирует расход и температуру.",
      ],
      technicalAdvantages: ["Поддержка плотности стоек за пределами возможностей воздушного охлаждения", "Сбалансированная трёхфазная схема питания для GPU-кластеров", "Встроенное обнаружение утечек и тепловой мониторинг"],
      deploymentProcess: [
        { step: "Планирование плотности и нагрузки", description: "Определение целевой мощности на стойку (кВт) и метода охлаждения." },
        { step: "Архитектура питания", description: "Проектирование распределения через мощные PDU и ИБП." },
        { step: "Интеграция охлаждения", description: "Развёртывание контуров CDU и жидкостного охлаждения холодной плитой." },
        { step: "Ввод в эксплуатацию", description: "Проверка баланса питания, эффективности охлаждения и мониторинга." },
      ],
      typicalApplications: ["Кластеры обучения ИИ", "Фермы инференса GPU", "Центры HPC-вычислений"],
      faqs: [
        {
          question: "Почему ИИ-дата-центрам требуется жидкостное охлаждение?",
          answer:
            "Стойки для обучения ИИ и GPU могут потреблять плотность мощности в несколько раз выше, чем традиционные серверы, создавая тепловые нагрузки, превышающие возможности экономичного отвода тепла воздушным охлаждением на уровне стойки — жидкостное охлаждение отводит тепло непосредственно от чипа, обеспечивая гораздо более высокую плотность на стойку.",
        },
      ],
    },
    zh: {
      name: "AI数据中心解决方案",
      tagline: "面向AI训练与推理基础设施的高密度电力与制冷架构。",
      customerChallenge: "AI训练与推理机柜的单柜功耗远超传统IT负载,超出标准风冷与PDU设计的承载能力,需要审慎的电气与热容量规划。",
      solutionArchitecture:
        "海森将高功率三相PDU与大容量UPS同液冷系统(冷板+CDU)结合,支持高密度GPU/AI机柜,并配备实时跟踪电力与热余量的监控系统。",
      systemComponents: [
        { name: "高功率PDU", description: "为GPU/AI机柜提供三相大电流配电。" },
        { name: "大容量UPS", description: "按持续高密度负载配置容量。" },
        { name: "液冷与CDU", description: "通过冷板实现芯片级直接制冷,并由CDU管理回路。" },
      ],
      howItWorks: [
        "高功率PDU以均衡的三相负载为高密度GPU机柜配电。",
        "液冷系统通过冷板直接在芯片层面移除热量。",
        "CDU管理一次/二次冷却回路,并监控流量与温度。",
      ],
      technicalAdvantages: ["支持超越风冷极限的机柜密度", "面向GPU集群的均衡三相电力设计", "集成漏液检测与热监控"],
      deploymentProcess: [
        { step: "密度与负载规划", description: "确定单机柜目标功率(kW)及制冷方式。" },
        { step: "电力架构设计", description: "设计高功率PDU与UPS配电方案。" },
        { step: "制冷系统集成", description: "部署CDU及冷板液冷回路。" },
        { step: "系统调试", description: "验证电力平衡、制冷性能及监控功能。" },
      ],
      typicalApplications: ["AI训练集群", "GPU推理集群", "HPC高性能计算中心"],
      faqs: [
        {
          question: "为什么AI数据中心需要液冷？",
          answer: "AI训练与GPU机柜的功率密度可达传统服务器的数倍,产生的热负载超出风冷在机柜层面的经济散热能力——液冷可直接在芯片层面导出热量,从而实现单机柜远高于风冷的密度。",
        },
      ],
    },
  },

  "liquid-cooling": {
    ar: {
      name: "حل التبريد السائل",
      tagline: "التبريد السائل بالصفيحة الباردة وأنظمة CDU لإدارة حرارية عالية الكثافة.",
      customerChallenge:
        "مع ارتفاع كثافة طاقة الراك بسبب أحمال عمل الذكاء الاصطناعي والحوسبة عالية الأداء، لم يعد التبريد الهوائي وحده قادراً على إزالة الحرارة بكفاءة أو بفعالية اقتصادية، ما يعرض للخطر تقييد الأداء الحراري ومشاكل الموثوقية.",
      solutionArchitecture:
        "يُطبِّق حل التبريد السائل من هايسِن تبريداً مباشراً للرقاقة بصفيحة باردة على مستوى الخادم، مع CDU يعزل ويدير حلقات سائل التبريد الأساسية (المرفق) والثانوية (الراك)، بما يشمل كشف التسرب والمراقبة.",
      systemComponents: [
        { name: "الصفائح الباردة", description: "تبريد سائل مباشر للرقاقة على مستوى الخادم/GPU." },
        { name: "CDU", description: "يدير فصل الحلقة الأساسية/الثانوية والتدفق ودرجة الحرارة." },
        { name: "كشف التسرب والمراقبة", description: "كشف تسرب قائم على المستشعرات ومراقبة النظام في الوقت الفعلي." },
      ],
      howItWorks: [
        "تمتص الصفائح الباردة الحرارة مباشرة من وحدات CPU/GPU إلى حلقة سائل التبريد الثانوية.",
        "يتبادل CDU الحرارة بين الحلقة الثانوية (الراك) والحلقة الأساسية (المرفق).",
        "تطرد البنية التحتية للتبريد بالمرفق الحرارة من الحلقة الأساسية.",
        "تحمي مستشعرات التسرب ومراقبة التدفق/درجة الحرارة أجهزة تكنولوجيا المعلومات باستمرار.",
      ],
      technicalAdvantages: ["يتيح كثافات راك تتجاوز حدود التبريد الهوائي", "يعزل أجهزة تكنولوجيا المعلومات عن جودة/ضغط مياه المرفق", "يقلل طاقة تبريد المرفق مقارنة بالتصاميم الهوائية فقط عند الكثافة العالية"],
      deploymentProcess: [
        { step: "تقييم حراري", description: "تحديد حمل حرارة الراك وتقسيم التبريد (سائل مقابل هواء)." },
        { step: "تصميم CDU والحلقة", description: "تحديد سعة CDU وتصميم توجيه الحلقة الأساسية/الثانوية." },
        { step: "التركيب", description: "تركيب الصفائح الباردة والموزعات وCDU." },
        { step: "التشغيل", description: "التحقق من التدفق ودرجة الحرارة والضغط وكشف التسرب." },
      ],
      typicalApplications: ["مجموعات تدريب الذكاء الاصطناعي", "حوسبة عالية الأداء", "استضافة مشتركة عالية الكثافة"],
      faqs: [
        {
          question: "ما هو CDU في التبريد السائل؟",
          answer:
            "يدير CDU (وحدة توزيع سائل التبريد) ويعزل حلقات سائل التبريد الأساسية (المرفق) والثانوية (الراك) في نظام التبريد السائل، متحكماً بالتدفق ودرجة الحرارة والضغط مع حماية أجهزة تكنولوجيا المعلومات من مشاكل جودة مياه المرفق.",
        },
      ],
    },
    fr: {
      name: "Solution de refroidissement liquide",
      tagline: "Refroidissement liquide par plaque froide et systèmes CDU pour une gestion thermique haute densité.",
      customerChallenge:
        "À mesure que la densité de puissance des baies augmente avec les charges de travail IA et HPC, le refroidissement à air seul ne peut plus évacuer la chaleur efficacement ni de manière rentable, risquant une limitation thermique et des problèmes de fiabilité.",
      solutionArchitecture:
        "La solution de refroidissement liquide de Haisen applique un refroidissement direct à la puce par plaque froide au niveau du serveur, avec un CDU isolant et gérant les boucles de liquide de refroidissement primaire (installation) et secondaire (baie), incluant détection de fuite et surveillance.",
      systemComponents: [
        { name: "Plaques froides", description: "Refroidissement liquide direct à la puce au niveau serveur/GPU." },
        { name: "CDU", description: "Gère la séparation des boucles primaire/secondaire, le débit et la température." },
        { name: "Détection de fuite et surveillance", description: "Détection de fuite par capteurs et surveillance système en temps réel." },
      ],
      howItWorks: [
        "Les plaques froides absorbent la chaleur directement des CPU/GPU dans la boucle de refroidissement secondaire.",
        "Le CDU échange la chaleur entre la boucle secondaire (baie) et la boucle primaire (installation).",
        "L'infrastructure de refroidissement de l'installation rejette la chaleur de la boucle primaire.",
        "Les capteurs de fuite et la surveillance du débit/de la température protègent en continu le matériel informatique.",
      ],
      technicalAdvantages: ["Permet des densités de baies au-delà des limites du refroidissement à air", "Isole le matériel informatique de la qualité/pression de l'eau de l'installation", "Réduit l'énergie de refroidissement de l'installation par rapport aux conceptions air seul à haute densité"],
      deploymentProcess: [
        { step: "Évaluation thermique", description: "Déterminer la charge thermique de la baie et la répartition du refroidissement (liquide vs air)." },
        { step: "Conception CDU et boucle", description: "Dimensionner la capacité du CDU et concevoir le routage des boucles primaire/secondaire." },
        { step: "Installation", description: "Installer les plaques froides, les collecteurs et le CDU." },
        { step: "Mise en service", description: "Vérifier le débit, la température, la pression et la détection de fuite." },
      ],
      typicalApplications: ["Clusters d'entraînement IA", "Calcul HPC", "Colocation haute densité"],
      faqs: [
        {
          question: "Qu'est-ce qu'un CDU dans le refroidissement liquide ?",
          answer:
            "Un CDU (unité de distribution de liquide de refroidissement) gère et isole les boucles de liquide de refroidissement primaire (installation) et secondaire (baie) dans un système de refroidissement liquide, contrôlant le débit, la température et la pression tout en protégeant le matériel informatique des problèmes de qualité de l'eau de l'installation.",
        },
      ],
    },
    es: {
      name: "Solución de refrigeración líquida",
      tagline: "Refrigeración líquida por placa fría y sistemas CDU para gestión térmica de alta densidad.",
      customerChallenge:
        "A medida que aumenta la densidad de potencia de los racks con cargas de trabajo de IA y HPC, la refrigeración por aire por sí sola ya no puede eliminar el calor de forma eficiente ni rentable, arriesgando la limitación térmica y problemas de fiabilidad.",
      solutionArchitecture:
        "La solución de refrigeración líquida de Haisen aplica refrigeración directa al chip mediante placa fría a nivel de servidor, con un CDU que aísla y gestiona los bucles de refrigerante primario (instalación) y secundario (rack), incluyendo detección de fugas y monitoreo.",
      systemComponents: [
        { name: "Placas frías", description: "Refrigeración líquida directa al chip a nivel de servidor/GPU." },
        { name: "CDU", description: "Gestiona la separación de bucles primario/secundario, el flujo y la temperatura." },
        { name: "Detección de fugas y monitoreo", description: "Detección de fugas basada en sensores y monitoreo del sistema en tiempo real." },
      ],
      howItWorks: [
        "Las placas frías absorben el calor directamente de las CPU/GPU hacia el bucle de refrigerante secundario.",
        "El CDU intercambia calor entre el bucle secundario (rack) y el bucle primario (instalación).",
        "La infraestructura de refrigeración de la instalación disipa el calor del bucle primario.",
        "Los sensores de fuga y el monitoreo de flujo/temperatura protegen continuamente el hardware de TI.",
      ],
      technicalAdvantages: ["Permite densidades de rack más allá de los límites de la refrigeración por aire", "Aísla el hardware de TI de la calidad/presión del agua de la instalación", "Reduce la energía de refrigeración de la instalación frente a diseños solo de aire a alta densidad"],
      deploymentProcess: [
        { step: "Evaluación térmica", description: "Determinar la carga térmica del rack y la división de refrigeración (líquida vs. aire)." },
        { step: "Diseño de CDU y bucle", description: "Dimensionar la capacidad del CDU y diseñar el enrutamiento de bucles primario/secundario." },
        { step: "Instalación", description: "Instalar placas frías, colectores y CDU." },
        { step: "Puesta en marcha", description: "Verificar el flujo, la temperatura, la presión y la detección de fugas." },
      ],
      typicalApplications: ["Clústeres de entrenamiento de IA", "Cómputo HPC", "Colocación de alta densidad"],
      faqs: [
        {
          question: "¿Qué es un CDU en la refrigeración líquida?",
          answer:
            "Un CDU (unidad de distribución de refrigerante) gestiona y aísla los bucles de refrigerante primario (instalación) y secundario (rack) en un sistema de refrigeración líquida, controlando el flujo, la temperatura y la presión mientras protege el hardware de TI de problemas de calidad del agua de la instalación.",
        },
      ],
    },
    ru: {
      name: "Решение для жидкостного охлаждения",
      tagline: "Жидкостное охлаждение холодной плитой и системы CDU для теплового менеджмента высокой плотности.",
      customerChallenge:
        "По мере роста плотности мощности стоек из-за нагрузок ИИ и HPC воздушное охлаждение само по себе уже не справляется с эффективным и экономичным отводом тепла, создавая риск теплового троттлинга и проблем с надёжностью.",
      solutionArchitecture:
        "Решение Haisen по жидкостному охлаждению применяет прямое охлаждение чипа холодной плитой на уровне сервера, а CDU изолирует и управляет первичным (объектовым) и вторичным (стоечным) контурами хладагента, включая обнаружение утечек и мониторинг.",
      systemComponents: [
        { name: "Холодные плиты", description: "Прямое жидкостное охлаждение чипа на уровне сервера/GPU." },
        { name: "CDU", description: "Управляет разделением первичного/вторичного контуров, расходом и температурой." },
        { name: "Обнаружение утечек и мониторинг", description: "Сенсорное обнаружение утечек и мониторинг системы в реальном времени." },
      ],
      howItWorks: [
        "Холодные плиты отводят тепло непосредственно от CPU/GPU во вторичный контур хладагента.",
        "CDU обменивает тепло между вторичным (стоечным) и первичным (объектовым) контурами.",
        "Объектовая система охлаждения отводит тепло из первичного контура.",
        "Датчики утечки и мониторинг расхода/температуры непрерывно защищают ИТ-оборудование.",
      ],
      technicalAdvantages: ["Обеспечивает плотность стоек за пределами возможностей воздушного охлаждения", "Изолирует ИТ-оборудование от качества/давления объектовой воды", "Снижает энергозатраты на объектовое охлаждение по сравнению с чисто воздушными решениями при высокой плотности"],
      deploymentProcess: [
        { step: "Тепловая оценка", description: "Определение тепловой нагрузки стойки и разделения охлаждения (жидкостное/воздушное)." },
        { step: "Проектирование CDU и контура", description: "Определение мощности CDU и трассировки первичного/вторичного контуров." },
        { step: "Монтаж", description: "Установка холодных плит, коллекторов и CDU." },
        { step: "Ввод в эксплуатацию", description: "Проверка расхода, температуры, давления и обнаружения утечек." },
      ],
      typicalApplications: ["Кластеры обучения ИИ", "HPC-вычисления", "Высокоплотный колокейшн"],
      faqs: [
        {
          question: "Что такое CDU в системе жидкостного охлаждения?",
          answer:
            "CDU (модуль распределения хладагента) управляет и изолирует первичный (объектовый) и вторичный (стоечный) контуры хладагента в системе жидкостного охлаждения, контролируя расход, температуру и давление, защищая при этом ИТ-оборудование от проблем с качеством объектовой воды.",
        },
      ],
    },
    zh: {
      name: "液冷解决方案",
      tagline: "冷板液冷与CDU系统,实现高密度热管理。",
      customerChallenge: "随着AI与高性能计算负载推动机柜功率密度上升,单纯依靠风冷已无法高效、经济地散热,存在热降频与可靠性风险。",
      solutionArchitecture:
        "海森的液冷解决方案在服务器层面采用冷板芯片级直接制冷,并通过CDU隔离与管理一次(设施侧)与二次(机柜侧)冷却回路,同时集成漏液检测与监控。",
      systemComponents: [
        { name: "冷板", description: "服务器/GPU层面的芯片级直接液冷。" },
        { name: "CDU", description: "管理一次/二次回路隔离、流量与温度。" },
        { name: "漏液检测与监控", description: "基于传感器的漏液检测及系统实时监控。" },
      ],
      howItWorks: [
        "冷板直接从CPU/GPU吸收热量并传递至二次冷却回路。",
        "CDU在二次(机柜)回路与一次(设施)回路之间进行热交换。",
        "设施制冷基础设施将热量从一次回路排出。",
        "漏液传感器及流量/温度监控持续保护IT硬件。",
      ],
      technicalAdvantages: ["支持超越风冷极限的机柜密度", "将IT硬件与设施水质/水压隔离", "在高密度场景下相比纯风冷方案降低设施制冷能耗"],
      deploymentProcess: [
        { step: "热负载评估", description: "确定机柜热负载及制冷方式分配(液冷与风冷)。" },
        { step: "CDU与回路设计", description: "确定CDU容量并设计一次/二次回路布线。" },
        { step: "系统安装", description: "安装冷板、分水器及CDU。" },
        { step: "系统调试", description: "验证流量、温度、压力及漏液检测功能。" },
      ],
      typicalApplications: ["AI训练集群", "HPC高性能计算", "高密度托管"],
      faqs: [
        {
          question: "液冷系统中的CDU是什么？",
          answer: "CDU(冷却液分配单元)在液冷系统中管理并隔离一次(设施侧)与二次(机柜侧)冷却回路,控制流量、温度与压力,同时保护IT硬件免受设施水质问题的影响。",
        },
      ],
    },
  },

  "critical-power": {
    ar: {
      name: "حل الطاقة الحرجة",
      tagline: "بنية طاقة زائدة ومراقَبة من تغذية المرفق إلى حمل تكنولوجيا المعلومات.",
      customerChallenge:
        "لا يمكن للمرافق الحرجة للمهمة تحمل انقطاع الطاقة، ما يتطلب التكرار والمراقبة في كل مرحلة من دخل المرفق/المولد عبر UPS والتوزيع والراك نفسه.",
      solutionArchitecture:
        "تصمم هايسِن بنى طاقة زائدة تجمع بين تبديل نقل ATS/STS، وUPS معياري، ووحدات PDU ذكية، مُراقَبة من طرف إلى طرف بحيث يمكن للمشغلين رؤية المشكلات والاستجابة لها قبل أن تؤثر على الحمل.",
      systemComponents: [
        { name: "ATS / STS", description: "تبديل نقل تلقائي وثابت بين مصادر الطاقة." },
        { name: "UPS معياري", description: "حماية طاقة زائدة بنمط N+X." },
        { name: "PDU ذكي", description: "مراقبة على مستوى المنفذ وتبديل عن بُعد عند الراك." },
      ],
      howItWorks: [
        "يُبدِّل ATS/STS تلقائياً بين تغذيتي الطاقة الأساسية والاحتياطية.",
        "يُكيِّف UPS المعياري ويحمي الطاقة بتكرار مدمج.",
        "توزع وحدات PDU الذكية وتراقب الطاقة حتى مستوى المنفذ.",
      ],
      technicalAdvantages: ["تكرار مصمم في كل مرحلة، وليس UPS فقط", "رؤية طاقة من طرف إلى طرف", "قابلية توسع معيارية مع نمو الحمل"],
      deploymentProcess: [
        { step: "تحديد هدف التكرار", description: "وضع مستوى الفئة/التكرار المطلوب (N، N+1، 2N)." },
        { step: "تصميم بنية الطاقة", description: "تصميم طوبولوجيا تبديل النقل وUPS والتوزيع." },
        { step: "التركيب والدمج", description: "التركيب والدمج مع البنية التحتية للطاقة بالمنشأة." },
        { step: "التشغيل", description: "اختبار الحمل الكامل والتبديل عند الفشل." },
      ],
      typicalApplications: ["مراكز البيانات", "المنشآت المصرفية والمالية", "الأحمال الحرجة الحكومية والصناعية"],
      faqs: [
        {
          question: "ما الفرق بين ATS وSTS؟",
          answer:
            "يُبدِّل ATS (مفتاح النقل التلقائي) الحمل ميكانيكياً بين مصدري طاقة، عادة بزمن نقل قصير، بينما يستخدم STS (مفتاح النقل الثابت) تبديلاً بالحالة الصلبة لنقل شبه فوري، يُستخدم حيث يكون حتى الانقطاع اللحظي غير مقبول.",
        },
      ],
    },
    fr: {
      name: "Solution d'alimentation critique",
      tagline: "Architecture d'alimentation redondante et surveillée, du réseau électrique jusqu'à la charge informatique.",
      customerChallenge:
        "Les installations à mission critique ne peuvent tolérer aucune interruption de l'alimentation, nécessitant redondance et surveillance à chaque étape, de l'entrée réseau/groupe électrogène à l'onduleur, la distribution et la baie elle-même.",
      solutionArchitecture:
        "Haisen conçoit des architectures d'alimentation redondantes combinant commutation de transfert ATS/STS, onduleur modulaire et PDU intelligents, surveillés de bout en bout afin que les opérateurs puissent détecter et résoudre les problèmes avant qu'ils n'affectent la charge.",
      systemComponents: [
        { name: "ATS / STS", description: "Commutation de transfert automatique et statique entre sources d'alimentation." },
        { name: "Onduleur modulaire", description: "Protection électrique redondante N+X." },
        { name: "PDU intelligent", description: "Surveillance au niveau des prises et commutation à distance au niveau de la baie." },
      ],
      howItWorks: [
        "L'ATS/STS commute automatiquement entre les alimentations primaire et de secours.",
        "L'onduleur modulaire conditionne et protège l'alimentation avec une redondance intégrée.",
        "Les PDU intelligents distribuent et surveillent l'alimentation jusqu'au niveau des prises.",
      ],
      technicalAdvantages: ["Redondance conçue à chaque étape, pas seulement au niveau de l'onduleur", "Visibilité de bout en bout sur l'alimentation", "Évolutivité modulaire à mesure que la charge augmente"],
      deploymentProcess: [
        { step: "Définition de l'objectif de redondance", description: "Établir le niveau/tier de redondance requis (N, N+1, 2N)." },
        { step: "Conception de l'architecture d'alimentation", description: "Concevoir la topologie de commutation de transfert, d'onduleur et de distribution." },
        { step: "Installation et intégration", description: "Installer et intégrer avec l'infrastructure électrique de l'installation." },
        { step: "Mise en service", description: "Tests de pleine charge et de basculement." },
      ],
      typicalApplications: ["Centres de données", "Installations bancaires et financières", "Charges critiques gouvernementales et industrielles"],
      faqs: [
        {
          question: "Quelle est la différence entre un ATS et un STS ?",
          answer:
            "Un ATS (commutateur de transfert automatique) commute mécaniquement la charge entre deux sources d'alimentation, généralement avec un bref temps de transfert, tandis qu'un STS (commutateur de transfert statique) utilise une commutation à semi-conducteurs pour un transfert quasi instantané, utilisé lorsque même une interruption momentanée est inacceptable.",
        },
      ],
    },
    es: {
      name: "Solución de energía crítica",
      tagline: "Arquitectura de energía redundante y monitoreada, desde la acometida hasta la carga de TI.",
      customerChallenge:
        "Las instalaciones de misión crítica no pueden tolerar interrupciones de energía, lo que requiere redundancia y monitoreo en cada etapa, desde la entrada de red/generador hasta el SAI, la distribución y el propio rack.",
      solutionArchitecture:
        "Haisen diseña arquitecturas de energía redundantes que combinan conmutación de transferencia ATS/STS, SAI modular y PDU inteligentes, monitoreadas de extremo a extremo para que los operadores puedan detectar y responder a problemas antes de que afecten la carga.",
      systemComponents: [
        { name: "ATS / STS", description: "Conmutación de transferencia automática y estática entre fuentes de energía." },
        { name: "SAI modular", description: "Protección de energía redundante N+X." },
        { name: "PDU inteligente", description: "Monitoreo a nivel de toma y conmutación remota en el rack." },
      ],
      howItWorks: [
        "El ATS/STS conmuta automáticamente entre las alimentaciones primaria y de respaldo.",
        "El SAI modular acondiciona y protege la energía con redundancia integrada.",
        "Los PDU inteligentes distribuyen y monitorean la energía hasta el nivel de toma.",
      ],
      technicalAdvantages: ["Redundancia diseñada en cada etapa, no solo en el SAI", "Visibilidad de energía de extremo a extremo", "Escalabilidad modular a medida que crece la carga"],
      deploymentProcess: [
        { step: "Definición del objetivo de redundancia", description: "Establecer el nivel/tier de redundancia requerido (N, N+1, 2N)." },
        { step: "Diseño de la arquitectura de energía", description: "Diseñar la topología de conmutación de transferencia, SAI y distribución." },
        { step: "Instalación e integración", description: "Instalar e integrar con la infraestructura eléctrica de la instalación." },
        { step: "Puesta en marcha", description: "Pruebas de carga completa y conmutación por error." },
      ],
      typicalApplications: ["Centros de datos", "Instalaciones bancarias y financieras", "Cargas críticas gubernamentales e industriales"],
      faqs: [
        {
          question: "¿Cuál es la diferencia entre un ATS y un STS?",
          answer:
            "Un ATS (interruptor de transferencia automática) conmuta mecánicamente la carga entre dos fuentes de energía, normalmente con un breve tiempo de transferencia, mientras que un STS (interruptor de transferencia estática) utiliza conmutación de estado sólido para una transferencia casi instantánea, utilizado donde ni siquiera una interrupción momentánea es aceptable.",
        },
      ],
    },
    ru: {
      name: "Решение для критического электропитания",
      tagline: "Резервируемая и контролируемая архитектура питания от ввода до ИТ-нагрузки.",
      customerChallenge:
        "Объекты с критически важной миссией не могут допускать перебоев электропитания, что требует резервирования и мониторинга на каждом этапе — от ввода сети/генератора через ИБП, распределение и саму стойку.",
      solutionArchitecture:
        "Haisen проектирует резервируемые архитектуры питания, сочетающие переключение ATS/STS, модульные ИБП и интеллектуальные PDU, с мониторингом на всех этапах, чтобы операторы могли выявлять и устранять проблемы до того, как они повлияют на нагрузку.",
      systemComponents: [
        { name: "АВР / СВР", description: "Автоматическое и статическое переключение между источниками питания." },
        { name: "Модульный ИБП", description: "Резервированная защита питания по схеме N+X." },
        { name: "Интеллектуальный PDU", description: "Мониторинг на уровне розетки и удалённое переключение на стойке." },
      ],
      howItWorks: [
        "АВР/СВР автоматически переключает между основным и резервным вводами питания.",
        "Модульный ИБП кондиционирует и защищает питание со встроенным резервированием.",
        "Интеллектуальные PDU распределяют и контролируют питание вплоть до уровня розетки.",
      ],
      technicalAdvantages: ["Резервирование заложено на каждом этапе, а не только в ИБП", "Сквозная видимость питания", "Модульная масштабируемость по мере роста нагрузки"],
      deploymentProcess: [
        { step: "Определение целевого уровня резервирования", description: "Установление требуемого уровня резервирования (N, N+1, 2N)." },
        { step: "Проектирование архитектуры питания", description: "Проектирование топологии переключения, ИБП и распределения." },
        { step: "Монтаж и интеграция", description: "Установка и интеграция с электроинфраструктурой объекта." },
        { step: "Ввод в эксплуатацию", description: "Испытания под полной нагрузкой и при отказе." },
      ],
      typicalApplications: ["Дата-центры", "Банковские и финансовые объекты", "Государственные и промышленные критические нагрузки"],
      faqs: [
        {
          question: "В чём разница между АВР и СВР?",
          answer:
            "АВР (автоматический выключатель резерва) механически переключает нагрузку между двумя источниками питания, обычно с небольшим временем переключения, тогда как СВР (статический переключатель резерва) использует твердотельную коммутацию для практически мгновенного переключения — применяется там, где недопустим даже кратковременный перерыв.",
        },
      ],
    },
    zh: {
      name: "关键电力解决方案",
      tagline: "从市电到IT负载的冗余、可监控电力架构。",
      customerChallenge: "关键任务型设施无法容忍电力中断,需要从市电/发电机输入到UPS、配电及机柜本身的每一环节都具备冗余与监控能力。",
      solutionArchitecture:
        "海森设计集成ATS/STS转换开关、模块化UPS及智能PDU的冗余电力架构,实现端到端监控,使运营方能够在问题影响负载前及时发现并处理。",
      systemComponents: [
        { name: "ATS/STS", description: "电源间的自动及静态转换切换。" },
        { name: "模块化UPS", description: "N+X冗余电力保护。" },
        { name: "智能PDU", description: "机柜层面的出口级监控与远程切换。" },
      ],
      howItWorks: [
        "ATS/STS在主用与备用电源间自动切换。",
        "模块化UPS通过内置冗余对电力进行调节与保护。",
        "智能PDU将电力分配并监控至出口级别。",
      ],
      technicalAdvantages: ["冗余设计贯穿每一环节,而非仅限UPS", "端到端电力可视化", "随负载增长实现模块化扩容"],
      deploymentProcess: [
        { step: "冗余目标确定", description: "确定所需的冗余等级(N、N+1、2N)。" },
        { step: "电力架构设计", description: "设计转换开关、UPS与配电拓扑结构。" },
        { step: "安装集成", description: "安装并与设施电力基础设施集成。" },
        { step: "系统调试", description: "进行满载测试与故障切换测试。" },
      ],
      typicalApplications: ["数据中心", "银行与金融设施", "政府及工业关键负载"],
      faqs: [
        {
          question: "ATS与STS有何区别？",
          answer: "ATS(自动转换开关)以机械方式在两个电源间切换负载,通常存在短暂切换时间;而STS(静态转换开关)采用固态开关实现近乎瞬时的切换,适用于连片刻中断都无法接受的场景。",
        },
      ],
    },
  },

  "smart-power-distribution": {
    ar: {
      name: "حل توزيع الطاقة الذكي",
      tagline: "توزيع طاقة مرئي عبر الشبكة من اللوحة إلى المنفذ.",
      customerChallenge:
        "تحتاج فرق المنشأة وتكنولوجيا المعلومات إلى رؤية استهلاك الطاقة والقدرة على إدارة الحمل عن بُعد، لكن وحدات PDU التقليدية لا توفر مراقبة أو تحكماً عن بُعد، ما يفرض الاعتماد على زيارات الموقع اليدوية.",
      solutionArchitecture:
        "تنشر هايسِن وحدات PDU ذكية مع اتصال SNMP/Modbus/RS485 عبر المنشأة، تغذي منصة مراقبة مركزية لرؤية الطاقة والطاقة والبيئة في الوقت الفعلي مع تحكم عن بُعد بالمنفذ.",
      systemComponents: [
        { name: "PDU ذكي", description: "مراقبة وقياس وتبديل عن بُعد على مستوى المنفذ." },
        { name: "مستشعرات بيئية", description: "مراقبة درجة الحرارة والرطوبة عند الراك." },
        { name: "منصة المراقبة", description: "لوحة معلومات مركزية تجمع كل وحدات PDU المتصلة." },
      ],
      howItWorks: [
        "تُبلغ وحدات PDU الذكية عن بيانات التيار والجهد والطاقة والطاقة المستهلكة عبر الشبكة.",
        "تضيف المستشعرات البيئية سياق درجة الحرارة/الرطوبة عند الراك.",
        "تجمع منصة مركزية البيانات عبر جميع الراكات لرؤية وإنذارات على مستوى المنشأة.",
      ],
      technicalAdvantages: ["رؤية طاقة على مستوى المنشأة دون زيارات موقع", "تحكم عن بُعد على مستوى المنفذ للصيانة والاستجابة للحوادث", "تدعم البيانات تتبع PUE وتخطيط السعة"],
      deploymentProcess: [
        { step: "نشر PDU", description: "نشر وحدات PDU الذكية عبر الراكات المستهدفة." },
        { step: "دمج الشبكة", description: "توصيل وحدات PDU بشبكة المراقبة عبر SNMP/Modbus." },
        { step: "تكوين لوحة المعلومات", description: "تكوين العتبات والإنذارات والتقارير." },
      ],
      typicalApplications: ["استضافة مشتركة متعددة المستأجرين", "مراكز بيانات المؤسسات", "مواقع اتصالات موزعة"],
      faqs: [
        {
          question: "ما بروتوكولات الاتصال التي تدعمها وحدات PDU الذكية من هايسِن؟",
          answer:
            "تدعم وحدات PDU الذكية من هايسِن SNMP (v1/v2c/v3)، وModbus RTU/TCP، وRS485، وTCP/IP، ما يتيح التكامل مع معظم منصات DCIM وإدارة المباني.",
        },
      ],
    },
    fr: {
      name: "Solution de distribution électrique intelligente",
      tagline: "Distribution électrique visible sur le réseau, du tableau jusqu'à la prise.",
      customerChallenge:
        "Les équipes des installations et de l'informatique ont besoin de visibilité sur la consommation électrique et de la capacité à gérer la charge à distance, mais les PDU traditionnels n'offrent ni surveillance ni contrôle à distance, obligeant à des visites manuelles sur site.",
      solutionArchitecture:
        "Haisen déploie des PDU intelligents avec connectivité SNMP/Modbus/RS485 dans toute l'installation, alimentant une plateforme de surveillance centralisée pour une visibilité en temps réel de l'énergie, de la consommation et de l'environnement, avec contrôle des prises à distance.",
      systemComponents: [
        { name: "PDU intelligent", description: "Surveillance, mesure et commutation à distance au niveau des prises." },
        { name: "Capteurs environnementaux", description: "Surveillance de la température et de l'humidité au niveau de la baie." },
        { name: "Plateforme de surveillance", description: "Tableau de bord centralisé agrégeant tous les PDU connectés." },
      ],
      howItWorks: [
        "Les PDU intelligents rapportent les données de courant, tension, puissance et énergie sur le réseau.",
        "Les capteurs environnementaux ajoutent le contexte de température/humidité au niveau de la baie.",
        "Une plateforme centrale agrège les données de toutes les baies pour une visibilité et des alarmes à l'échelle de l'installation.",
      ],
      technicalAdvantages: ["Visibilité électrique à l'échelle de l'installation sans visites sur site", "Contrôle à distance au niveau des prises pour la maintenance et la réponse aux incidents", "Les données soutiennent le suivi du PUE et la planification de la capacité"],
      deploymentProcess: [
        { step: "Déploiement des PDU", description: "Déployer des PDU intelligents sur les baies cibles." },
        { step: "Intégration réseau", description: "Connecter les PDU au réseau de surveillance via SNMP/Modbus." },
        { step: "Configuration du tableau de bord", description: "Configurer les seuils, les alarmes et les rapports." },
      ],
      typicalApplications: ["Colocation multi-locataires", "Centres de données d'entreprise", "Sites télécoms distribués"],
      faqs: [
        {
          question: "Quels protocoles de communication les PDU intelligents Haisen prennent-ils en charge ?",
          answer:
            "Les PDU intelligents Haisen prennent en charge SNMP (v1/v2c/v3), Modbus RTU/TCP, RS485 et TCP/IP, permettant l'intégration avec la plupart des plateformes DCIM et de gestion technique du bâtiment.",
        },
      ],
    },
    es: {
      name: "Solución de distribución de energía inteligente",
      tagline: "Distribución de energía visible en red, desde el tablero hasta la toma.",
      customerChallenge:
        "Los equipos de instalaciones y TI necesitan visibilidad sobre el consumo de energía y la capacidad de gestionar la carga de forma remota, pero los PDU tradicionales no ofrecen monitoreo ni control remoto, lo que obliga a depender de visitas manuales al sitio.",
      solutionArchitecture:
        "Haisen despliega PDU inteligentes con conectividad SNMP/Modbus/RS485 en toda la instalación, alimentando una plataforma de monitoreo centralizada para visibilidad en tiempo real de energía, consumo y entorno, con control remoto de tomas.",
      systemComponents: [
        { name: "PDU inteligente", description: "Monitoreo, medición y conmutación remota a nivel de toma." },
        { name: "Sensores ambientales", description: "Monitoreo de temperatura y humedad en el rack." },
        { name: "Plataforma de monitoreo", description: "Panel centralizado que agrega todos los PDU conectados." },
      ],
      howItWorks: [
        "Los PDU inteligentes reportan datos de corriente, voltaje, potencia y energía a través de la red.",
        "Los sensores ambientales añaden contexto de temperatura/humedad en el rack.",
        "Una plataforma central agrega datos de todos los racks para visibilidad y alarmas en toda la instalación.",
      ],
      technicalAdvantages: ["Visibilidad de energía en toda la instalación sin visitas al sitio", "Control remoto a nivel de toma para mantenimiento y respuesta a incidentes", "Los datos respaldan el seguimiento de PUE y la planificación de capacidad"],
      deploymentProcess: [
        { step: "Implementación de PDU", description: "Desplegar PDU inteligentes en los racks objetivo." },
        { step: "Integración de red", description: "Conectar los PDU a la red de monitoreo vía SNMP/Modbus." },
        { step: "Configuración del panel", description: "Configurar umbrales, alarmas e informes." },
      ],
      typicalApplications: ["Colocación multiinquilino", "Centros de datos empresariales", "Sitios de telecomunicaciones distribuidos"],
      faqs: [
        {
          question: "¿Qué protocolos de comunicación admiten los PDU inteligentes de Haisen?",
          answer:
            "Los PDU inteligentes de Haisen admiten SNMP (v1/v2c/v3), Modbus RTU/TCP, RS485 y TCP/IP, permitiendo la integración con la mayoría de las plataformas DCIM y de gestión de edificios.",
        },
      ],
    },
    ru: {
      name: "Решение для интеллектуального распределения питания",
      tagline: "Сетевая видимость распределения питания от щита до розетки.",
      customerChallenge:
        "Службам эксплуатации и ИТ нужна видимость энергопотребления и возможность удалённого управления нагрузкой, но традиционные PDU не обеспечивают мониторинг или удалённое управление, вынуждая полагаться на ручные выезды на объект.",
      solutionArchitecture:
        "Haisen развёртывает интеллектуальные PDU с подключением по SNMP/Modbus/RS485 по всему объекту, передавая данные на централизованную платформу мониторинга для видимости питания, энергопотребления и среды в реальном времени с удалённым управлением розетками.",
      systemComponents: [
        { name: "Интеллектуальный PDU", description: "Мониторинг, измерение и удалённое переключение на уровне розетки." },
        { name: "Датчики среды", description: "Мониторинг температуры и влажности на стойке." },
        { name: "Платформа мониторинга", description: "Централизованная панель, объединяющая все подключённые PDU." },
      ],
      howItWorks: [
        "Интеллектуальные PDU передают по сети данные о токе, напряжении, мощности и энергопотреблении.",
        "Датчики среды добавляют контекст температуры/влажности на стойке.",
        "Центральная платформа агрегирует данные со всех стоек для видимости и сигнализации по всему объекту.",
      ],
      technicalAdvantages: ["Видимость энергопотребления по всему объекту без выездов на площадку", "Удалённое управление на уровне розетки для обслуживания и реагирования на инциденты", "Данные поддерживают отслеживание PUE и планирование мощности"],
      deploymentProcess: [
        { step: "Развёртывание PDU", description: "Установка интеллектуальных PDU на целевых стойках." },
        { step: "Сетевая интеграция", description: "Подключение PDU к сети мониторинга через SNMP/Modbus." },
        { step: "Настройка панели", description: "Настройка пороговых значений, сигнализации и отчётности." },
      ],
      typicalApplications: ["Многоарендный колокейшн", "Корпоративные ЦОД", "Распределённые телеком-объекты"],
      faqs: [
        {
          question: "Какие протоколы связи поддерживают интеллектуальные PDU Haisen?",
          answer:
            "Интеллектуальные PDU Haisen поддерживают SNMP (v1/v2c/v3), Modbus RTU/TCP, RS485 и TCP/IP, что позволяет интегрироваться с большинством платформ DCIM и управления зданием.",
        },
      ],
    },
    zh: {
      name: "智能配电解决方案",
      tagline: "从配电柜到出口端全程网络可视的配电系统。",
      customerChallenge: "设施与IT团队需要掌握用电情况并能够远程管理负载,但传统PDU不具备监控或远程控制能力,只能依赖人工现场巡检。",
      solutionArchitecture:
        "海森在设施内部署具备SNMP/Modbus/RS485连接能力的智能PDU,数据汇入集中监控平台,实现电力、能耗与环境的实时可视化及远程出口控制。",
      systemComponents: [
        { name: "智能PDU", description: "出口级监控、计量与远程切换。" },
        { name: "环境传感器", description: "机柜层面的温湿度监控。" },
        { name: "监控平台", description: "汇总所有联网PDU数据的集中式仪表盘。" },
      ],
      howItWorks: [
        "智能PDU通过网络上报电流、电压、功率及能耗数据。",
        "环境传感器为机柜提供温湿度背景信息。",
        "中央平台汇总各机柜数据,实现全设施可视化与告警。",
      ],
      technicalAdvantages: ["无需现场巡检即可实现全设施电力可视化", "支持出口级远程控制,便于运维与故障响应", "数据支持PUE跟踪及容量规划"],
      deploymentProcess: [
        { step: "PDU部署", description: "在目标机柜部署智能PDU。" },
        { step: "网络集成", description: "通过SNMP/Modbus将PDU接入监控网络。" },
        { step: "仪表盘配置", description: "配置阈值、告警及报表。" },
      ],
      typicalApplications: ["多租户托管", "企业数据中心", "分布式电信站点"],
      faqs: [
        {
          question: "海森智能PDU支持哪些通信协议？",
          answer: "海森智能PDU支持SNMP(v1/v2c/v3)、Modbus RTU/TCP、RS485及TCP/IP,可与大多数DCIM及楼宇管理平台集成。",
        },
      ],
    },
  },

  "energy-storage": {
    ar: {
      name: "حل تخزين الطاقة",
      tagline: "تخزين طاقة بالبطارية للمرونة وخفض الذروة والتكامل مع الطاقة المتجددة.",
      customerChallenge:
        "تحتاج المنشآت التي تواجه طاقة شبكة غير موثوقة، أو رسوم طلب مرتفعة، أو أهداف استدامة، إلى تخزين طاقة يتجاوز بطاريات UPS التقليدية لتوفير مرونة أطول مدة وإدارة تكاليف.",
      solutionArchitecture:
        "تدمج هايسِن راكات البطاريات وPCS وEMS في أنظمة تخزين طاقة بالبطارية بشكل خزانة أو حاوية، قابلة للتكوين للطاقة الاحتياطية أو خفض الذروة أو التكامل مع الطاقة المتجددة (الشمسية).",
      systemComponents: [
        { name: "راكات البطاريات", description: "وحدات بطارية ليثيوم بحجم يتناسب مع سعة الطاقة المطلوبة." },
        { name: "PCS", description: "نظام تحويل طاقة يدير الشحن/التفريغ وواجهة الشبكة." },
        { name: "EMS", description: "نظام إدارة طاقة يتحكم باستراتيجية التشغيل والمراقبة." },
      ],
      howItWorks: [
        "تخزن راكات البطاريات الطاقة من الشبكة أو مصادر متجددة.",
        "يحول PCS طاقة التيار المستمر المخزنة إلى تيار متردد للاستخدام في الموقع، ويدير الشحن.",
        "يطبق EMS استراتيجية التشغيل — احتياطي، أو خفض ذروة، أو تكامل متجدد — ويبلغ عن حالة النظام.",
      ],
      technicalAdvantages: ["استراتيجية تشغيل قابلة للتكوين عبر EMS", "خيارات نشر بشكل خزانة أو حاوية", "جاهز للتكامل مع الطاقة المتجددة"],
      deploymentProcess: [
        { step: "تقييم الطاقة وحالة الاستخدام", description: "تحديد السعة المطلوبة واستراتيجية التشغيل." },
        { step: "تحجيم النظام", description: "تحجيم البطارية وPCS وEMS وفق حالة الاستخدام." },
        { step: "التركيب", description: "نشر ESS بشكل خزانة أو حاوية في الموقع." },
        { step: "التشغيل", description: "التحقق من استراتيجية التشغيل والتكامل مع طاقة الموقع." },
      ],
      typicalApplications: ["مرونة مركز البيانات", "خفض ذروة صناعي", "مواقع الطاقة المتجددة"],
      faqs: [
        {
          question: "هل يمكن لنظام تخزين طاقة بالبطارية أن يحل محل UPS؟",
          answer:
            "يمكن لـ BESS أن يكمل، أو في بعض البُنى، يحل محل جزء من نظام بطارية UPS التقليدي، لكن الاثنين يخدمان أغراضاً أساسية مختلفة — بطاريات UPS مُحسَّنة لتحمل قصير المدة، بينما يُحجَّم BESS عادةً لاحتياطي أطول مدة أو خفض ذروة أو تكامل متجدد.",
        },
      ],
    },
    fr: {
      name: "Solution de stockage d'énergie",
      tagline: "Stockage d'énergie par batterie pour la résilience, l'écrêtage de charge et l'intégration des énergies renouvelables.",
      customerChallenge:
        "Les installations confrontées à une alimentation réseau peu fiable, des frais de demande élevés ou des objectifs de durabilité ont besoin d'un stockage d'énergie allant au-delà des batteries d'onduleur traditionnelles pour offrir une résilience de plus longue durée et une gestion des coûts.",
      solutionArchitecture:
        "Haisen intègre des racks de batteries, un PCS et un EMS dans des systèmes de stockage d'énergie par batterie en armoire ou conteneurisés, configurables pour l'alimentation de secours, l'écrêtage de charge ou l'intégration d'énergies renouvelables (solaire).",
      systemComponents: [
        { name: "Racks de batteries", description: "Modules de batteries au lithium dimensionnés selon la capacité énergétique requise." },
        { name: "PCS", description: "Système de conversion de puissance gérant la charge/décharge et l'interface réseau." },
        { name: "EMS", description: "Système de gestion de l'énergie contrôlant la stratégie d'exploitation et la surveillance." },
      ],
      howItWorks: [
        "Les racks de batteries stockent l'énergie du réseau ou de sources renouvelables.",
        "Le PCS convertit l'énergie CC stockée en CA pour l'usage du site et gère la charge.",
        "L'EMS applique la stratégie d'exploitation — secours, écrêtage de charge ou intégration renouvelable — et rapporte l'état du système.",
      ],
      technicalAdvantages: ["Stratégie d'exploitation configurable via l'EMS", "Options de déploiement en armoire ou conteneurisées", "Prêt pour l'intégration des énergies renouvelables"],
      deploymentProcess: [
        { step: "Évaluation de l'énergie et du cas d'usage", description: "Définir la capacité requise et la stratégie d'exploitation." },
        { step: "Dimensionnement du système", description: "Dimensionner la batterie, le PCS et l'EMS selon le cas d'usage." },
        { step: "Installation", description: "Déployer l'ESS en armoire ou conteneurisé sur site." },
        { step: "Mise en service", description: "Vérifier la stratégie d'exploitation et l'intégration avec l'alimentation du site." },
      ],
      typicalApplications: ["Résilience des centres de données", "Écrêtage de charge industriel", "Sites d'énergie renouvelable"],
      faqs: [
        {
          question: "Un système de stockage d'énergie par batterie peut-il remplacer un onduleur ?",
          answer:
            "Un BESS peut compléter, ou dans certaines architectures remplacer une partie, d'un système de batteries d'onduleur traditionnel, mais les deux servent des objectifs principaux différents — les batteries d'onduleur sont optimisées pour une autonomie de courte durée, tandis que le BESS est généralement dimensionné pour une sauvegarde de plus longue durée, l'écrêtage de charge ou l'intégration renouvelable.",
        },
      ],
    },
    es: {
      name: "Solución de almacenamiento de energía",
      tagline: "Almacenamiento de energía en baterías para resiliencia, reducción de picos e integración de renovables.",
      customerChallenge:
        "Las instalaciones que enfrentan energía de red poco fiable, cargos por demanda elevados u objetivos de sostenibilidad necesitan almacenamiento de energía que vaya más allá de las baterías SAI tradicionales para ofrecer mayor resiliencia y gestión de costos.",
      solutionArchitecture:
        "Haisen integra racks de baterías, PCS y EMS en sistemas de almacenamiento de energía en gabinete o en contenedor, configurables para energía de respaldo, reducción de picos o integración de renovables (solar).",
      systemComponents: [
        { name: "Racks de baterías", description: "Módulos de batería de litio dimensionados según la capacidad de energía requerida." },
        { name: "PCS", description: "Sistema de conversión de energía que gestiona la carga/descarga y la interfaz de red." },
        { name: "EMS", description: "Sistema de gestión de energía que controla la estrategia operativa y el monitoreo." },
      ],
      howItWorks: [
        "Los racks de baterías almacenan energía de la red o de fuentes renovables.",
        "El PCS convierte la energía de CC almacenada a CA para uso en el sitio y gestiona la carga.",
        "El EMS aplica la estrategia operativa —respaldo, reducción de picos o integración renovable— e informa el estado del sistema.",
      ],
      technicalAdvantages: ["Estrategia operativa configurable a través del EMS", "Opciones de implementación en gabinete o en contenedor", "Listo para integración de renovables"],
      deploymentProcess: [
        { step: "Evaluación de energía y caso de uso", description: "Definir la capacidad requerida y la estrategia operativa." },
        { step: "Dimensionamiento del sistema", description: "Dimensionar la batería, el PCS y el EMS según el caso de uso." },
        { step: "Instalación", description: "Desplegar el ESS en gabinete o en contenedor en el sitio." },
        { step: "Puesta en marcha", description: "Verificar la estrategia operativa y la integración con la energía del sitio." },
      ],
      typicalApplications: ["Resiliencia de centros de datos", "Reducción de picos industrial", "Sitios de energía renovable"],
      faqs: [
        {
          question: "¿Puede un sistema de almacenamiento de energía en baterías reemplazar a un SAI?",
          answer:
            "Un BESS puede complementar, o en algunas arquitecturas reemplazar parte de, un sistema de baterías SAI tradicional, pero ambos tienen propósitos principales diferentes: las baterías SAI están optimizadas para autonomía de corta duración, mientras que el BESS suele dimensionarse para respaldo de mayor duración, reducción de picos o integración renovable.",
        },
      ],
    },
    ru: {
      name: "Решение для накопления энергии",
      tagline: "Аккумуляторные системы накопления энергии для надёжности, выравнивания нагрузки и интеграции ВИЭ.",
      customerChallenge:
        "Объектам, сталкивающимся с ненадёжным сетевым питанием, высокими тарифами за пиковую мощность или целями устойчивого развития, требуется накопление энергии, выходящее за рамки традиционных батарей ИБП, для обеспечения более длительной устойчивости и управления затратами.",
      solutionArchitecture:
        "Haisen интегрирует аккумуляторные стойки, PCS и EMS в шкафные или контейнерные системы накопления энергии, настраиваемые для резервного питания, выравнивания пиковой нагрузки или интеграции возобновляемых источников (солнечной энергии).",
      systemComponents: [
        { name: "Аккумуляторные стойки", description: "Литиевые аккумуляторные модули, рассчитанные под требуемую ёмкость энергии." },
        { name: "PCS", description: "Система преобразования мощности, управляющая зарядом/разрядом и сетевым интерфейсом." },
        { name: "EMS", description: "Система управления энергией, контролирующая стратегию эксплуатации и мониторинг." },
      ],
      howItWorks: [
        "Аккумуляторные стойки накапливают энергию от сети или возобновляемых источников.",
        "PCS преобразует накопленную энергию постоянного тока в переменный ток для использования на объекте и управляет зарядом.",
        "EMS применяет стратегию эксплуатации — резерв, выравнивание пиков или интеграция ВИЭ — и сообщает о состоянии системы.",
      ],
      technicalAdvantages: ["Настраиваемая стратегия эксплуатации через EMS", "Варианты развёртывания в шкафу или контейнере", "Готовность к интеграции возобновляемых источников"],
      deploymentProcess: [
        { step: "Оценка энергопотребления и сценария использования", description: "Определение требуемой ёмкости и стратегии эксплуатации." },
        { step: "Расчёт мощности системы", description: "Подбор батареи, PCS и EMS под сценарий использования." },
        { step: "Монтаж", description: "Развёртывание шкафной или контейнерной ESS на объекте." },
        { step: "Ввод в эксплуатацию", description: "Проверка стратегии эксплуатации и интеграции с питанием объекта." },
      ],
      typicalApplications: ["Надёжность электропитания ЦОД", "Промышленное выравнивание пиковой нагрузки", "Объекты возобновляемой энергетики"],
      faqs: [
        {
          question: "Может ли аккумуляторная система накопления энергии заменить ИБП?",
          answer:
            "BESS может дополнять или, в некоторых архитектурах, частично заменять традиционную систему батарей ИБП, но у них разные основные задачи — батареи ИБП оптимизированы для кратковременного удержания нагрузки, тогда как BESS обычно рассчитывается на более длительное резервирование, выравнивание пиков или интеграцию ВИЭ.",
        },
      ],
    },
    zh: {
      name: "储能解决方案",
      tagline: "电池储能系统,提升供电韧性、实现削峰填谷并支持新能源接入。",
      customerChallenge: "面临电网不稳定、高需量电费或可持续发展目标的设施,需要超越传统UPS电池能力的储能系统,以提供更长时间的供电韧性与成本管理。",
      solutionArchitecture:
        "海森将电池组、PCS(电力转换系统)与EMS(能量管理系统)集成为柜式或集装箱式电池储能系统,可配置用于备用电源、削峰填谷或新能源(光伏)接入。",
      systemComponents: [
        { name: "电池组", description: "根据所需储能容量配置的锂电池模块。" },
        { name: "PCS", description: "负责充放电管理及并网接口的电力转换系统。" },
        { name: "EMS", description: "控制运行策略与监控的能量管理系统。" },
      ],
      howItWorks: [
        "电池组存储来自电网或新能源的电力。",
        "PCS将存储的直流电转换为交流电供现场使用,并管理充电过程。",
        "EMS执行运行策略——备用、削峰填谷或新能源接入——并上报系统状态。",
      ],
      technicalAdvantages: ["通过EMS实现可配置的运行策略", "支持柜式或集装箱式部署", "具备新能源接入能力"],
      deploymentProcess: [
        { step: "能耗与应用场景评估", description: "确定所需容量及运行策略。" },
        { step: "系统容量设计", description: "根据应用场景配置电池、PCS及EMS容量。" },
        { step: "系统安装", description: "在现场部署柜式或集装箱式储能系统。" },
        { step: "系统调试", description: "验证运行策略及与现场电力系统的集成。" },
      ],
      typicalApplications: ["数据中心供电韧性", "工业削峰填谷", "新能源场站"],
      faqs: [
        {
          question: "电池储能系统能否替代UPS？",
          answer: "BESS可以补充甚至在某些架构中替代部分传统UPS电池系统,但两者的主要定位不同——UPS电池针对短时间的过渡供电进行优化,而BESS通常按更长时间的备用供电、削峰填谷或新能源接入需求进行容量设计。",
        },
      ],
    },
  },
};

export function getSolutionContent(
  slug: string,
  locale: Locale,
  fallback: SolutionContent
): SolutionContent {
  if (locale === "en") return fallback;
  return solutionContentTranslations[slug]?.[locale as TranslatedLocale] ?? fallback;
}

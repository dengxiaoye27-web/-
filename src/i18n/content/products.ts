import { Locale } from "../config";

export interface ProductContent {
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  keyFeatures: string[];
  specGroups: { title: string; specs: { label: string; value: string }[] }[];
  applications: string[];
  customizationOptions: string[];
  standards: string[];
  faqs: { question: string; answer: string }[];
}

type TranslatedLocale = Exclude<Locale, "en">;

// Product content translations, keyed by product slug then locale.
// English lives directly in src/data/products.ts and is used as the
// fallback/source — not duplicated here. Populated category by
// category; see SITEMAP.md / CLAUDE.md for rollout status.
export const productContentTranslations: Record<string, Partial<Record<TranslatedLocale, ProductContent>>> = {
  // ---------------- Power Distribution ----------------
  pdu: {
    ar: {
      name: "وحدة توزيع طاقة للراك (PDU)",
      shortName: "PDU للراك",
      tagline: "توزيع طاقة موثوق على مستوى الراك لخزانات مراكز البيانات والاتصالات.",
      overview:
        "توزع وحدة PDU للراك من واندتونغ طاقة المرافق أو UPS إلى معدات تكنولوجيا المعلومات داخل الخزانة. تُصنَّع بإصدارات أساسية ومقاسة ومراقَبة وقابلة للتحكم، بتكوينات أحادية وثلاثية الطور، ومتوفرة بصيغ تركيب رأسية (0U) وأفقية للراك في بيئات مراكز البيانات والاتصالات والصناعة.",
      keyFeatures: [
        "تكوينات أحادية وثلاثية الطور",
        "صيغ تركيب رأسية (0U) وأفقية",
        "خيارات منافذ IEC C13/C19 وحسب الدولة",
        "قضيب نحاسي عالي الجودة لمقاومة منخفضة وارتفاع حراري أقل",
        "حماية من الحمل الزائد والتيار المفاجئ على كل دائرة",
        "تخطيط منافذ مخصص وطول كابل حسب الطلب",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "100–125 فولت / 200–250 فولت / 380–415 فولت" },
            { label: "التيار المقنن", value: "16A / 20A / 32A / 63A" },
            { label: "التردد المقنن", value: "50/60 هرتز" },
            { label: "الطور", value: "أحادي الطور / ثلاثي الطور" },
          ],
        },
        {
          title: "الدخل / الخرج",
          specs: [
            { label: "قابس الدخل", value: "IEC 60309، C20، حسب الدولة" },
            { label: "مقابس الخرج", value: "IEC C13، C19، Schuko، عالمي، مخصص" },
            { label: "عدد المنافذ", value: "6–36 منفذاً لكل وحدة" },
          ],
        },
        {
          title: "ميكانيكي",
          specs: [
            { label: "التركيب", value: "0U رأسي / 1U–2U أفقي" },
            { label: "مادة الهيكل", value: "صلب مدرفل على البارد، مطلي بالمسحوق" },
            { label: "الحماية", value: "قاطع دارة مصغر لكل مجموعة دائرة، حماية من التيار المفاجئ" },
          ],
        },
      ],
      applications: ["راكات تكنولوجيا المعلومات في مراكز البيانات", "غرف معدات الاتصالات", "خزانات الاستضافة المشتركة", "خزانات التحكم الصناعي"],
      customizationOptions: ["نوع المنافذ وكميتها", "قابس الدخل وطول الكابل", "تجميع قواطع الدارات", "علامة تجارية / وسم مخصص", "تعبئة OEM / ODM"],
      standards: ["مصمم وفق معايير موصلات IEC 60320 / IEC 60309", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما استخدام PDU الراك؟",
          answer:
            "توزع وحدة PDU للراك (وحدة توزيع الطاقة) الطاقة الواردة من UPS أو تغذية المرافق إلى عدة قطع من معدات تكنولوجيا المعلومات المثبتة في راك خادم أو شبكة، لتحل محل عدة أسلاك طاقة فردية بنقطة توزيع واحدة منظمة ومحمية.",
        },
        {
          question: "ما الفرق بين PDU الأساسي وPDU المقاس أو المراقَب؟",
          answer:
            "يوزع PDU الأساسي الطاقة فقط. يضيف PDU المقاس شاشة محلية للتيار/الجهد. يضيف PDU المراقَب مراقبة عن بُعد عبر الشبكة لبيانات الطاقة والبيئة. يضيف PDU القابل للتحكم القدرة على تشغيل/إيقاف المنافذ الفردية عن بُعد.",
        },
        {
          question: "هل يمكن لواندتونغ تخصيص تكوين منافذ PDU؟",
          answer:
            "نعم. واندتونغ مُصنّع مباشر من المصنع ويُكوِّن نوع المنافذ وكميتها وقابس الدخل وتجميع قواطع الدارات وطول الكابل بما يتناسب مع المواصفات الكهربائية والراك لكل مشروع، بما في ذلك العلامة التجارية OEM/ODM.",
        },
      ],
    },
    fr: {
      name: "PDU en rack (unité de distribution électrique)",
      shortName: "PDU en rack",
      tagline: "Distribution électrique fiable au niveau du rack pour les baies de centres de données et de télécommunications.",
      overview:
        "Le PDU en rack Wandtung distribue l'alimentation réseau ou onduleur aux équipements informatiques à l'intérieur d'une baie. Il est fabriqué en versions basique, mesurée, surveillée et commutable, en configurations monophasées et triphasées, et disponible en formats de montage vertical (0U) et horizontal pour les environnements de centres de données, télécoms et industriels.",
      keyFeatures: [
        "Configurations monophasées et triphasées",
        "Formats de montage vertical (0U) et horizontal",
        "Options de prises IEC C13/C19 et spécifiques au pays",
        "Barre omnibus en cuivre haute qualité pour une faible impédance et une faible élévation de température",
        "Protection contre les surcharges et les surtensions sur chaque circuit",
        "Disposition de prises personnalisée et longueur de câble sur demande",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "100–125V / 200–250V / 380–415V" },
            { label: "Courant nominal", value: "16A / 20A / 32A / 63A" },
            { label: "Fréquence nominale", value: "50/60 Hz" },
            { label: "Phase", value: "Monophasé / Triphasé" },
          ],
        },
        {
          title: "Entrée / Sortie",
          specs: [
            { label: "Fiche d'entrée", value: "IEC 60309, C20, spécifique au pays" },
            { label: "Prises de sortie", value: "IEC C13, C19, Schuko, universelle, personnalisée" },
            { label: "Nombre de prises", value: "6 à 36 prises par unité" },
          ],
        },
        {
          title: "Mécanique",
          specs: [
            { label: "Montage", value: "0U vertical / 1U–2U horizontal" },
            { label: "Matériau du boîtier", value: "Acier laminé à froid, revêtu par poudre" },
            { label: "Protection", value: "Disjoncteur par groupe de circuits, protection contre les surtensions" },
          ],
        },
      ],
      applications: ["Baies informatiques de centres de données", "Salles d'équipements télécoms", "Baies de colocation", "Armoires de contrôle industriel"],
      customizationOptions: ["Type et quantité de prises", "Fiche d'entrée et longueur de câble", "Groupement des disjoncteurs", "Marquage / étiquetage personnalisé", "Conditionnement OEM / ODM"],
      standards: ["Conçu selon les normes de connecteurs IEC 60320 / IEC 60309", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "À quoi sert un PDU en rack ?",
          answer:
            "Un PDU en rack (unité de distribution électrique) distribue l'alimentation entrante d'un onduleur ou du réseau à plusieurs équipements informatiques montés dans une baie serveur ou réseau, remplaçant plusieurs cordons d'alimentation individuels par un point de distribution unique, organisé et protégé.",
        },
        {
          question: "Quelle est la différence entre un PDU basique et un PDU mesuré ou surveillé ?",
          answer:
            "Un PDU basique distribue uniquement l'alimentation. Un PDU mesuré ajoute un affichage local du courant/de la tension. Un PDU surveillé ajoute une surveillance à distance, basée sur le réseau, des données d'alimentation et environnementales. Un PDU commutable ajoute la possibilité d'allumer/éteindre à distance des prises individuelles.",
        },
        {
          question: "Wandtung peut-elle personnaliser la configuration des prises du PDU ?",
          answer:
            "Oui. Wandtung est un fabricant direct en usine et configure le type et la quantité de prises, la fiche d'entrée, le groupement des disjoncteurs et la longueur de câble selon les spécifications électriques et de baie de chaque projet, y compris le marquage OEM/ODM.",
        },
      ],
    },
    es: {
      name: "PDU de rack (unidad de distribución de energía)",
      shortName: "PDU de rack",
      tagline: "Distribución de energía fiable a nivel de rack para gabinetes de centros de datos y telecomunicaciones.",
      overview:
        "El PDU de rack de Wandtung distribuye energía de red o SAI a los equipos de TI dentro de un gabinete. Se fabrica en versiones básica, medida, monitoreada y conmutable, en configuraciones monofásicas y trifásicas, y está disponible en formatos de montaje vertical (0U) y horizontal para entornos de centros de datos, telecomunicaciones e industriales.",
      keyFeatures: [
        "Configuraciones monofásicas y trifásicas",
        "Formatos de montaje vertical (0U) y horizontal",
        "Opciones de tomas IEC C13/C19 y específicas del país",
        "Barra colectora de cobre de alta calidad para baja impedancia y bajo aumento de calor",
        "Protección contra sobrecarga y sobretensión en cada circuito",
        "Disposición de tomas personalizada y longitud de cable bajo pedido",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "100–125V / 200–250V / 380–415V" },
            { label: "Corriente nominal", value: "16A / 20A / 32A / 63A" },
            { label: "Frecuencia nominal", value: "50/60 Hz" },
            { label: "Fase", value: "Monofásico / Trifásico" },
          ],
        },
        {
          title: "Entrada / Salida",
          specs: [
            { label: "Enchufe de entrada", value: "IEC 60309, C20, específico del país" },
            { label: "Tomas de salida", value: "IEC C13, C19, Schuko, universal, personalizada" },
            { label: "Número de tomas", value: "6–36 tomas por unidad" },
          ],
        },
        {
          title: "Mecánico",
          specs: [
            { label: "Montaje", value: "0U vertical / 1U–2U horizontal" },
            { label: "Material de la carcasa", value: "Acero laminado en frío, recubierto en polvo" },
            { label: "Protección", value: "MCB por grupo de circuito, protección contra sobretensión" },
          ],
        },
      ],
      applications: ["Racks de TI de centros de datos", "Salas de equipos de telecomunicaciones", "Gabinetes de colocación", "Gabinetes de control industrial"],
      customizationOptions: ["Tipo y cantidad de tomas", "Enchufe de entrada y longitud de cable", "Agrupación de disyuntores", "Marca / etiquetado personalizado", "Empaque OEM / ODM"],
      standards: ["Diseñado según los estándares de conectores IEC 60320 / IEC 60309", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Para qué se utiliza un PDU de rack?",
          answer:
            "Un PDU de rack (unidad de distribución de energía) distribuye la energía entrante de un SAI o de la red a múltiples equipos de TI montados en un rack de servidor o de red, reemplazando múltiples cables de alimentación individuales por un único punto de distribución organizado y protegido.",
        },
        {
          question: "¿Cuál es la diferencia entre un PDU básico y uno medido o monitoreado?",
          answer:
            "Un PDU básico solo distribuye energía. Un PDU medido añade una pantalla local de corriente/voltaje. Un PDU monitoreado añade monitoreo remoto basado en red de los datos de energía y ambientales. Un PDU conmutable añade la capacidad de encender/apagar tomas individuales de forma remota.",
        },
        {
          question: "¿Puede Wandtung personalizar la configuración de tomas del PDU?",
          answer:
            "Sí. Wandtung es un fabricante directo de fábrica y configura el tipo y cantidad de tomas, el enchufe de entrada, la agrupación de disyuntores y la longitud del cable según la especificación eléctrica y de rack de cada proyecto, incluyendo el marcado OEM/ODM.",
        },
      ],
    },
    ru: {
      name: "Стоечный PDU (блок распределения питания)",
      shortName: "Стоечный PDU",
      tagline: "Надёжное распределение питания на уровне стойки для шкафов ЦОД и телекоммуникаций.",
      overview:
        "Стоечный PDU Wandtung распределяет питание от сети или ИБП на ИТ-оборудование внутри шкафа. Выпускается в базовой, измеряемой, контролируемой и коммутируемой модификациях, в однофазном и трёхфазном исполнении, доступен в вертикальном (0U) и горизонтальном стоечном форм-факторах для ЦОД, телекоммуникационных и промышленных сред.",
      keyFeatures: [
        "Однофазное и трёхфазное исполнение",
        "Вертикальный (0U) и горизонтальный форм-фактор",
        "Варианты розеток IEC C13/C19 и под конкретную страну",
        "Медная шина высокого качества для низкого импеданса и минимального нагрева",
        "Защита от перегрузки и импульсных перенапряжений на каждой линии",
        "Индивидуальная компоновка розеток и длина кабеля по запросу",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "100–125В / 200–250В / 380–415В" },
            { label: "Номинальный ток", value: "16A / 20A / 32A / 63A" },
            { label: "Номинальная частота", value: "50/60 Гц" },
            { label: "Фаза", value: "Однофазный / Трёхфазный" },
          ],
        },
        {
          title: "Вход / Выход",
          specs: [
            { label: "Входная вилка", value: "IEC 60309, C20, под конкретную страну" },
            { label: "Выходные розетки", value: "IEC C13, C19, Schuko, универсальные, под заказ" },
            { label: "Количество розеток", value: "6–36 розеток на устройство" },
          ],
        },
        {
          title: "Механические характеристики",
          specs: [
            { label: "Монтаж", value: "0U вертикальный / 1U–2U горизонтальный" },
            { label: "Материал корпуса", value: "Холоднокатаная сталь, порошковое покрытие" },
            { label: "Защита", value: "Автомат на каждую группу цепей, защита от перенапряжений" },
          ],
        },
      ],
      applications: ["ИТ-стойки ЦОД", "Помещения телеком-оборудования", "Шкафы колокейшн", "Промышленные шкафы управления"],
      customizationOptions: ["Тип и количество розеток", "Входная вилка и длина кабеля", "Группировка автоматов", "Индивидуальный брендинг/маркировка", "OEM/ODM упаковка"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60320 / IEC 60309", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Для чего используется стоечный PDU?",
          answer:
            "Стоечный PDU (блок распределения питания) распределяет входящее питание от ИБП или сети на несколько единиц ИТ-оборудования, установленного в серверной или сетевой стойке, заменяя множество отдельных кабелей питания единой организованной и защищённой точкой распределения.",
        },
        {
          question: "В чём разница между базовым PDU и измеряемым или контролируемым?",
          answer:
            "Базовый PDU только распределяет питание. Измеряемый PDU добавляет локальный дисплей тока/напряжения. Контролируемый PDU добавляет удалённый сетевой мониторинг питания и параметров среды. Коммутируемый PDU добавляет возможность удалённого включения/выключения отдельных розеток.",
        },
        {
          question: "Может ли Wandtung настроить конфигурацию розеток PDU?",
          answer:
            "Да. Wandtung является прямым заводским производителем и настраивает тип и количество розеток, входную вилку, группировку автоматов и длину кабеля под электрические и стоечные требования каждого проекта, включая брендинг OEM/ODM.",
        },
      ],
    },
    zh: {
      name: "机架式PDU(配电单元)",
      shortName: "机架式PDU",
      tagline: "为数据中心与电信机柜提供可靠的机架级配电。",
      overview:
        "万电通机架式PDU将市电或UPS电力分配至机柜内的IT设备。产品分为基础型、计量型、监控型及可控开关型,支持单相与三相配置,并提供垂直(0U)与水平机架安装形式,适用于数据中心、电信及工业环境。",
      keyFeatures: [
        "单相与三相配置",
        "垂直(0U)与水平安装形式",
        "IEC C13/C19及国家标准插座选项",
        "高品质铜排,低阻抗、低温升",
        "每回路均配备过载与浪涌保护",
        "可按需定制插座布局与线缆长度",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "100–125V / 200–250V / 380–415V" },
            { label: "额定电流", value: "16A / 20A / 32A / 63A" },
            { label: "额定频率", value: "50/60 Hz" },
            { label: "相数", value: "单相 / 三相" },
          ],
        },
        {
          title: "输入/输出",
          specs: [
            { label: "输入插头", value: "IEC 60309、C20、国家标准" },
            { label: "输出插座", value: "IEC C13、C19、Schuko、通用、定制" },
            { label: "插座数量", value: "每台6–36路" },
          ],
        },
        {
          title: "机械结构",
          specs: [
            { label: "安装方式", value: "0U垂直 / 1U–2U水平" },
            { label: "外壳材质", value: "冷轧钢板,喷塑处理" },
            { label: "保护", value: "每组回路配备小型断路器,配备浪涌保护" },
          ],
        },
      ],
      applications: ["数据中心IT机柜", "电信设备间", "托管机柜", "工业控制柜"],
      customizationOptions: ["插座类型与数量", "输入插头与线缆长度", "断路器分组", "定制品牌/标识", "OEM/ODM包装"],
      standards: ["按IEC 60320/IEC 60309连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "机架式PDU的用途是什么？",
          answer: "机架式PDU(配电单元)将来自UPS或市电的电力分配至安装在服务器或网络机架内的多台IT设备,以一个集中、有序且受保护的配电点取代多根独立电源线。",
        },
        {
          question: "基础型PDU与计量型或监控型PDU有何区别？",
          answer: "基础型PDU仅负责配电。计量型PDU增加了本地电流/电压显示。监控型PDU增加了基于网络的远程电力及环境数据监控。可控开关型PDU则进一步增加了远程独立开关各插座的能力。",
        },
        {
          question: "万电通能否定制PDU插座配置？",
          answer: "可以。万电通作为工厂直营制造商,可根据每个项目的电气与机柜规格定制插座类型、数量、输入插头、断路器分组及线缆长度,并支持OEM/ODM品牌定制。",
        },
      ],
    },
  },

  "schuko-pdu": {
    ar: {
      name: "وحدة PDU بمقبس ألماني (شوكو)",
      shortName: "PDU شوكو",
      tagline: "وحدة توزيع طاقة للراك 1U بمنافذ شوكو الألمانية القياسية لخزانات الأسواق الأوروبية وCEE.",
      overview:
        "وحدة PDU شوكو من واندتونغ هي وحدة توزيع طاقة للراك بارتفاع 1U مزودة بمنافذ ألمانية قياسية (شوكو/CEE 7/3)، ومفتاح طاقة مضاء محمي من الحمل الزائد، ووحدة حماية من التيار المفاجئ (SPD) مدمجة، مصممة لخزانات مراكز البيانات والاتصالات في الأسواق الأوروبية ومنطقة CEE. تُركَّب أفقياً أو رأسياً، وتأتي بكابل طاقة شوكو متين، ومتوفرة بهيكل أسود قياسي أو هيكل برتقالي مخصص.",
      keyFeatures: [
        "ثمانية منافذ ألمانية قياسية (شوكو/CEE 7/3)",
        "مفتاح طاقة مضاء بحماية تلقائية من الحمل الزائد",
        "وحدة حماية SPD من التيار المفاجئ مدمجة بهيكل مقاوم للحريق",
        "هيكل ألومنيوم متين للتركيب في الراك بارتفاع 1U أفقياً أو رأسياً",
        "كابل طاقة شوكو 16A، نواة نحاسية 1.5 مم²، هيكل قابس بمعيار VDE",
        "هيكل أسود قياسي أو برتقالي مخصص؛ متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "230 فولت" },
            { label: "التيار المقنن", value: "16A" },
            { label: "القدرة المقننة", value: "4000 واط" },
            { label: "التردد المقنن", value: "50 هرتز" },
          ],
        },
        {
          title: "الدخل / الخرج",
          specs: [
            { label: "قابس الدخل", value: "قابس شوكو (CEE 7/7) بزاوية 16A" },
            { label: "منافذ الخرج", value: "8 × منافذ ألمانية قياسية (شوكو CEE 7/3)" },
            { label: "الكابل", value: "نواة نحاسية 1.5 مم²، هيكل بمعيار VDE، أطوال مخصصة متاحة" },
          ],
        },
        {
          title: "الهيكل والحماية",
          specs: [
            { label: "التركيب", value: "راك 1U، أفقي أو رأسي" },
            { label: "مادة الهيكل", value: "سبيكة ألومنيوم" },
            { label: "لون الهيكل", value: "أسود (قياسي) / برتقالي (مخصص)" },
            { label: "الحماية", value: "مفتاح مضاء بحماية من الحمل الزائد، حماية SPD من التيار المفاجئ، هيكل مقاوم للحريق" },
          ],
        },
      ],
      applications: [
        "خزانات مراكز البيانات في الأسواق الأوروبية وCEE",
        "غرف معدات الاتصالات في مناطق معيار شوكو",
        "خزانات الاستضافة المشتركة",
        "خزانات التحكم الصناعي والشبكي",
      ],
      customizationOptions: [
        "لون الهيكل (أسود / برتقالي / مخصص)",
        "عدد المنافذ وطول الكابل",
        "قابس الدخل وطول السلك",
        "علامة تجارية/تصنيف مخصص",
        "تعبئة OEM/ODM",
      ],
      standards: ["مصمم وفق معايير موصلات CEE 7/3 (شوكو) وVDE", "الشهادات متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما هي وحدة PDU شوكو وأين تُستخدم؟",
          answer:
            "وحدة PDU شوكو هي وحدة توزيع طاقة للراك مزودة بمنافذ ألمانية قياسية (شوكو/CEE 7/3)، وهي نوع المقبس القياسي المستخدم في ألمانيا ومعظم أوروبا القارية. تُستخدم لتوزيع طاقة الراك على معدات تقنية المعلومات المزودة بكابلات طاقة من نوع شوكو.",
        },
        {
          question: "هل تتضمن وحدة PDU شوكو حماية من التيار المفاجئ؟",
          answer:
            "نعم. تتضمن كل وحدة وحدة حماية SPD (جهاز حماية من التيار المفاجئ) مدمجة بهيكل مقاوم للحريق، إلى جانب مفتاح مضاء بحماية تلقائية من الحمل الزائد.",
        },
        {
          question: "هل يمكن تخصيص لون الهيكل أو تخطيط المنافذ؟",
          answer:
            "نعم. واندتونغ مُصنّع مباشر من المصنع، ويوفر وحدة PDU شوكو بهيكل أسود قياسي أو برتقالي مخصص، مع تكوين عدد المنافذ وطول الكابل والعلامة التجارية حسب كل مشروع، بما في ذلك OEM/ODM.",
        },
      ],
    },
    fr: {
      name: "PDU aux normes allemandes (Schuko)",
      shortName: "PDU Schuko",
      tagline: "PDU montable en rack 1U à prises Schuko aux normes allemandes pour armoires des marchés européens et CEE.",
      overview:
        "Le PDU Schuko Wandtung est une unité de distribution d'énergie montable en rack 1U équipée de prises aux normes allemandes (Schuko/CEE 7/3), d'un interrupteur lumineux protégé contre les surcharges et d'un module de protection contre les surtensions intégré, conçu pour les armoires de centres de données et de télécommunications des marchés européens et CEE. Il se monte horizontalement ou verticalement, est livré avec un cordon d'alimentation Schuko robuste, et est disponible en boîtier noir standard ou orange personnalisé.",
      keyFeatures: [
        "Huit prises aux normes allemandes (Schuko/CEE 7/3)",
        "Interrupteur à bascule lumineux avec protection automatique contre les surcharges",
        "Module de protection contre les surtensions (SPD) intégré à coque ignifuge",
        "Boîtier en aluminium durable pour montage en rack 1U horizontal ou vertical",
        "Cordon d'alimentation Schuko 16A, âme cuivre 1,5 mm², coque de fiche de type VDE",
        "Boîtier noir standard ou orange personnalisé ; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "230V" },
            { label: "Courant nominal", value: "16A" },
            { label: "Puissance nominale", value: "4000W" },
            { label: "Fréquence nominale", value: "50 Hz" },
          ],
        },
        {
          title: "Entrée / Sortie",
          specs: [
            { label: "Fiche d'entrée", value: "Fiche Schuko coudée (CEE 7/7) 16A" },
            { label: "Prises de sortie", value: "8 × prises aux normes allemandes (Schuko CEE 7/3)" },
            { label: "Câble", value: "Âme cuivre 1,5 mm², coque de type VDE, longueurs personnalisées disponibles" },
          ],
        },
        {
          title: "Mécanique et protection",
          specs: [
            { label: "Montage", value: "Rack 1U, vertical ou horizontal" },
            { label: "Matériau du boîtier", value: "Alliage d'aluminium" },
            { label: "Couleur du boîtier", value: "Noir (standard) / Orange (personnalisé)" },
            { label: "Protection", value: "Interrupteur lumineux contre les surcharges, protection SPD contre les surtensions, coque ignifuge" },
          ],
        },
      ],
      applications: [
        "Racks de centres de données des marchés européens et CEE",
        "Salles techniques télécoms dans les régions à norme Schuko",
        "Armoires de colocation",
        "Armoires de contrôle industriel et réseau",
      ],
      customizationOptions: [
        "Couleur du boîtier (noir / orange / personnalisée)",
        "Nombre de prises et longueur de câble",
        "Fiche d'entrée et longueur de cordon",
        "Marquage / étiquetage personnalisé",
        "Conditionnement OEM / ODM",
      ],
      standards: ["Conçu selon les normes de connecteurs CEE 7/3 (Schuko) et VDE", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Qu'est-ce qu'un PDU Schuko et où est-il utilisé ?",
          answer:
            "Un PDU Schuko est une unité de distribution d'énergie de rack équipée de prises aux normes allemandes (Schuko/CEE 7/3), le type de prise standard utilisé en Allemagne et dans une grande partie de l'Europe continentale. Il sert à distribuer l'alimentation du rack aux équipements informatiques dotés de cordons d'alimentation de type Schuko.",
        },
        {
          question: "Le PDU Schuko inclut-il une protection contre les surtensions ?",
          answer:
            "Oui. Chaque unité inclut un module SPD (dispositif de protection contre les surtensions) intégré à coque ignifuge, ainsi qu'un interrupteur à bascule lumineux avec protection automatique contre les surcharges.",
        },
        {
          question: "La couleur du boîtier ou la disposition des prises peuvent-elles être personnalisées ?",
          answer:
            "Oui. Wandtung est un fabricant direct d'usine et propose le PDU Schuko en boîtier noir standard ou orange personnalisé, avec le nombre de prises, la longueur du câble et le marquage configurés selon chaque projet, y compris en OEM/ODM.",
        },
      ],
    },
    es: {
      name: "PDU de estándar alemán (Schuko)",
      shortName: "PDU Schuko",
      tagline: "PDU de montaje en rack 1U con tomas Schuko de estándar alemán para gabinetes de mercados europeos y CEE.",
      overview:
        "El PDU Schuko de Wandtung es una unidad de distribución de energía de montaje en rack 1U equipada con tomas de estándar alemán (Schuko/CEE 7/3), un interruptor de encendido iluminado con protección contra sobrecargas y un módulo de protección contra sobretensiones integrado, diseñado para gabinetes de centros de datos y telecomunicaciones de mercados europeos y CEE. Se monta horizontal o verticalmente, incluye un cable de alimentación Schuko de servicio pesado y está disponible en carcasa negra estándar o naranja personalizada.",
      keyFeatures: [
        "Ocho tomas de estándar alemán (Schuko/CEE 7/3)",
        "Interruptor basculante iluminado con protección automática contra sobrecargas",
        "Módulo de protección contra sobretensiones (SPD) integrado con carcasa ignífuga",
        "Carcasa de aluminio duradera para montaje en rack 1U horizontal o vertical",
        "Cable de alimentación Schuko de 16A, núcleo de cobre de 1,5 mm², carcasa de enchufe tipo VDE",
        "Carcasa negra estándar o naranja personalizada; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Tensión nominal", value: "230V" },
            { label: "Corriente nominal", value: "16A" },
            { label: "Potencia nominal", value: "4000W" },
            { label: "Frecuencia nominal", value: "50 Hz" },
          ],
        },
        {
          title: "Entrada / Salida",
          specs: [
            { label: "Enchufe de entrada", value: "Enchufe Schuko acodado (CEE 7/7) de 16A" },
            { label: "Tomas de salida", value: "8 × tomas de estándar alemán (Schuko CEE 7/3)" },
            { label: "Cable", value: "Núcleo de cobre de 1,5 mm², carcasa tipo VDE, longitudes personalizadas disponibles" },
          ],
        },
        {
          title: "Mecánica y protección",
          specs: [
            { label: "Montaje", value: "Rack 1U, vertical u horizontal" },
            { label: "Material de la carcasa", value: "Aleación de aluminio" },
            { label: "Color de la carcasa", value: "Negro (estándar) / Naranja (personalizado)" },
            { label: "Protección", value: "Interruptor iluminado con protección contra sobrecargas, protección SPD contra sobretensiones, carcasa ignífuga" },
          ],
        },
      ],
      applications: [
        "Racks de centros de datos de mercados europeos y CEE",
        "Salas de equipos de telecomunicaciones en regiones con estándar Schuko",
        "Gabinetes de colocación",
        "Gabinetes de control industrial y de red",
      ],
      customizationOptions: [
        "Color de la carcasa (negro / naranja / personalizado)",
        "Cantidad de tomas y longitud del cable",
        "Enchufe de entrada y longitud del cable",
        "Marca / etiquetado personalizado",
        "Empaque OEM / ODM",
      ],
      standards: ["Diseñado según los estándares de conectores CEE 7/3 (Schuko) y VDE", "Certificación disponible bajo pedido según las especificaciones del proyecto"],
      faqs: [
        {
          question: "¿Qué es un PDU Schuko y dónde se utiliza?",
          answer:
            "Un PDU Schuko es una unidad de distribución de energía de rack equipada con tomas de estándar alemán (Schuko/CEE 7/3), el tipo de toma estándar utilizado en Alemania y gran parte de Europa continental. Se utiliza para distribuir la energía del rack a equipos de TI con cables de alimentación tipo Schuko.",
        },
        {
          question: "¿El PDU Schuko incluye protección contra sobretensiones?",
          answer:
            "Sí. Cada unidad incluye un módulo SPD (dispositivo de protección contra sobretensiones) integrado con carcasa ignífuga, además de un interruptor basculante iluminado con protección automática contra sobrecargas.",
        },
        {
          question: "¿Se puede personalizar el color de la carcasa o la disposición de las tomas?",
          answer:
            "Sí. Wandtung es un fabricante directo de fábrica y ofrece el PDU Schuko en carcasa negra estándar o naranja personalizada, con la cantidad de tomas, la longitud del cable y la marca configuradas según cada proyecto, incluyendo OEM/ODM.",
        },
      ],
    },
    ru: {
      name: "PDU немецкого стандарта (Schuko)",
      shortName: "PDU Schuko",
      tagline: "Монтируемый в стойку блок PDU высотой 1U с розетками Schuko немецкого стандарта для шкафов европейского и CEE-рынков.",
      overview:
        "PDU Schuko Wandtung — это монтируемый в стойку блок распределения питания высотой 1U, оснащённый розетками немецкого стандарта (Schuko/CEE 7/3), подсвечиваемым выключателем питания с защитой от перегрузки и встроенным модулем защиты от перенапряжения, разработанный для шкафов центров обработки данных и телекоммуникационного оборудования на европейском и CEE-рынках. Устанавливается горизонтально или вертикально, поставляется с прочным кабелем питания Schuko и доступен в стандартном чёрном или индивидуальном оранжевом корпусе.",
      keyFeatures: [
        "Восемь розеток немецкого стандарта (Schuko/CEE 7/3)",
        "Подсвечиваемый клавишный выключатель с автоматической защитой от перегрузки",
        "Встроенный модуль защиты от перенапряжения (SPD) с огнестойким корпусом",
        "Прочный алюминиевый корпус для монтажа в стойку 1U горизонтально или вертикально",
        "Кабель питания Schuko 16A, медная жила 1,5 мм², корпус вилки стандарта VDE",
        "Стандартный чёрный или индивидуальный оранжевый корпус; доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "230В" },
            { label: "Номинальный ток", value: "16A" },
            { label: "Номинальная мощность", value: "4000Вт" },
            { label: "Номинальная частота", value: "50 Гц" },
          ],
        },
        {
          title: "Вход / Выход",
          specs: [
            { label: "Входная вилка", value: "Угловая вилка Schuko (CEE 7/7) 16A" },
            { label: "Выходные розетки", value: "8 × розеток немецкого стандарта (Schuko CEE 7/3)" },
            { label: "Кабель", value: "Медная жила 1,5 мм², корпус стандарта VDE, доступны индивидуальные длины" },
          ],
        },
        {
          title: "Механика и защита",
          specs: [
            { label: "Монтаж", value: "Стойка 1U, вертикально или горизонтально" },
            { label: "Материал корпуса", value: "Алюминиевый сплав" },
            { label: "Цвет корпуса", value: "Чёрный (стандарт) / Оранжевый (на заказ)" },
            { label: "Защита", value: "Подсвечиваемый выключатель с защитой от перегрузки, защита SPD от перенапряжения, огнестойкий корпус" },
          ],
        },
      ],
      applications: [
        "Стойки центров обработки данных европейского и CEE-рынков",
        "Помещения телекоммуникационного оборудования в регионах со стандартом Schuko",
        "Шкафы колокации",
        "Шкафы промышленного и сетевого управления",
      ],
      customizationOptions: [
        "Цвет корпуса (чёрный / оранжевый / на заказ)",
        "Количество розеток и длина кабеля",
        "Входная вилка и длина шнура",
        "Индивидуальный брендинг / маркировка",
        "Упаковка OEM / ODM",
      ],
      standards: ["Разработан в соответствии со стандартами разъёмов CEE 7/3 (Schuko) и VDE", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Что такое PDU Schuko и где он используется?",
          answer:
            "PDU Schuko — это блок распределения питания для стойки, оснащённый розетками немецкого стандарта (Schuko/CEE 7/3) — стандартным типом розеток, используемым в Германии и большей части континентальной Европы. Он используется для распределения питания стойки на ИТ-оборудование с кабелями питания типа Schuko.",
        },
        {
          question: "Включена ли в PDU Schuko защита от перенапряжения?",
          answer:
            "Да. Каждый блок включает встроенный модуль SPD (устройство защиты от перенапряжения) с огнестойким корпусом, а также подсвечиваемый клавишный выключатель с автоматической защитой от перегрузки.",
        },
        {
          question: "Можно ли настроить цвет корпуса или расположение розеток?",
          answer:
            "Да. Wandtung является прямым производителем и предлагает PDU Schuko в стандартном чёрном или индивидуальном оранжевом корпусе, с настройкой количества розеток, длины кабеля и брендинга под каждый проект, включая OEM/ODM.",
        },
      ],
    },
    zh: {
      name: "德标（Schuko）PDU",
      shortName: "德标PDU",
      tagline: "配备德标Schuko插座的1U机架式PDU，适用于欧洲及CEE市场机柜。",
      overview:
        "万电通德标PDU是一款1U机架式配电单元，配备德国标准（Schuko/CEE 7/3）插座、带过载保护功能的发光电源开关，以及内置浪涌保护模块，专为欧洲及CEE市场的数据中心与电信机柜设计。可水平或垂直安装，配备重型德标电源线，提供标准黑色或定制橙色外壳。",
      keyFeatures: [
        "八路德国标准（Schuko/CEE 7/3）插座",
        "带自动过载保护功能的发光跷板电源开关",
        "内置SPD浪涌保护模块，配阻燃外壳",
        "耐用铝合金外壳，支持1U水平或垂直机架安装",
        "16A德标电源线，1.5mm²铜芯，VDE标准插头外壳",
        "标准黑色或定制橙色外壳；支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "230V" },
            { label: "额定电流", value: "16A" },
            { label: "额定功率", value: "4000W" },
            { label: "额定频率", value: "50Hz" },
          ],
        },
        {
          title: "输入/输出",
          specs: [
            { label: "输入插头", value: "16A德标弯头插头（CEE 7/7）" },
            { label: "输出插座", value: "8×德国标准插座（Schuko CEE 7/3）" },
            { label: "线缆", value: "1.5mm²铜芯，VDE标准外壳，可定制长度" },
          ],
        },
        {
          title: "机械结构与保护",
          specs: [
            { label: "安装方式", value: "1U机架，垂直或水平" },
            { label: "外壳材质", value: "铝合金外壳" },
            { label: "外壳颜色", value: "黑色（标准）/橙色（定制）" },
            { label: "保护", value: "发光过载保护开关、SPD浪涌保护、阻燃外壳" },
          ],
        },
      ],
      applications: ["欧洲及CEE市场数据中心机架", "德标地区电信设备间", "托管机柜", "工业与网络控制柜"],
      customizationOptions: ["外壳颜色（黑色/橙色/定制）", "插座数量与线缆长度", "输入插头与线缆长度", "定制品牌/标识", "OEM/ODM包装"],
      standards: ["按CEE 7/3（德标）及VDE连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么是德标PDU？用在哪里？",
          answer:
            "德标PDU是配备德国标准（Schuko/CEE 7/3）插座的机架式配电单元，这是德国及欧洲大陆大部分地区使用的标准插座类型。用于将机架电力分配给配备德标电源线的IT设备。",
        },
        {
          question: "德标PDU是否包含浪涌保护？",
          answer:
            "是的。每台设备均内置SPD（浪涌保护装置）模块并配有阻燃外壳，同时配备带自动过载保护功能的发光跷板开关。",
        },
        {
          question: "外壳颜色或插座布局可以定制吗？",
          answer:
            "可以。万电通是工厂直营制造商，德标PDU提供标准黑色或定制橙色外壳，插座数量、线缆长度及品牌标识均可根据项目定制，包括OEM/ODM。",
        },
      ],
    },
  },

  "nema-pdu": {
    ar: {
      name: "وحدة PDU بمعيار أمريكي (NEMA)",
      shortName: "PDU أمريكي NEMA",
      tagline: "وحدة توزيع طاقة للراك 1U بمنافذ NEMA 5-15R أمريكية القياس لخزانات أمريكا الشمالية.",
      overview:
        "وحدة PDU الأمريكية من واندتونغ هي وحدة توزيع طاقة للراك بارتفاع 1U مزودة بمنافذ أمريكية قياسية (NEMA 5-15R)، ومفتاح طاقة مضاء ثنائي القطب تحت غطاء حماية، ووحدة حماية SPD من التيار المفاجئ مدمجة بهيكل مقاوم للحريق، مصممة لخزانات مراكز البيانات والاتصالات في أمريكا الشمالية. تستخدم قضيب نحاس أحمر نقي بنسبة 99.9%، وهيكل ألومنيوم متين بسماكة 1.5 مم، وتأتي بكابل طاقة NEMA 5-15P، ومتوفرة بهيكل أسود قياسي أو هيكل برتقالي مخصص.",
      keyFeatures: [
        "ثمانية منافذ أمريكية قياسية NEMA 5-15R، بطراز معتمد UL",
        "مفتاح طاقة مضاء ثنائي القطب تحت غطاء حماية واقٍ",
        "وحدة حماية SPD من التيار المفاجئ مدمجة بهيكل مقاوم للحريق",
        "قضيب نحاس أحمر نقي بنسبة 99.9% لمقاومة منخفضة وارتفاع حراري أقل",
        "هيكل ألومنيوم متين بسماكة 1.5 مم، مقاوم للهب والصدمات",
        "كابل طاقة NEMA 5-15P بنواة نحاسية متينة 1.5 مم²، متوافق مع UL",
        "هيكل أسود قياسي أو برتقالي مخصص؛ متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "125 فولت" },
            { label: "التيار المقنن", value: "15A" },
            { label: "التردد المقنن", value: "60 هرتز" },
          ],
        },
        {
          title: "الدخل / الخرج",
          specs: [
            { label: "قابس الدخل", value: "NEMA 5-15P" },
            { label: "منافذ الخرج", value: "8 × منافذ NEMA 5-15R، بطراز معتمد UL" },
            { label: "الكابل", value: "نواة نحاسية 1.5 مم²، متوافق مع UL، أطوال مخصصة متاحة" },
          ],
        },
        {
          title: "الهيكل والحماية",
          specs: [
            { label: "التركيب", value: "راك 1U، أفقي" },
            { label: "مادة الهيكل", value: "هيكل ألومنيوم متين بسماكة 1.5 مم" },
            { label: "مادة القضيب الناقل", value: "نحاس أحمر نقي بنسبة 99.9%" },
            { label: "لون الهيكل", value: "أسود (قياسي) / برتقالي (مخصص)" },
            { label: "الحماية", value: "مفتاح مضاء ثنائي القطب بغطاء حماية، حماية SPD من التيار المفاجئ، هيكل مقاوم للحريق" },
          ],
        },
      ],
      applications: [
        "خزانات مراكز البيانات في أمريكا الشمالية",
        "غرف معدات الاتصالات بالمعيار الأمريكي",
        "خزانات الاستضافة المشتركة",
        "خزانات التحكم الصناعي والشبكي",
      ],
      customizationOptions: [
        "لون الهيكل (أسود / برتقالي / مخصص)",
        "عدد المنافذ وطول الكابل",
        "قابس الدخل وطول السلك (NEMA وIEC وشوكو والمملكة المتحدة وأستراليا والصين ومعايير إقليمية أخرى)",
        "علامة تجارية/تصنيف مخصص",
        "تعبئة OEM/ODM",
      ],
      standards: ["مصمم وفق معايير موصلات NEMA 5-15، بطراز بناء معتمد UL", "الشهادات متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما هي وحدة PDU الأمريكية (NEMA) وأين تُستخدم؟",
          answer:
            "وحدة PDU أمريكية هي وحدة توزيع طاقة للراك مزودة بمنافذ أمريكية قياسية (NEMA 5-15R)، وهي نوع المقبس القياسي المستخدم في جميع أنحاء أمريكا الشمالية. تُستخدم لتوزيع طاقة الراك على معدات تقنية المعلومات المزودة بكابلات طاقة NEMA 5-15P.",
        },
        {
          question: "هل تتضمن وحدة PDU الأمريكية حماية من التيار المفاجئ؟",
          answer:
            "نعم. تتضمن كل وحدة وحدة حماية SPD (جهاز حماية من التيار المفاجئ) مدمجة بهيكل مقاوم للحريق، إلى جانب مفتاح مضاء ثنائي القطب محمي بغطاء أمان مفصلي.",
        },
        {
          question: "هل يمكن تخصيص لون الهيكل أو قابس الدخل؟",
          answer:
            "نعم. واندتونغ مُصنّع مباشر من المصنع، ويوفر وحدة PDU الأمريكية بهيكل أسود قياسي أو برتقالي مخصص، مع إمكانية تكوين قابس الدخل بمعايير NEMA أو IEC أو شوكو أو المملكة المتحدة أو أستراليا أو الصين أو معايير إقليمية أخرى حسب كل مشروع، بما في ذلك OEM/ODM.",
        },
      ],
    },
    fr: {
      name: "PDU aux normes américaines (NEMA)",
      shortName: "PDU NEMA",
      tagline: "PDU montable en rack 1U à prises NEMA 5-15R aux normes américaines pour armoires nord-américaines.",
      overview:
        "Le PDU NEMA Wandtung est une unité de distribution d'énergie montable en rack 1U équipée de prises aux normes américaines (NEMA 5-15R), d'un interrupteur lumineux bipolaire sous un capot de protection et d'un module de protection contre les surtensions SPD intégré dans une coque ignifuge, conçu pour les armoires de centres de données et de télécommunications nord-américaines. Il utilise un jeu de barres en cuivre rouge pur à 99,9 % et un boîtier en aluminium robuste de 1,5 mm, est livré avec un cordon d'alimentation NEMA 5-15P, et est disponible en boîtier noir standard ou orange personnalisé.",
      keyFeatures: [
        "Huit prises aux normes américaines NEMA 5-15R, construction de type UL Listed",
        "Interrupteur bipolaire lumineux sous un capot de protection",
        "Module de protection contre les surtensions (SPD) intégré à coque ignifuge",
        "Jeu de barres en cuivre rouge pur à 99,9 % pour une faible impédance et un échauffement réduit",
        "Boîtier en aluminium robuste de 1,5 mm, ignifuge et résistant aux chocs",
        "Cordon d'alimentation NEMA 5-15P à âme cuivre robuste de 1,5 mm², conforme UL",
        "Boîtier noir standard ou orange personnalisé ; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "125V" },
            { label: "Courant nominal", value: "15A" },
            { label: "Fréquence nominale", value: "60 Hz" },
          ],
        },
        {
          title: "Entrée / Sortie",
          specs: [
            { label: "Fiche d'entrée", value: "NEMA 5-15P" },
            { label: "Prises de sortie", value: "8 × prises NEMA 5-15R, construction de type UL Listed" },
            { label: "Câble", value: "Âme cuivre 1,5 mm², conforme UL, longueurs personnalisées disponibles" },
          ],
        },
        {
          title: "Mécanique et protection",
          specs: [
            { label: "Montage", value: "Rack 1U, horizontal" },
            { label: "Matériau du boîtier", value: "Boîtier aluminium robuste de 1,5 mm" },
            { label: "Matériau du jeu de barres", value: "Cuivre rouge pur à 99,9 %" },
            { label: "Couleur du boîtier", value: "Noir (standard) / Orange (personnalisé)" },
            { label: "Protection", value: "Interrupteur bipolaire lumineux avec capot de protection, protection SPD contre les surtensions, coque ignifuge" },
          ],
        },
      ],
      applications: [
        "Racks de centres de données nord-américains",
        "Salles techniques télécoms aux normes américaines",
        "Armoires de colocation",
        "Armoires de contrôle industriel et réseau",
      ],
      customizationOptions: [
        "Couleur du boîtier (noir / orange / personnalisée)",
        "Nombre de prises et longueur de câble",
        "Fiche d'entrée et longueur de cordon (NEMA, IEC, Schuko, UK, AU, CN et autres normes régionales)",
        "Marquage / étiquetage personnalisé",
        "Conditionnement OEM / ODM",
      ],
      standards: ["Conçu selon les normes de connecteurs NEMA 5-15, construction de type UL Listed", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Qu'est-ce qu'un PDU NEMA et où est-il utilisé ?",
          answer:
            "Un PDU NEMA est une unité de distribution d'énergie de rack équipée de prises aux normes américaines (NEMA 5-15R), le type de prise standard utilisé dans toute l'Amérique du Nord. Il sert à distribuer l'alimentation du rack aux équipements informatiques dotés de cordons d'alimentation NEMA 5-15P.",
        },
        {
          question: "Le PDU NEMA inclut-il une protection contre les surtensions ?",
          answer:
            "Oui. Chaque unité inclut un module SPD (dispositif de protection contre les surtensions) intégré à coque ignifuge, ainsi qu'un interrupteur bipolaire lumineux protégé par un capot de sécurité articulé.",
        },
        {
          question: "La couleur du boîtier ou la fiche d'entrée peuvent-elles être personnalisées ?",
          answer:
            "Oui. Wandtung est un fabricant direct d'usine et propose le PDU NEMA en boîtier noir standard ou orange personnalisé, avec une fiche d'entrée configurable selon les normes NEMA, IEC, Schuko, UK, AU, CN et autres normes régionales selon chaque projet, y compris en OEM/ODM.",
        },
      ],
    },
    es: {
      name: "PDU de estándar americano (NEMA)",
      shortName: "PDU NEMA",
      tagline: "PDU de montaje en rack 1U con tomas NEMA 5-15R de estándar americano para gabinetes norteamericanos.",
      overview:
        "El PDU NEMA de Wandtung es una unidad de distribución de energía de montaje en rack 1U equipada con tomas de estándar americano (NEMA 5-15R), un interruptor bipolar iluminado bajo una tapa de protección y un módulo de protección contra sobretensiones SPD integrado en una carcasa ignífuga, diseñado para gabinetes de centros de datos y telecomunicaciones norteamericanos. Utiliza una barra colectora de cobre rojo puro al 99,9 % y una carcasa de aluminio resistente de 1,5 mm, incluye un cable de alimentación NEMA 5-15P y está disponible en carcasa negra estándar o naranja personalizada.",
      keyFeatures: [
        "Ocho tomas de estándar americano NEMA 5-15R, construcción de tipo UL Listed",
        "Interruptor bipolar iluminado bajo una tapa de protección",
        "Módulo de protección contra sobretensiones (SPD) integrado con carcasa ignífuga",
        "Barra colectora de cobre rojo puro al 99,9 % para baja impedancia y menor aumento de temperatura",
        "Carcasa de aluminio resistente de 1,5 mm, ignífuga y resistente a impactos",
        "Cable de alimentación NEMA 5-15P con núcleo de cobre resistente de 1,5 mm², conforme a UL",
        "Carcasa negra estándar o naranja personalizada; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Tensión nominal", value: "125V" },
            { label: "Corriente nominal", value: "15A" },
            { label: "Frecuencia nominal", value: "60 Hz" },
          ],
        },
        {
          title: "Entrada / Salida",
          specs: [
            { label: "Enchufe de entrada", value: "NEMA 5-15P" },
            { label: "Tomas de salida", value: "8 × tomas NEMA 5-15R, construcción de tipo UL Listed" },
            { label: "Cable", value: "Núcleo de cobre 1,5 mm², conforme a UL, longitudes personalizadas disponibles" },
          ],
        },
        {
          title: "Mecánica y protección",
          specs: [
            { label: "Montaje", value: "Rack 1U, horizontal" },
            { label: "Material de la carcasa", value: "Carcasa de aluminio resistente de 1,5 mm" },
            { label: "Material de la barra colectora", value: "Cobre rojo puro al 99,9 %" },
            { label: "Color de la carcasa", value: "Negro (estándar) / Naranja (personalizado)" },
            { label: "Protección", value: "Interruptor bipolar iluminado con tapa de protección, protección SPD contra sobretensiones, carcasa ignífuga" },
          ],
        },
      ],
      applications: [
        "Racks de centros de datos norteamericanos",
        "Salas de equipos de telecomunicaciones con estándar americano",
        "Gabinetes de colocación",
        "Gabinetes de control industrial y de red",
      ],
      customizationOptions: [
        "Color de la carcasa (negro / naranja / personalizado)",
        "Cantidad de tomas y longitud del cable",
        "Enchufe de entrada y longitud del cable (NEMA, IEC, Schuko, UK, AU, CN y otros estándares regionales)",
        "Marca / etiquetado personalizado",
        "Empaque OEM / ODM",
      ],
      standards: ["Diseñado según los estándares de conectores NEMA 5-15, construcción de tipo UL Listed", "Certificación disponible bajo pedido según las especificaciones del proyecto"],
      faqs: [
        {
          question: "¿Qué es un PDU NEMA y dónde se utiliza?",
          answer:
            "Un PDU NEMA es una unidad de distribución de energía de rack equipada con tomas de estándar americano (NEMA 5-15R), el tipo de toma estándar utilizado en toda Norteamérica. Se utiliza para distribuir la energía del rack a equipos de TI con cables de alimentación NEMA 5-15P.",
        },
        {
          question: "¿El PDU NEMA incluye protección contra sobretensiones?",
          answer:
            "Sí. Cada unidad incluye un módulo SPD (dispositivo de protección contra sobretensiones) integrado con carcasa ignífuga, además de un interruptor bipolar iluminado protegido por una tapa de seguridad abisagrada.",
        },
        {
          question: "¿Se puede personalizar el color de la carcasa o el enchufe de entrada?",
          answer:
            "Sí. Wandtung es un fabricante directo de fábrica y ofrece el PDU NEMA en carcasa negra estándar o naranja personalizada, con el enchufe de entrada configurable a los estándares NEMA, IEC, Schuko, UK, AU, CN y otros estándares regionales según cada proyecto, incluyendo OEM/ODM.",
        },
      ],
    },
    ru: {
      name: "PDU американского стандарта (NEMA)",
      shortName: "PDU NEMA",
      tagline: "Монтируемый в стойку блок PDU высотой 1U с розетками NEMA 5-15R американского стандарта для североамериканских шкафов.",
      overview:
        "PDU NEMA Wandtung — это монтируемый в стойку блок распределения питания высотой 1U, оснащённый розетками американского стандарта (NEMA 5-15R), подсвечиваемым двухполюсным выключателем под защитной крышкой и встроенным модулем защиты от перенапряжения SPD в огнестойком корпусе, разработанный для шкафов центров обработки данных и телекоммуникационного оборудования Северной Америки. Использует шину из чистой красной меди 99,9% и прочный алюминиевый корпус толщиной 1,5 мм, поставляется с кабелем питания NEMA 5-15P и доступен в стандартном чёрном или индивидуальном оранжевом корпусе.",
      keyFeatures: [
        "Восемь розеток американского стандарта NEMA 5-15R, конструкция типа UL Listed",
        "Подсвечиваемый двухполюсный выключатель под защитной крышкой",
        "Встроенный модуль защиты от перенапряжения (SPD) с огнестойким корпусом",
        "Шина из чистой красной меди 99,9% для низкого импеданса и меньшего нагрева",
        "Прочный алюминиевый корпус толщиной 1,5 мм, огнестойкий и ударопрочный",
        "Кабель питания NEMA 5-15P с прочной медной жилой 1,5 мм², соответствует UL",
        "Стандартный чёрный или индивидуальный оранжевый корпус; доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "125В" },
            { label: "Номинальный ток", value: "15A" },
            { label: "Номинальная частота", value: "60 Гц" },
          ],
        },
        {
          title: "Вход / Выход",
          specs: [
            { label: "Входная вилка", value: "NEMA 5-15P" },
            { label: "Выходные розетки", value: "8 × розеток NEMA 5-15R, конструкция типа UL Listed" },
            { label: "Кабель", value: "Медная жила 1,5 мм², соответствует UL, доступны индивидуальные длины" },
          ],
        },
        {
          title: "Механика и защита",
          specs: [
            { label: "Монтаж", value: "Стойка 1U, горизонтально" },
            { label: "Материал корпуса", value: "Прочный алюминиевый корпус 1,5 мм" },
            { label: "Материал шины", value: "Чистая красная медь 99,9%" },
            { label: "Цвет корпуса", value: "Чёрный (стандарт) / Оранжевый (на заказ)" },
            { label: "Защита", value: "Подсвечиваемый двухполюсный выключатель с защитной крышкой, защита SPD от перенапряжения, огнестойкий корпус" },
          ],
        },
      ],
      applications: [
        "Стойки центров обработки данных Северной Америки",
        "Помещения телекоммуникационного оборудования американского стандарта",
        "Шкафы колокации",
        "Шкафы промышленного и сетевого управления",
      ],
      customizationOptions: [
        "Цвет корпуса (чёрный / оранжевый / на заказ)",
        "Количество розеток и длина кабеля",
        "Входная вилка и длина шнура (NEMA, IEC, Schuko, UK, AU, CN и другие региональные стандарты)",
        "Индивидуальный брендинг / маркировка",
        "Упаковка OEM / ODM",
      ],
      standards: ["Разработан в соответствии со стандартами разъёмов NEMA 5-15, конструкция типа UL Listed", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Что такое PDU NEMA и где он используется?",
          answer:
            "PDU NEMA — это блок распределения питания для стойки, оснащённый розетками американского стандарта (NEMA 5-15R) — стандартным типом розеток, используемым по всей Северной Америке. Он используется для распределения питания стойки на ИТ-оборудование с кабелями питания NEMA 5-15P.",
        },
        {
          question: "Включена ли в PDU NEMA защита от перенапряжения?",
          answer:
            "Да. Каждый блок включает встроенный модуль SPD (устройство защиты от перенапряжения) с огнестойким корпусом, а также подсвечиваемый двухполюсный выключатель, защищённый откидной предохранительной крышкой.",
        },
        {
          question: "Можно ли настроить цвет корпуса или входную вилку?",
          answer:
            "Да. Wandtung является прямым производителем и предлагает PDU NEMA в стандартном чёрном или индивидуальном оранжевом корпусе, с входной вилкой, настраиваемой под стандарты NEMA, IEC, Schuko, UK, AU, CN и другие региональные стандарты под каждый проект, включая OEM/ODM.",
        },
      ],
    },
    zh: {
      name: "美标（NEMA）PDU",
      shortName: "美标PDU",
      tagline: "配备美标NEMA 5-15R插座的1U机架式PDU，适用于北美市场机柜。",
      overview:
        "万电通美标PDU是一款1U机架式配电单元，配备美国标准（NEMA 5-15R）插座、带保护罩的双极发光电源开关，以及内置SPD浪涌保护模块（阻燃外壳），专为北美数据中心与电信机柜设计。采用99.9%纯红铜排，1.5mm加厚铝合金外壳，配备NEMA 5-15P电源线，提供标准黑色或定制橙色外壳。",
      keyFeatures: [
        "八路美标NEMA 5-15R插座，UL认证款式",
        "带保护盖的双极发光电源开关",
        "内置SPD浪涌保护模块，配阻燃外壳",
        "99.9%纯红铜排，低阻抗、低温升",
        "1.5mm加厚铝合金外壳，阻燃耐冲击",
        "NEMA 5-15P电源线，1.5mm²加厚铜芯，符合UL标准",
        "标准黑色或定制橙色外壳；支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "125V" },
            { label: "额定电流", value: "15A" },
            { label: "额定频率", value: "60Hz" },
          ],
        },
        {
          title: "输入/输出",
          specs: [
            { label: "输入插头", value: "NEMA 5-15P" },
            { label: "输出插座", value: "8×NEMA 5-15R，UL认证款式" },
            { label: "线缆", value: "1.5mm²铜芯，符合UL标准，可定制长度" },
          ],
        },
        {
          title: "机械结构与保护",
          specs: [
            { label: "安装方式", value: "1U机架，水平安装" },
            { label: "外壳材质", value: "1.5mm加厚铝合金外壳" },
            { label: "铜排材质", value: "99.9%纯红铜" },
            { label: "外壳颜色", value: "黑色（标准）/橙色（定制）" },
            { label: "保护", value: "带保护盖的双极发光开关、SPD浪涌保护、阻燃外壳" },
          ],
        },
      ],
      applications: ["北美市场数据中心机架", "美标电信设备间", "托管机柜", "工业与网络控制柜"],
      customizationOptions: ["外壳颜色（黑色/橙色/定制）", "插座数量与线缆长度", "输入插头与线缆长度（NEMA、IEC、德标、英标、澳标、国标等区域标准）", "定制品牌/标识", "OEM/ODM包装"],
      standards: ["按NEMA 5-15连接器标准设计，UL认证款式结构", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么是美标PDU？用在哪里？",
          answer:
            "美标PDU是配备美国标准（NEMA 5-15R）插座的机架式配电单元，这是北美地区通用的标准插座类型。用于将机架电力分配给配备NEMA 5-15P电源线的IT设备。",
        },
        {
          question: "美标PDU是否包含浪涌保护？",
          answer:
            "是的。每台设备均内置SPD（浪涌保护装置）模块并配有阻燃外壳，同时配备带铰链式安全保护盖的双极发光开关。",
        },
        {
          question: "外壳颜色或输入插头可以定制吗？",
          answer:
            "可以。万电通是工厂直营制造商，美标PDU提供标准黑色或定制橙色外壳，输入插头可根据项目定制为NEMA、IEC、德标、英标、澳标、国标等区域标准，包括OEM/ODM。",
        },
      ],
    },
  },

  "multi-function-pdu": {
    ar: {
      name: "PDU بمقابس عالمية متعددة الوظائف",
      shortName: "PDU متعدد الوظائف",
      tagline: "شريط طاقة للراك 1U بمقابس عالمية متعددة المعايير وحامل تركيب دوّار 360 درجة.",
      overview:
        "وحدة PDU متعددة الوظائف من واندتونغ هي شريط طاقة للراك بارتفاع 1U ومقاس 19 بوصة، مزود بستة مقابس عالمية متعددة المعايير، ومفتاح طاقة مزدوج، ووحدة حماية SPD من التيار المفاجئ مدمجة مع مؤشر أمان أخضر LED. يسمح حامل التركيب الفولاذي المتين الدوّار بزاوية 360 درجة (بدون أدوات) بتوجيه مرن داخل الراك، بينما تضيف مصاريع الأمان للأطفال (بمقاومة تصل إلى 75 نيوتن) حماية إضافية في البيئات متعددة الاستخدامات.",
      keyFeatures: [
        "ستة مقابس عالمية متعددة المعايير تقبل أنواع القوابس الشائعة ثنائية وثلاثية السن",
        "مفتاح طاقة مزدوج مع حماية SPD من التيار المفاجئ ومؤشر أمان أخضر LED",
        "حامل تركيب فولاذي متين دوّار بزاوية 360 درجة، بدون أدوات",
        "كابل بنواة نحاسية 1.5 مم² لنقل تيار عالٍ ومستقر",
        "مصاريع أمان للأطفال بمقاومة تصل إلى 75 نيوتن",
        "تركيب راك 19 بوصة 1U؛ متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "الهيكل والأبعاد",
          specs: [
            { label: "التركيب", value: "راك 19 بوصة، 1U" },
            { label: "العرض الكلي", value: "483 مم" },
            { label: "مسافة فتحات التركيب", value: "436 مم" },
            { label: "الارتفاع", value: "45 مم" },
          ],
        },
        {
          title: "الكهرباء والحماية",
          specs: [
            { label: "منافذ الخرج", value: "6 × مقابس عالمية متعددة المعايير" },
            { label: "المفتاح", value: "مفتاح طاقة مزدوج مضاء" },
            { label: "حماية التيار المفاجئ", value: "وحدة SPD مدمجة مع مؤشر LED أخضر" },
            { label: "الكابل", value: "نواة نحاسية 1.5 مم²" },
            { label: "أمان الأطفال", value: "مصاريع بمقاومة تصل إلى 75 نيوتن" },
          ],
        },
        {
          title: "التركيب",
          specs: [
            { label: "الحامل", value: "دوّار بزاوية 360 درجة، تركيب بدون أدوات" },
            { label: "مادة الحامل", value: "فولاذ متين" },
          ],
        },
      ],
      applications: [
        "خزانات مراكز البيانات",
        "غرف المعدات متعددة المناطق التي تتطلب توافق مقابس مختلط",
        "خزانات الاتصالات",
        "غرف الخوادم وخزانات الشبكات",
      ],
      customizationOptions: [
        "عدد المنافذ وتخطيطها",
        "قابس الدخل وطول الكابل",
        "اتجاه الحامل / طقم التركيب",
        "علامة تجارية/تصنيف مخصص",
        "تعبئة OEM/ODM",
      ],
      standards: ["الشهادات متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ماذا تعني \"المقابس العالمية\" في هذه الوحدة؟",
          answer:
            "كل منفذ في وحدة PDU متعددة الوظائف مصمم لقبول أنواع القوابس الشائعة ثنائية وثلاثية السن، بحيث يمكن لوحدة واحدة خدمة معدات مزودة بكابلات طاقة إقليمية مختلفة دون الحاجة إلى محولات.",
        },
        {
          question: "ما فائدة الحامل الدوّار بزاوية 360 درجة؟",
          answer:
            "يدور حامل التركيب الفولاذي المتين بزاوية كاملة 360 درجة ويُركَّب دون أدوات، مما يتيح توجيه وحدة PDU لتناسب تخطيطات راك مختلفة واحتياجات توجيه الكابلات.",
        },
        {
          question: "هل تتضمن حماية من التيار المفاجئ؟",
          answer:
            "نعم. تحتوي الوحدة على وحدة حماية SPD مدمجة مع مؤشر LED أخضر، إلى جانب مفتاح طاقة مزدوج ومصاريع منافذ لأمان الأطفال بمقاومة تصل إلى 75 نيوتن.",
        },
      ],
    },
    fr: {
      name: "PDU multifonction à prises universelles",
      shortName: "PDU multifonction",
      tagline: "Bandeau d'alimentation de rack 1U à prises universelles multi-normes et support de fixation rotatif à 360°.",
      overview:
        "Le PDU multifonction Wandtung est un bandeau d'alimentation de rack 1U de 19 pouces équipé de six prises universelles multi-normes, d'un double interrupteur d'alimentation et d'un module de protection contre les surtensions SPD intégré avec indicateur de sécurité LED vert. Un support de fixation en acier robuste, rotatif à 360° et sans outil, permet une orientation flexible dans le rack, tandis que des volets de sécurité enfant, résistants jusqu'à 75N, ajoutent une protection dans les environnements à usage mixte.",
      keyFeatures: [
        "Six prises universelles multi-normes acceptant les types de fiches courants à 2 et 3 broches",
        "Double interrupteur d'alimentation avec protection SPD contre les surtensions et indicateur de sécurité LED vert",
        "Support de fixation en acier robuste, rotatif à 360°, sans outil",
        "Câble à âme cuivre de 1,5 mm² pour une transmission stable à fort courant",
        "Volets de sécurité enfant résistants jusqu'à 75N",
        "Montage en rack 19 pouces 1U ; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Structure et dimensions",
          specs: [
            { label: "Montage", value: "Rack 19 pouces, 1U" },
            { label: "Largeur totale", value: "483 mm" },
            { label: "Écart des trous de fixation", value: "436 mm" },
            { label: "Hauteur", value: "45 mm" },
          ],
        },
        {
          title: "Électrique et protection",
          specs: [
            { label: "Prises de sortie", value: "6 × prises universelles multi-normes" },
            { label: "Interrupteur", value: "Double interrupteur d'alimentation, lumineux" },
            { label: "Protection contre les surtensions", value: "SPD intégré avec indicateur LED vert" },
            { label: "Câble", value: "Âme cuivre 1,5 mm²" },
            { label: "Sécurité enfant", value: "Volets résistants jusqu'à 75N" },
          ],
        },
        {
          title: "Fixation",
          specs: [
            { label: "Support", value: "Rotatif à 360°, installation sans outil" },
            { label: "Matériau du support", value: "Acier robuste" },
          ],
        },
      ],
      applications: [
        "Racks de centres de données",
        "Salles techniques multi-régions nécessitant une compatibilité de fiches mixte",
        "Armoires de télécommunications",
        "Salles serveurs et locaux techniques réseau",
      ],
      customizationOptions: [
        "Nombre et disposition des prises",
        "Fiche d'entrée et longueur de câble",
        "Orientation du support / kit de fixation",
        "Marquage / étiquetage personnalisé",
        "Conditionnement OEM / ODM",
      ],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Que signifie « prise universelle » sur ce PDU ?",
          answer:
            "Chaque prise du PDU multifonction est conçue pour accepter les types de fiches courants à 2 et 3 broches, permettant à une seule unité de desservir des équipements dotés de cordons d'alimentation régionaux différents sans adaptateur.",
        },
        {
          question: "À quoi sert le support rotatif à 360° ?",
          answer:
            "Le support de fixation en acier robuste tourne à 360° et s'installe sans outil, permettant d'orienter le PDU pour s'adapter à différentes configurations de rack et besoins de cheminement de câbles.",
        },
        {
          question: "Inclut-il une protection contre les surtensions ?",
          answer:
            "Oui. L'unité dispose d'un module SPD (dispositif de protection contre les surtensions) intégré avec indicateur LED vert, ainsi que d'un double interrupteur d'alimentation et de volets de sécurité enfant résistants jusqu'à 75N.",
        },
      ],
    },
    es: {
      name: "PDU multifunción con tomas universales",
      shortName: "PDU multifunción",
      tagline: "Regleta de rack 1U con tomas universales multi-estándar y soporte de montaje giratorio a 360°.",
      overview:
        "El PDU multifunción de Wandtung es una regleta de rack 1U de 19 pulgadas equipada con seis tomas universales multi-estándar, un interruptor de encendido doble y un módulo de protección contra sobretensiones SPD integrado con indicador de seguridad LED verde. Un soporte de montaje de acero resistente, giratorio a 360° y sin herramientas, permite una orientación flexible en el rack, mientras que las persianas de seguridad infantil, resistentes hasta 75N, añaden protección en entornos de uso mixto.",
      keyFeatures: [
        "Seis tomas universales multi-estándar que aceptan tipos de enchufe comunes de 2 y 3 clavijas",
        "Interruptor de encendido doble con protección SPD contra sobretensiones e indicador de seguridad LED verde",
        "Soporte de montaje de acero resistente, giratorio a 360°, sin herramientas",
        "Cable con núcleo de cobre de 1,5 mm² para una transmisión estable de alta corriente",
        "Persianas de seguridad infantil resistentes hasta 75N",
        "Montaje en rack de 19 pulgadas 1U; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Estructura y dimensiones",
          specs: [
            { label: "Montaje", value: "Rack de 19 pulgadas, 1U" },
            { label: "Ancho total", value: "483 mm" },
            { label: "Separación de orificios de montaje", value: "436 mm" },
            { label: "Altura", value: "45 mm" },
          ],
        },
        {
          title: "Eléctrico y protección",
          specs: [
            { label: "Tomas de salida", value: "6 × tomas universales multi-estándar" },
            { label: "Interruptor", value: "Interruptor de encendido doble, iluminado" },
            { label: "Protección contra sobretensiones", value: "SPD integrado con indicador LED verde" },
            { label: "Cable", value: "Núcleo de cobre 1,5 mm²" },
            { label: "Seguridad infantil", value: "Persianas resistentes hasta 75N" },
          ],
        },
        {
          title: "Montaje",
          specs: [
            { label: "Soporte", value: "Giratorio a 360°, instalación sin herramientas" },
            { label: "Material del soporte", value: "Acero resistente" },
          ],
        },
      ],
      applications: [
        "Racks de centros de datos",
        "Salas de equipos multirregionales que requieren compatibilidad de enchufes mixta",
        "Gabinetes de telecomunicaciones",
        "Salas de servidores y armarios de red",
      ],
      customizationOptions: [
        "Cantidad y disposición de tomas",
        "Enchufe de entrada y longitud del cable",
        "Orientación del soporte / kit de montaje",
        "Marca / etiquetado personalizado",
        "Empaque OEM / ODM",
      ],
      standards: ["Certificación disponible bajo pedido según las especificaciones del proyecto"],
      faqs: [
        {
          question: "¿Qué significa \"toma universal\" en este PDU?",
          answer:
            "Cada toma del PDU multifunción está diseñada para aceptar tipos de enchufe comunes de 2 y 3 clavijas, de modo que una sola unidad puede dar servicio a equipos con cables de alimentación regionales diferentes sin necesidad de adaptadores.",
        },
        {
          question: "¿Para qué sirve el soporte giratorio a 360°?",
          answer:
            "El soporte de montaje de acero resistente gira 360° completos y se instala sin herramientas, permitiendo orientar el PDU para adaptarse a diferentes disposiciones de rack y necesidades de enrutamiento de cables.",
        },
        {
          question: "¿Incluye protección contra sobretensiones?",
          answer:
            "Sí. La unidad tiene un módulo SPD (dispositivo de protección contra sobretensiones) integrado con indicador LED verde, además de un interruptor de encendido doble y persianas de seguridad infantil resistentes hasta 75N.",
        },
      ],
    },
    ru: {
      name: "Многофункциональный PDU с универсальными розетками",
      shortName: "Многофункциональный PDU",
      tagline: "Стоечный блок PDU высотой 1U с универсальными многостандартными розетками и поворотным на 360° монтажным кронштейном.",
      overview:
        "Многофункциональный PDU Wandtung — это 19-дюймовая стоечная колодка высотой 1U с шестью универсальными многостандартными розетками, двойным выключателем питания и встроенным модулем защиты от перенапряжения SPD с зелёным светодиодным индикатором безопасности. Прочный стальной монтажный кронштейн, поворачивающийся на 360° без инструментов, обеспечивает гибкую ориентацию в стойке, а защитные шторки для детской безопасности с сопротивлением до 75Н добавляют защиту в помещениях смешанного использования.",
      keyFeatures: [
        "Шесть универсальных многостандартных розеток, принимающих распространённые 2- и 3-контактные вилки",
        "Двойной выключатель питания с защитой SPD от перенапряжения и зелёным светодиодным индикатором безопасности",
        "Прочный стальной монтажный кронштейн, поворачивающийся на 360° без инструментов",
        "Кабель с медной жилой 1,5 мм² для стабильной передачи высокого тока",
        "Защитные шторки для детской безопасности с сопротивлением до 75Н",
        "Монтаж в 19-дюймовую стойку 1U; доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Конструкция и размеры",
          specs: [
            { label: "Монтаж", value: "19-дюймовая стойка, 1U" },
            { label: "Общая ширина", value: "483 мм" },
            { label: "Расстояние между монтажными отверстиями", value: "436 мм" },
            { label: "Высота", value: "45 мм" },
          ],
        },
        {
          title: "Электрика и защита",
          specs: [
            { label: "Выходные розетки", value: "6 × универсальных многостандартных розеток" },
            { label: "Выключатель", value: "Двойной подсвечиваемый выключатель питания" },
            { label: "Защита от перенапряжения", value: "Встроенный SPD с зелёным светодиодным индикатором" },
            { label: "Кабель", value: "Медная жила 1,5 мм²" },
            { label: "Детская безопасность", value: "Шторки с сопротивлением до 75Н" },
          ],
        },
        {
          title: "Монтаж",
          specs: [
            { label: "Кронштейн", value: "Поворотный на 360°, монтаж без инструментов" },
            { label: "Материал кронштейна", value: "Прочная сталь" },
          ],
        },
      ],
      applications: [
        "Стойки центров обработки данных",
        "Многорегиональные помещения с оборудованием, требующие совместимости со смешанными вилками",
        "Телекоммуникационные шкафы",
        "Серверные и сетевые помещения",
      ],
      customizationOptions: [
        "Количество и расположение розеток",
        "Входная вилка и длина кабеля",
        "Ориентация кронштейна / монтажный комплект",
        "Индивидуальный брендинг / маркировка",
        "Упаковка OEM / ODM",
      ],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Что означает «универсальная розетка» в этом PDU?",
          answer:
            "Каждая розетка многофункционального PDU рассчитана на приём распространённых 2- и 3-контактных вилок, поэтому один блок может обслуживать оборудование с разными региональными кабелями питания без переходников.",
        },
        {
          question: "Для чего нужен поворотный на 360° кронштейн?",
          answer:
            "Прочный стальной монтажный кронштейн поворачивается на полные 360° и устанавливается без инструментов, позволяя ориентировать PDU под разные конфигурации стойки и потребности прокладки кабелей.",
        },
        {
          question: "Включена ли защита от перенапряжения?",
          answer:
            "Да. Блок имеет встроенный модуль SPD (устройство защиты от перенапряжения) с зелёным светодиодным индикатором, а также двойной выключатель питания и защитные шторки для детской безопасности с сопротивлением до 75Н.",
        },
      ],
    },
    zh: {
      name: "多功能万用孔PDU",
      shortName: "多功能PDU",
      tagline: "配备万用孔多标准插座及360度旋转安装支架的1U机架式PDU。",
      overview:
        "万电通多功能PDU是一款19英寸1U机架式电源插座条，配备六路万用孔多标准插座、双电源开关，以及内置SPD浪涌保护模块（带绿色LED安全指示灯）。360度旋转、免工具安装的加厚钢制安装支架可灵活调整机架内朝向，同时配备75N耐力的儿童安全保护门，为混合使用环境提供额外保护。",
      keyFeatures: [
        "六路万用孔多标准插座，兼容常见两孔及三孔插头",
        "双电源开关，配SPD浪涌保护及绿色LED安全指示灯",
        "360度旋转、免工具安装的加厚钢制安装支架",
        "1.5mm²铜芯线缆，传输稳定大电流",
        "儿童安全保护门，耐力达75N",
        "19英寸1U机架安装；支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "结构与尺寸",
          specs: [
            { label: "安装方式", value: "19英寸，1U机架" },
            { label: "整体宽度", value: "483mm" },
            { label: "安装孔间距", value: "436mm" },
            { label: "高度", value: "45mm" },
          ],
        },
        {
          title: "电气与保护",
          specs: [
            { label: "输出插座", value: "6×万用孔多标准插座" },
            { label: "开关", value: "双电源开关，带指示灯" },
            { label: "浪涌保护", value: "内置SPD，绿色LED指示灯" },
            { label: "线缆", value: "1.5mm²铜芯" },
            { label: "儿童安全", value: "保护门耐力达75N" },
          ],
        },
        {
          title: "安装",
          specs: [
            { label: "支架", value: "360度旋转，免工具安装" },
            { label: "支架材质", value: "加厚钢材" },
          ],
        },
      ],
      applications: ["数据中心IT机架", "需要混合插头兼容性的多地区设备间", "电信机柜", "服务器机房与网络配线间"],
      customizationOptions: ["插座数量与布局", "输入插头与线缆长度", "支架朝向/安装套件", "定制品牌/标识", "OEM/ODM包装"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "这款PDU的“万用孔”是什么意思？",
          answer:
            "多功能PDU的每个插座均设计为兼容常见的两孔及三孔插头，因此一台设备即可为配备不同地区电源线的设备供电，无需转换插头。",
        },
        {
          question: "360度旋转支架有什么作用？",
          answer:
            "加厚钢制安装支架可整圈360度旋转，且无需工具即可安装，方便根据不同机架布局及走线需求调整PDU朝向。",
        },
        {
          question: "是否包含浪涌保护？",
          answer:
            "是的。该设备内置SPD（浪涌保护装置）模块并配有绿色LED指示灯，同时配备双电源开关及耐力达75N的儿童安全插座保护门。",
        },
      ],
    },
  },

  "uk-pdu": {
    ar: {
      name: "وحدة PDU بمعيار بريطاني (BS1363)",
      shortName: "PDU بريطاني",
      tagline: "وحدة توزيع طاقة للراك 1U بمنافذ BS1363 البريطانية القياسية لخزانات المملكة المتحدة ومنطقة CEE.",
      overview:
        "وحدة PDU البريطانية من واندتونغ هي وحدة توزيع طاقة للراك بارتفاع 1U مزودة بمنافذ بريطانية قياسية (BS1363)، ومفتاح مضاء ثنائي القطب تحت غطاء مقاوم للغبار، وقاطع دائرة مدمج، ووحدة حماية SPD من التيار المفاجئ مع مؤشر LED أخضر، مصممة لخزانات مراكز البيانات والاتصالات في المملكة المتحدة ومنطقة CEE. تستخدم قضيب نحاس أحمر نقي بنسبة 99.9%، وهيكل ألومنيوم متين بسماكة 1.5 مم، وتأتي بكابل طاقة بتصنيف 13A، ومتوفرة بتكوينات 6 أو 8 أو 10 أو 12 منفذاً وأنواع قوابس دخل مخصصة.",
      keyFeatures: [
        "منافذ بريطانية قياسية BS1363، بتكوينات 6/8/10/12 منفذاً",
        "مفتاح مضاء ثنائي القطب تحت غطاء واقٍ من الغبار، يقطع الخط الحي والمحايد في آن واحد",
        "قاطع دائرة مدمج وحماية SPD من التيار المفاجئ مع مؤشر LED أخضر",
        "قضيب نحاس أحمر نقي بنسبة 99.9% لمقاومة منخفضة وارتفاع حراري أقل",
        "هيكل ألومنيوم متين بسماكة 1.5 مم، مقاوم للهب والصدمات",
        "كابل طاقة بتصنيف 13A، نواة نحاسية متينة 1.5 مم²، بقدرة 2500 واط، مقاوم للحرارة",
        "أنواع قوابس دخل مخصصة (BS1363، NEMA، شوكو، AS3112، IEC C14/C20)؛ متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "230 فولت" },
            { label: "التيار المقنن", value: "13A" },
            { label: "القدرة المقننة", value: "2500 واط" },
            { label: "التردد المقنن", value: "50 هرتز" },
          ],
        },
        {
          title: "الدخل / الخرج",
          specs: [
            { label: "قابس الدخل", value: "BS1363 (متوفر NEMA وشوكو وAS3112 وIEC C14/C20 حسب الطلب)" },
            { label: "منافذ الخرج", value: "6 / 8 / 10 / 12 × منافذ BS1363" },
            { label: "الكابل", value: "نواة نحاسية 1.5 مم²، مقاومة للحرارة، أطوال مخصصة متاحة" },
          ],
        },
        {
          title: "الهيكل والحماية",
          specs: [
            { label: "التركيب", value: "راك 1U، أفقي" },
            { label: "مادة الهيكل", value: "هيكل ألومنيوم متين بسماكة 1.5 مم" },
            { label: "مادة القضيب الناقل", value: "نحاس أحمر نقي بنسبة 99.9%" },
            { label: "الحماية", value: "مفتاح مضاء ثنائي القطب بغطاء مقاوم للغبار، قاطع دائرة مدمج، حماية SPD من التيار المفاجئ" },
          ],
        },
      ],
      applications: [
        "خزانات مراكز البيانات في المملكة المتحدة ومنطقة CEE",
        "غرف معدات الاتصالات بالمعيار البريطاني",
        "خزانات الاستضافة المشتركة",
        "خزانات التحكم الصناعي والشبكي",
      ],
      customizationOptions: [
        "عدد المنافذ (6 / 8 / 10 / 12)",
        "قابس الدخل وطول السلك (BS1363 وNEMA وشوكو وAS3112 وIEC C14/C20 ومعايير إقليمية أخرى)",
        "علامة تجارية/تصنيف مخصص",
        "تعبئة OEM/ODM",
      ],
      standards: ["مصمم وفق معايير موصلات BS1363", "الشهادات متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما هي وحدة PDU البريطانية وأين تُستخدم؟",
          answer:
            "وحدة PDU بريطانية هي وحدة توزيع طاقة للراك مزودة بمنافذ BS1363، وهي نوع المقبس القياسي المستخدم في المملكة المتحدة وعدة دول في منطقة CEE. تُستخدم لتوزيع طاقة الراك على معدات تقنية المعلومات المزودة بكابلات طاقة من نوع BS1363.",
        },
        {
          question: "هل تتضمن وحدة PDU البريطانية حماية من التيار المفاجئ؟",
          answer:
            "نعم. تتضمن كل وحدة وحدة حماية SPD (جهاز حماية من التيار المفاجئ) مدمجة مع مؤشر LED أخضر وقاطع دائرة مدمج، إلى جانب مفتاح مضاء ثنائي القطب تحت غطاء مقاوم للغبار يقطع الخط الحي والمحايد في آن واحد.",
        },
        {
          question: "هل يمكن تخصيص عدد المنافذ أو قابس الدخل؟",
          answer:
            "نعم. واندتونغ مُصنّع مباشر من المصنع، ويوفر وحدة PDU البريطانية بـ 6 أو 8 أو 10 أو 12 منفذاً، مع إمكانية تكوين قابس الدخل بمعايير BS1363 أو NEMA أو شوكو أو AS3112 أو IEC C14/C20 أو معايير إقليمية أخرى حسب كل مشروع، بما في ذلك OEM/ODM.",
        },
      ],
    },
    fr: {
      name: "PDU aux normes britanniques (BS1363)",
      shortName: "PDU britannique",
      tagline: "PDU montable en rack 1U à prises BS1363 aux normes britanniques pour armoires britanniques et des marchés CEE.",
      overview:
        "Le PDU britannique Wandtung est une unité de distribution d'énergie montable en rack 1U équipée de prises aux normes britanniques (BS1363), d'un interrupteur bipolaire lumineux sous un capot anti-poussière, d'un disjoncteur intégré et d'un module de protection contre les surtensions SPD avec indicateur LED vert, conçu pour les armoires de centres de données et de télécommunications britanniques et des marchés CEE. Il utilise un jeu de barres en cuivre rouge pur à 99,9 % et un boîtier en aluminium robuste de 1,5 mm, est livré avec un cordon d'alimentation classé 13A, et est disponible avec 6, 8, 10 ou 12 prises et des types de fiches d'entrée personnalisés.",
      keyFeatures: [
        "Prises aux normes britanniques BS1363, configurations 6/8/10/12 prises",
        "Interrupteur bipolaire lumineux sous un capot anti-poussière, coupe simultanément la phase et le neutre",
        "Disjoncteur intégré et protection SPD contre les surtensions avec indicateur LED vert",
        "Jeu de barres en cuivre rouge pur à 99,9 % pour une faible impédance et un échauffement réduit",
        "Boîtier en aluminium robuste de 1,5 mm, ignifuge et résistant aux chocs",
        "Cordon d'alimentation classé 13A, âme cuivre robuste de 1,5 mm², capacité 2500W, résistant à la chaleur",
        "Types de fiches d'entrée personnalisés (BS1363, NEMA, Schuko, AS3112, IEC C14/C20) ; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "230V" },
            { label: "Courant nominal", value: "13A" },
            { label: "Puissance nominale", value: "2500W" },
            { label: "Fréquence nominale", value: "50 Hz" },
          ],
        },
        {
          title: "Entrée / Sortie",
          specs: [
            { label: "Fiche d'entrée", value: "BS1363 (NEMA, Schuko, AS3112, IEC C14/C20 disponibles sur demande)" },
            { label: "Prises de sortie", value: "6 / 8 / 10 / 12 × prises BS1363" },
            { label: "Câble", value: "Âme cuivre 1,5 mm², résistant à la chaleur, longueurs personnalisées disponibles" },
          ],
        },
        {
          title: "Mécanique et protection",
          specs: [
            { label: "Montage", value: "Rack 1U, horizontal" },
            { label: "Matériau du boîtier", value: "Boîtier aluminium robuste de 1,5 mm" },
            { label: "Matériau du jeu de barres", value: "Cuivre rouge pur à 99,9 %" },
            { label: "Protection", value: "Interrupteur bipolaire lumineux avec capot anti-poussière, disjoncteur intégré, protection SPD contre les surtensions" },
          ],
        },
      ],
      applications: [
        "Racks de centres de données britanniques et des marchés CEE",
        "Salles techniques télécoms aux normes britanniques",
        "Armoires de colocation",
        "Armoires de contrôle industriel et réseau",
      ],
      customizationOptions: [
        "Nombre de prises (6 / 8 / 10 / 12)",
        "Fiche d'entrée et longueur de cordon (BS1363, NEMA, Schuko, AS3112, IEC C14/C20 et autres normes régionales)",
        "Marquage / étiquetage personnalisé",
        "Conditionnement OEM / ODM",
      ],
      standards: ["Conçu selon les normes de connecteurs BS1363", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Qu'est-ce qu'un PDU britannique et où est-il utilisé ?",
          answer:
            "Un PDU britannique est une unité de distribution d'énergie de rack équipée de prises BS1363, le type de prise standard utilisé au Royaume-Uni et dans plusieurs pays des marchés CEE. Il sert à distribuer l'alimentation du rack aux équipements informatiques dotés de cordons d'alimentation de type BS1363.",
        },
        {
          question: "Le PDU britannique inclut-il une protection contre les surtensions ?",
          answer:
            "Oui. Chaque unité inclut un module SPD (dispositif de protection contre les surtensions) intégré avec indicateur LED vert et un disjoncteur intégré, ainsi qu'un interrupteur bipolaire lumineux sous un capot anti-poussière qui coupe simultanément la phase et le neutre.",
        },
        {
          question: "Le nombre de prises ou la fiche d'entrée peuvent-ils être personnalisés ?",
          answer:
            "Oui. Wandtung est un fabricant direct d'usine et propose le PDU britannique avec 6, 8, 10 ou 12 prises, avec une fiche d'entrée configurable selon les normes BS1363, NEMA, Schuko, AS3112, IEC C14/C20 et autres normes régionales selon chaque projet, y compris en OEM/ODM.",
        },
      ],
    },
    es: {
      name: "PDU de estándar británico (BS1363)",
      shortName: "PDU británico",
      tagline: "PDU de montaje en rack 1U con tomas BS1363 de estándar británico para gabinetes del Reino Unido y mercados CEE.",
      overview:
        "El PDU británico de Wandtung es una unidad de distribución de energía de montaje en rack 1U equipada con tomas de estándar británico (BS1363), un interruptor bipolar iluminado bajo una tapa antipolvo, un disyuntor integrado y un módulo de protección contra sobretensiones SPD con indicador LED verde, diseñado para gabinetes de centros de datos y telecomunicaciones del Reino Unido y mercados CEE. Utiliza una barra colectora de cobre rojo puro al 99,9 % y una carcasa de aluminio resistente de 1,5 mm, incluye un cable de alimentación con clasificación de 13A y está disponible con 6, 8, 10 o 12 tomas y tipos de enchufe de entrada personalizados.",
      keyFeatures: [
        "Tomas de estándar británico BS1363, configuraciones de 6/8/10/12 tomas",
        "Interruptor bipolar iluminado bajo una tapa antipolvo, corta la fase y el neutro simultáneamente",
        "Disyuntor integrado y protección SPD contra sobretensiones con indicador LED verde",
        "Barra colectora de cobre rojo puro al 99,9 % para baja impedancia y menor aumento de temperatura",
        "Carcasa de aluminio resistente de 1,5 mm, ignífuga y resistente a impactos",
        "Cable de alimentación con clasificación de 13A, núcleo de cobre resistente de 1,5 mm², capacidad de 2500W, resistente al calor",
        "Tipos de enchufe de entrada personalizados (BS1363, NEMA, Schuko, AS3112, IEC C14/C20); OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Tensión nominal", value: "230V" },
            { label: "Corriente nominal", value: "13A" },
            { label: "Potencia nominal", value: "2500W" },
            { label: "Frecuencia nominal", value: "50 Hz" },
          ],
        },
        {
          title: "Entrada / Salida",
          specs: [
            { label: "Enchufe de entrada", value: "BS1363 (NEMA, Schuko, AS3112, IEC C14/C20 disponibles bajo pedido)" },
            { label: "Tomas de salida", value: "6 / 8 / 10 / 12 × tomas BS1363" },
            { label: "Cable", value: "Núcleo de cobre 1,5 mm², resistente al calor, longitudes personalizadas disponibles" },
          ],
        },
        {
          title: "Mecánica y protección",
          specs: [
            { label: "Montaje", value: "Rack 1U, horizontal" },
            { label: "Material de la carcasa", value: "Carcasa de aluminio resistente de 1,5 mm" },
            { label: "Material de la barra colectora", value: "Cobre rojo puro al 99,9 %" },
            { label: "Protección", value: "Interruptor bipolar iluminado con tapa antipolvo, disyuntor integrado, protección SPD contra sobretensiones" },
          ],
        },
      ],
      applications: [
        "Racks de centros de datos del Reino Unido y mercados CEE",
        "Salas de equipos de telecomunicaciones con estándar británico",
        "Gabinetes de colocación",
        "Gabinetes de control industrial y de red",
      ],
      customizationOptions: [
        "Cantidad de tomas (6 / 8 / 10 / 12)",
        "Enchufe de entrada y longitud del cable (BS1363, NEMA, Schuko, AS3112, IEC C14/C20 y otros estándares regionales)",
        "Marca / etiquetado personalizado",
        "Empaque OEM / ODM",
      ],
      standards: ["Diseñado según los estándares de conectores BS1363", "Certificación disponible bajo pedido según las especificaciones del proyecto"],
      faqs: [
        {
          question: "¿Qué es un PDU británico y dónde se utiliza?",
          answer:
            "Un PDU británico es una unidad de distribución de energía de rack equipada con tomas BS1363, el tipo de toma estándar utilizado en el Reino Unido y varios países de mercados CEE. Se utiliza para distribuir la energía del rack a equipos de TI con cables de alimentación tipo BS1363.",
        },
        {
          question: "¿El PDU británico incluye protección contra sobretensiones?",
          answer:
            "Sí. Cada unidad incluye un módulo SPD (dispositivo de protección contra sobretensiones) integrado con indicador LED verde y un disyuntor integrado, además de un interruptor bipolar iluminado bajo una tapa antipolvo que corta la fase y el neutro simultáneamente.",
        },
        {
          question: "¿Se puede personalizar la cantidad de tomas o el enchufe de entrada?",
          answer:
            "Sí. Wandtung es un fabricante directo de fábrica y ofrece el PDU británico con 6, 8, 10 o 12 tomas, con el enchufe de entrada configurable a los estándares BS1363, NEMA, Schuko, AS3112, IEC C14/C20 y otros estándares regionales según cada proyecto, incluyendo OEM/ODM.",
        },
      ],
    },
    ru: {
      name: "PDU британского стандарта (BS1363)",
      shortName: "PDU британский",
      tagline: "Монтируемый в стойку блок PDU высотой 1U с розетками BS1363 британского стандарта для шкафов Великобритании и CEE-рынков.",
      overview:
        "Британский PDU Wandtung — это монтируемый в стойку блок распределения питания высотой 1U, оснащённый розетками британского стандарта (BS1363), подсвечиваемым двухполюсным выключателем под пылезащитной крышкой, встроенным автоматическим выключателем и модулем защиты от перенапряжения SPD с зелёным светодиодным индикатором, разработанный для шкафов центров обработки данных и телекоммуникационного оборудования Великобритании и CEE-рынков. Использует шину из чистой красной меди 99,9% и прочный алюминиевый корпус толщиной 1,5 мм, поставляется с кабелем питания на 13A и доступен с 6, 8, 10 или 12 розетками и индивидуальными типами входных вилок.",
      keyFeatures: [
        "Розетки британского стандарта BS1363, конфигурации на 6/8/10/12 розеток",
        "Подсвечиваемый двухполюсный выключатель под пылезащитной крышкой, одновременно размыкает фазу и нейтраль",
        "Встроенный автоматический выключатель и защита SPD от перенапряжения с зелёным светодиодным индикатором",
        "Шина из чистой красной меди 99,9% для низкого импеданса и меньшего нагрева",
        "Прочный алюминиевый корпус толщиной 1,5 мм, огнестойкий и ударопрочный",
        "Кабель питания на 13A, прочная медная жила 1,5 мм², мощность 2500Вт, термостойкий",
        "Индивидуальные типы входных вилок (BS1363, NEMA, Schuko, AS3112, IEC C14/C20); доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "230В" },
            { label: "Номинальный ток", value: "13A" },
            { label: "Номинальная мощность", value: "2500Вт" },
            { label: "Номинальная частота", value: "50 Гц" },
          ],
        },
        {
          title: "Вход / Выход",
          specs: [
            { label: "Входная вилка", value: "BS1363 (доступны NEMA, Schuko, AS3112, IEC C14/C20 по запросу)" },
            { label: "Выходные розетки", value: "6 / 8 / 10 / 12 × розеток BS1363" },
            { label: "Кабель", value: "Медная жила 1,5 мм², термостойкий, доступны индивидуальные длины" },
          ],
        },
        {
          title: "Механика и защита",
          specs: [
            { label: "Монтаж", value: "Стойка 1U, горизонтально" },
            { label: "Материал корпуса", value: "Прочный алюминиевый корпус 1,5 мм" },
            { label: "Материал шины", value: "Чистая красная медь 99,9%" },
            { label: "Защита", value: "Подсвечиваемый двухполюсный выключатель с пылезащитной крышкой, встроенный автоматический выключатель, защита SPD от перенапряжения" },
          ],
        },
      ],
      applications: [
        "Стойки центров обработки данных Великобритании и CEE-рынков",
        "Помещения телекоммуникационного оборудования британского стандарта",
        "Шкафы колокации",
        "Шкафы промышленного и сетевого управления",
      ],
      customizationOptions: [
        "Количество розеток (6 / 8 / 10 / 12)",
        "Входная вилка и длина шнура (BS1363, NEMA, Schuko, AS3112, IEC C14/C20 и другие региональные стандарты)",
        "Индивидуальный брендинг / маркировка",
        "Упаковка OEM / ODM",
      ],
      standards: ["Разработан в соответствии со стандартами разъёмов BS1363", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Что такое британский PDU и где он используется?",
          answer:
            "Британский PDU — это блок распределения питания для стойки, оснащённый розетками BS1363 — стандартным типом розеток, используемым в Великобритании и ряде стран CEE-рынка. Он используется для распределения питания стойки на ИТ-оборудование с кабелями питания типа BS1363.",
        },
        {
          question: "Включена ли в британский PDU защита от перенапряжения?",
          answer:
            "Да. Каждый блок включает встроенный модуль SPD (устройство защиты от перенапряжения) с зелёным светодиодным индикатором и встроенный автоматический выключатель, а также подсвечиваемый двухполюсный выключатель под пылезащитной крышкой, одновременно размыкающий фазу и нейтраль.",
        },
        {
          question: "Можно ли настроить количество розеток или входную вилку?",
          answer:
            "Да. Wandtung является прямым производителем и предлагает британский PDU с 6, 8, 10 или 12 розетками, с входной вилкой, настраиваемой под стандарты BS1363, NEMA, Schuko, AS3112, IEC C14/C20 и другие региональные стандарты под каждый проект, включая OEM/ODM.",
        },
      ],
    },
    zh: {
      name: "英标（BS1363）PDU",
      shortName: "英标PDU",
      tagline: "配备英标BS1363插座的1U机架式PDU，适用于英国及CEE市场机柜。",
      overview:
        "万电通英标PDU是一款1U机架式配电单元，配备英国标准（BS1363）插座、带防尘罩的双极发光开关、内置断路器，以及带绿色LED指示灯的SPD浪涌保护模块，专为英国及CEE市场的数据中心与电信机柜设计。采用99.9%纯红铜排，1.5mm加厚铝合金外壳，配备13A额定电源线，提供6/8/10/12路插座及定制输入插头选项。",
      keyFeatures: [
        "英标BS1363插座，提供6/8/10/12路配置",
        "带防尘罩的双极发光开关，可同时切断火线与零线",
        "内置断路器及带绿色LED指示灯的SPD浪涌保护",
        "99.9%纯红铜排，低阻抗、低温升",
        "1.5mm加厚铝合金外壳，阻燃耐冲击",
        "13A额定电源线，1.5mm²加厚铜芯，2500W容量，耐高温",
        "定制输入插头类型（BS1363、NEMA、德标、AS3112、IEC C14/C20）；支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "230V" },
            { label: "额定电流", value: "13A" },
            { label: "额定功率", value: "2500W" },
            { label: "额定频率", value: "50Hz" },
          ],
        },
        {
          title: "输入/输出",
          specs: [
            { label: "输入插头", value: "BS1363（可定制NEMA、德标、AS3112、IEC C14/C20）" },
            { label: "输出插座", value: "6/8/10/12×BS1363插座" },
            { label: "线缆", value: "1.5mm²铜芯，耐高温，可定制长度" },
          ],
        },
        {
          title: "机械结构与保护",
          specs: [
            { label: "安装方式", value: "1U机架，水平安装" },
            { label: "外壳材质", value: "1.5mm加厚铝合金外壳" },
            { label: "铜排材质", value: "99.9%纯红铜" },
            { label: "保护", value: "带防尘罩的双极发光开关、内置断路器、SPD浪涌保护" },
          ],
        },
      ],
      applications: ["英国及CEE市场数据中心机架", "英标电信设备间", "托管机柜", "工业与网络控制柜"],
      customizationOptions: ["插座数量（6/8/10/12）", "输入插头与线缆长度（BS1363、NEMA、德标、AS3112、IEC C14/C20等区域标准）", "定制品牌/标识", "OEM/ODM包装"],
      standards: ["按BS1363连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么是英标PDU？用在哪里？",
          answer:
            "英标PDU是配备BS1363插座的机架式配电单元，这是英国及多个CEE市场国家使用的标准插座类型。用于将机架电力分配给配备BS1363电源线的IT设备。",
        },
        {
          question: "英标PDU是否包含浪涌保护？",
          answer:
            "是的。每台设备均内置带绿色LED指示灯的SPD（浪涌保护装置）模块及内置断路器，同时配备带防尘罩的双极发光开关，可同时切断火线与零线。",
        },
        {
          question: "插座数量或输入插头可以定制吗？",
          answer:
            "可以。万电通是工厂直营制造商，英标PDU提供6、8、10或12路插座，输入插头可根据项目定制为BS1363、NEMA、德标、AS3112、IEC C14/C20等区域标准，包括OEM/ODM。",
        },
      ],
    },
  },

  "iec-pdu": {
    ar: {
      name: "وحدة PDU بمعيار IEC (C13/C19)",
      shortName: "PDU معياري IEC",
      tagline: "وحدة توزيع طاقة للراك 1U بمنافذ IEC من نوعي C13 وC19 لخزانات مراكز البيانات حول العالم.",
      overview:
        "وحدة PDU المعيارية IEC من واندتونغ هي وحدة توزيع طاقة للراك بارتفاع 1U مزودة بمنافذ IEC 60320 من نوعي C13 وC19، ومفتاح طاقة مضاء مدمج، وحماية تلقائية من الحمل الزائد، مصممة لخزانات مراكز البيانات والاتصالات حول العالم. تُركَّب رأسياً (0U) أو أفقياً، وتستخدم كابل طاقة متيناً بنواة نحاسية بقدرة تصل إلى 1875 واط، وتُركَّب بواسطة آذان تثبيت مدمجة لتوفير تركيب آمن ومتعدد الاستخدامات.",
      keyFeatures: [
        "مزيج من منافذ IEC 60320 من نوعي C13 وC19 (مثال: 6×C13 و2×C19) لمعدات الخوادم والشبكات",
        "مفتاح طاقة مضاء بحماية تلقائية من الحمل الزائد",
        "هيكل معدني أسود متين للتركيب الرأسي (0U) أو الأفقي في الراك",
        "آذان تثبيت مدمجة لتركيب آمن ومتعدد الاستخدامات",
        "كابل بنواة نحاسية متينة بمقياس 14 AWG / 2.08 مم²، بقدرة 1875 واط، بنية وفق معيار UL",
        "متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "100–125 فولت / 200–250 فولت" },
            { label: "القدرة المقننة", value: "1875 واط" },
            { label: "التردد المقنن", value: "50/60 هرتز" },
          ],
        },
        {
          title: "الدخل / الخرج",
          specs: [
            { label: "منافذ الخرج", value: "IEC 60320 من نوعي C13 وC19، مزيج مخصص متاح" },
            { label: "الكابل", value: "نواة نحاسية 14 AWG / 2.08 مم²، بنية وفق معيار UL" },
          ],
        },
        {
          title: "الهيكل والحماية",
          specs: [
            { label: "التركيب", value: "راك 0U رأسي أو أفقي، آذان تثبيت مدمجة" },
            { label: "مادة الهيكل", value: "هيكل معدني أسود متين" },
            { label: "الحماية", value: "مفتاح مضاء بحماية تلقائية من الحمل الزائد" },
          ],
        },
      ],
      applications: [
        "خزانات مراكز البيانات حول العالم",
        "غرف الخوادم التي تتطلب كابلات معدات مختلطة C13/C19",
        "خزانات معدات الاتصالات والشبكات",
        "خزانات الاستضافة المشتركة",
      ],
      customizationOptions: [
        "عدد ومزيج منافذ C13/C19",
        "قابس الدخل وطول الكابل",
        "اتجاه التركيب",
        "علامة تجارية/تصنيف مخصص",
        "تعبئة OEM/ODM",
      ],
      standards: ["مصمم وفق معايير موصلات IEC 60320", "الشهادات متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما الفرق بين منفذ C13 ومنفذ C19؟",
          answer:
            "C13 هو منفذ IEC القياسي المستخدم في معظم كابلات الخوادم والمحولات ومعدات الشبكات؛ أما C19 فهو منفذ بتيار أعلى يُستخدم لمعدات ذات استهلاك طاقة أكبر، مثل حاويات الخوادم النصلية وبعض وحدات UPS. يتيح الجمع بين النوعين في وحدة واحدة خدمة معدات بكلا نوعي كابلات الطاقة.",
        },
        {
          question: "هل يمكن تركيب وحدة PDU المعيارية IEC رأسياً في الراك؟",
          answer:
            "نعم. الوحدة مصممة للتركيب الرأسي 0U على جانب الراك أو التركيب الأفقي 1U، مع آذان تثبيت مدمجة لتوفير تركيب آمن في كلتا الحالتين.",
        },
        {
          question: "هل يمكن لواندتونغ تخصيص مزيج منافذ C13/C19؟",
          answer:
            "نعم. واندتونغ مُصنّع مباشر من المصنع، ويقوم بتكوين عدد ومزيج منافذ C13/C19 وقابس الدخل وطول الكابل بما يتناسب مع مواصفات الراك والمعدات لكل مشروع، بما في ذلك OEM/ODM.",
        },
      ],
    },
    fr: {
      name: "PDU aux normes IEC (C13/C19)",
      shortName: "PDU IEC",
      tagline: "PDU montable en rack 1U à prises IEC C13 et C19 pour armoires de centres de données du monde entier.",
      overview:
        "Le PDU IEC Wandtung est une unité de distribution d'énergie montable en rack 1U équipée de prises IEC 60320 C13 et C19, d'un interrupteur d'alimentation lumineux intégré et d'une protection automatique contre les surcharges, conçu pour les armoires de centres de données et de télécommunications du monde entier. Il se monte verticalement (0U) ou horizontalement, utilise un cordon d'alimentation robuste à âme cuivre d'une capacité de 1875W, et s'installe avec des pattes de fixation intégrées pour un ajustement sûr et polyvalent.",
      keyFeatures: [
        "Mélange de prises IEC 60320 C13 et C19 (par ex. 6× C13 et 2× C19) pour équipements serveurs et réseau",
        "Interrupteur d'alimentation lumineux avec protection automatique contre les surcharges",
        "Boîtier métallique noir robuste pour montage en rack vertical (0U) ou horizontal",
        "Pattes de fixation intégrées pour une installation sûre et polyvalente",
        "Câble à âme cuivre robuste 14 AWG / 2,08 mm², capacité 1875W, construction aux normes UL",
        "OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "100–125V / 200–250V" },
            { label: "Puissance nominale", value: "1875W" },
            { label: "Fréquence nominale", value: "50/60 Hz" },
          ],
        },
        {
          title: "Entrée / Sortie",
          specs: [
            { label: "Prises de sortie", value: "IEC 60320 C13 et C19, mélange personnalisé disponible" },
            { label: "Câble", value: "Âme cuivre 14 AWG / 2,08 mm², construction aux normes UL" },
          ],
        },
        {
          title: "Mécanique et protection",
          specs: [
            { label: "Montage", value: "Rack 0U vertical ou horizontal, pattes de fixation intégrées" },
            { label: "Matériau du boîtier", value: "Boîtier métallique noir robuste" },
            { label: "Protection", value: "Interrupteur lumineux avec protection automatique contre les surcharges" },
          ],
        },
      ],
      applications: [
        "Racks de centres de données dans le monde entier",
        "Salles serveurs nécessitant des cordons d'équipement C13/C19 mixtes",
        "Armoires d'équipement télécoms et réseau",
        "Armoires de colocation",
      ],
      customizationOptions: [
        "Nombre et mélange de prises C13/C19",
        "Fiche d'entrée et longueur de câble",
        "Orientation de montage",
        "Marquage / étiquetage personnalisé",
        "Conditionnement OEM / ODM",
      ],
      standards: ["Conçu selon les normes de connecteurs IEC 60320", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Quelle est la différence entre une prise C13 et une prise C19 ?",
          answer:
            "C13 est la prise IEC standard utilisée par la plupart des cordons d'alimentation de serveurs, commutateurs et équipements réseau ; C19 est une prise à courant plus élevé utilisée par les équipements à consommation plus importante, comme certains châssis lame et onduleurs. Combiner les deux sur un même PDU permet à une seule unité de desservir des équipements des deux types de cordon.",
        },
        {
          question: "Le PDU IEC peut-il être monté verticalement dans le rack ?",
          answer:
            "Oui. L'unité est conçue pour un montage vertical 0U le long du rack ou un montage horizontal 1U, avec des pattes de fixation intégrées pour un ajustement sûr dans les deux cas.",
        },
        {
          question: "Wandtung peut-il personnaliser le mélange de prises C13/C19 ?",
          answer:
            "Oui. Wandtung est un fabricant direct d'usine et configure le nombre et le mélange de prises C13/C19, la fiche d'entrée et la longueur de câble selon les spécifications de rack et d'équipement de chaque projet, y compris en OEM/ODM.",
        },
      ],
    },
    es: {
      name: "PDU de estándar IEC (C13/C19)",
      shortName: "PDU IEC",
      tagline: "PDU de montaje en rack 1U con tomas IEC C13 y C19 para gabinetes de centros de datos de todo el mundo.",
      overview:
        "El PDU IEC de Wandtung es una unidad de distribución de energía de montaje en rack 1U equipada con tomas IEC 60320 C13 y C19, un interruptor de encendido iluminado integrado y protección automática contra sobrecargas, diseñado para gabinetes de centros de datos y telecomunicaciones de todo el mundo. Se monta vertical (0U) u horizontalmente, utiliza un cable de alimentación resistente con núcleo de cobre con capacidad de 1875W, y se instala con orejetas de montaje integradas para un ajuste seguro y versátil.",
      keyFeatures: [
        "Combinación de tomas IEC 60320 C13 y C19 (p. ej. 6× C13 y 2× C19) para equipos de servidores y red",
        "Interruptor de encendido iluminado con protección automática contra sobrecargas",
        "Carcasa metálica negra robusta para montaje en rack vertical (0U) u horizontal",
        "Orejetas de montaje integradas para una instalación segura y versátil",
        "Cable con núcleo de cobre resistente 14 AWG / 2,08 mm², capacidad de 1875W, construcción según norma UL",
        "OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Tensión nominal", value: "100–125V / 200–250V" },
            { label: "Potencia nominal", value: "1875W" },
            { label: "Frecuencia nominal", value: "50/60 Hz" },
          ],
        },
        {
          title: "Entrada / Salida",
          specs: [
            { label: "Tomas de salida", value: "IEC 60320 C13 y C19, combinación personalizada disponible" },
            { label: "Cable", value: "Núcleo de cobre 14 AWG / 2,08 mm², construcción según norma UL" },
          ],
        },
        {
          title: "Mecánica y protección",
          specs: [
            { label: "Montaje", value: "Rack 0U vertical u horizontal, orejetas de montaje integradas" },
            { label: "Material de la carcasa", value: "Carcasa metálica negra robusta" },
            { label: "Protección", value: "Interruptor iluminado con protección automática contra sobrecargas" },
          ],
        },
      ],
      applications: [
        "Racks de centros de datos de todo el mundo",
        "Salas de servidores que requieren cables de equipo mixtos C13/C19",
        "Gabinetes de equipos de telecomunicaciones y red",
        "Gabinetes de colocación",
      ],
      customizationOptions: [
        "Cantidad y combinación de tomas C13/C19",
        "Enchufe de entrada y longitud del cable",
        "Orientación de montaje",
        "Marca / etiquetado personalizado",
        "Empaque OEM / ODM",
      ],
      standards: ["Diseñado según los estándares de conectores IEC 60320", "Certificación disponible bajo pedido según las especificaciones del proyecto"],
      faqs: [
        {
          question: "¿Cuál es la diferencia entre una toma C13 y una C19?",
          answer:
            "C13 es la toma IEC estándar utilizada por la mayoría de los cables de servidores, switches y equipos de red; C19 es una toma de mayor corriente utilizada por equipos con mayor consumo, como chasis blade y algunas UPS. Combinar ambas en un mismo PDU permite que una sola unidad dé servicio a equipos con ambos tipos de cable.",
        },
        {
          question: "¿Se puede montar el PDU IEC verticalmente en el rack?",
          answer:
            "Sí. La unidad está diseñada para montaje vertical 0U a lo largo del rack o montaje horizontal 1U, con orejetas de montaje integradas para un ajuste seguro en ambos casos.",
        },
        {
          question: "¿Puede Wandtung personalizar la combinación de tomas C13/C19?",
          answer:
            "Sí. Wandtung es un fabricante directo de fábrica y configura la cantidad y combinación de tomas C13/C19, el enchufe de entrada y la longitud del cable según las especificaciones de rack y equipo de cada proyecto, incluyendo OEM/ODM.",
        },
      ],
    },
    ru: {
      name: "PDU стандарта IEC (C13/C19)",
      shortName: "PDU IEC",
      tagline: "Монтируемый в стойку блок PDU высотой 1U с розетками IEC C13 и C19 для шкафов центров обработки данных по всему миру.",
      overview:
        "PDU IEC Wandtung — это монтируемый в стойку блок распределения питания высотой 1U, оснащённый розетками IEC 60320 C13 и C19, встроенным подсвечиваемым выключателем питания и автоматической защитой от перегрузки, разработанный для шкафов центров обработки данных и телекоммуникационного оборудования по всему миру. Устанавливается вертикально (0U) или горизонтально, использует прочный кабель питания с медной жилой мощностью до 1875Вт и монтируется с помощью встроенных монтажных ушек для надёжной и универсальной установки.",
      keyFeatures: [
        "Смешанные розетки IEC 60320 C13 и C19 (например, 6× C13 и 2× C19) для серверного и сетевого оборудования",
        "Подсвечиваемый выключатель питания с автоматической защитой от перегрузки",
        "Прочный чёрный металлический корпус для вертикального (0U) или горизонтального монтажа в стойку",
        "Встроенные монтажные ушки для надёжной и универсальной установки",
        "Прочный медный кабель 14 AWG / 2,08 мм², мощность 1875Вт, конструкция по стандарту UL",
        "Доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "100–125В / 200–250В" },
            { label: "Номинальная мощность", value: "1875Вт" },
            { label: "Номинальная частота", value: "50/60 Гц" },
          ],
        },
        {
          title: "Вход / Выход",
          specs: [
            { label: "Выходные розетки", value: "IEC 60320 C13 и C19, доступна индивидуальная комбинация" },
            { label: "Кабель", value: "Медная жила 14 AWG / 2,08 мм², конструкция по стандарту UL" },
          ],
        },
        {
          title: "Механика и защита",
          specs: [
            { label: "Монтаж", value: "Стойка 0U вертикально или горизонтально, встроенные монтажные ушки" },
            { label: "Материал корпуса", value: "Прочный чёрный металлический корпус" },
            { label: "Защита", value: "Подсвечиваемый выключатель с автоматической защитой от перегрузки" },
          ],
        },
      ],
      applications: [
        "Стойки центров обработки данных по всему миру",
        "Серверные помещения, требующие смешанных кабелей оборудования C13/C19",
        "Шкафы телекоммуникационного и сетевого оборудования",
        "Шкафы колокации",
      ],
      customizationOptions: [
        "Количество и комбинация розеток C13/C19",
        "Входная вилка и длина кабеля",
        "Ориентация монтажа",
        "Индивидуальный брендинг / маркировка",
        "Упаковка OEM / ODM",
      ],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60320", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "В чём разница между розетками C13 и C19?",
          answer:
            "C13 — это стандартная розетка IEC, используемая большинством кабелей серверов, коммутаторов и сетевого оборудования; C19 — розетка с более высоким током, используемая оборудованием с большим энергопотреблением, например блейд-шасси и некоторыми ИБП. Совмещение обоих типов на одном PDU позволяет одному блоку обслуживать оборудование с обоими типами кабелей.",
        },
        {
          question: "Можно ли установить PDU IEC вертикально в стойке?",
          answer:
            "Да. Блок рассчитан на вертикальный монтаж 0U вдоль стойки или горизонтальный монтаж 1U, со встроенными монтажными ушками для надёжной установки в обоих случаях.",
        },
        {
          question: "Может ли Wandtung настроить комбинацию розеток C13/C19?",
          answer:
            "Да. Wandtung является прямым производителем и настраивает количество и комбинацию розеток C13/C19, входную вилку и длину кабеля под спецификацию стойки и оборудования каждого проекта, включая OEM/ODM.",
        },
      ],
    },
    zh: {
      name: "IEC标准PDU（C13/C19）",
      shortName: "IEC标准PDU",
      tagline: "配备IEC C13及C19插座的1U机架式PDU，适用于全球数据中心机柜。",
      overview:
        "万电通IEC标准PDU是一款1U机架式配电单元，配备IEC 60320 C13及C19插座、内置发光电源开关及自动过载保护，专为全球数据中心与电信机柜设计。可垂直（0U）或水平安装，采用额定功率达1875W的加厚铜芯电源线，配备内置安装耳片，实现安全、灵活的多种安装方式。",
      keyFeatures: [
        "混合配置IEC 60320 C13及C19插座（如6路C13+2路C19），适配服务器与网络设备",
        "发光电源开关，带自动过载保护",
        "坚固黑色金属外壳，支持机架垂直（0U）或水平安装",
        "内置安装耳片，实现安全、灵活的安装方式",
        "14 AWG / 2.08mm²加厚铜芯线缆，1875W容量，符合UL标准结构",
        "支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "100–125V / 200–250V" },
            { label: "额定功率", value: "1875W" },
            { label: "额定频率", value: "50/60Hz" },
          ],
        },
        {
          title: "输入/输出",
          specs: [
            { label: "输出插座", value: "IEC 60320 C13及C19，可定制混合配置" },
            { label: "线缆", value: "14 AWG / 2.08mm²铜芯，符合UL标准结构" },
          ],
        },
        {
          title: "机械结构与保护",
          specs: [
            { label: "安装方式", value: "0U垂直或水平机架安装，内置安装耳片" },
            { label: "外壳材质", value: "坚固黑色金属外壳" },
            { label: "保护", value: "发光开关，带自动过载保护" },
          ],
        },
      ],
      applications: ["全球数据中心IT机架", "需要混合C13/C19设备电源线的服务器机房", "电信与网络设备机柜", "托管机柜"],
      customizationOptions: ["C13/C19插座数量与混合配置", "输入插头与线缆长度", "安装方向", "定制品牌/标识", "OEM/ODM包装"],
      standards: ["按IEC 60320连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "C13插座和C19插座有什么区别？",
          answer:
            "C13是大多数服务器、交换机及网络设备电源线使用的标准IEC插座；C19则是电流规格更高的插座，用于功耗更大的设备，如刀片服务器机箱及部分UPS设备。在一台PDU上混合配置两种插座，可让单台设备同时为两种电源线类型的设备供电。",
        },
        {
          question: "IEC标准PDU可以垂直安装在机架上吗？",
          answer:
            "可以。该设备既支持沿机架侧面垂直（0U）安装，也支持水平（1U）安装，两种方式均配备内置安装耳片以确保安装牢固。",
        },
        {
          question: "万电通能否定制C13/C19插座混合配置？",
          answer:
            "可以。万电通是工厂直营制造商，可根据每个项目的机架与设备规格定制C13/C19插座数量与混合配置、输入插头及线缆长度，包括OEM/ODM。",
        },
      ],
    },
  },

  "intelligent-pdu": {
    ar: {
      name: "PDU ذكي",
      shortName: "PDU ذكي",
      tagline: "توزيع طاقة راك مُدار عبر الشبكة مع المراقبة والقياس والتحكم عن بُعد.",
      overview:
        "وحدة PDU الذكية من واندتونغ هي وحدة توزيع طاقة مُدارة عبر الشبكة مصممة لمراكز البيانات التي تتطلب رؤية وتحكماً على مستوى المنفذ. تجمع بين مراقبة التيار والجهد والطاقة والطاقة المستهلكة، واستشعار درجة الحرارة والرطوبة، والتحكم عن بُعد بالمنافذ، ويمكن الوصول إليها عبر SNMP وModbus وRS485 وواجهة إدارة ويب.",
      keyFeatures: [
        "مراقبة التيار والجهد والطاقة على مستوى المنفذ",
        "تسجيل تراكمي لاستهلاك الطاقة",
        "منافذ استشعار درجة الحرارة والرطوبة",
        "تحكم وتسلسل عن بُعد للمنافذ الفردية",
        "اتصال SNMP وModbus RTU/TCP وRS485",
        "واجهة إدارة ويب مع عتبات إنذار",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "200–250 فولت / 380–415 فولت" },
            { label: "التيار المقنن", value: "16A / 32A / 63A" },
            { label: "دقة المراقبة", value: "±1% تيار / جهد" },
          ],
        },
        {
          title: "المراقبة والاتصال",
          specs: [
            { label: "البروتوكولات", value: "SNMP v1/v2c/v3، Modbus RTU/TCP، RS485، TCP/IP" },
            { label: "نقاط المراقبة", value: "الجهد، التيار، الطاقة، الطاقة المستهلكة، درجة الحرارة، الرطوبة" },
            { label: "التحكم", value: "تشغيل/إيقاف لكل منفذ، تشغيل متسلسل" },
            { label: "إدارة الإنذارات", value: "إنذارات عتبة عبر SNMP trap، بريد إلكتروني، ويب" },
          ],
        },
        {
          title: "ميكانيكي",
          specs: [
            { label: "التركيب", value: "0U رأسي / أفقي" },
            { label: "الشاشة", value: "LCD محلية (جهد/تيار/طاقة)" },
            { label: "خيارات المنافذ", value: "IEC C13/C19، حسب الدولة" },
          ],
        },
      ],
      applications: [
        "مراكز بيانات فائقة الحجم واستضافة مشتركة",
        "مواقع اتصالات نائية/بدون إضاءة",
        "مراكز بيانات طرفية تتطلب إعادة تدوير الطاقة عن بُعد",
        "بيئات تتطلب تقارير استهلاك الطاقة (تتبع PUE)",
      ],
      customizationOptions: ["عدد المنافذ ونوعها وتجميعها", "اختيار بروتوكول الاتصال", "تخصيص البرامج الثابتة / SNMP MIB", "اختيار مجموعة المستشعرات البيئية"],
      standards: ["مصمم وفق معايير موصلات IEC 60320", "متوافق مع SNMP MIB-II", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما هو PDU الذكي؟",
          answer:
            "PDU الذكي هو وحدة توزيع طاقة للراك مزودة بمراقبة مدمجة واتصال بالشبكة، تتيح للمسؤولين قياس التيار والجهد والطاقة والاستهلاك عن بُعد على مستوى الوحدة أو المنفذ، وفي الطرازات القابلة للتحكم، تشغيل/إيقاف المنافذ عن بُعد.",
        },
        {
          question: "PDU المقاس مقابل PDU القابل للتحكم — ما الفرق؟",
          answer:
            "يُبلغ PDU المقاس عن استخدام الطاقة محلياً أو عن بُعد لكن لا يمكنه التحكم بالمنافذ. يشمل PDU القابل للتحكم كل ما يوفره PDU المقاس بالإضافة إلى تحكم فردي عن بُعد بالمنافذ، مفيد لإعادة تشغيل المعدات المعلقة عن بُعد والتشغيل المتسلسل.",
        },
        {
          question: "هل تصنع واندتونغ وحدات PDU ذكية؟",
          answer:
            "نعم. تصمم واندتونغ وتصنع وحدات PDU ذكية بمراقبة على مستوى المنفذ واتصال SNMP/Modbus/RS485 وتحكم عن بُعد لعملاء مراكز البيانات والاتصالات والصناعة حول العالم، بما في ذلك برامج OEM/ODM.",
        },
        {
          question: "كيف أختار PDU لمركز البيانات؟",
          answer:
            "طابق التيار والجهد المقننين مع دائرة الراك، اختر التركيب الرأسي (0U) لعدد منافذ كبير أو الأفقي للراكات الضحلة، قرر ما إذا كنت تحتاج للقياس أو المراقبة أو التحكم عن بُعد، وتأكد من نوع المنفذ مقابل أسلاك طاقة معداتك.",
        },
      ],
    },
    fr: {
      name: "PDU intelligent",
      shortName: "PDU intelligent",
      tagline: "Distribution électrique en rack gérée par réseau avec surveillance, mesure et commutation à distance.",
      overview:
        "Le PDU intelligent Wandtung est une unité de distribution électrique gérée par réseau conçue pour les centres de données nécessitant visibilité et contrôle au niveau des prises. Il combine surveillance du courant, de la tension, de la puissance et de l'énergie, détection de température et d'humidité, et commutation à distance des prises, accessible via SNMP, Modbus, RS485 et une interface de gestion Web.",
      keyFeatures: [
        "Surveillance du courant, de la tension et de la puissance au niveau des prises",
        "Enregistrement cumulatif de la consommation d'énergie",
        "Ports de capteurs de température et d'humidité",
        "Commutation et séquencement à distance des prises individuelles",
        "Communication SNMP, Modbus RTU/TCP et RS485",
        "Interface de gestion Web avec seuils d'alarme",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "200–250V / 380–415V" },
            { label: "Courant nominal", value: "16A / 32A / 63A" },
            { label: "Précision de mesure", value: "±1% courant / tension" },
          ],
        },
        {
          title: "Surveillance et communication",
          specs: [
            { label: "Protocoles", value: "SNMP v1/v2c/v3, Modbus RTU/TCP, RS485, TCP/IP" },
            { label: "Points de surveillance", value: "Tension, courant, puissance, énergie, température, humidité" },
            { label: "Commutation", value: "Marche/arrêt par prise, démarrage séquencé" },
            { label: "Gestion des alarmes", value: "Alarmes de seuil via SNMP trap, e-mail, web" },
          ],
        },
        {
          title: "Mécanique",
          specs: [
            { label: "Montage", value: "0U vertical / horizontal" },
            { label: "Affichage", value: "LCD local (tension/courant/puissance)" },
            { label: "Options de prises", value: "IEC C13/C19, spécifique au pays" },
          ],
        },
      ],
      applications: [
        "Centres de données hyperscale et colocation",
        "Sites télécoms distants / lights-out",
        "Centres de données edge nécessitant un cyclage d'alimentation à distance",
        "Environnements nécessitant un rapport de consommation (suivi PUE)",
      ],
      customizationOptions: ["Nombre, type et groupement de prises", "Sélection du protocole de communication", "Personnalisation firmware / SNMP MIB", "Sélection du kit de capteurs environnementaux"],
      standards: ["Conçu selon les normes de connecteurs IEC 60320", "Conforme SNMP MIB-II", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Qu'est-ce qu'un PDU intelligent ?",
          answer:
            "Un PDU intelligent est une unité de distribution électrique en rack avec surveillance intégrée et connectivité réseau, permettant aux administrateurs de mesurer à distance le courant, la tension, la puissance et la consommation d'énergie au niveau de l'unité ou de la prise, et sur les modèles commutables, d'allumer/éteindre les prises à distance.",
        },
        {
          question: "PDU mesuré ou PDU commutable — quelle différence ?",
          answer:
            "Un PDU mesuré rapporte l'utilisation de l'énergie localement ou à distance mais ne peut pas contrôler les prises. Un PDU commutable inclut tout ce qu'offre un PDU mesuré plus un contrôle individuel à distance des prises, utile pour redémarrer à distance un équipement bloqué et pour un démarrage séquencé.",
        },
        {
          question: "Wandtung fabrique-t-elle des PDU intelligents ?",
          answer:
            "Oui. Wandtung conçoit et fabrique des PDU intelligents avec surveillance au niveau des prises, connectivité SNMP/Modbus/RS485 et commutation à distance pour les clients de centres de données, télécoms et industriels du monde entier, y compris les programmes OEM/ODM.",
        },
        {
          question: "Comment choisir un PDU pour un centre de données ?",
          answer:
            "Adaptez le courant et la tension nominaux au circuit de votre baie, choisissez un montage vertical (0U) pour un grand nombre de prises ou horizontal pour les baies peu profondes, déterminez si vous avez besoin de mesure, de surveillance ou de commutation à distance, et vérifiez le type de prise par rapport aux cordons d'alimentation de vos équipements.",
        },
      ],
    },
    es: {
      name: "PDU inteligente",
      shortName: "PDU inteligente",
      tagline: "Distribución de energía de rack gestionada por red con monitoreo, medición y conmutación remota.",
      overview:
        "El PDU inteligente de Wandtung es una unidad de distribución de energía gestionada por red, diseñada para centros de datos que requieren visibilidad y control a nivel de toma. Combina monitoreo de corriente, voltaje, potencia y energía, detección de temperatura y humedad, y conmutación remota de tomas, accesible vía SNMP, Modbus, RS485 y una interfaz de gestión web.",
      keyFeatures: [
        "Monitoreo de corriente, voltaje y potencia a nivel de toma",
        "Registro acumulativo del consumo de energía",
        "Puertos de sensores de temperatura y humedad",
        "Conmutación y secuenciación remota de tomas individuales",
        "Comunicación SNMP, Modbus RTU/TCP y RS485",
        "Interfaz de gestión web con umbrales de alarma",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "200–250V / 380–415V" },
            { label: "Corriente nominal", value: "16A / 32A / 63A" },
            { label: "Precisión de monitoreo", value: "±1% corriente / voltaje" },
          ],
        },
        {
          title: "Monitoreo y comunicación",
          specs: [
            { label: "Protocolos", value: "SNMP v1/v2c/v3, Modbus RTU/TCP, RS485, TCP/IP" },
            { label: "Puntos de monitoreo", value: "Voltaje, corriente, potencia, energía, temperatura, humedad" },
            { label: "Conmutación", value: "Encendido/apagado por toma, arranque secuenciado" },
            { label: "Gestión de alarmas", value: "Alarmas de umbral vía SNMP trap, correo electrónico, web" },
          ],
        },
        {
          title: "Mecánico",
          specs: [
            { label: "Montaje", value: "0U vertical / horizontal" },
            { label: "Pantalla", value: "LCD local (voltaje/corriente/potencia)" },
            { label: "Opciones de tomas", value: "IEC C13/C19, específico del país" },
          ],
        },
      ],
      applications: [
        "Centros de datos hyperscale y colocación",
        "Sitios de telecomunicaciones remotos / lights-out",
        "Centros de datos edge que requieren ciclo de energía remoto",
        "Entornos que requieren informes de consumo de energía (seguimiento de PUE)",
      ],
      customizationOptions: ["Cantidad, tipo y agrupación de tomas", "Selección de protocolo de comunicación", "Personalización de firmware / SNMP MIB", "Selección de kit de sensores ambientales"],
      standards: ["Diseñado según los estándares de conectores IEC 60320", "Compatible con SNMP MIB-II", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Qué es un PDU inteligente?",
          answer:
            "Un PDU inteligente es una unidad de distribución de energía de rack con monitoreo integrado y conectividad de red, que permite a los administradores medir remotamente corriente, voltaje, potencia y consumo de energía a nivel de unidad o toma, y en modelos conmutables, encender/apagar tomas de forma remota.",
        },
        {
          question: "PDU medido vs. PDU conmutable — ¿cuál es la diferencia?",
          answer:
            "Un PDU medido reporta el uso de energía local o remotamente pero no puede controlar las tomas. Un PDU conmutable incluye todo lo que ofrece un PDU medido más control remoto individual de tomas, útil para reiniciar remotamente equipos bloqueados y para un arranque secuenciado.",
        },
        {
          question: "¿Fabrica Wandtung PDU inteligentes?",
          answer:
            "Sí. Wandtung diseña y fabrica PDU inteligentes con monitoreo a nivel de toma, conectividad SNMP/Modbus/RS485 y conmutación remota para clientes de centros de datos, telecomunicaciones e industriales en todo el mundo, incluidos programas OEM/ODM.",
        },
        {
          question: "¿Cómo elijo un PDU para un centro de datos?",
          answer:
            "Haga coincidir la corriente y el voltaje nominales con el circuito de su rack, elija montaje vertical (0U) para un alto número de tomas u horizontal para racks poco profundos, decida si necesita medición, monitoreo o conmutación remota, y confirme el tipo de toma frente a los cables de alimentación de su equipo.",
        },
      ],
    },
    ru: {
      name: "Интеллектуальный PDU",
      shortName: "Интеллектуальный PDU",
      tagline: "Сетевое управление распределением питания в стойке с мониторингом, измерением и удалённым переключением.",
      overview:
        "Интеллектуальный PDU Wandtung — это управляемый по сети блок распределения питания, разработанный для дата-центров, которым требуется видимость и контроль на уровне розетки. Он сочетает мониторинг тока, напряжения, мощности и энергопотребления, датчики температуры и влажности, а также удалённое переключение розеток, доступные через SNMP, Modbus, RS485 и веб-интерфейс управления.",
      keyFeatures: [
        "Мониторинг тока, напряжения и мощности на уровне розетки",
        "Накопительный учёт энергопотребления",
        "Порты датчиков температуры и влажности",
        "Удалённое переключение и последовательный запуск отдельных розеток",
        "Связь по SNMP, Modbus RTU/TCP и RS485",
        "Веб-интерфейс управления с пороговыми значениями сигнализации",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "200–250В / 380–415В" },
            { label: "Номинальный ток", value: "16A / 32A / 63A" },
            { label: "Точность измерения", value: "±1% ток / напряжение" },
          ],
        },
        {
          title: "Мониторинг и связь",
          specs: [
            { label: "Протоколы", value: "SNMP v1/v2c/v3, Modbus RTU/TCP, RS485, TCP/IP" },
            { label: "Точки мониторинга", value: "Напряжение, ток, мощность, энергия, температура, влажность" },
            { label: "Переключение", value: "Вкл/выкл по розетке, последовательный запуск" },
            { label: "Управление сигнализацией", value: "Пороговые сигналы через SNMP trap, email, web" },
          ],
        },
        {
          title: "Механические характеристики",
          specs: [
            { label: "Монтаж", value: "0U вертикальный / горизонтальный" },
            { label: "Дисплей", value: "Локальный ЖК (напряжение/ток/мощность)" },
            { label: "Варианты розеток", value: "IEC C13/C19, под конкретную страну" },
          ],
        },
      ],
      applications: [
        "Гипермасштабируемые ЦОД и колокейшн",
        "Удалённые/безлюдные телеком-объекты",
        "Периферийные ЦОД, требующие удалённого перезапуска питания",
        "Среды, требующие отчётности по энергопотреблению (отслеживание PUE)",
      ],
      customizationOptions: ["Количество, тип и группировка розеток", "Выбор протокола связи", "Настройка прошивки / SNMP MIB", "Выбор комплекта датчиков среды"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60320", "Совместим с SNMP MIB-II", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Что такое умный PDU?",
          answer:
            "Умный (интеллектуальный) PDU — это стоечный блок распределения питания со встроенным мониторингом и сетевым подключением, позволяющий администраторам удалённо измерять ток, напряжение, мощность и энергопотребление на уровне устройства или розетки, а в коммутируемых моделях — удалённо включать/выключать розетки.",
        },
        {
          question: "Измеряемый PDU и коммутируемый PDU — в чём разница?",
          answer:
            "Измеряемый PDU сообщает об использовании энергии локально или удалённо, но не может управлять розетками. Коммутируемый PDU включает всё, что предлагает измеряемый PDU, плюс удалённое индивидуальное управление розетками — полезно для удалённой перезагрузки зависшего оборудования и последовательного запуска.",
        },
        {
          question: "Производит ли Wandtung интеллектуальные PDU?",
          answer:
            "Да. Wandtung проектирует и производит интеллектуальные PDU с мониторингом на уровне розетки, подключением по SNMP/Modbus/RS485 и удалённым переключением для клиентов дата-центров, телекоммуникаций и промышленности по всему миру, включая программы OEM/ODM.",
        },
        {
          question: "Как выбрать PDU для дата-центра?",
          answer:
            "Подберите номинальный ток и напряжение под цепь вашей стойки, выберите вертикальный (0U) монтаж для большого числа розеток или горизонтальный для неглубоких стоек, определите, нужны ли вам измерение, мониторинг или удалённое переключение, и сверьте тип розетки с кабелями питания вашего оборудования.",
        },
      ],
    },
    zh: {
      name: "智能PDU",
      shortName: "智能PDU",
      tagline: "具备监控、计量与远程切换能力的网络管理型机架配电。",
      overview:
        "万电通智能PDU是一款网络管理型配电单元,专为需要出口级可视化与控制能力的数据中心而设计。集成电流、电压、功率及能耗监控,温湿度传感,以及远程出口切换功能,可通过SNMP、Modbus、RS485及Web管理界面访问。",
      keyFeatures: [
        "出口级电流、电压及功率监控",
        "累计能耗记录",
        "温湿度传感器接口",
        "远程独立出口切换与顺序上电",
        "支持SNMP、Modbus RTU/TCP及RS485通信",
        "具备告警阈值设置的Web管理界面",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "200–250V / 380–415V" },
            { label: "额定电流", value: "16A / 32A / 63A" },
            { label: "监测精度", value: "±1%(电流/电压)" },
          ],
        },
        {
          title: "监控与通信",
          specs: [
            { label: "通信协议", value: "SNMP v1/v2c/v3、Modbus RTU/TCP、RS485、TCP/IP" },
            { label: "监测点", value: "电压、电流、功率、能耗、温度、湿度" },
            { label: "切换控制", value: "分路开关、顺序上电" },
            { label: "告警管理", value: "通过SNMP trap、邮件、Web发送阈值告警" },
          ],
        },
        {
          title: "机械结构",
          specs: [
            { label: "安装方式", value: "0U垂直 / 水平" },
            { label: "显示屏", value: "本地LCD(电压/电流/功率)" },
            { label: "插座选项", value: "IEC C13/C19、国家标准" },
          ],
        },
      ],
      applications: ["超大规模及托管数据中心", "偏远/无人值守电信站点", "需要远程电源循环的边缘数据中心", "需要能耗报告(PUE跟踪)的环境"],
      customizationOptions: ["插座数量、类型及分组", "通信协议选择", "固件/SNMP MIB定制", "环境传感器套件选择"],
      standards: ["按IEC 60320连接器标准设计", "符合SNMP MIB-II标准", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么是智能PDU？",
          answer: "智能PDU是一种内置监控与网络连接功能的机架配电单元,使管理员能够在单元或出口级别远程测量电流、电压、功率及能耗,并在可控开关型号中远程开关各出口。",
        },
        {
          question: "计量型PDU与可控开关型PDU有什么区别？",
          answer: "计量型PDU可在本地或远程报告用电情况,但无法控制出口。可控开关型PDU在计量型PDU的基础上增加了远程独立出口控制功能,便于远程重启无响应设备及顺序上电。",
        },
        {
          question: "万电通是否生产智能PDU？",
          answer: "是的。万电通为全球数据中心、电信及工业客户设计并生产具备出口级监控、SNMP/Modbus/RS485连接及远程切换功能的智能PDU,并支持OEM/ODM项目。",
        },
        {
          question: "如何为数据中心选择合适的PDU？",
          answer: "将额定电流与电压匹配至机柜回路,大出口数量选用垂直(0U)安装、浅型机柜选用水平安装,判断是否需要计量、监控或远程切换功能,并核实插座类型与设备电源线是否匹配。",
        },
      ],
    },
  },

  "high-power-pdu": {
    ar: {
      name: "PDU عالي الطاقة",
      shortName: "PDU عالي الطاقة",
      tagline: "PDU ثلاثي الطور عالي التيار للحوسبة الكثيفة وراكات تدريب الذكاء الاصطناعي.",
      overview:
        "صُمم PDU عالي الطاقة من واندتونغ للراكات عالية الكثافة مثل مجموعات تدريب الذكاء الاصطناعي وخوادم GPU وهياكل blade، ويدعم دخلاً ثلاثي الطور يصل إلى 63A وعدداً كبيراً من المنافذ مع قضيب نحاسي مقوى وتصميم حراري.",
      keyFeatures: [
        "دخل ثلاثي الطور يصل إلى 63A",
        "قضيب نحاسي مقوى لارتفاع حراري منخفض تحت حمل مستمر عالٍ",
        "كثافة منافذ عالية لراكات GPU/blade",
        "مراقبة وتحكم عن بُعد اختياريان",
        "إرشادات تصميم توازن الأطوار لكل مشروع",
      ],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "380–415 فولت ثلاثي الطور" },
            { label: "التيار المقنن", value: "32A / 63A لكل طور" },
            { label: "توازن الحمل", value: "تجميع منافذ متوازن ثلاثي الطور" },
          ],
        },
        {
          title: "ميكانيكي",
          specs: [
            { label: "التركيب", value: "0U رأسي" },
            { label: "خيارات المنافذ", value: "IEC C13/C19، منافذ عالية التيار مخصصة" },
            { label: "التصميم الحراري", value: "قضيب مقوى، مصنف لحمل مستمر" },
          ],
        },
      ],
      applications: ["راكات حوسبة الذكاء الاصطناعي/GPU", "استضافة مشتركة عالية الكثافة", "هياكل خوادم blade"],
      customizationOptions: ["تخطيط توازن الأطوار", "مزيج المنافذ", "وحدة المراقبة"],
      standards: ["مصمم وفق معايير موصلات IEC 60309", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "متى يكون PDU عالي الطاقة مطلوباً بدلاً من PDU قياسي؟",
          answer:
            "تُستخدم وحدات PDU عالية الطاقة عندما يتجاوز حمل تكنولوجيا المعلومات في الراك ما يمكن أن يوفره PDU قياسي 16A/20A بأمان — عادة راكات حوسبة GPU/الذكاء الاصطناعي الكثيفة أو هياكل blade — ما يتطلب دخلاً ثلاثي الطور 32A أو 63A وتصميم قضيب مقوى.",
        },
      ],
    },
    fr: {
      name: "PDU haute puissance",
      shortName: "PDU haute puissance",
      tagline: "PDU triphasé fort courant pour le calcul dense et les baies d'entraînement IA.",
      overview:
        "Le PDU haute puissance Wandtung est conçu pour les baies à haute densité telles que les clusters d'entraînement IA, serveurs GPU et châssis lames, prenant en charge une entrée triphasée jusqu'à 63A et un grand nombre de prises avec une barre omnibus renforcée et une conception thermique adaptée.",
      keyFeatures: [
        "Entrée triphasée jusqu'à 63A",
        "Barre omnibus en cuivre renforcée pour une faible élévation de température sous charge élevée soutenue",
        "Haute densité de prises pour baies GPU / lames",
        "Surveillance et commutation à distance en option",
        "Conseils de conception d'équilibrage de phase fournis par projet",
      ],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "380–415V triphasé" },
            { label: "Courant nominal", value: "32A / 63A par phase" },
            { label: "Équilibrage de charge", value: "Groupement de prises équilibré triphasé" },
          ],
        },
        {
          title: "Mécanique",
          specs: [
            { label: "Montage", value: "0U vertical" },
            { label: "Options de prises", value: "IEC C13/C19, prises fort courant personnalisées" },
            { label: "Conception thermique", value: "Barre omnibus renforcée, déclassée pour charge continue" },
          ],
        },
      ],
      applications: ["Baies de calcul IA / GPU", "Colocation haute densité", "Châssis serveurs lames"],
      customizationOptions: ["Disposition d'équilibrage de phase", "Mix de prises", "Module de surveillance"],
      standards: ["Conçu selon les normes de connecteurs IEC 60309", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Quand un PDU haute puissance est-il nécessaire au lieu d'un PDU standard ?",
          answer:
            "Les PDU haute puissance sont utilisés lorsque la charge informatique de la baie dépasse ce qu'un PDU standard 16A/20A peut fournir en toute sécurité — généralement des baies de calcul GPU/IA denses ou des châssis lames — nécessitant une entrée triphasée de 32A ou 63A et une conception de barre omnibus renforcée.",
        },
      ],
    },
    es: {
      name: "PDU de alta potencia",
      shortName: "PDU de alta potencia",
      tagline: "PDU trifásico de alta corriente para cómputo denso y racks de entrenamiento de IA.",
      overview:
        "El PDU de alta potencia de Wandtung está diseñado para racks de alta densidad como clústeres de entrenamiento de IA, servidores GPU y chasis blade, soportando entrada trifásica de hasta 63A y alta cantidad de tomas con barra colectora reforzada y diseño térmico adecuado.",
      keyFeatures: [
        "Entrada trifásica de hasta 63A",
        "Barra colectora de cobre reforzada para bajo aumento de calor bajo carga alta sostenida",
        "Alta densidad de tomas para racks GPU / blade",
        "Monitoreo y conmutación remota opcionales",
        "Guía de diseño de equilibrio de fases proporcionada por proyecto",
      ],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "380–415V trifásico" },
            { label: "Corriente nominal", value: "32A / 63A por fase" },
            { label: "Equilibrio de carga", value: "Agrupación de tomas equilibrada trifásica" },
          ],
        },
        {
          title: "Mecánico",
          specs: [
            { label: "Montaje", value: "0U vertical" },
            { label: "Opciones de tomas", value: "IEC C13/C19, tomas de alta corriente personalizadas" },
            { label: "Diseño térmico", value: "Barra colectora reforzada, derateada para carga continua" },
          ],
        },
      ],
      applications: ["Racks de cómputo IA / GPU", "Colocación de alta densidad", "Chasis de servidores blade"],
      customizationOptions: ["Disposición de equilibrio de fases", "Mezcla de tomas", "Módulo de monitoreo"],
      standards: ["Diseñado según los estándares de conectores IEC 60309", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Cuándo se requiere un PDU de alta potencia en lugar de uno estándar?",
          answer:
            "Los PDU de alta potencia se usan cuando la carga de TI del rack supera lo que un PDU estándar de 16A/20A puede entregar de forma segura, típicamente en racks densos de cómputo GPU/IA o chasis blade, requiriendo entrada trifásica de 32A o 63A y diseño de barra colectora reforzada.",
        },
      ],
    },
    ru: {
      name: "Мощный PDU",
      shortName: "Мощный PDU",
      tagline: "Трёхфазный PDU высокого тока для плотных вычислений и стоек обучения ИИ.",
      overview:
        "Мощный PDU Wandtung рассчитан на стойки высокой плотности, такие как кластеры обучения ИИ, GPU-серверы и blade-корпуса, поддерживает трёхфазный вход до 63A и большое число розеток с усиленной шиной и продуманным тепловым дизайном.",
      keyFeatures: [
        "Трёхфазный вход до 63A",
        "Усиленная медная шина для низкого нагрева при устойчивой высокой нагрузке",
        "Высокая плотность розеток для GPU/blade-стоек",
        "Опциональный мониторинг и удалённое переключение",
        "Рекомендации по балансировке фаз для каждого проекта",
      ],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "380–415В трёхфазное" },
            { label: "Номинальный ток", value: "32A / 63A на фазу" },
            { label: "Балансировка нагрузки", value: "Сбалансированная трёхфазная группировка розеток" },
          ],
        },
        {
          title: "Механические характеристики",
          specs: [
            { label: "Монтаж", value: "0U вертикальный" },
            { label: "Варианты розеток", value: "IEC C13/C19, розетки высокого тока под заказ" },
            { label: "Тепловой дизайн", value: "Усиленная шина, дерейтинг под непрерывную нагрузку" },
          ],
        },
      ],
      applications: ["Стойки ИИ/GPU-вычислений", "Высокоплотный колокейшн", "Blade-серверные корпуса"],
      customizationOptions: ["Схема балансировки фаз", "Состав розеток", "Модуль мониторинга"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60309", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Когда требуется мощный PDU вместо стандартного?",
          answer:
            "Мощные PDU используются, когда ИТ-нагрузка стойки превышает возможности стандартного PDU 16A/20A — как правило, в плотных стойках GPU/ИИ-вычислений или blade-корпусах, требующих трёхфазного входа 32A или 63A и усиленной конструкции шины.",
        },
      ],
    },
    zh: {
      name: "高功率PDU",
      shortName: "高功率PDU",
      tagline: "面向高密度计算与AI训练机柜的大电流三相PDU。",
      overview:
        "万电通高功率PDU专为AI训练集群、GPU服务器及刀片式机箱等高密度机柜设计,支持最高63A三相输入及高密度出口,配备加强铜排与热设计。",
      keyFeatures: [
        "三相输入最高63A",
        "加强铜排,确保持续高负载下低温升",
        "适配GPU/刀片式服务器机柜的高出口密度",
        "可选远程监控与切换功能",
        "按项目提供相位均衡设计指导",
      ],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "380–415V三相" },
            { label: "额定电流", value: "每相32A / 63A" },
            { label: "负载均衡", value: "三相均衡出口分组" },
          ],
        },
        {
          title: "机械结构",
          specs: [
            { label: "安装方式", value: "0U垂直" },
            { label: "插座选项", value: "IEC C13/C19、定制大电流插座" },
            { label: "热设计", value: "加强铜排,按连续负载降额设计" },
          ],
        },
      ],
      applications: ["AI/GPU计算机柜", "高密度托管", "刀片式服务器机箱"],
      customizationOptions: ["相位均衡布局", "插座组合", "监控模块"],
      standards: ["按IEC 60309连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "何时需要高功率PDU而非标准PDU？",
          answer: "当机柜IT负载超出标准16A/20A PDU的安全供电能力时,通常是高密度GPU/AI计算机柜或刀片式机箱场景,需要32A或63A三相输入及加强铜排设计,此时应选用高功率PDU。",
        },
      ],
    },
  },

  "metered-pdu": {
    ar: {
      name: "PDU مقاس",
      shortName: "PDU مقاس",
      tagline: "PDU للراك بشاشة محلية للتيار والجهد لرؤية الحمل في الموقع.",
      overview:
        "يضيف PDU المقاس من واندتونغ شاشة رقمية مدمجة إلى PDU راك قياسي، تعرض سحب التيار و/أو الجهد بلمحة دون الحاجة لوصول شبكي — ترقية بسيطة للمواقع التي تحتاج رؤية الحمل أثناء التركيب والصيانة دون الحاجة لمراقبة عن بُعد.",
      keyFeatures: ["شاشة LCD/LED محلية للتيار والجهد", "تكوينات أحادية وثلاثية الطور", "لا اعتماد على الشبكة لقراءات الحمل الأساسية", "نفس القضيب المتين وخيارات المنافذ مثل PDU الراك الأساسي"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "200–250 فولت / 380–415 فولت" },
            { label: "التيار المقنن", value: "16A / 32A / 63A" },
            { label: "الشاشة", value: "مقياس تيار/جهد رقمي محلي" },
          ],
        },
        {
          title: "ميكانيكي",
          specs: [
            { label: "التركيب", value: "0U رأسي / أفقي" },
            { label: "خيارات المنافذ", value: "IEC C13/C19، حسب الدولة" },
          ],
        },
      ],
      applications: ["غرف خوادم بدون تكامل DCIM", "فحوصات حمل التركيب والتشغيل", "خزائن تكنولوجيا معلومات صغيرة"],
      customizationOptions: ["نوع المنافذ وكميتها", "موضع الشاشة", "قابس الدخل"],
      standards: ["مصمم وفق معايير موصلات IEC 60320", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "هل يكفي PDU المقاس، أم أحتاج PDU مراقَب؟",
          answer:
            "يكفي PDU المقاس إذا كان الموظفون في الموقع يحتاجون فقط لفحص حمل بصري عرضي. إذا كنت تحتاج لرؤية بيانات الطاقة عن بُعد دون زيارة الموقع، فإن PDU المراقَب هو الترقية الصحيحة — لا يملك PDU المقاس اتصالاً بالشبكة.",
        },
      ],
    },
    fr: {
      name: "PDU mesuré",
      shortName: "PDU mesuré",
      tagline: "PDU en rack avec affichage local du courant et de la tension pour la visibilité de charge sur site.",
      overview:
        "Le PDU mesuré Wandtung ajoute un affichage numérique intégré à un PDU en rack standard, montrant en un coup d'œil le courant et/ou la tension consommés sans nécessiter d'accès réseau — une mise à niveau simple pour les sites ayant besoin de visibilité de charge pendant l'installation et la maintenance sans nécessiter de surveillance à distance.",
      keyFeatures: ["Affichage LCD/LED local du courant et de la tension", "Configurations monophasées et triphasées", "Aucune dépendance réseau pour les relevés de charge de base", "Même barre omnibus robuste et options de prises que le PDU en rack de base"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "200–250V / 380–415V" },
            { label: "Courant nominal", value: "16A / 32A / 63A" },
            { label: "Affichage", value: "Compteur numérique local courant/tension" },
          ],
        },
        {
          title: "Mécanique",
          specs: [
            { label: "Montage", value: "0U vertical / horizontal" },
            { label: "Options de prises", value: "IEC C13/C19, spécifique au pays" },
          ],
        },
      ],
      applications: ["Salles serveurs sans intégration DCIM", "Vérifications de charge d'installation et de mise en service", "Petites armoires informatiques"],
      customizationOptions: ["Type et quantité de prises", "Emplacement de l'affichage", "Fiche d'entrée"],
      standards: ["Conçu selon les normes de connecteurs IEC 60320", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Un PDU mesuré suffit-il, ou ai-je besoin d'un PDU surveillé ?",
          answer:
            "Un PDU mesuré suffit si le personnel sur site n'a besoin que d'une vérification visuelle occasionnelle de la charge. Si vous devez voir les données d'alimentation à distance sans visite sur site, un PDU surveillé est la bonne mise à niveau — un PDU mesuré n'a pas de connectivité réseau.",
        },
      ],
    },
    es: {
      name: "PDU medido",
      shortName: "PDU medido",
      tagline: "PDU de rack con pantalla local de corriente y voltaje para visibilidad de carga en sitio.",
      overview:
        "El PDU medido de Wandtung añade una pantalla digital integrada a un PDU de rack estándar, mostrando de un vistazo la corriente y/o el voltaje consumidos sin requerir acceso a la red — una actualización sencilla para sitios que necesitan visibilidad de carga durante la instalación y el mantenimiento sin requerir monitoreo remoto.",
      keyFeatures: ["Pantalla LCD/LED local de corriente y voltaje", "Configuraciones monofásicas y trifásicas", "Sin dependencia de red para lecturas de carga básicas", "Misma barra colectora robusta y opciones de tomas que el PDU de rack base"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "200–250V / 380–415V" },
            { label: "Corriente nominal", value: "16A / 32A / 63A" },
            { label: "Pantalla", value: "Medidor digital local de corriente/voltaje" },
          ],
        },
        {
          title: "Mecánico",
          specs: [
            { label: "Montaje", value: "0U vertical / horizontal" },
            { label: "Opciones de tomas", value: "IEC C13/C19, específico del país" },
          ],
        },
      ],
      applications: ["Salas de servidores sin integración DCIM", "Verificaciones de carga de instalación y puesta en marcha", "Armarios de TI pequeños"],
      customizationOptions: ["Tipo y cantidad de tomas", "Ubicación de la pantalla", "Enchufe de entrada"],
      standards: ["Diseñado según los estándares de conectores IEC 60320", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Es suficiente un PDU medido, o necesito uno monitoreado?",
          answer:
            "Un PDU medido es suficiente si el personal en sitio solo necesita una verificación visual ocasional de la carga. Si necesita ver los datos de energía de forma remota sin visitar el sitio, un PDU monitoreado es la actualización correcta: un PDU medido no tiene conectividad de red.",
        },
      ],
    },
    ru: {
      name: "Измеряемый PDU",
      shortName: "Измеряемый PDU",
      tagline: "Стоечный PDU с локальным дисплеем тока и напряжения для визуального контроля нагрузки на объекте.",
      overview:
        "Измеряемый PDU Wandtung добавляет встроенный цифровой дисплей к стандартному стоечному PDU, показывая потребляемый ток и/или напряжение с первого взгляда без необходимости сетевого доступа — простое обновление для объектов, которым нужна видимость нагрузки во время монтажа и обслуживания без удалённого мониторинга.",
      keyFeatures: ["Локальный ЖК/светодиодный дисплей тока и напряжения", "Однофазное и трёхфазное исполнение", "Отсутствие зависимости от сети для базовых показаний нагрузки", "Та же прочная шина и варианты розеток, что и у базового стоечного PDU"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "200–250В / 380–415В" },
            { label: "Номинальный ток", value: "16A / 32A / 63A" },
            { label: "Дисплей", value: "Локальный цифровой измеритель тока/напряжения" },
          ],
        },
        {
          title: "Механические характеристики",
          specs: [
            { label: "Монтаж", value: "0U вертикальный / горизонтальный" },
            { label: "Варианты розеток", value: "IEC C13/C19, под конкретную страну" },
          ],
        },
      ],
      applications: ["Серверные без интеграции с DCIM", "Проверка нагрузки при монтаже и пусконаладке", "Небольшие ИТ-шкафы"],
      customizationOptions: ["Тип и количество розеток", "Расположение дисплея", "Входная вилка"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60320", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Достаточно ли измеряемого PDU, или нужен контролируемый?",
          answer:
            "Измеряемого PDU достаточно, если персоналу на объекте нужна лишь периодическая визуальная проверка нагрузки. Если требуется удалённо видеть данные о питании без выезда на объект, правильным решением станет контролируемый PDU — у измеряемого PDU нет сетевого подключения.",
        },
      ],
    },
    zh: {
      name: "计量型PDU",
      shortName: "计量型PDU",
      tagline: "配备本地电流电压显示的机架PDU,便于现场负载可视化。",
      overview:
        "万电通计量型PDU在标准机架PDU基础上增加了内置数字显示屏,无需联网即可一目了然地查看电流和/或电压负载——适合安装与维护阶段需要负载可视化、但暂不需要远程监控的场地的简易升级方案。",
      keyFeatures: ["本地LCD/LED电流电压显示", "单相与三相配置", "基础负载读数无需依赖网络", "与基础款机架PDU相同的坚固铜排与插座选项"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "200–250V / 380–415V" },
            { label: "额定电流", value: "16A / 32A / 63A" },
            { label: "显示", value: "本地数字电流/电压表" },
          ],
        },
        {
          title: "机械结构",
          specs: [
            { label: "安装方式", value: "0U垂直 / 水平" },
            { label: "插座选项", value: "IEC C13/C19、国家标准" },
          ],
        },
      ],
      applications: ["无DCIM集成的机房", "安装调试阶段负载检查", "小型IT机柜"],
      customizationOptions: ["插座类型与数量", "显示屏位置", "输入插头"],
      standards: ["按IEC 60320连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "计量型PDU是否足够,还是需要监控型PDU？",
          answer: "如果现场人员只需偶尔目视检查负载,计量型PDU即可满足需求。如果需要在无需到场的情况下远程查看电力数据,则应升级至监控型PDU——计量型PDU不具备网络连接能力。",
        },
      ],
    },
  },

  "monitored-pdu": {
    ar: {
      name: "PDU مراقَب",
      shortName: "PDU مراقَب",
      tagline: "PDU متصل بالشبكة يُبلغ عن بيانات التيار والجهد والطاقة والطاقة المستهلكة عن بُعد.",
      overview:
        "يُبلغ PDU المراقَب من واندتونغ عن التيار والجهد والطاقة والاستهلاك عبر الشبكة عبر SNMP أو Modbus، ما يمنح فرق المنشأة وتكنولوجيا المعلومات رؤية عن بُعد لاستخدام الطاقة على مستوى الراك دون فحوصات في الموقع — دون قدرة التحكم بالمنافذ الموجودة في PDU الذكي بالكامل.",
      keyFeatures: ["مراقبة عن بُعد للتيار والجهد والطاقة والاستهلاك", "اتصال SNMP وModbus RTU/TCP", "واجهة مراقبة قائمة على الويب", "إشعارات إنذار العتبة"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "200–250 فولت / 380–415 فولت" },
            { label: "التيار المقنن", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "المراقبة والاتصال",
          specs: [
            { label: "البروتوكولات", value: "SNMP v1/v2c/v3، Modbus RTU/TCP" },
            { label: "نقاط المراقبة", value: "الجهد، التيار، الطاقة، الاستهلاك" },
            { label: "التحكم", value: "غير مضمن — راجع PDU القابل للتحكم" },
          ],
        },
      ],
      applications: ["فوترة/تقارير الاستضافة المشتركة متعددة المستأجرين", "تتبع PUE", "مراقبة المنشأة عن بُعد"],
      customizationOptions: ["عدد المنافذ ونوعها", "بروتوكول الاتصال", "عتبات الإنذار"],
      standards: ["مصمم وفق معايير موصلات IEC 60320", "متوافق مع SNMP MIB-II", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "PDU المقاس مقابل PDU المراقَب — ما الفرق؟",
          answer:
            "يعرض PDU المقاس القراءات محلياً فقط على شاشة مدمجة. يضيف PDU المراقَب اتصالاً بالشبكة بحيث يمكن عرض تلك القراءات — وغالباً استهلاك الطاقة بمرور الوقت — عن بُعد دون زيارة الموقع.",
        },
      ],
    },
    fr: {
      name: "PDU surveillé",
      shortName: "PDU surveillé",
      tagline: "PDU connecté au réseau rapportant à distance les données de courant, tension, puissance et énergie.",
      overview:
        "Le PDU surveillé Wandtung rapporte le courant, la tension, la puissance et la consommation d'énergie sur le réseau via SNMP ou Modbus, offrant aux équipes des installations et informatiques une visibilité à distance de l'utilisation de l'alimentation au niveau de la baie sans vérifications sur site — sans la capacité de commutation des prises d'un PDU pleinement intelligent.",
      keyFeatures: ["Surveillance à distance du courant, de la tension, de la puissance et de l'énergie", "Connectivité SNMP et Modbus RTU/TCP", "Interface de surveillance basée sur le web", "Notifications d'alarme de seuil"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "200–250V / 380–415V" },
            { label: "Courant nominal", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "Surveillance et communication",
          specs: [
            { label: "Protocoles", value: "SNMP v1/v2c/v3, Modbus RTU/TCP" },
            { label: "Points de surveillance", value: "Tension, courant, puissance, énergie" },
            { label: "Commutation", value: "Non inclus — voir PDU commutable" },
          ],
        },
      ],
      applications: ["Facturation/rapports de colocation multi-locataires", "Suivi PUE", "Surveillance à distance des installations"],
      customizationOptions: ["Nombre et type de prises", "Protocole de communication", "Seuils d'alarme"],
      standards: ["Conçu selon les normes de connecteurs IEC 60320", "Conforme SNMP MIB-II", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "PDU mesuré vs PDU surveillé — quelle différence ?",
          answer:
            "Un PDU mesuré n'affiche les relevés que localement sur un affichage intégré. Un PDU surveillé ajoute une connectivité réseau afin que ces relevés — et souvent la consommation d'énergie dans le temps — puissent être consultés à distance sans visite sur site.",
        },
      ],
    },
    es: {
      name: "PDU monitoreado",
      shortName: "PDU monitoreado",
      tagline: "PDU conectado a la red que reporta remotamente datos de corriente, voltaje, potencia y energía.",
      overview:
        "El PDU monitoreado de Wandtung reporta corriente, voltaje, potencia y consumo de energía a través de la red vía SNMP o Modbus, brindando a los equipos de instalaciones y TI visibilidad remota del uso de energía a nivel de rack sin verificaciones en sitio, sin la capacidad de conmutación de tomas de un PDU totalmente inteligente.",
      keyFeatures: ["Monitoreo remoto de corriente, voltaje, potencia y energía", "Conectividad SNMP y Modbus RTU/TCP", "Interfaz de monitoreo basada en web", "Notificaciones de alarma por umbral"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "200–250V / 380–415V" },
            { label: "Corriente nominal", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "Monitoreo y comunicación",
          specs: [
            { label: "Protocolos", value: "SNMP v1/v2c/v3, Modbus RTU/TCP" },
            { label: "Puntos de monitoreo", value: "Voltaje, corriente, potencia, energía" },
            { label: "Conmutación", value: "No incluida — ver PDU conmutable" },
          ],
        },
      ],
      applications: ["Facturación/informes de colocación multiinquilino", "Seguimiento de PUE", "Monitoreo remoto de instalaciones"],
      customizationOptions: ["Cantidad y tipo de tomas", "Protocolo de comunicación", "Umbrales de alarma"],
      standards: ["Diseñado según los estándares de conectores IEC 60320", "Compatible con SNMP MIB-II", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "PDU medido vs. PDU monitoreado — ¿cuál es la diferencia?",
          answer:
            "Un PDU medido solo muestra lecturas localmente en una pantalla integrada. Un PDU monitoreado añade conectividad de red para que esas lecturas —y a menudo el consumo de energía a lo largo del tiempo— puedan verse remotamente sin una visita al sitio.",
        },
      ],
    },
    ru: {
      name: "Контролируемый PDU",
      shortName: "Контролируемый PDU",
      tagline: "Сетевой PDU, удалённо передающий данные о токе, напряжении, мощности и энергии.",
      overview:
        "Контролируемый PDU Wandtung передаёт данные о токе, напряжении, мощности и энергопотреблении по сети через SNMP или Modbus, обеспечивая службам эксплуатации и ИТ удалённую видимость использования питания на уровне стойки без выезда на объект — без функции переключения розеток, доступной в полностью интеллектуальном PDU.",
      keyFeatures: ["Удалённый мониторинг тока, напряжения, мощности и энергии", "Подключение по SNMP и Modbus RTU/TCP", "Веб-интерфейс мониторинга", "Уведомления о превышении пороговых значений"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "200–250В / 380–415В" },
            { label: "Номинальный ток", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "Мониторинг и связь",
          specs: [
            { label: "Протоколы", value: "SNMP v1/v2c/v3, Modbus RTU/TCP" },
            { label: "Точки мониторинга", value: "Напряжение, ток, мощность, энергия" },
            { label: "Переключение", value: "Не предусмотрено — см. коммутируемый PDU" },
          ],
        },
      ],
      applications: ["Биллинг/отчётность многоарендного колокейшн", "Отслеживание PUE", "Удалённый мониторинг объекта"],
      customizationOptions: ["Количество и тип розеток", "Протокол связи", "Пороговые значения сигнализации"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60320", "Совместим с SNMP MIB-II", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Измеряемый PDU и контролируемый PDU — в чём разница?",
          answer:
            "Измеряемый PDU показывает данные только локально на встроенном дисплее. Контролируемый PDU добавляет сетевое подключение, чтобы эти данные — и часто энергопотребление во времени — можно было просматривать удалённо без выезда на объект.",
        },
      ],
    },
    zh: {
      name: "监控型PDU",
      shortName: "监控型PDU",
      tagline: "通过网络远程上报电流、电压、功率及能耗数据的联网PDU。",
      overview:
        "万电通监控型PDU通过SNMP或Modbus将电流、电压、功率及能耗数据上报至网络,使设施与IT团队无需到场即可远程掌握机柜级用电情况——但不具备完全智能型PDU的出口切换能力。",
      keyFeatures: ["远程电流、电压、功率及能耗监控", "支持SNMP及Modbus RTU/TCP连接", "基于Web的监控界面", "阈值告警通知"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "200–250V / 380–415V" },
            { label: "额定电流", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "监控与通信",
          specs: [
            { label: "通信协议", value: "SNMP v1/v2c/v3、Modbus RTU/TCP" },
            { label: "监测点", value: "电压、电流、功率、能耗" },
            { label: "切换控制", value: "不含此功能——请参见可控开关型PDU" },
          ],
        },
      ],
      applications: ["多租户托管计费/报表", "PUE跟踪", "设施远程监控"],
      customizationOptions: ["插座数量与类型", "通信协议", "告警阈值"],
      standards: ["按IEC 60320连接器标准设计", "符合SNMP MIB-II标准", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "计量型PDU与监控型PDU有什么区别？",
          answer: "计量型PDU仅通过内置显示屏在本地显示读数。监控型PDU增加了网络连接功能,可远程查看这些读数——通常还包括一段时间内的能耗情况——无需到场即可完成。",
        },
      ],
    },
  },

  "switched-pdu": {
    ar: {
      name: "PDU قابل للتحكم",
      shortName: "PDU قابل للتحكم",
      tagline: "PDU مراقَب مع تحكم عن بُعد بمنافذ قابلة للعنونة الفردية.",
      overview:
        "يشمل PDU القابل للتحكم من واندتونغ كل ما يوفره PDU المراقَب — رؤية عن بُعد للتيار والجهد والطاقة والاستهلاك — بالإضافة إلى تحكم بمنافذ قابلة للعنونة فردياً، بحيث يمكن للمسؤولين إعادة تشغيل جهاز واحد عن بُعد أو تسلسل تشغيل الراك دون زيارة الموقع.",
      keyFeatures: ["مراقبة عن بُعد على مستوى الوحدة والمنفذ", "تحكم تشغيل/إيقاف قابل للعنونة الفردية للمنافذ", "تشغيل متسلسل لإدارة تيار الاندفاع", "إدارة SNMP وModbus وويب"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "200–250 فولت / 380–415 فولت" },
            { label: "التيار المقنن", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "المراقبة والتحكم",
          specs: [
            { label: "التحكم", value: "تشغيل/إيقاف عن بُعد لكل منفذ، بدء متسلسل" },
            { label: "البروتوكولات", value: "SNMP، Modbus RTU/TCP، واجهة ويب" },
          ],
        },
      ],
      applications: ["مواقع نائية/بدون مراقبة تحتاج إعادة تشغيل عن بُعد", "تشغيل متسلسل للراك", "مراكز بيانات طرفية"],
      customizationOptions: ["عدد المنافذ وتجميعها", "بروتوكول الاتصال", "ملف التسلسل"],
      standards: ["مصمم وفق معايير موصلات IEC 60320", "متوافق مع SNMP MIB-II", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "متى أحتاج PDU قابلاً للتحكم بدلاً من PDU مراقَب؟",
          answer:
            "اختر PDU قابلاً للتحكم كلما احتجت لإعادة تشغيل المعدات عن بُعد أو تسلسل تشغيل الراك — على سبيل المثال، مواقع طرفية غير مراقَبة حيث يتطلب الخادم المعلق زيارة ميدانية لإعادة التشغيل بخلاف ذلك.",
        },
      ],
    },
    fr: {
      name: "PDU commutable",
      shortName: "PDU commutable",
      tagline: "PDU surveillé avec commutation de prises adressables individuellement à distance.",
      overview:
        "Le PDU commutable Wandtung inclut tout ce qu'offre un PDU surveillé — visibilité à distance du courant, de la tension, de la puissance et de l'énergie — plus un contrôle de prises adressables individuellement, permettant aux administrateurs de redémarrer un seul appareil à distance ou de séquencer la mise sous tension d'une baie sans visite sur site.",
      keyFeatures: ["Surveillance à distance au niveau de l'unité et des prises", "Contrôle marche/arrêt adressable individuellement des prises", "Mise sous tension séquencée pour gérer le courant d'appel", "Gestion SNMP, Modbus et web"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "200–250V / 380–415V" },
            { label: "Courant nominal", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "Surveillance et contrôle",
          specs: [
            { label: "Commutation", value: "Marche/arrêt à distance par prise, démarrage séquencé" },
            { label: "Protocoles", value: "SNMP, Modbus RTU/TCP, interface web" },
          ],
        },
      ],
      applications: ["Sites distants/non surveillés nécessitant un redémarrage à distance", "Mise sous tension séquencée de la baie", "Centres de données edge"],
      customizationOptions: ["Nombre et groupement de prises", "Protocole de communication", "Profil de séquencement"],
      standards: ["Conçu selon les normes de connecteurs IEC 60320", "Conforme SNMP MIB-II", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Quand ai-je besoin d'un PDU commutable plutôt que surveillé ?",
          answer:
            "Choisissez un PDU commutable chaque fois que vous devez redémarrer des équipements à distance ou séquencer la mise sous tension d'une baie — par exemple, des sites edge non surveillés où un serveur bloqué nécessiterait autrement un déplacement sur site pour être réinitialisé.",
        },
      ],
    },
    es: {
      name: "PDU conmutable",
      shortName: "PDU conmutable",
      tagline: "PDU monitoreado con conmutación remota de tomas direccionables individualmente.",
      overview:
        "El PDU conmutable de Wandtung incluye todo lo que ofrece un PDU monitoreado —visibilidad remota de corriente, voltaje, potencia y energía— más control de tomas direccionables individualmente, permitiendo a los administradores reiniciar de forma remota un solo dispositivo o secuenciar el encendido de un rack sin una visita al sitio.",
      keyFeatures: ["Monitoreo remoto a nivel de unidad y de toma", "Control de encendido/apagado direccionable individualmente por toma", "Encendido secuenciado para gestionar la corriente de irrupción", "Gestión SNMP, Modbus y web"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "200–250V / 380–415V" },
            { label: "Corriente nominal", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "Monitoreo y control",
          specs: [
            { label: "Conmutación", value: "Encendido/apagado remoto por toma, arranque secuenciado" },
            { label: "Protocolos", value: "SNMP, Modbus RTU/TCP, interfaz web" },
          ],
        },
      ],
      applications: ["Sitios remotos/no supervisados que necesitan reinicio remoto", "Encendido secuenciado de rack", "Centros de datos edge"],
      customizationOptions: ["Cantidad y agrupación de tomas", "Protocolo de comunicación", "Perfil de secuenciación"],
      standards: ["Diseñado según los estándares de conectores IEC 60320", "Compatible con SNMP MIB-II", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Cuándo necesito un PDU conmutable en lugar de uno monitoreado?",
          answer:
            "Elija un PDU conmutable siempre que necesite reiniciar equipos de forma remota o secuenciar el encendido de un rack, por ejemplo, en sitios edge no supervisados donde un servidor bloqueado requeriría de otro modo una visita al sitio para reiniciarse.",
        },
      ],
    },
    ru: {
      name: "Коммутируемый PDU",
      shortName: "Коммутируемый PDU",
      tagline: "Контролируемый PDU с удалённым индивидуально адресуемым переключением розеток.",
      overview:
        "Коммутируемый PDU Wandtung включает всё, что предлагает контролируемый PDU — удалённую видимость тока, напряжения, мощности и энергии — плюс индивидуально адресуемое управление розетками, позволяя администраторам удалённо перезагружать одно устройство или задавать последовательность включения стойки без выезда на объект.",
      keyFeatures: ["Удалённый мониторинг на уровне устройства и розетки", "Индивидуально адресуемое управление вкл/выкл розеток", "Последовательное включение для управления пусковым током", "Управление через SNMP, Modbus и веб"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "200–250В / 380–415В" },
            { label: "Номинальный ток", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "Мониторинг и управление",
          specs: [
            { label: "Переключение", value: "Удалённое вкл/выкл по розетке, последовательный запуск" },
            { label: "Протоколы", value: "SNMP, Modbus RTU/TCP, веб-интерфейс" },
          ],
        },
      ],
      applications: ["Удалённые/безлюдные объекты, требующие удалённой перезагрузки", "Последовательное включение стойки", "Периферийные ЦОД"],
      customizationOptions: ["Количество и группировка розеток", "Протокол связи", "Профиль последовательности"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60320", "Совместим с SNMP MIB-II", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Когда мне нужен коммутируемый PDU вместо контролируемого?",
          answer:
            "Выбирайте коммутируемый PDU всегда, когда требуется удалённо перезагружать оборудование или задавать последовательность включения стойки — например, на необслуживаемых периферийных объектах, где зависший сервер иначе потребовал бы выезда для сброса.",
        },
      ],
    },
    zh: {
      name: "可控开关型PDU",
      shortName: "可控开关型PDU",
      tagline: "具备远程独立出口寻址切换能力的监控型PDU。",
      overview:
        "万电通可控开关型PDU具备监控型PDU的全部功能——远程电流、电压、功率及能耗可视化——并增加了独立寻址的出口控制能力,使管理员能够远程重启单台设备或按顺序为机柜上电,无需到场操作。",
      keyFeatures: ["单元及出口级远程监控", "独立寻址的出口开关控制", "顺序上电,控制浪涌电流", "支持SNMP、Modbus及Web管理"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "200–250V / 380–415V" },
            { label: "额定电流", value: "16A / 32A / 63A" },
          ],
        },
        {
          title: "监控与控制",
          specs: [
            { label: "切换控制", value: "分路远程开关,支持顺序启动" },
            { label: "通信协议", value: "SNMP、Modbus RTU/TCP、Web界面" },
          ],
        },
      ],
      applications: ["需要远程重启的无人值守/偏远站点", "机柜顺序上电", "边缘数据中心"],
      customizationOptions: ["插座数量与分组", "通信协议", "上电顺序方案"],
      standards: ["按IEC 60320连接器标准设计", "符合SNMP MIB-II标准", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么情况下需要选用可控开关型PDU而非监控型PDU？",
          answer: "当您需要远程重启设备或按顺序为机柜上电时,应选用可控开关型PDU——例如无人值守的边缘站点,若服务器无响应,否则需现场出车才能重启。",
        },
      ],
    },
  },

  "three-phase-pdu": {
    ar: {
      name: "PDU ثلاثي الطور",
      shortName: "PDU ثلاثي الطور",
      tagline: "توزيع طاقة ثلاثي الطور متوازن للراكات ذات السعة الأعلى.",
      overview:
        "يوزع PDU ثلاثي الطور من واندتونغ الدخل ثلاثي الطور عبر مجموعات منافذ أحادية الطور متوازنة، ما يمنح الراكات ذات سحب الطاقة المتوسط إلى العالي تغذية بسعة أعلى مما يوفره PDU أحادي الطور، مع الحفاظ على توازن الحمل عبر L1/L2/L3.",
      keyFeatures: ["دخل ثلاثي الطور مع تجميع منافذ أحادية الطور متوازن", "شاشة تيار لكل طور في الطرازات المراقَبة", "تكوينات دلتا ونجمة (وي) متوفرة", "تركيب رأسي 0U لعدد منافذ كبير"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "380–415 فولت ثلاثي الطور" },
            { label: "التيار المقنن", value: "16A / 32A لكل طور" },
            { label: "التكوين", value: "دلتا أو نجمة (وي)" },
          ],
        },
        {
          title: "ميكانيكي",
          specs: [
            { label: "التركيب", value: "0U رأسي" },
            { label: "خيارات المنافذ", value: "IEC C13/C19، مخصص" },
          ],
        },
      ],
      applications: ["راكات حمل مختلط تتجاوز سعة الطور الواحد", "توزيع مستوى قفص الاستضافة المشتركة", "غرف خوادم المؤسسات"],
      customizationOptions: ["تكوين الطور", "مزيج المنافذ لكل طور", "مستوى المراقبة"],
      standards: ["مصمم وفق معايير موصلات IEC 60309", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "لماذا استخدام PDU ثلاثي الطور بدلاً من عدة وحدات PDU أحادية الطور؟",
          answer:
            "يوفر PDU ثلاثي الطور سعة إجمالية أكبر عبر دائرة واحدة أعلى سعة ويبسط تخطيط الحمل المتوازن عبر الأطوار، بدلاً من الحاجة لدوائر ووحدات PDU أحادية الطور منفصلة للوصول لنفس إجمالي الطاقة.",
        },
      ],
    },
    fr: {
      name: "PDU triphasé",
      shortName: "PDU triphasé",
      tagline: "Distribution électrique triphasée équilibrée pour baies à capacité plus élevée.",
      overview:
        "Le PDU triphasé Wandtung distribue une entrée triphasée sur des groupes de prises monophasées équilibrées, offrant aux baies à consommation moyenne à élevée une alimentation de capacité supérieure à celle d'un PDU monophasé, tout en maintenant une charge équilibrée sur L1/L2/L3.",
      keyFeatures: ["Entrée triphasée avec groupement de prises monophasées équilibré", "Affichage du courant par phase sur les variantes surveillées", "Configurations delta et étoile disponibles", "Montage vertical 0U pour un grand nombre de prises"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "380–415V triphasé" },
            { label: "Courant nominal", value: "16A / 32A par phase" },
            { label: "Configuration", value: "Delta ou étoile" },
          ],
        },
        {
          title: "Mécanique",
          specs: [
            { label: "Montage", value: "0U vertical" },
            { label: "Options de prises", value: "IEC C13/C19, personnalisées" },
          ],
        },
      ],
      applications: ["Baies à charge mixte au-delà de la capacité monophasée", "Distribution au niveau cage de colocation", "Salles serveurs d'entreprise"],
      customizationOptions: ["Configuration de phase", "Mix de prises par phase", "Niveau de surveillance"],
      standards: ["Conçu selon les normes de connecteurs IEC 60309", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Pourquoi utiliser un PDU triphasé plutôt que plusieurs PDU monophasés ?",
          answer:
            "Un PDU triphasé fournit une capacité totale plus élevée via un seul circuit à plus forte capacité et simplifie la planification de charge équilibrée entre les phases, plutôt que de nécessiter des circuits monophasés et des PDU séparés pour atteindre la même puissance totale.",
        },
      ],
    },
    es: {
      name: "PDU trifásico",
      shortName: "PDU trifásico",
      tagline: "Distribución de energía trifásica equilibrada para racks de mayor capacidad.",
      overview:
        "El PDU trifásico de Wandtung distribuye la entrada trifásica en grupos de tomas monofásicas equilibradas, brindando a los racks con consumo de medio a alto una alimentación de mayor capacidad que la que puede proporcionar un PDU monofásico, manteniendo la carga equilibrada entre L1/L2/L3.",
      keyFeatures: ["Entrada trifásica con agrupación de tomas monofásicas equilibrada", "Pantalla de corriente por fase en variantes monitoreadas", "Configuraciones delta y estrella disponibles", "Montaje vertical 0U para alta cantidad de tomas"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "380–415V trifásico" },
            { label: "Corriente nominal", value: "16A / 32A por fase" },
            { label: "Configuración", value: "Delta o estrella" },
          ],
        },
        {
          title: "Mecánico",
          specs: [
            { label: "Montaje", value: "0U vertical" },
            { label: "Opciones de tomas", value: "IEC C13/C19, personalizadas" },
          ],
        },
      ],
      applications: ["Racks de carga mixta que superan la capacidad monofásica", "Distribución a nivel de jaula de colocación", "Salas de servidores empresariales"],
      customizationOptions: ["Configuración de fase", "Mezcla de tomas por fase", "Nivel de monitoreo"],
      standards: ["Diseñado según los estándares de conectores IEC 60309", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Por qué usar un PDU trifásico en lugar de varios PDU monofásicos?",
          answer:
            "Un PDU trifásico ofrece mayor capacidad total a través de un único circuito de mayor capacidad y simplifica la planificación de carga equilibrada entre fases, en lugar de requerir circuitos y PDU monofásicos separados para alcanzar la misma potencia total.",
        },
      ],
    },
    ru: {
      name: "Трёхфазный PDU",
      shortName: "Трёхфазный PDU",
      tagline: "Сбалансированное трёхфазное распределение питания для стоек повышенной мощности.",
      overview:
        "Трёхфазный PDU Wandtung распределяет трёхфазный вход по сбалансированным группам однофазных розеток, обеспечивая стойкам со средним и высоким энергопотреблением питание большей мощности, чем может дать однофазный PDU, сохраняя равномерную нагрузку по L1/L2/L3.",
      keyFeatures: ["Трёхфазный вход со сбалансированной группировкой однофазных розеток", "Отображение тока по фазам в контролируемых версиях", "Доступны схемы «треугольник» и «звезда»", "Вертикальный монтаж 0U для большого числа розеток"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "380–415В трёхфазное" },
            { label: "Номинальный ток", value: "16A / 32A на фазу" },
            { label: "Конфигурация", value: "Треугольник или звезда" },
          ],
        },
        {
          title: "Механические характеристики",
          specs: [
            { label: "Монтаж", value: "0U вертикальный" },
            { label: "Варианты розеток", value: "IEC C13/C19, под заказ" },
          ],
        },
      ],
      applications: ["Стойки со смешанной нагрузкой сверх однофазной мощности", "Распределение на уровне клетки колокейшн", "Корпоративные серверные"],
      customizationOptions: ["Конфигурация фаз", "Состав розеток по фазам", "Уровень мониторинга"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60309", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Почему использовать трёхфазный PDU вместо нескольких однофазных?",
          answer:
            "Трёхфазный PDU обеспечивает большую суммарную мощность через одну более мощную линию и упрощает планирование сбалансированной нагрузки по фазам, вместо использования отдельных однофазных линий и PDU для достижения той же суммарной мощности.",
        },
      ],
    },
    zh: {
      name: "三相PDU",
      shortName: "三相PDU",
      tagline: "面向更高容量机柜的均衡三相配电。",
      overview:
        "万电通三相PDU将三相输入分配至均衡的单相出口组,为中高功耗机柜提供比单相PDU更高的供电容量,同时保持L1/L2/L3三相负载均衡。",
      keyFeatures: ["三相输入,配备均衡单相出口分组", "监控型号支持分相电流显示", "支持三角形与星形接法", "0U垂直安装,适配大量出口"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "380–415V三相" },
            { label: "额定电流", value: "每相16A / 32A" },
            { label: "接法", value: "三角形或星形" },
          ],
        },
        {
          title: "机械结构",
          specs: [
            { label: "安装方式", value: "0U垂直" },
            { label: "插座选项", value: "IEC C13/C19、定制" },
          ],
        },
      ],
      applications: ["超出单相容量的混合负载机柜", "托管机房笼位级配电", "企业服务器机房"],
      customizationOptions: ["相位配置", "各相插座组合", "监控级别"],
      standards: ["按IEC 60309连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "为什么选择三相PDU而非多个单相PDU？",
          answer: "三相PDU通过单一大容量回路提供更高的总容量,并简化各相间的均衡负载规划,而无需为达到相同总功率而配置独立的单相回路与多个PDU。",
        },
      ],
    },
  },

  "ats-pdu": {
    ar: {
      name: "PDU مع ATS",
      shortName: "PDU مع ATS",
      tagline: "PDU للراك مع مفتاح نقل تلقائي مدمج لتكرار التغذية المزدوجة.",
      overview:
        "يجمع PDU ATS من واندتونغ بين PDU الراك ومفتاح نقل تلقائي، يقبل مدخلي طاقة مستقلين — مثل المرافق والمولد، أو تغذيتي مرافق A/B — ويُبدِّل تلقائياً إلى المصدر الحي إذا فشلت التغذية الأساسية، ما يحمي المعدات ذات السلك الواحد دون الحاجة للوحة مفتاح نقل منفصلة.",
      keyFeatures: ["دخل طاقة مزدوج مع تجاوز فشل تلقائي", "يحمي المعدات ذات السلك الواحد بتكرار على مستوى التغذية", "زمن نقل سريع بما يكفي لتحمل معظم إمدادات طاقة تكنولوجيا المعلومات", "مراقبة عن بُعد متاحة في الطرازات الذكية"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "200–250 فولت" },
            { label: "التيار المقنن", value: "16A / 32A" },
            { label: "زمن النقل", value: "عادة أقل من دورة واحدة إلى بضع مللي ثانية" },
          ],
        },
        {
          title: "التكرار",
          specs: [
            { label: "المداخل", value: "تغذيتا A/B مزدوجتان مستقلتان" },
            { label: "التبديل", value: "تلقائي، يُفعَّل عند فقدان المصدر" },
          ],
        },
      ],
      applications: ["معدات ذات سلك واحد تحتاج تكرار التغذية", "غرف معدات اتصالات بتغذيتين مزدوجتين", "راكات مغذاة من المرافق + المولد"],
      customizationOptions: ["عدد المنافذ ونوعها", "حساسية النقل", "مستوى المراقبة"],
      standards: ["مصمم وفق معايير موصلات IEC 60309", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما استخدام PDU ATS في مواقع الاتصالات؟",
          answer:
            "يُبدِّل PDU ATS (مفتاح النقل التلقائي) الحمل تلقائياً بين تغذيتي طاقة مستقلتين — عادة المرافق والمولد، أو تغذيتي مرافق مزدوجتين — دون تدخل يدوي، محافظاً على وقت التشغيل إذا فشلت إحدى التغذيتين.",
        },
        {
          question: "هل أحتاج PDU ATS إذا كانت معداتي تملك بالفعل مزودي طاقة مزدوجين؟",
          answer:
            "يمكن عادةً تغذية المعدات ذات السلكين مباشرة من وحدتي PDU قياسيتين منفصلتين. يكون PDU ATS أكثر قيمة للمعدات ذات السلك الواحد، التي لا تملك بخلاف ذلك وسيلة للاستفادة من تغذية زائدة.",
        },
      ],
    },
    fr: {
      name: "PDU ATS",
      shortName: "PDU ATS",
      tagline: "PDU en rack avec commutateur de transfert automatique intégré pour la redondance à double alimentation.",
      overview:
        "Le PDU ATS Wandtung combine un PDU en rack avec un commutateur de transfert automatique, acceptant deux entrées électriques indépendantes — comme réseau et groupe électrogène, ou double alimentation réseau A/B — et basculant automatiquement vers la source active en cas de défaillance de l'alimentation primaire, protégeant les équipements à cordon unique sans nécessiter de panneau de commutation séparé.",
      keyFeatures: ["Double entrée électrique avec basculement automatique", "Protège les équipements à cordon unique avec redondance au niveau de l'alimentation", "Temps de transfert assez rapide pour que la plupart des alimentations informatiques le supportent", "Surveillance à distance disponible sur les variantes intelligentes"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "200–250V" },
            { label: "Courant nominal", value: "16A / 32A" },
            { label: "Temps de transfert", value: "Généralement moins d'un cycle à quelques ms" },
          ],
        },
        {
          title: "Redondance",
          specs: [
            { label: "Entrées", value: "Double, alimentations A/B indépendantes" },
            { label: "Commutation", value: "Automatique, déclenchée par perte de source" },
          ],
        },
      ],
      applications: ["Équipements à cordon unique nécessitant une redondance d'alimentation", "Salles d'équipements télécoms à double alimentation", "Baies alimentées par réseau + groupe électrogène"],
      customizationOptions: ["Nombre et type de prises", "Sensibilité de transfert", "Niveau de surveillance"],
      standards: ["Conçu selon les normes de connecteurs IEC 60309", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "À quoi sert un PDU ATS sur les sites télécoms ?",
          answer:
            "Un PDU ATS (commutateur de transfert automatique) commute automatiquement la charge entre deux alimentations indépendantes — généralement réseau et groupe électrogène, ou deux alimentations réseau — sans intervention manuelle, maintenant la disponibilité en cas de défaillance d'une des alimentations.",
        },
        {
          question: "Ai-je besoin d'un PDU ATS si mon équipement a déjà une double alimentation ?",
          answer:
            "Les équipements à double cordon peuvent généralement être alimentés directement par deux PDU standards séparés. Un PDU ATS est surtout utile pour les équipements à cordon unique, qui n'ont autrement aucun moyen de bénéficier d'une alimentation redondante.",
        },
      ],
    },
    es: {
      name: "PDU ATS",
      shortName: "PDU ATS",
      tagline: "PDU de rack con conmutador de transferencia automática integrado para redundancia de doble alimentación.",
      overview:
        "El PDU ATS de Wandtung combina un PDU de rack con un conmutador de transferencia automática, aceptando dos entradas de energía independientes —como red y generador, o doble alimentación de red A/B— y conmutando automáticamente a la fuente activa si falla la alimentación primaria, protegiendo equipos de un solo cable sin requerir un panel de conmutación separado.",
      keyFeatures: ["Doble entrada de energía con conmutación automática por fallo", "Protege equipos de un solo cable con redundancia a nivel de alimentación", "Tiempo de transferencia lo suficientemente rápido para que la mayoría de fuentes de TI lo soporten", "Monitoreo remoto disponible en variantes inteligentes"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "200–250V" },
            { label: "Corriente nominal", value: "16A / 32A" },
            { label: "Tiempo de transferencia", value: "Típicamente menos de 1 ciclo a unos pocos ms" },
          ],
        },
        {
          title: "Redundancia",
          specs: [
            { label: "Entradas", value: "Doble, alimentaciones A/B independientes" },
            { label: "Conmutación", value: "Automática, activada por pérdida de fuente" },
          ],
        },
      ],
      applications: ["Equipos de un solo cable que necesitan redundancia de alimentación", "Salas de equipos de telecomunicaciones con doble alimentación", "Racks alimentados por red + generador"],
      customizationOptions: ["Cantidad y tipo de tomas", "Sensibilidad de transferencia", "Nivel de monitoreo"],
      standards: ["Diseñado según los estándares de conectores IEC 60309", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Para qué se usa un PDU ATS en sitios de telecomunicaciones?",
          answer:
            "Un PDU ATS (conmutador de transferencia automática) cambia automáticamente la carga entre dos alimentaciones independientes —normalmente red y generador, o dos alimentaciones de red— sin intervención manual, manteniendo la disponibilidad si una de las alimentaciones falla.",
        },
        {
          question: "¿Necesito un PDU ATS si mi equipo ya tiene doble fuente de alimentación?",
          answer:
            "Los equipos de doble cable normalmente pueden alimentarse directamente desde dos PDU estándar separados. Un PDU ATS es más valioso para equipos de un solo cable, que de otro modo no tienen forma de beneficiarse de una alimentación redundante.",
        },
      ],
    },
    ru: {
      name: "ATS PDU",
      shortName: "ATS PDU",
      tagline: "Стоечный PDU со встроенным автоматическим переключателем ввода для резервирования по двум вводам.",
      overview:
        "ATS PDU Wandtung сочетает стоечный PDU с автоматическим переключателем ввода, принимая два независимых источника питания — например, сеть и генератор, либо два ввода A/B от сети — и автоматически переключаясь на работающий источник при отказе основного, защищая одношнуровое оборудование без отдельной панели АВР.",
      keyFeatures: ["Двойной ввод питания с автоматическим переключением при отказе", "Защищает одношнуровое оборудование резервированием на уровне ввода", "Время переключения достаточно быстрое для большинства блоков питания ИТ-оборудования", "Удалённый мониторинг доступен в интеллектуальных версиях"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "200–250В" },
            { label: "Номинальный ток", value: "16A / 32A" },
            { label: "Время переключения", value: "Обычно менее 1 цикла — несколько мс" },
          ],
        },
        {
          title: "Резервирование",
          specs: [
            { label: "Вводы", value: "Двойные независимые вводы A/B" },
            { label: "Переключение", value: "Автоматическое, по потере источника" },
          ],
        },
      ],
      applications: ["Одношнуровое оборудование, требующее резервирования ввода", "Помещения телеком-оборудования с двойным вводом", "Стойки, питаемые от сети + генератора"],
      customizationOptions: ["Количество и тип розеток", "Чувствительность переключения", "Уровень мониторинга"],
      standards: ["Разработан в соответствии со стандартами разъёмов IEC 60309", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Для чего используется ATS PDU на телеком-объектах?",
          answer:
            "ATS PDU (автоматический переключатель ввода) автоматически переключает нагрузку между двумя независимыми вводами питания — как правило, сетью и генератором, либо двумя вводами сети — без ручного вмешательства, сохраняя работоспособность при отказе одного из вводов.",
        },
        {
          question: "Нужен ли мне ATS PDU, если у оборудования уже есть два блока питания?",
          answer:
            "Оборудование с двумя шнурами обычно можно напрямую запитать от двух отдельных стандартных PDU. ATS PDU наиболее полезен для одношнурового оборудования, которое иначе не может воспользоваться преимуществами резервного ввода.",
        },
      ],
    },
    zh: {
      name: "ATS PDU",
      shortName: "ATS PDU",
      tagline: "内置自动切换开关的机架PDU,实现双路供电冗余。",
      overview:
        "万电通ATS PDU将机架PDU与自动切换开关相结合,可接入两路独立电源输入——如市电与发电机,或A/B双路市电——当主用电源发生故障时自动切换至正常供电电源,无需额外的独立切换开关面板即可保护单电源输入设备。",
      keyFeatures: ["双路电源输入,自动故障切换", "以电源级冗余保护单电源输入设备", "切换时间足够快,可满足大多数IT电源的容忍范围", "智能型号支持远程监控"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "200–250V" },
            { label: "额定电流", value: "16A / 32A" },
            { label: "切换时间", value: "通常小于1个周期至数毫秒" },
          ],
        },
        {
          title: "冗余能力",
          specs: [
            { label: "输入", value: "独立双路A/B电源输入" },
            { label: "切换方式", value: "自动,失电触发" },
          ],
        },
      ],
      applications: ["需要电源冗余的单电源输入设备", "双路供电的电信设备间", "市电+发电机供电的机柜"],
      customizationOptions: ["插座数量与类型", "切换灵敏度", "监控级别"],
      standards: ["按IEC 60309连接器标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "ATS PDU在电信站点中的用途是什么？",
          answer: "ATS(自动切换开关)PDU可在两路独立电源(通常为市电与发电机,或双路市电)之间自动切换负载,无需人工干预,当一路电源发生故障时仍能保持供电连续性。",
        },
        {
          question: "如果我的设备已配备双电源,是否还需要ATS PDU？",
          answer: "双电源输入设备通常可直接由两个独立的标准PDU分别供电。ATS PDU对单电源输入设备价值最大,因为这类设备原本无法从冗余供电中获益。",
        },
      ],
    },
  },

  sts: {
    ar: {
      name: "STS (مفتاح نقل ثابت)",
      shortName: "STS",
      tagline: "مفتاح نقل ثابت بتركيب راك 1U، ازدواجية مصدرين A/B بزمن نقل سلس أقل من 10 مللي ثانية.",
      overview:
        "STS من واندتونغ هو مفتاح نقل ثابت بالحالة الصلبة بتركيب راك 1U، ينقل الحمل بسلاسة بين مصدري طاقة مستقلين A/B في أقل من 10 مللي ثانية — أسرع بكثير من ATS الميكانيكي — لحماية الأحمال التي لا يمكنها تحمل حتى انقطاع لحظي. توفر مؤشرات حالة Source 1/Source 2/Output على اللوحة الأمامية وزر كتم صوت رؤية فورية للحالة والتحكم بالإنذار، مع توصيلات كتلة طرفية للمصدر والخرج على اللوحة الخلفية.",
      keyFeatures: ["نقل سلس، زمن تبديل أقل من 10 مللي ثانية", "مدخلا مصدر A/B مستقلان مزدوجان لازدواجية الطاقة", "شكل تركيب راك 1U", "مؤشرات LED للحالة Source 1 / Source 2 / Output على اللوحة الأمامية", "زر كتم صوت للتحكم بالإنذار السمعي", "توصيلات كتلة طرفية للمصدر والخرج", "مخارج IEC C13/C19 (يعتمد على الطراز)"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الشكل", value: "تركيب راك 1U" },
            { label: "المداخل", value: "مصدر A/B مستقل مزدوج (كتلة طرفية)" },
            { label: "زمن النقل", value: "سلس، أقل من 10 مللي ثانية" },
            { label: "الخرج", value: "مخارج IEC C13/C19 و/أو خرج كتلة طرفية" },
          ],
        },
        {
          title: "المراقبة والتحكم",
          specs: [
            { label: "مؤشرات الحالة", value: "مؤشرات LED أمامية Source 1 / Source 2 / Output" },
            { label: "التحكم بالإنذار", value: "زر كتم صوت أمامي" },
          ],
        },
      ],
      applications: ["منشآت تتطلب نقلاً بدون انقطاع", "أمام توزيع PDU/UPS الحرج", "مراكز بيانات بتغذيتي مرافق مزدوجتين"],
      customizationOptions: ["التصنيف الحالي", "تكوين مخارج الخرج", "حزمة المراقبة"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما الفرق بين ATS وSTS؟",
          answer:
            "يُبدِّل ATS (مفتاح النقل التلقائي) الحمل ميكانيكياً بين مصدري طاقة، عادة بزمن نقل قصير، بينما يستخدم STS (مفتاح النقل الثابت) تبديلاً بالحالة الصلبة لنقل شبه فوري، يُستخدم حيث يكون حتى الانقطاع اللحظي غير مقبول.",
        },
        {
          question: "ما مدى سرعة نقل STS بين المصدرين؟",
          answer:
            "يُنفذ STS من واندتونغ نقلاً سلساً بين Source 1 وSource 2 في أقل من 10 مللي ثانية، وهو سريع بما يكفي بحيث لا تسجل معدات تكنولوجيا المعلومات المتصلة أي انقطاع.",
        },
      ],
    },
    fr: {
      name: "STS (commutateur de transfert statique)",
      shortName: "STS",
      tagline: "Commutateur de transfert statique 1U rack, redondance à deux sources A/B avec transfert sans coupure <10ms.",
      overview:
        "Le STS Wandtung est un commutateur de transfert statique à semi-conducteurs au format 1U rack, qui transfère la charge sans coupure entre deux sources d'alimentation indépendantes A/B en moins de 10ms — bien plus rapide qu'un ATS mécanique — protégeant les charges qui ne peuvent tolérer aucune interruption momentanée. Des voyants d'état Source 1/Source 2/Output en façade et un bouton de coupure du son offrent un statut visible en un coup d'œil et un contrôle des alarmes, avec des connexions source et sortie à bornier en face arrière.",
      keyFeatures: ["Transfert sans coupure, temps de commutation <10ms", "Double entrée de source indépendante A/B pour la redondance d'alimentation", "Format 1U montage en rack", "Voyants d'état Source 1 / Source 2 / Output en façade", "Bouton de coupure du son pour le contrôle des alarmes audibles", "Connexions source et sortie à bornier", "Prises de sortie IEC C13/C19 (selon le modèle)"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Format", value: "1U montage en rack" },
            { label: "Entrées", value: "Double source indépendante A/B (bornier)" },
            { label: "Temps de transfert", value: "Sans coupure, <10ms" },
            { label: "Sortie", value: "Prises IEC C13/C19 et/ou sortie à bornier" },
          ],
        },
        {
          title: "Surveillance et contrôle",
          specs: [
            { label: "Voyants d'état", value: "Voyants LED en façade Source 1 / Source 2 / Output" },
            { label: "Contrôle des alarmes", value: "Bouton de coupure du son en façade" },
          ],
        },
      ],
      applications: ["Installations nécessitant un transfert sans interruption", "En amont de la distribution PDU/onduleur critique", "Centres de données à double alimentation réseau"],
      customizationOptions: ["Calibre de courant", "Configuration des prises de sortie", "Package de surveillance"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Quelle est la différence entre un ATS et un STS ?",
          answer:
            "Un ATS (commutateur de transfert automatique) commute mécaniquement la charge entre deux sources d'alimentation, généralement avec un bref temps de transfert, tandis qu'un STS (commutateur de transfert statique) utilise une commutation à semi-conducteurs pour un transfert quasi instantané, utilisé lorsque même une interruption momentanée est inacceptable.",
        },
        {
          question: "À quelle vitesse le STS transfère-t-il entre les sources ?",
          answer:
            "Le STS Wandtung effectue un transfert sans coupure entre Source 1 et Source 2 en moins de 10ms, assez rapide pour que l'équipement informatique connecté ne détecte aucune interruption.",
        },
      ],
    },
    es: {
      name: "STS (conmutador de transferencia estática)",
      shortName: "STS",
      tagline: "Conmutador de transferencia estática de montaje en rack 1U, redundancia de doble fuente A/B con transferencia sin interrupción <10ms.",
      overview:
        "El STS de Wandtung es un conmutador de transferencia estática de estado sólido de montaje en rack 1U, que transfiere la carga sin interrupción entre dos fuentes de energía independientes A/B en menos de 10ms —mucho más rápido que un ATS mecánico— protegiendo cargas que no pueden tolerar ni siquiera una interrupción momentánea. Los indicadores de estado Source 1/Source 2/Output en el panel frontal y un botón de silencio ofrecen estado visible de un vistazo y control de alarmas, con conexiones de fuente y salida por bloque de terminales en el panel posterior.",
      keyFeatures: ["Transferencia sin interrupción, tiempo de conmutación <10ms", "Doble entrada de fuente independiente A/B para redundancia de energía", "Formato de montaje en rack 1U", "Indicadores LED de estado Source 1 / Source 2 / Output en el panel frontal", "Botón de silencio para control de alarmas audibles", "Conexiones de fuente y salida por bloque de terminales", "Salidas IEC C13/C19 (según el modelo)"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Formato", value: "Montaje en rack 1U" },
            { label: "Entradas", value: "Doble fuente independiente A/B (bloque de terminales)" },
            { label: "Tiempo de transferencia", value: "Sin interrupción, <10ms" },
            { label: "Salida", value: "Salidas IEC C13/C19 y/o salida por bloque de terminales" },
          ],
        },
        {
          title: "Monitoreo y control",
          specs: [
            { label: "Indicadores de estado", value: "LEDs frontales Source 1 / Source 2 / Output" },
            { label: "Control de alarmas", value: "Botón de silencio frontal" },
          ],
        },
      ],
      applications: ["Instalaciones que requieren transferencia sin interrupción", "Aguas arriba de distribución crítica de PDU/SAI", "Centros de datos con doble alimentación de red"],
      customizationOptions: ["Capacidad de corriente", "Configuración de salidas", "Paquete de monitoreo"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Cuál es la diferencia entre un ATS y un STS?",
          answer:
            "Un ATS (interruptor de transferencia automática) conmuta mecánicamente la carga entre dos fuentes de energía, normalmente con un breve tiempo de transferencia, mientras que un STS (interruptor de transferencia estática) utiliza conmutación de estado sólido para una transferencia casi instantánea, utilizado donde ni siquiera una interrupción momentánea es aceptable.",
        },
        {
          question: "¿Qué tan rápido transfiere el STS entre fuentes?",
          answer:
            "El STS de Wandtung realiza una transferencia sin interrupción entre Source 1 y Source 2 en menos de 10ms, lo suficientemente rápido como para que el equipo de TI conectado no registre ninguna interrupción.",
        },
      ],
    },
    ru: {
      name: "STS (статический переключатель резерва)",
      shortName: "STS",
      tagline: "Статический переключатель резерва 1U для стойки, резервирование двух источников A/B с бесперебойным переключением <10 мс.",
      overview:
        "STS Wandtung — это твердотельный статический переключатель резерва форм-фактора 1U для стойки, который бесперебойно переключает нагрузку между двумя независимыми источниками питания A/B менее чем за 10 мс — значительно быстрее механического АВР — защищая нагрузки, которые не могут допустить даже кратковременного перерыва. Индикаторы состояния Source 1/Source 2/Output на передней панели и кнопка отключения звука дают наглядный статус и контроль сигнализации, а разъёмы источников и выхода на клеммных колодках расположены на задней панели.",
      keyFeatures: ["Бесперебойное переключение, время коммутации <10 мс", "Два независимых входа источников A/B для резервирования питания", "Форм-фактор 1U для стойки", "Светодиодные индикаторы состояния Source 1 / Source 2 / Output на передней панели", "Кнопка отключения звука для управления сигнализацией", "Разъёмы источников и выхода на клеммных колодках", "Выходные розетки IEC C13/C19 (в зависимости от модели)"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Форм-фактор", value: "1U для стойки" },
            { label: "Входы", value: "Два независимых источника A/B (клеммная колодка)" },
            { label: "Время переключения", value: "Бесперебойное, <10 мс" },
            { label: "Выход", value: "Розетки IEC C13/C19 и/или выход на клеммной колодке" },
          ],
        },
        {
          title: "Мониторинг и управление",
          specs: [
            { label: "Индикаторы состояния", value: "Светодиоды Source 1 / Source 2 / Output на передней панели" },
            { label: "Управление сигнализацией", value: "Кнопка отключения звука на передней панели" },
          ],
        },
      ],
      applications: ["Объекты, требующие переключения без перерыва", "Перед критическим распределением PDU/ИБП", "ЦОД с двойным вводом от сети"],
      customizationOptions: ["Номинальный ток", "Конфигурация выходных розеток", "Пакет мониторинга"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "В чём разница между АВР и СВР?",
          answer:
            "АВР (автоматический выключатель резерва) механически переключает нагрузку между двумя источниками питания, обычно с небольшим временем переключения, тогда как СВР (статический переключатель резерва) использует твердотельную коммутацию для практически мгновенного переключения — применяется там, где недопустим даже кратковременный перерыв.",
        },
        {
          question: "Насколько быстро STS переключается между источниками?",
          answer:
            "STS Wandtung выполняет бесперебойное переключение между Source 1 и Source 2 менее чем за 10 мс — достаточно быстро, чтобы подключённое ИТ-оборудование не зафиксировало прерывание.",
        },
      ],
    },
    zh: {
      name: "STS(静态切换开关)",
      shortName: "STS",
      tagline: "1U机架式静态切换开关，A/B双路电源冗余，切换时间小于10毫秒无中断。",
      overview:
        "万电通STS(静态切换开关)是一款1U机架式固态静态切换开关，可在10毫秒以内实现两路独立A/B电源间的无中断负载切换——远快于机械式ATS——保护无法容忍片刻中断的负载。前面板配备Source 1/Source 2/Output状态指示灯及静音按钮，可一目了然地查看状态并控制告警，后面板配备端子式电源输入及输出接线端。",
      keyFeatures: ["无中断切换，切换时间小于10毫秒", "A/B双路独立电源输入实现电源冗余", "1U机架式外形", "前面板Source 1/Source 2/Output状态LED指示灯", "静音按钮用于控制声音告警", "端子式电源及输出接线端", "C13/C19 IEC输出插座(视型号而定)"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "外形", value: "1U机架式" },
            { label: "输入", value: "A/B双路独立电源(端子式)" },
            { label: "切换时间", value: "无中断，小于10毫秒" },
            { label: "输出", value: "IEC C13/C19插座及/或端子式输出" },
          ],
        },
        {
          title: "监控与控制",
          specs: [
            { label: "状态指示", value: "前面板Source 1/Source 2/Output LED指示灯" },
            { label: "告警控制", value: "前面板静音按钮" },
          ],
        },
      ],
      applications: ["需要零中断切换的设施", "关键PDU/UPS配电的上游", "具备双路市电输入的数据中心"],
      customizationOptions: ["电流规格", "输出插座配置", "监控套件"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "ATS与STS有何区别？",
          answer: "ATS(自动切换开关)以机械方式在两个电源间切换负载,通常存在短暂切换时间;而STS(静态切换开关)采用固态开关实现近乎瞬时的切换,适用于连片刻中断都无法接受的场景。",
        },
        {
          question: "STS在两路电源间的切换速度有多快？",
          answer: "万电通STS可在Source 1与Source 2之间实现小于10毫秒的无中断切换，速度快到已连接的IT设备不会察觉到任何中断。",
        },
      ],
    },
  },

  "automatic-transfer-switch": {
    ar: {
      name: "مفتاح النقل التلقائي",
      shortName: "ATS",
      tagline: "مفتاح نقل تلقائي على مستوى اللوحة لتجاوز فشل المنشأة والمولد.",
      overview:
        "مفتاح النقل التلقائي من واندتونغ جهاز على مستوى اللوحة ينقل تلقائياً حمل منشأة أو لوحة توزيع بين مصدر أساسي ومصدر احتياطي — عادة المرافق والمولد الاحتياطي — دون تدخل يدوي، مُحجَّم لأحمال فرعية أو لوحة أو منشأة بدلاً من راك واحد.",
      keyFeatures: ["كشف فقدان المصدر والنقل التلقائي", "خرج إشارة بدء المولد", "تجاوز يدوي/عزل للصيانة", "تصنيفات تيار على مستوى المنشأة واللوحة"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "380–415 فولت ثلاثي الطور" },
            { label: "التيار المقنن", value: "100A – 3000A (يعتمد على الطراز)" },
            { label: "زمن النقل", value: "ثوانٍ (نقل ميكانيكي، متوافق مع بدء المولد)" },
          ],
        },
        {
          title: "التحكم",
          specs: [
            { label: "منطق التحكم", value: "كشف تلقائي لفقدان المصدر، إشارة بدء المولد" },
            { label: "التجاوز", value: "تجاوز/عزل يدوي للصيانة" },
          ],
        },
      ],
      applications: ["تجاوز فشل المنشأة/المولد", "تكرار على مستوى لوحة التوزيع", "احتياطي طاقة موقع مركز البيانات"],
      customizationOptions: ["التصنيف الحالي", "نوع الغلاف", "حزمة التحكم/المراقبة"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "كيف يختلف مفتاح النقل التلقائي عن PDU ATS؟",
          answer:
            "يتعامل مفتاح النقل التلقائي على مستوى اللوحة مع تجاوز الفشل على مستوى المنشأة أو لوحة التوزيع أو المولد لفرع كامل من النظام الكهربائي، بينما PDU ATS جهاز مثبت على الراك يطبق نفس مبدأ التبديل التلقائي على تغذية طاقة راك واحد.",
        },
      ],
    },
    fr: {
      name: "Commutateur de transfert automatique",
      shortName: "ATS",
      tagline: "Commutateur de transfert automatique au niveau du panneau pour le basculement d'installation et de groupe électrogène.",
      overview:
        "Le Commutateur de transfert automatique Wandtung est un dispositif au niveau du panneau qui transfère automatiquement la charge d'une installation ou d'un tableau de distribution entre une source primaire et une source de secours — généralement réseau et groupe électrogène de secours — sans intervention manuelle, dimensionné pour des charges de branche, de panneau ou d'installation plutôt qu'une seule baie.",
      keyFeatures: ["Détection automatique de perte de source et transfert", "Sortie de signal de démarrage du groupe électrogène", "Dérivation/annulation manuelle pour la maintenance", "Calibres de courant au niveau installation et panneau"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "380–415V triphasé" },
            { label: "Courant nominal", value: "100A – 3000A (selon le modèle)" },
            { label: "Temps de transfert", value: "Secondes (transfert mécanique, compatible démarrage groupe électrogène)" },
          ],
        },
        {
          title: "Contrôle",
          specs: [
            { label: "Logique de contrôle", value: "Détection automatique de perte de source, signal de démarrage groupe électrogène" },
            { label: "Dérivation", value: "Dérivation/isolement manuel pour maintenance" },
          ],
        },
      ],
      applications: ["Basculement installation/groupe électrogène", "Redondance au niveau du tableau de distribution", "Alimentation de secours de site de centre de données"],
      customizationOptions: ["Calibre de courant", "Type d'enceinte", "Package de contrôle/surveillance"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "En quoi un commutateur de transfert automatique diffère-t-il d'un PDU ATS ?",
          answer:
            "Un commutateur de transfert automatique au niveau du panneau gère le basculement au niveau installation, tableau de distribution ou groupe électrogène pour toute une branche du système électrique, tandis qu'un PDU ATS est un dispositif monté en rack qui applique le même principe de commutation automatique à l'alimentation d'une seule baie.",
        },
      ],
    },
    es: {
      name: "Interruptor de transferencia automática",
      shortName: "ATS",
      tagline: "Interruptor de transferencia automática a nivel de panel para conmutación de instalación y generador.",
      overview:
        "El Interruptor de Transferencia Automática de Wandtung es un dispositivo a nivel de panel que transfiere automáticamente la carga de una instalación o tablero de distribución entre una fuente primaria y una fuente de respaldo —normalmente red y generador de respaldo— sin intervención manual, dimensionado para cargas de ramal, panel o instalación en lugar de un solo rack.",
      keyFeatures: ["Detección automática de pérdida de fuente y transferencia", "Salida de señal de arranque de generador", "Bypass/anulación manual para mantenimiento", "Capacidades de corriente a nivel de instalación y panel"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "380–415V trifásico" },
            { label: "Corriente nominal", value: "100A – 3000A (según el modelo)" },
            { label: "Tiempo de transferencia", value: "Segundos (transferencia mecánica, compatible con arranque de generador)" },
          ],
        },
        {
          title: "Control",
          specs: [
            { label: "Lógica de control", value: "Detección automática de pérdida de fuente, señal de arranque de generador" },
            { label: "Bypass", value: "Bypass/aislamiento manual para mantenimiento" },
          ],
        },
      ],
      applications: ["Conmutación de instalación/generador", "Redundancia a nivel de tablero de distribución", "Respaldo de energía de sitio de centro de datos"],
      customizationOptions: ["Capacidad de corriente", "Tipo de gabinete", "Paquete de control/monitoreo"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿En qué se diferencia un interruptor de transferencia automática de un PDU ATS?",
          answer:
            "Un interruptor de transferencia automática a nivel de panel gestiona la conmutación a nivel de instalación, tablero de distribución o generador para toda una rama del sistema eléctrico, mientras que un PDU ATS es un dispositivo montado en rack que aplica el mismo principio de conmutación automática a la alimentación de un solo rack.",
        },
      ],
    },
    ru: {
      name: "Автоматический переключатель ввода",
      shortName: "АВР",
      tagline: "Панельный автоматический переключатель ввода для резервирования объекта и генератора.",
      overview:
        "Автоматический переключатель ввода Wandtung — это панельное устройство, которое автоматически переключает нагрузку объекта или распределительного щита между основным и резервным источником — как правило, сетью и резервным генератором — без ручного вмешательства, рассчитанное на нагрузку уровня отходящей линии, щита или объекта, а не одной стойки.",
      keyFeatures: ["Автоматическое обнаружение потери источника и переключение", "Выход сигнала запуска генератора", "Ручной байпас/отключение для обслуживания", "Токовые номиналы уровня объекта и щита"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "380–415В трёхфазное" },
            { label: "Номинальный ток", value: "100A – 3000A (в зависимости от модели)" },
            { label: "Время переключения", value: "Секунды (механическое переключение, совместимо с запуском генератора)" },
          ],
        },
        {
          title: "Управление",
          specs: [
            { label: "Логика управления", value: "Автоматическое обнаружение потери источника, сигнал запуска генератора" },
            { label: "Байпас", value: "Ручной байпас/изоляция для обслуживания" },
          ],
        },
      ],
      applications: ["Резервирование объекта/генератора", "Резервирование на уровне распределительного щита", "Резервное питание площадки ЦОД"],
      customizationOptions: ["Номинальный ток", "Тип корпуса", "Пакет управления/мониторинга"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Чем автоматический переключатель ввода отличается от ATS PDU?",
          answer:
            "Панельный автоматический переключатель ввода обеспечивает резервирование на уровне объекта, распределительного щита или генератора для целой отходящей линии электрической системы, тогда как ATS PDU — это стоечное устройство, применяющее тот же принцип автоматического переключения к питанию одной стойки.",
        },
      ],
    },
    zh: {
      name: "自动切换开关",
      shortName: "ATS",
      tagline: "面向设施与发电机故障切换的面板级自动切换开关。",
      overview:
        "万电通自动切换开关是一种面板级设备,可在主用电源与备用电源(通常为市电与备用发电机)之间自动切换设施或配电柜负载,无需人工干预,适用于分支回路、配电柜或设施级负载,而非单一机柜。",
      keyFeatures: ["自动电源失电检测与切换", "发电机启动信号输出", "支持手动旁路/切除以便维护", "设施级与配电柜级电流规格"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "380–415V三相" },
            { label: "额定电流", value: "100A–3000A(视型号而定)" },
            { label: "切换时间", value: "秒级(机械式切换,兼容发电机启动)" },
          ],
        },
        {
          title: "控制",
          specs: [
            { label: "控制逻辑", value: "自动失电检测,发电机启动信号" },
            { label: "旁路", value: "支持手动旁路/隔离以便维护" },
          ],
        },
      ],
      applications: ["设施/发电机故障切换", "配电柜级冗余", "数据中心场地电力备份"],
      customizationOptions: ["电流规格", "柜体类型", "控制/监控套件"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "自动切换开关与ATS PDU有何区别？",
          answer: "面板级自动切换开关负责整条电力系统支路在设施、配电柜或发电机层面的故障切换,而ATS PDU则是安装于机架的设备,将同样的自动切换原理应用于单一机柜的电源输入。",
        },
      ],
    },
  },
  "rack-mount-ups": {
    ar: {
      name: "UPS بتركيب راك",
      shortName: "UPS راك",
      tagline: "UPS مزدوج التحويل عبر الإنترنت للنشر بتركيب راك في بيئات مراكز البيانات والاتصالات.",
      overview: "يُعبَّأ UPS بتركيب راك من واندتونغ، وهو UPS مزدوج التحويل عبر الإنترنت، بصيغة راك قياسية 19 بوصة، ويوفر طاقة احتياطية نظيفة ومنظمة لمعدات تكنولوجيا المعلومات والشبكات مع تكوينات مرنة لوقت تشغيل البطارية.",
      keyFeatures: ["طوبولوجيا مزدوجة التحويل عبر الإنترنت حقيقية", "صيغ تركيب راك 2U–6U", "لوحة عرض LCD لمراقبة الدخل/الخرج/البطارية/الحمل في الوقت الفعلي", "خيارات حزمة بطارية موسعة لوقت تشغيل أطول", "منفذ RS232 قياسي، قابل للتوسيع عبر فتحة بطاقة ذكية إلى RS485 أو تلامس جاف أو SNMP", "مراقبة عن بُعد عبر SNMP / RS232 / تطبيق الجوال مع تنبيهات فورية عند انقطاع التيار", "تجاوز تلقائي عند الحمل الزائد أو الخلل"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "1 – 20 كيلو فولت أمبير" }, { label: "جهد الدخل", value: "110/220/230/240 فولت أحادي الطور" }, { label: "جهد الخرج", value: "220/230/240 فولت ±1%" }, { label: "معامل القدرة", value: "0.9" }, { label: "الكفاءة", value: "حتى 94% (وضع عبر الإنترنت)" }] },
        { title: "البطارية ووقت التشغيل", specs: [{ label: "تكوين البطارية", value: "داخلي + خزانة بطارية موسعة خارجية" }, { label: "وقت الاحتياط", value: "5 دقائق – عدة ساعات (يعتمد على الحمل)" }] },
        { title: "الاتصال", specs: [{ label: "الواجهات", value: "RS232، USB، بطاقة SNMP (اختياري)، تلامس جاف" }, { label: "القدرة على التوازي", value: "حتى 4 وحدات (يعتمد على الطراز)" }] },
      ],
      applications: ["راكات الخوادم والشبكات", "غرف معدات الاتصالات", "غرف بيانات الشركات الصغيرة والمتوسطة"],
      customizationOptions: ["ارتفاع الراك (2U/3U/6U)", "حزمة وقت تشغيل البطارية", "بطاقة الاتصال"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هو UPS عبر الإنترنت؟", answer: "يحول UPS عبر الإنترنت (مزدوج التحويل) طاقة التيار المتردد الواردة باستمرار إلى تيار مستمر ثم مرة أخرى إلى تيار متردد، ما يوفر خرجاً ثابتاً ومنظماً بدون زمن نقل إلى البطارية، ولهذا فهو الطوبولوجيا القياسية لأحمال مراكز البيانات وتكنولوجيا المعلومات الحرجة." },
        { question: "كيف أختار وقت تشغيل وسعة UPS؟", answer: "حدد تصنيف UPS بكيلو فولت أمبير/كيلوواط بما يتناسب مع حمل تكنولوجيا المعلومات المتصل مع هامش للنمو، ثم حدد سعة البطارية لزمن التحمل المطلوب قبل بدء المولد أو الإغلاق الآمن، عادة 5-15 دقيقة للمواقع المدعومة بالشبكة وأطول للمواقع بدون مولد." },
      ],
    },
    fr: {
      name: "Onduleur en rack",
      shortName: "Onduleur en rack",
      tagline: "Onduleur en ligne à double conversion pour déploiement en rack dans les environnements de centres de données et télécoms.",
      overview: "L'onduleur en rack Wandtung est un onduleur en ligne à double conversion au format rack 19 pouces standard, fournissant une alimentation de secours propre et régulée pour les équipements informatiques et réseau avec des configurations d'autonomie de batterie flexibles.",
      keyFeatures: ["Véritable topologie en ligne à double conversion", "Formats de montage en rack 2U–6U", "Panneau LCD avec surveillance en temps réel de l'entrée/sortie/batterie/charge", "Options de batteries étendues pour une plus grande autonomie", "RS232 standard, extensible via emplacement de carte intelligente vers RS485, contact sec ou SNMP", "Surveillance à distance via SNMP / RS232 / application mobile avec alertes instantanées de coupure de courant", "Bypass automatique en cas de surcharge ou de défaut"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "1 – 20 kVA" }, { label: "Tension d'entrée", value: "110/220/230/240V monophasé" }, { label: "Tension de sortie", value: "220/230/240V ±1%" }, { label: "Facteur de puissance", value: "0,9" }, { label: "Efficacité", value: "Jusqu'à 94% (mode en ligne)" }] },
        { title: "Batterie et autonomie", specs: [{ label: "Configuration de batterie", value: "Interne + armoire de batteries étendue externe" }, { label: "Autonomie", value: "5 min – plusieurs heures (selon la charge)" }] },
        { title: "Communication", specs: [{ label: "Interfaces", value: "RS232, USB, carte SNMP (en option), contact sec" }, { label: "Capacité de mise en parallèle", value: "Jusqu'à 4 unités (selon le modèle)" }] },
      ],
      applications: ["Baies serveurs et réseau", "Salles d'équipements télécoms", "Salles de données PME"],
      customizationOptions: ["Hauteur du rack (2U/3U/6U)", "Package d'autonomie de batterie", "Carte de communication"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce qu'un onduleur en ligne ?", answer: "Un onduleur en ligne (double conversion) convertit en continu l'alimentation CA entrante en CC puis à nouveau en CA, fournissant une sortie constante et régulée sans temps de transfert vers la batterie, ce qui en fait la topologie standard pour les charges critiques de centres de données et informatiques." },
        { question: "Comment choisir l'autonomie et la capacité de l'onduleur ?", answer: "Dimensionnez la puissance kVA/kW de l'onduleur selon votre charge informatique connectée avec une marge de croissance, puis dimensionnez la capacité de la batterie selon le temps de tenue requis avant démarrage du groupe électrogène ou arrêt sécurisé, généralement 5 à 15 minutes pour les sites raccordés au réseau et plus pour les sites sans groupe électrogène." },
      ],
    },
    es: {
      name: "SAI de montaje en rack",
      shortName: "SAI de rack",
      tagline: "SAI en línea de doble conversión para despliegue en rack en entornos de centros de datos y telecomunicaciones.",
      overview: "El SAI de montaje en rack de Wandtung es un SAI en línea de doble conversión empaquetado en formato de rack estándar de 19 pulgadas, que proporciona energía de respaldo limpia y regulada para equipos de TI y red con configuraciones flexibles de autonomía de batería.",
      keyFeatures: ["Topología en línea de doble conversión verdadera", "Formatos de montaje en rack de 2U a 6U", "Panel LCD con monitoreo en tiempo real de entrada/salida/batería/carga", "Opciones de baterías extendidas para mayor autonomía", "RS232 estándar, ampliable mediante ranura de tarjeta inteligente a RS485, contacto seco o SNMP", "Monitoreo remoto vía SNMP / RS232 / app móvil con alertas instantáneas de corte de energía", "Bypass automático ante sobrecarga o fallo"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "1 – 20 kVA" }, { label: "Voltaje de entrada", value: "110/220/230/240V monofásico" }, { label: "Voltaje de salida", value: "220/230/240V ±1%" }, { label: "Factor de potencia", value: "0,9" }, { label: "Eficiencia", value: "Hasta 94% (modo en línea)" }] },
        { title: "Batería y autonomía", specs: [{ label: "Configuración de batería", value: "Interna + gabinete de batería extendida externo" }, { label: "Tiempo de respaldo", value: "5 min – varias horas (según la carga)" }] },
        { title: "Comunicación", specs: [{ label: "Interfaces", value: "RS232, USB, tarjeta SNMP (opcional), contacto seco" }, { label: "Capacidad de paralelismo", value: "Hasta 4 unidades (según el modelo)" }] },
      ],
      applications: ["Racks de servidores y red", "Salas de equipos de telecomunicaciones", "Salas de datos de pymes"],
      customizationOptions: ["Altura del rack (2U/3U/6U)", "Paquete de autonomía de batería", "Tarjeta de comunicación"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es un SAI en línea?", answer: "Un SAI en línea (doble conversión) convierte continuamente la energía de CA entrante a CC y de nuevo a CA, proporcionando una salida constante y regulada con tiempo de transferencia cero a la batería, por lo que es la topología estándar para cargas críticas de TI y centros de datos." },
        { question: "¿Cómo selecciono la autonomía y capacidad del SAI?", answer: "Dimensione la capacidad kVA/kW del SAI según su carga de TI conectada con margen para crecimiento, luego dimensione la capacidad de la batería según el tiempo de resistencia requerido antes del arranque del generador o el apagado seguro, típicamente de 5 a 15 minutos para sitios respaldados por la red y más para sitios sin generador." },
      ],
    },
    ru: {
      name: "Стоечный ИБП",
      shortName: "Стоечный ИБП",
      tagline: "Онлайн ИБП двойного преобразования для стоечного размещения в дата-центрах и телекоммуникационных объектах.",
      overview: "Стоечный ИБП Wandtung — это онлайн ИБП двойного преобразования в стандартном 19-дюймовом стоечном форм-факторе, обеспечивающий чистое, стабилизированное резервное питание для ИТ- и сетевого оборудования с гибкими вариантами времени автономной работы.",
      keyFeatures: ["Настоящая онлайн-топология двойного преобразования", "Стоечные форм-факторы 2U–6U", "ЖК-панель с мониторингом входа/выхода/батареи/нагрузки в реальном времени", "Варианты расширенных батарей для увеличения времени автономной работы", "Стандартный RS232, расширяемый через слот smart-карты до RS485, сухого контакта или SNMP", "Удалённый мониторинг через SNMP / RS232 / мобильное приложение с мгновенными оповещениями об отключении питания", "Автоматический байпас при перегрузке или неисправности"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "1 – 20 кВА" }, { label: "Входное напряжение", value: "110/220/230/240В однофазное" }, { label: "Выходное напряжение", value: "220/230/240В ±1%" }, { label: "Коэффициент мощности", value: "0,9" }, { label: "КПД", value: "До 94% (онлайн режим)" }] },
        { title: "Батарея и время работы", specs: [{ label: "Конфигурация батареи", value: "Внутренняя + внешний шкаф расширенных батарей" }, { label: "Время резервирования", value: "5 мин – несколько часов (в зависимости от нагрузки)" }] },
        { title: "Связь", specs: [{ label: "Интерфейсы", value: "RS232, USB, карта SNMP (опционально), сухой контакт" }, { label: "Возможность параллельной работы", value: "До 4 устройств (в зависимости от модели)" }] },
      ],
      applications: ["Серверные и сетевые стойки", "Помещения телеком-оборудования", "Серверные комнаты малого и среднего бизнеса"],
      customizationOptions: ["Высота стойки (2U/3U/6U)", "Пакет времени автономной работы батареи", "Карта связи"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое онлайн ИБП?", answer: "Онлайн ИБП (двойного преобразования) непрерывно преобразует входящее переменное напряжение в постоянное и обратно в переменное, обеспечивая постоянный стабилизированный выход с нулевым временем перехода на батарею, что делает его стандартной топологией для критических ИТ- и ЦОД-нагрузок." },
        { question: "Как выбрать время автономной работы и мощность ИБП?", answer: "Подберите номинал ИБП в кВА/кВт под подключённую ИТ-нагрузку с запасом на рост, затем рассчитайте ёмкость батареи под требуемое время удержания до запуска генератора или безопасного отключения — обычно 5–15 минут для объектов с резервированием от сети и дольше для объектов без генератора." },
      ],
    },
    zh: {
      name: "机架式UPS",
      shortName: "机架式UPS",
      tagline: "面向数据中心与电信环境机架部署的在线双转换UPS。",
      overview: "万电通机架式UPS是一款标准19英寸机架式在线双转换UPS,为IT与网络设备提供纯净、稳压的备用电力,并支持灵活的电池续航配置。",
      keyFeatures: ["真正的在线双转换拓扑", "2U–6U机架安装形式", "LCD显示面板,实时监控输入/输出/电池/负载", "可选扩展电池组,延长续航时间", "标配RS232,可通过智能卡插槽扩展至RS485、干接点或SNMP", "支持SNMP / RS232 / 手机APP远程监控,断电即时告警", "过载或故障时自动旁路"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "1–20 kVA" }, { label: "输入电压", value: "110/220/230/240V单相" }, { label: "输出电压", value: "220/230/240V ±1%" }, { label: "功率因数", value: "0.9" }, { label: "效率", value: "最高94%(在线模式)" }] },
        { title: "电池与续航", specs: [{ label: "电池配置", value: "内置+外接扩展电池柜" }, { label: "备用时间", value: "5分钟至数小时(视负载而定)" }] },
        { title: "通信", specs: [{ label: "接口", value: "RS232、USB、SNMP卡(可选)、干接点" }, { label: "并机能力", value: "最多4台(视型号而定)" }] },
      ],
      applications: ["服务器与网络机柜", "电信设备间", "中小企业机房"],
      customizationOptions: ["机架高度(2U/3U/6U)", "电池续航方案", "通信卡"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么是在线式UPS？", answer: "在线式(双转换)UPS持续将输入交流电转换为直流电,再转换回交流电,提供恒定、稳压的输出且切换至电池时零延时,因此成为数据中心及关键IT负载的标准拓扑结构。" },
        { question: "如何选择UPS续航时间与容量？", answer: "根据所连接IT负载并预留增长余量确定UPS的kVA/kW容量,再根据发电机启动或安全关机前所需的续航时间确定电池容量——市电支持场地通常为5-15分钟,无发电机场地则需要更长时间。" },
      ],
    },
  },
  "modular-ups": {
    ar: {
      name: "UPS معياري",
      shortName: "UPS معياري",
      tagline: "UPS بوحدات طاقة قابلة للاستبدال الساخن لطاقة حرجة قابلة للتوسع وعالية التوافر.",
      overview: "يستخدم UPS المعياري من واندتونغ وحدات طاقة قابلة للاستبدال الساخن ضمن إطار مشترك، ما يتيح توسيع السعة مع نمو حمل تكنولوجيا المعلومات ودمج التكرار (N+1/N+X) دون المبالغة في حجم الاستثمار في اليوم الأول.",
      keyFeatures: ["وحدات طاقة قابلة للاستبدال الساخن", "تكرار N+X دون إيقاف كامل للنظام", "سعة قابلة للتوسع ضمن إطار واحد", "توسع إطارات متوازية للمواقع الكبيرة", "تحكم رقمي كامل ومراقبة عن بُعد"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "10 – 800 كيلو فولت أمبير (يعتمد على الإطار والوحدة)" }, { label: "جهد الدخل", value: "380/400/415 فولت ثلاثي الطور" }, { label: "جهد الخرج", value: "380/400/415 فولت ثلاثي الطور" }, { label: "الكفاءة", value: "حتى 97% (وضع ECO / عبر الإنترنت)" }] },
        { title: "التكرار والاتصال", specs: [{ label: "التكرار", value: "N+1، N+X على مستوى الوحدة والإطار" }, { label: "القدرة على التوازي", value: "إطارات متعددة، حتى حد تصميم النظام" }, { label: "الاتصال", value: "SNMP، Modbus، واجهة لمس HMI" }] },
      ],
      applications: ["مراكز بيانات المؤسسات والاستضافة المشتركة", "منشآت حرجة تتطلب تكرار N+1", "مواقع بنمو حمل تكنولوجيا المعلومات على مراحل"],
      customizationOptions: ["تصنيف طاقة الوحدة", "عدد فتحات الإطار", "دمج خزانة البطارية"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هو تكرار N+1؟", answer: "يعني تكرار N+1 تركيب وحدة أو وحدة طاقة إضافية واحدة بخلاف ما هو مطلوب لدعم الحمل الفعلي (N)، بحيث لا يؤدي فشل وحدة واحدة إلى انقطاع الطاقة عن الحمل. تجعل أنظمة UPS المعيارية N+1 عملياً بالسماح بوحدة إضافية واحدة في نفس الإطار." },
      ],
    },
    fr: {
      name: "Onduleur modulaire",
      shortName: "Onduleur modulaire",
      tagline: "Onduleur à modules de puissance échangeables à chaud pour une alimentation critique évolutive et haute disponibilité.",
      overview: "L'onduleur modulaire Wandtung utilise des modules de puissance échangeables à chaud au sein d'un châssis commun, permettant à la capacité d'évoluer avec la croissance de la charge informatique et d'intégrer la redondance (N+1/N+X) sans surdimensionner l'investissement initial.",
      keyFeatures: ["Modules de puissance échangeables à chaud", "Redondance N+X sans arrêt complet du système", "Capacité évolutive au sein d'un seul châssis", "Extension de châssis en parallèle pour les grands sites", "Contrôle numérique complet et surveillance à distance"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "10 – 800 kVA (selon châssis + module)" }, { label: "Tension d'entrée", value: "380/400/415V triphasé" }, { label: "Tension de sortie", value: "380/400/415V triphasé" }, { label: "Efficacité", value: "Jusqu'à 97% (mode ECO / en ligne)" }] },
        { title: "Redondance et communication", specs: [{ label: "Redondance", value: "N+1, N+X au niveau module et châssis" }, { label: "Capacité de mise en parallèle", value: "Plusieurs châssis, jusqu'à la limite de conception du système" }, { label: "Communication", value: "SNMP, Modbus, IHM tactile" }] },
      ],
      applications: ["Centres de données d'entreprise et de colocation", "Installations critiques nécessitant une redondance N+1", "Sites avec croissance progressive de la charge informatique"],
      customizationOptions: ["Puissance nominale du module", "Nombre d'emplacements du châssis", "Intégration d'armoire de batteries"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce que la redondance N+1 ?", answer: "La redondance N+1 signifie qu'un module ou une unité de puissance supplémentaire au-delà de ce qui est nécessaire pour supporter la charge réelle (N) est installé, afin qu'une seule défaillance de module n'interrompe pas l'alimentation de la charge. Les systèmes d'onduleurs modulaires rendent le N+1 pratique en permettant un module supplémentaire dans le même châssis." },
      ],
    },
    es: {
      name: "SAI modular",
      shortName: "SAI modular",
      tagline: "SAI con módulos de potencia intercambiables en caliente para energía crítica escalable y de alta disponibilidad.",
      overview: "El SAI modular de Wandtung utiliza módulos de potencia intercambiables en caliente dentro de un chasis común, permitiendo que la capacidad escale con el crecimiento de la carga de TI e incorporando redundancia (N+1/N+X) sin sobredimensionar la inversión inicial.",
      keyFeatures: ["Módulos de potencia intercambiables en caliente", "Redundancia N+X sin apagado completo del sistema", "Capacidad escalable dentro de un solo chasis", "Expansión de chasis en paralelo para sitios grandes", "Control digital completo y monitoreo remoto"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "10 – 800 kVA (según chasis + módulo)" }, { label: "Voltaje de entrada", value: "380/400/415V trifásico" }, { label: "Voltaje de salida", value: "380/400/415V trifásico" }, { label: "Eficiencia", value: "Hasta 97% (modo ECO / en línea)" }] },
        { title: "Redundancia y comunicación", specs: [{ label: "Redundancia", value: "N+1, N+X a nivel de módulo y chasis" }, { label: "Capacidad de paralelismo", value: "Múltiples chasis, hasta el límite de diseño del sistema" }, { label: "Comunicación", value: "SNMP, Modbus, HMI de pantalla táctil" }] },
      ],
      applications: ["Centros de datos empresariales y de colocación", "Instalaciones críticas que requieren redundancia N+1", "Sitios con crecimiento progresivo de carga de TI"],
      customizationOptions: ["Potencia nominal del módulo", "Número de ranuras del chasis", "Integración de gabinete de baterías"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es la redundancia N+1?", answer: "La redundancia N+1 significa que se instala una unidad o módulo de potencia adicional más allá de lo necesario para soportar la carga real (N), de modo que el fallo de un solo módulo no interrumpa la energía a la carga. Los sistemas SAI modulares hacen práctico el N+1 al permitir un módulo adicional en el mismo chasis." },
      ],
    },
    ru: {
      name: "Модульный ИБП",
      shortName: "Модульный ИБП",
      tagline: "ИБП с горячезаменяемыми силовыми модулями для масштабируемого критического питания высокой доступности.",
      overview: "Модульный ИБП Wandtung использует горячезаменяемые силовые модули в общем шасси, позволяя наращивать мощность по мере роста ИТ-нагрузки и встраивать резервирование (N+1/N+X) без избыточных первоначальных инвестиций.",
      keyFeatures: ["Горячезаменяемые силовые модули", "Резервирование N+X без полной остановки системы", "Масштабируемая мощность в рамках одного шасси", "Параллельное расширение шасси для крупных объектов", "Полное цифровое управление и удалённый мониторинг"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "10 – 800 кВА (в зависимости от шасси и модуля)" }, { label: "Входное напряжение", value: "380/400/415В трёхфазное" }, { label: "Выходное напряжение", value: "380/400/415В трёхфазное" }, { label: "КПД", value: "До 97% (режим ECO / онлайн)" }] },
        { title: "Резервирование и связь", specs: [{ label: "Резервирование", value: "N+1, N+X на уровне модуля и шасси" }, { label: "Возможность параллельной работы", value: "Несколько шасси, до предела проектирования системы" }, { label: "Связь", value: "SNMP, Modbus, сенсорная панель HMI" }] },
      ],
      applications: ["Корпоративные и колокейшн ЦОД", "Критически важные объекты, требующие резервирования N+1", "Объекты с поэтапным ростом ИТ-нагрузки"],
      customizationOptions: ["Номинальная мощность модуля", "Количество слотов шасси", "Интеграция батарейного шкафа"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое резервирование N+1?", answer: "Резервирование N+1 означает установку одного дополнительного силового модуля или устройства сверх необходимого для поддержки фактической нагрузки (N), чтобы отказ одного модуля не прерывал питание нагрузки. Модульные ИБП делают N+1 практичным, позволяя разместить один дополнительный модуль в том же шасси." },
      ],
    },
    zh: {
      name: "模块化UPS",
      shortName: "模块化UPS",
      tagline: "配备热插拔电源模块的UPS,实现可扩展、高可用的关键电力保障。",
      overview: "万电通模块化UPS在公共机架内采用热插拔电源模块,可随IT负载增长灵活扩容,并内置冗余(N+1/N+X)能力,避免首期投资过度超配。",
      keyFeatures: ["热插拔电源模块", "N+X冗余,无需系统整体停机", "单一机架内可扩展容量", "支持多机架并联扩容,适用于大型场地", "完整数字化控制与远程监控"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "10–800 kVA(视机架及模块而定)" }, { label: "输入电压", value: "380/400/415V三相" }, { label: "输出电压", value: "380/400/415V三相" }, { label: "效率", value: "最高97%(ECO/在线模式)" }] },
        { title: "冗余与通信", specs: [{ label: "冗余方式", value: "模块级与机架级N+1、N+X" }, { label: "并机能力", value: "多机架并联,受系统设计上限约束" }, { label: "通信", value: "SNMP、Modbus、触摸屏HMI" }] },
      ],
      applications: ["企业及托管数据中心", "需要N+1冗余的关键设施", "IT负载分阶段增长的场地"],
      customizationOptions: ["模块功率规格", "机架槽位数量", "电池柜集成"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么是N+1冗余？", answer: "N+1冗余是指在支持实际负载(N)所需数量基础上额外配置一个电源模块或设备,使单个模块故障不会中断对负载的供电。模块化UPS系统通过在同一机架内预留一个额外模块,使N+1冗余切实可行。" },
      ],
    },
  },
  "tower-ups": {
    ar: {
      name: "UPS برجي",
      shortName: "UPS برجي",
      tagline: "UPS عبر الإنترنت قائم بذاته لغرف الخوادم ومساحات المعدات الصغيرة بدون راك.",
      overview: "يوفر UPS البرجي من واندتونغ نفس الحماية المزدوجة التحويل عبر الإنترنت مثل مجموعة تركيب الراك، في غلاف برجي قائم بذاته، مناسب لغرف الخوادم والمكاتب الخلفية للتجزئة ومساحات المعدات التي لا تستخدم راكاً بحجم 19 بوصة.",
      keyFeatures: ["طوبولوجيا مزدوجة التحويل عبر الإنترنت حقيقية", "غلاف برجي قائم بذاته", "طقم تحويل اختياري لتركيب الراك في طرازات مختارة", "لوحة حالة LCD وإنذارات صوتية"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "1 – 10 كيلو فولت أمبير" }, { label: "جهد الدخل", value: "220/230/240 فولت أحادي الطور" }, { label: "جهد الخرج", value: "220/230/240 فولت ±1%" }, { label: "الكفاءة", value: "حتى 93% (وضع عبر الإنترنت)" }] },
        { title: "الاتصال", specs: [{ label: "الواجهات", value: "RS232، USB، بطاقة SNMP (اختياري)" }] },
      ],
      applications: ["غرف خوادم بدون راكات", "تكنولوجيا معلومات المكاتب الخلفية للتجزئة", "مساحات معدات صغيرة"],
      customizationOptions: ["حزمة وقت تشغيل البطارية", "طقم تحويل الراك", "بطاقة الاتصال"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل يمكن تحويل UPS البرجي إلى تركيب راك لاحقاً؟", answer: "تدعم طرازات مختارة من UPS البرجي من واندتونغ طقم تحويل اختياري لتركيب الراك، ما يتيح نقل نفس الوحدة إلى راك 19 بوصة إذا تمت ترقية الموقع لاحقاً — تأكد من التوافق للطراز المحدد مع فريقنا الهندسي." },
      ],
    },
    fr: {
      name: "Onduleur tour",
      shortName: "Onduleur tour",
      tagline: "Onduleur en ligne autonome pour salles serveurs et petits espaces d'équipement sans rack.",
      overview: "L'onduleur tour Wandtung offre la même protection en ligne à double conversion que la gamme rack, dans un boîtier tour autonome, adapté aux salles serveurs, arrière-boutiques de détail et espaces d'équipement n'utilisant pas de rack 19 pouces.",
      keyFeatures: ["Véritable topologie en ligne à double conversion", "Boîtier tour autonome", "Kit de conversion en rack optionnel sur certains modèles", "Panneau d'état LCD et alarmes sonores"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "1 – 10 kVA" }, { label: "Tension d'entrée", value: "220/230/240V monophasé" }, { label: "Tension de sortie", value: "220/230/240V ±1%" }, { label: "Efficacité", value: "Jusqu'à 93% (mode en ligne)" }] },
        { title: "Communication", specs: [{ label: "Interfaces", value: "RS232, USB, carte SNMP (en option)" }] },
      ],
      applications: ["Salles serveurs sans racks", "Informatique d'arrière-boutique de détail", "Petits espaces d'équipement"],
      customizationOptions: ["Package d'autonomie de batterie", "Kit de conversion en rack", "Carte de communication"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Un onduleur tour peut-il être converti en montage rack ultérieurement ?", answer: "Certains modèles d'onduleurs tour Wandtung prennent en charge un kit de conversion en rack optionnel, permettant de déplacer la même unité dans un rack 19 pouces si le site est mis à niveau ultérieurement — confirmez la compatibilité du modèle spécifique avec notre équipe d'ingénierie." },
      ],
    },
    es: {
      name: "SAI torre",
      shortName: "SAI torre",
      tagline: "SAI en línea independiente para salas de servidores y pequeños espacios de equipos sin rack.",
      overview: "El SAI torre de Wandtung ofrece la misma protección en línea de doble conversión que la gama de montaje en rack, en una carcasa tipo torre independiente, adecuada para salas de servidores, trastiendas comerciales y espacios de equipos que no usan un rack de 19 pulgadas.",
      keyFeatures: ["Topología en línea de doble conversión verdadera", "Carcasa tipo torre independiente", "Kit de conversión a rack opcional en modelos seleccionados", "Panel de estado LCD y alarmas audibles"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "1 – 10 kVA" }, { label: "Voltaje de entrada", value: "220/230/240V monofásico" }, { label: "Voltaje de salida", value: "220/230/240V ±1%" }, { label: "Eficiencia", value: "Hasta 93% (modo en línea)" }] },
        { title: "Comunicación", specs: [{ label: "Interfaces", value: "RS232, USB, tarjeta SNMP (opcional)" }] },
      ],
      applications: ["Salas de servidores sin racks", "TI de trastienda minorista", "Pequeños espacios de equipos"],
      customizationOptions: ["Paquete de autonomía de batería", "Kit de conversión a rack", "Tarjeta de comunicación"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Se puede convertir un SAI torre a montaje en rack más adelante?", answer: "Modelos seleccionados de SAI torre de Wandtung admiten un kit de conversión a rack opcional, permitiendo que la misma unidad pase a un rack de 19 pulgadas si el sitio se actualiza más adelante; confirme la compatibilidad del modelo específico con nuestro equipo de ingeniería." },
      ],
    },
    ru: {
      name: "Напольный ИБП (башенного типа)",
      shortName: "Напольный ИБП",
      tagline: "Автономный онлайн ИБП для серверных и небольших помещений с оборудованием без стойки.",
      overview: "Напольный ИБП Wandtung обеспечивает ту же онлайн-защиту двойного преобразования, что и стоечная линейка, в отдельно стоящем корпусе башенного типа, подходящем для серверных, подсобных помещений розничной торговли и зон с оборудованием, где не используется 19-дюймовая стойка.",
      keyFeatures: ["Настоящая онлайн-топология двойного преобразования", "Отдельно стоящий корпус башенного типа", "Опциональный комплект для преобразования в стоечный на отдельных моделях", "ЖК-панель состояния и звуковые сигналы"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "1 – 10 кВА" }, { label: "Входное напряжение", value: "220/230/240В однофазное" }, { label: "Выходное напряжение", value: "220/230/240В ±1%" }, { label: "КПД", value: "До 93% (онлайн режим)" }] },
        { title: "Связь", specs: [{ label: "Интерфейсы", value: "RS232, USB, карта SNMP (опционально)" }] },
      ],
      applications: ["Серверные без стоек", "ИТ подсобных помещений розничной торговли", "Небольшие помещения с оборудованием"],
      customizationOptions: ["Пакет времени автономной работы батареи", "Комплект для преобразования в стоечный", "Карта связи"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Можно ли позже преобразовать напольный ИБП в стоечный?", answer: "Отдельные модели напольных ИБП Wandtung поддерживают опциональный комплект для преобразования в стоечный, позволяющий перенести то же устройство в 19-дюймовую стойку при модернизации объекта — уточните совместимость конкретной модели у нашей инженерной команды." },
      ],
    },
    zh: {
      name: "塔式UPS",
      shortName: "塔式UPS",
      tagline: "面向无机架服务器机房及小型设备区域的独立式在线UPS。",
      overview: "万电通塔式UPS提供与机架式产品线相同的在线双转换保护能力,采用独立塔式机箱,适用于不使用19英寸机架的服务器机房、零售后台办公区及设备区域。",
      keyFeatures: ["真正的在线双转换拓扑", "独立塔式机箱", "部分型号可选配机架转换套件", "LCD状态面板与声音告警"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "1–10 kVA" }, { label: "输入电压", value: "220/230/240V单相" }, { label: "输出电压", value: "220/230/240V ±1%" }, { label: "效率", value: "最高93%(在线模式)" }] },
        { title: "通信", specs: [{ label: "接口", value: "RS232、USB、SNMP卡(可选)" }] },
      ],
      applications: ["无机架服务器机房", "零售后台IT系统", "小型设备区域"],
      customizationOptions: ["电池续航方案", "机架转换套件", "通信卡"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "塔式UPS后期能否转换为机架式？", answer: "万电通部分塔式UPS型号支持可选的机架转换套件,若场地后期升级,可将同一设备转入19英寸机架——具体型号的兼容性请与我们的工程团队确认。" },
      ],
    },
  },
  "online-ups": {
    ar: {
      name: "UPS عبر الإنترنت",
      shortName: "UPS عبر الإنترنت",
      tagline: "UPS مزدوج التحويل يوفر طاقة مستمرة ومنظمة بزمن نقل صفري.",
      overview: "يستخدم UPS عبر الإنترنت من واندتونغ طوبولوجيا مزدوجة التحويل حقيقية، تعيد توليد طاقة الخرج باستمرار من العاكس بدلاً من التبديل إلى البطارية عند حدوث اضطراب، بحيث ترى المعدات المتصلة دائماً موجة نظيفة ومنظمة بزمن نقل صفري — الخيار القياسي لأحمال تكنولوجيا المعلومات ومراكز البيانات الحرجة.",
      keyFeatures: ["طوبولوجيا مزدوجة التحويل عبر الإنترنت حقيقية", "زمن نقل صفري إلى البطارية", "نافذة جهد دخل واسعة تقلل دورات البطارية", "صيغ تركيب راك وبرجي متوفرة"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "1 – 40 كيلو فولت أمبير" }, { label: "نافذة جهد الدخل", value: "نطاق واسع، يقلل التحويل إلى البطارية" }, { label: "معامل القدرة", value: "0.9–1.0 (يعتمد على الطراز)" }, { label: "الكفاءة", value: "حتى 95% (وضع عبر الإنترنت)" }] },
      ],
      applications: ["راكات تكنولوجيا المعلومات في مراكز البيانات", "معدات التحكم بالعمليات الحرجة", "معدات الاتصالات والشبكات"],
      customizationOptions: ["تصنيف الطاقة", "وقت تشغيل البطارية", "الشكل"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هو UPS عبر الإنترنت؟", answer: "يحول UPS عبر الإنترنت (مزدوج التحويل) طاقة التيار المتردد الواردة باستمرار إلى تيار مستمر ثم مرة أخرى إلى تيار متردد، ما يوفر خرجاً ثابتاً ومنظماً بدون زمن نقل إلى البطارية، ولهذا فهو الطوبولوجيا القياسية لأحمال مراكز البيانات وتكنولوجيا المعلومات الحرجة." },
      ],
    },
    fr: {
      name: "Onduleur en ligne",
      shortName: "Onduleur en ligne",
      tagline: "Onduleur à double conversion fournissant une alimentation continue et régulée avec un temps de transfert nul.",
      overview: "L'onduleur en ligne Wandtung utilise une véritable topologie à double conversion, régénérant en continu la puissance de sortie depuis son onduleur plutôt que de basculer sur batterie en cas de perturbation, de sorte que l'équipement connecté voit toujours une forme d'onde propre et régulée avec un temps de transfert nul — le choix standard pour les charges critiques informatiques et de centres de données.",
      keyFeatures: ["Véritable topologie en ligne à double conversion", "Temps de transfert nul vers la batterie", "Large fenêtre de tension d'entrée réduisant les cycles de batterie", "Formats rack et tour disponibles"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "1 – 40 kVA" }, { label: "Fenêtre de tension d'entrée", value: "Large plage, réduit les transferts sur batterie" }, { label: "Facteur de puissance", value: "0,9–1,0 (selon le modèle)" }, { label: "Efficacité", value: "Jusqu'à 95% (mode en ligne)" }] },
      ],
      applications: ["Baies informatiques de centres de données", "Équipements de contrôle de processus critiques", "Équipements télécoms et réseau"],
      customizationOptions: ["Puissance nominale", "Autonomie de batterie", "Format"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce qu'un onduleur en ligne ?", answer: "Un onduleur en ligne (double conversion) convertit en continu l'alimentation CA entrante en CC puis à nouveau en CA, fournissant une sortie constante et régulée sans temps de transfert vers la batterie, ce qui en fait la topologie standard pour les charges critiques de centres de données et informatiques." },
      ],
    },
    es: {
      name: "SAI en línea",
      shortName: "SAI en línea",
      tagline: "SAI de doble conversión que proporciona energía continua y regulada con tiempo de transferencia cero.",
      overview: "El SAI en línea de Wandtung utiliza una topología de doble conversión verdadera, regenerando continuamente la potencia de salida desde su inversor en lugar de cambiar a batería ante una perturbación, de modo que el equipo conectado siempre ve una forma de onda limpia y regulada con tiempo de transferencia cero: la opción estándar para cargas críticas de TI y centros de datos.",
      keyFeatures: ["Topología en línea de doble conversión verdadera", "Tiempo de transferencia cero a la batería", "Ventana de voltaje de entrada amplia que reduce los ciclos de batería", "Formatos de montaje en rack y torre disponibles"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "1 – 40 kVA" }, { label: "Ventana de voltaje de entrada", value: "Rango amplio, reduce las transferencias a batería" }, { label: "Factor de potencia", value: "0,9–1,0 (según el modelo)" }, { label: "Eficiencia", value: "Hasta 95% (modo en línea)" }] },
      ],
      applications: ["Racks de TI de centros de datos", "Equipos de control de procesos críticos", "Equipos de telecomunicaciones y redes"],
      customizationOptions: ["Potencia nominal", "Autonomía de batería", "Formato"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es un SAI en línea?", answer: "Un SAI en línea (doble conversión) convierte continuamente la energía de CA entrante a CC y de nuevo a CA, proporcionando una salida constante y regulada con tiempo de transferencia cero a la batería, por lo que es la topología estándar para cargas críticas de TI y centros de datos." },
      ],
    },
    ru: {
      name: "Онлайн ИБП",
      shortName: "Онлайн ИБП",
      tagline: "ИБП двойного преобразования, обеспечивающий непрерывное стабилизированное питание с нулевым временем перехода.",
      overview: "Онлайн ИБП Wandtung использует настоящую топологию двойного преобразования, непрерывно регенерируя выходную мощность от своего инвертора вместо перехода на батарею при возмущении, поэтому подключённое оборудование всегда видит чистую, стабилизированную форму сигнала с нулевым временем перехода — стандартный выбор для критических ИТ- и ЦОД-нагрузок.",
      keyFeatures: ["Настоящая онлайн-топология двойного преобразования", "Нулевое время перехода на батарею", "Широкий диапазон входного напряжения снижает число циклов батареи", "Доступны стоечный и напольный форм-факторы"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "1 – 40 кВА" }, { label: "Диапазон входного напряжения", value: "Широкий диапазон, снижает переходы на батарею" }, { label: "Коэффициент мощности", value: "0,9–1,0 (в зависимости от модели)" }, { label: "КПД", value: "До 95% (онлайн режим)" }] },
      ],
      applications: ["ИТ-стойки ЦОД", "Оборудование критического технологического контроля", "Телекоммуникационное и сетевое оборудование"],
      customizationOptions: ["Номинальная мощность", "Время автономной работы батареи", "Форм-фактор"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое онлайн ИБП?", answer: "Онлайн ИБП (двойного преобразования) непрерывно преобразует входящее переменное напряжение в постоянное и обратно в переменное, обеспечивая постоянный стабилизированный выход с нулевым временем перехода на батарею, что делает его стандартной топологией для критических ИТ- и ЦОД-нагрузок." },
      ],
    },
    zh: {
      name: "在线式UPS",
      shortName: "在线式UPS",
      tagline: "提供连续稳压电力、零切换时间的双转换UPS。",
      overview: "万电通在线式UPS采用真正的双转换拓扑,持续由逆变器再生输出电力,而非在电力波动时切换至电池,使所连接设备始终获得纯净、稳压的电力波形且切换时间为零——是数据中心及关键IT负载的标准选择。",
      keyFeatures: ["真正的在线双转换拓扑", "切换至电池时间为零", "宽输入电压范围,减少电池充放电次数", "提供机架式与塔式两种形式"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "1–40 kVA" }, { label: "输入电压范围", value: "宽范围,减少电池切换频率" }, { label: "功率因数", value: "0.9–1.0(视型号而定)" }, { label: "效率", value: "最高95%(在线模式)" }] },
      ],
      applications: ["数据中心IT机柜", "关键工艺控制设备", "电信及网络设备"],
      customizationOptions: ["功率规格", "电池续航时间", "外形"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么是在线式UPS？", answer: "在线式(双转换)UPS持续将输入交流电转换为直流电,再转换回交流电,提供恒定、稳压的输出且切换至电池时零延时,因此成为数据中心及关键IT负载的标准拓扑结构。" },
      ],
    },
  },
  "industrial-ups": {
    ar: {
      name: "UPS صناعي",
      shortName: "UPS صناعي",
      tagline: "UPS مقوى لحماية الطاقة في البيئات الصناعية القاسية والتحكم بالعمليات.",
      overview: "صُمم UPS الصناعي من واندتونغ لبيئات خارج ظروف مراكز البيانات النموذجية — نطاق درجة حرارة تشغيل أوسع، حماية دخول أعلى، وتحمل للغبار والاهتزاز وطاقة دخل أقل استقراراً — لحماية التحكم بالعمليات وSCADA ومعدات تكنولوجيا المعلومات الصناعية في المصانع والمنشآت والمواقع الصناعية النائية.",
      keyFeatures: ["نطاق درجة حرارة تشغيل موسع", "خيارات غلاف بتصنيف IP أعلى للبيئات المغبرة/الرطبة", "تحمل واسع لجهد الدخل للشبكات غير المستقرة", "بنية مقاومة للاهتزاز"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "1 – 100 كيلو فولت أمبير" }, { label: "درجة حرارة التشغيل", value: "نطاق موسع مقارنة بـUPS تكنولوجيا المعلومات القياسي" }, { label: "تصنيف IP", value: "خيارات غلاف حتى IP54" }] },
      ],
      applications: ["التحكم بعمليات المصانع", "SCADA / الأتمتة الصناعية", "طاقة مواقع النفط والغاز والتعدين"],
      customizationOptions: ["تصنيف IP للغلاف", "تصنيف الطاقة", "وقت تشغيل بطارية موسع"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "كيف يختلف UPS الصناعي عن UPS مركز البيانات القياسي؟", answer: "يُبنى UPS الصناعي لتحمل تقلبات درجة حرارة أوسع، وغباراً، واهتزازاً، وطاقة دخل أقل استقراراً من UPS مركز البيانات النموذجي، وغالباً ما يُوضع في غلاف بتصنيف IP أعلى يناسب بيئات المصانع أو الصناعية الخارجية." },
      ],
    },
    fr: {
      name: "Onduleur industriel",
      shortName: "Onduleur industriel",
      tagline: "Onduleur renforcé pour la protection électrique en environnements industriels difficiles et de contrôle de processus.",
      overview: "L'onduleur industriel Wandtung est conçu pour des environnements en dehors des conditions typiques des centres de données — plage de température de fonctionnement plus large, indice de protection supérieur et tolérance à la poussière, aux vibrations et à une alimentation d'entrée moins stable — protégeant le contrôle de processus, les systèmes SCADA et les équipements informatiques industriels dans les usines, installations et sites industriels distants.",
      keyFeatures: ["Plage de température de fonctionnement étendue", "Options de boîtier à indice IP supérieur pour environnements poussiéreux/humides", "Large tolérance de tension d'entrée pour réseaux instables", "Construction résistante aux vibrations"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "1 – 100 kVA" }, { label: "Température de fonctionnement", value: "Plage étendue par rapport à un onduleur informatique standard" }, { label: "Indice de protection", value: "Options de boîtier jusqu'à IP54" }] },
      ],
      applications: ["Contrôle de processus d'usine", "SCADA / automatisation industrielle", "Alimentation de sites pétroliers, gaziers et miniers"],
      customizationOptions: ["Indice IP du boîtier", "Puissance nominale", "Autonomie de batterie étendue"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "En quoi un onduleur industriel diffère-t-il d'un onduleur de centre de données standard ?", answer: "Un onduleur industriel est conçu pour tolérer des variations de température plus larges, la poussière, les vibrations et une alimentation d'entrée moins stable qu'un onduleur de centre de données typique, et est souvent logé dans un boîtier à indice IP supérieur adapté aux environnements industriels ou extérieurs." },
      ],
    },
    es: {
      name: "SAI industrial",
      shortName: "SAI industrial",
      tagline: "SAI reforzado para protección eléctrica en entornos industriales exigentes y control de procesos.",
      overview: "El SAI industrial de Wandtung está construido para entornos fuera de las condiciones típicas de un centro de datos: rango de temperatura de funcionamiento más amplio, mayor protección de entrada y tolerancia al polvo, vibración y energía de entrada menos estable, protegiendo el control de procesos, SCADA y equipos de TI industrial en fábricas, plantas y sitios industriales remotos.",
      keyFeatures: ["Rango de temperatura de funcionamiento extendido", "Opciones de carcasa con mayor clasificación IP para entornos polvorientos/húmedos", "Amplia tolerancia de voltaje de entrada para redes inestables", "Construcción resistente a vibraciones"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "1 – 100 kVA" }, { label: "Temperatura de funcionamiento", value: "Rango extendido frente a un SAI de TI estándar" }, { label: "Clasificación IP", value: "Opciones de carcasa hasta IP54" }] },
      ],
      applications: ["Control de procesos de fábrica", "SCADA / automatización industrial", "Energía para sitios de petróleo, gas y minería"],
      customizationOptions: ["Clasificación IP de la carcasa", "Potencia nominal", "Autonomía de batería extendida"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿En qué se diferencia un SAI industrial de un SAI de centro de datos estándar?", answer: "Un SAI industrial está construido para tolerar oscilaciones de temperatura más amplias, polvo, vibración y energía de entrada menos estable que un SAI de centro de datos típico, y a menudo se aloja en una carcasa con mayor clasificación IP adecuada para entornos de fábrica o industriales exteriores." },
      ],
    },
    ru: {
      name: "Промышленный ИБП",
      shortName: "Промышленный ИБП",
      tagline: "Усиленный ИБП для защиты питания в суровых промышленных условиях и системах технологического контроля.",
      overview: "Промышленный ИБП Wandtung рассчитан на условия за пределами типичных для ЦОД — расширенный диапазон рабочих температур, более высокая степень защиты корпуса и устойчивость к пыли, вибрации и менее стабильному входному питанию — защищая системы технологического контроля, SCADA и промышленное ИТ-оборудование на заводах, предприятиях и удалённых промышленных объектах.",
      keyFeatures: ["Расширенный диапазон рабочих температур", "Варианты корпуса с более высоким классом защиты IP для пыльных/влажных условий", "Широкая переносимость колебаний входного напряжения для нестабильных сетей", "Виброустойчивая конструкция"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "1 – 100 кВА" }, { label: "Рабочая температура", value: "Расширенный диапазон по сравнению со стандартным ИТ-ИБП" }, { label: "Класс защиты IP", value: "Варианты корпуса до IP54" }] },
      ],
      applications: ["Технологический контроль на заводах", "SCADA / промышленная автоматизация", "Электропитание на объектах нефтегазовой и горнодобывающей отрасли"],
      customizationOptions: ["Класс защиты IP корпуса", "Номинальная мощность", "Расширенное время автономной работы батареи"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Чем промышленный ИБП отличается от стандартного ИБП для ЦОД?", answer: "Промышленный ИБП рассчитан на более широкие перепады температуры, пыль, вибрацию и менее стабильное входное питание, чем типичный ИБП для ЦОД, и часто размещается в корпусе с более высоким классом защиты IP, подходящем для заводских или уличных промышленных условий." },
      ],
    },
    zh: {
      name: "工业级UPS",
      shortName: "工业级UPS",
      tagline: "面向恶劣工业环境与工艺控制场景的加固型UPS电力保护方案。",
      overview: "万电通工业级UPS专为超出典型数据中心条件的环境设计——具备更宽的工作温度范围、更高的防护等级,并能耐受粉尘、振动及不稳定输入电力,为工厂、厂区及偏远工业场地的工艺控制、SCADA及工业IT设备提供保护。",
      keyFeatures: ["扩展的工作温度范围", "适用于多尘/潮湿环境的更高IP防护等级机箱选项", "适应不稳定电网的宽输入电压容差", "抗振动结构设计"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "1–100 kVA" }, { label: "工作温度", value: "相比标准IT级UPS范围更宽" }, { label: "防护等级", value: "最高IP54机箱选项" }] },
      ],
      applications: ["工厂工艺控制", "SCADA/工业自动化", "石油天然气及矿业场地供电"],
      customizationOptions: ["机箱防护等级", "功率规格", "扩展电池续航"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "工业级UPS与标准数据中心UPS有何区别？", answer: "工业级UPS专为耐受比典型数据中心UPS更宽的温度波动、粉尘、振动及更不稳定的输入电力而设计,通常采用更高防护等级的机箱,适用于工厂或户外工业环境。" },
      ],
    },
  },
  "high-power-ups": {
    ar: {
      name: "UPS عالي الطاقة",
      shortName: "UPS عالي الطاقة",
      tagline: "UPS برجي ثلاثي الطور بسعة كبيرة لطاقة حرجة في مراكز البيانات والصناعة والطب.",
      overview: "UPS عالي الطاقة من واندتونغ هو UPS برجي ثلاثي الطور مزدوج التحويل عبر الإنترنت، يوفر سعة من 10 إلى 200 كيلو فولت أمبير، مصمم لقاعات البيانات والمنشآت الصناعية والبيئات الطبية التي تتطلب خرجاً موجياً جيبياً نقياً بدون زمن انتقال إلى البطارية. يحل تسع مشكلات شائعة لجودة الطاقة — الانقطاع، الهبوط، الارتفاع، تشوه التوافقيات، التغيرات العابرة، تذبذب التردد، تداخل الموجات الكهرومغناطيسية، وارتفاع/انخفاض الجهد — من خلال وحدة واحدة، مع تحكم رقمي كامل ومراقبة عن بُعد.",
      keyFeatures: ["دخل ثلاثي الطور / خرج ثلاثي الطور، طوبولوجيا مزدوجة التحويل عبر الإنترنت", "سعة طاقة من 10 إلى 200 كيلو فولت أمبير بصيغة برجية", "خرج موجي جيبي نقي، توافقيات إجمالية أقل من 3%", "زمن انتقال 0 مللي ثانية إلى البطارية - بلا انقطاع", "تبديل تلقائي إلى البطارية عند انقطاع المرافق مع إعادة تشغيل تلقائية، دون تدخل يدوي", "حماية من التداخل الكهرومغناطيسي/الترددي وفق EN50091-3 / IEC 61000-4", "ثلاث مراوح تبريد عالية التدفق ولوحة تهوية خلفية مثقبة بالكامل", "مراقبة عن بُعد عبر SNMP / RS232 / RS485؛ عجلات متينة للتنقل"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "10 – 200 كيلو فولت أمبير" }, { label: "جهد الدخل/الخرج", value: "380/400/415 فولت ثلاثي الطور" }, { label: "الكفاءة", value: ">95% (وضع عبر الإنترنت)" }, { label: "شكل الموجة الخرج", value: "موجة جيبية نقية، توافقيات إجمالية أقل من 3%" }, { label: "زمن الانتقال", value: "0 مللي ثانية (بلا انقطاع)" }] },
        { title: "المراقبة والاتصال", specs: [{ label: "الواجهات", value: "RS232، RS485، SNMP" }, { label: "الشاشة", value: "لوحة تحكم LCD/شاشة لمس أمامية" }] },
        { title: "الهيكل والحماية", specs: [{ label: "التبريد", value: "ثلاث مراوح عالية التدفق، لوحة تهوية مثقبة بالكامل" }, { label: "التنقل", value: "عجلات متينة" }, { label: "القدرة على التوازي", value: "وحدات متعددة للسعة/التكرار" }] },
      ],
      applications: ["طاقة على مستوى منشأة مركز البيانات", "طاقة حرجة للمنشآت الطبية", "أحمال حرجة صناعية وتجارية كبيرة", "محطات طاقة الاستضافة المشتركة"],
      customizationOptions: ["تصنيف الطاقة", "تكوين التوازي", "دمج خزانة البطارية"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "حماية من التداخل الكهرومغناطيسي/الترددي وفق EN50091-3 / IEC 61000-4", "معتمد CE / IEC", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "متى يكون UPS عالي الطاقة مطلوباً بدلاً من UPS معياري؟", answer: "يناسب UPS عالي الطاقة (الأحادي الكتلة) المنشآت ذات الحمل الكبير المستقر والمحدد جيداً منذ اليوم الأول. غالباً ما يُفضَّل UPS المعياري عندما يُتوقع نمو الحمل بمرور الوقت، حيث يمكن إضافة السعة وحدة تلو الأخرى بدلاً من خطوات ثابتة كبيرة." },
        { question: "ما مشكلات الطاقة التي يحمي منها UPS عالي الطاقة؟", answer: "يحمي المعدات المتصلة من تسع مشكلات شائعة لجودة الطاقة: الانقطاع، هبوط الجهد، ارتفاع الجهد، ارتفاع الجهد الناتج عن الصواعق، تشوه التوافقيات، التغيرات العابرة في الجهد، تذبذب التردد، تداخل الموجات الكهرومغناطيسية، وارتفاع/انخفاض الجهد - من خلال التحويل المزدوج عبر الإنترنت بزمن انتقال صفري إلى البطارية." },
      ],
    },
    fr: {
      name: "Onduleur haute puissance",
      shortName: "Onduleur haute puissance",
      tagline: "Onduleur tour triphasé de grande capacité pour l'alimentation critique en centre de données, industrie et milieu médical.",
      overview: "L'onduleur haute puissance Wandtung est un onduleur tour triphasé en ligne à double conversion offrant de 10 à 200 kVA, conçu pour les salles informatiques, installations industrielles et environnements médicaux nécessitant une sortie sinusoïdale pure avec un temps de transfert nul vers la batterie. Il résout les neuf problèmes de qualité d'alimentation les plus courants — coupures, creux, surtensions, distorsion harmonique, transitoires, fluctuations de fréquence, interférences EMI, sur- et sous-tension — via une seule unité, avec un contrôle numérique complet et une surveillance à distance.",
      keyFeatures: ["Entrée triphasée / sortie triphasée, topologie en ligne à double conversion", "Capacité de puissance de 10 à 200 kVA au format tour", "Sortie sinusoïdale pure, THD < 3%", "Temps de transfert de 0ms vers la batterie — zéro interruption", "Bascule automatique sur batterie en cas de coupure secteur avec redémarrage automatique, sans intervention manuelle", "Blindage EMI/RFI selon EN50091-3 / IEC 61000-4", "Trois ventilateurs de refroidissement à haut débit et panneau de ventilation arrière entièrement perforé", "Surveillance à distance via SNMP / RS232 / RS485 ; roulettes robustes pour la mobilité"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "10 – 200 kVA" }, { label: "Tension d'entrée/sortie", value: "380/400/415V triphasé" }, { label: "Efficacité", value: ">95% (mode en ligne)" }, { label: "Forme d'onde de sortie", value: "Sinusoïdale pure, THD < 3%" }, { label: "Temps de transfert", value: "0ms (zéro interruption)" }] },
        { title: "Surveillance et communication", specs: [{ label: "Interfaces", value: "RS232, RS485, SNMP" }, { label: "Écran", value: "Panneau de commande LCD/tactile en façade" }] },
        { title: "Mécanique et protection", specs: [{ label: "Refroidissement", value: "Trois ventilateurs à haut débit, panneau de ventilation entièrement perforé" }, { label: "Mobilité", value: "Roulettes robustes" }, { label: "Capacité de mise en parallèle", value: "Plusieurs unités pour la capacité/redondance" }] },
      ],
      applications: ["Alimentation au niveau installation de centre de données", "Alimentation critique pour installations médicales", "Grandes charges critiques industrielles et commerciales", "Centrales électriques de colocation"],
      customizationOptions: ["Puissance nominale", "Configuration de mise en parallèle", "Intégration d'armoire de batteries"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Blindage EMI/RFI selon EN50091-3 / IEC 61000-4", "Certifié CE / IEC", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quand un onduleur haute puissance est-il nécessaire plutôt qu'un onduleur modulaire ?", answer: "Un onduleur haute puissance (monolithique) convient aux installations avec une charge importante, stable et bien définie dès le premier jour. Un onduleur modulaire est souvent préféré lorsque la charge va croître dans le temps, car la capacité peut être ajoutée module par module plutôt que par grands paliers fixes." },
        { question: "Contre quels problèmes d'alimentation l'onduleur haute puissance protège-t-il ?", answer: "Il protège les équipements connectés contre les neuf problèmes de qualité d'alimentation les plus courants : coupures, creux de tension, surtensions, surtensions dues à la foudre, distorsion harmonique, transitoires de tension, fluctuations de fréquence, interférences EMI et sur/sous-tension — grâce à la double conversion en ligne avec un temps de transfert nul vers la batterie." },
      ],
    },
    es: {
      name: "SAI de alta potencia",
      shortName: "SAI de alta potencia",
      tagline: "SAI de torre trifásico de gran capacidad para energía crítica en centros de datos, industria y entornos médicos.",
      overview: "El SAI de alta potencia de Wandtung es un SAI de torre trifásico en línea de doble conversión que ofrece de 10 a 200 kVA, diseñado para salas de datos, instalaciones industriales y entornos médicos que requieren salida de onda senoidal pura con tiempo de transferencia cero a batería. Resuelve los nueve problemas más comunes de calidad de energía —cortes, caídas, sobretensiones, distorsión armónica, transitorios, fluctuaciones de frecuencia, interferencia EMI, sobre y subtensión— a través de una sola unidad, con control digital completo y monitoreo remoto.",
      keyFeatures: ["Entrada trifásica / salida trifásica, topología en línea de doble conversión", "Capacidad de potencia de 10 a 200 kVA en formato torre", "Salida de onda senoidal pura, THD < 3%", "Tiempo de transferencia de 0ms a batería — cero interrupción", "Conmutación automática a batería ante fallo de red con reinicio automático, sin intervención manual", "Blindaje EMI/RFI según EN50091-3 / IEC 61000-4", "Tres ventiladores de refrigeración de alto flujo y panel de ventilación trasero totalmente perforado", "Monitoreo remoto vía SNMP / RS232 / RS485; ruedas resistentes para movilidad"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "10 – 200 kVA" }, { label: "Voltaje de entrada/salida", value: "380/400/415V trifásico" }, { label: "Eficiencia", value: ">95% (modo en línea)" }, { label: "Forma de onda de salida", value: "Onda senoidal pura, THD < 3%" }, { label: "Tiempo de transferencia", value: "0ms (cero interrupción)" }] },
        { title: "Monitoreo y comunicación", specs: [{ label: "Interfaces", value: "RS232, RS485, SNMP" }, { label: "Pantalla", value: "Panel de control LCD/táctil frontal" }] },
        { title: "Mecánica y protección", specs: [{ label: "Refrigeración", value: "Tres ventiladores de alto flujo, panel de ventilación totalmente perforado" }, { label: "Movilidad", value: "Ruedas resistentes" }, { label: "Capacidad de paralelismo", value: "Múltiples unidades para capacidad/redundancia" }] },
      ],
      applications: ["Energía a nivel de instalación de centro de datos", "Energía crítica para instalaciones médicas", "Grandes cargas críticas industriales y comerciales", "Plantas de energía de colocación"],
      customizationOptions: ["Potencia nominal", "Configuración de paralelismo", "Integración de gabinete de baterías"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Blindaje EMI/RFI según EN50091-3 / IEC 61000-4", "Certificado CE / IEC", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuándo se necesita un SAI de alta potencia en lugar de uno modular?", answer: "Un SAI de alta potencia (monolítico) es adecuado para instalaciones con una carga grande, estable y bien definida desde el primer día. A menudo se prefiere un SAI modular cuando la carga crecerá con el tiempo, ya que la capacidad puede añadirse módulo a módulo en lugar de en grandes incrementos fijos." },
        { question: "¿Contra qué problemas de energía protege el SAI de alta potencia?", answer: "Protege los equipos conectados contra los nueve problemas de calidad de energía más comunes: cortes, caídas de tensión, sobretensiones, sobretensiones por rayos, distorsión armónica, transitorios de tensión, fluctuaciones de frecuencia, interferencia EMI y sobre/subtensión, mediante doble conversión en línea con tiempo de transferencia cero a batería." },
      ],
    },
    ru: {
      name: "Мощный ИБП",
      shortName: "Мощный ИБП",
      tagline: "Трёхфазный башенный ИБП большой мощности для критического питания в ЦОД, промышленности и медицине.",
      overview: "Мощный ИБП Wandtung — это трёхфазный башенный онлайн-ИБП двойного преобразования мощностью от 10 до 200 кВА, разработанный для машинных залов, промышленных объектов и медицинских учреждений, которым требуется чистый синусоидальный выход с нулевым временем перехода на батарею. Он устраняет девять наиболее распространённых проблем качества питания — отключения, провалы напряжения, перенапряжения, гармонические искажения, переходные процессы, колебания частоты, электромагнитные помехи, повышенное и пониженное напряжение — с помощью одного устройства, с полным цифровым управлением и удалённым мониторингом.",
      keyFeatures: ["Трёхфазный вход / трёхфазный выход, топология онлайн двойного преобразования", "Мощность от 10 до 200 кВА в башенном форм-факторе", "Чистый синусоидальный выход, THD < 3%", "Время перехода на батарею 0 мс — без прерывания", "Автоматическое переключение на батарею при отключении сети с автоматическим перезапуском, без ручного вмешательства", "Защита от ЭМП/РЧ помех по EN50091-3 / IEC 61000-4", "Три высокопроизводительных вентилятора охлаждения и полностью перфорированная задняя вентиляционная панель", "Удалённый мониторинг через SNMP / RS232 / RS485; прочные ролики для мобильности"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "10 – 200 кВА" }, { label: "Входное/выходное напряжение", value: "380/400/415В трёхфазное" }, { label: "КПД", value: ">95% (онлайн режим)" }, { label: "Форма выходного сигнала", value: "Чистая синусоида, THD < 3%" }, { label: "Время перехода", value: "0 мс (без прерывания)" }] },
        { title: "Мониторинг и связь", specs: [{ label: "Интерфейсы", value: "RS232, RS485, SNMP" }, { label: "Дисплей", value: "Передняя панель управления ЖК/сенсорный экран" }] },
        { title: "Механика и защита", specs: [{ label: "Охлаждение", value: "Три высокопроизводительных вентилятора, полностью перфорированная вентиляционная панель" }, { label: "Мобильность", value: "Прочные ролики" }, { label: "Возможность параллельной работы", value: "Несколько устройств для наращивания мощности/резервирования" }] },
      ],
      applications: ["Электропитание уровня объекта ЦОД", "Критическое питание для медицинских учреждений", "Крупные промышленные и коммерческие критические нагрузки", "Энергоустановки колокейшн"],
      customizationOptions: ["Номинальная мощность", "Конфигурация параллельной работы", "Интеграция батарейного шкафа"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Защита от ЭМП/РЧ помех по EN50091-3 / IEC 61000-4", "Сертифицирован CE / IEC", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Когда требуется мощный ИБП вместо модульного?", answer: "Мощный (моноблочный) ИБП подходит для объектов со стабильной, чётко определённой большой нагрузкой с самого начала. Модульный ИБП часто предпочтительнее, когда нагрузка будет расти со временем, поскольку мощность можно наращивать модуль за модулем, а не крупными фиксированными шагами." },
        { question: "От каких проблем с питанием защищает мощный ИБП?", answer: "Он защищает подключённое оборудование от девяти наиболее распространённых проблем качества питания: отключений, провалов напряжения, перенапряжений, грозовых перенапряжений, гармонических искажений, переходных процессов напряжения, колебаний частоты, электромагнитных помех и повышенного/пониженного напряжения — благодаря онлайн двойному преобразованию с нулевым временем перехода на батарею." },
      ],
    },
    zh: {
      name: "大功率UPS",
      shortName: "大功率UPS",
      tagline: "面向数据中心、工业及医疗关键电力的大容量三相塔式UPS。",
      overview: "万电通大功率UPS是一款三相在线双转换塔式UPS,功率覆盖10-200kVA,专为需要纯正弦波输出、切换至电池零延时的机房、工业设施及医疗环境设计。单台设备即可解决九大常见电力质量问题——断电、电压跌落、电压浪涌、谐波失真、电压瞬变、频率波动、电磁干扰及过/欠压,并配备完整数字化控制与远程监控。",
      keyFeatures: ["三相输入/三相输出,在线双转换拓扑", "10–200kVA功率容量,塔式结构", "纯正弦波输出,总谐波失真<3%", "切换至电池零延时(0ms)——不间断供电", "市电故障时自动切换至电池并自动恢复,无需人工干预", "符合EN50091-3 / IEC 61000-4的电磁/射频屏蔽", "三组高风量散热风扇及全穿孔式后置通风面板", "支持SNMP / RS232 / RS485远程监控;配备重型脚轮便于移动"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "10–200 kVA" }, { label: "输入/输出电压", value: "380/400/415V三相" }, { label: "效率", value: ">95%(在线模式)" }, { label: "输出波形", value: "纯正弦波,总谐波失真<3%" }, { label: "切换时间", value: "0ms(不间断供电)" }] },
        { title: "监控与通信", specs: [{ label: "接口", value: "RS232、RS485、SNMP" }, { label: "显示屏", value: "前面板LCD/触摸控制面板" }] },
        { title: "机械结构与保护", specs: [{ label: "散热", value: "三组高风量风扇,全穿孔式通风面板" }, { label: "移动性", value: "重型脚轮" }, { label: "并机能力", value: "多台并机以实现容量扩展/冗余" }] },
      ],
      applications: ["数据中心设施级供电", "医疗设施关键电力", "大型工业及商业关键负载", "托管机房电力系统"],
      customizationOptions: ["功率规格", "并机配置", "电池柜集成"],
      standards: ["按IEC 62040 UPS性能标准设计", "符合EN50091-3 / IEC 61000-4的电磁/射频屏蔽", "通过CE / IEC认证", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "何时需要大功率UPS而非模块化UPS？", answer: "大功率(整机型)UPS适合从第一天起就具有稳定、明确大负载的设施。当负载预计会随时间增长时,通常更倾向选择模块化UPS,因为容量可以逐模块增加,而非以较大的固定台阶扩容。" },
        { question: "大功率UPS能防护哪些电力问题？", answer: "它可保护所连接设备免受九大常见电力质量问题的影响:断电、电压跌落、电压浪涌、雷击浪涌、谐波失真、电压瞬变、频率波动、电磁干扰及过/欠压——通过在线双转换实现切换至电池零延时。" },
      ],
    },
  },
  "network-cabinet": {
    ar: {
      name: "خزانة الشبكة",
      shortName: "خزانة الشبكة",
      tagline: "خزانة خادم أرضية بحجم 19 بوصة بدعامات معززة 2.0مم، حمل ثابت يصل إلى 2000 كجم.",
      overview: "خزانة الشبكة من واندتونغ هي غلاف أرضي بحجم 19 بوصة للمحولات ولوحات التوصيل والخوادم ومعدات الشبكات، مبنية بدعامات تركيب معززة من فولاذ SPCC مدرفل على البارد بسماكة 2.0مم، ونظام مروحة علوي، وأرفف مثقبة، وباب زجاجي مقسى قابل للقفل. تتوفر بارتفاعات 18U/22U/32U/42U وخيارات عمق 600/800/1000مم، ويدعم الإطار الداخلي المعزز حمل ثابت من 600 إلى 2000 كجم حسب التكوين.",
      keyFeatures: ["ارتفاعات 18U/22U/32U/42U متوفرة", "دعامات تركيب معززة من فولاذ SPCC مدرفل على البارد بسماكة 2.0مم، تدعم حتى 1500 كجم على الإطار", "تصنيف حمل ثابت 600–2000 كجم حسب التكوين", "نظام مروحة علوي لتفريغ الحرارة الفعال", "سكك تركيب قياسية EIA بحجم 19 بوصة مع علامات مقياس موضع U، أمامية وخلفية", "باب أمامي زجاجي مقسى قابل للقفل مع لوحات خلفية/جانبية مثقبة للتهوية", "أرفف مثقبة قابلة لتعديل الموضع", "إطار بمقطع تسعة انحناءات لصلابة إضافية", "عملية طلاء مسحوق كهروستاتيكي لتشطيب متين وموحد", "عجلات مع أقدام تسوية للتنقل والتثبيت المستقر"],
      specGroups: [
        { title: "الهيكل والأبعاد", specs: [{ label: "وحدات الراك", value: "18U / 22U / 32U / 42U" }, { label: "العرض", value: "600 مم / 800 مم" }, { label: "العمق", value: "600 / 800 / 1000 مم" }, { label: "سعة التحميل", value: "600 – 2000 كجم (ثابت، حسب التكوين)" }, { label: "دعامة التركيب", value: "فولاذ SPCC معزز 2.0مم، يدعم حتى 1500 كجم" }] },
        { title: "البناء", specs: [{ label: "المادة", value: "فولاذ مدرفل على البارد (SPCC)، إطار بمقطع تسعة انحناءات" }, { label: "سماكة الفولاذ", value: "1.2 – 2.0 مم (حسب الإطار)" }, { label: "التبريد", value: "نظام مروحة علوي، لوحات باب/جانبية مثقبة" }, { label: "تصنيف IP", value: "IP20 (داخلي)؛ يتوفر طراز خارجي IP54/IP55" }, { label: "التشطيب", value: "طلاء مسحوق كهروستاتيكي، خيارات ألوان RAL" }, { label: "التنقل", value: "عجلات مع أقدام تسوية قابلة للتعديل" }] },
      ],
      applications: ["غرف معدات الاتصالات", "خزائن الشبكة/تكنولوجيا المعلومات", "بنية تحتية داعمة لمركز البيانات"],
      customizationOptions: ["الارتفاع / العرض / العمق", "نوع الباب (مثقب، شبكي، زجاجي، صلب)", "اللوحة الجانبية (قابلة للإزالة، قابلة للقفل)", "ملحقات إدارة الكابلات", "اللون / العلامة التجارية"],
      standards: ["CE (توجيه الجهد المنخفض 2014/35/EC، EN IEC 62368-1:2020) — خزانات سلسلة K", "مُختبر وفق IEC 62368-1 / UL 60950-1 (تقرير رقم EED35R800398)", "IEC 60297 (صيغة راك 19 بوصة)"],
      faqs: [
        { question: "ما هي استخدامات خزانة الشبكة؟", answer: "خزانة الشبكة هي غلاف قياسي بحجم 19 بوصة يضم المحولات ولوحات التوصيل والموجهات ومعدات الشبكات الأخرى، ويوفر أماناً مادياً وإدارة منظمة للكابلات وتهوية متحكم بها لخزائن تكنولوجيا المعلومات وغرف المعدات." },
        { question: "ما سماكة الفولاذ التي يجب أن تستخدمها خزانة مركز البيانات؟", answer: "عادة ما تكون مكونات الإطار من فولاذ مدرفل على البارد بسماكة 1.5–2.0 مم للأعضاء الحاملة هيكلياً، مع قبول 1.0–1.2 مم للأبواب واللوحات الجانبية — تحدد واندتونغ السماكة حسب الطراز ويمكنها تعزيز الإطارات لتصنيفات حمل ثابت/ديناميكي أعلى عند الطلب." },
        { question: "ما هي سعة التحميل القصوى لخزانة الشبكة؟", answer: "حسب التكوين، تدعم دعامات التركيب المعززة 2.0مم والإطار الداخلي حملاً ثابتاً من 600 إلى 2000 كجم، مع تصنيف دعامة التركيب نفسها لدعم حتى 1500 كجم." },
      ],
    },
    fr: {
      name: "Armoire réseau",
      shortName: "Armoire réseau",
      tagline: "Armoire serveur 19 pouces au sol avec montants renforcés 2,0 mm, charge statique jusqu'à 2000 kg.",
      overview: "L'armoire réseau Wandtung est un boîtier 19 pouces au sol pour commutateurs, panneaux de brassage, serveurs et équipements réseau, construit avec des montants de montage renforcés en acier laminé à froid SPCC de 2,0 mm, un système de ventilateurs en toiture, des étagères perforées et une porte en verre trempé verrouillable. Disponible en hauteurs 18U/22U/32U/42U avec des profondeurs de 600/800/1000 mm, le cadre interne renforcé supporte une charge statique de 600 à 2000 kg selon la configuration.",
      keyFeatures: ["Hauteurs 18U / 22U / 32U / 42U disponibles", "Montants de montage renforcés en acier SPCC laminé à froid de 2,0 mm, supportant jusqu'à 1500 kg sur le cadre", "Charge statique nominale de 600 à 2000 kg selon la configuration", "Système de ventilateurs en toiture pour l'évacuation active de la chaleur", "Rails de montage standard EIA 19 pouces avec repères d'échelle de position U, avant et arrière", "Porte avant en verre trempé verrouillable avec panneaux arrière/latéraux perforés pour la circulation d'air", "Étagères perforées à position réglable", "Cadre en profilé à neuf plis pour une rigidité accrue", "Procédé de peinture en poudre électrostatique pour une finition durable et uniforme", "Roulettes avec pieds de nivellement pour la mobilité et une stabilité de mise à niveau"],
      specGroups: [
        { title: "Structure et dimensions", specs: [{ label: "Unités de rack", value: "18U / 22U / 32U / 42U" }, { label: "Largeur", value: "600 mm / 800 mm" }, { label: "Profondeur", value: "600 / 800 / 1000 mm" }, { label: "Capacité de charge", value: "600 – 2000 kg (statique, selon configuration)" }, { label: "Montant de montage", value: "Acier SPCC renforcé 2,0 mm, supporte jusqu'à 1500 kg" }] },
        { title: "Construction", specs: [{ label: "Matériau", value: "Acier laminé à froid (SPCC), cadre en profilé à neuf plis" }, { label: "Épaisseur d'acier", value: "1,2 – 2,0 mm (selon cadre)" }, { label: "Refroidissement", value: "Système de ventilateurs en toiture, panneaux porte/latéraux perforés" }, { label: "Indice IP", value: "IP20 (intérieur) ; variante extérieure IP54/IP55 disponible" }, { label: "Finition", value: "Peinture en poudre électrostatique, options de couleurs RAL" }, { label: "Mobilité", value: "Roulettes avec pieds de nivellement réglables" }] },
      ],
      applications: ["Salles d'équipements télécoms", "Locaux techniques réseau / informatique", "Infrastructure de support de centre de données"],
      customizationOptions: ["Hauteur / largeur / profondeur", "Type de porte (perforée, grillagée, vitrée, pleine)", "Panneau latéral (amovible, verrouillable)", "Accessoires de gestion de câbles", "Couleur / marquage"],
      standards: ["CE (LVD 2014/35/CE, EN IEC 62368-1:2020) — armoires série K", "Testé selon IEC 62368-1 / UL 60950-1 (rapport n° EED35R800398)", "IEC 60297 (format rack 19 pouces)"],
      faqs: [
        { question: "À quoi sert une armoire réseau ?", answer: "Une armoire réseau est un boîtier standard 19 pouces qui héberge des commutateurs, panneaux de brassage, routeurs et autres équipements réseau, offrant une sécurité physique, une gestion organisée des câbles et une circulation d'air contrôlée pour les locaux techniques et salles d'équipement." },
        { question: "Quelle épaisseur d'acier une armoire de centre de données doit-elle utiliser ?", answer: "Les composants du cadre sont généralement en acier laminé à froid de 1,5–2,0 mm pour les éléments porteurs structurels, avec 1,0–1,2 mm acceptable pour les portes et panneaux latéraux — Wandtung précise l'épaisseur selon le modèle et peut renforcer les cadres pour des charges statiques/dynamiques plus élevées sur demande." },
        { question: "Quelle est la capacité de charge maximale de l'armoire réseau ?", answer: "Selon la configuration, les montants de montage renforcés de 2,0 mm et le cadre interne supportent une charge statique de 600 à 2000 kg, le montant lui-même étant classé pour supporter jusqu'à 1500 kg." },
      ],
    },
    es: {
      name: "Armario de red",
      shortName: "Armario de red",
      tagline: "Armario de servidor de 19 pulgadas de piso con postes reforzados de 2,0 mm, carga estática de hasta 2000 kg.",
      overview: "El armario de red de Wandtung es una carcasa de piso de 19 pulgadas para switches, paneles de conexión, servidores y equipos de red, construida con postes de montaje reforzados de acero laminado en frío SPCC de 2,0 mm, un sistema de ventiladores superior, estantes perforados y una puerta de vidrio templado con cerradura. Disponible en alturas 18U/22U/32U/42U con opciones de profundidad de 600/800/1000 mm, la estructura interna reforzada soporta una carga estática de 600 a 2000 kg según la configuración.",
      keyFeatures: ["Alturas 18U / 22U / 32U / 42U disponibles", "Postes de montaje reforzados de acero SPCC laminado en frío de 2,0 mm, soportan hasta 1500 kg en la estructura", "Capacidad de carga estática de 600–2000 kg según configuración", "Sistema de ventiladores superior para extracción activa de calor", "Rieles de montaje estándar EIA de 19 pulgadas con marcas de escala de posición U, frontal y posterior", "Puerta frontal de vidrio templado con cerradura y paneles posteriores/laterales perforados para flujo de aire", "Estantes perforados de posición ajustable", "Estructura de perfil de nueve pliegues para mayor rigidez", "Proceso de recubrimiento en polvo electrostático para un acabado duradero y uniforme", "Ruedas con patas niveladoras para movilidad y estabilidad de nivelación"],
      specGroups: [
        { title: "Estructura y dimensiones", specs: [{ label: "Unidades de rack", value: "18U / 22U / 32U / 42U" }, { label: "Ancho", value: "600 mm / 800 mm" }, { label: "Profundidad", value: "600 / 800 / 1000 mm" }, { label: "Capacidad de carga", value: "600 – 2000 kg (estático, según configuración)" }, { label: "Poste de montaje", value: "Acero SPCC reforzado de 2,0 mm, soporta hasta 1500 kg" }] },
        { title: "Construcción", specs: [{ label: "Material", value: "Acero laminado en frío (SPCC), estructura de perfil de nueve pliegues" }, { label: "Espesor del acero", value: "1,2 – 2,0 mm (según estructura)" }, { label: "Refrigeración", value: "Sistema de ventiladores superior, paneles de puerta/laterales perforados" }, { label: "Clasificación IP", value: "IP20 (interior); variante exterior IP54/IP55 disponible" }, { label: "Acabado", value: "Recubrimiento en polvo electrostático, opciones de color RAL" }, { label: "Movilidad", value: "Ruedas con patas niveladoras ajustables" }] },
      ],
      applications: ["Salas de equipos de telecomunicaciones", "Armarios de red / TI", "Infraestructura de soporte de centro de datos"],
      customizationOptions: ["Altura / ancho / profundidad", "Tipo de puerta (perforada, malla, vidrio, sólida)", "Panel lateral (extraíble, con cerradura)", "Accesorios de gestión de cables", "Color / marca"],
      standards: ["CE (LVD 2014/35/CE, EN IEC 62368-1:2020) — gabinetes serie K", "Probado según IEC 62368-1 / UL 60950-1 (informe n.º EED35R800398)", "IEC 60297 (formato de rack de 19 pulgadas)"],
      faqs: [
        { question: "¿Para qué se usa un armario de red?", answer: "Un armario de red es una carcasa estándar de 19 pulgadas que alberga switches, paneles de conexión, routers y otros equipos de red, proporcionando seguridad física, gestión organizada de cables y flujo de aire controlado para armarios de TI y salas de equipos." },
        { question: "¿Qué espesor de acero debe usar un armario de centro de datos?", answer: "Los componentes de la estructura suelen ser de acero laminado en frío de 1,5–2,0 mm para los elementos portantes estructurales, siendo aceptable 1,0–1,2 mm para puertas y paneles laterales; Wandtung especifica el espesor según el modelo y puede reforzar las estructuras para clasificaciones de carga estática/dinámica más altas bajo pedido." },
        { question: "¿Cuál es la capacidad de carga máxima del armario de red?", answer: "Según la configuración, los postes de montaje reforzados de 2,0 mm y la estructura interna soportan una carga estática de 600 a 2000 kg, y el propio poste de montaje está clasificado para soportar hasta 1500 kg." },
      ],
    },
    ru: {
      name: "Сетевой шкаф",
      shortName: "Сетевой шкаф",
      tagline: "19-дюймовый напольный серверный шкаф с усиленными стойками 2,0 мм, статическая нагрузка до 2000 кг.",
      overview: "Сетевой шкаф Wandtung — это 19-дюймовый напольный корпус для коммутаторов, коммутационных панелей, серверов и сетевого оборудования, изготовленный с усиленными монтажными стойками из холоднокатаной стали SPCC толщиной 2,0 мм, верхней системой вентиляторов, перфорированными полками и запираемой дверью из закалённого стекла. Доступен в высотах 18U/22U/32U/42U с вариантами глубины 600/800/1000 мм, усиленная внутренняя рама выдерживает статическую нагрузку 600–2000 кг в зависимости от конфигурации.",
      keyFeatures: ["Доступны высоты 18U / 22U / 32U / 42U", "Усиленные монтажные стойки из холоднокатаной стали SPCC 2,0 мм, выдерживают до 1500 кг на раме", "Расчётная статическая нагрузка 600–2000 кг в зависимости от конфигурации", "Верхняя система вентиляторов для активного отвода тепла", "Монтажные рейки стандарта EIA 19 дюймов с маркировкой шкалы позиций U, спереди и сзади", "Запираемая передняя дверь из закалённого стекла с перфорированными задней/боковыми панелями для циркуляции воздуха", "Перфорированные полки с регулируемым положением", "Рама из девятигранного профиля для повышенной жёсткости", "Электростатическое порошковое напыление для прочного и равномерного покрытия", "Колёса с регулируемыми опорами для мобильности и устойчивого выравнивания"],
      specGroups: [
        { title: "Конструкция и размеры", specs: [{ label: "Юниты стойки", value: "18U / 22U / 32U / 42U" }, { label: "Ширина", value: "600 мм / 800 мм" }, { label: "Глубина", value: "600 / 800 / 1000 мм" }, { label: "Грузоподъёмность", value: "600 – 2000 кг (статическая, зависит от конфигурации)" }, { label: "Монтажная стойка", value: "Усиленная сталь SPCC 2,0 мм, выдерживает до 1500 кг" }] },
        { title: "Исполнение", specs: [{ label: "Материал", value: "Холоднокатаная сталь (SPCC), рама из девятигранного профиля" }, { label: "Толщина стали", value: "1,2 – 2,0 мм (в зависимости от рамы)" }, { label: "Охлаждение", value: "Верхняя система вентиляторов, перфорированные панели двери/боковин" }, { label: "Класс защиты IP", value: "IP20 (для помещений); доступен уличный вариант IP54/IP55" }, { label: "Покрытие", value: "Электростатическое порошковое напыление, варианты цвета RAL" }, { label: "Мобильность", value: "Колёса с регулируемыми опорами выравнивания" }] },
      ],
      applications: ["Помещения телекоммуникационного оборудования", "Сетевые/ИТ-шкафы", "Вспомогательная инфраструктура ЦОД"],
      customizationOptions: ["Высота / ширина / глубина", "Тип двери (перфорированная, сетчатая, стеклянная, глухая)", "Боковая панель (съёмная, запираемая)", "Аксессуары для управления кабелями", "Цвет / брендирование"],
      standards: ["CE (Директива по низковольтному оборудованию 2014/35/EC, EN IEC 62368-1:2020) — шкафы серии K", "Испытано по IEC 62368-1 / UL 60950-1 (отчёт № EED35R800398)", "IEC 60297 (19-дюймовый стоечный формат)"],
      faqs: [
        { question: "Для чего используется сетевой шкаф?", answer: "Сетевой шкаф — это стандартный 19-дюймовый корпус, вмещающий коммутаторы, коммутационные панели, маршрутизаторы и другое сетевое оборудование, обеспечивающий физическую безопасность, организованное управление кабелями и контролируемую циркуляцию воздуха для ИТ-шкафов и помещений с оборудованием." },
        { question: "Какой толщины сталь должна использоваться в шкафу ЦОД?", answer: "Компоненты рамы обычно изготавливаются из холоднокатаной стали толщиной 1,5–2,0 мм для несущих элементов конструкции, при этом 1,0–1,2 мм допустимо для дверей и боковых панелей — Wandtung указывает толщину в зависимости от модели и может усилить раму для более высоких статических/динамических нагрузок по запросу." },
        { question: "Какова максимальная грузоподъёмность сетевого шкафа?", answer: "В зависимости от конфигурации усиленные монтажные стойки 2,0 мм и внутренняя рама выдерживают статическую нагрузку 600–2000 кг, при этом сама монтажная стойка рассчитана на нагрузку до 1500 кг." },
      ],
    },
    zh: {
      name: "网络机柜",
      shortName: "网络机柜",
      tagline: "19英寸落地式服务器机柜，2.0mm加厚立柱，静态承重最高2000kg。",
      overview: "万电通网络机柜是一款19英寸落地式机箱，用于安装交换机、配线架、服务器及网络设备，采用2.0mm加厚SPCC冷轧钢安装立柱、顶部风扇系统、穿孔层板及可锁定钢化玻璃柜门。提供18U/22U/32U/42U高度及600/800/1000mm深度选择，加固内部框架可根据配置支持600至2000kg静态承重。",
      keyFeatures: ["提供18U/22U/32U/42U高度选择", "2.0mm加厚SPCC冷轧钢安装立柱，框架承重最高支持1500kg", "静态承重等级600–2000kg，视配置而定", "顶部风扇系统实现主动散热", "前后19英寸EIA标准安装导轨，带U位刻度标识", "可锁定前置钢化玻璃门，配穿孔后/侧板以利通风", "可调节位置的穿孔层板", "九折型材框架结构，提升整体刚性", "静电粉末喷涂工艺，涂层耐用均匀", "配脚轮及调平地脚，便于移动及稳定调平"],
      specGroups: [
        { title: "结构与尺寸", specs: [{ label: "机架单元", value: "18U / 22U / 32U / 42U" }, { label: "宽度", value: "600mm/800mm" }, { label: "深度", value: "600/800/1000mm" }, { label: "承重能力", value: "600–2000kg(静态，视配置而定)" }, { label: "安装立柱", value: "2.0mm加厚SPCC钢，支持最高1500kg" }] },
        { title: "结构材质", specs: [{ label: "材质", value: "冷轧钢板(SPCC)，九折型材框架" }, { label: "钢板厚度", value: "1.2–2.0mm(视框架而定)" }, { label: "散热方式", value: "顶部风扇系统，柜门/侧板穿孔设计" }, { label: "防护等级", value: "IP20(室内);室外型号可达IP54/IP55" }, { label: "表面处理", value: "静电粉末喷涂,可选RAL颜色" }, { label: "移动方式", value: "脚轮配可调调平地脚" }] },
      ],
      applications: ["电信设备间", "网络/IT机房", "数据中心配套基础设施"],
      customizationOptions: ["高度/宽度/深度", "柜门类型(穿孔、网孔、玻璃、实心)", "侧板(可拆卸、可锁)", "线缆管理配件", "颜色/品牌定制"],
      standards: ["CE(低电压指令2014/35/EC、EN IEC 62368-1:2020)——K系列机柜", "依据IEC 62368-1 / UL 60950-1测试(报告编号EED35R800398)", "IEC 60297(19英寸机架格式)"],
      faqs: [
        { question: "网络机柜有什么用途？", answer: "网络机柜是一种标准19英寸机箱,用于容纳交换机、配线架、路由器及其他网络设备,为IT机房和设备间提供物理安全防护、有序的线缆管理及可控通风。" },
        { question: "数据中心机柜应使用多厚的钢板？", answer: "承重结构件通常采用1.5–2.0mm冷轧钢板,柜门及侧板可采用1.0–1.2mm——万电通会根据型号规定厚度,并可根据需求加固框架以满足更高的静/动态承重要求。" },
        { question: "网络机柜的最大承重能力是多少？", answer: "根据配置不同，2.0mm加厚安装立柱及内部框架可支持600至2000kg静态承重，其中安装立柱本身承重等级最高可达1500kg。" },
      ],
    },
  },
  "data-center-cabinet": {
    ar: {
      name: "خزانة مركز البيانات",
      shortName: "خزانة DC",
      tagline: "خزانة خوادم بسعة تحميل عالية لنشر المساحة البيضاء لمركز البيانات.",
      overview: "خزانة مركز البيانات من واندتونغ مصممة خصيصاً لنشر قاعات البيانات، وتدعم تصنيفات حمل ثابت وديناميكي عالية، وتوافق احتواء الممر الساخن/البارد، وإدارة متكاملة للكابلات وPDU لعمليات نشر كثيفة للخوادم والتخزين.",
      keyFeatures: ["تصنيف حمل ثابت عالٍ لأكوام الخوادم/التخزين الكثيفة", "متوافقة مع احتواء الممر الساخن / البارد", "قنوات تركيب PDU رأسية 0U أمامياً وخلفياً", "إطار مؤرض ومربوط للسلامة الكهربائية", "لوحة عمياء وشرائط فرشاة لإحكام تدفق الهواء"],
      specGroups: [
        { title: "الهيكل والأبعاد", specs: [{ label: "وحدات الراك", value: "42U / 45U / 47U" }, { label: "العرض", value: "600 مم / 800 مم" }, { label: "العمق", value: "1000 / 1100 / 1200 مم" }, { label: "سعة التحميل", value: "حتى 1200 كجم ثابت" }] },
        { title: "البناء", specs: [{ label: "المادة", value: "فولاذ مدرفل على البارد" }, { label: "تصنيف IP", value: "IP20" }, { label: "الاحتواء", value: "متوافق مع أنظمة احتواء الممر الساخن/البارد" }] },
      ],
      applications: ["قاعات بيانات الاستضافة الفائقة والمشتركة", "غرف خوادم المؤسسات", "عمليات نشر تخزين عالية الكثافة"],
      customizationOptions: ["تصنيف الحمل", "واجهة احتواء الممر", "تكوين قناة PDU"],
      standards: ["مصمم وفق معيار IEC 60297 (راك 19 بوصة)", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما سعة التحميل التي تحتاجها خزانة مركز البيانات؟", answer: "يجب أن تتجاوز سعة التحميل الوزن الكامل للخوادم والتخزين والكابلات ووحدات PDU مع هامش أمان — تُصنَّف خزانات مركز البيانات من واندتونغ حتى 1200 كجم حمل ثابت لدعم عمليات نشر الحوسبة والتخزين الكثيفة." },
      ],
    },
    fr: {
      name: "Armoire de centre de données",
      shortName: "Armoire DC",
      tagline: "Armoire serveur à haute capacité de charge pour déploiement en espace blanc de centre de données.",
      overview: "L'armoire de centre de données Wandtung est conçue spécifiquement pour le déploiement en salle informatique, supportant des charges statiques et dynamiques élevées, une compatibilité avec le confinement d'allée chaude/froide, et une gestion intégrée des câbles et PDU pour des déploiements denses de serveurs et de stockage.",
      keyFeatures: ["Charge statique élevée pour piles serveur/stockage denses", "Compatible confinement d'allée chaude / froide", "Canaux de montage PDU vertical 0U avant et arrière", "Cadre mis à la terre et lié pour la sécurité électrique", "Panneau obturateur et brosses d'étanchéité pour le flux d'air"],
      specGroups: [
        { title: "Structure et dimensions", specs: [{ label: "Unités de rack", value: "42U / 45U / 47U" }, { label: "Largeur", value: "600 mm / 800 mm" }, { label: "Profondeur", value: "1000 / 1100 / 1200 mm" }, { label: "Capacité de charge", value: "Jusqu'à 1200 kg statique" }] },
        { title: "Construction", specs: [{ label: "Matériau", value: "Acier laminé à froid" }, { label: "Indice IP", value: "IP20" }, { label: "Confinement", value: "Compatible avec les systèmes de confinement d'allée chaude/froide" }] },
      ],
      applications: ["Salles informatiques hyperscale et colocation", "Salles serveurs d'entreprise", "Déploiements de stockage haute densité"],
      customizationOptions: ["Classe de charge", "Interface de confinement d'allée", "Configuration des canaux PDU"],
      standards: ["Conçu selon la norme IEC 60297 (rack 19 pouces)", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quelle capacité de charge une armoire de centre de données nécessite-t-elle ?", answer: "La capacité de charge doit dépasser le poids total des serveurs, du stockage, du câblage et des PDU avec une marge — les armoires de centre de données Wandtung sont classées jusqu'à 1200 kg de charge statique pour supporter des déploiements denses de calcul et de stockage." },
      ],
    },
    es: {
      name: "Armario de centro de datos",
      shortName: "Armario DC",
      tagline: "Armario de servidores de alta capacidad de carga para despliegue en el espacio blanco del centro de datos.",
      overview: "El armario de centro de datos de Wandtung está diseñado específicamente para el despliegue en salas de datos, con altas clasificaciones de carga estática y dinámica, compatibilidad con contención de pasillo caliente/frío y gestión integrada de cables y PDU para despliegues densos de servidores y almacenamiento.",
      keyFeatures: ["Alta clasificación de carga estática para pilas densas de servidores/almacenamiento", "Compatible con contención de pasillo caliente / frío", "Canales de montaje de PDU vertical 0U frontal y posterior", "Estructura puesta a tierra y enlazada para seguridad eléctrica", "Panel ciego y cepillos para sellado del flujo de aire"],
      specGroups: [
        { title: "Estructura y dimensiones", specs: [{ label: "Unidades de rack", value: "42U / 45U / 47U" }, { label: "Ancho", value: "600 mm / 800 mm" }, { label: "Profundidad", value: "1000 / 1100 / 1200 mm" }, { label: "Capacidad de carga", value: "Hasta 1200 kg estático" }] },
        { title: "Construcción", specs: [{ label: "Material", value: "Acero laminado en frío" }, { label: "Clasificación IP", value: "IP20" }, { label: "Contención", value: "Compatible con sistemas de contención de pasillo caliente/frío" }] },
      ],
      applications: ["Salas de datos hyperscale y colocation", "Salas de servidores empresariales", "Despliegues de almacenamiento de alta densidad"],
      customizationOptions: ["Clasificación de carga", "Interfaz de contención de pasillo", "Configuración de canal PDU"],
      standards: ["Diseñado según la norma IEC 60297 (rack de 19 pulgadas)", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué capacidad de carga necesita un armario de centro de datos?", answer: "La capacidad de carga debe superar el peso total de servidores, almacenamiento, cableado y PDU con margen; los armarios de centro de datos de Wandtung están clasificados hasta 1200 kg de carga estática para soportar despliegues densos de cómputo y almacenamiento." },
      ],
    },
    ru: {
      name: "Шкаф для центра обработки данных",
      shortName: "Шкаф ЦОД",
      tagline: "Серверный шкаф высокой грузоподъёмности для развёртывания в машинном зале ЦОД.",
      overview: "Шкаф ЦОД Wandtung специально разработан для развёртывания в машинных залах, поддерживает высокие статические и динамические нагрузки, совместим с системами изоляции горячего/холодного коридора и обеспечивает интегрированное управление кабелями и PDU для плотных развёртываний серверов и систем хранения.",
      keyFeatures: ["Высокая статическая нагрузка для плотных стоек серверов/хранения", "Совместим с изоляцией горячего/холодного коридора", "Вертикальные каналы монтажа PDU 0U спереди и сзади", "Заземлённая, соединённая рама для электробезопасности", "Заглушки и щёточные уплотнители для герметизации воздушного потока"],
      specGroups: [
        { title: "Конструкция и размеры", specs: [{ label: "Юниты стойки", value: "42U / 45U / 47U" }, { label: "Ширина", value: "600 мм / 800 мм" }, { label: "Глубина", value: "1000 / 1100 / 1200 мм" }, { label: "Грузоподъёмность", value: "До 1200 кг статическая" }] },
        { title: "Исполнение", specs: [{ label: "Материал", value: "Холоднокатаная сталь" }, { label: "Класс защиты IP", value: "IP20" }, { label: "Изоляция", value: "Совместим со стандартными системами изоляции коридоров" }] },
      ],
      applications: ["Машинные залы гипермасштабируемых и колокейшн ЦОД", "Корпоративные серверные", "Развёртывания хранения высокой плотности"],
      customizationOptions: ["Класс нагрузки", "Интерфейс изоляции коридора", "Конфигурация каналов PDU"],
      standards: ["Разработан в соответствии со стандартом IEC 60297 (19-дюймовая стойка)", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Какая грузоподъёмность нужна шкафу ЦОД?", answer: "Грузоподъёмность должна превышать полный вес серверов, систем хранения, кабелей и PDU с запасом — шкафы ЦОД Wandtung рассчитаны на статическую нагрузку до 1200 кг для поддержки плотных развёртываний вычислительных и хранения ресурсов." },
      ],
    },
    zh: {
      name: "数据中心机柜",
      shortName: "数据中心机柜",
      tagline: "面向数据中心白空间部署的高承重服务器机柜。",
      overview: "万电通数据中心机柜专为机房部署打造,支持高静态与动态承重,兼容冷/热通道封闭系统,并提供集成线缆及PDU管理,适用于高密度服务器与存储部署。",
      keyFeatures: ["高静态承重,适应密集服务器/存储堆叠", "兼容冷通道/热通道封闭系统", "前后垂直0U PDU安装通道", "接地并等电位连接的框架,确保电气安全", "盲板及毛刷条实现气流密封"],
      specGroups: [
        { title: "结构与尺寸", specs: [{ label: "机架单元", value: "42U/45U/47U" }, { label: "宽度", value: "600mm/800mm" }, { label: "深度", value: "1000/1100/1200mm" }, { label: "承重能力", value: "最高1200kg(静态)" }] },
        { title: "结构材质", specs: [{ label: "材质", value: "冷轧钢板" }, { label: "防护等级", value: "IP20" }, { label: "封闭兼容性", value: "兼容标准冷热通道封闭系统" }] },
      ],
      applications: ["超大规模及托管数据中心机房", "企业服务器机房", "高密度存储部署"],
      customizationOptions: ["承重等级", "通道封闭接口", "PDU通道配置"],
      standards: ["按IEC 60297(19英寸机架)标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "数据中心机柜需要多大的承重能力？", answer: "承重能力应超过服务器、存储、线缆及PDU满载重量并留有余量——万电通数据中心机柜静态承重最高可达1200kg,可支持高密度计算与存储部署。" },
      ],
    },
  },
  "server-rack": {
    ar: {
      name: "راك خوادم",
      shortName: "راك خوادم",
      tagline: "راك خوادم بحجم 19 بوصة مبني لتحمل أوزان الخوادم والتخزين وتدفق الهواء.",
      overview: "راك الخوادم من واندتونغ هو غلاف بحجم 19 بوصة بأبعاد ودعامات مصممة لمعدات الخوادم والتخزين بدلاً من معدات الشبكات الأخف وزناً — خلوص هيكل أعمق، وتصنيف حمل ثابت أقوى، وأبواب محسّنة لتدفق الهواء لعمليات نشر كثيفة الحوسبة.",
      keyFeatures: ["تركيب قياسي EIA بحجم 19 بوصة، أمامي وخلفي", "خلوص هيكل عميق لأجهزة الخوادم/التخزين", "تصنيف حمل ثابت عالٍ", "أبواب مثقبة لتدفق هواء من الأمام للخلف"],
      specGroups: [
        { title: "الهيكل والأبعاد", specs: [{ label: "وحدات الراك", value: "24U – 47U" }, { label: "العمق", value: "900 – 1200 مم" }, { label: "سعة التحميل", value: "حتى 1000 كجم (ثابت)" }] },
        { title: "البناء", specs: [{ label: "المادة", value: "فولاذ مدرفل على البارد" }, { label: "الباب", value: "مثقب (≥65% مساحة مفتوحة) قياسي" }] },
      ],
      applications: ["غرف الخوادم", "عمليات نشر التخزين", "خزائن تكنولوجيا المعلومات للمؤسسات"],
      customizationOptions: ["الارتفاع / العمق", "تصنيف الحمل", "خيارات الباب واللوحة الجانبية"],
      standards: ["مصمم وفق معيار IEC 60297 (راك 19 بوصة)", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما الفرق بين راك الخوادم وخزانة الشبكة؟", answer: "يتبع كلاهما نفس معيار 19 بوصة، لكن راك الخوادم عادة ما يكون أعمق ومُصنَّفاً لأحمال ثابتة أثقل لدعم هياكل الخوادم والتخزين، بينما تُحسَّن خزانة الشبكة لمعدات التحويل/التوصيل الأخف وكثافة إدارة الكابلات." },
      ],
    },
    fr: {
      name: "Rack serveur",
      shortName: "Rack serveur",
      tagline: "Rack serveur 19 pouces conçu pour les charges de poids des serveurs et du stockage ainsi que la circulation d'air.",
      overview: "Le rack serveur Wandtung est un boîtier 19 pouces dimensionné et renforcé pour les équipements de serveurs et de stockage plutôt que pour les équipements réseau plus légers — dégagement de châssis plus profond, capacité de charge statique plus forte et portes optimisées pour la circulation d'air pour les déploiements à forte densité de calcul.",
      keyFeatures: ["Montage standard EIA 19 pouces, avant et arrière", "Dégagement de châssis profond pour matériel serveur/stockage", "Capacité de charge statique élevée", "Portes perforées pour circulation d'air avant-arrière"],
      specGroups: [
        { title: "Structure et dimensions", specs: [{ label: "Unités de rack", value: "24U – 47U" }, { label: "Profondeur", value: "900 – 1200 mm" }, { label: "Capacité de charge", value: "Jusqu'à 1000 kg (statique)" }] },
        { title: "Construction", specs: [{ label: "Matériau", value: "Acier laminé à froid" }, { label: "Porte", value: "Perforée (≥65% de surface ouverte) standard" }] },
      ],
      applications: ["Salles serveurs", "Déploiements de stockage", "Locaux techniques informatiques d'entreprise"],
      customizationOptions: ["Hauteur / profondeur", "Classe de charge", "Options de porte et panneau latéral"],
      standards: ["Conçu selon la norme IEC 60297 (rack 19 pouces)", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quelle est la différence entre un rack serveur et une armoire réseau ?", answer: "Les deux suivent la même norme 19 pouces, mais un rack serveur est généralement plus profond et classé pour des charges statiques plus lourdes afin de supporter les châssis serveurs et de stockage, tandis qu'une armoire réseau est optimisée pour des équipements de commutation/brassage plus légers et une densité de gestion de câbles." },
      ],
    },
    es: {
      name: "Rack de servidores",
      shortName: "Rack de servidores",
      tagline: "Rack de servidores de 19 pulgadas construido para soportar el peso de servidores y almacenamiento, y el flujo de aire.",
      overview: "El rack de servidores de Wandtung es una carcasa de 19 pulgadas dimensionada y reforzada para equipos de servidores y almacenamiento en lugar de equipos de red más ligeros: mayor espacio de chasis, clasificación de carga estática más alta y puertas optimizadas para el flujo de aire en despliegues de alta densidad de cómputo.",
      keyFeatures: ["Montaje estándar EIA de 19 pulgadas, frontal y posterior", "Espacio de chasis profundo para hardware de servidores/almacenamiento", "Alta clasificación de carga estática", "Puertas perforadas para flujo de aire de frente a atrás"],
      specGroups: [
        { title: "Estructura y dimensiones", specs: [{ label: "Unidades de rack", value: "24U – 47U" }, { label: "Profundidad", value: "900 – 1200 mm" }, { label: "Capacidad de carga", value: "Hasta 1000 kg (estático)" }] },
        { title: "Construcción", specs: [{ label: "Material", value: "Acero laminado en frío" }, { label: "Puerta", value: "Perforada (≥65% de área abierta) estándar" }] },
      ],
      applications: ["Salas de servidores", "Despliegues de almacenamiento", "Armarios de TI empresariales"],
      customizationOptions: ["Altura / profundidad", "Clasificación de carga", "Opciones de puerta y panel lateral"],
      standards: ["Diseñado según la norma IEC 60297 (rack de 19 pulgadas)", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuál es la diferencia entre un rack de servidores y un armario de red?", answer: "Ambos siguen el mismo estándar de 19 pulgadas, pero un rack de servidores suele ser más profundo y estar clasificado para cargas estáticas más pesadas para soportar chasis de servidores y almacenamiento, mientras que un armario de red está optimizado para equipos de conmutación/conexión más ligeros y mayor densidad de gestión de cables." },
      ],
    },
    ru: {
      name: "Серверная стойка",
      shortName: "Серверная стойка",
      tagline: "19-дюймовая серверная стойка, рассчитанная на вес серверов и систем хранения и на циркуляцию воздуха.",
      overview: "Серверная стойка Wandtung — это 19-дюймовый корпус, рассчитанный и усиленный для серверного и накопительного оборудования, а не для более лёгкого сетевого оборудования — увеличенный зазор шасси, более высокая статическая грузоподъёмность и двери, оптимизированные для воздушного потока в развёртываниях с высокой плотностью вычислений.",
      keyFeatures: ["Стандартный монтаж EIA 19 дюймов спереди и сзади", "Увеличенный зазор шасси для серверного/накопительного оборудования", "Высокая статическая грузоподъёмность", "Перфорированные двери для сквозного воздушного потока"],
      specGroups: [
        { title: "Конструкция и размеры", specs: [{ label: "Юниты стойки", value: "24U – 47U" }, { label: "Глубина", value: "900 – 1200 мм" }, { label: "Грузоподъёмность", value: "До 1000 кг (статическая)" }] },
        { title: "Исполнение", specs: [{ label: "Материал", value: "Холоднокатаная сталь" }, { label: "Дверь", value: "Перфорированная (≥65% открытой площади), стандартно" }] },
      ],
      applications: ["Серверные помещения", "Развёртывания систем хранения", "Корпоративные ИТ-шкафы"],
      customizationOptions: ["Высота / глубина", "Класс нагрузки", "Варианты двери и боковой панели"],
      standards: ["Разработан в соответствии со стандартом IEC 60297 (19-дюймовая стойка)", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "В чём разница между серверной стойкой и сетевым шкафом?", answer: "Оба соответствуют одному 19-дюймовому стандарту, но серверная стойка обычно глубже и рассчитана на более высокие статические нагрузки для поддержки серверных и накопительных шасси, тогда как сетевой шкаф оптимизирован для более лёгкого коммутационного оборудования и высокой плотности управления кабелями." },
      ],
    },
    zh: {
      name: "服务器机架",
      shortName: "服务器机架",
      tagline: "为服务器与存储承重及气流设计的19英寸服务器机架。",
      overview: "万电通服务器机架是一款19英寸机箱,其尺寸与结构强度专为服务器及存储设备设计,而非较轻的网络设备——具备更深的机箱净空、更强的静态承重能力,以及针对高密度计算部署优化的通风柜门。",
      keyFeatures: ["前后19英寸EIA标准安装", "深机箱净空,适配服务器/存储硬件", "高静态承重能力", "标配穿孔柜门实现前后通风"],
      specGroups: [
        { title: "结构与尺寸", specs: [{ label: "机架单元", value: "24U–47U" }, { label: "深度", value: "900–1200mm" }, { label: "承重能力", value: "最高1000kg(静态)" }] },
        { title: "结构材质", specs: [{ label: "材质", value: "冷轧钢板" }, { label: "柜门", value: "标配穿孔柜门(开孔率≥65%)" }] },
      ],
      applications: ["服务器机房", "存储部署", "企业IT机房"],
      customizationOptions: ["高度/深度", "承重等级", "柜门及侧板选项"],
      standards: ["按IEC 60297(19英寸机架)标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "服务器机架与网络机柜有何区别？", answer: "两者均遵循相同的19英寸标准,但服务器机架通常更深,并具备更高的静态承重等级以支持服务器及存储机箱;而网络机柜则针对较轻的交换/配线设备及高密度线缆管理进行了优化。" },
      ],
    },
  },
  "19-inch-rack": {
    ar: {
      name: "راك 19 بوصة",
      shortName: "راك 19 بوصة",
      tagline: "غلاف راك قياسي EIA بحجم 19 بوصة لتركيب معدات تكنولوجيا المعلومات والشبكات العامة.",
      overview: "راك 19 بوصة من واندتونغ هو غلاف متوافق مع معيار EIA-310 القياسي، بحجم مناسب لتركيب معدات تكنولوجيا المعلومات والشبكات والاتصالات العامة حيث لا تكون هناك حاجة لمواصفات راك خوادم أو خزانة شبكة كاملة — تكوين أساسي مرن لعمليات النشر الأصغر.",
      keyFeatures: ["سكك تركيب قياسية EIA-310 بحجم 19 بوصة", "خيارات إطار مفتوح وخزانة مغلقة", "ارتفاع وحدة راك قابل للتكوين", "متوافق مع ملحقات التركيب القياسية بالراك"],
      specGroups: [{ title: "الهيكل والأبعاد", specs: [{ label: "وحدات الراك", value: "9U – 42U" }, { label: "العرض", value: "600 مم" }, { label: "العمق", value: "600 – 1000 مم" }] }],
      applications: ["تركيب معدات تكنولوجيا المعلومات العامة", "غرف معدات الاتصالات", "بيئات المختبرات والاختبار"],
      customizationOptions: ["إطار مفتوح مقابل خزانة مغلقة", "الارتفاع / العمق", "سكك الملحقات"],
      standards: ["مصمم وفق معيار IEC 60297 / EIA-310 (19 بوصة)", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ماذا يعني مصطلح 'راك 19 بوصة' فعلياً؟", answer: "يشير إلى عرض فتحة سكة التركيب القياسية بحجم 19 بوصة وفق معيار EIA-310، الشائع عبر راكات الخوادم وخزائن الشبكة ومعظم معدات تكنولوجيا المعلومات القابلة للتركيب بالراك — يصف المصطلح معيار التركيب وليس تصميم غلاف محدد واحد." },
      ],
    },
    fr: {
      name: "Rack 19 pouces",
      shortName: "Rack 19 pouces",
      tagline: "Boîtier rack standard EIA 19 pouces pour le montage général d'équipements informatiques et réseau.",
      overview: "Le rack 19 pouces Wandtung est un boîtier conforme à la norme EIA-310, dimensionné pour le montage général d'équipements informatiques, réseau et télécoms lorsqu'une spécification complète de rack serveur ou d'armoire réseau n'est pas nécessaire — une configuration de base flexible pour les déploiements plus petits.",
      keyFeatures: ["Rails de montage standard EIA-310 19 pouces", "Options de cadre ouvert et d'armoire fermée", "Hauteur d'unité de rack configurable", "Compatible avec les accessoires de montage en rack standard"],
      specGroups: [{ title: "Structure et dimensions", specs: [{ label: "Unités de rack", value: "9U – 42U" }, { label: "Largeur", value: "600 mm" }, { label: "Profondeur", value: "600 – 1000 mm" }] }],
      applications: ["Montage général d'équipements informatiques", "Salles d'équipements télécoms", "Environnements de laboratoire et de test"],
      customizationOptions: ["Cadre ouvert vs. fermé", "Hauteur / profondeur", "Rails d'accessoires"],
      standards: ["Conçu selon la norme IEC 60297 / EIA-310 (19 pouces)", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Que signifie réellement « rack 19 pouces » ?", answer: "Cela fait référence à la largeur standard EIA-310 de 19 pouces de l'ouverture du rail de montage, commune aux racks serveurs, armoires réseau et la plupart des équipements informatiques montables en rack — le terme décrit la norme de montage plutôt qu'une conception de boîtier spécifique." },
      ],
    },
    es: {
      name: "Rack de 19 pulgadas",
      shortName: "Rack de 19 pulgadas",
      tagline: "Carcasa de rack estándar EIA de 19 pulgadas para montaje general de equipos de TI y red.",
      overview: "El rack de 19 pulgadas de Wandtung es una carcasa conforme a la norma EIA-310, dimensionada para el montaje general de equipos de TI, red y telecomunicaciones cuando no se requiere una especificación completa de rack de servidores o armario de red: una configuración base flexible para despliegues más pequeños.",
      keyFeatures: ["Rieles de montaje estándar EIA-310 de 19 pulgadas", "Opciones de estructura abierta y armario cerrado", "Altura de unidad de rack configurable", "Compatible con accesorios de montaje en rack estándar"],
      specGroups: [{ title: "Estructura y dimensiones", specs: [{ label: "Unidades de rack", value: "9U – 42U" }, { label: "Ancho", value: "600 mm" }, { label: "Profundidad", value: "600 – 1000 mm" }] }],
      applications: ["Montaje general de equipos de TI", "Salas de equipos de telecomunicaciones", "Entornos de laboratorio y pruebas"],
      customizationOptions: ["Estructura abierta vs. cerrada", "Altura / profundidad", "Rieles de accesorios"],
      standards: ["Diseñado según la norma IEC 60297 / EIA-310 (19 pulgadas)", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿A qué se refiere realmente el término 'rack de 19 pulgadas'?", answer: "Se refiere al ancho estándar EIA-310 de 19 pulgadas de la abertura del riel de montaje, común en racks de servidores, armarios de red y la mayoría de los equipos de TI montables en rack; el término describe el estándar de montaje en lugar de un diseño de carcasa específico." },
      ],
    },
    ru: {
      name: "19-дюймовая стойка",
      shortName: "19-дюймовая стойка",
      tagline: "Стандартный 19-дюймовый стоечный корпус EIA для общего монтажа ИТ- и сетевого оборудования.",
      overview: "19-дюймовая стойка Wandtung — это корпус, соответствующий стандарту EIA-310, рассчитанный на общий монтаж ИТ-, сетевого и телекоммуникационного оборудования, когда не требуется полная спецификация серверной стойки или сетевого шкафа — гибкая базовая конфигурация для небольших развёртываний.",
      keyFeatures: ["Стандартные монтажные рейки EIA-310 19 дюймов", "Варианты открытой рамы и закрытого шкафа", "Настраиваемая высота юнитов стойки", "Совместима со стандартными стоечными аксессуарами"],
      specGroups: [{ title: "Конструкция и размеры", specs: [{ label: "Юниты стойки", value: "9U – 42U" }, { label: "Ширина", value: "600 мм" }, { label: "Глубина", value: "600 – 1000 мм" }] }],
      applications: ["Общий монтаж ИТ-оборудования", "Помещения телекоммуникационного оборудования", "Лабораторные и тестовые среды"],
      customizationOptions: ["Открытая рама или закрытый корпус", "Высота / глубина", "Рейки для аксессуаров"],
      standards: ["Разработан в соответствии со стандартом IEC 60297 / EIA-310 (19 дюймов)", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что на самом деле означает «19-дюймовая стойка»?", answer: "Это относится к стандартной 19-дюймовой ширине проёма монтажной рейки EIA-310, общей для серверных стоек, сетевых шкафов и большинства монтируемого в стойку ИТ-оборудования — термин описывает стандарт монтажа, а не конкретную конструкцию корпуса." },
      ],
    },
    zh: {
      name: "19英寸机架",
      shortName: "19英寸机架",
      tagline: "符合EIA标准的19英寸机架,适用于通用IT与网络设备安装。",
      overview: "万电通19英寸机架符合EIA-310标准,适用于不需要完整服务器机架或网络机柜规格的通用IT、网络及电信设备安装场景——为较小规模部署提供灵活的基础配置。",
      keyFeatures: ["EIA-310标准19英寸安装导轨", "可选开放式框架或封闭式机柜", "可配置机架单元高度", "兼容标准机架安装配件"],
      specGroups: [{ title: "结构与尺寸", specs: [{ label: "机架单元", value: "9U–42U" }, { label: "宽度", value: "600mm" }, { label: "深度", value: "600–1000mm" }] }],
      applications: ["通用IT设备安装", "电信设备间", "实验室及测试环境"],
      customizationOptions: ["开放式框架或封闭式机柜", "高度/深度", "配件导轨"],
      standards: ["按IEC 60297 / EIA-310(19英寸)标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "“19英寸机架”具体指什么？", answer: "该术语指EIA-310标准规定的19英寸安装导轨开口宽度,广泛适用于服务器机架、网络机柜及大多数可机架安装的IT设备——它描述的是一种安装标准,而非特定的机箱设计。" },
      ],
    },
  },
  "cold-aisle-cabinet": {
    ar: {
      name: "خزانة الممر البارد",
      shortName: "خزانة الممر البارد",
      tagline: "خزانة مصممة لفصل تدفق الهواء في احتواء الممر البارد.",
      overview: "خزانة الممر البارد من واندتونغ مصممة للنشر ضمن تخطيط احتواء الممر البارد، بواجهات لوحات محكمة وحشوات أبواب تحافظ على فصل هواء التزويد في جانب الممر البارد عن هواء العادم الساخن، ما يحسّن كفاءة التبريد عبر الصف.",
      keyFeatures: ["واجهات لوحات وأبواب محكمة لسلامة الاحتواء", "متوافقة مع أنظمة سقف/باب الاحتواء القياسية", "مدخل كابل بشرائط فرشاة للحد من تجاوز الهواء", "طقم لوحة عمياء مُضمّن لمساحة الراك غير المستخدمة"],
      specGroups: [{ title: "الهيكل والأبعاد", specs: [{ label: "وحدات الراك", value: "42U / 45U / 47U" }, { label: "العرض", value: "600 مم / 800 مم" }, { label: "واجهة الاحتواء", value: "متوافقة مع أنظمة احتواء الممر القياسية" }] }],
      applications: ["قاعات بيانات باحتواء ممر ساخن/بارد", "صفوف استضافة مشتركة عالية الكثافة", "تحديثات تحسين PUE"],
      customizationOptions: ["نوع واجهة الاحتواء", "العرض", "طقم اللوحة العمياء"],
      standards: ["مصمم وفق معيار IEC 60297 (راك 19 بوصة)", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل أحتاج إلى خزانات خاصة لاحتواء الممر البارد، أم فقط سقف/أبواب احتواء؟", answer: "لا يعمل الاحتواء بفعالية إلا إذا كان صف الخزانات نفسه محكم الإغلاق — الفجوات حول الأبواب واللوحات الجانبية ومداخل الكابلات تسمح للهواء بتجاوز الاحتواء. خزانات الممر البارد مبنية مع مراعاة هذا الإحكام، بالإضافة إلى نظام سقف/باب الاحتواء الممتد عبر الممر." },
      ],
    },
    fr: {
      name: "Armoire d'allée froide",
      shortName: "Armoire d'allée froide",
      tagline: "Armoire conçue pour la séparation du flux d'air en confinement d'allée froide.",
      overview: "L'armoire d'allée froide Wandtung est conçue pour être déployée dans une configuration de confinement d'allée froide, avec des interfaces de panneaux scellées et des joints de porte qui séparent l'air d'alimentation du côté allée froide de l'air d'échappement chaud, améliorant l'efficacité de refroidissement dans toute la rangée.",
      keyFeatures: ["Interfaces de panneaux et de portes scellées pour l'intégrité du confinement", "Compatible avec les systèmes de toit/porte de confinement standard", "Entrée de câble à brosse pour limiter le contournement d'air", "Kit de panneaux obturateurs inclus pour l'espace de rack inutilisé"],
      specGroups: [{ title: "Structure et dimensions", specs: [{ label: "Unités de rack", value: "42U / 45U / 47U" }, { label: "Largeur", value: "600 mm / 800 mm" }, { label: "Interface de confinement", value: "Compatible avec les systèmes de confinement d'allée standard" }] }],
      applications: ["Salles de données avec confinement d'allée chaude/froide", "Rangées de colocation haute densité", "Rénovations d'optimisation du PUE"],
      customizationOptions: ["Type d'interface de confinement", "Largeur", "Kit de panneaux obturateurs"],
      standards: ["Conçu selon la norme IEC 60297 (rack 19 pouces)", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Ai-je besoin d'armoires spéciales pour le confinement d'allée froide, ou juste d'un toit/de portes de confinement ?", answer: "Le confinement ne fonctionne que si la rangée d'armoires elle-même est bien scellée — les espaces autour des portes, panneaux latéraux et entrées de câbles laissent l'air contourner le confinement. Les armoires d'allée froide sont conçues avec cette étanchéité à l'esprit, en plus du système de confinement toit/porte couvrant l'allée." },
      ],
    },
    es: {
      name: "Armario de pasillo frío",
      shortName: "Armario de pasillo frío",
      tagline: "Armario diseñado para la separación del flujo de aire en contención de pasillo frío.",
      overview: "El armario de pasillo frío de Wandtung está diseñado para su despliegue dentro de un diseño de contención de pasillo frío, con interfaces de panel selladas y juntas de puerta que mantienen separado el aire de suministro del lado del pasillo frío del aire de escape caliente, mejorando la eficiencia de enfriamiento en toda la fila.",
      keyFeatures: ["Interfaces de panel y puerta selladas para la integridad de la contención", "Compatible con sistemas estándar de techo/puerta de contención", "Entrada de cables con cepillo para limitar la fuga de aire", "Kit de paneles ciegos incluido para el espacio de rack no utilizado"],
      specGroups: [{ title: "Estructura y dimensiones", specs: [{ label: "Unidades de rack", value: "42U / 45U / 47U" }, { label: "Ancho", value: "600 mm / 800 mm" }, { label: "Interfaz de contención", value: "Compatible con sistemas estándar de contención de pasillo" }] }],
      applications: ["Salas de datos con contención de pasillo caliente/frío", "Filas de colocation de alta densidad", "Renovaciones de optimización de PUE"],
      customizationOptions: ["Tipo de interfaz de contención", "Ancho", "Kit de paneles ciegos"],
      standards: ["Diseñado según la norma IEC 60297 (rack de 19 pulgadas)", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Necesito armarios especiales para la contención de pasillo frío, o solo un techo/puertas de contención?", answer: "La contención solo funciona si la fila de armarios en sí está bien sellada: los huecos alrededor de puertas, paneles laterales y entradas de cables permiten que el aire eluda la contención. Los armarios de pasillo frío están construidos teniendo en cuenta este sellado, además del sistema de contención de techo/puerta que abarca el pasillo." },
      ],
    },
    ru: {
      name: "Шкаф холодного коридора",
      shortName: "Шкаф холодного коридора",
      tagline: "Шкаф, разработанный для разделения воздушных потоков в системе изоляции холодного коридора.",
      overview: "Шкаф холодного коридора Wandtung предназначен для развёртывания в схеме изоляции холодного коридора, с герметичными стыками панелей и уплотнителями дверей, которые удерживают приточный воздух со стороны холодного коридора отдельно от горячего вытяжного воздуха, повышая эффективность охлаждения по всему ряду.",
      keyFeatures: ["Герметичные стыки панелей и дверей для целостности изоляции", "Совместим со стандартными системами потолка/двери изоляции", "Кабельный ввод со щёточным уплотнителем для ограничения обхода воздуха", "В комплекте набор заглушек для неиспользуемого пространства стойки"],
      specGroups: [{ title: "Конструкция и размеры", specs: [{ label: "Юниты стойки", value: "42U / 45U / 47U" }, { label: "Ширина", value: "600 мм / 800 мм" }, { label: "Интерфейс изоляции", value: "Совместим со стандартными системами изоляции коридора" }] }],
      applications: ["Машинные залы с изоляцией горячего/холодного коридора", "Ряды колокейшн высокой плотности", "Модернизация для оптимизации PUE"],
      customizationOptions: ["Тип интерфейса изоляции", "Ширина", "Набор заглушек"],
      standards: ["Разработан в соответствии со стандартом IEC 60297 (19-дюймовая стойка)", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Нужны ли особые шкафы для изоляции холодного коридора, или достаточно потолка/дверей изоляции?", answer: "Изоляция работает только если сам ряд шкафов хорошо герметизирован — зазоры вокруг дверей, боковых панелей и кабельных вводов позволяют воздуху обходить изоляцию. Шкафы холодного коридора спроектированы с учётом этой герметизации, в дополнение к системе изоляции потолка/дверей, охватывающей коридор." },
      ],
    },
    zh: {
      name: "冷通道机柜",
      shortName: "冷通道机柜",
      tagline: "专为冷通道封闭气流隔离设计的机柜。",
      overview: "万电通冷通道机柜专为冷通道封闭布局部署而设计,采用密封面板接口及柜门密封条,将冷通道侧的送风与热排风有效隔离,提升整排制冷效率。",
      keyFeatures: ["密封面板及柜门接口,确保封闭完整性", "兼容标准封闭顶盖/柜门系统", "毛刷条走线口,减少气流旁通", "配备盲板套件,封堵未使用机架空间"],
      specGroups: [{ title: "结构与尺寸", specs: [{ label: "机架单元", value: "42U/45U/47U" }, { label: "宽度", value: "600mm/800mm" }, { label: "封闭接口", value: "兼容标准通道封闭系统" }] }],
      applications: ["冷/热通道封闭机房", "高密度托管机房排列", "PUE优化改造项目"],
      customizationOptions: ["封闭接口类型", "宽度", "盲板套件"],
      standards: ["按IEC 60297(19英寸机架)标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "冷通道封闭是否需要专用机柜,还是只需封闭顶盖/柜门？", answer: "只有整排机柜本身密封良好,封闭系统才能真正发挥作用——柜门、侧板及走线口周围的缝隙会让气流绕过封闭系统。冷通道机柜在设计时充分考虑了这种密封性,并与横跨通道的顶盖/柜门封闭系统配合使用。" },
      ],
    },
  },
  "intelligent-cabinet": {
    ar: {
      name: "خزانة ذكية",
      shortName: "خزانة ذكية",
      tagline: "خزانة بمراقبة بيئية ووصول متكاملة للمواقع غير المأهولة.",
      overview: "تدمج الخزانة الذكية من واندتونغ أجهزة استشعار بيئية والتحكم بالوصول للأبواب ومراقبة الطاقة على مستوى الخزانة، ما يمنح المشغلين رؤية وتحكماً في الخزانات الفردية في بيئات غير مأهولة أو متعددة المستأجرين دون الحاجة إلى وحدة صغيرة منفصلة.",
      keyFeatures: ["مراقبة متكاملة لدرجة الحرارة/الرطوبة", "تحكم إلكتروني بالوصول للأبواب وإنذارات فتح الباب", "متوافقة مع دمج PDU الذكي", "لوحة مراقبة عن بُعد"],
      specGroups: [
        { title: "المراقبة", specs: [{ label: "أجهزة الاستشعار", value: "درجة الحرارة، الرطوبة، حالة الباب" }, { label: "التحكم بالوصول", value: "خيارات بطاقة / رمز PIN / بيومترية" }, { label: "الاتصال", value: "وحدة مراقبة متصلة بالشبكة" }] },
        { title: "الهيكل", specs: [{ label: "وحدات الراك", value: "42U / 45U / 47U" }, { label: "العرض", value: "600 مم / 800 مم" }] },
      ],
      applications: ["غرف معدات غير مأهولة", "خزانات استضافة مشتركة متعددة المستأجرين", "عمليات نشر تكنولوجيا معلومات عالية الأمان"],
      customizationOptions: ["حزمة الاستشعار", "طريقة التحكم بالوصول", "دمج PDU"],
      standards: ["مصمم وفق معيار IEC 60297 (راك 19 بوصة)", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "كيف تختلف الخزانة الذكية عن مركز البيانات الوحدة الصغيرة؟", answer: "تضيف الخزانة الذكية المراقبة والتحكم بالوصول إلى غلاف واحد، بينما تدمج الوحدة الصغيرة لمركز البيانات الطاقة والتبريد وإخماد الحريق والمراقبة عبر صف أو وحدة كاملة — الخزانة الذكية خيار أخف عندما تحتاج فقط إلى رؤية في خزانة واحدة." },
      ],
    },
    fr: {
      name: "Armoire intelligente",
      shortName: "Armoire intelligente",
      tagline: "Armoire avec surveillance environnementale et d'accès intégrée pour sites non surveillés.",
      overview: "L'armoire intelligente Wandtung intègre des capteurs environnementaux, un contrôle d'accès de porte et une surveillance de l'alimentation au niveau de l'armoire, donnant aux opérateurs une visibilité et un contrôle sur des armoires individuelles dans des environnements non surveillés ou multi-locataires sans module micro séparé.",
      keyFeatures: ["Surveillance intégrée de la température/humidité", "Contrôle d'accès de porte électronique et alarmes d'ouverture de porte", "Compatible avec l'intégration de PDU intelligent", "Tableau de bord de surveillance à distance"],
      specGroups: [
        { title: "Surveillance", specs: [{ label: "Capteurs", value: "Température, humidité, état de la porte" }, { label: "Contrôle d'accès", value: "Options carte / code PIN / biométrique" }, { label: "Communication", value: "Module de surveillance connecté au réseau" }] },
        { title: "Structure", specs: [{ label: "Unités de rack", value: "42U / 45U / 47U" }, { label: "Largeur", value: "600 mm / 800 mm" }] },
      ],
      applications: ["Locaux d'équipement non surveillés", "Armoires de colocation multi-locataires", "Déploiements informatiques à haute sécurité"],
      customizationOptions: ["Ensemble de capteurs", "Méthode de contrôle d'accès", "Intégration PDU"],
      standards: ["Conçu selon la norme IEC 60297 (rack 19 pouces)", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "En quoi une armoire intelligente diffère-t-elle d'un micro data center modulaire ?", answer: "Une armoire intelligente ajoute la surveillance et le contrôle d'accès à un seul boîtier, tandis qu'un micro data center modulaire intègre l'alimentation, le refroidissement, l'extinction incendie et la surveillance sur toute une rangée ou un module complet — une armoire intelligente est une option plus légère lorsque vous n'avez besoin de visibilité que sur une seule armoire." },
      ],
    },
    es: {
      name: "Armario inteligente",
      shortName: "Armario inteligente",
      tagline: "Armario con monitoreo ambiental y de acceso integrado para sitios no atendidos.",
      overview: "El armario inteligente de Wandtung integra sensores ambientales, control de acceso de puerta y monitoreo de energía a nivel de armario, brindando a los operadores visibilidad y control sobre armarios individuales en entornos no atendidos o multiinquilino sin necesidad de un micro módulo separado.",
      keyFeatures: ["Monitoreo integrado de temperatura/humedad", "Control de acceso de puerta electrónico y alarmas de puerta abierta", "Compatible con integración de PDU inteligente", "Panel de monitoreo remoto"],
      specGroups: [
        { title: "Monitoreo", specs: [{ label: "Sensores", value: "Temperatura, humedad, estado de la puerta" }, { label: "Control de acceso", value: "Opciones de tarjeta / PIN / biométrico" }, { label: "Comunicación", value: "Módulo de monitoreo conectado a la red" }] },
        { title: "Estructura", specs: [{ label: "Unidades de rack", value: "42U / 45U / 47U" }, { label: "Ancho", value: "600 mm / 800 mm" }] },
      ],
      applications: ["Salas de equipos no atendidas", "Armarios de colocation multiinquilino", "Despliegues de TI de alta seguridad"],
      customizationOptions: ["Paquete de sensores", "Método de control de acceso", "Integración de PDU"],
      standards: ["Diseñado según la norma IEC 60297 (rack de 19 pulgadas)", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿En qué se diferencia un armario inteligente de un micro centro de datos modular?", answer: "Un armario inteligente añade monitoreo y control de acceso a una sola carcasa, mientras que un micro centro de datos modular integra energía, refrigeración, extinción de incendios y monitoreo en toda una fila o módulo completo; un armario inteligente es una opción más ligera cuando solo necesita visibilidad en un armario." },
      ],
    },
    ru: {
      name: "Интеллектуальный шкаф",
      shortName: "Интеллектуальный шкаф",
      tagline: "Шкаф со встроенным мониторингом окружающей среды и доступа для необслуживаемых объектов.",
      overview: "Интеллектуальный шкаф Wandtung объединяет датчики окружающей среды, контроль доступа к дверям и мониторинг питания на уровне шкафа, обеспечивая операторам видимость и контроль отдельных шкафов в необслуживаемых или многоарендаторных средах без отдельного микромодуля.",
      keyFeatures: ["Встроенный мониторинг температуры/влажности", "Электронный контроль доступа к дверям и сигнализация открытия двери", "Совместим с интеграцией интеллектуального PDU", "Панель удалённого мониторинга"],
      specGroups: [
        { title: "Мониторинг", specs: [{ label: "Датчики", value: "Температура, влажность, состояние двери" }, { label: "Контроль доступа", value: "Варианты карты / PIN-кода / биометрии" }, { label: "Связь", value: "Модуль мониторинга с сетевым подключением" }] },
        { title: "Конструкция", specs: [{ label: "Юниты стойки", value: "42U / 45U / 47U" }, { label: "Ширина", value: "600 мм / 800 мм" }] },
      ],
      applications: ["Необслуживаемые помещения с оборудованием", "Многоарендаторные шкафы колокейшн", "Развёртывания ИТ с высоким уровнем безопасности"],
      customizationOptions: ["Пакет датчиков", "Метод контроля доступа", "Интеграция PDU"],
      standards: ["Разработан в соответствии со стандартом IEC 60297 (19-дюймовая стойка)", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Чем интеллектуальный шкаф отличается от микромодульного ЦОД?", answer: "Интеллектуальный шкаф добавляет мониторинг и контроль доступа к одному корпусу, тогда как микромодульный ЦОД объединяет питание, охлаждение, пожаротушение и мониторинг для целого ряда или модуля — интеллектуальный шкаф является более лёгким вариантом, когда нужна видимость только одного шкафа." },
      ],
    },
    zh: {
      name: "智能机柜",
      shortName: "智能机柜",
      tagline: "集成环境与门禁监控的机柜,适用于无人值守场地。",
      overview: "万电通智能机柜在机柜层面集成了环境传感器、门禁访问控制及电力监控,使运营商无需单独部署微模块,即可对无人值守或多租户环境中的单个机柜实现可视化管理与控制。",
      keyFeatures: ["集成温湿度监控", "电子门禁控制及开门告警", "兼容智能PDU集成", "远程监控仪表盘"],
      specGroups: [
        { title: "监控", specs: [{ label: "传感器", value: "温度、湿度、门状态" }, { label: "门禁控制", value: "可选卡片/密码/生物识别方式" }, { label: "通信", value: "联网监控模块" }] },
        { title: "结构", specs: [{ label: "机架单元", value: "42U/45U/47U" }, { label: "宽度", value: "600mm/800mm" }] },
      ],
      applications: ["无人值守设备间", "多租户托管机柜", "高安全性IT部署"],
      customizationOptions: ["传感器套件", "门禁控制方式", "PDU集成"],
      standards: ["按IEC 60297(19英寸机架)标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "智能机柜与微模块化数据中心有何区别？", answer: "智能机柜为单一机箱增加了监控与门禁控制功能,而微模块化数据中心则将电力、制冷、消防及监控集成于整排或整个模块中——当只需对单个机柜实现可视化管理时,智能机柜是更轻量化的选择。" },
      ],
    },
  },
  "outdoor-cabinet": {
    ar: {
      name: "خزانة خارجية",
      shortName: "خزانة خارجية",
      tagline: "خزانة مقاومة للعوامل الجوية لنشر معدات الاتصالات والشبكات في الهواء الطلق.",
      overview: "تضم الخزانة الخارجية من واندتونغ معدات الشبكات والاتصالات في بيئات خارجية أو مكشوفة، بغلاف مقاوم للعوامل الجوية وإدارة حرارية وفتحات كابل محكمة مصنفة لتحمل الشمس والمطر والغبار في مواقع الأبراج الخلوية والخزانات على جانب الطريق والتركيبات النائية.",
      keyFeatures: ["غلاف مقاوم للعوامل الجوية بتصنيف IP عالٍ", "إدارة حرارية متكاملة (خيارات تهوية أو تكييف)", "غدد إدخال كابل محكمة", "طلاء مقاوم للتآكل للتعرض الخارجي"],
      specGroups: [
        { title: "البيئة", specs: [{ label: "تصنيف IP", value: "IP55 / IP65 (حسب الطراز)" }, { label: "درجة حرارة التشغيل", value: "نطاق خارجي موسع" }, { label: "التبريد", value: "خيارات تهوية سلبية أو تكييف" }] },
        { title: "الهيكل", specs: [{ label: "التركيب", value: "تركيب حائطي، عمودي أو أرضي" }, { label: "التشطيب", value: "طلاء مسحوق مقاوم للتآكل" }] },
      ],
      applications: ["مواقع محطات الاتصالات الأساسية", "خزانات شبكة على جانب الطريق / خارجية", "محطات المراقبة عن بُعد"],
      customizationOptions: ["تصنيف IP", "طريقة التبريد", "نوع التركيب"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما تصنيف IP الذي تحتاجه خزانة الاتصالات الخارجية؟", answer: "IP55 هو حد أدنى شائع لخزانات الاتصالات الخارجية، يحمي من تسرب الغبار ونفاثات الماء؛ يوفر IP65 مستوى أعلى من الحماية من الغبار والماء للمواقع الأكثر تعرضاً — يعتمد التصنيف المناسب على ظروف التعرض المحددة للموقع." },
      ],
    },
    fr: {
      name: "Armoire extérieure",
      shortName: "Armoire extérieure",
      tagline: "Armoire résistante aux intempéries pour le déploiement extérieur d'équipements télécoms et réseau.",
      overview: "L'armoire extérieure Wandtung héberge des équipements réseau et télécoms dans des environnements extérieurs ou exposés, avec un boîtier résistant aux intempéries, une gestion thermique et des presse-étoupes de câbles classés pour résister au soleil, à la pluie et à la poussière sur les sites de stations cellulaires, armoires en bord de route et installations distantes.",
      keyFeatures: ["Boîtier résistant aux intempéries à indice IP élevé", "Gestion thermique intégrée (options ventilées ou climatisées)", "Presse-étoupes de câbles scellés", "Revêtement résistant à la corrosion pour l'exposition extérieure"],
      specGroups: [
        { title: "Environnemental", specs: [{ label: "Indice IP", value: "IP55 / IP65 (selon le modèle)" }, { label: "Température de fonctionnement", value: "Plage extérieure étendue" }, { label: "Refroidissement", value: "Options ventilées passives ou climatisées" }] },
        { title: "Structure", specs: [{ label: "Montage", value: "Mural, sur poteau ou sur socle" }, { label: "Finition", value: "Peinture époxy résistante à la corrosion" }] },
      ],
      applications: ["Sites de stations de base télécoms", "Armoires réseau en bord de route / extérieures", "Stations de surveillance à distance"],
      customizationOptions: ["Indice IP", "Méthode de refroidissement", "Type de montage"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quel indice IP une armoire télécom extérieure nécessite-t-elle ?", answer: "IP55 est un minimum courant pour les armoires télécoms extérieures, protégeant contre la pénétration de poussière et les jets d'eau ; IP65 offre un niveau de protection plus élevé contre la poussière et l'eau pour les sites plus exposés — l'indice approprié dépend des conditions d'exposition spécifiques du site." },
      ],
    },
    es: {
      name: "Armario para exteriores",
      shortName: "Armario para exteriores",
      tagline: "Armario resistente a la intemperie para el despliegue de equipos de telecomunicaciones y red en exteriores.",
      overview: "El armario para exteriores de Wandtung alberga equipos de red y telecomunicaciones en entornos exteriores o expuestos, con una carcasa resistente a la intemperie, gestión térmica y prensaestopas de cables clasificados para resistir el sol, la lluvia y el polvo en sitios de estaciones base celulares, armarios de carretera e instalaciones remotas.",
      keyFeatures: ["Carcasa resistente a la intemperie con alta clasificación IP", "Gestión térmica integrada (opciones ventiladas o con aire acondicionado)", "Prensaestopas de cables sellados", "Recubrimiento resistente a la corrosión para exposición exterior"],
      specGroups: [
        { title: "Ambiental", specs: [{ label: "Clasificación IP", value: "IP55 / IP65 (según el modelo)" }, { label: "Temperatura de funcionamiento", value: "Rango exterior extendido" }, { label: "Refrigeración", value: "Opciones ventiladas pasivas o con aire acondicionado" }] },
        { title: "Estructura", specs: [{ label: "Montaje", value: "Mural, en poste o de pie" }, { label: "Acabado", value: "Recubrimiento en polvo resistente a la corrosión" }] },
      ],
      applications: ["Sitios de estaciones base de telecomunicaciones", "Armarios de red de carretera / exteriores", "Estaciones de monitoreo remoto"],
      customizationOptions: ["Clasificación IP", "Método de refrigeración", "Tipo de montaje"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué clasificación IP necesita un armario de telecomunicaciones para exteriores?", answer: "IP55 es un mínimo común para armarios de telecomunicaciones en exteriores, que protege contra la entrada de polvo y chorros de agua; IP65 ofrece un mayor nivel de protección contra polvo y agua para sitios más expuestos; la clasificación adecuada depende de las condiciones de exposición específicas del sitio." },
      ],
    },
    ru: {
      name: "Уличный шкаф",
      shortName: "Уличный шкаф",
      tagline: "Всепогодный шкаф для наружного размещения телекоммуникационного и сетевого оборудования.",
      overview: "Уличный шкаф Wandtung размещает сетевое и телекоммуникационное оборудование в наружных или открытых средах, с всепогодным корпусом, терморегулированием и герметичными кабельными вводами, рассчитанными на воздействие солнца, дождя и пыли на объектах базовых станций, придорожных шкафах и удалённых установках.",
      keyFeatures: ["Всепогодный корпус с высоким классом защиты IP", "Встроенное терморегулирование (вентилируемые или кондиционируемые варианты)", "Герметичные кабельные вводы", "Антикоррозийное покрытие для наружной эксплуатации"],
      specGroups: [
        { title: "Условия эксплуатации", specs: [{ label: "Класс защиты IP", value: "IP55 / IP65 (в зависимости от модели)" }, { label: "Рабочая температура", value: "Расширенный уличный диапазон" }, { label: "Охлаждение", value: "Пассивная вентиляция или варианты с кондиционированием" }] },
        { title: "Конструкция", specs: [{ label: "Монтаж", value: "Настенный, на опоре или напольный" }, { label: "Покрытие", value: "Антикоррозийная порошковая окраска" }] },
      ],
      applications: ["Объекты базовых станций телекоммуникаций", "Придорожные / уличные сетевые шкафы", "Станции удалённого мониторинга"],
      customizationOptions: ["Класс защиты IP", "Метод охлаждения", "Тип монтажа"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Какой класс защиты IP нужен для уличного телекоммуникационного шкафа?", answer: "IP55 — распространённый минимум для уличных телекоммуникационных шкафов, защищающий от проникновения пыли и водяных струй; IP65 обеспечивает более высокий уровень защиты от пыли и воды для более открытых объектов — подходящий класс зависит от конкретных условий эксплуатации объекта." },
      ],
    },
    zh: {
      name: "户外机柜",
      shortName: "户外机柜",
      tagline: "适用于户外电信及网络设备部署的防风雨机柜。",
      overview: "万电通户外机柜用于在室外或暴露环境中容纳网络及电信设备,采用防风雨机箱、集成热管理及密封走线接头,可承受基站站点、路边机柜及偏远安装点的日晒、雨水及粉尘侵蚀。",
      keyFeatures: ["高防护等级的防风雨机箱", "集成热管理(可选通风或空调型)", "密封走线接头", "耐腐蚀涂层,适应户外暴露环境"],
      specGroups: [
        { title: "环境适应性", specs: [{ label: "防护等级", value: "IP55/IP65(视型号而定)" }, { label: "工作温度", value: "扩展户外温度范围" }, { label: "制冷方式", value: "被动通风或空调型可选" }] },
        { title: "结构", specs: [{ label: "安装方式", value: "壁挂式、抱杆式或落地式" }, { label: "表面处理", value: "耐腐蚀粉末喷涂" }] },
      ],
      applications: ["电信基站站点", "路边/户外网络机柜", "远程监控站"],
      customizationOptions: ["防护等级", "制冷方式", "安装类型"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "户外电信机柜需要多高的防护等级？", answer: "IP55是户外电信机柜的常见最低标准,可防止粉尘侵入及喷水侵害;IP65则为暴露程度更高的场地提供更强的防尘防水保护——具体所需等级取决于场地的实际暴露条件。" },
      ],
    },
  },
  "smart-micro-module": {
    ar: {
      name: "مركز بيانات الوحدة الصغيرة الذكية",
      shortName: "الوحدة الصغيرة الذكية",
      tagline: "مركز بيانات صغير شامل الكل مع UPS متكامل وتبريد دقيق ومراقبة بشاشة لمس، توسع من 1 إلى 5 خزانات.",
      overview: "تدمج الوحدة الصغيرة الذكية من واندتونغ خزانات تكنولوجيا المعلومات وUPS وPDU وتكييف دقيق وكشف حريق/دخان وتحكم بالوصول للباب ومراقبة بيئية في نظام واحد مصمم مسبقاً ومُختبر في المصنع وجاهز للتشغيل الفوري. توفر شاشة لمس أمامية وصولاً موقعياً لمنصة المراقبة الذكية، وتتوسع الخزانات بمرونة من خزانة واحدة إلى صف من 5 خزانات لغرف البيانات الصغيرة والمتوسطة.",
      keyFeatures: ["تكامل واختبار مسبق في المصنع ونشر جاهز للتشغيل الفوري", "توسع مرن من 1 إلى 5 خزانات في صف واحد", "شاشة لمس أمامية للمراقبة الذكية الموقعية", "UPS وPDU وتبريد دقيق عالي الكفاءة متكاملة", "أجهزة استشعار حرارة/رطوبة ودخان وتسرب مياه", "قفل باب إلكتروني وتكامل نظام مراقبة بالفيديو", "مكونات إدارة تدفق الهواء لتحسين توزيع التبريد", "منصة مراقبة مركزية للبيئة والطاقة"],
      specGroups: [
        { title: "تكوين النظام", specs: [{ label: "خزانات تكنولوجيا المعلومات", value: "42U، من خزانة واحدة إلى صف من 5 خزانات" }, { label: "الطاقة", value: "UPS متكامل + PDU" }, { label: "التبريد", value: "تكييف دقيق عالي الكفاءة" }, { label: "المراقبة", value: "شاشة لمس أمامية + منصة مركزية متوافقة مع DCIM" }] },
        { title: "السلامة والاستشعار", specs: [{ label: "أجهزة الاستشعار", value: "حرارة/رطوبة، دخان، تسرب مياه" }, { label: "التحكم بالوصول", value: "قفل باب إلكتروني مع أجهزة استشعار الباب" }, { label: "المراقبة بالفيديو", value: "دعم تكامل نظام المراقبة" }] },
      ],
      applications: ["غرف تكنولوجيا معلومات المؤسسات", "غرف بيانات فروع البنوك", "مراكز بيانات طرفية / إقليمية"],
      customizationOptions: ["عدد الخزانات (1-5)", "مستوى تكرار الطاقة", "نوع التبريد", "حزمة أجهزة الاستشعار"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هو مركز البيانات الوحدة الصغيرة؟", answer: "مركز البيانات الوحدة الصغيرة هو نظام متكامل مسبقاً من المصنع يجمع خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد وإخماد الحريق والتحكم بالوصول والمراقبة في وحدة موحدة واحدة، ما يقلل وقت البناء في الموقع مقارنة بغرفة بيانات مبنية تقليدياً." },
        { question: "هل تقدم واندتونغ حلول مراكز بيانات الوحدة الصغيرة؟", answer: "نعم. تصمم واندتونغ وتصنّع مراكز بيانات وحدة صغيرة بصف واحد وصفين وشاملة الكل، مع طاقة وتبريد وإخماد حريق ومراقبة متكاملة، مصممة ومُختبرة في المصنع كنظام كامل قبل النشر." },
        { question: "كم عدد الخزانات التي يمكن أن يتوسع إليها الوحدة الصغيرة الذكية؟", answer: "يدعم النظام توسعاً مرناً من خزانة واحدة إلى صف من 5 خزانات، ما يتيح توسيع السعة بإضافة خزانات إلى نشر قائم بدلاً من استبداله." },
      ],
    },
    fr: {
      name: "Data center micro-modulaire intelligent",
      shortName: "Micro-module intelligent",
      tagline: "Micro data center tout-en-un avec onduleur intégré, refroidissement de précision et surveillance par écran tactile, extension de 1 à 5 baies.",
      overview: "Le micro-module intelligent Wandtung intègre armoires informatiques, onduleur, PDU, climatisation de précision, détection incendie/fumée, contrôle d'accès de porte et surveillance environnementale en un seul système préconçu, testé en usine et prêt à l'emploi. Un écran tactile en façade donne un accès sur site à la plateforme de surveillance intelligente, et les baies s'étendent avec flexibilité d'une seule armoire jusqu'à une rangée de 5 baies pour les salles de données petites à moyennes.",
      keyFeatures: ["Pré-intégration en usine, tests et déploiement prêt à l'emploi", "Extension flexible de 1 à 5 baies en une seule rangée", "Écran tactile en façade pour la surveillance intelligente sur site", "Onduleur, PDU et refroidissement de précision haute efficacité intégrés", "Capteurs de température/humidité, fumée et fuite d'eau", "Serrure de porte électronique et intégration de système de vidéosurveillance", "Composants de gestion du flux d'air pour une distribution optimisée du refroidissement", "Plateforme de surveillance centralisée de l'environnement et de l'alimentation"],
      specGroups: [
        { title: "Composition du système", specs: [{ label: "Armoires informatiques", value: "42U, d'une armoire à une rangée de 5 baies" }, { label: "Alimentation", value: "Onduleur intégré + PDU" }, { label: "Refroidissement", value: "Climatisation de précision haute efficacité" }, { label: "Surveillance", value: "Écran tactile en façade + plateforme centralisée compatible DCIM" }] },
        { title: "Sécurité et détection", specs: [{ label: "Capteurs", value: "Température/humidité, fumée, fuite d'eau" }, { label: "Contrôle d'accès", value: "Serrure de porte électronique avec capteurs de porte" }, { label: "Vidéosurveillance", value: "Support d'intégration de système de vidéosurveillance" }] },
      ],
      applications: ["Salles informatiques d'entreprise", "Salles de données d'agences bancaires", "Centres de données edge / régionaux"],
      customizationOptions: ["Nombre de baies (1-5)", "Niveau de redondance d'alimentation", "Type de refroidissement", "Kit de capteurs"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce qu'un data center micro-modulaire ?", answer: "Un data center micro-modulaire est un système pré-intégré en usine combinant armoires informatiques, distribution électrique, onduleur, refroidissement, extinction incendie, contrôle d'accès et surveillance en une seule unité standardisée, réduisant le temps de construction sur site par rapport à une salle de données construite traditionnellement." },
        { question: "Wandtung propose-t-il des solutions de data center micro-modulaire ?", answer: "Oui. Wandtung conçoit et fabrique des data centers micro-modulaires à une rangée, deux rangées et tout-en-un avec alimentation, refroidissement, extinction incendie et surveillance intégrés, conçus et testés en usine comme un système complet avant déploiement." },
        { question: "Sur combien de baies le micro-module intelligent peut-il s'étendre ?", answer: "Le système prend en charge une extension flexible d'une seule armoire jusqu'à une rangée de 5 baies, permettant d'augmenter la capacité en ajoutant des baies à un déploiement existant plutôt qu'en le remplaçant." },
      ],
    },
    es: {
      name: "Centro de datos micro modular inteligente",
      shortName: "Micro módulo inteligente",
      tagline: "Micro centro de datos todo en uno con SAI integrado, refrigeración de precisión y monitoreo por pantalla táctil, expansión de 1 a 5 bahías.",
      overview: "El micro módulo inteligente de Wandtung integra armarios de TI, SAI, PDU, aire acondicionado de precisión, detección de incendio/humo, control de acceso de puerta y monitoreo ambiental en un único sistema preconcebido, probado en fábrica y listo para usar. Una pantalla táctil frontal ofrece acceso in situ a la plataforma de monitoreo inteligente, y las bahías se expanden con flexibilidad desde un solo armario hasta una fila de 5 bahías para salas de datos pequeñas y medianas.",
      keyFeatures: ["Preintegración en fábrica, pruebas y despliegue listo para usar", "Expansión flexible de 1 a 5 bahías en una sola fila", "Pantalla táctil frontal para monitoreo inteligente in situ", "SAI, PDU y refrigeración de precisión de alta eficiencia integrados", "Sensores de temperatura/humedad, humo y fuga de agua", "Cerradura de puerta electrónica e integración de sistema de videovigilancia", "Componentes de gestión de flujo de aire para una distribución de refrigeración optimizada", "Plataforma de monitoreo centralizado ambiental y de energía"],
      specGroups: [
        { title: "Composición del sistema", specs: [{ label: "Armarios de TI", value: "42U, de un armario a una fila de 5 bahías" }, { label: "Energía", value: "SAI integrado + PDU" }, { label: "Refrigeración", value: "Aire acondicionado de precisión de alta eficiencia" }, { label: "Monitoreo", value: "Pantalla táctil frontal + plataforma centralizada compatible con DCIM" }] },
        { title: "Seguridad y detección", specs: [{ label: "Sensores", value: "Temperatura/humedad, humo, fuga de agua" }, { label: "Control de acceso", value: "Cerradura de puerta electrónica con sensores de puerta" }, { label: "Videovigilancia", value: "Soporte de integración de sistema de videovigilancia" }] },
      ],
      applications: ["Salas de TI empresariales", "Salas de datos de sucursales bancarias", "Centros de datos de borde / regionales"],
      customizationOptions: ["Número de bahías (1-5)", "Nivel de redundancia de energía", "Tipo de refrigeración", "Kit de sensores"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es un centro de datos micro modular?", answer: "Un centro de datos micro modular es un sistema preintegrado en fábrica que combina armarios de TI, distribución de energía, SAI, refrigeración, extinción de incendios, control de acceso y monitoreo en una única unidad estandarizada, reduciendo el tiempo de construcción en sitio en comparación con una sala de datos construida tradicionalmente." },
        { question: "¿Ofrece Wandtung soluciones de centro de datos micro modular?", answer: "Sí. Wandtung diseña y fabrica centros de datos micro modulares de una fila, dos filas y todo en uno con energía, refrigeración, extinción de incendios y monitoreo integrados, diseñados y probados en fábrica como sistema completo antes del despliegue." },
        { question: "¿A cuántas bahías puede expandirse el micro módulo inteligente?", answer: "El sistema admite una expansión flexible desde un solo armario hasta una fila de 5 bahías, lo que permite aumentar la capacidad añadiendo bahías a un despliegue existente en lugar de reemplazarlo." },
      ],
    },
    ru: {
      name: "Интеллектуальный микромодульный ЦОД",
      shortName: "Интеллектуальный микромодуль",
      tagline: "Моноблочный микро-ЦОД со встроенным ИБП, прецизионным охлаждением и сенсорным мониторингом, расширение от 1 до 5 отсеков.",
      overview: "Интеллектуальный микромодуль Wandtung объединяет ИТ-шкафы, ИБП, PDU, прецизионное кондиционирование, обнаружение пожара/дыма, контроль доступа к двери и мониторинг окружающей среды в единую заранее спроектированную, протестированную на заводе систему plug-and-play. Передний сенсорный экран обеспечивает доступ на объекте к платформе интеллектуального мониторинга, а отсеки гибко расширяются от одного шкафа до ряда из 5 отсеков для малых и средних машинных залов.",
      keyFeatures: ["Предварительная интеграция на заводе, тестирование и развёртывание plug-and-play", "Гибкое расширение от 1 до 5 отсеков в одном ряду", "Передний сенсорный экран для интеллектуального мониторинга на объекте", "Встроенные ИБП, PDU и высокоэффективное прецизионное охлаждение", "Датчики температуры/влажности, дыма и протечки воды", "Электронный дверной замок и интеграция системы видеонаблюдения", "Компоненты управления воздушным потоком для оптимизации подачи охлаждения", "Централизованная платформа мониторинга окружающей среды и питания"],
      specGroups: [
        { title: "Состав системы", specs: [{ label: "ИТ-шкафы", value: "42U, от одного шкафа до ряда из 5 отсеков" }, { label: "Питание", value: "Встроенный ИБП + PDU" }, { label: "Охлаждение", value: "Высокоэффективное прецизионное кондиционирование" }, { label: "Мониторинг", value: "Передний сенсорный экран + централизованная платформа, совместимая с DCIM" }] },
        { title: "Безопасность и датчики", specs: [{ label: "Датчики", value: "Температура/влажность, дым, протечка воды" }, { label: "Контроль доступа", value: "Электронный дверной замок с дверными датчиками" }, { label: "Видеонаблюдение", value: "Поддержка интеграции системы видеонаблюдения" }] },
      ],
      applications: ["Корпоративные ИТ-помещения", "Банковские филиальные серверные", "Периферийные / региональные ЦОД"],
      customizationOptions: ["Количество отсеков (1-5)", "Уровень резервирования питания", "Тип охлаждения", "Комплект датчиков"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое микромодульный ЦОД?", answer: "Микромодульный ЦОД — это предварительно интегрированная на заводе система, объединяющая ИТ-шкафы, распределение питания, ИБП, охлаждение, пожаротушение, контроль доступа и мониторинг в единый стандартизированный блок, сокращающая время строительства на объекте по сравнению с традиционно построенным машинным залом." },
        { question: "Предлагает ли Wandtung решения микромодульных ЦОД?", answer: "Да. Wandtung проектирует и производит одно-, двухрядные и моноблочные микромодульные ЦОД со встроенным питанием, охлаждением, пожаротушением и мониторингом, спроектированные и протестированные на заводе как единая система перед развёртыванием." },
        { question: "До скольких отсеков может расширяться интеллектуальный микромодуль?", answer: "Система поддерживает гибкое расширение от одного шкафа до ряда из 5 отсеков, что позволяет наращивать мощность, добавляя отсеки к существующему развёртыванию, а не заменяя его." },
      ],
    },
    zh: {
      name: "智能微模块数据中心",
      shortName: "智能微模块",
      tagline: "一体式微型数据中心，集成UPS、精密制冷及触摸屏监控，支持1-5柜灵活扩展。",
      overview: "万电通智能微模块将IT机柜、UPS、PDU、精密空调、火警/烟雾探测、门禁控制及环境监控集成于一套预先设计、经工厂测试、即插即用的系统中。前置触摸屏提供本地化智能监控平台访问，机柜可从单柜灵活扩展至5柜一排，适用于中小型机房。",
      keyFeatures: ["工厂预集成、测试及即插即用部署", "单排内1至5柜灵活扩展", "前置触摸屏实现本地智能监控", "集成UPS、PDU及高效精密制冷", "温湿度、烟雾及漏水传感器", "电子门锁及视频监控系统集成", "气流管理组件优化制冷分配", "集中式环境及电力监控平台"],
      specGroups: [
        { title: "系统构成", specs: [{ label: "IT机柜", value: "42U，单柜至5柜一排" }, { label: "电力", value: "集成UPS+PDU" }, { label: "制冷", value: "高效精密空调" }, { label: "监控", value: "前置触摸屏+兼容DCIM的集中平台" }] },
        { title: "安全与传感", specs: [{ label: "传感器", value: "温湿度、烟雾、漏水" }, { label: "门禁控制", value: "电子门锁配门磁传感器" }, { label: "视频监控", value: "支持视频监控系统集成" }] },
      ],
      applications: ["企业IT机房", "银行网点机房", "边缘/区域数据中心"],
      customizationOptions: ["柜数(1-5)", "电力冗余等级", "制冷方式", "传感器配置"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么是微模块数据中心？", answer: "微模块数据中心是一种出厂预集成系统,将IT机柜、配电、UPS、制冷、消防、门禁及监控整合为一套标准化单元,相比传统建造机房大幅缩短现场施工时间。" },
        { question: "万电通是否提供微模块数据中心解决方案？", answer: "是的。万电通设计并制造单排、双排及一体式微模块数据中心,集成电力、制冷、消防及监控系统,在部署前作为完整系统于工厂完成设计与测试。" },
        { question: "智能微模块最多可扩展至多少柜？", answer: "该系统支持从单柜灵活扩展至5柜一排，可通过在现有部署基础上增加机柜来扩容，而无需更换整套系统。" },
      ],
    },
  },
  "single-row-micro-data-center": {
    ar: {
      name: "مركز بيانات صغير بصف واحد",
      shortName: "وحدة صغيرة بصف واحد",
      tagline: "وحدة صغيرة مدمجة بخزانات مرتبة في صف واحد لعمليات النشر الصغيرة.",
      overview: "يرتب مركز البيانات الصغير بصف واحد من واندتونغ خزانات تكنولوجيا المعلومات في صف واحد مع بنية طاقة وتبريد خلفية أو جانبية، بحجم مناسب لغرف المعدات الصغيرة ومواقع الفروع حيث لا حاجة لتخطيط احتواء بصفين كامل.",
      keyFeatures: ["تخطيط خزانات بصف واحد لمساحة مدمجة", "UPS وPDU وتبريد متكامل", "تكامل واختبار مسبق في المصنع", "إخماد حريق وتحكم بالوصول مُضمّنان"],
      specGroups: [{ title: "تكوين النظام", specs: [{ label: "التخطيط", value: "صف واحد، عادة 2–6 خزانات" }, { label: "الطاقة", value: "UPS بتركيب راك أو معياري + PDU ذكي" }, { label: "التبريد", value: "تكييف داخل الصف أو دقيق" }] }],
      applications: ["غرف بيانات فروع صغيرة", "تكنولوجيا معلومات المكاتب الخلفية للتجزئة", "غرف خوادم المكاتب الإقليمية"],
      customizationOptions: ["عدد الخزانات", "مستوى تكرار الطاقة", "نوع التبريد"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "متى يكون مركز البيانات الصغير بصف واحد كافياً، مقابل صفين؟", answer: "يناسب تخطيط الصف الواحد أحمال تكنولوجيا المعلومات الأصغر (عادة أقل من 6 خزانات) حيث مساحة الأرضية محدودة ولا يلزم احتواء ممر كامل — يصبح تخطيط الصفين أكثر كفاءة مع زيادة عدد الخزانات وكثافة التبريد." },
      ],
    },
    fr: {
      name: "Micro data center à rangée unique",
      shortName: "Micro DC rangée unique",
      tagline: "Micro-module compact avec armoires disposées en une seule rangée pour les petits déploiements.",
      overview: "Le micro data center à rangée unique Wandtung dispose les armoires informatiques en une seule rangée avec une infrastructure d'alimentation et de refroidissement arrière ou latérale, dimensionné pour les petites salles d'équipement et les sites d'agences où une disposition complète à confinement double rangée n'est pas nécessaire.",
      keyFeatures: ["Disposition d'armoires à rangée unique pour un encombrement compact", "Onduleur, PDU et refroidissement intégrés", "Pré-intégration et tests en usine", "Extinction incendie et contrôle d'accès inclus"],
      specGroups: [{ title: "Composition du système", specs: [{ label: "Disposition", value: "Rangée unique, typiquement 2–6 armoires" }, { label: "Alimentation", value: "Onduleur en rack ou modulaire + PDU intelligent" }, { label: "Refroidissement", value: "Climatisation in-row ou de précision" }] }],
      applications: ["Petites salles de données d'agences", "Informatique d'arrière-boutique de détail", "Salles serveurs de bureaux régionaux"],
      customizationOptions: ["Nombre d'armoires", "Niveau de redondance d'alimentation", "Type de refroidissement"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quand un micro data center à rangée unique suffit-il, par rapport à une double rangée ?", answer: "Une disposition à rangée unique convient aux charges informatiques plus petites (généralement moins de 6 armoires) où l'espace au sol est limité et où un confinement d'allée complet n'est pas nécessaire — la double rangée devient plus efficace à mesure que le nombre d'armoires et la densité de refroidissement augmentent." },
      ],
    },
    es: {
      name: "Micro centro de datos de una fila",
      shortName: "Micro DC de una fila",
      tagline: "Micro módulo compacto con armarios dispuestos en una sola fila para despliegues pequeños.",
      overview: "El micro centro de datos de una fila de Wandtung dispone los armarios de TI en una sola fila con infraestructura de energía y refrigeración trasera o lateral, dimensionado para pequeñas salas de equipos y sitios de sucursales donde no se necesita un diseño de contención de doble fila completo.",
      keyFeatures: ["Disposición de armarios de una fila para una huella compacta", "SAI, PDU y refrigeración integrados", "Preintegración y pruebas de fábrica", "Extinción de incendios y control de acceso incluidos"],
      specGroups: [{ title: "Composición del sistema", specs: [{ label: "Disposición", value: "Una fila, típicamente 2–6 armarios" }, { label: "Energía", value: "SAI de rack o modular + PDU inteligente" }, { label: "Refrigeración", value: "Aire acondicionado in-row o de precisión" }] }],
      applications: ["Salas de datos de sucursales pequeñas", "TI de trastienda minorista", "Salas de servidores de oficinas regionales"],
      customizationOptions: ["Número de armarios", "Nivel de redundancia de energía", "Tipo de refrigeración"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuándo es suficiente un micro centro de datos de una fila, frente a uno de dos filas?", answer: "Una disposición de una fila es adecuada para cargas de TI más pequeñas (normalmente menos de 6 armarios) donde el espacio en planta es limitado y no se requiere contención completa de pasillo; la disposición de dos filas se vuelve más eficiente a medida que aumenta el número de armarios y la densidad de refrigeración." },
      ],
    },
    ru: {
      name: "Однорядный микро-ЦОД",
      shortName: "Однорядный микро-ЦОД",
      tagline: "Компактный микромодуль с шкафами, расположенными в один ряд, для небольших развёртываний.",
      overview: "Однорядный микро-ЦОД Wandtung располагает ИТ-шкафы в один ряд с задней или боковой инфраструктурой питания и охлаждения, рассчитан на небольшие помещения с оборудованием и филиалы, где полная двухрядная схема изоляции не требуется.",
      keyFeatures: ["Однорядная компоновка шкафов для компактного размещения", "Встроенные ИБП, PDU и охлаждение", "Предварительная интеграция и тестирование на заводе", "Пожаротушение и контроль доступа включены"],
      specGroups: [{ title: "Состав системы", specs: [{ label: "Компоновка", value: "Один ряд, обычно 2–6 шкафов" }, { label: "Питание", value: "Стоечный или модульный ИБП + интеллектуальный PDU" }, { label: "Охлаждение", value: "Внутрирядное или прецизионное кондиционирование" }] }],
      applications: ["Небольшие филиальные серверные", "ИТ подсобных помещений розничной торговли", "Серверные региональных офисов"],
      customizationOptions: ["Количество шкафов", "Уровень резервирования питания", "Тип охлаждения"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Когда однорядного микро-ЦОД достаточно по сравнению с двухрядным?", answer: "Однорядная компоновка подходит для меньших ИТ-нагрузок (обычно менее 6 шкафов), где площадь пола ограничена и полная изоляция коридора не требуется — двухрядная компоновка становится более эффективной по мере роста числа шкафов и плотности охлаждения." },
      ],
    },
    zh: {
      name: "单排微型数据中心",
      shortName: "单排微型数据中心",
      tagline: "机柜单排布局的紧凑型微模块,适用于小型部署。",
      overview: "万电通单排微型数据中心将IT机柜排列为单排,电力与制冷设施置于机柜后方或侧方,适用于小型设备间及分支机构场地,无需完整的双排通道封闭布局。",
      keyFeatures: ["单排机柜布局,占地紧凑", "集成UPS、PDU及制冷", "出厂前预集成及测试", "内置消防与门禁系统"],
      specGroups: [{ title: "系统构成", specs: [{ label: "布局", value: "单排,通常2–6台机柜" }, { label: "电力", value: "机架式或模块化UPS+智能PDU" }, { label: "制冷", value: "行级或精密空调" }] }],
      applications: ["小型分支机房", "零售后台IT系统", "区域办公室服务器机房"],
      customizationOptions: ["机柜数量", "电力冗余等级", "制冷方式"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "何时单排微型数据中心即可满足需求,而非双排？", answer: "单排布局适用于较小的IT负载(通常少于6台机柜)、场地面积有限且无需完整通道封闭的场景——随着机柜数量及制冷密度增加,双排布局将更具效率。" },
      ],
    },
  },
  "dual-row-micro-data-center": {
    ar: {
      name: "مركز بيانات صغير بصفين",
      shortName: "وحدة صغيرة بصفين",
      tagline: "وحدة صغيرة بخزانات متقابلة في صفين مع احتواء ممر ساخن/بارد.",
      overview: "يرتب مركز البيانات الصغير بصفين من واندتونغ خزانات تكنولوجيا المعلومات في صفين متقابلين مع احتواء ممر ساخن أو بارد بينهما، ما يحسّن كفاءة التبريد مقارنة بتخطيط الصف الواحد لعمليات النشر المتوسطة بعدد خزانات أو كثافة أعلى.",
      keyFeatures: ["تخطيط بصفين مع احتواء ممر ساخن/بارد", "كثافة خزانات أعلى لكل مساحة مقارنة بالصف الواحد", "UPS وPDU وتبريد وإخماد حريق متكامل", "مراقبة مركزية عبر الصفين"],
      specGroups: [{ title: "تكوين النظام", specs: [{ label: "التخطيط", value: "صفان، مع ممر احتواء بينهما" }, { label: "الطاقة", value: "UPS معياري + PDU ذكي" }, { label: "التبريد", value: "تبريد داخل الصف ضمن ممر الاحتواء" }] }],
      applications: ["غرف بيانات المؤسسات المتوسطة", "مراكز بيانات إقليمية", "عمليات نشر فروع بكثافة أعلى"],
      customizationOptions: ["طول الصف / عدد الخزانات", "نوع الاحتواء", "مستوى التكرار"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هو مركز البيانات الوحدة الصغيرة؟", answer: "مركز البيانات الوحدة الصغيرة هو نظام متكامل مسبقاً من المصنع يجمع خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد وإخماد الحريق والتحكم بالوصول والمراقبة في وحدة موحدة واحدة، ما يقلل وقت البناء في الموقع مقارنة بغرفة بيانات مبنية تقليدياً." },
      ],
    },
    fr: {
      name: "Micro data center à double rangée",
      shortName: "Micro DC double rangée",
      tagline: "Micro-module avec armoires face à face sur deux rangées et confinement d'allée chaude/froide.",
      overview: "Le micro data center à double rangée Wandtung dispose les armoires informatiques sur deux rangées face à face avec un confinement d'allée chaude ou froide entre elles, améliorant l'efficacité de refroidissement par rapport à une disposition à rangée unique pour les déploiements de taille moyenne avec un nombre d'armoires ou une densité plus élevés.",
      keyFeatures: ["Disposition à double rangée avec confinement d'allée chaude/froide", "Densité d'armoires par surface plus élevée qu'à rangée unique", "Onduleur, PDU, refroidissement et extinction incendie intégrés", "Surveillance centralisée sur les deux rangées"],
      specGroups: [{ title: "Composition du système", specs: [{ label: "Disposition", value: "Double rangée, allée de confinement entre les deux" }, { label: "Alimentation", value: "Onduleur modulaire + PDU intelligent" }, { label: "Refroidissement", value: "Refroidissement in-row dans l'allée de confinement" }] }],
      applications: ["Salles de données d'entreprise de taille moyenne", "Centres de données régionaux", "Déploiements d'agences à densité plus élevée"],
      customizationOptions: ["Longueur de rangée / nombre d'armoires", "Type de confinement", "Niveau de redondance"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce qu'un data center micro-modulaire ?", answer: "Un data center micro-modulaire est un système pré-intégré en usine combinant armoires informatiques, distribution électrique, onduleur, refroidissement, extinction incendie, contrôle d'accès et surveillance en une seule unité standardisée, réduisant le temps de construction sur site par rapport à une salle de données construite traditionnellement." },
      ],
    },
    es: {
      name: "Micro centro de datos de dos filas",
      shortName: "Micro DC de dos filas",
      tagline: "Micro módulo con armarios enfrentados en dos filas y contención de pasillo caliente/frío.",
      overview: "El micro centro de datos de dos filas de Wandtung dispone los armarios de TI en dos filas enfrentadas con contención de pasillo caliente o frío entre ellas, mejorando la eficiencia de enfriamiento respecto a una disposición de una fila para despliegues de tamaño medio con mayor número de armarios o densidad.",
      keyFeatures: ["Disposición de dos filas con contención de pasillo caliente/frío", "Mayor densidad de armarios por superficie que una fila", "SAI, PDU, refrigeración y extinción de incendios integrados", "Monitoreo centralizado en ambas filas"],
      specGroups: [{ title: "Composición del sistema", specs: [{ label: "Disposición", value: "Dos filas, con pasillo de contención entre ellas" }, { label: "Energía", value: "SAI modular + PDU inteligente" }, { label: "Refrigeración", value: "Refrigeración in-row dentro del pasillo de contención" }] }],
      applications: ["Salas de datos empresariales de tamaño medio", "Centros de datos regionales", "Despliegues de sucursales de mayor densidad"],
      customizationOptions: ["Longitud de fila / número de armarios", "Tipo de contención", "Nivel de redundancia"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es un centro de datos micro modular?", answer: "Un centro de datos micro modular es un sistema preintegrado en fábrica que combina armarios de TI, distribución de energía, SAI, refrigeración, extinción de incendios, control de acceso y monitoreo en una única unidad estandarizada, reduciendo el tiempo de construcción en sitio en comparación con una sala de datos construida tradicionalmente." },
      ],
    },
    ru: {
      name: "Двухрядный микро-ЦОД",
      shortName: "Двухрядный микро-ЦОД",
      tagline: "Микромодуль с шкафами, расположенными друг напротив друга в два ряда, с изоляцией горячего/холодного коридора.",
      overview: "Двухрядный микро-ЦОД Wandtung располагает ИТ-шкафы в два обращённых друг к другу ряда с изоляцией горячего или холодного коридора между ними, повышая эффективность охлаждения по сравнению с однорядной компоновкой для развёртываний среднего размера с большим количеством шкафов или плотностью.",
      keyFeatures: ["Двухрядная компоновка с изоляцией горячего/холодного коридора", "Более высокая плотность шкафов на площадь, чем при однорядной", "Встроенные ИБП, PDU, охлаждение и пожаротушение", "Централизованный мониторинг для обоих рядов"],
      specGroups: [{ title: "Состав системы", specs: [{ label: "Компоновка", value: "Два ряда с коридором изоляции между ними" }, { label: "Питание", value: "Модульный ИБП + интеллектуальный PDU" }, { label: "Охлаждение", value: "Внутрирядное охлаждение в коридоре изоляции" }] }],
      applications: ["Машинные залы среднего размера предприятий", "Региональные ЦОД", "Филиальные развёртывания повышенной плотности"],
      customizationOptions: ["Длина ряда / количество шкафов", "Тип изоляции", "Уровень резервирования"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое микромодульный ЦОД?", answer: "Микромодульный ЦОД — это предварительно интегрированная на заводе система, объединяющая ИТ-шкафы, распределение питания, ИБП, охлаждение, пожаротушение, контроль доступа и мониторинг в единый стандартизированный блок, сокращающая время строительства на объекте по сравнению с традиционно построенным машинным залом." },
      ],
    },
    zh: {
      name: "双排微型数据中心",
      shortName: "双排微型数据中心",
      tagline: "机柜面对面双排布局并配备冷/热通道封闭的微模块。",
      overview: "万电通双排微型数据中心将IT机柜面对面排列为两排,中间设置冷通道或热通道封闭,相比单排布局可提升制冷效率,适用于机柜数量或密度更高的中型部署场景。",
      keyFeatures: ["双排布局并配备冷/热通道封闭", "相比单排布局单位面积机柜密度更高", "集成UPS、PDU、制冷及消防系统", "双排统一集中监控"],
      specGroups: [{ title: "系统构成", specs: [{ label: "布局", value: "双排,中间为封闭通道" }, { label: "电力", value: "模块化UPS+智能PDU" }, { label: "制冷", value: "封闭通道内行级制冷" }] }],
      applications: ["中型企业机房", "区域数据中心", "更高密度的分支机构部署"],
      customizationOptions: ["排列长度/机柜数量", "封闭类型", "冗余等级"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么是微模块数据中心？", answer: "微模块数据中心是一种出厂预集成系统,将IT机柜、配电、UPS、制冷、消防、门禁及监控整合为一套标准化单元,相比传统建造机房大幅缩短现场施工时间。" },
      ],
    },
  },
  "all-in-one-micro-data-center": {
    ar: {
      name: "مركز بيانات صغير شامل الكل",
      shortName: "وحدة صغيرة شاملة",
      tagline: "غلاف واحد يدمج الراك وUPS وPDU والتبريد لأصغر عمليات النشر.",
      overview: "يعبّئ مركز البيانات الصغير الشامل من واندتونغ مساحة راك تكنولوجيا المعلومات وUPS وPDU والتبريد في غلاف واحد قائم بذاته — أصغر خطوة ترقية من خزانة قياسية، مناسب للمواقع التي بها عدد قليل من الخوادم فقط ودون غرفة معدات مخصصة.",
      keyFeatures: ["غلاف واحد قائم بذاته — راك وطاقة وتبريد في وحدة واحدة", "مساحة مدمجة للأماكن بدون غرفة خوادم مخصصة", "كشف حريق مدمج", "تكامل جاهز للتشغيل من المصنع"],
      specGroups: [{ title: "تكوين النظام", specs: [{ label: "مساحة تكنولوجيا المعلومات", value: "6U – 24U قابلة للاستخدام، حسب الطراز" }, { label: "الطاقة", value: "UPS + PDU متكامل" }, { label: "التبريد", value: "وحدة تبريد دقيق متكاملة" }] }],
      applications: ["مكاتب صغيرة بدون غرفة خوادم", "مواقع التجزئة / الفروع", "الحوسبة الطرفية في المواقع الصغيرة"],
      customizationOptions: ["مساحة الراك القابلة للاستخدام", "وقت تشغيل البطارية", "سعة التبريد"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل مركز البيانات الصغير الشامل هو نفسه راك خوادم مع UPS؟", answer: "يذهب إلى أبعد من ذلك — بخلاف مجرد إيواء UPS داخل خزانة، يدمج مركز البيانات الصغير الشامل الطاقة والتبريد الدقيق وغالباً كشف الحريق كنظام واحد مصمم ومُختبر في المصنع، بدلاً من مكونات مُجمّعة في الموقع." },
      ],
    },
    fr: {
      name: "Micro data center tout-en-un",
      shortName: "Micro DC tout-en-un",
      tagline: "Boîtier unique intégrant rack, onduleur, PDU et refroidissement pour les plus petits déploiements.",
      overview: "Le micro data center tout-en-un Wandtung regroupe l'espace de rack informatique, l'onduleur, le PDU et le refroidissement dans un boîtier unique autonome — la plus petite étape au-delà d'une armoire standard, adaptée aux sites avec seulement quelques serveurs et sans salle d'équipement dédiée.",
      keyFeatures: ["Boîtier unique autonome — rack, alimentation et refroidissement en une unité", "Encombrement compact pour les espaces sans salle serveur dédiée", "Détection incendie intégrée", "Intégration prête à l'emploi en usine"],
      specGroups: [{ title: "Composition du système", specs: [{ label: "Espace informatique", value: "6U – 24U utilisable, selon le modèle" }, { label: "Alimentation", value: "Onduleur + PDU intégrés" }, { label: "Refroidissement", value: "Unité de refroidissement de précision intégrée" }] }],
      applications: ["Petits bureaux sans salle serveur", "Sites de détail / agences", "Informatique de périphérie sur petits sites"],
      customizationOptions: ["Espace de rack utilisable", "Autonomie de batterie", "Capacité de refroidissement"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Un micro data center tout-en-un est-il identique à une armoire serveur avec onduleur ?", answer: "Il va plus loin — au-delà du simple hébergement d'un onduleur dans une armoire, un micro data center tout-en-un intègre l'alimentation, le refroidissement de précision et souvent la détection incendie comme un système unique conçu et testé en usine, plutôt que des composants assemblés sur site." },
      ],
    },
    es: {
      name: "Micro centro de datos todo en uno",
      shortName: "Micro DC todo en uno",
      tagline: "Carcasa única que integra rack, SAI, PDU y refrigeración para los despliegues más pequeños.",
      overview: "El micro centro de datos todo en uno de Wandtung empaqueta espacio de rack de TI, SAI, PDU y refrigeración en una única carcasa autónoma: el paso más pequeño más allá de un armario estándar, adecuado para sitios con solo un puñado de servidores y sin sala de equipos dedicada.",
      keyFeatures: ["Carcasa única autónoma: rack, energía y refrigeración en una unidad", "Huella compacta para espacios sin sala de servidores dedicada", "Detección de incendios integrada", "Integración de fábrica lista para usar"],
      specGroups: [{ title: "Composición del sistema", specs: [{ label: "Espacio de TI", value: "6U – 24U utilizable, según el modelo" }, { label: "Energía", value: "SAI + PDU integrados" }, { label: "Refrigeración", value: "Unidad de refrigeración de precisión integrada" }] }],
      applications: ["Oficinas pequeñas sin sala de servidores", "Sitios minoristas / sucursales", "Cómputo de borde en sitios pequeños"],
      customizationOptions: ["Espacio de rack utilizable", "Autonomía de batería", "Capacidad de refrigeración"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Es un micro centro de datos todo en uno lo mismo que un rack de servidores con SAI?", answer: "Va más allá: más que simplemente alojar un SAI dentro de un armario, un micro centro de datos todo en uno integra energía, refrigeración de precisión y a menudo detección de incendios como un sistema único diseñado y probado en fábrica, en lugar de componentes ensamblados en el sitio." },
      ],
    },
    ru: {
      name: "Универсальный микро-ЦОД «всё в одном»",
      shortName: "Микро-ЦОД «всё в одном»",
      tagline: "Единый корпус, объединяющий стойку, ИБП, PDU и охлаждение для самых малых развёртываний.",
      overview: "Универсальный микро-ЦОД Wandtung «всё в одном» упаковывает пространство ИТ-стойки, ИБП, PDU и охлаждение в единый автономный корпус — минимальный шаг вперёд от стандартного шкафа, подходящий для объектов с всего несколькими серверами и без выделенного помещения для оборудования.",
      keyFeatures: ["Единый автономный корпус — стойка, питание и охлаждение в одном блоке", "Компактные габариты для помещений без выделенной серверной", "Встроенное обнаружение возгорания", "Готовая к работе заводская интеграция"],
      specGroups: [{ title: "Состав системы", specs: [{ label: "ИТ-пространство", value: "6U – 24U полезной площади, в зависимости от модели" }, { label: "Питание", value: "Встроенный ИБП + PDU" }, { label: "Охлаждение", value: "Встроенный блок прецизионного охлаждения" }] }],
      applications: ["Небольшие офисы без серверной", "Розничные / филиальные объекты", "Периферийные вычисления на малых объектах"],
      customizationOptions: ["Полезное пространство стойки", "Время автономной работы батареи", "Мощность охлаждения"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Является ли универсальный микро-ЦОД «всё в одном» тем же самым, что и серверная стойка с ИБП?", answer: "Он идёт дальше — помимо простого размещения ИБП внутри шкафа, универсальный микро-ЦОД «всё в одном» объединяет питание, прецизионное охлаждение и часто обнаружение возгорания как единую систему, спроектированную и протестированную на заводе, а не собранную из компонентов на месте." },
      ],
    },
    zh: {
      name: "一体化微型数据中心",
      shortName: "一体化微型数据中心",
      tagline: "单一机箱集成机架、UPS、PDU及制冷,适用于最小规模部署。",
      overview: "万电通一体化微型数据中心将IT机架空间、UPS、PDU及制冷集成于单一独立机箱中——是标准机柜之上最小的升级方案,适用于仅有少量服务器且无专用设备间的场地。",
      keyFeatures: ["单一独立机箱——机架、电力与制冷合为一体", "占地紧凑,适用于无专用服务器机房的空间", "内置火警探测", "即插即用的工厂集成"],
      specGroups: [{ title: "系统构成", specs: [{ label: "IT空间", value: "6U–24U可用空间,视型号而定" }, { label: "电力", value: "集成UPS+PDU" }, { label: "制冷", value: "集成精密制冷单元" }] }],
      applications: ["无服务器机房的小型办公室", "零售/分支机构场地", "小型场地边缘计算"],
      customizationOptions: ["可用机架空间", "电池续航时间", "制冷容量"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "一体化微型数据中心与带UPS的服务器机柜是一回事吗？", answer: "它更进一步——不仅仅是在机柜内放置UPS,一体化微型数据中心将电力、精密制冷及通常包括的火警探测整合为一套经工厂设计并测试的系统,而非现场组装的独立部件。" },
      ],
    },
  },
  "40ft-container-data-center": {
    ar: {
      name: "مركز بيانات حاوية 40 قدماً",
      shortName: "حاوية DC 40 قدماً",
      tagline: "مركز بيانات متكامل بالكامل من المصنع بحاوية 40 قدماً للنشر السريع وواسع النطاق.",
      overview: "مركز بيانات حاوية 40 قدماً من واندتونغ هو مركز بيانات كامل مبني في المصنع ضمن هيكل حاوية ISO قياسية بطول 40 قدماً، مركّب مسبقاً بخزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد والحماية من الحريق والأمن والمراقبة — مصمم للاتصالات والتعدين والنفط والغاز والحوسبة الطرفية والنشر الطارئ حيث تهم السرعة واستقلالية الموقع.",
      keyFeatures: ["تكامل كامل لتكنولوجيا المعلومات + الطاقة + التبريد داخل حاوية ISO قياسية", "هيكل حاوية معزز ومعزول مصنّف للنشر الخارجي", "خيارات توزيع طاقة وUPS بتكرار", "خيارات تبريد دقيق أو سائل لكثافة أعلى", "نشر سريع — عادة أسابيع من المصنع إلى تشغيل الموقع", "قابل للتوسع — ربط عدة حاويات لسعة أكبر"],
      specGroups: [
        { title: "هيكل الحاوية", specs: [{ label: "حجم الحاوية", value: "40 قدماً ISO قياسية (متوفرة أيضاً بحجم 20 قدماً)" }, { label: "العزل", value: "جدار لوحي معزول حرارياً وصوتياً" }, { label: "تصنيف IP", value: "IP55 (نشر خارجي)" }] },
        { title: "تكنولوجيا المعلومات والطاقة", specs: [{ label: "خزانات تكنولوجيا المعلومات", value: "عدد راكات قابل للتكوين حسب التخطيط" }, { label: "توزيع الطاقة", value: "PDU ذكي، UPS معياري" }, { label: "التبريد", value: "تكييف دقيق أو خيار تبريد سائل" }] },
        { title: "السلامة والمراقبة", specs: [{ label: "الحماية من الحريق", value: "إخماد تلقائي بالغاز" }, { label: "الأمن", value: "تحكم بالوصول، جاهز لكاميرات المراقبة" }, { label: "المراقبة", value: "مراقبة عن بُعد متوافقة مع DCIM" }] },
      ],
      applications: ["توسع شبكات الاتصالات", "مواقع التعدين", "عمليات النفط والغاز النائية", "الحوسبة الطرفية", "مراكز بيانات حكومية / طارئة"],
      customizationOptions: ["عدد الراكات والتخطيط", "تكرار الطاقة", "نوع التبريد", "طلاء خارجي / علامة تجارية"],
      standards: ["مبني وفق الأبعاد الهيكلية القياسية لحاويات ISO", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "حاوية 20 قدماً مقابل 40 قدماً — أيهما أختار؟", answer: "تناسب حاوية 20 قدماً أحمال تكنولوجيا معلومات أصغر أو مواقع طرفية بمساحة محدودة وتحمل عادة عدداً أقل من الراكات، بينما توفر حاوية 40 قدماً مساحة داخلية أكبر تقريباً بالضعف لعدد راكات أعلى، ومحطة طاقة/تبريد أكبر، أو ممرات صيانة يمكن الدخول إليها — يعتمد الاختيار الصحيح على حمل تكنولوجيا المعلومات المستهدف ومساحة الموقع المتاحة." },
        { question: "هل تقدم واندتونغ مراكز بيانات بحاويات؟", answer: "نعم. تصنّع واندتونغ مراكز بيانات بحاويات 20 و40 قدماً متكاملة مسبقاً بخزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد والحماية من الحريق والمراقبة لعمليات النشر في الاتصالات والتعدين والنفط والغاز والحوسبة الطرفية والحكومة." },
        { question: "ما مدى سرعة نشر مركز بيانات بحاوية؟", answer: "نظراً لأن أنظمة تكنولوجيا المعلومات والطاقة والتبريد والسلامة متكاملة ومُختبرة في المصنع، يقتصر العمل في الموقع غالباً على تحضير الأساس وتوصيل الطاقة/الشبكة الخارجية والتشغيل — عادة مسألة أسابيع بدلاً من الأشهر المطلوبة لغرفة بيانات مبنية تقليدياً." },
      ],
    },
    fr: {
      name: "Data center en conteneur 40 pieds",
      shortName: "Conteneur DC 40 pieds",
      tagline: "Data center conteneurisé de 40 pieds entièrement pré-intégré en usine pour un déploiement rapide et à grande échelle.",
      overview: "Le data center en conteneur 40 pieds Wandtung est un data center complet construit en usine dans une coque de conteneur ISO standard de 40 pieds, pré-installé avec armoires informatiques, distribution électrique, onduleur, refroidissement, protection incendie, sécurité et surveillance — conçu pour les télécoms, l'exploitation minière, le pétrole et le gaz, l'informatique de périphérie et le déploiement d'urgence où la vitesse et l'indépendance du site comptent.",
      keyFeatures: ["Intégration complète informatique + alimentation + refroidissement dans un conteneur ISO standard", "Structure de conteneur renforcée et isolée classée pour un déploiement extérieur", "Options de distribution électrique et d'onduleur redondants", "Options de refroidissement de précision ou liquide pour une densité plus élevée", "Déploiement rapide — généralement quelques semaines de l'usine à la mise sous tension sur site", "Évolutif — reliez plusieurs conteneurs pour une capacité plus grande"],
      specGroups: [
        { title: "Structure du conteneur", specs: [{ label: "Taille du conteneur", value: "40 pieds ISO standard (également disponible en 20 pieds)" }, { label: "Isolation", value: "Panneau mural isolé thermiquement et acoustiquement" }, { label: "Indice IP", value: "IP55 (déploiement extérieur)" }] },
        { title: "Informatique et alimentation", specs: [{ label: "Armoires informatiques", value: "Nombre de racks configurable selon la disposition" }, { label: "Distribution électrique", value: "PDU intelligent, onduleur modulaire" }, { label: "Refroidissement", value: "Climatisation de précision ou option de refroidissement liquide" }] },
        { title: "Sécurité et surveillance", specs: [{ label: "Protection incendie", value: "Extinction automatique à gaz" }, { label: "Sécurité", value: "Contrôle d'accès, prêt pour vidéosurveillance" }, { label: "Surveillance", value: "Surveillance à distance compatible DCIM" }] },
      ],
      applications: ["Extension de réseau télécoms", "Sites miniers", "Opérations pétrolières et gazières distantes", "Informatique de périphérie", "Data centers gouvernementaux / d'urgence"],
      customizationOptions: ["Nombre de racks et disposition", "Redondance d'alimentation", "Type de refroidissement", "Peinture extérieure / marquage"],
      standards: ["Construit selon les dimensions structurelles standard des conteneurs ISO", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Conteneur 20 pieds vs 40 pieds — lequel choisir ?", answer: "Un conteneur 20 pieds convient aux charges informatiques plus petites ou aux sites de périphérie avec un espace limité et contient généralement moins de racks, tandis qu'un conteneur 40 pieds offre environ le double de la surface interne pour un nombre de racks plus élevé, une installation d'alimentation/refroidissement plus grande, ou des allées de maintenance praticables — le bon choix dépend de la charge informatique cible et de l'espace disponible sur site." },
        { question: "Wandtung propose-t-il des data centers en conteneur ?", answer: "Oui. Wandtung fabrique des data centers en conteneur 20 et 40 pieds pré-intégrés avec armoires informatiques, distribution électrique, onduleur, refroidissement, protection incendie et surveillance pour les déploiements télécoms, miniers, pétroliers et gaziers, informatiques de périphérie et gouvernementaux." },
        { question: "À quelle vitesse un data center en conteneur peut-il être déployé ?", answer: "Comme les systèmes informatiques, d'alimentation, de refroidissement et de sécurité sont intégrés et testés en usine, le travail sur site se limite en grande partie à la préparation des fondations, au raccordement électrique/réseau externe et à la mise en service — généralement une question de semaines plutôt que les mois nécessaires pour une salle de données construite de manière conventionnelle." },
      ],
    },
    es: {
      name: "Centro de datos en contenedor de 40 pies",
      shortName: "Contenedor DC de 40 pies",
      tagline: "Centro de datos en contenedor de 40 pies totalmente preintegrado en fábrica para un despliegue rápido y a gran escala.",
      overview: "El centro de datos en contenedor de 40 pies de Wandtung es un centro de datos completo construido en fábrica dentro de una carcasa de contenedor ISO estándar de 40 pies, preinstalado con armarios de TI, distribución de energía, SAI, refrigeración, protección contra incendios, seguridad y monitoreo, diseñado para telecomunicaciones, minería, petróleo y gas, computación de borde y despliegue de emergencia donde la velocidad y la independencia del sitio son importantes.",
      keyFeatures: ["Integración completa de TI + energía + refrigeración dentro de un contenedor ISO estándar", "Estructura de contenedor reforzada y aislada clasificada para despliegue exterior", "Opciones de distribución de energía y SAI redundantes", "Opciones de refrigeración de precisión o líquida para mayor densidad", "Despliegue rápido: normalmente semanas desde la fábrica hasta el encendido en el sitio", "Escalable: conecte varios contenedores para mayor capacidad"],
      specGroups: [
        { title: "Estructura del contenedor", specs: [{ label: "Tamaño del contenedor", value: "40 pies ISO estándar (también disponible en 20 pies)" }, { label: "Aislamiento", value: "Panel de pared con aislamiento térmico y acústico" }, { label: "Clasificación IP", value: "IP55 (despliegue exterior)" }] },
        { title: "TI y energía", specs: [{ label: "Armarios de TI", value: "Número de racks configurable según el diseño" }, { label: "Distribución de energía", value: "PDU inteligente, SAI modular" }, { label: "Refrigeración", value: "Aire acondicionado de precisión u opción de refrigeración líquida" }] },
        { title: "Seguridad y monitoreo", specs: [{ label: "Protección contra incendios", value: "Extinción automática a base de gas" }, { label: "Seguridad", value: "Control de acceso, preparado para CCTV" }, { label: "Monitoreo", value: "Monitoreo remoto compatible con DCIM" }] },
      ],
      applications: ["Expansión de red de telecomunicaciones", "Sitios mineros", "Operaciones remotas de petróleo y gas", "Computación de borde", "Centros de datos gubernamentales / de emergencia"],
      customizationOptions: ["Número de racks y diseño", "Redundancia de energía", "Tipo de refrigeración", "Pintura exterior / marca"],
      standards: ["Construido según las dimensiones estructurales estándar de contenedores ISO", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "Contenedor de 20 pies vs 40 pies: ¿cuál debo elegir?", answer: "Un contenedor de 20 pies es adecuado para cargas de TI más pequeñas o sitios de borde con espacio limitado y normalmente alberga menos racks, mientras que un contenedor de 40 pies ofrece aproximadamente el doble de superficie interna para más racks, una planta de energía/refrigeración más grande o pasillos de mantenimiento transitables; la elección correcta depende de la carga de TI objetivo y el espacio disponible en el sitio." },
        { question: "¿Ofrece Wandtung centros de datos en contenedor?", answer: "Sí. Wandtung fabrica centros de datos en contenedor de 20 y 40 pies preintegrados con armarios de TI, distribución de energía, SAI, refrigeración, protección contra incendios y monitoreo para despliegues de telecomunicaciones, minería, petróleo y gas, computación de borde y gobierno." },
        { question: "¿Qué tan rápido se puede desplegar un centro de datos en contenedor?", answer: "Dado que los sistemas de TI, energía, refrigeración y seguridad están integrados y probados en fábrica, el trabajo en el sitio se limita en gran medida a la preparación de cimientos, la conexión eléctrica/de red externa y la puesta en marcha, generalmente cuestión de semanas en lugar de los meses que requiere una sala de datos construida de forma convencional." },
      ],
    },
    ru: {
      name: "Контейнерный ЦОД 40 футов",
      shortName: "Контейнерный ЦОД 40 футов",
      tagline: "Полностью заводской интегрированный 40-футовый контейнерный ЦОД для быстрого крупномасштабного развёртывания.",
      overview: "Контейнерный ЦОД Wandtung 40 футов — это полноценный, изготовленный на заводе ЦОД в корпусе стандартного 40-футового ISO-контейнера, предварительно оснащённый ИТ-шкафами, распределением питания, ИБП, охлаждением, противопожарной защитой, безопасностью и мониторингом — разработан для телекоммуникаций, горнодобывающей отрасли, нефти и газа, периферийных вычислений и аварийного развёртывания, где важны скорость и независимость от объекта.",
      keyFeatures: ["Полная интеграция ИТ + питания + охлаждения внутри стандартного ISO-контейнера", "Усиленная, изолированная конструкция контейнера, рассчитанная на наружное размещение", "Резервируемые варианты распределения питания и ИБП", "Варианты прецизионного или жидкостного охлаждения для более высокой плотности", "Быстрое развёртывание — обычно недели от завода до включения на объекте", "Масштабируемость — объединение нескольких контейнеров для увеличения мощности"],
      specGroups: [
        { title: "Конструкция контейнера", specs: [{ label: "Размер контейнера", value: "Стандартный ISO 40 футов (также доступен 20 футов)" }, { label: "Изоляция", value: "Теплозвукоизолированная панельная стена" }, { label: "Класс защиты IP", value: "IP55 (для наружного размещения)" }] },
        { title: "ИТ и питание", specs: [{ label: "ИТ-шкафы", value: "Количество стоек настраивается по планировке" }, { label: "Распределение питания", value: "Интеллектуальный PDU, модульный ИБП" }, { label: "Охлаждение", value: "Прецизионное кондиционирование или опция жидкостного охлаждения" }] },
        { title: "Безопасность и мониторинг", specs: [{ label: "Противопожарная защита", value: "Автоматическое газовое пожаротушение" }, { label: "Безопасность", value: "Контроль доступа, готовность к видеонаблюдению" }, { label: "Мониторинг", value: "Удалённый мониторинг, совместимый с DCIM" }] },
      ],
      applications: ["Расширение телекоммуникационной сети", "Горнодобывающие объекты", "Удалённые нефтегазовые операции", "Периферийные вычисления", "Государственные / аварийные ЦОД"],
      customizationOptions: ["Количество стоек и планировка", "Резервирование питания", "Тип охлаждения", "Внешняя окраска / брендирование"],
      standards: ["Изготовлен по стандартным конструктивным размерам ISO-контейнеров", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "20-футовый или 40-футовый контейнерный ЦОД — что выбрать?", answer: "20-футовый контейнер подходит для меньших ИТ-нагрузок или периферийных объектов с ограниченным пространством и обычно вмещает меньше стоек, тогда как 40-футовый контейнер предлагает примерно вдвое большую внутреннюю площадь для большего числа стоек, более крупной энергоустановки/охлаждения или проходных технических коридоров — правильный выбор зависит от целевой ИТ-нагрузки и доступного пространства на объекте." },
        { question: "Предлагает ли Wandtung контейнерные ЦОД?", answer: "Да. Wandtung производит 20- и 40-футовые контейнерные ЦОД с предварительно интегрированными ИТ-шкафами, распределением питания, ИБП, охлаждением, противопожарной защитой и мониторингом для развёртываний в телекоммуникациях, горнодобывающей отрасли, нефти и газе, периферийных вычислениях и государственном секторе." },
        { question: "Как быстро можно развернуть контейнерный ЦОД?", answer: "Поскольку ИТ-системы, системы питания, охлаждения и безопасности интегрированы и протестированы на заводе, работа на объекте в основном сводится к подготовке фундамента, подключению внешнего питания/сети и вводу в эксплуатацию — обычно это вопрос недель, а не месяцев, необходимых для традиционно построенного машинного зала." },
      ],
    },
    zh: {
      name: "40英尺集装箱数据中心",
      shortName: "40英尺集装箱数据中心",
      tagline: "全工厂预集成的40英尺集装箱数据中心,实现快速、大规模部署。",
      overview: "万电通40英尺集装箱数据中心是在标准40英尺ISO集装箱箱体内完整出厂建造的数据中心,预装IT机柜、配电、UPS、制冷、消防、安防及监控系统——专为电信、矿业、石油天然气、边缘计算及应急部署等重视速度与场地独立性的场景设计。",
      keyFeatures: ["标准ISO集装箱内实现IT+电力+制冷完整集成", "加固保温箱体结构,可满足户外部署要求", "冗余配电及UPS选项", "可选精密或液冷方案实现更高密度", "快速部署——通常从出厂到现场通电仅需数周", "可扩展——可连接多个集装箱以扩大容量"],
      specGroups: [
        { title: "集装箱结构", specs: [{ label: "集装箱尺寸", value: "40英尺标准ISO(也可选20英尺)" }, { label: "保温", value: "隔热隔音夹芯板墙体" }, { label: "防护等级", value: "IP55(户外部署)" }] },
        { title: "IT与电力", specs: [{ label: "IT机柜", value: "机架数量可按布局配置" }, { label: "配电", value: "智能PDU、模块化UPS" }, { label: "制冷", value: "精密空调或可选液冷方案" }] },
        { title: "安全与监控", specs: [{ label: "消防保护", value: "气体自动灭火" }, { label: "安防", value: "门禁控制,预留CCTV接口" }, { label: "监控", value: "兼容DCIM的远程监控" }] },
      ],
      applications: ["电信网络扩容", "矿业场地", "石油天然气偏远作业", "边缘计算", "政府/应急数据中心"],
      customizationOptions: ["机架数量及布局", "电力冗余", "制冷方式", "外部涂装/品牌定制"],
      standards: ["按标准ISO集装箱结构尺寸建造", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "20英尺与40英尺集装箱数据中心该如何选择？", answer: "20英尺集装箱适用于较小IT负载或空间有限的边缘场地,通常容纳较少机架;而40英尺集装箱内部空间约为其两倍,可容纳更多机架、更大的电力/制冷设备,或提供可走入式维护通道——具体选择取决于目标IT负载及现场可用空间。" },
        { question: "万电通是否提供集装箱数据中心？", answer: "是的。万电通为电信、矿业、石油天然气、边缘计算及政府部署制造20英尺和40英尺集装箱数据中心,预集成IT机柜、配电、UPS、制冷、消防及监控系统。" },
        { question: "集装箱数据中心的部署速度有多快？", answer: "由于IT、电力、制冷及安全系统均已在工厂完成集成与测试,现场工作主要限于基础准备、外部电力/网络接入及调试——通常只需数周,而非传统建造机房所需的数月时间。" },
      ],
    },
  },
  "20ft-container-data-center": {
    ar: {
      name: "مركز بيانات حاوية 20 قدماً",
      shortName: "حاوية DC 20 قدماً",
      tagline: "مركز بيانات بحاوية مدمج بهيكل ISO 20 قدماً للمواقع الأصغر أو محدودة المساحة.",
      overview: "يعبّئ مركز بيانات حاوية 20 قدماً من واندتونغ خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد والحماية من الحريق والمراقبة في حاوية ISO قياسية بطول 20 قدماً — مساحة أصغر من خيار 40 قدماً، مناسبة للمواقع محدودة المساحة أو أحمال تكنولوجيا المعلومات الأصغر أو عمليات النشر الطرفية حيث لا تبرر وحدة 40 قدماً الكاملة.",
      keyFeatures: ["تكامل كامل لتكنولوجيا المعلومات + الطاقة + التبريد بمساحة مدمجة 20 قدماً", "هيكل حاوية معزز ومعزول مصنّف للنشر الخارجي", "لوجستيات رفع/نقل أسرع من وحدة 40 قدماً في المواقع الضيقة", "قابل للتوسع — نشر حاويات إضافية مع نمو الحمل"],
      specGroups: [
        { title: "هيكل الحاوية", specs: [{ label: "حجم الحاوية", value: "20 قدماً ISO قياسية" }, { label: "العزل", value: "جدار لوحي معزول حرارياً وصوتياً" }, { label: "تصنيف IP", value: "IP55 (نشر خارجي)" }] },
        { title: "تكنولوجيا المعلومات والطاقة", specs: [{ label: "خزانات تكنولوجيا المعلومات", value: "عدد راكات قابل للتكوين حسب التخطيط" }, { label: "توزيع الطاقة", value: "PDU ذكي، UPS بتركيب راك أو معياري" }, { label: "التبريد", value: "تكييف دقيق" }] },
      ],
      applications: ["الحوسبة الطرفية", "مواقع اتصالات محدودة المساحة", "مواقع تعدين/نفط وغاز صغيرة إلى متوسطة"],
      customizationOptions: ["عدد الراكات والتخطيط", "تكرار الطاقة", "نوع التبريد"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "حاوية 20 قدماً مقابل 40 قدماً — أيهما أختار؟", answer: "تناسب حاوية 20 قدماً أحمال تكنولوجيا معلومات أصغر أو مواقع طرفية بمساحة محدودة وتحمل عادة عدداً أقل من الراكات، بينما توفر حاوية 40 قدماً مساحة داخلية أكبر تقريباً بالضعف لعدد راكات أعلى، ومحطة طاقة/تبريد أكبر، أو ممرات صيانة يمكن الدخول إليها — يعتمد الاختيار الصحيح على حمل تكنولوجيا المعلومات المستهدف ومساحة الموقع المتاحة." },
      ],
    },
    fr: {
      name: "Data center en conteneur 20 pieds",
      shortName: "Conteneur DC 20 pieds",
      tagline: "Data center conteneurisé compact dans une coque ISO de 20 pieds pour les sites plus petits ou à espace restreint.",
      overview: "Le data center en conteneur 20 pieds Wandtung regroupe armoires informatiques, distribution électrique, onduleur, refroidissement, protection incendie et surveillance dans un conteneur ISO standard de 20 pieds — un encombrement plus petit que l'option 40 pieds, adapté aux sites à espace restreint, aux charges informatiques plus petites, ou aux déploiements de périphérie où une unité complète de 40 pieds n'est pas justifiée.",
      keyFeatures: ["Intégration complète informatique + alimentation + refroidissement dans un encombrement compact de 20 pieds", "Structure de conteneur renforcée et isolée classée pour un déploiement extérieur", "Logistique de grue/transport plus rapide qu'une unité 40 pieds sur les sites exigus", "Évolutif — déployez des conteneurs supplémentaires à mesure que la charge augmente"],
      specGroups: [
        { title: "Structure du conteneur", specs: [{ label: "Taille du conteneur", value: "20 pieds ISO standard" }, { label: "Isolation", value: "Panneau mural isolé thermiquement et acoustiquement" }, { label: "Indice IP", value: "IP55 (déploiement extérieur)" }] },
        { title: "Informatique et alimentation", specs: [{ label: "Armoires informatiques", value: "Nombre de racks configurable selon la disposition" }, { label: "Distribution électrique", value: "PDU intelligent, onduleur en rack ou modulaire" }, { label: "Refroidissement", value: "Climatisation de précision" }] },
      ],
      applications: ["Informatique de périphérie", "Sites télécoms à espace restreint", "Sites miniers/pétroliers et gaziers petits à moyens"],
      customizationOptions: ["Nombre de racks et disposition", "Redondance d'alimentation", "Type de refroidissement"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Conteneur 20 pieds vs 40 pieds — lequel choisir ?", answer: "Un conteneur 20 pieds convient aux charges informatiques plus petites ou aux sites de périphérie avec un espace limité et contient généralement moins de racks, tandis qu'un conteneur 40 pieds offre environ le double de la surface interne pour un nombre de racks plus élevé, une installation d'alimentation/refroidissement plus grande, ou des allées de maintenance praticables — le bon choix dépend de la charge informatique cible et de l'espace disponible sur site." },
      ],
    },
    es: {
      name: "Centro de datos en contenedor de 20 pies",
      shortName: "Contenedor DC de 20 pies",
      tagline: "Centro de datos en contenedor compacto en una carcasa ISO de 20 pies para sitios más pequeños o con espacio limitado.",
      overview: "El centro de datos en contenedor de 20 pies de Wandtung empaqueta armarios de TI, distribución de energía, SAI, refrigeración, protección contra incendios y monitoreo en un contenedor ISO estándar de 20 pies: una huella más pequeña que la opción de 40 pies, adecuada para sitios con espacio limitado, cargas de TI más pequeñas o despliegues de borde donde una unidad completa de 40 pies no está justificada.",
      keyFeatures: ["Integración completa de TI + energía + refrigeración en una huella compacta de 20 pies", "Estructura de contenedor reforzada y aislada clasificada para despliegue exterior", "Logística de grúa/transporte más rápida que una unidad de 40 pies en sitios reducidos", "Escalable: despliegue contenedores adicionales a medida que crece la carga"],
      specGroups: [
        { title: "Estructura del contenedor", specs: [{ label: "Tamaño del contenedor", value: "20 pies ISO estándar" }, { label: "Aislamiento", value: "Panel de pared con aislamiento térmico y acústico" }, { label: "Clasificación IP", value: "IP55 (despliegue exterior)" }] },
        { title: "TI y energía", specs: [{ label: "Armarios de TI", value: "Número de racks configurable según el diseño" }, { label: "Distribución de energía", value: "PDU inteligente, SAI de rack o modular" }, { label: "Refrigeración", value: "Aire acondicionado de precisión" }] },
      ],
      applications: ["Computación de borde", "Sitios de telecomunicaciones con espacio limitado", "Sitios mineros/de petróleo y gas de pequeño a mediano tamaño"],
      customizationOptions: ["Número de racks y diseño", "Redundancia de energía", "Tipo de refrigeración"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "Contenedor de 20 pies vs 40 pies: ¿cuál debo elegir?", answer: "Un contenedor de 20 pies es adecuado para cargas de TI más pequeñas o sitios de borde con espacio limitado y normalmente alberga menos racks, mientras que un contenedor de 40 pies ofrece aproximadamente el doble de superficie interna para más racks, una planta de energía/refrigeración más grande o pasillos de mantenimiento transitables; la elección correcta depende de la carga de TI objetivo y el espacio disponible en el sitio." },
      ],
    },
    ru: {
      name: "Контейнерный ЦОД 20 футов",
      shortName: "Контейнерный ЦОД 20 футов",
      tagline: "Компактный контейнерный ЦОД в 20-футовом ISO-корпусе для небольших или ограниченных по площади объектов.",
      overview: "Контейнерный ЦОД Wandtung 20 футов объединяет ИТ-шкафы, распределение питания, ИБП, охлаждение, противопожарную защиту и мониторинг в стандартном 20-футовом ISO-контейнере — меньшая площадь, чем у 40-футового варианта, подходящая для объектов с ограниченным пространством, меньших ИТ-нагрузок или периферийных развёртываний, где полноценный 40-футовый блок не оправдан.",
      keyFeatures: ["Полная интеграция ИТ + питания + охлаждения на компактной площади 20 футов", "Усиленная, изолированная конструкция контейнера, рассчитанная на наружное размещение", "Более быстрая логистика крана/перевозки, чем у 40-футового блока на стеснённых объектах", "Масштабируемость — развёртывание дополнительных контейнеров по мере роста нагрузки"],
      specGroups: [
        { title: "Конструкция контейнера", specs: [{ label: "Размер контейнера", value: "Стандартный ISO 20 футов" }, { label: "Изоляция", value: "Теплозвукоизолированная панельная стена" }, { label: "Класс защиты IP", value: "IP55 (для наружного размещения)" }] },
        { title: "ИТ и питание", specs: [{ label: "ИТ-шкафы", value: "Количество стоек настраивается по планировке" }, { label: "Распределение питания", value: "Интеллектуальный PDU, стоечный или модульный ИБП" }, { label: "Охлаждение", value: "Прецизионное кондиционирование" }] },
      ],
      applications: ["Периферийные вычисления", "Телекоммуникационные объекты с ограниченным пространством", "Малые и средние горнодобывающие/нефтегазовые объекты"],
      customizationOptions: ["Количество стоек и планировка", "Резервирование питания", "Тип охлаждения"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "20-футовый или 40-футовый контейнерный ЦОД — что выбрать?", answer: "20-футовый контейнер подходит для меньших ИТ-нагрузок или периферийных объектов с ограниченным пространством и обычно вмещает меньше стоек, тогда как 40-футовый контейнер предлагает примерно вдвое большую внутреннюю площадь для большего числа стоек, более крупной энергоустановки/охлаждения или проходных технических коридоров — правильный выбор зависит от целевой ИТ-нагрузки и доступного пространства на объекте." },
      ],
    },
    zh: {
      name: "20英尺集装箱数据中心",
      shortName: "20英尺集装箱数据中心",
      tagline: "采用20英尺ISO箱体的紧凑型集装箱数据中心,适用于较小或空间受限场地。",
      overview: "万电通20英尺集装箱数据中心将IT机柜、配电、UPS、制冷、消防及监控集成于标准20英尺ISO集装箱内——相比40英尺方案占地更小,适用于空间受限场地、较小IT负载或不需要完整40英尺方案的边缘部署场景。",
      keyFeatures: ["20英尺紧凑空间内实现IT+电力+制冷完整集成", "加固保温箱体结构,可满足户外部署要求", "在场地狭窄区域相比40英尺方案吊装/运输更快捷", "可扩展——随负载增长部署更多集装箱"],
      specGroups: [
        { title: "集装箱结构", specs: [{ label: "集装箱尺寸", value: "20英尺标准ISO" }, { label: "保温", value: "隔热隔音夹芯板墙体" }, { label: "防护等级", value: "IP55(户外部署)" }] },
        { title: "IT与电力", specs: [{ label: "IT机柜", value: "机架数量可按布局配置" }, { label: "配电", value: "智能PDU、机架式或模块化UPS" }, { label: "制冷", value: "精密空调" }] },
      ],
      applications: ["边缘计算", "空间受限的电信场地", "中小型矿业/石油天然气场地"],
      customizationOptions: ["机架数量及布局", "电力冗余", "制冷方式"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "20英尺与40英尺集装箱数据中心该如何选择？", answer: "20英尺集装箱适用于较小IT负载或空间有限的边缘场地,通常容纳较少机架;而40英尺集装箱内部空间约为其两倍,可容纳更多机架、更大的电力/制冷设备,或提供可走入式维护通道——具体选择取决于目标IT负载及现场可用空间。" },
      ],
    },
  },
  "modular-container-data-center": {
    ar: {
      name: "مركز بيانات حاويات معياري",
      shortName: "حاويات DC معيارية",
      tagline: "عدة حاويات مترابطة توسع السعة إلى ما هو أبعد من وحدة واحدة.",
      overview: "يربط مركز بيانات الحاويات المعياري من واندتونغ عدة وحدات حاويات 20 أو 40 قدماً — وحدات تكنولوجيا معلومات وطاقة وتبريد — في منشأة أكبر ومنسقة، ما يسمح للسعة بالتوسع إلى ما هو أبعد مما تحمله حاوية واحدة مع الحفاظ على نموذج النشر السريع المبني في المصنع للبنية التحتية بالحاويات.",
      keyFeatures: ["عدة وحدات حاويات مترابطة لسعة أكبر", "وحدات طاقة/تبريد مخصصة أو مشتركة عبر المجموعة", "نشر على مراحل — إضافة وحدات حاويات مع نمو الحمل", "مراقبة موحدة عبر جميع الوحدات المتصلة"],
      specGroups: [{ title: "النظام", specs: [{ label: "التكوين", value: "عدة وحدات 20/40 قدماً، مترابطة" }, { label: "الطاقة والتبريد", value: "مخصصة لكل وحدة أو محطة مركزية مشتركة" }, { label: "المراقبة", value: "مراقبة موحدة متوافقة مع DCIM عبر الوحدات" }] }],
      applications: ["شبكات اتصالات/طرفية نامية", "مشاريع مواقع نائية متعددة المراحل", "عمليات نشر مؤقتة/طارئة كبيرة"],
      customizationOptions: ["عدد وحجم الوحدات", "طاقة/تبريد مشترك مقابل مخصص", "تخطيط الترابط"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل يمكن إضافة سعة لاحقاً إلى مركز بيانات الحاويات المعياري؟", answer: "نعم — يمكن إضافة وحدات حاويات إضافية وربطها بالنشر الحالي مع نمو حمل تكنولوجيا المعلومات، ما يتجنب الحاجة لتحديد حجم وبناء منشأة كبيرة واحدة منذ اليوم الأول." },
      ],
    },
    fr: {
      name: "Data center en conteneurs modulaires",
      shortName: "Conteneurs DC modulaires",
      tagline: "Plusieurs conteneurs interconnectés évoluant vers une capacité supérieure à celle d'une seule unité.",
      overview: "Le data center en conteneurs modulaires Wandtung relie plusieurs modules conteneurs de 20 ou 40 pieds — unités informatiques, d'alimentation et de refroidissement — en une installation plus grande et coordonnée, permettant à la capacité d'évoluer au-delà de ce qu'un seul conteneur peut contenir tout en conservant le modèle de déploiement rapide construit en usine de l'infrastructure conteneurisée.",
      keyFeatures: ["Plusieurs modules conteneurs interconnectés pour une capacité plus grande", "Modules d'alimentation/refroidissement dédiés ou partagés à travers le groupe", "Déploiement par phases — ajoutez des modules conteneurs à mesure que la charge augmente", "Surveillance unifiée sur tous les modules connectés"],
      specGroups: [{ title: "Système", specs: [{ label: "Configuration", value: "Plusieurs modules 20/40 pieds, interconnectés" }, { label: "Alimentation et refroidissement", value: "Dédiés par module ou installation centrale partagée" }, { label: "Surveillance", value: "Surveillance unifiée compatible DCIM sur tous les modules" }] }],
      applications: ["Réseaux télécoms/périphérie en croissance", "Constructions de sites distants en plusieurs phases", "Grands déploiements temporaires/d'urgence"],
      customizationOptions: ["Nombre et taille des modules", "Alimentation/refroidissement partagé vs. dédié", "Disposition d'interconnexion"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Peut-on ajouter de la capacité ultérieurement à un data center en conteneurs modulaires ?", answer: "Oui — des modules conteneurs supplémentaires peuvent être ajoutés et interconnectés au déploiement existant à mesure que la charge informatique augmente, évitant ainsi la nécessité de dimensionner et construire une seule grande installation dès le premier jour." },
      ],
    },
    es: {
      name: "Centro de datos en contenedores modulares",
      shortName: "Contenedores DC modulares",
      tagline: "Varios contenedores interconectados que escalan a una capacidad mayor que una sola unidad.",
      overview: "El centro de datos en contenedores modulares de Wandtung conecta varios módulos contenedores de 20 o 40 pies (unidades de TI, energía y refrigeración) en una instalación más grande y coordinada, permitiendo que la capacidad escale más allá de lo que puede contener un solo contenedor, manteniendo el modelo de despliegue rápido construido en fábrica de la infraestructura en contenedores.",
      keyFeatures: ["Varios módulos contenedores interconectados para mayor capacidad", "Módulos de energía/refrigeración dedicados o compartidos en todo el grupo", "Despliegue por fases: añada módulos contenedores a medida que crece la carga", "Monitoreo unificado en todos los módulos conectados"],
      specGroups: [{ title: "Sistema", specs: [{ label: "Configuración", value: "Varios módulos de 20/40 pies, interconectados" }, { label: "Energía y refrigeración", value: "Dedicados por módulo o planta central compartida" }, { label: "Monitoreo", value: "Monitoreo unificado compatible con DCIM en todos los módulos" }] }],
      applications: ["Redes de telecomunicaciones/borde en crecimiento", "Construcciones de sitios remotos en varias fases", "Grandes despliegues temporales/de emergencia"],
      customizationOptions: ["Número y tamaño de módulos", "Energía/refrigeración compartida vs. dedicada", "Diseño de interconexión"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Se puede añadir capacidad más adelante a un centro de datos en contenedores modulares?", answer: "Sí: se pueden añadir e interconectar módulos contenedores adicionales al despliegue existente a medida que crece la carga de TI, evitando la necesidad de dimensionar y construir una única instalación grande desde el primer día." },
      ],
    },
    ru: {
      name: "Модульный контейнерный ЦОД",
      shortName: "Модульные контейнеры ЦОД",
      tagline: "Несколько взаимосвязанных контейнеров, наращивающих мощность сверх возможностей одного блока.",
      overview: "Модульный контейнерный ЦОД Wandtung объединяет несколько 20- или 40-футовых контейнерных модулей — ИТ, питания и охлаждения — в более крупный скоординированный объект, позволяя мощности расти сверх возможностей одного контейнера, сохраняя при этом заводскую модель быстрого развёртывания контейнерной инфраструктуры.",
      keyFeatures: ["Несколько взаимосвязанных контейнерных модулей для большей мощности", "Выделенные или совместно используемые модули питания/охлаждения в рамках группы", "Поэтапное развёртывание — добавление контейнерных модулей по мере роста нагрузки", "Единый мониторинг всех подключённых модулей"],
      specGroups: [{ title: "Система", specs: [{ label: "Конфигурация", value: "Несколько взаимосвязанных модулей 20/40 футов" }, { label: "Питание и охлаждение", value: "Выделенные для каждого модуля или общая центральная установка" }, { label: "Мониторинг", value: "Единый мониторинг, совместимый с DCIM, для всех модулей" }] }],
      applications: ["Растущие телекоммуникационные/периферийные сети", "Многофазное строительство удалённых объектов", "Крупные временные/аварийные развёртывания"],
      customizationOptions: ["Количество и размер модулей", "Общее или выделенное питание/охлаждение", "Схема взаимного подключения"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Можно ли позже добавить мощность к модульному контейнерному ЦОД?", answer: "Да — дополнительные контейнерные модули можно добавлять и подключать к существующему развёртыванию по мере роста ИТ-нагрузки, избегая необходимости проектировать и строить один крупный объект с самого начала." },
      ],
    },
    zh: {
      name: "模块化集装箱数据中心",
      shortName: "模块化集装箱数据中心",
      tagline: "多个互联集装箱模块,实现超越单一箱体的容量扩展。",
      overview: "万电通模块化集装箱数据中心将多个20英尺或40英尺集装箱模块(IT、电力及制冷单元)互联为一个更大、协调统一的设施,使容量可扩展至超出单一集装箱的承载能力,同时保留集装箱基础设施出厂建造、快速部署的特点。",
      keyFeatures: ["多个互联集装箱模块,实现更大容量", "模块间可共享或独立配置电力/制冷单元", "分阶段部署——随负载增长增加集装箱模块", "所有互联模块统一集中监控"],
      specGroups: [{ title: "系统", specs: [{ label: "配置", value: "多个20/40英尺互联模块" }, { label: "电力与制冷", value: "按模块独立配置或共享中央设备" }, { label: "监控", value: "跨模块统一的兼容DCIM监控" }] }],
      applications: ["持续增长的电信/边缘网络", "多阶段偏远场地建设", "大型临时/应急部署"],
      customizationOptions: ["模块数量及规格", "共享或独立电力/制冷", "互联布局"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "模块化集装箱数据中心后期能否增加容量？", answer: "可以——随着IT负载增长,可添加额外的集装箱模块并与现有部署互联,无需在初期就规划并建造单一大型设施。" },
      ],
    },
  },
  "edge-data-center": {
    ar: {
      name: "مركز بيانات طرفي",
      shortName: "مركز بيانات طرفي",
      tagline: "مركز بيانات مدمج مبني في المصنع للحوسبة المنشورة قرب حافة الشبكة.",
      overview: "مركز البيانات الطرفي من واندتونغ هو وحدة بحاوية أو وحدة صغيرة مدمجة مصممة خصيصاً لمواقع الحوسبة الطرفية — مساحة صغيرة، مراقبة عن بُعد/غير مأهولة، وطاقة مرنة بحجم مناسب للمواقع التي لا يوجد بها مرفق مركز بيانات تقليدي قريب.",
      keyFeatures: ["مساحة مدمجة للمواقع الطرفية محدودة المساحة", "مراقبة عن بُعد وغير مأهولة للتشغيل بدون إشراف", "تصميم طاقة UPS وPDU ذكي مرن", "نشر سريع من المصنع إلى الموقع"],
      specGroups: [{ title: "النظام", specs: [{ label: "الشكل", value: "حاوية 20 قدماً أو وحدة صغيرة" }, { label: "الطاقة", value: "UPS + PDU ذكي، تبديل عن بُعد" }, { label: "المراقبة", value: "مراقبة كاملة عن بُعد للمواقع غير المأهولة" }] }],
      applications: ["عقد CDN / الحوسبة الطرفية", "مواقع محطات الاتصالات الأساسية", "مواقع طرفية للتجزئة والصناعة"],
      customizationOptions: ["الشكل", "سعة تكنولوجيا المعلومات", "حزمة المراقبة"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "كيف يختلف مركز البيانات الطرفي عن مركز البيانات بالحاوية؟", answer: "تُعطي مراكز البيانات الطرفية الأولوية للمساحة المدمجة والتشغيل عن بُعد/غير المأهول للمواقع الموزعة، بينما تُحجَّم مراكز البيانات الأكبر بالحاويات عادة لسعة أكثر استقلالية في موقع نائي واحد — تُستخدم حاويات واندتونغ 20 قدماً والوحدات الصغيرة كلبنات بناء لعمليات النشر الطرفية." },
      ],
    },
    fr: {
      name: "Data center de périphérie",
      shortName: "Data center de périphérie",
      tagline: "Data center compact construit en usine pour le calcul déployé près de la périphérie du réseau.",
      overview: "Le data center de périphérie Wandtung est une unité conteneurisée ou micro-modulaire compacte spécialement conçue pour les sites de calcul en périphérie — encombrement réduit, surveillance à distance/non surveillée, et alimentation résiliente dimensionnée pour les emplacements sans installation de data center traditionnelle à proximité.",
      keyFeatures: ["Encombrement compact pour les sites de périphérie contraints", "Surveillance à distance, non surveillée pour un fonctionnement en mode lights-out", "Conception d'alimentation résiliente avec onduleur et PDU intelligent", "Déploiement rapide de l'usine au site"],
      specGroups: [{ title: "Système", specs: [{ label: "Facteur de forme", value: "Conteneur 20 pieds ou micro-module" }, { label: "Alimentation", value: "Onduleur + PDU intelligent, commutation à distance" }, { label: "Surveillance", value: "Surveillance à distance complète pour sites non surveillés" }] }],
      applications: ["Nœuds CDN / de calcul en périphérie", "Sites de stations de base télécoms", "Emplacements de périphérie de détail et industriels"],
      customizationOptions: ["Facteur de forme", "Capacité informatique", "Package de surveillance"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "En quoi un data center de périphérie diffère-t-il d'un data center conteneurisé ?", answer: "Les data centers de périphérie privilégient l'encombrement compact et le fonctionnement à distance/non surveillé pour les sites distribués, tandis que les data centers conteneurisés plus grands sont généralement dimensionnés pour une capacité plus autonome dans un seul emplacement distant — les conteneurs 20 pieds et micro-modules de Wandtung servent de blocs de construction pour les déploiements en périphérie." },
      ],
    },
    es: {
      name: "Centro de datos de borde",
      shortName: "Centro de datos de borde",
      tagline: "Centro de datos compacto construido en fábrica para cómputo desplegado cerca del borde de la red.",
      overview: "El centro de datos de borde de Wandtung es una unidad en contenedor o micro modular compacta diseñada específicamente para sitios de computación de borde: huella pequeña, monitoreo remoto/no atendido y energía resiliente dimensionada para ubicaciones sin una instalación de centro de datos tradicional cerca.",
      keyFeatures: ["Huella compacta para sitios de borde con restricciones", "Monitoreo remoto y no atendido para operación desatendida", "Diseño de energía resiliente con SAI y PDU inteligente", "Despliegue rápido de fábrica al sitio"],
      specGroups: [{ title: "Sistema", specs: [{ label: "Factor de forma", value: "Contenedor de 20 pies o micro módulo" }, { label: "Energía", value: "SAI + PDU inteligente, conmutación remota" }, { label: "Monitoreo", value: "Monitoreo remoto completo para sitios no atendidos" }] }],
      applications: ["Nodos CDN / de cómputo de borde", "Sitios de estaciones base de telecomunicaciones", "Ubicaciones de borde minoristas e industriales"],
      customizationOptions: ["Factor de forma", "Capacidad de TI", "Paquete de monitoreo"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿En qué se diferencia un centro de datos de borde de uno en contenedor?", answer: "Los centros de datos de borde priorizan la huella compacta y la operación remota/no atendida para sitios distribuidos, mientras que los centros de datos en contenedor más grandes suelen dimensionarse para una capacidad más autónoma en una sola ubicación remota; los contenedores de 20 pies y micro módulos de Wandtung sirven como bloques de construcción para los despliegues de borde." },
      ],
    },
    ru: {
      name: "Периферийный ЦОД",
      shortName: "Периферийный ЦОД",
      tagline: "Компактный, изготовленный на заводе ЦОД для вычислений, развёрнутых вблизи границы сети.",
      overview: "Периферийный ЦОД Wandtung — это компактный контейнерный или микромодульный блок, специально созданный для объектов периферийных вычислений — малые габариты, удалённый/необслуживаемый мониторинг и отказоустойчивое питание, рассчитанное на места без традиционного объекта ЦОД поблизости.",
      keyFeatures: ["Компактные габариты для ограниченных периферийных объектов", "Удалённый, необслуживаемый мониторинг для работы без персонала", "Отказоустойчивая конструкция питания с ИБП и интеллектуальным PDU", "Быстрое развёртывание от завода до объекта"],
      specGroups: [{ title: "Система", specs: [{ label: "Форм-фактор", value: "20-футовый контейнер или микромодуль" }, { label: "Питание", value: "ИБП + интеллектуальный PDU, удалённое переключение" }, { label: "Мониторинг", value: "Полный удалённый мониторинг для необслуживаемых объектов" }] }],
      applications: ["Узлы CDN / периферийных вычислений", "Объекты базовых станций телекоммуникаций", "Периферийные объекты розничной торговли и промышленности"],
      customizationOptions: ["Форм-фактор", "ИТ-мощность", "Пакет мониторинга"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Чем периферийный ЦОД отличается от контейнерного?", answer: "Периферийные ЦОД делают приоритетом компактные габариты и удалённую/необслуживаемую работу для распределённых объектов, тогда как более крупные контейнерные ЦОД обычно рассчитаны на более автономную мощность в одном удалённом месте — 20-футовые контейнеры и микромодули Wandtung служат строительными блоками для периферийных развёртываний." },
      ],
    },
    zh: {
      name: "边缘数据中心",
      shortName: "边缘数据中心",
      tagline: "面向网络边缘部署计算需求的紧凑型工厂建造数据中心。",
      overview: "万电通边缘数据中心是专为边缘计算场地打造的紧凑型集装箱或微模块单元——占地小、支持远程/无人值守监控,并配备适合附近无传统数据中心设施场地的可靠电力方案。",
      keyFeatures: ["紧凑占地,适应受限边缘场地", "远程无人值守监控,实现无人值守运行", "可靠的UPS及智能PDU电力设计", "从工厂到现场的快速部署"],
      specGroups: [{ title: "系统", specs: [{ label: "形态", value: "20英尺集装箱或微模块" }, { label: "电力", value: "UPS+智能PDU,远程切换" }, { label: "监控", value: "面向无人值守场地的完整远程监控" }] }],
      applications: ["CDN/边缘计算节点", "电信基站站点", "零售及工业边缘场地"],
      customizationOptions: ["形态", "IT容量", "监控套件"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "边缘数据中心与集装箱数据中心有何区别？", answer: "边缘数据中心优先考虑紧凑占地及分布式场地的远程/无人值守运行,而更大型的集装箱数据中心通常按单一偏远场地更自主的容量进行规划——万电通的20英尺集装箱及微模块可作为边缘部署的构建单元。" },
      ],
    },
  },
  "precision-air-conditioner": {
    ar: {
      name: "مكيف هواء دقيق",
      shortName: "مكيف دقيق",
      tagline: "تبريد دقيق محكم التحكم لغرف معدات مركز البيانات والاتصالات.",
      overview: "يوفر مكيف الهواء الدقيق من واندتونغ تحكماً محكماً بدرجة الحرارة والرطوبة لقاعات البيانات وغرف الاتصالات، مع توزيع هواء بتدفق سفلي أو علوي وسعات تناسب غرف المعدات الصغيرة وحتى المساحة البيضاء الكبيرة لمركز البيانات.",
      keyFeatures: ["تحكم دقيق بدرجة الحرارة والرطوبة", "خيارات توزيع هواء بتدفق سفلي / علوي", "مراوح EC متغيرة السرعة لكفاءة الطاقة", "تكامل مراقبة عن بُعد وإنذارات"],
      specGroups: [{ title: "الأداء", specs: [{ label: "سعة التبريد", value: "7 كيلوواط – 150 كيلوواط لكل وحدة" }, { label: "توزيع الهواء", value: "تدفق سفلي / علوي" }, { label: "التحكم بالرطوبة", value: "±5% رطوبة نسبية" }] }],
      applications: ["المساحة البيضاء لمركز البيانات", "غرف معدات الاتصالات", "غرف التحكم"],
      customizationOptions: ["السعة", "اتجاه توزيع الهواء", "نوع المبرد"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هو مكيف الهواء الدقيق؟", answer: "مكيف الهواء الدقيق (محكم التحكم) مصمم خصيصاً لبيئات تكنولوجيا المعلومات، ويوفر تحكماً أدق بدرجة الحرارة والرطوبة، وتدفق هواء أعلى لكل طن، وتشغيلاً مستمراً مقارنة بأنظمة تكييف الراحة." },
      ],
    },
    fr: {
      name: "Climatiseur de précision",
      shortName: "Climatiseur de précision",
      tagline: "Refroidissement de précision à contrôle serré pour les salles d'équipements de centres de données et télécoms.",
      overview: "Le climatiseur de précision Wandtung offre un contrôle serré de la température et de l'humidité pour les salles informatiques et locaux télécoms, avec une distribution d'air descendante ou ascendante et des capacités adaptées des petites salles d'équipement aux grands espaces blancs de centres de données.",
      keyFeatures: ["Contrôle précis de la température et de l'humidité", "Options de distribution d'air descendante / ascendante", "Ventilateurs EC à vitesse variable pour l'efficacité énergétique", "Intégration de surveillance et d'alarme à distance"],
      specGroups: [{ title: "Performance", specs: [{ label: "Capacité de refroidissement", value: "7 kW – 150 kW par unité" }, { label: "Distribution d'air", value: "Descendante / Ascendante" }, { label: "Contrôle de l'humidité", value: "±5% HR" }] }],
      applications: ["Espace blanc de centre de données", "Salles d'équipements télécoms", "Salles de contrôle"],
      customizationOptions: ["Capacité", "Direction de distribution d'air", "Type de fluide frigorigène"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce qu'un climatiseur de précision ?", answer: "Un climatiseur de précision (à contrôle serré) est spécialement conçu pour les environnements informatiques, offrant un contrôle plus précis de la température et de l'humidité, un débit d'air plus élevé par tonne et un fonctionnement en cycle continu par rapport aux systèmes de climatisation de confort." },
      ],
    },
    es: {
      name: "Aire acondicionado de precisión",
      shortName: "AC de precisión",
      tagline: "Refrigeración de precisión de control estricto para salas de equipos de centros de datos y telecomunicaciones.",
      overview: "El aire acondicionado de precisión de Wandtung proporciona un control estricto de la temperatura y la humedad para salas de datos y salas de telecomunicaciones, con distribución de aire de flujo descendente o ascendente y capacidades adecuadas desde pequeñas salas de equipos hasta grandes espacios blancos de centros de datos.",
      keyFeatures: ["Control preciso de temperatura y humedad", "Opciones de distribución de aire de flujo descendente / ascendente", "Ventiladores EC de velocidad variable para eficiencia energética", "Integración de monitoreo remoto y alarmas"],
      specGroups: [{ title: "Rendimiento", specs: [{ label: "Capacidad de refrigeración", value: "7 kW – 150 kW por unidad" }, { label: "Distribución de aire", value: "Flujo descendente / ascendente" }, { label: "Control de humedad", value: "±5% HR" }] }],
      applications: ["Espacio blanco de centro de datos", "Salas de equipos de telecomunicaciones", "Salas de control"],
      customizationOptions: ["Capacidad", "Dirección de distribución de aire", "Tipo de refrigerante"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es un aire acondicionado de precisión?", answer: "Un aire acondicionado de precisión (de control estricto) está diseñado específicamente para entornos de TI, proporcionando un control más estricto de temperatura y humedad, mayor flujo de aire por tonelada y funcionamiento en ciclo continuo en comparación con los sistemas de aire acondicionado de confort." },
      ],
    },
    ru: {
      name: "Прецизионный кондиционер",
      shortName: "Прецизионный кондиционер",
      tagline: "Прецизионное охлаждение с жёстким контролем для машинных залов ЦОД и телекоммуникационных помещений.",
      overview: "Прецизионный кондиционер Wandtung обеспечивает точный контроль температуры и влажности для машинных залов и телекоммуникационных помещений, с нижней или верхней раздачей воздуха и мощностью, подходящей от небольших технических помещений до крупных машинных залов ЦОД.",
      keyFeatures: ["Точный контроль температуры и влажности", "Варианты раздачи воздуха: нижняя / верхняя", "Вентиляторы EC с переменной скоростью для энергоэффективности", "Интеграция удалённого мониторинга и сигнализации"],
      specGroups: [{ title: "Производительность", specs: [{ label: "Холодопроизводительность", value: "7 кВт – 150 кВт на блок" }, { label: "Раздача воздуха", value: "Нижняя / верхняя" }, { label: "Контроль влажности", value: "±5% относительной влажности" }] }],
      applications: ["Машинный зал ЦОД", "Телекоммуникационные помещения", "Диспетчерские"],
      customizationOptions: ["Мощность", "Направление раздачи воздуха", "Тип хладагента"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое прецизионный кондиционер?", answer: "Прецизионный кондиционер (с жёстким контролем) разработан специально для ИТ-сред, обеспечивая более точный контроль температуры и влажности, более высокий воздушный поток на тонну и непрерывный режим работы по сравнению с системами комфортного кондиционирования." },
      ],
    },
    zh: {
      name: "精密空调",
      shortName: "精密空调",
      tagline: "为数据中心及电信设备间提供紧密控制的精密制冷。",
      overview: "万电通精密空调为机房及电信设备间提供严格的温湿度控制,支持下送风或上送风气流分配方式,容量覆盖从小型设备间到大型数据中心白空间的多种应用场景。",
      keyFeatures: ["精确的温湿度控制", "下送风/上送风气流分配选项", "变频EC风机,提升能效", "远程监控及告警集成"],
      specGroups: [{ title: "性能", specs: [{ label: "制冷量", value: "7kW–150kW/台" }, { label: "气流分配", value: "下送风/上送风" }, { label: "湿度控制", value: "±5%相对湿度" }] }],
      applications: ["数据中心白空间", "电信设备间", "控制室"],
      customizationOptions: ["制冷量", "气流分配方向", "制冷剂类型"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么是精密空调？", answer: "精密(紧密控制)空调专为IT环境设计,相比舒适性空调系统,能提供更精确的温湿度控制、更高的单位制冷量风量,以及连续运行能力。" },
      ],
    },
  },
  "liquid-cooling": {
    ar: {
      name: "حل التبريد السائل",
      shortName: "التبريد السائل",
      tagline: "تبريد سائل بلوحة باردة لراكات الحوسبة الفائقة الكثافة للذكاء الاصطناعي والحوسبة عالية الأداء.",
      overview: "يجمع حل التبريد السائل من واندتونغ بين التبريد السائل بلوحة باردة على مستوى الخادم ووحدة توزيع مبرد (CDU) تدير الحلقتين الأساسية والثانوية، ما يتيح لمراكز البيانات تبريد راكات تدريب الذكاء الاصطناعي والحوسبة عالية الأداء فائقة الكثافة بما يتجاوز حدود التبريد الهوائي العملية.",
      keyFeatures: ["تبريد سائل مباشر للشريحة بلوحة باردة", "فصل حلقة أساسية وثانوية تديرها CDU", "كشف تسرب متكامل", "متوافق مع راكات الذكاء الاصطناعي/GPU فائقة الكثافة"],
      specGroups: [{ title: "النظام", specs: [{ label: "طريقة التبريد", value: "لوحة باردة مباشرة للشريحة" }, { label: "تصميم الحلقة", value: "حلقة أساسية (منشأة) / ثانوية (راك) عبر CDU" }, { label: "كشف التسرب", value: "كشف متكامل قائم على أجهزة الاستشعار" }] }],
      applications: ["مجموعات تدريب الذكاء الاصطناعي", "راكات الحوسبة عالية الأداء", "عمليات نشر GPU فائقة الكثافة"],
      customizationOptions: ["سعة CDU", "تكوين الحلقة", "تخطيط مشعب الراك"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما هي CDU في التبريد السائل؟", answer: "CDU (وحدة توزيع المبرد) هي المعدات التي تفصل وتدير حلقة التبريد الأساسية (المنشأة) عن الحلقة الثانوية (الراك/الخادم) في نظام التبريد السائل، وتتحكم بتدفق المبرد ودرجة حرارته وضغطه مع عزل مياه المنشأة عن أجهزة تكنولوجيا المعلومات." },
        { question: "هل تقدم واندتونغ حلول التبريد السائل وCDU؟", answer: "نعم. تقدم واندتونغ أنظمة تبريد سائل بلوحة باردة مع حلقات أساسية/ثانوية تديرها CDU، وكشف تسرب ومراقبة لعمليات نشر الذكاء الاصطناعي والحوسبة فائقة الكثافة." },
      ],
    },
    fr: {
      name: "Solution de refroidissement liquide",
      shortName: "Refroidissement liquide",
      tagline: "Refroidissement liquide à plaque froide pour les racks de calcul IA et HPC à haute densité.",
      overview: "La solution de refroidissement liquide de Wandtung combine le refroidissement liquide à plaque froide au niveau du serveur avec une unité de distribution de liquide de refroidissement (CDU) gérant les boucles primaire et secondaire, permettant aux centres de données de refroidir les racks d'entraînement IA et HPC à haute densité au-delà des limites pratiques du refroidissement par air.",
      keyFeatures: ["Refroidissement liquide direct-sur-puce par plaque froide", "Séparation des boucles primaire et secondaire gérée par CDU", "Détection de fuite intégrée", "Compatible avec les racks IA / GPU haute densité"],
      specGroups: [{ title: "Système", specs: [{ label: "Méthode de refroidissement", value: "Plaque froide direct-sur-puce" }, { label: "Conception de boucle", value: "Boucle primaire (installation) / secondaire (rack) via CDU" }, { label: "Détection de fuite", value: "Détection intégrée basée sur capteurs" }] }],
      applications: ["Clusters d'entraînement IA", "Racks de calcul HPC", "Déploiements GPU haute densité"],
      customizationOptions: ["Capacité CDU", "Configuration de boucle", "Disposition du collecteur de rack"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Qu'est-ce qu'une CDU dans le refroidissement liquide ?", answer: "Une CDU (unité de distribution de liquide de refroidissement) est l'équipement qui sépare et gère la boucle de refroidissement primaire (installation) de la boucle secondaire (rack/serveur) dans un système de refroidissement liquide, contrôlant le débit, la température et la pression du liquide de refroidissement tout en isolant l'eau de l'installation du matériel informatique." },
        { question: "Wandtung propose-t-il des solutions de refroidissement liquide et de CDU ?", answer: "Oui. Wandtung propose des systèmes de refroidissement liquide à plaque froide avec boucles primaire/secondaire gérées par CDU, détection de fuite et surveillance pour les déploiements IA et de calcul haute densité." },
      ],
    },
    es: {
      name: "Solución de refrigeración líquida",
      shortName: "Refrigeración líquida",
      tagline: "Refrigeración líquida de placa fría para racks de cómputo de IA y HPC de alta densidad.",
      overview: "La solución de refrigeración líquida de Wandtung combina la refrigeración líquida de placa fría a nivel de servidor con una unidad de distribución de refrigerante (CDU) que gestiona los circuitos primario y secundario, permitiendo que los centros de datos enfríen racks de entrenamiento de IA y HPC de alta densidad más allá de los límites prácticos de la refrigeración por aire.",
      keyFeatures: ["Refrigeración líquida directa al chip mediante placa fría", "Separación de circuito primario y secundario gestionada por CDU", "Detección de fugas integrada", "Compatible con racks de IA / GPU de alta densidad"],
      specGroups: [{ title: "Sistema", specs: [{ label: "Método de refrigeración", value: "Placa fría directa al chip" }, { label: "Diseño de circuito", value: "Circuito primario (instalación) / secundario (rack) mediante CDU" }, { label: "Detección de fugas", value: "Detección integrada basada en sensores" }] }],
      applications: ["Clústeres de entrenamiento de IA", "Racks de cómputo HPC", "Despliegues de GPU de alta densidad"],
      customizationOptions: ["Capacidad de CDU", "Configuración de circuito", "Diseño del colector de rack"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Qué es una CDU en la refrigeración líquida?", answer: "Una CDU (unidad de distribución de refrigerante) es el equipo que separa y gestiona el circuito de refrigeración primario (instalación) del circuito secundario (rack/servidor) en un sistema de refrigeración líquida, controlando el flujo, la temperatura y la presión del refrigerante mientras aísla el agua de la instalación del hardware de TI." },
        { question: "¿Ofrece Wandtung soluciones de refrigeración líquida y CDU?", answer: "Sí. Wandtung ofrece sistemas de refrigeración líquida de placa fría con circuitos primario/secundario gestionados por CDU, detección de fugas y monitoreo para despliegues de IA y cómputo de alta densidad." },
      ],
    },
    ru: {
      name: "Решение жидкостного охлаждения",
      shortName: "Жидкостное охлаждение",
      tagline: "Жидкостное охлаждение холодными пластинами для стоек ИИ и HPC высокой плотности.",
      overview: "Решение жидкостного охлаждения Wandtung сочетает жидкостное охлаждение холодными пластинами на уровне сервера с блоком распределения хладагента (CDU), управляющим первичным и вторичным контурами, что позволяет ЦОД охлаждать стойки для обучения ИИ и HPC высокой плотности за пределами практических возможностей воздушного охлаждения.",
      keyFeatures: ["Жидкостное охлаждение холодными пластинами напрямую к чипу", "Разделение первичного и вторичного контуров под управлением CDU", "Встроенное обнаружение утечек", "Совместимо со стойками ИИ/GPU высокой плотности"],
      specGroups: [{ title: "Система", specs: [{ label: "Метод охлаждения", value: "Холодная пластина напрямую к чипу" }, { label: "Конструкция контура", value: "Первичный (объект) / вторичный (стойка) контур через CDU" }, { label: "Обнаружение утечек", value: "Встроенное обнаружение на основе датчиков" }] }],
      applications: ["Кластеры обучения ИИ", "Стойки HPC-вычислений", "Развёртывания GPU высокой плотности"],
      customizationOptions: ["Мощность CDU", "Конфигурация контура", "Компоновка коллектора стойки"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Что такое CDU в жидкостном охлаждении?", answer: "CDU (блок распределения хладагента) — это оборудование, которое разделяет и управляет первичным (объектовым) контуром охлаждения и вторичным (стоечным/серверным) контуром в системе жидкостного охлаждения, контролируя поток, температуру и давление хладагента, изолируя объектовую воду от ИТ-оборудования." },
        { question: "Предлагает ли Wandtung решения жидкостного охлаждения и CDU?", answer: "Да. Wandtung предлагает системы жидкостного охлаждения холодными пластинами с первичным/вторичным контурами под управлением CDU, обнаружением утечек и мониторингом для развёртываний ИИ и высокоплотных вычислений." },
      ],
    },
    zh: {
      name: "液冷解决方案",
      shortName: "液冷",
      tagline: "面向高密度AI与HPC计算机架的冷板式液冷方案。",
      overview: "万电通液冷解决方案将服务器级冷板液冷与管理一次侧及二次侧回路的冷却液分配单元(CDU)相结合,使数据中心能够为高密度AI训练及HPC机架提供超越风冷实际极限的制冷能力。",
      keyFeatures: ["冷板式芯片级直接液冷", "CDU管理的一次侧/二次侧回路隔离", "集成漏液检测", "兼容高密度AI/GPU机架"],
      specGroups: [{ title: "系统", specs: [{ label: "制冷方式", value: "冷板式芯片级直接液冷" }, { label: "回路设计", value: "通过CDU实现一次侧(设施)/二次侧(机架)回路" }, { label: "漏液检测", value: "集成传感器漏液检测" }] }],
      applications: ["AI训练集群", "HPC计算机架", "高密度GPU部署"],
      customizationOptions: ["CDU容量", "回路配置", "机架分液器布局"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "液冷系统中的CDU是什么？", answer: "CDU(冷却液分配单元)是液冷系统中用于分离并管理一次侧(设施)冷却回路与二次侧(机架/服务器)回路的设备,负责控制冷却液流量、温度及压力,同时将设施水路与IT硬件隔离。" },
        { question: "万电通是否提供液冷及CDU解决方案？", answer: "是的。万电通提供冷板式液冷系统,配备CDU管理的一次侧/二次侧回路、漏液检测及监控功能,适用于AI及高密度计算部署。" },
      ],
    },
  },
  cdu: {
    ar: {
      name: "CDU — وحدة توزيع المبرد",
      shortName: "CDU",
      tagline: "وحدة توزيع مبرد تدير حلقات التبريد السائل الأساسية والثانوية.",
      overview: "تدير CDU من واندتونغ توزيع المبرد بين حلقة المنشأة (الأساسية) وحلقة مستوى الراك (الثانوية) في نشر التبريد السائل، وتوفر الضخ وتبادل الحرارة والترشيح وكشف التسرب والمراقبة في وحدة واحدة قابلة للتركيب بالراك أو قائمة بذاتها.",
      keyFeatures: ["عزل حلقة أساسية/ثانوية عبر مبادل حراري", "مضخات متكررة للتشغيل المستمر", "ترشيح وكشف تسرب متكامل", "مراقبة عن بُعد للتدفق ودرجة الحرارة والضغط"],
      specGroups: [{ title: "الأداء", specs: [{ label: "سعة التبريد", value: "حتى عدة مئات من الكيلوواط لكل وحدة (يعتمد على الطراز)" }, { label: "تكوين المضخة", value: "مضخات متكررة N+1" }, { label: "المراقبة", value: "التدفق، درجة حرارة التزويد/العودة، الضغط، حالة التسرب" }] }],
      applications: ["مراكز بيانات الذكاء الاصطناعي / الحوسبة عالية الأداء", "الاستضافة المشتركة فائقة الكثافة"],
      customizationOptions: ["السعة", "الشكل (تركيب راك / قائم بذاته)", "مستوى التكرار"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "لماذا تُحتاج CDU بدلاً من توصيل مياه المنشأة مباشرة بالخوادم؟", answer: "تعزل CDU مياه المنشأة (الأساسية) — التي قد تتفاوت في الجودة والضغط — عن الحلقة الثانوية المغلقة والمتحكم بها التي تلامس أجهزة تكنولوجيا المعلومات، ما يحمي الخوادم من التلوث وتقلبات الضغط مع تمكين تحكم دقيق بدرجة الحرارة عند الراك." },
      ],
    },
    fr: {
      name: "CDU — Unité de distribution de liquide de refroidissement",
      shortName: "CDU",
      tagline: "Unité de distribution de liquide de refroidissement gérant les boucles primaire et secondaire de refroidissement liquide.",
      overview: "La CDU Wandtung gère la distribution du liquide de refroidissement entre la boucle de l'installation (primaire) et la boucle au niveau du rack (secondaire) dans un déploiement de refroidissement liquide, fournissant pompage, échange de chaleur, filtration, détection de fuite et surveillance dans une unité unique montable en rack ou autonome.",
      keyFeatures: ["Isolation boucle primaire/secondaire via échangeur de chaleur", "Pompes redondantes pour un fonctionnement continu", "Filtration et détection de fuite intégrées", "Surveillance à distance du débit, de la température et de la pression"],
      specGroups: [{ title: "Performance", specs: [{ label: "Capacité de refroidissement", value: "Jusqu'à plusieurs centaines de kW par unité (selon le modèle)" }, { label: "Configuration de pompe", value: "Pompes redondantes N+1" }, { label: "Surveillance", value: "Débit, température d'alimentation/retour, pression, état de fuite" }] }],
      applications: ["Centres de données IA / HPC", "Colocation haute densité"],
      customizationOptions: ["Capacité", "Format (montage en rack / autonome)", "Niveau de redondance"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Pourquoi une CDU est-elle nécessaire au lieu de raccorder directement l'eau de l'installation aux serveurs ?", answer: "Une CDU isole l'eau de l'installation (primaire) — dont la qualité et la pression peuvent varier — de la boucle secondaire fermée et contrôlée qui touche le matériel informatique, protégeant les serveurs de la contamination et des fluctuations de pression tout en permettant un contrôle précis de la température au rack." },
      ],
    },
    es: {
      name: "CDU — Unidad de distribución de refrigerante",
      shortName: "CDU",
      tagline: "Unidad de distribución de refrigerante que gestiona los circuitos primario y secundario de refrigeración líquida.",
      overview: "La CDU de Wandtung gestiona la distribución del refrigerante entre el circuito de la instalación (primario) y el circuito a nivel de rack (secundario) en un despliegue de refrigeración líquida, proporcionando bombeo, intercambio de calor, filtración, detección de fugas y monitoreo en una única unidad montable en rack o independiente.",
      keyFeatures: ["Aislamiento de circuito primario/secundario mediante intercambiador de calor", "Bombas redundantes para funcionamiento continuo", "Filtración y detección de fugas integradas", "Monitoreo remoto de flujo, temperatura y presión"],
      specGroups: [{ title: "Rendimiento", specs: [{ label: "Capacidad de refrigeración", value: "Hasta varios cientos de kW por unidad (según el modelo)" }, { label: "Configuración de bombas", value: "Bombas redundantes N+1" }, { label: "Monitoreo", value: "Flujo, temperatura de suministro/retorno, presión, estado de fugas" }] }],
      applications: ["Centros de datos de IA / HPC", "Colocation de alta densidad"],
      customizationOptions: ["Capacidad", "Formato (montaje en rack / independiente)", "Nivel de redundancia"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Por qué se necesita una CDU en lugar de conectar el agua de la instalación directamente a los servidores?", answer: "Una CDU aísla el agua de la instalación (primaria) —que puede variar en calidad y presión— del circuito secundario cerrado y controlado que toca el hardware de TI, protegiendo los servidores de la contaminación y las fluctuaciones de presión mientras permite un control preciso de la temperatura en el rack." },
      ],
    },
    ru: {
      name: "CDU — блок распределения хладагента",
      shortName: "CDU",
      tagline: "Блок распределения хладагента, управляющий первичным и вторичным контурами жидкостного охлаждения.",
      overview: "CDU Wandtung управляет распределением хладагента между контуром объекта (первичным) и контуром на уровне стойки (вторичным) в развёртывании жидкостного охлаждения, обеспечивая перекачку, теплообмен, фильтрацию, обнаружение утечек и мониторинг в единой стоечной или автономной установке.",
      keyFeatures: ["Изоляция первичного/вторичного контура через теплообменник", "Резервные насосы для непрерывной работы", "Встроенная фильтрация и обнаружение утечек", "Удалённый мониторинг потока, температуры и давления"],
      specGroups: [{ title: "Производительность", specs: [{ label: "Холодопроизводительность", value: "До нескольких сотен кВт на блок (в зависимости от модели)" }, { label: "Конфигурация насосов", value: "Резервные насосы N+1" }, { label: "Мониторинг", value: "Поток, температура подачи/обратки, давление, статус утечки" }] }],
      applications: ["ЦОД для ИИ / HPC", "Колокейшн высокой плотности"],
      customizationOptions: ["Мощность", "Форм-фактор (стоечный / автономный)", "Уровень резервирования"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Зачем нужен CDU вместо прямого подключения воды объекта к серверам?", answer: "CDU изолирует воду объекта (первичную), качество и давление которой могут варьироваться, от замкнутого контролируемого вторичного контура, соприкасающегося с ИТ-оборудованием, защищая серверы от загрязнения и колебаний давления, обеспечивая при этом точный контроль температуры на уровне стойки." },
      ],
    },
    zh: {
      name: "CDU——冷却液分配单元",
      shortName: "CDU",
      tagline: "管理液冷系统一次侧与二次侧回路的冷却液分配单元。",
      overview: "万电通CDU在液冷部署中管理设施(一次侧)回路与机架级(二次侧)回路之间的冷却液分配,在单一机架式或独立式设备中集成泵送、热交换、过滤、漏液检测及监控功能。",
      keyFeatures: ["通过换热器实现一次侧/二次侧回路隔离", "冗余水泵确保连续运行", "集成过滤及漏液检测", "远程监控流量、温度及压力"],
      specGroups: [{ title: "性能", specs: [{ label: "制冷量", value: "单台最高可达数百千瓦(视型号而定)" }, { label: "水泵配置", value: "N+1冗余水泵" }, { label: "监控", value: "流量、供回水温度、压力、漏液状态" }] }],
      applications: ["AI/HPC数据中心", "高密度托管机房"],
      customizationOptions: ["容量", "形态(机架式/独立式)", "冗余等级"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "为什么需要CDU,而不是将设施水直接连接到服务器？", answer: "CDU将水质与压力可能存在波动的设施(一次侧)水路,与接触IT硬件的封闭受控二次侧回路隔离开来,在实现机架级精确温控的同时,保护服务器免受污染及压力波动的影响。" },
      ],
    },
  },
  "liquid-cooling-cabinet": {
    ar: {
      name: "خزانة التبريد السائل",
      shortName: "خزانة التبريد السائل",
      tagline: "خزانة راك تبريد سائل مباشر إلى الشريحة، 42U، 20-80 كيلوواط+ لكل راك، جاهزة لخوادم GPU للذكاء الاصطناعي.",
      overview: "خزانة التبريد السائل من واندتونغ هي راك قياسي 42U مصمم خصيصاً للتبريد السائل المباشر إلى الشريحة لخوادم الذكاء الاصطناعي وGPU، تدعم 20-80 كيلوواط+ لكل راك. تدمج كل خزانة موزع سائل تبريد سريع الفصل، وألواح تبريد مباشرة إلى الشريحة بتصميم قنوات دقيقة، وأنابيب سائل تبريد من الفولاذ المقاوم للصدأ، ومبادل حراري بألواح نحاسية ملحومة بالنحاس، وتتصل بنظام تبريد سائل على مستوى المنشأة إلى جانب CDU ومبرد جاف أو برج تبريد وحلقة ثانوية.",
      keyFeatures: ["راك قياسي 42U، سعة تبريد 20-80 كيلوواط+ لكل راك", "ألواح تبريد مباشرة إلى الشريحة بتصميم قنوات دقيقة", "موزع سائل تبريد سريع الفصل، بدون أدوات وبدون تسرب", "أنابيب سائل تبريد من الفولاذ المقاوم للصدأ", "مبادل حراري بألواح نحاسية ملحومة بالنحاس لكفاءة حرارية عالية", "باب أمامي فولاذي مثقب، تدفق هواء 75%، للتبريد الهجين هوائي/سائل", "هيكل من فولاذ SPCC مدرفل على البارد 2.0مم", "عجلات معززة للتنقل", "جاهزة لخوادم AI/GPU، جزء من نظام تبريد سائل متكامل (موزع، CDU، مبرد جاف/برج تبريد، حلقة ثانوية، كشف تسرب)"],
      specGroups: [
        { title: "أداء التبريد", specs: [{ label: "ارتفاع الراك", value: "42U قياسي" }, { label: "سعة التبريد", value: "20-80 كيلوواط+ لكل راك" }, { label: "لوح التبريد", value: "مباشر إلى الشريحة، تصميم قنوات دقيقة" }, { label: "المبادل الحراري", value: "مبادل حراري بألواح نحاسية ملحومة بالنحاس" }, { label: "التوصيل", value: "موزع سائل تبريد سريع الفصل، بدون أدوات/بدون تسرب" }] },
        { title: "البناء", specs: [{ label: "المادة", value: "فولاذ SPCC مدرفل على البارد 2.0مم" }, { label: "أنابيب سائل التبريد", value: "فولاذ مقاوم للصدأ" }, { label: "الباب الأمامي", value: "فولاذ مثقب، تدفق هواء 75%" }, { label: "التنقل", value: "عجلات معززة" }] },
      ],
      applications: ["نشر خوادم GPU للذكاء الاصطناعي/الحوسبة عالية الأداء", "الاستضافة المشتركة عالية الكثافة", "تحديث مراكز البيانات للتبريد السائل", "التبريد المباشر إلى الشريحة للركائز الضخمة"],
      customizationOptions: ["سعة التبريد لكل راك", "تكوين الموزع ولوح التبريد", "نوع الباب", "OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "كيف تتناسب خزانة التبريد السائل مع نظام تبريد سائل متكامل؟", answer: "تضم الخزانة ألواح التبريد المباشرة إلى الشريحة وموزع الفصل السريع على مستوى الراك (الحلقة الثانوية)، والتي تتصل بـCDU يعزل ويدير تبادل الحرارة مع حلقة المنشأة (الأساسية)، وينتهي بطرح الحرارة عبر مبرد جاف أو برج تبريد — كل ذلك يُراقب من خلال نظام مراقبة ذكي مع كشف التسرب." },
        { question: "ما كثافة الخوادم التي تدعمها خزانة التبريد السائل؟", answer: "صُممت الخزانة لنشر خوادم AI وGPU عالية الكثافة، وتدعم 20-80 كيلوواط+ لكل راك — أعلى بكثير مما يمكن للتبريد الهوائي التقليدي تبديده — ما يجعلها مناسبة لعمليات النشر على نطاق الحوسبة الضخمة وعالية الأداء." },
      ],
    },
    fr: {
      name: "Armoire de refroidissement liquide",
      shortName: "Armoire de refroidissement liquide",
      tagline: "Armoire rack de refroidissement liquide direct-sur-puce, 42U, 20-80 kW+ par rack, prête pour serveurs GPU IA.",
      overview: "L'armoire de refroidissement liquide Wandtung est un rack standard 42U conçu pour le refroidissement liquide direct-sur-puce des serveurs IA et GPU, supportant 20 à 80 kW+ par rack. Chaque armoire intègre un collecteur de liquide de refroidissement à déconnexion rapide, des plaques froides direct-sur-puce à conception micro-canaux, une tuyauterie de liquide de refroidissement en acier inoxydable et un échangeur de chaleur à plaques en cuivre brasé, se connectant à un système de refroidissement liquide au niveau de l'installation aux côtés d'un CDU, d'un dry cooler ou d'une tour de refroidissement et d'une boucle secondaire.",
      keyFeatures: ["Rack standard 42U, capacité de refroidissement 20-80 kW+ par rack", "Plaques froides direct-sur-puce à conception micro-canaux", "Collecteur de liquide de refroidissement à déconnexion rapide, sans outil et sans fuite", "Tuyauterie de liquide de refroidissement en acier inoxydable", "Échangeur de chaleur à plaques en cuivre brasé pour une haute efficacité thermique", "Porte avant en acier perforé, 75% de flux d'air, pour refroidissement hybride air/liquide", "Construction en acier laminé à froid SPCC 2,0 mm", "Roulettes robustes pour la mobilité", "Prêt pour serveurs IA/GPU, élément d'un système de refroidissement liquide complet (collecteur, CDU, dry cooler / tour de refroidissement, boucle secondaire, détection de fuite)"],
      specGroups: [
        { title: "Performance de refroidissement", specs: [{ label: "Hauteur de rack", value: "42U standard" }, { label: "Capacité de refroidissement", value: "20 – 80 kW+ par rack" }, { label: "Plaque froide", value: "Direct-sur-puce, conception micro-canaux" }, { label: "Échangeur de chaleur", value: "Échangeur de chaleur à plaques en cuivre brasé" }, { label: "Raccordement", value: "Collecteur de liquide de refroidissement à déconnexion rapide, sans outil / sans fuite" }] },
        { title: "Construction", specs: [{ label: "Matériau", value: "Acier laminé à froid SPCC 2,0 mm" }, { label: "Tuyauterie de liquide de refroidissement", value: "Acier inoxydable" }, { label: "Porte avant", value: "Acier perforé, 75% de flux d'air" }, { label: "Mobilité", value: "Roulettes robustes" }] },
      ],
      applications: ["Déploiements de serveurs GPU IA / HPC", "Colocation haute densité", "Rénovation de centres de données vers le refroidissement liquide", "Refroidissement direct-sur-puce pour racks hyperscale"],
      customizationOptions: ["Capacité de refroidissement par rack", "Configuration du collecteur et des plaques froides", "Type de porte", "OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Comment l'armoire de refroidissement liquide s'intègre-t-elle dans un système de refroidissement liquide complet ?", answer: "L'armoire abrite les plaques froides direct-sur-puce et le collecteur à déconnexion rapide au niveau du rack (boucle secondaire), qui se connecte à un CDU isolant et gérant l'échange de chaleur avec la boucle de l'installation (primaire), rejetant finalement la chaleur via un dry cooler ou une tour de refroidissement — le tout surveillé par un système de surveillance intelligent avec détection de fuite." },
        { question: "Quelle densité de serveurs l'armoire de refroidissement liquide supporte-t-elle ?", answer: "L'armoire est conçue pour les déploiements de serveurs IA et GPU à haute densité, supportant 20-80 kW+ par rack — bien au-delà de ce que le refroidissement par air traditionnel peut dissiper — la rendant adaptée aux déploiements hyperscale et HPC." },
      ],
    },
    es: {
      name: "Armario de refrigeración líquida",
      shortName: "Armario de refrigeración líquida",
      tagline: "Armario rack de refrigeración líquida directa al chip, 42U, 20-80 kW+ por rack, listo para servidores GPU de IA.",
      overview: "El armario de refrigeración líquida de Wandtung es un rack estándar de 42U diseñado para la refrigeración líquida directa al chip de servidores de IA y GPU, con soporte de 20 a 80 kW+ por rack. Cada armario integra un colector de refrigerante de desconexión rápida, placas frías directas al chip con diseño de microcanales, tuberías de refrigerante de acero inoxidable y un intercambiador de calor de placas de cobre soldado, conectándose a un sistema de refrigeración líquida a nivel de instalación junto con un CDU, un dry cooler o una torre de refrigeración y un circuito secundario.",
      keyFeatures: ["Rack estándar de 42U, capacidad de refrigeración de 20-80 kW+ por rack", "Placas frías directas al chip con diseño de microcanales", "Colector de refrigerante de desconexión rápida, sin herramientas y sin fugas", "Tuberías de refrigerante de acero inoxidable", "Intercambiador de calor de placas de cobre soldado para alta eficiencia térmica", "Puerta frontal de acero perforado, 75% de flujo de aire, para refrigeración híbrida aire/líquido", "Construcción en acero laminado en frío SPCC de 2,0 mm", "Ruedas resistentes para movilidad", "Listo para servidores IA/GPU, parte de un sistema de refrigeración líquida completo (colector, CDU, dry cooler / torre de refrigeración, circuito secundario, detección de fugas)"],
      specGroups: [
        { title: "Rendimiento de refrigeración", specs: [{ label: "Altura del rack", value: "42U estándar" }, { label: "Capacidad de refrigeración", value: "20 – 80 kW+ por rack" }, { label: "Placa fría", value: "Directa al chip, diseño de microcanales" }, { label: "Intercambiador de calor", value: "Intercambiador de calor de placas de cobre soldado" }, { label: "Acoplamiento", value: "Colector de refrigerante de desconexión rápida, sin herramientas / sin fugas" }] },
        { title: "Construcción", specs: [{ label: "Material", value: "Acero laminado en frío SPCC de 2,0 mm" }, { label: "Tuberías de refrigerante", value: "Acero inoxidable" }, { label: "Puerta frontal", value: "Acero perforado, 75% de flujo de aire" }, { label: "Movilidad", value: "Ruedas resistentes" }] },
      ],
      applications: ["Despliegues de servidores GPU de IA / HPC", "Colocación de alta densidad", "Modernización de centros de datos hacia refrigeración líquida", "Refrigeración directa al chip para racks hyperscale"],
      customizationOptions: ["Capacidad de refrigeración por rack", "Configuración del colector y placas frías", "Tipo de puerta", "OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cómo encaja el armario de refrigeración líquida en un sistema de refrigeración líquida completo?", answer: "El armario alberga las placas frías directas al chip y el colector de desconexión rápida a nivel de rack (circuito secundario), que se conecta a un CDU que aísla y gestiona el intercambio de calor con el circuito de la instalación (primario), rechazando finalmente el calor a través de un dry cooler o torre de refrigeración, todo ello supervisado mediante un sistema de monitoreo inteligente con detección de fugas." },
        { question: "¿Qué densidad de servidores soporta el armario de refrigeración líquida?", answer: "El armario está diseñado para despliegues de servidores IA y GPU de alta densidad, soportando 20-80 kW+ por rack, muy por encima de lo que la refrigeración por aire tradicional puede disipar, lo que lo hace adecuado para despliegues hyperscale y HPC." },
      ],
    },
    ru: {
      name: "Шкаф жидкостного охлаждения",
      shortName: "Шкаф жидкостного охлаждения",
      tagline: "Шкаф-стойка прямого жидкостного охлаждения чипов, 42U, 20-80 кВт+ на стойку, готов для GPU-серверов ИИ.",
      overview: "Шкаф жидкостного охлаждения Wandtung — это стандартная стойка 42U, специально разработанная для прямого жидкостного охлаждения чипов серверов ИИ и GPU, поддерживающая 20–80 кВт+ на стойку. Каждый шкаф объединяет коллектор хладагента с быстрым разъёмом, холодные пластины прямого охлаждения чипов с микроканальной конструкцией, трубопроводы хладагента из нержавеющей стали и паяный медный пластинчатый теплообменник, подключаясь к системе жидкостного охлаждения на уровне объекта вместе с CDU, сухим охладителем или градирней и вторичным контуром.",
      keyFeatures: ["Стандартная стойка 42U, мощность охлаждения 20–80 кВт+ на стойку", "Холодные пластины прямого охлаждения чипов с микроканальной конструкцией", "Коллектор хладагента с быстрым разъёмом, без инструментов и без протечек", "Трубопроводы хладагента из нержавеющей стали", "Паяный медный пластинчатый теплообменник для высокой теплоэффективности", "Перфорированная передняя стальная дверь, 75% воздушного потока, для гибридного воздушно-жидкостного охлаждения", "Конструкция из холоднокатаной стали SPCC 2,0 мм", "Усиленные колёса для мобильности", "Готовность к серверам ИИ/GPU, часть комплексной системы жидкостного охлаждения (коллектор, CDU, сухой охладитель/градирня, вторичный контур, обнаружение утечек)"],
      specGroups: [
        { title: "Характеристики охлаждения", specs: [{ label: "Высота стойки", value: "42U стандарт" }, { label: "Мощность охлаждения", value: "20 – 80 кВт+ на стойку" }, { label: "Холодная пластина", value: "Прямое охлаждение чипа, микроканальная конструкция" }, { label: "Теплообменник", value: "Паяный медный пластинчатый теплообменник" }, { label: "Соединение", value: "Коллектор хладагента с быстрым разъёмом, без инструментов / без протечек" }] },
        { title: "Конструкция", specs: [{ label: "Материал", value: "Холоднокатаная сталь SPCC 2,0 мм" }, { label: "Трубопроводы хладагента", value: "Нержавеющая сталь" }, { label: "Передняя дверь", value: "Перфорированная сталь, 75% воздушного потока" }, { label: "Мобильность", value: "Усиленные колёса" }] },
      ],
      applications: ["Развёртывание GPU-серверов ИИ/HPC", "Высокоплотный колокейшн", "Модернизация ЦОД под жидкостное охлаждение", "Прямое охлаждение чипов для гипермасштабируемых стоек"],
      customizationOptions: ["Мощность охлаждения на стойку", "Конфигурация коллектора и холодных пластин", "Тип двери", "OEM/ODM"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Как шкаф жидкостного охлаждения вписывается в комплексную систему жидкостного охлаждения?", answer: "Шкаф вмещает холодные пластины прямого охлаждения чипов и коллектор с быстрым разъёмом на уровне стойки (вторичный контур), который подключается к CDU, изолирующему и управляющему теплообменом с контуром объекта (первичным), в итоге отводя тепло через сухой охладитель или градирню — всё это контролируется интеллектуальной системой мониторинга с обнаружением утечек." },
        { question: "Какую плотность серверов поддерживает шкаф жидкостного охлаждения?", answer: "Шкаф рассчитан на развёртывание высокоплотных серверов ИИ и GPU, поддерживая 20–80 кВт+ на стойку — значительно больше, чем может рассеять традиционное воздушное охлаждение, что делает его пригодным для гипермасштабируемых и HPC-развёртываний." },
      ],
    },
    zh: {
      name: "液冷机柜",
      shortName: "液冷机柜",
      tagline: "芯片级直接液冷机柜，42U，单机柜20-80kW+，AI GPU服务器专用。",
      overview: "万电通液冷机柜是一款标准42U机柜，专为AI及GPU服务器的芯片级直接液冷设计，单机柜支持20至80kW+散热能力。每台机柜集成快速接头冷却液分液器、微通道设计的芯片级直冷板、不锈钢冷却液管路及钎焊铜板换热器，与CDU、干冷器或冷却塔及二次侧回路共同构成设施级液冷系统。",
      keyFeatures: ["标准42U机柜，单机柜散热能力20-80kW+", "微通道设计芯片级直冷板", "快速接头冷却液分液器，免工具、无泄漏", "不锈钢冷却液管路", "钎焊铜板换热器，热交换效率高", "前置穿孔钢制柜门，75%通风率，支持风冷/液冷混合冷却", "2.0mm SPCC冷轧钢结构", "重型脚轮，便于移动", "AI/GPU服务器专用，属于完整液冷系统的一部分（分液器、CDU、干冷器/冷却塔、二次侧回路、漏液检测）"],
      specGroups: [
        { title: "制冷性能", specs: [{ label: "机柜高度", value: "标准42U" }, { label: "制冷能力", value: "单机柜20-80kW+" }, { label: "冷板", value: "芯片级直冷，微通道设计" }, { label: "换热器", value: "钎焊铜板换热器" }, { label: "接头方式", value: "快速接头冷却液分液器，免工具/无泄漏" }] },
        { title: "结构材质", specs: [{ label: "材质", value: "2.0mm SPCC冷轧钢" }, { label: "冷却液管路", value: "不锈钢" }, { label: "前门", value: "穿孔钢板，75%通风率" }, { label: "移动方式", value: "重型脚轮" }] },
      ],
      applications: ["AI/HPC GPU服务器部署", "高密度托管机房", "数据中心液冷改造", "超大规模机柜芯片级冷却"],
      customizationOptions: ["单机柜散热能力", "分液器与冷板配置", "柜门类型", "OEM/ODM"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "液冷机柜如何融入完整的液冷系统？", answer: "机柜在机架层级（二次侧回路）容纳芯片级直冷板及快速接头分液器，并连接至CDU，由CDU隔离并管理与设施（一次侧）回路之间的热交换，最终通过干冷器或冷却塔排出热量——整个过程通过带漏液检测功能的智能监控系统进行监控。" },
        { question: "液冷机柜支持什么样的服务器密度？", answer: "该机柜专为高密度AI及GPU服务器部署设计，单机柜支持20-80kW+散热能力——远超传统风冷所能承受的范围，适用于超大规模及高性能计算部署场景。" },
      ],
    },
  },
  "row-based-cooling": {
    ar: {
      name: "تبريد على مستوى الصف",
      shortName: "تبريد على مستوى الصف",
      tagline: "وحدات تبريد موضوعة على مستوى الصف لمسارات تدفق هواء أقصر وأكثر كفاءة.",
      overview: "يضع التبريد على مستوى الصف من واندتونغ سعة التبريد ضمن صف خزانات تكنولوجيا المعلومات بدلاً من حول محيط الغرفة، ما يقصّر مسار تدفق الهواء إلى الحمل ويحسّن كفاءة التبريد وقابليته للتنبؤ عند كثافات راك متوسطة إلى عالية.",
      keyFeatures: ["سعة تبريد موزعة ضمن صف الخزانات", "مسار تدفق هواء أقصر من التبريد المحيطي (الغرفة)", "توسع تدريجي مع زيادة كثافة الصف", "يعمل مع احتواء الممر الساخن/البارد"],
      specGroups: [{ title: "الأداء", specs: [{ label: "سعة التبريد", value: "10 كيلوواط – 40 كيلوواط لكل وحدة" }, { label: "تدفق الهواء", value: "على مستوى الصف، من الأمام للخلف مع صف الخزانات" }] }],
      applications: ["قاعات بيانات متوسطة إلى عالية الكثافة", "تحديثات التبريد القائمة على الاحتواء", "عمليات نشر صفوف الاستضافة المشتركة"],
      customizationOptions: ["السعة لكل وحدة", "التكرار (وحدات N+1 لكل صف)", "واجهة الاحتواء"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما الفرق بين التبريد على مستوى الصف والتبريد داخل الصف؟", answer: "المصطلحان قابلان للتبادل إلى حد كبير في الصناعة — يصف كلاهما وحدات التبريد الموضوعة ضمن صف الخزانات بدلاً من حول محيط الغرفة. تستخدم واندتونغ \"على مستوى الصف\" للفئة الأوسع و\"داخل الصف\" للوحدات الموضوعة مباشرة بين الخزانات في الصف." },
      ],
    },
    fr: {
      name: "Refroidissement au niveau de la rangée",
      shortName: "Refroidissement de rangée",
      tagline: "Unités de refroidissement placées au niveau de la rangée pour des chemins d'air plus courts et plus efficaces.",
      overview: "Le refroidissement au niveau de la rangée Wandtung place la capacité de refroidissement dans la rangée d'armoires informatiques plutôt qu'autour du périmètre de la pièce, raccourcissant le chemin d'air vers la charge et améliorant l'efficacité et la prévisibilité du refroidissement à des densités de rack moyennes à élevées.",
      keyFeatures: ["Capacité de refroidissement distribuée dans la rangée d'armoires", "Chemin d'air plus court que le refroidissement périmétrique (pièce)", "Évolue progressivement à mesure que la densité de la rangée augmente", "Fonctionne avec le confinement d'allée chaude/froide"],
      specGroups: [{ title: "Performance", specs: [{ label: "Capacité de refroidissement", value: "10 kW – 40 kW par unité" }, { label: "Flux d'air", value: "Au niveau de la rangée, d'avant en arrière avec la rangée d'armoires" }] }],
      applications: ["Salles informatiques à densité moyenne à élevée", "Mises à niveau de refroidissement basées sur le confinement", "Déploiements de rangées de colocation"],
      customizationOptions: ["Capacité par unité", "Redondance (unités N+1 par rangée)", "Interface de confinement"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quelle est la différence entre le refroidissement de rangée et le refroidissement in-row ?", answer: "Les termes sont largement interchangeables dans l'industrie — les deux décrivent des unités de refroidissement positionnées dans la rangée d'armoires plutôt qu'autour du périmètre de la pièce. Wandtung utilise « au niveau de la rangée » pour la catégorie plus large et « in-row » pour les unités situées directement entre les armoires de la rangée." },
      ],
    },
    es: {
      name: "Refrigeración a nivel de fila",
      shortName: "Refrigeración de fila",
      tagline: "Unidades de refrigeración colocadas a nivel de fila para rutas de flujo de aire más cortas y eficientes.",
      overview: "La refrigeración a nivel de fila de Wandtung coloca la capacidad de refrigeración dentro de la fila de armarios de TI en lugar de alrededor del perímetro de la sala, acortando la ruta de flujo de aire hacia la carga y mejorando la eficiencia y previsibilidad de la refrigeración a densidades de rack media a alta.",
      keyFeatures: ["Capacidad de refrigeración distribuida dentro de la fila de armarios", "Ruta de flujo de aire más corta que la refrigeración perimetral (de sala)", "Escala de forma incremental a medida que aumenta la densidad de la fila", "Funciona con contención de pasillo caliente/frío"],
      specGroups: [{ title: "Rendimiento", specs: [{ label: "Capacidad de refrigeración", value: "10 kW – 40 kW por unidad" }, { label: "Flujo de aire", value: "A nivel de fila, de frente a atrás con la fila de armarios" }] }],
      applications: ["Salas de datos de densidad media a alta", "Actualizaciones de refrigeración basadas en contención", "Despliegues de filas de colocation"],
      customizationOptions: ["Capacidad por unidad", "Redundancia (unidades N+1 por fila)", "Interfaz de contención"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuál es la diferencia entre refrigeración a nivel de fila y refrigeración in-row?", answer: "Los términos son en gran medida intercambiables en la industria: ambos describen unidades de refrigeración colocadas dentro de la fila de armarios en lugar de alrededor del perímetro de la sala. Wandtung usa 'a nivel de fila' para la categoría más amplia e 'in-row' para las unidades que se sitúan directamente entre los armarios de la fila." },
      ],
    },
    ru: {
      name: "Рядное охлаждение",
      shortName: "Рядное охлаждение",
      tagline: "Блоки охлаждения, размещённые на уровне ряда, для более коротких и эффективных путей воздушного потока.",
      overview: "Рядное охлаждение Wandtung размещает мощность охлаждения внутри ряда ИТ-шкафов, а не по периметру помещения, сокращая путь воздушного потока к нагрузке и повышая эффективность и предсказуемость охлаждения при средней и высокой плотности стоек.",
      keyFeatures: ["Мощность охлаждения распределена внутри ряда шкафов", "Более короткий путь воздуха, чем при периметровом (комнатном) охлаждении", "Постепенное масштабирование по мере роста плотности ряда", "Работает с изоляцией горячего/холодного коридора"],
      specGroups: [{ title: "Производительность", specs: [{ label: "Холодопроизводительность", value: "10 кВт – 40 кВт на блок" }, { label: "Воздушный поток", value: "На уровне ряда, спереди назад вдоль ряда шкафов" }] }],
      applications: ["Машинные залы средней и высокой плотности", "Модернизация охлаждения на основе изоляции", "Развёртывания рядов колокейшн"],
      customizationOptions: ["Мощность на блок", "Резервирование (блоки N+1 на ряд)", "Интерфейс изоляции"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "В чём разница между рядным и внутрирядным охлаждением?", answer: "Эти термины в отрасли во многом взаимозаменяемы — оба описывают блоки охлаждения, расположенные внутри ряда шкафов, а не по периметру помещения. Wandtung использует «рядное» для более широкой категории и «внутрирядное» для блоков, расположенных непосредственно между шкафами в ряду." },
      ],
    },
    zh: {
      name: "行级制冷",
      shortName: "行级制冷",
      tagline: "将制冷单元置于行级位置,实现更短、更高效的气流路径。",
      overview: "万电通行级制冷将制冷能力布置于IT机柜排列内部,而非沿房间四周,从而缩短气流到达负载的路径,在中高密度机架场景下提升制冷效率与可预测性。",
      keyFeatures: ["制冷能力分布于机柜排列内", "相比周边(房间)制冷气流路径更短", "可随行密度增加逐步扩容", "兼容冷/热通道封闭"],
      specGroups: [{ title: "性能", specs: [{ label: "制冷量", value: "10kW–40kW/台" }, { label: "气流", value: "行级前后方向,沿机柜排列" }] }],
      applications: ["中高密度机房", "基于封闭系统的制冷升级", "托管机房排级部署"],
      customizationOptions: ["单台容量", "冗余方式(每排N+1台)", "封闭接口"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "行级制冷与列间制冷有何区别？", answer: "这两个术语在行业内基本可互换使用——均指将制冷单元布置于机柜排列内部而非房间四周。万电通使用“行级”指代更广泛的类别,“列间”则特指直接安装于同排机柜之间的制冷单元。" },
      ],
    },
  },
  "in-row-cooling": {
    ar: {
      name: "تبريد داخل الصف",
      shortName: "تبريد داخل الصف",
      tagline: "وحدة تبريد مركّبة مباشرة ضمن صف الخزانات، بجانب حمل تكنولوجيا المعلومات التي تخدمه.",
      overview: "تُركَّب وحدات التبريد داخل الصف من واندتونغ مباشرة ضمن صف الخزانات — بنفس مساحة خزانة تكنولوجيا المعلومات — ما يضع سعة التبريد بجوار الراكات المولّدة للحرارة مباشرة، لتحكم محكم وقابل للتنبؤ بدرجة الحرارة على مستوى الصف. تحافظ الوحدة على دقة درجة حرارة ±0.5 مئوية ورطوبة ±5% باستخدام مراوح EC متغيرة السرعة، مع وحدة تحكم ذكية للمراقبة عن بُعد وتشغيل مستمر على مدار الساعة.",
      keyFeatures: ["شكل بمساحة خزانة يناسب مباشرة ضمن الصف", "اقتران وثيق بحمل تكنولوجيا المعلومات لتحكم محكم بدرجة الحرارة", "دقة درجة حرارة ±0.5 مئوية ورطوبة ±5%", "مراوح EC متغيرة السرعة لتدفق هواء موفر للطاقة", "وحدة تحكم ذكية بمراقبة عن بُعد", "تكرار وحدة N+1 ضمن الصف", "تشغيل مستمر على مدار الساعة؛ متوافقة مع احتواء الممر الساخن/البارد"],
      specGroups: [
        { title: "الأداء", specs: [{ label: "سعة التبريد", value: "5 كيلوواط – 50 كيلوواط لكل وحدة" }, { label: "الشكل", value: "مساحة خزانة قياسية" }, { label: "دقة درجة الحرارة", value: "±0.5 مئوية" }, { label: "دقة الرطوبة", value: "±5% رطوبة نسبية" }, { label: "توزيع الهواء", value: "أسفل الأرضية / علوي" }, { label: "التكرار", value: "دعم تكرار على مستوى الوحدة N+1" }] },
        { title: "التحكم", specs: [{ label: "المراوح", value: "مراوح EC متغيرة السرعة" }, { label: "وحدة التحكم", value: "وحدة تحكم ذكية، مراقبة عن بُعد" }] },
      ],
      applications: ["صفوف استضافة مشتركة فائقة الكثافة", "مراكز بيانات الوحدة الصغيرة", "تصاميم تبريد قائمة على الاحتواء"],
      customizationOptions: ["السعة", "مستوى التكرار", "نوع المبرد"],
      standards: ["معتمد CE", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "لماذا نختار التبريد داخل الصف بدلاً من مكيف هواء الغرفة التقليدي؟", answer: "يضع التبريد داخل الصف السعة مباشرة بجوار حمل تكنولوجيا المعلومات بدلاً من الاعتماد على خلط الهواء على مستوى الغرفة، ما يوفر تحكماً أدق بدرجة الحرارة، ومسارات تدفق هواء أقصر، ودعماً أفضل للكثافات الأعلى الموجودة في الراكات الحديثة." },
        { question: "ما مدى دقة التحكم بدرجة الحرارة والرطوبة؟", answer: "تحافظ الوحدة على دقة درجة حرارة ±0.5 مئوية ورطوبة نسبية ±5% باستخدام مراوح EC متغيرة السرعة ووحدة تحكم ذكية، وتعمل باستمرار على مدار الساعة مع مراقبة عن بُعد." },
      ],
    },
    fr: {
      name: "Refroidissement in-row",
      shortName: "Refroidissement in-row",
      tagline: "Unité de refroidissement installée directement dans la rangée d'armoires, à côté de la charge informatique qu'elle dessert.",
      overview: "Les unités de refroidissement in-row Wandtung s'installent directement dans la rangée d'armoires — le même encombrement qu'une armoire informatique — plaçant la capacité de refroidissement immédiatement à côté des racks générant de la chaleur, pour un contrôle de température serré et prévisible au niveau de la rangée. L'unité maintient une précision de température de ±0,5°C et d'humidité de ±5% HR grâce à des ventilateurs EC à vitesse variable, avec un contrôleur intelligent pour la surveillance à distance et un fonctionnement continu 24h/24 et 7j/7.",
      keyFeatures: ["Facteur de forme à l'encombrement d'armoire s'intégrant directement dans la rangée", "Couplage étroit avec la charge informatique pour un contrôle de température serré", "Précision de température ±0,5°C et d'humidité ±5% HR", "Ventilateurs EC à vitesse variable pour un flux d'air économe en énergie", "Contrôleur intelligent avec surveillance à distance", "Redondance d'unité N+1 dans une rangée", "Fonctionnement continu 24h/24 et 7j/7 ; compatible avec le confinement d'allée chaude/froide"],
      specGroups: [
        { title: "Performance", specs: [{ label: "Capacité de refroidissement", value: "5 kW – 50 kW par unité" }, { label: "Facteur de forme", value: "Encombrement d'armoire standard" }, { label: "Précision de température", value: "±0,5°C" }, { label: "Précision d'humidité", value: "±5% HR" }, { label: "Distribution d'air", value: "Sous plancher / en hauteur" }, { label: "Redondance", value: "Redondance de niveau unité N+1 prise en charge" }] },
        { title: "Contrôle", specs: [{ label: "Ventilateurs", value: "Ventilateurs EC à vitesse variable" }, { label: "Contrôleur", value: "Contrôleur intelligent, surveillance à distance" }] },
      ],
      applications: ["Rangées de colocation haute densité", "Data centers micro-modulaires", "Conceptions de refroidissement basées sur le confinement"],
      customizationOptions: ["Capacité", "Niveau de redondance", "Type de fluide frigorigène"],
      standards: ["Certifié CE", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Pourquoi choisir le refroidissement in-row plutôt qu'un climatiseur de pièce traditionnel ?", answer: "Le refroidissement in-row place la capacité directement à côté de la charge informatique plutôt que de compter sur un mélange d'air à l'échelle de la pièce, offrant un contrôle de température plus serré, des chemins d'air plus courts et un meilleur support pour les densités plus élevées observées dans les racks modernes." },
        { question: "Quelle est la précision du contrôle de la température et de l'humidité ?", answer: "L'unité maintient une précision de température de ±0,5°C et d'humidité de ±5% HR grâce à des ventilateurs EC à vitesse variable et un contrôleur intelligent, fonctionnant en continu 24h/24 et 7j/7 avec surveillance à distance." },
      ],
    },
    es: {
      name: "Refrigeración in-row",
      shortName: "Refrigeración in-row",
      tagline: "Unidad de refrigeración instalada directamente dentro de la fila de armarios, junto a la carga de TI a la que sirve.",
      overview: "Las unidades de refrigeración in-row de Wandtung se instalan directamente dentro de la fila de armarios, con la misma huella que un armario de TI, colocando la capacidad de refrigeración inmediatamente junto a los racks que generan calor, para un control de temperatura estricto y predecible a nivel de fila. La unidad mantiene una precisión de temperatura de ±0,5°C y de humedad de ±5% HR mediante ventiladores EC de velocidad variable, con un controlador inteligente para monitoreo remoto y funcionamiento continuo las 24 horas.",
      keyFeatures: ["Factor de forma con huella de armario que encaja directamente en la fila", "Estrechamente acoplado a la carga de TI para un control de temperatura estricto", "Precisión de temperatura ±0,5°C y de humedad ±5% HR", "Ventiladores EC de velocidad variable para un flujo de aire eficiente", "Controlador inteligente con monitoreo remoto", "Redundancia de unidad N+1 dentro de una fila", "Funcionamiento continuo 24/7; compatible con contención de pasillo caliente/frío"],
      specGroups: [
        { title: "Rendimiento", specs: [{ label: "Capacidad de refrigeración", value: "5 kW – 50 kW por unidad" }, { label: "Factor de forma", value: "Huella de armario estándar" }, { label: "Precisión de temperatura", value: "±0,5°C" }, { label: "Precisión de humedad", value: "±5% HR" }, { label: "Distribución de aire", value: "Bajo el piso / superior" }, { label: "Redundancia", value: "Redundancia a nivel de unidad N+1 compatible" }] },
        { title: "Control", specs: [{ label: "Ventiladores", value: "Ventiladores EC de velocidad variable" }, { label: "Controlador", value: "Controlador inteligente, monitoreo remoto" }] },
      ],
      applications: ["Filas de colocation de alta densidad", "Centros de datos micro modulares", "Diseños de refrigeración basados en contención"],
      customizationOptions: ["Capacidad", "Nivel de redundancia", "Tipo de refrigerante"],
      standards: ["Certificado CE", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Por qué elegir refrigeración in-row en lugar de un aire acondicionado de sala tradicional?", answer: "La refrigeración in-row coloca la capacidad directamente junto a la carga de TI en lugar de depender de la mezcla de aire a nivel de toda la sala, proporcionando un control de temperatura más estricto, rutas de flujo de aire más cortas y mejor soporte para las densidades más altas observadas en los racks modernos." },
        { question: "¿Qué tan precisa es el control de temperatura y humedad?", answer: "La unidad mantiene una precisión de temperatura de ±0,5°C y de humedad de ±5% HR mediante ventiladores EC de velocidad variable y un controlador inteligente, funcionando de forma continua las 24 horas con monitoreo remoto." },
      ],
    },
    ru: {
      name: "Внутрирядное охлаждение",
      shortName: "Внутрирядное охлаждение",
      tagline: "Блок охлаждения, устанавливаемый непосредственно внутри ряда шкафов, рядом с обслуживаемой ИТ-нагрузкой.",
      overview: "Блоки внутрирядного охлаждения Wandtung устанавливаются непосредственно внутри ряда шкафов — с той же площадью, что и ИТ-шкаф, — размещая мощность охлаждения непосредственно рядом со стойками, выделяющими тепло, для жёсткого и предсказуемого контроля температуры на уровне ряда. Блок поддерживает точность температуры ±0,5°C и влажности ±5% ОВ с помощью вентиляторов EC с регулируемой скоростью, с интеллектуальным контроллером для удалённого мониторинга и непрерывной круглосуточной работы.",
      keyFeatures: ["Форм-фактор в габаритах шкафа, вписывающийся непосредственно в ряд", "Тесная связь с ИТ-нагрузкой для жёсткого контроля температуры", "Точность температуры ±0,5°C и влажности ±5% ОВ", "Вентиляторы EC с регулируемой скоростью для энергоэффективного воздушного потока", "Интеллектуальный контроллер с удалённым мониторингом", "Резервирование блоков N+1 в пределах ряда", "Непрерывная круглосуточная работа; совместимо с изоляцией горячего/холодного коридора"],
      specGroups: [
        { title: "Производительность", specs: [{ label: "Холодопроизводительность", value: "5 кВт – 50 кВт на блок" }, { label: "Форм-фактор", value: "Стандартные габариты шкафа" }, { label: "Точность температуры", value: "±0,5°C" }, { label: "Точность влажности", value: "±5% ОВ" }, { label: "Распределение воздуха", value: "Под фальшполом / верхнее" }, { label: "Резервирование", value: "Поддержка резервирования на уровне блока N+1" }] },
        { title: "Управление", specs: [{ label: "Вентиляторы", value: "Вентиляторы EC с регулируемой скоростью" }, { label: "Контроллер", value: "Интеллектуальный контроллер, удалённый мониторинг" }] },
      ],
      applications: ["Ряды колокейшн высокой плотности", "Микромодульные ЦОД", "Конструкции охлаждения на основе изоляции"],
      customizationOptions: ["Мощность", "Уровень резервирования", "Тип хладагента"],
      standards: ["Сертификат CE", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Почему стоит выбрать внутрирядное охлаждение вместо традиционного комнатного кондиционера?", answer: "Внутрирядное охлаждение размещает мощность непосредственно рядом с ИТ-нагрузкой, а не полагается на перемешивание воздуха по всему помещению, обеспечивая более жёсткий контроль температуры, более короткие пути воздушного потока и лучшую поддержку более высоких плотностей, характерных для современных стоек." },
        { question: "Насколько точен контроль температуры и влажности?", answer: "Блок поддерживает точность температуры ±0,5°C и влажности ±5% ОВ с помощью вентиляторов EC с регулируемой скоростью и интеллектуального контроллера, работая непрерывно в круглосуточном режиме с удалённым мониторингом." },
      ],
    },
    zh: {
      name: "列间制冷",
      shortName: "列间制冷",
      tagline: "直接安装于机柜排列内、紧邻其所服务IT负载的制冷单元。",
      overview: "万电通列间制冷单元直接安装于机柜排列内——与IT机柜占地相同——将制冷能力紧邻产热机架布置,实现行级紧密、可预测的温度控制。设备采用变频EC风机,实现±0.5℃温度及±5%相对湿度控制精度,配备智能控制器支持远程监控及7×24小时连续运行。",
      keyFeatures: ["与机柜占地相同的形态,可直接嵌入排列", "与IT负载紧密耦合,实现严格温控", "±0.5℃温度及±5%相对湿度控制精度", "变频EC风机,实现节能气流控制", "智能控制器,支持远程监控", "支持排内N+1机组冗余", "7×24小时连续运行;兼容冷/热通道封闭"],
      specGroups: [
        { title: "性能", specs: [{ label: "制冷量", value: "5kW–50kW/台" }, { label: "形态", value: "标准机柜占地" }, { label: "温度控制精度", value: "±0.5℃" }, { label: "湿度控制精度", value: "±5%相对湿度" }, { label: "送风方式", value: "地板下送风/上送风" }, { label: "冗余", value: "支持N+1机组级冗余" }] },
        { title: "控制", specs: [{ label: "风机", value: "变频EC风机" }, { label: "控制器", value: "智能控制器,远程监控" }] },
      ],
      applications: ["高密度托管机房排列", "微模块数据中心", "基于封闭系统的制冷设计"],
      customizationOptions: ["容量", "冗余等级", "制冷剂类型"],
      standards: ["通过CE认证", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "为什么选择列间制冷而非传统房间空调？", answer: "列间制冷将制冷能力直接布置于IT负载旁,而非依赖整个房间的空气混合,从而实现更严格的温度控制、更短的气流路径,并更好地支持现代机架中常见的更高密度需求。" },
        { question: "温湿度控制精度如何？", answer: "设备采用变频EC风机及智能控制器,实现±0.5℃温度及±5%相对湿度控制精度,并支持7×24小时连续运行及远程监控。" },
      ],
    },
  },
  "room-cooling": {
    ar: {
      name: "تبريد الغرفة",
      shortName: "تبريد الغرفة",
      tagline: "تبريد دقيق محيطي لقاعة البيانات أو غرفة المعدات بأكملها.",
      overview: "تُكيّف وحدات تبريد الغرفة من واندتونغ قاعة البيانات أو غرفة المعدات بأكملها من محيط الغرفة — النهج التقليدي لتبريد مركز البيانات، المناسب جيداً للغرف الأقل كثافة أو كطبقة أساسية إلى جانب التبريد على مستوى الصف/داخل الصف عند الكثافات الأعلى.",
      keyFeatures: ["تبريد على مستوى الغرفة بالكامل، مثبت على المحيط", "توزيع هواء بتدفق سفلي أو علوي", "فعال من حيث التكلفة للغرف الأقل كثافة", "يمكن دمجه مع التبريد على مستوى الصف لتصاميم هجينة"],
      specGroups: [{ title: "الأداء", specs: [{ label: "سعة التبريد", value: "7 كيلوواط – 150 كيلوواط لكل وحدة" }, { label: "توزيع الهواء", value: "تدفق سفلي / علوي، على مستوى الغرفة بالكامل" }] }],
      applications: ["غرف معدات أقل كثافة", "غرف الاتصالات", "التبريد الأساسي في التصاميم الهجينة"],
      customizationOptions: ["السعة", "اتجاه توزيع الهواء", "نوع المبرد"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل لا يزال تبريد الغرفة ذا صلة مع توفر التبريد على مستوى الصف وداخل الصف؟", answer: "نعم — يبقى تبريد الغرفة أساساً فعالاً من حيث التكلفة للغرف الأقل كثافة، ويُدمج أحياناً مع وحدات على مستوى الصف أو داخل الصف عند الكثافات الأعلى للتعامل مع الحمل العام للغرفة بينما تستهدف الوحدات على مستوى الصف النقاط الساخنة." },
      ],
    },
    fr: {
      name: "Refroidissement de la pièce",
      shortName: "Refroidissement de la pièce",
      tagline: "Refroidissement de précision périmétrique pour toute la salle informatique ou la salle d'équipement.",
      overview: "Les unités de refroidissement de pièce Wandtung conditionnent toute la salle informatique ou la salle d'équipement depuis le périmètre de la pièce — l'approche traditionnelle de refroidissement des centres de données, bien adaptée aux pièces à densité plus faible ou comme couche de référence aux côtés du refroidissement de rangée/in-row à des densités plus élevées.",
      keyFeatures: ["Refroidissement à l'échelle de la pièce, monté sur le périmètre", "Distribution d'air descendante ou ascendante", "Rentable pour les pièces à densité plus faible", "Peut être combiné avec le refroidissement de rangée pour des conceptions hybrides"],
      specGroups: [{ title: "Performance", specs: [{ label: "Capacité de refroidissement", value: "7 kW – 150 kW par unité" }, { label: "Distribution d'air", value: "Descendante / Ascendante, à l'échelle de la pièce" }] }],
      applications: ["Salles d'équipement à densité plus faible", "Salles télécoms", "Refroidissement de référence dans les conceptions hybrides"],
      customizationOptions: ["Capacité", "Direction de distribution d'air", "Type de fluide frigorigène"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Le refroidissement de la pièce est-il toujours pertinent avec le refroidissement de rangée et in-row disponibles ?", answer: "Oui — le refroidissement de la pièce reste une base rentable pour les pièces à densité plus faible, et est parfois combiné avec des unités de rangée ou in-row à des densités plus élevées pour gérer la charge générale de la pièce tandis que les unités au niveau de la rangée ciblent les points chauds." },
      ],
    },
    es: {
      name: "Refrigeración de sala",
      shortName: "Refrigeración de sala",
      tagline: "Refrigeración de precisión perimetral para toda la sala de datos o sala de equipos.",
      overview: "Las unidades de refrigeración de sala de Wandtung acondicionan toda la sala de datos o sala de equipos desde el perímetro de la sala; el enfoque tradicional de refrigeración de centros de datos, muy adecuado para salas de menor densidad o como capa base junto con la refrigeración a nivel de fila/in-row en densidades más altas.",
      keyFeatures: ["Refrigeración de toda la sala, montada en el perímetro", "Distribución de aire de flujo descendente o ascendente", "Rentable para salas de menor densidad", "Se puede combinar con refrigeración a nivel de fila para diseños híbridos"],
      specGroups: [{ title: "Rendimiento", specs: [{ label: "Capacidad de refrigeración", value: "7 kW – 150 kW por unidad" }, { label: "Distribución de aire", value: "Flujo descendente / ascendente, en toda la sala" }] }],
      applications: ["Salas de equipos de menor densidad", "Salas de telecomunicaciones", "Refrigeración base en diseños híbridos"],
      customizationOptions: ["Capacidad", "Dirección de distribución de aire", "Tipo de refrigerante"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Sigue siendo relevante la refrigeración de sala con la refrigeración a nivel de fila e in-row disponibles?", answer: "Sí; la refrigeración de sala sigue siendo una base rentable para salas de menor densidad, y a veces se combina con unidades a nivel de fila o in-row en densidades más altas para manejar la carga general de la sala mientras las unidades a nivel de fila se dirigen a los puntos calientes." },
      ],
    },
    ru: {
      name: "Комнатное охлаждение",
      shortName: "Комнатное охлаждение",
      tagline: "Периметровое прецизионное охлаждение для всего машинного зала или помещения с оборудованием.",
      overview: "Блоки комнатного охлаждения Wandtung кондиционируют весь машинный зал или помещение с оборудованием по периметру помещения — традиционный подход к охлаждению ЦОД, хорошо подходящий для помещений с более низкой плотностью или в качестве базового слоя наряду с рядным/внутрирядным охлаждением при более высокой плотности.",
      keyFeatures: ["Охлаждение всего помещения, монтируемое по периметру", "Нижняя или верхняя раздача воздуха", "Экономически эффективно для помещений с более низкой плотностью", "Может сочетаться с рядным охлаждением для гибридных конструкций"],
      specGroups: [{ title: "Производительность", specs: [{ label: "Холодопроизводительность", value: "7 кВт – 150 кВт на блок" }, { label: "Раздача воздуха", value: "Нижняя / верхняя, по всему помещению" }] }],
      applications: ["Помещения с оборудованием более низкой плотности", "Телекоммуникационные помещения", "Базовое охлаждение в гибридных конструкциях"],
      customizationOptions: ["Мощность", "Направление раздачи воздуха", "Тип хладагента"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Актуально ли комнатное охлаждение при наличии рядного и внутрирядного охлаждения?", answer: "Да — комнатное охлаждение остаётся экономически эффективной базой для помещений с более низкой плотностью и иногда сочетается с рядными или внутрирядными блоками при более высокой плотности для обработки общей нагрузки помещения, в то время как рядные блоки нацелены на горячие точки." },
      ],
    },
    zh: {
      name: "房间制冷",
      shortName: "房间制冷",
      tagline: "面向整个机房或设备间的周边精密制冷方案。",
      overview: "万电通房间制冷机组从房间四周对整个机房或设备间进行制冷调节——这是传统的数据中心制冷方式,非常适合低密度机房,或在高密度场景下作为行级/列间制冷的基础层配合使用。",
      keyFeatures: ["全房间周边安装式制冷", "下送风或上送风气流分配", "适用于低密度机房,经济高效", "可与行级制冷组合形成混合方案"],
      specGroups: [{ title: "性能", specs: [{ label: "制冷量", value: "7kW–150kW/台" }, { label: "气流分配", value: "下送风/上送风,覆盖全房间" }] }],
      applications: ["低密度设备间", "电信机房", "混合方案中的基础制冷层"],
      customizationOptions: ["制冷量", "气流分配方向", "制冷剂类型"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "在已有行级及列间制冷的情况下,房间制冷是否仍有意义？", answer: "是的——房间制冷仍是低密度机房经济高效的基础方案,在高密度场景下有时会与行级或列间机组组合使用,由房间制冷承担整体负载,行级机组则专门应对局部热点。" },
      ],
    },
  },
  "dry-cooler": {
    ar: {
      name: "مبرد جاف بترتيب V",
      shortName: "مبرد جاف",
      tagline: "مبرد جاف بترتيب V وبدون فقدان مياه لرفض الحرارة من التبريد السائل والمبردات.",
      overview:
        "يقوم المبرد الجاف بترتيب V من واندتونغ برفض الحرارة من دائرة تبريد سائل أو مياه مبردة إلى الهواء المحيط دون أي استهلاك للمياه، باستخدام ملفات نحاسية/زعانف ألومنيوم مرتبة على شكل V، ومراوح محورية EC بسرعة متغيرة من 10% إلى 100%، وهيكل فولاذي مجلفن بالغمس الساخن. يتوسع نطاقه من 120 كيلوواط إلى 1400 كيلوواط عبر مجموعة طرازات قياسية، ويدعم الدائرة الأولية أو الثانوية لأنظمة التبريد السائل في مراكز البيانات وأنظمة التبريد الصناعية.",
      keyFeatures: [
        "تبريد جاف بدون فقدان مياه - لا استهلاك مياه تبخيري",
        "ترتيب ملفات على شكل V بأنابيب نحاسية وزعانف ألومنيوم",
        "مراوح محورية EC ذات دفع مباشر، سرعة متغيرة 10%-100%",
        "هيكل فولاذي مجلفن بالغمس الساخن مع واقيات مروحة حماية",
        "اتصال RS485 للتكامل مع أنظمة إدارة المباني/المراقبة",
        "نطاق طرازات من 120 إلى 1400 كيلوواط؛ متوفر OEM/ODM وسعة مخصصة",
      ],
      specGroups: [
        {
          title: "الأداء (حسب الطراز)",
          specs: [
            { label: "DC-120", value: "120 كيلوواط، مروحتان، طاقة مراوح 3.6 كيلوواط، 60 ديسيبل" },
            { label: "DC-400", value: "400 كيلوواط، 8 مراوح، طاقة مراوح 14.4 كيلوواط، 65 ديسيبل" },
            { label: "DC-800", value: "800 كيلوواط، 18 مروحة، طاقة مراوح 32.4 كيلوواط، 68 ديسيبل" },
            { label: "DC-1400", value: "1400 كيلوواط، 20 مروحة، طاقة مراوح 80 كيلوواط، 70 ديسيبل" },
          ],
        },
        {
          title: "البناء",
          specs: [
            { label: "نوع الملف", value: "أنبوب نحاسي + زعنفة ألومنيوم، ترتيب V" },
            { label: "نوع المروحة", value: "محورية EC بدفع مباشر، سرعة متغيرة 10%-100%" },
            { label: "الهيكل", value: "فولاذ مجلفن بالغمس الساخن" },
            { label: "ضغط التصميم", value: "1.0 ميجاباسكال" },
            { label: "الاتصال", value: "RS485" },
          ],
        },
      ],
      applications: ["رفض حرارة دائرة التبريد السائل في مراكز البيانات", "رفض حرارة نظام المياه المبردة", "التبريد الصناعي للعمليات", "المواقع التي تتطلب صفر استهلاك مياه للتبريد"],
      customizationOptions: ["سعة التبريد", "عدد/تكوين المراوح", "طلاء الملف", "OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما هو المبرد الجاف وكيف يختلف عن برج التبريد؟",
          answer:
            "يرفض المبرد الجاف الحرارة إلى الهواء المحيط عبر دائرة سائل مغلقة وملف زعانف، دون أي تبخر مياه - على عكس برج التبريد الذي يعتمد على تبخر المياه لرفض الحرارة. تضحي المبردات الجافة ببعض الكفاءة في المناخات الحارة مقابل صفر استهلاك مياه وصيانة أقل.",
        },
        {
          question: "ما فائدة ترتيب الملف على شكل V؟",
          answer:
            "يزيد ترتيب الملفات النحاسية/زعانف الألومنيوم على شكل V من مساحة سطح التبادل الحراري ضمن نفس المساحة مقارنة بترتيب الملف المسطح، ما يحسّن سعة رفض الحرارة لكل وحدة مساحة أرضية.",
        },
        {
          question: "ما نطاق السعة الذي يغطيه المبرد الجاف بترتيب V؟",
          answer:
            "يمتد نطاق الطرازات القياسية من 120 إلى 1400 كيلوواط (من DC-120 إلى DC-1400)، مع تدرج عدد المراوح وطاقتها حسب كل مستوى سعة؛ تتوفر السعات والتكوينات المخصصة عند الطلب.",
        },
      ],
    },
    fr: {
      name: "Dry cooler en V",
      shortName: "Dry cooler",
      tagline: "Dry cooler en V à zéro perte d'eau pour le rejet thermique du refroidissement liquide et des groupes froids.",
      overview:
        "Le dry cooler en V Wandtung rejette la chaleur d'une boucle de refroidissement liquide ou d'eau glacée vers l'air ambiant sans aucune consommation d'eau, à l'aide de batteries à tubes cuivre/ailettes aluminium disposées en V, de ventilateurs axiaux EC à vitesse variable de 10 à 100 % et d'un châssis en acier galvanisé à chaud. Il s'étend de 120 kW à 1400 kW sur une gamme de modèles standard, prenant en charge la boucle primaire ou secondaire du refroidissement liquide des centres de données et des systèmes de refroidissement industriels.",
      keyFeatures: [
        "Refroidissement à sec sans perte d'eau — aucune consommation d'eau évaporative",
        "Batteries à tubes cuivre, ailettes aluminium disposées en V",
        "Ventilateurs axiaux EC à entraînement direct, vitesse variable 10-100 %",
        "Châssis en acier galvanisé à chaud avec grilles de protection des ventilateurs",
        "Communication RS485 pour intégration GTB/supervision",
        "Gamme de modèles de 120 kW à 1400 kW ; OEM/ODM et capacité personnalisée disponibles",
      ],
      specGroups: [
        {
          title: "Performance (par modèle)",
          specs: [
            { label: "DC-120", value: "120kW, 2 ventilateurs, puissance ventilateurs 3,6kW, 60dB" },
            { label: "DC-400", value: "400kW, 8 ventilateurs, puissance ventilateurs 14,4kW, 65dB" },
            { label: "DC-800", value: "800kW, 18 ventilateurs, puissance ventilateurs 32,4kW, 68dB" },
            { label: "DC-1400", value: "1400kW, 20 ventilateurs, puissance ventilateurs 80kW, 70dB" },
          ],
        },
        {
          title: "Construction",
          specs: [
            { label: "Type de batterie", value: "Tube cuivre + ailette aluminium, disposition en V" },
            { label: "Type de ventilateur", value: "Axial EC à entraînement direct, vitesse variable 10-100 %" },
            { label: "Châssis", value: "Acier galvanisé à chaud" },
            { label: "Pression de conception", value: "1,0 MPa" },
            { label: "Communication", value: "RS485" },
          ],
        },
      ],
      applications: ["Rejet thermique de boucle de refroidissement liquide de centre de données", "Rejet thermique de système d'eau glacée", "Refroidissement de procédé industriel", "Sites nécessitant zéro consommation d'eau pour le refroidissement"],
      customizationOptions: ["Capacité de refroidissement", "Nombre/configuration de ventilateurs", "Revêtement de batterie", "OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Qu'est-ce qu'un dry cooler et en quoi diffère-t-il d'une tour de refroidissement ?",
          answer:
            "Un dry cooler rejette la chaleur vers l'air ambiant via une boucle liquide fermée et une batterie à ailettes, sans consommation d'eau évaporative — contrairement à une tour de refroidissement, qui s'appuie sur l'évaporation de l'eau pour rejeter la chaleur. Les dry coolers sacrifient un peu d'efficacité dans les climats chauds en échange d'une consommation d'eau nulle et d'un entretien réduit.",
        },
        {
          question: "À quoi sert la disposition en V des batteries ?",
          answer:
            "Disposer les batteries à tubes cuivre/ailettes aluminium en V augmente la surface d'échange thermique dans le même encombrement par rapport à une disposition plate, améliorant la capacité de rejet thermique par unité de surface au sol.",
        },
        {
          question: "Quelle plage de capacité couvre le dry cooler en V ?",
          answer:
            "La gamme de modèles standard s'étend de 120 kW à 1400 kW (DC-120 à DC-1400), avec le nombre et la puissance des ventilateurs adaptés à chaque palier de capacité ; des capacités et configurations personnalisées sont disponibles sur demande.",
        },
      ],
    },
    es: {
      name: "Dry cooler en V",
      shortName: "Dry cooler",
      tagline: "Dry cooler en V de cero pérdida de agua para el rechazo de calor de refrigeración líquida y enfriadoras.",
      overview:
        "El dry cooler en V de Wandtung rechaza el calor de un circuito de refrigeración líquida o agua enfriada hacia el aire ambiente sin ningún consumo de agua, utilizando baterías de tubo de cobre/aleta de aluminio dispuestas en V, ventiladores axiales EC de velocidad variable del 10 al 100% y un chasis de acero galvanizado en caliente. Su rango va de 120kW a 1400kW en una gama de modelos estándar, dando soporte al circuito primario o secundario de refrigeración líquida de centros de datos y sistemas de refrigeración industrial.",
      keyFeatures: [
        "Enfriamiento seco sin pérdida de agua: sin consumo de agua evaporativa",
        "Baterías de tubo de cobre y aleta de aluminio dispuestas en V",
        "Ventiladores axiales EC de accionamiento directo, velocidad variable 10-100%",
        "Chasis de acero galvanizado en caliente con rejillas de protección de ventiladores",
        "Comunicación RS485 para integración con BMS/monitoreo",
        "Gama de modelos de 120kW a 1400kW; OEM/ODM y capacidad personalizada disponibles",
      ],
      specGroups: [
        {
          title: "Rendimiento (por modelo)",
          specs: [
            { label: "DC-120", value: "120kW, 2 ventiladores, potencia de ventiladores 3,6kW, 60dB" },
            { label: "DC-400", value: "400kW, 8 ventiladores, potencia de ventiladores 14,4kW, 65dB" },
            { label: "DC-800", value: "800kW, 18 ventiladores, potencia de ventiladores 32,4kW, 68dB" },
            { label: "DC-1400", value: "1400kW, 20 ventiladores, potencia de ventiladores 80kW, 70dB" },
          ],
        },
        {
          title: "Construcción",
          specs: [
            { label: "Tipo de batería", value: "Tubo de cobre + aleta de aluminio, disposición en V" },
            { label: "Tipo de ventilador", value: "Axial EC de accionamiento directo, velocidad variable 10-100%" },
            { label: "Chasis", value: "Acero galvanizado en caliente" },
            { label: "Presión de diseño", value: "1,0 MPa" },
            { label: "Comunicación", value: "RS485" },
          ],
        },
      ],
      applications: ["Rechazo de calor de circuito de refrigeración líquida de centro de datos", "Rechazo de calor de sistema de agua enfriada", "Refrigeración de procesos industriales", "Sitios que requieren cero consumo de agua para refrigeración"],
      customizationOptions: ["Capacidad de refrigeración", "Cantidad/configuración de ventiladores", "Recubrimiento de batería", "OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Qué es un dry cooler y en qué se diferencia de una torre de refrigeración?",
          answer:
            "Un dry cooler rechaza el calor hacia el aire ambiente a través de un circuito líquido cerrado y una batería con aletas, sin consumo de agua evaporativa, a diferencia de una torre de refrigeración, que depende de la evaporación del agua para rechazar el calor. Los dry coolers sacrifican algo de eficiencia en climas cálidos a cambio de cero consumo de agua y menor mantenimiento.",
        },
        {
          question: "¿Para qué sirve la disposición en V de las baterías?",
          answer:
            "Disponer las baterías de tubo de cobre/aleta de aluminio en V aumenta la superficie de intercambio térmico dentro de la misma huella en comparación con una disposición plana, mejorando la capacidad de rechazo de calor por unidad de superficie.",
        },
        {
          question: "¿Qué rango de capacidad cubre el dry cooler en V?",
          answer:
            "La gama de modelos estándar abarca de 120kW a 1400kW (DC-120 a DC-1400), con la cantidad y potencia de ventiladores escalada a cada nivel de capacidad; se dispone de capacidades y configuraciones personalizadas bajo pedido.",
        },
      ],
    },
    ru: {
      name: "V-образный сухой охладитель",
      shortName: "Сухой охладитель",
      tagline: "V-образный сухой охладитель с нулевыми потерями воды для отвода тепла от жидкостного охлаждения и чиллеров.",
      overview:
        "V-образный сухой охладитель Wandtung отводит тепло от контура жидкостного охлаждения или охлаждённой воды в окружающий воздух без потребления воды, используя батареи медная трубка/алюминиевое ребро, расположенные V-образно, осевые вентиляторы EC с регулируемой скоростью 10–100% и раму из горячеоцинкованной стали. Диапазон моделей — от 120 до 1400 кВт, поддерживает первичный или вторичный контур систем жидкостного охлаждения ЦОД и промышленных систем охлаждения.",
      keyFeatures: [
        "Сухое охлаждение без потерь воды — отсутствие испарительного расхода воды",
        "V-образное расположение батарей медная трубка/алюминиевое ребро",
        "Осевые вентиляторы EC с прямым приводом, регулируемая скорость 10–100%",
        "Рама из горячеоцинкованной стали с защитными решётками вентиляторов",
        "Связь RS485 для интеграции с BMS/системами мониторинга",
        "Диапазон моделей от 120 до 1400 кВт; доступны OEM/ODM и индивидуальная мощность",
      ],
      specGroups: [
        {
          title: "Производительность (по модели)",
          specs: [
            { label: "DC-120", value: "120кВт, 2 вентилятора, мощность вентиляторов 3,6кВт, 60дБ" },
            { label: "DC-400", value: "400кВт, 8 вентиляторов, мощность вентиляторов 14,4кВт, 65дБ" },
            { label: "DC-800", value: "800кВт, 18 вентиляторов, мощность вентиляторов 32,4кВт, 68дБ" },
            { label: "DC-1400", value: "1400кВт, 20 вентиляторов, мощность вентиляторов 80кВт, 70дБ" },
          ],
        },
        {
          title: "Конструкция",
          specs: [
            { label: "Тип батареи", value: "Медная трубка + алюминиевое ребро, V-образное расположение" },
            { label: "Тип вентилятора", value: "Осевой EC с прямым приводом, регулируемая скорость 10–100%" },
            { label: "Рама", value: "Горячеоцинкованная сталь" },
            { label: "Расчётное давление", value: "1,0 МПа" },
            { label: "Связь", value: "RS485" },
          ],
        },
      ],
      applications: ["Отвод тепла контура жидкостного охлаждения ЦОД", "Отвод тепла системы охлаждённой воды", "Промышленное технологическое охлаждение", "Объекты, требующие нулевого расхода воды для охлаждения"],
      customizationOptions: ["Холодопроизводительность", "Количество/конфигурация вентиляторов", "Покрытие батареи", "OEM/ODM"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Что такое сухой охладитель и чем он отличается от градирни?",
          answer:
            "Сухой охладитель отводит тепло в окружающий воздух через замкнутый жидкостный контур и оребрённую батарею без испарительного расхода воды — в отличие от градирни, которая использует испарение воды для отвода тепла. Сухие охладители жертвуют частью эффективности в жарком климате в обмен на нулевой расход воды и меньшее обслуживание.",
        },
        {
          question: "Для чего нужно V-образное расположение батарей?",
          answer:
            "V-образное расположение батарей медная трубка/алюминиевое ребро увеличивает площадь теплообмена в тех же габаритах по сравнению с плоским расположением, повышая холодопроизводительность на единицу площади пола.",
        },
        {
          question: "Какой диапазон мощности охватывает V-образный сухой охладитель?",
          answer:
            "Стандартный модельный ряд охватывает от 120 до 1400 кВт (от DC-120 до DC-1400), с количеством и мощностью вентиляторов, масштабируемыми под каждый уровень мощности; индивидуальные мощности и конфигурации доступны по запросу.",
        },
      ],
    },
    zh: {
      name: "V型干冷器",
      shortName: "干冷器",
      tagline: "零水耗V型干冷器，用于液冷及冷水机组散热。",
      overview:
        "万电通V型干冷器通过V型排列的铜管铝翅片盘管，将液冷或冷冻水回路的热量以零水耗方式散至环境空气中，配备10%~100%变频EC轴流风机及热浸镀锌钢架。标准机型覆盖120kW至1400kW功率范围，可支持数据中心液冷系统及工业冷水机组的一次或二次回路散热。",
      keyFeatures: [
        "零水耗干式散热——无蒸发耗水",
        "铜管铝翅片盘管，V型排列",
        "EC轴流直驱风机，10%~100%变频调速",
        "热浸镀锌钢架，配保护性风机护罩",
        "支持RS485通信，可接入BMS/监控系统",
        "机型功率覆盖120kW至1400kW；支持OEM/ODM及定制容量",
      ],
      specGroups: [
        {
          title: "性能参数（按型号）",
          specs: [
            { label: "DC-120", value: "120kW，2台风机，风机功率3.6kW，噪音60dB" },
            { label: "DC-400", value: "400kW，8台风机，风机功率14.4kW，噪音65dB" },
            { label: "DC-800", value: "800kW，18台风机，风机功率32.4kW，噪音68dB" },
            { label: "DC-1400", value: "1400kW，20台风机，风机功率80kW，噪音70dB" },
          ],
        },
        {
          title: "结构",
          specs: [
            { label: "盘管类型", value: "铜管+铝翅片，V型排列" },
            { label: "风机类型", value: "EC轴流直驱，10%~100%变频调速" },
            { label: "机架", value: "热浸镀锌钢材" },
            { label: "设计压力", value: "1.0MPa" },
            { label: "通信", value: "RS485" },
          ],
        },
      ],
      applications: ["数据中心液冷回路散热", "冷冻水系统散热", "工业过程冷却", "要求零耗水冷却的项目"],
      customizationOptions: ["制冷量", "风机数量/配置", "盘管涂层", "OEM/ODM"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么是干冷器？与冷却塔有何区别？",
          answer:
            "干冷器通过封闭液体回路及翅片盘管将热量散至环境空气中，不产生蒸发耗水；而冷却塔则依靠水分蒸发散热。干冷器在炎热气候下效率略低于冷却塔，但换来零水耗及更低的维护成本。",
        },
        {
          question: "V型盘管排列有什么作用？",
          answer:
            "将铜管铝翅片盘管以V型排列，相比平板式排列可在相同占地面积内增大换热表面积，从而提升单位占地面积的散热能力。",
        },
        {
          question: "V型干冷器的容量范围是多少？",
          answer:
            "标准机型范围为120kW至1400kW（DC-120至DC-1400），风机数量及功率随容量等级递增；如有需要，也可提供定制容量及配置。",
        },
      ],
    },
  },
  "anti-static-raised-floor": {
    ar: {
      name: "أرضية مرفوعة مضادة للكهرباء الساكنة",
      shortName: "أرضية مضادة للسكون",
      tagline: "أرضية وصول مرفوعة لإدارة تدفق الهواء وتوجيه الكابلات في المساحة البيضاء لمركز البيانات.",
      overview: "توفر ألواح الأرضية المرفوعة المضادة للكهرباء الساكنة من واندتونغ سطحاً مرتفعاً ومصنفاً لتحمل الأحمال لتوزيع الهواء تحت الأرضية وتوجيه الكابلات، مع تشطيب سطحي مبدد للسكون يناسب بيئات مركز البيانات وغرف التحكم. تستخدم الألواح الفولاذية صلب SPCC مدرفل على البارد بسماكة 2.0 مم مع تشطيب مطلي بالمسحوق ونظام قفل زوايا دقيق، ومتوفرة بنسخة صلبة أو مهواة (25% مساحة مفتوحة)، على قاعدة مجلفنة قابلة لتعديل الارتفاع ونظام إطار عوارض متقاطعة متين.",
      keyFeatures: ["تشطيب سطحي HPL أو PVC أو فولاذ مطلي بالمسحوق مبدد للسكون", "خيارات نواة من الفولاذ أو كبريتات الكالسيوم", "خيار لوح مهوى بمساحة مفتوحة 25% لتدفق الهواء تحت الأرضية", "صلب SPCC مدرفل على البارد بسماكة 2.0 مم مع نظام قفل زوايا دقيق", "قاعدة مجلفنة قابلة لتعديل الارتفاع وإطار عوارض متقاطعة متين", "تصنيف عالٍ للحمل النقطي والحمل الموحد"],
      specGroups: [
        { title: "مواصفات اللوح", specs: [{ label: "حجم اللوح", value: "600 × 600 مم (قياسي)، أحجام مخصصة متاحة" }, { label: "مادة النواة", value: "مغلفة بالفولاذ / كبريتات الكالسيوم" }, { label: "سماكة الفولاذ", value: "صلب SPCC مدرفل على البارد بسماكة 2.0 مم (الألواح الفولاذية)" }, { label: "تصنيف الحمل", value: "1000–1500 كجم/م² (يعتمد على الطراز)" }, { label: "مقاومة السطح", value: "10^6–10^9 أوم (مضاد للسكون)" }, { label: "الخيار المهوى", value: "لوح تدفق هواء بمساحة مفتوحة 25%" }] },
        { title: "القاعدة والإطار", specs: [{ label: "مادة القاعدة", value: "فولاذ مجلفن، قابل للتعديل" }, { label: "نطاق الارتفاع", value: "100–500 مم، قابل للتعديل" }, { label: "الإطار", value: "نظام عوارض متقاطعة متين" }] },
      ],
      applications: ["المساحة البيضاء لمركز البيانات", "غرف التحكم", "الغرف النظيفة", "غرف الخوادم"],
      customizationOptions: ["نوع نواة اللوح", "التشطيب", "لوح صلب أو مهوى", "ارتفاع القاعدة"],
      standards: ["معتمد CE", "ISO 9001", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما استخدام الأرضية المرفوعة المضادة للكهرباء الساكنة في مركز البيانات؟", answer: "تُنشئ الأرضية المرفوعة المضادة للسكون فراغاً أسفل أرضية قاعة البيانات لتوزيع الهواء تحت الأرضية وتوجيه الكابلات، بينما يقلل سطحها المبدد للسكون خطر تلف معدات تكنولوجيا المعلومات الحساسة بسبب التفريغ الكهروستاتيكي." },
        { question: "ما استخدام لوح الأرضية المرفوعة المهوى؟", answer: "يحتوي لوح الأرضية المرفوعة المهوى (المثقب) على مساحة مفتوحة تبلغ نحو 25% لتوجيه الهواء البارد من أسفل الأرضية إلى ممرات باردة أو صفوف معدات محددة، ويُمزج عادةً مع الألواح الصلبة عبر قاعة البيانات بدلاً من استخدامه في كل مكان." },
      ],
    },
    fr: {
      name: "Plancher surélevé antistatique",
      shortName: "Plancher antistatique",
      tagline: "Plancher technique surélevé pour la gestion du flux d'air et le cheminement des câbles dans l'espace blanc du centre de données.",
      overview: "Les panneaux de plancher surélevé antistatique Wandtung offrent une plateforme élevée et classée pour la charge, destinée à la distribution d'air sous plancher et au cheminement des câbles, avec une finition de surface dissipatrice d'électricité statique adaptée aux environnements de centres de données et de salles de contrôle. Les panneaux en acier utilisent de l'acier SPCC laminé à froid de 2,0 mm avec une finition thermolaquée et un système de verrouillage d'angle de précision, disponibles en versions pleines ou ventilées (25 % de surface ouverte), sur un piédestal galvanisé réglable en hauteur et un système de traverses croisées robuste.",
      keyFeatures: ["Finition de surface HPL, PVC ou acier thermolaqué dissipatrice d'électricité statique", "Options de noyau en acier ou en sulfate de calcium", "Option de panneau ventilé avec 25 % de surface ouverte pour le flux d'air sous plancher", "Acier SPCC laminé à froid de 2,0 mm avec système de verrouillage d'angle de précision", "Piédestal galvanisé réglable en hauteur et cadre à traverses croisées robuste", "Classification élevée de charge ponctuelle et de charge uniforme"],
      specGroups: [
        { title: "Spécification du panneau", specs: [{ label: "Taille du panneau", value: "600 x 600 mm (standard), tailles personnalisées disponibles" }, { label: "Matériau du noyau", value: "Gainé d'acier / sulfate de calcium" }, { label: "Épaisseur de l'acier", value: "Acier SPCC laminé à froid de 2,0 mm (panneaux acier)" }, { label: "Classification de charge", value: "1000–1500 kg/m² (selon le modèle)" }, { label: "Résistance de surface", value: "10^6–10^9 Ω (antistatique)" }, { label: "Option ventilée", value: "Panneau à flux d'air avec 25 % de surface ouverte" }] },
        { title: "Piédestal et cadre", specs: [{ label: "Matériau du piédestal", value: "Acier galvanisé, réglable" }, { label: "Plage de hauteur", value: "100–500 mm, réglable" }, { label: "Cadre", value: "Système de traverses croisées robuste" }] },
      ],
      applications: ["Espace blanc de centre de données", "Salles de contrôle", "Salles blanches", "Salles serveurs"],
      customizationOptions: ["Type de noyau du panneau", "Finition", "Panneau plein ou ventilé", "Hauteur du piédestal"],
      standards: ["Certifié CE", "ISO 9001", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "À quoi sert un plancher surélevé antistatique dans un centre de données ?", answer: "Le plancher surélevé antistatique crée un vide sous le sol de la salle informatique pour la distribution d'air sous plancher et le cheminement des câbles, tandis que sa surface dissipatrice d'électricité statique réduit le risque de décharge électrostatique endommageant les équipements informatiques sensibles." },
        { question: "À quoi sert un panneau de plancher surélevé ventilé ?", answer: "Un panneau de plancher surélevé ventilé (perforé) a environ 25 % de surface ouverte pour diriger l'air froid sous plancher vers des allées froides ou des rangées d'équipements ciblées, et est généralement mélangé avec des panneaux pleins dans une salle informatique plutôt qu'utilisé partout." },
      ],
    },
    es: {
      name: "Piso elevado antiestático",
      shortName: "Piso antiestático",
      tagline: "Piso de acceso elevado para gestión de flujo de aire y enrutamiento de cables en el espacio blanco del centro de datos.",
      overview: "Los paneles de piso elevado antiestático de Wandtung ofrecen una plataforma elevada y clasificada para carga, destinada a la distribución de aire bajo el piso y el enrutamiento de cables, con un acabado de superficie disipador de estática adecuado para entornos de centros de datos y salas de control. Los paneles de acero utilizan acero SPCC laminado en frío de 2,0 mm con acabado en polvo y sistema de bloqueo de esquinas de precisión, disponibles en versiones sólidas o ventiladas (25% de área abierta), sobre un pedestal galvanizado de altura ajustable y un sistema de largueros cruzados resistente.",
      keyFeatures: ["Acabado de superficie HPL, PVC o acero con recubrimiento en polvo disipador de estática", "Opciones de núcleo de acero o sulfato de calcio", "Opción de panel ventilado con 25% de área abierta para flujo de aire bajo el piso", "Acero SPCC laminado en frío de 2,0 mm con sistema de bloqueo de esquinas de precisión", "Pedestal galvanizado de altura ajustable y marco de largueros cruzados resistente", "Alta clasificación de carga puntual y carga uniforme"],
      specGroups: [
        { title: "Especificación del panel", specs: [{ label: "Tamaño del panel", value: "600 x 600 mm (estándar), tamaños personalizados disponibles" }, { label: "Material del núcleo", value: "Revestido de acero / sulfato de calcio" }, { label: "Espesor del acero", value: "Acero SPCC laminado en frío de 2,0 mm (paneles de acero)" }, { label: "Clasificación de carga", value: "1000–1500 kg/m² (según el modelo)" }, { label: "Resistencia superficial", value: "10^6–10^9 Ω (antiestático)" }, { label: "Opción ventilada", value: "Panel de flujo de aire con 25% de área abierta" }] },
        { title: "Pedestal y marco", specs: [{ label: "Material del pedestal", value: "Acero galvanizado, ajustable" }, { label: "Rango de altura", value: "100–500 mm, ajustable" }, { label: "Marco", value: "Sistema de largueros cruzados resistente" }] },
      ],
      applications: ["Espacio blanco de centro de datos", "Salas de control", "Salas limpias", "Salas de servidores"],
      customizationOptions: ["Tipo de núcleo del panel", "Acabado", "Panel sólido o ventilado", "Altura del pedestal"],
      standards: ["Certificado CE", "ISO 9001", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Para qué se usa el piso elevado antiestático en un centro de datos?", answer: "El piso elevado antiestático crea un espacio vacío bajo el suelo de la sala de datos para la distribución de aire bajo el piso y el enrutamiento de cables, mientras que su superficie disipadora de estática reduce el riesgo de que una descarga electrostática dañe equipos de TI sensibles." },
        { question: "¿Para qué se usa un panel de piso elevado ventilado?", answer: "Un panel de piso elevado ventilado (perforado) tiene aproximadamente un 25% de área abierta para dirigir el aire frío bajo el piso hacia pasillos fríos o filas de equipos específicas, y normalmente se combina con paneles sólidos en toda la sala de datos en lugar de usarse en todas partes." },
      ],
    },
    ru: {
      name: "Антистатический фальшпол",
      shortName: "Антистатический фальшпол",
      tagline: "Фальшпол для управления воздушным потоком и прокладки кабелей в машинном зале ЦОД.",
      overview: "Панели антистатического фальшпола Wandtung обеспечивают приподнятую, рассчитанную на нагрузку платформу для подпольной раздачи воздуха и прокладки кабелей, с антистатическим покрытием поверхности, подходящим для сред ЦОД и диспетчерских. Стальные панели изготавливаются из холоднокатаной стали SPCC толщиной 2,0 мм с порошковым покрытием и прецизионной угловой системой блокировки, доступны в сплошном или вентилируемом (25% открытой площади) исполнении, на регулируемой по высоте оцинкованной опоре с прочной системой перекрёстных стрингеров.",
      keyFeatures: ["Антистатическое покрытие поверхности HPL, ПВХ или порошковой окраски по стали", "Варианты сердечника из стали или сульфата кальция", "Вентилируемая панель с 25% открытой площадью для подпольного воздушного потока", "Холоднокатаная сталь SPCC толщиной 2,0 мм с прецизионной угловой системой блокировки", "Регулируемая по высоте оцинкованная опора и прочная рама из перекрёстных стрингеров", "Высокий класс точечной и равномерной нагрузки"],
      specGroups: [
        { title: "Спецификация панели", specs: [{ label: "Размер панели", value: "600 x 600 мм (стандарт), доступны индивидуальные размеры" }, { label: "Материал сердечника", value: "В стальной оболочке / сульфат кальция" }, { label: "Толщина стали", value: "Холоднокатаная сталь SPCC 2,0 мм (стальные панели)" }, { label: "Класс нагрузки", value: "1000–1500 кг/м² (в зависимости от модели)" }, { label: "Поверхностное сопротивление", value: "10^6–10^9 Ом (антистатическое)" }, { label: "Вентилируемый вариант", value: "Панель воздушного потока с 25% открытой площадью" }] },
        { title: "Опора и рама", specs: [{ label: "Материал опоры", value: "Оцинкованная сталь, регулируемая" }, { label: "Диапазон высоты", value: "100–500 мм, регулируемая" }, { label: "Рама", value: "Прочная система перекрёстных стрингеров" }] },
      ],
      applications: ["Машинный зал ЦОД", "Диспетчерские", "Чистые помещения", "Серверные комнаты"],
      customizationOptions: ["Тип сердечника панели", "Покрытие", "Сплошная или вентилируемая панель", "Высота опоры"],
      standards: ["Сертификат CE", "ISO 9001", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Для чего используется антистатический фальшпол в ЦОД?", answer: "Антистатический фальшпол создаёт пространство под полом машинного зала для подпольной раздачи воздуха и прокладки кабелей, а его антистатическое покрытие снижает риск повреждения чувствительного ИТ-оборудования электростатическим разрядом." },
        { question: "Для чего используется вентилируемая панель фальшпола?", answer: "Вентилируемая (перфорированная) панель фальшпола имеет примерно 25% открытой площади для направления холодного подпольного воздуха в целевые холодные коридоры или ряды оборудования, и обычно комбинируется со сплошными панелями по всему машинному залу, а не используется повсеместно." },
      ],
    },
    zh: {
      name: "防静电活动地板",
      shortName: "防静电地板",
      tagline: "用于数据中心白空间气流管理及线缆布放的活动地板。",
      overview: "万电通防静电活动地板板材提供架高、具承重等级的地面结构,用于地板下送风及线缆布放,表面采用防静电耗散处理,适用于数据中心及控制室环境。钢质板材采用2.0mm冷轧SPCC钢材,表面喷塑处理,配备精密四角锁定系统,提供全实心板或格栅通风板(25%开孔率)两种版本,搭配高度可调镀锌支架及重型横撑框架系统。",
      keyFeatures: ["防静电耗散HPL、PVC或喷塑钢材表面处理", "可选钢基或硫酸钙基芯材", "格栅通风板选项,25%开孔率实现地板下送风", "2.0mm冷轧SPCC钢材,配精密四角锁定系统", "高度可调镀锌支架及重型横撑框架", "高点载荷及均布载荷承重等级"],
      specGroups: [
        { title: "板材规格", specs: [{ label: "板材尺寸", value: "600×600mm(标准),可定制尺寸" }, { label: "芯材", value: "钢包边/硫酸钙" }, { label: "钢材厚度", value: "2.0mm冷轧SPCC钢材(钢质板材)" }, { label: "承重等级", value: "1000–1500 kg/m²(视型号而定)" }, { label: "表面电阻", value: "10^6–10^9 Ω(防静电)" }, { label: "通风选项", value: "25%开孔率送风板" }] },
        { title: "支架与框架", specs: [{ label: "支架材质", value: "镀锌钢,可调节" }, { label: "高度范围", value: "100–500mm,可调节" }, { label: "框架", value: "重型横撑框架系统" }] },
      ],
      applications: ["数据中心白空间", "控制室", "洁净室", "服务器机房"],
      customizationOptions: ["板芯类型", "表面处理", "实心板或通风板", "支架高度"],
      standards: ["通过CE认证", "ISO 9001", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "防静电活动地板在数据中心中有什么用途？", answer: "防静电活动地板在机房地面下形成空腔,用于地板下送风及线缆布放,其防静电耗散表面可降低静电放电损坏敏感IT设备的风险。" },
        { question: "通风活动地板板材有什么用途？", answer: "通风(格栅)活动地板板材开孔率约为25%,用于将地板下方的冷空气导向指定的冷通道或设备排列,通常与实心板混合使用于机房各区域,而非全面铺设。" },
      ],
    },
  },
  "glass-raised-floor": {
    ar: {
      name: "أرضية مرفوعة زجاجية مضادة للكهرباء الساكنة",
      shortName: "أرضية زجاجية مرفوعة",
      tagline: "أرضية وصول زجاجية مقساة شفافة تجمع بين الحماية من الكهرباء الساكنة وتشطيب شفاف زخرفي.",
      overview:
        "تجمع الأرضية المرفوعة الزجاجية المضادة للكهرباء الساكنة من واندتونغ بين سطح زجاجي مقسى بسماكة 12 مم وإطار حافة من سبيكة الألومنيوم الدقيقة وقاعدة مجلفنة قابلة لتعديل الارتفاع، لتمنح المساحة البيضاء لمركز البيانات ومراكز عمليات الشبكة والمكاتب والمساحات المعروضة أرضية وصول مرفوعة مضادة للكهرباء الساكنة وشفافة بصرياً في آن واحد، تكشف عن توجيه الكابلات أسفلها.",
      keyFeatures: [
        "سطح زجاجي مقسى بسماكة 12 مم، مقاومة مضادة للسكون 10^6–10^9 أوم",
        "تصميم شفاف يكشف توجيه الكابلات تحت الأرضية",
        "إطار حافة من سبيكة الألومنيوم الدقيقة",
        "قاعدة مجلفنة قابلة لتعديل الارتفاع، 100–500 مم",
        "تحمل عالٍ للحمل، 800–1000 كجم/م²",
        "تشطيب أنيق وزخرفي للمكاتب الحديثة والمعارض",
        "أحجام ألواح مخصصة؛ متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "مواصفات اللوح",
          specs: [
            { label: "حجم اللوح", value: "600 × 600 مم (قياسي)، أحجام مخصصة متاحة" },
            { label: "مادة السطح", value: "زجاج مقسى بسماكة 12 مم" },
            { label: "إطار الحافة", value: "سبيكة ألومنيوم دقيقة" },
            { label: "تصنيف الحمل", value: "800–1000 كجم/م²" },
            { label: "مقاومة السطح", value: "10^6–10^9 أوم (مضاد للسكون)" },
          ],
        },
        {
          title: "القاعدة",
          specs: [
            { label: "المادة", value: "فولاذ مجلفن" },
            { label: "نطاق الارتفاع", value: "100–500 مم، قابل للتعديل" },
          ],
        },
      ],
      applications: ["المساحة البيضاء لمركز البيانات مع توجيه كابلات مرئي", "مراكز عمليات الشبكة", "المكاتب الحديثة", "صالات العرض والمعارض"],
      customizationOptions: ["حجم اللوح", "ارتفاع القاعدة", "تصنيف الحمل", "OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "هل الأرضية الزجاجية المرفوعة قوية بقدر الأرضية المرفوعة القياسية المضادة للكهرباء الساكنة؟",
          answer:
            "نعم. السطح الزجاجي المقسى بسماكة 12 مم مع إطار حافة الألومنيوم مصنف لتحمل 800–1000 كجم/م²، وهو مماثل لألواح الأرضية القياسية المضادة للسكون ذات نواة الفولاذ أو كبريتات الكالسيوم، مع إضافة تشطيب شفاف وزخرفي.",
        },
        {
          question: "أين تُستخدم الأرضية الزجاجية المرفوعة عادةً بدلاً من الأرضية المرفوعة القياسية؟",
          answer:
            "تُختار الأرضيات الزجاجية المرفوعة عندما يُراد إظهار توجيه الكابلات أو البنية التحتية أسفل الأرضية كعنصر تصميمي - في ردهات المكاتب الحديثة وصالات العرض والمعارض ومراكز عمليات الشبكة - بينما تُستخدم الأرضيات المضادة للسكون غير الشفافة القياسية في المساحة البيضاء العامة لمراكز البيانات.",
        },
      ],
    },
    fr: {
      name: "Plancher surélevé en verre antistatique",
      shortName: "Plancher en verre surélevé",
      tagline: "Plancher technique en verre trempé transparent alliant protection antistatique et finition décorative transparente.",
      overview:
        "Le plancher surélevé en verre antistatique Wandtung associe une surface en verre trempé de 12 mm à un cadre de bordure en alliage d'aluminium de précision et un piédestal galvanisé à hauteur réglable, offrant à l'espace blanc du centre de données, aux centres d'exploitation réseau, aux bureaux et aux espaces d'exposition un plancher technique à la fois antistatique et visuellement transparent, révélant le cheminement des câbles en dessous.",
      keyFeatures: [
        "Surface en verre trempé de 12 mm, résistance antistatique 10^6–10^9 Ω",
        "Design transparent révélant le cheminement des câbles sous plancher",
        "Cadre de bordure en alliage d'aluminium de précision",
        "Piédestal galvanisé à hauteur réglable, 100–500 mm",
        "Charge élevée, 800–1000 kg/m²",
        "Finition élégante et décorative pour bureaux modernes et salles d'exposition",
        "Tailles de panneaux personnalisées ; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Spécification du panneau",
          specs: [
            { label: "Taille du panneau", value: "600 x 600 mm (standard), tailles personnalisées disponibles" },
            { label: "Matériau de surface", value: "Verre trempé de 12 mm" },
            { label: "Cadre de bordure", value: "Alliage d'aluminium de précision" },
            { label: "Classification de charge", value: "800–1000 kg/m²" },
            { label: "Résistance de surface", value: "10^6–10^9 Ω (antistatique)" },
          ],
        },
        {
          title: "Piédestal",
          specs: [
            { label: "Matériau", value: "Acier galvanisé" },
            { label: "Plage de hauteur", value: "100–500 mm, réglable" },
          ],
        },
      ],
      applications: ["Espace blanc de centre de données avec cheminement de câbles visible", "Centres d'exploitation réseau", "Bureaux modernes", "Salles d'exposition"],
      customizationOptions: ["Taille du panneau", "Hauteur du piédestal", "Classification de charge", "OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Un plancher en verre surélevé est-il aussi résistant qu'un plancher surélevé antistatique standard ?",
          answer:
            "Oui. La surface en verre trempé de 12 mm avec cadre de bordure en alliage d'aluminium est classée pour 800–1000 kg/m², comparable aux panneaux de plancher antistatique standard à noyau acier ou sulfate de calcium, tout en ajoutant une finition transparente et décorative.",
        },
        {
          question: "Où un plancher en verre surélevé est-il généralement utilisé plutôt qu'un plancher surélevé standard ?",
          answer:
            "Les planchers en verre surélevés sont choisis lorsque le cheminement des câbles ou l'infrastructure sous plancher est destiné à être visible comme élément de design — halls de bureaux modernes, salles d'exposition, espaces d'exposition et centres d'exploitation réseau — tandis que les planchers antistatiques opaques standard sont utilisés dans l'espace blanc général des centres de données.",
        },
      ],
    },
    es: {
      name: "Piso elevado de vidrio antiestático",
      shortName: "Piso de vidrio elevado",
      tagline: "Piso de acceso de vidrio templado transparente que combina protección antiestática con un acabado decorativo transparente.",
      overview:
        "El piso elevado de vidrio antiestático de Wandtung combina una superficie de vidrio templado de 12 mm con un marco de borde de aleación de aluminio de precisión y un pedestal galvanizado de altura ajustable, ofreciendo al espacio blanco del centro de datos, centros de operaciones de red, oficinas y espacios de exhibición un piso de acceso elevado que es tanto antiestático como visualmente transparente, dejando ver el enrutamiento de cables debajo.",
      keyFeatures: [
        "Superficie de vidrio templado de 12 mm, resistencia antiestática 10^6–10^9 Ω",
        "Diseño transparente que deja ver el enrutamiento de cables bajo el piso",
        "Marco de borde de aleación de aluminio de precisión",
        "Pedestal galvanizado de altura ajustable, 100–500 mm",
        "Alta capacidad de carga, 800–1000 kg/m²",
        "Acabado elegante y decorativo para oficinas modernas y showrooms",
        "Tamaños de panel personalizados; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Especificación del panel",
          specs: [
            { label: "Tamaño del panel", value: "600 x 600 mm (estándar), tamaños personalizados disponibles" },
            { label: "Material de superficie", value: "Vidrio templado de 12 mm" },
            { label: "Marco de borde", value: "Aleación de aluminio de precisión" },
            { label: "Clasificación de carga", value: "800–1000 kg/m²" },
            { label: "Resistencia superficial", value: "10^6–10^9 Ω (antiestático)" },
          ],
        },
        {
          title: "Pedestal",
          specs: [
            { label: "Material", value: "Acero galvanizado" },
            { label: "Rango de altura", value: "100–500 mm, ajustable" },
          ],
        },
      ],
      applications: ["Espacio blanco de centro de datos con enrutamiento de cables visible", "Centros de operaciones de red", "Oficinas modernas", "Salas de exhibición"],
      customizationOptions: ["Tamaño del panel", "Altura del pedestal", "Clasificación de carga", "OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Es un piso de vidrio elevado tan resistente como un piso elevado antiestático estándar?",
          answer:
            "Sí. La superficie de vidrio templado de 12 mm con marco de borde de aluminio está clasificada para 800–1000 kg/m², comparable a los paneles de piso antiestático estándar con núcleo de acero o sulfato de calcio, además de añadir un acabado transparente y decorativo.",
        },
        {
          question: "¿Dónde se usa típicamente un piso de vidrio elevado en lugar de uno estándar?",
          answer:
            "Los pisos de vidrio elevados se eligen cuando se busca que el enrutamiento de cables o la infraestructura bajo el piso sea visible como elemento de diseño: vestíbulos de oficinas modernas, showrooms, espacios de exhibición y centros de operaciones de red, mientras que los pisos antiestáticos opacos estándar se usan en el espacio blanco general del centro de datos.",
        },
      ],
    },
    ru: {
      name: "Стеклянный антистатический фальшпол",
      shortName: "Стеклянный фальшпол",
      tagline: "Прозрачный фальшпол из закалённого стекла, сочетающий антистатическую защиту с декоративной прозрачной отделкой.",
      overview:
        "Стеклянный антистатический фальшпол Wandtung сочетает поверхность из закалённого стекла толщиной 12 мм с прецизионной рамой из алюминиевого сплава и регулируемой по высоте оцинкованной опорой, обеспечивая машинному залу ЦОД, центрам управления сетью, офисам и выставочным пространствам приподнятый пол доступа, который одновременно антистатичен и визуально прозрачен, открывая прокладку кабелей внизу.",
      keyFeatures: [
        "Поверхность из закалённого стекла толщиной 12 мм, антистатическое сопротивление 10^6–10^9 Ом",
        "Прозрачный дизайн, открывающий прокладку кабелей под полом",
        "Прецизионная рама из алюминиевого сплава",
        "Регулируемая по высоте оцинкованная опора, 100–500 мм",
        "Высокая несущая способность, 800–1000 кг/м²",
        "Элегантная декоративная отделка для современных офисов и шоурумов",
        "Индивидуальные размеры панелей; доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Спецификация панели",
          specs: [
            { label: "Размер панели", value: "600 x 600 мм (стандарт), доступны индивидуальные размеры" },
            { label: "Материал поверхности", value: "Закалённое стекло 12 мм" },
            { label: "Рама", value: "Прецизионный алюминиевый сплав" },
            { label: "Класс нагрузки", value: "800–1000 кг/м²" },
            { label: "Поверхностное сопротивление", value: "10^6–10^9 Ом (антистатическое)" },
          ],
        },
        {
          title: "Опора",
          specs: [
            { label: "Материал", value: "Оцинкованная сталь" },
            { label: "Диапазон высоты", value: "100–500 мм, регулируемая" },
          ],
        },
      ],
      applications: ["Машинный зал ЦОД с видимой прокладкой кабелей", "Центры управления сетью", "Современные офисы", "Шоурумы и выставки"],
      customizationOptions: ["Размер панели", "Высота опоры", "Класс нагрузки", "OEM/ODM"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Такой же прочный стеклянный фальшпол, как стандартный антистатический фальшпол?",
          answer:
            "Да. Поверхность из закалённого стекла толщиной 12 мм с рамой из алюминиевого сплава рассчитана на 800–1000 кг/м², что сопоставимо со стандартными антистатическими напольными панелями со стальным сердечником или сердечником из сульфата кальция, при этом добавляя прозрачную декоративную отделку.",
        },
        {
          question: "Где обычно используется стеклянный фальшпол вместо стандартного?",
          answer:
            "Стеклянные фальшполы выбирают там, где прокладка кабелей или инфраструктура под полом должны быть видны как элемент дизайна — в холлах современных офисов, шоурумах, выставочных пространствах и центрах управления сетью, тогда как стандартные непрозрачные антистатические полы используются в общем машинном зале ЦОД.",
        },
      ],
    },
    zh: {
      name: "玻璃防静电活动地板",
      shortName: "玻璃活动地板",
      tagline: "透明钢化玻璃活动地板,兼具防静电保护与通透装饰效果。",
      overview:
        "万电通玻璃防静电活动地板采用12mm钢化玻璃面层,搭配精密铝合金边框与高度可调镀锌支架,为数据中心白空间、网络运维中心、办公空间及展厅提供既防静电又视觉通透的架空地板,可透视地板下方的线缆布放。",
      keyFeatures: [
        "12mm钢化玻璃面层,防静电电阻10^6–10^9 Ω",
        "通透设计,可透视地板下方线缆布放",
        "精密铝合金边框",
        "镀锌支架高度可调,100–500mm",
        "承重能力强,800–1000 kg/m²",
        "典雅装饰性面层,适用于现代办公空间及展厅",
        "支持定制板材尺寸;支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "板材规格",
          specs: [
            { label: "板材尺寸", value: "600×600mm(标准),可定制尺寸" },
            { label: "面层材质", value: "12mm钢化玻璃" },
            { label: "边框", value: "精密铝合金" },
            { label: "承重等级", value: "800–1000 kg/m²" },
            { label: "表面电阻", value: "10^6–10^9 Ω(防静电)" },
          ],
        },
        {
          title: "支架",
          specs: [
            { label: "材质", value: "镀锌钢" },
            { label: "高度范围", value: "100–500mm,可调节" },
          ],
        },
      ],
      applications: ["需要展示线缆布放的数据中心白空间", "网络运维中心", "现代办公空间", "展厅与展览"],
      customizationOptions: ["板材尺寸", "支架高度", "承重等级", "OEM/ODM"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "玻璃活动地板的承重是否与标准防静电活动地板一样强？",
          answer:
            "是的。12mm钢化玻璃面层搭配铝合金边框,承重等级达800–1000 kg/m²,与标准钢基或硫酸钙基防静电地板板材相当,同时增加了通透装饰效果。",
        },
        {
          question: "玻璃活动地板通常用在哪些场景，而非标准活动地板？",
          answer:
            "当希望将地板下方的线缆布放或基础设施作为设计元素展示时会选用玻璃活动地板——如现代办公大堂、展厅、展览空间及网络运维中心；而标准不透明防静电地板则用于一般数据中心白空间。",
        },
      ],
    },
  },
  "calcium-sulphate-raised-floor": {
    ar: {
      name: "أرضية مرفوعة بكبريتات الكالسيوم",
      shortName: "أرضية كبريتات الكالسيوم",
      tagline: "لوح أرضية مرفوعة بنواة كبريتات كالسيوم عالية القوة للبيئات ثقيلة الحمل.",
      overview: "تستخدم ألواح الأرضية المرفوعة بكبريتات الكالسيوم من واندتونغ نواة كثيفة من كبريتات الكالسيوم لسعة حمل عالية واستقرار أبعاد، مناسبة لقاعات البيانات وغرف المعدات ذات الأحمال النقطية الثقيلة أو متطلبات تصنيف الحريق التي تتجاوز اللوح القياسي المغلف بالفولاذ. تجمع الألواح بين سطح HPL مضاد للسكون وحماية حافة سوداء دقيقة، وإطار عوارض من الفولاذ المجلفن، ونظام قاعدة قابل لتعديل الارتفاع.",
      keyFeatures: ["نواة كبريتات كالسيوم عالية الكثافة لقوة الحمل", "سطح HPL مضاد للسكون، مقاومة 10^6–10^9 أوم", "حماية حافة سوداء دقيقة", "مستقرة الأبعاد تحت تغير الرطوبة", "تصنيف حريق فئة A، نواة غير قابلة للاشتعال", "إطار عوارض من الفولاذ المجلفن وقاعدة قابلة لتعديل الارتفاع، 100–500 مم"],
      specGroups: [
        { title: "مواصفات اللوح", specs: [{ label: "حجم اللوح", value: "600 × 600 مم (قياسي)، أحجام مخصصة متاحة" }, { label: "مادة النواة", value: "كبريتات كالسيوم، مغلفة بالفولاذ" }, { label: "تشطيب السطح", value: "صفيحة HPL مضادة للسكون بحافة سوداء" }, { label: "تصنيف الحمل", value: "1200 كجم/م² حمل موحد، حتى 1250 كجم حمل مركز (يعتمد على الطراز)" }, { label: "مقاومة السطح", value: "10^6–10^9 أوم (مضاد للسكون)" }, { label: "تصنيف الحريق", value: "فئة A، نواة غير قابلة للاشتعال" }] },
        { title: "القاعدة والإطار", specs: [{ label: "مادة القاعدة", value: "فولاذ مجلفن، قابل للتعديل" }, { label: "نطاق الارتفاع", value: "100–500 مم، قابل للتعديل" }, { label: "الإطار", value: "نظام عوارض من الفولاذ المجلفن" }] },
      ],
      applications: ["قاعات بيانات عالية الحمل", "غرف معدات مصنفة للحريق", "مناطق تركيب المعدات الثقيلة"],
      customizationOptions: ["سماكة اللوح", "التشطيب", "نظام القاعدة"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "متى يجب أن أختار كبريتات الكالسيوم بدلاً من لوح أرضية مرفوعة فولاذية؟", answer: "عادة ما تُختار ألواح نواة كبريتات الكالسيوم عند الحاجة إلى سعة حمل أعلى، أو مقاومة حريق أفضل، أو استقرار أبعاد أكبر تحت تغير الرطوبة مقارنة بلوح خلية النحل القياسي المغلف بالفولاذ." },
        { question: "ما تصنيف الحريق الذي يحمله لوح كبريتات الكالسيوم؟", answer: "نواة كبريتات الكالسيوم غير قابلة للاشتعال، ويحمل اللوح تصنيف حريق فئة A، مما يجعله مناسباً لقاعات البيانات وغرف المعدات ذات متطلبات السلامة من الحريق الأكثر صرامة من اللوح القياسي المغلف بالفولاذ." },
      ],
    },
    fr: {
      name: "Plancher surélevé en sulfate de calcium",
      shortName: "Plancher sulfate de calcium",
      tagline: "Panneau de plancher surélevé à noyau en sulfate de calcium haute résistance pour environnements à charge lourde.",
      overview: "Les panneaux de plancher surélevé en sulfate de calcium Wandtung utilisent un noyau dense en sulfate de calcium pour une capacité de charge élevée et une stabilité dimensionnelle, adaptés aux salles informatiques et salles d'équipement avec des charges ponctuelles lourdes ou des exigences de classement au feu au-delà d'un panneau standard gainé d'acier. Les panneaux combinent une surface antistatique HPL avec une protection de bordure noire de précision, un cadre à traverses en acier galvanisé et un système de piédestal réglable en hauteur.",
      keyFeatures: ["Noyau en sulfate de calcium haute densité pour la résistance à la charge", "Surface antistatique HPL, résistance 10^6–10^9 Ω", "Protection de bordure noire de précision", "Dimensionnellement stable sous variation d'humidité", "Classement au feu classe A, noyau incombustible", "Cadre à traverses en acier galvanisé et piédestal réglable en hauteur, 100–500 mm"],
      specGroups: [
        { title: "Spécification du panneau", specs: [{ label: "Taille du panneau", value: "600 x 600 mm (standard), tailles personnalisées disponibles" }, { label: "Matériau du noyau", value: "Sulfate de calcium, gainé d'acier" }, { label: "Finition de surface", value: "Stratifié HPL antistatique avec bordure noire" }, { label: "Classification de charge", value: "1200 kg/m² charge uniforme, jusqu'à 1250 kg de charge concentrée (selon le modèle)" }, { label: "Résistance de surface", value: "10^6–10^9 Ω (antistatique)" }, { label: "Classement au feu", value: "Classe A, noyau incombustible" }] },
        { title: "Piédestal et cadre", specs: [{ label: "Matériau du piédestal", value: "Acier galvanisé, réglable" }, { label: "Plage de hauteur", value: "100–500 mm, réglable" }, { label: "Cadre", value: "Système de traverses en acier galvanisé" }] },
      ],
      applications: ["Salles informatiques à charge élevée", "Salles d'équipement classées au feu", "Zones de montage d'équipement lourd"],
      customizationOptions: ["Épaisseur du panneau", "Finition", "Système de piédestal"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quand dois-je choisir le sulfate de calcium plutôt qu'un panneau de plancher surélevé en acier ?", answer: "Les panneaux à noyau en sulfate de calcium sont généralement choisis lorsqu'une capacité de charge plus élevée, une meilleure résistance au feu ou une plus grande stabilité dimensionnelle sous variation d'humidité sont nécessaires par rapport à un panneau alvéolaire standard gainé d'acier." },
        { question: "Quel classement au feu porte le panneau en sulfate de calcium ?", answer: "Le noyau en sulfate de calcium est incombustible et le panneau porte un classement au feu de classe A, ce qui le rend adapté aux salles informatiques et salles d'équipement ayant des exigences de sécurité incendie plus strictes qu'un panneau standard gainé d'acier." },
      ],
    },
    es: {
      name: "Piso elevado de sulfato de calcio",
      shortName: "Piso de sulfato de calcio",
      tagline: "Panel de piso elevado con núcleo de sulfato de calcio de alta resistencia para entornos de carga pesada.",
      overview: "Los paneles de piso elevado de sulfato de calcio de Wandtung utilizan un núcleo denso de sulfato de calcio para una alta capacidad de carga y estabilidad dimensional, adecuados para salas de datos y salas de equipos con cargas puntuales pesadas o requisitos de clasificación contra incendios más allá de un panel estándar revestido de acero. Los paneles combinan una superficie antiestática HPL con protección de borde negro de precisión, un marco de largueros de acero galvanizado y un sistema de pedestal de altura ajustable.",
      keyFeatures: ["Núcleo de sulfato de calcio de alta densidad para resistencia de carga", "Superficie antiestática HPL, resistencia 10^6–10^9 Ω", "Protección de borde negro de precisión", "Dimensionalmente estable ante variación de humedad", "Clasificación contra incendios clase A, núcleo no combustible", "Marco de largueros de acero galvanizado y pedestal de altura ajustable, 100–500 mm"],
      specGroups: [
        { title: "Especificación del panel", specs: [{ label: "Tamaño del panel", value: "600 x 600 mm (estándar), tamaños personalizados disponibles" }, { label: "Material del núcleo", value: "Sulfato de calcio, revestido de acero" }, { label: "Acabado de superficie", value: "Laminado HPL antiestático con borde negro" }, { label: "Clasificación de carga", value: "1200 kg/m² carga uniforme, hasta 1250 kg de carga concentrada (según el modelo)" }, { label: "Resistencia superficial", value: "10^6–10^9 Ω (antiestático)" }, { label: "Clasificación contra incendios", value: "Clase A, núcleo no combustible" }] },
        { title: "Pedestal y marco", specs: [{ label: "Material del pedestal", value: "Acero galvanizado, ajustable" }, { label: "Rango de altura", value: "100–500 mm, ajustable" }, { label: "Marco", value: "Sistema de largueros de acero galvanizado" }] },
      ],
      applications: ["Salas de datos de alta carga", "Salas de equipos con clasificación contra incendios", "Zonas de montaje de equipos pesados"],
      customizationOptions: ["Espesor del panel", "Acabado", "Sistema de pedestal"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuándo debo elegir sulfato de calcio en lugar de un panel de piso elevado de acero?", answer: "Los paneles de núcleo de sulfato de calcio suelen elegirse cuando se necesita mayor capacidad de carga, mejor resistencia al fuego o mayor estabilidad dimensional ante cambios de humedad en comparación con un panel de nido de abeja estándar revestido de acero." },
        { question: "¿Qué clasificación contra incendios tiene el panel de sulfato de calcio?", answer: "El núcleo de sulfato de calcio es no combustible y el panel tiene una clasificación contra incendios clase A, lo que lo hace adecuado para salas de datos y salas de equipos con requisitos de seguridad contra incendios más estrictos que un panel estándar revestido de acero." },
      ],
    },
    ru: {
      name: "Фальшпол на основе сульфата кальция",
      shortName: "Фальшпол из сульфата кальция",
      tagline: "Высокопрочная панель фальшпола с сердечником из сульфата кальция для сред с тяжёлыми нагрузками.",
      overview: "Панели фальшпола Wandtung на основе сульфата кальция используют плотный сердечник из сульфата кальция для высокой несущей способности и стабильности размеров, подходят для машинных залов и помещений с оборудованием с тяжёлыми точечными нагрузками или требованиями к огнестойкости, превышающими возможности стандартной панели в стальной оболочке. Панели сочетают антистатическую поверхность HPL с прецизионной чёрной кромочной защитой, рамой из оцинкованных стрингеров и регулируемой по высоте системой опор.",
      keyFeatures: ["Сердечник из сульфата кальция высокой плотности для прочности под нагрузкой", "Антистатическая поверхность HPL, сопротивление 10^6–10^9 Ом", "Прецизионная чёрная кромочная защита", "Стабильность размеров при перепадах влажности", "Класс огнестойкости A, негорючий сердечник", "Рама из оцинкованных стрингеров и регулируемая по высоте опора, 100–500 мм"],
      specGroups: [
        { title: "Спецификация панели", specs: [{ label: "Размер панели", value: "600 x 600 мм (стандарт), доступны индивидуальные размеры" }, { label: "Материал сердечника", value: "Сульфат кальция, в стальной оболочке" }, { label: "Отделка поверхности", value: "Антистатический HPL-ламинат с чёрной кромкой" }, { label: "Класс нагрузки", value: "1200 кг/м² равномерная нагрузка, до 1250 кг сосредоточенной нагрузки (в зависимости от модели)" }, { label: "Поверхностное сопротивление", value: "10^6–10^9 Ом (антистатическое)" }, { label: "Класс огнестойкости", value: "Класс A, негорючий сердечник" }] },
        { title: "Опора и рама", specs: [{ label: "Материал опоры", value: "Оцинкованная сталь, регулируемая" }, { label: "Диапазон высоты", value: "100–500 мм, регулируемая" }, { label: "Рама", value: "Система оцинкованных стрингеров" }] },
      ],
      applications: ["Машинные залы с высокой нагрузкой", "Огнестойкие помещения с оборудованием", "Зоны монтажа тяжёлого оборудования"],
      customizationOptions: ["Толщина панели", "Покрытие", "Система опор"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Когда стоит выбрать сульфат кальция вместо стальной панели фальшпола?", answer: "Панели с сердечником из сульфата кальция обычно выбирают, когда требуется более высокая несущая способность, лучшая огнестойкость или большая стабильность размеров при изменении влажности по сравнению со стандартной сотовой панелью в стальной оболочке." },
        { question: "Какой класс огнестойкости имеет панель из сульфата кальция?", answer: "Сердечник из сульфата кальция негорючий, а панель имеет класс огнестойкости A, что делает её подходящей для машинных залов и помещений с оборудованием с более строгими требованиями пожарной безопасности, чем у стандартной панели в стальной оболочке." },
      ],
    },
    zh: {
      name: "硫酸钙活动地板",
      shortName: "硫酸钙地板",
      tagline: "高强度硫酸钙芯活动地板板材,适用于重载环境。",
      overview: "万电通硫酸钙活动地板板材采用高密度硫酸钙芯材,具备高承重能力及尺寸稳定性,适用于对点载荷承重或防火等级要求超出标准钢包边板材的机房及设备间。板材融合了防静电HPL表面、精密黑色边缘保护条、镀锌钢横撑框架及高度可调支架系统。",
      keyFeatures: ["高密度硫酸钙芯材,承重能力强", "防静电HPL表面,电阻10^6–10^9 Ω", "精密黑色边缘保护条", "湿度变化下尺寸稳定", "A级防火等级,不燃芯材", "镀锌钢横撑框架及高度可调支架,100–500mm"],
      specGroups: [
        { title: "板材规格", specs: [{ label: "板材尺寸", value: "600×600mm(标准),可定制尺寸" }, { label: "芯材", value: "硫酸钙,钢包边" }, { label: "表面处理", value: "防静电HPL层压板,黑色边缘" }, { label: "承重等级", value: "1200 kg/m²均布载荷,最高1250kg集中载荷(视型号而定)" }, { label: "表面电阻", value: "10^6–10^9 Ω(防静电)" }, { label: "防火等级", value: "A级,不燃芯材" }] },
        { title: "支架与框架", specs: [{ label: "支架材质", value: "镀锌钢,可调节" }, { label: "高度范围", value: "100–500mm,可调节" }, { label: "框架", value: "镀锌钢横撑系统" }] },
      ],
      applications: ["高承重机房", "防火等级设备间", "重型设备安装区域"],
      customizationOptions: ["板材厚度", "表面处理", "支架系统"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "什么情况下应选择硫酸钙地板而非钢制活动地板？", answer: "相较于标准钢包边蜂窝板材,当需要更高承重能力、更好的防火性能,或在湿度变化下具备更强尺寸稳定性时,通常会选择硫酸钙芯板材。" },
        { question: "硫酸钙板材具备什么防火等级？", answer: "硫酸钙芯材为不燃材料,板材达到A级防火等级,适用于对消防安全要求高于标准钢包边板材的机房及设备间。" },
      ],
    },
  },
  "steel-cementitious-raised-floor": {
    ar: {
      name: "أرضية مرفوعة إسمنتية مغلفة بالفولاذ",
      shortName: "أرضية إسمنتية فولاذية",
      tagline: "لوح أرضية مرفوعة بنواة إسمنتية مغلفة بالفولاذ لأحمال مركز البيانات القياسية.",
      overview: "تستخدم ألواح الأرضية المرفوعة الإسمنتية الفولاذية من واندتونغ نواة إسمنتية خفيفة الوزن مغلفة بالكامل بالفولاذ المجلفن، ما يوفر خياراً فعالاً من حيث التكلفة وواسع الاستخدام للأرضية المرفوعة لأحمال مركز البيانات وغرف المعدات القياسية.",
      keyFeatures: ["نواة إسمنتية مغلفة بالكامل بالفولاذ", "فعالة من حيث التكلفة لمتطلبات الحمل القياسية", "تفاوت أبعاد ثابت بين الألواح", "توافق واسع مع أنظمة القواعد/الجسور القياسية"],
      specGroups: [{ title: "مواصفات اللوح", specs: [{ label: "حجم اللوح", value: "600 × 600 مم" }, { label: "مادة النواة", value: "إسمنتية، مغلفة بالفولاذ" }, { label: "تصنيف الحمل", value: "حتى 900 كجم حمل مركز (يعتمد على الطراز)" }] }],
      applications: ["المساحة البيضاء القياسية لمركز البيانات", "غرف المعدات", "تطبيقات الأرضية المرفوعة التجارية العامة"],
      customizationOptions: ["سماكة اللوح", "التشطيب", "ارتفاع القاعدة"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل تناسب الأرضية المرفوعة الإسمنتية الفولاذية مركز بيانات نموذجي؟", answer: "نعم — إنها واحدة من أكثر إنشاءات الأرضية المرفوعة استخداماً للأحمال القياسية لمركز البيانات، وتوفر توازناً فعالاً من حيث التكلفة بين سعة الحمل والتوفر والتوافق مع أنظمة القواعد الشائعة." },
      ],
    },
    fr: {
      name: "Plancher surélevé cimentaire gainé d'acier",
      shortName: "Plancher cimentaire acier",
      tagline: "Panneau de plancher surélevé à noyau cimentaire gainé d'acier pour charges standard de centre de données.",
      overview: "Les panneaux de plancher surélevé cimentaire gainé d'acier Wandtung utilisent un noyau cimentaire léger entièrement gainé d'acier galvanisé, offrant une option de plancher surélevé rentable et largement utilisée pour les charges standard de centres de données et de salles d'équipement.",
      keyFeatures: ["Noyau cimentaire entièrement gainé d'acier", "Rentable pour les exigences de charge standard", "Tolérance dimensionnelle constante d'un panneau à l'autre", "Large compatibilité avec les systèmes de piédestal/traverse standard"],
      specGroups: [{ title: "Spécification du panneau", specs: [{ label: "Taille du panneau", value: "600 x 600 mm" }, { label: "Matériau du noyau", value: "Cimentaire, gainé d'acier" }, { label: "Classification de charge", value: "Jusqu'à 900 kg de charge concentrée (selon le modèle)" }] }],
      applications: ["Espace blanc standard de centre de données", "Salles d'équipement", "Applications générales de plancher surélevé commercial"],
      customizationOptions: ["Épaisseur du panneau", "Finition", "Hauteur du piédestal"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Le plancher surélevé cimentaire gainé d'acier convient-il à un centre de données typique ?", answer: "Oui — c'est l'une des constructions de plancher surélevé les plus largement utilisées pour les charges standard de centres de données, offrant un équilibre rentable entre capacité de charge, disponibilité et compatibilité avec les systèmes de piédestal courants." },
      ],
    },
    es: {
      name: "Piso elevado cementicio revestido de acero",
      shortName: "Piso cementicio de acero",
      tagline: "Panel de piso elevado con núcleo cementicio revestido de acero para cargas estándar de centro de datos.",
      overview: "Los paneles de piso elevado cementicio revestido de acero de Wandtung utilizan un núcleo cementicio ligero completamente revestido de acero galvanizado, ofreciendo una opción de piso elevado rentable y ampliamente utilizada para cargas estándar de centros de datos y salas de equipos.",
      keyFeatures: ["Núcleo cementicio completamente revestido de acero", "Rentable para requisitos de carga estándar", "Tolerancia dimensional consistente entre paneles", "Amplia compatibilidad con sistemas estándar de pedestal/larguero"],
      specGroups: [{ title: "Especificación del panel", specs: [{ label: "Tamaño del panel", value: "600 x 600 mm" }, { label: "Material del núcleo", value: "Cementicio, revestido de acero" }, { label: "Clasificación de carga", value: "Hasta 900 kg de carga concentrada (según el modelo)" }] }],
      applications: ["Espacio blanco estándar de centro de datos", "Salas de equipos", "Aplicaciones generales de piso elevado comercial"],
      customizationOptions: ["Espesor del panel", "Acabado", "Altura del pedestal"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Es adecuado el piso elevado cementicio revestido de acero para un centro de datos típico?", answer: "Sí; es una de las construcciones de piso elevado más utilizadas para cargas estándar de centros de datos, ofreciendo un equilibrio rentable entre capacidad de carga, disponibilidad y compatibilidad con sistemas de pedestal comunes." },
      ],
    },
    ru: {
      name: "Цементный фальшпол в стальной оболочке",
      shortName: "Цементный фальшпол",
      tagline: "Панель фальшпола с цементным сердечником в стальной оболочке для стандартных нагрузок ЦОД.",
      overview: "Панели цементного фальшпола Wandtung в стальной оболочке используют лёгкий цементный сердечник, полностью заключённый в оцинкованную сталь, обеспечивая экономичный, широко используемый вариант фальшпола для стандартных нагрузок ЦОД и помещений с оборудованием.",
      keyFeatures: ["Полностью цементный сердечник в стальной оболочке", "Экономичность для стандартных требований по нагрузке", "Стабильный допуск размеров между панелями", "Широкая совместимость со стандартными системами опор/лаг"],
      specGroups: [{ title: "Спецификация панели", specs: [{ label: "Размер панели", value: "600 x 600 мм" }, { label: "Материал сердечника", value: "Цементный, в стальной оболочке" }, { label: "Класс нагрузки", value: "До 900 кг сосредоточенной нагрузки (в зависимости от модели)" }] }],
      applications: ["Стандартный машинный зал ЦОД", "Помещения с оборудованием", "Общие коммерческие применения фальшпола"],
      customizationOptions: ["Толщина панели", "Покрытие", "Высота опоры"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Подходит ли цементный фальшпол в стальной оболочке для типичного ЦОД?", answer: "Да — это одна из самых широко используемых конструкций фальшпола для стандартных нагрузок ЦОД, предлагающая экономичный баланс несущей способности, доступности и совместимости с распространёнными системами опор." },
      ],
    },
    zh: {
      name: "钢包边水泥基活动地板",
      shortName: "钢包边水泥地板",
      tagline: "钢包边水泥芯活动地板板材,适用于数据中心标准载荷。",
      overview: "万电通钢包边水泥基活动地板板材采用轻质水泥芯材,完全包覆镀锌钢板,是适用于数据中心及设备间标准载荷、经济高效且广泛使用的活动地板方案。",
      keyFeatures: ["完全钢包边水泥芯材", "满足标准承重需求,经济高效", "板材间尺寸公差一致", "广泛兼容标准支架/龙骨系统"],
      specGroups: [{ title: "板材规格", specs: [{ label: "板材尺寸", value: "600×600mm" }, { label: "芯材", value: "水泥基,钢包边" }, { label: "承重等级", value: "最高900kg集中载荷(视型号而定)" }] }],
      applications: ["数据中心标准白空间", "设备间", "一般商用活动地板应用"],
      customizationOptions: ["板材厚度", "表面处理", "支架高度"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "钢包边水泥基活动地板是否适用于典型数据中心？", answer: "适用——它是数据中心标准载荷中使用最广泛的活动地板结构之一,在承重能力、可获得性及与常见支架系统的兼容性之间提供了经济高效的平衡。" },
      ],
    },
  },
  "airflow-floor": {
    ar: {
      name: "أرضية تدفق الهواء",
      shortName: "أرضية تدفق الهواء",
      tagline: "لوح أرضية مرفوعة مثقب مصمم لتوزيع الهواء البارد تحت الأرضية.",
      overview: "ألواح أرضية تدفق الهواء من واندتونغ هي بلاطات أرضية مرفوعة مثقبة مصممة لتوصيل حجم متحكم به من الهواء البارد تحت الأرضية إلى الممر البارد، مع خيارات فتحات قابلة للتعديل أو ثابتة لموازنة تدفق الهواء عبر قاعة البيانات.",
      keyFeatures: ["لوح مثقب لتوصيل هواء متحكم به تحت الأرضية", "خيارات مخمد قابل للتعديل لموازنة تدفق الهواء حسب المنطقة", "متوافق مع شبكة الأرضية المرفوعة القياسية 600×600 مم", "متوفر بمجموعة من نسب المساحة المفتوحة"],
      specGroups: [{ title: "مواصفات اللوح", specs: [{ label: "حجم اللوح", value: "600 × 600 مم" }, { label: "المساحة المفتوحة", value: "25% / 40% / 56% (يعتمد على الطراز)" }, { label: "المخمد", value: "خيارات ثابتة أو قابلة للتعديل" }] }],
      applications: ["توصيل هواء تحت الأرضية للممر البارد", "موازنة تدفق الهواء في مركز البيانات", "غرف معدات مبردة بأرضية مرفوعة"],
      customizationOptions: ["نسبة المساحة المفتوحة", "نوع المخمد", "التشطيب"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "كيف أختار نسبة المساحة المفتوحة الصحيحة لبلاطات أرضية تدفق الهواء؟", answer: "توصل البلاطات ذات المساحة المفتوحة الأعلى تدفق هواء أكبر لكل بلاطة وتناسب الممرات الباردة الأعلى كثافة؛ تُستخدم البلاطات ذات المساحة المفتوحة الأقل حيث يلزم تدفق هواء أقل، لتجنب الضغط الزائد على المناطق منخفضة الكثافة. ينبغي أن يحدد نمذجة تدفق الهواء أو مهندس مؤهل توضع البلاطات للغرفة المحددة." },
      ],
    },
    fr: {
      name: "Plancher de flux d'air",
      shortName: "Plancher de flux d'air",
      tagline: "Panneau de plancher surélevé perforé conçu pour la distribution d'air froid sous plancher.",
      overview: "Les panneaux de plancher de flux d'air Wandtung sont des dalles de plancher surélevé perforées conçues pour délivrer un volume contrôlé d'air froid sous plancher dans l'allée froide, avec des options d'ouverture réglable ou fixe pour équilibrer le flux d'air dans la salle informatique.",
      keyFeatures: ["Panneau perforé pour une distribution d'air sous plancher contrôlée", "Options de registre réglable pour équilibrer le flux d'air par zone", "Compatible avec la grille de plancher surélevé standard 600x600 mm", "Disponible dans une gamme de pourcentages de surface ouverte"],
      specGroups: [{ title: "Spécification du panneau", specs: [{ label: "Taille du panneau", value: "600 x 600 mm" }, { label: "Surface ouverte", value: "25% / 40% / 56% (selon le modèle)" }, { label: "Registre", value: "Options fixes ou réglables" }] }],
      applications: ["Distribution d'air sous plancher pour allée froide", "Équilibrage du flux d'air du centre de données", "Salles d'équipement refroidies par plancher surélevé"],
      customizationOptions: ["Pourcentage de surface ouverte", "Type de registre", "Finition"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Comment choisir le bon pourcentage de surface ouverte pour les dalles de plancher de flux d'air ?", answer: "Les dalles à surface ouverte plus élevée délivrent plus de flux d'air par dalle et conviennent aux allées froides à densité plus élevée ; les dalles à surface ouverte plus faible sont utilisées là où moins de flux d'air est nécessaire, pour éviter de surpressuriser les zones à faible densité. La modélisation du flux d'air ou un ingénieur qualifié devrait dimensionner le placement des dalles pour la pièce spécifique." },
      ],
    },
    es: {
      name: "Piso de flujo de aire",
      shortName: "Piso de flujo de aire",
      tagline: "Panel de piso elevado perforado diseñado para la distribución de aire frío bajo el piso.",
      overview: "Los paneles de piso de flujo de aire de Wandtung son losetas de piso elevado perforadas diseñadas para entregar un volumen controlado de aire frío bajo el piso al pasillo frío, con opciones de amortiguador ajustable o fijo para equilibrar el flujo de aire en toda la sala de datos.",
      keyFeatures: ["Panel perforado para entrega controlada de aire bajo el piso", "Opciones de amortiguador ajustable para equilibrar el flujo de aire por zona", "Compatible con la cuadrícula estándar de piso elevado de 600x600 mm", "Disponible en una variedad de porcentajes de área abierta"],
      specGroups: [{ title: "Especificación del panel", specs: [{ label: "Tamaño del panel", value: "600 x 600 mm" }, { label: "Área abierta", value: "25% / 40% / 56% (según el modelo)" }, { label: "Amortiguador", value: "Opciones fijas o ajustables" }] }],
      applications: ["Entrega de aire bajo el piso en pasillo frío", "Equilibrio de flujo de aire del centro de datos", "Salas de equipos refrigeradas con piso elevado"],
      customizationOptions: ["Porcentaje de área abierta", "Tipo de amortiguador", "Acabado"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cómo elijo el porcentaje de área abierta adecuado para las losetas de piso de flujo de aire?", answer: "Las losetas con mayor área abierta entregan más flujo de aire por loseta y son adecuadas para pasillos fríos de mayor densidad; las losetas con menor área abierta se usan donde se necesita menos flujo de aire, para evitar sobrepresurizar zonas de baja densidad. El modelado de flujo de aire o un ingeniero calificado debe dimensionar la ubicación de las losetas para la sala específica." },
      ],
    },
    ru: {
      name: "Вентиляционный фальшпол",
      shortName: "Вентиляционный фальшпол",
      tagline: "Перфорированная панель фальшпола, спроектированная для подпольной раздачи холодного воздуха.",
      overview: "Панели вентиляционного фальшпола Wandtung — это перфорированные плитки фальшпола, спроектированные для подачи контролируемого объёма холодного воздуха из-под пола в холодный коридор, с регулируемыми или фиксированными вариантами открытой площади для балансировки воздушного потока по всему машинному залу.",
      keyFeatures: ["Перфорированная панель для контролируемой подачи подпольного воздуха", "Варианты регулируемых заслонок для балансировки воздушного потока по зонам", "Совместима со стандартной сеткой фальшпола 600x600 мм", "Доступна в диапазоне процентов открытой площади"],
      specGroups: [{ title: "Спецификация панели", specs: [{ label: "Размер панели", value: "600 x 600 мм" }, { label: "Открытая площадь", value: "25% / 40% / 56% (в зависимости от модели)" }, { label: "Заслонка", value: "Фиксированные или регулируемые варианты" }] }],
      applications: ["Подпольная подача воздуха в холодный коридор", "Балансировка воздушного потока ЦОД", "Помещения с оборудованием, охлаждаемые через фальшпол"],
      customizationOptions: ["Процент открытой площади", "Тип заслонки", "Покрытие"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Как выбрать правильный процент открытой площади для вентиляционных плиток пола?", answer: "Плитки с более высоким процентом открытой площади обеспечивают больший воздушный поток на плитку и подходят для холодных коридоров с более высокой плотностью; плитки с меньшим процентом открытой площади используются там, где требуется меньший воздушный поток, чтобы избежать избыточного давления в зонах с низкой плотностью. Размещение плиток для конкретного помещения должно определяться моделированием воздушного потока или квалифицированным инженером." },
      ],
    },
    zh: {
      name: "通风地板",
      shortName: "通风地板",
      tagline: "专为地板下冷空气分配设计的穿孔活动地板板材。",
      overview: "万电通通风地板板材是经过工程设计的穿孔活动地板砖,用于向冷通道输送受控风量的地板下冷空气,提供可调节或固定开孔率选项,以平衡机房内的气流分布。",
      keyFeatures: ["穿孔板材,实现受控的地板下送风", "可调风量调节阀选项,实现分区气流平衡", "兼容标准600×600mm活动地板网格", "提供多种开孔率规格"],
      specGroups: [{ title: "板材规格", specs: [{ label: "板材尺寸", value: "600×600mm" }, { label: "开孔率", value: "25%/40%/56%(视型号而定)" }, { label: "调节阀", value: "固定式或可调式选项" }] }],
      applications: ["冷通道地板下送风", "数据中心气流平衡", "活动地板制冷设备间"],
      customizationOptions: ["开孔率", "调节阀类型", "表面处理"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "如何为通风地板砖选择合适的开孔率？", answer: "开孔率较高的地板砖单砖送风量更大,适用于密度较高的冷通道;开孔率较低的地板砖适用于所需风量较小的区域,以避免低密度区域压力过高。具体房间的地板砖布置应通过气流建模或由专业工程师确定。" },
      ],
    },
  },
  "cable-tray": {
    ar: {
      name: "مجرى كابلات",
      shortName: "مجرى كابلات",
      tagline: "مجاري كابلات شبكية سلكية وسلمية لمسارات كابلات منظمة في مركز البيانات.",
      overview: "توفر مجاري الكابلات من واندتونغ مسارات منظمة وقابلة للصيانة لكابلات الطاقة والبيانات فوق الراكات أو تحت الأرضية المرفوعة، متوفرة بإنشاء شبكي سلكي ونوع سلمي لمتطلبات حمل وملء كابلات مختلفة.",
      keyFeatures: ["إنشاء شبكي سلكي ونوع سلمي", "موصلات أقسام بدون أدوات أو مبرشمة", "تشطيب مطلي بالزنك أو مجلفن بالغمس الساخن", "ملحقات وصل وتفرع وانحناء معيارية"],
      specGroups: [{ title: "البناء", specs: [{ label: "النوع", value: "شبكي سلكي / سلمي" }, { label: "العرض", value: "100 – 600 مم" }, { label: "التشطيب", value: "مطلي بالزنك / مجلفن بالغمس الساخن" }] }],
      applications: ["كابلات علوية لمركز البيانات", "غرف الاتصالات", "مسارات الكابلات الصناعية"],
      customizationOptions: ["العرض", "التشطيب", "مجموعة الملحقات"],
      standards: ["CE (توجيه الجهد المنخفض 2014/35/EU، EN 61537:2007) — خطوط السلم والقناة ومجرى الألياف الضوئية", "شهادة مطابقة TÜV SÜD — نظام مجرى وسلم الكابلات", "معتمد UL — مجاري الكابلات (CSA C22.2 No. 126.1، NFPA 70) ومجرى الألياف الضوئية (UL 2024)"],
      faqs: [
        { question: "مجرى الكابلات الشبكي مقابل السلمي — أيهما أفضل لمركز البيانات؟", answer: "مجرى الشبكة خفيف الوزن وسهل التعديل في الموقع ويناسب كابلات البيانات/الألياف المنظمة، بينما يوفر المجرى السلمي سعة حمل أعلى وتبديداً حرارياً أفضل لمسارات كابلات الطاقة الأثقل — تستخدم مراكز بيانات كثيرة كليهما، مفصولين حسب نوع الكابل." },
      ],
    },
    fr: {
      name: "Chemin de câbles",
      shortName: "Chemin de câbles",
      tagline: "Chemins de câbles grillagés et à échelle pour des cheminements de câbles structurés en centre de données.",
      overview: "Les chemins de câbles Wandtung offrent des cheminements structurés et accessibles pour le câblage d'alimentation et de données au-dessus des racks ou sous les planchers surélevés, disponibles en construction grillagée et de type échelle pour différentes exigences de charge et de remplissage de câbles.",
      keyFeatures: ["Construction grillagée et de type échelle", "Connecteurs de section sans outil ou boulonnés", "Finition zinguée ou galvanisée à chaud", "Accessoires modulaires d'épissure, té et coude"],
      specGroups: [{ title: "Construction", specs: [{ label: "Type", value: "Grillagé / Échelle" }, { label: "Largeur", value: "100 – 600 mm" }, { label: "Finition", value: "Zinguée / galvanisée à chaud" }] }],
      applications: ["Câblage aérien de centre de données", "Salles télécoms", "Cheminements de câbles industriels"],
      customizationOptions: ["Largeur", "Finition", "Ensemble d'accessoires"],
      standards: ["CE (LVD 2014/35/UE, EN 61537:2007) — lignes échelle, goulotte et chemin de câbles à fibre optique", "Attestation de conformité TÜV SÜD — système de chemin et échelle de câbles", "Certifié UL — chemins de câbles (CSA C22.2 No. 126.1, NFPA 70) et chemin de câbles à fibre optique (UL 2024)"],
      faqs: [
        { question: "Chemin de câbles grillagé vs échelle — lequel est le meilleur pour un centre de données ?", answer: "Le chemin grillagé est léger, facile à modifier sur site et bien adapté au câblage de données/fibre structuré, tandis que le chemin échelle offre une capacité de charge plus élevée et une meilleure dissipation thermique pour les cheminements de câbles d'alimentation plus lourds — de nombreux centres de données utilisent les deux, séparés par type de câble." },
      ],
    },
    es: {
      name: "Bandeja de cables",
      shortName: "Bandeja de cables",
      tagline: "Bandejas de cables de malla metálica y tipo escalera para rutas de cableado estructurado en centros de datos.",
      overview: "Las bandejas de cables de Wandtung ofrecen rutas estructuradas y accesibles para el cableado de energía y datos sobre los racks o bajo pisos elevados, disponibles en construcción de malla metálica y tipo escalera para diferentes requisitos de carga y llenado de cables.",
      keyFeatures: ["Construcción de malla metálica y tipo escalera", "Conectores de sección sin herramientas o atornillados", "Acabado galvanizado en zinc o por inmersión en caliente", "Accesorios modulares de empalme, te y codo"],
      specGroups: [{ title: "Construcción", specs: [{ label: "Tipo", value: "Malla metálica / Escalera" }, { label: "Ancho", value: "100 – 600 mm" }, { label: "Acabado", value: "Galvanizado en zinc / por inmersión en caliente" }] }],
      applications: ["Cableado aéreo de centro de datos", "Salas de telecomunicaciones", "Rutas de cableado industrial"],
      customizationOptions: ["Ancho", "Acabado", "Conjunto de accesorios"],
      standards: ["CE (LVD 2014/35/UE, EN 61537:2007) — líneas de escalera, bandeja y canal de fibra óptica", "Certificado de conformidad TÜV SÜD — sistema de bandeja y escalera de cables", "Certificado UL — bandejas de cables (CSA C22.2 No. 126.1, NFPA 70) y canal de fibra óptica (UL 2024)"],
      faqs: [
        { question: "Bandeja de malla metálica vs escalera: ¿cuál es mejor para un centro de datos?", answer: "La bandeja de malla es liviana, fácil de modificar en sitio y adecuada para cableado de datos/fibra estructurado, mientras que la bandeja tipo escalera ofrece mayor capacidad de carga y mejor disipación de calor para rutas de cables de energía más pesados; muchos centros de datos usan ambas, segregadas por tipo de cable." },
      ],
    },
    ru: {
      name: "Кабельный лоток",
      shortName: "Кабельный лоток",
      tagline: "Сетчатые и лестничные кабельные лотки для структурированных кабельных трасс ЦОД.",
      overview: "Кабельные лотки Wandtung обеспечивают структурированные, обслуживаемые трассы для силовых и информационных кабелей над стойками или под фальшполом, доступны в сетчатой и лестничной конструкции для различных требований к нагрузке и заполнению кабелями.",
      keyFeatures: ["Сетчатая и лестничная конструкция", "Безынструментальные или болтовые соединители секций", "Оцинкованное или горячеоцинкованное покрытие", "Модульные аксессуары для сращивания, тройников и отводов"],
      specGroups: [{ title: "Конструкция", specs: [{ label: "Тип", value: "Сетчатый / Лестничный" }, { label: "Ширина", value: "100 – 600 мм" }, { label: "Покрытие", value: "Оцинкованное / горячеоцинкованное" }] }],
      applications: ["Надпотолочная кабельная разводка ЦОД", "Телекоммуникационные помещения", "Промышленные кабельные трассы"],
      customizationOptions: ["Ширина", "Покрытие", "Комплект аксессуаров"],
      standards: ["CE (LVD 2014/35/EU, EN 61537:2007) — лестничные, желобные линии и лотки для оптоволокна", "Аттестат соответствия TÜV SÜD — система кабельных лотков и лестниц", "Сертифицировано UL — кабельные лотки (CSA C22.2 No. 126.1, NFPA 70) и лоток для оптоволокна (UL 2024)"],
      faqs: [
        { question: "Сетчатый или лестничный кабельный лоток — что лучше для ЦОД?", answer: "Сетчатый лоток лёгкий, легко модифицируется на месте и хорошо подходит для структурированной прокладки данных/оптоволокна, тогда как лестничный лоток обеспечивает более высокую несущую способность и лучший теплоотвод для более тяжёлых силовых кабельных трасс — многие ЦОД используют оба типа, разделяя их по типу кабеля." },
      ],
    },
    zh: {
      name: "电缆桥架",
      shortName: "电缆桥架",
      tagline: "适用于数据中心结构化线缆路径的网格式及梯式电缆桥架。",
      overview: "万电通电缆桥架为机架上方或活动地板下方的电力及数据线缆提供结构化、可维护的路径,提供网格式及梯式两种结构,满足不同承重及线缆填充需求。",
      keyFeatures: ["网格式与梯式结构", "免工具或螺栓连接段", "镀锌或热浸镀锌表面处理", "模块化连接件、三通及弯头配件"],
      specGroups: [{ title: "结构", specs: [{ label: "类型", value: "网格式/梯式" }, { label: "宽度", value: "100–600mm" }, { label: "表面处理", value: "镀锌/热浸镀锌" }] }],
      applications: ["数据中心架空布线", "电信机房", "工业布线通道"],
      customizationOptions: ["宽度", "表面处理", "配件套装"],
      standards: ["CE(低电压指令2014/35/EU、EN 61537:2007)——梯架、槽式及光纤桥架系列", "TÜV SÜD符合性证明——电缆桥架及梯架系统", "UL认证——电缆桥架(CSA C22.2 No. 126.1、NFPA 70)及光纤桥架(UL 2024)"],
      faqs: [
        { question: "网格式与梯式电缆桥架——哪种更适合数据中心？", answer: "网格式桥架重量轻、现场易于改装,适用于结构化数据/光纤布线;梯式桥架则具备更高承重能力及更好的散热性能,适用于较重的电力线缆路径——许多数据中心会按线缆类型分别使用这两种桥架。" },
      ],
    },
  },
  "fiber-optic-cable-tray": {
    ar: {
      name: "مجرى كابلات ألياف بصرية بوليمري",
      shortName: "مجرى ألياف بصرية",
      tagline: "نظام مجاري بوليمرية معياري يحمي نصف قطر انحناء كابل الألياف البصرية عبر المسار الكامل.",
      overview:
        "مجرى كابلات الألياف البصرية البوليمري من واندتونغ هو نظام مجاري بلاستيكية معياري مقاوم للهب بمعيار UL94-V0، بقنوات داخلية ناعمة ومستديرة تحمي كابل الألياف البصرية من الانحناءات الحادة والاحتكاك على طول المسار بالكامل. تتوفر مجموعة كاملة من التركيبات المعيارية - أقسام مستقيمة بعروض متعددة، وكوعات بزاوية 90 و45 درجة، ووصلات تفرع، ومقلصات، وأعمدة رأسية - تتصل ببعضها بوصلات سريعة بدون أدوات لبناء مسار محاط بالكامل للألياف بين الراكات والغرف والطوابق.",
      keyFeatures: [
        "بناء بوليمري مقاوم للهب بمعيار UL94-V0",
        "قناة داخلية ناعمة ومستديرة تحمي نصف قطر انحناء الألياف على طول المسار بالكامل",
        "مجموعة تركيبات معيارية كاملة: أقسام مستقيمة، كوعات 90/45 درجة، وصلات تفرع، مقلصات، أعمدة رأسية",
        "وصلات سريعة بدون أدوات بين الأقسام",
        "أقسام مستقيمة متوفرة بعروض 120 و240 و360 مم (عمق 100 مم)",
        "تركيبات مصغرة (50×50 مم) للتوجيه في المساحات الضيقة",
      ],
      specGroups: [
        {
          title: "البناء",
          specs: [
            { label: "المادة", value: "بوليمر مقاوم للهب بمعيار UL94-V0" },
            { label: "عروض الأقسام المستقيمة", value: "120 / 240 / 360 مم (عمق 100 مم)" },
            { label: "تركيبات مصغرة", value: "كوع 50 × 50 مم" },
            { label: "التوصيل", value: "وصلة سريعة بدون أدوات" },
          ],
        },
        {
          title: "مجموعة التركيبات",
          specs: [
            { label: "الكوعات", value: "90 درجة أفقي، 45 درجة عمودي" },
            { label: "الوصلات", value: "تفرع (عادي ومع منفذ توصيل)" },
            { label: "الانتقالات", value: "مقلص، عمود رأسي، مجرى مستقيم مربع" },
          ],
        },
      ],
      applications: [
        "مسارات كابلات الألياف البصرية بين الراكات والصفوف",
        "توجيه العمود الفقري للألياف بين الغرف والطوابق",
        "توزيع الألياف في مراكز البيانات والاتصالات",
        "غرف الكابلات المنظمة التي تتطلب حماية نصف قطر الانحناء",
      ],
      customizationOptions: ["عرض القسم", "مزيج التركيبات", "اللون", "OEM/ODM"],
      standards: ["مقاومة للهب بمعيار UL94-V0", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "لماذا استخدام مجرى مخصص لكابلات الألياف البصرية بدلاً من مجرى شبكي أو سلمي قياسي؟",
          answer:
            "يحيط المجرى البوليمري المخصص للألياف بالكابل بالكامل داخل قناة ناعمة ومستديرة تحافظ على الحد الأدنى لنصف قطر الانحناء وتحمي من الاحتكاك على طول المسار بالكامل، بينما تترك المجاري الشبكية أو السلمية المفتوحة الألياف مكشوفة وتعتمد على فني التركيب لإدارة نصف قطر الانحناء يدوياً عند كل منعطف.",
        },
        {
          question: "ما أنواع التركيبات المتوفرة لنظام مجرى الألياف البوليمري؟",
          answer:
            "يشمل النظام أقساماً مستقيمة بعروض متعددة، وكوعات بزاوية 90 و45 درجة (بما في ذلك كوع مصغر 50×50 مم)، ووصلات تفرع (عادية ومع منفذ توصيل)، ومقلصات، وأعمدة رأسية، ومجاري مستقيمة مربعة، وتتصل جميعها بوصلات سريعة بدون أدوات لبناء مسار محاط بالكامل.",
        },
      ],
    },
    fr: {
      name: "Chemin de câbles fibre optique en polymère",
      shortName: "Chemin de câbles fibre optique",
      tagline: "Système de chemin de câbles polymère modulaire protégeant le rayon de courbure de la fibre optique sur tout le trajet.",
      overview:
        "Le chemin de câbles fibre optique en polymère Wandtung est un système de chemin de câbles en plastique modulaire, ignifuge selon UL94-V0, avec des canaux internes lisses et arrondis qui protègent le câble à fibre optique des courbures serrées et de l'abrasion sur tout son parcours. La gamme complète de raccords modulaires — sections droites en plusieurs largeurs, coudes à 90° et 45°, tés, réducteurs et montants verticaux — s'assemble par connecteurs à clipsage sans outil pour construire un chemin de fibre entièrement clos entre les racks, les salles et les étages.",
      keyFeatures: [
        "Construction en polymère ignifuge UL94-V0",
        "Canal interne lisse et arrondi protégeant le rayon de courbure de la fibre sur tout le trajet",
        "Gamme complète de raccords modulaires : sections droites, coudes 90°/45°, tés, réducteurs, montants verticaux",
        "Connecteurs à clipsage sans outil entre les sections",
        "Sections droites disponibles en largeurs 120, 240 et 360 mm (profondeur 100 mm)",
        "Raccords de taille réduite (50x50 mm) pour un routage plus serré",
      ],
      specGroups: [
        {
          title: "Construction",
          specs: [
            { label: "Matériau", value: "Polymère ignifuge UL94-V0" },
            { label: "Largeurs des sections droites", value: "120 / 240 / 360 mm (profondeur 100 mm)" },
            { label: "Raccords de taille réduite", value: "Coude 50 x 50 mm" },
            { label: "Connexion", value: "Clipsage sans outil" },
          ],
        },
        {
          title: "Gamme de raccords",
          specs: [
            { label: "Coudes", value: "90° horizontal, montant 45°" },
            { label: "Jonctions", value: "Té (simple et avec port de connexion)" },
            { label: "Transitions", value: "Réducteur, montant vertical, conduit droit carré" },
          ],
        },
      ],
      applications: [
        "Chemins de câbles fibre optique entre racks et rangées",
        "Routage de la dorsale fibre inter-salles et inter-étages",
        "Distribution de fibre en centre de données et télécoms",
        "Salles de câblage structuré nécessitant une protection du rayon de courbure",
      ],
      customizationOptions: ["Largeur de section", "Mélange de raccords", "Couleur", "OEM/ODM"],
      standards: ["Ignifugation UL94-V0", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Pourquoi utiliser un chemin de câbles fibre optique dédié plutôt qu'un chemin de câbles standard en treillis ou à échelle ?",
          answer:
            "Un chemin de câbles fibre polymère dédié enferme complètement le câble dans un canal lisse et arrondi qui maintient le rayon de courbure minimum et protège contre l'abrasion sur tout le parcours, alors que les chemins de câbles ouverts en treillis ou à échelle laissent la fibre exposée et dépendent de l'installateur pour gérer manuellement le rayon de courbure à chaque virage.",
        },
        {
          question: "Quels types de raccords sont disponibles pour le système de chemin de câbles fibre en polymère ?",
          answer:
            "Le système comprend des sections droites en plusieurs largeurs, des coudes à 90° et 45° (dont un coude réduit 50x50 mm), des jonctions en té (simples et avec port de connexion), des réducteurs, des montants verticaux et des conduits droits carrés, tous connectés par des joints à clipsage sans outil pour construire un chemin entièrement clos.",
        },
      ],
    },
    es: {
      name: "Bandeja de cables de fibra óptica de polímero",
      shortName: "Bandeja de fibra óptica",
      tagline: "Sistema de bandeja de cables de polímero modular que protege el radio de curvatura de la fibra óptica en todo el trayecto.",
      overview:
        "La bandeja de cables de fibra óptica de polímero de Wandtung es un sistema de bandeja de cables de plástico modular, ignífugo según UL94-V0, con canales internos lisos y redondeados que protegen el cable de fibra óptica de curvas cerradas y abrasión a lo largo de toda su ruta. La gama completa de accesorios modulares —secciones rectas en varios anchos, codos de 90° y 45°, tés, reductores y montantes verticales— se ensambla con conectores a presión sin herramientas para construir una ruta de fibra completamente cerrada entre racks, salas y pisos.",
      keyFeatures: [
        "Construcción de polímero ignífugo UL94-V0",
        "Canal interno liso y redondeado que protege el radio de curvatura de la fibra en toda la ruta",
        "Gama completa de accesorios modulares: secciones rectas, codos 90°/45°, tés, reductores, montantes verticales",
        "Conectores a presión sin herramientas entre secciones",
        "Secciones rectas disponibles en anchos de 120, 240 y 360 mm (profundidad de 100 mm)",
        "Accesorios de tamaño reducido (50x50 mm) para enrutamiento más ajustado",
      ],
      specGroups: [
        {
          title: "Construcción",
          specs: [
            { label: "Material", value: "Polímero ignífugo UL94-V0" },
            { label: "Anchos de sección recta", value: "120 / 240 / 360 mm (profundidad de 100 mm)" },
            { label: "Accesorios de tamaño reducido", value: "Codo de 50 x 50 mm" },
            { label: "Conexión", value: "A presión, sin herramientas" },
          ],
        },
        {
          title: "Gama de accesorios",
          specs: [
            { label: "Codos", value: "90° horizontal, montante 45°" },
            { label: "Uniones", value: "Té (simple y con puerto de conexión)" },
            { label: "Transiciones", value: "Reductor, montante vertical, conducto recto cuadrado" },
          ],
        },
      ],
      applications: [
        "Rutas de cables de fibra óptica entre racks y filas",
        "Enrutamiento de troncal de fibra entre salas y pisos",
        "Distribución de fibra en centros de datos y telecomunicaciones",
        "Salas de cableado estructurado que requieren protección del radio de curvatura",
      ],
      customizationOptions: ["Ancho de sección", "Combinación de accesorios", "Color", "OEM/ODM"],
      standards: ["Ignifugación UL94-V0", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Por qué usar una bandeja de cables de fibra óptica dedicada en lugar de una bandeja de malla o escalera estándar?",
          answer:
            "Una bandeja de fibra de polímero dedicada encierra completamente el cable en un canal liso y redondeado que mantiene el radio de curvatura mínimo y protege contra la abrasión en toda la ruta, mientras que las bandejas de malla o escalera abiertas dejan la fibra expuesta y dependen del instalador para gestionar manualmente el radio de curvatura en cada giro.",
        },
        {
          question: "¿Qué tipos de accesorios están disponibles para el sistema de bandeja de fibra de polímero?",
          answer:
            "El sistema incluye secciones rectas en varios anchos, codos de 90° y 45° (incluido un codo reducido de 50x50 mm), uniones en té (simples y con puerto de conexión), reductores, montantes verticales y conductos rectos cuadrados, todos conectados con juntas a presión sin herramientas para construir una ruta completamente cerrada.",
        },
      ],
    },
    ru: {
      name: "Полимерный лоток для оптоволоконного кабеля",
      shortName: "Лоток для оптоволокна",
      tagline: "Модульная система полимерных лотков, защищающая радиус изгиба оптоволоконного кабеля на всём протяжении трассы.",
      overview:
        "Полимерный лоток для оптоволоконного кабеля Wandtung — это модульная система пластиковых лотков, огнестойкая по стандарту UL94-V0, с гладкими закруглёнными внутренними каналами, защищающими оптоволоконный кабель от резких изгибов и истирания по всей трассе. Полный набор модульных фитингов — прямые секции разной ширины, углы 90° и 45°, тройники, переходники и вертикальные стояки — соединяются защёлкивающимися разъёмами без инструментов, формируя полностью закрытую трассу для оптоволокна между стойками, помещениями и этажами.",
      keyFeatures: [
        "Огнестойкая полимерная конструкция по стандарту UL94-V0",
        "Гладкий закруглённый внутренний канал защищает радиус изгиба волокна по всей трассе",
        "Полный набор модульных фитингов: прямые секции, углы 90°/45°, тройники, переходники, вертикальные стояки",
        "Защёлкивающиеся разъёмы без инструментов между секциями",
        "Прямые секции доступны шириной 120, 240 и 360 мм (глубина 100 мм)",
        "Фитинги уменьшенного размера (50x50 мм) для более плотной прокладки",
      ],
      specGroups: [
        {
          title: "Конструкция",
          specs: [
            { label: "Материал", value: "Огнестойкий полимер UL94-V0" },
            { label: "Ширина прямых секций", value: "120 / 240 / 360 мм (глубина 100 мм)" },
            { label: "Фитинги уменьшенного размера", value: "Угол 50 x 50 мм" },
            { label: "Соединение", value: "Защёлкивающееся, без инструментов" },
          ],
        },
        {
          title: "Набор фитингов",
          specs: [
            { label: "Углы", value: "90° горизонтальный, 45° стояк" },
            { label: "Соединения", value: "Тройник (простой и с портом подключения)" },
            { label: "Переходы", value: "Переходник, вертикальный стояк, квадратный прямой канал" },
          ],
        },
      ],
      applications: [
        "Трассы оптоволоконного кабеля между стойками и рядами",
        "Прокладка магистрального оптоволокна между помещениями и этажами",
        "Распределение оптоволокна в ЦОД и телекоммуникациях",
        "Помещения структурированной кабельной системы, требующие защиты радиуса изгиба",
      ],
      customizationOptions: ["Ширина секции", "Набор фитингов", "Цвет", "OEM/ODM"],
      standards: ["Огнестойкость по UL94-V0", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Зачем использовать специализированный лоток для оптоволокна вместо стандартного сетчатого или лестничного лотка?",
          answer:
            "Специализированный полимерный лоток для оптоволокна полностью закрывает кабель в гладком закруглённом канале, поддерживающем минимальный радиус изгиба и защищающем от истирания по всей трассе, тогда как открытые сетчатые или лестничные лотки оставляют волокно незащищённым и требуют от монтажника вручную контролировать радиус изгиба на каждом повороте.",
        },
        {
          question: "Какие типы фитингов доступны для полимерной системы лотков для оптоволокна?",
          answer:
            "Система включает прямые секции разной ширины, углы 90° и 45° (включая уменьшенный угол 50x50 мм), тройниковые соединения (простые и с портом подключения), переходники, вертикальные стояки и квадратные прямые каналы — все соединяются защёлкивающимися разъёмами без инструментов для формирования полностью закрытой трассы.",
        },
      ],
    },
    zh: {
      name: "高分子光纤滑道",
      shortName: "光纤滑道",
      tagline: "模块化高分子线槽系统,全程保护光纤弯曲半径。",
      overview:
        "万电通高分子光纤滑道是一款模块化、符合UL94-V0阻燃标准的塑料线槽系统,内部采用光滑圆弧通道,在整个布线路径上保护光纤免受锐角弯曲及磨损。全系列模块化配件——多规格直线段、90度及45度弯头、三通、变径接头及垂直立管——通过免工具卡扣连接,构建机架、机房及楼层之间完全封闭的光纤通道。",
      keyFeatures: [
        "符合UL94-V0阻燃标准的高分子材料构造",
        "光滑圆弧内通道,全程保护光纤弯曲半径",
        "全系列模块化配件:直线段、90度/45度弯头、三通、变径接头、垂直立管",
        "各段之间采用免工具卡扣连接",
        "直线段提供120mm、240mm及360mm多种宽度(深度100mm)",
        "配备缩小规格(50×50mm)配件,适应狭窄空间布线",
      ],
      specGroups: [
        {
          title: "结构",
          specs: [
            { label: "材质", value: "符合UL94-V0阻燃标准的高分子材料" },
            { label: "直线段宽度", value: "120/240/360mm(深度100mm)" },
            { label: "缩小规格配件", value: "50×50mm弯头" },
            { label: "连接方式", value: "免工具卡扣连接" },
          ],
        },
        {
          title: "配件系列",
          specs: [
            { label: "弯头", value: "90度水平弯头、45度立管弯头" },
            { label: "接口", value: "三通(普通及带连接端口)" },
            { label: "过渡件", value: "变径接头、垂直立管、方形直线线槽" },
          ],
        },
      ],
      applications: ["机架及机排间光纤布线路径", "机房间及楼层间光纤主干布线", "数据中心及电信光纤配线", "需要弯曲半径保护的结构化布线机房"],
      customizationOptions: ["段宽规格", "配件组合", "颜色", "OEM/ODM"],
      standards: ["符合UL94-V0阻燃标准", "认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "为什么要使用专用光纤滑道而非标准桥架或梯架？",
          answer:
            "专用高分子光纤滑道将光纤完全封闭在光滑圆弧通道内,在整个布线路径上维持最小弯曲半径并防止磨损;而开放式桥架或梯架会使光纤暴露在外,需要安装人员在每个转弯处手动控制弯曲半径。",
        },
        {
          question: "高分子光纤滑道系统提供哪些配件类型？",
          answer:
            "该系统包含多规格直线段、90度及45度弯头(含缩小规格50×50mm弯头)、三通接口(普通及带连接端口)、变径接头、垂直立管及方形直线线槽,均采用免工具卡扣接头连接,构建完全封闭的布线通道。",
        },
      ],
    },
  },
  "wire-mesh-cable-tray": {
    ar: {
      name: "مجرى كابلات شبكي سلكي",
      shortName: "مجرى شبكي",
      tagline: "مجرى سلكي شبكي ملحوم خفيف الوزن لمسارات كابلات منظمة قابلة للتعديل ميدانياً.",
      overview: "مجرى الكابلات الشبكي السلكي من واندتونغ هو إنشاء سلكي ملحوم خفيف الوزن ومهوّى وسهل القطع وإعادة التكوين في الموقع، ما يجعله خياراً شائعاً لمسارات كابلات البيانات والألياف المنظمة فوق الراكات أو على طول مسارات الاحتواء.",
      keyFeatures: ["إنشاء سلكي ملحوم — خفيف الوزن وعالي التهوية", "قابل للقطع وإعادة التكوين ميدانياً بدون أدوات خاصة", "نطاق واسع من العروض القياسية", "خيارات تشطيب مطلية بالزنك أو من الفولاذ المقاوم للصدأ"],
      specGroups: [{ title: "البناء", specs: [{ label: "النوع", value: "شبكة سلكية ملحومة" }, { label: "العرض", value: "50 – 600 مم" }, { label: "التشطيب", value: "مطلي بالزنك / فولاذ مقاوم للصدأ" }] }],
      applications: ["كابلات بيانات/ألياف منظمة", "كابلات علوية فوق الراكات", "غرف الاتصالات"],
      customizationOptions: ["العرض", "التشطيب", "وصلات الملحقات"],
      standards: ["معتمد UL — مجاري الكابلات (CSA C22.2 No. 126.1، NFPA 70)", "شهادة مطابقة TÜV SÜD — نظام مجرى الكابلات"],
      faqs: [
        { question: "مجرى الكابلات الشبكي مقابل السلمي — أيهما أفضل لمركز البيانات؟", answer: "مجرى الشبكة خفيف الوزن وسهل التعديل في الموقع ويناسب كابلات البيانات/الألياف المنظمة، بينما يوفر المجرى السلمي سعة حمل أعلى وتبديداً حرارياً أفضل لمسارات كابلات الطاقة الأثقل — تستخدم مراكز بيانات كثيرة كليهما، مفصولين حسب نوع الكابل." },
      ],
    },
    fr: {
      name: "Chemin de câbles grillagé",
      shortName: "Chemin grillagé",
      tagline: "Chemin grillagé soudé léger pour cheminements de câbles structurés modifiables sur site.",
      overview: "Le chemin de câbles grillagé Wandtung est une construction en fil soudé légère, ventilée et facile à couper et reconfigurer sur site, ce qui en fait un choix courant pour les cheminements de câbles de données et de fibre structurés au-dessus des racks ou le long des routes de confinement.",
      keyFeatures: ["Construction en fil soudé — légère et hautement ventilée", "Coupable et reconfigurable sur site sans outils spéciaux", "Large gamme de largeurs standard", "Options de finition zinguée ou inoxydable"],
      specGroups: [{ title: "Construction", specs: [{ label: "Type", value: "Grillage soudé" }, { label: "Largeur", value: "50 – 600 mm" }, { label: "Finition", value: "Zinguée / acier inoxydable" }] }],
      applications: ["Câblage de données/fibre structuré", "Câblage aérien au-dessus des racks", "Salles télécoms"],
      customizationOptions: ["Largeur", "Finition", "Épissures d'accessoires"],
      standards: ["Certifié UL — chemins de câbles (CSA C22.2 No. 126.1, NFPA 70)", "Attestation de conformité TÜV SÜD — système de chemin de câbles"],
      faqs: [
        { question: "Chemin de câbles grillagé vs échelle — lequel est le meilleur pour un centre de données ?", answer: "Le chemin grillagé est léger, facile à modifier sur site et bien adapté au câblage de données/fibre structuré, tandis que le chemin échelle offre une capacité de charge plus élevée et une meilleure dissipation thermique pour les cheminements de câbles d'alimentation plus lourds — de nombreux centres de données utilisent les deux, séparés par type de câble." },
      ],
    },
    es: {
      name: "Bandeja de cables de malla metálica",
      shortName: "Bandeja de malla",
      tagline: "Bandeja de malla metálica soldada liviana para rutas de cableado estructurado modificables en campo.",
      overview: "La bandeja de cables de malla metálica de Wandtung es una construcción de alambre soldado liviana, ventilada y fácil de cortar y reconfigurar en sitio, lo que la convierte en una opción común para rutas de cableado de datos y fibra estructurado sobre racks o a lo largo de rutas de contención.",
      keyFeatures: ["Construcción de alambre soldado: liviana y altamente ventilada", "Cortable y reconfigurable en campo sin herramientas especiales", "Amplia gama de anchos estándar", "Opciones de acabado galvanizado en zinc o de acero inoxidable"],
      specGroups: [{ title: "Construcción", specs: [{ label: "Tipo", value: "Malla metálica soldada" }, { label: "Ancho", value: "50 – 600 mm" }, { label: "Acabado", value: "Galvanizado en zinc / acero inoxidable" }] }],
      applications: ["Cableado de datos/fibra estructurado", "Cableado aéreo sobre racks", "Salas de telecomunicaciones"],
      customizationOptions: ["Ancho", "Acabado", "Empalmes de accesorios"],
      standards: ["Certificado UL — bandejas de cables (CSA C22.2 No. 126.1, NFPA 70)", "Certificado de conformidad TÜV SÜD — sistema de bandejas de cables"],
      faqs: [
        { question: "Bandeja de malla metálica vs escalera: ¿cuál es mejor para un centro de datos?", answer: "La bandeja de malla es liviana, fácil de modificar en sitio y adecuada para cableado de datos/fibra estructurado, mientras que la bandeja tipo escalera ofrece mayor capacidad de carga y mejor disipación de calor para rutas de cables de energía más pesados; muchos centros de datos usan ambas, segregadas por tipo de cable." },
      ],
    },
    ru: {
      name: "Сетчатый кабельный лоток",
      shortName: "Сетчатый лоток",
      tagline: "Лёгкий сварной сетчатый лоток для структурированных, модифицируемых на месте кабельных трасс.",
      overview: "Сетчатый кабельный лоток Wandtung — это сварная проволочная конструкция, лёгкая, вентилируемая и легко режущаяся и переконфигурируемая на месте, что делает его распространённым выбором для структурированных трасс данных и оптоволокна над стойками или вдоль маршрутов изоляции.",
      keyFeatures: ["Сварная проволочная конструкция — лёгкая и хорошо вентилируемая", "Возможность резки и переконфигурации на месте без специальных инструментов", "Широкий диапазон стандартных ширин", "Варианты оцинкованного или нержавеющего покрытия"],
      specGroups: [{ title: "Конструкция", specs: [{ label: "Тип", value: "Сварная сетка" }, { label: "Ширина", value: "50 – 600 мм" }, { label: "Покрытие", value: "Оцинкованное / нержавеющая сталь" }] }],
      applications: ["Структурированная прокладка данных/оптоволокна", "Надпотолочная кабельная разводка над стойками", "Телекоммуникационные помещения"],
      customizationOptions: ["Ширина", "Покрытие", "Аксессуары для сращивания"],
      standards: ["Сертифицировано UL — кабельные лотки (CSA C22.2 No. 126.1, NFPA 70)", "Аттестат соответствия TÜV SÜD — система кабельных лотков"],
      faqs: [
        { question: "Сетчатый или лестничный кабельный лоток — что лучше для ЦОД?", answer: "Сетчатый лоток лёгкий, легко модифицируется на месте и хорошо подходит для структурированной прокладки данных/оптоволокна, тогда как лестничный лоток обеспечивает более высокую несущую способность и лучший теплоотвод для более тяжёлых силовых кабельных трасс — многие ЦОД используют оба типа, разделяя их по типу кабеля." },
      ],
    },
    zh: {
      name: "网格式电缆桥架",
      shortName: "网格式桥架",
      tagline: "轻质焊接网格桥架,适用于可现场改装的结构化线缆路径。",
      overview: "万电通网格式电缆桥架采用焊接钢丝结构,重量轻、通风性好,便于现场切割及重新配置,是机架上方或封闭通道沿线结构化数据及光纤布线的常见选择。",
      keyFeatures: ["焊接钢丝结构——轻质、高通风性", "可现场切割及重新配置,无需专用工具", "标准宽度规格齐全", "可选镀锌或不锈钢表面处理"],
      specGroups: [{ title: "结构", specs: [{ label: "类型", value: "焊接网格" }, { label: "宽度", value: "50–600mm" }, { label: "表面处理", value: "镀锌/不锈钢" }] }],
      applications: ["结构化数据/光纤布线", "机架上方架空布线", "电信机房"],
      customizationOptions: ["宽度", "表面处理", "连接配件"],
      standards: ["UL认证——电缆桥架(CSA C22.2 No. 126.1、NFPA 70)", "TÜV SÜD符合性证明——电缆桥架系统"],
      faqs: [
        { question: "网格式与梯式电缆桥架——哪种更适合数据中心？", answer: "网格式桥架重量轻、现场易于改装,适用于结构化数据/光纤布线;梯式桥架则具备更高承重能力及更好的散热性能,适用于较重的电力线缆路径——许多数据中心会按线缆类型分别使用这两种桥架。" },
      ],
    },
  },
  "ladder-cable-tray": {
    ar: {
      name: "مجرى كابلات سلمي",
      shortName: "مجرى سلمي",
      tagline: "مجرى نوع سلمي عالي السعة لمسارات كابلات الطاقة الأثقل.",
      overview: "يستخدم مجرى الكابلات السلمي من واندتونغ إنشاء درجات وقضبان مصنف لملء وسعة حمل كابلات أعلى من الشبكي السلكي، مع تبديد حراري جيد لمسارات كابلات الطاقة الأثقل عبر مراكز البيانات وغرف الاتصالات والمنشآت الصناعية.",
      keyFeatures: ["إنشاء درجات وقضبان لسعة حمل عالية", "تبديد حراري جيد لحزم كابلات الطاقة", "موصلات أقسام مبرشمة أو بدون أدوات", "نطاق واسع من العروض القياسية وتباعد الدرجات"],
      specGroups: [{ title: "البناء", specs: [{ label: "النوع", value: "سلمي (درجات وقضبان)" }, { label: "العرض", value: "100 – 900 مم" }, { label: "التشطيب", value: "مطلي بالزنك / مجلفن بالغمس الساخن" }] }],
      applications: ["مسارات كابلات الطاقة", "مسارات الكابلات الصناعية", "توجيه العمود الفقري للاتصالات ومركز البيانات"],
      customizationOptions: ["العرض", "تباعد الدرجات", "التشطيب"],
      standards: ["CE (توجيه الجهد المنخفض 2014/35/EU، EN 61537:2007) — شهادة رقم M.2021.206.C67668", "شهادة مطابقة TÜV SÜD — نظام مجرى وسلم الكابلات", "معتمد UL — مجاري الكابلات (CSA C22.2 No. 126.1، NFPA 70)"],
      faqs: [
        { question: "متى يجب أن أستخدم المجرى السلمي بدلاً من الشبكي السلكي؟", answer: "يُفضَّل المجرى السلمي عموماً لحزم كابلات الطاقة الأثقل والمسافات غير المدعومة الأطول، حيث يوفر إنشاؤه من الدرجات والقضبان سعة حمل أعلى وتبديداً حرارياً أفضل من المجرى الشبكي السلكي خفيف الوزن." },
      ],
    },
    fr: {
      name: "Chemin de câbles échelle",
      shortName: "Chemin échelle",
      tagline: "Chemin de câbles de type échelle à haute capacité pour cheminements de câbles d'alimentation plus lourds.",
      overview: "Le chemin de câbles échelle Wandtung utilise une construction à barreaux et rails classée pour un remplissage de câbles et une capacité de charge plus élevés que le grillage, avec une bonne dissipation thermique pour les cheminements de câbles d'alimentation plus lourds dans les centres de données, salles télécoms et installations industrielles.",
      keyFeatures: ["Construction à barreaux et rails pour une capacité de charge élevée", "Bonne dissipation thermique pour les faisceaux de câbles d'alimentation", "Connecteurs de section boulonnés ou sans outil", "Large gamme de largeurs standard et d'espacement de barreaux"],
      specGroups: [{ title: "Construction", specs: [{ label: "Type", value: "Échelle (barreaux et rails)" }, { label: "Largeur", value: "100 – 900 mm" }, { label: "Finition", value: "Zinguée / galvanisée à chaud" }] }],
      applications: ["Cheminements de câbles d'alimentation", "Cheminements de câbles industriels", "Routage backbone télécoms et centre de données"],
      customizationOptions: ["Largeur", "Espacement des barreaux", "Finition"],
      standards: ["CE (LVD 2014/35/UE, EN 61537:2007) — Certificat n° M.2021.206.C67668", "Attestation de conformité TÜV SÜD — système de chemin et échelle de câbles", "Certifié UL — chemins de câbles (CSA C22.2 No. 126.1, NFPA 70)"],
      faqs: [
        { question: "Quand dois-je utiliser un chemin échelle plutôt qu'un chemin grillagé ?", answer: "Le chemin échelle est généralement préféré pour les faisceaux de câbles d'alimentation plus lourds et les portées non supportées plus longues, car sa construction à barreaux et rails offre une capacité de charge plus élevée et une meilleure dissipation thermique que le chemin grillagé léger." },
      ],
    },
    es: {
      name: "Bandeja de cables tipo escalera",
      shortName: "Bandeja escalera",
      tagline: "Bandeja de cables tipo escalera de alta capacidad para rutas de cables de energía más pesados.",
      overview: "La bandeja de cables tipo escalera de Wandtung utiliza una construcción de peldaños y rieles clasificada para un mayor llenado de cables y capacidad de carga que la malla metálica, con buena disipación de calor para rutas de cables de energía más pesados en centros de datos, salas de telecomunicaciones e instalaciones industriales.",
      keyFeatures: ["Construcción de peldaños y rieles para alta capacidad de carga", "Buena disipación de calor para haces de cables de energía", "Conectores de sección atornillados o sin herramientas", "Amplia gama de anchos estándar y espaciado de peldaños"],
      specGroups: [{ title: "Construcción", specs: [{ label: "Tipo", value: "Escalera (peldaños y rieles)" }, { label: "Ancho", value: "100 – 900 mm" }, { label: "Acabado", value: "Galvanizado en zinc / por inmersión en caliente" }] }],
      applications: ["Rutas de cables de energía", "Rutas de cableado industrial", "Enrutamiento troncal de telecomunicaciones y centros de datos"],
      customizationOptions: ["Ancho", "Espaciado de peldaños", "Acabado"],
      standards: ["CE (LVD 2014/35/UE, EN 61537:2007) — Certificado n.º M.2021.206.C67668", "Certificado de conformidad TÜV SÜD — sistema de bandeja y escalera de cables", "Certificado UL — bandejas de cables (CSA C22.2 No. 126.1, NFPA 70)"],
      faqs: [
        { question: "¿Cuándo debo usar bandeja escalera en lugar de malla metálica?", answer: "La bandeja escalera generalmente se prefiere para haces de cables de energía más pesados y tramos no soportados más largos, ya que su construcción de peldaños y rieles ofrece mayor capacidad de carga y mejor disipación de calor que la bandeja de malla metálica liviana." },
      ],
    },
    ru: {
      name: "Лестничный кабельный лоток",
      shortName: "Лестничный лоток",
      tagline: "Высокопрочный лестничный кабельный лоток для более тяжёлых силовых кабельных трасс.",
      overview: "Лестничный кабельный лоток Wandtung использует конструкцию из перекладин и направляющих, рассчитанную на большее заполнение кабелями и несущую способность, чем сетчатый лоток, с хорошим теплоотводом для более тяжёлых силовых кабельных трасс в ЦОД, телекоммуникационных помещениях и промышленных объектах.",
      keyFeatures: ["Конструкция из перекладин и направляющих для высокой несущей способности", "Хороший теплоотвод для пучков силовых кабелей", "Болтовые или безынструментальные соединители секций", "Широкий диапазон стандартных ширин и шага перекладин"],
      specGroups: [{ title: "Конструкция", specs: [{ label: "Тип", value: "Лестничный (перекладины и направляющие)" }, { label: "Ширина", value: "100 – 900 мм" }, { label: "Покрытие", value: "Оцинкованное / горячеоцинкованное" }] }],
      applications: ["Трассы силовых кабелей", "Промышленные кабельные трассы", "Магистральная разводка телекоммуникаций и ЦОД"],
      customizationOptions: ["Ширина", "Шаг перекладин", "Покрытие"],
      standards: ["CE (LVD 2014/35/EU, EN 61537:2007) — Сертификат № M.2021.206.C67668", "Аттестат соответствия TÜV SÜD — система кабельных лотков и лестниц", "Сертифицировано UL — кабельные лотки (CSA C22.2 No. 126.1, NFPA 70)"],
      faqs: [
        { question: "Когда следует использовать лестничный лоток вместо сетчатого?", answer: "Лестничный лоток обычно предпочтителен для более тяжёлых пучков силовых кабелей и более длинных неподдерживаемых пролётов, поскольку его конструкция из перекладин и направляющих обеспечивает более высокую несущую способность и лучший теплоотвод, чем лёгкий сетчатый лоток." },
      ],
    },
    zh: {
      name: "梯式电缆桥架",
      shortName: "梯式桥架",
      tagline: "适用于较重电力线缆路径的高承重梯式桥架。",
      overview: "万电通梯式电缆桥架采用横档与侧梁结构,相比网格式桥架具备更高的线缆填充率及承重能力,为数据中心、电信机房及工业设施中较重的电力线缆路径提供良好的散热性能。",
      keyFeatures: ["横档侧梁结构,承重能力强", "电力线缆束散热性能良好", "螺栓连接或免工具连接段", "标准宽度及横档间距规格齐全"],
      specGroups: [{ title: "结构", specs: [{ label: "类型", value: "梯式(横档侧梁)" }, { label: "宽度", value: "100–900mm" }, { label: "表面处理", value: "镀锌/热浸镀锌" }] }],
      applications: ["电力线缆路径", "工业布线通道", "电信及数据中心主干布线"],
      customizationOptions: ["宽度", "横档间距", "表面处理"],
      standards: ["CE(低电压指令2014/35/EU、EN 61537:2007)——证书编号M.2021.206.C67668", "TÜV SÜD符合性证明——电缆桥架及梯架系统", "UL认证——电缆桥架(CSA C22.2 No. 126.1、NFPA 70)"],
      faqs: [
        { question: "什么情况下应使用梯式桥架而非网格式桥架？", answer: "梯式桥架通常更适用于较重的电力线缆束及较长的无支撑跨距,因其横档侧梁结构相比轻质网格式桥架具备更高的承重能力及更好的散热性能。" },
      ],
    },
  },
  "aluminum-cable-ladder": {
    ar: {
      name: "سلم كابلات من سبيكة الألومنيوم",
      shortName: "سلم ألومنيوم",
      tagline: "سلم كابلات خفيف الوزن ومقاوم للتآكل من الألومنيوم، بتجميع سريع بدون أدوات بنظام تجويف على شكل T.",
      overview:
        "سلم الكابلات من سبيكة الألومنيوم من واندتونغ مصنوع من بثق سبيكة الألومنيوم 6063-T5 بمعالجة سطحية أنودة، ما يمنحه وزناً يبلغ نحو ثلث وزن سلم كابلات فولاذي مكافئ مع بقائه مقاوماً للتآكل، ويتميز بنظام اتصال دقيق بتجويف على شكل T يُجمَّع بمسامير مقاومة للتآكل بمقاس M8 - دون الحاجة إلى لحام - لتركيب سريع ومعياري في بيئات مراكز البيانات وغرف الخوادم.",
      keyFeatures: [
        "بثق سبيكة ألومنيوم 6063-T5، بمعالجة سطحية أنودة",
        "خفيف الوزن - نحو 1/3 وزن سلم كابلات فولاذي مكافئ",
        "مقاومة شد ≥160 ميجاباسكال",
        "نظام اتصال دقيق بتجويف على شكل T، دون الحاجة إلى لحام",
        "قضبان جانبية ألومنيوم متينة ودرجات عرضية من سبيكة الألومنيوم",
        "تجميع بمسامير مقاومة للتآكل بمقاس M8 لتركيب سريع ومعياري",
        "مقاوم للتآكل؛ متوفر OEM/ODM",
      ],
      specGroups: [
        {
          title: "البناء",
          specs: [
            { label: "النوع", value: "سلمي (درجات وقضبان)، سبيكة ألومنيوم" },
            { label: "المادة", value: "بثق سبيكة ألومنيوم 6063-T5" },
            { label: "المعالجة السطحية", value: "أنودة" },
            { label: "مقاومة الشد", value: "≥160 ميجاباسكال" },
            { label: "الوزن", value: "نحو 1/3 وزن سلم كابلات فولاذي مكافئ" },
          ],
        },
        {
          title: "التجميع",
          specs: [
            { label: "نظام الاتصال", value: "تجويف دقيق على شكل T، تركيب بدون أدوات" },
            { label: "المثبتات", value: "مسامير مقاومة للتآكل M8، دون الحاجة إلى لحام" },
          ],
        },
      ],
      applications: ["مسارات كابلات الطاقة في مراكز البيانات", "غرف الخوادم", "غرف معدات الاتصالات", "البيئات الساحلية أو المسببة للتآكل التي تتطلب سلماً غير حديدي"],
      customizationOptions: ["العرض", "تباعد الدرجات", "التشطيب", "OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "لماذا اختيار سلم كابلات من الألومنيوم بدلاً من سلم فولاذي؟",
          answer:
            "يزن سلم الكابلات من الألومنيوم نحو ثلث وزن سلم فولاذي مكافئ، ما يبسّط التركيب العلوي ويقلل الحمل الإنشائي، بينما يقاوم بناؤه من الألومنيوم 6063-T5 المؤكسد بالأنودة التآكل دون الحاجة إلى الطلاء بالزنك أو التغليف بالجلفنة الساخنة التي تتطلبها السلالم الفولاذية - وهو مفيد في البيئات الرطبة أو الساحلية أو المسببة للتآكل.",
        },
        {
          question: "هل يتطلب سلم الكابلات من الألومنيوم لحاماً للتجميع؟",
          answer:
            "لا. تتصل الأقسام عبر نظام تجويف دقيق على شكل T يُثبَّت بمسامير مقاومة للتآكل بمقاس M8، ما يتيح تركيباً سريعاً ومعيارياً وبأدوات بسيطة دون الحاجة إلى لحام في الموقع.",
        },
      ],
    },
    fr: {
      name: "Échelle à câbles en alliage d'aluminium",
      shortName: "Échelle en aluminium",
      tagline: "Échelle à câbles en aluminium légère et résistante à la corrosion, à assemblage rapide sans outil par rainure en T.",
      overview:
        "L'échelle à câbles en alliage d'aluminium Wandtung est fabriquée en aluminium extrudé 6063-T5 avec traitement de surface anodisé, lui conférant environ un tiers du poids d'une échelle en acier équivalente tout en restant résistante à la corrosion, avec un système de connexion à rainure en T de précision qui s'assemble avec des boulons anticorrosion M8 — sans soudure requise — pour une installation rapide et modulaire dans les environnements de centres de données et de salles serveurs.",
      keyFeatures: [
        "Aluminium extrudé 6063-T5, traitement de surface anodisé",
        "Léger — environ 1/3 du poids d'une échelle en acier équivalente",
        "Résistance à la traction ≥160 MPa",
        "Système de connexion à rainure en T de précision, sans soudure requise",
        "Rails latéraux en aluminium robustes et barreaux transversaux en alliage d'aluminium",
        "Assemblage par boulons anticorrosion M8 pour une installation rapide et modulaire",
        "Résistant à la corrosion ; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Construction",
          specs: [
            { label: "Type", value: "Échelle (barreaux et rails), alliage d'aluminium" },
            { label: "Matériau", value: "Aluminium extrudé 6063-T5" },
            { label: "Traitement de surface", value: "Anodisé" },
            { label: "Résistance à la traction", value: "≥160 MPa" },
            { label: "Poids", value: "~1/3 d'une échelle en acier équivalente" },
          ],
        },
        {
          title: "Assemblage",
          specs: [
            { label: "Système de connexion", value: "Rainure en T de précision, ajustement sans outil" },
            { label: "Fixations", value: "Boulons anticorrosion M8, sans soudure requise" },
          ],
        },
      ],
      applications: ["Cheminements de câbles d'alimentation en centre de données", "Salles serveurs", "Salles d'équipement télécoms", "Environnements corrosifs ou côtiers nécessitant une échelle non ferreuse"],
      customizationOptions: ["Largeur", "Espacement des barreaux", "Finition", "OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Pourquoi choisir une échelle en aluminium plutôt qu'une échelle en acier ?",
          answer:
            "L'échelle en aluminium pèse environ un tiers d'une échelle en acier équivalente, simplifiant l'installation en hauteur et réduisant la charge structurelle, tandis que sa construction en aluminium 6063-T5 anodisé résiste à la corrosion sans le zingage ou la galvanisation à chaud que nécessitent les échelles en acier — utile dans les environnements humides, côtiers ou corrosifs.",
        },
        {
          question: "L'échelle en aluminium nécessite-t-elle une soudure pour être assemblée ?",
          answer:
            "Non. Les sections se connectent via un système de rainure en T de précision fixé par des boulons anticorrosion M8, permettant une installation rapide, modulaire et avec un outillage léger, sans soudure sur site.",
        },
      ],
    },
    es: {
      name: "Escalera de cables de aleación de aluminio",
      shortName: "Escalera de aluminio",
      tagline: "Escalera de cables de aluminio ligera y resistente a la corrosión, con montaje rápido sin herramientas mediante ranura en T.",
      overview:
        "La escalera de cables de aleación de aluminio de Wandtung está fabricada en aluminio extruido 6063-T5 con tratamiento de superficie anodizado, lo que le da aproximadamente un tercio del peso de una escalera de acero equivalente mientras permanece resistente a la corrosión, con un sistema de conexión de ranura en T de precisión que se ensambla con pernos anticorrosión M8 — sin necesidad de soldadura — para una instalación rápida y modular en entornos de centros de datos y salas de servidores.",
      keyFeatures: [
        "Aluminio extruido 6063-T5, tratamiento de superficie anodizado",
        "Ligero: aproximadamente 1/3 del peso de una escalera de acero equivalente",
        "Resistencia a la tracción ≥160 MPa",
        "Sistema de conexión de ranura en T de precisión, sin necesidad de soldadura",
        "Rieles laterales de aluminio resistentes y peldaños transversales de aleación de aluminio",
        "Montaje con pernos anticorrosión M8 para una instalación rápida y modular",
        "Resistente a la corrosión; OEM/ODM disponible",
      ],
      specGroups: [
        {
          title: "Construcción",
          specs: [
            { label: "Tipo", value: "Escalera (peldaños y rieles), aleación de aluminio" },
            { label: "Material", value: "Aluminio extruido 6063-T5" },
            { label: "Tratamiento de superficie", value: "Anodizado" },
            { label: "Resistencia a la tracción", value: "≥160 MPa" },
            { label: "Peso", value: "~1/3 de una escalera de acero equivalente" },
          ],
        },
        {
          title: "Montaje",
          specs: [
            { label: "Sistema de conexión", value: "Ranura en T de precisión, ajuste sin herramientas" },
            { label: "Sujetadores", value: "Pernos anticorrosión M8, sin necesidad de soldadura" },
          ],
        },
      ],
      applications: ["Rutas de cables de energía en centros de datos", "Salas de servidores", "Salas de equipos de telecomunicaciones", "Entornos corrosivos o costeros que requieren una escalera no ferrosa"],
      customizationOptions: ["Ancho", "Espaciado de peldaños", "Acabado", "OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Por qué elegir una escalera de aluminio en lugar de una escalera de acero?",
          answer:
            "La escalera de aluminio pesa aproximadamente un tercio de una escalera de acero equivalente, lo que simplifica la instalación aérea y reduce la carga estructural, mientras que su construcción de aluminio 6063-T5 anodizado resiste la corrosión sin necesitar el zincado o galvanizado en caliente que requieren las escaleras de acero, útil en entornos húmedos, costeros o corrosivos.",
        },
        {
          question: "¿La escalera de aluminio requiere soldadura para su montaje?",
          answer:
            "No. Las secciones se conectan mediante un sistema de ranura en T de precisión fijado con pernos anticorrosión M8, lo que permite una instalación rápida, modular y con herramientas ligeras sin soldadura in situ.",
        },
      ],
    },
    ru: {
      name: "Лестничный кабельный лоток из алюминиевого сплава",
      shortName: "Алюминиевый лестничный лоток",
      tagline: "Лёгкий, коррозионностойкий алюминиевый лестничный лоток с безынструментальной сборкой по системе Т-паза.",
      overview:
        "Лестничный кабельный лоток из алюминиевого сплава Wandtung изготовлен из экструдированного алюминиевого сплава 6063-T5 с анодированной поверхностью, что даёт ему примерно треть веса эквивалентного стального лестничного лотка при сохранении коррозионной стойкости, с прецизионной системой соединения по Т-пазу, собираемой антикоррозийными болтами M8 — без необходимости сварки — для быстрого модульного монтажа в ЦОД и серверных помещениях.",
      keyFeatures: [
        "Экструдированный алюминиевый сплав 6063-T5, анодированная поверхность",
        "Лёгкий вес — примерно 1/3 веса эквивалентного стального лестничного лотка",
        "Предел прочности на разрыв ≥160 МПа",
        "Прецизионная система соединения по Т-пазу, без необходимости сварки",
        "Прочные алюминиевые боковые направляющие и поперечные перекладины из алюминиевого сплава",
        "Сборка на антикоррозийных болтах M8 для быстрого модульного монтажа",
        "Коррозионностойкий; доступны OEM/ODM",
      ],
      specGroups: [
        {
          title: "Конструкция",
          specs: [
            { label: "Тип", value: "Лестничный (перекладины и направляющие), алюминиевый сплав" },
            { label: "Материал", value: "Экструдированный алюминиевый сплав 6063-T5" },
            { label: "Обработка поверхности", value: "Анодирование" },
            { label: "Предел прочности на разрыв", value: "≥160 МПа" },
            { label: "Вес", value: "~1/3 веса эквивалентного стального лотка" },
          ],
        },
        {
          title: "Сборка",
          specs: [
            { label: "Система соединения", value: "Прецизионный Т-паз, безынструментальная подгонка" },
            { label: "Крепёж", value: "Антикоррозийные болты M8, без необходимости сварки" },
          ],
        },
      ],
      applications: ["Трассы силовых кабелей в ЦОД", "Серверные помещения", "Помещения телекоммуникационного оборудования", "Влажные или прибрежные коррозионные среды, требующие неферромагнитного лотка"],
      customizationOptions: ["Ширина", "Шаг перекладин", "Покрытие", "OEM/ODM"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Почему стоит выбрать алюминиевый лестничный лоток вместо стального?",
          answer:
            "Алюминиевый лестничный лоток весит примерно треть от веса эквивалентного стального лотка, упрощая надпотолочный монтаж и снижая нагрузку на конструкцию, при этом его анодированная конструкция из алюминия 6063-T5 сопротивляется коррозии без цинкования или горячего оцинкования, необходимых стальным лоткам — что полезно во влажных, прибрежных или коррозионных средах.",
        },
        {
          question: "Требуется ли сварка для сборки алюминиевого лестничного лотка?",
          answer:
            "Нет. Секции соединяются через прецизионную систему Т-паза, скрепляемую антикоррозийными болтами M8, что обеспечивает быстрый, модульный монтаж с минимальным набором инструментов без сварки на объекте.",
        },
      ],
    },
    zh: {
      name: "铝合金电缆梯架",
      shortName: "铝合金梯架",
      tagline: "轻量化耐腐蚀铝合金梯架,T型槽免工具快速组装。",
      overview:
        "万电通铝合金电缆梯架采用6063-T5铝合金型材挤压成型,表面经阳极氧化处理,重量约为同规格钢制梯架的三分之一,同时保持耐腐蚀性能。精密T型槽连接系统采用M8防腐螺栓组装——无需焊接——实现数据中心及服务器机房环境下快速、模块化的安装。",
      keyFeatures: [
        "6063-T5铝合金型材挤压成型,表面阳极氧化处理",
        "轻量化——约为同规格钢制梯架重量的1/3",
        "抗拉强度≥160MPa",
        "精密T型槽连接系统,无需焊接",
        "重型铝合金侧梁及铝合金横档",
        "M8防腐螺栓组装,实现快速模块化安装",
        "耐腐蚀;支持OEM/ODM",
      ],
      specGroups: [
        {
          title: "结构",
          specs: [
            { label: "类型", value: "梯式(横档侧梁),铝合金材质" },
            { label: "材质", value: "6063-T5铝合金型材" },
            { label: "表面处理", value: "阳极氧化" },
            { label: "抗拉强度", value: "≥160MPa" },
            { label: "重量", value: "约为同规格钢制梯架的1/3" },
          ],
        },
        {
          title: "组装",
          specs: [
            { label: "连接系统", value: "精密T型槽,免工具型材配合" },
            { label: "紧固件", value: "M8防腐螺栓,无需焊接" },
          ],
        },
      ],
      applications: ["数据中心电力线缆路径", "服务器机房", "电信设备间", "需要非铁质梯架的腐蚀性或沿海环境"],
      customizationOptions: ["宽度", "横档间距", "表面处理", "OEM/ODM"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "为什么选择铝合金梯架而非钢制梯架？",
          answer:
            "铝合金梯架重量约为同规格钢制梯架的三分之一,简化了高空安装并降低结构承重负担;其阳极氧化的6063-T5铝合金结构无需像钢制梯架那样进行镀锌或热浸镀锌处理即可耐腐蚀,适用于潮湿、沿海或腐蚀性环境。",
        },
        {
          question: "铝合金梯架组装是否需要焊接？",
          answer:
            "不需要。各段通过精密T型槽系统连接,并使用M8防腐螺栓紧固,实现快速、模块化、轻工具化安装,无需现场焊接。",
        },
      ],
    },
  },
  "solid-bottom-cable-tray": {
    ar: {
      name: "مجرى كابلات بقاع صلب (قناة)",
      shortName: "مجرى قاع صلب",
      tagline: "مجرى قناة محاط بالكامل بقاع صلب وغطاء لحماية مسارات الكابلات من الغبار والتلف المادي.",
      overview:
        "مجرى الكابلات ذو القاع الصلب من واندتونغ هو مجرى نوع قناة محاط بالكامل، بقاعدة صلبة وجدران جانبية مهواة وغطاء بتثبيت سريع، يمنح الكابلات حماية مادية من الغبار والحطام والتلامس العرضي على طول المسار بالكامل. يُصنَّع بأنواع فولاذ مقاوم للصدأ وسبيكة ألومنيوم ومجلفن بالغمس الساخن ومقاوم للحريق، ويأتي بمجموعة تركيبات كاملة تشمل الكوعات، ويُركَّب على السقف أو الحائط أو الدعامات الأفقية.",
      keyFeatures: [
        "قناة بقاع صلب محاطة بالكامل مع غطاء بتثبيت سريع",
        "جدران جانبية مهواة لتدفق الهواء والوصول إلى الكابلات",
        "متوفر بأنواع فولاذ مقاوم للصدأ وسبيكة ألومنيوم ومجلفن بالغمس الساخن ومقاوم للحريق",
        "مجموعة تركيبات كاملة: كوعات وأغطية وموصلات",
        "عرض وعمق مخصصان؛ OEM مقبول",
        "طرق تركيب متعددة - سقف أو حائط أو أفقي",
      ],
      specGroups: [
        {
          title: "البناء",
          specs: [
            { label: "النوع", value: "قناة بقاع صلب مع غطاء" },
            { label: "خيارات المادة", value: "فولاذ مقاوم للصدأ / سبيكة ألومنيوم / مجلفن بالغمس الساخن / مقاوم للحريق" },
            { label: "الجدران الجانبية", value: "مهواة (بفتحات)" },
            { label: "الأحجام", value: "عرض وعمق مخصصان متاحان" },
          ],
        },
        {
          title: "التركيبات والتثبيت",
          specs: [
            { label: "التركيبات", value: "كوعات وأغطية وموصلات - نظام كامل" },
            { label: "التثبيت", value: "دعامة سقفية أو جدارية أو أفقية" },
          ],
        },
      ],
      applications: ["كابلات مراكز البيانات وغرف الخوادم التي تتطلب حماية من الغبار والتلف المادي", "غرف الاتصالات", "مسارات الكابلات الصناعية", "البيئات التي تتطلب توجيه كابلات محاط ومقاوم للعبث"],
      customizationOptions: ["العرض", "العمق", "تشطيب المادة", "مجموعة التركيبات", "OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "متى يجب اختيار مجرى بقاع صلب (قناة) بدلاً من مجرى شبكي أو سلمي مفتوح؟",
          answer:
            "يحيط مجرى القناة ذو القاع الصلب بالغطاء بمسار الكابل بالكامل، ما يحميه من الغبار والحطام والتلامس العرضي - وهو مفيد في المناطق ذات حركة السير أو البيئات المتربة أو حيث يجب إخفاء الكابلات عن الأنظار، بينما يُختار المجرى الشبكي أو السلمي المفتوح لسهولة الفحص والتهوية والتكلفة الأقل.",
        },
        {
          question: "ما خيارات المواد المتوفرة لمجرى القاع الصلب؟",
          answer:
            "يُصنَّع المجرى بأنواع فولاذ مقاوم للصدأ وسبيكة ألومنيوم وفولاذ مجلفن بالغمس الساخن ومقاوم للحريق، تُختار بناءً على متطلبات التآكل والوزن وتصنيف الحريق لبيئة التركيب.",
        },
      ],
    },
    fr: {
      name: "Chemin de câbles à fond plein (goulotte)",
      shortName: "Chemin fond plein",
      tagline: "Goulotte entièrement fermée à fond plein avec couvercle pour protection contre la poussière et les dommages physiques.",
      overview:
        "Le chemin de câbles à fond plein Wandtung est une goulotte entièrement fermée avec base pleine, parois latérales ventilées et couvercle à clipsage, offrant aux câbles une protection physique contre la poussière, les débris et les contacts accidentels sur tout le parcours. Il est fabriqué en acier inoxydable, alliage d'aluminium, acier galvanisé à chaud et versions ignifuges, livré avec une gamme complète de raccords incluant des coudes, et se monte au plafond, au mur ou sur supports horizontaux.",
      keyFeatures: [
        "Goulotte à fond plein entièrement fermée avec couvercle à clipsage",
        "Parois latérales ventilées pour la circulation d'air et l'accès aux câbles",
        "Disponible en acier inoxydable, alliage d'aluminium, acier galvanisé à chaud et versions ignifuges",
        "Gamme complète de raccords : coudes, couvercles, connecteurs",
        "Largeur et profondeur personnalisées ; OEM accepté",
        "Plusieurs méthodes de montage — plafond, mur ou horizontal",
      ],
      specGroups: [
        {
          title: "Construction",
          specs: [
            { label: "Type", value: "Goulotte à fond plein avec couvercle" },
            { label: "Options de matériau", value: "Acier inoxydable / alliage d'aluminium / galvanisé à chaud / ignifuge" },
            { label: "Parois latérales", value: "Ventilées (à fentes)" },
            { label: "Dimensions", value: "Largeur et profondeur personnalisées disponibles" },
          ],
        },
        {
          title: "Raccords et montage",
          specs: [
            { label: "Raccords", value: "Coudes, couvercles, connecteurs — système complet" },
            { label: "Montage", value: "Support plafond, mural ou horizontal" },
          ],
        },
      ],
      applications: ["Câblage de centre de données et salle serveurs nécessitant une protection contre la poussière/les dommages physiques", "Salles télécoms", "Cheminements de câbles industriels", "Environnements nécessitant un routage de câbles fermé et anti-effraction"],
      customizationOptions: ["Largeur", "Profondeur", "Finition du matériau", "Jeu de raccords", "OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Quand choisir un chemin à fond plein (goulotte) plutôt qu'un chemin grillagé ou échelle ouvert ?",
          answer:
            "Une goulotte à fond plein avec couvercle enferme entièrement le câblage, le protégeant de la poussière, des débris et des contacts accidentels — utile dans les zones à circulation piétonne, les environnements poussiéreux, ou lorsque les câbles doivent être dissimulés, tandis que le chemin grillagé ou échelle ouvert est choisi pour une inspection et une ventilation plus faciles et un coût moindre.",
        },
        {
          question: "Quelles options de matériau sont disponibles pour le chemin à fond plein ?",
          answer:
            "Le chemin est fabriqué en acier inoxydable, alliage d'aluminium, acier galvanisé à chaud et versions ignifuges, sélectionnés selon les exigences de corrosion, de poids et de classement au feu de l'environnement d'installation.",
        },
      ],
    },
    es: {
      name: "Bandeja de cables de fondo sólido (canal)",
      shortName: "Bandeja fondo sólido",
      tagline: "Canal completamente cerrado de fondo sólido con tapa para protección contra polvo y daños físicos.",
      overview:
        "La bandeja de cables de fondo sólido de Wandtung es una bandeja tipo canal completamente cerrada, con base sólida, paredes laterales ventiladas y una tapa a presión, que proporciona a los cables protección física contra el polvo, los desechos y el contacto accidental a lo largo de toda la ruta. Se fabrica en variantes de acero inoxidable, aleación de aluminio, acero galvanizado en caliente e ignífugo, incluye una gama completa de accesorios como codos, y se monta en techo, pared o soportes horizontales.",
      keyFeatures: [
        "Canal de fondo sólido completamente cerrado con tapa a presión",
        "Paredes laterales ventiladas para flujo de aire y acceso a los cables",
        "Disponible en variantes de acero inoxidable, aleación de aluminio, acero galvanizado en caliente e ignífugo",
        "Gama completa de accesorios: codos, tapas, conectores",
        "Ancho y profundidad personalizados; OEM aceptado",
        "Múltiples métodos de montaje: techo, pared u horizontal",
      ],
      specGroups: [
        {
          title: "Construcción",
          specs: [
            { label: "Tipo", value: "Canal de fondo sólido con tapa" },
            { label: "Opciones de material", value: "Acero inoxidable / aleación de aluminio / galvanizado en caliente / ignífugo" },
            { label: "Paredes laterales", value: "Ventiladas (ranuradas)" },
            { label: "Dimensiones", value: "Ancho y profundidad personalizados disponibles" },
          ],
        },
        {
          title: "Accesorios y montaje",
          specs: [
            { label: "Accesorios", value: "Codos, tapas, conectores — sistema completo" },
            { label: "Montaje", value: "Soporte de techo, pared u horizontal" },
          ],
        },
      ],
      applications: ["Cableado de centros de datos y salas de servidores que requiere protección contra polvo/daños físicos", "Salas de telecomunicaciones", "Rutas de cableado industrial", "Entornos que requieren enrutamiento de cables cerrado y resistente a manipulaciones"],
      customizationOptions: ["Ancho", "Profundidad", "Acabado del material", "Juego de accesorios", "OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Cuándo debo elegir una bandeja de fondo sólido (canal) en lugar de una bandeja de malla o escalera abierta?",
          answer:
            "Una bandeja de canal de fondo sólido con tapa encierra completamente el cableado, protegiéndolo del polvo, los desechos y el contacto accidental, útil en áreas de tránsito peatonal, entornos polvorientos, o donde los cables deben ocultarse a la vista, mientras que la bandeja de malla o escalera abierta se elige por su inspección y ventilación más sencillas y menor costo.",
        },
        {
          question: "¿Qué opciones de material están disponibles para la bandeja de fondo sólido?",
          answer:
            "La bandeja se fabrica en variantes de acero inoxidable, aleación de aluminio, acero galvanizado en caliente e ignífugo, seleccionadas según los requisitos de corrosión, peso y clasificación contra incendios del entorno de instalación.",
        },
      ],
    },
    ru: {
      name: "Кабельный лоток со сплошным дном (короб)",
      shortName: "Лоток со сплошным дном",
      tagline: "Полностью закрытый короб со сплошным дном и крышкой для защиты кабельных трасс от пыли и физических повреждений.",
      overview:
        "Кабельный лоток со сплошным дном Wandtung — это полностью закрытый лоток короба типа со сплошным основанием, вентилируемыми боковыми стенками и защёлкивающейся крышкой, обеспечивающий физическую защиту кабелей от пыли, мусора и случайного контакта по всей трассе. Изготавливается в вариантах из нержавеющей стали, алюминиевого сплава, горячеоцинкованной стали и огнестойком исполнении, поставляется с полным набором фитингов, включая углы, и монтируется на потолок, стену или горизонтальные опоры.",
      keyFeatures: [
        "Полностью закрытый короб со сплошным дном и защёлкивающейся крышкой",
        "Вентилируемые боковые стенки для циркуляции воздуха и доступа к кабелям",
        "Доступен в вариантах из нержавеющей стали, алюминиевого сплава, горячеоцинкованной стали и огнестойком исполнении",
        "Полный набор фитингов: углы, крышки, соединители",
        "Индивидуальная ширина и глубина; принимается OEM",
        "Несколько методов монтажа — потолочный, настенный или горизонтальный",
      ],
      specGroups: [
        {
          title: "Конструкция",
          specs: [
            { label: "Тип", value: "Короб со сплошным дном и крышкой" },
            { label: "Варианты материала", value: "Нержавеющая сталь / алюминиевый сплав / горячеоцинкованная сталь / огнестойкий" },
            { label: "Боковые стенки", value: "Вентилируемые (с прорезями)" },
            { label: "Размеры", value: "Доступны индивидуальная ширина и глубина" },
          ],
        },
        {
          title: "Фитинги и монтаж",
          specs: [
            { label: "Фитинги", value: "Углы, крышки, соединители — полная система" },
            { label: "Монтаж", value: "Потолочная, настенная или горизонтальная опора" },
          ],
        },
      ],
      applications: ["Кабельная разводка ЦОД и серверных, требующая защиты от пыли/физических повреждений", "Телекоммуникационные помещения", "Промышленные кабельные трассы", "Среды, требующие закрытой, защищённой от несанкционированного доступа прокладки кабелей"],
      customizationOptions: ["Ширина", "Глубина", "Отделка материала", "Комплект фитингов", "OEM/ODM"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "Когда стоит выбрать лоток со сплошным дном (короб) вместо открытого сетчатого или лестничного лотка?",
          answer:
            "Короб со сплошным дном и крышкой полностью закрывает кабельную трассу, защищая её от пыли, мусора и случайного контакта — полезно в зонах с пешеходным движением, пыльных средах или там, где кабели должны быть скрыты от глаз, тогда как открытый сетчатый или лестничный лоток выбирают для более лёгкого осмотра, вентиляции и меньшей стоимости.",
        },
        {
          question: "Какие варианты материала доступны для лотка со сплошным дном?",
          answer:
            "Лоток изготавливается из нержавеющей стали, алюминиевого сплава, горячеоцинкованной стали и в огнестойком исполнении, выбираемых исходя из требований к коррозионной стойкости, весу и огнестойкости среды установки.",
        },
      ],
    },
    zh: {
      name: "槽式（实底）电缆桥架",
      shortName: "槽式桥架",
      tagline: "全封闭实底槽式桥架配盖板，为线缆路径提供防尘及物理保护。",
      overview:
        "万电通槽式电缆桥架是一款全封闭槽式桥架，采用实心底板、通风侧壁及卡扣式盖板，为线缆全程提供防尘、防杂物及防意外接触的物理保护。产品提供不锈钢、铝合金、热浸镀锌及防火等多种材质版本，配备包括弯头在内的完整配件系统，可采用吊顶、壁挂或水平支架多种安装方式。",
      keyFeatures: [
        "全封闭实底槽式结构，配卡扣式盖板",
        "通风侧壁，便于空气流通及线缆存取",
        "提供不锈钢、铝合金、热浸镀锌及防火多种材质版本",
        "完整配件系统：弯头、盖板、连接件",
        "支持定制宽度及深度；接受OEM",
        "多种安装方式——吊顶、壁挂或水平安装",
      ],
      specGroups: [
        {
          title: "结构",
          specs: [
            { label: "类型", value: "实底槽式，配盖板" },
            { label: "材质选项", value: "不锈钢/铝合金/热浸镀锌/防火材质" },
            { label: "侧壁", value: "通风（开槽）" },
            { label: "尺寸", value: "支持定制宽度及深度" },
          ],
        },
        {
          title: "配件与安装",
          specs: [
            { label: "配件", value: "弯头、盖板、连接件——完整系统" },
            { label: "安装方式", value: "吊顶、壁挂或水平支架" },
          ],
        },
      ],
      applications: ["需要防尘/物理保护的数据中心及服务器机房布线", "电信机房", "工业布线通道", "需要封闭式防拆线缆布放的环境"],
      customizationOptions: ["宽度", "深度", "材质表面处理", "配件套装", "OEM/ODM"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "什么情况下应选择槽式（实底）桥架而非开放式网格或梯式桥架？",
          answer:
            "配盖板的实底槽式桥架将线缆完全封闭，可防尘、防杂物及意外接触——适用于人流较多区域、多尘环境，或需要隐藏线缆的场合；而开放式网格或梯式桥架则因便于检查、通风及成本更低而被选用。",
        },
        {
          question: "槽式桥架有哪些材质选项？",
          answer:
            "该桥架提供不锈钢、铝合金、热浸镀锌钢材及防火等多种材质版本，可根据安装环境对耐腐蚀性、重量及防火等级的要求进行选择。",
        },
      ],
    },
  },
  "battery-energy-storage-system": {
    ar: {
      name: "نظام تخزين طاقة البطارية (BESS)",
      shortName: "BESS",
      tagline: "تخزين طاقة البطارية بالحاويات والخزائن لطاقة موقع مرنة.",
      overview: "يدمج نظام تخزين طاقة البطارية من واندتونغ راكات البطارية ونظام تحويل الطاقة (PCS) ونظام إدارة الطاقة (EMS) في أشكال خزانة أو حاوية، ويدعم قص الذروة والطاقة الاحتياطية ودمج الطاقة المتجددة لمراكز البيانات والمواقع الصناعية.",
      keyFeatures: ["شكل خزانة أو حاوية", "PCS وEMS متكاملان", "قص الذروة وإدارة رسوم الطلب", "جاهز لدمج الطاقة المتجددة (الشمسية)", "مراقبة عن بُعد وإدارة السلامة"],
      specGroups: [{ title: "النظام", specs: [{ label: "التكوين", value: "خزانة بطارية أو ESS بحاوية" }, { label: "المكونات", value: "راكات بطارية، PCS، EMS، إخماد حريق" }, { label: "المراقبة", value: "لوحة تحكم EMS عن بُعد، إدارة الإنذارات" }] }],
      applications: ["احتياطي/قص ذروة مركز البيانات", "المنشآت الصناعية", "مواقع دمج الطاقة المتجددة"],
      customizationOptions: ["سعة الطاقة", "تصنيف PCS", "الشكل (خزانة / حاوية)"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما استخدام نظام تخزين طاقة البطارية في مركز البيانات؟", answer: "يمكن لـBESS تكملة أو استبدال بطاريات UPS التقليدية، وتوفير قص ذروة لتقليل رسوم الطلب، وتخزين الطاقة المتجددة للاستخدام أثناء انقطاع الشبكة أو فترات التعرفة العالية، ما يحسّن كلاً من المرونة وكفاءة تكلفة الطاقة." },
      ],
    },
    fr: {
      name: "Système de stockage d'énergie par batterie (BESS)",
      shortName: "BESS",
      tagline: "Stockage d'énergie par batterie en conteneur ou en armoire pour une alimentation de site résiliente.",
      overview: "Le système de stockage d'énergie par batterie Wandtung intègre des racks de batteries, un système de conversion de puissance (PCS) et un système de gestion d'énergie (EMS) dans des formats armoire ou conteneurisés, prenant en charge l'écrêtage de pointe, l'alimentation de secours et l'intégration des énergies renouvelables pour les centres de données et sites industriels.",
      keyFeatures: ["Format armoire ou conteneurisé", "PCS et EMS intégrés", "Écrêtage de pointe et gestion des frais de demande", "Prêt pour l'intégration des énergies renouvelables (solaire)", "Surveillance à distance et gestion de la sécurité"],
      specGroups: [{ title: "Système", specs: [{ label: "Configuration", value: "Armoire de batteries ou ESS conteneurisé" }, { label: "Composants", value: "Racks de batteries, PCS, EMS, extinction incendie" }, { label: "Surveillance", value: "Tableau de bord EMS à distance, gestion des alarmes" }] }],
      applications: ["Secours / écrêtage de pointe centre de données", "Installations industrielles", "Sites d'intégration d'énergies renouvelables"],
      customizationOptions: ["Capacité énergétique", "Puissance PCS", "Format (armoire / conteneur)"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "À quoi sert un système de stockage d'énergie par batterie dans un centre de données ?", answer: "Un BESS peut compléter ou remplacer les batteries d'onduleur traditionnelles, fournir un écrêtage de pointe pour réduire les frais de demande, et stocker l'énergie renouvelable pour une utilisation pendant les pannes de réseau ou les périodes de tarif élevé, améliorant à la fois la résilience et l'efficacité des coûts énergétiques." },
      ],
    },
    es: {
      name: "Sistema de almacenamiento de energía en batería (BESS)",
      shortName: "BESS",
      tagline: "Almacenamiento de energía en batería en contenedor o armario para energía de sitio resiliente.",
      overview: "El sistema de almacenamiento de energía en batería de Wandtung integra racks de baterías, un sistema de conversión de energía (PCS) y un sistema de gestión de energía (EMS) en formatos de armario o contenedor, admitiendo recorte de picos, energía de respaldo e integración de energía renovable para centros de datos y sitios industriales.",
      keyFeatures: ["Formato de armario o contenedor", "PCS y EMS integrados", "Recorte de picos y gestión de cargos por demanda", "Listo para integración renovable (solar)", "Monitoreo remoto y gestión de seguridad"],
      specGroups: [{ title: "Sistema", specs: [{ label: "Configuración", value: "Armario de baterías o ESS en contenedor" }, { label: "Componentes", value: "Racks de baterías, PCS, EMS, extinción de incendios" }, { label: "Monitoreo", value: "Panel EMS remoto, gestión de alarmas" }] }],
      applications: ["Respaldo / recorte de picos de centro de datos", "Instalaciones industriales", "Sitios de integración de energía renovable"],
      customizationOptions: ["Capacidad energética", "Potencia de PCS", "Formato (armario / contenedor)"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Para qué se usa un sistema de almacenamiento de energía en batería en un centro de datos?", answer: "Un BESS puede complementar o reemplazar las baterías de SAI tradicionales, proporcionar recorte de picos para reducir los cargos por demanda, y almacenar energía renovable para su uso durante cortes de red o períodos de tarifa alta, mejorando tanto la resiliencia como la eficiencia de costos energéticos." },
      ],
    },
    ru: {
      name: "Система накопления энергии на батареях (BESS)",
      shortName: "BESS",
      tagline: "Контейнерное и шкафное накопление энергии на батареях для отказоустойчивого питания объекта.",
      overview: "Система накопления энергии на батареях Wandtung объединяет стойки батарей, систему преобразования мощности (PCS) и систему управления энергией (EMS) в шкафном или контейнерном форм-факторе, поддерживая сглаживание пиков, резервное питание и интеграцию возобновляемой энергии для ЦОД и промышленных объектов.",
      keyFeatures: ["Шкафной или контейнерный форм-фактор", "Встроенные PCS и EMS", "Сглаживание пиков и управление платой за спрос", "Готовность к интеграции возобновляемой (солнечной) энергии", "Удалённый мониторинг и управление безопасностью"],
      specGroups: [{ title: "Система", specs: [{ label: "Конфигурация", value: "Батарейный шкаф или контейнерная СНЭ" }, { label: "Компоненты", value: "Стойки батарей, PCS, EMS, пожаротушение" }, { label: "Мониторинг", value: "Удалённая панель EMS, управление сигнализацией" }] }],
      applications: ["Резерв / сглаживание пиков ЦОД", "Промышленные объекты", "Объекты интеграции возобновляемой энергии"],
      customizationOptions: ["Энергоёмкость", "Мощность PCS", "Форм-фактор (шкаф / контейнер)"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Для чего используется система накопления энергии на батареях в ЦОД?", answer: "BESS может дополнять или заменять традиционные батареи ИБП, обеспечивать сглаживание пиков для снижения платы за спрос, а также накапливать возобновляемую энергию для использования во время отключений сети или периодов высоких тарифов, повышая как отказоустойчивость, так и энергоэффективность затрат." },
      ],
    },
    zh: {
      name: "电池储能系统(BESS)",
      shortName: "BESS",
      tagline: "集装箱式及机柜式电池储能系统,为场地提供可靠电力保障。",
      overview: "万电通电池储能系统将电池组、功率变换系统(PCS)及能量管理系统(EMS)集成于机柜式或集装箱式形态中,支持削峰填谷、备用电力及可再生能源接入,适用于数据中心及工业场地。",
      keyFeatures: ["机柜式或集装箱式形态", "集成PCS及EMS", "削峰及需量电费管理", "可对接可再生能源(太阳能)接入", "远程监控及安全管理"],
      specGroups: [{ title: "系统", specs: [{ label: "配置", value: "电池机柜或集装箱式储能系统" }, { label: "组成部件", value: "电池组、PCS、EMS、消防系统" }, { label: "监控", value: "远程EMS仪表盘,告警管理" }] }],
      applications: ["数据中心备用/削峰", "工业设施", "可再生能源接入场地"],
      customizationOptions: ["储能容量", "PCS功率规格", "形态(机柜/集装箱)"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "电池储能系统在数据中心中有什么用途？", answer: "BESS可作为传统UPS电池的补充或替代方案,提供削峰能力以降低需量电费,并在电网中断或高电价时段存储可再生能源以供使用,同时提升可靠性与能源成本效率。" },
      ],
    },
  },
  "solar-power-system": {
    ar: {
      name: "نظام طاقة شمسية",
      shortName: "نظام طاقة شمسية",
      tagline: "توليد شمسي متصل بالشبكة أو خارجها مقترن بتخزين طاقة الموقع.",
      overview: "يجمع نظام الطاقة الشمسية من واندتونغ توليد الطاقة الكهروضوئية مع عاكسات، وحيثما لزم، تخزين البطارية لتزويد طاقة الموقع لتعويض متصل بالشبكة أو تشغيل خارج الشبكة — مصمم للأحمال المساعدة لمركز البيانات ومواقع الاتصالات والمنشآت الصناعية الساعية لتقليل الاعتماد على الشبكة.",
      keyFeatures: ["تكوين متصل بالشبكة أو خارجها", "مصفوفة كهروضوئية بعاكسات سلسلة أو مركزية", "دمج تخزين بطارية اختياري للاستخدام خارج الشبكة/الاحتياطي", "مراقبة عن بُعد للتوليد والاستهلاك"],
      specGroups: [{ title: "النظام", specs: [{ label: "التكوين", value: "متصل بالشبكة / خارجها / هجين" }, { label: "المكونات", value: "مصفوفة كهروضوئية، عاكس(ات)، تخزين بطارية اختياري" }, { label: "المراقبة", value: "لوحة تحكم توليد/استهلاك عن بُعد" }] }],
      applications: ["تعويض طاقة موقع الاتصالات", "طاقة منشأة نائية/خارج الشبكة", "دمج طاقة متجددة لمركز البيانات"],
      customizationOptions: ["سعة المصفوفة", "تصميم متصل بالشبكة مقابل خارجها", "دمج تخزين البطارية"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل يمكن لنظام الطاقة الشمسية استبدال طاقة الشبكة بالكامل لمركز بيانات؟", answer: "بالنسبة لمعظم مراكز البيانات، تُنشر الطاقة الشمسية لتعويض جزء من استهلاك الشبكة أو دعم الأحمال المساعدة/الاحتياطية بدلاً من استبدال طاقة المرفق بالكامل، نظراً لاتساق الحمل الذي تتطلبه مراكز البيانات — الطاقة الشمسية خارج الشبكة مع التخزين أكثر شيوعاً للمواقع الأصغر أو النائية مثل محطات الاتصالات الأساسية." },
      ],
    },
    fr: {
      name: "Système d'énergie solaire",
      shortName: "Système d'énergie solaire",
      tagline: "Génération solaire raccordée au réseau ou hors réseau associée au stockage d'énergie du site.",
      overview: "Le système d'énergie solaire Wandtung combine la génération photovoltaïque avec des onduleurs et, si nécessaire, un stockage par batterie pour fournir l'alimentation du site en compensation raccordée au réseau ou en fonctionnement hors réseau — dimensionné pour les charges auxiliaires de centres de données, sites télécoms et installations industrielles cherchant à réduire la dépendance au réseau.",
      keyFeatures: ["Configuration raccordée au réseau ou hors réseau", "Réseau PV avec onduleurs string ou centraux", "Intégration optionnelle de stockage par batterie pour usage hors réseau/secours", "Surveillance à distance de la génération et de la consommation"],
      specGroups: [{ title: "Système", specs: [{ label: "Configuration", value: "Raccordé au réseau / hors réseau / hybride" }, { label: "Composants", value: "Réseau PV, onduleur(s), stockage par batterie optionnel" }, { label: "Surveillance", value: "Tableau de bord de génération/consommation à distance" }] }],
      applications: ["Compensation d'alimentation de site télécoms", "Alimentation d'installation distante/hors réseau", "Intégration renouvelable de centre de données"],
      customizationOptions: ["Capacité du réseau", "Conception raccordée au réseau vs. hors réseau", "Intégration de stockage par batterie"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Un système d'énergie solaire peut-il remplacer entièrement l'alimentation du réseau pour un centre de données ?", answer: "Pour la plupart des centres de données, le solaire est déployé pour compenser une partie de la consommation du réseau ou soutenir les charges auxiliaires/de secours plutôt que de remplacer entièrement l'alimentation du service public, étant donné la cohérence de charge requise par les centres de données — le solaire hors réseau avec stockage est plus courant pour les sites plus petits ou distants tels que les stations de base télécoms." },
      ],
    },
    es: {
      name: "Sistema de energía solar",
      shortName: "Sistema de energía solar",
      tagline: "Generación solar conectada a la red o fuera de red combinada con almacenamiento de energía del sitio.",
      overview: "El sistema de energía solar de Wandtung combina generación fotovoltaica con inversores y, cuando es necesario, almacenamiento en batería para suministrar energía del sitio para compensación conectada a la red u operación fuera de red; dimensionado para cargas auxiliares de centros de datos, sitios de telecomunicaciones e instalaciones industriales que buscan reducir la dependencia de la red.",
      keyFeatures: ["Configuración conectada a la red o fuera de red", "Matriz fotovoltaica con inversores de cadena o centrales", "Integración opcional de almacenamiento en batería para uso fuera de red/respaldo", "Monitoreo remoto de generación y consumo"],
      specGroups: [{ title: "Sistema", specs: [{ label: "Configuración", value: "Conectado a la red / fuera de red / híbrido" }, { label: "Componentes", value: "Matriz fotovoltaica, inversor(es), almacenamiento en batería opcional" }, { label: "Monitoreo", value: "Panel remoto de generación/consumo" }] }],
      applications: ["Compensación de energía de sitio de telecomunicaciones", "Energía de instalación remota/fuera de red", "Integración renovable de centro de datos"],
      customizationOptions: ["Capacidad de la matriz", "Diseño conectado a la red vs. fuera de red", "Integración de almacenamiento en batería"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Puede un sistema de energía solar reemplazar completamente la energía de red para un centro de datos?", answer: "Para la mayoría de los centros de datos, la energía solar se despliega para compensar una parte del consumo de la red o apoyar cargas auxiliares/de respaldo en lugar de reemplazar completamente la energía de la red eléctrica, dada la consistencia de carga que requieren los centros de datos; la solar fuera de red con almacenamiento es más común para sitios más pequeños o remotos como estaciones base de telecomunicaciones." },
      ],
    },
    ru: {
      name: "Солнечная энергосистема",
      shortName: "Солнечная энергосистема",
      tagline: "Сетевая или автономная солнечная генерация в сочетании с накоплением энергии на объекте.",
      overview: "Солнечная энергосистема Wandtung сочетает фотоэлектрическую генерацию с инверторами и, при необходимости, батарейным накопителем для питания объекта в режиме сетевой компенсации или автономной работы — рассчитана на вспомогательные нагрузки ЦОД, телекоммуникационные объекты и промышленные предприятия, стремящиеся снизить зависимость от сети.",
      keyFeatures: ["Сетевая или автономная конфигурация", "Фотоэлектрическая матрица со строковыми или центральными инверторами", "Опциональная интеграция батарейного накопителя для автономного/резервного использования", "Удалённый мониторинг генерации и потребления"],
      specGroups: [{ title: "Система", specs: [{ label: "Конфигурация", value: "Сетевая / автономная / гибридная" }, { label: "Компоненты", value: "Фотоэлектрическая матрица, инвертор(ы), опциональный батарейный накопитель" }, { label: "Мониторинг", value: "Удалённая панель генерации/потребления" }] }],
      applications: ["Компенсация энергии телекоммуникационного объекта", "Питание удалённого/автономного объекта", "Интеграция возобновляемой энергии ЦОД"],
      customizationOptions: ["Мощность матрицы", "Сетевая или автономная конструкция", "Интеграция батарейного накопителя"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Может ли солнечная энергосистема полностью заменить сетевое питание для ЦОД?", answer: "Для большинства ЦОД солнечная энергия развёртывается для компенсации части потребления сети или поддержки вспомогательных/резервных нагрузок, а не для полной замены сетевого питания, учитывая стабильность нагрузки, требуемую ЦОД — автономная солнечная энергия с накоплением более распространена для небольших или удалённых объектов, таких как базовые станции телекоммуникаций." },
      ],
    },
    zh: {
      name: "太阳能发电系统",
      shortName: "太阳能发电系统",
      tagline: "并网或离网太阳能发电,结合场地储能系统。",
      overview: "万电通太阳能发电系统将光伏发电与逆变器相结合,并在需要时配备电池储能,以并网抵消或离网运行方式为场地供电——适用于希望降低电网依赖的数据中心辅助负载、电信站点及工业设施。",
      keyFeatures: ["支持并网或离网配置", "组串式或集中式逆变器光伏阵列", "可选配电池储能集成,用于离网/备用场景", "发电及用电情况远程监控"],
      specGroups: [{ title: "系统", specs: [{ label: "配置", value: "并网/离网/混合" }, { label: "组成部件", value: "光伏阵列、逆变器、可选电池储能" }, { label: "监控", value: "远程发电/用电仪表盘" }] }],
      applications: ["电信站点电力抵消", "偏远/离网设施供电", "数据中心可再生能源接入"],
      customizationOptions: ["阵列容量", "并网或离网设计", "电池储能集成"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "太阳能发电系统能否完全替代数据中心的电网供电？", answer: "对大多数数据中心而言,考虑到其对负载稳定性的要求,太阳能通常用于抵消部分电网用电或支持辅助/备用负载,而非完全替代市电——离网太阳能加储能方案在电信基站等小型或偏远场地中更为常见。" },
      ],
    },
  },
  "solar-pv-module": {
    ar: {
      name: "لوح شمسي كهروضوئي",
      shortName: "لوح شمسي",
      tagline: "ألواح شمسية أحادية البلورة وثنائية الوجه عالية الكفاءة، من 380 واط إلى 700 واط، توريد متعدد العلامات التجارية.",
      overview:
        "تغطي مجموعة الألواح الشمسية الكهروضوئية من واندتونغ ألواحاً أحادية البلورة عالية الكفاءة - بما في ذلك سلسلة خلايا HPBC 2.0 بقدرة 640-670 واط وسلسلة نصف خلية ثنائية الوجه بزجاج مزدوج بقدرة 585-595 واط - مدعومة بضمان منتج لمدة 15 عاماً وضمان خرج طاقة خطي لمدة 30 عاماً، ومعتمدة وفق معايير TUV وCSA وCE. إلى جانب ألواحنا الخاصة، تقوم واندتونغ بتوريد ألواح العلامات التجارية الرئيسية الكاملة (Jinko وLONGI وTrina وJA Solar وRisen وAIKO) مع خدمات عينات وتغليف مخصص، ما يمنح مشتري المشاريع مصدراً واحداً لأجهزة التوليد الشمسي إلى جانب أنظمة التخزين والطاقة لدينا.",
      keyFeatures: [
        "لوح أحادي البلورة بقدرة 640-670 واط بتقنية خلايا HPBC 2.0",
        "لوح ثنائي الوجه بزجاج مزدوج بقدرة 585-595 واط بتقنية نصف الخلية",
        "خلايا PERC أحادية البلورة، كفاءة تحويل عالية",
        "ضمان منتج لمدة 15 عاماً للمواد والصناعة",
        "ضمان خرج طاقة خطي لمدة 30 عاماً",
        "معتمد TUV وCSA وCE",
        "توريد متعدد العلامات التجارية متاح - Jinko وLONGI وTrina وJA Solar وRisen وAIKO",
        "خدمات عينات وتغليف مخصص",
      ],
      specGroups: [
        {
          title: "السلسلة أحادية البلورة",
          specs: [
            { label: "نطاق القدرة", value: "640 – 670 واط" },
            { label: "تقنية الخلية", value: "HPBC 2.0" },
            { label: "الأبعاد", value: "2382 × 1134 × 30 مم" },
            { label: "تفاوت الأبعاد", value: "الطول/العرض ±2 مم" },
          ],
        },
        {
          title: "السلسلة ثنائية الوجه",
          specs: [
            { label: "نطاق القدرة", value: "585 – 595 واط" },
            { label: "تقنية الخلية", value: "نصف خلية، PERC أحادية البلورة" },
            { label: "نوع الزجاج", value: "زجاج مزدوج ثنائي الوجه" },
          ],
        },
        {
          title: "الضمان والاعتماد",
          specs: [
            { label: "ضمان المنتج", value: "15 عاماً، المواد والصناعة" },
            { label: "ضمان خرج الطاقة", value: "ضمان خرج طاقة خطي لمدة 30 عاماً" },
            { label: "الاعتماد", value: "TUV، CSA، CE" },
          ],
        },
      ],
      applications: ["محطات شمسية أرضية", "شمسية تجارية وصناعية على الأسطح", "دمج الطاقة المتجددة لمواقع مراكز البيانات والاتصالات", "أنظمة شمسية هجينة وخارج الشبكة"],
      customizationOptions: ["مستوى خرج الطاقة", "سلسلة أحادية البلورة أو ثنائية الوجه", "اختيار العلامة التجارية (Jinko / LONGI / Trina / JA Solar / Risen / AIKO)", "التغليف", "OEM/ODM"],
      standards: ["معتمد TUV", "معتمد CSA", "معتمد CE"],
      faqs: [
        {
          question: "ما الفرق بين سلسلة الألواح أحادية البلورة وثنائية الوجه؟",
          answer:
            "سلسلة HPBC 2.0 أحادية البلورة (640-670 واط) هي لوح توليد أحادي الجانب من الأمام محسّن لأقصى طاقة ضمن مساحة قياسية. أما سلسلة نصف الخلية ثنائية الوجه بزجاج مزدوج (585-595 واط) فتولد أيضاً من الضوء المنعكس على وجهها الخلفي، ما يضيف إنتاجية إضافية في التركيبات الأرضية أو المرتفعة بأسطح عاكسة أسفلها.",
        },
        {
          question: "هل تبيع واندتونغ ألواحها الشمسية الخاصة فقط؟",
          answer:
            "لا. إلى جانب سلسلتينا أحادية البلورة وثنائية الوجه، تقوم واندتونغ بتوريد ألواح شمسية للعلامات التجارية الرئيسية - بما في ذلك Jinko وLONGI وTrina وJA Solar وRisen وAIKO - مع خدمات عينات وتغليف مخصص، ما يتيح لمشتري المشاريع تحديد العلامة التجارية للوح ومستوى القدرة المناسب لمشروعهم من خلال مورد واحد.",
        },
        {
          question: "ما الضمان المطبق على الألواح الشمسية؟",
          answer:
            "تحمل ألواحنا ذات العلامة التجارية الخاصة ضمان منتج لمدة 15 عاماً للمواد والصناعة، بالإضافة إلى ضمان خرج طاقة خطي لمدة 30 عاماً. تتبع شروط الضمان للعلامات التجارية الخارجية الموردة الضمان القياسي لكل مُصنّع.",
        },
      ],
    },
    fr: {
      name: "Module photovoltaïque solaire",
      shortName: "Module PV solaire",
      tagline: "Panneaux solaires monocristallins et bifaciaux haute efficacité, de 380W à 700W, approvisionnement multi-marques.",
      overview:
        "La gamme de modules photovoltaïques solaires Wandtung couvre des panneaux monocristallins haute efficacité — dont une série à cellules HPBC 2.0 de 640 à 670W et une série bifaciale à double verre demi-cellule de 585 à 595W — soutenue par une garantie produit de 15 ans et une garantie de puissance de sortie linéaire de 30 ans, certifiée selon les normes TUV, CSA et CE. Au-delà de nos propres panneaux, Wandtung s'approvisionne et fournit toute la gamme de modules des grandes marques (Jinko, LONGI, Trina, JA Solar, Risen, AIKO) avec services d'échantillons et emballage personnalisé, offrant aux acheteurs de projets une source unique pour le matériel de production solaire aux côtés de nos systèmes de stockage et d'alimentation.",
      keyFeatures: [
        "Panneau monocristallin 640–670W à technologie de cellules HPBC 2.0",
        "Panneau bifacial à double verre 585–595W à technologie demi-cellule",
        "Cellules PERC monocristallines, rendement de conversion élevé",
        "Garantie produit de 15 ans pour les matériaux et la fabrication",
        "Garantie de puissance de sortie linéaire de 30 ans",
        "Certifié TUV, CSA et CE",
        "Approvisionnement multi-marques disponible — Jinko, LONGI, Trina, JA Solar, Risen, AIKO",
        "Services d'échantillons et emballage personnalisé",
      ],
      specGroups: [
        {
          title: "Série monocristalline",
          specs: [
            { label: "Plage de puissance", value: "640 – 670 W" },
            { label: "Technologie de cellule", value: "HPBC 2.0" },
            { label: "Dimensions", value: "2382 x 1134 x 30 mm" },
            { label: "Tolérance dimensionnelle", value: "Longueur/Largeur ±2mm" },
          ],
        },
        {
          title: "Série bifaciale",
          specs: [
            { label: "Plage de puissance", value: "585 – 595 W" },
            { label: "Technologie de cellule", value: "Demi-cellule, PERC monocristallin" },
            { label: "Type de verre", value: "Double verre bifacial" },
          ],
        },
        {
          title: "Garantie et certification",
          specs: [
            { label: "Garantie produit", value: "15 ans, matériaux et fabrication" },
            { label: "Garantie de puissance de sortie", value: "Garantie de puissance de sortie linéaire de 30 ans" },
            { label: "Certification", value: "TUV, CSA, CE" },
          ],
        },
      ],
      applications: ["Fermes solaires au sol", "Solaire commercial et industriel en toiture", "Intégration renouvelable pour sites de centres de données et télécoms", "Systèmes solaires hybrides et hors réseau"],
      customizationOptions: ["Palier de puissance de sortie", "Série monocristalline ou bifaciale", "Choix de marque (Jinko / LONGI / Trina / JA Solar / Risen / AIKO)", "Emballage", "OEM/ODM"],
      standards: ["Certifié TUV", "Certifié CSA", "Certifié CE"],
      faqs: [
        {
          question: "Quelle est la différence entre la série de panneaux monocristallins et bifaciaux ?",
          answer:
            "La série monocristalline HPBC 2.0 (640–670W) est un panneau à génération frontale unilatérale optimisé pour une puissance maximale dans un encombrement standard. La série bifaciale à double verre demi-cellule (585–595W) génère également à partir de la lumière réfléchie sur sa face arrière, ajoutant un rendement supplémentaire dans les installations au sol ou surélevées avec des surfaces réfléchissantes en dessous.",
        },
        {
          question: "Wandtung vend-il uniquement ses propres panneaux solaires ?",
          answer:
            "Non. Outre nos propres séries monocristallines et bifaciales, Wandtung s'approvisionne et fournit des modules solaires de grandes marques — dont Jinko, LONGI, Trina, JA Solar, Risen et AIKO — avec services d'échantillons et emballage personnalisé, permettant aux acheteurs de projets de spécifier la marque de panneau et le palier de puissance adaptés à leur projet auprès d'un fournisseur unique.",
        },
        {
          question: "Quelle garantie s'applique aux panneaux solaires ?",
          answer:
            "Nos panneaux de marque propre bénéficient d'une garantie produit de 15 ans pour les matériaux et la fabrication, ainsi que d'une garantie de puissance de sortie linéaire de 30 ans. Les conditions de garantie pour les marques tierces approvisionnées suivent la garantie standard de chaque fabricant.",
        },
      ],
    },
    es: {
      name: "Módulo fotovoltaico solar",
      shortName: "Módulo FV solar",
      tagline: "Paneles solares monocristalinos y bifaciales de alta eficiencia, de 380W a 700W, abastecimiento multimarca.",
      overview:
        "La gama de módulos fotovoltaicos solares de Wandtung abarca paneles monocristalinos de alta eficiencia — incluyendo una serie de celdas HPBC 2.0 de 640-670W y una serie bifacial de doble vidrio de media celda de 585-595W — respaldada por una garantía de producto de 15 años y una garantía de potencia de salida lineal de 30 años, certificada según las normas TUV, CSA y CE. Además de nuestros propios paneles, Wandtung abastece y suministra la gama completa de módulos de marcas principales (Jinko, LONGI, Trina, JA Solar, Risen, AIKO) con servicios de muestras y embalaje personalizado, dando a los compradores de proyectos una fuente única para el hardware de generación solar junto con nuestros sistemas de almacenamiento y energía.",
      keyFeatures: [
        "Panel monocristalino de 640–670W con tecnología de celdas HPBC 2.0",
        "Panel bifacial de doble vidrio de 585–595W con tecnología de media celda",
        "Celdas PERC monocristalinas, alta eficiencia de conversión",
        "Garantía de producto de 15 años para materiales y mano de obra",
        "Garantía de potencia de salida lineal de 30 años",
        "Certificado TUV, CSA y CE",
        "Abastecimiento multimarca disponible: Jinko, LONGI, Trina, JA Solar, Risen, AIKO",
        "Servicios de muestras y embalaje personalizado",
      ],
      specGroups: [
        {
          title: "Serie monocristalina",
          specs: [
            { label: "Rango de potencia", value: "640 – 670 W" },
            { label: "Tecnología de celda", value: "HPBC 2.0" },
            { label: "Dimensiones", value: "2382 x 1134 x 30 mm" },
            { label: "Tolerancia dimensional", value: "Largo/Ancho ±2mm" },
          ],
        },
        {
          title: "Serie bifacial",
          specs: [
            { label: "Rango de potencia", value: "585 – 595 W" },
            { label: "Tecnología de celda", value: "Media celda, PERC monocristalina" },
            { label: "Tipo de vidrio", value: "Doble vidrio bifacial" },
          ],
        },
        {
          title: "Garantía y certificación",
          specs: [
            { label: "Garantía de producto", value: "15 años, materiales y mano de obra" },
            { label: "Garantía de potencia de salida", value: "Garantía de potencia de salida lineal de 30 años" },
            { label: "Certificación", value: "TUV, CSA, CE" },
          ],
        },
      ],
      applications: ["Plantas solares de montaje en suelo", "Solar comercial e industrial en tejado", "Integración renovable para sitios de centros de datos y telecomunicaciones", "Sistemas solares híbridos y fuera de red"],
      customizationOptions: ["Nivel de potencia de salida", "Serie monocristalina o bifacial", "Selección de marca (Jinko / LONGI / Trina / JA Solar / Risen / AIKO)", "Embalaje", "OEM/ODM"],
      standards: ["Certificado TUV", "Certificado CSA", "Certificado CE"],
      faqs: [
        {
          question: "¿Cuál es la diferencia entre la serie de paneles monocristalinos y bifaciales?",
          answer:
            "La serie monocristalina HPBC 2.0 (640–670W) es un panel de generación frontal unilateral optimizado para máxima potencia en una huella estándar. La serie bifacial de doble vidrio de media celda (585–595W) también genera a partir de la luz reflejada en su cara posterior, añadiendo rendimiento adicional en instalaciones a nivel del suelo o elevadas con superficies reflectantes debajo.",
        },
        {
          question: "¿Wandtung solo vende sus propios paneles solares?",
          answer:
            "No. Además de nuestras propias series monocristalina y bifacial, Wandtung abastece y suministra módulos solares de marcas principales, incluyendo Jinko, LONGI, Trina, JA Solar, Risen y AIKO, con servicios de muestras y embalaje personalizado, para que los compradores de proyectos puedan especificar la marca de panel y el nivel de potencia adecuados para su proyecto a través de un único proveedor.",
        },
        {
          question: "¿Qué garantía se aplica a los paneles solares?",
          answer:
            "Nuestros paneles de marca propia tienen una garantía de producto de 15 años para materiales y mano de obra, además de una garantía de potencia de salida lineal de 30 años. Las condiciones de garantía de las marcas de terceros abastecidas siguen la garantía estándar de cada fabricante.",
        },
      ],
    },
    ru: {
      name: "Солнечный фотоэлектрический модуль",
      shortName: "Солнечный ФЭ модуль",
      tagline: "Высокоэффективные монокристаллические и двусторонние солнечные панели, от 380 до 700 Вт, поставка нескольких брендов.",
      overview:
        "Линейка солнечных фотоэлектрических модулей Wandtung охватывает высокоэффективные монокристаллические панели — включая серию с ячейками HPBC 2.0 мощностью 640–670 Вт и двустороннюю серию с двойным стеклом и полуячейками мощностью 585–595 Вт — с 15-летней гарантией на продукт и 30-летней линейной гарантией выходной мощности, сертифицированные по стандартам TUV, CSA и CE. Помимо собственных панелей, Wandtung закупает и поставляет полный ассортимент модулей ведущих брендов (Jinko, LONGI, Trina, JA Solar, Risen, AIKO) с услугами образцов и индивидуальной упаковкой, предоставляя закупщикам проектов единый источник оборудования солнечной генерации наряду с нашими системами накопления и питания.",
      keyFeatures: [
        "Монокристаллическая панель 640–670 Вт с технологией ячеек HPBC 2.0",
        "Двусторонняя панель с двойным стеклом 585–595 Вт с технологией полуячеек",
        "Монокристаллические ячейки PERC, высокий КПД преобразования",
        "15-летняя гарантия на продукт по материалам и изготовлению",
        "30-летняя линейная гарантия выходной мощности",
        "Сертифицировано TUV, CSA и CE",
        "Доступна поставка нескольких брендов — Jinko, LONGI, Trina, JA Solar, Risen, AIKO",
        "Услуги образцов и индивидуальная упаковка",
      ],
      specGroups: [
        {
          title: "Монокристаллическая серия",
          specs: [
            { label: "Диапазон мощности", value: "640 – 670 Вт" },
            { label: "Технология ячеек", value: "HPBC 2.0" },
            { label: "Размеры", value: "2382 x 1134 x 30 мм" },
            { label: "Допуск размеров", value: "Длина/ширина ±2мм" },
          ],
        },
        {
          title: "Двусторонняя серия",
          specs: [
            { label: "Диапазон мощности", value: "585 – 595 Вт" },
            { label: "Технология ячеек", value: "Полуячейка, монокристаллический PERC" },
            { label: "Тип стекла", value: "Двустороннее двойное стекло" },
          ],
        },
        {
          title: "Гарантия и сертификация",
          specs: [
            { label: "Гарантия на продукт", value: "15 лет, материалы и изготовление" },
            { label: "Гарантия выходной мощности", value: "30-летняя линейная гарантия выходной мощности" },
            { label: "Сертификация", value: "TUV, CSA, CE" },
          ],
        },
      ],
      applications: ["Наземные солнечные электростанции", "Коммерческая и промышленная солнечная энергетика на крышах", "Интеграция ВИЭ для объектов ЦОД и телекоммуникаций", "Гибридные и автономные солнечные системы накопления"],
      customizationOptions: ["Уровень выходной мощности", "Монокристаллическая или двусторонняя серия", "Выбор бренда (Jinko / LONGI / Trina / JA Solar / Risen / AIKO)", "Упаковка", "OEM/ODM"],
      standards: ["Сертифицировано TUV", "Сертифицировано CSA", "Сертифицировано CE"],
      faqs: [
        {
          question: "В чём разница между монокристаллической и двусторонней сериями панелей?",
          answer:
            "Монокристаллическая серия HPBC 2.0 (640–670 Вт) — это односторонняя фронтально генерирующая панель, оптимизированная для максимальной мощности в стандартных габаритах. Двусторонняя серия с двойным стеклом и полуячейками (585–595 Вт) также генерирует энергию от света, отражённого на её заднюю сторону, добавляя дополнительную выработку при наземном или приподнятом монтаже с отражающими поверхностями внизу.",
        },
        {
          question: "Продаёт ли Wandtung только собственные солнечные панели?",
          answer:
            "Нет. Помимо собственных монокристаллической и двусторонней серий, Wandtung закупает и поставляет солнечные модули ведущих брендов — включая Jinko, LONGI, Trina, JA Solar, Risen и AIKO — с услугами образцов и индивидуальной упаковкой, позволяя закупщикам проектов указать бренд панели и уровень мощности, подходящие для их проекта, через единого поставщика.",
        },
        {
          question: "Какая гарантия распространяется на солнечные панели?",
          answer:
            "На наши панели собственного бренда предоставляется 15-летняя гарантия на продукт по материалам и изготовлению, а также 30-летняя линейная гарантия выходной мощности. Условия гарантии на закупаемые сторонние бренды следуют стандартной гарантии каждого производителя.",
        },
      ],
    },
    zh: {
      name: "太阳能光伏组件",
      shortName: "太阳能光伏组件",
      tagline: "高效单晶及双面太阳能板，功率覆盖380W至700W，支持多品牌供货。",
      overview:
        "万电通太阳能光伏组件系列涵盖高效单晶面板——包括640-670W的HPBC 2.0电池系列，以及585-595W双面双玻半片电池系列——提供15年产品质保及30年线性功率输出保证，并通过TUV、CSA、CE认证。除自有品牌面板外，万电通还可采购供应各大品牌全系列组件（晶科Jinko、隆基LONGI、天合Trina、晶澳JA Solar、日升Risen、爱旭AIKO），提供打样服务及定制包装，让项目采购方通过单一供应商即可获得太阳能发电硬件，并与我们的储能及电力系统配套供应。",
      keyFeatures: [
        "640-670W单晶面板，采用HPBC 2.0电池技术",
        "585-595W双面双玻面板，采用半片电池技术",
        "单晶PERC电池，转换效率高",
        "15年材料及工艺产品质保",
        "30年线性功率输出保证",
        "通过TUV、CSA、CE认证",
        "支持多品牌供货——晶科、隆基、天合、晶澳、日升、爱旭",
        "提供打样服务及定制包装",
      ],
      specGroups: [
        {
          title: "单晶系列",
          specs: [
            { label: "功率范围", value: "640–670W" },
            { label: "电池技术", value: "HPBC 2.0" },
            { label: "尺寸", value: "2382×1134×30mm" },
            { label: "尺寸公差", value: "长/宽±2mm" },
          ],
        },
        {
          title: "双面系列",
          specs: [
            { label: "功率范围", value: "585–595W" },
            { label: "电池技术", value: "半片,单晶PERC" },
            { label: "玻璃类型", value: "双面双玻" },
          ],
        },
        {
          title: "质保与认证",
          specs: [
            { label: "产品质保", value: "15年,材料及工艺" },
            { label: "功率输出保证", value: "30年线性功率输出保证" },
            { label: "认证", value: "TUV、CSA、CE" },
          ],
        },
      ],
      applications: ["地面光伏电站", "商用及工业屋顶光伏", "数据中心及电信站点新能源接入", "离网及混合光储系统"],
      customizationOptions: ["功率档位", "单晶或双面系列", "品牌选择（晶科/隆基/天合/晶澳/日升/爱旭）", "包装", "OEM/ODM"],
      standards: ["通过TUV认证", "通过CSA认证", "通过CE认证"],
      faqs: [
        {
          question: "单晶面板系列与双面面板系列有什么区别？",
          answer:
            "HPBC 2.0单晶系列（640-670W）为正面单侧发电面板，针对标准占地面积内的最大功率进行优化。双面双玻半片系列（585-595W）还能利用背面反射光发电，在地面安装或架高安装且下方有反射面的场景中可获得额外发电增益。",
        },
        {
          question: "万电通是否只销售自有品牌的太阳能板？",
          answer:
            "不是。除自有单晶及双面系列外，万电通还可采购供应各大品牌太阳能组件——包括晶科、隆基、天合、晶澳、日升及爱旭——并提供打样服务及定制包装，让项目采购方可通过单一供应商指定符合项目需求的面板品牌及功率档位。",
        },
        {
          question: "太阳能板适用什么质保？",
          answer:
            "我们自有品牌面板提供15年材料及工艺产品质保，另加30年线性功率输出保证。采购的第三方品牌质保条款按各制造商标准质保执行。",
        },
      ],
    },
  },
  "solar-ground-mounting-system": {
    ar: {
      name: "نظام تركيب أرضي للألواح الشمسية",
      shortName: "نظام تركيب أرضي",
      tagline: "هيكل تركيب أرضي بسكة ألومنيوم ودعامة فولاذية مجلفنة بالغمس الساخن، من 10 كيلوواط إلى 10 ميغاواط.",
      overview: "يجمع نظام التركيب الأرضي للألواح الشمسية من واندتونغ بين سكك ألواح من سبيكة ألومنيوم 6063-T5 ودعامات فولاذية مجلفنة بالغمس الساخن ودعامة مثلثة مقاومة للرياح، ما يمنح المصفوفات الشمسية الأرضية قاعدة تثبيت بالبراغي وزاوية ميل قابلة للتخصيص من 10° إلى 60° وتحمل رياح مقنن ≥180 كم/س. يتوسع التصميم المعياري من دعامة ذات عمود واحد للمصفوفات الصغيرة إلى تخطيطات على مستوى المرافق من 10 كيلوواط إلى 10 ميغاواط، مع تركيب سريع في الموقع وضمان هيكلي لمدة 25 عاماً.",
      keyFeatures: ["سكة ألواح من سبيكة ألومنيوم 6063-T5", "عمود رأسي من الفولاذ المجلفن بالغمس الساخن", "هيكل مثلث/مدعم بحرف X مقاوم للرياح", "قاعدة تثبيت بالبراغي", "زاوية ميل قابلة للتخصيص، 10° - 60°", "تحمل رياح مقنن ≥180 كم/س", "تصميم معياري لتركيب سريع في الموقع", "ضمان هيكلي لمدة 25 عاماً"],
      specGroups: [
        { title: "الهيكل", specs: [{ label: "مادة السكة", value: "سبيكة ألومنيوم 6063-T5" }, { label: "مادة العمود", value: "فولاذ مجلفن بالغمس الساخن" }, { label: "الدعامة", value: "هيكل مثلث/مدعم بحرف X مقاوم للرياح" }, { label: "الأساس", value: "قاعدة تثبيت بالبراغي" }] },
        { title: "الأداء والمقياس", specs: [{ label: "زاوية الميل", value: "قابلة للتخصيص، 10° - 60°" }, { label: "تصنيف تحمل الرياح", value: "≥180 كم/س" }, { label: "مقياس النظام", value: "10 كيلوواط - 10+ ميغاواط" }, { label: "الضمان الهيكلي", value: "25 عاماً" }] },
      ],
      applications: ["مزارع شمسية أرضية على مستوى المرافق", "مصفوفات أرضية تجارية وصناعية", "تركيبات شمسية زراعية/على الأراضي الزراعية", "مصفوفات شمسية خارج الشبكة والمواقع النائية"],
      customizationOptions: ["زاوية الميل", "ارتفاع العمود / تباعد الصفوف", "تخطيط عمود واحد أو متعدد الأعمدة", "تصميم حسب تحمل الرياح/الثلج الإقليمي", "OEM/ODM"],
      standards: ["ضمان هيكلي لمدة 25 عاماً", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل يمكن تخصيص نظام التركيب لتحمل الرياح والثلوج المحلية؟", answer: "نعم. يتم هندسة تباعد الأعمدة والدعامات وحجم الأساس وفق ظروف موقع المشروع، والهيكل القياسي مصنف لتحمل رياح ≥180 كم/س — تتوفر تصاميم إقليمية بتحمل أعلى عند الطلب." },
        { question: "ما نطاق زاوية الميل الذي يدعمه النظام؟", answer: "يدعم نظام الدعامات زاوية ميل قابلة للتخصيص من 10° إلى 60°، تُضبط عند التركيب لتناسب خط عرض المشروع وهدف إنتاج الطاقة." },
        { question: "ما مقياس المشروع الذي يناسب نظام التركيب هذا؟", answer: "يتوسع تصميم الدعامة المعياري ذات العمود الواحد أو المتعدد من مصفوفات صغيرة بقدرة 10 كيلوواط إلى مزارع شمسية أرضية على مستوى المرافق بقدرة 10 ميغاواط وأكثر، باستخدام نفس مكونات السكة والعمود." },
      ],
    },
    fr: {
      name: "Système de montage au sol pour panneaux solaires",
      shortName: "Système de montage au sol",
      tagline: "Structure de montage au sol en rail aluminium et poteau acier galvanisé à chaud, de 10 kW à 10 MW.",
      overview: "Le système de montage au sol Wandtung associe des rails de module en alliage d'aluminium 6063-T5 à des poteaux en acier galvanisé à chaud et une entretoise triangulée résistante au vent, offrant aux installations solaires au sol une plaque d'ancrage boulonnée, un angle d'inclinaison personnalisable de 10° à 60° et une résistance au vent nominale ≥180 km/h. La conception modulaire s'étend d'un support à poteau unique pour les petites installations jusqu'à des configurations à l'échelle du réseau de 10 kW à 10 MW, avec un montage rapide sur site et une garantie structurelle de 25 ans.",
      keyFeatures: ["Rail de module en alliage d'aluminium 6063-T5", "Poteau vertical en acier galvanisé à chaud", "Structure triangulée / contreventement en X résistant au vent", "Plaque d'ancrage boulonnée", "Angle d'inclinaison personnalisable, 10° – 60°", "Résistance au vent nominale ≥180 km/h", "Conception modulaire pour un montage rapide sur site", "Garantie structurelle de 25 ans"],
      specGroups: [
        { title: "Structure", specs: [{ label: "Matériau du rail", value: "Alliage d'aluminium 6063-T5" }, { label: "Matériau du poteau", value: "Acier galvanisé à chaud" }, { label: "Contreventement", value: "Structure triangulée / contreventement en X résistant au vent" }, { label: "Fondation", value: "Plaque d'ancrage boulonnée" }] },
        { title: "Performance et échelle", specs: [{ label: "Angle d'inclinaison", value: "Personnalisable, 10° – 60°" }, { label: "Résistance au vent", value: "≥180 km/h" }, { label: "Échelle du système", value: "10 kW – 10 MW+" }, { label: "Garantie structurelle", value: "25 ans" }] },
      ],
      applications: ["Fermes solaires au sol à l'échelle du réseau", "Installations au sol commerciales et industrielles", "Installations agrivoltaïques / solaires agricoles", "Installations solaires hors réseau et sites isolés"],
      customizationOptions: ["Angle d'inclinaison", "Hauteur de poteau / espacement des rangées", "Configuration à poteau unique ou multiple", "Conception selon charge de vent/neige régionale", "OEM/ODM"],
      standards: ["Garantie structurelle de 25 ans", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Le système de montage peut-il être personnalisé selon les charges de vent et de neige locales ?", answer: "Oui. L'espacement des poteaux, le contreventement et le dimensionnement des fondations sont conçus selon les conditions du site du projet, et la structure standard est classée pour des vents ≥180 km/h — des conceptions régionales à charge plus élevée sont disponibles sur demande." },
        { question: "Quelle plage d'angle d'inclinaison le système prend-il en charge ?", answer: "Le système de support prend en charge un angle d'inclinaison personnalisable de 10° à 60°, réglé lors de l'installation pour correspondre à la latitude du projet et à l'objectif de rendement énergétique." },
        { question: "Pour quelle échelle de projet ce système de montage convient-il ?", answer: "La conception modulaire des supports à poteau unique ou multiple s'étend de petites installations de 10 kW jusqu'à des fermes solaires au sol à l'échelle du réseau de 10 MW et plus, en utilisant les mêmes composants de rail et de poteau." },
      ],
    },
    es: {
      name: "Sistema de montaje en suelo para paneles solares",
      shortName: "Sistema de montaje en suelo",
      tagline: "Estructura de montaje en suelo con riel de aluminio y poste de acero galvanizado en caliente, de 10 kW a 10 MW.",
      overview: "El sistema de montaje en suelo de Wandtung combina rieles de módulo de aleación de aluminio 6063-T5 con postes de acero galvanizado en caliente y un arriostramiento triangulado resistente al viento, proporcionando a los arreglos solares en suelo una placa de anclaje atornillada, un ángulo de inclinación personalizable de 10° a 60° y una resistencia al viento nominal ≥180 km/h. El diseño modular escala desde un soporte de poste único para arreglos pequeños hasta configuraciones a escala de red de 10 kW a 10 MW, con montaje rápido en sitio y una garantía estructural de 25 años.",
      keyFeatures: ["Riel de módulo de aleación de aluminio 6063-T5", "Poste vertical de acero galvanizado en caliente", "Estructura triangulada / arriostramiento en X resistente al viento", "Placa de anclaje atornillada", "Ángulo de inclinación personalizable, 10° – 60°", "Resistencia al viento nominal ≥180 km/h", "Diseño modular para montaje rápido en sitio", "Garantía estructural de 25 años"],
      specGroups: [
        { title: "Estructura", specs: [{ label: "Material del riel", value: "Aleación de aluminio 6063-T5" }, { label: "Material del poste", value: "Acero galvanizado en caliente" }, { label: "Arriostramiento", value: "Estructura triangulada / arriostramiento en X resistente al viento" }, { label: "Cimentación", value: "Placa de anclaje atornillada" }] },
        { title: "Rendimiento y escala", specs: [{ label: "Ángulo de inclinación", value: "Personalizable, 10° – 60°" }, { label: "Resistencia al viento", value: "≥180 km/h" }, { label: "Escala del sistema", value: "10 kW – 10 MW+" }, { label: "Garantía estructural", value: "25 años" }] },
      ],
      applications: ["Granjas solares en suelo a escala de red", "Arreglos en suelo comerciales e industriales", "Instalaciones agrivoltaicas / solares agrícolas", "Arreglos solares fuera de red y en sitios remotos"],
      customizationOptions: ["Ángulo de inclinación", "Altura del poste / espaciado de filas", "Configuración de poste único o múltiple", "Diseño según carga regional de viento/nieve", "OEM/ODM"],
      standards: ["Garantía estructural de 25 años", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Se puede personalizar el sistema de montaje para cargas locales de viento y nieve?", answer: "Sí. El espaciado de postes, el arriostramiento y el dimensionamiento de la cimentación se diseñan según las condiciones del sitio del proyecto, y la estructura estándar está clasificada para vientos ≥180 km/h; se ofrecen diseños regionales de mayor carga bajo pedido." },
        { question: "¿Qué rango de ángulo de inclinación admite el sistema?", answer: "El sistema de soporte admite un ángulo de inclinación personalizable de 10° a 60°, ajustado durante la instalación para adaptarse a la latitud del proyecto y al objetivo de rendimiento energético." },
        { question: "¿Para qué escala de proyecto es adecuado este sistema de montaje?", answer: "El diseño modular de soporte de poste único o múltiple escala desde pequeños arreglos de 10 kW hasta granjas solares en suelo a escala de red de 10 MW y más, utilizando los mismos componentes de riel y poste." },
      ],
    },
    ru: {
      name: "Система наземного крепления солнечных панелей",
      shortName: "Система наземного крепления",
      tagline: "Конструкция наземного крепления из алюминиевой рейки и горячеоцинкованной стальной стойки, от 10 кВт до 10 МВт.",
      overview: "Система наземного крепления солнечных панелей Wandtung сочетает рейки модулей из алюминиевого сплава 6063-T5 с горячеоцинкованными стальными стойками и треугольным ветроустойчивым раскосом, обеспечивая наземным солнечным массивам болтовое анкерное крепление, регулируемый угол наклона от 10° до 60° и расчётную ветровую нагрузку ≥180 км/ч. Модульная конструкция масштабируется от однопостовой опоры для небольших массивов до конфигураций сетевого масштаба от 10 кВт до 10 МВт, с быстрым монтажом на объекте и 25-летней гарантией на конструкцию.",
      keyFeatures: ["Рейка модуля из алюминиевого сплава 6063-T5", "Вертикальная стойка из горячеоцинкованной стали", "Треугольная / X-образная ветроустойчивая раскосная конструкция", "Болтовое анкерное основание", "Регулируемый угол наклона, 10° – 60°", "Расчётная ветровая нагрузка ≥180 км/ч", "Модульная конструкция для быстрого монтажа на объекте", "25-летняя гарантия на конструкцию"],
      specGroups: [
        { title: "Конструкция", specs: [{ label: "Материал рейки", value: "Алюминиевый сплав 6063-T5" }, { label: "Материал стойки", value: "Горячеоцинкованная сталь" }, { label: "Раскос", value: "Треугольная / X-образная ветроустойчивая раскосная конструкция" }, { label: "Фундамент", value: "Болтовое анкерное основание" }] },
        { title: "Характеристики и масштаб", specs: [{ label: "Угол наклона", value: "Регулируемый, 10° – 60°" }, { label: "Расчётная ветровая нагрузка", value: "≥180 км/ч" }, { label: "Масштаб системы", value: "10 кВт – 10 МВт+" }, { label: "Гарантия на конструкцию", value: "25 лет" }] },
      ],
      applications: ["Наземные солнечные станции сетевого масштаба", "Коммерческие и промышленные наземные массивы", "Агровольтаические / сельскохозяйственные солнечные установки", "Автономные солнечные массивы на удалённых объектах"],
      customizationOptions: ["Угол наклона", "Высота стойки / межрядное расстояние", "Одно- или многостоечная компоновка", "Конструкция под региональную ветровую/снеговую нагрузку", "OEM/ODM"],
      standards: ["25-летняя гарантия на конструкцию", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Можно ли адаптировать систему крепления под местные ветровые и снеговые нагрузки?", answer: "Да. Расстояние между стойками, раскосы и размеры фундамента проектируются с учётом условий конкретного объекта, а стандартная конструкция рассчитана на ветровую нагрузку ≥180 км/ч — по запросу доступны региональные конструкции с более высокой нагрузкой." },
        { question: "Какой диапазон угла наклона поддерживает система?", answer: "Опорная система поддерживает регулируемый угол наклона от 10° до 60°, устанавливаемый при монтаже в соответствии с широтой объекта и целевой выработкой энергии." },
        { question: "Для какого масштаба проекта подходит эта система крепления?", answer: "Модульная конструкция одно- или многостоечных опор масштабируется от небольших массивов мощностью 10 кВт до наземных солнечных станций сетевого масштаба мощностью 10 МВт и выше, используя одни и те же компоненты реек и стоек." },
      ],
    },
    zh: {
      name: "太阳能地面安装支架系统",
      shortName: "地面安装支架系统",
      tagline: "铝合金导轨与热镀锌钢立柱地面安装支架，功率范围10kW至10MW。",
      overview: "万电通太阳能地面安装支架系统将6063-T5铝合金组件导轨与热镀锌钢立柱及三角形抗风支撑结构相结合，为地面光伏阵列提供螺栓固定锚板基础、10°至60°可定制倾角，以及≥180km/h的额定抗风能力。模块化设计可从适用于小型阵列的单柱支架扩展至10kW～10MW的公用事业级布局，现场快速安装，并提供25年结构质保。",
      keyFeatures: ["6063-T5铝合金组件导轨", "热镀锌钢立柱", "三角形/X形抗风支撑结构", "螺栓固定锚板基础", "可定制倾角，10°～60°", "额定抗风能力≥180km/h", "模块化设计，现场快速安装", "25年结构质保"],
      specGroups: [
        { title: "结构", specs: [{ label: "导轨材质", value: "6063-T5铝合金" }, { label: "立柱材质", value: "热镀锌钢" }, { label: "支撑方式", value: "三角形/X形抗风支撑结构" }, { label: "基础形式", value: "螺栓固定锚板基础" }] },
        { title: "性能与规模", specs: [{ label: "倾角", value: "可定制，10°～60°" }, { label: "抗风等级", value: "≥180km/h" }, { label: "系统规模", value: "10kW～10MW以上" }, { label: "结构质保", value: "25年" }] },
      ],
      applications: ["公用事业级地面光伏电站", "工商业地面光伏阵列", "农光互补/农业用地光伏安装", "离网及偏远场地光伏阵列"],
      customizationOptions: ["倾角", "立柱高度/行间距", "单柱或多柱布局", "区域风雪荷载定制设计", "OEM/ODM"],
      standards: ["25年结构质保", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "支架系统能否根据当地风雪荷载定制？", answer: "可以。立柱间距、支撑结构及基础尺寸均根据项目现场条件进行工程设计，标准结构抗风等级为≥180km/h——如需更高荷载的区域化设计可按需定制。" },
        { question: "该系统支持的倾角范围是多少？", answer: "支架系统支持10°至60°可定制倾角，安装时根据项目所在纬度及发电量目标进行设置。" },
        { question: "该安装支架系统适用于什么规模的项目？", answer: "单柱及多柱模块化支架设计可从10kW的小型阵列扩展至10MW及以上的公用事业级地面光伏电站，均采用相同的导轨与立柱部件。" },
      ],
    },
  },
  "energy-storage-system": {
    ar: {
      name: "نظام تخزين الطاقة (ESS)",
      shortName: "ESS",
      tagline: "نظام تخزين طاقة عام يجمع البطارية وPCS وEMS.",
      overview: "نظام تخزين الطاقة (ESS) من واندتونغ هو اللبنة العامة وراء منتجات تخزين الطاقة بالخزائن والحاويات من واندتونغ — راكات بطارية ونظام تحويل طاقة (PCS) ونظام إدارة طاقة (EMS) مُهيّأة حسب سعة الموقع واستراتيجية التشغيل، سواء كانت طاقة احتياطية أو قص ذروة أو دمج متجددة.",
      keyFeatures: ["لبنات بناء بطارية وPCS وEMS قابلة للتكوين", "استراتيجية تشغيل قابلة للتكوين عبر EMS (احتياطي / قص ذروة / متجددة)", "خيارات نشر بخزانة أو حاوية", "مراقبة عن بُعد وإدارة السلامة"],
      specGroups: [{ title: "النظام", specs: [{ label: "المكونات", value: "راكات بطارية، PCS، EMS" }, { label: "النشر", value: "شكل خزانة أو حاوية" }, { label: "استراتيجية التشغيل", value: "قابلة للتكوين عبر EMS" }] }],
      applications: ["مرونة مركز البيانات", "قص الذروة الصناعي", "دمج الطاقة المتجددة"],
      customizationOptions: ["سعة الطاقة", "تصنيف PCS", "تكوين استراتيجية التشغيل"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "ما الفرق بين ESS وBESS؟", answer: "يشير BESS (نظام تخزين طاقة البطارية) تحديداً إلى التخزين القائم على البطارية. ESS (نظام تخزين الطاقة) هو المصطلح الأوسع للنظام الكلي — البطارية وPCS وEMS — الذي تُهيّئه واندتونغ لموقع معين؛ في الممارسة العملية، غالباً ما يُستخدم المصطلحان بالتبادل لعمليات النشر القائمة على البطارية." },
      ],
    },
    fr: {
      name: "Système de stockage d'énergie (ESS)",
      shortName: "ESS",
      tagline: "Système de stockage d'énergie polyvalent combinant batterie, PCS et EMS.",
      overview: "Le système de stockage d'énergie (ESS) Wandtung est l'élément constitutif général derrière les produits de stockage d'énergie en armoire et conteneurisés de Wandtung — racks de batteries, système de conversion de puissance (PCS) et système de gestion d'énergie (EMS) configurés selon la capacité et la stratégie opérationnelle du site, qu'il s'agisse d'alimentation de secours, d'écrêtage de pointe ou d'intégration renouvelable.",
      keyFeatures: ["Éléments constitutifs batterie, PCS et EMS configurables", "Stratégie opérationnelle configurable via EMS (secours / écrêtage de pointe / renouvelables)", "Options de déploiement en armoire ou conteneurisé", "Surveillance à distance et gestion de la sécurité"],
      specGroups: [{ title: "Système", specs: [{ label: "Composants", value: "Racks de batteries, PCS, EMS" }, { label: "Déploiement", value: "Format armoire ou conteneurisé" }, { label: "Stratégie opérationnelle", value: "Configurable via EMS" }] }],
      applications: ["Résilience de centre de données", "Écrêtage de pointe industriel", "Intégration des énergies renouvelables"],
      customizationOptions: ["Capacité énergétique", "Puissance PCS", "Configuration de la stratégie opérationnelle"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quelle est la différence entre un ESS et un BESS ?", answer: "BESS (système de stockage d'énergie par batterie) fait spécifiquement référence au stockage à base de batterie. ESS (système de stockage d'énergie) est le terme plus large pour le système global — batterie, PCS et EMS — que Wandtung configure pour un site donné ; en pratique, les termes sont souvent utilisés de manière interchangeable pour les déploiements à base de batterie." },
      ],
    },
    es: {
      name: "Sistema de almacenamiento de energía (ESS)",
      shortName: "ESS",
      tagline: "Sistema de almacenamiento de energía de propósito general que combina batería, PCS y EMS.",
      overview: "El sistema de almacenamiento de energía (ESS) de Wandtung es el bloque de construcción general detrás de los productos de almacenamiento de energía en armario y contenedor de Wandtung: racks de baterías, un sistema de conversión de energía (PCS) y un sistema de gestión de energía (EMS) configurados según la capacidad y estrategia operativa del sitio, ya sea energía de respaldo, recorte de picos o integración renovable.",
      keyFeatures: ["Bloques de construcción configurables de batería, PCS y EMS", "Estrategia operativa configurable mediante EMS (respaldo / recorte de picos / renovables)", "Opciones de despliegue en armario o contenedor", "Monitoreo remoto y gestión de seguridad"],
      specGroups: [{ title: "Sistema", specs: [{ label: "Componentes", value: "Racks de baterías, PCS, EMS" }, { label: "Despliegue", value: "Formato de armario o contenedor" }, { label: "Estrategia operativa", value: "Configurable mediante EMS" }] }],
      applications: ["Resiliencia de centro de datos", "Recorte de picos industrial", "Integración de energía renovable"],
      customizationOptions: ["Capacidad energética", "Potencia de PCS", "Configuración de estrategia operativa"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuál es la diferencia entre un ESS y un BESS?", answer: "BESS (sistema de almacenamiento de energía en batería) se refiere específicamente al almacenamiento basado en batería. ESS (sistema de almacenamiento de energía) es el término más amplio para el sistema general —batería, PCS y EMS— que Wandtung configura para un sitio determinado; en la práctica, los términos a menudo se usan indistintamente para despliegues basados en batería." },
      ],
    },
    ru: {
      name: "Система накопления энергии (ESS)",
      shortName: "ESS",
      tagline: "Универсальная система накопления энергии, объединяющая батарею, PCS и EMS.",
      overview: "Система накопления энергии (ESS) Wandtung — это общий строительный блок для шкафных и контейнерных продуктов накопления энергии Wandtung: стойки батарей, система преобразования мощности (PCS) и система управления энергией (EMS), настраиваемые под мощность и операционную стратегию объекта — будь то резервное питание, сглаживание пиков или интеграция возобновляемой энергии.",
      keyFeatures: ["Настраиваемые строительные блоки батареи, PCS и EMS", "Операционная стратегия настраивается через EMS (резерв / сглаживание пиков / возобновляемые источники)", "Варианты развёртывания в шкафу или контейнере", "Удалённый мониторинг и управление безопасностью"],
      specGroups: [{ title: "Система", specs: [{ label: "Компоненты", value: "Стойки батарей, PCS, EMS" }, { label: "Развёртывание", value: "Шкафной или контейнерный форм-фактор" }, { label: "Операционная стратегия", value: "Настраивается через EMS" }] }],
      applications: ["Отказоустойчивость ЦОД", "Промышленное сглаживание пиков", "Интеграция возобновляемой энергии"],
      customizationOptions: ["Энергоёмкость", "Мощность PCS", "Настройка операционной стратегии"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "В чём разница между ESS и BESS?", answer: "BESS (система накопления энергии на батареях) конкретно относится к накоплению на основе батарей. ESS (система накопления энергии) — более широкий термин для общей системы — батареи, PCS и EMS, — которую Wandtung настраивает для конкретного объекта; на практике эти термины часто используются взаимозаменяемо для развёртываний на основе батарей." },
      ],
    },
    zh: {
      name: "储能系统(ESS)",
      shortName: "ESS",
      tagline: "融合电池、PCS及EMS的通用储能系统。",
      overview: "万电通储能系统(ESS)是万电通机柜式及集装箱式储能产品背后的通用构建模块——电池组、功率变换系统(PCS)及能量管理系统(EMS)可根据场地容量及运行策略进行配置,无论是用于备用电力、削峰还是可再生能源接入。",
      keyFeatures: ["电池、PCS及EMS构建模块可灵活配置", "可通过EMS配置运行策略(备用/削峰/可再生能源)", "支持机柜式或集装箱式部署", "远程监控及安全管理"],
      specGroups: [{ title: "系统", specs: [{ label: "组成部件", value: "电池组、PCS、EMS" }, { label: "部署方式", value: "机柜式或集装箱式" }, { label: "运行策略", value: "可通过EMS配置" }] }],
      applications: ["数据中心可靠性保障", "工业削峰", "可再生能源接入"],
      customizationOptions: ["储能容量", "PCS功率规格", "运行策略配置"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "ESS与BESS有何区别？", answer: "BESS(电池储能系统)特指基于电池的储能方式。ESS(储能系统)则是万电通为特定场地配置的整体系统——电池、PCS及EMS——的更广泛术语;实际应用中,这两个术语在基于电池的部署场景下常可互换使用。" },
      ],
    },
  },
  "energy-storage-cabinet": {
    ar: {
      name: "خزانة تخزين الطاقة",
      shortName: "خزانة ESS",
      tagline: "خزانة BESS متكاملة بتبريد سائل ومصنفة للخارج IP55، بطارية LFP 51.2 فولت، قابلة للتوسع حتى المستوى المرفقي.",
      overview: "خزانة تخزين الطاقة من واندتونغ هي خزانة تخزين طاقة بطارية متكاملة بتبريد سائل ومصنفة للخارج (IP55)، مبنية حول وحدات بطارية LFP بجهد 51.2 فولت (280 أمبير/ساعة أو 314 أمبير/ساعة). تدمج كل خزانة وحدات البطارية وPCS وEMS ووحدة التبريد السائل ومزيل الرطوبة وكاشف الحريق المركب وجهاز إخماد الحريق بالإيروسول ضمن غلاف واحد بأبعاد 1350×1150×2420 ملم، ويمكن ربط عدة خزانات مع PCS لأنظمة تجارية وصناعية (C&I) وعلى مستوى المرفق من 250 كيلوواط إلى 1000 كيلوواط.",
      keyFeatures: ["وحدات بطارية LFP بجهد 51.2 فولت، 280/314 أمبير-ساعة", "تصميم متكامل بتبريد سائل — عاكس 125 كيلوواط، بطارية 261 كيلوواط-ساعة لكل خزانة", "غلاف مصنف للخارج IP55، بأبعاد 1350×1150×2420 ملم", "كاشف حريق مركب وجهاز إخماد حريق بالإيروسول متكاملان", "EMS ومزيل رطوبة وإنذار دخان وتكييف هواء متكاملة", "قابلة للتوسع لأنظمة C&I ومستوى المرفق، 250-1000 كيلوواط", "جاهزة للتكامل مع الطاقة الشمسية والشبكة والمولد (ATS)", "مراقبة عن بُعد عبر EMS/SCADA"],
      specGroups: [
        { title: "الخزانة", specs: [{ label: "كيمياء البطارية", value: "LFP (فوسفات الحديد الليثيوم)" }, { label: "وحدة البطارية", value: "51.2 فولت، 280/314 أمبير-ساعة" }, { label: "تصنيف العاكس", value: "125 كيلوواط (خزانة متكاملة بتبريد سائل)" }, { label: "سعة البطارية", value: "261 كيلوواط-ساعة لكل خزانة (متكاملة بتبريد سائل)" }, { label: "الأبعاد", value: "1350×1150×2420 ملم" }, { label: "تصنيف الحماية", value: "IP55، مصنف للخارج" }] },
        { title: "تكامل النظام", specs: [{ label: "نطاق قدرة النظام", value: "250-1000 كيلوواط (خزانات متعددة، مستوى C&I/المرفق)" }, { label: "التبريد", value: "تبريد سائل" }, { label: "السلامة", value: "كاشف حريق مركب، جهاز إخماد حريق بالإيروسول، إنذار دخان" }, { label: "المراقبة", value: "EMS، جاهز لـ SCADA، إدارة إنذارات عن بُعد" }, { label: "تكامل الشبكة", value: "طاقة شمسية (صندوق تجميع PV)، شبكة، مولد عبر ATS" }] },
      ],
      applications: ["تقليل الذروة/إدارة رسوم الطلب للقطاع التجاري والصناعي", "تخزين طاقة لمزارع الطاقة الشمسية وخارج الشبكة", "طاقة احتياطية لمراكز البيانات والاتصالات", "تخزين طاقة الشبكة على المستوى المرفقي"],
      customizationOptions: ["سعة الطاقة", "تصنيف PCS", "سعة وحدة البطارية (280/314 أمبير-ساعة)", "علامة تجارية OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "متى يجب أن أختار ESS بصيغة خزانة بدلاً من ESS بحاوية؟", answer: "ESS بصيغة خزانة هي وحدة متكاملة مدمجة ومصنفة للخارج مناسبة لمواقع C&I ونمو السعة على مراحل — يمكن ربط عدة خزانات مع PCS مشترك. تُفضَّل ESS بحاوية عند الحاجة لوحدة واحدة قائمة بذاتها لتقديم سعة كبيرة جداً (حتى عدة ميغاواط-ساعة) في موقع واحد." },
        { question: "لماذا يُستخدم التبريد السائل في خزانة تخزين الطاقة؟", answer: "يحافظ التبريد السائل على انخفاض تباين درجة الحرارة بين خلايا وحدات البطارية، مما يطيل عمر الدورات ويسمح للخزانة بالعمل بموثوقية في الظروف الخارجية ودورات الشحن/التفريغ عالية القدرة." },
      ],
    },
    fr: {
      name: "Armoire de stockage d'énergie",
      shortName: "Armoire ESS",
      tagline: "Armoire BESS tout-en-un à refroidissement liquide, classée extérieur IP55, LFP 51,2V, évolutive jusqu'à l'échelle du réseau.",
      overview: "L'armoire de stockage d'énergie Wandtung est une armoire de stockage d'énergie par batterie tout-en-un, classée extérieur (IP55) et à refroidissement liquide, construite autour de modules de batterie LFP 51,2V (280Ah/314Ah). Chaque armoire intègre les modules de batterie, le PCS, l'EMS, l'unité de refroidissement liquide, le déshumidificateur, le détecteur composite incendie et le dispositif d'extinction par aérosol dans un seul boîtier de 1350 x 1150 x 2420 mm ; plusieurs armoires peuvent être mises en parallèle avec un PCS pour des systèmes commerciaux et industriels (C&I) et à l'échelle du réseau de 250 kW à 1000 kW.",
      keyFeatures: ["Modules de batterie LFP 51,2V, 280Ah/314Ah", "Conception tout-en-un à refroidissement liquide — onduleur 125 kW, batterie 261 kWh par armoire", "Boîtier classé extérieur IP55, 1350 x 1150 x 2420 mm", "Détecteur composite incendie et dispositif d'extinction par aérosol intégrés", "EMS, déshumidificateur, alarme fumée et climatisation intégrés", "Évolutif vers des systèmes C&I et à l'échelle du réseau, 250 kW – 1000 kW", "Prêt pour l'intégration solaire, réseau et générateur (ATS)", "Surveillance à distance via EMS/SCADA"],
      specGroups: [
        { title: "Armoire", specs: [{ label: "Chimie de batterie", value: "LFP (lithium fer phosphate)" }, { label: "Module de batterie", value: "51,2V, 280Ah/314Ah" }, { label: "Puissance onduleur", value: "125 kW (armoire tout-en-un à refroidissement liquide)" }, { label: "Capacité batterie", value: "261 kWh par armoire (tout-en-un à refroidissement liquide)" }, { label: "Dimensions", value: "1350 x 1150 x 2420 mm" }, { label: "Indice de protection", value: "IP55, classé extérieur" }] },
        { title: "Intégration système", specs: [{ label: "Plage de puissance système", value: "250 kW – 1000 kW (multi-armoires, échelle C&I / réseau)" }, { label: "Refroidissement", value: "Refroidi par liquide" }, { label: "Sécurité", value: "Détecteur composite incendie, dispositif d'extinction par aérosol, alarme fumée" }, { label: "Surveillance", value: "EMS, prêt pour SCADA, gestion d'alarmes à distance" }, { label: "Intégration réseau", value: "Solaire (boîtier de jonction PV), réseau, générateur via ATS" }] },
      ],
      applications: ["Écrêtage de pointe / gestion des frais de demande commerciaux et industriels", "Stockage d'énergie pour ferme solaire et hors réseau", "Alimentation de secours pour centre de données et télécom", "Stockage d'énergie réseau à l'échelle du réseau"],
      customizationOptions: ["Capacité énergétique", "Puissance PCS", "Capacité du module de batterie (280Ah/314Ah)", "Marque OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quand dois-je choisir un ESS en armoire plutôt qu'un ESS conteneurisé ?", answer: "Un ESS au format armoire est une unité tout-en-un compacte et classée extérieur, bien adaptée aux sites C&I et à une croissance de capacité par étapes — plusieurs armoires peuvent être mises en parallèle avec un PCS partagé. Un ESS conteneurisé est préféré lorsqu'une seule unité autonome doit fournir une très grande capacité (jusqu'à plusieurs MWh) sur un même site." },
        { question: "Pourquoi le refroidissement liquide est-il utilisé dans l'armoire de stockage d'énergie ?", answer: "Le refroidissement liquide maintient une faible variation de température entre les cellules des modules de batterie, ce qui prolonge la durée de vie en cycles et permet à l'armoire de fonctionner de manière fiable en conditions extérieures et lors de cycles de charge/décharge à haute puissance." },
      ],
    },
    es: {
      name: "Armario de almacenamiento de energía",
      shortName: "Armario ESS",
      tagline: "Armario BESS todo en uno con refrigeración líquida, clasificado para exteriores IP55, LFP 51,2V, escalable a nivel de red.",
      overview: "El armario de almacenamiento de energía de Wandtung es un armario de almacenamiento de energía en batería todo en uno, clasificado para exteriores (IP55) y con refrigeración líquida, construido en torno a módulos de batería LFP de 51,2V (280Ah/314Ah). Cada armario integra los módulos de batería, PCS, EMS, unidad de refrigeración líquida, deshumidificador, detector compuesto de incendios y dispositivo de extinción por aerosol en un único gabinete de 1350 x 1150 x 2420 mm, y varios armarios pueden conectarse en paralelo con un PCS para sistemas comerciales e industriales (C&I) y a escala de red de 250 kW a 1000 kW.",
      keyFeatures: ["Módulos de batería LFP 51,2V, 280Ah/314Ah", "Diseño todo en uno con refrigeración líquida — inversor de 125 kW, batería de 261 kWh por armario", "Gabinete clasificado para exteriores IP55, 1350 x 1150 x 2420 mm", "Detector compuesto de incendios y dispositivo de extinción por aerosol integrados", "EMS, deshumidificador, alarma de humo y aire acondicionado integrados", "Escalable a sistemas C&I y a escala de red, 250 kW – 1000 kW", "Listo para integración solar, de red y generador (ATS)", "Monitoreo remoto vía EMS/SCADA"],
      specGroups: [
        { title: "Armario", specs: [{ label: "Química de batería", value: "LFP (litio ferrofosfato)" }, { label: "Módulo de batería", value: "51,2V, 280Ah/314Ah" }, { label: "Potencia del inversor", value: "125 kW (armario todo en uno con refrigeración líquida)" }, { label: "Capacidad de batería", value: "261 kWh por armario (todo en uno con refrigeración líquida)" }, { label: "Dimensiones", value: "1350 x 1150 x 2420 mm" }, { label: "Grado de protección", value: "IP55, clasificado para exteriores" }] },
        { title: "Integración del sistema", specs: [{ label: "Rango de potencia del sistema", value: "250 kW – 1000 kW (multi-armario, escala C&I / red)" }, { label: "Refrigeración", value: "Refrigerado por líquido" }, { label: "Seguridad", value: "Detector compuesto de incendios, dispositivo de extinción por aerosol, alarma de humo" }, { label: "Monitoreo", value: "EMS, listo para SCADA, gestión remota de alarmas" }, { label: "Integración de red", value: "Solar (caja combinadora PV), red, generador vía ATS" }] },
      ],
      applications: ["Reducción de picos / gestión de cargos por demanda comercial e industrial", "Almacenamiento de energía para granjas solares y fuera de red", "Energía de respaldo para centros de datos y telecomunicaciones", "Almacenamiento de energía a escala de red"],
      customizationOptions: ["Capacidad energética", "Potencia de PCS", "Capacidad del módulo de batería (280Ah/314Ah)", "Marca OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuándo debo elegir un ESS en armario en lugar de uno en contenedor?", answer: "Un ESS en formato armario es una unidad compacta todo en uno clasificada para exteriores, muy adecuada para sitios C&I y crecimiento de capacidad por etapas — varios armarios pueden conectarse en paralelo con un PCS compartido. Un ESS en contenedor se prefiere cuando una sola unidad autónoma debe entregar una capacidad muy grande (hasta varios MWh) en una ubicación." },
        { question: "¿Por qué se utiliza refrigeración líquida en el armario de almacenamiento de energía?", answer: "La refrigeración líquida mantiene baja la variación de temperatura entre celdas de los módulos de batería, lo que prolonga la vida útil en ciclos y permite que el armario funcione de forma fiable en condiciones exteriores y ciclos de carga/descarga de alta potencia." },
      ],
    },
    ru: {
      name: "Шкаф накопления энергии",
      shortName: "Шкаф ESS",
      tagline: "Шкаф BESS «всё в одном» с жидкостным охлаждением, наружного исполнения IP55, LFP 51,2В, масштабируется до уровня сети.",
      overview: "Шкаф накопления энергии Wandtung — это шкаф накопления энергии на батареях «всё в одном» наружного исполнения (IP55) с жидкостным охлаждением, построенный на базе батарейных модулей LFP 51,2В (280Ач/314Ач). Каждый шкаф объединяет батарейные модули, PCS, EMS, блок жидкостного охлаждения, осушитель, комплексный детектор пожара и устройство аэрозольного пожаротушения в едином корпусе размером 1350 x 1150 x 2420 мм; несколько шкафов могут объединяться параллельно с PCS для коммерческих и промышленных (C&I) систем и систем сетевого масштаба мощностью от 250 кВт до 1000 кВт.",
      keyFeatures: ["Батарейные модули LFP 51,2В, 280Ач/314Ач", "Конструкция «всё в одном» с жидкостным охлаждением — инвертор 125 кВт, батарея 261 кВтч на шкаф", "Корпус наружного исполнения IP55, 1350 x 1150 x 2420 мм", "Встроенный комплексный детектор пожара и устройство аэрозольного пожаротушения", "Встроенные EMS, осушитель, дымовая сигнализация и кондиционирование воздуха", "Масштабируется до систем C&I и сетевого масштаба, 250–1000 кВт", "Готовность к интеграции с солнечной генерацией, сетью и генератором (АВР)", "Удалённый мониторинг через EMS/SCADA"],
      specGroups: [
        { title: "Шкаф", specs: [{ label: "Химия батареи", value: "LFP (литий-железо-фосфат)" }, { label: "Батарейный модуль", value: "51,2В, 280Ач/314Ач" }, { label: "Мощность инвертора", value: "125 кВт (шкаф «всё в одном» с жидкостным охлаждением)" }, { label: "Ёмкость батареи", value: "261 кВтч на шкаф («всё в одном» с жидкостным охлаждением)" }, { label: "Габариты", value: "1350 x 1150 x 2420 мм" }, { label: "Класс защиты", value: "IP55, наружное исполнение" }] },
        { title: "Интеграция системы", specs: [{ label: "Диапазон мощности системы", value: "250–1000 кВт (несколько шкафов, масштаб C&I/сети)" }, { label: "Охлаждение", value: "Жидкостное" }, { label: "Безопасность", value: "Комплексный детектор пожара, устройство аэрозольного пожаротушения, дымовая сигнализация" }, { label: "Мониторинг", value: "EMS, готовность к SCADA, удалённое управление сигнализацией" }, { label: "Интеграция с сетью", value: "Солнечная генерация (PV-коммутационная коробка), сеть, генератор через АВР" }] },
      ],
      applications: ["Сглаживание пиков / управление платой за максимальную мощность в C&I", "Накопление энергии для солнечных станций и автономных объектов", "Резервное питание ЦОД и телеком-объектов", "Накопление энергии сетевого масштаба"],
      customizationOptions: ["Энергоёмкость", "Мощность PCS", "Ёмкость батарейного модуля (280Ач/314Ач)", "OEM/ODM бренд"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Когда следует выбрать шкафную СНЭ вместо контейнерной?", answer: "Шкафная СНЭ — это компактный блок «всё в одном» наружного исполнения, хорошо подходящий для объектов C&I и поэтапного наращивания мощности — несколько шкафов можно объединить параллельно с общим PCS. Контейнерная СНЭ предпочтительнее, когда единый автономный блок должен обеспечить очень большую ёмкость (до нескольких МВтч) в одном месте." },
        { question: "Почему в шкафу накопления энергии используется жидкостное охлаждение?", answer: "Жидкостное охлаждение поддерживает низкий разброс температуры между ячейками батарейных модулей, что продлевает срок службы по циклам и позволяет шкафу надёжно работать в наружных условиях и при циклах заряда/разряда высокой мощности." },
      ],
    },
    zh: {
      name: "储能机柜",
      shortName: "储能机柜",
      tagline: "户外IP55液冷一体化BESS机柜，51.2V LFP电池，可扩展至公用事业级规模。",
      overview: "万电通储能机柜是一款户外级（IP55）液冷一体化电池储能机柜，采用51.2V LFP电池模组（280Ah/314Ah）。每台机柜将电池模组、PCS、EMS、液冷机组、除湿机、复合火灾探测器和气溶胶灭火装置集成于单一1350×1150×2420mm机柜内，多台机柜可与PCS并联，组成250kW至1000kW的工商业（C&I）及公用事业级系统。",
      keyFeatures: ["51.2V LFP电池模组，280Ah/314Ah", "液冷一体化设计——125kW逆变器，单机柜261kWh电池", "户外IP55防护等级机柜，1350×1150×2420mm", "集成复合火灾探测器与气溶胶灭火装置", "集成EMS、除湿机、烟雾报警及空调系统", "可扩展至C&I及公用事业级系统，250kW～1000kW", "支持光伏、电网及发电机（ATS）接入", "通过EMS/SCADA远程监控"],
      specGroups: [
        { title: "机柜", specs: [{ label: "电池化学体系", value: "LFP（磷酸铁锂）" }, { label: "电池模组", value: "51.2V，280Ah/314Ah" }, { label: "逆变器功率", value: "125kW（液冷一体化机柜）" }, { label: "电池容量", value: "单机柜261kWh（液冷一体化）" }, { label: "外形尺寸", value: "1350×1150×2420mm" }, { label: "防护等级", value: "IP55，户外级" }] },
        { title: "系统集成", specs: [{ label: "系统功率范围", value: "250kW～1000kW（多机柜并联，C&I/公用事业级）" }, { label: "冷却方式", value: "液冷" }, { label: "安全防护", value: "复合火灾探测器、气溶胶灭火装置、烟雾报警" }, { label: "监控", value: "EMS、支持SCADA、远程告警管理" }, { label: "并网集成", value: "光伏（PV汇流箱）、电网、发电机（经ATS）" }] },
      ],
      applications: ["工商业削峰填谷/需量电费管理", "光伏电站及离网储能", "数据中心及通信站备用电源", "公用事业级电网储能"],
      customizationOptions: ["储能容量", "PCS功率规格", "电池模组容量（280Ah/314Ah）", "OEM/ODM品牌定制"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "何时应选择机柜式ESS而非集装箱式ESS？", answer: "机柜式ESS是一款紧凑的户外级一体化设备，非常适合工商业场地及分阶段扩容——多台机柜可与共用PCS并联部署；而当单一自成一体的设备需要在同一地点提供极大容量（可达数兆瓦时）时，则更适合选择集装箱式ESS。" },
        { question: "为什么储能机柜采用液冷技术？", answer: "液冷技术能将电池模组的单体温差控制在较低水平，从而延长循环寿命，并使机柜在户外环境及大功率充放电循环下也能可靠运行。" },
      ],
    },
  },
  "containerized-energy-storage-system": {
    ar: {
      name: "نظام تخزين طاقة بحاوية",
      shortName: "ESS بحاوية",
      tagline: "نظام تخزين طاقة بحاوية LFP بتبريد سائل مصنف للخارج، حتى 3840 كيلوواط ساعة لكل وحدة.",
      overview: "يعبّئ نظام تخزين الطاقة بحاوية من واندتونغ راكات بطارية LFP وPCS وBMS/EMS وإدارة حرارية بالتبريد السائل وإخماد حريق داخل حاوية ISO مصنفة للخارج (IP55). بسعة تصل إلى 3840 كيلوواط ساعة لكل وحدة وتبريد سائل دقيق يبقي فرق الحرارة بين الخلايا عند ΔT ≤ 3°م، وهو مبني وفق معايير السلامة الدولية UL/IEC لتخزين الطاقة على مستوى المرافق ودمج الطاقة المتجددة والتطبيقات الصناعية، ومُختبر في المصنع كنظام كامل قبل الشحن.",
      keyFeatures: ["سعة مقننة تصل إلى 3840 كيلوواط ساعة لكل حاوية", "خلايا LFP (فوسفات الحديد الليثيوم) — أكثر كيمياء البطاريات أماناً", "إدارة حرارية بالتبريد السائل، فرق الحرارة بين الخلايا ΔT ≤ 3°م", "هيكل حاوية مصنف للخارج IP55 مقاوم للطقس", "BMS وEMS وواجهة PCS وإخماد حريق متكاملة", "عمر تشغيلي طويل يتجاوز 6000 دورة", "مبني وفق معايير السلامة الدولية UL / IEC", "قابل للتوسع — نشر عدة حاويات لسعة أكبر"],
      specGroups: [
        { title: "النظام", specs: [{ label: "السعة المقننة", value: "حتى 3840 كيلوواط ساعة لكل حاوية" }, { label: "كيمياء البطارية", value: "LFP (فوسفات الحديد الليثيوم)" }, { label: "الشكل", value: "حاوية ISO قياسية، مصنفة للخارج IP55" }, { label: "عمر الدورات", value: "أكثر من 6000 دورة" }] },
        { title: "الحرارة والسلامة", specs: [{ label: "الإدارة الحرارية", value: "تبريد سائل، فرق الحرارة بين الخلايا ΔT ≤ 3°م" }, { label: "إخماد الحريق", value: "نظام إخماد حريق متكامل متعدد المستويات" }, { label: "الحماية", value: "غلاف IP55 مقاوم للطقس" }, { label: "المعايير", value: "معايير السلامة الدولية UL / IEC" }] },
        { title: "التكامل", specs: [{ label: "المكونات", value: "راكات بطارية LFP، واجهة PCS، BMS، EMS، وحدة تبريد سائل، توزيع طاقة" }, { label: "قابلية التوسع", value: "عدة حاويات مترابطة لسعة أكبر" }] },
      ],
      applications: ["تخزين طاقة على مستوى المرفق/الموقع", "دمج الطاقة المتجددة (شمسية/رياح)", "تقليل الذروة وإزاحة الأحمال", "احتياطي صناعي ولمركز البيانات"],
      customizationOptions: ["سعة الطاقة", "تصنيف PCS", "نوع الإدارة الحرارية", "OEM/ODM"],
      standards: ["معايير السلامة الدولية UL / IEC", "حماية خارجية IP55", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "لماذا نختار ESS بحاوية بدلاً من نظام بصيغة خزانة؟", answer: "ESS بحاوية مصنف للخارج (IP55) وقائم بذاته، ما يجعله مناسباً للمواقع بدون مساحة داخلية أو لمتطلبات سعة أكبر — حتى 3840 كيلوواط ساعة لكل وحدة — مما يمكن أن يستوعبه نظام بصيغة خزانة عملياً." },
        { question: "لماذا يعتبر التبريد السائل مهماً لنظام بطارية بحاوية؟", answer: "يبقي التبريد السائل فرق الحرارة بين الخلايا عند ΔT ≤ 3°م، وهو أدق بكثير مما يحققه التبريد الهوائي. تساعد درجات حرارة الخلايا المتساوية على إطالة عمر البطارية وتحسين السلامة والحفاظ على تشغيل النظام بسعة ثابتة." },
      ],
    },
    fr: {
      name: "Système de stockage d'énergie conteneurisé",
      shortName: "ESS conteneurisé",
      tagline: "Stockage d'énergie conteneurisé LFP à refroidissement liquide, classé extérieur, jusqu'à 3840 kWh par unité.",
      overview: "Le système de stockage d'énergie conteneurisé Wandtung regroupe des racks de batteries LFP, PCS, BMS/EMS, gestion thermique par refroidissement liquide et extinction incendie à l'intérieur d'un conteneur ISO classé pour l'extérieur (IP55). D'une capacité allant jusqu'à 3840 kWh par unité avec un refroidissement liquide de précision maintenant l'écart de température entre cellules à ΔT ≤ 3°C, il est construit selon les normes de sécurité internationales UL/IEC pour le stockage à l'échelle du réseau, l'intégration des renouvelables et les applications industrielles, et testé en usine comme système complet avant expédition.",
      keyFeatures: ["Capacité nominale jusqu'à 3840 kWh par conteneur", "Cellules LFP (lithium fer phosphate) — la chimie de batterie la plus sûre", "Gestion thermique par refroidissement liquide, écart cellule à cellule ΔT ≤ 3°C", "Structure de conteneur classée extérieur IP55, étanche aux intempéries", "BMS, EMS, interface PCS et extinction incendie intégrés", "Longue durée de vie > 6000 cycles", "Construit selon les normes de sécurité internationales UL / IEC", "Évolutif — déployez plusieurs conteneurs pour une capacité plus grande"],
      specGroups: [
        { title: "Système", specs: [{ label: "Capacité nominale", value: "Jusqu'à 3840 kWh par conteneur" }, { label: "Chimie de batterie", value: "LFP (lithium fer phosphate)" }, { label: "Facteur de forme", value: "Conteneur ISO standard, classé extérieur IP55" }, { label: "Durée de vie en cycles", value: "> 6000 cycles" }] },
        { title: "Thermique et sécurité", specs: [{ label: "Gestion thermique", value: "Refroidissement liquide, écart cellule à cellule ΔT ≤ 3°C" }, { label: "Extinction incendie", value: "Système d'extinction incendie intégré multi-niveaux" }, { label: "Protection", value: "Enceinte IP55 étanche aux intempéries" }, { label: "Normes", value: "Normes de sécurité internationales UL / IEC" }] },
        { title: "Intégration", specs: [{ label: "Composants", value: "Racks de batteries LFP, interface PCS, BMS, EMS, unité de refroidissement liquide, distribution électrique" }, { label: "Évolutivité", value: "Plusieurs conteneurs interconnectés pour une capacité plus grande" }] },
      ],
      applications: ["Stockage d'énergie au niveau de l'installation/site", "Intégration des énergies renouvelables (solaire/éolien)", "Écrêtage des pointes et déplacement de charge", "Secours industriel et de centre de données"],
      customizationOptions: ["Capacité énergétique", "Puissance PCS", "Type de gestion thermique", "OEM/ODM"],
      standards: ["Normes de sécurité internationales UL / IEC", "Protection extérieure IP55", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Pourquoi choisir un ESS conteneurisé plutôt qu'un système en armoire ?", answer: "Un ESS conteneurisé est classé pour l'extérieur (IP55) et autonome, ce qui le rend adapté aux sites sans espace intérieur ou pour des exigences de capacité plus importantes — jusqu'à 3840 kWh par unité — qu'un système au format armoire ne peut pratiquement héberger." },
        { question: "Pourquoi le refroidissement liquide est-il important pour un système de batteries conteneurisé ?", answer: "Le refroidissement liquide maintient l'écart de température entre cellules à ΔT ≤ 3°C, bien plus serré que ce que le refroidissement par air peut atteindre. Des températures de cellules homogènes prolongent la durée de vie de la batterie, améliorent la sécurité et maintiennent le système à une capacité constante." },
      ],
    },
    es: {
      name: "Sistema de almacenamiento de energía en contenedor",
      shortName: "ESS en contenedor",
      tagline: "Almacenamiento de energía en contenedor LFP con refrigeración líquida, clasificado para exteriores, hasta 3840 kWh por unidad.",
      overview: "El sistema de almacenamiento de energía en contenedor de Wandtung empaqueta racks de baterías LFP, PCS, BMS/EMS, gestión térmica por refrigeración líquida y extinción de incendios dentro de un contenedor ISO clasificado para exteriores (IP55). Con una capacidad de hasta 3840 kWh por unidad y refrigeración líquida de precisión que mantiene la diferencia de temperatura entre celdas en ΔT ≤ 3°C, está construido según las normas de seguridad internacionales UL/IEC para almacenamiento a escala de red, integración de renovables y aplicaciones industriales, y probado en fábrica como sistema completo antes del envío.",
      keyFeatures: ["Capacidad nominal de hasta 3840 kWh por contenedor", "Celdas LFP (litio ferrofosfato) — la química de batería más segura", "Gestión térmica por refrigeración líquida, diferencia celda a celda ΔT ≤ 3°C", "Estructura de contenedor clasificada para exteriores IP55, resistente a la intemperie", "BMS, EMS, interfaz PCS y extinción de incendios integrados", "Larga vida útil > 6000 ciclos", "Construido según las normas de seguridad internacionales UL / IEC", "Escalable: despliegue varios contenedores para mayor capacidad"],
      specGroups: [
        { title: "Sistema", specs: [{ label: "Capacidad nominal", value: "Hasta 3840 kWh por contenedor" }, { label: "Química de batería", value: "LFP (litio ferrofosfato)" }, { label: "Factor de forma", value: "Contenedor ISO estándar, clasificado para exteriores IP55" }, { label: "Vida útil en ciclos", value: "> 6000 ciclos" }] },
        { title: "Térmica y seguridad", specs: [{ label: "Gestión térmica", value: "Refrigeración líquida, diferencia celda a celda ΔT ≤ 3°C" }, { label: "Extinción de incendios", value: "Sistema de extinción de incendios integrado multinivel" }, { label: "Protección", value: "Envolvente IP55 resistente a la intemperie" }, { label: "Normas", value: "Normas de seguridad internacionales UL / IEC" }] },
        { title: "Integración", specs: [{ label: "Componentes", value: "Racks de baterías LFP, interfaz PCS, BMS, EMS, unidad de refrigeración líquida, distribución eléctrica" }, { label: "Escalabilidad", value: "Varios contenedores interconectados para mayor capacidad" }] },
      ],
      applications: ["Almacenamiento de energía a nivel de instalación/sitio", "Integración de energía renovable (solar/eólica)", "Recorte de picos y desplazamiento de carga", "Respaldo industrial y de centro de datos"],
      customizationOptions: ["Capacidad energética", "Potencia de PCS", "Tipo de gestión térmica", "OEM/ODM"],
      standards: ["Normas de seguridad internacionales UL / IEC", "Protección exterior IP55", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Por qué elegir un ESS en contenedor en lugar de un sistema en armario?", answer: "Un ESS en contenedor está clasificado para exteriores (IP55) y es autónomo, lo que lo hace adecuado para sitios sin espacio interior o para requisitos de mayor capacidad — hasta 3840 kWh por unidad — de los que un sistema en formato armario puede albergar de forma práctica." },
        { question: "¿Por qué es importante la refrigeración líquida en un sistema de baterías en contenedor?", answer: "La refrigeración líquida mantiene la diferencia de temperatura entre celdas en ΔT ≤ 3°C, mucho más ajustada de lo que la refrigeración por aire puede lograr. Temperaturas de celda uniformes prolongan la vida de la batería, mejoran la seguridad y mantienen el sistema operando a capacidad constante." },
      ],
    },
    ru: {
      name: "Контейнерная система накопления энергии",
      shortName: "Контейнерная ESS",
      tagline: "Контейнерная LFP-система накопления энергии с жидкостным охлаждением, для наружной установки, до 3840 кВт·ч на блок.",
      overview: "Контейнерная система накопления энергии Wandtung объединяет LFP-стойки батарей, PCS, BMS/EMS, терморегулирование с жидкостным охлаждением и пожаротушение внутри рассчитанного на наружную установку ISO-контейнера (IP55). С ёмкостью до 3840 кВт·ч на блок и прецизионным жидкостным охлаждением, удерживающим разницу температур между ячейками на уровне ΔT ≤ 3°C, она построена по международным стандартам безопасности UL/IEC для накопления сетевого масштаба, интеграции ВИЭ и промышленных применений и тестируется на заводе как полная система перед отгрузкой.",
      keyFeatures: ["Номинальная ёмкость до 3840 кВт·ч на контейнер", "Ячейки LFP (литий-железо-фосфат) — самая безопасная химия батарей", "Терморегулирование с жидкостным охлаждением, разница между ячейками ΔT ≤ 3°C", "Конструкция контейнера, рассчитанная на наружную установку IP55, всепогодная", "Встроенные BMS, EMS, интерфейс PCS и пожаротушение", "Длительный ресурс > 6000 циклов", "Построено по международным стандартам безопасности UL / IEC", "Масштабируемость — развёртывание нескольких контейнеров для большей мощности"],
      specGroups: [
        { title: "Система", specs: [{ label: "Номинальная ёмкость", value: "До 3840 кВт·ч на контейнер" }, { label: "Химия батареи", value: "LFP (литий-железо-фосфат)" }, { label: "Форм-фактор", value: "Стандартный ISO-контейнер, наружное исполнение IP55" }, { label: "Ресурс циклов", value: "> 6000 циклов" }] },
        { title: "Тепло и безопасность", specs: [{ label: "Терморегулирование", value: "Жидкостное охлаждение, разница между ячейками ΔT ≤ 3°C" }, { label: "Пожаротушение", value: "Встроенная многоуровневая система пожаротушения" }, { label: "Защита", value: "Всепогодный корпус IP55" }, { label: "Стандарты", value: "Международные стандарты безопасности UL / IEC" }] },
        { title: "Интеграция", specs: [{ label: "Компоненты", value: "LFP-стойки батарей, интерфейс PCS, BMS, EMS, блок жидкостного охлаждения, распределение питания" }, { label: "Масштабируемость", value: "Несколько взаимосвязанных контейнеров для большей мощности" }] },
      ],
      applications: ["Накопление энергии на уровне объекта/предприятия", "Интеграция возобновляемой энергии (солнце/ветер)", "Сглаживание пиков и сдвиг нагрузки", "Промышленный резерв и резерв ЦОД"],
      customizationOptions: ["Энергоёмкость", "Мощность PCS", "Тип терморегулирования", "OEM/ODM"],
      standards: ["Международные стандарты безопасности UL / IEC", "Наружная защита IP55", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Почему стоит выбрать контейнерную ESS вместо шкафной системы?", answer: "Контейнерная ESS рассчитана на наружную установку (IP55) и автономна, что делает её подходящей для объектов без внутреннего пространства или для требований большей мощности — до 3840 кВт·ч на блок — чем практически может вместить система шкафного формата." },
        { question: "Почему жидкостное охлаждение важно для контейнерной батарейной системы?", answer: "Жидкостное охлаждение удерживает разницу температур между ячейками на уровне ΔT ≤ 3°C, что намного точнее, чем может обеспечить воздушное охлаждение. Равномерная температура ячеек продлевает срок службы батареи, повышает безопасность и поддерживает работу всей системы с постоянной ёмкостью." },
      ],
    },
    zh: {
      name: "集装箱式储能系统",
      shortName: "集装箱式ESS",
      tagline: "户外级液冷LFP集装箱式储能系统,单机容量高达3840kWh。",
      overview: "万电通集装箱式储能系统将LFP电池组、PCS、BMS/EMS、液冷热管理及消防系统集成于户外级(IP55)ISO集装箱内。单机额定容量高达3840kWh,精密液冷将电芯间温差控制在ΔT≤3°C,按UL/IEC国际安全标准制造,适用于电网级储能、新能源接入及工业储能场景,并在出厂前作为完整系统经过测试。",
      keyFeatures: ["单集装箱额定容量高达3840kWh", "LFP(磷酸铁锂)电芯——最安全的电池化学体系", "液冷热管理,电芯间温差ΔT≤3°C", "IP55户外级防风雨集装箱结构", "集成BMS、EMS、PCS接口及消防系统", ">6000次循环长寿命", "按UL / IEC国际安全标准制造", "可扩展——部署多个集装箱以扩大容量"],
      specGroups: [
        { title: "系统", specs: [{ label: "额定容量", value: "单集装箱高达3840kWh" }, { label: "电池化学体系", value: "LFP(磷酸铁锂)" }, { label: "形态", value: "标准ISO集装箱,IP55户外级" }, { label: "循环寿命", value: ">6000次" }] },
        { title: "热管理与安全", specs: [{ label: "热管理", value: "液冷,电芯间温差ΔT≤3°C" }, { label: "消防系统", value: "集成多级消防系统" }, { label: "防护", value: "IP55防风雨外壳" }, { label: "标准", value: "UL / IEC国际安全标准" }] },
        { title: "集成", specs: [{ label: "组成部件", value: "LFP电池组、PCS接口、BMS、EMS、液冷机组、配电系统" }, { label: "可扩展性", value: "多集装箱互联以扩大容量" }] },
      ],
      applications: ["设施/场地级储能", "可再生能源(光伏/风电)接入", "削峰填谷与负荷转移", "工业及数据中心备用电力"],
      customizationOptions: ["储能容量", "PCS功率规格", "热管理类型", "OEM/ODM"],
      standards: ["UL / IEC国际安全标准", "IP55户外防护", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "为什么选择集装箱式ESS而非机柜式系统？", answer: "集装箱式ESS为户外级(IP55)独立系统,适用于无室内空间的场地,或容量需求(单机高达3840kWh)超出机柜式系统实际承载能力的场景。" },
        { question: "液冷对集装箱式电池系统为什么重要？", answer: "液冷将电芯间温差控制在ΔT≤3°C,远优于风冷所能达到的水平。均衡的电芯温度可延长电池寿命、提升安全性,并使整个系统保持稳定的容量输出。" },
      ],
    },
  },
  "wall-mount-cabinet": {
    ar: {
      name: "خزانة حائطية",
      shortName: "خزانة حائطية",
      tagline: "خزانة شبكة حائطية مدمجة لغرف المعدات محدودة المساحة.",
      overview: "تعبّئ الخزانة الحائطية من واندتونغ غلافاً بحجم 19 بوصة من 6U إلى 12U مع باب زجاجي مقسّى بسماكة 5 مم، وإطار فولاذي معزز مدرفل على البارد، ومدخل كابل قابل للإزالة، في مساحة حائطية مدمجة، مناسبة لغرف المعدات الصغيرة والمكاتب وخزائن الاتصالات حيث لا تتوفر مساحة أرضية لخزانة بحجم كامل.",
      keyFeatures: ["باب أمامي زجاجي مقسّى بسماكة 5 مم للرؤية والمتانة", "إطار وأعمدة تركيب فولاذية SPCC مدرفلة على البارد بسماكة 1.5 مم", "إطار حافة من الألمنيوم حول الباب الزجاجي", "فتحة تهوية مروحة في اللوحة العلوية", "لوحة مدخل كابل علوية قابلة للإزالة", "باب قابل للقفل بمفتاح"],
      specGroups: [
        { title: "الهيكل والأبعاد", specs: [{ label: "وحدات الراك", value: "6U – 12U" }, { label: "التركيب", value: "حائطي" }, { label: "الباب", value: "زجاج مقسّى 5 مم، قابل للقفل" }] },
        { title: "البناء", specs: [{ label: "مادة الإطار", value: "فولاذ SPCC مدرفل على البارد 1.5 مم" }, { label: "إطار الباب", value: "إطار حافة من الألمنيوم" }, { label: "التهوية", value: "فتحة مروحة في اللوحة العلوية" }, { label: "مدخل الكابل", value: "لوحة مدخل كابل علوية قابلة للإزالة" }] },
      ],
      applications: ["غرف معدات صغيرة", "خزائن شبكة المكاتب", "نقاط توزيع الاتصالات"],
      customizationOptions: ["ارتفاع وحدة الراك (6U/9U/12U)", "نوع الباب (زجاجي/شبكي)", "اللون / العلامة التجارية", "OEM/ODM"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "كيف تختلف الخزانة الحائطية عن خزانة الشبكة الأرضية؟", answer: "الخزانة الحائطية أصغر (عادة 6U–12U) وتُركَّب مباشرة على الحائط بدلاً من الأرضية، ما يجعلها مناسبة لأحمال معدات أصغر وغرف بلا مساحة لخزانة أرضية بحجم كامل — تغطي سلسلة خزانة الشبكة من واندتونغ النطاق الأرضي الأكبر من 12U إلى 47U." },
        { question: "هل تدعم الخزانة الحائطية تخصيص OEM/ODM؟", answer: "نعم. تدعم واندتونغ تخصيص OEM/ODM للخزانة الحائطية، بما في ذلك ارتفاع وحدة الراك ونوع الباب واللون والعلامة التجارية لمطابقة مواصفات العميل." },
      ],
    },
    fr: {
      name: "Armoire murale",
      shortName: "Armoire murale",
      tagline: "Armoire réseau murale compacte pour locaux techniques à espace restreint.",
      overview: "L'armoire murale Wandtung regroupe un boîtier 19 pouces de 6U à 12U avec une porte en verre trempé de 5 mm, un cadre en acier renforcé laminé à froid et une entrée de câble amovible dans un encombrement mural compact, adapté aux petits locaux techniques, bureaux et locaux télécoms où l'espace au sol n'est pas disponible pour une armoire pleine taille.",
      keyFeatures: ["Porte avant en verre trempé de 5 mm pour visibilité et durabilité", "Cadre et colonnes de montage en acier SPCC laminé à froid de 1,5 mm", "Cadre de bordure en alliage d'aluminium autour de la porte vitrée", "Ouverture de ventilation par ventilateur dans le panneau supérieur", "Panneau d'entrée de câble supérieur amovible", "Porte verrouillable à clé"],
      specGroups: [
        { title: "Structure et dimensions", specs: [{ label: "Unités de rack", value: "6U – 12U" }, { label: "Montage", value: "Mural" }, { label: "Porte", value: "Verre trempé 5 mm, verrouillable" }] },
        { title: "Construction", specs: [{ label: "Matériau du cadre", value: "Acier SPCC laminé à froid 1,5 mm" }, { label: "Cadre de porte", value: "Cadre de bordure en alliage d'aluminium" }, { label: "Ventilation", value: "Ouverture de ventilateur en panneau supérieur" }, { label: "Entrée de câble", value: "Panneau d'entrée de câble supérieur amovible" }] },
      ],
      applications: ["Petits locaux techniques", "Locaux techniques réseau de bureau", "Points de distribution télécoms"],
      customizationOptions: ["Hauteur d'unité de rack (6U/9U/12U)", "Type de porte (verre/grillage)", "Couleur / marquage", "OEM/ODM"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "En quoi une armoire murale diffère-t-elle d'une armoire réseau au sol ?", answer: "Une armoire murale est plus petite (généralement 6U–12U) et s'installe directement sur un mur plutôt qu'au sol, ce qui la rend adaptée aux charges d'équipement plus petites et aux pièces sans espace pour une armoire au sol pleine taille — la gamme d'armoires réseau de Wandtung couvre la plage au sol plus grande de 12U à 47U." },
        { question: "L'armoire murale prend-elle en charge la personnalisation OEM/ODM ?", answer: "Oui. Wandtung prend en charge l'OEM/ODM pour l'armoire murale, y compris la hauteur d'unité de rack, le type de porte, la couleur et le marquage selon les spécifications du client." },
      ],
    },
    es: {
      name: "Armario de pared",
      shortName: "Armario de pared",
      tagline: "Armario de red de pared compacto para salas de equipos con espacio limitado.",
      overview: "El armario de pared de Wandtung empaqueta una carcasa de 19 pulgadas de 6U a 12U con una puerta de vidrio templado de 5 mm, un marco de acero reforzado laminado en frío y una entrada de cables extraíble en una huella mural compacta, adecuado para pequeñas salas de equipos, oficinas y armarios de telecomunicaciones donde no hay espacio en el suelo para un armario de tamaño completo.",
      keyFeatures: ["Puerta frontal de vidrio templado de 5 mm para visibilidad y durabilidad", "Marco y columnas de montaje de acero SPCC laminado en frío de 1,5 mm", "Marco de borde de aleación de aluminio alrededor de la puerta de vidrio", "Abertura de ventilación con ventilador en el panel superior", "Panel de entrada de cables superior extraíble", "Puerta con cerradura de llave"],
      specGroups: [
        { title: "Estructura y dimensiones", specs: [{ label: "Unidades de rack", value: "6U – 12U" }, { label: "Montaje", value: "De pared" }, { label: "Puerta", value: "Vidrio templado 5 mm, con cerradura" }] },
        { title: "Construcción", specs: [{ label: "Material del marco", value: "Acero SPCC laminado en frío 1,5 mm" }, { label: "Marco de puerta", value: "Marco de borde de aleación de aluminio" }, { label: "Ventilación", value: "Abertura de ventilador en panel superior" }, { label: "Entrada de cables", value: "Panel de entrada de cables superior extraíble" }] },
      ],
      applications: ["Salas de equipos pequeñas", "Armarios de red de oficina", "Puntos de distribución de telecomunicaciones"],
      customizationOptions: ["Altura de unidad de rack (6U/9U/12U)", "Tipo de puerta (vidrio/malla)", "Color / marca", "OEM/ODM"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿En qué se diferencia un armario de pared de un armario de red de piso?", answer: "Un armario de pared es más pequeño (típicamente 6U–12U) y se instala directamente en una pared en lugar del suelo, lo que lo hace adecuado para cargas de equipos más pequeñas y salas sin espacio para un armario de piso de tamaño completo; la línea de armarios de red de Wandtung cubre el rango de piso más grande de 12U a 47U." },
        { question: "¿El armario de pared admite personalización OEM/ODM?", answer: "Sí. Wandtung admite OEM/ODM para el armario de pared, incluyendo la altura de la unidad de rack, el tipo de puerta, el color y la marca según la especificación del cliente." },
      ],
    },
    ru: {
      name: "Настенный шкаф",
      shortName: "Настенный шкаф",
      tagline: "Компактный настенный сетевой шкаф для помещений с ограниченным пространством.",
      overview: "Настенный шкаф Wandtung объединяет 19-дюймовый корпус 6U–12U с дверью из закалённого стекла толщиной 5 мм, усиленной холоднокатаной стальной рамой и съёмным кабельным вводом в компактном настенном исполнении, подходящем для небольших технических помещений, офисов и телекоммуникационных шкафов, где нет напольного пространства для полноразмерного шкафа.",
      keyFeatures: ["Передняя дверь из закалённого стекла толщиной 5 мм для обзора и долговечности", "Рама и монтажные стойки из холоднокатаной стали SPCC толщиной 1,5 мм", "Алюминиевая окантовка вокруг стеклянной двери", "Вентиляционное отверстие с вентилятором в верхней панели", "Съёмная верхняя панель кабельного ввода", "Запираемая дверь с ключом"],
      specGroups: [
        { title: "Конструкция и размеры", specs: [{ label: "Юниты стойки", value: "6U – 12U" }, { label: "Монтаж", value: "Настенный" }, { label: "Дверь", value: "Закалённое стекло 5 мм, запираемая" }] },
        { title: "Исполнение", specs: [{ label: "Материал рамы", value: "Холоднокатаная сталь SPCC 1,5 мм" }, { label: "Рама двери", value: "Алюминиевая окантовка" }, { label: "Вентиляция", value: "Вентиляторное отверстие в верхней панели" }, { label: "Кабельный ввод", value: "Съёмная верхняя панель кабельного ввода" }] },
      ],
      applications: ["Небольшие технические помещения", "Офисные сетевые шкафы", "Точки распределения телекоммуникаций"],
      customizationOptions: ["Высота юнита стойки (6U/9U/12U)", "Тип двери (стекло/сетка)", "Цвет / брендирование", "OEM/ODM"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Чем настенный шкаф отличается от напольного сетевого шкафа?", answer: "Настенный шкаф меньше (обычно 6U–12U) и монтируется непосредственно на стену, а не на пол, что делает его подходящим для меньших нагрузок оборудования и помещений без места для полноразмерного напольного шкафа — линейка сетевых шкафов Wandtung охватывает больший напольный диапазон от 12U до 47U." },
        { question: "Поддерживает ли настенный шкаф настройку OEM/ODM?", answer: "Да. Wandtung поддерживает OEM/ODM для настенного шкафа, включая высоту юнита стойки, тип двери, цвет и брендирование в соответствии со спецификацией клиента." },
      ],
    },
    zh: {
      name: "壁挂式机柜",
      shortName: "壁挂式机柜",
      tagline: "面向空间受限设备间的紧凑型壁挂式网络机柜。",
      overview: "万电通壁挂式机柜将6U至12U的19英寸机箱、5mm钢化玻璃门、加固冷轧钢框架及可拆卸走线口整合于紧凑的壁挂形态中，适用于地面空间不足以安装全尺寸机柜的小型设备间、办公室及电信配线间。",
      keyFeatures: ["5mm钢化玻璃前门，兼具可视性与耐用性", "1.5mm冷轧SPCC钢制框架及安装立柱", "玻璃门周边铝合金边框", "顶部面板风扇通风口", "可拆卸顶部走线面板", "带钥匙锁的柜门"],
      specGroups: [
        { title: "结构与尺寸", specs: [{ label: "机架单元", value: "6U–12U" }, { label: "安装方式", value: "壁挂式" }, { label: "柜门", value: "5mm钢化玻璃，可上锁" }] },
        { title: "结构材质", specs: [{ label: "框架材质", value: "1.5mm冷轧SPCC钢" }, { label: "门框", value: "铝合金边框" }, { label: "通风", value: "顶部面板风扇开孔" }, { label: "走线口", value: "可拆卸顶部走线面板" }] },
      ],
      applications: ["小型设备间", "办公室网络配线间", "电信配线点"],
      customizationOptions: ["机架单元高度(6U/9U/12U)", "柜门类型(玻璃/网孔)", "颜色/品牌定制", "OEM/ODM"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        { question: "壁挂式机柜与落地式网络机柜有何区别？", answer: "壁挂式机柜尺寸更小(通常为6U–12U)，直接安装于墙面而非地面，适用于设备负载较小、且无地面空间安装全尺寸机柜的房间——万电通网络机柜产品线则覆盖12U至47U更大规格的落地式范围。" },
        { question: "壁挂式机柜是否支持OEM/ODM定制？", answer: "是的。万电通支持壁挂式机柜的OEM/ODM定制，包括机架单元高度、柜门类型、颜色及品牌标识，可根据客户规格进行定制。" },
      ],
    },
  },
};

export function getProductContent<T extends { name: string; shortName: string; tagline: string; overview: string; keyFeatures: string[]; specGroups: { title: string; specs: { label: string; value: string }[] }[]; applications: string[]; customizationOptions: string[]; standards: string[]; faqs: { question: string; answer: string }[] }>(
  slug: string,
  locale: Locale,
  fallback: T
): ProductContent {
  if (locale === "en") return fallback;
  return productContentTranslations[slug]?.[locale as TranslatedLocale] ?? fallback;
}

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
        "توزع وحدة PDU للراك من هايسِن طاقة المرافق أو UPS إلى معدات تكنولوجيا المعلومات داخل الخزانة. تُصنَّع بإصدارات أساسية ومقاسة ومراقَبة وقابلة للتحكم، بتكوينات أحادية وثلاثية الطور، ومتوفرة بصيغ تركيب رأسية (0U) وأفقية للراك في بيئات مراكز البيانات والاتصالات والصناعة.",
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
          question: "هل يمكن لهايسِن تخصيص تكوين منافذ PDU؟",
          answer:
            "نعم. هايسِن مُصنّع مباشر من المصنع ويُكوِّن نوع المنافذ وكميتها وقابس الدخل وتجميع قواطع الدارات وطول الكابل بما يتناسب مع المواصفات الكهربائية والراك لكل مشروع، بما في ذلك العلامة التجارية OEM/ODM.",
        },
      ],
    },
    fr: {
      name: "PDU en rack (unité de distribution électrique)",
      shortName: "PDU en rack",
      tagline: "Distribution électrique fiable au niveau du rack pour les baies de centres de données et de télécommunications.",
      overview:
        "Le PDU en rack Haisen distribue l'alimentation réseau ou onduleur aux équipements informatiques à l'intérieur d'une baie. Il est fabriqué en versions basique, mesurée, surveillée et commutable, en configurations monophasées et triphasées, et disponible en formats de montage vertical (0U) et horizontal pour les environnements de centres de données, télécoms et industriels.",
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
          question: "Haisen peut-elle personnaliser la configuration des prises du PDU ?",
          answer:
            "Oui. Haisen est un fabricant direct en usine et configure le type et la quantité de prises, la fiche d'entrée, le groupement des disjoncteurs et la longueur de câble selon les spécifications électriques et de baie de chaque projet, y compris le marquage OEM/ODM.",
        },
      ],
    },
    es: {
      name: "PDU de rack (unidad de distribución de energía)",
      shortName: "PDU de rack",
      tagline: "Distribución de energía fiable a nivel de rack para gabinetes de centros de datos y telecomunicaciones.",
      overview:
        "El PDU de rack de Haisen distribuye energía de red o SAI a los equipos de TI dentro de un gabinete. Se fabrica en versiones básica, medida, monitoreada y conmutable, en configuraciones monofásicas y trifásicas, y está disponible en formatos de montaje vertical (0U) y horizontal para entornos de centros de datos, telecomunicaciones e industriales.",
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
          question: "¿Puede Haisen personalizar la configuración de tomas del PDU?",
          answer:
            "Sí. Haisen es un fabricante directo de fábrica y configura el tipo y cantidad de tomas, el enchufe de entrada, la agrupación de disyuntores y la longitud del cable según la especificación eléctrica y de rack de cada proyecto, incluyendo el marcado OEM/ODM.",
        },
      ],
    },
    ru: {
      name: "Стоечный PDU (блок распределения питания)",
      shortName: "Стоечный PDU",
      tagline: "Надёжное распределение питания на уровне стойки для шкафов ЦОД и телекоммуникаций.",
      overview:
        "Стоечный PDU Haisen распределяет питание от сети или ИБП на ИТ-оборудование внутри шкафа. Выпускается в базовой, измеряемой, контролируемой и коммутируемой модификациях, в однофазном и трёхфазном исполнении, доступен в вертикальном (0U) и горизонтальном стоечном форм-факторах для ЦОД, телекоммуникационных и промышленных сред.",
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
          question: "Может ли Haisen настроить конфигурацию розеток PDU?",
          answer:
            "Да. Haisen является прямым заводским производителем и настраивает тип и количество розеток, входную вилку, группировку автоматов и длину кабеля под электрические и стоечные требования каждого проекта, включая брендинг OEM/ODM.",
        },
      ],
    },
    zh: {
      name: "机架式PDU(配电单元)",
      shortName: "机架式PDU",
      tagline: "为数据中心与电信机柜提供可靠的机架级配电。",
      overview:
        "海森机架式PDU将市电或UPS电力分配至机柜内的IT设备。产品分为基础型、计量型、监控型及可控开关型,支持单相与三相配置,并提供垂直(0U)与水平机架安装形式,适用于数据中心、电信及工业环境。",
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
          question: "海森能否定制PDU插座配置？",
          answer: "可以。海森作为工厂直营制造商,可根据每个项目的电气与机柜规格定制插座类型、数量、输入插头、断路器分组及线缆长度,并支持OEM/ODM品牌定制。",
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
        "وحدة PDU الذكية من هايسِن هي وحدة توزيع طاقة مُدارة عبر الشبكة مصممة لمراكز البيانات التي تتطلب رؤية وتحكماً على مستوى المنفذ. تجمع بين مراقبة التيار والجهد والطاقة والطاقة المستهلكة، واستشعار درجة الحرارة والرطوبة، والتحكم عن بُعد بالمنافذ، ويمكن الوصول إليها عبر SNMP وModbus وRS485 وواجهة إدارة ويب.",
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
          question: "هل تصنع هايسِن وحدات PDU ذكية؟",
          answer:
            "نعم. تصمم هايسِن وتصنع وحدات PDU ذكية بمراقبة على مستوى المنفذ واتصال SNMP/Modbus/RS485 وتحكم عن بُعد لعملاء مراكز البيانات والاتصالات والصناعة حول العالم، بما في ذلك برامج OEM/ODM.",
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
        "Le PDU intelligent Haisen est une unité de distribution électrique gérée par réseau conçue pour les centres de données nécessitant visibilité et contrôle au niveau des prises. Il combine surveillance du courant, de la tension, de la puissance et de l'énergie, détection de température et d'humidité, et commutation à distance des prises, accessible via SNMP, Modbus, RS485 et une interface de gestion Web.",
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
          question: "Haisen fabrique-t-elle des PDU intelligents ?",
          answer:
            "Oui. Haisen conçoit et fabrique des PDU intelligents avec surveillance au niveau des prises, connectivité SNMP/Modbus/RS485 et commutation à distance pour les clients de centres de données, télécoms et industriels du monde entier, y compris les programmes OEM/ODM.",
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
        "El PDU inteligente de Haisen es una unidad de distribución de energía gestionada por red, diseñada para centros de datos que requieren visibilidad y control a nivel de toma. Combina monitoreo de corriente, voltaje, potencia y energía, detección de temperatura y humedad, y conmutación remota de tomas, accesible vía SNMP, Modbus, RS485 y una interfaz de gestión web.",
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
          question: "¿Fabrica Haisen PDU inteligentes?",
          answer:
            "Sí. Haisen diseña y fabrica PDU inteligentes con monitoreo a nivel de toma, conectividad SNMP/Modbus/RS485 y conmutación remota para clientes de centros de datos, telecomunicaciones e industriales en todo el mundo, incluidos programas OEM/ODM.",
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
        "Интеллектуальный PDU Haisen — это управляемый по сети блок распределения питания, разработанный для дата-центров, которым требуется видимость и контроль на уровне розетки. Он сочетает мониторинг тока, напряжения, мощности и энергопотребления, датчики температуры и влажности, а также удалённое переключение розеток, доступные через SNMP, Modbus, RS485 и веб-интерфейс управления.",
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
          question: "Производит ли Haisen интеллектуальные PDU?",
          answer:
            "Да. Haisen проектирует и производит интеллектуальные PDU с мониторингом на уровне розетки, подключением по SNMP/Modbus/RS485 и удалённым переключением для клиентов дата-центров, телекоммуникаций и промышленности по всему миру, включая программы OEM/ODM.",
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
        "海森智能PDU是一款网络管理型配电单元,专为需要出口级可视化与控制能力的数据中心而设计。集成电流、电压、功率及能耗监控,温湿度传感,以及远程出口切换功能,可通过SNMP、Modbus、RS485及Web管理界面访问。",
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
          question: "海森是否生产智能PDU？",
          answer: "是的。海森为全球数据中心、电信及工业客户设计并生产具备出口级监控、SNMP/Modbus/RS485连接及远程切换功能的智能PDU,并支持OEM/ODM项目。",
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
        "صُمم PDU عالي الطاقة من هايسِن للراكات عالية الكثافة مثل مجموعات تدريب الذكاء الاصطناعي وخوادم GPU وهياكل blade، ويدعم دخلاً ثلاثي الطور يصل إلى 63A وعدداً كبيراً من المنافذ مع قضيب نحاسي مقوى وتصميم حراري.",
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
        "Le PDU haute puissance Haisen est conçu pour les baies à haute densité telles que les clusters d'entraînement IA, serveurs GPU et châssis lames, prenant en charge une entrée triphasée jusqu'à 63A et un grand nombre de prises avec une barre omnibus renforcée et une conception thermique adaptée.",
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
        "El PDU de alta potencia de Haisen está diseñado para racks de alta densidad como clústeres de entrenamiento de IA, servidores GPU y chasis blade, soportando entrada trifásica de hasta 63A y alta cantidad de tomas con barra colectora reforzada y diseño térmico adecuado.",
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
        "Мощный PDU Haisen рассчитан на стойки высокой плотности, такие как кластеры обучения ИИ, GPU-серверы и blade-корпуса, поддерживает трёхфазный вход до 63A и большое число розеток с усиленной шиной и продуманным тепловым дизайном.",
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
        "海森高功率PDU专为AI训练集群、GPU服务器及刀片式机箱等高密度机柜设计,支持最高63A三相输入及高密度出口,配备加强铜排与热设计。",
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
        "يضيف PDU المقاس من هايسِن شاشة رقمية مدمجة إلى PDU راك قياسي، تعرض سحب التيار و/أو الجهد بلمحة دون الحاجة لوصول شبكي — ترقية بسيطة للمواقع التي تحتاج رؤية الحمل أثناء التركيب والصيانة دون الحاجة لمراقبة عن بُعد.",
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
        "Le PDU mesuré Haisen ajoute un affichage numérique intégré à un PDU en rack standard, montrant en un coup d'œil le courant et/ou la tension consommés sans nécessiter d'accès réseau — une mise à niveau simple pour les sites ayant besoin de visibilité de charge pendant l'installation et la maintenance sans nécessiter de surveillance à distance.",
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
        "El PDU medido de Haisen añade una pantalla digital integrada a un PDU de rack estándar, mostrando de un vistazo la corriente y/o el voltaje consumidos sin requerir acceso a la red — una actualización sencilla para sitios que necesitan visibilidad de carga durante la instalación y el mantenimiento sin requerir monitoreo remoto.",
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
        "Измеряемый PDU Haisen добавляет встроенный цифровой дисплей к стандартному стоечному PDU, показывая потребляемый ток и/или напряжение с первого взгляда без необходимости сетевого доступа — простое обновление для объектов, которым нужна видимость нагрузки во время монтажа и обслуживания без удалённого мониторинга.",
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
        "海森计量型PDU在标准机架PDU基础上增加了内置数字显示屏,无需联网即可一目了然地查看电流和/或电压负载——适合安装与维护阶段需要负载可视化、但暂不需要远程监控的场地的简易升级方案。",
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
        "يُبلغ PDU المراقَب من هايسِن عن التيار والجهد والطاقة والاستهلاك عبر الشبكة عبر SNMP أو Modbus، ما يمنح فرق المنشأة وتكنولوجيا المعلومات رؤية عن بُعد لاستخدام الطاقة على مستوى الراك دون فحوصات في الموقع — دون قدرة التحكم بالمنافذ الموجودة في PDU الذكي بالكامل.",
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
        "Le PDU surveillé Haisen rapporte le courant, la tension, la puissance et la consommation d'énergie sur le réseau via SNMP ou Modbus, offrant aux équipes des installations et informatiques une visibilité à distance de l'utilisation de l'alimentation au niveau de la baie sans vérifications sur site — sans la capacité de commutation des prises d'un PDU pleinement intelligent.",
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
        "El PDU monitoreado de Haisen reporta corriente, voltaje, potencia y consumo de energía a través de la red vía SNMP o Modbus, brindando a los equipos de instalaciones y TI visibilidad remota del uso de energía a nivel de rack sin verificaciones en sitio, sin la capacidad de conmutación de tomas de un PDU totalmente inteligente.",
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
        "Контролируемый PDU Haisen передаёт данные о токе, напряжении, мощности и энергопотреблении по сети через SNMP или Modbus, обеспечивая службам эксплуатации и ИТ удалённую видимость использования питания на уровне стойки без выезда на объект — без функции переключения розеток, доступной в полностью интеллектуальном PDU.",
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
        "海森监控型PDU通过SNMP或Modbus将电流、电压、功率及能耗数据上报至网络,使设施与IT团队无需到场即可远程掌握机柜级用电情况——但不具备完全智能型PDU的出口切换能力。",
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
        "يشمل PDU القابل للتحكم من هايسِن كل ما يوفره PDU المراقَب — رؤية عن بُعد للتيار والجهد والطاقة والاستهلاك — بالإضافة إلى تحكم بمنافذ قابلة للعنونة فردياً، بحيث يمكن للمسؤولين إعادة تشغيل جهاز واحد عن بُعد أو تسلسل تشغيل الراك دون زيارة الموقع.",
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
        "Le PDU commutable Haisen inclut tout ce qu'offre un PDU surveillé — visibilité à distance du courant, de la tension, de la puissance et de l'énergie — plus un contrôle de prises adressables individuellement, permettant aux administrateurs de redémarrer un seul appareil à distance ou de séquencer la mise sous tension d'une baie sans visite sur site.",
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
        "El PDU conmutable de Haisen incluye todo lo que ofrece un PDU monitoreado —visibilidad remota de corriente, voltaje, potencia y energía— más control de tomas direccionables individualmente, permitiendo a los administradores reiniciar de forma remota un solo dispositivo o secuenciar el encendido de un rack sin una visita al sitio.",
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
        "Коммутируемый PDU Haisen включает всё, что предлагает контролируемый PDU — удалённую видимость тока, напряжения, мощности и энергии — плюс индивидуально адресуемое управление розетками, позволяя администраторам удалённо перезагружать одно устройство или задавать последовательность включения стойки без выезда на объект.",
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
        "海森可控开关型PDU具备监控型PDU的全部功能——远程电流、电压、功率及能耗可视化——并增加了独立寻址的出口控制能力,使管理员能够远程重启单台设备或按顺序为机柜上电,无需到场操作。",
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
        "يوزع PDU ثلاثي الطور من هايسِن الدخل ثلاثي الطور عبر مجموعات منافذ أحادية الطور متوازنة، ما يمنح الراكات ذات سحب الطاقة المتوسط إلى العالي تغذية بسعة أعلى مما يوفره PDU أحادي الطور، مع الحفاظ على توازن الحمل عبر L1/L2/L3.",
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
        "Le PDU triphasé Haisen distribue une entrée triphasée sur des groupes de prises monophasées équilibrées, offrant aux baies à consommation moyenne à élevée une alimentation de capacité supérieure à celle d'un PDU monophasé, tout en maintenant une charge équilibrée sur L1/L2/L3.",
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
        "El PDU trifásico de Haisen distribuye la entrada trifásica en grupos de tomas monofásicas equilibradas, brindando a los racks con consumo de medio a alto una alimentación de mayor capacidad que la que puede proporcionar un PDU monofásico, manteniendo la carga equilibrada entre L1/L2/L3.",
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
        "Трёхфазный PDU Haisen распределяет трёхфазный вход по сбалансированным группам однофазных розеток, обеспечивая стойкам со средним и высоким энергопотреблением питание большей мощности, чем может дать однофазный PDU, сохраняя равномерную нагрузку по L1/L2/L3.",
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
        "海森三相PDU将三相输入分配至均衡的单相出口组,为中高功耗机柜提供比单相PDU更高的供电容量,同时保持L1/L2/L3三相负载均衡。",
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
        "يجمع PDU ATS من هايسِن بين PDU الراك ومفتاح نقل تلقائي، يقبل مدخلي طاقة مستقلين — مثل المرافق والمولد، أو تغذيتي مرافق A/B — ويُبدِّل تلقائياً إلى المصدر الحي إذا فشلت التغذية الأساسية، ما يحمي المعدات ذات السلك الواحد دون الحاجة للوحة مفتاح نقل منفصلة.",
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
        "Le PDU ATS Haisen combine un PDU en rack avec un commutateur de transfert automatique, acceptant deux entrées électriques indépendantes — comme réseau et groupe électrogène, ou double alimentation réseau A/B — et basculant automatiquement vers la source active en cas de défaillance de l'alimentation primaire, protégeant les équipements à cordon unique sans nécessiter de panneau de commutation séparé.",
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
        "El PDU ATS de Haisen combina un PDU de rack con un conmutador de transferencia automática, aceptando dos entradas de energía independientes —como red y generador, o doble alimentación de red A/B— y conmutando automáticamente a la fuente activa si falla la alimentación primaria, protegiendo equipos de un solo cable sin requerir un panel de conmutación separado.",
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
        "ATS PDU Haisen сочетает стоечный PDU с автоматическим переключателем ввода, принимая два независимых источника питания — например, сеть и генератор, либо два ввода A/B от сети — и автоматически переключаясь на работающий источник при отказе основного, защищая одношнуровое оборудование без отдельной панели АВР.",
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
        "海森ATS PDU将机架PDU与自动切换开关相结合,可接入两路独立电源输入——如市电与发电机,或A/B双路市电——当主用电源发生故障时自动切换至正常供电电源,无需额外的独立切换开关面板即可保护单电源输入设备。",
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
      tagline: "مفتاح نقل بالحالة الصلبة لتبديل شبه فوري بين مصدري طاقة.",
      overview:
        "يستخدم STS من هايسِن تبديلاً بالحالة الصلبة لنقل الحمل بين مصدري طاقة مستقلين في جزء من دورة — أسرع بكثير من ATS الميكانيكي — لحماية الأحمال التي لا يمكنها تحمل حتى انقطاع لحظي، وتُنشر عادةً أمام توزيع PDU أو UPS في المنشآت الحرجة.",
      keyFeatures: ["تبديل بالحالة الصلبة، زمن نقل دون دورة واحدة", "مدخلا مصدر مستقلان مزدوجان", "مراقبة مستمرة لجودة المصدر على كلا التغذيتين", "صيغ لوحة أو تركيب راك"],
      specGroups: [
        {
          title: "المعاملات الكهربائية",
          specs: [
            { label: "الجهد المقنن", value: "200–415 فولت" },
            { label: "التيار المقنن", value: "حتى 400A (يعتمد على الطراز)" },
            { label: "زمن النقل", value: "دون دورة (عادة أقل من 4 مللي ثانية)" },
          ],
        },
        {
          title: "المراقبة",
          specs: [
            { label: "مراقبة المصدر", value: "فحوصات جودة جهد/تردد مستمرة على كلا التغذيتين" },
            { label: "الاتصال", value: "SNMP، Modbus، إنذارات تلامس جاف" },
          ],
        },
      ],
      applications: ["منشآت تتطلب نقلاً بدون انقطاع", "أمام توزيع PDU/UPS الحرج", "مراكز بيانات بتغذيتي مرافق مزدوجتين"],
      customizationOptions: ["التصنيف الحالي", "الشكل (لوحة / تركيب راك)", "حزمة المراقبة"],
      standards: ["الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        {
          question: "ما الفرق بين ATS وSTS؟",
          answer:
            "يُبدِّل ATS (مفتاح النقل التلقائي) الحمل ميكانيكياً بين مصدري طاقة، عادة بزمن نقل قصير، بينما يستخدم STS (مفتاح النقل الثابت) تبديلاً بالحالة الصلبة لنقل شبه فوري، يُستخدم حيث يكون حتى الانقطاع اللحظي غير مقبول.",
        },
      ],
    },
    fr: {
      name: "STS (commutateur de transfert statique)",
      shortName: "STS",
      tagline: "Commutateur de transfert à semi-conducteurs pour une commutation quasi instantanée entre deux sources d'alimentation.",
      overview:
        "Le STS Haisen utilise une commutation à semi-conducteurs pour transférer la charge entre deux sources d'alimentation indépendantes en une fraction de cycle — bien plus rapide qu'un ATS mécanique — protégeant les charges qui ne peuvent tolérer aucune interruption momentanée, généralement déployé en amont de la distribution PDU ou onduleur dans les installations critiques.",
      keyFeatures: ["Commutation à semi-conducteurs, temps de transfert inférieur au cycle", "Double entrée de source indépendante", "Surveillance continue de la qualité de source sur les deux alimentations", "Formats panneau ou montage en rack"],
      specGroups: [
        {
          title: "Paramètres électriques",
          specs: [
            { label: "Tension nominale", value: "200–415V" },
            { label: "Courant nominal", value: "Jusqu'à 400A (selon le modèle)" },
            { label: "Temps de transfert", value: "Sous-cycle (généralement <4 ms)" },
          ],
        },
        {
          title: "Surveillance",
          specs: [
            { label: "Surveillance de source", value: "Contrôles continus de qualité tension/fréquence sur les deux alimentations" },
            { label: "Communication", value: "SNMP, Modbus, alarmes à contact sec" },
          ],
        },
      ],
      applications: ["Installations nécessitant un transfert sans interruption", "En amont de la distribution PDU/onduleur critique", "Centres de données à double alimentation réseau"],
      customizationOptions: ["Calibre de courant", "Format (panneau / montage en rack)", "Package de surveillance"],
      standards: ["Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        {
          question: "Quelle est la différence entre un ATS et un STS ?",
          answer:
            "Un ATS (commutateur de transfert automatique) commute mécaniquement la charge entre deux sources d'alimentation, généralement avec un bref temps de transfert, tandis qu'un STS (commutateur de transfert statique) utilise une commutation à semi-conducteurs pour un transfert quasi instantané, utilisé lorsque même une interruption momentanée est inacceptable.",
        },
      ],
    },
    es: {
      name: "STS (conmutador de transferencia estática)",
      shortName: "STS",
      tagline: "Conmutador de transferencia de estado sólido para conmutación casi instantánea entre dos fuentes de energía.",
      overview:
        "El STS de Haisen utiliza conmutación de estado sólido para transferir la carga entre dos fuentes de energía independientes en una fracción de ciclo —mucho más rápido que un ATS mecánico— protegiendo cargas que no pueden tolerar ni siquiera una interrupción momentánea, típicamente desplegado antes de la distribución de PDU o SAI en instalaciones críticas.",
      keyFeatures: ["Conmutación de estado sólido, tiempo de transferencia sub-ciclo", "Doble entrada de fuente independiente", "Monitoreo continuo de calidad de fuente en ambas alimentaciones", "Formatos de panel o montaje en rack"],
      specGroups: [
        {
          title: "Parámetros eléctricos",
          specs: [
            { label: "Voltaje nominal", value: "200–415V" },
            { label: "Corriente nominal", value: "Hasta 400A (según el modelo)" },
            { label: "Tiempo de transferencia", value: "Sub-ciclo (típicamente <4 ms)" },
          ],
        },
        {
          title: "Monitoreo",
          specs: [
            { label: "Monitoreo de fuente", value: "Verificaciones continuas de calidad de voltaje/frecuencia en ambas alimentaciones" },
            { label: "Comunicación", value: "SNMP, Modbus, alarmas de contacto seco" },
          ],
        },
      ],
      applications: ["Instalaciones que requieren transferencia sin interrupción", "Aguas arriba de distribución crítica de PDU/SAI", "Centros de datos con doble alimentación de red"],
      customizationOptions: ["Capacidad de corriente", "Formato (panel / montaje en rack)", "Paquete de monitoreo"],
      standards: ["Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        {
          question: "¿Cuál es la diferencia entre un ATS y un STS?",
          answer:
            "Un ATS (interruptor de transferencia automática) conmuta mecánicamente la carga entre dos fuentes de energía, normalmente con un breve tiempo de transferencia, mientras que un STS (interruptor de transferencia estática) utiliza conmutación de estado sólido para una transferencia casi instantánea, utilizado donde ni siquiera una interrupción momentánea es aceptable.",
        },
      ],
    },
    ru: {
      name: "STS (статический переключатель резерва)",
      shortName: "STS",
      tagline: "Твердотельный переключатель для практически мгновенного переключения между двумя источниками питания.",
      overview:
        "STS Haisen использует твердотельную коммутацию для переключения нагрузки между двумя независимыми источниками питания за долю цикла — значительно быстрее механического АВР — защищая нагрузки, которые не могут допустить даже кратковременного перерыва, обычно устанавливается перед распределением PDU или ИБП на критически важных объектах.",
      keyFeatures: ["Твердотельная коммутация, время переключения менее цикла", "Два независимых входа источников", "Непрерывный контроль качества источника на обоих вводах", "Панельное или стоечное исполнение"],
      specGroups: [
        {
          title: "Электрические параметры",
          specs: [
            { label: "Номинальное напряжение", value: "200–415В" },
            { label: "Номинальный ток", value: "До 400A (в зависимости от модели)" },
            { label: "Время переключения", value: "Менее цикла (обычно <4 мс)" },
          ],
        },
        {
          title: "Мониторинг",
          specs: [
            { label: "Мониторинг источника", value: "Непрерывный контроль качества напряжения/частоты на обоих вводах" },
            { label: "Связь", value: "SNMP, Modbus, сигнализация сухих контактов" },
          ],
        },
      ],
      applications: ["Объекты, требующие переключения без перерыва", "Перед критическим распределением PDU/ИБП", "ЦОД с двойным вводом от сети"],
      customizationOptions: ["Номинальный ток", "Форм-фактор (панель / стойка)", "Пакет мониторинга"],
      standards: ["Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        {
          question: "В чём разница между АВР и СВР?",
          answer:
            "АВР (автоматический выключатель резерва) механически переключает нагрузку между двумя источниками питания, обычно с небольшим временем переключения, тогда как СВР (статический переключатель резерва) использует твердотельную коммутацию для практически мгновенного переключения — применяется там, где недопустим даже кратковременный перерыв.",
        },
      ],
    },
    zh: {
      name: "STS(静态切换开关)",
      shortName: "STS",
      tagline: "实现两路电源间近乎瞬时切换的固态转换开关。",
      overview:
        "海森STS(静态切换开关)采用固态开关技术,可在不到一个周期的时间内完成两路独立电源间的负载切换——远快于机械式ATS——保护无法容忍片刻中断的负载,通常部署于关键设施PDU或UPS配电的上游。",
      keyFeatures: ["固态开关,切换时间低于一个周期", "双路独立电源输入", "对两路电源持续进行电源质量监测", "面板式或机架式外形"],
      specGroups: [
        {
          title: "电气参数",
          specs: [
            { label: "额定电压", value: "200–415V" },
            { label: "额定电流", value: "最高400A(视型号而定)" },
            { label: "切换时间", value: "低于一个周期(通常<4毫秒)" },
          ],
        },
        {
          title: "监控",
          specs: [
            { label: "电源监测", value: "对两路电源持续进行电压/频率质量检测" },
            { label: "通信", value: "SNMP、Modbus、干接点告警" },
          ],
        },
      ],
      applications: ["需要零中断切换的设施", "关键PDU/UPS配电的上游", "具备双路市电输入的数据中心"],
      customizationOptions: ["电流规格", "外形(面板式/机架式)", "监控套件"],
      standards: ["认证可根据项目规格按需提供"],
      faqs: [
        {
          question: "ATS与STS有何区别？",
          answer: "ATS(自动切换开关)以机械方式在两个电源间切换负载,通常存在短暂切换时间;而STS(静态切换开关)采用固态开关实现近乎瞬时的切换,适用于连片刻中断都无法接受的场景。",
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
        "مفتاح النقل التلقائي من هايسِن جهاز على مستوى اللوحة ينقل تلقائياً حمل منشأة أو لوحة توزيع بين مصدر أساسي ومصدر احتياطي — عادة المرافق والمولد الاحتياطي — دون تدخل يدوي، مُحجَّم لأحمال فرعية أو لوحة أو منشأة بدلاً من راك واحد.",
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
        "Le Commutateur de transfert automatique Haisen est un dispositif au niveau du panneau qui transfère automatiquement la charge d'une installation ou d'un tableau de distribution entre une source primaire et une source de secours — généralement réseau et groupe électrogène de secours — sans intervention manuelle, dimensionné pour des charges de branche, de panneau ou d'installation plutôt qu'une seule baie.",
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
        "El Interruptor de Transferencia Automática de Haisen es un dispositivo a nivel de panel que transfiere automáticamente la carga de una instalación o tablero de distribución entre una fuente primaria y una fuente de respaldo —normalmente red y generador de respaldo— sin intervención manual, dimensionado para cargas de ramal, panel o instalación en lugar de un solo rack.",
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
        "Автоматический переключатель ввода Haisen — это панельное устройство, которое автоматически переключает нагрузку объекта или распределительного щита между основным и резервным источником — как правило, сетью и резервным генератором — без ручного вмешательства, рассчитанное на нагрузку уровня отходящей линии, щита или объекта, а не одной стойки.",
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
        "海森自动切换开关是一种面板级设备,可在主用电源与备用电源(通常为市电与备用发电机)之间自动切换设施或配电柜负载,无需人工干预,适用于分支回路、配电柜或设施级负载,而非单一机柜。",
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
      overview: "يُعبَّأ UPS بتركيب راك من هايسِن، وهو UPS مزدوج التحويل عبر الإنترنت، بصيغة راك قياسية 19 بوصة، ويوفر طاقة احتياطية نظيفة ومنظمة لمعدات تكنولوجيا المعلومات والشبكات مع تكوينات مرنة لوقت تشغيل البطارية.",
      keyFeatures: ["طوبولوجيا مزدوجة التحويل عبر الإنترنت حقيقية", "صيغ تركيب راك 2U–6U", "خيارات حزمة بطارية موسعة لوقت تشغيل أطول", "اتصال RS232 / USB / SNMP / تلامس جاف", "تجاوز تلقائي عند الحمل الزائد أو الخلل"],
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
      overview: "L'onduleur en rack Haisen est un onduleur en ligne à double conversion au format rack 19 pouces standard, fournissant une alimentation de secours propre et régulée pour les équipements informatiques et réseau avec des configurations d'autonomie de batterie flexibles.",
      keyFeatures: ["Véritable topologie en ligne à double conversion", "Formats de montage en rack 2U–6U", "Options de batteries étendues pour une plus grande autonomie", "Communication RS232 / USB / SNMP / contact sec", "Bypass automatique en cas de surcharge ou de défaut"],
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
      overview: "El SAI de montaje en rack de Haisen es un SAI en línea de doble conversión empaquetado en formato de rack estándar de 19 pulgadas, que proporciona energía de respaldo limpia y regulada para equipos de TI y red con configuraciones flexibles de autonomía de batería.",
      keyFeatures: ["Topología en línea de doble conversión verdadera", "Formatos de montaje en rack de 2U a 6U", "Opciones de baterías extendidas para mayor autonomía", "Comunicación RS232 / USB / SNMP / contacto seco", "Bypass automático ante sobrecarga o fallo"],
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
      overview: "Стоечный ИБП Haisen — это онлайн ИБП двойного преобразования в стандартном 19-дюймовом стоечном форм-факторе, обеспечивающий чистое, стабилизированное резервное питание для ИТ- и сетевого оборудования с гибкими вариантами времени автономной работы.",
      keyFeatures: ["Настоящая онлайн-топология двойного преобразования", "Стоечные форм-факторы 2U–6U", "Варианты расширенных батарей для увеличения времени автономной работы", "Связь по RS232 / USB / SNMP / сухой контакт", "Автоматический байпас при перегрузке или неисправности"],
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
      overview: "海森机架式UPS是一款标准19英寸机架式在线双转换UPS,为IT与网络设备提供纯净、稳压的备用电力,并支持灵活的电池续航配置。",
      keyFeatures: ["真正的在线双转换拓扑", "2U–6U机架安装形式", "可选扩展电池组,延长续航时间", "支持RS232 / USB / SNMP / 干接点通信", "过载或故障时自动旁路"],
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
      overview: "يستخدم UPS المعياري من هايسِن وحدات طاقة قابلة للاستبدال الساخن ضمن إطار مشترك، ما يتيح توسيع السعة مع نمو حمل تكنولوجيا المعلومات ودمج التكرار (N+1/N+X) دون المبالغة في حجم الاستثمار في اليوم الأول.",
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
      overview: "L'onduleur modulaire Haisen utilise des modules de puissance échangeables à chaud au sein d'un châssis commun, permettant à la capacité d'évoluer avec la croissance de la charge informatique et d'intégrer la redondance (N+1/N+X) sans surdimensionner l'investissement initial.",
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
      overview: "El SAI modular de Haisen utiliza módulos de potencia intercambiables en caliente dentro de un chasis común, permitiendo que la capacidad escale con el crecimiento de la carga de TI e incorporando redundancia (N+1/N+X) sin sobredimensionar la inversión inicial.",
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
      overview: "Модульный ИБП Haisen использует горячезаменяемые силовые модули в общем шасси, позволяя наращивать мощность по мере роста ИТ-нагрузки и встраивать резервирование (N+1/N+X) без избыточных первоначальных инвестиций.",
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
      overview: "海森模块化UPS在公共机架内采用热插拔电源模块,可随IT负载增长灵活扩容,并内置冗余(N+1/N+X)能力,避免首期投资过度超配。",
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
      overview: "يوفر UPS البرجي من هايسِن نفس الحماية المزدوجة التحويل عبر الإنترنت مثل مجموعة تركيب الراك، في غلاف برجي قائم بذاته، مناسب لغرف الخوادم والمكاتب الخلفية للتجزئة ومساحات المعدات التي لا تستخدم راكاً بحجم 19 بوصة.",
      keyFeatures: ["طوبولوجيا مزدوجة التحويل عبر الإنترنت حقيقية", "غلاف برجي قائم بذاته", "طقم تحويل اختياري لتركيب الراك في طرازات مختارة", "لوحة حالة LCD وإنذارات صوتية"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "1 – 10 كيلو فولت أمبير" }, { label: "جهد الدخل", value: "220/230/240 فولت أحادي الطور" }, { label: "جهد الخرج", value: "220/230/240 فولت ±1%" }, { label: "الكفاءة", value: "حتى 93% (وضع عبر الإنترنت)" }] },
        { title: "الاتصال", specs: [{ label: "الواجهات", value: "RS232، USB، بطاقة SNMP (اختياري)" }] },
      ],
      applications: ["غرف خوادم بدون راكات", "تكنولوجيا معلومات المكاتب الخلفية للتجزئة", "مساحات معدات صغيرة"],
      customizationOptions: ["حزمة وقت تشغيل البطارية", "طقم تحويل الراك", "بطاقة الاتصال"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "هل يمكن تحويل UPS البرجي إلى تركيب راك لاحقاً؟", answer: "تدعم طرازات مختارة من UPS البرجي من هايسِن طقم تحويل اختياري لتركيب الراك، ما يتيح نقل نفس الوحدة إلى راك 19 بوصة إذا تمت ترقية الموقع لاحقاً — تأكد من التوافق للطراز المحدد مع فريقنا الهندسي." },
      ],
    },
    fr: {
      name: "Onduleur tour",
      shortName: "Onduleur tour",
      tagline: "Onduleur en ligne autonome pour salles serveurs et petits espaces d'équipement sans rack.",
      overview: "L'onduleur tour Haisen offre la même protection en ligne à double conversion que la gamme rack, dans un boîtier tour autonome, adapté aux salles serveurs, arrière-boutiques de détail et espaces d'équipement n'utilisant pas de rack 19 pouces.",
      keyFeatures: ["Véritable topologie en ligne à double conversion", "Boîtier tour autonome", "Kit de conversion en rack optionnel sur certains modèles", "Panneau d'état LCD et alarmes sonores"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "1 – 10 kVA" }, { label: "Tension d'entrée", value: "220/230/240V monophasé" }, { label: "Tension de sortie", value: "220/230/240V ±1%" }, { label: "Efficacité", value: "Jusqu'à 93% (mode en ligne)" }] },
        { title: "Communication", specs: [{ label: "Interfaces", value: "RS232, USB, carte SNMP (en option)" }] },
      ],
      applications: ["Salles serveurs sans racks", "Informatique d'arrière-boutique de détail", "Petits espaces d'équipement"],
      customizationOptions: ["Package d'autonomie de batterie", "Kit de conversion en rack", "Carte de communication"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Un onduleur tour peut-il être converti en montage rack ultérieurement ?", answer: "Certains modèles d'onduleurs tour Haisen prennent en charge un kit de conversion en rack optionnel, permettant de déplacer la même unité dans un rack 19 pouces si le site est mis à niveau ultérieurement — confirmez la compatibilité du modèle spécifique avec notre équipe d'ingénierie." },
      ],
    },
    es: {
      name: "SAI torre",
      shortName: "SAI torre",
      tagline: "SAI en línea independiente para salas de servidores y pequeños espacios de equipos sin rack.",
      overview: "El SAI torre de Haisen ofrece la misma protección en línea de doble conversión que la gama de montaje en rack, en una carcasa tipo torre independiente, adecuada para salas de servidores, trastiendas comerciales y espacios de equipos que no usan un rack de 19 pulgadas.",
      keyFeatures: ["Topología en línea de doble conversión verdadera", "Carcasa tipo torre independiente", "Kit de conversión a rack opcional en modelos seleccionados", "Panel de estado LCD y alarmas audibles"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "1 – 10 kVA" }, { label: "Voltaje de entrada", value: "220/230/240V monofásico" }, { label: "Voltaje de salida", value: "220/230/240V ±1%" }, { label: "Eficiencia", value: "Hasta 93% (modo en línea)" }] },
        { title: "Comunicación", specs: [{ label: "Interfaces", value: "RS232, USB, tarjeta SNMP (opcional)" }] },
      ],
      applications: ["Salas de servidores sin racks", "TI de trastienda minorista", "Pequeños espacios de equipos"],
      customizationOptions: ["Paquete de autonomía de batería", "Kit de conversión a rack", "Tarjeta de comunicación"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Se puede convertir un SAI torre a montaje en rack más adelante?", answer: "Modelos seleccionados de SAI torre de Haisen admiten un kit de conversión a rack opcional, permitiendo que la misma unidad pase a un rack de 19 pulgadas si el sitio se actualiza más adelante; confirme la compatibilidad del modelo específico con nuestro equipo de ingeniería." },
      ],
    },
    ru: {
      name: "Напольный ИБП (башенного типа)",
      shortName: "Напольный ИБП",
      tagline: "Автономный онлайн ИБП для серверных и небольших помещений с оборудованием без стойки.",
      overview: "Напольный ИБП Haisen обеспечивает ту же онлайн-защиту двойного преобразования, что и стоечная линейка, в отдельно стоящем корпусе башенного типа, подходящем для серверных, подсобных помещений розничной торговли и зон с оборудованием, где не используется 19-дюймовая стойка.",
      keyFeatures: ["Настоящая онлайн-топология двойного преобразования", "Отдельно стоящий корпус башенного типа", "Опциональный комплект для преобразования в стоечный на отдельных моделях", "ЖК-панель состояния и звуковые сигналы"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "1 – 10 кВА" }, { label: "Входное напряжение", value: "220/230/240В однофазное" }, { label: "Выходное напряжение", value: "220/230/240В ±1%" }, { label: "КПД", value: "До 93% (онлайн режим)" }] },
        { title: "Связь", specs: [{ label: "Интерфейсы", value: "RS232, USB, карта SNMP (опционально)" }] },
      ],
      applications: ["Серверные без стоек", "ИТ подсобных помещений розничной торговли", "Небольшие помещения с оборудованием"],
      customizationOptions: ["Пакет времени автономной работы батареи", "Комплект для преобразования в стоечный", "Карта связи"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Можно ли позже преобразовать напольный ИБП в стоечный?", answer: "Отдельные модели напольных ИБП Haisen поддерживают опциональный комплект для преобразования в стоечный, позволяющий перенести то же устройство в 19-дюймовую стойку при модернизации объекта — уточните совместимость конкретной модели у нашей инженерной команды." },
      ],
    },
    zh: {
      name: "塔式UPS",
      shortName: "塔式UPS",
      tagline: "面向无机架服务器机房及小型设备区域的独立式在线UPS。",
      overview: "海森塔式UPS提供与机架式产品线相同的在线双转换保护能力,采用独立塔式机箱,适用于不使用19英寸机架的服务器机房、零售后台办公区及设备区域。",
      keyFeatures: ["真正的在线双转换拓扑", "独立塔式机箱", "部分型号可选配机架转换套件", "LCD状态面板与声音告警"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "1–10 kVA" }, { label: "输入电压", value: "220/230/240V单相" }, { label: "输出电压", value: "220/230/240V ±1%" }, { label: "效率", value: "最高93%(在线模式)" }] },
        { title: "通信", specs: [{ label: "接口", value: "RS232、USB、SNMP卡(可选)" }] },
      ],
      applications: ["无机架服务器机房", "零售后台IT系统", "小型设备区域"],
      customizationOptions: ["电池续航方案", "机架转换套件", "通信卡"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "塔式UPS后期能否转换为机架式？", answer: "海森部分塔式UPS型号支持可选的机架转换套件,若场地后期升级,可将同一设备转入19英寸机架——具体型号的兼容性请与我们的工程团队确认。" },
      ],
    },
  },
  "online-ups": {
    ar: {
      name: "UPS عبر الإنترنت",
      shortName: "UPS عبر الإنترنت",
      tagline: "UPS مزدوج التحويل يوفر طاقة مستمرة ومنظمة بزمن نقل صفري.",
      overview: "يستخدم UPS عبر الإنترنت من هايسِن طوبولوجيا مزدوجة التحويل حقيقية، تعيد توليد طاقة الخرج باستمرار من العاكس بدلاً من التبديل إلى البطارية عند حدوث اضطراب، بحيث ترى المعدات المتصلة دائماً موجة نظيفة ومنظمة بزمن نقل صفري — الخيار القياسي لأحمال تكنولوجيا المعلومات ومراكز البيانات الحرجة.",
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
      overview: "L'onduleur en ligne Haisen utilise une véritable topologie à double conversion, régénérant en continu la puissance de sortie depuis son onduleur plutôt que de basculer sur batterie en cas de perturbation, de sorte que l'équipement connecté voit toujours une forme d'onde propre et régulée avec un temps de transfert nul — le choix standard pour les charges critiques informatiques et de centres de données.",
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
      overview: "El SAI en línea de Haisen utiliza una topología de doble conversión verdadera, regenerando continuamente la potencia de salida desde su inversor en lugar de cambiar a batería ante una perturbación, de modo que el equipo conectado siempre ve una forma de onda limpia y regulada con tiempo de transferencia cero: la opción estándar para cargas críticas de TI y centros de datos.",
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
      overview: "Онлайн ИБП Haisen использует настоящую топологию двойного преобразования, непрерывно регенерируя выходную мощность от своего инвертора вместо перехода на батарею при возмущении, поэтому подключённое оборудование всегда видит чистую, стабилизированную форму сигнала с нулевым временем перехода — стандартный выбор для критических ИТ- и ЦОД-нагрузок.",
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
      overview: "海森在线式UPS采用真正的双转换拓扑,持续由逆变器再生输出电力,而非在电力波动时切换至电池,使所连接设备始终获得纯净、稳压的电力波形且切换时间为零——是数据中心及关键IT负载的标准选择。",
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
      overview: "صُمم UPS الصناعي من هايسِن لبيئات خارج ظروف مراكز البيانات النموذجية — نطاق درجة حرارة تشغيل أوسع، حماية دخول أعلى، وتحمل للغبار والاهتزاز وطاقة دخل أقل استقراراً — لحماية التحكم بالعمليات وSCADA ومعدات تكنولوجيا المعلومات الصناعية في المصانع والمنشآت والمواقع الصناعية النائية.",
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
      overview: "L'onduleur industriel Haisen est conçu pour des environnements en dehors des conditions typiques des centres de données — plage de température de fonctionnement plus large, indice de protection supérieur et tolérance à la poussière, aux vibrations et à une alimentation d'entrée moins stable — protégeant le contrôle de processus, les systèmes SCADA et les équipements informatiques industriels dans les usines, installations et sites industriels distants.",
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
      overview: "El SAI industrial de Haisen está construido para entornos fuera de las condiciones típicas de un centro de datos: rango de temperatura de funcionamiento más amplio, mayor protección de entrada y tolerancia al polvo, vibración y energía de entrada menos estable, protegiendo el control de procesos, SCADA y equipos de TI industrial en fábricas, plantas y sitios industriales remotos.",
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
      overview: "Промышленный ИБП Haisen рассчитан на условия за пределами типичных для ЦОД — расширенный диапазон рабочих температур, более высокая степень защиты корпуса и устойчивость к пыли, вибрации и менее стабильному входному питанию — защищая системы технологического контроля, SCADA и промышленное ИТ-оборудование на заводах, предприятиях и удалённых промышленных объектах.",
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
      overview: "海森工业级UPS专为超出典型数据中心条件的环境设计——具备更宽的工作温度范围、更高的防护等级,并能耐受粉尘、振动及不稳定输入电力,为工厂、厂区及偏远工业场地的工艺控制、SCADA及工业IT设备提供保护。",
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
      tagline: "UPS ثلاثي الطور بسعة كبيرة لطاقة حرجة على مستوى مركز البيانات والمنشأة.",
      overview: "يوفر UPS عالي الطاقة من هايسِن حماية مزدوجة التحويل ثلاثية الطور بسعة كبيرة لقاعات البيانات الكاملة والأحمال الحرجة على مستوى المنشأة، متوفر في إطارات قائمة بذاتها أو كلبنة بناء لمحطة طاقة معيارية متوازية التكرار.",
      keyFeatures: ["طوبولوجيا مزدوجة التحويل ثلاثية الطور بسعة كبيرة", "تشغيل متوازٍ للسعة والتكرار", "كفاءة عالية عند الحمل الجزئي والكامل", "تحكم رقمي كامل ومراقبة عن بُعد"],
      specGroups: [
        { title: "الطاقة", specs: [{ label: "سعة الطاقة", value: "60 – 800 كيلو فولت أمبير" }, { label: "جهد الدخل/الخرج", value: "380/400/415 فولت ثلاثي الطور" }, { label: "الكفاءة", value: "حتى 96% (وضع عبر الإنترنت)" }] },
        { title: "التكرار", specs: [{ label: "القدرة على التوازي", value: "وحدات متعددة للسعة/التكرار" }] },
      ],
      applications: ["طاقة على مستوى منشأة مركز البيانات", "أحمال حرجة صناعية وتجارية كبيرة", "محطات طاقة الاستضافة المشتركة"],
      customizationOptions: ["تصنيف الطاقة", "تكوين التوازي", "دمج خزانة البطارية"],
      standards: ["مصمم وفق معايير أداء UPS في IEC 62040", "الشهادة متاحة عند الطلب حسب مواصفات المشروع"],
      faqs: [
        { question: "متى يكون UPS عالي الطاقة مطلوباً بدلاً من UPS معياري؟", answer: "يناسب UPS عالي الطاقة (الأحادي الكتلة) المنشآت ذات الحمل الكبير المستقر والمحدد جيداً منذ اليوم الأول. غالباً ما يُفضَّل UPS المعياري عندما يُتوقع نمو الحمل بمرور الوقت، حيث يمكن إضافة السعة وحدة تلو الأخرى بدلاً من خطوات ثابتة كبيرة." },
      ],
    },
    fr: {
      name: "Onduleur haute puissance",
      shortName: "Onduleur haute puissance",
      tagline: "Onduleur triphasé de grande capacité pour l'alimentation critique au niveau centre de données et installation.",
      overview: "L'onduleur haute puissance Haisen fournit une protection triphasée à double conversion de grande capacité pour des salles informatiques complètes et des charges critiques au niveau de l'installation, disponible en châssis autonomes ou comme élément constitutif d'une centrale électrique modulaire à redondance parallèle.",
      keyFeatures: ["Topologie triphasée à double conversion de grande capacité", "Fonctionnement en parallèle pour la capacité et la redondance", "Haute efficacité à charge partielle et pleine", "Contrôle numérique complet et surveillance à distance"],
      specGroups: [
        { title: "Alimentation", specs: [{ label: "Capacité de puissance", value: "60 – 800 kVA" }, { label: "Tension d'entrée/sortie", value: "380/400/415V triphasé" }, { label: "Efficacité", value: "Jusqu'à 96% (mode en ligne)" }] },
        { title: "Redondance", specs: [{ label: "Capacité de mise en parallèle", value: "Plusieurs unités pour la capacité/redondance" }] },
      ],
      applications: ["Alimentation au niveau installation de centre de données", "Grandes charges critiques industrielles et commerciales", "Centrales électriques de colocation"],
      customizationOptions: ["Puissance nominale", "Configuration de mise en parallèle", "Intégration d'armoire de batteries"],
      standards: ["Conçu selon les normes de performance UPS IEC 62040", "Certification disponible sur demande selon les spécifications du projet"],
      faqs: [
        { question: "Quand un onduleur haute puissance est-il nécessaire plutôt qu'un onduleur modulaire ?", answer: "Un onduleur haute puissance (monolithique) convient aux installations avec une charge importante, stable et bien définie dès le premier jour. Un onduleur modulaire est souvent préféré lorsque la charge va croître dans le temps, car la capacité peut être ajoutée module par module plutôt que par grands paliers fixes." },
      ],
    },
    es: {
      name: "SAI de alta potencia",
      shortName: "SAI de alta potencia",
      tagline: "SAI trifásico de gran capacidad para energía crítica a nivel de centro de datos e instalación.",
      overview: "El SAI de alta potencia de Haisen ofrece protección trifásica de doble conversión de gran capacidad para salas de datos completas y cargas críticas a nivel de instalación, disponible en chasis independientes o como bloque de construcción para una planta de energía modular con redundancia paralela.",
      keyFeatures: ["Topología trifásica de doble conversión de gran capacidad", "Operación en paralelo para capacidad y redundancia", "Alta eficiencia a carga parcial y total", "Control digital completo y monitoreo remoto"],
      specGroups: [
        { title: "Energía", specs: [{ label: "Capacidad de potencia", value: "60 – 800 kVA" }, { label: "Voltaje de entrada/salida", value: "380/400/415V trifásico" }, { label: "Eficiencia", value: "Hasta 96% (modo en línea)" }] },
        { title: "Redundancia", specs: [{ label: "Capacidad de paralelismo", value: "Múltiples unidades para capacidad/redundancia" }] },
      ],
      applications: ["Energía a nivel de instalación de centro de datos", "Grandes cargas críticas industriales y comerciales", "Plantas de energía de colocación"],
      customizationOptions: ["Potencia nominal", "Configuración de paralelismo", "Integración de gabinete de baterías"],
      standards: ["Diseñado según los estándares de rendimiento de SAI IEC 62040", "Certificación disponible bajo pedido según la especificación del proyecto"],
      faqs: [
        { question: "¿Cuándo se necesita un SAI de alta potencia en lugar de uno modular?", answer: "Un SAI de alta potencia (monolítico) es adecuado para instalaciones con una carga grande, estable y bien definida desde el primer día. A menudo se prefiere un SAI modular cuando la carga crecerá con el tiempo, ya que la capacidad puede añadirse módulo a módulo en lugar de en grandes incrementos fijos." },
      ],
    },
    ru: {
      name: "Мощный ИБП",
      shortName: "Мощный ИБП",
      tagline: "Трёхфазный ИБП большой мощности для критического питания на уровне ЦОД и объекта.",
      overview: "Мощный ИБП Haisen обеспечивает трёхфазную защиту двойного преобразования большой мощности для целых машинных залов и критических нагрузок уровня объекта, доступен в отдельных шасси или как элемент модульной параллельно-резервированной энергетической установки.",
      keyFeatures: ["Трёхфазная топология двойного преобразования большой мощности", "Параллельная работа для наращивания мощности и резервирования", "Высокий КПД при частичной и полной нагрузке", "Полное цифровое управление и удалённый мониторинг"],
      specGroups: [
        { title: "Питание", specs: [{ label: "Мощность", value: "60 – 800 кВА" }, { label: "Входное/выходное напряжение", value: "380/400/415В трёхфазное" }, { label: "КПД", value: "До 96% (онлайн режим)" }] },
        { title: "Резервирование", specs: [{ label: "Возможность параллельной работы", value: "Несколько устройств для наращивания мощности/резервирования" }] },
      ],
      applications: ["Электропитание уровня объекта ЦОД", "Крупные промышленные и коммерческие критические нагрузки", "Энергоустановки колокейшн"],
      customizationOptions: ["Номинальная мощность", "Конфигурация параллельной работы", "Интеграция батарейного шкафа"],
      standards: ["Разработан в соответствии со стандартами производительности ИБП IEC 62040", "Сертификация доступна по запросу в соответствии со спецификацией проекта"],
      faqs: [
        { question: "Когда требуется мощный ИБП вместо модульного?", answer: "Мощный (моноблочный) ИБП подходит для объектов со стабильной, чётко определённой большой нагрузкой с самого начала. Модульный ИБП часто предпочтительнее, когда нагрузка будет расти со временем, поскольку мощность можно наращивать модуль за модулем, а не крупными фиксированными шагами." },
      ],
    },
    zh: {
      name: "大功率UPS",
      shortName: "大功率UPS",
      tagline: "面向数据中心及设施级关键电力的大容量三相UPS。",
      overview: "海森大功率UPS为完整机房及设施级关键负载提供大容量三相双转换保护,提供独立机架形式,也可作为模块化并联冗余电力系统的构建单元。",
      keyFeatures: ["大容量三相双转换拓扑", "支持并机运行以扩容及冗余", "部分负载与满载下均保持高效率", "完整数字化控制与远程监控"],
      specGroups: [
        { title: "电力", specs: [{ label: "功率容量", value: "60–800 kVA" }, { label: "输入/输出电压", value: "380/400/415V三相" }, { label: "效率", value: "最高96%(在线模式)" }] },
        { title: "冗余能力", specs: [{ label: "并机能力", value: "多台并机以实现容量扩展/冗余" }] },
      ],
      applications: ["数据中心设施级供电", "大型工业及商业关键负载", "托管机房电力系统"],
      customizationOptions: ["功率规格", "并机配置", "电池柜集成"],
      standards: ["按IEC 62040 UPS性能标准设计", "认证可根据项目规格按需提供"],
      faqs: [
        { question: "何时需要大功率UPS而非模块化UPS？", answer: "大功率(整机型)UPS适合从第一天起就具有稳定、明确大负载的设施。当负载预计会随时间增长时,通常更倾向选择模块化UPS,因为容量可以逐模块增加,而非以较大的固定台阶扩容。" },
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

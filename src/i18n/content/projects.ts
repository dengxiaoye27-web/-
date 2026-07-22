import { Locale } from "../config";

export interface ProjectContent {
  title: string;
  industry: string;
  location: string;
  summary: string;
  background: string;
  challenge: string;
  requirements: string[];
  solution: string;
  productsUsed: string[];
  technicalConfiguration: { label: string; value: string }[];
  implementation: string;
  results: string[];
}

type TranslatedLocale = Exclude<Locale, "en">;

export const projectContentTranslations: Record<string, Record<TranslatedLocale, ProjectContent>> = {
  "southeast-asia-colocation-expansion": {
    ar: {
      title: "ترقية الطاقة والخزانات لقاعة بيانات الاستضافة المشتركة",
      industry: "مركز بيانات",
      location: "جنوب شرق آسيا",
      summary: "توريد كامل لتوزيع الطاقة والخزانات لمشغل استضافة مشتركة يوسّع قاعتي بيانات إلى تكرار N+1.",
      background: "كان مشغل استضافة مشتركة إقليمي يوسّع قاعتي بيانات قائمتين لاستقبال مستأجرين جدد من المؤسسات، ما تطلّب معياراً متسقاً وخاضعاً للمراقبة للطاقة والأغلفة عبر القاعتين.",
      challenge: "احتاج المشغل لرفع تكرار الطاقة إلى N+1 دون إيقاف كامل للمنشأة، وتوحيد مواصفات الخزانات عبر قاعتين بُنيتا أصلاً بواسطة مقاولين مختلفين، ومنح المستأجرين رؤية لاستهلاكهم الخاص من الطاقة.",
      requirements: ["تكرار UPS وPDU بمستوى N+1", "مراقبة طاقة على مستوى المنفذ لكل مستأجر", "مواصفة خزانة موحدة 47U عبر القاعتين", "تحويل على مراحل دون توقف للمستأجرين الحاليين"],
      solution: "وفّرت واندتونغ إطارات UPS معيارية مُهيّأة للتشغيل بنمط N+1، ووحدات PDU ذكية لقياس استهلاك المستأجرين على مستوى المنفذ، ومواصفة خزانة مركز بيانات موحدة نُشرت عبر القاعتين، مع خطة تركيب على مراحل مرتبة حول حمل المستأجرين الحالي.",
      productsUsed: ["UPS معياري", "PDU ذكي", "خزانة مركز بيانات"],
      technicalConfiguration: [
        { label: "مستوى التكرار", value: "N+1" },
        { label: "الخزانات المنشورة", value: "220 × 47U" },
        { label: "مراقبة PDU", value: "على مستوى المنفذ، SNMP" },
      ],
      implementation: "تم التركيب على مراحل قاعة تلو أخرى وراك تلو آخر، مع تشغيل واختبار حمل وحدات UPS وPDU الجديدة قبل ترحيل دوائر المستأجرين الحاليين، تجنباً لأي توقف.",
      results: ["تحقيق تكرار N+1 عبر قاعتي البيانات", "تمكين رؤية الطاقة على مستوى المستأجر عبر قياس PDU الذكي", "توقف صفري لحمل المستأجرين الحاليين أثناء الترحيل"],
    },
    fr: {
      title: "Mise à niveau de l'alimentation et des armoires d'une salle informatique de colocation",
      industry: "Centre de données",
      location: "Asie du Sud-Est",
      summary: "Fourniture complète de distribution électrique et d'armoires pour un opérateur de colocation étendant deux salles informatiques à une redondance N+1.",
      background: "Un opérateur de colocation régional étendait deux salles informatiques existantes pour accueillir de nouveaux locataires d'entreprise, nécessitant une norme cohérente et surveillée d'alimentation et d'enceintes dans les deux salles.",
      challenge: "L'opérateur devait augmenter la redondance d'alimentation à N+1 sans arrêt complet de l'installation, standardiser les spécifications d'armoires entre deux salles initialement construites par des entrepreneurs différents, et donner aux locataires une visibilité sur leur propre consommation électrique.",
      requirements: ["Redondance N+1 pour onduleur et PDU", "Surveillance électrique au niveau de la prise par locataire", "Spécification d'armoire 47U standardisée dans les deux salles", "Basculement par phases sans interruption pour les locataires existants"],
      solution: "Wandtung a fourni des châssis d'onduleur modulaires configurés pour un fonctionnement N+1, des PDU intelligents pour le comptage des locataires au niveau de la prise, et une spécification d'armoire de centre de données standardisée déployée dans les deux salles, avec un plan d'installation par phases séquencé autour de la charge des locataires existants.",
      productsUsed: ["Onduleur modulaire", "PDU intelligent", "Armoire de centre de données"],
      technicalConfiguration: [
        { label: "Niveau de redondance", value: "N+1" },
        { label: "Armoires déployées", value: "220 x 47U" },
        { label: "Surveillance PDU", value: "Au niveau de la prise, SNMP" },
      ],
      implementation: "L'installation a été effectuée par phases, salle par salle et rack par rack, avec les nouveaux modules d'onduleur et PDU mis en service et testés en charge avant la migration des circuits des locataires existants, évitant ainsi toute interruption.",
      results: ["Redondance N+1 atteinte dans les deux salles informatiques", "Visibilité électrique au niveau du locataire activée via le comptage PDU intelligent", "Aucune interruption pour la charge des locataires existants pendant la migration"],
    },
    es: {
      title: "Actualización de energía y armarios de una sala de datos de colocation",
      industry: "Centro de datos",
      location: "Sudeste asiático",
      summary: "Suministro integral de distribución de energía y armarios para un operador de colocation que amplía dos salas de datos a redundancia N+1.",
      background: "Un operador de colocation regional estaba ampliando dos salas de datos existentes para incorporar nuevos inquilinos empresariales, lo que requería un estándar coherente y supervisado de energía y gabinetes en ambas salas.",
      challenge: "El operador necesitaba elevar la redundancia de energía a N+1 sin un cierre completo de la instalación, estandarizar las especificaciones de los armarios en dos salas originalmente construidas por diferentes contratistas, y dar a los inquilinos visibilidad de su propio consumo de energía.",
      requirements: ["Redundancia N+1 de SAI y PDU", "Monitoreo de energía a nivel de toma por inquilino", "Especificación de armario 47U estandarizada en ambas salas", "Cambio por fases sin tiempo de inactividad para los inquilinos existentes"],
      solution: "Wandtung suministró bastidores de SAI modulares configurados para operación N+1, PDU inteligentes para medición de inquilinos a nivel de toma, y una especificación de armario de centro de datos estandarizada desplegada en ambas salas, con un plan de instalación por fases secuenciado en torno a la carga de los inquilinos existentes.",
      productsUsed: ["SAI modular", "PDU inteligente", "Armario de centro de datos"],
      technicalConfiguration: [
        { label: "Nivel de redundancia", value: "N+1" },
        { label: "Armarios desplegados", value: "220 x 47U" },
        { label: "Monitoreo de PDU", value: "A nivel de toma, SNMP" },
      ],
      implementation: "La instalación se realizó por fases, sala por sala y rack por rack, con los nuevos módulos de SAI y PDU puestos en servicio y probados bajo carga antes de migrar los circuitos de los inquilinos existentes, evitando así el tiempo de inactividad.",
      results: ["Redundancia N+1 lograda en ambas salas de datos", "Visibilidad de energía a nivel de inquilino habilitada mediante medición de PDU inteligente", "Cero tiempo de inactividad para la carga de inquilinos existentes durante la migración"],
    },
    ru: {
      title: "Модернизация электропитания и шкафов машинного зала колокейшн",
      industry: "Центр обработки данных",
      location: "Юго-Восточная Азия",
      summary: "Комплексная поставка систем распределения питания и шкафов для оператора колокейшн, расширяющего два машинных зала до резервирования N+1.",
      background: "Региональный оператор колокейшн расширял два существующих машинных зала для привлечения новых корпоративных арендаторов, что требовало единого, контролируемого стандарта питания и корпусов в обоих залах.",
      challenge: "Оператору требовалось повысить резервирование питания до N+1 без полной остановки объекта, стандартизировать спецификации шкафов в двух залах, изначально построенных разными подрядчиками, и предоставить арендаторам видимость собственного энергопотребления.",
      requirements: ["Резервирование ИБП и PDU N+1", "Мониторинг питания на уровне розетки для каждого арендатора", "Стандартизированная спецификация шкафа 47U в обоих залах", "Поэтапный переход без простоя для существующих арендаторов"],
      solution: "Wandtung поставила модульные шасси ИБП, настроенные для работы N+1, интеллектуальные PDU для учёта арендаторов на уровне розетки, и стандартизированную спецификацию шкафа ЦОД, развёрнутую в обоих залах, с поэтапным планом установки, выстроенным вокруг существующей нагрузки арендаторов.",
      productsUsed: ["Модульный ИБП", "Интеллектуальный PDU", "Шкаф для центра обработки данных"],
      technicalConfiguration: [
        { label: "Уровень резервирования", value: "N+1" },
        { label: "Развёрнуто шкафов", value: "220 x 47U" },
        { label: "Мониторинг PDU", value: "На уровне розетки, SNMP" },
      ],
      implementation: "Установка проводилась поэтапно, зал за залом и стойка за стойкой, при этом новые модули ИБП и PDU вводились в эксплуатацию и тестировались под нагрузкой перед миграцией цепей существующих арендаторов, что позволило избежать простоя.",
      results: ["Достигнуто резервирование N+1 в обоих машинных залах", "Обеспечена видимость энергопотребления на уровне арендатора благодаря учёту интеллектуальных PDU", "Нулевой простой для нагрузки существующих арендаторов во время миграции"],
    },
    zh: {
      title: "托管机房电力与机柜升级项目",
      industry: "数据中心",
      location: "东南亚",
      summary: "为一家将两个机房扩容至N+1冗余的托管运营商提供全面的配电及机柜供货。",
      background: "一家区域托管运营商正在扩建两个现有机房以引入新的企业租户,需要在两个机房间实现统一、可监控的电力及机箱标准。",
      challenge: "该运营商需要在不完全停机的情况下将电力冗余提升至N+1,统一原本由不同承包商建造的两个机房的机柜规格,并让租户能够查看各自的用电情况。",
      requirements: ["UPS与PDU实现N+1冗余", "按租户提供插座级电力监控", "两个机房统一采用47U机柜规格", "分阶段切换,现有租户零停机"],
      solution: "万电通提供了配置为N+1运行的模块化UPS机架、支持插座级租户计量的智能PDU,以及在两个机房统一部署的数据中心机柜规格,并制定了围绕现有租户负载排布的分阶段安装计划。",
      productsUsed: ["模块化UPS", "智能PDU", "数据中心机柜"],
      technicalConfiguration: [
        { label: "冗余等级", value: "N+1" },
        { label: "部署机柜数量", value: "220台×47U" },
        { label: "PDU监控", value: "插座级,SNMP" },
      ],
      implementation: "安装按机房逐一、机柜逐台分阶段进行,新UPS模块及PDU在迁移现有租户线路前均完成调试与负载测试,从而避免了停机。",
      results: ["两个机房均实现N+1冗余", "通过智能PDU计量实现租户级用电可视化", "迁移过程中现有租户负载零停机"],
    },
  },
  "middle-east-telecom-network-rollout": {
    ar: {
      title: "نشر خزائن الشبكة ومفاتيح النقل التلقائي للاتصالات",
      industry: "اتصالات",
      location: "الشرق الأوسط",
      summary: "نشر موحد لخزائن الشبكة ومفاتيح النقل التلقائي عبر توسع شبكة اتصالات متعددة المواقع.",
      background: "احتاج مشغل اتصالات يوسّع تغطية الشبكة إلى تصميم موحد لغرفة المعدات يمكن تكراره بسرعة عبر مواقع كثيرة ذات موثوقية طاقة متفاوتة.",
      challenge: "واجهت المواقع موثوقية غير متسقة لطاقة المرافق، ما تطلّب تحويلاً تلقائياً إلى المولد أو التغذية الثانوية دون تدخل يدوي، بينما احتاجت غرف المعدات إلى تخطيط خزانة مدمج وقابل للتكرار.",
      requirements: ["تحويل تلقائي بين تغذية المرافق والمولد", "تصميم خزانة شبكة مدمج موحد", "عملية نشر سريعة وقابلة للتكرار عبر مواقع كثيرة"],
      solution: "وفّرت واندتونغ وحدات ATS PDU للتحويل التلقائي للتغذية وقالب خزانة شبكة موحد، ما مكّن فرق التركيب لدى المشغل من تكرار نفس تصميم غرفة المعدات في كل موقع جديد.",
      productsUsed: ["ATS PDU", "خزانة شبكة"],
      technicalConfiguration: [
        { label: "المواقع المنشورة", value: "أكثر من 60 غرفة معدات" },
        { label: "التحويل", value: "تلقائي، تغذية مزدوجة" },
        { label: "معيار الخزانة", value: "خزانة شبكة 42U، تخطيط موحد" },
      ],
      implementation: "سمحت قائمة مواد ودليل تركيب موحدان لفرق المشغل الإقليمية بنشر نفس التصميم في كل موقع دون هندسة خاصة بالموقع.",
      results: ["معيار موحد لغرفة المعدات عبر أكثر من 60 موقعاً", "التحويل التلقائي أزال حوادث التحويل اليدوي", "تشغيل أسرع للمواقع عبر التصميم الموحد"],
    },
    fr: {
      title: "Déploiement d'armoires réseau et d'onduleurs de transfert automatique pour les télécoms",
      industry: "Télécoms",
      location: "Moyen-Orient",
      summary: "Déploiement standardisé d'armoires réseau et de commutateurs de transfert automatique dans une expansion de réseau télécom multi-sites.",
      background: "Un opérateur télécom élargissant la couverture réseau avait besoin d'une conception standardisée de local technique pouvant être répliquée rapidement sur de nombreux sites avec une fiabilité électrique variable.",
      challenge: "Les sites connaissaient une fiabilité électrique incohérente du réseau, nécessitant un basculement automatique vers le générateur ou une alimentation secondaire sans intervention manuelle, tandis que les locaux techniques avaient besoin d'une disposition d'armoire compacte et reproductible.",
      requirements: ["Commutation de transfert automatique entre l'alimentation réseau et le générateur", "Conception d'armoire réseau compacte standardisée", "Processus de déploiement rapide et reproductible sur de nombreux sites"],
      solution: "Wandtung a fourni des PDU ATS pour la commutation automatique d'alimentation et un modèle d'armoire réseau standardisé, permettant aux équipes d'installation de l'opérateur de reproduire la même conception de local technique sur chaque nouveau site.",
      productsUsed: ["PDU ATS", "Armoire réseau"],
      technicalConfiguration: [
        { label: "Sites déployés", value: "60+ locaux techniques" },
        { label: "Commutation de transfert", value: "Automatique, double alimentation" },
        { label: "Norme d'armoire", value: "Armoire réseau 42U, disposition standardisée" },
      ],
      implementation: "Une liste de matériel et un guide d'installation standardisés ont permis aux équipes régionales de l'opérateur de déployer la même conception sur chaque site sans ingénierie spécifique au site.",
      results: ["Norme de local technique cohérente sur plus de 60 sites", "Le basculement automatique a éliminé les incidents de commutation manuelle", "Mise en service de site plus rapide grâce à une conception standardisée"],
    },
    es: {
      title: "Despliegue de armarios de red y ATS para telecomunicaciones",
      industry: "Telecomunicaciones",
      location: "Oriente Medio",
      summary: "Despliegue estandarizado de armarios de red y conmutadores de transferencia automática en una expansión de red de telecomunicaciones multisitio.",
      background: "Un operador de telecomunicaciones que ampliaba la cobertura de red necesitaba un diseño estandarizado de sala de equipos que pudiera replicarse rápidamente en muchos sitios con fiabilidad eléctrica variable.",
      challenge: "Los sitios experimentaban una fiabilidad eléctrica inconsistente, lo que requería una conmutación automática al generador o alimentación secundaria sin intervención manual, mientras que las salas de equipos necesitaban un diseño de armario compacto y repetible.",
      requirements: ["Conmutación de transferencia automática entre alimentación de red y generador", "Diseño de armario de red compacto estandarizado", "Proceso de despliegue rápido y repetible en muchos sitios"],
      solution: "Wandtung suministró PDU ATS para la conmutación automática de alimentación y una plantilla de armario de red estandarizada, permitiendo que los equipos de instalación del operador replicaran el mismo diseño de sala de equipos en cada nuevo sitio.",
      productsUsed: ["PDU ATS", "Armario de red"],
      technicalConfiguration: [
        { label: "Sitios desplegados", value: "más de 60 salas de equipos" },
        { label: "Conmutación de transferencia", value: "Automática, alimentación dual" },
        { label: "Estándar de armario", value: "Armario de red 42U, diseño estandarizado" },
      ],
      implementation: "Una lista de materiales y una guía de instalación estandarizadas permitieron a los equipos regionales del operador desplegar el mismo diseño en cada sitio sin ingeniería específica del sitio.",
      results: ["Estándar de sala de equipos consistente en más de 60 sitios", "La conmutación automática eliminó los incidentes de conmutación manual", "Puesta en marcha de sitios más rápida gracias a un diseño estandarizado"],
    },
    ru: {
      title: "Развёртывание сетевых шкафов и АВР для телекоммуникаций",
      industry: "Телекоммуникации",
      location: "Ближний Восток",
      summary: "Стандартизированное развёртывание сетевых шкафов и автоматических переключателей ввода резерва в рамках расширения многосайтовой телекоммуникационной сети.",
      background: "Телекоммуникационному оператору, расширяющему покрытие сети, требовался стандартизированный дизайн технического помещения, который можно было бы быстро тиражировать на множестве объектов с различной надёжностью электроснабжения.",
      challenge: "На объектах наблюдалась непостоянная надёжность электросети, что требовало автоматического переключения на генератор или резервный ввод без ручного вмешательства, при этом технические помещения нуждались в компактной, воспроизводимой компоновке шкафов.",
      requirements: ["Автоматическое переключение между сетевым и генераторным вводами", "Стандартизированная компактная конструкция сетевого шкафа", "Быстрый, воспроизводимый процесс развёртывания на множестве объектов"],
      solution: "Wandtung поставила ATS PDU для автоматического переключения ввода и стандартизированный шаблон сетевого шкафа, что позволило монтажным бригадам оператора тиражировать один и тот же дизайн технического помещения на каждом новом объекте.",
      productsUsed: ["ATS PDU", "Сетевой шкаф"],
      technicalConfiguration: [
        { label: "Развёрнуто объектов", value: "более 60 технических помещений" },
        { label: "Переключение ввода", value: "Автоматическое, двойной ввод" },
        { label: "Стандарт шкафа", value: "Сетевой шкаф 42U, стандартизированная компоновка" },
      ],
      implementation: "Стандартизированная спецификация материалов и руководство по установке позволили региональным бригадам оператора развёртывать один и тот же дизайн на каждом объекте без проектирования, специфичного для конкретного объекта.",
      results: ["Единый стандарт технического помещения на более чем 60 объектах", "Автоматическое переключение устранило инциденты ручного переключения", "Более быстрый ввод объектов в эксплуатацию благодаря стандартизированному дизайну"],
    },
    zh: {
      title: "电信网络机柜及自动切换开关部署项目",
      industry: "电信",
      location: "中东",
      summary: "在多站点电信网络扩建项目中标准化部署网络机柜及自动切换开关。",
      background: "一家正在扩大网络覆盖的电信运营商需要一套标准化设备间设计方案,能够在众多市电可靠性各异的站点上快速复制部署。",
      challenge: "各站点市电可靠性参差不齐,需要在无人工干预的情况下自动切换至发电机或备用电源,同时设备间需要紧凑、可重复使用的机柜布局。",
      requirements: ["市电与发电机电源间自动切换", "标准化紧凑型网络机柜设计", "在众多站点上实现快速、可复制的部署流程"],
      solution: "万电通提供了用于自动电源切换的ATS PDU及标准化网络机柜模板,使运营商的安装团队能够在每个新站点复制相同的设备间设计。",
      productsUsed: ["ATS PDU", "网络机柜"],
      technicalConfiguration: [
        { label: "部署站点数", value: "60余个设备间" },
        { label: "切换方式", value: "自动,双路电源" },
        { label: "机柜标准", value: "42U网络机柜,统一布局" },
      ],
      implementation: "标准化的物料清单及安装指南使运营商的区域团队能够在每个站点复制相同的设计,而无需针对具体站点进行工程设计。",
      results: ["60余个站点实现统一设备间标准", "自动切换消除了人工切换事故", "标准化设计使站点通电调试更快"],
    },
  },
  "west-africa-edge-container-deployment": {
    ar: {
      title: "نشر مركز بيانات طرفي بحاوية",
      industry: "مشاريع خارجية",
      location: "غرب أفريقيا",
      summary: "نُشر مركز بيانات بحاوية 40 قدماً لتوسيع سعة الشبكة والحوسبة السحابية الطرفية إلى منطقة ذات خيارات منشآت مبنية محدودة.",
      background: "احتاج مشغل سحابة وشبكة إقليمي إلى إنشاء سعة حوسبة طرفية في موقع بدون بنية تحتية مبنية مناسبة قائمة أو جدول زمني للبناء الجديد.",
      challenge: "لم يكن بناء غرفة بيانات تقليدية ممكناً ضمن الجدول الزمني لنشر المشغل، واحتاج الموقع إلى حل قائم بذاته ومصنف للخارج يشمل الطاقة والتبريد والأمن.",
      requirements: ["غلاف قائم بذاته مصنف للخارج", "طاقة وتبريد وحماية من الحريق وأمن متكامل", "نشر خلال أسابيع من تأكيد الطلب"],
      solution: "سلّمت واندتونغ مركز بيانات بحاوية 40 قدماً متكاملاً بالكامل من المصنع مع توزيع طاقة PDU ذكي وUPS معياري، وتبريد دقيق، وإخماد حريق، ومراقبة عن بُعد، اختُبر في المصنع قبل الشحن.",
      productsUsed: ["مركز بيانات حاوية 40 قدماً", "PDU ذكي", "UPS معياري"],
      technicalConfiguration: [
        { label: "حجم الحاوية", value: "40 قدماً ISO" },
        { label: "تكرار الطاقة", value: "UPS بنمط N+1" },
        { label: "التبريد", value: "تكييف دقيق" },
      ],
      implementation: "تم تكامل الحاوية واختبار وظائفها بالكامل في مصنع واندتونغ، وشُحنت عبر لوجستيات الحاويات القياسية، وشُغّلت في الموقع بعد تحضير الأساس وتوصيل المرافق.",
      results: ["سعة مركز بيانات طرفي عاملة خلال أسابيع من اكتمال المصنع", "لم يتطلب النظام القائم بذاته أي بناء إضافي", "مكّنت المراقبة عن بُعد التشغيل غير المأهول بعد النشر"],
    },
    fr: {
      title: "Déploiement d'un data center de périphérie en conteneur",
      industry: "Projets internationaux",
      location: "Afrique de l'Ouest",
      summary: "Un data center en conteneur de 40 pieds déployé pour étendre la capacité réseau et cloud de périphérie à une région disposant d'options d'installation construite limitées.",
      background: "Un opérateur régional de cloud et de réseau devait établir une capacité de calcul en périphérie dans un lieu sans infrastructure bâtie existante adaptée ni délai pour une nouvelle construction.",
      challenge: "La construction conventionnelle d'une salle de données n'était pas réalisable dans le délai de déploiement de l'opérateur, et le site nécessitait une solution autonome classée pour l'extérieur, incluant alimentation, refroidissement et sécurité.",
      requirements: ["Boîtier autonome classé pour l'extérieur", "Alimentation, refroidissement, protection incendie et sécurité intégrés", "Déploiement en quelques semaines après confirmation de commande"],
      solution: "Wandtung a livré un data center en conteneur de 40 pieds entièrement pré-intégré en usine avec distribution électrique PDU intelligent et onduleur modulaire, refroidissement de précision, extinction incendie et surveillance à distance, testé à l'usine avant expédition.",
      productsUsed: ["Data center en conteneur 40 pieds", "PDU intelligent", "Onduleur modulaire"],
      technicalConfiguration: [
        { label: "Taille du conteneur", value: "40 pieds ISO" },
        { label: "Redondance d'alimentation", value: "Onduleur N+1" },
        { label: "Refroidissement", value: "Climatisation de précision" },
      ],
      implementation: "Le conteneur a été entièrement intégré et testé fonctionnellement à l'usine Wandtung, expédié par logistique de conteneur standard, et mis en service sur site après préparation des fondations et raccordement aux réseaux.",
      results: ["Capacité de data center de périphérie opérationnelle en quelques semaines après l'achèvement en usine", "Le système autonome n'a nécessité aucune construction de bâtiment supplémentaire", "La surveillance à distance a permis un fonctionnement non surveillé après le déploiement"],
    },
    es: {
      title: "Despliegue de un centro de datos de borde en contenedor",
      industry: "Proyectos internacionales",
      location: "África Occidental",
      summary: "Se desplegó un centro de datos en contenedor de 40 pies para ampliar la capacidad de red y nube de borde en una región con opciones limitadas de instalaciones construidas.",
      background: "Un operador regional de nube y red necesitaba establecer capacidad de computación de borde en una ubicación sin infraestructura de edificio existente adecuada ni plazo para nueva construcción.",
      challenge: "La construcción convencional de una sala de datos no era viable dentro del plazo de despliegue del operador, y el sitio requería una solución autónoma clasificada para exteriores que incluyera energía, refrigeración y seguridad.",
      requirements: ["Carcasa autónoma clasificada para exteriores", "Energía, refrigeración, protección contra incendios y seguridad integradas", "Despliegue en semanas tras la confirmación del pedido"],
      solution: "Wandtung entregó un centro de datos en contenedor de 40 pies totalmente preintegrado en fábrica con distribución de energía mediante PDU inteligente y SAI modular, refrigeración de precisión, extinción de incendios y monitoreo remoto, probado en fábrica antes del envío.",
      productsUsed: ["Centro de datos en contenedor de 40 pies", "PDU inteligente", "SAI modular"],
      technicalConfiguration: [
        { label: "Tamaño del contenedor", value: "40 pies ISO" },
        { label: "Redundancia de energía", value: "SAI N+1" },
        { label: "Refrigeración", value: "Aire acondicionado de precisión" },
      ],
      implementation: "El contenedor fue completamente integrado y probado funcionalmente en la fábrica de Wandtung, enviado mediante logística estándar de contenedores, y puesto en marcha en el sitio tras la preparación de cimientos y la conexión de servicios.",
      results: ["Capacidad de centro de datos de borde operativa en semanas tras completarse en fábrica", "El sistema autónomo no requirió construcción adicional de edificios", "El monitoreo remoto permitió una operación no atendida tras el despliegue"],
    },
    ru: {
      title: "Развёртывание контейнерного периферийного ЦОД",
      industry: "Зарубежные проекты",
      location: "Западная Африка",
      summary: "40-футовый контейнерный ЦОД развёрнут для расширения сетевых и облачных периферийных мощностей в регионе с ограниченными возможностями капитального строительства.",
      background: "Региональному оператору облачных и сетевых услуг требовалось создать периферийные вычислительные мощности в месте без подходящей существующей инфраструктуры зданий и сроков для нового строительства.",
      challenge: "Традиционное строительство машинного зала было невозможно в рамках сроков развёртывания оператора, а объект требовал автономного, рассчитанного на наружную установку решения, включающего питание, охлаждение и безопасность.",
      requirements: ["Автономный корпус, рассчитанный на наружную установку", "Встроенное питание, охлаждение, противопожарная защита и безопасность", "Развёртывание в течение недель после подтверждения заказа"],
      solution: "Wandtung поставила полностью интегрированный на заводе 40-футовый контейнерный ЦОД с распределением питания через интеллектуальный PDU и модульный ИБП, прецизионным охлаждением, пожаротушением и удалённым мониторингом, протестированный на заводе перед отгрузкой.",
      productsUsed: ["Контейнерный ЦОД 40 футов", "Интеллектуальный PDU", "Модульный ИБП"],
      technicalConfiguration: [
        { label: "Размер контейнера", value: "40 футов ISO" },
        { label: "Резервирование питания", value: "ИБП N+1" },
        { label: "Охлаждение", value: "Прецизионное кондиционирование" },
      ],
      implementation: "Контейнер был полностью интегрирован и функционально протестирован на заводе Wandtung, отгружен стандартной контейнерной логистикой и введён в эксплуатацию на объекте после подготовки фундамента и подключения коммуникаций.",
      results: ["Мощности периферийного ЦОД введены в эксплуатацию в течение недель после завершения заводского этапа", "Автономная система не потребовала дополнительного строительства зданий", "Удалённый мониторинг обеспечил необслуживаемую работу после развёртывания"],
    },
    zh: {
      title: "集装箱式边缘数据中心部署项目",
      industry: "海外项目",
      location: "西非",
      summary: "部署40英尺集装箱数据中心,为建筑设施选择有限的地区扩展网络及云边缘计算能力。",
      background: "一家区域云及网络运营商需要在缺乏合适现有建筑基础设施且无新建时间窗口的地点建立边缘计算能力。",
      challenge: "在运营商的部署时间要求下,传统机房建造方案不可行,该场地需要一套包含电力、制冷及安防的自成体系、户外级解决方案。",
      requirements: ["自成体系的户外级机箱", "集成电力、制冷、消防及安防系统", "订单确认后数周内完成部署"],
      solution: "万电通交付了一套完全出厂集成的40英尺集装箱数据中心,配备智能PDU及模块化UPS配电、精密制冷、消防及远程监控系统,出厂前已完成测试。",
      productsUsed: ["40英尺集装箱数据中心", "智能PDU", "模块化UPS"],
      technicalConfiguration: [
        { label: "集装箱尺寸", value: "40英尺ISO" },
        { label: "电力冗余", value: "N+1 UPS" },
        { label: "制冷方式", value: "精密空调" },
      ],
      implementation: "该集装箱在万电通工厂完成全面集成及功能测试,通过标准集装箱物流运输,并在基础准备及市政接入完成后于现场完成调试。",
      results: ["工厂完工后数周内边缘数据中心即投入运行", "自成体系的系统无需额外建筑施工", "远程监控使部署后实现无人值守运行"],
    },
  },
};

export function getProjectContent<T extends ProjectContent>(
  slug: string,
  locale: Locale,
  fallback: T
): ProjectContent {
  if (locale === "en") return fallback;
  return projectContentTranslations[slug]?.[locale as TranslatedLocale] ?? fallback;
}

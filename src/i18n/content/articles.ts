import { Locale } from "../config";

export interface ArticleContent {
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  body: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
}

type TranslatedLocale = Exclude<Locale, "en">;

export const articleContentTranslations: Record<string, Record<TranslatedLocale, ArticleContent>> = {
  "what-is-a-smart-pdu": {
    ar: {
      title: "ما هو PDU الذكي؟",
      category: "توزيع الطاقة",
      excerpt: "شرح مبسط لوحدات توزيع الطاقة الذكية — ما الذي تراقبه، وكيف تتواصل، ومتى تحتاجها المنشأة.",
      readingTime: "5 دقائق قراءة",
      body: [
        { heading: "التعريف", content: "PDU الذكي هو وحدة توزيع طاقة بالراك مزودة بمراقبة مدمجة واتصال بالشبكة. على عكس PDU الأساسي الذي يوزع الطاقة فقط، يقيس PDU الذكي التيار والجهد والطاقة واستهلاك الطاقة، وفي الطرازات القابلة للتبديل، يتيح التحكم عن بُعد بمنافذ فردية." },
        { heading: "ما الذي يراقبه PDU الذكي", content: "تشمل نقاط المراقبة النموذجية التيار والجهد لكل منفذ أو دائرة، وإجمالي استهلاك الطاقة، واستهلاك الطاقة التراكمي لتتبع التكلفة وPUE، ومع منافذ استشعار اختيارية، درجة حرارة ورطوبة الراك." },
        { heading: "بروتوكولات الاتصال", content: "تدعم وحدات PDU الذكية عادة SNMP للتكامل مع أنظمة إدارة الشبكة، وModbus RTU/TCP للتكامل مع أنظمة المبنى/DCIM، وRS485 للربط التسلسلي، وواجهة ويب للإدارة المباشرة عبر المتصفح." },
        { heading: "متى تحتاج إليه", content: "يستحق PDU الذكي الاستثمار عندما تحتاج المنشأة إلى رؤية عن بُعد لاستخدام الطاقة (استضافة مشتركة متعددة المستأجرين، تقارير PUE)، أو تحكم عن بُعد بطاقة المعدات (مواقع طرفية/غير مأهولة، إعادة تشغيل عن بُعد للخوادم المعلقة)." },
      ],
      faqs: [
        { question: "هل PDU الذكي هو نفسه PDU المقاس؟", answer: "ليس تماماً. يضيف PDU المقاس قراءات طاقة محلية أو عن بُعد لكن دون تحكم عن بُعد بالمنافذ. غالباً ما يُستخدم مصطلح PDU \"الذكي\" كمصطلح شامل يغطي إمكانيات القياس والمراقبة والتبديل — تحقق من قائمة ميزات الطراز المحدد." },
        { question: "هل يتطلب PDU الذكي اتصالاً بالشبكة ليعمل؟", answer: "يوزع PDU الذكي الطاقة بشكل طبيعي حتى دون اتصال بالشبكة — يلزم الاتصال بالشبكة فقط للوصول إلى بيانات المراقبة وميزات التبديل عن بُعد." },
      ],
    },
    fr: {
      title: "Qu'est-ce qu'un PDU intelligent ?",
      category: "Distribution électrique",
      excerpt: "Une explication simple des PDU intelligents — ce qu'ils surveillent, comment ils communiquent, et quand une installation en a besoin.",
      readingTime: "5 min de lecture",
      body: [
        { heading: "Définition", content: "Un PDU intelligent est une unité de distribution électrique de rack dotée d'une surveillance intégrée et d'une connectivité réseau. Contrairement à un PDU basique, qui ne fait que distribuer l'alimentation, un PDU intelligent mesure le courant, la tension, la puissance et la consommation d'énergie, et sur les modèles à commutation, permet le contrôle à distance des prises individuelles." },
        { heading: "Ce que surveille un PDU intelligent", content: "Les points de surveillance typiques incluent le courant et la tension par prise ou par circuit, la puissance totale consommée, la consommation d'énergie cumulée pour le suivi des coûts et du PUE, et — avec des ports de capteurs optionnels — la température et l'humidité au niveau du rack." },
        { heading: "Protocoles de communication", content: "Les PDU intelligents prennent généralement en charge SNMP pour l'intégration avec les systèmes de gestion réseau, Modbus RTU/TCP pour l'intégration bâtiment/DCIM, RS485 pour le chaînage série, et une interface web pour la gestion directe via navigateur." },
        { heading: "Quand vous en avez besoin", content: "Un PDU intelligent vaut l'investissement chaque fois qu'une installation a besoin d'une visibilité à distance sur l'utilisation de l'énergie (colocation multi-locataires, rapports PUE), ou d'un contrôle à distance de l'alimentation des équipements (sites non surveillés/de périphérie, redémarrage à distance de serveurs bloqués)." },
      ],
      faqs: [
        { question: "Un PDU intelligent est-il identique à un PDU mesuré ?", answer: "Pas exactement. Un PDU mesuré ajoute des relevés de puissance locaux ou à distance mais pas de contrôle de prise à distance. Le terme « intelligent » est souvent utilisé comme terme générique couvrant les capacités de mesure, de surveillance et de commutation — vérifiez la liste des fonctionnalités du modèle spécifique." },
        { question: "Un PDU intelligent nécessite-t-il une connexion réseau pour fonctionner ?", answer: "Un PDU intelligent distribue l'alimentation normalement même sans connectivité réseau — la connexion réseau n'est nécessaire que pour accéder aux données de surveillance et aux fonctions de commutation à distance." },
      ],
    },
    es: {
      title: "¿Qué es un PDU inteligente?",
      category: "Distribución de energía",
      excerpt: "Una explicación sencilla de los PDU inteligentes: qué monitorean, cómo se comunican y cuándo una instalación necesita uno.",
      readingTime: "5 min de lectura",
      body: [
        { heading: "Definición", content: "Un PDU inteligente es una unidad de distribución de energía de rack con monitoreo integrado y conectividad de red. A diferencia de un PDU básico, que solo distribuye energía, un PDU inteligente mide corriente, voltaje, potencia y consumo de energía, y en los modelos conmutados, permite el control remoto de tomas individuales." },
        { heading: "Qué monitorea un PDU inteligente", content: "Los puntos de monitoreo típicos incluyen corriente y voltaje por toma o circuito, consumo total de energía, consumo de energía acumulado para el seguimiento de costos y PUE, y —con puertos de sensores opcionales— temperatura y humedad a nivel de rack." },
        { heading: "Protocolos de comunicación", content: "Los PDU inteligentes suelen admitir SNMP para la integración con sistemas de gestión de red, Modbus RTU/TCP para la integración con edificios/DCIM, RS485 para el encadenamiento en serie, y una interfaz web para la gestión directa desde el navegador." },
        { heading: "Cuándo lo necesita", content: "Un PDU inteligente vale la inversión siempre que una instalación necesite visibilidad remota del uso de energía (colocation multiinquilino, informes de PUE), o control remoto de la energía de los equipos (sitios no atendidos/de borde, reinicio remoto de servidores bloqueados)." },
      ],
      faqs: [
        { question: "¿Es un PDU inteligente lo mismo que un PDU medido?", answer: "No exactamente. Un PDU medido añade lecturas de energía locales o remotas pero no control remoto de tomas. El término «inteligente» a menudo se usa como término general que cubre las capacidades de medición, monitoreo y conmutación; consulte la lista de funciones del modelo específico." },
        { question: "¿Requiere un PDU inteligente una conexión de red para funcionar?", answer: "Un PDU inteligente distribuye energía normalmente incluso sin conectividad de red; la conexión de red solo es necesaria para acceder a los datos de monitoreo y las funciones de conmutación remota." },
      ],
    },
    ru: {
      title: "Что такое интеллектуальный PDU?",
      category: "Распределение питания",
      excerpt: "Простое объяснение интеллектуальных PDU — что они контролируют, как взаимодействуют и когда объекту нужен такой блок.",
      readingTime: "5 мин на чтение",
      body: [
        { heading: "Определение", content: "Интеллектуальный PDU — это стоечный блок распределения питания со встроенным мониторингом и сетевым подключением. В отличие от базового PDU, который только распределяет питание, интеллектуальный PDU измеряет ток, напряжение, мощность и энергопотребление, а в коммутируемых моделях позволяет удалённо управлять отдельными розетками." },
        { heading: "Что контролирует интеллектуальный PDU", content: "Типичные точки мониторинга включают ток и напряжение по розетке или цепи, общее потребление мощности, накопленное энергопотребление для учёта затрат и PUE, а также — при наличии опциональных портов датчиков — температуру и влажность на уровне стойки." },
        { heading: "Протоколы связи", content: "Интеллектуальные PDU обычно поддерживают SNMP для интеграции с системами управления сетью, Modbus RTU/TCP для интеграции со зданием/DCIM, RS485 для последовательного соединения, а также веб-интерфейс для прямого управления через браузер." },
        { heading: "Когда он нужен", content: "Интеллектуальный PDU оправдывает инвестиции всякий раз, когда объекту требуется удалённая видимость использования энергии (многоарендаторный колокейшн, отчётность по PUE) или удалённое управление питанием оборудования (необслуживаемые/периферийные объекты, удалённая перезагрузка зависших серверов)." },
      ],
      faqs: [
        { question: "Является ли интеллектуальный PDU тем же самым, что и измерительный PDU?", answer: "Не совсем. Измерительный PDU добавляет локальные или удалённые показания мощности, но не удалённое управление розетками. Термин «интеллектуальный» часто используется как общий термин, охватывающий функции измерения, мониторинга и коммутации — проверьте список функций конкретной модели." },
        { question: "Требуется ли интеллектуальному PDU сетевое подключение для работы?", answer: "Интеллектуальный PDU распределяет питание в обычном режиме даже без сетевого подключения — сетевое подключение требуется только для доступа к данным мониторинга и функциям удалённой коммутации." },
      ],
    },
    zh: {
      title: "什么是智能PDU？",
      category: "配电",
      excerpt: "通俗易懂地解读智能PDU——它监测什么、如何通信,以及设施何时需要配置一台。",
      readingTime: "5分钟阅读",
      body: [
        { heading: "定义", content: "智能PDU是一种内置监测功能并具备网络连接能力的机架配电单元。与仅分配电力的基础型PDU不同,智能PDU可测量电流、电压、功率及能耗,而在可切换型号上还支持对单个插座进行远程控制。" },
        { heading: "智能PDU监测哪些内容", content: "典型监测项包括每插座或每回路的电流与电压、总功耗、用于成本与PUE跟踪的累计能耗,以及在配备可选传感器接口时的机架级温湿度。" },
        { heading: "通信协议", content: "智能PDU通常支持SNMP以与网络管理系统集成、Modbus RTU/TCP以与楼宇/DCIM系统集成、RS485用于串行菊花链连接,并提供网页界面便于直接通过浏览器管理。" },
        { heading: "何时需要智能PDU", content: "当设施需要远程掌握用电情况(多租户托管、PUE报告),或需要远程控制设备电源(无人值守/边缘场地、远程重启无响应服务器)时,智能PDU的投入便物有所值。" },
      ],
      faqs: [
        { question: "智能PDU与计量型PDU是一回事吗？", answer: "并不完全相同。计量型PDU增加了本地或远程电力读数,但不具备远程插座控制功能。“智能”PDU常作为涵盖计量、监控及切换能力的统称使用——请查看具体型号的功能列表以确认。" },
        { question: "智能PDU运行是否需要网络连接？", answer: "即使没有网络连接,智能PDU也能正常分配电力——网络连接仅用于访问监控数据及远程切换功能。" },
      ],
    },
  },
  "what-is-a-micro-modular-data-center": {
    ar: {
      title: "ما هو مركز البيانات الوحدة الصغيرة؟",
      category: "مركز بيانات الوحدة الصغيرة",
      excerpt: "كيف تختصر الوحدات الصغيرة المتكاملة من المصنع بناء غرفة البيانات من أشهر إلى أسابيع.",
      readingTime: "5 دقائق قراءة",
      body: [
        { heading: "التعريف", content: "مركز البيانات الوحدة الصغيرة هو نظام متكامل مسبقاً من المصنع يجمع خزانات تكنولوجيا المعلومات وتوزيع الطاقة وUPS والتبريد وإخماد الحريق والتحكم بالوصول والمراقبة في وحدة موحدة واحدة." },
        { heading: "لماذا تستخدم واحدة بدلاً من بناء غرفة بيانات", content: "يتطلب بناء غرفة البيانات التقليدية تنسيق عدة مقاولين متخصصين في الموقع — كهربائي وميكانيكي وحماية من الحريق وأمن — غالباً على مدى عدة أشهر. تُصمم الوحدة الصغيرة وتُختبر كنظام واحد في المصنع، ما يقلل العمل في الموقع إلى التوضع والتوصيل." },
        { heading: "التكوينات النموذجية", content: "تتوفر الوحدات الصغيرة عادة بتكوينات صف واحد (خزانات على جانب واحد من ممر مركزي) وصفين (خزانات متقابلة مع احتواء ممر ساخن/بارد)، بأحجام من حفنة راكات إلى غرفة بيانات صغيرة كاملة." },
      ],
      faqs: [
        { question: "هل تقدم واندتونغ حلول مراكز بيانات الوحدة الصغيرة؟", answer: "نعم. تصمم واندتونغ وتصنّع مراكز بيانات وحدة صغيرة بصف واحد وصفين وشاملة الكل، مع طاقة وتبريد وإخماد حريق ومراقبة متكاملة، مصممة ومُختبرة في المصنع كنظام كامل قبل النشر." },
      ],
    },
    fr: {
      title: "Qu'est-ce qu'un data center micro-modulaire ?",
      category: "Data center micro-modulaire",
      excerpt: "Comment les micro-modules intégrés en usine compressent la construction d'une salle informatique de plusieurs mois à quelques semaines.",
      readingTime: "5 min de lecture",
      body: [
        { heading: "Définition", content: "Un data center micro-modulaire est un système pré-intégré en usine combinant armoires informatiques, distribution électrique, onduleur, refroidissement, extinction incendie, contrôle d'accès et surveillance en une seule unité standardisée." },
        { heading: "Pourquoi en utiliser un plutôt que de construire une salle informatique", content: "La construction traditionnelle d'une salle informatique nécessite de coordonner plusieurs entrepreneurs spécialisés sur site — électricité, mécanique, protection incendie, sécurité — souvent sur plusieurs mois. Un micro-module est conçu et testé comme un seul système en usine, réduisant le travail sur site au placement et au raccordement." },
        { heading: "Configurations typiques", content: "Les micro-modules sont généralement disponibles en configurations à rangée unique (armoires d'un côté d'une allée centrale) et à double rangée (armoires face à face avec confinement d'allée chaude/froide), dimensionnés d'une poignée de racks jusqu'à une petite salle informatique complète." },
      ],
      faqs: [
        { question: "Wandtung propose-t-il des solutions de data center micro-modulaire ?", answer: "Oui. Wandtung conçoit et fabrique des data centers micro-modulaires à une rangée, deux rangées et tout-en-un avec alimentation, refroidissement, extinction incendie et surveillance intégrés, conçus et testés en usine comme un système complet avant déploiement." },
      ],
    },
    es: {
      title: "¿Qué es un centro de datos micro modular?",
      category: "Centro de datos micro modular",
      excerpt: "Cómo los micro módulos integrados en fábrica comprimen la construcción de una sala de datos de meses a semanas.",
      readingTime: "5 min de lectura",
      body: [
        { heading: "Definición", content: "Un centro de datos micro modular es un sistema preintegrado en fábrica que combina armarios de TI, distribución de energía, SAI, refrigeración, extinción de incendios, control de acceso y monitoreo en una única unidad estandarizada." },
        { heading: "Por qué usar uno en lugar de construir una sala de datos", content: "La construcción tradicional de una sala de datos requiere coordinar a múltiples contratistas especializados en el sitio —eléctrico, mecánico, protección contra incendios, seguridad— a menudo durante varios meses. Un micro módulo se diseña y prueba como un solo sistema en fábrica, reduciendo el trabajo en sitio a la colocación y conexión." },
        { heading: "Configuraciones típicas", content: "Los micro módulos suelen estar disponibles en configuraciones de una fila (armarios a un lado de un pasillo central) y de dos filas (armarios enfrentados con contención de pasillo caliente/frío), dimensionados desde un puñado de racks hasta una sala de datos pequeña completa." },
      ],
      faqs: [
        { question: "¿Ofrece Wandtung soluciones de centro de datos micro modular?", answer: "Sí. Wandtung diseña y fabrica centros de datos micro modulares de una fila, dos filas y todo en uno con energía, refrigeración, extinción de incendios y monitoreo integrados, diseñados y probados en fábrica como sistema completo antes del despliegue." },
      ],
    },
    ru: {
      title: "Что такое микромодульный ЦОД?",
      category: "Микромодульный ЦОД",
      excerpt: "Как заводские интегрированные микромодули сокращают строительство машинного зала с месяцев до недель.",
      readingTime: "5 мин на чтение",
      body: [
        { heading: "Определение", content: "Микромодульный ЦОД — это предварительно интегрированная на заводе система, объединяющая ИТ-шкафы, распределение питания, ИБП, охлаждение, пожаротушение, контроль доступа и мониторинг в единый стандартизированный блок." },
        { heading: "Почему использовать его вместо строительства машинного зала", content: "Традиционное строительство машинного зала требует координации нескольких специализированных подрядчиков на объекте — электрика, механика, противопожарная защита, безопасность — часто в течение нескольких месяцев. Микромодуль проектируется и тестируется как единая система на заводе, сводя работу на объекте к размещению и подключению." },
        { heading: "Типичные конфигурации", content: "Микромодули обычно доступны в однорядной (шкафы с одной стороны центрального прохода) и двухрядной (шкафы друг напротив друга с изоляцией горячего/холодного коридора) конфигурациях, рассчитанных от нескольких стоек до полноценного небольшого машинного зала." },
      ],
      faqs: [
        { question: "Предлагает ли Wandtung решения микромодульных ЦОД?", answer: "Да. Wandtung проектирует и производит одно-, двухрядные и моноблочные микромодульные ЦОД со встроенным питанием, охлаждением, пожаротушением и мониторингом, спроектированные и протестированные на заводе как единая система перед развёртыванием." },
      ],
    },
    zh: {
      title: "什么是微模块数据中心？",
      category: "微模块数据中心",
      excerpt: "工厂集成微模块如何将机房建设周期从数月压缩至数周。",
      readingTime: "5分钟阅读",
      body: [
        { heading: "定义", content: "微模块数据中心是一种出厂预集成系统,将IT机柜、配电、UPS、制冷、消防、门禁及监控整合为一套标准化单元。" },
        { heading: "为何选择微模块而非自建机房", content: "传统机房建设需要在现场协调多个专业承包商——电气、机械、消防、安防——往往耗时数月。微模块作为一套完整系统在工厂完成设计与测试,现场工作仅需进行就位与接线。" },
        { heading: "典型配置", content: "微模块通常提供单排配置(机柜位于中央通道一侧)及双排配置(机柜面对面布置并配备冷/热通道封闭),规模从少量机架到完整的小型机房均可覆盖。" },
      ],
      faqs: [
        { question: "万电通是否提供微模块数据中心解决方案？", answer: "是的。万电通设计并制造单排、双排及一体式微模块数据中心,集成电力、制冷、消防及监控系统,在部署前作为完整系统于工厂完成设计与测试。" },
      ],
    },
  },
  "20ft-vs-40ft-container-data-center": {
    ar: {
      title: "حاوية 20 قدماً مقابل 40 قدماً لمركز البيانات: أيهما تختار؟",
      category: "مركز بيانات بحاوية",
      excerpt: "مقارنة عملية للمساعدة في تحديد حجم مركز بيانات بحاوية يناسب حمل تكنولوجيا المعلومات وقيود الموقع.",
      readingTime: "4 دقائق قراءة",
      body: [
        { heading: "السعة", content: "تضاعف حاوية 40 قدماً تقريباً المساحة الداخلية القابلة للاستخدام لوحدة 20 قدماً، ما يدعم عدداً أكبر من راكات تكنولوجيا المعلومات، ومحطة طاقة وتبريد أكبر، وفي كثير من التصاميم، ممر صيانة يمكن الدخول إليه." },
        { heading: "قيود الموقع", content: "تناسب حاويات 20 قدماً المواقع ذات المساحة المحدودة، أو قيود الوزن/اللوجستيات، أو أهداف حمل تكنولوجيا معلومات أصغر — شائعة في المواقع الطرفية أو المؤقتة. تناسب وحدات 40 قدماً عمليات النشر الأكبر وطويلة الأمد." },
        { heading: "اللوجستيات", content: "يتحرك كلا الحجمين عبر لوجستيات حاويات ISO قياسية؛ قد تواجه وحدات 40 قدماً وصولاً أكثر تقييداً في مواقع ذات طرق ضيقة أو سعة رافعة محدودة، وينبغي تقييم ذلك أثناء مسح الموقع." },
      ],
      faqs: [
        { question: "هل يمكن ربط عدة حاويات لسعة أكبر؟", answer: "نعم — يمكن نشر مراكز بيانات بحاويات 20 و40 قدماً بأعداد متعددة وربطها لمتطلبات سعة أكبر مع نمو الحمل." },
      ],
    },
    fr: {
      title: "Conteneur 20 pieds vs 40 pieds pour data center : lequel choisir ?",
      category: "Data center en conteneur",
      excerpt: "Une comparaison pratique pour dimensionner un data center conteneurisé selon votre charge informatique et les contraintes du site.",
      readingTime: "4 min de lecture",
      body: [
        { heading: "Capacité", content: "Un conteneur de 40 pieds double approximativement la surface interne utilisable d'une unité de 20 pieds, supportant plus de racks informatiques, une installation d'alimentation et de refroidissement plus grande, et dans de nombreuses conceptions, une allée de maintenance praticable." },
        { heading: "Contraintes du site", content: "Les conteneurs de 20 pieds conviennent aux sites à espace limité, aux restrictions de poids/logistique, ou aux objectifs de charge informatique plus petits — courants sur les sites de périphérie ou temporaires. Les unités de 40 pieds conviennent aux déploiements plus grands et à long terme." },
        { heading: "Logistique", content: "Les deux tailles se déplacent via la logistique standard des conteneurs ISO ; les unités de 40 pieds peuvent rencontrer un accès plus restrictif sur des sites avec des routes étroites ou une capacité de grue limitée, ce qui devrait être évalué lors de l'enquête sur site." },
      ],
      faqs: [
        { question: "Plusieurs conteneurs peuvent-ils être reliés pour plus de capacité ?", answer: "Oui — les data centers conteneurisés de 20 et 40 pieds peuvent être déployés en plusieurs unités et interconnectés pour des exigences de capacité plus importantes à mesure que la charge augmente." },
      ],
    },
    es: {
      title: "Contenedor de 20 pies vs 40 pies para centro de datos: ¿cuál elegir?",
      category: "Centro de datos en contenedor",
      excerpt: "Una comparación práctica para dimensionar un centro de datos en contenedor según su carga de TI y las restricciones del sitio.",
      readingTime: "4 min de lectura",
      body: [
        { heading: "Capacidad", content: "Un contenedor de 40 pies aproximadamente duplica la superficie interna utilizable de una unidad de 20 pies, admitiendo más racks de TI, una planta de energía y refrigeración más grande y, en muchos diseños, un pasillo de mantenimiento transitable." },
        { heading: "Restricciones del sitio", content: "Los contenedores de 20 pies son adecuados para sitios con espacio limitado, restricciones de peso/logística, u objetivos de carga de TI más pequeños, comunes en sitios de borde o temporales. Las unidades de 40 pies son adecuadas para despliegues más grandes y a largo plazo." },
        { heading: "Logística", content: "Ambos tamaños se mueven mediante logística estándar de contenedores ISO; las unidades de 40 pies pueden enfrentar un acceso más restrictivo en sitios con carreteras estrechas o capacidad de grúa limitada, lo cual debe evaluarse durante el estudio del sitio." },
      ],
      faqs: [
        { question: "¿Se pueden enlazar varios contenedores para más capacidad?", answer: "Sí; tanto los centros de datos en contenedor de 20 como de 40 pies pueden desplegarse en múltiples unidades e interconectarse para requisitos de mayor capacidad a medida que crece la carga." },
      ],
    },
    ru: {
      title: "Контейнер 20 или 40 футов для ЦОД: что выбрать?",
      category: "Контейнерный ЦОД",
      excerpt: "Практическое сравнение для подбора размера контейнерного ЦОД под вашу ИТ-нагрузку и ограничения объекта.",
      readingTime: "4 мин на чтение",
      body: [
        { heading: "Мощность", content: "40-футовый контейнер примерно вдвое увеличивает полезную внутреннюю площадь по сравнению с 20-футовым блоком, поддерживая больше ИТ-стоек, более крупную энергоустановку и охлаждение, а во многих конструкциях — проходной технический коридор." },
        { heading: "Ограничения объекта", content: "20-футовые контейнеры подходят для объектов с ограниченным пространством, весовыми/логистическими ограничениями или меньшими целевыми ИТ-нагрузками — распространены на периферийных или временных объектах. 40-футовые блоки подходят для более крупных, долгосрочных развёртываний." },
        { heading: "Логистика", content: "Оба размера перевозятся стандартной логистикой ISO-контейнеров; 40-футовые блоки могут столкнуться с более ограниченным доступом на объектах с узкими дорогами или ограниченной грузоподъёмностью крана, что следует оценить при обследовании объекта." },
      ],
      faqs: [
        { question: "Можно ли объединить несколько контейнеров для увеличения мощности?", answer: "Да — контейнерные ЦОД на 20 и 40 футов можно развёртывать в нескольких экземплярах и объединять для увеличения мощности по мере роста нагрузки." },
      ],
    },
    zh: {
      title: "20英尺与40英尺集装箱数据中心:该如何选择？",
      category: "集装箱数据中心",
      excerpt: "一份实用对比指南,帮助你根据IT负载及场地限制选择合适规格的集装箱数据中心。",
      readingTime: "4分钟阅读",
      body: [
        { heading: "容量", content: "40英尺集装箱的可用内部空间大约是20英尺箱体的两倍,可容纳更多IT机架、更大的电力及制冷设备,在许多设计中还可提供可走入式维护通道。" },
        { heading: "场地限制", content: "20英尺集装箱适用于空间有限、存在重量/物流限制,或IT负载目标较小的场地——在边缘或临时场地较为常见。40英尺箱体则适用于规模更大、部署周期更长的场景。" },
        { heading: "物流运输", content: "两种规格均通过标准ISO集装箱物流运输;在道路狭窄或吊装能力有限的场地,40英尺箱体可能面临更严格的通行限制,应在场地勘查阶段进行评估。" },
      ],
      faqs: [
        { question: "多个集装箱能否连接以扩大容量？", answer: "可以——20英尺和40英尺集装箱数据中心均可多台部署并互联,以满足负载增长带来的更大容量需求。" },
      ],
    },
  },
  "what-is-a-cdu-in-liquid-cooling": {
    ar: {
      title: "ما هي CDU في التبريد السائل؟",
      category: "التبريد السائل",
      excerpt: "فهم وحدة توزيع المبرد في قلب كل بنية تبريد سائل.",
      readingTime: "4 دقائق قراءة",
      body: [
        { heading: "التعريف", content: "تدير CDU (وحدة توزيع المبرد) وتعزل حلقتي المبرد الأساسية (المنشأة) والثانوية (الراك/الخادم) في نظام التبريد السائل، وتتحكم بالتدفق ودرجة الحرارة والضغط." },
        { heading: "لماذا يهم عزل الحلقة", content: "قد تتفاوت مياه المنشأة في الجودة والضغط ودرجة الحرارة. يحافظ المبادل الحراري لـCDU على فصل تلك الحلقة الأساسية عن الحلقة الثانوية المغلقة التي تلامس أجهزة تكنولوجيا المعلومات، ما يحمي الخوادم من التلوث وتقلبات الضغط." },
        { heading: "ما الذي تراقبه CDU", content: "تشمل مراقبة CDU النموذجية درجة حرارة التزويد/العودة، ومعدل التدفق، والضغط، وحالة كشف التسرب، والمبلَّغ عنها لنظام مراقبة المنشأة." },
      ],
      faqs: [
        { question: "هل تقدم واندتونغ حلول التبريد السائل وCDU؟", answer: "نعم. تقدم واندتونغ أنظمة تبريد سائل بلوحة باردة مع حلقات أساسية/ثانوية تديرها CDU، وكشف تسرب ومراقبة لعمليات نشر الذكاء الاصطناعي والحوسبة فائقة الكثافة." },
      ],
    },
    fr: {
      title: "Qu'est-ce qu'une CDU dans le refroidissement liquide ?",
      category: "Refroidissement liquide",
      excerpt: "Comprendre l'unité de distribution de liquide de refroidissement au cœur de chaque architecture de refroidissement liquide.",
      readingTime: "4 min de lecture",
      body: [
        { heading: "Définition", content: "Une CDU (unité de distribution de liquide de refroidissement) gère et isole les boucles de liquide de refroidissement primaire (installation) et secondaire (rack/serveur) dans un système de refroidissement liquide, contrôlant le débit, la température et la pression." },
        { heading: "Pourquoi l'isolation des boucles est importante", content: "L'eau de l'installation peut varier en qualité, pression et température. L'échangeur de chaleur de la CDU maintient cette boucle primaire séparée de la boucle secondaire fermée qui touche le matériel informatique, protégeant les serveurs de la contamination et des variations de pression." },
        { heading: "Ce que surveille une CDU", content: "La surveillance typique d'une CDU comprend la température d'alimentation/retour, le débit, la pression et l'état de détection de fuite, rapportés au système de surveillance de l'installation." },
      ],
      faqs: [
        { question: "Wandtung propose-t-il des solutions de refroidissement liquide et de CDU ?", answer: "Oui. Wandtung propose des systèmes de refroidissement liquide à plaque froide avec boucles primaire/secondaire gérées par CDU, détection de fuite et surveillance pour les déploiements IA et de calcul haute densité." },
      ],
    },
    es: {
      title: "¿Qué es una CDU en la refrigeración líquida?",
      category: "Refrigeración líquida",
      excerpt: "Comprender la unidad de distribución de refrigerante en el centro de toda arquitectura de refrigeración líquida.",
      readingTime: "4 min de lectura",
      body: [
        { heading: "Definición", content: "Una CDU (unidad de distribución de refrigerante) gestiona y aísla los circuitos de refrigerante primario (instalación) y secundario (rack/servidor) en un sistema de refrigeración líquida, controlando el flujo, la temperatura y la presión." },
        { heading: "Por qué importa el aislamiento del circuito", content: "El agua de la instalación puede variar en calidad, presión y temperatura. El intercambiador de calor de la CDU mantiene ese circuito primario separado del circuito secundario cerrado que toca el hardware de TI, protegiendo los servidores de la contaminación y las fluctuaciones de presión." },
        { heading: "Qué monitorea una CDU", content: "El monitoreo típico de una CDU incluye la temperatura de suministro/retorno, el caudal, la presión y el estado de detección de fugas, informados al sistema de monitoreo de la instalación." },
      ],
      faqs: [
        { question: "¿Ofrece Wandtung soluciones de refrigeración líquida y CDU?", answer: "Sí. Wandtung ofrece sistemas de refrigeración líquida de placa fría con circuitos primario/secundario gestionados por CDU, detección de fugas y monitoreo para despliegues de IA y cómputo de alta densidad." },
      ],
    },
    ru: {
      title: "Что такое CDU в жидкостном охлаждении?",
      category: "Жидкостное охлаждение",
      excerpt: "Разбираемся с блоком распределения хладагента — сердцем любой архитектуры жидкостного охлаждения.",
      readingTime: "4 мин на чтение",
      body: [
        { heading: "Определение", content: "CDU (блок распределения хладагента) управляет и изолирует первичный (объектовый) и вторичный (стоечный/серверный) контуры хладагента в системе жидкостного охлаждения, контролируя поток, температуру и давление." },
        { heading: "Почему важна изоляция контуров", content: "Объектовая вода может различаться по качеству, давлению и температуре. Теплообменник CDU удерживает этот первичный контур отдельно от замкнутого вторичного контура, соприкасающегося с ИТ-оборудованием, защищая серверы от загрязнения и перепадов давления." },
        { heading: "Что контролирует CDU", content: "Типичный мониторинг CDU включает температуру подачи/обратки, расход, давление и статус обнаружения утечек, передаваемые в систему мониторинга объекта." },
      ],
      faqs: [
        { question: "Предлагает ли Wandtung решения жидкостного охлаждения и CDU?", answer: "Да. Wandtung предлагает системы жидкостного охлаждения холодными пластинами с первичным/вторичным контурами под управлением CDU, обнаружением утечек и мониторингом для развёртываний ИИ и высокоплотных вычислений." },
      ],
    },
    zh: {
      title: "液冷系统中的CDU是什么？",
      category: "液冷",
      excerpt: "深入了解每套液冷架构核心——冷却液分配单元。",
      readingTime: "4分钟阅读",
      body: [
        { heading: "定义", content: "CDU(冷却液分配单元)在液冷系统中管理并隔离一次侧(设施)与二次侧(机架/服务器)冷却液回路,控制流量、温度及压力。" },
        { heading: "为何回路隔离很重要", content: "设施水路的水质、压力及温度可能存在波动。CDU的换热器使该一次侧回路与接触IT硬件的封闭二次侧回路保持隔离,从而保护服务器免受污染及压力波动的影响。" },
        { heading: "CDU监测哪些内容", content: "CDU的典型监测项包括供回水温度、流量、压力及漏液检测状态,并上报至设施监控系统。" },
      ],
      faqs: [
        { question: "万电通是否提供液冷及CDU解决方案？", answer: "是的。万电通提供冷板式液冷系统,配备CDU管理的一次侧/二次侧回路、漏液检测及监控功能,适用于AI及高密度计算部署。" },
      ],
    },
  },
  "how-to-choose-a-data-center-pdu": {
    ar: {
      title: "كيف تختار PDU لمركز البيانات",
      category: "توزيع الطاقة",
      excerpt: "قائمة تحقق خطوة بخطوة لتحديد مواصفات PDU الراك المناسب لمشروع مركز بياناتك.",
      readingTime: "6 دقائق قراءة",
      body: [
        { heading: "1. طابق الجهد والتيار مع دائرتك", content: "تأكد من الجهد والتيار المقدَّرين للدائرة الأعلى (مثل 200-250 فولت/32 أمبير ثلاثي الطور) واختر PDU مصنفاً ليطابق ذلك، مع هامش لنمو الحمل." },
        { heading: "2. اختر صيغة التركيب", content: "يناسب التركيب الرأسي (0U) عدد المنافذ الكبير والراكات العميقة؛ يناسب التركيب الأفقي (1U-2U) الراكات الضحلة أو متطلبات عدد المنافذ المنخفض." },
        { heading: "3. حدد المراقبة والتحكم", content: "تناسب وحدات PDU الأساسية الأحمال غير الحرجة بدون حاجة للتقارير؛ تناسب وحدات PDU المقاسة/المراقبة المنشآت التي تتبع استخدام الطاقة؛ تناسب وحدات PDU القابلة للتبديل المواقع غير المأهولة أو النائية التي تحتاج إعادة تشغيل عن بُعد." },
        { heading: "4. تأكد من نوع المنفذ", content: "طابق نوع المنفذ (IEC C13/C19، خاص بالدولة، أو مخصص) مع كابلات طاقة المعدات التي سيتم توصيلها." },
        { heading: "5. خطط للتكرار", content: "بالنسبة للمعدات ذات الموصلين المزدوجين، خطط لتغذية PDU من نوع A/B من مصادر طاقة مستقلة لدعم تكرار حقيقي." },
      ],
      faqs: [
        { question: "ما الفرق بين PDU الأساسي وPDU المقاس أو المراقب؟", answer: "يوزع PDU الأساسي الطاقة فقط. يضيف PDU المقاس شاشة تيار/جهد محلية. يضيف PDU المراقب مراقبة عن بُعد قائمة على الشبكة. يضيف PDU القابل للتبديل تحكماً عن بُعد بالمنافذ فوق المراقبة." },
      ],
    },
    fr: {
      title: "Comment choisir un PDU de centre de données",
      category: "Distribution électrique",
      excerpt: "Une liste de contrôle étape par étape pour spécifier le bon PDU de rack pour votre projet de centre de données.",
      readingTime: "6 min de lecture",
      body: [
        { heading: "1. Faire correspondre tension et courant à votre circuit", content: "Confirmez la tension et le courant nominaux du circuit amont (par ex. 200-250V/32A triphasé) et sélectionnez un PDU dimensionné en conséquence, avec une marge pour la croissance de la charge." },
        { heading: "2. Choisir le format de montage", content: "Le montage vertical (0U) convient aux nombres élevés de prises et aux racks profonds ; le montage horizontal (1U-2U) convient aux racks peu profonds ou aux besoins de faible nombre de prises." },
        { heading: "3. Décider de la surveillance et du contrôle", content: "Les PDU basiques conviennent aux charges non critiques sans besoin de rapport ; les PDU mesurés/surveillés conviennent aux installations suivant l'utilisation d'énergie ; les PDU commutés conviennent aux sites non surveillés ou distants nécessitant un redémarrage à distance." },
        { heading: "4. Confirmer le type de prise", content: "Faites correspondre le type de prise (IEC C13/C19, spécifique au pays, ou personnalisé) aux cordons d'alimentation des équipements qui seront connectés." },
        { heading: "5. Planifier la redondance", content: "Pour les équipements à double cordon, prévoyez des alimentations PDU A/B depuis des sources d'alimentation indépendantes pour supporter une véritable redondance." },
      ],
      faqs: [
        { question: "Quelle est la différence entre un PDU basique et un PDU mesuré ou surveillé ?", answer: "Un PDU basique ne fait que distribuer l'alimentation. Un PDU mesuré ajoute un affichage local de courant/tension. Un PDU surveillé ajoute une surveillance à distance basée sur le réseau. Un PDU commuté ajoute un contrôle de prise à distance en plus de la surveillance." },
      ],
    },
    es: {
      title: "Cómo elegir un PDU para centro de datos",
      category: "Distribución de energía",
      excerpt: "Una lista de verificación paso a paso para especificar el PDU de rack correcto para su proyecto de centro de datos.",
      readingTime: "6 min de lectura",
      body: [
        { heading: "1. Haga coincidir el voltaje y la corriente con su circuito", content: "Confirme el voltaje y la corriente nominales del circuito ascendente (por ejemplo, 200-250V/32A trifásico) y seleccione un PDU clasificado para coincidir, con margen para el crecimiento de la carga." },
        { heading: "2. Elija el formato de montaje", content: "El montaje vertical (0U) se adapta a un alto número de tomas y racks profundos; el montaje horizontal (1U-2U) se adapta a racks poco profundos o requisitos de bajo número de tomas." },
        { heading: "3. Decida sobre el monitoreo y control", content: "Los PDU básicos se adaptan a cargas no críticas sin necesidad de informes; los PDU medidos/monitoreados se adaptan a instalaciones que rastrean el uso de energía; los PDU conmutados se adaptan a sitios no atendidos o remotos que necesitan reinicio remoto." },
        { heading: "4. Confirme el tipo de toma", content: "Haga coincidir el tipo de toma (IEC C13/C19, específico del país o personalizado) con los cables de alimentación del equipo que se conectará." },
        { heading: "5. Planifique la redundancia", content: "Para equipos de doble cable, planifique alimentaciones PDU A/B desde fuentes de energía independientes para soportar una redundancia real." },
      ],
      faqs: [
        { question: "¿Cuál es la diferencia entre un PDU básico y uno medido o monitoreado?", answer: "Un PDU básico solo distribuye energía. Un PDU medido añade una pantalla local de corriente/voltaje. Un PDU monitoreado añade monitoreo remoto basado en red. Un PDU conmutado añade control remoto de tomas además del monitoreo." },
      ],
    },
    ru: {
      title: "Как выбрать PDU для центра обработки данных",
      category: "Распределение питания",
      excerpt: "Пошаговый чек-лист для подбора спецификации стоечного PDU для вашего проекта ЦОД.",
      readingTime: "6 мин на чтение",
      body: [
        { heading: "1. Согласуйте напряжение и ток с вашей цепью", content: "Уточните номинальное напряжение и ток вышестоящей цепи (например, 200-250В/32А трёхфазная) и выберите PDU с соответствующим номиналом с запасом на рост нагрузки." },
        { heading: "2. Выберите формат монтажа", content: "Вертикальный монтаж (0U) подходит для большого количества розеток и глубоких стоек; горизонтальный монтаж (1U-2U) подходит для неглубоких стоек или требований с малым числом розеток." },
        { heading: "3. Определитесь с мониторингом и управлением", content: "Базовые PDU подходят для некритичных нагрузок без потребности в отчётности; измерительные/контролируемые PDU подходят для объектов, отслеживающих энергопотребление; коммутируемые PDU подходят для необслуживаемых или удалённых объектов, требующих удалённой перезагрузки." },
        { heading: "4. Уточните тип розетки", content: "Согласуйте тип розетки (IEC C13/C19, специфичный для страны или заказной) с кабелями питания подключаемого оборудования." },
        { heading: "5. Спланируйте резервирование", content: "Для оборудования с двойным подключением питания предусмотрите вводы PDU A/B от независимых источников питания для поддержки истинного резервирования." },
      ],
      faqs: [
        { question: "В чём разница между базовым и измерительным или контролируемым PDU?", answer: "Базовый PDU только распределяет питание. Измерительный PDU добавляет локальный дисплей тока/напряжения. Контролируемый PDU добавляет удалённый сетевой мониторинг. Коммутируемый PDU добавляет удалённое управление розетками поверх мониторинга." },
      ],
    },
    zh: {
      title: "如何选择数据中心PDU",
      category: "配电",
      excerpt: "一份分步检查清单,帮助你为数据中心项目确定合适的机架PDU规格。",
      readingTime: "6分钟阅读",
      body: [
        { heading: "1. 使电压电流与回路匹配", content: "确认上级回路的额定电压和电流(例如200-250V/32A三相),并选择与之匹配、留有负载增长余量的PDU规格。" },
        { heading: "2. 选择安装形式", content: "垂直(0U)安装适用于插座数量多、机架较深的场景;水平(1U-2U)安装适用于浅型机架或插座需求较少的场景。" },
        { heading: "3. 确定监控与控制方式", content: "基础型PDU适用于无需报告的非关键负载;计量型/监控型PDU适用于需要跟踪用电情况的设施;可切换型PDU适用于需要远程断电重启的无人值守或远程场地。" },
        { heading: "4. 确认插座类型", content: "使插座类型(IEC C13/C19、特定国家标准或定制型)与所连接设备的电源线相匹配。" },
        { heading: "5. 规划冗余", content: "对于双电源输入设备,应规划来自独立电源的A/B两路PDU供电,以支持真正的冗余。" },
      ],
      faqs: [
        { question: "基础型PDU与计量型或监控型PDU有何区别？", answer: "基础型PDU仅分配电力。计量型PDU增加了本地电流/电压显示。监控型PDU增加了基于网络的远程监控。可切换型PDU则在监控基础上进一步增加了远程插座控制功能。" },
      ],
    },
  },
  "what-is-n-plus-1-redundancy": {
    ar: {
      title: "ما هو تكرار N+1؟",
      category: "الطاقة الحرجة",
      excerpt: "شرح واضح لـN+1 و2N ومستويات التكرار الأخرى المستخدمة في تصميم طاقة مركز البيانات.",
      readingTime: "4 دقائق قراءة",
      body: [
        { heading: "N — خط الأساس", content: "يمثل \"N\" السعة المطلوبة فعلياً لدعم الحمل — على سبيل المثال، إذا احتاجت منشأة 3 وحدات UPS لحمل تكنولوجيا معلوماتها، فإن N = 3." },
        { heading: "N+1", content: "يضيف N+1 وحدة إضافية واحدة بخلاف N، بحيث لا يؤدي فشل وحدة أو جهاز واحد إلى انقطاع الطاقة عن الحمل — باستخدام المثال أعلاه، يعني N+1 تركيب 4 وحدات UPS لدعم حمل من 3 وحدات." },
        { heading: "2N و2N+1", content: "يكرر 2N مسار الطاقة بالكامل — نظامان مستقلان تماماً، كل منهما بحجم الحمل الكامل — للمنشآت التي لا يمكنها تحمل أي نقطة فشل واحدة. يضيف 2N+1 وحدة تكرار إضافية فوق ذلك." },
      ],
      faqs: [
        { question: "هل تصمم واندتونغ أنظمة وفق مستوى تكرار محدد؟", answer: "تصمم واندتونغ بنية الطاقة وفق مستوى التكرار (N، N+1، 2N) المحدد للمشروع — يجعل UPS المعياري ومفاتيح تحويل ATS/STS تنفيذ التكرار على مستوى الوحدة أو النظام أو المسار الكامل أمراً عملياً." },
      ],
    },
    fr: {
      title: "Qu'est-ce que la redondance N+1 ?",
      category: "Alimentation critique",
      excerpt: "Une explication claire de N+1, 2N et autres niveaux de redondance utilisés dans la conception d'alimentation de centre de données.",
      readingTime: "4 min de lecture",
      body: [
        { heading: "N — La référence", content: "« N » représente la capacité réellement nécessaire pour supporter la charge — par exemple, si une installation a besoin de 3 modules d'onduleur pour porter sa charge informatique, N = 3." },
        { heading: "N+1", content: "N+1 ajoute une unité supplémentaire au-delà de N, de sorte qu'une seule défaillance de module ou d'unité n'interrompt pas l'alimentation de la charge — en utilisant l'exemple ci-dessus, N+1 signifierait 4 modules d'onduleur installés pour supporter une charge de 3 modules." },
        { heading: "2N et 2N+1", content: "2N duplique l'intégralité du chemin d'alimentation — deux systèmes entièrement indépendants, chacun dimensionné pour la charge complète — pour les installations qui ne peuvent tolérer aucun point de défaillance unique. 2N+1 ajoute un module de redondance supplémentaire par-dessus." },
      ],
      faqs: [
        { question: "Wandtung conçoit-il des systèmes selon un niveau de redondance spécifique ?", answer: "Wandtung conçoit l'architecture d'alimentation selon le niveau de redondance (N, N+1, 2N) spécifié par le projet — l'onduleur modulaire et la commutation de transfert ATS/STS rendent pratique la mise en œuvre de la redondance au niveau du module, du système ou du chemin complet." },
      ],
    },
    es: {
      title: "¿Qué es la redundancia N+1?",
      category: "Energía crítica",
      excerpt: "Una explicación clara de N+1, 2N y otros niveles de redundancia utilizados en el diseño de energía de centros de datos.",
      readingTime: "4 min de lectura",
      body: [
        { heading: "N: la línea base", content: "«N» representa la capacidad realmente necesaria para soportar la carga; por ejemplo, si una instalación necesita 3 módulos de SAI para soportar su carga de TI, N = 3." },
        { heading: "N+1", content: "N+1 añade una unidad adicional más allá de N, de modo que el fallo de un solo módulo o unidad no interrumpe la energía a la carga; usando el ejemplo anterior, N+1 significaría 4 módulos de SAI instalados para soportar una carga de 3 módulos." },
        { heading: "2N y 2N+1", content: "2N duplica toda la ruta de energía —dos sistemas totalmente independientes, cada uno dimensionado para la carga completa— para instalaciones que no pueden tolerar ningún punto único de fallo. 2N+1 añade un módulo adicional de redundancia sobre eso." },
      ],
      faqs: [
        { question: "¿Diseña Wandtung sistemas según un nivel de redundancia específico?", answer: "Wandtung diseña la arquitectura de energía según el nivel de redundancia (N, N+1, 2N) especificado por el proyecto; el SAI modular y la conmutación de transferencia ATS/STS hacen práctico implementar la redundancia a nivel de módulo, sistema o ruta completa." },
      ],
    },
    ru: {
      title: "Что такое резервирование N+1?",
      category: "Критическое питание",
      excerpt: "Понятное объяснение N+1, 2N и других уровней резервирования, используемых при проектировании электропитания ЦОД.",
      readingTime: "4 мин на чтение",
      body: [
        { heading: "N — базовый уровень", content: "«N» представляет собой мощность, фактически необходимую для поддержки нагрузки — например, если объекту требуется 3 модуля ИБП для несения ИТ-нагрузки, N = 3." },
        { heading: "N+1", content: "N+1 добавляет одну дополнительную единицу сверх N, так что отказ одного модуля или устройства не прерывает питание нагрузки — используя приведённый выше пример, N+1 означало бы установку 4 модулей ИБП для поддержки нагрузки в 3 модуля." },
        { heading: "2N и 2N+1", content: "2N дублирует весь путь питания — две полностью независимые системы, каждая рассчитана на полную нагрузку — для объектов, которые не могут допустить ни одной единой точки отказа. 2N+1 добавляет дополнительный модуль резервирования сверх этого." },
      ],
      faqs: [
        { question: "Проектирует ли Wandtung системы под конкретный уровень резервирования?", answer: "Wandtung проектирует архитектуру питания под уровень резервирования (N, N+1, 2N), указанный проектом — модульные ИБП и переключение ATS/STS делают практичной реализацию резервирования на уровне модуля, системы или всего пути." },
      ],
    },
    zh: {
      title: "什么是N+1冗余？",
      category: "关键电力",
      excerpt: "清晰解读数据中心电力设计中使用的N+1、2N等冗余等级。",
      readingTime: "4分钟阅读",
      body: [
        { heading: "N——基准值", content: "“N”代表支持负载实际所需的容量——例如,若某设施需要3台UPS模块来承载其IT负载,则N=3。" },
        { heading: "N+1", content: "N+1是在N的基础上额外增加一台设备,使单个模块或设备故障不会中断对负载的供电——沿用上例,N+1意味着安装4台UPS模块以支持3模块的负载。" },
        { heading: "2N与2N+1", content: "2N对整条电力路径进行复制——两套完全独立的系统,每套均按满负载容量配置——适用于不能容忍任何单点故障的设施。2N+1则在此基础上再增加一个冗余模块。" },
      ],
      faqs: [
        { question: "万电通是否按特定冗余等级设计系统？", answer: "万电通根据项目所规定的冗余等级(N、N+1、2N)设计电力架构——模块化UPS及ATS/STS切换开关使得在模块级、系统级或全路径级实现冗余变得切实可行。" },
      ],
    },
  },
};

export function getArticleContent<T extends ArticleContent>(
  slug: string,
  locale: Locale,
  fallback: T
): ArticleContent {
  if (locale === "en") return fallback;
  return articleContentTranslations[slug]?.[locale as TranslatedLocale] ?? fallback;
}

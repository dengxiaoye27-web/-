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
  "what-is-intelligent-pdu": {
    ar: {
      title: "ما هو PDU الذكي؟ دليل عملي لمشتري مراكز البيانات",
      category: "توزيع الطاقة",
      excerpt: "تعرّف على ماهية PDU الذكي، والفرق بين وحدات PDU المقاسة والمراقبة والقابلة للتبديل، ومتى يحتاج مركز البيانات إليها. دليل عملي من مصنّع لوحدات PDU.",
      readingTime: "6 دقائق قراءة",
      body: [
        { heading: "نظرة عامة", content: "يحتاج كل راك في مركز البيانات إلى طاقة موزعة بشكل نظيف وآمن وبطريقة يمكن للمشغلين رؤيتها والتحكم بها فعلياً. هذه هي مهمة PDU (وحدة توزيع الطاقة). لكن ليست جميع وحدات PDU متساوية. تقوم وحدة PDU الأساسية بتقسيم مدخل واحد إلى عدة مخارج فقط. أما PDU الذكي فيقوم بذلك ويضيف إليه القياس والمراقبة، وفي بعض الحالات التحكم عن بُعد بالطاقة على مستوى كل راك. إذا كنت تشتري وحدات توزيع طاقة لمركز بيانات أو غرفة اتصالات أو موقع طرفي، فإن فهم أين تنتهي وحدة PDU الأساسية وأين يبدأ PDU الذكي سيوفر عليك المال في الرفوف التي لا تحتاج إليه، ويمنع النقاط العمياء في الرفوف التي تحتاجه." },
        { heading: "ما الذي يعنيه \"الذكي\" فعلياً", content: "تُستخدم كلمة \"ذكي\" بشكل فضفاض من قبل الموردين. من الناحية العملية، تشير إلى أي PDU للراك يرسل بيانات أو يقبل أوامر عن بُعد عبر اتصال شبكي. وبإزالة الجانب التسويقي، هناك ثلاثة مستويات فعلية من القدرات تُضاف فوق الوحدة الأساسية. يقيس PDU المقاس التيار والجهد واستهلاك الطاقة ويعرضه — إما على شاشة رقمية محلية في الوحدة أو عبر الشبكة — وهو نقطة الدخول إلى \"الذكاء\"، حيث يجيب عن مقدار الحمل الفعلي على الراك حالياً. يأخذ PDU المراقَب (المتصل بالشبكة) هذا القياس ويرسله إلى الشبكة بحيث يمكن قراءته عن بُعد عبر SNMP أو واجهة ويب أو منصة DCIM، مما يتيح للمشغلين رؤية طاقة كل راك من لوحة تحكم واحدة وتحديد عتبات التنبيه بدلاً من التجول في الموقع بجهاز قياس. يضيف PDU القابل للتبديل تحكماً عن بُعد بالمخارج الفردية — يمكن للمشغل إعادة تشغيل خادم متجمد، أو ترتيب تشغيل المعدات بالتسلسل بعد انقطاع الطاقة، أو قفل المخارج غير المستخدمة، كل ذلك دون إرسال شخص إلى الموقع، وهو أمر بالغ الأهمية للمنشآت غير المأهولة والعقد الطرفية البعيدة. تتضمن المستويات الأعلى كل ما دونها: فـPDU القابل للتبديل هو أيضاً مقاس ومراقَب." },
        { heading: "لماذا تُعد وحدات PDU الذكية مهمة للرفوف عالية الكثافة والذكاء الاصطناعي", content: "كانت رفوف المؤسسات التقليدية تستهلك بضعة كيلوواطات فقط. أما أحمال الذكاء الاصطناعي ووحدات معالجة الرسوميات فتدفع الرفوف الفردية نحو 30 أو 50 أو حتى 100 كيلوواط. عند هذه الكثافة، يتغير أمران. أولاً، يتقلص هامش الخطأ في الطاقة — فالراك الذي يعمل قرب حد الدائرة الكهربائية يحتاج إلى قياس مستمر، لا إلى فحص شهري عرضي. ثانياً، ترتفع تكلفة التوقف عن العمل، ولذلك تُسدد إعادة التشغيل عن بُعد والتحكم على مستوى المخرج تكلفتها بسرعة. لهذا السبب انتقلت وحدات PDU الذكية من كونها \"ميزة إضافية\" إلى مواصفة قياسية في مباني مراكز البيانات الحديثة عالية الكثافة والذكاء الاصطناعي. كما تُغذّي بيانات الطاقة الدقيقة لكل راك تخطيط السعة: فلا يمكنك ملء صف من الرفوف بأمان إن كنت لا تعرف ما يستهلكه كل راك فعلياً." },
        { heading: "هل تحتاج إلى واحدة في كل راك؟", content: "لا — وسيخبرك المورد الجيد بذلك. يجمع النهج المعقول بين المستويات: وحدات PDU أساسية أو مقاسة على الرفوف منخفضة الكثافة والمستقرة حيث نادراً ما يتغير الحمل؛ ووحدات PDU مراقَبة في أرضية الإنتاج الرئيسية حيث تقود الرؤية قرارات السعة؛ ووحدات PDU قابلة للتبديل على الرفوف البعيدة أو غير المأهولة أو الحرجة حيث يتجنب التحكم عن بُعد زيارات موقع مكلفة. مطابقة مستوى PDU لدور الراك يضبط التكلفة دون خلق نقاط عمياء في المراقبة." },
        { heading: "المواصفات الرئيسية التي يجب التحقق منها قبل الشراء", content: "عند مقارنة وحدات PDU للراك، انظر إلى ما هو أبعد من عدد المخارج وتحقق من: نوع القابس المدخل ومعيار المخرج — Schuko (أوروبي/CEE)، أو NEMA (أمريكا الشمالية)، أو IEC، أو مزيج منها، بما يتوافق مع المنطقة والمعدات التي يغذيها؛ التيار والجهد المقننين، اللذين يجب أن يتجاوزا بشكل مريح ذروة حمل الراك مع هامش أمان؛ الشكل الفيزيائي — 1U أفقي، أو zero-U عمودي يُركّب في القناة الجانبية للراك لتوفير المساحة؛ دقة القياس — بدرجة الفوترة (±1%) إذا كنت تفوتر المستأجرين مقابل الطاقة؛ بروتوكول الشبكة — توافق SNMP وHTTP/HTTPS وDCIM للوحدات المراقَبة والقابلة للتبديل؛ والحماية من الطفرات الكهربائية (SPD)، وهي مهمة في المناطق ذات إمداد الشبكة غير المستقر." },
        { heading: "وحدات PDU للراك من WANDTUNG", content: "تصنّع WANDTUNG وحدات PDU للراك عبر جميع المستويات الذكية الثلاثة — المقاسة والمراقَبة والقابلة للتبديل — بتكوينات مخارج Schuko وNEMA ومتعددة المعايير العالمية للأسواق الأوروبية وأمريكا الشمالية والعالمية. تتوفر الوحدات بأشكال 1U أفقي وzero-U عمودي، مع حماية اختيارية من الطفرات وتخصيص مباشر من المصنع (OEM/ODM) لنوع المخارج وعددها وواجهتها. إذا كنت تحدد مواصفات توزيع الطاقة لمشروع جديد أو توسعة، يمكن لفريق الهندسة لدينا مساعدتك في مطابقة مستويات PDU مع أدوار الرفوف لديك." },
      ],
      faqs: [
        { question: "ما الفرق بين PDU الأساسي وPDU الذكي؟", answer: "يوزّع PDU الأساسي الطاقة على عدة مخارج دون أي قياس. يضيف PDU الذكي القياس والمراقبة عبر الشبكة، وفي الطرازات القابلة للتبديل، تحكماً عن بُعد بالمخارج." },
        { question: "ماذا يقيس PDU المقاس؟", answer: "التيار والجهد واستهلاك الطاقة، معروضة على شاشة محلية أو عبر الشبكة، بحيث يمكن للمشغلين تتبع حمل الراك مقابل سعة الدائرة الكهربائية." },
        { question: "متى يجب استخدام PDU قابل للتبديل؟", answer: "على الرفوف البعيدة أو غير المأهولة أو الحرجة، حيث تتجنب القدرة على إعادة تشغيل المعدات عن بُعد والتحكم بالمخارج الفردية زيارات الموقع وتُقصّر وقت التعافي." },
        { question: "هل وحدات PDU الذكية ضرورية لمراكز بيانات الذكاء الاصطناعي؟", answer: "عند كثافات الرفوف العالية النموذجية لأحمال الذكاء الاصطناعي ووحدات معالجة الرسوميات، تصبح رؤية الطاقة على مستوى كل راك والتحكم عن بُعد أمرين أساسيين للسلامة وتخطيط السعة، مما يجعل وحدات PDU الذكية مواصفة قياسية." },
      ],
    },
    fr: {
      title: "Qu'est-ce qu'un PDU intelligent ? Guide pratique pour les acheteurs de data centers",
      category: "Distribution électrique",
      excerpt: "Découvrez ce qu'est un PDU intelligent, en quoi les PDU mesurés, surveillés et commutés diffèrent, et quand votre data center en a besoin. Un guide pratique par un fabricant de PDU.",
      readingTime: "6 min de lecture",
      body: [
        { heading: "Vue d'ensemble", content: "Chaque rack d'un data center a besoin d'une alimentation distribuée proprement, en toute sécurité, et d'une manière que les opérateurs peuvent réellement voir et contrôler. C'est le rôle du PDU (unité de distribution électrique). Mais tous les PDU ne se valent pas. Un PDU basique se contente de répartir une entrée vers plusieurs prises. Un PDU intelligent fait cela et ajoute la mesure, la surveillance et, dans certains cas, le contrôle à distance de l'alimentation de chaque rack. Si vous approvisionnez la distribution électrique d'un data center, d'une salle télécom ou d'un site périphérique, comprendre où s'arrête un PDU basique et où commence un PDU intelligent vous fera économiser de l'argent sur les racks qui n'en ont pas besoin et évitera les angles morts sur ceux qui en ont besoin." },
        { heading: "Ce que « intelligent » signifie réellement", content: "Le mot « intelligent » est utilisé de façon assez large par les fournisseurs. En pratique, il désigne tout PDU de rack qui transmet des données ou accepte des commandes à distance via une connexion réseau. En écartant le marketing, il existe trois niveaux de capacités réels superposés à l'unité de base. Un PDU mesuré mesure le courant, la tension et la puissance consommée et l'affiche — soit sur un écran numérique local sur l'unité, soit via le réseau — le point d'entrée vers « l'intelligence », répondant à la question de la charge réelle actuellement sur un rack. Un PDU surveillé (en réseau) prend cette mesure et la transmet sur le réseau afin qu'elle puisse être lue à distance via SNMP, une interface web ou une plateforme DCIM, permettant aux opérateurs de voir l'alimentation de chaque rack depuis un seul tableau de bord et de définir des seuils d'alerte au lieu de parcourir la salle avec une pince ampèremétrique. Un PDU commuté ajoute le contrôle à distance des prises individuelles — un opérateur peut redémarrer un serveur bloqué, séquencer le démarrage des équipements après une coupure, ou verrouiller les prises inutilisées, le tout sans envoyer quelqu'un sur site, ce qui compte le plus pour les installations non surveillées et les nœuds périphériques distants. Les niveaux supérieurs incluent tout ce qui est en dessous : un PDU commuté est aussi mesuré et surveillé." },
        { heading: "Pourquoi les PDU intelligents comptent pour l'IA et les racks à haute densité", content: "Les racks d'entreprise traditionnels consommaient quelques kilowatts. Les charges de travail IA et GPU poussent des racks individuels vers 30, 50, voire 100 kW. À cette densité, deux choses changent. Premièrement, la marge d'erreur sur l'alimentation se réduit — un rack fonctionnant près de la limite de son circuit a besoin d'une mesure continue, pas d'un contrôle ponctuel mensuel. Deuxièmement, le coût des interruptions augmente, donc le redémarrage à distance et le contrôle au niveau des prises s'amortissent rapidement. C'est pourquoi les PDU intelligents sont passés du statut de « plus » à celui de spécification standard dans les data centers modernes à haute densité et dédiés à l'IA. Des données de puissance précises par rack alimentent aussi la planification de capacité : vous ne pouvez pas remplir une rangée en toute sécurité si vous ne savez pas ce que chaque rack consomme réellement." },
        { heading: "En avez-vous besoin sur chaque rack ?", content: "Non — et un bon fournisseur vous le dira. Une approche sensée mélange les niveaux : des PDU basiques ou mesurés sur les racks stables à faible densité où la charge change rarement ; des PDU surveillés sur l'ensemble de la zone de production principale où la visibilité guide les décisions de capacité ; et des PDU commutés sur les racks distants, non surveillés ou critiques où le contrôle à distance évite des déplacements coûteux sur site. Adapter le niveau de PDU au rôle du rack maîtrise les coûts sans créer d'angles morts de surveillance." },
        { heading: "Spécifications clés à vérifier avant d'acheter", content: "Lors de la comparaison de PDU de rack, regardez au-delà du nombre de prises et confirmez : la norme de la fiche d'entrée et des prises de sortie — Schuko (européen/CEE), NEMA (Amérique du Nord), IEC, ou un mélange, adaptée à la région et à l'équipement alimenté ; le courant et la tension nominaux, qui doivent dépasser confortablement la charge de pointe du rack avec une marge ; le facteur de forme — 1U horizontal, ou zéro-U vertical monté dans le rail latéral du rack pour économiser de l'espace ; la précision de mesure — de qualité facturation (±1 %) si vous facturez l'électricité aux locataires ; le protocole réseau — compatibilité SNMP, HTTP/HTTPS et DCIM pour les unités surveillées et commutées ; et la protection contre les surtensions (parafoudre), importante dans les régions où le réseau électrique est instable." },
        { heading: "Les PDU de rack WANDTUNG", content: "WANDTUNG fabrique des PDU de rack sur les trois niveaux intelligents — mesuré, surveillé et commuté — dans des configurations de prises Schuko, NEMA et multi-normes universelles pour les marchés européen, nord-américain et mondial. Les unités sont disponibles en formats 1U horizontal et zéro-U vertical, avec protection contre les surtensions en option et personnalisation OEM/ODM directe d'usine du type, du nombre et de l'interface des prises. Si vous spécifiez la distribution électrique pour une nouvelle construction ou une extension, notre équipe d'ingénierie peut vous aider à adapter les niveaux de PDU aux rôles de vos racks." },
      ],
      faqs: [
        { question: "Quelle est la différence entre un PDU basique et un PDU intelligent ?", answer: "Un PDU basique distribue l'alimentation vers plusieurs prises sans aucune mesure. Un PDU intelligent ajoute la mesure, la surveillance réseau et, sur les modèles commutés, le contrôle à distance des prises." },
        { question: "Que mesure un PDU mesuré ?", answer: "Le courant, la tension et la consommation d'énergie, affichés sur un écran local ou via le réseau, permettant aux opérateurs de suivre la charge du rack par rapport à la capacité du circuit." },
        { question: "Quand utiliser un PDU commuté ?", answer: "Sur les racks distants, non surveillés ou critiques, où la possibilité de redémarrer les équipements à distance et de contrôler les prises individuelles évite les déplacements sur site et raccourcit le temps de reprise." },
        { question: "Les PDU intelligents sont-ils nécessaires pour les data centers IA ?", answer: "Aux densités de rack élevées typiques des charges de travail IA et GPU, la visibilité de la puissance par rack et le contrôle à distance deviennent essentiels pour la sécurité et la planification de capacité, faisant des PDU intelligents une spécification standard." },
      ],
    },
    es: {
      title: "¿Qué es un PDU inteligente? Guía práctica para compradores de centros de datos",
      category: "Distribución de energía",
      excerpt: "Descubra qué es un PDU inteligente, en qué se diferencian los PDU medidos, monitoreados y conmutados, y cuándo su centro de datos necesita uno. Una guía práctica de un fabricante de PDU.",
      readingTime: "6 min de lectura",
      body: [
        { heading: "Descripción general", content: "Cada rack en un centro de datos necesita energía distribuida de forma limpia, segura y de manera que los operadores puedan realmente ver y controlar. Esa es la función del PDU (unidad de distribución de energía). Pero no todos los PDU son iguales. Un PDU básico simplemente divide una entrada en varias tomas. Un PDU inteligente hace eso y añade medición, monitoreo y, en algunos casos, control remoto de la energía en cada rack. Si está adquiriendo distribución de energía para un centro de datos, una sala de telecomunicaciones o un sitio de borde, entender dónde termina un PDU básico y dónde comienza un PDU inteligente le ahorrará dinero en los racks que no lo necesitan y evitará puntos ciegos en los que sí lo necesitan." },
        { heading: "Lo que 'inteligente' realmente significa", content: "La palabra 'inteligente' se usa de forma imprecisa por los proveedores. En la práctica, se refiere a cualquier PDU de rack que reporta datos o acepta comandos remotos a través de una conexión de red. Eliminando el marketing, hay tres niveles reales de capacidad superpuestos a la unidad básica. Un PDU medido mide corriente, voltaje y consumo de energía y lo muestra —ya sea en una pantalla digital local en la unidad o a través de la red— el punto de entrada a lo 'inteligente', respondiendo cuánta carga hay realmente en un rack en este momento. Un PDU monitoreado (en red) toma esa medición y la envía a la red para que pueda leerse de forma remota mediante SNMP, una interfaz web o una plataforma DCIM, permitiendo a los operadores ver la energía de cada rack desde un solo panel y establecer umbrales de alerta en lugar de recorrer la sala con una pinza amperimétrica. Un PDU conmutado añade control remoto de tomas individuales: un operador puede reiniciar un servidor colgado, secuenciar el encendido de equipos tras un corte, o bloquear tomas no utilizadas, todo sin enviar a alguien al sitio, lo cual es crucial para instalaciones desatendidas y nodos de borde remotos. Los niveles superiores incluyen todo lo inferior: un PDU conmutado también es medido y monitoreado." },
        { heading: "Por qué los PDU inteligentes importan para la IA y los racks de alta densidad", content: "Los racks empresariales tradicionales consumían unos pocos kilovatios. Las cargas de trabajo de IA y GPU llevan racks individuales hacia 30, 50 e incluso 100 kW. A esa densidad, cambian dos cosas. Primero, el margen de error en la energía se reduce: un rack que opera cerca del límite de su circuito necesita medición continua, no una revisión puntual mensual. Segundo, el costo del tiempo de inactividad aumenta, por lo que el reinicio remoto y el control a nivel de toma se amortizan rápidamente. Por eso los PDU inteligentes han pasado de ser 'agradables de tener' a ser una especificación estándar en las construcciones modernas de centros de datos de alta densidad e IA. Los datos precisos de energía por rack también alimentan la planificación de capacidad: no se puede llenar una fila de forma segura si no se sabe qué está consumiendo realmente cada rack." },
        { heading: "¿Necesita uno en cada rack?", content: "No, y un buen proveedor se lo dirá. Un enfoque sensato combina niveles: PDU básicos o medidos en racks estables de baja densidad donde la carga rara vez cambia; PDU monitoreados en toda la planta de producción principal donde la visibilidad impulsa las decisiones de capacidad; y PDU conmutados en racks remotos, no atendidos o de misión crítica donde el control remoto evita costosas visitas al sitio. Adaptar el nivel de PDU al rol del rack controla el costo sin crear puntos ciegos de monitoreo." },
        { heading: "Especificaciones clave a verificar antes de comprar", content: "Al comparar PDU de rack, mire más allá del número de tomas y confirme: el estándar del enchufe de entrada y de las tomas de salida —Schuko (europeo/CEE), NEMA (Norteamérica), IEC, o una combinación, adaptado a la región y al equipo que alimenta; la corriente y el voltaje nominales, que deben superar cómodamente la carga máxima del rack con margen; el factor de forma —1U horizontal, o cero-U vertical montado en el canal lateral del rack para ahorrar espacio; la precisión de medición —de grado de facturación (±1%) si cobra a los inquilinos por la energía; el protocolo de red —compatibilidad SNMP, HTTP/HTTPS y DCIM para unidades monitoreadas y conmutadas; y la protección contra sobretensiones (SPD), importante en regiones con red eléctrica inestable." },
        { heading: "PDU de rack WANDTUNG", content: "WANDTUNG fabrica PDU de rack en los tres niveles inteligentes —medido, monitoreado y conmutado— en configuraciones de tomas Schuko, NEMA y multiestándar universal para los mercados europeo, norteamericano y global. Las unidades están disponibles en formatos 1U horizontal y cero-U vertical, con protección contra sobretensiones opcional y personalización OEM/ODM directa de fábrica del tipo, cantidad e interfaz de las tomas. Si está especificando la distribución de energía para una nueva construcción o expansión, nuestro equipo de ingeniería puede ayudarle a adaptar los niveles de PDU a los roles de sus racks." },
      ],
      faqs: [
        { question: "¿Cuál es la diferencia entre un PDU básico y un PDU inteligente?", answer: "Un PDU básico distribuye energía a varias tomas sin ninguna medición. Un PDU inteligente añade medición, monitoreo en red y, en modelos conmutados, control remoto de tomas." },
        { question: "¿Qué mide un PDU medido?", answer: "Corriente, voltaje y consumo de energía, mostrados en una pantalla local o a través de la red, para que los operadores puedan rastrear la carga del rack frente a la capacidad del circuito." },
        { question: "¿Cuándo debo usar un PDU conmutado?", answer: "En racks remotos, no atendidos o críticos, donde la capacidad de reiniciar remotamente el equipo y controlar tomas individuales evita visitas al sitio y acorta el tiempo de recuperación." },
        { question: "¿Son necesarios los PDU inteligentes para los centros de datos de IA?", answer: "En las altas densidades de rack típicas de las cargas de trabajo de IA y GPU, la visibilidad de energía por rack y el control remoto se vuelven esenciales para la seguridad y la planificación de capacidad, convirtiendo a los PDU inteligentes en una especificación estándar." },
      ],
    },
    ru: {
      title: "Что такое интеллектуальный PDU? Практическое руководство для покупателей дата-центров",
      category: "Распределение питания",
      excerpt: "Узнайте, что такое интеллектуальный PDU, чем отличаются измерительные, контролируемые и коммутируемые стоечные PDU, и когда он нужен вашему дата-центру. Практическое руководство от производителя PDU.",
      readingTime: "6 мин на чтение",
      body: [
        { heading: "Обзор", content: "Каждая стойка в дата-центре нуждается в питании, подаваемом чисто, безопасно и таким образом, чтобы операторы могли действительно видеть и контролировать его. Это задача PDU (блока распределения питания). Но не все PDU одинаковы. Базовый PDU просто разделяет один вход на несколько розеток. Интеллектуальный PDU делает то же самое и добавляет измерение, мониторинг, а в некоторых случаях — удалённое управление питанием на уровне каждой стойки. Если вы закупаете распределение питания для дата-центра, телеком-помещения или периферийного объекта, понимание того, где заканчивается базовый PDU и начинается интеллектуальный, сэкономит деньги на стойках, которым он не нужен, и предотвратит слепые зоны там, где он необходим." },
        { heading: "Что на самом деле означает «интеллектуальный»", content: "Слово «интеллектуальный» используется поставщиками довольно вольно. На практике оно относится к любому стоечному PDU, который передаёт данные или принимает удалённые команды по сетевому соединению. Отбросив маркетинг, можно выделить три реальных уровня возможностей, надстроенных над базовым блоком. Измерительный PDU измеряет ток, напряжение и потребляемую мощность и отображает их — либо на локальном цифровом дисплее устройства, либо по сети — это точка входа в «интеллектуальность», отвечающая на вопрос, какая нагрузка сейчас фактически на стойке. Контролируемый (сетевой) PDU берёт эти измерения и передаёт их в сеть, чтобы их можно было читать удалённо через SNMP, веб-интерфейс или платформу DCIM, позволяя операторам видеть питание каждой стойки с одной панели и устанавливать пороги оповещений вместо обхода зала с клещами-амперметром. Коммутируемый PDU добавляет удалённое управление отдельными розетками — оператор может перезагрузить зависший сервер, выстроить последовательность включения оборудования после сбоя питания или заблокировать неиспользуемые розетки — всё это без отправки человека на объект, что особенно важно для необслуживаемых объектов и удалённых периферийных узлов. Более высокие уровни включают всё нижестоящее: коммутируемый PDU также является измерительным и контролируемым." },
        { heading: "Почему интеллектуальные PDU важны для ИИ и стоек высокой плотности", content: "Традиционные корпоративные стойки потребляли несколько киловатт. Рабочие нагрузки ИИ и GPU выводят отдельные стойки на уровень 30, 50 и даже 100 кВт. При такой плотности меняются две вещи. Во-первых, сокращается допустимая погрешность по питанию — стойка, работающая близко к пределу цепи, нуждается в непрерывном измерении, а не в ежемесячной выборочной проверке. Во-вторых, растёт стоимость простоя, поэтому удалённая перезагрузка и управление на уровне розетки быстро окупаются. Именно поэтому интеллектуальные PDU перешли из категории «приятного дополнения» в стандартную спецификацию современных дата-центров высокой плотности и ИИ. Точные данные о питании по каждой стойке также используются для планирования мощности: нельзя безопасно заполнить ряд, не зная, что реально потребляет каждая стойка." },
        { heading: "Нужен ли он на каждой стойке?", content: "Нет — и хороший поставщик скажет вам об этом. Разумный подход сочетает уровни: базовые или измерительные PDU на стабильных стойках низкой плотности, где нагрузка редко меняется; контролируемые PDU по всему основному производственному залу, где видимость определяет решения о мощности; и коммутируемые PDU на удалённых, необслуживаемых или критически важных стойках, где удалённое управление избавляет от дорогостоящих выездов на объект. Соответствие уровня PDU роли стойки контролирует затраты, не создавая слепых зон мониторинга." },
        { heading: "Ключевые характеристики для проверки перед покупкой", content: "При сравнении стоечных PDU смотрите не только на количество розеток, но и проверяйте: стандарт входной вилки и выходных розеток — Schuko (европейский/CEE), NEMA (Северная Америка), IEC или комбинация, соответствующая региону и питаемому оборудованию; номинальный ток и напряжение, которые должны с запасом превышать пиковую нагрузку стойки; форм-фактор — 1U горизонтальный или zero-U вертикальный, устанавливаемый в боковом канале стойки для экономии места; точность измерения — расчётного класса (±1%), если вы выставляете арендаторам счета за электроэнергию; сетевой протокол — совместимость с SNMP, HTTP/HTTPS и DCIM для контролируемых и коммутируемых блоков; и защиту от перенапряжений (УЗИП), важную в регионах с нестабильным электроснабжением." },
        { heading: "Стоечные PDU WANDTUNG", content: "WANDTUNG производит стоечные PDU всех трёх интеллектуальных уровней — измерительные, контролируемые и коммутируемые — в конфигурациях розеток Schuko, NEMA и универсальных мультистандартных для европейского, североамериканского и мирового рынков. Блоки доступны в форм-факторах 1U горизонтальный и zero-U вертикальный, с опциональной защитой от перенапряжений и прямой заводской OEM/ODM-кастомизацией типа, количества и интерфейса розеток. Если вы определяете спецификацию распределения питания для нового объекта или расширения, наша инженерная команда поможет подобрать уровни PDU под роли ваших стоек." },
      ],
      faqs: [
        { question: "В чём разница между базовым и интеллектуальным PDU?", answer: "Базовый PDU распределяет питание на несколько розеток без какого-либо измерения. Интеллектуальный PDU добавляет измерение, сетевой мониторинг, а в коммутируемых моделях — удалённое управление розетками." },
        { question: "Что измеряет измерительный PDU?", answer: "Ток, напряжение и потребление энергии, отображаемые на локальном дисплее или по сети, что позволяет операторам отслеживать нагрузку стойки относительно ёмкости цепи." },
        { question: "Когда следует использовать коммутируемый PDU?", answer: "На удалённых, необслуживаемых или критически важных стойках, где возможность удалённой перезагрузки оборудования и управления отдельными розетками избавляет от выездов на объект и сокращает время восстановления." },
        { question: "Необходимы ли интеллектуальные PDU для дата-центров ИИ?", answer: "При высокой плотности стоек, типичной для рабочих нагрузок ИИ и GPU, видимость питания по каждой стойке и удалённое управление становятся необходимыми для безопасности и планирования мощности, что делает интеллектуальные PDU стандартной спецификацией." },
      ],
    },
    zh: {
      title: "什么是智能PDU？数据中心采购实用指南",
      category: "配电",
      excerpt: "了解智能PDU是什么、计量型、监控型与可切换型机架PDU有何区别，以及您的数据中心何时需要它。来自PDU制造商的实用指南。",
      readingTime: "6分钟阅读",
      body: [
        { heading: "概述", content: "数据中心中的每个机架都需要以清洁、安全的方式配电，并且运维人员要能够真正看到并控制它。这正是PDU（配电单元）的作用。但并非所有PDU都是一样的。基础型PDU只是将一路输入分配到多个插座。智能PDU在此基础上增加了计量、监控，在某些情况下还能对每个机架的电源进行远程控制。如果您正在为数据中心、电信机房或边缘站点采购配电设备，了解基础型PDU的边界与智能PDU的起点，将帮助您在不需要的机架上节省成本，并在需要的机架上避免监控盲区。" },
        { heading: "\"智能\"究竟意味着什么", content: "“智能”一词常被供应商宽泛使用。实际上，它指的是任何能够通过网络连接上报数据或接受远程指令的机架PDU。剥离营销说辞后，在基础单元之上实际存在三个能力层级。计量型PDU测量电流、电压和功耗并进行显示——可以是单元上的本地数字屏幕，也可以通过网络查看——这是通往“智能”的入口，回答了当前机架实际承载多少负载的问题。监控型（联网）PDU将这些计量数据推送至网络，使其可通过SNMP、网页界面或DCIM平台远程读取，让运维人员从一个仪表盘查看每个机架的电力状况并设置告警阈值，而无需带着钳形电流表巡视机房。可切换型PDU在此基础上增加了对单个插座的远程控制——运维人员可远程重启死机的服务器、在断电后按顺序启动设备，或锁定未使用的插座，全程无需派人到现场，这对无人值守设施和远程边缘节点尤为重要。更高层级涵盖其下所有层级的能力：可切换型PDU同时也具备计量与监控功能。" },
        { heading: "为何智能PDU对AI与高密度机架至关重要", content: "传统企业机架的功耗仅为几千瓦。而AI和GPU工作负载正将单个机架的功耗推向30、50甚至100千瓦。在这种密度下，两件事发生了变化。首先，电力容错空间大幅缩小——运行在电路极限附近的机架需要持续测量，而非每月一次的抽查。其次，停机成本急剧上升，因此远程电源循环和插座级控制能够很快收回成本。这正是智能PDU从“锦上添花”转变为现代高密度及AI数据中心标准配置的原因。精确的单机架电力数据同样支撑容量规划：如果不清楚每个机架的实际功耗，就无法安全地填满整排机架。" },
        { heading: "是否每个机架都需要一台？", content: "不需要——优秀的供应商也会这样告诉您。合理的做法是混合使用不同层级：在负载几乎不变的低密度稳定机架上使用基础型或计量型PDU；在主要生产区域使用监控型PDU，以数据可见性驱动容量决策；在远程、无人值守或关键任务机架上使用可切换型PDU，以远程控制避免高昂的现场维护成本。将PDU层级与机架角色相匹配，既能控制成本，又不会产生监控盲区。" },
        { heading: "购买前需核实的关键规格", content: "比较机架PDU时，不要只看插座数量，还需确认：输入插头与输出插座标准——Schuko（欧洲/CEE）、NEMA（北美）、IEC或混合类型，需与所在地区及所供电设备相匹配；额定电流与电压，须充分超出机架峰值负载并留有余量；外形结构——1U水平安装，或零U垂直安装于机架侧边通道以节省空间；计量精度——如需向租户按用电量计费，应选择计费级精度（±1%）；网络协议——监控型和可切换型单元需确认SNMP、HTTP/HTTPS及DCIM兼容性；以及浪涌保护（SPD），在电网供电不稳定的地区尤为重要。" },
        { heading: "WANDTUNG机架PDU", content: "WANDTUNG生产涵盖全部三个智能层级——计量型、监控型和可切换型——的机架PDU，提供Schuko、NEMA及多标准通用插座配置，面向欧洲、北美及全球市场。产品提供1U水平及零U垂直两种结构，可选配浪涌保护，并支持工厂直接OEM/ODM定制插座类型、数量及接口。如果您正在为新建或扩建项目确定配电方案，我们的工程团队可协助您为各机架角色匹配合适的PDU层级。" },
      ],
      faqs: [
        { question: "基础型PDU与智能PDU有什么区别？", answer: "基础型PDU仅将电力分配至多个插座，不具备任何计量功能。智能PDU增加了计量与网络监控功能，在可切换型号上还支持远程插座控制。" },
        { question: "计量型PDU测量哪些数据？", answer: "电流、电压和功耗，可通过本地显示屏或网络查看，帮助运维人员跟踪机架负载相对于电路容量的情况。" },
        { question: "什么情况下应使用可切换型PDU？", answer: "适用于远程、无人值守或关键任务机架，远程重启设备及控制单个插座的能力可避免现场维护并缩短恢复时间。" },
        { question: "AI数据中心是否必须使用智能PDU？", answer: "在AI和GPU工作负载典型的高机架密度下，单机架电力可视性与远程控制对安全和容量规划至关重要，这使智能PDU成为标准配置。" },
      ],
    },
  },
  "metered-vs-switched-pdu": {
    ar: {
      title: "PDU المقاس مقابل PDU القابل للتبديل: أيهما يحتاجه الراك لديك فعلاً؟",
      category: "توزيع الطاقة",
      excerpt: "PDU مقاس أم مراقَب أم قابل للتبديل — أيهما يحتاجه مركز البيانات لديك فعلاً؟ مقارنة واضحة للميزات والتكلفة وحالات الاستخدام من مصنّع لوحدات PDU.",
      readingTime: "4 دقائق قراءة",
      body: [
        { heading: "نظرة عامة", content: "\"مقاس\"، \"مراقَب\"، \"قابل للتبديل\" — تستخدم أوراق بيانات PDU للراك هذه المصطلحات وكأن المشترين يعرفون الفرق مسبقاً. لكنهم لا يعرفونه دائماً، واختيار المستوى الخاطئ مكلف في كلا الاتجاهين: فالمبالغة في التحديد تجعلك تدفع مقابل تحكم لا تستخدمه أبداً؛ والتقليل في التحديد يفقدك الرؤية أو الوصول عن بُعد الذي كنت تحتاجه. يوضح هذا الدليل بالضبط ما يميز كل مستوى وكيفية الاختيار." },
        { heading: "المستويات الأربعة لـPDU الراك، باختصار", content: "تقع وحدات PDU للراك على سلّم من القدرات، حيث تضيف كل درجة إلى ما دونها. توزّع وحدة PDU الأساسية الطاقة على عدة مخارج دون قياس ودون شبكة — موثوقة ورخيصة للرفوف المستقرة منخفضة الكثافة. يضيف PDU المقاس قياس التيار والجهد والطاقة، ويُعرض عادة على شاشة رقمية محلية في الوحدة — لا تزال تقرأها شخصياً، لكنك أخيراً تعرف الحمل الفعلي لكل راك مقابل حد قاطع الدائرة. يأخذ PDU المراقَب بيانات القياس نفسها إلى الشبكة، بحيث تقرأ كل راك عن بُعد عبر SNMP أو صفحة ويب أو لوحة تحكم DCIM، وتضبط التنبيهات بدلاً من التجول في الموقع. يضيف PDU القابل للتبديل تحكماً عن بُعد بالمخارج الفردية فوق المراقبة الكاملة — إعادة تشغيل خادم متجمد، ترتيب التشغيل بالتسلسل بعد انقطاع الطاقة، أو تعطيل المخارج غير المستخدمة، كل ذلك عن بُعد." },
        { heading: "المقاس مقابل القابل للتبديل: الفرق الجوهري", content: "الفرق الوحيد الأهم هو القراءة مقابل التحكم. يخبرك PDU المقاس بما يحدث — مقدار الطاقة التي يستهلكها الراك — وهو تدفق أحادي الاتجاه للمعلومات، مثالي عندما يكون هدفك الرؤية وتخطيط السعة: معرفة مدى امتلاء الراك، ومدى قربه من حد الدائرة، وكيف يتغير الحمل بمرور الوقت. يتيح لك PDU القابل للتبديل التصرف بناءً عليه — تشغيل وإيقاف المخارج عن بُعد، وهو تحكم ثنائي الاتجاه يبرر سعره الأعلى فقط عندما يضطر شخص ما بخلاف ذلك لزيارة الراك فعلياً: إعادة تشغيل معدات متجمدة، أو ترتيب تسلسلات التشغيل، أو تأمين المخارج في منشأة مشتركة. إذا لم يكن أحد بحاجة أبداً إلى قطع الطاقة عن بُعد لمخرج معين، فأنت تدفع مقابل قدرة PDU القابل للتبديل دون استخدامها. وإذا كان فريقك يذهب حالياً إلى الموقع فقط لإعادة تشغيل جهاز، فإن PDU القابل للتبديل يسدد تكلفته بسرعة." },
        { heading: "طريقة بسيطة للاختيار", content: "طابق مستوى PDU مع دور الراك، لا مع سياسة عامة شاملة. الرفوف المستقرة منخفضة الكثافة حيث نادراً ما يتغير الحمل تحتاج فقط إلى PDU أساسي أو مقاس — قراءة حمل، لا لوحة تحكم. أما أرضية الإنتاج الرئيسية، مع تخطيط السعة النشط، فتتطلب PDU مراقَب، حيث تقود الرؤية عن بُعد عبر كل راك قرارات الملء والتنبيه. تحتاج المواقع البعيدة والعقد الطرفية غير المأهولة والرفوف الحرجة إلى PDU قابل للتبديل، حيث تتجنب إعادة التشغيل عن بُعد زيارات الموقع المكلفة والبطيئة. تحتاج بيئات الاستضافة المشتركة متعددة المستأجرين التي تفوتر الطاقة إلى PDU مقاس أو مراقَب بدقة درجة الفوترة (±1%). تمزج معظم مراكز البيانات الفعلية بين المستويات عبر الأرضية — وهذه هي الإجابة الأكثر كفاءة من حيث التكلفة، وليست تنازلاً." },
        { heading: "لا تنسَ المواصفات الفيزيائية", content: "أياً كان المستوى الذي تختاره، لا تزال الأساسيات يجب أن تطابق موقعك: معيار المخرج — Schuko أو NEMA أو IEC أو عالمي، بما يتوافق مع المنطقة والمعدات؛ التيار/الجهد المقننان مع هامش فوق ذروة الحمل؛ الشكل الفيزيائي — 1U أفقي أو zero-U عمودي للحفاظ على مساحة الراك؛ الحماية من الطفرات للمناطق ذات الشبكة غير المستقرة؛ وبروتوكول الشبكة — تأكد من توافق SNMP/HTTPS/DCIM للوحدات المراقَبة والقابلة للتبديل." },
        { heading: "وحدات PDU من WANDTUNG عبر جميع المستويات", content: "تصنّع WANDTUNG وحدات PDU للراك المقاسة والمراقَبة والقابلة للتبديل بتكوينات Schuko وNEMA وعالمية متعددة المعايير، بأشكال 1U أفقي وzero-U عمودي. ولأننا مصنّع مباشر، يمكن تخصيص نوع المخارج وعددها والتيار المقنن والواجهة والحماية من الطفرات لمشروعك عبر OEM/ODM. إذا لم تكن متأكداً من المستوى المناسب لكل راك، سيساعدك مهندسونا في تحديده." },
      ],
      faqs: [
        { question: "ما الفرق الرئيسي بين PDU المقاس وPDU القابل للتبديل؟", answer: "يقيس PDU المقاس الطاقة ويعرضها (للقراءة فقط). يضيف PDU القابل للتبديل تحكماً عن بُعد بالمخارج الفردية، مما يتيح إعادة تشغيل المعدات دون زيارة الراك." },
        { question: "هل PDU المراقَب هو نفسه PDU المقاس؟", answer: "لا. يعرض PDU المقاس القراءات محلياً؛ بينما يضع PDU المراقَب تلك القراءات على الشبكة للعرض عن بُعد والتنبيه عبر SNMP أو منصة DCIM." },
        { question: "أي PDU هو الأفضل لموقع بعيد أو غير مأهول؟", answer: "PDU القابل للتبديل، لأن التحكم عن بُعد بالمخارج يتيح إعادة تشغيل المعدات وإدارة الطاقة دون زيارة الموقع." },
        { question: "هل أحتاج إلى نفس مستوى PDU على كل راك؟", answer: "عادة لا. يؤدي مزج المستويات — أساسي أو مقاس على الرفوف المستقرة، مراقَب في الأرضية الرئيسية، قابل للتبديل على الرفوف الحرجة أو البعيدة — إلى ضبط التكلفة مع الحفاظ على الرؤية حيث تهم." },
      ],
    },
    fr: {
      title: "PDU mesuré ou commuté : de quoi votre rack a-t-il réellement besoin ?",
      category: "Distribution électrique",
      excerpt: "PDU mesuré, surveillé ou commuté — de quoi votre data center a-t-il réellement besoin ? Une comparaison claire des fonctionnalités, du coût et des cas d'usage par un fabricant de PDU.",
      readingTime: "4 min de lecture",
      body: [
        { heading: "Vue d'ensemble", content: "« Mesuré », « surveillé », « commuté » — les fiches techniques des PDU de rack emploient ces termes comme si les acheteurs connaissaient déjà la différence. Ce n'est pas toujours le cas, et choisir le mauvais niveau coûte cher dans les deux sens : sur-spécifier, c'est payer pour un contrôle jamais utilisé ; sous-spécifier, c'est perdre la visibilité ou l'accès à distance dont vous aviez besoin. Ce guide expose exactement ce qui différencie les niveaux et comment choisir." },
        { heading: "Les quatre niveaux de PDU de rack, en bref", content: "Les PDU de rack se situent sur une échelle de capacités, chaque échelon ajoutant à celui du dessous. Un PDU basique distribue l'alimentation vers plusieurs prises sans mesure, sans réseau — fiable et économique pour les racks stables à faible densité. Un PDU mesuré ajoute la mesure du courant, de la tension et de la puissance, généralement affichée sur un écran numérique local de l'unité — vous la lisez toujours en personne, mais vous connaissez enfin la charge réelle de chaque rack par rapport à la limite de son disjoncteur. Un PDU surveillé transmet ces mêmes données de mesure sur le réseau, afin que vous puissiez lire chaque rack à distance via SNMP, une page web ou un tableau de bord DCIM, et définir des alertes au lieu de parcourir la salle. Un PDU commuté ajoute le contrôle à distance des prises individuelles en plus de la surveillance complète — redémarrer un serveur bloqué, séquencer le démarrage après une coupure, ou désactiver les prises inutilisées, le tout à distance." },
        { heading: "Mesuré vs commuté : la différence fondamentale", content: "La seule distinction qui compte vraiment est lecture contre contrôle. Un PDU mesuré vous indique ce qui se passe — combien de puissance le rack consomme — un flux d'information à sens unique, parfait lorsque votre objectif est la visibilité et la planification de capacité : savoir à quel point un rack est chargé, à quelle distance de la limite du circuit, et comment la charge évolue dans le temps. Un PDU commuté vous permet d'agir dessus — allumer et éteindre les prises à distance, un contrôle bidirectionnel qui ne justifie son prix plus élevé que lorsque quelqu'un devrait sinon se rendre physiquement au rack : redémarrer un équipement figé, organiser des séquences de mise sous tension, ou sécuriser des prises dans une installation partagée. Si personne n'aurait jamais besoin de couper à distance l'alimentation d'une prise spécifique, vous payez pour une capacité de PDU commuté sans l'utiliser. Si votre équipe se déplace actuellement sur un site juste pour redémarrer un appareil, un PDU commuté s'amortit rapidement." },
        { heading: "Une méthode simple pour choisir", content: "Adaptez le niveau de PDU au rôle du rack, pas à une politique générale. Les racks stables à faible densité, où la charge change rarement, n'ont besoin que d'un PDU basique ou mesuré — une lecture de charge, pas un tableau de bord. La zone de production principale, avec une planification de capacité active, nécessite un PDU surveillé, où la visibilité à distance sur chaque rack guide les décisions de remplissage et d'alerte. Les sites distants, les nœuds périphériques non surveillés et les racks critiques ont besoin d'un PDU commuté, où le redémarrage à distance évite des déplacements sur site coûteux et lents. Les environnements multi-locataires ou de colocation facturant l'électricité aux locataires ont besoin d'un PDU mesuré ou surveillé avec une précision de qualité facturation (±1 %). La plupart des data centers réels mélangent les niveaux sur l'ensemble de la salle — c'est la réponse la plus rentable, pas un compromis." },
        { heading: "N'oubliez pas les spécifications physiques", content: "Quel que soit le niveau choisi, les fondamentaux doivent toujours correspondre à votre site : norme de prise — Schuko, NEMA, IEC ou universelle, adaptée à la région et à l'équipement ; courant/tension nominaux avec marge au-dessus de la charge de pointe ; facteur de forme — 1U horizontal ou zéro-U vertical pour préserver l'espace du rack ; protection contre les surtensions pour les régions au réseau instable ; et protocole réseau — vérifiez la compatibilité SNMP/HTTPS/DCIM pour les unités surveillées et commutées." },
        { heading: "Les PDU de rack WANDTUNG à tous les niveaux", content: "WANDTUNG fabrique des PDU de rack mesurés, surveillés et commutés dans des configurations Schuko, NEMA et multi-normes universelles, en formats 1U horizontal et zéro-U vertical. Étant fabricant direct, le type de prise, le nombre, le courant nominal, l'interface et la protection contre les surtensions peuvent être personnalisés pour votre projet via OEM/ODM. Si vous ne savez pas quel niveau convient à quel rack, nos ingénieurs vous aideront à le déterminer." },
      ],
      faqs: [
        { question: "Quelle est la principale différence entre un PDU mesuré et un PDU commuté ?", answer: "Un PDU mesuré mesure et rapporte la puissance (lecture seule). Un PDU commuté ajoute le contrôle à distance des prises individuelles, permettant de redémarrer un équipement sans se rendre au rack." },
        { question: "Un PDU surveillé est-il identique à un PDU mesuré ?", answer: "Non. Un PDU mesuré affiche les relevés localement ; un PDU surveillé transmet ces relevés sur le réseau pour une visualisation et des alertes à distance via SNMP ou une plateforme DCIM." },
        { question: "Quel PDU convient le mieux à un site distant ou non surveillé ?", answer: "Un PDU commuté, car le contrôle à distance des prises permet de redémarrer les équipements et de gérer l'alimentation sans déplacement sur site." },
        { question: "Ai-je besoin du même niveau de PDU sur chaque rack ?", answer: "Généralement non. Mélanger les niveaux — basique ou mesuré sur les racks stables, surveillé sur la zone principale, commuté sur les racks critiques ou distants — maîtrise les coûts tout en préservant la visibilité là où elle compte." },
      ],
    },
    es: {
      title: "PDU medido o conmutado: ¿qué necesita realmente su rack?",
      category: "Distribución de energía",
      excerpt: "PDU medido, monitoreado o conmutado: ¿qué necesita realmente su centro de datos? Una comparación clara de características, costo y casos de uso de un fabricante de PDU.",
      readingTime: "4 min de lectura",
      body: [
        { heading: "Descripción general", content: "'Medido', 'monitoreado', 'conmutado': las hojas de datos de los PDU de rack utilizan estos términos como si los compradores ya conocieran la diferencia. No siempre es así, y elegir el nivel equivocado es costoso en ambos sentidos: sobreespecificar significa pagar por un control que nunca se usa; subespecificar significa perder la visibilidad o el acceso remoto que necesitaba. Esta guía explica exactamente qué diferencia a los niveles y cómo elegir." },
        { heading: "Los cuatro niveles de PDU de rack, en breve", content: "Los PDU de rack se sitúan en una escala de capacidades, cada peldaño se suma al anterior. Un PDU básico distribuye energía a varias tomas sin medición, sin red: fiable y económico para racks estables de baja densidad. Un PDU medido añade la medición de corriente, voltaje y potencia, normalmente mostrada en una pantalla digital local de la unidad: usted sigue leyéndola en persona, pero por fin conoce la carga real de cada rack frente al límite de su interruptor. Un PDU monitoreado lleva esos mismos datos de medición a la red, de modo que puede leer cada rack de forma remota a través de SNMP, una página web o un panel DCIM, y configurar alertas en lugar de recorrer la sala. Un PDU conmutado añade control remoto de tomas individuales además del monitoreo completo: reiniciar un servidor colgado, secuenciar el encendido tras un corte, o deshabilitar tomas no utilizadas, todo de forma remota." },
        { heading: "Medido vs conmutado: la diferencia esencial", content: "La única distinción que más importa es lectura frente a control. Un PDU medido le dice qué está pasando —cuánta energía consume el rack— un flujo de información unidireccional, perfecto cuando su objetivo es la visibilidad y la planificación de capacidad: saber cuán lleno está un rack, qué tan cerca está del límite del circuito, y cómo evoluciona la carga con el tiempo. Un PDU conmutado le permite actuar sobre ello —encender y apagar tomas de forma remota—, un control bidireccional que solo justifica su precio más alto cuando alguien tendría que visitar físicamente el rack: reiniciar equipos bloqueados, organizar secuencias de encendido, o asegurar tomas en una instalación compartida. Si nadie necesitara nunca cortar remotamente la energía de una toma específica, está pagando por una capacidad de PDU conmutado sin usarla. Si su equipo actualmente conduce hasta un sitio solo para reiniciar un dispositivo, un PDU conmutado se amortiza rápidamente." },
        { heading: "Una forma sencilla de elegir", content: "Adapte el nivel de PDU al rol del rack, no a una política general. Los racks estables de baja densidad, donde la carga rara vez cambia, solo necesitan un PDU básico o medido: una lectura de carga, no un panel. La planta de producción principal, con planificación de capacidad activa, requiere un PDU monitoreado, donde la visibilidad remota en cada rack impulsa las decisiones de ocupación y las alertas. Los sitios remotos, los nodos de borde no atendidos y los racks de misión crítica necesitan un PDU conmutado, donde el reinicio remoto evita visitas al sitio costosas y lentas. Los entornos multiinquilino o de colocation que facturan energía a los inquilinos necesitan un PDU medido o monitoreado con precisión de grado de facturación (±1%). La mayoría de los centros de datos reales combinan niveles en toda la planta: esa es la respuesta más rentable, no una concesión." },
        { heading: "No olvide las especificaciones físicas", content: "Sea cual sea el nivel elegido, los fundamentos deben seguir coincidiendo con su sitio: estándar de toma —Schuko, NEMA, IEC o universal, adaptado a la región y al equipo; corriente/voltaje nominales con margen sobre la carga máxima; factor de forma —1U horizontal o cero-U vertical para preservar espacio del rack; protección contra sobretensiones para regiones con red inestable; y protocolo de red —confirme la compatibilidad SNMP/HTTPS/DCIM para unidades monitoreadas y conmutadas." },
        { heading: "PDU de rack WANDTUNG en todos los niveles", content: "WANDTUNG fabrica PDU de rack medidos, monitoreados y conmutados en configuraciones Schuko, NEMA y multiestándar universal, en formatos 1U horizontal y cero-U vertical. Al ser fabricante directo, el tipo de toma, la cantidad, la corriente nominal, la interfaz y la protección contra sobretensiones pueden personalizarse para su proyecto mediante OEM/ODM. Si no está seguro de qué nivel se ajusta a cada rack, nuestros ingenieros le ayudarán a definirlo." },
      ],
      faqs: [
        { question: "¿Cuál es la principal diferencia entre un PDU medido y uno conmutado?", answer: "Un PDU medido mide y reporta la energía (solo lectura). Un PDU conmutado añade control remoto de tomas individuales, permitiendo reiniciar equipos sin visitar el rack." },
        { question: "¿Es un PDU monitoreado lo mismo que uno medido?", answer: "No. Un PDU medido muestra las lecturas localmente; un PDU monitoreado envía esas lecturas a la red para su visualización remota y alertas mediante SNMP o una plataforma DCIM." },
        { question: "¿Qué PDU es mejor para un sitio remoto o no atendido?", answer: "Un PDU conmutado, porque el control remoto de tomas permite reiniciar equipos y gestionar la energía sin necesidad de visitar el sitio." },
        { question: "¿Necesito el mismo nivel de PDU en cada rack?", answer: "Normalmente no. Combinar niveles —básico o medido en racks estables, monitoreado en la planta principal, conmutado en racks críticos o remotos— controla el costo manteniendo la visibilidad donde importa." },
      ],
    },
    ru: {
      title: "Измерительный или коммутируемый PDU: что на самом деле нужно вашей стойке?",
      category: "Распределение питания",
      excerpt: "Измерительный, контролируемый или коммутируемый стоечный PDU — что на самом деле нужно вашему дата-центру? Чёткое сравнение функций, стоимости и сценариев использования от производителя PDU.",
      readingTime: "4 мин на чтение",
      body: [
        { heading: "Обзор", content: "«Измерительный», «контролируемый», «коммутируемый» — в спецификациях стоечных PDU эти термины используются так, будто покупатели уже знают разницу. Это не всегда так, а выбор неверного уровня обходится дорого в обоих направлениях: избыточная спецификация означает оплату за управление, которым вы никогда не воспользуетесь; недостаточная — потерю видимости или удалённого доступа, которые были нужны. Это руководство точно объясняет, чем отличаются уровни и как выбрать." },
        { heading: "Четыре уровня стоечных PDU вкратце", content: "Стоечные PDU располагаются на лестнице возможностей, где каждая ступень добавляет к предыдущей. Базовый PDU распределяет питание на несколько розеток без измерения, без сети — надёжный и недорогой вариант для стабильных стоек низкой плотности. Измерительный PDU добавляет измерение тока, напряжения и мощности, обычно отображаемое на локальном цифровом дисплее устройства — вы всё ещё считываете это лично, но наконец знаете реальную нагрузку каждой стойки относительно предела автомата. Контролируемый PDU передаёт те же данные измерений в сеть, так что вы можете считывать каждую стойку удалённо через SNMP, веб-страницу или панель DCIM, и настраивать оповещения вместо обхода зала. Коммутируемый PDU добавляет удалённое управление отдельными розетками поверх полного мониторинга — перезагрузка зависшего сервера, выстраивание последовательности включения после сбоя питания или отключение неиспользуемых розеток, всё удалённо." },
        { heading: "Измерительный против коммутируемого: ключевое отличие", content: "Единственное различие, которое имеет наибольшее значение, — это чтение против управления. Измерительный PDU сообщает, что происходит — сколько энергии потребляет стойка — однонаправленный поток информации, идеальный, когда цель — видимость и планирование мощности: знать, насколько загружена стойка, насколько близко к пределу цепи и как нагрузка меняется со временем. Коммутируемый PDU позволяет действовать на основе этих данных — удалённо включать и выключать розетки, двунаправленное управление, которое оправдывает более высокую цену только тогда, когда иначе кому-то пришлось бы физически посетить стойку: перезагрузка зависшего оборудования, организация последовательностей включения или блокировка розеток в общей инфраструктуре. Если никому никогда не понадобится удалённо отключить питание конкретной розетки, вы платите за возможности коммутируемого PDU, не используя их. Если ваша команда сейчас ездит на объект только для перезагрузки устройства, коммутируемый PDU быстро окупается." },
        { heading: "Простой способ выбора", content: "Соотносите уровень PDU с ролью стойки, а не с единой политикой. Стабильным стойкам низкой плотности, где нагрузка редко меняется, нужен лишь базовый или измерительный PDU — показания нагрузки, а не панель мониторинга. Основной производственный зал с активным планированием мощности требует контролируемого PDU, где удалённая видимость по каждой стойке определяет решения о заполнении и оповещениях. Удалённым объектам, необслуживаемым периферийным узлам и критически важным стойкам нужен коммутируемый PDU, где удалённая перезагрузка избавляет от дорогостоящих и медленных выездов на объект. Мультиарендным или колокейшн-средам, выставляющим арендаторам счета за электроэнергию, нужен измерительный или контролируемый PDU с расчётной точностью (±1%). Большинство реальных дата-центров сочетают уровни по всему залу — это экономически эффективный ответ, а не компромисс." },
        { heading: "Не забывайте о физических характеристиках", content: "Какой бы уровень вы ни выбрали, основные параметры всё равно должны соответствовать вашему объекту: стандарт розетки — Schuko, NEMA, IEC или универсальный, соответствующий региону и оборудованию; номинальный ток/напряжение с запасом сверх пиковой нагрузки; форм-фактор — 1U горизонтальный или zero-U вертикальный для экономии места в стойке; защита от перенапряжений для регионов с нестабильной сетью; и сетевой протокол — проверьте совместимость с SNMP/HTTPS/DCIM для контролируемых и коммутируемых блоков." },
        { heading: "Стоечные PDU WANDTUNG всех уровней", content: "WANDTUNG производит измерительные, контролируемые и коммутируемые стоечные PDU в конфигурациях Schuko, NEMA и универсальных мультистандартных, в форм-факторах 1U горизонтальный и zero-U вертикальный. Поскольку мы являемся прямым производителем, тип розеток, их количество, номинальный ток, интерфейс и защиту от перенапряжений можно кастомизировать под ваш проект по схеме OEM/ODM. Если вы не уверены, какой уровень подходит для каждой стойки, наши инженеры помогут это определить." },
      ],
      faqs: [
        { question: "В чём основное различие между измерительным и коммутируемым PDU?", answer: "Измерительный PDU измеряет и сообщает мощность (только для чтения). Коммутируемый PDU добавляет удалённое управление отдельными розетками, позволяя перезагружать оборудование без посещения стойки." },
        { question: "Контролируемый PDU — это то же самое, что измерительный?", answer: "Нет. Измерительный PDU показывает показания локально; контролируемый PDU передаёт эти показания в сеть для удалённого просмотра и оповещений через SNMP или платформу DCIM." },
        { question: "Какой PDU лучше всего подходит для удалённого или необслуживаемого объекта?", answer: "Коммутируемый PDU, поскольку удалённое управление розетками позволяет перезагружать оборудование и управлять питанием без выезда на объект." },
        { question: "Нужен ли мне одинаковый уровень PDU на каждой стойке?", answer: "Обычно нет. Сочетание уровней — базовый или измерительный на стабильных стойках, контролируемый в основном зале, коммутируемый на критичных или удалённых стойках — контролирует затраты, сохраняя видимость там, где это важно." },
      ],
    },
    zh: {
      title: "计量型PDU与可切换型PDU：您的机架究竟需要哪种？",
      category: "配电",
      excerpt: "计量型、监控型还是可切换型机架PDU——您的数据中心究竟需要哪一种？来自PDU制造商的功能、成本与应用场景清晰对比。",
      readingTime: "4分钟阅读",
      body: [
        { heading: "概述", content: "“计量型”“监控型”“可切换型”——机架PDU的数据表常常直接使用这些术语，仿佛采购者已经了解其中差异。但事实并非总是如此，而选错层级在两个方向上都会造成成本浪费：配置过高，意味着为从未使用过的控制功能买单；配置不足，则会失去所需的可视性或远程访问能力。本指南将准确说明各层级的区别以及如何选择。" },
        { heading: "机架PDU的四个层级，简述", content: "机架PDU处于一个能力阶梯上，每一级都在前一级基础上叠加。基础型PDU将电力分配至多个插座，不具备计量与联网功能——对负载稳定的低密度机架而言可靠且经济。计量型PDU增加了电流、电压和功率的测量，通常显示在设备的本地数字屏幕上——您仍需亲自查看，但终于能了解每个机架相对于断路器上限的实际负载。监控型PDU将同样的计量数据接入网络，使您可以通过SNMP、网页或DCIM仪表盘远程查看每个机架，并设置告警而无需巡视机房。可切换型PDU在完整监控的基础上增加了对单个插座的远程控制——远程重启死机的服务器、在断电后按顺序启动设备，或禁用未使用的插座，全部可远程完成。" },
        { heading: "计量型与可切换型：核心区别", content: "最重要的单一区别在于“读取”与“控制”。计量型PDU告诉您正在发生什么——机架正在消耗多少电力——这是单向的信息流，非常适合以可视性和容量规划为目标的场景：了解机架的负载饱和程度、距离电路上限还有多远，以及负载随时间的变化趋势。可切换型PDU则让您能够据此采取行动——远程开关插座，这种双向控制只有在原本需要有人亲自前往机架时，才能体现其更高价格的价值：重启死机设备、安排上电顺序，或在共享设施中锁定插座。如果永远不会有人需要远程切断某个特定插座的电源，那么您就是在为未使用的可切换型PDU功能付费。而如果您的团队目前需要专程赶赴现场仅仅是为了重启一台设备，可切换型PDU则能很快收回其成本。" },
        { heading: "一种简单的选择方法", content: "应根据机架的角色而非统一政策来匹配PDU层级。负载几乎不变的低密度稳定机架，只需基础型或计量型PDU——一个负载读数，而非仪表盘。进行主动容量规划的主生产区域，需要监控型PDU，通过对每个机架的远程可视性来驱动填充与告警决策。远程站点、无人值守边缘节点及关键任务机架，则需要可切换型PDU，通过远程电源循环避免昂贵且缓慢的现场维护。按用电量向租户计费的多租户或托管环境，需要具备计费级精度（±1%）的计量型或监控型PDU。大多数实际数据中心会在机房内混合使用不同层级——这是最具成本效益的答案，而非折中方案。" },
        { heading: "别忘了物理规格", content: "无论选择哪个层级，基本规格仍须与您的场地匹配：插座标准——Schuko、NEMA、IEC或通用型，需与地区及设备相匹配；额定电流/电压需高于峰值负载并留有余量；外形结构——1U水平或零U垂直，以节省机架空间；针对电网不稳定地区的浪涌保护；以及网络协议——需确认监控型和可切换型单元的SNMP/HTTPS/DCIM兼容性。" },
        { heading: "WANDTUNG全层级机架PDU", content: "WANDTUNG生产计量型、监控型及可切换型机架PDU，提供Schuko、NEMA及多标准通用配置，具备1U水平和零U垂直两种结构。作为工厂直销制造商，我们可通过OEM/ODM为您的项目定制插座类型、数量、额定电流、接口及浪涌保护。如果您不确定哪个层级适合哪个机架，我们的工程师将为您提供帮助。" },
      ],
      faqs: [
        { question: "计量型PDU与可切换型PDU的主要区别是什么？", answer: "计量型PDU测量并上报电力数据（仅供读取）。可切换型PDU增加了对单个插座的远程控制，可在无需前往机架的情况下重启设备。" },
        { question: "监控型PDU与计量型PDU是一回事吗？", answer: "不是。计量型PDU在本地显示读数；监控型PDU将这些读数接入网络，以便通过SNMP或DCIM平台进行远程查看和告警。" },
        { question: "哪种PDU最适合远程或无人值守站点？", answer: "可切换型PDU，因为远程插座控制可以在无需现场维护的情况下重启设备并管理电源。" },
        { question: "是否每个机架都需要相同层级的PDU？", answer: "通常不需要。混合使用不同层级——在稳定机架上使用基础型或计量型、在主生产区域使用监控型、在关键或远程机架上使用可切换型——既能控制成本，又能在关键之处保留可视性。" },
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
  "what-is-micro-modular-data-center": {
    ar: {
      title: "ما هو مركز البيانات ذو الوحدة المصغّرة؟",
      category: "مركز بيانات الوحدة الصغيرة",
      excerpt: "يدمج مركز البيانات ذو الوحدة المصغّرة الرفوف والطاقة والتبريد والمراقبة في وحدة واحدة جاهزة التصنيع. تعرّف على كيفية عمله وفوائده ومتى تستخدمه.",
      readingTime: "6 دقائق قراءة",
      body: [
        { heading: "نظرة عامة", content: "بناء غرفة مركز بيانات تقليدية عملية بطيئة. تصبّ الهيكل الخرساني، ثم تُحضر مقاولين منفصلين للرفوف والطاقة والتبريد ومكافحة الحريق والمراقبة، وتدمجها في الموقع على مدى أشهر. يختصر مركز البيانات ذو الوحدة المصغّرة هذه العملية إلى منتج واحد مُدمج في المصنع: الرفوف، وتوزيع الطاقة، والتبريد الدقيق، والمراقبة، والسلامة من الحرائق، مُجمّعة ومُختبرة مسبقاً قبل وصولها إلى موقعك. والنتيجة هي مركز بيانات ذاتي الاكتفاء تنشره خلال أسابيع بدلاً من أشهر، في أماكن لن تتسع أبداً لصالة بيانات كاملة." },
        { heading: "كيف يعمل مركز البيانات ذو الوحدة المصغّرة", content: "تحزم الوحدة المصغّرة كامل حزمة البنية التحتية الفيزيائية في نظام واحد مغلق، عادةً من راك واحد إلى بضعة رفوف وحتى صف كامل: رفوف وهياكل محكمة الإغلاق لاحتواء الممر الساخن/البارد بحيث لا يُهدر التبريد على الغرفة المحيطة؛ توزيع طاقة — UPS ووحدات PDU ولوحات التحويل — مُدمج ومُسلّك مسبقاً؛ تبريد دقيق، داخل الصف أو داخل الراك، مُحدد الحجم بما يتناسب مع الحمل المغلق وأكثر كفاءة بكثير من تبريد غرفة مفتوحة؛ مراقبة وإدارة عبر مستشعرات بيئية وقياس طاقة ووحدة تحكم، غالباً مع وصول عن بُعد مدمج؛ وكشف الحرائق وإطفائها بالإضافة إلى الأمن الفيزيائي كخيارات مدمجة. ولأنها مُصمّمة ومُختبرة كنظام واحد في المصنع، تصل الوحدة كمّية معروفة. وفي الموقع، ينحصر العمل غالباً في وضعها وتوصيل الطاقة والشبكة والتشغيل — لا دمج عشرات المقاولين المنفصلين." },
        { heading: "لماذا تختصر النشر من أشهر إلى أسابيع", content: "يأتي توفير الوقت من إزاحة الدمج عن المسار الحرج. في البناء التقليدي، يُركّب كل نظام فرعي ويُدمج بالتسلسل في الموقع، وتظهر المشكلات متأخرة، عندما يكون إصلاحها مكلفاً. أما في النهج المعياري، فيحدث ذلك الدمج بالتوازي في المصنع بينما يُجهّز الموقع، وتُتحقق صحة الوحدة قبل الشحن. يتقلص العمل في الموقع إلى الوضع والتوصيل. بالنسبة للمشغلين الذين يواجهون طلباً مدفوعاً بالذكاء الاصطناعي، غالباً ما تكون هذه السرعة العامل الحاسم: فالسعة التي تصل خلال أسابيع تغتنم فرصة قد تفوتها السعة التي تصل خلال عام." },
        { heading: "أين يكون مركز البيانات ذو الوحدة المصغّرة منطقياً", content: "إنها ليست بديلاً لكل صالة بيانات ضخمة — بل تتفوق في حالات محددة: الحوسبة الطرفية والموزعة، للبيع بالتجزئة والتصنيع ومواقع الاتصالات وعقد 5G التي تحتاج معالجة محلية قريبة من مصدر البيانات، دون غرفة تقنية معلومات مخصصة؛ التوسع السريع في السعة، بإضافة حوسبة إلى منشأة قائمة أو إنشاء سعة جديدة أسرع مما يسمح به البناء التقليدي؛ المواقع محدودة المساحة، مثل المكاتب أو المستشفيات أو أرضيات المصانع حيث لا توجد صالة بيانات مخصصة؛ والطرح الموحّد، حيث تستفيد المؤسسات التي تنشر حوسبة متطابقة في مواقع عديدة من وحدة قابلة للتكرار ومُصمّمة مسبقاً بدلاً من بناء مخصص في كل مرة. للاحتياجات الأكبر أو المتنقلة، تتوسع المبادئ نفسها لتصل إلى مراكز البيانات الحاوية، التي تضم رفوفاً عديدة في شكل حاوية شحن للنشر الميداني." },
        { heading: "ما الذي يجب البحث عنه في المورد", content: "لا تكون الوحدة المصغّرة أفضل من الدمج القائم عليها. عند تقييم الموردين، تحقق من أن التبريد مُحدد الحجم بما يتناسب مع كثافة الراك الفعلية التي تخطط لتشغيلها، بما يشمل خيارات الكثافة العالية والجاهزة للتبريد بالسوائل؛ وأن الطاقة والتبريد والمراقبة مُدمجة فعلياً ومُختبرة في المصنع كنظام واحد، لا مُجمّعة بشكل فضفاض؛ وأن المكونات تحمل الشهادات المناسبة وأن المورد يمكنه دعم معايير سوقك المستهدف؛ وأن المورد يمكنه تخصيص عدد الرفوف وسعة الطاقة ونوع التبريد بما يتناسب مع حملك." },
        { heading: "حلول مركز البيانات المعياري من WANDTUNG", content: "تُصمّم WANDTUNG وتُصنّع كامل حزمة البنية التحتية الفيزيائية — الرفوف ووحدات PDU وUPS، والتبريد الدقيق والسائل (بما يشمل وحدات CDU وألواح التبريد)، والاحتواء، والمراقبة — مما يتيح لنا دمج مراكز البيانات ذات الوحدة المصغّرة والحاوية كأنظمة منسقة بدلاً من أجزاء مُجمّعة. تُصمّم كل وحدة من خطوط إنتاجنا الخاصة وتُختبر في المصنع قبل التسليم، مع تخصيص OEM/ODM لعدد الرفوف والطاقة ونوع التبريد بما يتناسب مع حملك وموقعك." },
      ],
      faqs: [
        { question: "ما هو مركز البيانات ذو الوحدة المصغّرة؟", answer: "مركز بيانات جاهز التصنيع وذاتي الاكتفاء يدمج الرفوف وتوزيع الطاقة والتبريد الدقيق والمراقبة والسلامة من الحرائق في وحدة واحدة مُختبرة في المصنع، قابلة للنشر خلال أسابيع." },
        { question: "كيف يختلف عن مركز البيانات الحاوي؟", answer: "الوحدة المصغّرة عادةً هي وحدة داخلية مدمجة من راك واحد إلى بضعة رفوف. أما مركز البيانات الحاوي فيوسّع النهج المدمج نفسه ليشمل رفوفاً عديدة داخل شكل حاوية شحن للنشر الميداني أو الخارجي." },
        { question: "ما مدى سرعة نشر مركز البيانات ذي الوحدة المصغّرة؟", answer: "لأن الدمج والاختبار يحدثان في المصنع بالتوازي مع تجهيز الموقع، ينحصر العمل في الموقع في الوضع والتوصيل والتشغيل — عادةً أسابيع بدلاً من الأشهر التي يتطلبها البناء التقليدي." },
        { question: "متى يجب أن أختار مركز بيانات ذا وحدة مصغّرة بدلاً من البناء التقليدي؟", answer: "عندما تحتاج إلى حوسبة طرفية/محلية، أو سعة سريعة، أو نشراً في موقع محدود المساحة، أو وحدة موحّدة قابلة للتكرار عبر مواقع عديدة." },
      ],
    },
    fr: {
      title: "Qu'est-ce qu'un micro data center modulaire ?",
      category: "Centre de données modulaire micro",
      excerpt: "Un micro data center modulaire intègre racks, alimentation, refroidissement et surveillance dans une seule unité préfabriquée. Découvrez son fonctionnement, ses avantages et quand l'utiliser.",
      readingTime: "6 min de lecture",
      body: [
        { heading: "Vue d'ensemble", content: "Construire une salle de data center traditionnelle est lent. On coule le gros œuvre, puis on fait venir des entrepreneurs distincts pour les racks, l'alimentation, le refroidissement, la protection incendie et la surveillance, et on les intègre sur site pendant des mois. Un micro data center modulaire condense ce processus en un seul produit intégré en usine : racks, distribution électrique, refroidissement de précision, surveillance et sécurité incendie, préassemblés et testés avant même d'arriver sur votre site. Le résultat est un data center autonome que vous déployez en semaines plutôt qu'en mois, dans des espaces où une salle de données complète ne pourrait jamais tenir." },
        { heading: "Comment fonctionne un micro data center modulaire", content: "Un micro module regroupe l'ensemble de la pile d'infrastructure physique dans un système fermé unique, typiquement de un à quelques racks jusqu'à une rangée complète : racks et enceintes scellés pour un confinement allée chaude/allée froide afin que le refroidissement ne soit pas gaspillé sur la pièce environnante ; distribution électrique — onduleurs, PDU et appareillage de commutation — intégrée et précâblée ; refroidissement de précision, en rangée ou en rack, dimensionné pour la charge confinée et bien plus efficace que le refroidissement d'une salle ouverte ; surveillance et gestion via capteurs environnementaux, mesure de puissance et un contrôleur, souvent avec accès à distance intégré ; et détection et extinction d'incendie plus sécurité physique en options intégrées. Étant conçu et testé comme un seul système en usine, le module arrive en tant que quantité connue. Sur site, le travail se limite en grande partie à le positionner, à connecter l'alimentation et le réseau, et à le mettre en service — pas à intégrer une douzaine de corps de métier distincts." },
        { heading: "Pourquoi cela raccourcit le déploiement de mois en semaines", content: "Le gain de temps vient du fait que l'intégration est retirée du chemin critique. Dans une construction conventionnelle, chaque sous-système est installé et intégré séquentiellement sur site, et les problèmes apparaissent tard, quand ils sont coûteux à corriger. Dans une approche modulaire, cette intégration se déroule en parallèle en usine pendant que le site est préparé, et le module est validé avant expédition. Le travail sur site se réduit au positionnement et au raccordement. Pour les opérateurs confrontés à une demande tirée par l'IA, cette rapidité est souvent le facteur décisif : une capacité qui arrive en semaines saisit une opportunité qu'une capacité arrivant en un an manquerait." },
        { heading: "Où les micro data centers modulaires ont du sens", content: "Ils ne remplacent pas toutes les salles hyperscale — ils excellent dans des situations spécifiques : informatique en périphérie et distribuée, pour le commerce de détail, l'industrie, les sites télécoms et les nœuds 5G qui ont besoin d'un traitement local proche de l'endroit où les données sont générées, sans salle informatique dédiée ; expansion rapide de capacité, en ajoutant du calcul à une installation existante ou en créant une nouvelle capacité plus rapidement qu'une construction traditionnelle ne le permet ; sites à espace limité, comme des bureaux, des hôpitaux ou des zones industrielles où aucune salle de données dédiée n'existe ; et déploiements standardisés, où les entreprises déployant du calcul identique sur de nombreux sites bénéficient d'une unité reproductible et préconçue plutôt que d'une construction sur mesure à chaque fois. Pour des besoins plus importants ou mobiles, les mêmes principes s'étendent aux data centers conteneurisés, qui abritent de nombreux racks dans un format de conteneur maritime pour un déploiement sur le terrain." },
        { heading: "Ce qu'il faut rechercher chez un fournisseur", content: "Un micro module ne vaut que par l'intégration qui le sous-tend. Lors de l'évaluation des fournisseurs, vérifiez que le refroidissement est dimensionné pour la densité de rack réelle que vous prévoyez d'exploiter, y compris les options haute densité et prêtes pour le refroidissement liquide ; que l'alimentation, le refroidissement et la surveillance sont véritablement intégrés et testés en usine comme un seul système, et non assemblés de façon lâche ; que les composants portent les certifications appropriées et que le fournisseur peut répondre aux normes de votre marché cible ; et que le fournisseur peut personnaliser le nombre de racks, la capacité électrique et le type de refroidissement selon votre charge de travail." },
        { heading: "Solutions de data center modulaire WANDTUNG", content: "WANDTUNG conçoit et fabrique l'ensemble de la pile d'infrastructure physique — racks, PDU et onduleurs, refroidissement de précision et liquide (y compris les CDU et plaques froides), confinement et surveillance — ce qui nous permet d'intégrer des data centers micro modulaires et conteneurisés comme des systèmes coordonnés plutôt que des pièces assemblées. Chaque module est conçu à partir de nos propres gammes de produits et testé en usine avant livraison, avec une personnalisation OEM/ODM du nombre de racks, de la puissance et du refroidissement selon votre charge de travail et votre site." },
      ],
      faqs: [
        { question: "Qu'est-ce qu'un micro data center modulaire ?", answer: "Un data center préfabriqué et autonome qui intègre racks, distribution électrique, refroidissement de précision, surveillance et sécurité incendie dans une seule unité testée en usine, déployable en semaines." },
        { question: "En quoi diffère-t-il d'un data center conteneurisé ?", answer: "Un micro module est généralement une unité compacte d'intérieur de un à quelques racks. Un data center conteneurisé étend la même approche intégrée à de nombreux racks à l'intérieur d'un format de conteneur maritime pour un déploiement sur le terrain ou en extérieur." },
        { question: "À quelle vitesse un micro data center modulaire peut-il être déployé ?", answer: "Comme l'intégration et les tests ont lieu en usine en parallèle de la préparation du site, le travail sur site se réduit au positionnement, au raccordement et à la mise en service — généralement des semaines plutôt que les mois requis par une construction conventionnelle." },
        { question: "Quand choisir un micro data center modulaire plutôt qu'une construction traditionnelle ?", answer: "Lorsque vous avez besoin de calcul en périphérie/local, d'une capacité rapide, d'un déploiement sur un site à espace limité, ou d'une unité standardisée reproductible sur de nombreux sites." },
      ],
    },
    es: {
      title: "¿Qué es un micro centro de datos modular?",
      category: "Centro de datos modular micro",
      excerpt: "Un micro centro de datos modular integra racks, energía, refrigeración y monitoreo en una sola unidad prefabricada. Descubra cómo funciona, sus beneficios y cuándo usarlo.",
      readingTime: "6 min de lectura",
      body: [
        { heading: "Descripción general", content: "Construir una sala de centro de datos tradicional es lento. Se levanta la obra civil y luego se traen contratistas independientes para racks, energía, refrigeración, protección contra incendios y monitoreo, integrándolos en el sitio durante meses. Un micro centro de datos modular condensa ese proceso en un único producto integrado de fábrica: racks, distribución de energía, refrigeración de precisión, monitoreo y seguridad contra incendios, preensamblados y probados antes de llegar siquiera a su sitio. El resultado es un centro de datos autónomo que se implementa en semanas en lugar de meses, en espacios donde una sala de datos completa jamás cabría." },
        { heading: "Cómo funciona un micro centro de datos modular", content: "Un micro módulo empaqueta toda la pila de infraestructura física en un único sistema cerrado, típicamente de uno a varios racks hasta una fila completa: racks y gabinetes sellados para contención de pasillo caliente/frío para que la refrigeración no se desperdicie en la sala circundante; distribución de energía —UPS, PDU y aparamenta— integrada y precableada; refrigeración de precisión, en fila o en rack, dimensionada para la carga contenida y mucho más eficiente que refrigerar una sala abierta; monitoreo y gestión mediante sensores ambientales, medición de energía y un controlador, a menudo con acceso remoto integrado; y detección y extinción de incendios además de seguridad física como opciones integradas. Al estar diseñado y probado como un solo sistema en fábrica, el módulo llega como una cantidad conocida. En el sitio, el trabajo se reduce en gran medida a colocarlo, conectar la energía y la red, y ponerlo en marcha, no a integrar una docena de oficios distintos." },
        { heading: "Por qué acorta la implementación de meses a semanas", content: "El ahorro de tiempo proviene de sacar la integración de la ruta crítica. En una construcción convencional, cada subsistema se instala e integra secuencialmente en el sitio, y los problemas surgen tarde, cuando son costosos de corregir. En un enfoque modular, esa integración ocurre en paralelo en la fábrica mientras se prepara el sitio, y el módulo se valida antes de enviarse. El trabajo en el sitio se reduce a la colocación y conexión. Para los operadores que enfrentan demanda impulsada por la IA, esta velocidad suele ser el factor decisivo: la capacidad que llega en semanas aprovecha una oportunidad que la capacidad que llega en un año perdería." },
        { heading: "Dónde tienen sentido los micro centros de datos modulares", content: "No son un reemplazo para cada sala hyperscale; sobresalen en situaciones específicas: computación de borde y distribuida, para comercio minorista, manufactura, sitios de telecomunicaciones y nodos 5G que necesitan procesamiento local cerca de donde se generan los datos, sin una sala de TI dedicada; expansión rápida de capacidad, añadiendo cómputo a una instalación existente o creando nueva capacidad más rápido de lo que permite una construcción tradicional; sitios con espacio limitado, como oficinas, hospitales o plantas industriales donde no existe una sala de datos dedicada; y despliegues estandarizados, donde las empresas que implementan cómputo idéntico en muchas ubicaciones se benefician de una unidad repetible y preconstruida en lugar de una construcción a medida cada vez. Para necesidades mayores o móviles, los mismos principios se escalan a centros de datos contenerizados, que albergan muchos racks en un formato de contenedor marítimo para despliegue en campo." },
        { heading: "Qué buscar en un proveedor", content: "Un micro módulo es tan bueno como la integración detrás de él. Al evaluar proveedores, verifique que la refrigeración esté dimensionada para la densidad de rack real que planea operar, incluyendo opciones de alta densidad y preparadas para refrigeración líquida; que la energía, la refrigeración y el monitoreo estén genuinamente integrados y probados en fábrica como un solo sistema, no ensamblados de forma laxa; que los componentes cuenten con las certificaciones apropiadas y que el proveedor pueda respaldar los estándares de su mercado objetivo; y que el proveedor pueda personalizar la cantidad de racks, la capacidad de energía y el tipo de refrigeración según su carga de trabajo." },
        { heading: "Soluciones de centro de datos modular WANDTUNG", content: "WANDTUNG diseña y fabrica toda la pila de infraestructura física —racks, PDU y UPS, refrigeración de precisión y líquida (incluyendo CDU y placas frías), contención y monitoreo—, lo que nos permite integrar centros de datos micro modulares y contenerizados como sistemas coordinados en lugar de piezas ensambladas. Cada módulo se diseña a partir de nuestras propias líneas de productos y se prueba en fábrica antes de la entrega, con personalización OEM/ODM de la cantidad de racks, energía y refrigeración según su carga de trabajo y sitio." },
      ],
      faqs: [
        { question: "¿Qué es un micro centro de datos modular?", answer: "Un centro de datos prefabricado y autónomo que integra racks, distribución de energía, refrigeración de precisión, monitoreo y seguridad contra incendios en una sola unidad probada en fábrica, desplegable en semanas." },
        { question: "¿En qué se diferencia de un centro de datos contenerizado?", answer: "Un micro módulo suele ser una unidad compacta de interior de uno a varios racks. Un centro de datos contenerizado escala el mismo enfoque integrado a muchos racks dentro de un formato de contenedor marítimo para despliegue en campo o al aire libre." },
        { question: "¿Qué tan rápido se puede desplegar un micro centro de datos modular?", answer: "Como la integración y las pruebas ocurren en fábrica en paralelo con la preparación del sitio, el trabajo en el sitio se reduce a colocación, conexión y puesta en marcha, normalmente semanas en lugar de los meses que requiere una construcción convencional." },
        { question: "¿Cuándo debo elegir un micro centro de datos modular en lugar de una construcción tradicional?", answer: "Cuando necesite cómputo de borde/local, capacidad rápida, despliegue en un sitio con espacio limitado, o una unidad estandarizada repetible en muchas ubicaciones." },
      ],
    },
    ru: {
      title: "Что такое микромодульный дата-центр?",
      category: "Микромодульный дата-центр",
      excerpt: "Микромодульный дата-центр объединяет стойки, питание, охлаждение и мониторинг в одном сборном модуле. Узнайте, как он работает, его преимущества и когда его стоит использовать.",
      readingTime: "6 мин на чтение",
      body: [
        { heading: "Обзор", content: "Строительство традиционного помещения дата-центра — медленный процесс. Сначала заливается коробка здания, затем привлекаются отдельные подрядчики для стоек, питания, охлаждения, противопожарной защиты и мониторинга, и всё это интегрируется на объекте на протяжении месяцев. Микромодульный дата-центр сжимает этот процесс в единый, собранный на заводе продукт: стойки, распределение питания, прецизионное охлаждение, мониторинг и противопожарную безопасность, предварительно собранные и протестированные ещё до прибытия на ваш объект. В результате получается автономный дата-центр, который вы разворачиваете за недели, а не месяцы, в местах, где полноценный зал дата-центра никогда бы не поместился." },
        { heading: "Как работает микромодульный дата-центр", content: "Микромодуль упаковывает весь стек физической инфраструктуры в одну закрытую систему, обычно от одной до нескольких стоек или целого ряда: стойки и корпуса, герметизированные для изоляции горячего/холодного коридора, чтобы охлаждение не тратилось на окружающее помещение; распределение питания — ИБП, PDU и коммутационное оборудование — интегрированное и предварительно смонтированное; прецизионное охлаждение, рядное или внутристоечное, рассчитанное на замкнутую нагрузку и значительно более эффективное, чем охлаждение открытого помещения; мониторинг и управление через датчики окружающей среды, измерение мощности и контроллер, часто со встроенным удалённым доступом; и обнаружение и тушение пожара, а также физическую безопасность как встроенные опции. Поскольку модуль спроектирован и протестирован как единая система на заводе, он прибывает как известная величина. На объекте работа в основном сводится к размещению, подключению питания и сети, и вводу в эксплуатацию — а не к интеграции десятка отдельных подрядчиков." },
        { heading: "Почему это сокращает развёртывание с месяцев до недель", content: "Экономия времени достигается за счёт вывода интеграции с критического пути. При традиционном строительстве каждая подсистема устанавливается и интегрируется последовательно на объекте, а проблемы проявляются поздно, когда их исправление обходится дорого. При модульном подходе эта интеграция происходит параллельно на заводе, пока готовится объект, а модуль проверяется перед отгрузкой. Работа на объекте сокращается до размещения и подключения. Для операторов, сталкивающихся со спросом, вызванным развитием ИИ, эта скорость часто становится решающим фактором: мощность, прибывающая за недели, позволяет использовать возможность, которую мощность, прибывающая за год, упустила бы." },
        { heading: "Где имеет смысл использовать микромодульные дата-центры", content: "Они не заменяют каждый гипермасштабный зал — они превосходят в конкретных ситуациях: периферийные и распределённые вычисления для розничной торговли, производства, телеком-объектов и узлов 5G, которым нужна локальная обработка данных рядом с местом их создания, без выделенного ИТ-помещения; быстрое расширение мощности, добавление вычислительных ресурсов к существующему объекту или создание новой мощности быстрее, чем позволяет традиционное строительство; объекты с ограниченным пространством, такие как офисы, больницы или производственные площади, где нет специально построенного зала дата-центра; и стандартизированные развёртывания, где предприятия, разворачивающие идентичные вычислительные мощности во многих местах, выигрывают от воспроизводимого, заранее спроектированного модуля вместо индивидуальной постройки каждый раз. Для более крупных или мобильных потребностей те же принципы масштабируются до контейнерных дата-центров, вмещающих множество стоек в форм-факторе морского контейнера для полевого развёртывания." },
        { heading: "На что обращать внимание при выборе поставщика", content: "Микромодуль настолько хорош, насколько хороша стоящая за ним интеграция. При оценке поставщиков проверьте, что охлаждение рассчитано на реальную плотность стоек, которую вы планируете эксплуатировать, включая варианты высокой плотности и готовности к жидкостному охлаждению; что питание, охлаждение и мониторинг действительно интегрированы и протестированы на заводе как единая система, а не свободно скомпонованы; что компоненты имеют соответствующие сертификаты, а поставщик может поддерживать стандарты вашего целевого рынка; и что поставщик может кастомизировать количество стоек, мощность питания и тип охлаждения под вашу нагрузку." },
        { heading: "Решения модульных дата-центров WANDTUNG", content: "WANDTUNG проектирует и производит весь стек физической инфраструктуры — стойки, PDU и ИБП, прецизионное и жидкостное охлаждение (включая CDU и холодные пластины), изоляцию и мониторинг, — что позволяет нам интегрировать микромодульные и контейнерные дата-центры как скоординированные системы, а не собранные по отдельности детали. Каждый модуль спроектирован на основе наших собственных продуктовых линеек и протестирован на заводе перед поставкой, с OEM/ODM-кастомизацией количества стоек, мощности и охлаждения под вашу нагрузку и объект." },
      ],
      faqs: [
        { question: "Что такое микромодульный дата-центр?", answer: "Сборный автономный дата-центр, объединяющий стойки, распределение питания, прецизионное охлаждение, мониторинг и противопожарную безопасность в одном протестированном на заводе модуле, разворачиваемом за недели." },
        { question: "Чем он отличается от контейнерного дата-центра?", answer: "Микромодуль обычно представляет собой компактный внутренний блок от одной до нескольких стоек. Контейнерный дата-центр масштабирует тот же интегрированный подход до множества стоек в форм-факторе морского контейнера для полевого или наружного развёртывания." },
        { question: "Насколько быстро можно развернуть микромодульный дата-центр?", answer: "Поскольку интеграция и тестирование происходят на заводе параллельно с подготовкой объекта, работа на месте сводится к размещению, подключению и вводу в эксплуатацию — обычно это недели, а не месяцы, требуемые при традиционном строительстве." },
        { question: "Когда стоит выбрать микромодульный дата-центр вместо традиционного строительства?", answer: "Когда вам нужны периферийные/локальные вычисления, быстрое наращивание мощности, развёртывание на объекте с ограниченным пространством или воспроизводимый стандартизированный модуль для множества локаций." },
      ],
    },
    zh: {
      title: "什么是微模块化数据中心？",
      category: "微模块化数据中心",
      excerpt: "微模块化数据中心将机架、电力、制冷与监控集成在一个预制单元中。了解其工作原理、优势以及适用场景。",
      readingTime: "6分钟阅读",
      body: [
        { heading: "概述", content: "建造传统数据中心机房是一个缓慢的过程。先浇筑建筑主体，再引入独立的承包商负责机架、电力、制冷、消防和监控，并在现场耗费数月时间进行集成。微模块化数据中心将这一流程压缩为一个工厂集成的单一产品：机架、配电、精密制冷、监控与消防安全在到达现场之前即已预装并测试完毕。其结果是一个可在数周内（而非数月）部署的自成一体的数据中心，可用于传统数据机房根本无法容纳的空间。" },
        { heading: "微模块化数据中心的工作原理", content: "一个微模块将完整的物理基础设施堆栈打包进一个封闭系统，规模通常从一个到几个机架，最多可达整排：密封的机架与机柜实现冷热通道隔离，避免制冷浪费在周围房间；配电系统——UPS、PDU与配电柜——集成并预先布线；行级或柜级精密制冷，按封闭负载精确配置，效率远高于对开放房间进行制冷；通过环境传感器、电力计量与控制器实现监控与管理，通常内置远程访问功能；以及火灾探测与灭火，加上物理安防作为集成选项。由于该模块作为一个整体系统在工厂内设计和测试，因此它以“已知量”的状态到达现场。现场工作大多只是安放、连接电力与网络并进行调试——而非集成十几个不同的施工方。" },
        { heading: "为何能将部署周期从数月缩短至数周", content: "时间节省来自于将集成工作移出关键路径。在传统建设中，每个子系统都在现场依次安装并集成，问题往往在后期才暴露，此时修复成本高昂。而在模块化方式中，这种集成在现场准备的同时于工厂内并行完成，模块在发货前即已通过验证。现场工作缩减为安放与连接。对于面临AI驱动需求的运营商而言，这种速度往往是决定性因素：数周内到货的容量能够抓住机会，而一年后才到货的容量则可能错失良机。" },
        { heading: "微模块化数据中心的适用场景", content: "它并非要取代每一个超大规模数据中心机房，而是在特定场景中表现出色：边缘与分布式计算，适用于零售、制造、电信站点及需要靠近数据产生地进行本地处理、但又没有专用IT机房的5G节点；快速容量扩展，为现有设施增加算力，或比传统建设更快地建立新容量；空间受限的场地，例如没有专用数据机房的办公室、医院或工业厂房；以及标准化部署，需要在多个地点部署相同算力的企业，可从可重复、预先设计的单元中受益，而无需每次都进行定制建设。对于更大规模或移动性需求，同样的原理可扩展至集装箱式数据中心，将大量机架容纳于集装箱形态中，用于现场部署。" },
        { heading: "选择供应商时应关注的要点", content: "微模块的品质取决于其背后的集成能力。评估供应商时，需确认：制冷系统是否按照您计划运行的实际机架密度配置，包括高密度及液冷就绪选项；电力、制冷与监控是否作为一个整体系统在工厂真正集成并测试，而非松散拼凑；组件是否具备相应认证，供应商能否支持目标市场的相关标准；以及供应商是否能够根据您的工作负载定制机架数量、电力容量及制冷类型。" },
        { heading: "WANDTUNG模块化数据中心解决方案", content: "WANDTUNG设计并生产完整的物理基础设施堆栈——机架、PDU与UPS、精密与液冷系统（包括CDU与冷板）、气流封闭及监控系统——这使我们能够将微模块化与集装箱式数据中心作为协调一致的系统进行集成，而非简单拼装零部件。每个模块均基于我们自有产品线设计，并在交付前完成工厂测试，可通过OEM/ODM针对您的工作负载与场地定制机架数量、电力及制冷方案。" },
      ],
      faqs: [
        { question: "什么是微模块化数据中心？", answer: "一种预制、自成一体的数据中心，将机架、配电、精密制冷、监控与消防安全集成于一个经工厂测试的单元中，可在数周内完成部署。" },
        { question: "它与集装箱式数据中心有何不同？", answer: "微模块通常是一个到几个机架规模的紧凑型室内单元。集装箱式数据中心则将同样的集成理念扩展至集装箱形态内的众多机架，用于现场或户外部署。" },
        { question: "微模块化数据中心的部署速度有多快？", answer: "由于集成与测试在工厂内与现场准备同步进行，现场工作仅剩下安放、连接与调试——通常只需数周，而非传统建设所需的数月。" },
        { question: "什么情况下应选择微模块化数据中心而非传统建设？", answer: "当您需要边缘/本地算力、快速容量扩展、在空间受限场地部署，或需要在多个地点采用可重复的标准化单元时。" },
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

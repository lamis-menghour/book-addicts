const books = [
  {
    id: 0,
    title: "خوف 1",
    price: 1000,
    pages: 300,
    author: "أسامة المسلم",
    language: "Arabic",
    category: "Horror",
    dscrp:
      "استعد لتجربة رعب غير مسبوقة مع الجزء الأول من سلسلة خوف الشهيرة. في هذه الرواية، يدخل أسامة المسلم إلى عالم مظلم مليء بالألغاز والأسرار المخيفة. سيأخذك خوف 1 في رحلة لا تُنسى مليئة بالتشويق والغموض، وستتركك في حالة من الذهول والخوف.",
  },
  {
    id: 1,
    title: "خوف 2",
    price: 1000,
    pages: 300,
    author: "أسامة المسلم",
    language: "Arabic",
    category: "Horror",
    dscrp:
      "بعد النجاح الكبير الذي حققه الجزء الأول من سلسلة خوف، يعود أسامة المسلم لتقديم الجزء الثاني الذي لا يقل عنه إثارة وغموض. في خوف 2، يواجه بطل الرواية 'خوف' تحديات جديدة ومرعبة، ويجد نفسه في مواجهة عالم الجن المخيف. ستكشف هذه الرواية عن الأسرار المخفية وراء عالم خوف، وستتركك في حالة من الترقب والهلع.",
  },
  {
    id: 2,
    title: "خوف 3",
    price: 1000,
    pages: 300,
    author: "أسامة المسلم",
    language: "Arabic",
    category: "Horror",
    dscrp:
      "استعد للغوص مرة أخرى في عالم الرعب والإثارة مع الجزء الثالث من سلسلة خوف المتميزة. في هذه الرواية، يتعمق المؤلف أسامة المسلم في خفايا العالم الآخر، ويكشف عن أسرار مرعبة لم تكن لتخطر على ذهنك. سيأخذك خوف 3 في رحلة لا تُنسى مليئة بالتشويق والغموض، وستتركك تتساءل عن حقيقة ما يختبئ وراء ظلال الواقع.",
  },
  {
    id: 3,
    title: "أرض زيكولا",
    price: 900,
    pages: 400,
    author: "عمرو عبد الحميد",
    language: "Arabic",
    category: "Fantasy",
    dscrp:
      "رواية خيالية تقع أحداثها في مدينة فاس المغربية، حيث يجد خالد حسني نفسه في عالم غريب، يحكمه حاكم ظالم يسمى 'إينوك'، يضطر خالد إلى المشاركة في لعبة غامضة تسمى 'العملات' من أجل البقاء على قيد الحياة",
  },
  {
    id: 4,
    title: "أماريتا",
    price: 1000,
    pages: 350,
    author: "عمرو عبد الحميد",
    language: "Arabic",
    category: "Fantasy",
    dscrp:
      "رواية خيالية تقع أحداثها في أرض زيكولا، حيث تدور حول قصة حب بين خالد حسني وفتاة تدعى أماريتا، تنشأ بينهما علاقة قوية رغم اختلاف طبقتيهما الاجتماعية، لكن هذه العلاقة تواجه العديد من التحديات والصعوبات.",
  },
  {
    id: 5,
    title: "واد الذئاب المنسية",
    price: 1000,
    pages: 350,
    author: "عمرو عبد الحميد",
    language: "Arabic",
    category: "Fantasy",
    dscrp:
      "رواية خيالية تقع أحداثها في أرض زيكولا، حيث يحكمها شاهد السماء عاش البشر والذئاب والملديون في سلمٍ امتد آلاف السنين قبل أن يجتاز ذئبٌ رهيب إحدى العابرات الست، ويلتقي «موسى» الباحث عن أقرب فرصة للخروج من بلدته، ليتبدل كل شيء.",
  },
  {
    id: 6,
    title: "الأب الغني والأب الفقير",
    price: 900,
    pages: 500,
    author: "إيريك سيجال",
    language: "English",
    category: "Finance",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 7,
    title: "اكستاسي",
    price: 4500,
    pages: 500,
    author: "إيريك سيجال",
    language: "English",
    category: "Science Fiction",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 8,
    title: "أبابيل",
    price: 1300,
    pages: 300,
    author: "احمد ال حمدان",
    language: "Arabic",
    category: "Mystery",
    dscrp:
      "رواية تاريخية تدور أحداثها في القرن السابع الهجري، وتروي قصة حب بين مسلمة ومسيحية في ظل صراعات دينية طاحنة. تتناول الرواية موضوعات الحب والحرب والسياسة والحرية، وتسلط الضوء على الصراعات الدينية التي عانت منها المنطقة العربية عبر التاريخ. ",
  },
  {
    id: 9,
    title: "جومانا",
    price: 1200,
    pages: 250,
    author: "احمد ال حمدان",
    language: "English",
    category: "Romance",
    dscrp:
      "رواية سيرة ذاتية تروي قصة حياة الكاتبة 'جومانا' منذ طفولتها وحتى يومنا هذا. تتحدث الرواية عن نشأة 'جومانا' في أسرة بسيطة، وعن الصعوبات التي واجهتها في دراستها وتكوين حياتها المهنية. تتناول الرواية أيضًا موضوعات الحب والعلاقات الإنسانية والنجاح",
  },
  {
    id: 10,
    title: "الجساسة",
    price: 1200,
    pages: 300,
    author: "احمد ال حمدان",
    language: "Arabic",
    category: "Mystery",
    dscrp:
      "رواية خيالية تدور أحداثها في قرية جبلية نائية، وتروي قصة فتاة صغيرة تدعى 'جُمانة' تعيش مع عائلتها في ظل ظروف صعبة. تتعرض 'جُمانة' لضغوطات من أهلها بسبب رغبتهم في تزويجها من رجل أكبر منها سنًا، لكنها تهرب من المنزل بحثًا عن الحرية. تلتقي 'جُمانة' خلال رحلتها بمجموعة من الأشخاص الذين يغيرون حياتها بشكل جذري.",
  },
  {
    id: 11,
    title: "عشها بسعادة",
    price: 1000,
    pages: 200,
    author: "علاء الدين أبو زيد",
    language: "Arabic",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 12,
    title: "كن الشخص الذي يجعلك سعيدا",
    price: 1200,
    pages: 250,
    author: "عُمر المُختار المَنصوري",
    language: "Arabic",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 13,
    title: "كن أقوى من مشاعرك",
    price: 1300,
    pages: 300,
    author: "أحمد خالد توفيق",
    language: "Arabic",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 14,
    title: "تحكم في أصوات عقلك",
    price: 1300,
    pages: 300,
    author: "جون أكاف",
    language: "English",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 15,
    title: "أول 20 ساعة",
    price: 1200,
    pages: 200,
    author: "ستيفن كوفي",
    language: "Arabic",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 16,
    title: "قوة التفكير الإيجابي",
    price: 1400,
    pages: 300,
    author: "نابليون هيل",
    language: "English",
    category: "Personal Development",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 17,
    title: "أغنى رجل في بابل",
    price: 750,
    pages: 200,
    author: "جورج كلاسون",
    language: "English",
    category: "Finance",
    dscrp:
      "يأخذنا الكاتب جورج كلاسون في رحلة إلى زمن بابل القديمة، حيث يطلعنا على أسرار الثراء التي لا تزال صالحة حتى اليوم. يتعلم القارئ كيف يدير أمواله بحكمة، وكيف يجعلها تعمل لصالحه، وكيف يحميها من المخاطر. كما يكتشف القيم الأساسية للنجاح المالي، مثل العمل الجاد والادخار والاستثمار. هذا الكتاب هو رفيقك الأمثل في طريق تحقيق أهدافك المالية وتحقيق الثراء الذي تستحقه.",
  },
  {
    id: 18,
    title: "العادات الذرية",
    price: 1000,
    pages: 400,
    author: "تشالز دويج",
    language: "English",
    category: "Personal  Development",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 19,
    title: "قوة عقلك الباطن",
    price: 1000,
    pages: 200,
    author: "جوزيف ميرفي",
    language: "English",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 20,
    title: "فن قراءة العقول",
    price: 1400,
    pages: 300,
    author: "روبرت غرين",
    language: "English",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 21,
    title: "معجزة الصباح",
    price: 900,
    pages: 200,
    author: "هال إلرود",
    language: "English",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 22,
    title: "فكر كأنك طبيب نفسي",
    price: 1300,
    pages: 400,
    author: "ألبرت إليس",
    language: "English",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 23,
    title: "جلسات نفسية",
    price: 1000,
    pages: 300,
    author: "د. أحمد عبد الله سعفان",
    language: "Arabic",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 24,
    title: "فن الإغواء",
    price: 3000,
    pages: 300,
    author: "روبرت غرين",
    language: "English",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 25,
    title: "ڤيتامينات نفسية",
    price: 850,
    pages: 200,
    author: "علاء الدين أبو زيد",
    language: "Arabic",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 26,
    title: "أبي الذي أكره",
    price: 1000,
    pages: 200,
    author: "أحمد خالد توفيق",
    language: "Arabic",
    category: "Mystery",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 27,
    title: "كن أقوى من مشاعرك",
    price: 1300,
    pages: 300,
    author: "أسامة المسلم",
    language: "Arabic",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 28,
    title: "قهوة صباحية مع النفس",
    price: 1500,
    pages: 200,
    author: "د. أحمد عبد الله سعفان",
    language: "Arabic",
    category: "Self-Help",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
  {
    id: 29,
    title: "الوحش الذي يسكنك يمكن أن يكون لطيفا",
    price: 1300,
    pages: 300,
    author: "د. أحمد عبد الله سعفان",
    language: "Arabic",
    category: "Psychology",
    dscrp:
      "تحدث الكتاب عن تجارب حقيقية لأشخاص تعرضوا للإساءات من قبل آبائهم، وكيف أثرت هذه الإساءات على حياتهم. ويقدم الكتاب أيضاً نصائح وتوجيهات للأشخاص الذين تعرضوا للإساءات من قبل آبائهم، حتى يتمكنوا من التعافي منها وبناء حياة صحية وناجحة.",
  },
];

export default books;

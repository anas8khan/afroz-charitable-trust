// Language switcher (EN / हिंदी) for the layout prototype.
// Translates by matching each visible English text fragment against the dictionary below,
// so the HTML stays plain English. Leading spaces in a Hindi value are intentional (word joins).
(() => {
  const STORAGE_KEY = "act-lang";

  const META = {
    en: {
      title: "Afroj Charitable Trust | Restoring Sight in Rural Jharkhand",
      description: "Afroj Charitable Trust brings free eye screening, cataract surgery and spectacles to rural villages of Jharkhand and Bihar. Partner with us under CSR (Schedule VII – Healthcare).",
    },
    hi: {
      title: "अफ़रोज चैरिटेबल ट्रस्ट | ग्रामीण झारखंड में दृष्टि लौटाना",
      description: "अफ़रोज चैरिटेबल ट्रस्ट झारखंड और बिहार के गाँवों में मुफ़्त नेत्र जाँच, मोतियाबिंद सर्जरी और चश्मे पहुँचाता है। CSR (अनुसूची VII – स्वास्थ्य) के तहत हमसे जुड़ें।",
    },
  };

  const HI = new Map([
    // Top bar & header
    [`CSR-1 Reg:`, `CSR-1 पंजीकरण:`],
    [`12A & 80G Registered`, `12A और 80G पंजीकृत`],
    [`NGO Darpan:`, `NGO दर्पण:`],
    [`Afroj`, `अफ़रोज`],
    [`Charitable Trust`, `चैरिटेबल ट्रस्ट`],
    [`Small Acts… Big Changes`, `छोटे कदम… बड़े बदलाव`],
    [`Health`, `स्वास्थ्य`],
    [`Rural eye care: camps, surgeries, spectacles`, `ग्रामीण नेत्र सेवा: शिविर, सर्जरी, चश्मे`],
    [`School vision checks so children keep learning`, `स्कूलों में नेत्र जाँच, ताकि बच्चे पढ़ते रहें`],
    [`Empowerment`, `सशक्तिकरण`],
    [`Restored sight means restored livelihoods`, `लौटी दृष्टि यानी लौटी आजीविका`],
    [`Community`, `समुदाय`],
    [`ASHA workers, panchayats & local volunteers`, `आशा कार्यकर्ता, पंचायतें और स्थानीय स्वयंसेवक`],
    [`About`, `हमारे बारे में`],
    [`Programs`, `कार्यक्रम`],
    [`Impact`, `प्रभाव`],
    [`Where We Work`, `कार्यक्षेत्र`],
    [`CSR Partnership`, `CSR साझेदारी`],
    [`Transparency`, `पारदर्शिता`],
    [`Contact`, `संपर्क`],
    [`Donate`, `दान करें`],
    [`♥ Donate`, `♥ दान करें`],
    [`Partner with Us`, `हमसे जुड़ें`],

    // Hero
    [`Rural Eye Care · Jharkhand & Bihar`, `ग्रामीण नेत्र सेवा · झारखंड और बिहार`],
    [`No villager should lose sight to a`, `किसी भी ग्रामीण की आँखों की रोशनी`],
    [`curable`, `इलाज योग्य`],
    [`condition.`, `बीमारी से नहीं जानी चाहिए।`],
    [`Afroj Charitable Trust takes free eye screening, cataract surgery and spectacles to the doorstep of rural families who cannot travel, cannot pay, and are often never diagnosed.`,
      `अफ़रोज चैरिटेबल ट्रस्ट उन ग्रामीण परिवारों के दरवाज़े तक मुफ़्त नेत्र जाँच, मोतियाबिंद सर्जरी और चश्मे पहुँचाता है जो न यात्रा कर सकते हैं, न खर्च उठा सकते हैं, और जिनकी अक्सर जाँच ही नहीं हो पाती।`],
    [`Partner under CSR`, `CSR के तहत साझेदारी करें`],
    [`⬇ Download CSR Proposal`, `⬇ CSR प्रस्ताव डाउनलोड करें`],
    [`✔ Schedule VII (i) – Healthcare`, `✔ अनुसूची VII (i) – स्वास्थ्य सेवा`],
    [`✔ CSR-1 Registered with MCA`, `✔ MCA में CSR-1 पंजीकृत`],
    [`✔ Audited & Utilisation Certified`, `✔ लेखा-परीक्षित और उपयोग प्रमाणित`],
    [`restores sight for one person`, `में एक व्यक्ति की दृष्टि लौटती है`],
    [`(screening → surgery → follow-up)`, `(जाँच → सर्जरी → फॉलो-अप)`],

    // Impact counters
    [`Villagers screened`, `ग्रामीणों की जाँच`],
    [`Free cataract surgeries`, `मुफ़्त मोतियाबिंद सर्जरी`],
    [`Village eye camps`, `ग्राम नेत्र शिविर`],
    [`Villages reached`, `गाँवों तक पहुँच`],
    [`Free spectacles`, `मुफ़्त चश्मे`],
    [`* Sample figures for layout. Replace with verified numbers from trust records.`, `* लेआउट के लिए नमूना आँकड़े। ट्रस्ट के रिकॉर्ड से सत्यापित संख्याएँ डालें।`],

    // Problem
    [`The Challenge`, `चुनौती`],
    [`In rural India, blindness is often a problem of`, `ग्रामीण भारत में अंधापन अक्सर इलाज की नहीं,`],
    [`distance`, `दूरी`],
    [`, not medicine.`, ` की समस्या है।`],
    [`Cataract surgery takes about 20 minutes. Yet thousands of elderly villagers around Chouparan, Hazaribagh and neighbouring districts live in avoidable darkness because the nearest eye surgeon is hours away, a day's wage is lost to travel, and no one in the family can accompany them.`,
      `मोतियाबिंद की सर्जरी में लगभग 20 मिनट लगते हैं। फिर भी चौपारण, हज़ारीबाग और आसपास के ज़िलों के हज़ारों बुज़ुर्ग ग्रामीण ऐसे अंधेरे में जी रहे हैं जिससे बचा जा सकता है, क्योंकि नज़दीकी नेत्र सर्जन घंटों दूर है, यात्रा में एक दिन की मज़दूरी चली जाती है, और परिवार में साथ जाने वाला कोई नहीं होता।`],
    [`Distance:`, `दूरी:`],
    [`nearest eye specialist`, `हमारे अधिकांश गाँवों से नज़दीकी नेत्र विशेषज्ञ`],
    [`km away for most villages we serve`, `किमी दूर है`],
    [`Cost:`, `खर्च:`],
    [`surgery + travel + lost wages are unaffordable for daily-wage families`, `सर्जरी, यात्रा और मज़दूरी का नुकसान दिहाड़ी परिवारों की पहुँच से बाहर है`],
    [`Awareness:`, `जागरूकता:`],
    [`poor vision is accepted as "old age"`, `कमज़ोर नज़र को "बुढ़ापा" मान लिया जाता है`],
    [`Children:`, `बच्चे:`],
    [`uncorrected vision pushes students to drop out`, `बिना इलाज की कमज़ोर नज़र के कारण बच्चे पढ़ाई छोड़ देते हैं`],
    [`of blindness in India is avoidable or treatable`, `भारत में अंधेपन के मामले रोके या ठीक किए जा सकते हैं`],
    [`(Source: national blindness survey – to cite)`, `(स्रोत: राष्ट्रीय अंधता सर्वेक्षण – उद्धृत करना है)`],
    [`of cases are due to cataract`, `मामले मोतियाबिंद के कारण हैं`],
    [`(Source – to cite)`, `(स्रोत – उद्धृत करना है)`],
    [`1 in`, `हर`],
    [`elderly people screened at our camps needed surgery`, `में से 1 बुज़ुर्ग को (हमारे शिविरों में जाँच के बाद) सर्जरी की ज़रूरत पड़ी`],
    [`(Trust camp data)`, `(ट्रस्ट शिविर आँकड़े)`],

    // Model
    [`How We Work`, `हम कैसे काम करते हैं`],
    [`End-to-end care, from village to vision`, `गाँव से रोशनी तक – संपूर्ण देखभाल`],
    [`We don't just hold camps. We close the loop, so every patient identified is treated and followed up.`, `हम सिर्फ़ शिविर नहीं लगाते। हम पूरी प्रक्रिया निभाते हैं, ताकि पहचाने गए हर मरीज़ का इलाज और फॉलो-अप हो।`],
    [`1. Mobilise`, `1. जागरूकता`],
    [`ASHA workers, gram panchayats & volunteers announce camps village to village.`, `आशा कार्यकर्ता, ग्राम पंचायतें और स्वयंसेवक गाँव-गाँव शिविरों की सूचना देते हैं।`],
    [`2. Screen`, `2. जाँच`],
    [`Free eye check-ups at village camps, schools and haats.`, `ग्राम शिविरों, स्कूलों और हाटों में मुफ़्त नेत्र जाँच।`],
    [`3. Transport`, `3. परिवहन`],
    [`Free pick-up and drop for patients needing surgery.`, `सर्जरी वाले मरीज़ों के लिए मुफ़्त आने-जाने की सुविधा।`],
    [`4. Treat`, `4. इलाज`],
    [`Free surgery, medicines, stay & meals at our partner hospital.`, `हमारे साझेदार अस्पताल में मुफ़्त सर्जरी, दवाइयाँ, ठहरना और भोजन।`],
    [`5. Follow-up`, `5. फॉलो-अप`],
    [`Post-op checks & spectacles in the village, with outcomes tracked digitally.`, `गाँव में ही सर्जरी के बाद की जाँच और चश्मे, परिणामों का डिजिटल रिकॉर्ड।`],

    // Programs
    [`Our Programs`, `हमारे कार्यक्रम`],
    [`Ready-to-fund projects with clear costs and outcomes`, `स्पष्ट लागत और परिणाम वाली, फंडिंग के लिए तैयार परियोजनाएँ`],
    [`Flagship`, `प्रमुख`],
    [`Village Eye Camps`, `ग्राम नेत्र शिविर`],
    [`Full-day screening camps in remote villages with doctors, optometrists and medicines.`, `दूरदराज़ के गाँवों में डॉक्टरों, ऑप्टोमेट्रिस्ट और दवाइयों के साथ पूरे दिन के जाँच शिविर।`],
    [`Cost / camp`, `लागत / शिविर`],
    [`Reach`, `पहुँच`],
    [`people`, `लोग`],
    [`High impact`, `उच्च प्रभाव`],
    [`Free Cataract Surgery`, `मुफ़्त मोतियाबिंद सर्जरी`],
    [`Sight-restoring surgery including transport, IOL lens, stay, food and follow-up.`, `दृष्टि लौटाने वाली सर्जरी – परिवहन, IOL लेंस, ठहरना, भोजन और फॉलो-अप सहित।`],
    [`Cost / surgery`, `लागत / सर्जरी`],
    [`Outcome`, `परिणाम`],
    [`Sight restored`, `दृष्टि वापस`],
    [`Education`, `शिक्षा`],
    [`School Vision Program`, `स्कूल दृष्टि कार्यक्रम`],
    [`Screening in government schools and free spectacles so no child falls behind.`, `सरकारी स्कूलों में जाँच और मुफ़्त चश्मे, ताकि कोई बच्चा पीछे न रहे।`],
    [`Cost / school`, `लागत / स्कूल`],
    [`students`, `छात्र`],
    [`Livelihood`, `आजीविका`],
    [`Free Spectacles`, `मुफ़्त चश्मे`],
    [`Reading and distance glasses that help farmers, weavers and elders keep working.`, `पढ़ने और दूर देखने के चश्मे, जिनसे किसान, बुनकर और बुज़ुर्ग काम करते रहें।`],
    [`Cost / pair`, `लागत / जोड़ी`],
    [`Work & dignity`, `काम और सम्मान`],
    [`Prevention`, `रोकथाम`],
    [`Diabetic Eye Screening`, `डायबिटिक नेत्र जाँच`],
    [`Early detection of diabetic retinopathy and glaucoma to prevent irreversible blindness.`, `डायबिटिक रेटिनोपैथी और ग्लूकोमा की शुरुआती पहचान, ताकि स्थायी अंधापन रोका जा सके।`],
    [`Cost / person`, `लागत / व्यक्ति`],
    [`Blindness prevented`, `अंधापन रोका`],
    [`Seeking partner`, `साझेदार की तलाश`],
    [`Mobile Eye Van`, `मोबाइल नेत्र वैन`],
    [`A fully equipped van that reaches villages with no road access to care, with naming rights for the CSR partner.`, `पूरी तरह सुसज्जित वैन जो उन गाँवों तक पहुँचती है जहाँ इलाज की सुविधा नहीं है – CSR साझेदार को नामकरण अधिकार के साथ।`],
    [`Project cost`, `परियोजना लागत`],
    [`lakh`, `लाख`],
    [`Reach / yr`, `पहुँच / वर्ष`],

    // Reach
    [`Chouparan`, `चौपारण`],
    [`Our Reach`, `हमारी पहुँच`],
    [`Rooted in the villages of Jharkhand & Bihar`, `झारखंड और बिहार के गाँवों से जुड़े`],
    [`Based in Chouparan (Hazaribagh), we serve tribal and rural communities across the Jharkhand–Bihar border, where eye-care access is among the lowest in the country.`,
      `चौपारण (हज़ारीबाग) में स्थित, हम झारखंड–बिहार सीमा के आदिवासी और ग्रामीण समुदायों की सेवा करते हैं, जहाँ नेत्र सेवा की पहुँच देश में सबसे कम है।`],
    [`Hazaribagh`, `हज़ारीबाग`],
    [`Chatra`, `चतरा`],
    [`Koderma`, `कोडरमा`],
    [`Giridih`, `गिरिडीह`],
    [`Gaya`, `गया`],
    [`Aurangabad`, `औरंगाबाद`],
    [`+ more`, `+ और`],
    [`Districts shown are placeholders. Confirm from camp records. An aspirational-district focus is a strong CSR selling point.`, `दिखाए गए ज़िले अस्थायी हैं। शिविर रिकॉर्ड से पुष्टि करें। आकांक्षी ज़िलों पर फोकस CSR के लिए एक मज़बूत आकर्षण है।`],

    // CSR
    [`For CSR Partners`, `CSR साझेदारों के लिए`],
    [`A compliant, measurable and visible CSR investment`, `नियमों के अनुरूप, मापने योग्य और दिखने वाला CSR निवेश`],
    [`We make it easy for your CSR committee to approve, track and report.`, `हम आपकी CSR समिति के लिए स्वीकृति, निगरानी और रिपोर्टिंग आसान बनाते हैं।`],
    [`Fully compliant`, `पूर्ण अनुपालन`],
    [`CSR-1 registered, 12A & 80G. Eligible under Schedule VII (i): promoting healthcare.`, `CSR-1 पंजीकृत, 12A और 80G। अनुसूची VII (i) के तहत पात्र: स्वास्थ्य सेवा को बढ़ावा।`],
    [`Measurable outcomes`, `मापने योग्य परिणाम`],
    [`Patient-level data, before/after vision records and quarterly dashboards.`, `मरीज़-स्तर का डेटा, पहले/बाद के दृष्टि रिकॉर्ड और त्रैमासिक डैशबोर्ड।`],
    [`Clean reporting`, `स्पष्ट रिपोर्टिंग`],
    [`Utilisation certificates, CA-audited accounts and impact reports for your Board.`, `आपके बोर्ड के लिए उपयोग प्रमाणपत्र, CA द्वारा ऑडिट किए गए खाते और प्रभाव रिपोर्ट।`],
    [`Aspirational districts`, `आकांक्षी ज़िले`],
    [`Work in under-served rural & tribal regions, aligned with national priorities.`, `राष्ट्रीय प्राथमिकताओं के अनुरूप, वंचित ग्रामीण और आदिवासी क्षेत्रों में काम।`],
    [`Employee volunteering`, `कर्मचारी स्वयंसेवा`],
    [`Your teams can join camps and see the impact first-hand.`, `आपकी टीमें शिविरों में शामिल होकर प्रभाव को स्वयं देख सकती हैं।`],
    [`Brand visibility`, `ब्रांड दृश्यता`],
    [`Co-branded camps, van branding, media coverage and impact stories.`, `को-ब्रांडेड शिविर, वैन ब्रांडिंग, मीडिया कवरेज और प्रभाव कहानियाँ।`],
    [`Ways to partner`, `साझेदारी के तरीके`],
    [`Sponsor a Camp`, `एक शिविर प्रायोजित करें`],
    [`1 village camp`, `1 ग्राम शिविर`],
    [`~300 screenings`, `~300 जाँचें`],
    [`Camp report & photos`, `शिविर रिपोर्ट और तस्वीरें`],
    [`Enquire`, `पूछताछ करें`],
    [`Most chosen`, `सबसे लोकप्रिय`],
    [`Restore 100 Sights`, `100 लोगों की दृष्टि लौटाएँ`],
    [`100 cataract surgeries`, `100 मोतियाबिंद सर्जरी`],
    [`Transport, stay & follow-up`, `परिवहन, ठहरना और फॉलो-अप`],
    [`Patient-level outcome report`, `मरीज़-स्तर की परिणाम रिपोर्ट`],
    [`Co-branding`, `को-ब्रांडिंग`],
    [`Adopt a Block`, `एक ब्लॉक गोद लें`],
    [`lakh / yr`, `लाख / वर्ष`],
    [`Every village in a block covered`, `ब्लॉक के हर गाँव तक पहुँच`],
    [`Camps + surgeries + schools`, `शिविर + सर्जरी + स्कूल`],
    [`Baseline & endline survey`, `बेसलाइन और एंडलाइन सर्वेक्षण`],
    [`Naming rights`, `नामकरण अधिकार`],
    [`Multi-year impact`, `बहु-वर्षीय प्रभाव`],
    [`Live GPS & camp tracking`, `लाइव GPS और शिविर ट्रैकिंग`],
    [`How a partnership works`, `साझेदारी कैसे होती है`],
    [`Connect`, `संपर्क`],
    [`Intro call & site visit`, `परिचय कॉल और साइट विज़िट`],
    [`Proposal`, `प्रस्ताव`],
    [`Custom project, budget & KPIs`, `अनुकूलित परियोजना, बजट और KPI`],
    [`MoU`, `समझौता (MoU)`],
    [`Due diligence & agreement`, `जाँच-पड़ताल और अनुबंध`],
    [`Implement`, `कार्यान्वयन`],
    [`Camps, surgeries, monitoring`, `शिविर, सर्जरी, निगरानी`],
    [`Report`, `रिपोर्ट`],
    [`Utilisation certificate & impact report`, `उपयोग प्रमाणपत्र और प्रभाव रिपोर्ट`],
    [`Download our CSR Proposal Kit`, `हमारा CSR प्रस्ताव किट डाउनलोड करें`],
    [`Project brief, budgets, registration certificates and the last annual report, in one PDF for your CSR committee.`, `परियोजना सारांश, बजट, पंजीकरण प्रमाणपत्र और पिछली वार्षिक रिपोर्ट – आपकी CSR समिति के लिए एक ही PDF में।`],
    [`⬇ Download PDF (2 MB)`, `⬇ PDF डाउनलोड करें (2 MB)`],

    // Transparency
    [`Every rupee accounted for`, `हर रुपये का हिसाब`],
    [`All statutory documents are public so your due-diligence team can verify us in minutes.`, `सभी वैधानिक दस्तावेज़ सार्वजनिक हैं, ताकि आपकी टीम कुछ ही मिनटों में हमारा सत्यापन कर सके।`],
    [`Trust Registration Deed`, `ट्रस्ट पंजीकरण विलेख`],
    [`Reg. No.`, `पंजीकरण सं.`],
    [`CSR-1 Registration (MCA)`, `CSR-1 पंजीकरण (MCA)`],
    [`12A Certificate`, `12A प्रमाणपत्र`],
    [`Income Tax exemption`, `आयकर छूट`],
    [`80G Certificate`, `80G प्रमाणपत्र`],
    [`50% tax benefit to donors`, `दानदाताओं को 50% कर लाभ`],
    [`PAN & NGO Darpan`, `PAN और NGO दर्पण`],
    [`NITI Aayog ID`, `नीति आयोग ID`],
    [`Audited Financials`, `ऑडिट किए गए वित्तीय विवरण`],
    [`FY 2022-23 · 2023-24 · 2024-25`, `वित्त वर्ष 2022-23 · 2023-24 · 2024-25`],
    [`Annual Reports`, `वार्षिक रिपोर्ट`],
    [`Last 3 years`, `पिछले 3 वर्ष`],
    [`If applicable`, `यदि लागू हो`],
    [`How funds are used`, `धन का उपयोग कैसे होता है`],
    [`direct to programs`, `सीधे कार्यक्रमों पर`],
    [`Programs & patient care –`, `कार्यक्रम और मरीज़ देखभाल –`],
    [`Outreach & mobilisation –`, `आउटरीच और जागरूकता –`],
    [`Administration –`, `प्रशासन –`],

    // Governance
    [`Governance`, `शासन व्यवस्था`],
    [`Led by people who live and work in the community`, `समुदाय में रहने और काम करने वाले लोगों के नेतृत्व में`],
    [`Trustee Name`, `ट्रस्टी का नाम`],
    [`Founder & Managing Trustee`, `संस्थापक और प्रबंध ट्रस्टी`],
    [`Trustee – Medical`, `ट्रस्टी – चिकित्सा`],
    [`Trustee – Finance`, `ट्रस्टी – वित्त`],
    [`Advisor Name`, `सलाहकार का नाम`],
    [`Independent Advisor`, `स्वतंत्र सलाहकार`],
    [`Dristy`, `दृष्टि`],
    [`Eye Hospital`, `आई हॉस्पिटल`],
    [`Our clinical partner: Dristy Eye Hospital, Chouparan`, `हमारा चिकित्सा साझेदार: दृष्टि आई हॉस्पिटल, चौपारण`],
    [`Surgeries under trust programs are performed at Dristy Eye Hospital, with modern equipment and experienced surgeons. All patients funded by the trust receive treatment`,
      `ट्रस्ट कार्यक्रमों के तहत सर्जरी दृष्टि आई हॉस्पिटल में आधुनिक उपकरणों और अनुभवी सर्जनों द्वारा की जाती है। ट्रस्ट द्वारा वित्तपोषित सभी मरीज़ों का इलाज`],
    [`free of cost`, `बिल्कुल मुफ़्त`],
    [`. Trust funds are used only for patient care, as set out in our partnership agreement and audited every year.`,
      ` होता है। ट्रस्ट की राशि केवल मरीज़ों की देखभाल पर खर्च होती है, जैसा कि हमारे साझेदारी समझौते में तय है, और हर साल इसका ऑडिट होता है।`],
    [`Visit hospital website →`, `अस्पताल की वेबसाइट देखें →`],

    // Stories
    [`Stories of Sight`, `दृष्टि की कहानियाँ`],
    [`Real people. Real villages. Restored lives.`, `असली लोग। असली गाँव। बदली ज़िंदगियाँ।`],
    [`"For three years I could not see my grandchildren's faces. Now I can work in the fields again."`, `"तीन साल तक मैं अपने पोते-पोतियों के चेहरे नहीं देख पाया। अब मैं फिर से खेतों में काम कर सकता हूँ।"`],
    [`Name`, `नाम`],
    [`· Farmer,`, `· किसान,`],
    [`Village`, `गाँव`],
    [`, Hazaribagh`, `, हज़ारीबाग`],
    [`"I used to sit at the back and could not read the board. With my glasses I came first in class."`, `"मैं पीछे बैठता था और बोर्ड नहीं पढ़ पाता था। चश्मा मिलने के बाद मैं कक्षा में प्रथम आया।"`],
    [`· Student, Govt. School, Chatra`, `· छात्र, सरकारी स्कूल, चतरा`],
    [`"Earlier no one from our village went for surgery. Now people come to the camp themselves."`, `"पहले हमारे गाँव से कोई सर्जरी के लिए नहीं जाता था। अब लोग खुद शिविर में आते हैं।"`],
    [`· ASHA Worker,`, `· आशा कार्यकर्ता,`],
    [`Block`, `ब्लॉक`],
    [`* Sample quotes for layout. Replace with real, consented beneficiary stories.`, `* लेआउट के लिए नमूना कथन। लाभार्थियों की सहमति से असली कहानियाँ डालें।`],

    // Partners
    [`Supported by`, `सहयोगी`],
    [`Govt. / NPCBVI`, `सरकार / NPCBVI`],
    [`District Health Society`, `ज़िला स्वास्थ्य समिति`],
    [`Partner NGO`, `साझेदार NGO`],
    [`Corporate Partner`, `कॉर्पोरेट साझेदार`],
    [`Your Company Logo Here`, `आपकी कंपनी का लोगो यहाँ`],

    // Contact & form
    [`Let's Work Together`, `आइए साथ मिलकर काम करें`],
    [`Talk to our CSR team`, `हमारी CSR टीम से बात करें`],
    [`Share your focus area and budget. We'll send a tailored proposal within 48 hours.`, `अपना फोकस क्षेत्र और बजट बताएँ। हम 48 घंटों में आपके अनुरूप प्रस्ताव भेजेंगे।`],
    [`Trust address, Chouparan, Hazaribagh, Jharkhand – PIN`, `ट्रस्ट का पता, चौपारण, हज़ारीबाग, झारखंड – पिन`],
    [`Mon–Sat, 10 AM – 6 PM`, `सोम–शनि, सुबह 10 – शाम 6 बजे`],
    [`Individual donor?`, `व्यक्तिगत दानदाता?`],
    [`Sponsor one surgery for ₹`, `एक सर्जरी प्रायोजित करें – ₹`],
    [`and get an 80G tax receipt.`, `में, और 80G कर रसीद पाएँ।`],
    [`Donate Now`, `अभी दान करें`],
    [`Full name`, `पूरा नाम`],
    [`Company`, `कंपनी`],
    [`Work email`, `कार्य ईमेल`],
    [`Phone`, `फ़ोन`],
    [`Area of interest`, `रुचि का क्षेत्र`],
    [`Cataract surgeries`, `मोतियाबिंद सर्जरी`],
    [`School vision program`, `स्कूल दृष्टि कार्यक्रम`],
    [`Mobile eye van`, `मोबाइल नेत्र वैन`],
    [`Adopt a block`, `ब्लॉक गोद लें`],
    [`Not sure – advise me`, `निश्चित नहीं – सलाह दें`],
    [`Indicative budget`, `अनुमानित बजट`],
    [`Below ₹5 lakh`, `₹5 लाख से कम`],
    [`₹5 – 25 lakh`, `₹5 – 25 लाख`],
    [`₹25 lakh – 1 crore`, `₹25 लाख – 1 करोड़`],
    [`Above ₹1 crore`, `₹1 करोड़ से अधिक`],
    [`Message`, `संदेश`],
    [`Request Proposal`, `प्रस्ताव माँगें`],
    [`✔ Thank you! (Demo: the form will be connected during development.)`, `✔ धन्यवाद! (डेमो: फ़ॉर्म विकास के दौरान जोड़ा जाएगा।)`],

    // Footer
    [`Restoring sight and dignity in rural India since`, `ग्रामीण भारत में दृष्टि और सम्मान लौटाते हुए – स्थापना`],
    [`Explore`, `जानें`],
    [`Get Involved`, `जुड़ें`],
    [`Volunteer`, `स्वयंसेवक बनें`],
    [`Reports`, `रिपोर्ट`],
    [`Registrations`, `पंजीकरण`],
    [`Trust Reg:`, `ट्रस्ट पंजीकरण:`],
    [`© 2026 Afroj Charitable Trust. All rights reserved.`, `© 2026 अफ़रोज चैरिटेबल ट्रस्ट। सर्वाधिकार सुरक्षित।`],
    [`Clinical partner:`, `चिकित्सा साझेदार:`],
    [`Dristy Eye Hospital`, `दृष्टि आई हॉस्पिटल`],
    [`· Privacy Policy · Donation Refund Policy`, `· गोपनीयता नीति · दान वापसी नीति`],

    // Photo / map placeholder captions (data-label attributes)
    [`PHOTO: Elderly villager after cataract surgery, with family, in village setting`, `फ़ोटो: मोतियाबिंद सर्जरी के बाद परिवार के साथ बुज़ुर्ग ग्रामीण, गाँव में`],
    [`PHOTO: Village eye camp under a tent`, `फ़ोटो: तंबू में ग्राम नेत्र शिविर`],
    [`PHOTO: Patient with eye patch after surgery`, `फ़ोटो: सर्जरी के बाद आँख पर पट्टी के साथ मरीज़`],
    [`PHOTO: Children at school eye test`, `फ़ोटो: स्कूल में नेत्र जाँच कराते बच्चे`],
    [`PHOTO: Elderly woman receiving spectacles`, `फ़ोटो: चश्मा प्राप्त करती बुज़ुर्ग महिला`],
    [`PHOTO: Retina screening with portable camera`, `फ़ोटो: पोर्टेबल कैमरे से रेटिना जाँच`],
    [`ILLUSTRATION: Branded mobile eye van`, `चित्र: ब्रांडेड मोबाइल नेत्र वैन`],
    [`MAP: Districts & villages served (Jharkhand / Bihar border)`, `मानचित्र: सेवा क्षेत्र के ज़िले और गाँव (झारखंड / बिहार सीमा)`],
    [`Photo`, `फ़ोटो`],
    [`PHOTO / VIDEO: Beneficiary portrait`, `फ़ोटो / वीडियो: लाभार्थी का चित्र`],
    [`PHOTO / VIDEO: Student with new spectacles`, `फ़ोटो / वीडियो: नए चश्मे के साथ छात्र`],
    [`PHOTO / VIDEO: Camp volunteer / ASHA worker`, `फ़ोटो / वीडियो: शिविर स्वयंसेवक / आशा कार्यकर्ता`],
  ]);

  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const textNodes = new Map();
  const labelEls = new Map();

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement.closest("script, style, .layout-toggle, .lang, [data-count]")
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (HI.has(norm(n.nodeValue))) textNodes.set(n, n.nodeValue);
  }
  document.querySelectorAll("[data-label]").forEach((el) => {
    if (HI.has(el.dataset.label)) labelEls.set(el, el.dataset.label);
  });

  const descMeta = document.querySelector('meta[name="description"]');
  const buttons = document.querySelectorAll(".lang [data-lang]");

  function setLang(lang) {
    if (!META[lang]) lang = "en";
    const hi = lang === "hi";

    textNodes.forEach((original, node) => {
      if (!hi) { node.nodeValue = original; return; }
      const lead = original.match(/^\s*/)[0];
      const trail = original.match(/\s*$/)[0];
      node.nodeValue = lead + HI.get(norm(original)) + trail;
    });
    labelEls.forEach((original, el) => {
      el.dataset.label = hi ? HI.get(original) : original;
    });

    document.documentElement.lang = lang;
    document.title = META[lang].title;
    if (descMeta) descMeta.content = META[lang].description;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
  }

  buttons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  let initial = new URLSearchParams(location.search).get("lang");
  if (!initial) {
    try { initial = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage blocked */ }
  }
  if (initial === "hi") setLang("hi");
})();

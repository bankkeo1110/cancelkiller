export type Lang = "vi" | "en";
export type Bi = { vi: string; en: string };

export const nav = {
  links: [
    { href: "#phong-ngua", label: { vi: "Phòng ngừa", en: "Prevention" } },
    { href: "#loai", label: { vi: "Các loại", en: "Cancer types" } },
    { href: "#dieu-tri", label: { vi: "Điều trị", en: "Treatment" } },
    { href: "#danh-gia", label: { vi: "Đánh giá", en: "Self-check" } },
    { href: "#faq", label: { vi: "Hỏi đáp", en: "FAQ" } },
  ],
  cta: { vi: "Tầm soát ngay", en: "Get screened" },
};

export const hero = {
  kicker: {
    vi: "Hiểu về ung thư · Sống khoa học",
    en: "Understanding cancer, living well",
  },
  h1: {
    vi: "Hiểu đúng về ung thư. Phòng ngừa trong tầm tay.",
    en: "Cancer, explained clearly. Prevention within reach.",
  },
  lead: {
    vi: "Tất tần tật về ung thư bằng ngôn ngữ dễ hiểu — cách sống để giảm nguy cơ, dấu hiệu cần chú ý, các phương pháp điều trị và nơi tìm chỗ dựa. Song ngữ, miễn phí, không thuật ngữ khó.",
    en: "Everything about cancer in plain language — how to live to lower your risk, the warning signs to watch, how it is treated, and where to find support. Bilingual, free, no jargon.",
  },
  ctaPrimary: { vi: "Bắt đầu với phòng ngừa", en: "Start with prevention" },
  ctaSecondary: { vi: "Tự đánh giá nguy cơ", en: "Check my risk" },
};

export const stats: { num: string; label: Bi }[] = [
  {
    num: "1 / 3",
    label: {
      vi: "số ca ung thư có thể phòng ngừa",
      en: "of cancers can be prevented",
    },
  },
  {
    num: "≈40%",
    label: {
      vi: "liên quan lối sống có thể thay đổi",
      en: "linked to lifestyle you can change",
    },
  },
  {
    num: "90%+",
    label: {
      vi: "tỉ lệ sống nếu phát hiện sớm (nhiều loại)",
      en: "survival for many cancers caught early",
    },
  },
  {
    num: "150′",
    label: {
      vi: "vận động mỗi tuần được khuyến nghị",
      en: "of activity a week is recommended",
    },
  },
];

export const prevention = {
  kicker: { vi: "Sống khoa học", en: "Living well" },
  h2: {
    vi: "8 thói quen giúp giảm nguy cơ ung thư",
    en: "8 habits that lower cancer risk",
  },
  lead: {
    vi: "Không thói quen nào là bảo đảm tuyệt đối — nhưng cộng lại, chúng chuyển cán cân nguy cơ về phía có lợi cho bạn.",
    en: "No single habit is a guarantee — but together, they meaningfully shift the odds in your favour.",
  },
  habits: [
    {
      icon: "ban",
      title: { vi: "Không thuốc lá", en: "No tobacco" },
      desc: {
        vi: "Nguyên nhân phòng ngừa được lớn nhất — tránh cả khói thuốc thụ động.",
        en: "The single biggest preventable cause — and avoid secondhand smoke too.",
      },
    },
    {
      icon: "apple",
      title: { vi: "Ăn nhiều rau quả", en: "Eat plants" },
      desc: {
        vi: "≥400g rau quả mỗi ngày; hạn chế thịt chế biến sẵn và thịt đỏ.",
        en: "Aim for 400g+ of vegetables and fruit daily; cut processed and red meat.",
      },
    },
    {
      icon: "activity",
      title: { vi: "Vận động đều", en: "Keep moving" },
      desc: {
        vi: "Ít nhất 150 phút vận động vừa mỗi tuần; ngồi ít lại.",
        en: "At least 150 minutes of moderate activity a week; sit less.",
      },
    },
    {
      icon: "scale",
      title: { vi: "Cân nặng hợp lý", en: "Healthy weight" },
      desc: {
        vi: "Thừa cân, béo phì làm tăng nguy cơ ít nhất 13 loại ung thư.",
        en: "Excess body fat raises the risk of at least 13 cancers.",
      },
    },
    {
      icon: "wine",
      title: { vi: "Hạn chế rượu bia", en: "Limit alcohol" },
      desc: {
        vi: "Không có ngưỡng thật sự an toàn; càng ít càng tốt.",
        en: "There is no fully safe level; less is always better.",
      },
    },
    {
      icon: "sun",
      title: { vi: "Chống nắng", en: "Sun protection" },
      desc: {
        vi: "Che chắn, quần áo và kem chống nắng SPF 30+ ngừa ung thư da.",
        en: "Shade, clothing and SPF 30+ protect against skin cancer.",
      },
    },
    {
      icon: "syringe",
      title: { vi: "Tiêm vaccine", en: "Vaccinate" },
      desc: {
        vi: "Vaccine HPV và viêm gan B phòng được nhiều loại ung thư.",
        en: "HPV and hepatitis B vaccines prevent several cancers.",
      },
    },
    {
      icon: "search",
      title: { vi: "Tầm soát định kỳ", en: "Get screened" },
      desc: {
        vi: "Khám định kỳ giúp bắt bệnh sớm, khi dễ điều trị nhất.",
        en: "Regular check-ups catch cancer early, when it is most treatable.",
      },
    },
  ],
  checklistTitle: { vi: "Bảng tự kiểm lối sống", en: "Your habit checklist" },
  checklistLead: {
    vi: "Đánh dấu những điều đã đúng với bạn. Đây là lời nhắc, không phải chẩn đoán.",
    en: "Tick what already describes you. It is a nudge, not a diagnosis.",
  },
  checklist: [
    { vi: "Tôi không hút thuốc và tránh khói thuốc", en: "I do not smoke and avoid smoke" },
    { vi: "Tôi ăn ≥400g rau quả mỗi ngày", en: "I eat 400g+ of fruit & veg daily" },
    { vi: "Tôi vận động ≥150 phút mỗi tuần", en: "I get 150+ minutes of activity weekly" },
    { vi: "Tôi giữ cân nặng ở mức hợp lý", en: "I keep a healthy body weight" },
    { vi: "Tôi hạn chế hoặc không uống rượu bia", en: "I limit or avoid alcohol" },
    { vi: "Tôi che chắn và dùng kem chống nắng", en: "I protect my skin from the sun" },
    { vi: "Tôi đã tiêm vaccine HPV / viêm gan B", en: "I am vaccinated for HPV / hepatitis B" },
    { vi: "Tôi khám tầm soát theo độ tuổi", en: "I get age-appropriate screening" },
  ] as Bi[],
  progressKicker: { vi: "Thói quen đã có", en: "Habits in place" },
  progressOf: (count: number, total: number, lang: Lang) =>
    lang === "en" ? `${count} of ${total} habits` : `${count}/${total} thói quen`,
  hint: (pct: number, lang: Lang) => {
    if (pct >= 88)
      return lang === "en"
        ? "Excellent — you are doing almost everything within your control."
        : "Tuyệt vời — bạn đang làm gần như mọi điều trong tầm kiểm soát.";
    if (pct >= 50)
      return lang === "en"
        ? "A solid base. Pick one unchecked habit to build next."
        : "Nền tảng tốt. Hãy chọn một thói quen chưa có để rèn tiếp.";
    return lang === "en"
      ? "A good place to start — small, steady changes add up."
      : "Điểm khởi đầu tốt — những thay đổi nhỏ, đều đặn sẽ cộng dồn.";
  },
};

export type CancerType = {
  id: string;
  name: Bi;
  blurb: Bi;
  signs: { vi: string[]; en: string[] };
  risks: { vi: string[]; en: string[] };
  screen: Bi;
};

export const typeSection = {
  kicker: { vi: "Tìm hiểu theo loại", en: "Know the types" },
  h2: {
    vi: "Chọn một loại ung thư để xem thông tin cốt lõi",
    en: "Pick a cancer to see the essentials",
  },
  colSigns: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" },
  colRisks: { vi: "Yếu tố nguy cơ", en: "Risk factors" },
  colScreen: { vi: "Tầm soát", en: "Screening" },
};

export const types: CancerType[] = [
  {
    id: "lung",
    name: { vi: "Ung thư phổi", en: "Lung cancer" },
    blurb: {
      vi: "Loại ung thư gây tử vong hàng đầu, phần lớn liên quan đến hút thuốc lá và ô nhiễm không khí.",
      en: "A leading cause of cancer death, largely linked to tobacco smoke and air pollution.",
    },
    signs: {
      vi: ["Ho kéo dài hoặc ho ra máu", "Khó thở, đau ngực", "Sụt cân, mệt mỏi"],
      en: ["Persistent cough or coughing blood", "Shortness of breath, chest pain", "Weight loss and fatigue"],
    },
    risks: {
      vi: ["Hút thuốc & khói thuốc thụ động", "Ô nhiễm không khí, radon", "Phơi nhiễm amiăng nghề nghiệp"],
      en: ["Smoking & secondhand smoke", "Air pollution, radon", "Occupational asbestos exposure"],
    },
    screen: {
      vi: "Chụp CT liều thấp hằng năm cho người hút thuốc nhiều từ 50 tuổi.",
      en: "Yearly low-dose CT for heavy smokers aged 50+.",
    },
  },
  {
    id: "breast",
    name: { vi: "Ung thư vú", en: "Breast cancer" },
    blurb: {
      vi: "Ung thư phổ biến nhất ở phụ nữ; phát hiện sớm cho tỉ lệ khỏi rất cao.",
      en: "The most common cancer in women; early detection gives a very high cure rate.",
    },
    signs: {
      vi: ["Khối u ở vú hoặc nách", "Thay đổi da hoặc núm vú", "Tiết dịch bất thường"],
      en: ["Lump in breast or armpit", "Skin or nipple changes", "Unusual discharge"],
    },
    risks: {
      vi: ["Tuổi và tiền sử gia đình", "Đột biến gen BRCA", "Thừa cân, ít vận động, rượu bia"],
      en: ["Age and family history", "BRCA gene mutations", "Excess weight, inactivity, alcohol"],
    },
    screen: {
      vi: "Chụp nhũ ảnh 1–2 năm/lần cho nữ 40–74; tự khám vú hằng tháng.",
      en: "Mammogram every 1–2 years for women 40–74; monthly self-exam.",
    },
  },
  {
    id: "liver",
    name: { vi: "Ung thư gan", en: "Liver cancer" },
    blurb: {
      vi: "Rất phổ biến ở Việt Nam, gắn liền với viêm gan virus B và C.",
      en: "Very common in Vietnam, tied closely to hepatitis B and C infection.",
    },
    signs: {
      vi: ["Đau hạ sườn phải", "Vàng da, vàng mắt", "Chán ăn, sụt cân"],
      en: ["Pain in upper-right abdomen", "Yellowing of skin/eyes", "Loss of appetite, weight loss"],
    },
    risks: {
      vi: ["Viêm gan B, C mạn tính", "Xơ gan, rượu bia", "Aflatoxin trong thực phẩm mốc"],
      en: ["Chronic hepatitis B, C", "Cirrhosis, alcohol", "Aflatoxin in mouldy food"],
    },
    screen: {
      vi: "Siêu âm gan + AFP mỗi 6 tháng cho người viêm gan B/C hoặc xơ gan.",
      en: "Liver ultrasound + AFP every 6 months for hepatitis B/C or cirrhosis.",
    },
  },
  {
    id: "colorectal",
    name: { vi: "Đại–trực tràng", en: "Colorectal" },
    blurb: {
      vi: "Một trong những ung thư dễ phòng và phát hiện sớm nhất nhờ tầm soát.",
      en: "One of the most preventable and screen-detectable cancers.",
    },
    signs: {
      vi: ["Thay đổi thói quen đại tiện", "Máu trong phân", "Đau bụng, sụt cân"],
      en: ["Change in bowel habits", "Blood in the stool", "Abdominal pain, weight loss"],
    },
    risks: {
      vi: ["Tuổi trên 45", "Chế độ ăn nhiều thịt đỏ/chế biến", "Ít vận động, béo phì, hút thuốc"],
      en: ["Age over 45", "Diet high in red/processed meat", "Inactivity, obesity, smoking"],
    },
    screen: {
      vi: "Xét nghiệm máu ẩn trong phân hằng năm hoặc nội soi đại tràng từ 45 tuổi.",
      en: "Annual stool test or colonoscopy from age 45.",
    },
  },
  {
    id: "stomach",
    name: { vi: "Ung thư dạ dày", en: "Stomach cancer" },
    blurb: {
      vi: "Thường gặp ở châu Á; nhiễm khuẩn H. pylori là yếu tố nguy cơ chính.",
      en: "Common in Asia; H. pylori infection is a major risk factor.",
    },
    signs: {
      vi: ["Đau, đầy bụng vùng thượng vị", "Buồn nôn, khó tiêu kéo dài", "Sụt cân, mệt mỏi"],
      en: ["Upper-abdominal pain, bloating", "Nausea, lasting indigestion", "Weight loss, fatigue"],
    },
    risks: {
      vi: ["Nhiễm H. pylori", "Ăn mặn, đồ muối, hun khói", "Hút thuốc, tiền sử gia đình"],
      en: ["H. pylori infection", "Salty, pickled, smoked foods", "Smoking, family history"],
    },
    screen: {
      vi: "Nội soi dạ dày khi có triệu chứng hoặc nguy cơ cao; diệt H. pylori.",
      en: "Endoscopy for symptoms or high risk; treat H. pylori.",
    },
  },
  {
    id: "cervical",
    name: { vi: "Cổ tử cung", en: "Cervical" },
    blurb: {
      vi: "Gần như phòng ngừa được hoàn toàn nhờ vaccine HPV và tầm soát.",
      en: "Almost entirely preventable through HPV vaccination and screening.",
    },
    signs: {
      vi: ["Chảy máu âm đạo bất thường", "Tiết dịch có mùi", "Đau khi quan hệ"],
      en: ["Unusual vaginal bleeding", "Foul-smelling discharge", "Pain during intercourse"],
    },
    risks: {
      vi: ["Nhiễm virus HPV", "Hút thuốc", "Hệ miễn dịch suy yếu"],
      en: ["HPV infection", "Smoking", "Weakened immune system"],
    },
    screen: {
      vi: "Tiêm HPV cho trẻ 9–14 tuổi; xét nghiệm Pap/HPV mỗi 3–5 năm cho nữ 25–65.",
      en: "HPV vaccine at 9–14; Pap/HPV test every 3–5 years for women 25–65.",
    },
  },
];

export const signsSection = {
  kicker: { vi: "Đừng bỏ qua", en: "Do not ignore" },
  h2: { vi: "Dấu hiệu cảnh báo chung", en: "General warning signs" },
  lead: {
    vi: "Một triệu chứng hiếm khi đồng nghĩa với ung thư — nhưng bất cứ điều gì mới, kéo dài hơn 2–3 tuần đều nên đi khám.",
    en: "One symptom rarely means cancer — but anything new that lasts more than 2–3 weeks deserves a doctor's look.",
  },
  items: [
    {
      vi: "Khối u hoặc chỗ sưng bất thường không biến mất",
      en: "A lump, or unusual swelling that persists",
    },
    {
      vi: "Sụt cân không rõ lý do hoặc mệt mỏi kéo dài",
      en: "Unexplained weight loss or lasting fatigue",
    },
    {
      vi: "Chảy máu bất thường, hoặc máu trong phân/nước tiểu",
      en: "Unusual bleeding or blood in stool/urine",
    },
    {
      vi: "Ho, khàn tiếng hoặc khó nuốt dai dẳng",
      en: "A cough, hoarseness or difficulty swallowing that lingers",
    },
    {
      vi: "Nốt ruồi thay đổi, hoặc vết loét lâu lành",
      en: "A change in a mole, or a sore that will not heal",
    },
  ] as Bi[],
};

export const screeningSection = {
  kicker: { vi: "Bắt sớm", en: "Catch it early" },
  h2: { vi: "Lịch tầm soát tham khảo", en: "Screening at a glance" },
  lead: {
    vi: "Khuyến cáo khác nhau theo quốc gia và nguy cơ cá nhân — hãy dùng bảng này để trao đổi với bác sĩ.",
    en: "Guides vary by country and personal risk — use this as a conversation starter with your doctor.",
  },
  headers: {
    cancer: { vi: "Loại", en: "Cancer" },
    who: { vi: "Đối tượng", en: "Who" },
    often: { vi: "Tần suất", en: "How often" },
  },
  rows: [
    {
      cancer: { vi: "Cổ tử cung", en: "Cervical" },
      who: { vi: "Nữ 25–65", en: "Women 25–65" },
      often: { vi: "3–5 năm/lần", en: "Every 3–5 yrs" },
    },
    {
      cancer: { vi: "Vú", en: "Breast" },
      who: { vi: "Nữ 40–74", en: "Women 40–74" },
      often: { vi: "1–2 năm/lần", en: "Every 1–2 yrs" },
    },
    {
      cancer: { vi: "Đại–trực tràng", en: "Colorectal" },
      who: { vi: "Người 45+", en: "Adults 45+" },
      often: { vi: "1–10 năm/lần", en: "Every 1–10 yrs" },
    },
    {
      cancer: { vi: "Gan", en: "Liver" },
      who: { vi: "Viêm gan B/C, xơ gan", en: "Hepatitis B/C, cirrhosis" },
      often: { vi: "6 tháng/lần", en: "Every 6 months" },
    },
    {
      cancer: { vi: "Phổi", en: "Lung" },
      who: { vi: "Hút thuốc nhiều, 50+", en: "Heavy smokers 50+" },
      often: { vi: "Hằng năm", en: "Yearly" },
    },
  ],
};

export const treatment = {
  kicker: { vi: "Cách điều trị", en: "How it is treated" },
  h2: {
    vi: "Năm phương pháp điều trị ung thư chính hiện nay",
    en: "Five main ways cancer is treated today",
  },
  lead: {
    vi: "Phần lớn phác đồ kết hợp nhiều phương pháp, tùy loại ung thư, giai đoạn và thể trạng người bệnh.",
    en: "Most treatment plans combine several of these, tailored to the cancer type, its stage, and the person.",
  },
  methods: [
    {
      title: { vi: "Phẫu thuật", en: "Surgery" },
      desc: {
        vi: "Cắt bỏ khối u. Thường là bước đầu tiên với các ung thư đặc phát hiện sớm.",
        en: "Physically removing the tumour. Often the first step for solid cancers found early.",
      },
    },
    {
      title: { vi: "Xạ trị", en: "Radiation therapy" },
      desc: {
        vi: "Tia năng lượng cao nhắm đích tiêu diệt tế bào ung thư ở một vùng, ít ảnh hưởng mô lành.",
        en: "Targeted high-energy beams destroy cancer cells in one area while sparing healthy tissue.",
      },
    },
    {
      title: { vi: "Hóa trị", en: "Chemotherapy" },
      desc: {
        vi: "Thuốc đi khắp cơ thể tiêu diệt tế bào phân chia nhanh — hữu ích khi ung thư có thể đã lan.",
        en: "Drugs that travel the whole body to kill fast-dividing cells — useful when cancer may have spread.",
      },
    },
    {
      title: { vi: "Nhắm trúng đích", en: "Targeted therapy" },
      desc: {
        vi: "Thuốc nhắm vào đột biến đặc hiệu của khối u, ít hại tế bào bình thường hơn hóa trị.",
        en: "Drugs aimed at specific mutations in the tumour, sparing normal cells more than chemo.",
      },
    },
    {
      title: { vi: "Miễn dịch", en: "Immunotherapy" },
      desc: {
        vi: "Giúp hệ miễn dịch của chính bạn nhận diện và tấn công ung thư — lĩnh vực đang phát triển nhanh.",
        en: "Helps your own immune system recognise and attack cancer — a fast-growing field.",
      },
    },
  ],
};

export type Question = {
  id: string;
  text: Bi;
  options: { label: Bi; w: number }[];
};

export const risk = {
  kicker: { vi: "Tự đánh giá", en: "Self-check" },
  h2: {
    vi: "Tự kiểm nguy cơ theo lối sống — 6 câu",
    en: "A 6-question lifestyle risk check",
  },
  disclaimer: {
    vi: "Chỉ mang tính giáo dục. Đây KHÔNG phải chẩn đoán y khoa và không thay thế bác sĩ.",
    en: "Educational only. This is NOT a medical diagnosis and cannot replace a doctor.",
  },
  submit: { vi: "Xem kết quả", en: "See my result" },
  reset: { vi: "Làm lại", en: "Reset" },
  answered: (n: number, total: number, lang: Lang) =>
    lang === "en" ? `${n} / ${total} answered` : `Đã trả lời ${n}/${total}`,
  questions: [
    {
      id: "smoke",
      text: { vi: "Bạn có hút thuốc lá?", en: "Do you smoke tobacco?" },
      options: [
        { label: { vi: "Chưa bao giờ", en: "Never" }, w: 0 },
        { label: { vi: "Đã bỏ", en: "Quit" }, w: 1 },
        { label: { vi: "Có", en: "Yes" }, w: 3 },
      ],
    },
    {
      id: "alcohol",
      text: { vi: "Bạn uống rượu bia thế nào?", en: "How much alcohol do you drink?" },
      options: [
        { label: { vi: "Không", en: "None" }, w: 0 },
        { label: { vi: "Thỉnh thoảng", en: "Occasionally" }, w: 1 },
        { label: { vi: "Thường xuyên", en: "Regularly" }, w: 2 },
      ],
    },
    {
      id: "move",
      text: { vi: "Bạn vận động mỗi tuần?", en: "How active are you each week?" },
      options: [
        { label: { vi: "≥150 phút", en: "150+ min" }, w: 0 },
        { label: { vi: "Ít hơn", en: "Less" }, w: 1 },
        { label: { vi: "Hầu như không", en: "Barely" }, w: 2 },
      ],
    },
    {
      id: "diet",
      text: { vi: "Bạn ăn nhiều rau quả?", en: "Do you eat plenty of fruit & veg?" },
      options: [
        { label: { vi: "Hằng ngày", en: "Daily" }, w: 0 },
        { label: { vi: "Thỉnh thoảng", en: "Sometimes" }, w: 1 },
        { label: { vi: "Ít khi", en: "Rarely" }, w: 2 },
      ],
    },
    {
      id: "family",
      text: { vi: "Gia đình có người mắc ung thư?", en: "Any cancer in your close family?" },
      options: [
        { label: { vi: "Không", en: "No" }, w: 0 },
        { label: { vi: "Có", en: "Yes" }, w: 2 },
      ],
    },
    {
      id: "screen",
      text: { vi: "Bạn có khám tầm soát định kỳ?", en: "Do you get regular screening?" },
      options: [
        { label: { vi: "Có", en: "Yes" }, w: 0 },
        { label: { vi: "Không", en: "No" }, w: 1 },
      ],
    },
  ] as Question[],
  bands: {
    low: {
      tag: { vi: "Nguy cơ theo lối sống: thấp", en: "Lifestyle risk: lower" },
      title: {
        vi: "Bạn đang giữ nhiều thói quen tốt",
        en: "You are keeping many good habits",
      },
      desc: {
        vi: "Hãy duy trì và đừng quên tầm soát định kỳ theo độ tuổi. Tuổi tác và gen vẫn quan trọng nên khám sức khỏe đều đặn vẫn cần thiết.",
        en: "Keep it up and stay on track with age-appropriate screening. Age and genes still matter, so regular check-ups remain important.",
      },
    },
    mid: {
      tag: { vi: "Nguy cơ theo lối sống: trung bình", en: "Lifestyle risk: moderate" },
      title: {
        vi: "Có vài điều đáng để cải thiện",
        en: "A few things worth improving",
      },
      desc: {
        vi: "Chọn một hoặc hai thói quen ở trên để thay đổi trước — thường là thuốc lá, rượu bia hoặc vận động. Cân nhắc trao đổi với bác sĩ về lịch tầm soát.",
        en: "Pick one or two habits above to change first — often tobacco, alcohol or activity. Consider discussing a screening plan with your doctor.",
      },
    },
    high: {
      tag: { vi: "Nguy cơ theo lối sống: cần chú ý", en: "Lifestyle risk: worth attention" },
      title: {
        vi: "Đây là lúc nên hành động",
        en: "A good moment to take action",
      },
      desc: {
        vi: "Nhiều yếu tố nguy cơ có thể thay đổi đang cộng dồn. Hãy ưu tiên bỏ thuốc, hạn chế rượu bia, vận động nhiều hơn, và đặt lịch khám tầm soát sớm. Đây không phải chẩn đoán — hãy gặp bác sĩ.",
        en: "Several changeable risk factors are adding up. Prioritise quitting tobacco, limiting alcohol, moving more, and booking a screening soon. This is not a diagnosis — please see a doctor.",
      },
    },
  },
};

export const support = {
  quote: {
    vi: "“Một chẩn đoán làm thay đổi cuộc sống. Nhưng đó không nhất thiết là hành trình bạn phải đi một mình.”",
    en: "“A diagnosis changes your life. It does not have to be a journey you walk alone.”",
  },
  kicker: { vi: "Đồng hành & tinh thần", en: "Support & spirit" },
  items: [
    {
      title: { vi: "Chăm sóc giảm nhẹ", en: "Palliative care" },
      desc: {
        vi: "Kiểm soát đau và triệu chứng để giữ chất lượng sống, ở bất kỳ giai đoạn nào.",
        en: "Managing pain and symptoms to protect quality of life, at any stage.",
      },
    },
    {
      title: { vi: "Hỗ trợ tâm lý", en: "Emotional support" },
      desc: {
        vi: "Tư vấn cho người bệnh và gia đình — lo lắng, sợ hãi là bình thường và có thể được hỗ trợ.",
        en: "Counselling for patients and families — fear and anxiety are normal and treatable.",
      },
    },
    {
      title: { vi: "Nhóm đồng hành", en: "Peer companionship" },
      desc: {
        vi: "Trò chuyện với người từng trải giúp nhẹ gánh cho cả người bệnh lẫn người chăm sóc.",
        en: "Talking with others who have been there eases the load for patients and carers alike.",
      },
    },
  ],
};

export const faqSection = {
  kicker: { vi: "Câu hỏi thường gặp", en: "Questions people ask" },
  h2: { vi: "Hỏi đáp, trả lời thẳng thắn", en: "Common questions, straight answers" },
  faqs: [
    {
      q: { vi: "Ung thư có lây không?", en: "Is cancer contagious?" },
      a: {
        vi: "Ung thư không lây từ người sang người. Tuy nhiên một số virus và vi khuẩn (HPV, viêm gan B/C, H. pylori) có thể lây và làm tăng nguy cơ ung thư — đó là lý do vaccine và điều trị nhiễm trùng rất quan trọng.",
        en: "Cancer itself does not spread between people. But some viruses and bacteria (HPV, hepatitis B/C, H. pylori) are contagious and raise cancer risk — which is why vaccines and treating infections matter.",
      },
    },
    {
      q: { vi: "Ung thư có di truyền không?", en: "Is cancer hereditary?" },
      a: {
        vi: "Phần lớn ung thư không do di truyền trực tiếp. Chỉ khoảng 5–10% liên quan đến đột biến gen di truyền. Tiền sử gia đình làm tăng nguy cơ và là lý do nên tầm soát sớm hơn.",
        en: "Most cancers are not directly inherited. Only about 5–10% are linked to inherited gene mutations. Family history raises risk and is a reason to screen earlier.",
      },
    },
    {
      q: { vi: "Đường có “nuôi” tế bào ung thư không?", en: "Does sugar “feed” cancer?" },
      a: {
        vi: "Mọi tế bào đều dùng đường (glucose), nên cắt hoàn toàn đường không làm chậm ung thư. Điều thực sự quan trọng là ăn cân bằng, tránh thừa cân — vì béo phì mới là yếu tố nguy cơ rõ ràng.",
        en: "All cells use glucose, so cutting sugar entirely does not starve cancer. What matters is a balanced diet and avoiding excess weight — obesity is the real, proven risk factor.",
      },
    },
    {
      q: { vi: "Điện thoại di động có gây ung thư không?", en: "Do mobile phones cause cancer?" },
      a: {
        vi: "Bằng chứng khoa học hiện tại không cho thấy sóng điện thoại gây ung thư ở mức sử dụng thông thường. Các yếu tố cần lo hơn là thuốc lá, rượu bia, chế độ ăn và ánh nắng.",
        en: "Current evidence does not show that phone signals cause cancer at normal use. Bigger concerns are tobacco, alcohol, diet and sun exposure.",
      },
    },
    {
      q: {
        vi: "Phát hiện sớm thực sự tạo khác biệt bao nhiêu?",
        en: "How much does early detection really help?",
      },
      a: {
        vi: "Rất nhiều. Với nhiều loại như vú, cổ tử cung, đại–trực tràng, phát hiện ở giai đoạn sớm có thể nâng tỉ lệ sống 5 năm lên trên 90%, so với thấp hơn nhiều khi phát hiện muộn.",
        en: "Enormously. For many cancers like breast, cervical and colorectal, catching them early can lift 5-year survival above 90%, versus far lower when found late.",
      },
    },
    {
      q: {
        vi: "Lối sống lành mạnh có đảm bảo không mắc ung thư?",
        en: "Does a healthy lifestyle guarantee no cancer?",
      },
      a: {
        vi: "Không có gì đảm bảo tuyệt đối — một số yếu tố như tuổi và gen nằm ngoài tầm kiểm soát. Nhưng lối sống lành mạnh có thể giảm khoảng 30–50% nguy cơ, và giúp cơ thể hồi phục tốt hơn nếu chẳng may mắc bệnh.",
        en: "Nothing is an absolute guarantee — some factors like age and genes are out of our control. But a healthy lifestyle can cut risk by roughly 30–50% and helps the body recover better if illness does occur.",
      },
    },
  ],
};

export const poster = {
  h2: {
    vi: "Phát hiện sớm cứu được mạng sống. Hãy đi khám định kỳ.",
    en: "Early detection saves lives. Book your check-up.",
  },
  lead: {
    vi: "Bạn không cần có triệu chứng mới đi tầm soát. Hãy hỏi cơ sở y tế hoặc bác sĩ gia đình về các xét nghiệm phù hợp với tuổi và nguy cơ của bạn.",
    en: "You do not need symptoms to get screened. Talk to a local clinic or your family doctor about the checks that fit your age and risk.",
  },
  ctaPrimary: { vi: "Xem lại phòng ngừa", en: "Review prevention" },
  ctaSecondary: { vi: "Khám phá các loại", en: "Explore the types" },
};

export const footer = {
  brandDesc: {
    vi: "Cẩm nang song ngữ, dễ hiểu về ung thư — phòng ngừa, phát hiện, điều trị và đồng hành.",
    en: "A plain-language, bilingual guide to understanding cancer — prevention, detection, treatment and support.",
  },
  noticeKicker: { vi: "Lưu ý quan trọng", en: "Important notice" },
  notice: {
    vi: "Trang này chỉ nhằm mục đích giáo dục, không phải lời khuyên y khoa. Hãy luôn tham khảo nhân viên y tế có chuyên môn để được chẩn đoán và điều trị.",
    en: "This site is for education only and is not medical advice. Always consult a qualified health professional for diagnosis and treatment.",
  },
  sources: {
    vi: "Nguồn tham khảo: Tổ chức Y tế Thế giới (WHO), Cơ quan Nghiên cứu Ung thư Quốc tế (IARC), Hiệp hội Ung thư Hoa Kỳ (ACS), Bộ Y tế Việt Nam.",
    en: "Sources: World Health Organization (WHO), International Agency for Research on Cancer (IARC), American Cancer Society (ACS), Vietnam Ministry of Health.",
  },
};

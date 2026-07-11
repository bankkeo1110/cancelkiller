import type { Bi } from "./content";

export type BiList = { vi: string[]; en: string[] };

export type Block =
  | { type: "lead"; text: Bi }
  | { type: "heading"; text: Bi }
  | { type: "paragraph"; text: Bi }
  | { type: "list"; items: BiList; ordered?: boolean }
  | { type: "table"; headers: BiList; rows: Bi[][] }
  | { type: "callout"; title: Bi; text: Bi; tone?: "accent" | "neutral" }
  | { type: "figure"; infographic: string; caption?: Bi; source?: Bi }
  | { type: "quote"; text: Bi };

export type Category = "prevention" | "screening" | "treatment" | "support";

export type Article = {
  slug: string;
  category: Category;
  title: Bi;
  excerpt: Bi;
  readingMin: number;
  cover: string;
  updated: string;
  blocks: Block[];
  sources: Bi[];
};

export const categoryMeta: Record<Category, { label: Bi }> = {
  prevention: { label: { vi: "Phòng ngừa", en: "Prevention" } },
  screening: { label: { vi: "Tầm soát", en: "Screening" } },
  treatment: { label: { vi: "Điều trị", en: "Treatment" } },
  support: { label: { vi: "Người bệnh & người nhà", en: "Patients & families" } },
};

export const articlesPage = {
  kicker: { vi: "Thư viện bài viết", en: "Article library" },
  h1: {
    vi: "Kiến thức ung thư, viết cho người thật",
    en: "Cancer knowledge, written for real people",
  },
  lead: {
    vi: "Những bài viết ngắn, dễ hiểu, ưu tiên bảng và hình — tổng hợp theo hướng dẫn của WHO, IARC, ACS và Bộ Y tế. Không thay thế lời khuyên của bác sĩ.",
    en: "Short, plain-language articles that favour tables and visuals — aligned with WHO, IARC, ACS and health-ministry guidance. Not a substitute for your doctor.",
  },
  all: { vi: "Tất cả", en: "All" },
  readMore: { vi: "Đọc bài", en: "Read" },
  minRead: (n: number, lang: "vi" | "en") =>
    lang === "en" ? `${n} min read` : `${n} phút đọc`,
  updated: { vi: "Cập nhật", en: "Updated" },
  sourcesTitle: { vi: "Nguồn tham khảo", en: "Sources" },
  backToList: { vi: "← Tất cả bài viết", en: "← All articles" },
  moreInCategory: { vi: "Bài cùng chủ đề", en: "More in this topic" },
  disclaimer: {
    vi: "Bài viết chỉ mang tính giáo dục, không phải chẩn đoán hay chỉ định điều trị. Hãy trao đổi với bác sĩ về trường hợp của bạn.",
    en: "This article is educational, not a diagnosis or treatment plan. Talk to your doctor about your situation.",
  },
};

export const articles: Article[] = [
  {
    slug: "dinh-duong-chong-ung-thu",
    category: "prevention",
    title: {
      vi: "Ăn gì để giảm nguy cơ ung thư?",
      en: "What to eat to lower cancer risk",
    },
    excerpt: {
      vi: "Không có “siêu thực phẩm” chống ung thư — nhưng cách bạn ăn mỗi ngày thì có. Nguyên tắc đơn giản qua hình đĩa ăn.",
      en: "No single food prevents cancer — but the way you eat every day matters. Simple rules, one plate.",
    },
    readingMin: 6,
    cover: "nutrition-plate",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Khoảng một phần ba số ca ung thư liên quan đến chế độ ăn, cân nặng và vận động. Tin tốt: đây là những thứ bạn thay đổi được — và không cần ăn kiêng cực đoan.",
          en: "About a third of cancers are linked to diet, weight and activity. The good news: these are things you can change — no extreme diet required.",
        },
      },
      {
        type: "figure",
        infographic: "nutrition-plate",
        caption: {
          vi: "Nguyên tắc “đĩa ăn lành mạnh”: một nửa là rau và trái cây, phần còn lại chia đều cho ngũ cốc nguyên hạt và đạm lành.",
          en: "The “healthy plate” rule: half vegetables and fruit, the rest split between whole grains and lean protein.",
        },
        source: { vi: "Phỏng theo WHO/WCRF", en: "Adapted from WHO/WCRF" },
      },
      {
        type: "heading",
        text: { vi: "Ăn nhiều hơn", en: "Eat more of these" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Rau và trái cây nhiều màu — mục tiêu ≥400g mỗi ngày",
            "Ngũ cốc nguyên hạt: gạo lứt, yến mạch, bánh mì nguyên cám",
            "Đậu, đỗ và các loại hạt",
            "Cá và thịt gia cầm thay cho thịt đỏ",
          ],
          en: [
            "Colourful vegetables and fruit — aim for 400g+ a day",
            "Whole grains: brown rice, oats, wholemeal bread",
            "Beans, lentils and nuts",
            "Fish and poultry in place of red meat",
          ],
        },
      },
      {
        type: "heading",
        text: { vi: "Hạn chế", en: "Cut back on" },
      },
      {
        type: "table",
        headers: {
          vi: ["Nên hạn chế", "Vì sao", "Gợi ý thay thế"],
          en: ["Limit", "Why", "Swap for"],
        },
        rows: [
          [
            { vi: "Thịt chế biến sẵn (xúc xích, thịt nguội)", en: "Processed meat (sausage, deli)" },
            { vi: "IARC xếp nhóm gây ung thư (Nhóm 1)", en: "IARC lists it as carcinogenic (Group 1)" },
            { vi: "Cá, trứng, đậu hũ", en: "Fish, eggs, tofu" },
          ],
          [
            { vi: "Thịt đỏ quá nhiều", en: "Too much red meat" },
            { vi: "Liên quan ung thư đại–trực tràng", en: "Linked to colorectal cancer" },
            { vi: "Giữ dưới ~350–500g/tuần", en: "Keep under ~350–500g/week" },
          ],
          [
            { vi: "Đồ uống có đường", en: "Sugary drinks" },
            { vi: "Gây tăng cân, béo phì", en: "Drive weight gain, obesity" },
            { vi: "Nước lọc, trà không đường", en: "Water, unsweetened tea" },
          ],
          [
            { vi: "Rượu bia", en: "Alcohol" },
            { vi: "Không có ngưỡng thật sự an toàn", en: "No truly safe level" },
            { vi: "Càng ít càng tốt", en: "Less is always better" },
          ],
        ],
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Đừng để bị lừa", en: "Don’t be fooled" },
        text: {
          vi: "Không có thực phẩm hay thực phẩm chức năng nào “chữa” hay “ngăn” ung thư một mình. Cắt hoàn toàn đường cũng không “bỏ đói” tế bào ung thư. Điều hiệu quả là tổng thể chế độ ăn và giữ cân nặng hợp lý.",
          en: "No food or supplement “cures” or “prevents” cancer on its own. Cutting all sugar does not “starve” cancer cells either. What works is your overall diet and a healthy weight.",
        },
      },
      {
        type: "paragraph",
        text: {
          vi: "Hãy xem đây là hướng đi lâu dài, không phải cuộc đua ngắn. Mỗi bữa ăn cân bằng hơn một chút đã là tiến bộ.",
          en: "Treat this as a long-term direction, not a sprint. Each slightly more balanced meal is progress.",
        },
      },
    ],
    sources: [
      { vi: "WHO — Chế độ ăn lành mạnh (2020)", en: "WHO — Healthy diet (2020)" },
      { vi: "IARC — Thịt đỏ và thịt chế biến sẵn (2015)", en: "IARC — Red and processed meat (2015)" },
      { vi: "World Cancer Research Fund — Khuyến nghị phòng ngừa", en: "World Cancer Research Fund — Prevention recommendations" },
    ],
  },

  {
    slug: "bo-thuoc-la",
    category: "prevention",
    title: {
      vi: "Bỏ thuốc lá: vì sao khó, và cách làm được",
      en: "Quitting tobacco: why it’s hard, and how to do it",
    },
    excerpt: {
      vi: "Thuốc lá là nguyên nhân ung thư phòng ngừa được lớn nhất. Cơ thể bắt đầu hồi phục chỉ 20 phút sau điếu cuối.",
      en: "Tobacco is the biggest preventable cause of cancer. Your body starts healing just 20 minutes after your last cigarette.",
    },
    readingMin: 5,
    cover: "quit-timeline",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Hút thuốc liên quan tới ít nhất 15 loại ung thư, không chỉ ung thư phổi. Nhưng bỏ thuốc ở bất kỳ tuổi nào cũng đem lại lợi ích — và bắt đầu rất nhanh.",
          en: "Smoking is linked to at least 15 cancers, not just lung. But quitting at any age helps — and the payoff starts fast.",
        },
      },
      {
        type: "figure",
        infographic: "quit-timeline",
        caption: {
          vi: "Cơ thể hồi phục theo thời gian sau điếu thuốc cuối cùng.",
          en: "How your body recovers over time after your last cigarette.",
        },
        source: { vi: "Phỏng theo CDC/WHO", en: "Adapted from CDC/WHO" },
      },
      {
        type: "heading",
        text: { vi: "Vì sao khó bỏ", en: "Why it’s hard" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Nicotine gây nghiện thật sự — cả về thể chất lẫn thói quen. Cảm giác thèm thường mạnh nhất trong vài ngày đầu rồi giảm dần. Biết trước điều này giúp bạn không bỏ cuộc quá sớm.",
          en: "Nicotine is genuinely addictive — physically and by habit. Cravings usually peak in the first few days, then fade. Knowing this helps you not give up too soon.",
        },
      },
      {
        type: "heading",
        text: { vi: "Cách tăng cơ hội thành công", en: "How to raise your odds" },
      },
      {
        type: "list",
        ordered: true,
        items: {
          vi: [
            "Chọn một “ngày bỏ thuốc” cụ thể trong 2 tuần tới",
            "Dọn sạch thuốc, bật lửa, gạt tàn; báo cho người thân",
            "Hỏi bác sĩ về liệu pháp thay thế nicotine hoặc thuốc hỗ trợ",
            "Tránh các “mồi” quen thuộc: cà phê, rượu, giờ nghỉ hút cùng đồng nghiệp",
            "Gọi tổng đài cai thuốc hoặc dùng ứng dụng theo dõi",
          ],
          en: [
            "Pick a specific “quit day” in the next two weeks",
            "Clear out cigarettes, lighters, ashtrays; tell people close to you",
            "Ask your doctor about nicotine replacement or stop-smoking medicine",
            "Avoid familiar triggers: coffee, alcohol, smoke breaks with colleagues",
            "Call a quit-line or use a tracking app",
          ],
        },
      },
      {
        type: "callout",
        tone: "neutral",
        title: { vi: "Tái nghiện không phải thất bại", en: "A slip is not failure" },
        text: {
          vi: "Đa số người bỏ thuốc thành công đều đã thử vài lần. Mỗi lần thử là một lần học. Nếu hút lại một điếu, hãy xem đó là bài học, không phải lý do bỏ cuộc.",
          en: "Most people who quit for good tried several times first. Each attempt teaches you something. If you slip, treat it as a lesson, not a reason to quit quitting.",
        },
      },
    ],
    sources: [
      { vi: "WHO — Thuốc lá (2023)", en: "WHO — Tobacco (2023)" },
      { vi: "CDC — Lợi ích của việc bỏ thuốc", en: "CDC — Benefits of quitting" },
      { vi: "American Cancer Society — Hướng dẫn cai thuốc", en: "American Cancer Society — Guide to quitting" },
    ],
  },

  {
    slug: "tam-soat-ung-thu-vu",
    category: "screening",
    title: {
      vi: "Tầm soát ung thư vú: ai, khi nào, bằng cách nào",
      en: "Breast cancer screening: who, when, how",
    },
    excerpt: {
      vi: "Phát hiện sớm nâng tỉ lệ sống của nhiều ca ung thư vú lên trên 90%. Đây là mốc tuổi và phương pháp bạn cần biết.",
      en: "Early detection lifts survival for many breast cancers above 90%. Here are the ages and methods to know.",
    },
    readingMin: 6,
    cover: "breast-timeline",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Ung thư vú là ung thư phổ biến nhất ở phụ nữ. Tin tốt là khi phát hiện sớm, khả năng điều trị khỏi rất cao.",
          en: "Breast cancer is the most common cancer in women. The good news: caught early, it is highly treatable.",
        },
      },
      {
        type: "figure",
        infographic: "breast-timeline",
        caption: {
          vi: "Khuyến cáo tầm soát thay đổi theo tuổi; đây là hướng tham khảo chung.",
          en: "Screening advice changes with age; this is a general guide.",
        },
        source: { vi: "Phỏng theo ACS/WHO", en: "Adapted from ACS/WHO" },
      },
      {
        type: "heading",
        text: { vi: "Các cách phát hiện", en: "Ways it’s found" },
      },
      {
        type: "table",
        headers: {
          vi: ["Phương pháp", "Là gì", "Dành cho ai"],
          en: ["Method", "What it is", "For whom"],
        },
        rows: [
          [
            { vi: "Tự nhận biết cơ thể", en: "Breast self-awareness" },
            { vi: "Để ý thay đổi ở vú và báo bác sĩ", en: "Notice changes and tell a doctor" },
            { vi: "Mọi lứa tuổi", en: "All ages" },
          ],
          [
            { vi: "Khám lâm sàng", en: "Clinical exam" },
            { vi: "Bác sĩ khám bằng tay", en: "A clinician examines by hand" },
            { vi: "Theo chỉ định", en: "As advised" },
          ],
          [
            { vi: "Chụp nhũ ảnh (mammogram)", en: "Mammogram" },
            { vi: "X-quang tuyến vú, phát hiện khối rất nhỏ", en: "Breast X-ray, finds tiny lumps" },
            { vi: "Chủ yếu nữ 40–74", en: "Mainly women 40–74" },
          ],
          [
            { vi: "Siêu âm / MRI", en: "Ultrasound / MRI" },
            { vi: "Bổ sung khi mô vú dày hoặc nguy cơ cao", en: "Added for dense tissue or high risk" },
            { vi: "Nhóm nguy cơ cao", en: "Higher-risk groups" },
          ],
        ],
      },
      {
        type: "heading",
        text: { vi: "Dấu hiệu nên đi khám ngay", en: "Signs to get checked promptly" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Khối u hoặc chỗ dày lên ở vú hay nách",
            "Thay đổi hình dạng, kích thước da vú",
            "Da vú lõm, đỏ, sần như vỏ cam",
            "Núm vú tụt vào, tiết dịch bất thường (nhất là lẫn máu)",
          ],
          en: [
            "A lump or thickening in the breast or armpit",
            "Change in breast shape or size",
            "Skin dimpling, redness or an orange-peel texture",
            "A newly inverted nipple or unusual discharge (especially bloody)",
          ],
        },
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Nam giới cũng có thể mắc", en: "Men can get it too" },
        text: {
          vi: "Hiếm nhưng có thật: nam giới cũng có mô vú và có thể bị ung thư vú. Đừng bỏ qua một khối u chỉ vì bạn là nam.",
          en: "Rare but real: men have breast tissue and can develop breast cancer. Don’t ignore a lump just because you’re male.",
        },
      },
    ],
    sources: [
      { vi: "American Cancer Society — Hướng dẫn tầm soát ung thư vú", en: "American Cancer Society — Breast cancer screening guidelines" },
      { vi: "WHO — Sáng kiến ung thư vú toàn cầu", en: "WHO — Global Breast Cancer Initiative" },
    ],
  },

  {
    slug: "hpv-va-ung-thu-co-tu-cung",
    category: "screening",
    title: {
      vi: "HPV và ung thư cổ tử cung: loại ung thư có thể xoá sổ",
      en: "HPV and cervical cancer: a cancer we could eliminate",
    },
    excerpt: {
      vi: "Nhờ vaccine HPV và tầm soát, ung thư cổ tử cung gần như phòng được hoàn toàn. Bốn bước đơn giản.",
      en: "With the HPV vaccine and screening, cervical cancer is almost entirely preventable. Four simple steps.",
    },
    readingMin: 5,
    cover: "hpv-funnel",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Gần như mọi ca ung thư cổ tử cung đều do virus HPV gây ra — và chúng ta có công cụ để chặn nó ở từng bước.",
          en: "Almost every cervical cancer is caused by the HPV virus — and we have tools to stop it at each step.",
        },
      },
      {
        type: "figure",
        infographic: "hpv-funnel",
        caption: {
          vi: "Chuỗi phòng ngừa: tiêm vaccine, tầm soát, điều trị tổn thương sớm trước khi thành ung thư.",
          en: "The prevention chain: vaccinate, screen, and treat lesions early before they become cancer.",
        },
        source: { vi: "Phỏng theo WHO", en: "Adapted from WHO" },
      },
      {
        type: "heading",
        text: { vi: "Vaccine HPV", en: "The HPV vaccine" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Hiệu quả nhất khi tiêm trước khi có phơi nhiễm — lý tưởng là 9–14 tuổi",
            "Bảo vệ chống các chủng HPV nguy cơ cao gây ung thư",
            "Cũng ngừa một số ung thư khác: hậu môn, hầu họng, dương vật",
            "An toàn, đã dùng cho hàng trăm triệu người trên thế giới",
          ],
          en: [
            "Works best before exposure — ideally ages 9–14",
            "Protects against high-risk HPV strains that cause cancer",
            "Also prevents some anal, throat and penile cancers",
            "Safe, given to hundreds of millions worldwide",
          ],
        },
      },
      {
        type: "heading",
        text: { vi: "Tầm soát", en: "Screening" },
      },
      {
        type: "table",
        headers: {
          vi: ["Xét nghiệm", "Tìm gì", "Tần suất tham khảo"],
          en: ["Test", "Looks for", "Typical interval"],
        },
        rows: [
          [
            { vi: "Xét nghiệm HPV", en: "HPV test" },
            { vi: "Virus HPV nguy cơ cao", en: "High-risk HPV virus" },
            { vi: "Mỗi 5 năm (nữ 25–65)", en: "Every 5 years (25–65)" },
          ],
          [
            { vi: "Pap (phết tế bào)", en: "Pap smear" },
            { vi: "Tế bào bất thường ở cổ tử cung", en: "Abnormal cervical cells" },
            { vi: "Mỗi 3 năm hoặc kết hợp HPV", en: "Every 3 yrs or with HPV" },
          ],
        ],
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Tiêm rồi vẫn nên tầm soát", en: "Vaccinated? Still screen" },
        text: {
          vi: "Vaccine không phủ hết mọi chủng HPV, nên phụ nữ đã tiêm vẫn cần tầm soát theo lịch. Hai việc bổ sung cho nhau chứ không thay thế.",
          en: "The vaccine doesn’t cover every HPV strain, so vaccinated women still need regular screening. The two complement each other.",
        },
      },
    ],
    sources: [
      { vi: "WHO — Chiến lược loại trừ ung thư cổ tử cung (2020)", en: "WHO — Cervical cancer elimination strategy (2020)" },
      { vi: "American Cancer Society — Tầm soát ung thư cổ tử cung", en: "American Cancer Society — Cervical cancer screening" },
    ],
  },

  {
    slug: "hieu-ve-giai-doan-ung-thu",
    category: "treatment",
    title: {
      vi: "Hiểu về giai đoạn ung thư (staging)",
      en: "Understanding cancer stages (staging)",
    },
    excerpt: {
      vi: "“Giai đoạn mấy?” là câu hỏi đầu tiên nhiều người hỏi. Nó nghĩa là gì và vì sao quan trọng đến vậy.",
      en: "“What stage?” is the first question many people ask. Here’s what it means and why it matters so much.",
    },
    readingMin: 6,
    cover: "staging-bars",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Giai đoạn mô tả mức độ ung thư đã lan tới đâu. Nó định hướng lựa chọn điều trị và giúp bác sĩ tiên lượng — nhưng không phải là một bản án.",
          en: "Stage describes how far a cancer has spread. It guides treatment choices and helps predict outcomes — but it is not a verdict.",
        },
      },
      {
        type: "figure",
        infographic: "staging-bars",
        caption: {
          vi: "Phát hiện càng sớm (khu trú), cơ hội điều trị hiệu quả càng cao. Chiều cao cột chỉ minh hoạ.",
          en: "The earlier (more localised) the diagnosis, the better the odds. Bar heights are illustrative only.",
        },
      },
      {
        type: "heading",
        text: { vi: "Hệ thống TNM", en: "The TNM system" },
      },
      {
        type: "table",
        headers: {
          vi: ["Chữ", "Nghĩa", "Trả lời câu hỏi"],
          en: ["Letter", "Means", "Answers"],
        },
        rows: [
          [
            { vi: "T (Tumour)", en: "T (Tumour)" },
            { vi: "Kích thước khối u nguyên phát", en: "Size of the primary tumour" },
            { vi: "Khối u lớn cỡ nào?", en: "How big is it?" },
          ],
          [
            { vi: "N (Node)", en: "N (Node)" },
            { vi: "Đã tới hạch bạch huyết chưa", en: "Spread to lymph nodes" },
            { vi: "Đã lan sang hạch chưa?", en: "In the nodes yet?" },
          ],
          [
            { vi: "M (Metastasis)", en: "M (Metastasis)" },
            { vi: "Đã di căn xa chưa", en: "Distant spread" },
            { vi: "Đã lan tới cơ quan khác?", en: "Reached other organs?" },
          ],
        ],
      },
      {
        type: "paragraph",
        text: {
          vi: "Bác sĩ gộp T, N, M lại thành giai đoạn từ 0 đến IV. Nói ngắn gọn: số càng nhỏ, ung thư càng khu trú.",
          en: "Doctors combine T, N and M into a stage from 0 to IV. In short: the lower the number, the more localised the cancer.",
        },
      },
      {
        type: "list",
        items: {
          vi: [
            "Giai đoạn 0: tế bào bất thường tại chỗ, chưa xâm lấn",
            "Giai đoạn I–II: khối u còn khu trú, có thể lan tới hạch gần",
            "Giai đoạn III: lan rộng hơn tới hạch vùng",
            "Giai đoạn IV: đã di căn tới cơ quan xa",
          ],
          en: [
            "Stage 0: abnormal cells in place, not yet invasive",
            "Stage I–II: tumour still localised, may reach nearby nodes",
            "Stage III: more extensive spread to regional nodes",
            "Stage IV: has spread to distant organs",
          ],
        },
      },
      {
        type: "callout",
        tone: "neutral",
        title: { vi: "Giai đoạn muộn không có nghĩa hết cách", en: "Advanced doesn’t mean hopeless" },
        text: {
          vi: "Ngay cả ở giai đoạn IV, nhiều phương pháp mới — miễn dịch, nhắm trúng đích — có thể kiểm soát bệnh lâu dài và giữ chất lượng sống. Hãy hỏi bác sĩ về mọi lựa chọn.",
          en: "Even at stage IV, newer approaches — immunotherapy, targeted therapy — can control the disease for a long time and protect quality of life. Ask your doctor about every option.",
        },
      },
    ],
    sources: [
      { vi: "American Joint Committee on Cancer — Hệ thống TNM", en: "American Joint Committee on Cancer — TNM system" },
      { vi: "National Cancer Institute — Chẩn đoán giai đoạn ung thư", en: "National Cancer Institute — Cancer staging" },
    ],
  },

  {
    slug: "cham-soc-nguoi-benh-tai-nha",
    category: "support",
    title: {
      vi: "Chăm sóc người bệnh ung thư tại nhà",
      en: "Caring for someone with cancer at home",
    },
    excerpt: {
      vi: "Làm người chăm sóc là một vai trò nặng nhọc và thầm lặng. Bốn mặt cần để tâm — kể cả chính bạn.",
      en: "Being a carer is heavy, quiet work. Four sides to tend to — including yourself.",
    },
    readingMin: 5,
    cover: "care-grid",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Người nhà thường trở thành người chăm sóc chính mà không được ai “đào tạo”. Chia việc thành bốn mặt giúp bạn đỡ choáng ngợp.",
          en: "Family members often become the main carer with no training. Splitting the job into four sides makes it less overwhelming.",
        },
      },
      {
        type: "figure",
        infographic: "care-grid",
        caption: {
          vi: "Bốn mặt của việc chăm sóc — và ô cuối cùng, dễ bị quên nhất, là chính bạn.",
          en: "Four sides of caregiving — and the last, most-forgotten one is you.",
        },
      },
      {
        type: "heading",
        text: { vi: "Việc thực tế hằng ngày", en: "Everyday practical care" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Ghi lại lịch uống thuốc và các tác dụng phụ để báo bác sĩ",
            "Chuẩn bị bữa ăn nhỏ, dễ tiêu khi người bệnh chán ăn hoặc buồn nôn",
            "Giữ một cuốn sổ/điện thoại ghi câu hỏi cho lần khám tới",
            "Sắp xếp người thay ca để bạn có lúc nghỉ",
          ],
          en: [
            "Track medication times and side effects to report to the doctor",
            "Prepare small, easy-to-digest meals when appetite or nausea is a problem",
            "Keep one notebook/phone note of questions for the next visit",
            "Arrange someone to swap shifts so you get breaks",
          ],
        },
      },
      {
        type: "heading",
        text: { vi: "Đồng hành về tinh thần", en: "Emotional companionship" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Bạn không cần phải “sửa” cảm xúc của người bệnh. Nhiều khi điều quý nhất chỉ là ngồi cạnh, lắng nghe và không vội an ủi bằng những câu sáo rỗng.",
          en: "You don’t have to “fix” the patient’s feelings. Often the most valuable thing is simply to sit close, listen, and resist rushing in with empty reassurance.",
        },
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Chăm cả chính mình", en: "Care for yourself too" },
        text: {
          vi: "Người chăm sóc kiệt sức thì không chăm được ai. Ngủ đủ, ăn uống, giữ vài mối quan hệ riêng, và đừng ngại nhờ giúp đỡ hay tìm nhóm hỗ trợ. Đó không phải ích kỷ — đó là cách bạn đi được đường dài.",
          en: "A burned-out carer can’t care for anyone. Sleep, eat, keep a few relationships of your own, and don’t hesitate to ask for help or join a support group. That’s not selfish — it’s how you last.",
        },
      },
      {
        type: "quote",
        text: {
          vi: "“Bạn không phải đi con đường này một mình — và người bạn chăm sóc cũng vậy.”",
          en: "“You don’t have to walk this road alone — and neither does the person you care for.”",
        },
      },
    ],
    sources: [
      { vi: "American Cancer Society — Dành cho người chăm sóc", en: "American Cancer Society — For caregivers" },
      { vi: "WHO — Chăm sóc giảm nhẹ", en: "WHO — Palliative care" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function allSlugs(): string[] {
  return articles.map((a) => a.slug);
}

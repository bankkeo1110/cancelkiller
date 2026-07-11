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

  {
    slug: "van-dong-va-can-nang",
    category: "prevention",
    title: {
      vi: "Vận động và cân nặng: đòn bẩy chống 13 loại ung thư",
      en: "Activity and weight: your lever against 13 cancers",
    },
    excerpt: {
      vi: "Thừa cân làm tăng nguy cơ ít nhất 13 loại ung thư. 150 phút vận động mỗi tuần là mục tiêu dễ nhớ.",
      en: "Excess weight raises the risk of at least 13 cancers. 150 minutes of activity a week is the number to remember.",
    },
    readingMin: 5,
    cover: "activity-week",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Sau thuốc lá, thừa cân và ít vận động là nhóm yếu tố nguy cơ ung thư có thể thay đổi lớn nhất. Bạn không cần thành vận động viên — chỉ cần đều đặn.",
          en: "After tobacco, excess weight and inactivity are the biggest changeable cancer risk factors. You don’t need to be an athlete — just consistent.",
        },
      },
      {
        type: "figure",
        infographic: "activity-week",
        caption: {
          vi: "Mục tiêu tối thiểu: 150 phút vận động vừa mỗi tuần, cộng 2 buổi tập cơ.",
          en: "The minimum target: 150 minutes of moderate activity a week, plus 2 muscle sessions.",
        },
        source: { vi: "Phỏng theo WHO", en: "Adapted from WHO" },
      },
      {
        type: "heading",
        text: { vi: "Vì sao cân nặng quan trọng", en: "Why weight matters" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Mô mỡ dư thừa không “nằm im”: nó tạo hormone và tình trạng viêm âm ỉ, thúc đẩy một số tế bào ung thư phát triển. Giảm cân vừa phải cũng đã có lợi.",
          en: "Excess fat tissue isn’t inert: it produces hormones and low-grade inflammation that can push some cancers to grow. Even modest weight loss helps.",
        },
      },
      {
        type: "heading",
        text: { vi: "Cách đưa vận động vào ngày bận rộn", en: "Fitting movement into a busy day" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Chia nhỏ: ba lần 10 phút cũng tính là 30 phút",
            "Đi bộ nhanh, đạp xe, leo cầu thang thay thang máy",
            "Đứng dậy, đi lại mỗi 30–60 phút ngồi làm việc",
            "Chọn hoạt động bạn thấy vui để duy trì lâu dài",
          ],
          en: [
            "Break it up: three 10-minute bouts still count as 30",
            "Brisk walking, cycling, taking stairs over the lift",
            "Stand and move every 30–60 minutes of sitting",
            "Pick something you enjoy so you keep doing it",
          ],
        },
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Ngồi ít cũng quan trọng", en: "Sitting less matters too" },
        text: {
          vi: "Ngồi liên tục nhiều giờ có hại riêng, kể cả khi bạn có tập thể dục. Hãy xen kẽ vận động nhẹ suốt cả ngày, đừng dồn hết vào một buổi.",
          en: "Long unbroken sitting carries its own risk, even if you exercise. Spread light movement across the day rather than saving it all for one session.",
        },
      },
    ],
    sources: [
      { vi: "WHO — Hoạt động thể chất (2022)", en: "WHO — Physical activity (2022)" },
      { vi: "IARC — Béo phì và ung thư", en: "IARC — Body fatness and cancer" },
      { vi: "World Cancer Research Fund — Cân nặng & vận động", en: "World Cancer Research Fund — Weight & activity" },
    ],
  },

  {
    slug: "ung-thu-gan-va-viem-gan",
    category: "screening",
    title: {
      vi: "Ung thư gan và viêm gan B/C: mối lo hàng đầu ở Việt Nam",
      en: "Liver cancer and hepatitis B/C: a top concern in Vietnam",
    },
    excerpt: {
      vi: "Phần lớn ung thư gan ở Việt Nam bắt nguồn từ viêm gan virus — và có thể chặn ở nhiều bước.",
      en: "Most liver cancer in Vietnam starts with viral hepatitis — and can be stopped at several points.",
    },
    readingMin: 6,
    cover: "liver-chain",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Việt Nam nằm trong vùng có tỉ lệ viêm gan B cao, và đây là nguyên nhân hàng đầu của ung thư gan. Tin tốt: có vaccine, có thuốc, và có cách tầm soát.",
          en: "Vietnam has a high rate of hepatitis B, the leading cause of liver cancer here. The good news: there is a vaccine, there are drugs, and there is screening.",
        },
      },
      {
        type: "figure",
        infographic: "liver-chain",
        caption: {
          vi: "Ung thư gan thường là điểm cuối của một chuỗi nhiều năm — và mỗi mắt xích đều có thể can thiệp.",
          en: "Liver cancer is usually the end of a years-long chain — and every link can be broken.",
        },
        source: { vi: "Phỏng theo WHO", en: "Adapted from WHO" },
      },
      {
        type: "heading",
        text: { vi: "Ai nên tầm soát", en: "Who should get screened" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Người nhiễm viêm gan B hoặc C mạn tính",
            "Người bị xơ gan do bất kỳ nguyên nhân nào",
            "Người uống nhiều rượu bia lâu năm",
            "Người có tiền sử gia đình ung thư gan",
          ],
          en: [
            "People with chronic hepatitis B or C",
            "People with cirrhosis from any cause",
            "Long-term heavy drinkers",
            "Those with a family history of liver cancer",
          ],
        },
      },
      {
        type: "table",
        headers: {
          vi: ["Công cụ", "Là gì", "Tần suất"],
          en: ["Tool", "What it is", "How often"],
        },
        rows: [
          [
            { vi: "Siêu âm gan", en: "Liver ultrasound" },
            { vi: "Hình ảnh không xâm lấn, tìm khối bất thường", en: "Non-invasive imaging for lumps" },
            { vi: "Mỗi 6 tháng nếu nguy cơ cao", en: "Every 6 months if high-risk" },
          ],
          [
            { vi: "Xét nghiệm AFP", en: "AFP blood test" },
            { vi: "Dấu ấn trong máu có thể tăng khi có ung thư gan", en: "A blood marker that can rise with liver cancer" },
            { vi: "Kèm siêu âm, mỗi 6 tháng", en: "With ultrasound, every 6 months" },
          ],
          [
            { vi: "Vaccine viêm gan B", en: "Hepatitis B vaccine" },
            { vi: "Phòng bệnh từ gốc", en: "Prevents the root cause" },
            { vi: "Tiêm cho trẻ sơ sinh & người chưa có miễn dịch", en: "Newborns & non-immune adults" },
          ],
        ],
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Aflatoxin — kẻ giấu mặt", en: "Aflatoxin — the hidden threat" },
        text: {
          vi: "Nấm mốc trên lạc, ngô, gạo bảo quản kém sinh ra aflatoxin, chất gây ung thư gan mạnh. Hãy bỏ thực phẩm bị mốc, đừng tiếc rẻ cắt bỏ phần mốc rồi ăn tiếp.",
          en: "Mould on poorly stored peanuts, corn and rice produces aflatoxin, a potent liver carcinogen. Throw out mouldy food — don’t just cut off the mouldy part and eat the rest.",
        },
      },
    ],
    sources: [
      { vi: "WHO — Viêm gan B (2024)", en: "WHO — Hepatitis B (2024)" },
      { vi: "IARC — Aflatoxin và ung thư gan", en: "IARC — Aflatoxins and liver cancer" },
      { vi: "Bộ Y tế Việt Nam — Chương trình tiêm chủng mở rộng", en: "Vietnam Ministry of Health — Expanded immunisation" },
    ],
  },

  {
    slug: "hoa-tri-va-tac-dung-phu",
    category: "treatment",
    title: {
      vi: "Hóa trị: chuyện gì xảy ra và cách sống chung với tác dụng phụ",
      en: "Chemotherapy: what happens and how to cope with side effects",
    },
    excerpt: {
      vi: "Hóa trị đáng sợ hơn trong tưởng tượng. Hiểu cơ chế và cách xử lý giúp bạn chủ động hơn.",
      en: "Chemo is often scarier in the imagination. Understanding it and its side effects puts you back in control.",
    },
    readingMin: 6,
    cover: "chemo-effects",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Hóa trị dùng thuốc để tiêu diệt tế bào phân chia nhanh khắp cơ thể. Vì tế bào lành cũng phân chia nhanh (tóc, niêm mạc, tủy xương), chúng bị ảnh hưởng — đó là gốc của phần lớn tác dụng phụ.",
          en: "Chemotherapy uses drugs to kill fast-dividing cells throughout the body. Because healthy cells also divide fast (hair, gut lining, bone marrow), they get hit too — which is where most side effects come from.",
        },
      },
      {
        type: "figure",
        infographic: "chemo-effects",
        caption: {
          vi: "Không phải ai cũng gặp mọi tác dụng phụ, và hầu hết đều có cách giảm nhẹ.",
          en: "Not everyone gets every side effect, and most can be eased.",
        },
      },
      {
        type: "heading",
        text: { vi: "Khi nào cần gọi bác sĩ ngay", en: "When to call your team now" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Sốt từ 38°C trở lên (dấu hiệu nhiễm trùng nguy hiểm khi bạch cầu thấp)",
            "Chảy máu hoặc bầm tím bất thường",
            "Nôn hoặc tiêu chảy không kiểm soát, mất nước",
            "Khó thở, đau ngực, hoặc lú lẫn",
          ],
          en: [
            "Fever of 38°C or higher (dangerous infection sign when white cells are low)",
            "Unusual bleeding or bruising",
            "Uncontrolled vomiting or diarrhoea, dehydration",
            "Shortness of breath, chest pain or confusion",
          ],
        },
      },
      {
        type: "heading",
        text: { vi: "Tự chăm giữa các đợt", en: "Caring for yourself between cycles" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Rửa tay thường xuyên, tránh nơi đông người khi bạch cầu thấp",
            "Ăn nhiều bữa nhỏ, giàu đạm; uống đủ nước",
            "Ngủ đủ và vận động nhẹ để giảm mệt mỏi",
            "Ghi nhật ký triệu chứng để trao đổi với bác sĩ",
          ],
          en: [
            "Wash hands often; avoid crowds when white cells are low",
            "Eat small, protein-rich meals; drink enough fluid",
            "Sleep well and move gently to ease fatigue",
            "Keep a symptom diary to share with your team",
          ],
        },
      },
      {
        type: "callout",
        tone: "neutral",
        title: { vi: "Tác dụng phụ khác nhau ở mỗi người", en: "Side effects vary a lot" },
        text: {
          vi: "Có người vẫn đi làm suốt quá trình hóa trị, có người cần nghỉ nhiều hơn. So sánh với người khác ít có ích — hãy tập trung vào phác đồ và cảm nhận của chính bạn.",
          en: "Some people keep working through chemo; others need much more rest. Comparing yourself to others rarely helps — focus on your own plan and how you feel.",
        },
      },
    ],
    sources: [
      { vi: "American Cancer Society — Hóa trị", en: "American Cancer Society — Chemotherapy" },
      { vi: "National Cancer Institute — Tác dụng phụ", en: "National Cancer Institute — Side effects" },
    ],
  },

  {
    slug: "mien-dich-va-nham-trung-dich",
    category: "treatment",
    title: {
      vi: "Miễn dịch & nhắm trúng đích: điều trị ung thư hiện đại",
      en: "Immunotherapy & targeted therapy: modern cancer treatment",
    },
    excerpt: {
      vi: "Không phải mọi ca ung thư đều điều trị giống nhau. Ba cách tấn công khác nhau, và vì sao xét nghiệm gen ngày càng quan trọng.",
      en: "Not every cancer is treated the same way. Three different attacks — and why gene testing matters more and more.",
    },
    readingMin: 6,
    cover: "therapy-compare",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Trong hơn một thập kỷ qua, điều trị ung thư đã bước sang thời “cá thể hóa”: chọn thuốc dựa trên đặc điểm riêng của khối u, không chỉ vị trí của nó.",
          en: "Over the past decade, cancer treatment has entered a “personalised” era: choosing drugs based on a tumour’s own features, not just where it sits.",
        },
      },
      {
        type: "figure",
        infographic: "therapy-compare",
        caption: {
          vi: "Ba cách tấn công ung thư — thường được kết hợp với nhau và với phẫu thuật, xạ trị.",
          en: "Three ways to attack cancer — often combined with each other and with surgery or radiation.",
        },
      },
      {
        type: "heading",
        text: { vi: "Nhắm trúng đích", en: "Targeted therapy" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Thuốc nhắm đích “khóa” vào một đột biến hoặc protein đặc hiệu mà tế bào ung thư phụ thuộc vào. Vì thế cần xét nghiệm khối u trước để biết thuốc có phù hợp không — không phải ai cũng có “đích” để nhắm.",
          en: "Targeted drugs lock onto a specific mutation or protein the cancer depends on. That’s why the tumour is tested first to see whether the drug fits — not everyone has a “target” to aim at.",
        },
      },
      {
        type: "heading",
        text: { vi: "Miễn dịch", en: "Immunotherapy" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Liệu pháp miễn dịch không đánh trực tiếp khối u mà “tháo phanh” cho hệ miễn dịch, giúp nó nhận diện và tiêu diệt tế bào ung thư. Với một số loại ung thư, nó tạo ra đáp ứng kéo dài đáng kể.",
          en: "Immunotherapy doesn’t attack the tumour directly; it releases the “brakes” on the immune system so it can recognise and destroy cancer cells. For some cancers, it produces remarkably durable responses.",
        },
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Hãy hỏi về xét nghiệm phân tử", en: "Ask about molecular testing" },
        text: {
          vi: "Nếu bạn hoặc người thân được chẩn đoán ung thư, hãy hỏi bác sĩ liệu khối u có nên làm xét nghiệm đột biến/dấu ấn sinh học không. Kết quả có thể mở ra những lựa chọn điều trị mà phác đồ chuẩn không có.",
          en: "If you or a loved one is diagnosed, ask whether the tumour should be tested for mutations or biomarkers. The results can unlock treatment options that standard protocols miss.",
        },
      },
    ],
    sources: [
      { vi: "National Cancer Institute — Liệu pháp miễn dịch", en: "National Cancer Institute — Immunotherapy" },
      { vi: "American Cancer Society — Liệu pháp nhắm trúng đích", en: "American Cancer Society — Targeted therapy" },
    ],
  },

  {
    slug: "dinh-duong-khi-dieu-tri",
    category: "support",
    title: {
      vi: "Ăn uống khi đang điều trị ung thư",
      en: "Eating well during cancer treatment",
    },
    excerpt: {
      vi: "Khi điều trị làm bạn chán ăn, buồn nôn hay đổi vị giác, ăn đủ trở thành một phần của việc chữa bệnh.",
      en: "When treatment kills appetite or changes taste, eating enough becomes part of the treatment itself.",
    },
    readingMin: 5,
    cover: "eating-treatment",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Giữ đủ năng lượng và đạm giúp cơ thể chịu đựng điều trị tốt hơn, hồi phục nhanh hơn và đỡ nhiễm trùng. Trong giai đoạn này, mục tiêu là “ăn đủ”, chưa phải “ăn hoàn hảo”.",
          en: "Keeping up energy and protein helps your body tolerate treatment, recover faster and fight infection. During this phase, the goal is “eating enough”, not “eating perfectly”.",
        },
      },
      {
        type: "figure",
        infographic: "eating-treatment",
        caption: {
          vi: "Bốn nguyên tắc thực tế khi ăn uống trở nên khó khăn.",
          en: "Four practical rules for when eating gets hard.",
        },
        source: { vi: "Phỏng theo ACS", en: "Adapted from ACS" },
      },
      {
        type: "heading",
        text: { vi: "Mẹo cho từng vấn đề", en: "Tips for each problem" },
      },
      {
        type: "table",
        headers: {
          vi: ["Vấn đề", "Thử cách này"],
          en: ["Problem", "Try this"],
        },
        rows: [
          [
            { vi: "Chán ăn", en: "No appetite" },
            { vi: "Ăn theo giờ thay vì chờ đói; món giàu năng lượng, khẩu phần nhỏ", en: "Eat by the clock, not by hunger; small, energy-dense portions" },
          ],
          [
            { vi: "Buồn nôn", en: "Nausea" },
            { vi: "Đồ nguội, ít mùi; tránh món béo, chiên; uống gừng", en: "Cool, low-smell food; avoid greasy fried dishes; try ginger" },
          ],
          [
            { vi: "Lở miệng, khó nuốt", en: "Mouth sores, trouble swallowing" },
            { vi: "Món mềm, xay nhuyễn; tránh chua cay, nóng", en: "Soft, blended food; avoid acidic, spicy, hot items" },
          ],
          [
            { vi: "Đổi vị giác", en: "Taste changes" },
            { vi: "Dùng đồ nhựa thay kim loại; nêm chanh, thảo mộc", en: "Use plastic instead of metal cutlery; add lemon, herbs" },
          ],
        ],
      },
      {
        type: "callout",
        tone: "accent",
        title: { vi: "Cẩn trọng với thực phẩm chức năng", en: "Be careful with supplements" },
        text: {
          vi: "Một số vitamin liều cao và thảo dược có thể can thiệp vào hóa trị hoặc xạ trị. Luôn hỏi bác sĩ trước khi dùng bất kỳ thực phẩm chức năng nào trong thời gian điều trị.",
          en: "Some high-dose vitamins and herbal products can interfere with chemo or radiation. Always check with your doctor before taking any supplement during treatment.",
        },
      },
    ],
    sources: [
      { vi: "American Cancer Society — Dinh dưỡng cho người bệnh ung thư", en: "American Cancer Society — Nutrition for people with cancer" },
      { vi: "National Cancer Institute — Dinh dưỡng trong điều trị", en: "National Cancer Institute — Nutrition in cancer care" },
    ],
  },

  {
    slug: "cham-soc-giam-nhe",
    category: "support",
    title: {
      vi: "Chăm sóc giảm nhẹ: hiểu đúng để không bỏ lỡ",
      en: "Palliative care: understood right, not too late",
    },
    excerpt: {
      vi: "Nhiều người nhầm chăm sóc giảm nhẹ là “buông xuôi”. Thực ra nó nên bắt đầu ngay từ khi chẩn đoán.",
      en: "Many mistake palliative care for “giving up”. In fact it should begin right at diagnosis.",
    },
    readingMin: 5,
    cover: "palliative-scope",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Chăm sóc giảm nhẹ tập trung vào chất lượng sống: kiểm soát đau, triệu chứng và nâng đỡ tinh thần — song song với điều trị đặc hiệu, chứ không phải thay thế nó.",
          en: "Palliative care focuses on quality of life: controlling pain, symptoms and emotional strain — alongside active treatment, not instead of it.",
        },
      },
      {
        type: "figure",
        infographic: "palliative-scope",
        caption: {
          vi: "Chăm sóc giảm nhẹ đi cùng suốt hành trình, không chỉ ở giai đoạn cuối.",
          en: "Palliative care runs the whole journey, not only at the end.",
        },
        source: { vi: "Phỏng theo WHO", en: "Adapted from WHO" },
      },
      {
        type: "heading",
        text: { vi: "Chăm sóc giảm nhẹ giúp gì", en: "What palliative care helps with" },
      },
      {
        type: "list",
        items: {
          vi: [
            "Kiểm soát đau và các triệu chứng khó chịu",
            "Hỗ trợ tâm lý cho người bệnh và gia đình",
            "Giúp hiểu lựa chọn điều trị và ra quyết định",
            "Phối hợp chăm sóc giữa các bác sĩ, điều dưỡng",
          ],
          en: [
            "Controlling pain and distressing symptoms",
            "Emotional support for patient and family",
            "Help understanding options and making decisions",
            "Coordinating care across doctors and nurses",
          ],
        },
      },
      {
        type: "paragraph",
        text: {
          vi: "Nghiên cứu cho thấy người được chăm sóc giảm nhẹ sớm thường ít triệu chứng hơn, tinh thần tốt hơn, và trong một số trường hợp còn sống lâu hơn.",
          en: "Studies show people who receive palliative care early often have fewer symptoms, better mood, and in some cases even live longer.",
        },
      },
      {
        type: "callout",
        tone: "neutral",
        title: { vi: "Không phải là từ bỏ hy vọng", en: "It is not giving up hope" },
        text: {
          vi: "Bạn hoàn toàn có thể vừa điều trị tích cực để khỏi bệnh, vừa nhận chăm sóc giảm nhẹ để sống dễ chịu hơn. Hãy chủ động hỏi bác sĩ về dịch vụ này.",
          en: "You can absolutely pursue active treatment aiming for a cure and receive palliative care to feel better at the same time. Ask your doctor about it early.",
        },
      },
      {
        type: "quote",
        text: {
          vi: "“Thêm sự sống cho những ngày tháng, không chỉ thêm ngày tháng cho sự sống.”",
          en: "“Adding life to days, not simply days to life.”",
        },
      },
    ],
    sources: [
      { vi: "WHO — Chăm sóc giảm nhẹ (2020)", en: "WHO — Palliative care (2020)" },
      { vi: "American Cancer Society — Chăm sóc giảm nhẹ", en: "American Cancer Society — Palliative care" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function allSlugs(): string[] {
  return articles.map((a) => a.slug);
}

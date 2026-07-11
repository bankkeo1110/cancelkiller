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
  | { type: "image"; src: string; alt: Bi; caption?: Bi }
  | { type: "quote"; text: Bi };

export type Category = "types" | "prevention" | "screening" | "treatment" | "support";

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
  types: { label: { vi: "Theo loại ung thư", en: "By cancer type" } },
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
        type: "image",
        src: "vegetables-fruit.jpg",
        alt: { vi: "Quầy rau quả tươi ở chợ", en: "A fresh fruit and vegetable market stall" },
        caption: {
          vi: "Ăn đa dạng rau quả nhiều màu là cách đơn giản nhất để nạp chất xơ và chất chống oxy hóa.",
          en: "Eating a colourful variety of produce is the simplest way to get fibre and antioxidants.",
        },
      },
      {
        type: "heading",
        text: { vi: "Chất xơ và hệ vi sinh đường ruột", en: "Fibre and your gut" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Chất xơ từ rau, quả, đậu và ngũ cốc nguyên hạt giúp ruột hoạt động đều, nuôi vi khuẩn có lợi và được chứng minh làm giảm nguy cơ ung thư đại–trực tràng. Đây là lý do chất xơ quan trọng hơn bất kỳ “siêu thực phẩm” đắt tiền nào.",
          en: "Fibre from vegetables, fruit, beans and whole grains keeps the bowel moving, feeds helpful bacteria, and is proven to lower colorectal cancer risk. That’s why fibre matters more than any pricey “superfood”.",
        },
      },
      {
        type: "list",
        items: {
          vi: ["Đặt mục tiêu 25–30g chất xơ mỗi ngày", "Để nguyên vỏ rau củ khi có thể", "Đổi gạo trắng lấy gạo lứt vài bữa trong tuần", "Thêm đậu, đỗ vào món ăn quen thuộc"],
          en: ["Aim for 25–30g of fibre a day", "Keep the skins on vegetables when you can", "Swap white rice for brown a few meals a week", "Add beans and lentils to familiar dishes"],
        },
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
        type: "image",
        src: "no-smoking.jpg",
        alt: { vi: "Điếu thuốc đang cháy trong gạt tàn", en: "A lit cigarette in an ashtray" },
        caption: {
          vi: "Mỗi điếu thuốc chứa hàng nghìn hóa chất, trong đó có hàng chục chất gây ung thư đã được xác định.",
          en: "Each cigarette contains thousands of chemicals, including dozens of identified carcinogens.",
        },
      },
      {
        type: "heading",
        text: { vi: "Còn thuốc lá điện tử (vape) thì sao?", en: "What about vaping?" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Thuốc lá điện tử ít chất độc hơn thuốc lá truyền thống, nhưng “ít hại hơn” không có nghĩa là “an toàn”. Chúng vẫn chứa nicotine gây nghiện và các hóa chất mà tác động lâu dài chưa được biết đầy đủ. Với người chưa hút, tốt nhất là đừng bắt đầu; với người đang cai, vape không phải lựa chọn đầu tay được khuyến nghị.",
          en: "E-cigarettes contain fewer toxins than tobacco, but “less harmful” doesn’t mean “safe”. They still deliver addictive nicotine and chemicals whose long-term effects aren’t fully known. If you don’t smoke, don’t start; if you’re quitting, vaping isn’t the first-line recommended option.",
        },
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
        type: "image",
        src: "doctor-consult.jpg",
        alt: { vi: "Bác sĩ khám cho bệnh nhân", en: "A doctor examining a patient" },
        caption: {
          vi: "Nếu phát hiện thay đổi ở vú, hãy đi khám sớm — phần lớn khối u ở vú là lành tính, nhưng chỉ bác sĩ mới xác định được.",
          en: "If you notice a breast change, get it checked early — most breast lumps are benign, but only a doctor can be sure.",
        },
      },
      {
        type: "heading",
        text: { vi: "Tự khám vú theo 3 bước", en: "Self-exam in 3 steps" },
      },
      {
        type: "list",
        ordered: true,
        items: {
          vi: [
            "Nhìn: đứng trước gương, quan sát hình dạng, da và núm vú hai bên",
            "Sờ khi đứng: dùng đầu ngón tay ấn nhẹ theo vòng tròn khắp bầu vú và nách",
            "Sờ khi nằm: lặp lại để cảm nhận các lớp sâu hơn của mô vú",
          ],
          en: [
            "Look: in front of a mirror, check the shape, skin and nipples of both breasts",
            "Feel standing: use fingertip pads to press in small circles over the whole breast and armpit",
            "Feel lying down: repeat to reach the deeper layers of breast tissue",
          ],
        },
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
        type: "image",
        src: "vaccination.jpg",
        alt: { vi: "Nhân viên y tế chuẩn bị mũi tiêm", en: "A health worker preparing an injection" },
        caption: {
          vi: "Nhiều nước, trong đó có Việt Nam, đã đưa vaccine HPV vào chương trình tiêm chủng cho trẻ.",
          en: "Many countries, Vietnam among them, now include the HPV vaccine in childhood immunisation.",
        },
      },
      {
        type: "heading",
        text: { vi: "HPV không chỉ gây ung thư cổ tử cung", en: "HPV causes more than cervical cancer" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Cùng nhóm virus HPV còn liên quan tới ung thư hậu môn, hầu họng, dương vật và âm hộ — ở cả nam và nữ. Vì thế nhiều nước khuyến nghị tiêm vaccine HPV cho cả bé trai lẫn bé gái.",
          en: "The same HPV viruses are linked to anal, throat, penile and vulvar cancers — in both men and women. That’s why many countries now recommend the HPV vaccine for boys as well as girls.",
        },
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
        type: "image",
        src: "jogging.jpg",
        alt: { vi: "Hai người chạy bộ ngoài trời", en: "Two people jogging outdoors" },
        caption: {
          vi: "Vận động không cần phòng gym: đi bộ nhanh hay chạy bộ đều đặn đã đủ đạt mục tiêu.",
          en: "Activity needs no gym: brisk walking or a regular jog is enough to hit the target.",
        },
      },
      {
        type: "heading",
        text: { vi: "Vận động cả trong khi điều trị", en: "Moving even during treatment" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Nghiên cứu cho thấy vận động nhẹ nhàng, phù hợp sức khỏe trong và sau điều trị ung thư giúp giảm mệt mỏi, cải thiện tâm trạng và thể lực. Hãy hỏi bác sĩ về mức độ phù hợp — thường là đi bộ, giãn cơ, bài tập nhẹ.",
          en: "Studies show gentle, appropriate activity during and after cancer treatment reduces fatigue and improves mood and fitness. Ask your doctor what suits you — often walking, stretching and light exercise.",
        },
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
        type: "image",
        src: "vaccine-vials.jpg",
        alt: { vi: "Lọ vaccine trong nhà máy", en: "Vaccine vials in a factory" },
        caption: {
          vi: "Việt Nam tiêm vaccine viêm gan B cho trẻ ngay trong 24 giờ đầu sau sinh để phòng lây từ mẹ.",
          en: "Vietnam gives the hepatitis B vaccine within 24 hours of birth to prevent mother-to-child spread.",
        },
      },
      {
        type: "heading",
        text: { vi: "Rượu bia và gan nhiễm mỡ", en: "Alcohol and fatty liver" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Ngoài viêm gan virus, hai nguyên nhân đang tăng nhanh là rượu bia và gan nhiễm mỡ (liên quan béo phì, tiểu đường). Cả hai đều có thể dẫn tới xơ gan và ung thư gan — và cả hai đều cải thiện được bằng thay đổi lối sống.",
          en: "Beyond viral hepatitis, two fast-rising causes are alcohol and fatty liver disease (tied to obesity and diabetes). Both can lead to cirrhosis and liver cancer — and both improve with lifestyle change.",
        },
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
        type: "image",
        src: "doctor-consult.jpg",
        alt: { vi: "Bác sĩ trao đổi với bệnh nhân", en: "A doctor talking with a patient" },
        caption: {
          vi: "Hãy hỏi kỹ đội ngũ điều trị về tác dụng phụ có thể gặp và cách phòng trước — bạn có quyền được biết.",
          en: "Ask your care team about likely side effects and how to prevent them in advance — you have every right to know.",
        },
      },
      {
        type: "heading",
        text: { vi: "Bảo tồn khả năng sinh sản", en: "Protecting future fertility" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Một số phác đồ hóa trị có thể ảnh hưởng khả năng sinh con sau này. Nếu bạn còn trong độ tuổi sinh sản, hãy hỏi bác sĩ về các lựa chọn (trữ trứng, trữ tinh trùng) TRƯỚC khi bắt đầu điều trị — vì sau đó có thể muộn.",
          en: "Some chemotherapy regimens can affect future fertility. If you are of reproductive age, ask your doctor about options (egg or sperm banking) BEFORE treatment starts — afterwards may be too late.",
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
        type: "image",
        src: "healthy-meal.jpg",
        alt: { vi: "Đĩa cá, khoai và rau", en: "A plate of fish, potatoes and vegetables" },
        caption: {
          vi: "Bữa ăn giàu đạm và năng lượng, dễ nuốt như cá hấp với rau củ mềm rất phù hợp trong thời gian điều trị.",
          en: "Protein- and energy-rich, easy-to-eat meals like steamed fish with soft vegetables suit treatment well.",
        },
      },
      {
        type: "heading",
        text: { vi: "An toàn thực phẩm khi miễn dịch suy giảm", en: "Food safety when immunity is low" },
      },
      {
        type: "paragraph",
        text: {
          vi: "Trong một số đợt điều trị, bạch cầu giảm khiến cơ thể dễ nhiễm trùng. Khi đó, an toàn thực phẩm rất quan trọng: ăn chín uống sôi, rửa sạch rau quả, tránh đồ sống (gỏi, trứng lòng đào), và bảo quản thức ăn đúng cách.",
          en: "During some treatments, low white-cell counts make infections more likely. Food safety then matters: eat food well-cooked, wash produce, avoid raw dishes (sashimi, runny eggs) and store food properly.",
        },
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

  {
    slug: "ung-thu-phoi",
    category: "types",
    title: { vi: "Ung thư phổi: toàn cảnh dễ hiểu", en: "Lung cancer: the full picture, made simple" },
    excerpt: {
      vi: "Nguyên nhân tử vong do ung thư hàng đầu thế giới — nhưng phần lớn phòng ngừa được, và ngày càng nhiều cách điều trị mới.",
      en: "The world’s leading cause of cancer death — yet largely preventable, with more new treatments than ever.",
    },
    readingMin: 8,
    cover: "img:chest-xray.jpg",
    updated: "2026-07-11",
    blocks: [
      {
        type: "lead",
        text: {
          vi: "Ung thư phổi thường bị phát hiện muộn vì triệu chứng sớm mờ nhạt. Hiểu nguy cơ và dấu hiệu giúp bạn và người thân chủ động đi khám đúng lúc.",
          en: "Lung cancer is often found late because early symptoms are vague. Knowing the risks and signs helps you and your family act at the right time.",
        },
      },
      {
        type: "image",
        src: "chest-xray.jpg",
        alt: { vi: "Phim X-quang ngực", en: "A chest X-ray" },
        caption: {
          vi: "X-quang ngực là bước hình ảnh đầu tiên; chẩn đoán xác định cần chụp CT và sinh thiết. (Ảnh minh hoạ, không phải ca ung thư.)",
          en: "A chest X-ray is often the first imaging step; a firm diagnosis needs CT and biopsy. (Illustrative image, not a cancer case.)",
        },
      },
      {
        type: "heading", text: { vi: "Tổng quan", en: "Overview" } },
      {
        type: "paragraph",
        text: {
          vi: "Ung thư phổi khởi phát từ tế bào lót đường thở. Có hai nhóm chính: ung thư phổi không tế bào nhỏ (chiếm ~85%, tiến triển chậm hơn) và ung thư phổi tế bào nhỏ (ít gặp hơn, phát triển nhanh). Việc phân loại quyết định hướng điều trị.",
          en: "Lung cancer starts in the cells lining the airways. There are two main groups: non-small-cell lung cancer (~85%, slower growing) and small-cell lung cancer (less common, fast growing). The type shapes the treatment.",
        },
      },
      {
        type: "heading", text: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" } },
      {
        type: "list",
        items: {
          vi: ["Ho kéo dài hơn 2–3 tuần, hoặc ho ra máu", "Khó thở, thở khò khè, đau ngực khi thở sâu", "Khàn tiếng dai dẳng", "Sụt cân, chán ăn, mệt mỏi không rõ lý do", "Viêm phổi tái đi tái lại"],
          en: ["A cough lasting more than 2–3 weeks, or coughing blood", "Breathlessness, wheezing, chest pain on deep breaths", "A persistent hoarse voice", "Unexplained weight loss, poor appetite, fatigue", "Repeated chest infections"],
        },
      },
      {
        type: "heading", text: { vi: "Yếu tố nguy cơ", en: "Risk factors" } },
      {
        type: "list",
        items: {
          vi: ["Hút thuốc lá (kể cả thuốc lào, xì gà) — yếu tố lớn nhất", "Hít khói thuốc thụ động", "Ô nhiễm không khí và khí radon trong nhà", "Phơi nhiễm amiăng, kim loại nặng nghề nghiệp", "Tiền sử gia đình mắc ung thư phổi"],
          en: ["Smoking (including pipe, cigar) — the biggest factor", "Breathing secondhand smoke", "Air pollution and indoor radon gas", "Occupational asbestos or heavy-metal exposure", "Family history of lung cancer"],
        },
      },
      {
        type: "callout",
        tone: "neutral",
        title: { vi: "Người không hút thuốc vẫn có thể mắc", en: "Non-smokers can get it too" },
        text: {
          vi: "Khoảng 10–20% ca ung thư phổi xảy ra ở người chưa từng hút thuốc, liên quan tới ô nhiễm, radon, khói bếp và yếu tố di truyền. Đừng loại trừ chẩn đoán chỉ vì bạn không hút thuốc.",
          en: "About 10–20% of lung cancers occur in people who never smoked, linked to pollution, radon, cooking smoke and genetics. Don’t rule it out just because you don’t smoke.",
        },
      },
      {
        type: "heading", text: { vi: "Chẩn đoán & tầm soát", en: "Diagnosis & screening" } },
      {
        type: "paragraph",
        text: {
          vi: "Chẩn đoán thường qua chụp CT ngực, sau đó sinh thiết để xác định loại tế bào và xét nghiệm đột biến gen. Với người hút thuốc nhiều từ 50 tuổi, chụp CT liều thấp hằng năm giúp phát hiện sớm và giảm tử vong.",
          en: "Diagnosis usually involves a chest CT, then a biopsy to confirm the cell type and test for gene mutations. For heavy smokers aged 50+, a yearly low-dose CT scan finds cancer early and lowers deaths.",
        },
      },
      {
        type: "heading", text: { vi: "Điều trị", en: "Treatment" } },
      {
        type: "list",
        items: {
          vi: ["Phẫu thuật cắt bỏ khi khối u còn khu trú", "Xạ trị, thường kết hợp hóa trị", "Nhắm trúng đích nếu khối u có đột biến phù hợp (EGFR, ALK…)", "Liệu pháp miễn dịch, ngày càng quan trọng"],
          en: ["Surgery to remove a localised tumour", "Radiation, often with chemotherapy", "Targeted therapy if the tumour has a matching mutation (EGFR, ALK…)", "Immunotherapy, increasingly important"],
        },
      },
      {
        type: "figure",
        infographic: "staging-bars",
        caption: { vi: "Như hầu hết ung thư, phát hiện càng sớm thì cơ hội điều trị hiệu quả càng cao.", en: "As with most cancers, earlier detection means far better odds." },
      },
      {
        type: "heading", text: { vi: "Phòng ngừa", en: "Prevention" } },
      {
        type: "list",
        items: {
          vi: ["Không hút thuốc và tránh khói thuốc thụ động", "Kiểm tra và giảm radon trong nhà nếu ở vùng nguy cơ", "Đeo bảo hộ khi làm việc với bụi, hóa chất", "Giữ không khí trong nhà thông thoáng, giảm khói bếp"],
          en: ["Don’t smoke and avoid secondhand smoke", "Test and reduce home radon in risk areas", "Wear protection around dust and chemicals at work", "Keep indoor air ventilated, reduce cooking smoke"],
        },
      },
    ],
    sources: [
      { vi: "WHO — Ung thư phổi", en: "WHO — Lung cancer" },
      { vi: "American Cancer Society — Lung Cancer", en: "American Cancer Society — Lung Cancer" },
      { vi: "IARC — Tobacco and cancer", en: "IARC — Tobacco and cancer" },
    ],
  },

  {
    slug: "ung-thu-vu",
    category: "types",
    title: { vi: "Ung thư vú: nhận biết và điều trị", en: "Breast cancer: recognise it and treat it" },
    excerpt: {
      vi: "Ung thư phổ biến nhất ở phụ nữ, nhưng cũng là một trong những loại chữa khỏi cao nhất khi phát hiện sớm.",
      en: "The most common cancer in women, and one of the most curable when caught early.",
    },
    readingMin: 8,
    cover: "breast-timeline",
    updated: "2026-07-11",
    blocks: [
      { type: "lead", text: {
        vi: "Phát hiện sớm là chìa khóa: ở giai đoạn đầu, tỉ lệ sống 5 năm của ung thư vú vượt 90%. Biết cách tự nhận biết và đi tầm soát đúng lịch tạo nên khác biệt lớn.",
        en: "Early detection is everything: at an early stage, 5-year survival for breast cancer exceeds 90%. Knowing how to self-monitor and screen on time makes a big difference.",
      } },
      { type: "figure", infographic: "breast-timeline", caption: {
        vi: "Việc cần làm thay đổi theo tuổi — từ tự nhận biết đến chụp nhũ ảnh định kỳ.",
        en: "What to do changes with age — from self-awareness to regular mammograms.",
      } },
      { type: "heading", text: { vi: "Tổng quan", en: "Overview" } },
      { type: "paragraph", text: {
        vi: "Ung thư vú bắt đầu từ tế bào ống dẫn sữa hoặc tiểu thùy. Nó có nhiều thể khác nhau; xét nghiệm thụ thể hormone (ER/PR) và HER2 giúp bác sĩ chọn thuốc phù hợp. Nam giới cũng có thể mắc, dù hiếm.",
        en: "Breast cancer begins in the milk ducts or lobules. It comes in several subtypes; testing hormone receptors (ER/PR) and HER2 helps doctors pick the right drugs. Men can get it too, though rarely.",
      } },
      { type: "heading", text: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" } },
      { type: "list", items: {
        vi: ["Khối u hoặc chỗ dày lên ở vú hay nách", "Thay đổi kích thước, hình dạng vú", "Da vú lõm, đỏ, sần như vỏ cam", "Núm vú tụt vào hoặc tiết dịch bất thường (nhất là lẫn máu)", "Đau hoặc thay đổi kéo dài ở một bên vú"],
        en: ["A lump or thickening in the breast or armpit", "A change in breast size or shape", "Skin dimpling, redness or orange-peel texture", "A newly inverted nipple or unusual discharge (especially bloody)", "Lasting pain or change in one breast"],
      } },
      { type: "image", src: "doctor-consult.jpg", alt: { vi: "Bác sĩ khám cho bệnh nhân", en: "A doctor examining a patient" }, caption: {
        vi: "Bất kỳ thay đổi mới nào ở vú kéo dài đều nên được bác sĩ thăm khám sớm.",
        en: "Any new, lasting change in the breast deserves a prompt check by a doctor.",
      } },
      { type: "heading", text: { vi: "Yếu tố nguy cơ", en: "Risk factors" } },
      { type: "list", items: {
        vi: ["Tuổi cao và giới nữ", "Tiền sử gia đình, đột biến gen BRCA1/2", "Có kinh sớm, mãn kinh muộn, sinh con muộn hoặc không sinh", "Thừa cân sau mãn kinh, ít vận động, uống rượu bia", "Dùng hormone thay thế kéo dài"],
        en: ["Older age and being female", "Family history, BRCA1/2 mutations", "Early periods, late menopause, late or no pregnancy", "Post-menopausal excess weight, inactivity, alcohol", "Long-term hormone replacement therapy"],
      } },
      { type: "heading", text: { vi: "Chẩn đoán & tầm soát", en: "Diagnosis & screening" } },
      { type: "paragraph", text: {
        vi: "Chụp nhũ ảnh phát hiện khối u trước khi sờ thấy; siêu âm và MRI bổ sung khi mô vú dày hoặc nguy cơ cao. Chẩn đoán xác định bằng sinh thiết. Phụ nữ 40–74 tuổi nên chụp nhũ ảnh mỗi 1–2 năm.",
        en: "Mammograms find tumours before they can be felt; ultrasound and MRI add value for dense tissue or high risk. Biopsy confirms the diagnosis. Women 40–74 should have a mammogram every 1–2 years.",
      } },
      { type: "heading", text: { vi: "Điều trị", en: "Treatment" } },
      { type: "list", items: {
        vi: ["Phẫu thuật bảo tồn vú hoặc cắt toàn bộ tuyến vú", "Xạ trị sau phẫu thuật bảo tồn", "Hóa trị tùy giai đoạn và thể bệnh", "Liệu pháp nội tiết cho khối u nhạy hormone", "Thuốc nhắm đích HER2 khi phù hợp"],
        en: ["Breast-conserving surgery or full mastectomy", "Radiation after conserving surgery", "Chemotherapy depending on stage and subtype", "Hormone therapy for hormone-sensitive tumours", "HER2-targeted drugs when appropriate"],
      } },
      { type: "callout", tone: "accent", title: { vi: "Tự khám vú hằng tháng", en: "Monthly self-exam" }, text: {
        vi: "Mỗi tháng, sau kỳ kinh, hãy nhìn và sờ hai bên vú để quen với trạng thái bình thường của mình. Mục tiêu không phải tự chẩn đoán, mà là phát hiện sớm điều bất thường để đi khám.",
        en: "Once a month, after your period, look at and feel both breasts to learn what is normal for you. The goal isn’t to self-diagnose but to notice changes early and get them checked.",
      } },
    ],
    sources: [
      { vi: "WHO — Global Breast Cancer Initiative", en: "WHO — Global Breast Cancer Initiative" },
      { vi: "American Cancer Society — Breast Cancer", en: "American Cancer Society — Breast Cancer" },
    ],
  },

  {
    slug: "ung-thu-gan",
    category: "types",
    title: { vi: "Ung thư gan: phổ biến ở Việt Nam, phòng được nhiều", en: "Liver cancer: common in Vietnam, largely preventable" },
    excerpt: {
      vi: "Gắn chặt với viêm gan B/C. Tiêm vaccine, điều trị viêm gan và tầm soát định kỳ có thể thay đổi cục diện.",
      en: "Tightly tied to hepatitis B/C. Vaccination, treating hepatitis and regular screening can change the outcome.",
    },
    readingMin: 8,
    cover: "liver-chain",
    updated: "2026-07-11",
    blocks: [
      { type: "lead", text: {
        vi: "Ở Việt Nam, ung thư gan nằm trong nhóm ung thư thường gặp và gây tử vong nhiều nhất — phần lớn do viêm gan virus mạn tính. Đây cũng là loại có nhiều điểm can thiệp để phòng ngừa.",
        en: "In Vietnam, liver cancer is among the most common and deadly — mostly driven by chronic viral hepatitis. It is also one of the most preventable at multiple points.",
      } },
      { type: "figure", infographic: "liver-chain", caption: {
        vi: "Ung thư gan thường là điểm cuối của chuỗi nhiều năm; mỗi mắt xích đều can thiệp được.",
        en: "Liver cancer is usually the end of a years-long chain; every link can be broken.",
      } },
      { type: "heading", text: { vi: "Tổng quan", en: "Overview" } },
      { type: "paragraph", text: {
        vi: "Loại phổ biến nhất là ung thư biểu mô tế bào gan (HCC), thường phát triển trên nền gan đã bị tổn thương do viêm gan mạn hoặc xơ gan. Vì gan có khả năng bù trừ lớn, triệu chứng thường xuất hiện muộn.",
        en: "The most common type is hepatocellular carcinoma (HCC), which usually develops on a liver already damaged by chronic hepatitis or cirrhosis. Because the liver compensates so well, symptoms often appear late.",
      } },
      { type: "heading", text: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" } },
      { type: "list", items: {
        vi: ["Đau hoặc tức vùng hạ sườn phải", "Vàng da, vàng mắt", "Chán ăn, sụt cân, buồn nôn", "Bụng trướng, chân phù", "Mệt mỏi kéo dài"],
        en: ["Pain or discomfort in the upper-right abdomen", "Yellowing of the skin and eyes", "Loss of appetite, weight loss, nausea", "Abdominal swelling, leg oedema", "Persistent fatigue"],
      } },
      { type: "image", src: "vaccine-vials.jpg", alt: { vi: "Lọ vaccine", en: "Vaccine vials" }, caption: {
        vi: "Vaccine viêm gan B — tiêm cho trẻ sơ sinh — là một trong những cách phòng ung thư gan hiệu quả nhất.",
        en: "The hepatitis B vaccine — given at birth — is one of the most effective ways to prevent liver cancer.",
      } },
      { type: "heading", text: { vi: "Yếu tố nguy cơ", en: "Risk factors" } },
      { type: "list", items: {
        vi: ["Viêm gan B hoặc C mạn tính", "Xơ gan do bất kỳ nguyên nhân nào", "Uống nhiều rượu bia lâu năm", "Gan nhiễm mỡ, tiểu đường, béo phì", "Aflatoxin trong thực phẩm mốc"],
        en: ["Chronic hepatitis B or C", "Cirrhosis from any cause", "Long-term heavy alcohol use", "Fatty liver, diabetes, obesity", "Aflatoxin in mouldy food"],
      } },
      { type: "heading", text: { vi: "Chẩn đoán & tầm soát", en: "Diagnosis & screening" } },
      { type: "paragraph", text: {
        vi: "Người nguy cơ cao nên siêu âm gan kèm xét nghiệm AFP mỗi 6 tháng. Khi nghi ngờ, bác sĩ dùng CT hoặc MRI; ung thư gan là một trong ít loại đôi khi chẩn đoán được bằng hình ảnh mà chưa cần sinh thiết.",
        en: "High-risk people should have a liver ultrasound with an AFP blood test every 6 months. If cancer is suspected, doctors use CT or MRI; liver cancer is one of the few sometimes diagnosed by imaging without a biopsy.",
      } },
      { type: "heading", text: { vi: "Điều trị", en: "Treatment" } },
      { type: "list", items: {
        vi: ["Phẫu thuật cắt gan hoặc ghép gan khi đủ điều kiện", "Đốt sóng cao tần, nút mạch hóa chất (TACE)", "Thuốc nhắm đích và liệu pháp miễn dịch cho giai đoạn muộn", "Điều trị song song bệnh gan nền"],
        en: ["Liver resection or transplant when eligible", "Radiofrequency ablation, chemoembolisation (TACE)", "Targeted drugs and immunotherapy for advanced stages", "Treating the underlying liver disease in parallel"],
      } },
      { type: "callout", tone: "accent", title: { vi: "Biết tình trạng viêm gan của mình", en: "Know your hepatitis status" }, text: {
        vi: "Nhiều người mang viêm gan B mạn mà không biết. Một xét nghiệm máu đơn giản cho biết bạn có nhiễm, có miễn dịch, hay cần tiêm vaccine — bước đầu tiên để chặn ung thư gan.",
        en: "Many people carry chronic hepatitis B without knowing. A simple blood test tells you whether you’re infected, immune, or need the vaccine — the first step to preventing liver cancer.",
      } },
    ],
    sources: [
      { vi: "WHO — Viêm gan B", en: "WHO — Hepatitis B" },
      { vi: "American Cancer Society — Liver Cancer", en: "American Cancer Society — Liver Cancer" },
    ],
  },

  {
    slug: "ung-thu-dai-truc-trang",
    category: "types",
    title: { vi: "Ung thư đại–trực tràng: dễ tầm soát nhất", en: "Colorectal cancer: the most screen-preventable" },
    excerpt: {
      vi: "Bắt đầu từ polyp lành có thể cắt bỏ trước khi hóa ung thư. Tầm soát đúng lúc gần như phòng được bệnh.",
      en: "It starts from benign polyps that can be removed before turning cancerous. Timely screening nearly prevents the disease.",
    },
    readingMin: 8,
    cover: "staging-bars",
    updated: "2026-07-11",
    blocks: [
      { type: "lead", text: {
        vi: "Đây là loại ung thư đặc biệt: nó thường phát triển chậm qua nhiều năm từ một polyp nhỏ. Nếu tìm và cắt polyp kịp thời, bạn có thể chặn ung thư trước khi nó hình thành.",
        en: "This cancer is special: it usually grows slowly over years from a small polyp. Find and remove the polyp in time, and you can stop the cancer before it forms.",
      } },
      { type: "figure", infographic: "staging-bars", caption: {
        vi: "Phát hiện sớm khi còn khu trú cho cơ hội chữa khỏi rất cao.",
        en: "Caught early while localised, the chance of cure is very high.",
      } },
      { type: "heading", text: { vi: "Tổng quan", en: "Overview" } },
      { type: "paragraph", text: {
        vi: "Ung thư đại–trực tràng khởi phát ở ruột già hoặc trực tràng, phần lớn từ polyp tuyến. Quá trình từ polyp đến ung thư thường kéo dài 10 năm trở lên — chính khoảng thời gian này tạo cơ hội cho tầm soát.",
        en: "Colorectal cancer starts in the large bowel or rectum, mostly from adenomatous polyps. The journey from polyp to cancer often takes 10 years or more — and that window is exactly what screening exploits.",
      } },
      { type: "heading", text: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" } },
      { type: "list", items: {
        vi: ["Thay đổi thói quen đại tiện kéo dài (tiêu chảy, táo bón, phân dẹt)", "Máu trong phân hoặc chảy máu trực tràng", "Đau bụng, đầy hơi dai dẳng", "Cảm giác đi ngoài không hết", "Sụt cân, thiếu máu không rõ lý do"],
        en: ["A lasting change in bowel habits (diarrhoea, constipation, narrow stools)", "Blood in the stool or rectal bleeding", "Persistent abdominal pain or bloating", "A feeling the bowel doesn’t fully empty", "Unexplained weight loss or anaemia"],
      } },
      { type: "heading", text: { vi: "Yếu tố nguy cơ", en: "Risk factors" } },
      { type: "list", items: {
        vi: ["Tuổi trên 45", "Chế độ ăn nhiều thịt đỏ và thịt chế biến sẵn, ít chất xơ", "Ít vận động, béo phì, hút thuốc, uống rượu", "Tiền sử gia đình hoặc bệnh viêm ruột mạn", "Một số hội chứng di truyền (Lynch, FAP)"],
        en: ["Age over 45", "Diet high in red/processed meat, low in fibre", "Inactivity, obesity, smoking, alcohol", "Family history or chronic inflammatory bowel disease", "Certain inherited syndromes (Lynch, FAP)"],
      } },
      { type: "heading", text: { vi: "Chẩn đoán & tầm soát", en: "Diagnosis & screening" } },
      {
        type: "table",
        headers: { vi: ["Phương pháp", "Cách làm", "Tần suất"], en: ["Method", "How", "Interval"] },
        rows: [
          [ { vi: "Xét nghiệm máu ẩn trong phân (FIT)", en: "Stool test (FIT)" }, { vi: "Lấy mẫu phân tại nhà", en: "At-home stool sample" }, { vi: "Hằng năm", en: "Yearly" } ],
          [ { vi: "Nội soi đại tràng", en: "Colonoscopy" }, { vi: "Soi và cắt polyp cùng lúc", en: "Views and removes polyps" }, { vi: "Mỗi 10 năm (nếu bình thường)", en: "Every 10 years if normal" } ],
        ],
      },
      { type: "heading", text: { vi: "Điều trị", en: "Treatment" } },
      { type: "list", items: {
        vi: ["Cắt polyp qua nội soi ở giai đoạn rất sớm", "Phẫu thuật cắt đoạn ruột mang khối u", "Hóa trị sau mổ tùy giai đoạn", "Xạ trị (chủ yếu với ung thư trực tràng)", "Nhắm đích/miễn dịch cho giai đoạn muộn"],
        en: ["Endoscopic polyp removal at the earliest stage", "Surgery to remove the affected bowel segment", "Post-op chemotherapy depending on stage", "Radiation (mainly for rectal cancer)", "Targeted/immunotherapy for advanced disease"],
      } },
      { type: "callout", tone: "accent", title: { vi: "Đừng ngại nội soi", en: "Don’t fear the colonoscopy" }, text: {
        vi: "Nội soi đại tràng vừa phát hiện vừa cắt bỏ polyp ngay trong một lần — thực sự phòng được ung thư, không chỉ tìm ra nó. Từ 45 tuổi, hãy hỏi bác sĩ về lịch tầm soát phù hợp.",
        en: "A colonoscopy both finds and removes polyps in one go — it truly prevents cancer, not just detects it. From age 45, ask your doctor about the right screening plan.",
      } },
    ],
    sources: [
      { vi: "American Cancer Society — Colorectal Cancer", en: "American Cancer Society — Colorectal Cancer" },
      { vi: "WHO — Cancer screening", en: "WHO — Cancer screening" },
    ],
  },

  {
    slug: "ung-thu-da-day",
    category: "types",
    title: { vi: "Ung thư dạ dày: vai trò của vi khuẩn H. pylori", en: "Stomach cancer: the role of H. pylori" },
    excerpt: {
      vi: "Thường gặp ở châu Á. Một loại vi khuẩn có thể điều trị và thói quen ăn uống là những mảnh ghép quan trọng.",
      en: "Common in Asia. A treatable bacterium and eating habits are key pieces of the puzzle.",
    },
    readingMin: 7,
    cover: "staging-bars",
    updated: "2026-07-11",
    blocks: [
      { type: "lead", text: {
        vi: "Ung thư dạ dày thường tiến triển âm thầm và dễ nhầm với đau dạ dày thông thường. Điều đáng chú ý: một yếu tố nguy cơ hàng đầu — vi khuẩn H. pylori — có thể phát hiện và điều trị được.",
        en: "Stomach cancer often progresses quietly and is easily mistaken for ordinary indigestion. Notably, a leading risk factor — the H. pylori bacterium — can be detected and treated.",
      } },
      { type: "heading", text: { vi: "Tổng quan", en: "Overview" } },
      { type: "paragraph", text: {
        vi: "Phần lớn ung thư dạ dày là ung thư biểu mô tuyến, phát triển từ lớp niêm mạc. Viêm dạ dày mạn do H. pylori có thể dẫn tới thay đổi tiền ung thư qua nhiều năm, nên việc phát hiện sớm rất quan trọng.",
        en: "Most stomach cancers are adenocarcinomas that develop from the mucosal lining. Chronic gastritis from H. pylori can lead to pre-cancerous changes over years, so early detection matters.",
      } },
      { type: "heading", text: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" } },
      { type: "list", items: {
        vi: ["Đau hoặc đầy tức vùng thượng vị kéo dài", "Khó tiêu, ợ nóng dai dẳng, nhanh no", "Buồn nôn, nôn (có thể ra máu)", "Sụt cân, chán ăn, mệt mỏi", "Phân đen do chảy máu"],
        en: ["Lasting pain or fullness in the upper abdomen", "Persistent indigestion, heartburn, feeling full quickly", "Nausea or vomiting (sometimes with blood)", "Weight loss, poor appetite, fatigue", "Black stools from bleeding"],
      } },
      { type: "heading", text: { vi: "Yếu tố nguy cơ", en: "Risk factors" } },
      { type: "list", items: {
        vi: ["Nhiễm H. pylori mạn tính", "Ăn nhiều đồ muối, dưa muối, thực phẩm hun khói", "Ít rau quả tươi", "Hút thuốc lá", "Tiền sử gia đình, viêm teo niêm mạc dạ dày"],
        en: ["Chronic H. pylori infection", "Diet high in salty, pickled, smoked foods", "Few fresh fruits and vegetables", "Smoking", "Family history, atrophic gastritis"],
      } },
      { type: "callout", tone: "accent", title: { vi: "H. pylori có thể diệt được", en: "H. pylori can be cleared" }, text: {
        vi: "Nếu bạn đau dạ dày dai dẳng, hãy hỏi bác sĩ về xét nghiệm H. pylori. Một đợt kháng sinh ngắn có thể loại bỏ vi khuẩn và giảm nguy cơ ung thư dạ dày về sau.",
        en: "If you have persistent stomach trouble, ask your doctor about an H. pylori test. A short course of antibiotics can clear the bacterium and lower future stomach-cancer risk.",
      } },
      { type: "heading", text: { vi: "Chẩn đoán & điều trị", en: "Diagnosis & treatment" } },
      { type: "paragraph", text: {
        vi: "Nội soi dạ dày kèm sinh thiết là phương pháp chẩn đoán chính. Điều trị gồm phẫu thuật cắt dạ dày (một phần hoặc toàn bộ), hóa trị trước/sau mổ, và với một số trường hợp là thuốc nhắm đích HER2 hoặc miễn dịch.",
        en: "Endoscopy with biopsy is the main diagnostic tool. Treatment includes surgery to remove part or all of the stomach, chemotherapy before/after surgery, and for some cases HER2-targeted or immunotherapy drugs.",
      } },
      { type: "heading", text: { vi: "Phòng ngừa", en: "Prevention" } },
      { type: "list", items: {
        vi: ["Điều trị H. pylori khi được chỉ định", "Giảm muối, đồ muối chua, thực phẩm hun khói", "Ăn nhiều rau quả tươi", "Không hút thuốc", "Nội soi khi có triệu chứng dai dẳng hoặc nguy cơ cao"],
        en: ["Treat H. pylori when advised", "Cut salt, pickled and smoked foods", "Eat plenty of fresh vegetables and fruit", "Don’t smoke", "Get an endoscopy for persistent symptoms or high risk"],
      } },
    ],
    sources: [
      { vi: "IARC — Helicobacter pylori", en: "IARC — Helicobacter pylori" },
      { vi: "American Cancer Society — Stomach Cancer", en: "American Cancer Society — Stomach Cancer" },
    ],
  },

  {
    slug: "ung-thu-co-tu-cung",
    category: "types",
    title: { vi: "Ung thư cổ tử cung: loại có thể xóa sổ", en: "Cervical cancer: a cancer we can eliminate" },
    excerpt: {
      vi: "Gần như luôn do virus HPV. Với vaccine và tầm soát, đây là loại ung thư đầu tiên thế giới đặt mục tiêu loại trừ.",
      en: "Almost always caused by HPV. With the vaccine and screening, it’s the first cancer the world aims to eliminate.",
    },
    readingMin: 7,
    cover: "hpv-funnel",
    updated: "2026-07-11",
    blocks: [
      { type: "lead", text: {
        vi: "Ung thư cổ tử cung khác biệt vì ta biết rõ nguyên nhân (virus HPV) và có công cụ chặn ở mọi bước: vaccine, tầm soát, và điều trị tổn thương tiền ung thư.",
        en: "Cervical cancer is unusual because we know its cause (HPV) and have tools to stop it at every step: vaccine, screening, and treating pre-cancer.",
      } },
      { type: "figure", infographic: "hpv-funnel", caption: {
        vi: "Bốn bước phòng ngừa — mỗi bước đều cắt giảm nguy cơ.",
        en: "Four prevention steps — each one cuts the risk.",
      } },
      { type: "heading", text: { vi: "Tổng quan", en: "Overview" } },
      { type: "paragraph", text: {
        vi: "Hầu hết ca ung thư cổ tử cung do nhiễm dai dẳng các chủng HPV nguy cơ cao. Từ khi nhiễm đến khi thành ung thư thường mất 10–20 năm, tạo cơ hội lớn để phát hiện và xử lý tổn thương sớm.",
        en: "Most cervical cancers come from persistent infection with high-risk HPV strains. It usually takes 10–20 years from infection to cancer, giving a large window to find and treat lesions early.",
      } },
      { type: "heading", text: { vi: "Dấu hiệu cảnh báo", en: "Warning signs" } },
      { type: "list", items: {
        vi: ["Chảy máu âm đạo bất thường (giữa kỳ kinh, sau quan hệ, sau mãn kinh)", "Tiết dịch âm đạo có mùi hoặc lẫn máu", "Đau khi quan hệ", "Đau vùng chậu kéo dài"],
        en: ["Unusual vaginal bleeding (between periods, after sex, after menopause)", "Foul-smelling or bloody vaginal discharge", "Pain during intercourse", "Persistent pelvic pain"],
      } },
      { type: "image", src: "vaccination.jpg", alt: { vi: "Tiêm vaccine", en: "A vaccination" }, caption: {
        vi: "Vaccine HPV hiệu quả nhất khi tiêm cho trẻ 9–14 tuổi, trước khi phơi nhiễm virus.",
        en: "The HPV vaccine works best given to children aged 9–14, before exposure to the virus.",
      } },
      { type: "heading", text: { vi: "Yếu tố nguy cơ", en: "Risk factors" } },
      { type: "list", items: {
        vi: ["Nhiễm HPV nguy cơ cao kéo dài", "Chưa tiêm vaccine HPV", "Hút thuốc lá", "Hệ miễn dịch suy yếu (ví dụ nhiễm HIV)", "Không tầm soát định kỳ"],
        en: ["Persistent high-risk HPV infection", "Not being vaccinated against HPV", "Smoking", "A weakened immune system (e.g. HIV)", "Not screening regularly"],
      } },
      { type: "heading", text: { vi: "Chẩn đoán & tầm soát", en: "Diagnosis & screening" } },
      { type: "paragraph", text: {
        vi: "Xét nghiệm HPV và/hoặc Pap phát hiện thay đổi tế bào trước khi thành ung thư; khi bất thường, soi cổ tử cung và sinh thiết sẽ xác định. Phụ nữ 25–65 tuổi nên tầm soát mỗi 3–5 năm tùy xét nghiệm.",
        en: "HPV and/or Pap tests detect cell changes before they become cancer; if abnormal, colposcopy and biopsy confirm. Women 25–65 should screen every 3–5 years depending on the test.",
      } },
      { type: "heading", text: { vi: "Điều trị", en: "Treatment" } },
      { type: "list", items: {
        vi: ["Cắt/đốt tổn thương tiền ung thư (thủ thuật nhỏ)", "Phẫu thuật ở giai đoạn sớm", "Xạ trị kết hợp hóa trị ở giai đoạn tiến triển hơn", "Điều trị nhắm đích/miễn dịch cho giai đoạn muộn"],
        en: ["Removing/ablating pre-cancer lesions (minor procedures)", "Surgery at early stages", "Combined chemo-radiation for more advanced disease", "Targeted/immunotherapy for late stage"],
      } },
      { type: "callout", tone: "accent", title: { vi: "Tiêm rồi vẫn tầm soát", en: "Vaccinated? Still screen" }, text: {
        vi: "Vaccine không phủ hết mọi chủng HPV. Kết hợp tiêm vaccine cho con và tầm soát đều đặn cho bản thân là cách bảo vệ mạnh nhất — và có thể đưa loại ung thư này về gần bằng không.",
        en: "The vaccine doesn’t cover every HPV strain. Vaccinating your children and screening yourself regularly is the strongest protection — and can drive this cancer close to zero.",
      } },
    ],
    sources: [
      { vi: "WHO — Chiến lược loại trừ ung thư cổ tử cung (2020)", en: "WHO — Cervical cancer elimination strategy (2020)" },
      { vi: "American Cancer Society — Cervical Cancer", en: "American Cancer Society — Cervical Cancer" },
    ],
  },
];

// Maps a homepage cancer-type id to its in-depth article slug.
export const typeArticleSlug: Record<string, string> = {
  lung: "ung-thu-phoi",
  breast: "ung-thu-vu",
  liver: "ung-thu-gan",
  colorectal: "ung-thu-dai-truc-trang",
  stomach: "ung-thu-da-day",
  cervical: "ung-thu-co-tu-cung",
};

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function allSlugs(): string[] {
  return articles.map((a) => a.slug);
}

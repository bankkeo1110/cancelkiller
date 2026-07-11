"use client";

import type { FC } from "react";
import { useLang } from "@/lib/i18n";

// Shared SVG helpers — Modernist: flat, 2px rules, red accent, zero radius, flush-left.
const ACCENT = "var(--color-accent)";
const INK = "var(--color-text)";
const DIV = "var(--color-divider)";
const A100 = "var(--color-accent-100)";
const A200 = "var(--color-accent-200)";
const N200 = "var(--color-neutral-200)";
const HEADING = "var(--font-heading)";

const svgWrap: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
  background: "var(--color-bg)",
};

/* 1. Healthy anti-cancer plate */
const NutritionPlate: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  return (
    <svg viewBox="0 0 680 360" style={svgWrap} role="img"
      aria-label={L("Đĩa ăn lành mạnh", "Healthy plate")}>
      <rect x="1" y="1" width="678" height="358" fill="none" stroke={DIV} strokeWidth="2" />
      {/* plate: square, left half veg/fruit, right split grains/protein */}
      <g>
        <rect x="40" y="60" width="150" height="240" fill={A100} stroke={INK} strokeWidth="2" />
        <rect x="190" y="60" width="150" height="120" fill={N200} stroke={INK} strokeWidth="2" />
        <rect x="190" y="180" width="150" height="120" fill={A200} stroke={INK} strokeWidth="2" />
        <text x="115" y="172" textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="30" fill={ACCENT}>½</text>
        <text x="115" y="200" textAnchor="middle" fontSize="13" fill={INK}>{L("Rau & quả", "Veg & fruit")}</text>
        <text x="265" y="118" textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="22" fill={INK}>¼</text>
        <text x="265" y="140" textAnchor="middle" fontSize="12" fill={INK}>{L("Ngũ cốc", "Whole grains")}</text>
        <text x="265" y="238" textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="22" fill={INK}>¼</text>
        <text x="265" y="260" textAnchor="middle" fontSize="12" fill={INK}>{L("Đạm lành", "Lean protein")}</text>
      </g>
      {/* legend */}
      <g fontSize="14" fill={INK}>
        <text x="390" y="80" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
          {L("MỖI BỮA ĂN", "EVERY MEAL")}
        </text>
        <line x1="390" y1="92" x2="640" y2="92" stroke={DIV} strokeWidth="2" />
        <text x="390" y="128">{L("• Nửa đĩa: rau xanh, trái cây", "• Half the plate: vegetables, fruit")}</text>
        <text x="390" y="158">{L("• Ưu tiên ngũ cốc nguyên hạt", "• Choose whole grains")}</text>
        <text x="390" y="188">{L("• Đạm: cá, đậu, thịt gia cầm", "• Protein: fish, beans, poultry")}</text>
        <text x="390" y="230" fontFamily={HEADING} fontWeight="800" fill={ACCENT}>
          {L("HẠN CHẾ", "LIMIT")}
        </text>
        <line x1="390" y1="242" x2="640" y2="242" stroke={DIV} strokeWidth="2" />
        <text x="390" y="278">{L("• Thịt đỏ & thịt chế biến sẵn", "• Red & processed meat")}</text>
        <text x="390" y="300">{L("• Đồ uống có đường, rượu bia", "• Sugary drinks, alcohol")}</text>
      </g>
    </svg>
  );
};

/* 2. Timeline of benefits after quitting smoking */
const QuitTimeline: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const stops = [
    { x: 70, t: L("20 phút", "20 min"), d: L("Nhịp tim, huyết áp giảm", "Heart rate drops") },
    { x: 210, t: L("12 giờ", "12 hrs"), d: L("CO trong máu về mức bình thường", "Blood CO normalises") },
    { x: 350, t: L("1 năm", "1 year"), d: L("Nguy cơ tim mạch giảm nửa", "Heart risk halves") },
    { x: 490, t: L("5 năm", "5 years"), d: L("Nguy cơ ung thư miệng, họng giảm", "Mouth/throat risk falls") },
    { x: 620, t: L("10 năm", "10 years"), d: L("Nguy cơ ung thư phổi giảm ~½", "Lung cancer risk ~½") },
  ];
  return (
    <svg viewBox="0 0 680 300" style={svgWrap} role="img"
      aria-label={L("Lợi ích theo thời gian sau khi bỏ thuốc", "Benefits over time after quitting")}>
      <rect x="1" y="1" width="678" height="298" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="44" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("SAU KHI BỎ THUỐC LÁ", "AFTER YOU QUIT")}
      </text>
      <line x1="30" y1="150" x2="650" y2="150" stroke={INK} strokeWidth="2" />
      {stops.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 6} y="144" width="12" height="12" fill={ACCENT} />
          <text x={s.x} y="120" textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="16" fill={INK}>{s.t}</text>
          <foreignObject x={s.x - 62} y="166" width="124" height="90">
            <div style={{ fontSize: 12, lineHeight: 1.35, textAlign: "center", color: INK }}>{s.d}</div>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
};

/* 3. Breast screening across ages */
const BreastTimeline: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const bands = [
    { x: 40, w: 150, c: A100, age: "20–39", label: L("Biết cơ thể mình, tự khám vú", "Know your body, self-exam") },
    { x: 192, w: 250, c: ACCENT, age: "40–74", label: L("Chụp nhũ ảnh 1–2 năm/lần", "Mammogram every 1–2 yrs"), light: true },
    { x: 444, w: 196, c: A200, age: "75+", label: L("Trao đổi với bác sĩ", "Discuss with your doctor") },
  ];
  return (
    <svg viewBox="0 0 680 280" style={svgWrap} role="img"
      aria-label={L("Tầm soát ung thư vú theo tuổi", "Breast screening by age")}>
      <rect x="1" y="1" width="678" height="278" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="44" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("TẦM SOÁT UNG THƯ VÚ THEO TUỔI", "BREAST SCREENING BY AGE")}
      </text>
      {bands.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y="90" width={b.w} height="120" fill={b.c} stroke={INK} strokeWidth="2" />
          <text x={b.x + 14} y="128" fontFamily={HEADING} fontWeight="800" fontSize="24"
            fill={b.light ? "var(--color-bg)" : INK}>{b.age}</text>
          <foreignObject x={b.x + 10} y="140" width={b.w - 20} height="64">
            <div style={{ fontSize: 12.5, lineHeight: 1.35, color: b.light ? "var(--color-bg)" : INK }}>{b.label}</div>
          </foreignObject>
        </g>
      ))}
      <text x="30" y="244" fontSize="12" fill="color-mix(in srgb, var(--color-text) 65%, transparent)">
        {L("Người nguy cơ cao (gen BRCA, tiền sử gia đình) có thể bắt đầu sớm hơn.",
          "Higher-risk people (BRCA, family history) may start earlier.")}
      </text>
    </svg>
  );
};

/* 4. HPV → cervical cancer prevention funnel */
const HpvFunnel: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const steps = [
    { t: L("Tiêm HPV", "HPV vaccine"), d: L("Trẻ 9–14 tuổi", "Ages 9–14") },
    { t: L("Tầm soát", "Screening"), d: L("Pap/HPV, nữ 25–65", "Pap/HPV, 25–65") },
    { t: L("Điều trị sớm", "Treat early"), d: L("Xử lý tổn thương tiền ung thư", "Pre-cancer lesions") },
    { t: L("Ngăn ung thư", "Cancer prevented"), d: L("Gần như phòng được hoàn toàn", "Almost fully preventable"), fill: true },
  ];
  const w = 150, gap = 14;
  return (
    <svg viewBox="0 0 680 220" style={svgWrap} role="img"
      aria-label={L("Chuỗi phòng ngừa ung thư cổ tử cung", "Cervical cancer prevention chain")}>
      <rect x="1" y="1" width="678" height="218" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="42" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("BỐN BƯỚC PHÒNG UNG THƯ CỔ TỬ CUNG", "FOUR STEPS TO PREVENT CERVICAL CANCER")}
      </text>
      {steps.map((s, i) => {
        const x = 24 + i * (w + gap);
        return (
          <g key={i}>
            <rect x={x} y="80" width={w} height="96" fill={s.fill ? ACCENT : "var(--color-bg)"} stroke={INK} strokeWidth="2" />
            <text x={x + 14} y="112" fontFamily={HEADING} fontWeight="800" fontSize="16"
              fill={s.fill ? "var(--color-bg)" : INK}>{s.t}</text>
            <foreignObject x={x + 10} y="122" width={w - 20} height="48">
              <div style={{ fontSize: 12, lineHeight: 1.3, color: s.fill ? "var(--color-bg)" : INK }}>{s.d}</div>
            </foreignObject>
            {i < steps.length - 1 && (
              <text x={x + w + gap / 2} y="134" textAnchor="middle" fontFamily={HEADING}
                fontWeight="800" fontSize="20" fill={ACCENT}>→</text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

/* 5. Stage vs. illustrative survival */
const StagingBars: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const bars = [
    { s: "I", h: 200, label: L("Khu trú", "Localised") },
    { s: "II", h: 160, label: L("Tại chỗ", "Local") },
    { s: "III", h: 110, label: L("Vùng lân cận", "Regional") },
    { s: "IV", h: 56, label: L("Đã lan xa", "Distant") },
  ];
  const baseY = 250, bw = 90, gap = 46, x0 = 60;
  return (
    <svg viewBox="0 0 680 300" style={svgWrap} role="img"
      aria-label={L("Giai đoạn và cơ hội điều trị", "Stage and treatment odds")}>
      <rect x="1" y="1" width="678" height="298" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="42" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("PHÁT HIỆN CÀNG SỚM, CƠ HỘI CÀNG CAO", "THE EARLIER, THE BETTER THE ODDS")}
      </text>
      <line x1="40" y1={baseY} x2="560" y2={baseY} stroke={INK} strokeWidth="2" />
      {bars.map((b, i) => {
        const x = x0 + i * (bw + gap);
        return (
          <g key={i}>
            <rect x={x} y={baseY - b.h} width={bw} height={b.h} fill={i === 0 ? ACCENT : A200} stroke={INK} strokeWidth="2" />
            <text x={x + bw / 2} y={baseY - b.h - 12} textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="22" fill={INK}>
              {b.s}
            </text>
            <foreignObject x={x - 8} y={baseY + 8} width={bw + 16} height="44">
              <div style={{ fontSize: 12, lineHeight: 1.3, textAlign: "center", color: INK }}>{b.label}</div>
            </foreignObject>
          </g>
        );
      })}
      <foreignObject x="590" y="90" width="80" height="150">
        <div style={{ fontSize: 12, lineHeight: 1.4, color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}>
          {L("Chiều cao chỉ mang tính minh hoạ; tỉ lệ thực khác nhau theo loại.",
            "Heights are illustrative; real rates vary by cancer type.")}
        </div>
      </foreignObject>
    </svg>
  );
};

/* 6. Caregiving domains */
const CareGrid: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const cells = [
    { t: L("Thể chất", "Physical"), d: L("Thuốc, dinh dưỡng, đưa đi khám", "Meds, meals, appointments") },
    { t: L("Cảm xúc", "Emotional"), d: L("Lắng nghe, đồng hành, trấn an", "Listen, reassure, be present") },
    { t: L("Hậu cần", "Practical"), d: L("Giấy tờ, tài chính, lịch hẹn", "Paperwork, finances, schedule") },
    { t: L("Chính mình", "Yourself"), d: L("Người chăm cũng cần nghỉ ngơi", "Carers need rest too") },
  ];
  return (
    <svg viewBox="0 0 680 320" style={svgWrap} role="img"
      aria-label={L("Bốn mặt của việc chăm sóc", "Four sides of caregiving")}>
      <rect x="1" y="1" width="678" height="318" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="42" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("BỐN MẶT CỦA VIỆC CHĂM SÓC", "FOUR SIDES OF CAREGIVING")}
      </text>
      {cells.map((c, i) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 30 + col * 312, y = 70 + row * 120;
        return (
          <g key={i}>
            <rect x={x} y={y} width="300" height="108" fill={i === 3 ? A100 : "var(--color-bg)"} stroke={INK} strokeWidth="2" />
            <text x={x + 18} y={y + 40} fontFamily={HEADING} fontWeight="800" fontSize="19" fill={ACCENT}>{c.t}</text>
            <foreignObject x={x + 16} y={y + 52} width="270" height="48">
              <div style={{ fontSize: 13, lineHeight: 1.35, color: INK }}>{c.d}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

/* 7. Weekly activity target */
const ActivityWeek: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const days = ["T2", "T3", "T4", "T5", "T6"];
  const daysEn = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <svg viewBox="0 0 680 280" style={svgWrap} role="img"
      aria-label={L("150 phút vận động mỗi tuần", "150 minutes of activity a week")}>
      <rect x="1" y="1" width="678" height="278" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="42" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("150 PHÚT MỖI TUẦN", "150 MINUTES A WEEK")}
      </text>
      {days.map((d, i) => {
        const x = 40 + i * 122;
        return (
          <g key={i}>
            <rect x={x} y="80" width="100" height="90" fill={ACCENT} stroke={INK} strokeWidth="2" />
            <text x={x + 50} y="132" textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="24" fill="var(--color-bg)">30′</text>
            <text x={x + 50} y="196" textAnchor="middle" fontSize="13" fill={INK}>{lang === "en" ? daysEn[i] : d}</text>
          </g>
        );
      })}
      <text x="30" y="244" fontSize="13" fill={INK}>
        {L("= 5 buổi × 30 phút vừa sức (đi bộ nhanh, đạp xe, bơi). Thêm 2 buổi tập cơ mỗi tuần.",
          "= 5 × 30 min moderate (brisk walk, cycling, swimming). Add 2 muscle sessions a week.")}
      </text>
    </svg>
  );
};

/* 8. Hepatitis → liver cancer chain */
const LiverChain: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const steps = [
    { t: L("Viêm gan B/C", "Hepatitis B/C") },
    { t: L("Viêm gan mạn", "Chronic hepatitis") },
    { t: L("Xơ gan", "Cirrhosis") },
    { t: L("Ung thư gan", "Liver cancer"), fill: true },
  ];
  const w = 148, gap = 14;
  return (
    <svg viewBox="0 0 680 250" style={svgWrap} role="img"
      aria-label={L("Từ viêm gan tới ung thư gan", "From hepatitis to liver cancer")}>
      <rect x="1" y="1" width="678" height="248" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="42" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("CON ĐƯỜNG TỚI UNG THƯ GAN", "THE PATH TO LIVER CANCER")}
      </text>
      {steps.map((s, i) => {
        const x = 24 + i * (w + gap);
        return (
          <g key={i}>
            <rect x={x} y="72" width={w} height="64" fill={s.fill ? ACCENT : "var(--color-bg)"} stroke={INK} strokeWidth="2" />
            <foreignObject x={x + 8} y="82" width={w - 16} height="48">
              <div style={{ fontFamily: HEADING, fontWeight: 800, fontSize: 15, lineHeight: 1.2, color: s.fill ? "var(--color-bg)" : INK }}>{s.t}</div>
            </foreignObject>
            {i < steps.length - 1 && (
              <text x={x + w + gap / 2} y="110" textAnchor="middle" fontFamily={HEADING} fontWeight="800" fontSize="20" fill={ACCENT}>→</text>
            )}
          </g>
        );
      })}
      <rect x="24" y="164" width="632" height="60" fill={A100} stroke={INK} strokeWidth="2" />
      <text x="40" y="188" fontFamily={HEADING} fontWeight="800" fontSize="13" fill={ACCENT}>{L("CHẶN Ở ĐÂU?", "STOP IT WHERE?")}</text>
      <text x="40" y="210" fontSize="13" fill={INK}>
        {L("Tiêm vaccine viêm gan B · Điều trị viêm gan · Siêu âm + AFP mỗi 6 tháng nếu nguy cơ cao",
          "Hepatitis B vaccine · Treat hepatitis · Ultrasound + AFP every 6 months if high-risk")}
      </text>
    </svg>
  );
};

/* 9. Chemo side effects + management */
const ChemoEffects: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const cells = [
    { t: L("Buồn nôn", "Nausea"), d: L("Thuốc chống nôn, ăn nhẹ nhiều bữa", "Anti-nausea meds, small meals") },
    { t: L("Mệt mỏi", "Fatigue"), d: L("Nghỉ ngơi, vận động nhẹ vừa sức", "Rest, gentle activity") },
    { t: L("Rụng tóc", "Hair loss"), d: L("Tạm thời, thường mọc lại", "Usually temporary") },
    { t: L("Dễ nhiễm trùng", "Infection risk"), d: L("Rửa tay, tránh nơi đông, báo khi sốt", "Hand-washing, report fever") },
    { t: L("Lở miệng", "Mouth sores"), d: L("Súc miệng nước muối, đồ ăn mềm", "Salt rinses, soft food") },
    { t: L("Đổi vị giác", "Taste changes"), d: L("Thử món mới, ăn nguội", "Try new foods, eat cool") },
  ];
  return (
    <svg viewBox="0 0 680 320" style={svgWrap} role="img"
      aria-label={L("Tác dụng phụ hoá trị và cách xử lý", "Chemo side effects and management")}>
      <rect x="1" y="1" width="678" height="318" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="40" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("TÁC DỤNG PHỤ & CÁCH XỬ LÝ", "SIDE EFFECTS & WHAT HELPS")}
      </text>
      {cells.map((c, i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const x = 24 + col * 212, y = 62 + row * 122;
        return (
          <g key={i}>
            <rect x={x} y={y} width="200" height="110" fill="var(--color-bg)" stroke={INK} strokeWidth="2" />
            <text x={x + 14} y={y + 32} fontFamily={HEADING} fontWeight="800" fontSize="16" fill={ACCENT}>{c.t}</text>
            <foreignObject x={x + 12} y={y + 44} width="176" height="58">
              <div style={{ fontSize: 12.5, lineHeight: 1.35, color: INK }}>{c.d}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

/* 10. Chemo vs targeted vs immuno */
const TherapyCompare: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const cols = [
    { t: L("Hoá trị", "Chemotherapy"), d: L("Đánh mọi tế bào phân chia nhanh — cả tế bào lành", "Hits all fast-dividing cells — healthy ones too"), c: N200 },
    { t: L("Nhắm trúng đích", "Targeted"), d: L("Khoá đúng đột biến riêng của khối u", "Locks onto the tumour’s specific mutation"), c: A200 },
    { t: L("Miễn dịch", "Immunotherapy"), d: L("Đánh thức hệ miễn dịch tự tấn công ung thư", "Wakes the immune system to attack cancer"), c: ACCENT, light: true },
  ];
  const w = 200, gap = 16;
  return (
    <svg viewBox="0 0 680 250" style={svgWrap} role="img"
      aria-label={L("So sánh ba cách điều trị", "Three treatments compared")}>
      <rect x="1" y="1" width="678" height="248" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="42" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("BA CÁCH TẤN CÔNG UNG THƯ", "THREE WAYS TO ATTACK CANCER")}
      </text>
      {cols.map((c, i) => {
        const x = 24 + i * (w + gap);
        return (
          <g key={i}>
            <rect x={x} y="72" width={w} height="140" fill={c.c} stroke={INK} strokeWidth="2" />
            <text x={x + 16} y="106" fontFamily={HEADING} fontWeight="800" fontSize="18" fill={c.light ? "var(--color-bg)" : INK}>{c.t}</text>
            <foreignObject x={x + 14} y="120" width={w - 28} height="82">
              <div style={{ fontSize: 13, lineHeight: 1.4, color: c.light ? "var(--color-bg)" : INK }}>{c.d}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

/* 11. Eating during treatment */
const EatingTreatment: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  const cells = [
    { t: L("Ăn ít, nhiều bữa", "Small, frequent meals"), d: L("6–8 bữa nhỏ dễ hơn 3 bữa lớn", "6–8 small beats 3 large") },
    { t: L("Ưu tiên đạm & năng lượng", "Protein & energy first"), d: L("Trứng, cá, sữa, đậu để giữ sức", "Eggs, fish, dairy, beans") },
    { t: L("Uống đủ nước", "Stay hydrated"), d: L("Nhấp từng ngụm cả ngày", "Sip through the day") },
    { t: L("Khi buồn nôn/khó nuốt", "Nausea or trouble swallowing"), d: L("Đồ nguội, mềm, mùi nhẹ", "Cool, soft, mild-smelling food") },
  ];
  return (
    <svg viewBox="0 0 680 300" style={svgWrap} role="img"
      aria-label={L("Ăn uống trong khi điều trị", "Eating during treatment")}>
      <rect x="1" y="1" width="678" height="298" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="40" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("ĂN UỐNG KHI ĐANG ĐIỀU TRỊ", "EATING WHILE IN TREATMENT")}
      </text>
      {cells.map((c, i) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 30 + col * 312, y = 62 + row * 108;
        return (
          <g key={i}>
            <rect x={x} y={y} width="300" height="96" fill={i === 3 ? A100 : "var(--color-bg)"} stroke={INK} strokeWidth="2" />
            <text x={x + 16} y={y + 34} fontFamily={HEADING} fontWeight="800" fontSize="16" fill={ACCENT}>{c.t}</text>
            <foreignObject x={x + 14} y={y + 46} width="272" height="44">
              <div style={{ fontSize: 13, lineHeight: 1.35, color: INK }}>{c.d}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

/* 12. Palliative care runs alongside treatment */
const PalliativeScope: FC = () => {
  const { lang } = useLang();
  const L = (vi: string, en: string) => (lang === "en" ? en : vi);
  return (
    <svg viewBox="0 0 680 240" style={svgWrap} role="img"
      aria-label={L("Chăm sóc giảm nhẹ đi cùng điều trị", "Palliative care runs alongside treatment")}>
      <rect x="1" y="1" width="678" height="238" fill="none" stroke={DIV} strokeWidth="2" />
      <text x="30" y="40" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={ACCENT}>
        {L("GIẢM NHẸ KHÔNG PHẢI CHỈ CUỐI ĐỜI", "PALLIATIVE ISN’T ONLY END-OF-LIFE")}
      </text>
      <text x="30" y="86" fontSize="13" fill={INK}>{L("Chẩn đoán", "Diagnosis")}</text>
      <text x="590" y="86" textAnchor="end" fontSize="13" fill={INK}>{L("Về sau", "Later")}</text>
      <rect x="30" y="96" width="560" height="44" fill={A200} stroke={INK} strokeWidth="2" />
      <text x="46" y="124" fontFamily={HEADING} fontWeight="800" fontSize="15" fill={INK}>{L("Điều trị đặc hiệu", "Active treatment")}</text>
      <rect x="30" y="146" width="560" height="44" fill={ACCENT} stroke={INK} strokeWidth="2" />
      <text x="46" y="174" fontFamily={HEADING} fontWeight="800" fontSize="15" fill="var(--color-bg)">{L("Chăm sóc giảm nhẹ — từ đầu đến cuối", "Palliative care — start to finish")}</text>
      <text x="30" y="220" fontSize="12.5" fill="color-mix(in srgb, var(--color-text) 65%, transparent)">
        {L("Kiểm soát đau và triệu chứng có thể bắt đầu ngay từ khi chẩn đoán, song song điều trị.",
          "Managing pain and symptoms can start at diagnosis, alongside treatment.")}
      </text>
    </svg>
  );
};

export const infographics: Record<string, FC> = {
  "nutrition-plate": NutritionPlate,
  "quit-timeline": QuitTimeline,
  "breast-timeline": BreastTimeline,
  "hpv-funnel": HpvFunnel,
  "staging-bars": StagingBars,
  "care-grid": CareGrid,
  "activity-week": ActivityWeek,
  "liver-chain": LiverChain,
  "chemo-effects": ChemoEffects,
  "therapy-compare": TherapyCompare,
  "eating-treatment": EatingTreatment,
  "palliative-scope": PalliativeScope,
};

export function Infographic({ id }: { id: string }) {
  const Cmp = infographics[id];
  if (!Cmp) return null;
  return <Cmp />;
}

# Vững Tâm — Hiểu đúng về ung thư

Trang web giáo dục song ngữ (Tiếng Việt / English) về ung thư: phòng ngừa, dấu hiệu cảnh báo,
tầm soát, điều trị và đồng hành — dành cho bệnh nhân, người nhà và người quan tâm sức khỏe.

A bilingual (Vietnamese / English) public-health site about cancer: prevention, warning signs,
screening, treatment and support — for patients, caregivers and prevention-minded readers.

## Tính năng

- **8 thói quen phòng ngừa** — lưới infographic + bảng tự kiểm lối sống tương tác (thanh tiến độ trực tiếp)
- **6 loại ung thư phổ biến** — tab chọn loại: dấu hiệu cảnh báo, yếu tố nguy cơ, tầm soát
- **Lịch tầm soát tham khảo** — bảng theo độ tuổi/đối tượng
- **5 phương pháp điều trị chính** — giải thích dễ hiểu
- **Tự đánh giá nguy cơ theo lối sống (6 câu)** — kết quả 3 mức, lưu ẩn danh vào PostgreSQL
- **FAQ** — giải đáp hiểu lầm thường gặp (đường "nuôi" ung thư, điện thoại, di truyền...)
- **Song ngữ VI ⇄ EN** — chuyển toàn trang bằng một nút

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Neon PostgreSQL](https://neon.tech) qua `@neondatabase/serverless`
- [Lucide](https://lucide.dev) icons · Font [Archivo](https://fonts.google.com/specimen/Archivo)
- Thiết kế "Modernist": phẳng, đơn sắc đỏ trên nền trắng ngà, không bo góc, đường kẻ 2px

## Chạy dự án

```bash
npm install
cp .env.example .env.local   # điền DATABASE_URL (Neon)
node --env-file=.env.local scripts/setup-db.mjs   # tạo bảng (chạy 1 lần)
npm run dev
```

Mở http://localhost:3000.

## Cấu trúc

```
app/            layout, page, api/risk-check (lưu kết quả tự đánh giá)
components/     Nav, Hero, Prevention, TypeSelector, SignsScreening,
                Treatment, RiskCheck, Support, Faq, Poster, Footer
lib/            content.ts (toàn bộ nội dung song ngữ), i18n.tsx, db.ts
scripts/        setup-db.mjs (tạo bảng risk_checks)
```

## Lưu ý quan trọng

Trang này **chỉ nhằm mục đích giáo dục, không phải lời khuyên y khoa**. Nội dung tổng hợp theo
hướng dẫn của WHO, IARC, American Cancer Society và Bộ Y tế Việt Nam — cần được nhân viên y tế
có chuyên môn thẩm định trước khi công bố chính thức.

// ===== State =====
let isDark = false;
 
// ===== Element References =====
const toggleButton = document.querySelector('#theme-toggle');
const footer = document.querySelector('#card-footer');
 
// ===== Event: สลับธีม =====
// สังเกต: ผูก event ใน JS ไม่ใช่ onclick ใน HTML (Separation of Concerns)
toggleButton.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
 
  // ใช้ template literal ตามมาตรฐานของวิชา
  toggleButton.textContent = isDark ? `☀️ โหมดกลางวัน` : `🌙 โหมดกลางคืน`;
});
 
// ===== Footer: ปีอัตโนมัติด้วย template literal =====
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;

// เปลี่ยนชื่อบนการ์ดตามข้อความที่พิมพ์
const nameInput = document.querySelector("#name-input");
const cardName = document.querySelector("#card-name");

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    cardName.textContent = "Sakkayarik Kanchanda";
  } else {
    cardName.textContent = nameInput.value;
  }
});
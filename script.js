const chat = document.getElementById("chat");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  const reply = generateResponse(text);
  setTimeout(() => addMessage("bot", reply), 500);
}

function addMessage(role, text) {
  const msg = document.createElement("div");
  msg.className = `message ${role}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function generateResponse(text) {
  const cleaned = text.toLowerCase().replace(/[؟?.,!]/g, "").trim();

  if (cleaned.includes("سلام")) return "سلام! چه کمکی ازم برمیاد؟";
  if (cleaned.includes("اسم تو چیه")) return "من Axcel AI هستم، دستیار هوش مصنوعی شما.";
  if (cleaned.includes("ساعت") || cleaned.includes("الان چه")) return "الان ساعت " + new Date().toLocaleTimeString("fa-IR");
  if (cleaned.includes("ریاضی") || cleaned.includes("جمع")) return "میتونی سوال ریاضی بپرسی، مثلاً بپرس «۲ بعلاوه ۲ چنده؟»";
  if (cleaned.match(/\d+ \+ \d+/)) {
    const match = cleaned.match(/(\d+)\s*\+\s*(\d+)/);
    const sum = parseInt(match[1]) + parseInt(match[2]);
    return `پاسخ: ${sum}`;
  }

  return "سوالت رو متوجه نشدم! لطفاً واضح‌تر بپرس یا مثال بزن 🙏";
}

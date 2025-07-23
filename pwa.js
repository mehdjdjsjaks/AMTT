let deferredPrompt;
const addBtn = document.getElementById("add-btn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = "inline-block";
});

addBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === "accepted") {
    document.getElementById("pinned-message").style.display = "none";
  }
  deferredPrompt = null;
});

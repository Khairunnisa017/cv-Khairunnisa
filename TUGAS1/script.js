// efek navbar saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.boxShadow = window.scrollY > 50
    ? "0 5px 20px rgba(0,0,0,0.1)"
    : "none";
});

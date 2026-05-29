const header = document.querySelector("[data-header]");
const forms = document.querySelectorAll("form");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

window.addEventListener("scroll", updateHeader);
updateHeader();

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector("[data-form-note]");
    const button = form.querySelector("button");
    const isEnglish = document.documentElement.lang === "en";

    if (button) {
      button.textContent = isEnglish ? "Request prepared" : "Заявку підготовлено";
    }

    if (note) {
      note.textContent = isEnglish
        ? "Thank you. Your request is ready, and the next step is a short audit of your ads and funnel."
        : "Дякуємо. Заявку підготовлено, наступний крок — короткий аудит реклами та воронки.";
    }
  });
});

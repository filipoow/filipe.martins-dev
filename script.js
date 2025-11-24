(function () {
  const btns = document.querySelectorAll(".lang-btn");
  const birthDate = new Date("2002-11-06T00:00:00");
  const ageLabel = document.getElementById("age-label");

  function computeAge() {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function updateContent(lang) {
    // Texto da idade
    const age = computeAge();
    if (ageLabel) {
      ageLabel.textContent = lang === "en" ? `Age: ${age} years` : `Idade: ${age} anos`;
    }

    // Troca de botões de idioma ativos
    document.querySelectorAll(".lang-switcher button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.langTarget === lang);
    });

    // Esconde/Mostra elementos baseados no idioma
    document.querySelectorAll("[data-lang]").forEach(el => {
      if (el.dataset.lang === lang) {
        el.style.display = ""; // Mostra o elemento
      } else {
        el.style.display = "none"; // Esconde o elemento
      }
    });

    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {
      console.warn("localStorage not available:", e);
    }
  }

  // Efeito de digitação para o cabeçalho do terminal
  function typeEffect(element, text) {
    let i = 0;
    element.innerHTML = ''; // Limpa o conteúdo
    const speed = 70; // Velocidade da digitação em ms

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typing-header'); // Remove o cursor piscando ao terminar
      }
    }
    type();
  }

  // Inicialização
  const savedLang = localStorage.getItem("site-lang") || "pt";
  updateContent(savedLang);

  btns.forEach((btn) => {
    btn.addEventListener("click", () => updateContent(btn.dataset.langTarget));
  });

  // Aplica o efeito de digitação ao carregar
  const typingHeader = document.querySelector('.typing-header');
  if (typingHeader) {
      typeEffect(typingHeader, typingHeader.textContent);
  }

})();
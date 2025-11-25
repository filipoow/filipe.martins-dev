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

// --- FUNCIONALIDADE DO ÁUDIO PLAYER (Layout Terminal) ---
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('story-audio');
    const audioLink = document.getElementById('audio-link');
    const dynamicPromptText = document.getElementById('dynamic-prompt-text');
    const nextChapterHook = document.getElementById('next-chapter-hook');

    if (!audio || !audioLink || !dynamicPromptText || !nextChapterHook) return;

    // Função para atualizar o status e o texto do link
    function updateAudioUI(isPlaying, statusKey) {
        const lang = document.body.classList.contains('lang-en') ? 'en' : 'pt';
        
        let promptText = '';
        let linkTextPT = 'play_story.sh';
        let linkTextEN = 'play_story.sh';
        
        audioLink.style.color = 'var(--color-terminal)';
        audioLink.style.borderBottomColor = 'var(--color-terminal)';
        dynamicPromptText.classList.remove('blinking');
        nextChapterHook.style.display = 'none'; // Esconde o hook por padrão

        if (statusKey === 'playing') {
            promptText = '[STATUS: RUNNING]';
            linkTextPT = 'pause_track.sh';
            linkTextEN = 'pause_track.sh';
            audioLink.style.color = 'var(--color-accent)';
            audioLink.style.borderBottomColor = 'var(--color-accent)';
            dynamicPromptText.classList.add('blinking'); 
        } else if (statusKey === 'paused') {
            promptText = '[STATUS: PAUSED]';
            linkTextPT = 'resume_track.sh';
            linkTextEN = 'resume_track.sh';
        } else if (statusKey === 'loading') {
            promptText = '[STATUS: LOADING]';
            linkTextPT = 'wait_please.sh';
            linkTextEN = 'wait_please.sh';
            dynamicPromptText.classList.add('blinking');
        } else if (statusKey === 'ended') {
            promptText = 'guest@filipe:/next_step $';
            linkTextPT = 'echo "Qual será o próximo capítulo?"';
            linkTextEN = 'echo "What will be the next chapter?"';
            nextChapterHook.style.display = 'block'; // MOSTRA O GANCHO
        } else { // 'ready' or default
            promptText = 'guest@filipe:/audio $';
        }

        // Atualiza o prompt de status/comando
        dynamicPromptText.textContent = promptText + ' '; // Adiciona espaço após o prompt

        // Atualiza o texto do link
        audioLink.querySelector('[data-lang="pt"]').textContent = linkTextPT;
        audioLink.querySelector('[data-lang="en"]').textContent = linkTextEN;

        // Garante que a mensagem de gancho correta para o idioma atual esteja visível
        nextChapterHook.querySelector('[data-lang="pt"]').style.display = lang === 'pt' ? '' : 'none';
        nextChapterHook.querySelector('[data-lang="en"]').style.display = lang === 'en' ? '' : 'none';
    }

    // Listener de clique no link de ação
    audioLink.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o link de navegar
        if (audio.paused) {
            nextChapterHook.style.display = 'none';
            audio.play().catch(error => {
                console.error("Erro ao tentar reproduzir o áudio:", error);
            });
        } else {
            audio.pause();
        }
    });

    // Eventos do elemento de áudio
    audio.addEventListener('loadeddata', () => updateAudioUI(false, 'ready'));
    audio.addEventListener('play', () => updateAudioUI(true, 'playing'));
    audio.addEventListener('pause', () => updateAudioUI(false, 'paused'));
    audio.addEventListener('ended', () => updateAudioUI(false, 'ended'));
    audio.addEventListener('waiting', () => updateAudioUI(false, 'loading'));

    // Atualiza o UI no carregamento inicial 
    updateAudioUI(false, 'ready');

    // Listener para o botão de idioma: atualiza o texto de status
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                const statusKey = audio.paused ? (audio.currentTime === 0 ? 'ready' : 'paused') : 'playing';
                updateAudioUI(!audio.paused, statusKey);
            }, 50);
        });
    });
});
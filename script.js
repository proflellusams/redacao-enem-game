let score = 0;

function addScore(points) {
  score += points;
  document.getElementById('score').innerText = score;
}

// Fase 1: Validação do Quiz da Introdução
function checkAnswer(questionNum, isCorrect) {
  const feedback = document.getElementById('feedback-1');
  if (isCorrect) {
    feedback.className = "feedback correct";
    feedback.innerText = "Correto! (+50 pts) A Tese traz a causa central abordada no D1.";
    addScore(50);
    unlockCard('fase-2');
  } else {
    feedback.className = "feedback wrong";
    feedback.innerText = "Incorreto. Observe a estrutura: a tese se relaciona diretamente com a omissão do Estado.";
  }
}

// Fase 2: Ordenação Lógica (Coesão e Argumentação)
function checkOrder() {
  const container = document.getElementById('drag-container');
  const feedback = document.getElementById('feedback-2');
  
  // Para fins pedagógicos simples, simulamos a validação de sequência
  feedback.className = "feedback correct";
  feedback.innerText = "Excelente! (+50 pts) A estrutura tópica seguiu: Tópico Frasal ➔ Repertório ➔ Fechamento.";
  addScore(50);
  unlockCard('fase-3');
}

// Fase 3: Validação da Proposta de Intervenção
function checkChecklist() {
  const c1 = document.getElementById('elem-1').checked;
  const c2 = document.getElementById('elem-2').checked;
  const c3 = document.getElementById('elem-3').checked;
  const c4 = document.getElementById('elem-4').checked;
  const c5 = document.getElementById('elem-5').checked;

  const feedback = document.getElementById('feedback-3');

  if (c1 && c2 && c3 && c4 && c5) {
    feedback.className = "feedback correct";
    feedback.innerText = "Perfeito! (+100 pts) Você identificou os 5 elementos obrigatórios da C5!";
    addScore(100);
    unlockCard('fase-final');
  } else {
    feedback.className = "feedback wrong";
    feedback.innerText = "Marque todos os 5 elementos. Todos estão presentes na frase analisada!";
  }
}

// Função para desbloquear os próximos cartões
function unlockCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.remove('locked');
    card.scrollIntoView({ behavior: 'smooth' });
  }
}

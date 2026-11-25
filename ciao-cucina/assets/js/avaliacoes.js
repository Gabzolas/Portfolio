/* AVALIAÇÕES: valida o formulário. Sem servidor, a avaliação não é guardada: o site só confirma o envio. */
(() => {
  const fa = document.getElementById("form-aval"), okA = document.getElementById("ok-aval");
  fa.addEventListener("submit", e => {
    e.preventDefault(); okA.hidden = true;
    const nome = fa.elements.nome.value.trim(), texto = fa.elements.texto.value.trim();
    const nota = fa.querySelector('input[name="nota"]:checked');
    const erros = {
      nome: nome.length >= 3 ? "" : "Informe seu nome.",
      nota: nota ? "" : "Escolha de 1 a 5 estrelas.",
      texto: texto.length >= 20 ? "" : "Escreva pelo menos 20 caracteres."
    };
    let primeiro = null;
    Object.entries(erros).forEach(([k, msg]) => {
      document.getElementById("e-aval-" + k).textContent = msg;
      const campo = k === "nota" ? fa.querySelector('input[name="nota"]') : fa.elements[k];
      if (k !== "nota") campo.setAttribute("aria-invalid", !!msg);
      if (msg && !primeiro) primeiro = campo;
    });
    if (primeiro) { primeiro.focus(); return; }
    okA.textContent = `Obrigado, ${nome.split(" ")[0]}. Recebemos sua avaliação de ${nota.value} ${nota.value === "1" ? "estrela" : "estrelas"}. Ela será publicada após a análise da equipe.`;
    okA.hidden = false; fa.reset();
  });
})();

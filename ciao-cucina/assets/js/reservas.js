/* RESERVAS: validação do formulário e mensagem de confirmação. */
/* Reserva */
const form = document.getElementById("form"), ok = document.getElementById("ok");
const hoje = new Date().toISOString().slice(0, 10);
form.data.min = hoje;
form.addEventListener("submit", e => {
  e.preventDefault(); ok.hidden = true;
  const v = n => form[n].value.trim();
  const rules = {
    nome: v("nome").length >= 3 ? "" : "Informe seu nome completo.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")) ? "" : "Informe um e-mail válido.",
    data: !v("data") ? "Escolha uma data." : v("data") < hoje ? "Escolha uma data a partir de hoje." : "",
    hora: v("hora") ? "" : "Escolha um horário.",
    pessoas: v("pessoas") ? "" : "Escolha o número de pessoas."
  };
  let first = null;
  Object.entries(rules).forEach(([k, msg]) => {
    document.getElementById("e-" + k).textContent = msg;
    form[k].setAttribute("aria-invalid", !!msg);
    if (msg && !first) first = form[k];
  });
  if (first) { first.focus(); return; }
  const [a, m, d] = v("data").split("-");
  ok.textContent = `Reserva confirmada, ${v("nome").split(" ")[0]}. Mesa para ${v("pessoas")} em ${d}/${m}/${a}, às ${v("hora")}.`;
  ok.hidden = false; form.reset(); form.data.min = hoje;
});

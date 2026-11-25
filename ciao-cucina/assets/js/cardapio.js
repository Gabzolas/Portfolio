/* CARDÁPIO: os pratos ficam no objeto "menu"; as abas são criadas a partir dele. */
const menu = {
  "Antipasti": [
    ["Carpaccio de vitelo","Alcaparras, parmigiano e limão siciliano.","R$ 68"],
    ["Burrata com tomate heirloom","Manjericão e azeite extravirgem da Puglia.","R$ 54"],
    ["Vitello tonnato","Receita clássica piemontesa, atum e alcaparras.","R$ 62"]
  ],
  "Primi": [
    ["Tagliolini ao tartufo nero","Manteiga, parmigiano 36 meses e trufa negra.","R$ 92"],
    ["Risotto de açafrão","Tutano assado e redução de vinho tinto.","R$ 88"],
    ["Pappardelle ao ragù","Ragù de carne em cocção lenta, salsinha e raspas de limão siciliano.","R$ 86"],
    ["Spaghetti ai gamberi","Camarões grelhados, tomate-cereja e cebolinha.","R$ 98"],
    ["Penne cremoso","Molho cremoso de parmigiano, manjericão e tomate.","R$ 72"]
  ],
  "Secondi": [
    ["Ossobuco alla milanese","Gremolata e risotto de açafrão.","R$ 128"],
    ["Robalo ao forno","Funcho, laranja e azeitonas taggiasche.","R$ 118"],
    ["Costeletas de cordeiro","Ervas frescas, purê de grão-de-bico e jus.","R$ 136"]
  ],
  "Dolci": [
    ["Tiramisù da casa","Savoiardi, café espresso e mascarpone.","R$ 42"],
    ["Panna cotta de baunilha","Frutas vermelhas e calda de framboesa.","R$ 38"],
    ["Cannoli siciliano","Ricota doce, pistache e chocolate amargo.","R$ 36"]
  ]
};
const tabs = document.getElementById("tabs"), panel = document.getElementById("panel");
function show(name){
  tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b.textContent === name));
  panel.innerHTML = menu[name].map(d =>
    `<div class="dish"><h3>${d[0]}</h3><span class="price">${d[2]}</span><p>${d[1]}</p></div>`).join("");
}
Object.keys(menu).forEach(name => {
  const b = document.createElement("button");
  b.type = "button"; b.role = "tab"; b.textContent = name;
  b.addEventListener("click", () => show(name));
  tabs.appendChild(b);
});
tabs.addEventListener("keydown", e => {
  const list = [...tabs.children], i = list.findIndex(b => b.getAttribute("aria-selected") === "true");
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    const n = list[(i + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length];
    n.focus(); show(n.textContent);
  }
});
show("Antipasti");


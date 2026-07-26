// © Anthropotech Lab — tous droits reserves. Voir LICENSE a la racine du depot.
// ---------------------------------------------------------------------------
// ICÔNES (Lucide, inline — aucune dépendance externe)
// ---------------------------------------------------------------------------
const ICONS = {
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  trash: '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  upload: '<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  cable: '<path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"/><path d="M17 21v-2"/><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"/><path d="M21 21v-2"/><path d="M3 5V3"/><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"/><path d="M7 5V3"/>',
  settings: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  router: '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>',
  printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
  phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
  wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
  camera: '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',
  harddrive: '<path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  qrcode: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  logout: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
  mappin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  keyround: '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  radiotower: '<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>',
};
const EQUIP_TYPE_ICON = { firewall:"shield", routeur:"router", telephonie:"phone", "4g":"radiotower", fibre:"cable", camera:"camera", autre:"box" };
const EQUIP_TYPE_LABEL = { firewall:"Firewall", routeur:"Routeur", telephonie:"Téléphonie", "4g":"4G / Relais", fibre:"Fibre", camera:"Vidéosurveillance / NVR", autre:"Autre" };
function icon(name, size){
  size = size || 15;
  return `<svg class="ic" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||""}</svg>`;
}
// Regle metier : type d'equipement -> couleur de cable normee (convention en vigueur).
// "autre" n'a pas de couleur imposee, l'utilisateur choisit.
const TYPE_CABLE_COLOR = {
  "PC":"vert", "ordinateur portable":"vert", "imprimante":"vert",
  "NAS":"vert", "serveur":"vert", "routeur":"vert", "borne Wi-Fi":"vert",
  "téléphone IP":"bleu foncé",
  "caméra IP":"rose",
  "autre": null,
};
const TYPE_ICON = {
  "PC":"monitor", "ordinateur portable":"monitor", "imprimante":"printer", "téléphone IP":"phone",
  "borne Wi-Fi":"wifi", "caméra IP":"camera", "NAS":"harddrive", "serveur":"server", "routeur":"router", "autre":"box"
};
// ---------------------------------------------------------------------------
// STOCKAGE PROTEGE
// localStorage/sessionStorage peuvent lever une exception (Safari en file://,
// navigation privee stricte, quota depasse...). Sans protection, une seule
// exception au chargement arrete tout le script et l'app reste blanche.
// Ces wrappers degradent proprement : l'app fonctionne en memoire pour la
// session en cours, sans persistance, plutot que de planter.
// ---------------------------------------------------------------------------
const _memStore = {};
function storageGet(store, key){
  try { return store.getItem(key); }
  catch(e){ return Object.prototype.hasOwnProperty.call(_memStore,key) ? _memStore[key] : null; }
}
function storageSet(store, key, value){
  try { store.setItem(key, value); }
  catch(e){ _memStore[key] = value; }
}
function storageRemove(store, key){
  try { store.removeItem(key); }
  catch(e){ delete _memStore[key]; }
}

const CABLE_COLORS = {
  bleu:"#3B8FB3", "bleu foncé":"#1B4E68", rose:"#D9578C", vert:"#94A84C"
};
// Convention de couleurs en vigueur (communiquée par l'administrateur)
const COLOR_MEANING = {
  bleu:"ancien câblage (info/tél/caméra mélangés)",
  rose:"caméra",
  vert:"data",
  "bleu foncé":"téléphonie",
};

// ---------------------------------------------------------------------------
// DONNÉES — plusieurs baies, une par lieu
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// AUCUNE DONNEE N'EST PUBLIEE ICI.
// Cette application est une coquille vide. Les donnees reelles restent
// sur l'appareil de l'utilisateur et sont chargees via "Importer".
// ---------------------------------------------------------------------------
const SEED = {
  gestion: { informatique:"", si:"" },
  baies: [],
  bandeaux: [],
  switches: [],
  connexions: []
};

// Pas de reinitialisation par version ici : les donnees viennent d'un import
// manuel. Les ecraser lors d'une mise a jour de l'application serait une
// perte de donnees pour l'utilisateur.
const _stored = storageGet(localStorage, "netmap_data");
let DATA = _stored ? JSON.parse(_stored) : SEED;
function normalizeData(){
  DATA.gestion = DATA.gestion || { informatique:"", si:"" };
  (DATA.baies||[]).forEach(b=>{
    b.tiroirs = b.tiroirs || [];
    b.nas = b.nas || [];
    b.onduleurs = b.onduleurs || [];
    b.equipements = b.equipements || [];
    b.viewers = b.viewers || [];
  });
}
normalizeData();
let currentBaieId = null;
let activeSwitchId = null;
let selectedConnId = null;
let selectedExtra = null; // {type:'tiroir'|'nas'|'onduleur', id}
let query = "";
let mode = "consult";
let viewerName = "";
let modalEditingId = null;

function save(){ storageSet(localStorage, "netmap_data", JSON.stringify(DATA)); }
function currentBaie(){ return DATA.baies.find(b=>b.id===currentBaieId); }
function baieBandeaux(){ return DATA.bandeaux.filter(b=>b.baieId===currentBaieId); }
function baieSwitches(){ return DATA.switches.filter(s=>s.baieId===currentBaieId); }
function baieConnexions(){ return DATA.connexions.filter(c=>c.baieId===currentBaieId); }

function connFor(portOwnerType, ownerId, portNum){
  return baieConnexions().find(c =>
    (portOwnerType==="bandeau" && c.bandeauId===ownerId && c.portB===portNum) ||
    (portOwnerType==="switch" && c.switchId===ownerId && c.portS===portNum)
  );
}
function matchesQuery(c){
  if(!query.trim()) return true;
  const bd = DATA.bandeaux.find(b=>b.id===c.bandeauId);
  const sw = DATA.switches.find(s=>s.id===c.switchId);
  const hay = [c.nom,c.type,c.bureau,c.ip,c.mac,c.prise,bd?.nom,sw?.nom,c.portB,c.portS].join(" ").toLowerCase();
  return hay.includes(query.toLowerCase());
}

// ---------------------------------------------------------------------------
// SÉCURITÉ ADMIN — voir le fichier README-SECURITE.md avant tout déploiement
// ---------------------------------------------------------------------------
// Si ADMIN_PIN_HASH est renseigné (hash SHA-256 de ton code, généré hors-ligne),
// le premier visiteur venu ne peut plus "créer" un code admin lui-même : il doit
// connaître le vrai code. Tant que cette valeur reste vide, l'app se comporte en
// mode développement (pratique ici, dans cet aperçu) — NE PAS déployer tel quel.
const ADMIN_PIN_HASH = "";
async function sha256Hex(text){
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");
}

// ---------------------------------------------------------------------------
// QR CODE (rendu SVG local, sans appel réseau)
// ---------------------------------------------------------------------------
function renderQR(text, el){
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const count = qr.getModuleCount();
  const cell = 6, margin = 2;
  const size = (count + margin*2) * cell;
  let svg = `<svg viewBox="0 0 ${size} ${size}" width="220" height="220" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<rect width="${size}" height="${size}" fill="#eaf3fb"/>`;
  for(let r=0;r<count;r++){
    for(let c=0;c<count;c++){
      if(qr.isDark(r,c)){
        svg += `<rect x="${(c+margin)*cell}" y="${(r+margin)*cell}" width="${cell}" height="${cell}" fill="#0a2440"/>`;
      }
    }
  }
  svg += `</svg>`;
  el.innerHTML = svg;
}

// ---------------------------------------------------------------------------
// ROUTING / SESSION
// ---------------------------------------------------------------------------
function baieUrl(baie){
  if(window.DNDVDL_MONOFILE){
    // Fichier unique : pas de dossier par bâtiment, on retombe sur ?baie=
    return location.origin + location.pathname + "?baie=" + encodeURIComponent(baie.slug);
  }
  // Déploiement NAS : URL propre par bâtiment, <base>/<slug>/
  const base = window.DNDVDL_BASE || "./";
  return new URL(base + baie.slug + "/", location.href).href;
}
// Le carton d'accueil sert a deux ecrans (import initial / connexion) :
// on conserve son balisage d'origine pour pouvoir le restaurer apres import.
const LOGIN_CARD_HTML = document.getElementById("loginCard").innerHTML;
function restoreLoginCard(){
  document.getElementById("loginCard").innerHTML = LOGIN_CARD_HTML;
  wireLoginCard();
}

function showLogin(){
  document.getElementById("appRoot").style.display = "none";
  const scr = document.getElementById("loginScreen");
  scr.style.display = "flex";
  const baie = currentBaie();
  // Le sigle de baie n'est plus affiche ici : sans objet avant identification.
  document.getElementById("loginAdminBtn").innerHTML = icon("shield") + " Administrateur";
  const sel = document.getElementById("loginViewerSelect");
  sel.innerHTML = baie.viewers.length
    ? baie.viewers.map(v=>`<option value="${v.id}">${v.nom}</option>`).join("")
    : `<option value="">Aucun accès configuré</option>`;
  document.getElementById("loginConsultBtn").innerHTML = icon("eye") + " Accéder en consultation";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginNote").textContent = baie.viewers.length
    ? "Demandez le mot de passe à l'administrateur."
    : "Aucun accès consultation n'a encore été configuré pour cette baie.";
}
function hideLogin(){
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("appRoot").style.display = "";
}
function checkAccess(){
  const baie = currentBaie();
  if(storageGet(sessionStorage, "netmap_admin")==="true"){
    mode = "admin"; hideLogin(); applyMode(); render(); return;
  }
  const v = storageGet(sessionStorage, "netmap_viewer_"+baie.id);
  if(v){
    mode = "consult"; viewerName = JSON.parse(v).nom; hideLogin(); applyMode(); render(); return;
  }
  showLogin();
}
function wireLoginCard(){
  const adminBtn = document.getElementById("loginAdminBtn");
  if(adminBtn) adminBtn.onclick = ()=>{
    if(ADMIN_PIN_HASH){ openPinModal("enter"); return; }
    const pin = storageGet(localStorage, "netmap_pin");
    openPinModal(pin ? "enter" : "create");
  };
  const consultBtn = document.getElementById("loginConsultBtn");
  if(consultBtn) consultBtn.onclick = ()=>{
    const baie = currentBaie();
    const id = document.getElementById("loginViewerSelect").value;
    const pass = document.getElementById("loginPassword").value;
    const v = baie.viewers.find(x=>x.id===id);
    if(!v || pass !== v.password){ alert("Nom ou mot de passe incorrect."); return; }
    storageSet(sessionStorage, "netmap_viewer_"+baie.id, JSON.stringify({nom:v.nom}));
    mode = "consult"; viewerName = v.nom;
    hideLogin(); applyMode(); render();
  };
}
wireLoginCard();

function applyMode(){
  document.body.dataset.mode = mode;
  const badge = document.getElementById("sessionBadge");
  badge.innerHTML = mode==="admin" ? (icon("shield",13)+" Admin") : (icon("eye",13)+" "+(viewerName||"Consultation"));
  renderWatermark();
}

// ---------------------------------------------------------------------------
// FILIGRANE DE TRAÇABILITÉ
// Aucune API web ne permet d'empêcher une capture d'écran. Ce filigrane ne
// bloque rien : il fait en sorte qu'une capture porte le nom du consultant
// et l'horodatage, pour que sa diffusion reste attribuable. Actif uniquement
// en consultation — l'administrateur n'a pas besoin d'être filigrané
// vis-à-vis de lui-même.
let _watermarkTimer = null;
function renderWatermark(){
  let wm = document.getElementById("watermarkLayer");
  if(mode !== "consult"){
    if(wm) wm.remove();
    if(_watermarkTimer) clearInterval(_watermarkTimer);
    return;
  }
  if(!wm){
    wm = document.createElement("div");
    wm.id = "watermarkLayer";
    document.body.appendChild(wm);
  }
  const paint = ()=>{
    const stamp = (viewerName||"Consultation") + " · " + new Date().toLocaleString("fr-FR");
    const tile = `<span>${stamp}</span>`;
    wm.innerHTML = tile.repeat(60);
  };
  paint();
  if(_watermarkTimer) clearInterval(_watermarkTimer);
  _watermarkTimer = setInterval(paint, 30000);
}
document.getElementById("logoutBtn").innerHTML = icon("logout") + `<span class="btnLabel">Déconnexion</span>`;
document.getElementById("logoutBtn").onclick = ()=>{
  const baie = currentBaie();
  if(mode==="admin") storageRemove(sessionStorage, "netmap_admin");
  else storageRemove(sessionStorage, "netmap_viewer_"+baie.id);
  selectedConnId = null; selectedExtra = null;
  mode = null; viewerName = "";
  renderWatermark();
  checkAccess();
};

// ---------------------------------------------------------------------------
// HEADER — icônes + wiring statique
// ---------------------------------------------------------------------------
document.querySelector(".searchWrap").innerHTML = icon("search",15) + `<input id="search" placeholder="rechercher : périphérique, bureau, port…">`;
document.getElementById("addBtn").innerHTML = icon("plus") + `<span class="btnLabel">Connexion</span>`;
document.getElementById("equipBtn").innerHTML = icon("settings") + `<span class="btnLabel">Équipements</span>`;
document.getElementById("accessBtn").innerHTML = icon("keyround") + `<span class="btnLabel">Accès</span>`;
document.getElementById("exportBtn").innerHTML = icon("download") + `<span class="btnLabel">Exporter</span>`;
document.getElementById("importBtn").innerHTML = icon("upload") + `<span class="btnLabel">Importer</span>`;
document.getElementById("qrBtn").innerHTML = icon("qrcode") + `<span class="btnLabel">Lien / QR</span>`;

document.addEventListener("input", e=>{
  if(e.target.id === "search"){ query = e.target.value; render(); }
});

function renderBaiePicker(){
  const sel = document.getElementById("baiePicker");
  sel.innerHTML = DATA.baies.map(b=>`<option value="${b.id}" ${b.id===currentBaieId?"selected":""}>${b.slug}</option>`).join("");
}
document.getElementById("baiePicker").addEventListener("change", e=>{
  const target = DATA.baies.find(b=>b.id===e.target.value);
  if(!target) return;
  if(window.DNDVDL_MONOFILE){
    // Fichier unique : pas de dossier a naviguer, on bascule sur place
    currentBaieId = target.id;
    selectedConnId = null; selectedExtra = null;
    activeSwitchId = baieSwitches()[0]?.id;
    try{ history.replaceState(null, "", baieUrl(target)); }catch(e){ /* file:// ou contexte restreint : sans consequence */ }
    checkAccess();
    return;
  }
  // Déploiement NAS : on change réellement d'URL, chaque bâtiment a la sienne
  location.href = baieUrl(target);
});

// ---------------------------------------------------------------------------
// RENDU DE LA BAIE (élévation verticale : bandeau → tiroirs → switch → NAS → onduleurs)
// ---------------------------------------------------------------------------
// Geometrie des ports : entierement pilotee par le CSS (voir .portSlot / .jack)
// Disposition par rangee : propre a chaque appareil (portsPerRow), 24 par defaut si non precise.

function render(){ renderRack(); renderPanel(); }

function makeBar(category, item, iconName){
  const div = document.createElement("div");
  const isSel = selectedExtra && selectedExtra.type===category && selectedExtra.id===item.id;
  // Le passe-cable est un guide physique : les cables passent DERRIERE lui,
  // pas au-dessus. Classe dediee pour l'empilement visuel (voir CSS).
  div.className = "rackBar" + (category==="tiroir" ? " cableGuide" : "") + (isSel ? " selected":"");
  div.innerHTML = icon(iconName,15) + `<span>${item.label}</span>`;
  div.onclick = ()=>{ selectedExtra = {type:category, id:item.id}; selectedConnId=null; render(); };
  return div;
}
function makeAddBar(category, labelText, iconName, arrGetter){
  const div = document.createElement("div");
  div.className = "rackBar dashed admin-block";
  div.innerHTML = icon("plus",13) + `<span>Ajouter ${labelText}</span>`;
  div.onclick = ()=>{
    const arr = arrGetter();
    const item = {id:category+Date.now(), label:"Nouveau "+labelText, marque:"", modele:"", ip:"", autonomie:"", gestion:"", commentaire:""};
    if(category==="equipement") item.type = "autre";
    arr.push(item);
    // Si la baie a un ordre physique explicite, le nouvel element y prend
    // place (en fin de baie par defaut — reordonnable plus tard si besoin).
    const baie = currentBaie();
    if(baie.rack) baie.rack.push({type:category, id:item.id});
    save(); selectedExtra = {type:category, id:item.id}; selectedConnId=null; render();
  };
  return div;
}

// ---------------------------------------------------------------------------
// TRACE DES CABLES
// Mesure via getBoundingClientRect (independant du parent de positionnement)
// et execute apres stabilisation de la mise en page (polices, images, reflow).
// ---------------------------------------------------------------------------
function paintCables(){
  const svg = document.getElementById("cables");
  if(!svg) return;
  const stage = svg.parentElement;
  if(!stage) return;

  while(svg.firstChild) svg.removeChild(svg.firstChild);

  const stageRect = stage.getBoundingClientRect();
  svg.setAttribute("width", Math.ceil(stageRect.width));
  svg.setAttribute("height", Math.ceil(stage.scrollHeight));

  const svgNS = "http://www.w3.org/2000/svg";

  baieConnexions().forEach((c, i)=>{
    const baie = currentBaie();
    const ordered = baie && baie.rack && baie.rack.length;
    if(!ordered && c.switchId !== activeSwitchId) return;
    const fromEl = stage.querySelector('[data-ref="bandeau_'+c.bandeauId+'_'+c.portB+'"]');
    const toEl   = stage.querySelector('[data-ref="switch_'+c.switchId+'_'+c.portS+'"]');
    if(!fromEl || !toEl) return;

    const a = fromEl.getBoundingClientRect();
    const b = toEl.getBoundingClientRect();

    // Depart : bas du port du bandeau. Arrivee : haut du port du switch.
    const x1 = a.left - stageRect.left + a.width/2;
    const y1 = a.top  - stageRect.top  + a.height;
    const x2 = b.left - stageRect.left + b.width/2;
    const y2 = b.top  - stageRect.top;

    const path = document.createElementNS(svgNS,"path");
    const dy = Math.max(38, Math.abs(y2 - y1) * 0.38);
    path.setAttribute("d", "M "+x1+" "+y1+" C "+x1+" "+(y1+dy)+", "+x2+" "+(y2-dy)+", "+x2+" "+y2);

    const color = CABLE_COLORS[c.couleur] || "rgba(42,39,35,0.30)";
    path.setAttribute("stroke", color);
    path.style.color = color;

    let cls = "cable";
    const isActive = selectedConnId === c.id;
    const isVisible = matchesQuery(c);
    if(!isVisible) cls += " dim";
    else if(isActive) cls += " active";
    else if(selectedConnId) cls += " dim";
    path.setAttribute("class", cls);

    // Effet "cable que l'on tire" : le trait se dessine sur sa longueur reelle
    // au lieu d'apparaitre d'un coup. Anime via @keyframes (voir style.css) —
    // une transition CSS classique ne se joue pas de facon fiable sur un
    // element SVG tout juste insere, d'ou l'usage d'une animation nommee.
    svg.appendChild(path);
    const len = path.getTotalLength();
    path.style.setProperty("--len", len);
    path.style.animationDelay = (i * 45) + "ms";
    path.classList.add("drawing");
    path.addEventListener("animationend", function clear(e){
      if(e.animationName !== "cableDraw") return;
      path.classList.remove("drawing");
      path.style.animationDelay = "";
      path.removeEventListener("animationend", clear);
    });

    path.style.pointerEvents = "stroke";
    path.style.cursor = "pointer";
    path.onclick = ()=>{ selectedConnId = c.id; selectedExtra = null; render(); };
  });
}

function scheduleCablePaint(){
  requestAnimationFrame(()=>requestAnimationFrame(paintCables));
}

// Redessine si la mise en page bouge apres coup
window.addEventListener("resize", paintCables);
if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(paintCables).catch(()=>{});
}

// ---------------------------------------------------------------------------
// PORT — reproduit un port de bandeau reel : alveole rectangulaire (keystone)
// surmontant son numero grave sur la face avant.
// ---------------------------------------------------------------------------
function makePortSlot({num, ref, conn, isSel, dimmed, onClick}){
  const slot = document.createElement("div");
  slot.className = "portSlot " + (conn ? "used" : "free")
                 + (isSel ? " selected" : "") + (dimmed ? " dimmed" : "");
  slot.title = "Port " + num + (conn ? " — " + conn.nom : " — libre");

  const jack = document.createElement("div");
  jack.className = "jack";
  jack.dataset.ref = ref;
  if(conn) jack.style.background = CABLE_COLORS[conn.couleur] || "rgba(42,39,35,0.30)";

  const label = document.createElement("span");
  label.className = "portNum";
  label.textContent = num;

  slot.appendChild(jack);
  slot.appendChild(label);
  slot.onclick = onClick;
  return slot;
}

function buildBandeauBlock(bd){
  const block = document.createElement("div");
  block.className = "bandeauBlock";
  const lbl = document.createElement("div");
  lbl.className = "blockLabel";
  lbl.innerHTML = icon("cable",11) + " " +
    [bd.nom, bd.reference].filter(Boolean).join(" — ")
    + (bd.emplacement ? "  [" + bd.emplacement + "]" : "")
    + (bd.commentaire ? "  · " + bd.commentaire : "");
  block.appendChild(lbl);
  const frame = document.createElement("div");
  frame.className = "portRowFrame";
  const sL=document.createElement("div"); sL.className="screw";
  const sR=document.createElement("div"); sR.className="screw";
  const rowsWrap = document.createElement("div");
  rowsWrap.className = "portRows";
  let rowEl;
  for(let p=1;p<=bd.nbPorts;p++){
    if((p-1) % (bd.portsPerRow || 24) === 0){
      rowEl = document.createElement("div");
      rowEl.className = "portRow";
      rowsWrap.appendChild(rowEl);
    }
    const conn = connFor("bandeau", bd.id, p);
    const isSel = selectedConnId && conn && conn.id===selectedConnId;
    const slot = makePortSlot({
      num: p,
      ref: "bandeau_"+bd.id+"_"+p,
      conn, isSel, dimmed:false,
      onClick: ()=>{
        if(conn){ selectedConnId = conn.id; selectedExtra=null; render(); }
        else if(mode==="admin"){ openModal(null, {bandeauId: bd.id, portB: p}); }
      }
    });
    rowEl.appendChild(slot);
  }
  frame.appendChild(sL); frame.appendChild(rowsWrap); frame.appendChild(sR);
  block.appendChild(frame);
  return block;
}

function buildSwitchBlock(sw){
  const block = document.createElement("div");
  block.className = "bandeauBlock";
  const lbl = document.createElement("div");
  lbl.className = "blockLabel";
  lbl.innerHTML = icon("router",11) + " " +
    [sw.nom, [sw.constructeur, sw.modele].filter(Boolean).join(" ")].filter(Boolean).join(" — ")
    + (sw.emplacement ? "  [" + sw.emplacement + "]" : "")
    + (sw.commentaire ? "  · " + sw.commentaire : "");
  block.appendChild(lbl);
  const frame = document.createElement("div");
  frame.className = "portRowFrame";
  const sL=document.createElement("div"); sL.className="screw";
  const sR=document.createElement("div"); sR.className="screw";
  const rowsWrap = document.createElement("div");
  rowsWrap.className = "portRows";
  let rowEl;
  for(let p=1;p<=sw.nbPorts;p++){
    if((p-1) % (sw.portsPerRow || 24) === 0){
      rowEl = document.createElement("div");
      rowEl.className = "portRow";
      rowsWrap.appendChild(rowEl);
    }
    const conn = connFor("switch", sw.id, p);
    const isSel = selectedConnId && conn && conn.id===selectedConnId;
    const slot = makePortSlot({
      num: p,
      ref: "switch_"+sw.id+"_"+p,
      conn, isSel, dimmed:false,
      onClick: ()=>{
        if(conn){ selectedConnId = conn.id; selectedExtra=null; render(); }
        else if(mode==="admin"){ openModal(null, {switchId: sw.id, portS: p}); }
      }
    });
    rowEl.appendChild(slot);
  }
  frame.appendChild(sL); frame.appendChild(rowsWrap); frame.appendChild(sR);
  block.appendChild(frame);
  return block;
}

function renderRack(){
  const canvas = document.getElementById("rackCanvas");
  canvas.innerHTML = "";
  const baie = currentBaie();
  if(!baie) return;

  const stage = document.createElement("div");
  stage.style.position = "relative";
  canvas.appendChild(stage);

  if(baie.rack && baie.rack.length){
    renderOrderedRack(stage, baie);
  } else {
    renderLegacyRack(stage, baie);
  }

  // --- Câbles (mesurés depuis le DOM réel : robuste face aux hauteurs variables) ---
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("id","cables");
  stage.appendChild(svg);
  scheduleCablePaint();

  // --- Légende ---
  const legend = document.createElement("div");
  legend.id = "legend";
  const usedColors = new Set(baieConnexions().map(c=>c.couleur));
  legend.innerHTML = `<div class="rowLabel" style="margin-top:0;">${icon("cable",14)} Légende — couleurs de câble</div><div class="legendGrid">` +
    Object.entries(CABLE_COLORS).map(([name,hex])=>
      `<div class="legendItem" style="opacity:${usedColors.has(name)?1:.35}"><span class="legendSwatch" style="background:${hex}"></span>${name}${COLOR_MEANING[name] ? ` <span style="color:var(--ink-dim);opacity:.8;">— ${COLOR_MEANING[name]}</span>` : ""}</div>`).join("") + `</div>`;
  canvas.appendChild(legend);

  // --- Cartouche ---
  const tb = document.createElement("div");
  tb.id = "titleBlock";
  const today = new Date().toLocaleDateString("fr-FR");
  const g = DATA.gestion || {informatique:"", si:""};
  const gestCell = (label, key, value)=> mode==="admin"
    ? `<div class="cell"><span class="k">${label}</span><input class="inlineEdit" style="width:100%; text-align:left; font-size:11px;" value="${(value||"").replace(/"/g,"&quot;")}" oninput="updateGestion('${key}',this.value)"></div>`
    : `<div class="cell"><span class="k">${label}</span><span class="v">${value||"—"}</span></div>`;
  tb.innerHTML = `
    <div class="row">
      <div class="cell"><span class="k">Document</span><span class="v">DNDVDL-MAP — ${baie.slug}</span></div>
      <div class="cell"><span class="k">Mise à jour</span><span class="v">${today}</span></div>
    </div>
    <div class="row">
      <div class="cell"><span class="k">Connexions</span><span class="v">${baieConnexions().length}</span></div>
      <div class="cell"><span class="k">Réalisation</span><span class="v">anthropotech · lab</span></div>
    </div>
    <div class="row">
      ${gestCell("Informatique gérée par", "informatique", g.informatique)}
      ${gestCell("Système d'information géré par", "si", g.si)}
    </div>`;
  canvas.appendChild(tb);
}

// ---------------------------------------------------------------------------
// AFFICHAGE ORDONNÉ — respecte l'ordre physique exact tel que décrit
// (chaque bandeau/switch a sa propre position, pas de regroupement par
// catégorie, pas d'onglets : tout est visible en une fois, comme dans la baie).
// ---------------------------------------------------------------------------
function renderOrderedRack(stage, baie){
  const catLabel = {
    bandeau: ["cable","Bandeau"], tiroir: ["archive","Tiroir"], switch: ["router","Switch"],
    equipement: ["shield","Équipement"], nas: ["harddrive","NAS"], onduleur: ["zap","Onduleur"],
  };
  baie.rack.forEach(entry=>{
    if(entry.type==="bandeau"){
      const bd = DATA.bandeaux.find(b=>b.id===entry.id);
      if(bd) stage.appendChild(buildBandeauBlock(bd));
    } else if(entry.type==="switch"){
      const sw = DATA.switches.find(s=>s.id===entry.id);
      if(sw) stage.appendChild(buildSwitchBlock(sw));
    } else {
      const key = entry.type==="tiroir"?"tiroirs":entry.type==="nas"?"nas":entry.type==="equipement"?"equipements":"onduleurs";
      const item = (baie[key]||[]).find(i=>i.id===entry.id);
      if(item){
        const iconName = entry.type==="equipement" ? (EQUIP_TYPE_ICON[item.type]||"box")
                        : catLabel[entry.type][0];
        stage.appendChild(makeBar(entry.type, item, iconName));
      }
    }
  });
  // Ajout de nouveaux elements : toujours possible, ajoutes en fin de baie.
  const addRow = document.createElement("div");
  addRow.className = "rowLabel admin-block";
  addRow.style.marginTop = "26px";
  addRow.innerHTML = icon("plus",12) + " Ajouter à cette baie";
  stage.appendChild(addRow);
  stage.appendChild(makeAddBar("tiroir", "un tiroir", "archive", ()=>currentBaie().tiroirs));
  stage.appendChild(makeAddBar("equipement", "un équipement", "shield", ()=>currentBaie().equipements));
  stage.appendChild(makeAddBar("nas", "un NAS", "harddrive", ()=>currentBaie().nas));
  stage.appendChild(makeAddBar("onduleur", "un onduleur", "zap", ()=>currentBaie().onduleurs));
}

// ---------------------------------------------------------------------------
// AFFICHAGE PAR CATÉGORIE — regroupement classique (bandeaux ensemble, switch
// en onglets…), utilisé tant qu'aucun ordre physique n'a été précisé pour
// la baie.
// ---------------------------------------------------------------------------
function renderLegacyRack(stage, baie){
  const bandeauLbl = document.createElement("div");
  bandeauLbl.className = "rowLabel";
  bandeauLbl.innerHTML = icon("cable",14) + " Bandeaux de brassage";
  stage.appendChild(bandeauLbl);
  baieBandeaux().forEach(bd=> stage.appendChild(buildBandeauBlock(bd)));

  const tiroirLbl = document.createElement("div");
  tiroirLbl.className = "rowLabel";
  tiroirLbl.innerHTML = icon("archive",14) + " Tiroirs / passe-câbles";
  stage.appendChild(tiroirLbl);
  baie.tiroirs.forEach(t=> stage.appendChild(makeBar("tiroir", t, "archive")));
  stage.appendChild(makeAddBar("tiroir", "un tiroir", "archive", ()=>currentBaie().tiroirs));

  const switches = baieSwitches();
  if(!switches.find(s=>s.id===activeSwitchId)) activeSwitchId = switches[0]?.id;
  const swLbl = document.createElement("div");
  swLbl.className = "rowLabel";
  swLbl.innerHTML = icon("router",14) + " Switch";
  stage.appendChild(swLbl);
  if(switches.length>1){
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    switches.forEach(sw=>{
      const t = document.createElement("button");
      t.className = "tab" + (sw.id===activeSwitchId?" active":"");
      t.textContent = sw.nom;
      t.onclick = ()=>{ activeSwitchId = sw.id; selectedConnId=null; render(); };
      tabs.appendChild(t);
    });
    stage.appendChild(tabs);
  }
  const activeSwitch = switches.find(s=>s.id===activeSwitchId);
  if(activeSwitch) stage.appendChild(buildSwitchBlock(activeSwitch));

  const eqLbl = document.createElement("div");
  eqLbl.className = "rowLabel";
  eqLbl.innerHTML = icon("shield",14) + " Équipements réseau";
  stage.appendChild(eqLbl);
  (baie.equipements||[]).forEach(e=> stage.appendChild(makeBar("equipement", e, EQUIP_TYPE_ICON[e.type]||"box")));
  stage.appendChild(makeAddBar("equipement", "un équipement", "shield", ()=>currentBaie().equipements));

  const nasLbl = document.createElement("div");
  nasLbl.className = "rowLabel";
  nasLbl.innerHTML = icon("harddrive",14) + " NAS";
  stage.appendChild(nasLbl);
  baie.nas.forEach(n=> stage.appendChild(makeBar("nas", n, "harddrive")));
  stage.appendChild(makeAddBar("nas", "un NAS", "harddrive", ()=>currentBaie().nas));

  const onLbl = document.createElement("div");
  onLbl.className = "rowLabel";
  onLbl.innerHTML = icon("zap",14) + " Onduleurs";
  stage.appendChild(onLbl);
  baie.onduleurs.forEach(o=> stage.appendChild(makeBar("onduleur", o, "zap")));
  stage.appendChild(makeAddBar("onduleur", "un onduleur", "zap", ()=>currentBaie().onduleurs));
}

// ---------------------------------------------------------------------------
// PANNEAU DÉTAIL
// ---------------------------------------------------------------------------
function fieldEditable(label, obj, key, type){
  type = type || "text";
  if(mode==="admin"){
    return `<div class="field"><span class="k">${label}</span>
      <input class="inlineEdit" type="${type}" value="${(obj[key]||"").toString().replace(/"/g,'&quot;')}" oninput="updateExtraField('${obj.id}','${key}',this.value)"></div>`;
  }
  return `<div class="field"><span class="k">${label}</span>${obj[key] ? `<span class="v">${obj[key]}</span>` : `<span class="v missing">manquant</span>`}</div>`;
}
window.updateExtraField = (itemId, key, value)=>{
  const baie = currentBaie();
  ["tiroirs","nas","onduleurs","equipements"].forEach(cat=>{
    const it = (baie[cat]||[]).find(i=>i.id===itemId);
    if(it) it[key] = value;
  });
  save(); renderRack();
};
function extraKey(type){
  return type==="tiroir"?"tiroirs":type==="nas"?"nas":type==="equipement"?"equipements":"onduleurs";
}
window.deleteExtra = (type, id)=>{
  if(mode!=="admin") return;
  if(!confirm("Supprimer cet élément ?")) return;
  const baie = currentBaie();
  const key = extraKey(type);
  baie[key] = baie[key].filter(i=>i.id!==id);
  if(baie.rack) baie.rack = baie.rack.filter(e=>!(e.type===type && e.id===id));
  selectedExtra = null; save(); render();
};

function renderPanel(){
  const panel = document.getElementById("panel");
  const baie = currentBaie();
  const conn = DATA.connexions.find(c=>c.id===selectedConnId);
  const filtered = baieConnexions().filter(matchesQuery);
  let html = "";

  if(conn){
    const bd = DATA.bandeaux.find(b=>b.id===conn.bandeauId);
    const sw = DATA.switches.find(s=>s.id===conn.switchId);
    const field = (k,v)=> `<div class="field"><span class="k">${k}</span>${v ? `<span class="v">${v}</span>` : `<span class="v missing">manquant</span>`}</div>`;
    html += `<h2>${icon(TYPE_ICON[conn.type]||"box",17)} ${conn.nom}</h2><div class="sub">${conn.type}${conn.bureau? " · "+conn.bureau:""}</div>`;
    html += field("Bandeau", bd?.nom);
    html += field("Port bandeau", conn.portB);
    html += field("Switch", sw?.nom);
    html += field("Port switch", conn.portS);
    html += field("Prise murale", conn.prise);
    html += field("Câble", conn.couleur);
    html += field("Adresse IP", conn.ip);
    html += field("Adresse MAC", conn.mac);
    if(conn.comment) html += field("Commentaire", conn.comment);
    html += `<div class="panelActions admin-only">
      <button class="btn" onclick="openModal(DATA.connexions.find(c=>c.id==='${conn.id}'))">${icon("pencil")} Modifier</button>
      <button class="btn danger" onclick="deleteConn('${conn.id}')">${icon("trash")} Supprimer</button>
    </div>`;
  } else if(selectedExtra){
    const key = extraKey(selectedExtra.type);
    const item = (baie[key]||[]).find(i=>i.id===selectedExtra.id);
    if(item){
      const iconName = selectedExtra.type==="tiroir"?"archive":selectedExtra.type==="nas"?"harddrive":selectedExtra.type==="equipement"?(EQUIP_TYPE_ICON[item.type]||"box"):"zap";
      html += `<h2>${icon(iconName,17)} ${mode==="admin" ? "" : item.label}</h2>`;
      html += fieldEditable("Nom", item, "label");
      if(selectedExtra.type==="equipement"){
        if(mode==="admin"){
          html += `<div class="field"><span class="k">Type</span><select class="inlineEdit" style="width:170px;" onchange="updateExtraField('${item.id}','type',this.value)">` +
            Object.entries(EQUIP_TYPE_LABEL).map(([k,l])=>`<option value="${k}" ${item.type===k?"selected":""}>${l}</option>`).join("") +
            `</select></div>`;
        } else {
          html += `<div class="field"><span class="k">Type</span><span class="v">${EQUIP_TYPE_LABEL[item.type]||"—"}</span></div>`;
        }
        html += fieldEditable("Marque", item, "marque");
        html += fieldEditable("Modèle", item, "modele");
        html += fieldEditable("Géré par", item, "gestion");
        html += fieldEditable("Adresse IP", item, "ip");
      }
      if(selectedExtra.type!=="tiroir" && selectedExtra.type!=="equipement"){
        html += fieldEditable("Marque", item, "marque");
        html += fieldEditable("Modèle", item, "modele");
      }
      if(selectedExtra.type==="nas") html += fieldEditable("Adresse IP", item, "ip");
      if(selectedExtra.type==="onduleur") html += fieldEditable("Autonomie", item, "autonomie");
      html += fieldEditable("Commentaire", item, "commentaire");
      html += `<div class="panelActions admin-only">
        <button class="btn danger" onclick="deleteExtra('${selectedExtra.type}','${item.id}')">${icon("trash")} Supprimer</button>
      </div>`;
    }
  } else {
    html += `<div class="empty">Sélectionne un port, un câble, un tiroir, un NAS, un onduleur — ou un élément de la liste.</div>`;
  }

  html += `<div class="listSection"><div class="rowLabel" style="margin-top:22px;">Connexions (${filtered.length})</div>`;
  filtered.forEach(c=>{
    html += `<div class="listItem" onclick="selectConn('${c.id}')">
      ${icon(TYPE_ICON[c.type]||"box",15)}
      <div><strong style="color:${selectedConnId===c.id?"var(--accent)":"var(--ink)"}">${c.nom}</strong><br>
      <span class="meta">${c.bureau||"?"} · port ${c.portB??"?"}→${c.portS??"?"}</span></div>
    </div>`;
  });
  html += `</div>`;
  panel.innerHTML = html;
  panel.classList.remove("refresh");
  void panel.offsetWidth; // force le reflow pour pouvoir rejouer l'animation
  panel.classList.add("refresh");
}

window.selectConn = (id)=>{ selectedConnId = id; selectedExtra = null; render(); };
window.deleteConn = (id)=>{
  if(mode!=="admin") return;
  if(!confirm("Supprimer cette connexion ?")) return;
  DATA.connexions = DATA.connexions.filter(c=>c.id!==id);
  selectedConnId = null; save(); render();
};

// ---------------------------------------------------------------------------
// MODALE CONNEXION
// ---------------------------------------------------------------------------
const overlay = document.getElementById("overlay");
window.openModal = function(editingConn, prefill){
  document.getElementById("f_bandeau").innerHTML = baieBandeaux().map(b=>`<option value="${b.id}">${b.nom}</option>`).join("");
  document.getElementById("f_switch").innerHTML = baieSwitches().map(s=>`<option value="${s.id}">${s.nom}</option>`).join("");
  const swWrap = document.getElementById("f_couleur");
  swWrap.innerHTML = "";
  modalEditingId = editingConn ? editingConn.id : null;
  document.getElementById("modalTitle").textContent = editingConn ? "Modifier la connexion" : "Nouvelle connexion";
  const chosen = editingConn ? editingConn.couleur : (prefill?.couleur || TYPE_CABLE_COLOR["PC"] || "bleu foncé");
  Object.entries(CABLE_COLORS).forEach(([name,hex])=>{
    const d = document.createElement("div");
    d.className = "swatch" + (name===chosen?" selected":"");
    d.style.background = hex; d.title = name; d.dataset.name = name;
    d.onclick = ()=>{ swWrap.querySelectorAll(".swatch").forEach(s=>s.classList.remove("selected")); d.classList.add("selected"); };
    swWrap.appendChild(d);
  });
  const set = (id,val)=> document.getElementById(id).value = val ?? "";
  if(editingConn){
    set("f_nom", editingConn.nom); set("f_type", editingConn.type); set("f_bureau", editingConn.bureau);
    set("f_bandeau", editingConn.bandeauId); set("f_portB", editingConn.portB);
    set("f_switch", editingConn.switchId); set("f_portS", editingConn.portS);
    set("f_prise", editingConn.prise); set("f_ip", editingConn.ip); set("f_mac", editingConn.mac);
    set("f_comment", editingConn.comment);
  } else {
    ["f_nom","f_bureau","f_prise","f_ip","f_mac","f_comment"].forEach(id=>set(id,""));
    set("f_type","PC"); set("f_portB", prefill?.portB); set("f_portS", prefill?.portS);
    if(prefill?.bandeauId) set("f_bandeau", prefill.bandeauId);
    if(prefill?.switchId) set("f_switch", prefill.switchId);
  }
  overlay.classList.add("open");
};
document.getElementById("addBtn").onclick = ()=> openModal(null, null);
document.getElementById("cancelBtn").onclick = ()=> overlay.classList.remove("open");
// Regle metier : la couleur suit automatiquement le type d'equipement choisi.
// Reste modifiable manuellement ensuite (l'automatisme propose, il n'impose pas).
document.getElementById("f_type").addEventListener("change", (e)=>{
  const auto = TYPE_CABLE_COLOR[e.target.value];
  if(!auto) return;
  document.querySelectorAll("#f_couleur .swatch").forEach(s=>{
    s.classList.toggle("selected", s.dataset.name===auto);
  });
});
document.getElementById("saveBtn").onclick = ()=>{
  const nom = document.getElementById("f_nom").value.trim();
  if(!nom){ alert("Le nom du périphérique est requis."); return; }
  const couleurEl = document.querySelector("#f_couleur .swatch.selected");
  const payload = {
    nom, baieId: currentBaieId,
    type: document.getElementById("f_type").value,
    bureau: document.getElementById("f_bureau").value.trim(),
    bandeauId: document.getElementById("f_bandeau").value,
    portB: parseInt(document.getElementById("f_portB").value)||null,
    switchId: document.getElementById("f_switch").value,
    portS: parseInt(document.getElementById("f_portS").value)||null,
    prise: document.getElementById("f_prise").value.trim(),
    ip: document.getElementById("f_ip").value.trim(),
    mac: document.getElementById("f_mac").value.trim(),
    couleur: couleurEl ? couleurEl.dataset.name : "gris",
    comment: document.getElementById("f_comment").value.trim(),
  };
  // Regle metier : un emplacement (port de bandeau, port de switch) ne peut
  // etre occupe que par un seul equipement a la fois. On bloque plutot que
  // de laisser deux connexions se superposer silencieusement sur le meme port.
  if(payload.bandeauId && payload.portB){
    const conflictB = DATA.connexions.find(c=>
      c.id!==modalEditingId && c.bandeauId===payload.bandeauId && c.portB===payload.portB);
    if(conflictB){
      alert(`Le port ${payload.portB} de ce bandeau est déjà occupé par « ${conflictB.nom} ».\nUn emplacement ne peut être attribué qu'à un seul équipement — libérez-le d'abord.`);
      return;
    }
  }
  if(payload.switchId && payload.portS){
    const conflictS = DATA.connexions.find(c=>
      c.id!==modalEditingId && c.switchId===payload.switchId && c.portS===payload.portS);
    if(conflictS){
      alert(`Le port ${payload.portS} de ce switch est déjà occupé par « ${conflictS.nom} ».\nUn emplacement ne peut être attribué qu'à un seul équipement — libérez-le d'abord.`);
      return;
    }
  }
  if(modalEditingId){
    const idx = DATA.connexions.findIndex(c=>c.id===modalEditingId);
    if(idx>-1) DATA.connexions[idx] = {...DATA.connexions[idx], ...payload};
    selectedConnId = modalEditingId;
  } else {
    const newId = "c"+Date.now();
    DATA.connexions.push({id:newId, ...payload});
    selectedConnId = newId;
  }
  modalEditingId = null; save(); overlay.classList.remove("open"); render();
};

// ---------------------------------------------------------------------------
// MODALE CODE ADMIN
// ---------------------------------------------------------------------------
const pinOverlay = document.getElementById("pinOverlay");
let pinKind = "enter";
function openPinModal(kind){
  pinKind = kind;
  document.getElementById("pin1").value = "";
  document.getElementById("pin2").value = "";
  document.getElementById("pinConfirmWrap").style.display = kind==="create" ? "block" : "none";
  document.getElementById("pinTitle").innerHTML = icon("shield",17) + (kind==="create" ? " Créer un code admin" : " Code admin");
  document.getElementById("pinLabel1").textContent = kind==="create" ? "Nouveau code (4 caractères min.)" : "Code";
  pinOverlay.classList.add("open");
  setTimeout(()=>document.getElementById("pin1").focus(),50);
}
document.getElementById("pinCancelBtn").onclick = ()=> pinOverlay.classList.remove("open");
document.getElementById("pinSubmitBtn").onclick = async ()=>{
  const p1 = document.getElementById("pin1").value.trim();
  if(pinKind==="create"){
    const p2 = document.getElementById("pin2").value.trim();
    if(p1.length<4){ alert("Le code doit contenir au moins 4 caractères."); return; }
    if(p1!==p2){ alert("Les deux codes ne correspondent pas."); return; }
    storageSet(localStorage, "netmap_pin", p1);
    storageSet(sessionStorage, "netmap_admin", "true");
    mode = "admin"; applyMode(); pinOverlay.classList.remove("open"); hideLogin(); render();
  } else {
    let ok;
    if(ADMIN_PIN_HASH){
      ok = (await sha256Hex(p1)) === ADMIN_PIN_HASH;
    } else {
      ok = p1 === storageGet(localStorage, "netmap_pin");
    }
    if(!ok){ alert("Code incorrect."); return; }
    storageSet(sessionStorage, "netmap_admin", "true");
    mode = "admin"; applyMode(); pinOverlay.classList.remove("open"); hideLogin(); render();
  }
};

// ---------------------------------------------------------------------------
// MODALE ÉQUIPEMENTS (baie + bandeaux + switches)
// ---------------------------------------------------------------------------
const equipOverlay = document.getElementById("equipOverlay");
document.getElementById("equipBtn").onclick = ()=>{
  if(mode!=="admin") return;
  document.getElementById("equipTitle").innerHTML = icon("settings",17) + " Équipements";
  renderEquipContent();
  equipOverlay.classList.add("open");
};
document.getElementById("equipCloseBtn").onclick = ()=> equipOverlay.classList.remove("open");
window.updateGestion = (key, value)=>{
  DATA.gestion = DATA.gestion || {};
  DATA.gestion[key] = value;
  save(); renderRack();
};
window.updateBaie = (field, value)=>{
  const baie = currentBaie();
  baie[field] = value;
  save();
  renderBaiePicker(); renderRack();
};
window.updateEquip = (group, id, field, value)=>{
  const item = DATA[group].find(x=>x.id===id);
  if(item) item[field] = field==="nbPorts" ? (parseInt(value)||24) : value;
  save(); renderRack();
};
window.addBandeau = ()=>{
  const id = "bd"+Date.now();
  DATA.bandeaux.push({id, baieId:currentBaieId, nom:"Nouveau bandeau", reference:"", emplacement:"", nbPorts:24});
  const baie = currentBaie();
  if(baie.rack) baie.rack.push({type:"bandeau", id});
  save(); renderEquipContent(); renderRack();
};
window.addSwitch = ()=>{
  const id = "sw"+Date.now();
  DATA.switches.push({id, baieId:currentBaieId, nom:"Nouveau switch", constructeur:"", modele:"", nbPorts:24, emplacement:""});
  activeSwitchId = id;
  const baie = currentBaie();
  if(baie.rack) baie.rack.push({type:"switch", id});
  save(); renderEquipContent(); renderRack();
};
function renderEquipContent(){
  const baie = currentBaie();
  let html = `<div class="equipCard">
    <div class="eqTitle">${icon("mappin",13)} Baie</div>
    <label>Sigle (URL)</label><input value="${baie.slug}" oninput="updateBaie('slug',this.value)">
    <div class="pinHint">Le nom et le lieu réels ne sont modifiables que dans le fichier de données, pas à l'écran.</div>
  </div>`;
  baieBandeaux().forEach(bd=>{
    html += `<div class="equipCard">
      <div class="eqTitle">${icon("cable",13)} Bandeau</div>
      <label>Nom</label><input value="${bd.nom}" oninput="updateEquip('bandeaux','${bd.id}','nom',this.value)">
      <div class="row2">
        <div><label>Référence</label><input value="${bd.reference||""}" oninput="updateEquip('bandeaux','${bd.id}','reference',this.value)"></div>
        <div><label>Emplacement</label><input value="${bd.emplacement||""}" oninput="updateEquip('bandeaux','${bd.id}','emplacement',this.value)"></div>
      </div>
      <div class="row2">
        <div><label>Nombre de ports</label><input type="number" min="1" value="${bd.nbPorts}" oninput="updateEquip('bandeaux','${bd.id}','nbPorts',this.value)"></div>
        <div><label>Ports par rangée</label><input type="number" min="1" value="${bd.portsPerRow||24}" oninput="updateEquip('bandeaux','${bd.id}','portsPerRow',this.value)"></div>
      </div>
      <label>Commentaire</label><input value="${bd.commentaire||""}" oninput="updateEquip('bandeaux','${bd.id}','commentaire',this.value)">
    </div>`;
  });
  html += `<button class="btn admin-only" style="width:100%; justify-content:center; margin-bottom:14px;" onclick="addBandeau()">${icon("plus")} Ajouter un bandeau</button>`;
  baieSwitches().forEach(sw=>{
    html += `<div class="equipCard">
      <div class="eqTitle">${icon("router",13)} Switch</div>
      <label>Nom</label><input value="${sw.nom}" oninput="updateEquip('switches','${sw.id}','nom',this.value)">
      <div class="row2">
        <div><label>Constructeur</label><input value="${sw.constructeur||""}" oninput="updateEquip('switches','${sw.id}','constructeur',this.value)"></div>
        <div><label>Modèle</label><input value="${sw.modele||""}" oninput="updateEquip('switches','${sw.id}','modele',this.value)"></div>
      </div>
      <div class="row2">
        <div><label>Emplacement</label><input value="${sw.emplacement||""}" oninput="updateEquip('switches','${sw.id}','emplacement',this.value)"></div>
        <div><label>Nombre de ports</label><input type="number" min="1" value="${sw.nbPorts}" oninput="updateEquip('switches','${sw.id}','nbPorts',this.value)"></div>
      </div>
      <label>Ports par rangée <span style="opacity:.6;">(disposition physique réelle)</span></label>
      <input type="number" min="1" value="${sw.portsPerRow||24}" oninput="updateEquip('switches','${sw.id}','portsPerRow',this.value)">
      <label>Commentaire</label><input value="${sw.commentaire||""}" oninput="updateEquip('switches','${sw.id}','commentaire',this.value)">
    </div>`;
  });
  html += `<button class="btn admin-only" style="width:100%; justify-content:center;" onclick="addSwitch()">${icon("plus")} Ajouter un switch</button>`;
  document.getElementById("equipContent").innerHTML = html;
}

// ---------------------------------------------------------------------------
// MODALE ACCÈS (mots de passe de consultation par personne)
// ---------------------------------------------------------------------------
const accessOverlay = document.getElementById("accessOverlay");
document.getElementById("accessBtn").onclick = ()=>{
  if(mode!=="admin") return;
  document.getElementById("accessTitle").innerHTML = icon("keyround",17) + " Accès consultation";
  renderAccessContent();
  accessOverlay.classList.add("open");
};
document.getElementById("accessCloseBtn").onclick = ()=> accessOverlay.classList.remove("open");
function renderAccessContent(){
  const baie = currentBaie();
  let html = baie.viewers.map(v=>`
    <div class="equipCard">
      <label>Nom</label><input value="${v.nom}" oninput="updateViewer('${v.id}','nom',this.value)">
      <label>Mot de passe</label><input value="${v.password}" oninput="updateViewer('${v.id}','password',this.value)">
      <button class="btn danger" style="margin-top:10px; width:100%; justify-content:center;" onclick="removeViewer('${v.id}')">${icon("trash")} Retirer l'accès</button>
    </div>`).join("");
  html += `<button class="btn primary" style="width:100%; justify-content:center;" onclick="addViewer()">${icon("plus")} Ajouter une personne</button>`;
  document.getElementById("accessContent").innerHTML = html;
}
window.updateViewer = (id, field, value)=>{
  const baie = currentBaie();
  const v = baie.viewers.find(x=>x.id===id);
  if(v) v[field] = value;
  save();
};
window.removeViewer = (id)=>{
  const baie = currentBaie();
  baie.viewers = baie.viewers.filter(v=>v.id!==id);
  save(); renderAccessContent();
};
window.addViewer = ()=>{
  const baie = currentBaie();
  baie.viewers.push({id:"v"+Date.now(), nom:"Nouvelle personne", password:""});
  save(); renderAccessContent();
};

// ---------------------------------------------------------------------------
// QR / LIEN
// ---------------------------------------------------------------------------
const qrOverlay = document.getElementById("qrOverlay");
document.getElementById("qrCopyBtn").innerHTML = icon("download") + " Copier le lien";
document.getElementById("qrBtn").onclick = ()=>{
  const baie = currentBaie();
  const url = baieUrl(baie);
  document.getElementById("qrTitle").innerHTML = icon("qrcode",17) + " " + baie.slug;
  document.getElementById("qrUrl").textContent = url;
  renderQR(url, document.getElementById("qrContainer"));
  qrOverlay.classList.add("open");
};
document.getElementById("qrCopyBtn").onclick = ()=>{
  const url = document.getElementById("qrUrl").textContent;
  const btn = document.getElementById("qrCopyBtn");
  const done = ()=>{ const old=btn.innerHTML; btn.innerHTML = icon("check")+" Copié"; setTimeout(()=>btn.innerHTML=old,1500); };
  if(navigator.clipboard) navigator.clipboard.writeText(url).then(done).catch(done);
  else done();
};
document.getElementById("qrCloseBtn").onclick = ()=> qrOverlay.classList.remove("open");

// ---------------------------------------------------------------------------
// EXPORT / IMPORT
// ---------------------------------------------------------------------------
document.getElementById("exportBtn").onclick = ()=>{
  if(mode!=="admin") return;
  const blob = new Blob([JSON.stringify(DATA,null,2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dndvdl-map-export-"+new Date().toISOString().slice(0,10)+".json";
  a.click();
};
document.getElementById("importBtn").onclick = ()=>{ document.getElementById("fileImport").click(); };
document.getElementById("fileImport").addEventListener("change", e=>{
  const file = e.target.files[0];
  if(!file) return;
  const wasEmpty = !DATA.baies || DATA.baies.length === 0;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const parsed = JSON.parse(reader.result);
      if(!parsed.baies || !parsed.bandeaux || !parsed.switches || !parsed.connexions) throw new Error("format invalide");
      // Rien a ecraser lors du tout premier import : pas de confirmation inutile.
      if(!wasEmpty && !confirm("Remplacer toutes les données actuelles par ce fichier ?")) return;
      DATA = parsed;
      normalizeData();
      selectedConnId = null; selectedExtra = null;
      save();
      restoreLoginCard();
      boot();
    }catch(err){ alert("Fichier invalide : "+err.message); }
  };
  reader.readAsText(file);
  e.target.value = ""; // permet de reimporter le meme fichier ensuite
});

// ---------------------------------------------------------------------------
// BOOT
// ---------------------------------------------------------------------------
function boot(){
  // Coquille vide : tant qu'aucune donnée n'a été importée, on présente
  // l'écran d'import plutôt qu'un écran de connexion sans objet.
  if(!DATA.baies || DATA.baies.length === 0){ showEmptyState(); return; }
  const params = new URLSearchParams(location.search);
  const slug = window.DNDVDL_BAIE || params.get("baie");
  const found = DATA.baies.find(b=>b.slug===slug);
  currentBaieId = found ? found.id : DATA.baies[0].id;
  activeSwitchId = baieSwitches()[0]?.id;
  renderBaiePicker();
  checkAccess();
}

function showEmptyState(){
  document.getElementById("appRoot").style.display = "none";
  const scr = document.getElementById("loginScreen");
  scr.style.display = "flex";
  scr.querySelector("#loginCard").innerHTML = `
    <h1>DNDVDL<span>-MAP</span></h1>
    <div class="loginLieu">${icon("mappin",13)} Aucun fichier chargé</div>
    <div class="emptyIntro">
      Importez un fichier JSON pour commencer.
    </div>
    <button class="btn primary" id="emptyImportBtn" style="width:100%; justify-content:center; padding:13px 18px; margin-top:22px;">
      ${icon("upload")} Importer un fichier
    </button>
    <div id="loginNote">
      Traitement local uniquement, aucune requête réseau.
    </div>`;
  document.getElementById("emptyImportBtn").onclick = ()=>{
    document.getElementById("fileImport").click();
  };
}
boot();

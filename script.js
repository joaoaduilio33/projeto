'use strict';

/* =========================================================
   EDITE SEU PERFIL AQUI
   Todo texto tem versão em inglês (en) e português (pt).
   Para ativar um link, troque null pela URL.
   ========================================================= */
const DATA = {
  profile: {
    name: 'João Aduílio',
    handle: '@sky',
    image: 'assets/gotoh-avatar.webp',
    cutout: 'assets/gotoh-cutout-hd.webp', // personagem recortado (fundo transparente) da tela inicial
    imageCredit: 'edit: YASENKUI', // crédito da imagem da tela inicial
    level: 12,
    xp: 7420,
    maxXp: 10000,
    since: 2023,
    role: { en: 'Developer · Game dev · 3D', pt: 'Desenvolvedor · Game dev · 3D' },
    tagline: {
      en: 'Learning, building and turning random ideas into real projects — from websites to game worlds.',
      pt: 'Aprendendo, criando e transformando ideias aleatórias em projetos reais — de sites a mundos de jogo.'
    }
  },

  // palavra gigante atrás do personagem na tela inicial
  heroWord: 'LEVEL UP',

  // falas do balão (vão se alternando)
  speech: {
    en: ['One more commit and I sleep.', "It's not a bug, it's a feature.", 'Did you save your progress today?', 'Loading the next idea...'],
    pt: ['Mais um commit e eu durmo.', 'Não é bug, é feature.', 'Já salvou o progresso hoje?', 'Carregando a próxima ideia...']
  },

  nowPlaying: { title: 'Guitar, Loneliness and Blue Planet', artist: 'Kessoku Band' },

  projects: [
    {
      id: 'sociabble',
      name: 'SOCIABBLE',
      category: 'game',
      type: { en: 'GAME · GODOT', pt: 'JOGO · GODOT' },
      status: { en: 'IN DEVELOPMENT', pt: 'EM DESENVOLVIMENTO' },
      short: {
        en: 'A first-person life sim about conversations, where what you say changes how people remember you.',
        pt: 'Um simulador de vida em primeira pessoa sobre conversas, onde o que você diz muda como as pessoas lembram de você.'
      },
      details: {
        en: 'A 3D game in Godot 4.7, written in GDScript (about 5,600 lines so far). Each character has a relationship, an emotional state and a memory of past conversations, and an interpreter reads the tone of your answers. The prologue starts late at night in your bedroom, with a chat on the computer, and moves on to school the next morning.',
        pt: 'Um jogo 3D no Godot 4.7, escrito em GDScript (cerca de 5.600 linhas até agora). Cada personagem tem relacionamento, estado emocional e memória das conversas, e um intérprete lê o tom das suas respostas. O prólogo começa de madrugada no quarto, com uma conversa pelo computador, e segue para a escola na manhã seguinte.'
      },
      techs: ['Godot 4.7', 'GDScript', '3D', 'Mixamo'],
      images: ['assets/projects/sociabble.webp'],
      url: null
    },
    {
      id: 'after-hours',
      name: 'AFTER HOURS',
      category: '3d',
      type: { en: '3D ART · BLENDER', pt: 'ARTE 3D · BLENDER' },
      status: { en: 'RENDERED', pt: 'RENDERIZADO' },
      short: {
        en: 'A cozy gaming bedroom modeled in Blender, made as a set for Sociabble.',
        pt: 'Um quarto gamer aconchegante modelado no Blender, feito como cenário para o Sociabble.'
      },
      details: {
        en: 'Built in Blender with 940 objects: a gaming setup with hexagon lights, a bed, a lounge corner and a window with daylight. Rendered as an isometric cutaway, at night and from interior cameras. Bringing it into Godot is the next quest.',
        pt: 'Feito no Blender com 940 objetos: setup gamer com luzes hexagonais, cama, cantinho com sofá e janela com luz do dia. Renderizado em corte isométrico, à noite e por câmeras internas. Levar ele para o Godot é a próxima missão.'
      },
      techs: ['Blender', '3D modeling', 'Lighting', 'Materials'],
      images: ['assets/projects/after-hours.webp', 'assets/projects/after-hours-interior.webp', 'assets/projects/after-hours-night.webp', 'assets/projects/after-hours-setup.webp'],
      url: null
    },
    {
      id: 'valorant',
      name: 'PROTOCOLO // VALORANT',
      category: 'web',
      type: { en: 'WEB · FAN SITE', pt: 'WEB · FANSITE' },
      status: { en: 'LIVE', pt: 'NO AR' },
      live: true,
      short: {
        en: 'A Valorant fan site with every agent and map, abilities, videos and creator credits.',
        pt: 'Um fansite de Valorant com todos os agentes e mapas, habilidades, vídeos e créditos aos criadores.'
      },
      details: {
        en: 'Pages for 29 agents and 12 maps, with abilities, gameplay videos credited to their creators and data from a public Valorant API. Built with HTML, CSS and JavaScript, bundled with Vite and deployed on Vercel.',
        pt: 'Páginas para 29 agentes e 12 mapas, com habilidades, vídeos de gameplay creditados aos criadores e dados de uma API pública do Valorant. Feito com HTML, CSS e JavaScript, empacotado com Vite e publicado na Vercel.'
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'Vite'],
      images: ['assets/projects/valorant.webp'],
      url: 'https://valorant-fansite.vercel.app'
    }
  ],

  skills: [
    { name: 'HTML', icon: '</>', level: 9, featured: true, state: { en: 'MAIN LANGUAGE', pt: 'LINGUAGEM PRINCIPAL' }, desc: { en: 'The foundation of every interface I build.', pt: 'A base de toda interface que eu crio.' } },
    { name: 'PYTHON', icon: 'Py', level: 8, state: { en: 'WHERE IT STARTED', pt: 'ONDE TUDO COMEÇOU' }, desc: { en: 'My first language. Automations and AI experiments.', pt: 'Minha primeira linguagem. Automações e testes com IA.' } },
    { name: 'CSS', icon: '#', level: 7, state: { en: 'INTERFACE DESIGN', pt: 'DESIGN DE INTERFACE' }, desc: { en: 'Responsive layouts, lighting and motion.', pt: 'Layouts responsivos, luz e movimento.' } },
    { name: 'JAVASCRIPT', icon: 'JS', level: 6, state: { en: 'INTERACTION SYSTEMS', pt: 'SISTEMAS DE INTERAÇÃO' }, desc: { en: 'Turning static screens into experiences.', pt: 'Transformando telas estáticas em experiências.' } },
    { name: 'GODOT', icon: '◈', level: 6, state: { en: 'WORLD BUILDING', pt: 'CONSTRUÇÃO DE MUNDOS' }, desc: { en: 'Scenes, mechanics and player feedback.', pt: 'Cenas, mecânicas e resposta ao jogador.' } },
    { name: 'BLENDER', icon: '◎', level: 6, state: { en: '3D MODELING', pt: 'MODELAGEM 3D' }, desc: { en: 'Modeling, materials and lighting for game sets.', pt: 'Modelagem, materiais e luz para cenários de jogo.' } },
    { name: 'GDSCRIPT', icon: 'gd', level: 5, state: { en: 'GAME LOGIC', pt: 'LÓGICA DE JOGO' }, desc: { en: 'Dialogue, relationships and story systems.', pt: 'Diálogos, relacionamentos e sistemas de história.' } },
    { name: 'C#', icon: 'C#', level: 2, state: { en: 'LEARNING THE BASICS', pt: 'APRENDENDO O BÁSICO' }, desc: { en: 'Building a base in logic and game systems.', pt: 'Criando base em lógica e sistemas de jogo.' } },
    { name: 'LUA', icon: 'Lu', level: 2, state: { en: 'NEW SKILL UNLOCKED', pt: 'NOVA HABILIDADE' }, desc: { en: 'Lightweight scripts and game logic.', pt: 'Scripts leves e lógica de jogo.' } }
  ],

  quests: [
    { type: 'main', progress: 45, name: { en: 'Become highly skilled at programming', pt: 'Ficar muito bom em programação' }, desc: { en: 'Build consistently. Solve harder problems. Keep the curiosity.', pt: 'Criar com constância. Resolver problemas maiores. Manter a curiosidade.' } },
    { type: 'side', progress: 35, name: { en: 'Release a complete game', pt: 'Lançar um jogo completo' }, desc: { en: 'Take Sociabble from prototype to something people can play.', pt: 'Levar o Sociabble de protótipo a algo que as pessoas possam jogar.' } },
    { type: 'side', progress: 25, name: { en: 'Learn Artificial Intelligence', pt: 'Aprender Inteligência Artificial' }, desc: { en: 'Explore machine learning and make my first smart tools.', pt: 'Explorar machine learning e criar minhas primeiras ferramentas inteligentes.' } },
    { type: 'side', progress: 50, name: { en: 'Create more original projects', pt: 'Criar mais projetos originais' }, desc: { en: 'Give the ideas in my notes a life outside the notes app.', pt: 'Dar vida às ideias que estão só no bloco de notas.' } }
  ],

  journey: [
    { date: '2023', title: { en: 'Started programming with Python', pt: 'Comecei a programar com Python' }, desc: { en: 'The first hello world. The first spark of curiosity.', pt: 'O primeiro hello world. A primeira faísca de curiosidade.' } },
    { date: { en: 'FEB 2026', pt: 'FEV 2026' }, title: { en: 'Launched Protocolo // Valorant', pt: 'Lancei o Protocolo // Valorant' }, desc: { en: 'My first fan site went live.', pt: 'Meu primeiro fansite foi ao ar.' } },
    { date: { en: 'AUG 2026', pt: 'AGO 2026' }, title: { en: 'Started Sociabble in Godot', pt: 'Comecei o Sociabble no Godot' }, desc: { en: 'Game mechanics, dialogue and a social system.', pt: 'Mecânicas, diálogos e um sistema social.' } },
    { date: { en: 'SEP 2026', pt: 'SET 2026' }, title: { en: 'Modeled AFTER HOURS in Blender', pt: 'Modelei o AFTER HOURS no Blender' }, desc: { en: 'A full bedroom set, 940 objects.', pt: 'Um quarto completo, 940 objetos.' } },
    { date: { en: 'OCT 2026', pt: 'OUT 2026' }, title: { en: 'Rebuilt SKY.OS', pt: 'Refiz o SKY.OS' }, desc: { en: 'Current checkpoint: you are here.', pt: 'Checkpoint atual: você está aqui.' } }
  ],

  achievements: [
    { icon: 'i-flag', title: { en: 'First site online', pt: 'Primeiro site no ar' }, desc: { en: 'Protocolo // Valorant went live on Vercel.', pt: 'O Protocolo // Valorant foi ao ar na Vercel.' } },
    { icon: 'i-hex', title: { en: 'Room builder', pt: 'Construtor de cenários' }, desc: { en: '940 objects in a single Blender scene.', pt: '940 objetos numa única cena do Blender.' } },
    { icon: 'i-user', title: { en: 'Social engine', pt: 'Motor social' }, desc: { en: 'Relationships, emotions and memory in GDScript.', pt: 'Relacionamentos, emoções e memória em GDScript.' } }
  ],

  contacts: [
    { name: 'GitHub', icon: 'i-github', url: 'https://github.com/joaoaduilio33' },
    { name: 'Discord', icon: 'i-discord', copy: 'skyrtf' }, // Discord não tem link por nome, então o botão copia o usuário
    { name: 'Email', icon: 'i-mail', url: 'mailto:joaoaduilio33@gmail.com' }
  ]
};

/* ---------- Textos fixos da interface ---------- */
const UI = {
  en: {
    'a11y.skip': 'Skip to content',
    'intro.skip': 'click or press any key to skip',
    'rail.scroll': 'Scroll',
    'nav.home': 'Home', 'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.quests': 'Quests', 'nav.contact': 'Contact',
    'dash.projects': 'Projects', 'dash.viewAll': 'View all', 'dash.quests': 'Active quests', 'dash.status': 'Status', 'dash.achievements': 'Achievements',
    'projects.eyebrow': 'Ideas that left my head', 'projects.title': 'Project archive', 'projects.event': 'EVENT',
    'skills.eyebrow': 'Equipped and upgrading', 'skills.title': 'Inventory',
    'skills.note': 'Levels are a playful snapshot of my journey, not an official rating.',
    'journey.eyebrow': 'Saving progress', 'journey.title': 'Quest log',
    'contact.eyebrow': 'Start a conversation', 'contact.title': "Let's connect",
    'footer.text': 'Built with curiosity. Powered by too many ideas.',
    player: 'PLAYER 01', online: 'ONLINE', viewProjects: 'View projects', questLog: 'Quest log', readMore: 'Read more', visit: 'Visit site',
    all: 'ALL', game: 'GAMES', '3d': '3D ART', web: 'WEB',
    main: 'MAIN QUEST', side: 'SIDE QUEST', inProgress: 'IN PROGRESS',
    class: 'Developer', projectsCount: 'Projects', skillsCount: 'Skills', since: 'Coding since', focus: 'Current focus', focusValue: 'Godot & AI',
    social: 'SOCIAL BATTERY', nowPlaying: 'ON REPEAT',
    soon: (n) => `> ${n}: link coming soon.`,
    copied: (u) => `> Discord username copied: ${u}`,
    fxOn: 'FX ON', fxOff: 'FX OFF', menuOpen: 'Open system menu', menuClose: 'Close system menu',
    sections: ['Home', 'Projects', 'Skills', 'Quests', 'Contact'],
    rpgIntro: '* Greetings, traveler.\n* You found SKY.OS.\n* Cool idea, shared interest or just a hello?',
    rpgHover: ['* GitHub. The code behind the magic.', '* Discord: skyrtf. For talking about games at 3 a.m.', '* Email. For the more serious quests.', '* Spare SKY.OS and go back to the start.'],
    rpgMercy: '* You spared SKY.OS.\n* Returning to the start...',
    rpgWords: ['GITHUB', 'DISCORD', 'EMAIL', 'MERCY'],
    boxLines: ['...', 'nobody here', "I'm not hiding", 'just five more minutes'],
    boxRecharge: '> social battery recharged inside the box.',
    lowBattery: '> social battery is low. Someone might hide in a box soon.',
    idle: '...brb, hiding in the box',
    gameTag: 'Enter the next level',
    hp: 'HP', rank: 'DEV RANK', currentQuest: 'CURRENT QUEST', menu: 'MENU', gift: 'GIFT', news: 'NEWS',
    giftMsg: '> gift opened: +20 social battery.', newsMsg: (t) => `> latest news: ${t}`,
    stampSub: 'Dev since 2023', stripProjects: 'Projects', stripSkills: 'Skills', stripLevel: 'Level', stripArchive: 'Project archive'
  },
  pt: {
    'a11y.skip': 'Pular para o conteúdo',
    'intro.skip': 'clique ou aperte qualquer tecla para pular',
    'rail.scroll': 'Role',
    'nav.home': 'Início', 'nav.projects': 'Projetos', 'nav.skills': 'Habilidades', 'nav.quests': 'Missões', 'nav.contact': 'Contato',
    'dash.projects': 'Projetos', 'dash.viewAll': 'Ver todos', 'dash.quests': 'Missões ativas', 'dash.status': 'Status', 'dash.achievements': 'Conquistas',
    'projects.eyebrow': 'Ideias que saíram da cabeça', 'projects.title': 'Arquivo de projetos', 'projects.event': 'EVENTO',
    'skills.eyebrow': 'Equipado e evoluindo', 'skills.title': 'Inventário',
    'skills.note': 'Os níveis são um retrato divertido da minha jornada, não uma avaliação oficial.',
    'journey.eyebrow': 'Salvando o progresso', 'journey.title': 'Diário de missões',
    'contact.eyebrow': 'Puxe conversa', 'contact.title': 'Bora conversar',
    'footer.text': 'Feito com curiosidade. Movido a ideias demais.',
    player: 'JOGADOR 01', online: 'ONLINE', viewProjects: 'Ver projetos', questLog: 'Diário de missões', readMore: 'Ver mais', visit: 'Abrir site',
    all: 'TODOS', game: 'JOGOS', '3d': 'ARTE 3D', web: 'WEB',
    main: 'MISSÃO PRINCIPAL', side: 'MISSÃO SECUNDÁRIA', inProgress: 'EM ANDAMENTO',
    class: 'Desenvolvedor', projectsCount: 'Projetos', skillsCount: 'Habilidades', since: 'Programando desde', focus: 'Foco atual', focusValue: 'Godot e IA',
    social: 'BATERIA SOCIAL', nowPlaying: 'NO REPEAT',
    soon: (n) => `> ${n}: link em breve.`,
    copied: (u) => `> Usuário do Discord copiado: ${u}`,
    fxOn: 'FX ON', fxOff: 'FX OFF', menuOpen: 'Abrir menu do sistema', menuClose: 'Fechar menu do sistema',
    sections: ['Início', 'Projetos', 'Habilidades', 'Missões', 'Contato'],
    rpgIntro: '* Saudações, viajante.\n* Você encontrou o SKY.OS.\n* Ideia legal, interesse em comum ou só um oi?',
    rpgHover: ['* GitHub. O código por trás da mágica.', '* Discord: skyrtf. Pra falar de jogo às 3 da manhã.', '* Email. Pras missões mais sérias.', '* Poupar o SKY.OS e voltar ao início.'],
    rpgMercy: '* Você poupou o SKY.OS.\n* Voltando ao início...',
    rpgWords: ['GITHUB', 'DISCORD', 'EMAIL', 'MERCY'],
    boxLines: ['...', 'não tem ninguém aqui', 'não tô me escondendo', 'só mais cinco minutinhos'],
    boxRecharge: '> bateria social recarregada dentro da caixa.',
    lowBattery: '> bateria social baixa. Alguém pode se esconder numa caixa a qualquer momento.',
    idle: '...já volto, tô na caixa',
    gameTag: 'Entre no próximo nível',
    hp: 'HP', rank: 'RANK DEV', currentQuest: 'MISSÃO ATUAL', menu: 'MENU', gift: 'PRESENTE', news: 'AVISOS',
    giftMsg: '> presente aberto: +20 de bateria social.', newsMsg: (t) => `> novidade: ${t}`,
    stampSub: 'Dev desde 2023', stripProjects: 'Projetos', stripSkills: 'Habilidades', stripLevel: 'Nível', stripArchive: 'Arquivo de projetos'
  }
};

/* ---------- Utilidades ---------- */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* opcional */ } }
};

let lang = store.get('sky-lang') || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en');
let fx = store.get('sky-fx') !== 'off';
let battery = 78;

const T = (key) => UI[lang][key] ?? UI.en[key] ?? key;
const L = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.en) : v);
const icon = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;
const bar = (pct, cls = '') => `<div class="hp-bar ${cls}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><span data-v="${pct}"></span></div>`;
const locale = () => (lang === 'pt' ? 'pt-BR' : 'en');

/* ---------- Texto letra por letra ---------- */
function split(el) {
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  let i = 0;
  el.innerHTML = text.split(' ').map((word) =>
    `<span aria-hidden="true" style="display:inline-block;white-space:nowrap">${[...word].map((c) => `<span class="ch" style="--i:${i++}">${esc(c)}</span>`).join('')}</span>`
  ).join(' ');
}
function replay(el) {
  el.classList.remove('in');
  void el.offsetWidth;
  el.classList.add('in');
}

/* ---------- Escrita tipo terminal ---------- */
const typers = new WeakMap();
function typeInto(el, text, speed = 26) {
  clearInterval(typers.get(el));
  if (!fx) { el.textContent = text; el.classList.remove('typing'); return; }
  el.textContent = '';
  el.classList.add('typing');
  let n = 0;
  typers.set(el, setInterval(() => {
    el.textContent = text.slice(0, ++n);
    if (n >= text.length) { clearInterval(typers.get(el)); el.classList.remove('typing'); }
  }, speed));
}

/* ---------- Observador de entrada na tela ---------- */
const seen = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    if (el.matches('[data-split]')) replay(el);
    if (el.matches('.reveal, .circuit')) el.classList.add('in');
    if (el.matches('.hp-bar')) { const s = el.firstElementChild; s.style.setProperty('--v', s.dataset.v + '%'); }
    if (el.matches('[data-count]')) countUp(el);
    if (el.matches('.rpg') && !el.dataset.done) { el.dataset.done = '1'; typeInto($('#rpg-text'), T('rpgIntro')); }
    seen.unobserve(el);
  });
}, { threshold: 0.2 });

function watch(root = document) {
  $$('[data-split], .reveal, .circuit, .hp-bar:not(.social), [data-count]', root).forEach((el) => seen.observe(el));
}

function countUp(el) {
  const target = Number(el.dataset.count);
  const pad = Number(el.dataset.pad || 0);
  const fmt = (n) => String(Math.round(n)).padStart(pad, '0');
  if (!fx) { el.textContent = fmt(target); return; }
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min((now - t0) / 1400, 1);
    el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Renderização ---------- */
function renderStatic() {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  $$('[data-i18n]').forEach((el) => {
    el.textContent = T(el.dataset.i18n);
    if (el.matches('[data-split]')) split(el);
  });
  $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $('#fx-label').textContent = fx ? T('fxOn') : T('fxOff');
  $('#sao-trigger').setAttribute('aria-label', $('#sao-menu').classList.contains('open') ? T('menuClose') : T('menuOpen'));
}

function renderSlides() {
  const slides = [
    ...DATA.projects.map((pr) => `<article class="slide" role="group" aria-roledescription="slide">
      <div class="slide-text">
        <p class="slide-kicker">${esc(L(pr.type))}</p>
        <h2 class="slide-title" data-hero-split>${esc(pr.name)}</h2>
        <p class="slide-sub">${esc(L(pr.status))}</p>
        <p class="slide-desc">${esc(L(pr.short))}</p>
        <div class="slide-actions">
          ${pr.url ? `<a class="cta" href="${esc(pr.url)}" target="_blank" rel="noopener">${T('visit')} ${icon('i-arrow')}</a>` : ''}
          <button type="button" class="read-more" data-open="${pr.id}">${T('readMore')}</button>
        </div>
      </div>
      <div class="slide-media">
        <div class="frame"><img src="${esc(pr.images[0])}" alt="${esc(pr.name)}" loading="lazy"><span class="scan"></span></div>
      </div>
    </article>`)
  ];
  $('#slides').innerHTML = slides.join('');
  $('#dots').innerHTML = slides.map((_, i) => `<button type="button" role="tab" aria-label="${i + 1}" aria-selected="false"></button>`).join('');
  $$('[data-hero-split]').forEach(split);
  carousel.go(carousel.index, true);
}

function renderHero() {
  const p = DATA.profile;
  const xpPct = Math.round((p.xp / p.maxXp) * 100);
  const word = $('#giant-word');
  word.textContent = DATA.heroWord;
  split(word);
  $('#game-img').src = p.cutout || p.image;
  const credit = $('#game-credit');
  credit.textContent = p.imageCredit || '';
  credit.hidden = !p.imageCredit;
  $('#game-tag').innerHTML = `<span>${T('gameTag')}</span><b>01</b>`;

  $('#hud-player').innerHTML = `
    <div class="hud-who"><img src="${esc(p.image)}" alt=""><div><b>${esc(p.name)}</b><small>${esc(p.handle)} · LV. ${p.level}</small></div></div>
    <div class="hud-row" style="--c:#ff4f8f">
      <span class="lbl">${T('social')}</span>
      <span class="num" data-battery-num>${battery}%</span>
      <span class="gbar"><span data-battery-bar style="--v:${battery}%"></span></span>
    </div>
    <div class="hud-row" style="--c:#4fd17a">
      <span class="lbl">${T('rank')}</span>
      <span class="num">${p.level}</span>
      <span class="gbar"><span data-gv="${xpPct}"></span><em>${p.xp.toLocaleString(locale())} / ${p.maxXp.toLocaleString(locale())}</em></span>
    </div>`;

  $('#pill-xp').innerHTML = `<span class="coin">${icon('i-star')}</span>${p.xp.toLocaleString(locale())} XP`;

  $('#hud-side').innerHTML = `
    <button type="button" class="side-btn" data-side="menu">${icon('i-menu')}${T('menu')}</button>
    <button type="button" class="side-btn" data-side="gift">${icon('i-gift')}${T('gift')}</button>
    <button type="button" class="side-btn notify" data-side="news">${icon('i-bell')}${T('news')}</button>`;

  const quest = DATA.quests[1];
  $('#game-left').innerHTML = `
    <p class="g-kicker">${T('player')} <span class="online"><i></i>${T('online')}</span></p>
    <h1 class="g-name">${esc(p.name)}</h1>
    <p class="g-sub">${esc(p.handle)} · ${esc(L(p.role))}</p>
    <p class="g-desc">${esc(L(p.tagline))}</p>
    <a class="g-btn solid" href="#projects">${T('viewProjects')} ${icon('i-arrow')}</a>`;
  $('#game-right').innerHTML = `
    <p class="g-kicker">${T('currentQuest')}</p>
    <h2 class="g-title">${esc(L(quest.name))}</h2>
    <p class="g-desc">${esc(L(quest.desc))}</p>
    <a class="g-btn" href="#journey">${T('questLog')} ${icon('i-arrow')}</a>`;

  $('#stamp').innerHTML = `<svg class="star"><use href="#i-star"/></svg><b>開発</b><span>${T('stampSub')}</span>`;

  $('#game-strip').innerHTML = `
    <div class="strip-cell"><span class="radar">${icon('i-radar')}</span><div><small>${T('stripProjects')}</small><b><sup>+</sup><span data-count="${DATA.projects.length}" data-pad="2">00</span></b></div></div>
    <div class="strip-cell"><div><small>${T('stripSkills')}</small><b><sup>+</sup><span data-count="${DATA.skills.length}" data-pad="2">00</span></b></div></div>
    <div class="strip-cell"><div><small>${T('stripLevel')}</small><b>LV.${p.level}</b></div></div>
    <div class="strip-cell"><span class="thumbs-row">${DATA.projects.map((pr) => `<img src="${esc(pr.images[0])}" alt="">`).join('')}</span><div><small>${T('stripArchive')}</small></div></div>
    <a class="strip-go" href="#projects" aria-label="${esc(T('stripArchive'))}">${icon('i-arrow')}</a>`;
}

// barras do cartão do jogador enchem depois de aparecer
function fillGameBars() {
  $$('[data-gv]').forEach((s) => s.style.setProperty('--v', s.dataset.gv + '%'));
}

// falas que vão trocando no balão
let speechIndex = 0;
function nextSpeech() {
  const lines = L(DATA.speech);
  typeInto($('#speech-text'), lines[speechIndex % lines.length], 34);
  speechIndex++;
}

function renderDash() {
  $('#mini-cards').innerHTML = DATA.projects.slice(0, 2).map((pr) =>
    `<button type="button" class="mini reveal" data-open="${pr.id}"><img src="${esc(pr.images[0])}" alt="" loading="lazy"><span>${esc(pr.name)}</span></button>`
  ).join('');

  $('#quest-chips').innerHTML = DATA.quests.map((q) =>
    `<div class="chip reveal">${icon(q.type === 'main' ? 'i-flag' : 'i-star')}<span class="chip-text">${esc(L(q.name))}<small>${T(q.type)}</small></span><span class="pct">${q.progress}%</span></div>`
  ).join('');

  $('#now-playing').innerHTML = `
    <span class="np-disc">${icon('i-pick')}</span>
    <span class="np-info"><small>${T('nowPlaying')}</small><b>${esc(DATA.nowPlaying.title)}</b><span>${esc(DATA.nowPlaying.artist)}</span></span>
    <span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>`;

  $('#achievements').innerHTML = DATA.achievements.map((a) =>
    `<div class="achv reveal"><span class="achv-icon">${icon(a.icon)}</span><div><b>${esc(L(a.title))}</b><small>${esc(L(a.desc))}</small></div></div>`
  ).join('');
}

let filter = 'all';
function renderProjects() {
  const cats = ['all', ...new Set(DATA.projects.map((p) => p.category))];
  $('#filters').innerHTML = cats.map((c) => {
    const n = c === 'all' ? DATA.projects.length : DATA.projects.filter((p) => p.category === c).length;
    return `<button type="button" data-filter="${c}" aria-pressed="${c === filter}">${T(c)}<span>${String(n).padStart(2, '0')}</span></button>`;
  }).join('');

  $('#project-grid').innerHTML = DATA.projects.map((pr) => `
    <article class="project reveal${filter !== 'all' && pr.category !== filter ? ' is-hidden' : ''}" data-cat="${pr.category}">
      <div class="project-cover"><span class="badge${pr.live ? ' live' : ''}">${esc(L(pr.status))}</span><img src="${esc(pr.images[0])}" alt="${esc(pr.name)}" loading="lazy"></div>
      <div class="project-body">
        <span class="project-type">${esc(L(pr.type))}</span>
        <h3>${esc(pr.name)}</h3>
        <p>${esc(L(pr.short))}</p>
        <div class="techs">${pr.techs.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        <button type="button" class="project-open" data-open="${pr.id}">${T('readMore')} ${icon('i-arrow')}</button>
      </div>
    </article>`).join('');
}

function renderSkills() {
  $('#inventory').innerHTML = DATA.skills.map((s) => `
    <article class="item reveal${s.featured ? ' featured' : ''}">
      <div class="item-top">
        <span class="item-icon">${esc(s.icon)}</span>
        <div><h3>${esc(s.name)}</h3><small>${esc(L(s.state))}</small></div>
        <span class="lv">LV.${s.level}</span>
      </div>
      <p>${esc(L(s.desc))}</p>
      ${bar(s.level * 10, 'thin')}
    </article>`).join('');
}

function renderJourney() {
  $('#quests').innerHTML = DATA.quests.map((q) => `
    <article class="quest win reveal">
      <div class="quest-head"><span>${T(q.type)}</span><span class="st">${T('inProgress')} · ${q.progress}%</span></div>
      <h3>${esc(L(q.name))}</h3>
      <p>${esc(L(q.desc))}</p>
      ${bar(q.progress, 'xp thin')}
    </article>`).join('');
  $('#timeline').innerHTML = DATA.journey.map((j) => `
    <li class="reveal"><svg class="cube" aria-hidden="true"><use href="#i-cube"/></svg><time>${esc(L(j.date))}</time><h3>${esc(L(j.title))}</h3><p>${esc(L(j.desc))}</p></li>`).join('');
}

function contactLink(c, i, cls, inner) {
  if (c.copy) return `<button type="button" class="${cls}" data-copy="${esc(c.copy)}" data-rpg="${i}" aria-label="${esc(c.name)}: ${esc(c.copy)}">${inner}</button>`;
  return c.url
    ? `<a class="${cls}" href="${esc(c.url)}"${c.url.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener"'} data-rpg="${i}" aria-label="${esc(c.name)}">${inner}</a>`
    : `<button type="button" class="${cls}" data-soon="${i}" data-rpg="${i}" aria-label="${esc(c.name)}">${inner}</button>`;
}

function renderContacts() {
  const words = T('rpgWords');
  $('#rpg-actions').innerHTML = DATA.contacts.map((c, i) =>
    contactLink(c, i, 'rpg-btn', `<svg class="soul" aria-hidden="true"><use href="#i-heart"/></svg><span class="label-ico">${icon(c.icon)}</span>${esc(words[i])}`)
  ).join('') + `<button type="button" class="rpg-btn" data-mercy data-rpg="3"><svg class="soul" aria-hidden="true"><use href="#i-heart"/></svg><span class="label-ico">${icon('i-heart')}</span>${esc(words[3])}</button>`;
  $('#rail-links').innerHTML = DATA.contacts.map((c, i) => contactLink(c, i, '', icon(c.icon))).join('');
  const rpg = $('#rpg-text');
  if ($('.rpg').dataset.done) { clearInterval(typers.get(rpg)); rpg.textContent = T('rpgIntro'); }
}

function renderAll() {
  renderStatic();
  renderHero();
  renderSlides();
  renderDash();
  renderProjects();
  renderSkills();
  renderJourney();
  renderContacts();
  updateRailName();
  watch();
}

/* ---------- Carrossel ---------- */
const carousel = {
  index: 0,
  timer: 0,
  delay: 8000,
  paused: false,
  go(i, instant = false) {
    const slides = $$('.slide');
    if (!slides.length) return;
    this.index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      const on = n === this.index;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', String(!on));
      s.inert = !on;
    });
    $$('#dots button').forEach((d, n) => d.setAttribute('aria-selected', String(n === this.index)));
    $('#slide-count').textContent = `${this.index + 1}/${slides.length}`;
    const title = $('[data-hero-split]', slides[this.index]);
    if (title) replay(title);
    $$('.hp-bar:not(.social) span', slides[this.index]).forEach((s) => {
      s.style.setProperty('--v', '0%');
      requestAnimationFrame(() => requestAnimationFrame(() => s.style.setProperty('--v', s.dataset.v + '%')));
    });
    if (!instant) this.restart();
  },
  restart() {
    clearTimeout(this.timer);
    $('#hero-card').style.setProperty('--dur', this.delay + 'ms');
    if (!fx || this.paused) return;
    this.timer = setTimeout(() => this.go(this.index + 1), this.delay);
  },
  init() {
    const card = $('#hero-card');
    $('#hero-prev').addEventListener('click', () => this.go(this.index - 1));
    $('#hero-next').addEventListener('click', () => this.go(this.index + 1));
    $('#dots').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (b) this.go($$('#dots button').indexOf(b));
    });
    const pause = (v) => { this.paused = v; card.classList.toggle('paused', v); if (v) clearTimeout(this.timer); else this.restart(); };
    card.addEventListener('pointerenter', () => pause(true));
    card.addEventListener('pointerleave', () => pause(false));
    card.addEventListener('focusin', () => pause(true));
    card.addEventListener('focusout', () => pause(false));
    let x0 = null;
    card.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
    card.addEventListener('pointerup', (e) => {
      if (x0 === null) return;
      const dx = e.clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) this.go(this.index + (dx < 0 ? 1 : -1));
    });
    $('#home').addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.go(this.index + 1);
      if (e.key === 'ArrowLeft') this.go(this.index - 1);
    });
  }
};

/* ---------- Diálogo de projeto ---------- */
function openProject(id) {
  const pr = DATA.projects.find((p) => p.id === id);
  if (!pr) return;
  $('#dialog-title').innerHTML = `${icon('i-grid')} ${esc(L(pr.type))}`;
  $('#dialog-body').innerHTML = `
    <div class="gallery-main"><img id="gallery-img" src="${esc(pr.images[0])}" alt="${esc(pr.name)}"></div>
    ${pr.images.length > 1 ? `<div class="thumbs">${pr.images.map((src, i) => `<button type="button" data-src="${esc(src)}" aria-current="${i === 0}"><img src="${esc(src)}" alt=""></button>`).join('')}</div>` : ''}
    <div class="dialog-info">
      <h3>${esc(pr.name)}</h3><span class="status">${esc(L(pr.status))}</span>
      <p>${esc(L(pr.details))}</p>
      <div class="techs">${pr.techs.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
      ${pr.url ? `<a class="cta" href="${esc(pr.url)}" target="_blank" rel="noopener">${T('visit')} ${icon('i-arrow')}</a>` : ''}
    </div>`;
  $('#project-dialog').showModal();
}

/* ---------- Avisos ---------- */
let toastTimer = 0;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2800);
}

/* ---------- Tema: só o escuro, como tela de jogo ---------- */
const isDark = () => true;

/* ---------- Bateria social (descarrega com o tempo) ---------- */
let warnedLow = false;
function setBattery(v) {
  battery = Math.max(3, Math.min(100, Math.round(v)));
  $('.os-battery').style.setProperty('--b', battery + '%');
  $('#os-battery-num').textContent = battery + '%';
  $$('[data-battery-num]').forEach((el) => { el.textContent = battery + '%'; });
  $$('[data-battery-bar]').forEach((el) => el.style.setProperty('--v', battery + '%'));
}
setInterval(() => {
  if (document.hidden) return;
  setBattery(battery - 1);
  if (battery <= 15 && !warnedLow) { warnedLow = true; toast(T('lowBattery')); }
}, 12000);

/* ---------- Relógio do sistema ---------- */
function tickClock() {
  const d = new Date();
  $('#os-time').textContent = d.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' });
  $('#os-date').textContent = d.toLocaleDateString(locale(), { weekday: 'short', day: '2-digit', month: 'short' });
}

/* ---------- Partículas: hexágonos, cubinhos e palhetas ---------- */
const particles = (() => {
  const cv = $('#particles');
  const ctx = cv.getContext('2d');
  const palettes = {
    light: ['124,136,204', '85,96,168', '255,255,255', '244,163,64', '185,194,238'],
    dark: ['255,45,85', '255,130,150', '255,255,255', '170,20,45', '110,110,125']
  };
  const cubeColors = ['242,200,75', '79,155,232'];
  let w = 0, h = 0, list = [], shards = [], raf = 0, mx = 0, my = 0, tx = 0, ty = 0;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    list = Array.from({ length: Math.round(Math.min(100, (w * h) / 13000)) }, () => make(true));
  }
  function make(anywhere) {
    const z = 0.3 + Math.random() * 0.7;
    const r = Math.random();
    return {
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 20,
      z,
      s: (4 + Math.random() * 10) * z,
      vy: -(0.12 + Math.random() * 0.35) * z,
      ph: Math.random() * 6.28,
      rot: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.01,
      kind: r < 0.36 ? 'hex' : r < 0.55 ? 'tri' : r < 0.72 ? 'dot' : r < 0.88 ? 'cube' : 'pick',
      c: Math.floor(Math.random() * 5),
      cc: cubeColors[Math.floor(Math.random() * 2)],
      a: 0.25 + Math.random() * 0.45
    };
  }
  function poly(x, y, r, sides, rot) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = rot + (i / sides) * Math.PI * 2;
      ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r, y + Math.sin(a) * r);
    }
    ctx.closePath();
  }
  function cube(x, y, s, col) {
    const face = (pts, alpha) => {
      ctx.beginPath();
      pts.forEach(([px, py], i) => ctx[i ? 'lineTo' : 'moveTo'](x + px * s, y + py * s));
      ctx.closePath();
      ctx.fillStyle = `rgba(${col},${alpha})`;
      ctx.fill();
    };
    face([[0, -1], [0.87, -0.5], [0, 0], [-0.87, -0.5]], 1);
    face([[-0.87, -0.5], [0, 0], [0, 1], [-0.87, 0.5]], 0.75);
    face([[0.87, -0.5], [0, 0], [0, 1], [0.87, 0.5]], 0.55);
  }
  function pick(x, y, s, rot, col) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(0, s);
    ctx.bezierCurveTo(-s * 0.4, s * 0.5, -s, -s * 0.2, -s * 0.9, -s * 0.6);
    ctx.bezierCurveTo(-s * 0.6, -s * 1.05, s * 0.6, -s * 1.05, s * 0.9, -s * 0.6);
    ctx.bezierCurveTo(s, -s * 0.2, s * 0.4, s * 0.5, 0, s);
    ctx.fillStyle = `rgba(${col},.75)`;
    ctx.fill();
    ctx.restore();
  }
  function frame(t) {
    raf = requestAnimationFrame(frame);
    const pal = palettes[isDark() ? 'dark' : 'light'];
    const pinkCol = '255,77,121';
    tx += (mx - tx) * 0.05; ty += (my - ty) * 0.05;
    ctx.clearRect(0, 0, w, h);
    for (const p of list) {
      p.y += p.vy;
      p.rot += p.vr;
      const x = p.x + Math.sin(t / 2400 + p.ph) * 14 * p.z - tx * 18 * p.z;
      const y = p.y - ty * 12 * p.z;
      if (p.y < -30) Object.assign(p, make(false));
      ctx.globalAlpha = p.a;
      const col = pal[p.c];
      if (p.kind === 'dot') { ctx.fillStyle = `rgb(${col})`; ctx.beginPath(); ctx.arc(x, y, p.s * 0.25, 0, 6.28); ctx.fill(); }
      else if (p.kind === 'cube') cube(x, y, p.s * 0.6, p.cc);
      else if (p.kind === 'pick') pick(x, y, p.s * 0.7, p.rot, pinkCol);
      else {
        poly(x, y, p.s, p.kind === 'hex' ? 6 : 3, p.rot);
        if (p.kind === 'hex') { ctx.strokeStyle = `rgb(${col})`; ctx.lineWidth = 1.4; ctx.stroke(); }
        else { ctx.fillStyle = `rgba(${col},.6)`; ctx.fill(); }
      }
    }
    shards = shards.filter((s) => s.life > 0);
    for (const s of shards) {
      s.x += s.vx; s.y += s.vy; s.vy += 0.06; s.rot += s.vr; s.life -= 0.02;
      ctx.globalAlpha = Math.max(s.life, 0);
      ctx.fillStyle = `rgb(${s.c})`;
      poly(s.x, s.y, s.s, 3, s.rot);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function shatter(x, y) {
    const cols = [...palettes[isDark() ? 'dark' : 'light'], ...cubeColors];
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * 6.28, sp = 1.5 + Math.random() * 4;
      shards.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.5, s: 3 + Math.random() * 6, rot: a, vr: (Math.random() - 0.5) * 0.3, life: 1, c: cols[Math.floor(Math.random() * cols.length)] });
    }
  }
  addEventListener('resize', resize);
  addEventListener('pointermove', (e) => { mx = e.clientX / w - 0.5; my = e.clientY / h - 0.5; }, { passive: true });
  document.addEventListener('click', (e) => {
    if (!fx || e.target.closest('a, button, dialog, input, .slide-media, .linkstart, .rpg')) return;
    shatter(e.clientX, e.clientY);
  });
  resize();
  return {
    start() { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); },
    stop() { cancelAnimationFrame(raf); ctx.clearRect(0, 0, w, h); }
  };
})();

/* ---------- Abertura "Link Start" ---------- */
function linkStart(done) {
  let seenIntro = false;
  try { seenIntro = sessionStorage.getItem('sky-linked') === '1'; } catch { /* opcional */ }
  if (!fx || seenIntro) return done();
  try { sessionStorage.setItem('sky-linked', '1'); } catch { /* opcional */ }

  const box = $('#linkstart');
  const cv = $('#tunnel');
  const ctx = cv.getContext('2d');
  box.hidden = false;
  document.body.classList.add('locked');
  $$('.ls-title span', box).forEach((s, i) => { s.style.animationDelay = `${0.25 + i * 0.07}s`; });

  const w = (cv.width = innerWidth), h = (cv.height = innerHeight);
  const cx = w / 2, cy = h / 2;
  const hues = [190, 210, 260, 290, 330, 130, 50];
  const rays = Array.from({ length: 280 }, () => ({ a: Math.random() * 6.283, r: Math.random() * 60, v: 2 + Math.random() * 4, hue: hues[Math.floor(Math.random() * hues.length)] }));
  const t0 = performance.now();
  let raf = 0, ended = false;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const t = (now - t0) / 1000;
    const speed = 1 + t * t * 3;
    ctx.fillStyle = 'rgba(5,6,15,.28)';
    ctx.fillRect(0, 0, w, h);
    ctx.lineCap = 'round';
    for (const r of rays) {
      r.r += r.v * speed;
      if (r.r > Math.hypot(w, h) / 2) { r.r = Math.random() * 40; r.a = Math.random() * 6.283; }
      const len = 6 + r.v * speed * 3;
      ctx.strokeStyle = `hsla(${r.hue},90%,65%,${Math.min(0.9, 0.2 + r.r / 500)})`;
      ctx.lineWidth = 1 + r.r / 260;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(r.a) * r.r, cy + Math.sin(r.a) * r.r);
      ctx.lineTo(cx + Math.cos(r.a) * (r.r + len), cy + Math.sin(r.a) * (r.r + len));
      ctx.stroke();
    }
  }
  raf = requestAnimationFrame(frame);

  function finish() {
    if (ended) return;
    ended = true;
    box.classList.add('out');
    document.body.classList.remove('locked');
    removeEventListener('keydown', finish, true);
    setTimeout(() => { cancelAnimationFrame(raf); box.hidden = true; }, 650);
    done();
  }
  setTimeout(() => box.classList.add('flash'), 2300);
  setTimeout(finish, 2900);
  box.addEventListener('click', finish);
  addEventListener('keydown', finish, true);
}

/* ---------- Navegação, trilhos e efeitos de rolagem ---------- */
const SECTIONS = ['home', 'projects', 'skills', 'journey', 'contact'];
let currentSection = 0;
function updateRailName() {
  $('#sec-now').textContent = String(currentSection + 1).padStart(2, '0');
  $('#sec-name').textContent = T('sections')[currentSection];
  $$('#rail-dots i').forEach((d, i) => d.classList.toggle('on', i === currentSection));
}

function setupNav() {
  const menu = $('#sao-menu');
  const trigger = $('#sao-trigger');
  const toggle = (open) => {
    menu.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', String(open));
    trigger.setAttribute('aria-label', open ? T('menuClose') : T('menuOpen'));
  };
  trigger.addEventListener('click', () => toggle(!menu.classList.contains('open')));
  $$('#sao-list a').forEach((a) => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) { toggle(false); trigger.focus(); } });
  document.addEventListener('click', (e) => { if (!e.target.closest('#sao-menu')) toggle(false); });

  $('#rail-dots').innerHTML = SECTIONS.map(() => '<i></i>').join('');
  updateRailName();
  const links = $$('.nav a');
  const current = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + e.target.id));
      currentSection = SECTIONS.indexOf(e.target.id);
      updateRailName();
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  SECTIONS.forEach((id) => current.observe(document.getElementById(id)));

  // linhas de circuito ao lado de cada seção
  $$('.block').forEach((b) => {
    b.insertAdjacentHTML('afterbegin', '<svg class="circuit" viewBox="0 0 60 280" aria-hidden="true"><path d="M44 0V56L14 86V176L44 206V280"/><circle cx="44" cy="56" r="3.500"/><circle cx="14" cy="176" r="3.500"/><circle cx="44" cy="280" r="3.500"/></svg>');
    seen.observe($('.circuit', b));
  });

  // barra superior, progresso do trilho e palavras gigantes
  const topbar = $('.topbar');
  const words = $$('.ghost-word');
  let ticking = false;
  function onScroll() {
    ticking = false;
    topbar.classList.toggle('scrolled', scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#scroll-fill').style.setProperty('--p', (max > 0 ? (scrollY / max) * 100 : 0) + '%');
    if (!fx) return;
    words.forEach((wd, i) => {
      const r = wd.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const shift = (r.top - innerHeight / 2) * 0.35 * (i % 2 ? 1 : -1);
      wd.style.setProperty('--shift', shift.toFixed(1) + 'px');
    });
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
}

/* ---------- A caixa (easter egg da Gotoh) ---------- */
function setupBox() {
  const btn = $('#box-btn');
  const bubble = $('#box-bubble');
  let hideBubble = 0;
  btn.addEventListener('click', () => {
    btn.classList.remove('shake');
    void btn.offsetWidth;
    btn.classList.add('shake');
    const lines = T('boxLines');
    bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
    bubble.hidden = false;
    clearTimeout(hideBubble);
    hideBubble = setTimeout(() => { bubble.hidden = true; }, 2200);
    if (battery < 100) { setBattery(battery + 25); toast(T('boxRecharge')); warnedLow = false; }
  });

  // parado por muito tempo: alguém se esconde na caixa
  const hide = $('#hide-box');
  let idle = 0;
  const reset = () => {
    hide.classList.remove('show');
    clearTimeout(idle);
    idle = setTimeout(() => { $('#hide-text').textContent = T('idle'); if (fx) hide.classList.add('show'); }, 30000);
  };
  ['pointermove', 'keydown', 'scroll', 'touchstart'].forEach((ev) => addEventListener(ev, reset, { passive: true }));
  reset();
}

/* ---------- Ligações gerais ---------- */
function setupEvents() {
  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-open]');
    if (open) { openProject(open.dataset.open); return; }
    const f = e.target.closest('[data-filter]');
    if (f) {
      filter = f.dataset.filter;
      $$('#filters button').forEach((b) => b.setAttribute('aria-pressed', String(b === f)));
      $$('.project').forEach((p) => p.classList.toggle('is-hidden', filter !== 'all' && p.dataset.cat !== filter));
      return;
    }
    if (e.target.closest('[data-mercy]')) {
      typeInto($('#rpg-text'), T('rpgMercy'));
      setTimeout(() => $('#home').scrollIntoView({ behavior: fx ? 'smooth' : 'auto' }), 1400);
      return;
    }
    const cp = e.target.closest('[data-copy]');
    if (cp) {
      const done = () => toast(UI[lang].copied(cp.dataset.copy));
      (navigator.clipboard ? navigator.clipboard.writeText(cp.dataset.copy) : Promise.reject()).then(done, () => toast('Discord: ' + cp.dataset.copy));
      return;
    }
    const soon = e.target.closest('[data-soon]');
    if (soon) { toast(UI[lang].soon(DATA.contacts[Number(soon.dataset.soon)].name)); return; }
    const thumb = e.target.closest('.thumbs button');
    if (thumb) {
      const img = $('#gallery-img');
      img.src = thumb.dataset.src;
      img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
      $$('.thumbs button').forEach((b) => b.setAttribute('aria-current', String(b === thumb)));
    }
  });

  // descrição de cada botão da caixa de diálogo
  const rpgText = $('#rpg-text');
  let hoverTimer = 0;
  const describe = (e) => {
    const b = e.target.closest('[data-rpg]');
    if (!b) return;
    clearTimeout(hoverTimer);
    typeInto(rpgText, T('rpgHover')[Number(b.dataset.rpg)], 14);
  };
  $('#rpg-actions').addEventListener('pointerover', describe);
  $('#rpg-actions').addEventListener('focusin', describe);
  $('#rpg-actions').addEventListener('pointerleave', () => {
    hoverTimer = setTimeout(() => typeInto(rpgText, T('rpgIntro'), 14), 600);
  });

  const dlg = $('#project-dialog');
  $('#dialog-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    store.set('sky-lang', lang);
    renderAll();
    tickClock();
    $$('.reveal, [data-split], .circuit, #giant-word').forEach((el) => el.classList.add('in'));
    fillGameBars();
    speechIndex = Math.max(0, speechIndex - 1);
    nextSpeech();
    $$('.hp-bar:not(.social) span').forEach((s) => s.style.setProperty('--v', s.dataset.v + '%'));
    $$('[data-count]').forEach((el) => { el.textContent = String(el.dataset.count).padStart(Number(el.dataset.pad || 0), '0'); });
  }));

  $('#hud-side').addEventListener('click', (e) => {
    const b = e.target.closest('[data-side]');
    if (!b) return;
    if (b.dataset.side === 'menu') { e.stopPropagation(); $('#sao-trigger').click(); }
    if (b.dataset.side === 'gift') { setBattery(battery + 20); toast(T('giftMsg')); }
    if (b.dataset.side === 'news') { b.classList.remove('notify'); toast(UI[lang].newsMsg(L(DATA.journey[DATA.journey.length - 1].title))); }
  });

  const game = $('#game');
  game.addEventListener('pointermove', (e) => {
    if (!fx || e.pointerType === 'touch') return;
    const r = game.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    $('#giant-word').style.setProperty('--px', (-x * 30).toFixed(1) + 'px');
    $('#giant-word').style.setProperty('--py', (-y * 14).toFixed(1) + 'px');
    $('#game-char').style.setProperty('--cx', (x * 22).toFixed(1) + 'px');
    $('#game-char').style.setProperty('--cy', (y * 10).toFixed(1) + 'px');
  });
  game.addEventListener('pointerleave', () => {
    ['--px', '--py'].forEach((v) => $('#giant-word').style.setProperty(v, '0px'));
    ['--cx', '--cy'].forEach((v) => $('#game-char').style.setProperty(v, '0px'));
  });

  $('#fx-toggle').addEventListener('click', () => {
    fx = !fx;
    store.set('sky-fx', fx ? 'on' : 'off');
    applyFx();
    toast(fx ? '> FX ON' : '> FX OFF');
  });
}

function applyFx() {
  document.body.classList.toggle('fx-off', !fx);
  $('#fx-toggle').setAttribute('aria-pressed', String(fx));
  $('#fx-label').textContent = fx ? T('fxOn') : T('fxOff');
  if (fx) particles.start(); else particles.stop();
  carousel.restart();
}

/* ---------- Início ---------- */
$('#year').textContent = new Date().getFullYear();
renderAll();
seen.observe($('.rpg'));
carousel.init();
setupNav();
setupBox();
setupEvents();
applyFx();
setBattery(battery);
tickClock();
setInterval(tickClock, 15000);
linkStart(() => {
  carousel.go(0);
  const game = $('#game');
  setTimeout(() => {
    game.classList.add('ready');
    replay($('#giant-word'));
    setTimeout(fillGameBars, 500);
    setTimeout(nextSpeech, 1400);
  }, 30);
  setInterval(() => { if (!document.hidden) nextSpeech(); }, 7000);
});

'use strict';

/* EDIT YOUR PROFILE HERE. No build tools or remote services are needed.
   Levels, quests, dates and counters are illustrative, manually edited values.
   Set a project's url or a connection's url to activate its real external link.
   Keep null for an honest placeholder; it will show details instead of a dead link. */
const SITE_DATA = {
  profile: {
    name: 'João Aduílio', displayName: 'João Aduílio', username: '@sky',
    title: 'Developer / Tech Enthusiast', location: 'Brazil',
    tagline: 'Learning, building and turning random ideas into real projects.',
    mission: 'Building cool things and becoming a better developer.',
    learning: 'Artificial Intelligence', language: 'HTML', level: 12,
    xp: 7420, maxXp: 10000, image: 'assets/profile.jpg',
    about: "I'm João Aduílio, a developer in the making from Brazil. I like figuring out how things work — then seeing what else they could become.",
    aboutMore: "Some days that means writing Python. Other days, it's experimenting with a game idea or going down an AI rabbit hole. This is my little corner of the internet to share what I'm building and learning along the way."
  },
  skills: [
    {
        "name": "HTML",
        "icon": "</>",
        "level": 9,
        "progress": 90,
        "state": "MAIN LANGUAGE",
        "color": "blue",
        "featured": true,
        "description": "The foundation of every interface I build. Structure first. Details next."
    },
    {
        "name": "CSS",
        "icon": "#",
        "level": 7,
        "progress": 70,
        "state": "INTERFACE DESIGN",
        "color": "violet",
        "description": "Shaping responsive layouts, lighting and motion."
    },
    {
        "name": "JAVASCRIPT",
        "icon": "JS",
        "level": 6,
        "progress": 60,
        "state": "INTERACTION SYSTEMS",
        "color": "blue",
        "description": "Turning static screens into responsive experiences."
    },
    {
        "name": "C#",
        "icon": "C#",
        "level": 2,
        "progress": 20,
        "state": "LEARNING THE BASICS",
        "color": "steel",
        "description": "Building a foundation in logic and game systems."
    },
    {
        "name": "GODOT",
        "icon": "◈",
        "level": 6,
        "progress": 60,
        "state": "WORLD BUILDING",
        "color": "blue",
        "description": "Connecting scenes, mechanics and player feedback."
    },
    {
        "name": "LUA",
        "icon": "Lu",
        "level": 2,
        "progress": 20,
        "state": "NEW SKILL UNLOCKED",
        "color": "violet",
        "description": "Exploring lightweight scripts and game logic."
    },
    {
        "name": "PYTHON",
        "icon": "Py",
        "level": 8,
        "progress": 80,
        "state": "TOOLS & EXPERIMENTS",
        "color": "steel",
        "description": "Small automations and experiments with AI."
    }
],
  quests: [
    { name: 'Become highly skilled at programming', type: 'MAIN QUEST', description: 'Build consistently. Solve harder problems. Keep the curiosity.', progress: 45, status: 'IN PROGRESS', color: 'blue', icon: '⚑' },
    { name: 'Learn Artificial Intelligence', type: 'SIDE QUEST', description: 'Explore machine learning and make my first intelligent tools.', progress: 25, status: 'IN PROGRESS', color: 'violet', icon: '⌁' },
    { name: 'Build and release a complete game', type: 'SIDE QUEST', description: 'From the first mechanic to a world someone else can play.', progress: 35, status: 'IN PROGRESS', color: 'steel', icon: '⊞' },
    { name: 'Create more original projects', type: 'SIDE QUEST', description: 'Give the ideas in my notes a life beyond the notes app.', progress: 50, status: 'IN PROGRESS', color: 'blue', icon: '✳' }
  ],
  projects: [
    { id: '001', name: 'SOCIABBLE', category: 'game', type: 'GAME PROJECT', status: 'IN DEVELOPMENT', color: 'blue', preview: 'game', description: 'A little world of connections, choices and unexpected stories. My next game adventure.', technologies: ['Godot', 'C#', 'Pixel Art'], details: 'A game project exploring how small interactions can become memorable stories. The current quest: prototype the core mechanics, find the visual identity, and build a first playable slice.', url: null },
    { id: '002', name: 'NEURAL NOTES', category: 'experiment', type: 'AI EXPERIMENT', status: 'EXPLORING', color: 'violet', preview: 'ai', description: 'An experimental playground for Python, curious questions and a little machine intelligence.', technologies: ['Python', 'AI', 'Jupyter'], details: 'A placeholder for a collection of small AI experiments. A space to document what I learn, test ideas on sample data, and turn complicated concepts into practical exercises.', url: null },
    { id: '003', name: 'LITTLE AUTOMATIONS', category: 'experiment', type: 'DEVELOPER TOOL', status: 'PROTOTYPE', color: 'steel', preview: 'cli', description: 'Small scripts for the little repetitive things. Less busywork, more time to create.', technologies: ['Python', 'CLI', 'Git'], details: 'A placeholder for useful command-line experiments: organizing files, transforming sample data, and making everyday development tasks a little easier. Each script is another small lesson.', url: null }
  ],
  stats: [
    { label: 'PROJECTS', value: '07' }, { label: 'LANGUAGES', value: '05' },
    { label: 'CURRENT STREAK', value: '18', suffix: 'DAYS' },
    { label: 'MAIN STACK', value: 'HTML / CSS', text: true },
    { label: 'CURRENT STATUS', value: 'LEARNING', text: true }
  ],
  journey: [
    { year: '2025', code: 'THE_FIRST_CHAPTER', title: 'Started learning programming', description: 'The first hello world. The first spark of curiosity.' },
    { year: '2026', code: 'LEVEL_UP', title: 'Started building bigger projects', description: 'Connecting the dots and giving ideas more room to grow.' },
    { year: '2026', code: 'NEW_TERRITORY', title: 'Learning game development', description: 'Exploring Godot, game mechanics and interactive worlds.' },
    { year: '2026', code: 'CURRENT_CHECKPOINT', title: 'Exploring artificial intelligence', description: 'A new chapter. Plenty of questions. Let’s find out.' }
  ],
  connections: [
    { name: 'GitHub', command: 'connect github', label: 'CODE & IDEAS', url: null },
    { name: 'Discord', command: 'connect discord', label: 'LET’S TALK', url: null },
    { name: 'Email', command: 'send message', label: 'SAY HELLO', url: null }
  ]
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let motionChoice = 'auto';
try { motionChoice = localStorage.getItem('sky-motion') || 'auto'; } catch { /* Optional local preference. */ }
const motionAllowed = () => motionChoice === 'on' || (motionChoice !== 'off' && !reducedMotion.matches);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const percent = value => Math.min(100, Math.max(0, Number(value) || 0));
const accent = color => ['blue', 'steel', 'violet'].includes(color) ? color : 'blue';
const safeUrl = value => {
  if (!value) return null;
  try { const url = new URL(value); return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
};
const progressMarkup = (value, label) => `<div class="progress" role="progressbar" aria-label="${escapeHTML(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent(value)}"><span style="--progress:${percent(value)}%"></span></div>`;

function renderProfile() {
  const profile = SITE_DATA.profile;
  $$('[data-profile]').forEach(element => {
    const key = element.dataset.profile;
    if (key === 'name') {
      const [firstName, ...rest] = profile.name.split(' ');
      element.innerHTML = `<span class="name-line">${escapeHTML(firstName)}</span> <span class="name-line">${escapeHTML(rest.join(' '))}</span>`;
    } else if (key === 'title') {
      element.innerHTML = escapeHTML(profile.title).replaceAll(' / ', ' <span>/</span> ');
    } else if (profile[key] !== undefined) element.textContent = profile[key];
  });
  document.title = `SKY.OS — ${profile.name}’s player profile`;
  const maxXp = Math.max(1, Number(profile.maxXp) || 1);
  const xp = Math.min(maxXp, Math.max(0, Number(profile.xp) || 0));
  $('#xp-current').textContent = xp.toLocaleString('en-US');
  $('#xp-max').textContent = maxXp.toLocaleString('en-US');
  $('#hero-xp').setAttribute('aria-valuemax', maxXp);
  $('#hero-xp').setAttribute('aria-valuenow', xp);
  $('#hero-xp > span').style.setProperty('--progress', `${xp / maxXp * 100}%`);
  // Load locally if available. A missing photo keeps the designed identity card visible.
  const image = $('#profile-image');
  const updatePortrait = () => {
    const loaded = image.naturalWidth > 0;
    image.hidden = !loaded;
    $('.portrait-fallback').hidden = loaded;
  };
  image.addEventListener('load', updatePortrait);
  image.addEventListener('error', updatePortrait);
  image.alt = `${profile.name}'s profile portrait`;
  image.src = profile.image;
  if (image.complete) updatePortrait();
  $('#year').textContent = new Date().getFullYear();
}

function renderSkills() {
  $('#skill-grid').innerHTML = SITE_DATA.skills.map(skill => `
    <article class="skill-card reveal ${skill.featured ? 'featured' : ''}" style="--accent:var(--${accent(skill.color)})">
      <div><span class="skill-icon" aria-hidden="true">${escapeHTML(skill.icon)}</span>${skill.description ? `<p class="skill-description">${escapeHTML(skill.description)}</p>` : ''}</div>
      <div><div class="skill-name-row"><h3>${escapeHTML(skill.name)}</h3><span>LV. ${escapeHTML(skill.level)}</span></div><p class="skill-state">${escapeHTML(skill.state)}</p>${progressMarkup(skill.progress, `${skill.name} journey`)}</div>
    </article>`).join('');
  $('#skills .section-code').textContent = `${String(SITE_DATA.skills.length).padStart(2, '0')} ITEMS EQUIPPED`;
}

function renderQuests() {
  $('#quest-list').innerHTML = SITE_DATA.quests.map(quest => `
    <article class="quest-row reveal ${quest.type === 'MAIN QUEST' ? 'main-quest' : ''}" style="--accent:var(--${accent(quest.color)})">
      <span class="quest-symbol" aria-hidden="true">${quest.status === 'COMPLETED' ? '✓' : quest.status === 'LOCKED' ? '⊠' : escapeHTML(quest.icon)}</span>
      <div><span class="quest-type">[ ${escapeHTML(quest.type)} ]</span><h3>${escapeHTML(quest.name)}</h3><p>${escapeHTML(quest.description)}</p></div>
      <div class="quest-progress"><div class="quest-status-row"><span>${escapeHTML(quest.status)}</span><b>${percent(quest.progress)}%</b></div>${progressMarkup(quest.progress, quest.name)}</div>
    </article>`).join('');
  $('#quest-count').textContent = `${String(SITE_DATA.quests.length).padStart(2, '0')} QUESTS TRACKED`;
}

// These previews are local UI compositions, deliberately marked as concepts.
function projectPreview(project) {
  let content;
  if (project.preview === 'game') content = `<span class="game-title">${escapeHTML(project.name)}</span><span class="game-subtitle">A NEW CONNECTION AWAITS</span><span class="game-start">[ PRESS START ]</span>`;
  else if (project.preview === 'ai') content = '<div class="orbital"><span>AI</span></div><span class="ai-caption">NEURAL_NOTES / LAB</span>';
  else content = '<div class="mini-terminal"><div class="mini-terminal-header">~/little-automations</div><span class="blue">❯</span> python make_life_easier.py<br><span class="muted">→ finding the little things...</span><br><span class="blue">✓ task completed</span><br>❯ <span class="cursor">_</span></div>';
  return `<div class="project-preview preview-${escapeHTML(project.preview)}" role="img" aria-label="${escapeHTML(project.name)} concept preview"><span class="preview-id">FILE_${escapeHTML(project.id)} / PREVIEW</span>${content}<span class="preview-caption">CONCEPT PREVIEW</span></div>`;
}

function renderProjects() {
  $('#project-grid').innerHTML = SITE_DATA.projects.map(project => `
    <article class="project-card reveal" data-category="${escapeHTML(project.category)}" style="--accent:var(--${accent(project.color)})">
      ${projectPreview(project)}<div class="project-content"><div class="project-meta"><span>${escapeHTML(project.type)}</span><span class="project-state">● ${escapeHTML(project.status)}</span></div><h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(project.description)}</p><div class="tech-tags">${project.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}</div><button class="project-open" data-project="${escapeHTML(project.id)}" aria-label="Open ${escapeHTML(project.name)} details"><span>OPEN PROJECT</span><span aria-hidden="true">↗</span></button></div>
    </article>`).join('');
  $('[data-filter="all"] span').textContent = String(SITE_DATA.projects.length).padStart(2, '0');
}

function renderStatsAndJourney() {
  $('#stats-grid').innerHTML = SITE_DATA.stats.map(stat => `<div class="stat-item"><span>${escapeHTML(stat.label)}</span><strong class="${stat.text ? 'text-value' : ''}">${escapeHTML(stat.value)}</strong>${stat.suffix ? `<small>${escapeHTML(stat.suffix)}</small>` : ''}</div>`).join('');
  $('#timeline').innerHTML = SITE_DATA.journey.map(entry => `<li class="reveal"><time datetime="${escapeHTML(entry.year)}">${escapeHTML(entry.year)}</time><span class="log-code">// ${escapeHTML(entry.code)}</span><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.description)}</p></li>`).join('');
}

function renderConnections() {
  $('#connection-links').innerHTML = SITE_DATA.connections.map((connection, index) => {
    const content = `<span aria-hidden="true">&gt;</span> ${escapeHTML(connection.command)}<small>${escapeHTML(connection.label)}</small><span aria-hidden="true">↗</span>`;
    const url = safeUrl(connection.url);
    return url ? `<a class="connection-link" href="${escapeHTML(url)}" ${url.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'} aria-label="Connect via ${escapeHTML(connection.name)}">${content}</a>` : `<button class="connection-link" data-connection="${index}" aria-label="${escapeHTML(connection.name)} connection — coming soon">${content}</button>`;
  }).join('');
}

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 5000);
}

function setupNavigation() {
  const menu = $('.menu-toggle');
  const nav = $('#navigation');
  const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  $$('#navigation a').forEach(link => link.addEventListener('click', () => {
    closeMenu();
    // Make the destination the next keyboard stop, including after the mobile menu closes.
    const destination = $(link.getAttribute('href'));
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
  }));
  document.addEventListener('click', event => { if (!event.target.closest('.nav-shell')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
  const sections = $$('#home, #profile, #skills, #quests, #projects, #contact');
  let ticking = false;
  function updateActiveSection() {
    const threshold = Math.min(innerHeight * .32, 210);
    let active = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= threshold) active = section;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8) active = sections.at(-1);
    $$('#navigation a').forEach(link => {
      const selected = link.hash === `#${active.id}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(updateActiveSection); } }, { passive: true });
  addEventListener('resize', updateActiveSection);
  updateActiveSection();
}

function setupProjects() {
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    $$('[data-filter]').forEach(filter => { filter.classList.toggle('active', filter === button); filter.setAttribute('aria-pressed', String(filter === button)); });
    $$('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) card.classList.add('visible'); });
  }));
  const dialog = $('#project-dialog');
  let trigger;
  $$('.project-open').forEach(button => button.addEventListener('click', () => {
    const project = SITE_DATA.projects.find(item => item.id === button.dataset.project);
    const url = safeUrl(project.url);
    $('#dialog-content').innerHTML = `<span class="dialog-status">FILE_${escapeHTML(project.id)} / ${escapeHTML(project.status)}</span><h2 id="dialog-title">${escapeHTML(project.name)}</h2><p>${escapeHTML(project.details)}</p><div class="tech-tags">${project.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}</div>${url ? `<a class="button button-primary" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">VISIT PROJECT ↗</a>` : '<p class="dialog-placeholder">This archive entry is a preview. A playable build or repository link will appear here when it is ready.</p>'}`;
    trigger = button;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }));
  $('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; trigger?.focus({ preventScroll: true }); });
  $$('[data-connection]').forEach(button => button.addEventListener('click', () => { showToast(`> ${SITE_DATA.connections[button.dataset.connection].name.toLowerCase()}: connection coming soon. Check back for my contact link.`); }));
}

function setupMotion() {
  let revealObserver, progressObserver;
  function start() {
    revealObserver?.disconnect();
    progressObserver?.disconnect();
    if (!motionAllowed() || !('IntersectionObserver' in window)) {
      document.body.classList.remove('motion-ready');
      $$('.reveal').forEach(element => element.classList.add('visible'));
      $$('.progress').forEach(element => element.classList.add('is-loaded'));
      return;
    }
    $$('.reveal').forEach(element => element.classList.remove('visible'));
    $$('.progress').forEach(element => element.classList.remove('is-loaded'));
    $$('#skill-grid, #project-grid, #quest-list, #timeline').forEach(group => {
      [...group.children].forEach((element, index) => element.style.setProperty('--reveal-delay', `${(index % 3) * 100}ms`));
    });
    revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }, { threshold: .08 });
    progressObserver = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-loaded');
        progressObserver.unobserve(entry.target);
      }
    }, { threshold: .8 });
    document.body.classList.add('motion-ready');
    $$('.reveal').forEach(element => revealObserver.observe(element));
    $$('.progress').forEach(element => progressObserver.observe(element));
  }
  document.addEventListener('sky-ready', start, { once: true });
  document.addEventListener('sky-motion-change', start);
}

function setupMotionControl() {
  const button = $('#motion-toggle');
  function update() {
    const enabled = motionAllowed();
    document.body.classList.toggle('motion-on', motionChoice === 'on');
    document.body.classList.toggle('motion-off', !enabled);
    button.setAttribute('aria-pressed', String(enabled));
    button.setAttribute('aria-label', enabled ? 'Turn animations off' : 'Turn animations on');
    button.title = enabled ? 'Disable interface animations' : 'Enable ambient lighting and interface motion';
    $('#motion-label').textContent = enabled ? 'FX ON' : 'FX OFF';
    document.dispatchEvent(new Event('sky-motion-change'));
  }
  button.hidden = false;
  update();
  button.addEventListener('click', () => {
    motionChoice = motionAllowed() ? 'off' : 'on';
    try { localStorage.setItem('sky-motion', motionChoice); } catch { /* Keep the in-memory choice. */ }
    update();
  });
  reducedMotion.addEventListener('change', update);
}

function setupBoot() {
  const boot = $('#boot');
  const ready = () => {
    document.body.classList.add('world-ready');
    document.dispatchEvent(new Event('sky-ready'));
  };
  let alreadySeen = false;
  // Storage may be unavailable for file:// or privacy mode; that must never block the site.
  try { alreadySeen = sessionStorage.getItem('sky-world-visited-v2') === '1'; } catch { /* Optional session preference. */ }
  if (alreadySeen || !motionAllowed()) { ready(); return; }
  boot.hidden = false;
  const timer = setTimeout(finish, 1950);
  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    boot.hidden = true;
    try { sessionStorage.setItem('sky-world-visited-v2', '1'); } catch { /* Continue without persistence. */ }
    document.removeEventListener('keydown', onKey, true);
    boot.removeEventListener('click', finish);
    document.removeEventListener('sky-motion-change', finish);
    ready();
  }
  function onKey(event) { event.preventDefault(); finish(); }
  document.addEventListener('keydown', onKey, true);
  boot.addEventListener('click', finish);
  document.addEventListener('sky-motion-change', finish);
}

function setupSky() {
  // CSS owns the continuous motion. JS creates a bounded set of particles and
  // schedules at most one frame per pointer event; there is no rendering loop.
  const background = $('.sky-background');
  const compact = matchMedia('(max-width: 700px)');
  const layers = [
    { id: '#sky-stars', className: 'sky-star', desktop: 30, mobile: 14, duration: 28, travel: 65 },
    { id: '#sky-mid', className: 'depth-pixel', desktop: 10, mobile: 5, duration: 17, travel: 300 },
    { id: '#sky-near', className: 'near-pixel', desktop: 4, mobile: 2, duration: 12, travel: 340 },
    { id: '#sky-accents', className: 'hud-pixel', desktop: 3, mobile: 1, duration: 23, travel: 240 }
  ];
  function populateLayers() {
    layers.forEach((layer, layerIndex) => {
      const fragment = document.createDocumentFragment();
      const count = compact.matches ? layer.mobile : layer.desktop;
      for (let index = 0; index < count; index++) {
        const particle = document.createElement('span');
        particle.className = layer.className;
        if (layerIndex === 0 && index % 7 === 0) particle.classList.add('twinkle');
        if (layerIndex > 0 && index % 3 === 0) particle.classList.add('fragment');
        const sign = index % 2 ? -1 : 1;
        const scale = layerIndex === 0 ? 1 : .82 + (index % 3) * .12;
        particle.style.cssText = `--x:${(index * 37.3 + 6 + layerIndex * 11) % 96}%;--y:${(index * 23.7 + 9 + layerIndex * 17) % 92}%;--size:${layerIndex === 0 ? 1 + index % 2 : layerIndex > 1 ? 4 + index % 3 : 2 + index % 3}px;--opacity:${layerIndex === 0 ? .12 + (index % 4) * .05 : .16 + (index % 3) * .06};--duration:${layer.duration + (index % 5) * 2}s;--delay:-${index * 3.7 + 5}s;--travel-x:${sign * (150 + index % 4 * 30)}px;--travel-y:${layerIndex === 0 && index % 2 ? 0 : -layer.travel}px;--scale:${scale}`;
        fragment.append(particle);
      }
      $(layer.id).replaceChildren(fragment);
    });
  }
  populateLayers();
  compact.addEventListener('change', populateLayers);
  const card = $('.player-module');
  const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)');
  let frame = 0, x = 0, y = 0;
  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    background.style.removeProperty('--pointer-x');
    background.style.removeProperty('--pointer-y');
    card.style.removeProperty('--tilt-x');
    card.style.removeProperty('--tilt-y');
  };
  document.addEventListener('pointermove', event => {
    if (!motionAllowed() || !pointer.matches || event.pointerType === 'touch' || document.hidden) return;
    x = (event.clientX / innerWidth - .5) * 2;
    y = (event.clientY / innerHeight - .5) * 2;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      background.style.setProperty('--pointer-x', `${x * -28}px`);
      background.style.setProperty('--pointer-y', `${y * -18}px`);
      
      
      frame = 0;
    });
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  document.addEventListener('sky-motion-change', reset);
  pointer.addEventListener('change', reset);
  document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('page-paused', document.hidden);
    if (document.hidden) reset();
  });
}

function setupEasterEggs() {
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let index = 0, clicks = 0, lastKeyAt = 0, clickTimer;
  function toggleMode() {
    const enabled = document.body.classList.toggle('overdrive-mode');
    showToast(enabled ? 'OVERDRIVE UNLOCKED // alternate interface active.' : 'MIDNIGHT MODE // back to the next checkpoint.');
  }
  document.addEventListener('keydown', event => {
    if (event.target.closest('input, textarea, [contenteditable="true"]') || event.ctrlKey || event.metaKey || event.altKey) return;
    if (Date.now() - lastKeyAt > 3000) index = 0;
    lastKeyAt = Date.now();
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    index = key === sequence[index] ? index + 1 : key === sequence[0] ? 1 : 0;
    if (index === sequence.length) { index = 0; toggleMode(); }
  });
  $('#dev-mode').addEventListener('click', () => {
    clearTimeout(clickTimer);
    clicks++;
    if (clicks === 3) { clicks = 0; toggleMode(); }
    else showToast(`Hidden interface detected... ${3 - clicks} more ${clicks === 2 ? 'click' : 'clicks'} to discover it.`);
    clickTimer = setTimeout(() => { clicks = 0; }, 4000);
  });
  console.info('%c SKY.OS %c Hidden interface available. Try ↑ ↑ ↓ ↓ ← → ← → B A.', 'background:#4b9eff;color:#090e17;padding:6px;font-weight:bold', 'color:#8caacb');
}

function updateClock() {
  const now = new Date();
  const clock = $('#local-clock');
  clock.textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now);
  clock.dateTime = now.toISOString();
}

renderProfile();
renderSkills();
renderQuests();
renderProjects();
renderStatsAndJourney();
renderConnections();
setupNavigation();
setupProjects();
setupMotionControl();
setupMotion();
setupSky();
setupEasterEggs();
updateClock();
setInterval(updateClock, 1000);
setupBoot();

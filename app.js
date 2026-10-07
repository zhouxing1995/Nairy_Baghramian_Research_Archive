const timelineData = {
  '2026': {year:'2026', title:'nameless / 未命名', description:'作品进入 WIELS 的粗粝、后工业建筑，生物形态、设计元素与工业结构在同一展览现场并置。', tags:['建筑','新作','后工业空间'], image:'assets/wiels-nameless.jpg', alt:'nameless 展览现场', caption:'nameless / WIELS, 2025–2026', source:'WIELS ↗', url:'https://wiels.org/en/exhibitions/nairy-baghramian'},
  '2023': {year:'2023', title:'Scratching the Back', description:'四件彩色铸铝作品进入 The Met 第五大道立面的四个凹室，公共建筑成为观看与历史筛选的界面。', tags:['公共委托','铸铝','博物馆外墙'], image:'assets/met-commission.jpg', alt:'Scratching the Back 外墙委托作品', caption:'Scratching the Back, 2023 / The Met', source:'The Met ↗', url:'https://www.metmuseum.org/press-releases/facade-commission_nairy-baghramian-2023-exhibitions'},
  '2022': {year:'2022', title:'Modèle vivant / 活体模型', description:'建模、制模、浇铸和临时身体构成一个关于支撑、创伤与观看的展览结构。', tags:['身体','材料','临时性'], image:'assets/modele-vivant.jpg', alt:'Modèle vivant 展览现场', caption:'Modèle vivant, 2022 / Nasher Sculpture Center', source:'Nasher ↗', url:'https://www.nashersculpturecenter.org/art/exhibitions/exhibition/id/1897'},
  '2017': {year:'2017', title:'Déformation Professionnelle', description:'Walker 的回顾展不是把过去作品按时间顺序排列，而是由新作品、空间和跨学科参照重新组织过去。', tags:['回顾展','展示制度','跨学科'], image:'assets/walker-deformation.jpg', alt:'Walker Art Center 展览现场', caption:'Déformation Professionnelle, 2017–2018 / Walker', source:'Walker Art Center ↗', url:'https://www.walkerart.org/whats-on/nairy-baghramian-deformation-professionnelle/'},
  '2002': {year:'2002', title:'The Iron Table', description:'早期作品把对象、身体与空间关系放在同一个结构中，为后来关于支撑、家具和建筑条件的研究打开入口。', tags:['早期作品','对象','支撑'], image:'assets/iron-table.jpg', alt:'The Iron Table (Homage to Jane Bowles)', caption:'The Iron Table (Homage to Jane Bowles), 2002', source:'Universes Art ↗', url:'https://universes.art/en/documenta/2017/documenta-14-kassel/11-landesmuseum/nairy-baghramian'}
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function updateTimeline(key) {
  const item = timelineData[key];
  if (!item) return;
  $$('.timeline-point').forEach(btn => {
    const active = btn.dataset.timeline === key;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  $('#timeline-year').textContent = item.year;
  $('#timeline-title').textContent = item.title;
  $('#timeline-description').textContent = item.description;
  $('#timeline-image').src = item.image;
  $('#timeline-image').alt = item.alt;
  $('#timeline-image-link').href = item.url;
  $('#timeline-caption').textContent = item.caption;
  $('#timeline-source').textContent = item.source;
  $('#timeline-source').href = item.url;
  $('#timeline-button').href = item.url;
  $('#timeline-tags').innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
}

$$('.timeline-point').forEach(btn => btn.addEventListener('click', () => updateTimeline(btn.dataset.timeline)));

$$('.filter').forEach(button => button.addEventListener('click', () => {
  $$('.filter').forEach(btn => btn.classList.toggle('active', btn === button));
  const filter = button.dataset.filter;
  $$('.archive-card').forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));

$$('.keyword-cloud button').forEach(button => button.addEventListener('click', () => {
  const toast = $('.toast');
  toast.textContent = `关键词：${button.textContent}`;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1500);
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('in-view');
}), {threshold:.08});
$$('.section-shell').forEach(section => observer.observe(section));

updateTimeline('2026');

/* ============================================================
   造梦档案馆 — Dream Archive
   Interactions, Animations & Edit Mode
   ============================================================ */

// ─── Default Data ──────────────────────────────────────────

const DEFAULT_IMAGE_PROJECTS = [
  {
    id: 'neon-ruins',
    title: '霓虹废墟', titleEn: 'Neon Ruins', year: '2024', category: '概念摄影',
    image: 'https://picsum.photos/seed/neonruins/600/800',
    heroImage: 'https://picsum.photos/seed/neonruins/900/1200',
    source: '灵感来自东京夜晚的废弃游乐园。在人类撤离后，机械装置仍在孤独运转，霓虹灯光映照在积水的路面上，形成一种寂静的、后人类时代的诗意。',
    pathway: ['废弃游乐场的夜间摄影', 'Edward Hopper 的孤独光影', '设定：独处的机械人偶', '潮湿的城市夜景 + 霓虹反射', '低照度、点光源、雾气弥漫', 'photorealistic, wet pavement, neon reflection, cinematic lighting, fog, abandoned amusement park, solitary figure'],
    notes: ['这张作品的核心在于"孤独的机械灵魂"。', '我反复调整了霓虹灯的色温与强度，让它在潮湿的空气中有适当的扩散感。', '最关键的一步是在提示词中加入"cinematic lighting"与"film grain"，这给画面带来了电影感而非游戏感。', '最终选择了3:4的画幅比例——这是传统中画幅摄影的比例，赋予画面一种永恒的静止感。'],
  },
  {
    id: 'mechanical-garden',
    title: '机械花园', titleEn: 'Mechanical Garden', year: '2024', category: '数字艺术',
    image: 'https://picsum.photos/seed/mechgarden/600/800',
    heroImage: 'https://picsum.photos/seed/mechgarden/900/1200',
    source: '探讨自然与机械共生的可能性。想象一个世界，花朵的花瓣由精密齿轮构成，藤蔓是光纤编织的神经网络，在工业废墟上绽放出新的生命形态。',
    pathway: ['工业遗址考察 + 植物标本', "H.R. Giger 与 Georgia O'Keeffe 的碰撞", '设定：半机械花卉生命体', '废墟温室，金属与有机体交织', '柔和的漫射光 + 金属表面的微妙反光', 'biomechanical flowers, copper petals, gears, greenhouse ruins, soft diffused light, macro photography, organic metal texture'],
    notes: ['我想创造一种既陌生又熟悉的美感——你认得出这是一朵花，但它的材质却是金属。', '提示词中"biomechanical"与"organic metal texture"的组合是关键，它在硬与柔之间找到了平衡。', '画面中的光线处理参考了荷兰静物画的质感，让金属花瓣也有温度。'],
  },
  {
    id: 'cloud-portraits',
    title: '云端肖像', titleEn: 'Cloud Portraits', year: '2023', category: '肖像创作',
    image: 'https://picsum.photos/seed/cloudport/600/800',
    heroImage: 'https://picsum.photos/seed/cloudport/900/1200',
    source: '一组不存在的肖像照。每个人物都是一个虚构的身份，但拥有真实的情感密度。他们的面孔存在于云层与数据的间隙中——介于存在与不存在之间。',
    pathway: ['August Sander 的纪实肖像', 'Irving Penn 的影棚肖像', '设定：不同时代、不同身份的虚构人物', '极简影棚，云雾与光影作为唯一道具', '单光源 + 柔光箱质感 + 深色背景', 'studio portrait, single light source, shallow depth of field, atmospheric, subtle grain, timeless quality'],
    notes: ['这组作品最难的地方在于"让不存在的人看起来像存在过"。', '每一张肖像我都花了很多时间调整眼神——眼神决定了这个虚构人物是否可信。', '我参考了Irving Penn的肖像作品，他的照片总能让人物在极简的背景下呈现出强烈的存在感。'],
  },
  {
    id: 'time-folds',
    title: '时间褶皱', titleEn: 'Time Folds', year: '2024', category: '实验影像',
    image: 'https://picsum.photos/seed/timefold/600/800',
    heroImage: 'https://picsum.photos/seed/timefold/900/1200',
    source: '灵感来自地质层的纹理与老照片的褪色。时间不是线性的——它在某些地方折叠、堆积、沉淀。这组作品试图将时间的褶皱视觉化。',
    pathway: ['地质学影像 + 褪色的家庭相册', '杉本博司的长时间曝光', '设定：时间的物理形态', '层叠的地质纹理 + 模糊的人影', '极低对比度 + 褪色色调 + 长时间曝光模拟', 'long exposure, layered textures, faded photograph, geological strata, ghostly figures, sepia tone, ethereal'],
    notes: ['这是我个人最喜欢的一组作品。', '褪色不是技术缺陷，而是一种美学选择——它暗示了记忆的不完整性。', '在处理光影时，我刻意压低了对比度，让画面中的元素仿佛正在彼此溶解。'],
  },
  {
    id: 'silent-city',
    title: '寂静城市', titleEn: 'Silent City', year: '2023', category: '建筑摄影',
    image: 'https://picsum.photos/seed/silentcity/600/800',
    heroImage: 'https://picsum.photos/seed/silentcity/900/1200',
    source: '一个没有人类声音的城市。建筑本身成为主角——混凝土、玻璃与钢铁在寂静中展现出一种纪念碑般的庄严。这是城市的肖像，而非城市中的人的肖像。',
    pathway: ['现代主义建筑摄影', 'Bernd & Hilla Becher 的类型学摄影', '设定：无人的巨型城市', '极简建筑立面 + 空旷广场', '阴天柔光 + 对称构图 + 长焦压缩', 'architectural photography, brutalist, overcast, symmetrical composition, devoid of people, monumental scale, mist'],
    notes: ['无人城市的概念很容易走向反乌托邦，但我更感兴趣的是建筑本身的静默之美。', '构图是这组作品的核心——每一张都采用了严格的对称或黄金比例分割。', '雾气的使用让远处的建筑若隐若现，增加了空间的层次感和神秘感。'],
  },
  {
    id: 'dream-specimens',
    title: '梦境标本', titleEn: 'Dream Specimens', year: '2024', category: '混合媒介',
    image: 'https://picsum.photos/seed/dreamspec/600/800',
    heroImage: 'https://picsum.photos/seed/dreamspec/900/1200',
    source: '如果把梦境做成标本会是什么样子？这组作品将梦境的碎片——色彩、形状、情绪——封存在透明的介质中，像自然历史博物馆里的标本柜。',
    pathway: ['自然历史博物馆的标本陈列', 'Joseph Cornell 的盒子艺术', '设定：梦境碎片的物理形态', '标本柜 + 悬浮物 + 柔和的实验室光线', '顶光 + 玻璃折射 + 微距质感', 'specimen display, glass vitrine, suspended objects, soft laboratory lighting, macro detail, surreal natural history, ethereal'],
    notes: ['这组作品跨越了摄影与装置的边界——每一件看起来都像是一张实体的标本照片。', '在提示词中加入了"museum display"和"glass vitrine"后，AI理解了我想要的那种"被观看"的感觉。', '柔和而精准的实验室光线是营造"标本感"的关键。'],
  },
  {
    id: 'light-archaeology',
    title: '光影考古', titleEn: 'Light Archaeology', year: '2023', category: '光影实验',
    image: 'https://picsum.photos/seed/lightarch/600/800',
    heroImage: 'https://picsum.photos/seed/lightarch/900/1200',
    source: '光影是时间的化石。一束光穿过空间的方式，记录了它所穿越的一切。这组作品将光线当作考古对象——挖掘、分层、重建。',
    pathway: ['James Turrell 的光空间', '古典绘画中的明暗对照法', '设定：光作为实体材料', '黑暗空间 + 精确的光束切割', '极强光影对比 + 丁达尔效应 + 尘埃可见', 'chiaroscuro, volumetric light, dust particles in light beam, dark interior, single light source, cinematic, atmospheric'],
    notes: ['这是技术上最具挑战性的一组。光线在AI生成中常常是"平的"，需要非常精确的描述才能获得体积感。', '"volumetric light"和"dust particles"的组合是制造空间深度的秘诀。', '每张作品的光源位置都经过精心设计——让视线随着光束移动，在画面中完成一次"考古"。'],
  },
  {
    id: 'fictional-memories',
    title: '虚构记忆', titleEn: 'Fictional Memories', year: '2024', category: '叙事摄影',
    image: 'https://picsum.photos/seed/ficmem/600/800',
    heroImage: 'https://picsum.photos/seed/ficmem/900/1200',
    source: '记忆并不总是可靠的。它们变形、重组、被修饰。这组作品创造了一组"从未发生但感觉真实"的记忆画面——仿佛从某本旧相册中滑落。',
    pathway: ['家庭相册与老照片的质感研究', 'Nan Goldin 的亲密摄影', '设定：无法考证的记忆片段', '日常生活场景 + 时间痕迹', '自然光 + 褪色 + 轻微过曝 + 胶片质感', 'candid photography, nostalgic, faded polaroid, natural window light, intimate moment, film grain, 35mm film aesthetic'],
    notes: ['这组作品的创作过程中，我像一个收集他人记忆的人。', '每一张照片都努力营造一种"你曾经经历过这个瞬间"的既视感。', '胶片质感和轻微的过曝是最重要的视觉语言——它让画面看起来像是被时间柔化了。'],
  },
];

const DEFAULT_VIDEO_PROJECTS = [
  {
    id: 'beyond-time',
    title: '时间之外的片刻', titleEn: 'A Moment Beyond Time', year: '2024', category: '实验短片',
    thumbnail: 'https://picsum.photos/seed/vidtime/300/400', videoUrl: '',
    storyboards: [
      { img: 'https://picsum.photos/seed/sb1a/400/225', label: 'SCENE 01 — 开篇' },
      { img: 'https://picsum.photos/seed/sb1b/400/225', label: 'SCENE 02 — 展开' },
      { img: 'https://picsum.photos/seed/sb1c/400/225', label: 'SCENE 03 — 转折' },
      { img: 'https://picsum.photos/seed/sb1d/400/225', label: 'SCENE 04 — 高潮' },
      { img: 'https://picsum.photos/seed/sb1e/400/225', label: 'SCENE 05 — 尾声' },
    ],
    script: [
      { scene: 'SCENE 01 — 开篇', content: '一座古老的钟楼内部。巨大的齿轮缓慢转动。光线从高窗倾泻而下，尘埃在光束中缓缓飘浮。时间仿佛凝固。' },
      { scene: 'SCENE 02 — 展开', content: '镜头缓慢推进，穿越层层叠叠的时钟齿轮。每一层齿轮的转速都不同——有的疾速旋转，有的静止不动。声音：齿轮的咔嗒声渐次叠加，形成一种催眠般的节奏。' },
      { scene: 'SCENE 03 — 转折', content: '画面突然静止。所有齿轮停止转动。一片羽毛从画面外飘入，落在最大的齿轮上。声音：完全的寂静，只有羽毛落下的细微声响。' },
      { scene: 'SCENE 04 — 高潮', content: '齿轮开始逆向旋转。画面的颜色逐渐褪去，变成古典的黑白影像，然后变为负片。时间正在被"倒带"。' },
      { scene: 'SCENE 05 — 尾声', content: '镜头拉远。整个钟楼变成一个发光的点，悬浮在无尽的黑暗之中。字幕浮现："时间从未流逝。流逝的是我们。"' },
    ],
    breakdown: [
      { label: '创意概念', text: '将"时间"这一抽象概念可视化。不依赖叙事，而是通过纯粹的视觉节奏来唤起观众对时间流逝的感知。核心意象：钟楼、齿轮、羽毛。' },
      { label: '视觉语言', text: '采用古典油画的影调，强调光影的戏剧性。色彩从温暖的金色调逐渐过渡到冷峻的银灰，最终褪色为黑白。镜头运动极其缓慢，模拟雕塑般的视觉体验。' },
      { label: '镜头设计', text: '全程单一长镜头形式，从细节特写缓慢拉远至全景。镜头运动速度经过精心设计——在关键时刻几乎静止，制造"时间暂停"的错觉。' },
      { label: '情绪节奏', text: '从宁静→好奇→紧张→释放→沉思。通过齿轮转速变化、声音密度和画面色调来调控情绪曲线，而非依赖情节推动。' },
      { label: 'AI 工作流', text: '使用 Midjourney 生成关键帧画面 → Runway Gen-2 生成动态影像 → 手动剪辑与调色 → 后期音效设计与混音 → DaVinci Resolve 最终输出。' },
    ],
  },
  {
    id: 'mechanical-ballet',
    title: '机械芭蕾', titleEn: 'Mechanical Ballet', year: '2023', category: '动态影像',
    thumbnail: 'https://picsum.photos/seed/vidballet/300/400', videoUrl: '',
    storyboards: [
      { img: 'https://picsum.photos/seed/sb2a/400/225', label: 'SCENE 01 — 序曲' },
      { img: 'https://picsum.photos/seed/sb2b/400/225', label: 'SCENE 02 — 独舞' },
      { img: 'https://picsum.photos/seed/sb2c/400/225', label: 'SCENE 03 — 双人舞' },
      { img: 'https://picsum.photos/seed/sb2d/400/225', label: 'SCENE 04 — 群舞' },
    ],
    script: [
      { scene: 'SCENE 01 — 序曲', content: '黑色空间中，一束光打在舞台中央。一个机械人偶静立不动。它的关节微微发光。音乐：低沉的弦乐拨奏。' },
      { scene: 'SCENE 02 — 独舞', content: '机械人偶开始缓慢移动。每一个动作都伴随着精密的齿轮声。动作越来越流畅，越来越接近人类的舞蹈。' },
      { scene: 'SCENE 03 — 双人舞', content: '第二个机械人偶从阴影中浮现。它们开始同步舞蹈——精确到每一帧。镜头的运动也变成舞蹈的一部分。' },
      { scene: 'SCENE 04 — 群舞', content: '数十个机械人偶出现在舞台上。它们以完全同步的动作舞蹈，形成一种极致的美。最后定格在一个瞬间——所有机械人偶同时静止。' },
    ],
    breakdown: [
      { label: '创意概念', text: '用机械的精确性来诠释芭蕾的形式美。探讨机械与人类身体的边界——当机械的动作变得足够流畅，它与舞蹈之间的界限在哪里？' },
      { label: '视觉语言', text: '高对比度黑白影像，强调金属质感与光影的几何感。舞台采用极简设计，让观众注意力完全集中在"舞者"的动作上。' },
      { label: '镜头设计', text: '镜头本身也是编舞的一部分——它的运动轨迹与人偶的舞蹈动作相呼应。采用轨道般的平滑运动，强调横向与纵向的几何美感。' },
      { label: '情绪节奏', text: '从静止→缓慢苏醒→流畅舞动→激情释放→回归静止。通过动作速度、音乐密度和景别变化来控制节奏。' },
      { label: 'AI 工作流', text: 'Midjourney 角色与场景设定 → Runway Gen-2 生成基础动态 → 手动逐帧调校关键动作 → 达芬奇调色 → Ableton Live 音效设计。' },
    ],
  },
  {
    id: 'water-poetry',
    title: '水形物语', titleEn: 'The Shape of Water', year: '2024', category: '视觉诗',
    thumbnail: 'https://picsum.photos/seed/vidwater/300/400', videoUrl: '',
    storyboards: [
      { img: 'https://picsum.photos/seed/sb3a/400/225', label: 'SCENE 01 — 水滴' },
      { img: 'https://picsum.photos/seed/sb3b/400/225', label: 'SCENE 02 — 涟漪' },
      { img: 'https://picsum.photos/seed/sb3c/400/225', label: 'SCENE 03 — 流动' },
      { img: 'https://picsum.photos/seed/sb3d/400/225', label: 'SCENE 04 — 水下' },
      { img: 'https://picsum.photos/seed/sb3e/400/225', label: 'SCENE 05 — 升华' },
    ],
    script: [
      { scene: 'SCENE 01 — 水滴', content: '一滴水从叶尖落下。极致的慢动作——水珠在空气中变形、拉长，表面张力与重力展开一场优雅的角力。' },
      { scene: 'SCENE 02 — 涟漪', content: '水滴落入湖面。涟漪扩散。镜头跟随涟漪的纹理向外移动。水面映出天空和树木的倒影，随着涟漪扭曲变形。' },
      { scene: 'SCENE 03 — 流动', content: '镜头潜入水下，跟随水流穿行于岩石与水草之间。水中悬浮的微粒在阳光照射下如同星尘。' },
      { scene: 'SCENE 04 — 水下', content: '深水区域。光线渐渐变暗。水母般的光体在水中缓慢漂浮。整个画面变成深蓝与银色的抽象画。' },
      { scene: 'SCENE 05 — 升华', content: '镜头浮出水面。水面上升起薄雾。水滴蒸发，化为看不见的水汽升入空中。循环完成。' },
    ],
    breakdown: [
      { label: '创意概念', text: '以水的三种形态——液态、固态的倒影/涟漪、气态——为线索，创作一部视觉诗。不讲述故事，而是让观众沉浸在水的质感与节奏之中。' },
      { label: '视觉语言', text: '强调水的透明感、表面张力和光影折射。色彩从叶绿→湖蓝→深蓝→银白渐变。大量使用微距与慢动作，将日常的水变成超验的美。' },
      { label: '镜头设计', text: '镜头仿佛也是一滴水——平滑地流动、下落、升起。避免任何突然的运动，所有转场都由水的自然运动驱动。' },
      { label: '情绪节奏', text: '从微观的精确→扩展的舒缓→深沉的静谧→升华的超然。全片保持一种冥想般的节奏，让观众进入一种"水的心流"状态。' },
      { label: 'AI 工作流', text: 'Midjourney 关键帧 + Luma Dream Machine 生成流体运动 → 手动调色强调水的透明度 → 环境音录制与电子音乐混合 → 最终合成。' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  DATA STORE — Multi-layer: IndexedDB + localStorage + Auto-backup
// ═══════════════════════════════════════════════════════════

const STORAGE_KEY = 'dreamarchive_data';
const DB_NAME = 'DreamArchiveDB';
const DB_VERSION = 1;
const DB_STORE = 'projects';

// ── IndexedDB Wrapper ──────────────────────────────────────

const IDB = {
  _db: null,

  open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(DB_STORE)) {
          db.createObjectStore(DB_STORE, { keyPath: 'key' });
        }
      };
      req.onsuccess = (e) => {
        this._db = e.target.result;
        resolve(this._db);
      };
      req.onerror = () => reject(req.error);
    });
  },

  get(key) {
    return new Promise((resolve, reject) => {
      if (!this._db) return reject(new Error('DB not open'));
      const tx = this._db.transaction(DB_STORE, 'readonly');
      const store = tx.objectStore(DB_STORE);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result ? req.result.value : null);
      req.onerror = () => reject(req.error);
    });
  },

  put(key, value) {
    return new Promise((resolve, reject) => {
      if (!this._db) return reject(new Error('DB not open'));
      const tx = this._db.transaction(DB_STORE, 'readwrite');
      const store = tx.objectStore(DB_STORE);
      const req = store.put({ key, value });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },

  remove(key) {
    return new Promise((resolve, reject) => {
      if (!this._db) return reject(new Error('DB not open'));
      const tx = this._db.transaction(DB_STORE, 'readwrite');
      const store = tx.objectStore(DB_STORE);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },

  // Get approximate usage
  async usage() {
    try {
      if (navigator.storage && navigator.storage.estimate) {
        const est = await navigator.storage.estimate();
        return { used: est.usage || 0, quota: est.quota || 0 };
      }
    } catch(_) {}
    return null;
  }
};

// ── Auto-backup download (debounced) ────────────────────────

let _backupTimer = null;
let _lastBackupHash = '';

function scheduleAutoBackup() {
  clearTimeout(_backupTimer);
  _backupTimer = setTimeout(() => {
    try {
      const json = JSON.stringify({ imageProjects, videoProjects }, null, 2);
      // Only download if data actually changed
      const hash = simpleHash(json);
      if (hash === _lastBackupHash) return;
      _lastBackupHash = hash;

      // Store backup in IndexedDB too
      IDB.put('auto_backup', json).catch(() => {});

      // Auto-download to downloads folder
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const now = new Date();
      const stamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}-${String(now.getMinutes()).padStart(2,'0')}`;
      a.download = `dreamarchive_autobackup_${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      console.log('[DreamArchive] 📥 自动备份已下载');
    } catch(e) {
      console.warn('[DreamArchive] 自动备份下载失败:', e.message);
    }
  }, 2000); // Debounce 2s — only backup after user stops editing
}

function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return h.toString(36);
}

// ── Load from all sources ───────────────────────────────────

async function loadDataAsync(fileData) {
  // Timestamp from data.json for comparing freshness
  const fileTime = fileData?._meta?.lastModified ? new Date(fileData._meta.lastModified).getTime() : 0;

  // 1. Try IndexedDB first — it may have unsaved edits
  try {
    const idbData = await IDB.get('main');
    if (idbData) {
      const data = JSON.parse(idbData);
      // Legacy data (no _meta) or data newer than file => use IndexedDB
      const idbTime = data._meta?.lastModified ? new Date(data._meta.lastModified).getTime() : Infinity;
      const hasImages = data.imageProjects && Array.isArray(data.imageProjects);
      const hasVideos = data.videoProjects && Array.isArray(data.videoProjects);

      if ((hasImages || hasVideos) && idbTime >= fileTime) {
        console.log('[DreamArchive] ✅ IndexedDB (编辑缓存) — 图片:', data.imageProjects?.length || 0, '视频:', data.videoProjects?.length || 0);
        try { localStorage.setItem(STORAGE_KEY, idbData); } catch(_) {}
        return { imageProjects: data.imageProjects || null, videoProjects: data.videoProjects || null };
      }

      if (hasImages || hasVideos) {
        console.log('[DreamArchive] IndexedDB 有旧数据，data.json 更新 — 使用 data.json');
      }
    }
  } catch(e) {
    console.warn('[DreamArchive] IndexedDB 读取失败:', e.message);
  }

  // 2. data.json — the published source of truth
  if (fileData && (fileData.imageProjects || fileData.videoProjects)) {
    console.log('[DreamArchive] ✅ 使用 data.json — 图片:', fileData.imageProjects?.length || 0, '视频:', fileData.videoProjects?.length || 0);
    // Sync to IndexedDB for offline cache
    try { IDB.put('main', JSON.stringify(fileData)).catch(() => {}); } catch(_) {}
    return { imageProjects: fileData.imageProjects || null, videoProjects: fileData.videoProjects || null };
  }

  // 3. Try IndexedDB auto-backup
  try {
    const backupData = await IDB.get('auto_backup');
    if (backupData) {
      const data = JSON.parse(backupData);
      if (data.imageProjects || data.videoProjects) {
        console.log('[DreamArchive] 🔧 从 IndexedDB 自动备份恢复');
        try { IDB.put('main', backupData).catch(() => {}); } catch(_) {}
        return { imageProjects: data.imageProjects || null, videoProjects: data.videoProjects || null };
      }
    }
  } catch(_) {}

  // 4. Try localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      const hasImages = data.imageProjects && Array.isArray(data.imageProjects);
      const hasVideos = data.videoProjects && Array.isArray(data.videoProjects);
      if (hasImages || hasVideos) {
        console.log('[DreamArchive] ✅ 从 localStorage 加载 — 图片:', data.imageProjects?.length || 0, '视频:', data.videoProjects?.length || 0);
        try { IDB.put('main', raw).catch(() => {}); } catch(_) {}
        return { imageProjects: data.imageProjects || null, videoProjects: data.videoProjects || null };
      }
    }
  } catch(e) {
    console.warn('[DreamArchive] localStorage 读取失败:', e.message);
  }

  // 5. Try localStorage backup
  try {
    const backup = localStorage.getItem(STORAGE_KEY + '_backup');
    if (backup) {
      const data = JSON.parse(backup);
      if (data.imageProjects || data.videoProjects) {
        console.log('[DreamArchive] 🔧 从 localStorage 备份恢复');
        return { imageProjects: data.imageProjects || null, videoProjects: data.videoProjects || null };
      }
    }
  } catch(_) {}

  console.warn('[DreamArchive] 所有存储源均无数据，使用默认数据');
  return null;
}

// ── Save to all layers ─────────────────────────────────────

function saveData() {
  try {
    const data = {
      _meta: {
        version: 2,
        lastModified: new Date().toISOString()
      },
      imageProjects,
      videoProjects
    };
    const json = JSON.stringify(data);

    // Layer 1: localStorage (fast sync cache)
    try {
      const prev = localStorage.getItem(STORAGE_KEY);
      if (prev) {
        try { localStorage.setItem(STORAGE_KEY + '_backup', prev); } catch(_) {}
      }
      localStorage.setItem(STORAGE_KEY, json);
    } catch(e) {
      console.warn('[DreamArchive] localStorage 保存失败 (可能已满):', e.message);
    }

    // Layer 2: IndexedDB (reliable, large capacity)
    IDB.put('main', json).catch(e => {
      console.warn('[DreamArchive] IndexedDB 保存失败:', e.message);
    });

    // Layer 3: Auto-backup download
    scheduleAutoBackup();

    console.log('[DreamArchive] 💾 已保存 — 图片:', imageProjects.length, '视频:', videoProjects.length, '大小:', (json.length/1024).toFixed(1) + 'KB');
    return true;
  } catch (e) {
    console.error('[DreamArchive] ❌ 保存失败:', e.message);
    Editor.showToast('⚠ 保存失败！请点击"导出备份"按钮保存数据');
    return false;
  }
}

// ── Storage usage reporter ──────────────────────────────────

async function getStorageInfo() {
  const info = { idbUsed: '?', idbQuota: '?', lsUsed: 0, lsMax: 5 * 1024 * 1024 };

  // localStorage
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      info.lsUsed += (k.length + (localStorage.getItem(k) || '').length) * 2;
    }
  } catch(_) {}

  // IndexedDB
  const usage = await IDB.usage();
  if (usage) {
    info.idbUsed = (usage.used / 1024 / 1024).toFixed(1) + ' MB';
    info.idbQuota = (usage.quota / 1024 / 1024).toFixed(0) + ' MB';
  }

  return info;
}

// ── Reset ───────────────────────────────────────────────────

function resetData() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_KEY + '_backup');
  IDB.remove('main').catch(() => {});
  IDB.remove('auto_backup').catch(() => {});
  imageProjects = JSON.parse(JSON.stringify(DEFAULT_IMAGE_PROJECTS));
  videoProjects = JSON.parse(JSON.stringify(DEFAULT_VIDEO_PROJECTS));
  saveData();
}

// ── Merge helper: add base projects that don't exist in active ──
function mergeProjects(active, base) {
  // Only merge if active is clearly incomplete (has fewer projects than base)
  // and the IDs don't suggest intentional deletion
  const activeIds = new Set(active.map(p => p.id));
  const baseOnly = base.filter(p => !activeIds.has(p.id));
  if (baseOnly.length === 0) return active;
  return [...active, ...baseOnly];
}

// ── Global thumbnail capture ────────────────────────────────

let _captureQueue = [];
let _capturingNow = false;

function captureAllMissingThumbnails() {
  const needsCapture = videoProjects.filter(p =>
    p.videoUrl && p.videoUrl.length > 0 &&
    (!p.thumbnail || p.thumbnail.includes('placeholder'))
  );

  if (needsCapture.length === 0) {
    console.log('[DreamArchive] 📸 所有视频封面已就绪');
    return;
  }

  console.log('[DreamArchive] 📸 开始截取 ' + needsCapture.length + ' 个视频封面...');
  needsCapture.forEach(p => {
    console.log('  🎬 ' + p.title + ' — ' + (p.videoUrl.substring(0, 60)));
  });

  _captureQueue = [...needsCapture];
  _capturingNow = true;
  processCaptureQueue();
}

function processCaptureQueue() {
  if (_captureQueue.length === 0) {
    console.log('[DreamArchive] 📸 全部截取完成，保存数据...');
    _capturingNow = false;
    saveData();
    // Refresh video gallery if visible
    if (ViewManager.currentView === 'video-gallery') {
      VideoGallery.init();
    }
    return;
  }

  const proj = _captureQueue.shift();
  captureVideoThumbnail(proj.videoUrl, (thumb) => {
    if (thumb) {
      proj.thumbnail = thumb;
      console.log('[DreamArchive] ✅ ' + proj.title);
    } else {
      console.warn('[DreamArchive] ⚠ ' + proj.title + ' — 截取失败，跳过');
    }
    // Continue after short delay
    setTimeout(processCaptureQueue, 500);
  });
}

// ── Init data (will be set after async load) ────────────────

let imageProjects = JSON.parse(JSON.stringify(DEFAULT_IMAGE_PROJECTS));
let videoProjects = JSON.parse(JSON.stringify(DEFAULT_VIDEO_PROJECTS));

async function initDataStore() {
  // Step 0: Load published data
  let fileData = null;

  // 0a: Try EMBEDDED_DATA from data.js (works with file://)
  if (typeof EMBEDDED_DATA !== 'undefined' && EMBEDDED_DATA) {
    fileData = EMBEDDED_DATA;
    console.log('[DreamArchive] ✅ 从 data.js 加载成功 — 图片:', fileData.imageProjects?.length || 0, '视频:', fileData.videoProjects?.length || 0);
  }

  // data.js is loaded via <script> tag — it's always the primary source
  // fetch('data.json') is redundant and slow in some regions, so we skip it

  // Step 1: Open IndexedDB
  try {
    await IDB.open();
    console.log('[DreamArchive] IndexedDB 已就绪');
  } catch(e) {
    console.warn('[DreamArchive] IndexedDB 不可用，降级到 localStorage:', e.message);
  }

  // Step 2: Load data — merge IndexedDB (edit cache) with data.js (published base)
  const saved = await loadDataAsync(fileData);
  if (saved) {
    if (saved.imageProjects) imageProjects = saved.imageProjects;
    if (saved.videoProjects) videoProjects = saved.videoProjects;
    if (!saved.imageProjects) console.warn('[DreamArchive] 图片作品从默认数据恢复');
    if (!saved.videoProjects) console.warn('[DreamArchive] 视频作品从默认数据恢复');
  }

  // If no IndexedDB data, use data.js as primary source
  // data.js always overrides hardcoded defaults in script.js
  if (!saved && fileData) {
    if (fileData.imageProjects && fileData.imageProjects.length > 0) {
      imageProjects = fileData.imageProjects;
      console.log('[DreamArchive] 加载 data.js 图片作品:', imageProjects.length);
    }
    if (fileData.videoProjects && fileData.videoProjects.length > 0) {
      videoProjects = fileData.videoProjects;
      console.log('[DreamArchive] 加载 data.js 视频作品:', videoProjects.length);
    }
  }

  // Log storage info
  const info = await getStorageInfo();
  console.log('[DreamArchive] 存储状态 — IndexedDB:', info.idbUsed + '/' + info.idbQuota, '| localStorage:', (info.lsUsed/1024).toFixed(1) + 'KB / 5MB');

  // Auto-capture video thumbnails on load
  captureAllMissingThumbnails();
}

// Capture thumbnail from a visible video element (browser must see it to render)
function captureVideoThumbnail(videoUrl, callback) {
  const v = document.createElement('video');
  v.muted = true;
  v.playsInline = true;
  v.preload = 'auto';
  // Don't set crossOrigin for local files — it breaks file://
  if (!videoUrl.startsWith('data:') && !videoUrl.startsWith('file:') && !videoUrl.startsWith('images/') && !videoUrl.startsWith('videos/')) {
    v.crossOrigin = 'anonymous';
  }
  // Make it barely visible — browser needs it in the viewport
  v.style.cssText = 'position:fixed;bottom:10px;right:10px;width:1px;height:1px;opacity:0.01;z-index:99999;pointer-events:none;';
  document.body.appendChild(v);

  let done = false;
  const finish = (thumb) => {
    if (done) return;
    done = true;
    clearTimeout(timeout);
    clearInterval(poll);
    if (v.parentNode) v.remove();
    callback(thumb);
  };

  // Timeout fallback — if nothing happens in 8s, give up
  const timeout = setTimeout(() => {
    console.warn('[DreamArchive] 截取超时: ' + videoUrl.substring(0, 50));
    finish(null);
  }, 8000);

  const capture = () => {
    if (done || v.videoWidth === 0) return;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');
      const vw = v.videoWidth, vh = v.videoHeight;
      const scale = Math.max(300 / vw, 400 / vh);
      const sw = 300 / scale, sh = 400 / scale;
      const sx = (vw - sw) / 2, sy = (vh - sh) / 2;
      ctx.drawImage(v, sx, sy, sw, sh, 0, 0, 300, 400);
      finish(canvas.toDataURL('image/jpeg', 0.7));
    } catch (e) {
      console.warn('[DreamArchive] 截取画面失败:', e.message);
      finish(null);
    }
  };

  v.addEventListener('loadeddata', () => {
    v.play().then(() => {
      setTimeout(() => { v.pause(); capture(); }, 600);
    }).catch((e) => {
      console.warn('[DreamArchive] 播放失败，尝试seek:', e.message);
      v.currentTime = 0.1;
    });
  }, { once: true });

  v.addEventListener('seeked', () => {
    setTimeout(capture, 300);
  }, { once: true });

  v.addEventListener('error', (e) => {
    console.warn('[DreamArchive] 视频加载错误:', videoUrl.substring(0, 50));
    finish(null);
  }, { once: true });

  v.src = videoUrl;
  v.load();

  // Poll fallback — if videoWidth becomes available without events
  let polls = 0;
  const poll = setInterval(() => {
    polls++;
    if (v.videoWidth > 0) { capture(); }
    else if (polls > 60) { finish(null); }
  }, 300);
}

// ─── View Manager ──────────────────────────────────────────

const ViewManager = {
  currentView: 'landing',
  views: {},

  init() {
    document.querySelectorAll('.view').forEach((el) => {
      this.views[el.id] = el;
    });
  },

  navigate(targetId, opts = {}) {
    const target = this.views[targetId];
    if (!target || this.currentView === targetId) return;

    const current = this.views[this.currentView];
    if (current) {
      current.classList.remove('active');
      current.classList.remove('fresh');
    }

    // Override any !important styles that block JS navigation (e.g. landing inline CSS)
    if (current && current.id === 'landing') {
      current.style.setProperty('opacity', '0', 'important');
      current.style.setProperty('pointer-events', 'none', 'important');
    }

    const delay = opts.instant ? 0 : 400;

    setTimeout(() => {
      // Restore landing when navigating to it
      if (targetId === 'landing') {
        target.style.setProperty('opacity', '1', 'important');
        target.style.setProperty('pointer-events', 'all', 'important');
      }

      target.scrollTop = 0;
      target.classList.add('active');
      target.classList.add('fresh');
      setTimeout(() => target.classList.remove('fresh'), 1500);

      this.currentView = targetId;

      if (targetId === 'image-gallery') ImageGallery.init();
      if (targetId === 'video-gallery') VideoGallery.init();

      // Re-apply edit decorations if in edit mode
      if (Editor.active) Editor.decorate();
    }, delay);
  },
};

// ─── Landing Page — Scroll Intro ──────────────────────────

const LandingPage = {
  init() {
    // Enter button navigates to hall
    const enterBtn = document.getElementById('enterBtn');
    enterBtn.addEventListener('click', () => {
      ViewManager.navigate('hall');
    });

    // Intersection Observer for scroll-based reveals
    this.initScrollReveal();

    // DNA tags floating animation
    this.initDnaTags();
  },

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Screen 2: Manifesto paragraphs reveal one by one
          if (entry.target.classList.contains('screen-2')) {
            const label = entry.target.querySelector('.manifesto-label');
            if (label) label.classList.add('visible');
            const paras = entry.target.querySelectorAll('.manifesto-p');
            paras.forEach((p, i) => {
              setTimeout(() => p.classList.add('visible'), i * 200);
            });
          }

          // Screen 3: DNA tags get staggered float
          if (entry.target.classList.contains('screen-3')) {
            const tags = entry.target.querySelectorAll('.dna-tag');
            tags.forEach((t, i) => {
              t.style.setProperty('--i', i);
              t.style.animationDelay = `${i * -0.8}s`;
            });
          }

          // Screen 4: Methodology nodes appear in sequence
          if (entry.target.classList.contains('screen-4')) {
            const quote = entry.target.querySelector('.methodology-quote');
            if (quote) quote.classList.add('visible');
            const nodes = entry.target.querySelectorAll('.method-node');
            const lines = entry.target.querySelectorAll('.method-line');
            nodes.forEach((n, i) => {
              setTimeout(() => n.classList.add('visible'), 600 + i * 250);
            });
            lines.forEach((l, i) => {
              setTimeout(() => l.classList.add('visible'), 800 + i * 250);
            });
          }

          // Screen 5: Final quote + enter button
          if (entry.target.classList.contains('screen-5')) {
            const quote = entry.target.querySelector('.final-quote');
            const btn = entry.target.querySelector('.enter-btn');
            if (quote) quote.classList.add('visible');
            if (btn) btn.classList.add('visible');
          }
        }
      });
    }, { threshold: 0.3 });

    // Observe all intro screens
    document.querySelectorAll('.intro-screen').forEach(screen => {
      observer.observe(screen);
    });
  },

  initDnaTags() {
    const dnaSpace = document.getElementById('dnaSpace');
    if (!dnaSpace) return;

    dnaSpace.addEventListener('mousemove', (e) => {
      const rect = dnaSpace.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const tags = dnaSpace.querySelectorAll('.dna-tag');
      tags.forEach((tag, i) => {
        const factor = 10 + i * 2;
        const ox = x * factor;
        const oy = y * factor * 0.6;
        const baseTransform = `translate(-50%, -50%) rotate(var(--dr, 0deg))`;
        tag.style.transform = `${baseTransform} translate(${ox}px, ${oy}px)`;
      });
    });

    dnaSpace.addEventListener('mouseleave', () => {
      const tags = dnaSpace.querySelectorAll('.dna-tag');
      tags.forEach(tag => {
        tag.style.transform = `translate(-50%, -50%) rotate(var(--dr, 0deg))`;
      });
    });
  },
};

// ─── Mouse Parallax ────────────────────────────────────────

const Parallax = {
  init() {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      const entrances = document.querySelectorAll('.entrance');
      entrances.forEach((el, i) => {
        const factor = 8 + i * 4;
        el.style.transform = `translate(${x * factor}px, ${y * factor * 0.5}px)`;
      });

      // Portrait: now part of landing intro
    });
  },
};

// ─── Image Gallery ─────────────────────────────────────────

const ImageGallery = {
  scattered: false,
  cards: [],

  init() {
    this.scattered = false;
    const pile = document.getElementById('photoPile');
    if (!pile) return;

    // Force container to be full-width scrollable grid
    const curatedTable = document.getElementById('curatedTable');
    if (curatedTable) {
      curatedTable.removeAttribute('class');
      curatedTable.classList.add('curated-table', 'grid-mode');
      curatedTable.style.cssText = 'height:auto;min-height:60vh;display:block;padding:20px 0;';
    }

    pile.innerHTML = '';
    pile.removeAttribute('class');
    pile.classList.add('photo-pile', 'grid-layout');
    pile.style.cssText = 'position:relative;width:100%;height:auto;display:flex;flex-wrap:wrap;justify-content:center;gap:28px;padding:30px 20px 60px;';

    console.log('[DreamArchive] 渲染画廊 — 作品数:', imageProjects.length);

    imageProjects.forEach((proj, i) => {
      const card = this.createCard(proj, i);
      // Force grid-friendly card styles
      card.style.cssText = 'position:relative;width:280px;flex-shrink:0;transform:none;top:auto;left:auto;margin:0;';
      pile.appendChild(card);
    });

    this.cards = [...pile.querySelectorAll('.photo-card')];

    this.cards.forEach((card, i) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="delete-project"]')) return;
        if (Editor.active) return;
        e.stopPropagation();
        ImageProjectDetail.open(imageProjects[i]);
      });
    });

    const instruction = document.getElementById('galleryInstruction');
    if (instruction) instruction.style.opacity = '0.5';

    const countEl = document.getElementById('imageCount');
    if (countEl) countEl.textContent = imageProjects.length;

    if (Editor.active) Editor.decorate();
  },

  createCard(proj, index) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.dataset.projectId = proj.id;
    card.dataset.projectIndex = index;
    card.innerHTML = `
      <button class="card-del-btn" data-action="delete-project" data-project="image" data-id="${proj.id}" title="删除此项目">×</button>
      <div class="card-image-wrapper" data-editable="image" data-project="image" data-id="${proj.id}" data-field="image">
        <img src="${proj.image || 'images/placeholder-image.svg'}" alt="${proj.title}" loading="lazy"
             onerror="this.style.cssText='width:100%;aspect-ratio:3/4;background:#ede6db;display:flex;align-items:center;justify-content:center;color:#8a8680;font-family:serif';this.alt='请放入实际图片';">
      </div>
      <div class="card-meta">
        <h3 class="card-title" data-editable="text" data-project="image" data-id="${proj.id}" data-field="title">${proj.title}</h3>
        <div class="card-category" data-editable="text" data-project="image" data-id="${proj.id}" data-field="category">${proj.category}</div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      // Don't intercept clicks on delete button
      if (e.target.closest('[data-action="delete-project"]')) return;
      if (Editor.active) return;
      if (!this.scattered) return;
      e.stopPropagation();
      ImageProjectDetail.open(proj);
    });

    return card;
  },

  scatter(pile) {
    this.scattered = true;
    pile.classList.add('scattered');

    const curatedTable = document.getElementById('curatedTable');
    if (curatedTable) curatedTable.classList.add('scattered');

    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    const margin = 60;

    this.cards.forEach((card, i) => {
      const cardW = 260;
      const cardH = cardW * 1.45;
      const maxX = viewW - cardW - margin;
      const maxY = viewH - cardH - margin - 60;
      const seed = (i * 137.5) % 360;
      const rx = margin + ((seed * 7.3 + i * 113) % (maxX - margin));
      const ry = 80 + ((seed * 3.7 + i * 97) % (maxY - 80));
      const rr = (Math.sin(i * 2.7) * 12) + (Math.cos(i * 1.3) * 6);

      card.style.position = 'fixed';
      card.style.left = `${rx}px`;
      card.style.top = `${ry}px`;
      card.style.transform = `rotate(${rr}deg)`;
      card.style.transition = `all ${0.8 + i * 0.12}s cubic-bezier(0.34, 1.56, 0.64, 1)`;
      card.style.zIndex = i + 1;
      card.style.setProperty('--x', `${rx}px`);
      card.style.setProperty('--y', `${ry}px`);
      card.style.setProperty('--r', `${rr}deg`);

      setTimeout(() => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.4s ease';
        card.classList.add('floating');
        card.style.animationDelay = `${i * 0.3}s`;
      }, 900 + i * 120);
    });

    const instruction = document.getElementById('galleryInstruction');
    if (instruction) instruction.style.opacity = '1';
  },
};

// ─── Image Project Detail ──────────────────────────────────

const ImageProjectDetail = {
  open(proj) {
    document.getElementById('projectTitle').textContent = proj.title;
    document.getElementById('projectTitle').setAttribute('data-editable', 'text');
    document.getElementById('projectTitle').setAttribute('data-project', 'image');
    document.getElementById('projectTitle').setAttribute('data-id', proj.id);
    document.getElementById('projectTitle').setAttribute('data-field', 'title');

    document.getElementById('projectYear').textContent = proj.year;
    document.getElementById('projectYear').setAttribute('data-editable', 'text');
    document.getElementById('projectYear').setAttribute('data-project', 'image');
    document.getElementById('projectYear').setAttribute('data-id', proj.id);
    document.getElementById('projectYear').setAttribute('data-field', 'year');

    document.getElementById('projectCategory').textContent = proj.category;
    document.getElementById('projectCategory').setAttribute('data-editable', 'text');
    document.getElementById('projectCategory').setAttribute('data-project', 'image');
    document.getElementById('projectCategory').setAttribute('data-id', proj.id);
    document.getElementById('projectCategory').setAttribute('data-field', 'category');

    const heroImg = document.getElementById('projectHeroImage');
    heroImg.innerHTML = `<img src="${proj.heroImage}" alt="${proj.title}" onerror="this.src='images/placeholder-image.svg';this.onerror=null;">`;
    heroImg.setAttribute('data-editable', 'image');
    heroImg.setAttribute('data-project', 'image');
    heroImg.setAttribute('data-id', proj.id);
    heroImg.setAttribute('data-field', 'heroImage');

    const sourceEl = document.getElementById('projectSource');
    sourceEl.querySelector('.art-note').textContent = proj.source;
    sourceEl.querySelector('.art-note').setAttribute('data-editable', 'text');
    sourceEl.querySelector('.art-note').setAttribute('data-project', 'image');
    sourceEl.querySelector('.art-note').setAttribute('data-id', proj.id);
    sourceEl.querySelector('.art-note').setAttribute('data-field', 'source');

    const pathwayEl = document.getElementById('projectPathway');
    pathwayEl.innerHTML = proj.pathway.map((step, i) => `
      <div class="pathway-node${i === proj.pathway.length - 1 ? ' final' : ''}">
        <div class="pathway-dot"></div>
        <div class="pathway-line"></div>
        <span class="pathway-label" data-editable="text" data-project="image" data-id="${proj.id}" data-field="pathway" data-index="${i}">${step}</span>
      </div>
    `).join('');

    const notesEl = document.getElementById('projectNotes');
    notesEl.innerHTML = proj.notes.map((n, i) =>
      `<p data-editable="text" data-project="image" data-id="${proj.id}" data-field="notes" data-index="${i}">${n}</p>`
    ).join('');

    ViewManager.navigate('image-project');
  },
};

// ─── Video Gallery ─────────────────────────────────────────

const VideoGallery = {
  init() {
    const archive = document.getElementById('filmArchive');
    if (!archive) return;
    archive.innerHTML = '';

    // Use grid layout — no floating, no random positions
    archive.style.cssText = 'position:relative;width:100%;height:auto;min-height:60vh;display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:30px 20px 60px;overflow-y:auto;max-height:calc(100vh - 200px);';

    console.log('[DreamArchive] 渲染视频画廊 — 作品数:', videoProjects.length);

    videoProjects.forEach((proj, i) => {
      const strip = this.createFilmStrip(proj, i);
      archive.appendChild(strip);
    });

    // 截取全部封面按钮已移除 — 只读模式

    const instruction = document.querySelector('#video-gallery .gallery-instruction');
    if (instruction) instruction.style.opacity = '0.5';
    if (Editor.active) Editor.decorate();

    // Auto-capture handled globally in initDataStore
    // Diagnostic status for user
    console.log('[DreamArchive] 📊 视频封面状态:');
    videoProjects.forEach(p => {
      const hasVideo = p.videoUrl && p.videoUrl.length > 0;
      const hasThumb = p.thumbnail && !p.thumbnail.includes('placeholder');
      const icon = hasThumb ? '✅' : (hasVideo ? '🎬' : '💤');
      console.log(`  ${icon} "${p.title}" — ${hasVideo ? '有视频' : '无视频文件'} | ${hasThumb ? '有封面' : '缺封面'}`);
    });
  },

  createFilmStrip(proj, index) {
    const strip = document.createElement('div');
    strip.className = 'film-strip';
    strip.dataset.projectId = proj.id;

    // Static grid card
    strip.style.cssText = 'position:relative;width:180px;flex-shrink:0;cursor:pointer;transform:none;animation:none;z-index:1;';

    // Generate a themed cover for each video based on its title
    const coverColors = {
      'beyond-time': ['#3a3040', '#5a4a60'],
      'mechanical-ballet': ['#2a3035', '#4a5055'],
      'water-poetry': ['#1a3040', '#2a5060'],
    };
    const colors = coverColors[proj.id] || ['#3d3836', '#5a5250'];
    const hasRealThumb = proj.thumbnail && !proj.thumbnail.includes('placeholder-video') && !proj.thumbnail.includes('placeholder');

    strip.innerHTML = `
      <div class="film-strip-inner" style="width:100%;">
        <div class="film-strip-sprockets">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <button class="card-del-btn" data-action="delete-project" data-project="video" data-id="${proj.id}" title="删除此项目">×</button>
        <div class="film-strip-frame" data-editable="image" data-project="video" data-id="${proj.id}" data-field="thumbnail" style="width:100%;aspect-ratio:3/4;overflow:hidden;position:relative;">
          ${hasRealThumb ? `
            <img src="${proj.thumbnail}" alt="${proj.title}" loading="lazy" style="width:100%;height:100%;object-fit:contain;position:relative;z-index:1;"
                 onerror="this.style.display='none';">
          ` : ''}
          <div style="position:absolute;inset:0;background:linear-gradient(160deg,${colors[0]},${colors[1]});display:flex;align-items:center;justify-content:center;flex-direction:column;${hasRealThumb ? 'z-index:0;' : 'z-index:1;'}">
            <svg viewBox="0 0 60 60" style="width:40px;height:40px;opacity:0.6;margin-bottom:8px;">
              <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
              <polygon points="22,18 22,42 42,30" fill="rgba(255,255,255,0.45)"/>
            </svg>
            <span style="color:rgba(255,255,255,0.45);font-size:11px;font-family:sans-serif;text-align:center;padding:0 8px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${proj.title}</span>
            <span style="color:rgba(255,255,255,0.25);font-size:9px;font-family:sans-serif;margin-top:2px;">${proj.year || ''}</span>
          </div>
        </div>
        <div class="film-strip-sprockets">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="film-strip-label" data-editable="text" data-project="video" data-id="${proj.id}" data-field="title">${proj.title}</div>
      </div>
    `;

    strip.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="delete-project"]')) return;
      if (Editor.active) return; // In edit mode, let the editor handle clicks
      VideoProjectDetail.open(proj);
    });

    return strip;
  },
};

// ─── Video Project Detail ──────────────────────────────────

const VideoProjectDetail = {
  open(proj) {
    console.log('VideoProjectDetail.open called', proj.id, proj.title);
    Editor.showToast('正在打开: ' + proj.title);

    document.getElementById('videoTitle').textContent = proj.title;
    document.getElementById('videoTitle').setAttribute('data-editable', 'text');
    document.getElementById('videoTitle').setAttribute('data-project', 'video');
    document.getElementById('videoTitle').setAttribute('data-id', proj.id);
    document.getElementById('videoTitle').setAttribute('data-field', 'title');

    document.getElementById('videoYear').textContent = proj.year;
    document.getElementById('videoYear').setAttribute('data-editable', 'text');
    document.getElementById('videoYear').setAttribute('data-project', 'video');
    document.getElementById('videoYear').setAttribute('data-id', proj.id);
    document.getElementById('videoYear').setAttribute('data-field', 'year');

    const placeholder = document.getElementById('videoPlaceholder');
    placeholder.classList.remove('hidden');
    placeholder.querySelector('.vp-title').textContent = proj.title;

    // Store current project ID for upload form
    document.body.setAttribute('data-current-video-id', proj.id);

    // Show/hide upload form
    const urlInput = document.getElementById('vpUrlInput');
    const fileInput = document.getElementById('vpFileInput');
    const setBtn = document.getElementById('vpSetBtn');
    const hintEl = placeholder.querySelector('.vp-hint');
    const showUpload = false; // 只读模式 — 隐藏视频上传表单

    if (urlInput) urlInput.style.display = showUpload ? 'block' : 'none';
    if (fileInput) fileInput.style.display = showUpload ? 'block' : 'none';
    if (setBtn) setBtn.style.display = showUpload ? 'inline-block' : 'none';
    if (hintEl) hintEl.style.display = showUpload ? '' : 'none';
    if (urlInput && showUpload) urlInput.value = '';

    // Set video source if available
    const videoEl = document.getElementById('projectVideo');
    const playBtn = document.getElementById('videoPlayBtn');
    if (proj.videoUrl) {
      videoEl.querySelector('source').src = proj.videoUrl;
      videoEl.load();
      videoEl.style.display = '';
      placeholder.classList.add('hidden');

      // Auto-capture thumbnail from this video
      captureVideoThumbnail(proj.videoUrl, (thumb) => {
        if (thumb) {
          proj.thumbnail = thumb;
          saveData();
          VideoGallery.init();
        }
      });
    } else {
      videoEl.style.display = 'none';
    }

    // Play button
    if (playBtn) {
      playBtn.classList.remove('playing');
      playBtn.textContent = '▶';
      playBtn.style.display = proj.videoUrl ? 'flex' : 'none';
      playBtn.onclick = (e) => {
        e.stopPropagation();
        const ve = document.getElementById('projectVideo');
        if (!ve) return;
        if (ve.paused) {
          ve.play().catch(() => {});
          playBtn.classList.add('playing');
        } else {
          ve.pause();
          playBtn.classList.remove('playing');
          playBtn.textContent = '▶';
        }
      };
    }

    // Click video to toggle play/pause
    if (proj.videoUrl) {
      videoEl.onclick = () => {
        if (videoEl.paused) {
          videoEl.play().catch(() => {});
          if (playBtn) playBtn.classList.add('playing');
        } else {
          videoEl.pause();
          if (playBtn) { playBtn.classList.remove('playing'); playBtn.textContent = '▶'; }
        }
      };
      videoEl.style.cursor = 'pointer';
    }

    // Video events to sync play button
    videoEl.onplay = () => { if (playBtn) playBtn.classList.add('playing'); };
    videoEl.onpause = () => { if (playBtn) { playBtn.classList.remove('playing'); playBtn.textContent = '▶'; } };
    videoEl.onended = () => { if (playBtn) { playBtn.classList.remove('playing'); playBtn.textContent = '▶'; } };

    // Sound toggle button
    const soundBtn = document.getElementById('videoSoundBtn');
    if (soundBtn) {
      if (proj.videoUrl) {
        soundBtn.classList.add('visible');
        soundBtn.textContent = '🔇';
        soundBtn.onclick = (e) => {
          e.stopPropagation();
          const ve = document.getElementById('projectVideo');
          if (!ve) return;
          if (ve.muted) { ve.muted = false; soundBtn.textContent = '🔊'; soundBtn.title = '静音'; }
          else { ve.muted = true; soundBtn.textContent = '🔇'; soundBtn.title = '取消静音'; }
        };
      } else {
        soundBtn.classList.remove('visible');
      }
    }

    // Make video player area clickable for URL editing
    const wrapper = document.getElementById('videoPlayerWrapper');
    wrapper.setAttribute('data-editable', 'videoUrl');
    wrapper.setAttribute('data-project', 'video');
    wrapper.setAttribute('data-id', proj.id);

    const wall = document.getElementById('storyboardWall');
    wall.innerHTML = proj.storyboards.map((sb, i) => `
      <div class="storyboard-frame" style="--sr: ${(Math.sin(i * 2.1) * 4).toFixed(1)}deg" data-storyboard-index="${i}">
        <button class="storyboard-del-btn" data-action="delete-storyboard" data-project="video" data-id="${proj.id}" data-index="${i}" title="删除此分镜">×</button>
        <img src="${sb.img}" alt="${sb.label}" loading="lazy"
             onerror="this.src='images/placeholder-storyboard.svg';this.onerror=null;"
             data-editable="image" data-project="video" data-id="${proj.id}" data-field="storyboards" data-index="${i}">
        <div class="storyboard-label" data-editable="text" data-project="video" data-id="${proj.id}" data-field="storyboards" data-subfield="label" data-index="${i}">${sb.label}</div>
      </div>
    `).join('') + `
      <div class="storyboard-frame storyboard-add-frame" id="storyboardAddBtn" data-action="add-storyboard" data-project="video" data-id="${proj.id}" title="添加分镜">
        <div class="storyboard-add-icon">+</div>
        <div class="storyboard-label">添加分镜</div>
      </div>
    `;

    // Script archive — single textarea
    const scriptEl = document.getElementById('scriptArchive');
    if (scriptEl) {
      // Handle migration from old array format
      if (Array.isArray(proj.script)) {
        proj.scriptText = proj.script.map(s => s.scene + '\n' + s.content).join('\n\n');
        proj.script = null;
      }
      scriptEl.value = proj.scriptText || '';
      scriptEl.setAttribute('data-project', 'video');
      scriptEl.setAttribute('data-id', proj.id);
      scriptEl.setAttribute('data-field', 'scriptText');
    }

    const breakdownEl = document.getElementById('breakdownGrid');
    breakdownEl.innerHTML = proj.breakdown.map((b, i) => `
      <div class="breakdown-item">
        <div class="breakdown-label" data-editable="text" data-project="video" data-id="${proj.id}" data-field="breakdown" data-subfield="label" data-index="${i}">${b.label}</div>
        <div class="breakdown-text" data-editable="text" data-project="video" data-id="${proj.id}" data-field="breakdown" data-subfield="text" data-index="${i}">${b.text}</div>
      </div>
    `).join('');

    ViewManager.navigate('video-project');
  },
};

// About page content is now integrated into the landing intro screens

// ═══════════════════════════════════════════════════════════
//  EDIT MODE — Press E to toggle
// ═══════════════════════════════════════════════════════════

const Editor = {
  active: false,
  panel: null,

  init() {
    // 编辑面板和切换按钮已移除 — 只读模式

    // Wire up video URL set button (on detail page)
    const vpSetBtn = document.getElementById('vpSetBtn');
    if (vpSetBtn) {
      vpSetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const vid = document.body.getAttribute('data-current-video-id');
        const list = videoProjects;
        const item = list.find(p => p.id === vid);
        if (!item) { this.showToast('错误：找不到视频项目'); return; }

        const urlInput = document.getElementById('vpUrlInput');
        const newUrl = (urlInput ? urlInput.value.trim() : '');
        if (!newUrl) { this.showToast('请粘贴视频URL或上传文件'); return; }

        item.videoUrl = newUrl;
        saveData();
        VideoGallery.init();

        // Update the video element directly
        const videoEl = document.getElementById('projectVideo');
        const placeholder = document.getElementById('videoPlaceholder');
        if (videoEl && newUrl) {
          videoEl.querySelector('source').src = newUrl;
          videoEl.load();
          videoEl.style.display = '';
          if (placeholder) placeholder.classList.add('hidden');
        }
        // Hide upload UI
        if (urlInput) urlInput.style.display = 'none';
        const fileInput = document.getElementById('vpFileInput');
        if (fileInput) fileInput.style.display = 'none';
        vpSetBtn.style.display = 'none';

        // Show play/sound buttons
        const playBtn = document.getElementById('videoPlayBtn');
        if (playBtn) playBtn.style.display = 'flex';
        const soundBtn = document.getElementById('videoSoundBtn');
        if (soundBtn) soundBtn.classList.add('visible');

        this.showToast('视频已设置 ✓');
      });
    }

    // Wire up file input for video
    const vpFileInput = document.getElementById('vpFileInput');
    if (vpFileInput) {
      vpFileInput.addEventListener('change', () => {
        const file = vpFileInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const urlInput = document.getElementById('vpUrlInput');
          if (urlInput) urlInput.value = ev.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    // E 键切换编辑模式已禁用 — 只读模式

    // Project delete & add — always active (no edit mode required)
    document.addEventListener('click', (e) => {
      const delProjBtn = e.target.closest('[data-action="delete-project"]');
      if (delProjBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.deleteProject(delProjBtn);
        return;
      }
      const addImgBtn = e.target.closest('[data-action="add-image"]');
      if (addImgBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.addImageProject();
        return;
      }
      const addVidBtn = e.target.closest('[data-action="add-video"]');
      if (addVidBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.addVideoProject();
        return;
      }
    });

    // 编辑模式点击委托已移除 — 只读模式
  },

  toggle() {
    this.active = !this.active;
    document.body.classList.toggle('edit-mode', this.active);

    if (this.active) {
      // Remove any stale banner
      const old = document.getElementById('editModeBanner');
      if (old) old.remove();
      // Add clearly visible banner
      const banner = document.createElement('div');
      banner.id = 'editModeBanner';
      banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#2d2a26;color:#d4b87a;text-align:center;padding:8px;font-size:14px;font-family:sans-serif;letter-spacing:0.05em;';
      banner.textContent = '✎ 编辑模式已开启 — 点击文字进行编辑，点击图片更换URL，按 E 退出';
      document.body.prepend(banner);
      this.panel.classList.add('visible');
      this.decorate();
      this.showToast('编辑模式已开启 — 点击文字编辑，点击图片换URL，按 E 退出');
    } else {
      const banner = document.getElementById('editModeBanner');
      if (banner) banner.remove();
      this.panel.classList.remove('visible');
      this.undecorate();
      saveData();
      this.refreshCurrentView();
      this.showToast('已保存 ✓');
    }
  },

  refreshCurrentView() {
    const v = ViewManager.currentView;
    if (v === 'image-gallery') ImageGallery.init();
    if (v === 'video-gallery') VideoGallery.init();
    if (v === 'image-project' || v === 'video-project') {
      ViewManager.navigate('hall', { instant: true });
    }
  },

  saveAndRefresh() {
    if (this._activeInput) this.commitTextEdit(this._activeInput, this._activeTextEl);
    const ok = saveData();
    ImageGallery.init();
    VideoGallery.init();
    this.refreshCurrentView();
    if (this.active) this.decorate();
    if (ok) {
      getStorageInfo().then(info => {
        const lsKB = (info.lsUsed / 1024).toFixed(0);
        this.showToast(`已保存 ✓ — localStorage: ${lsKB}KB/5MB | IndexedDB: ${info.idbUsed}/${info.idbQuota}`);
      }).catch(() => {
        this.showToast('已保存 ✓ — 所有卡片已刷新');
      });
    }
  },

  decorate() {
    // Add CSS highlight classes to all editable elements
    document.querySelectorAll('[data-editable="text"]').forEach(el => {
      el.classList.add('editable-text');
    });
    document.querySelectorAll('[data-editable="image"]').forEach(el => {
      el.classList.add('editable-image');
    });
  },

  startTextEdit(el) {
    // Commit any previous edit first
    if (this._activeInput) this.commitTextEdit(this._activeInput, this._activeTextEl);
    // Store original text for cancel
    el.dataset.originalText = el.textContent.trim();
    // Create inline input
    const input = document.createElement('input');
    input.type = 'text';
    input.value = el.textContent.trim();
    input.className = 'inline-edit-input';
    // Replace content with input
    el.textContent = '';
    el.appendChild(input);
    this._activeInput = input;
    this._activeTextEl = el;
    input.focus();
    input.select();
    const commit = () => this.commitTextEdit(input, el);
    const cancel = () => this.cancelTextEdit(input, el);
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); commit(); }
      if (e.key === 'Escape') { e.preventDefault(); cancel(); }
    });
  },

  commitTextEdit(input, el) {
    const value = input.value.trim();
    if (input.parentNode === el) {
      el.textContent = value || el.dataset.originalText || '';
    }
    this._activeInput = null;
    this._activeTextEl = null;
    if (value) this.onTextEdited(el);
  },

  cancelTextEdit(input, el) {
    if (input.parentNode === el) {
      el.textContent = el.dataset.originalText || '';
    }
    this._activeInput = null;
    this._activeTextEl = null;
  },

  undecorate() {
    // Commit any active edit first
    if (this._activeInput) this.commitTextEdit(this._activeInput, this._activeTextEl);
    // Remove CSS highlight classes
    document.querySelectorAll('[data-editable]').forEach(el => {
      el.classList.remove('editable-text', 'editable-image');
    });
  },

  onTextEdited(el) {
    const { project, id, field, index, subfield } = el.dataset;
    // textarea uses .value, other elements use .textContent
    const value = (el.tagName === 'TEXTAREA' ? el.value : el.textContent).trim();
    if (!value) return;

    const list = project === 'image' ? imageProjects : videoProjects;
    const item = list.find(p => p.id === id);
    if (!item) return;

    if (index !== undefined && subfield) {
      item[field][parseInt(index)][subfield] = value;
    } else if (index !== undefined) {
      item[field][parseInt(index)] = value;
    } else {
      item[field] = value;
    }

    saveData();
    // Rebuild relevant gallery immediately
    if (project === 'image') ImageGallery.init();
    if (project === 'video') VideoGallery.init();
  },

  _editingImage: null,

  onImageClick(el) {
    this._editingImage = el;
    this.showImageModal(el);
  },

  showImageModal(el) {
    // Remove existing modal
    const existing = document.querySelector('.edit-image-modal');
    if (existing) existing.remove();

    const currentUrl = el.querySelector('img') ? el.querySelector('img').src : '';

    const modal = document.createElement('div');
    modal.className = 'edit-image-modal';
    modal.innerHTML = `
      <div class="edit-image-modal-bg"></div>
      <div class="edit-image-modal-card">
        <h3>更换图片</h3>
        <div class="edit-image-preview">
          <img src="${currentUrl}" alt="preview" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="edit-image-preview-empty" style="display:${currentUrl ? 'none' : 'flex'}">暂无图片</div>
        </div>
        <label class="edit-image-label">图片 URL</label>
        <input class="edit-image-input" type="text" value="${currentUrl}" placeholder="图片路径，如 images/my-art.jpg">
        <label class="edit-image-label">📁 推荐：将图片文件放入 images/ 文件夹后输入路径</label>
        <input class="edit-image-file" type="file" accept="image/*">
        <div class="edit-image-actions">
          <button class="edit-image-btn edit-image-btn-cancel">取消</button>
          <button class="edit-image-btn edit-image-btn-save">确认更换</button>
        </div>
        <p class="edit-image-hint">💡 推荐使用文件路径（images/xxx.jpg）— 部署后所有人都能看到。⚠ 上传文件仅在当前浏览器可见。</p>
      </div>
    `;
    document.body.appendChild(modal);

    const bg = modal.querySelector('.edit-image-modal-bg');
    const cancelBtn = modal.querySelector('.edit-image-btn-cancel');
    const saveBtn = modal.querySelector('.edit-image-btn-save');
    const urlInput = modal.querySelector('.edit-image-input');
    const fileInput = modal.querySelector('.edit-image-file');
    const previewImg = modal.querySelector('.edit-image-preview img');
    const previewEmpty = modal.querySelector('.edit-image-preview-empty');

    const close = () => { modal.remove(); this._editingImage = null; };

    bg.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);

    // Live preview as user types
    urlInput.addEventListener('input', () => {
      const val = urlInput.value.trim();
      if (val) {
        previewImg.src = val;
        previewImg.style.display = '';
        previewEmpty.style.display = 'none';
        previewImg.onerror = () => {
          previewImg.style.display = 'none';
          previewEmpty.style.display = 'flex';
          previewEmpty.textContent = 'URL 无法加载';
        };
      }
    });

    // File upload: convert to data URL
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target.result;
        urlInput.value = dataUrl;
        previewImg.src = dataUrl;
        previewImg.style.display = '';
        previewEmpty.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });

    // Save
    saveBtn.addEventListener('click', () => {
      const newUrl = urlInput.value.trim();
      if (!newUrl || newUrl === currentUrl) { close(); return; }

      this.applyImageUrl(el, newUrl, currentUrl);
      close();
    });

    // Enter key to save
    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const newUrl = urlInput.value.trim();
        if (!newUrl || newUrl === currentUrl) { close(); return; }
        this.applyImageUrl(el, newUrl, currentUrl);
        close();
      }
    });

    // Auto-focus URL input
    setTimeout(() => urlInput.focus(), 150);
  },

  applyImageUrl(el, newUrl, fallbackUrl) {
    const { project, id, field, index } = el.dataset;
    const list = project === 'image' ? imageProjects : videoProjects;
    const item = list.find(p => p.id === id);
    if (!item) { this.showToast('错误：找不到项目'); return; }

    // Add cache-buster only for external URLs, not for relative paths
    const isRelative = newUrl.startsWith('images/') || newUrl.startsWith('videos/') || (!newUrl.startsWith('http://') && !newUrl.startsWith('https://') && !newUrl.startsWith('data:'));
    const url = isRelative ? newUrl : newUrl + (newUrl.includes('?') ? '&' : '?') + 't=' + Date.now();

    if (index !== undefined) {
      item[field][parseInt(index)].img = newUrl; // store clean URL
    } else {
      item[field] = newUrl; // store clean URL
      if (project === 'image' && field === 'heroImage') item.image = newUrl;
      if (project === 'image' && field === 'image') item.heroImage = newUrl;
    }

    saveData();

    // ── Directly update ALL matching DOM elements FIRST ──
    if (project === 'image') {
      // Update photo card images directly
      document.querySelectorAll(`.photo-card[data-project-id="${id}"] img`).forEach(img => {
        img.src = url;
      });
      // Update gallery card wrapper images
      document.querySelectorAll(`.card-image-wrapper[data-id="${id}"] img`).forEach(img => {
        img.src = url;
      });
    }
    if (project === 'video') {
      document.querySelectorAll(`.film-strip[data-project-id="${id}"] img`).forEach(img => {
        img.src = url;
      });
    }

    // Also rebuild galleries
    if (project === 'image') ImageGallery.init();
    if (project === 'video') VideoGallery.init();

    // Update the hero image if on detail page
    const heroEl = document.getElementById('projectHeroImage');
    if (heroEl) {
      heroEl.innerHTML = `<img src="${url}" alt="${item.title || ''}" onerror="this.src='${fallbackUrl}'">`;
      heroEl.setAttribute('data-editable', 'image');
      heroEl.setAttribute('data-project', project);
      heroEl.setAttribute('data-id', item.id);
      heroEl.setAttribute('data-field', 'heroImage');
      if (this.active) heroEl.classList.add('editable-image');
    }

    if (this.active) this.decorate();
    this.showToast('图片已更新 ✓ — 已自动保存');
  },

  showVideoUrlModal(el) {
    const existing = document.querySelector('.edit-image-modal');
    if (existing) existing.remove();

    const { project, id } = el.dataset;
    const list = project === 'image' ? imageProjects : videoProjects;
    const item = list.find(p => p.id === id);
    if (!item) { this.showToast('错误：找不到项目'); return; }

    const currentUrl = item.videoUrl || '';

    const modal = document.createElement('div');
    modal.className = 'edit-image-modal';
    modal.innerHTML = `
      <div class="edit-image-modal-bg"></div>
      <div class="edit-image-modal-card">
        <h3>设置视频</h3>
        ${currentUrl ? `<div class="edit-image-preview"><video src="${currentUrl}" controls style="max-width:100%;max-height:200px;border-radius:4px;"></video></div>` : '<p style="color:#999;font-size:0.85rem;margin:12px 0;">当前未设置视频</p>'}
        <label class="edit-image-label">视频 URL</label>
        <input class="edit-image-input" type="text" value="${currentUrl}" placeholder="粘贴视频URL，如 videos/my-film.mp4 或网络视频地址">
        <label class="edit-image-label">📁 推荐：将视频文件放入 videos/ 文件夹后输入路径</label>
        <input class="edit-image-file" type="file" accept="video/*">
        <div class="edit-image-actions">
          <button class="edit-image-btn edit-image-btn-cancel">取消</button>
          <button class="edit-image-btn edit-image-btn-save">确认设置</button>
        </div>
        <p class="edit-image-hint">💡 推荐使用文件路径（videos/xxx.mp4）— 部署后所有人都能看到。⚠ 上传大文件仅在当前浏览器可见。</p>
      </div>
    `;
    document.body.appendChild(modal);

    const bg = modal.querySelector('.edit-image-modal-bg');
    const cancelBtn = modal.querySelector('.edit-image-btn-cancel');
    const saveBtn = modal.querySelector('.edit-image-btn-save');
    const urlInput = modal.querySelector('.edit-image-input');
    const fileInput = modal.querySelector('.edit-image-file');

    const close = () => { modal.remove(); };

    bg.addEventListener('click', close);
    cancelBtn.addEventListener('click', close);

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        urlInput.value = ev.target.result;
      };
      reader.readAsDataURL(file);
    });

    const applyVideoUrl = (newUrl) => {
      if (!newUrl || newUrl === currentUrl) { close(); return; }
      item.videoUrl = newUrl;
      saveData();

      const videoEl = document.getElementById('projectVideo');
      const placeholder = document.getElementById('videoPlaceholder');
      if (videoEl) {
        videoEl.querySelector('source').src = newUrl;
        videoEl.load();
        videoEl.style.display = '';
        videoEl.style.cursor = 'pointer';
        if (placeholder) placeholder.classList.add('hidden');
        const uploadBtn = document.getElementById('vpUploadBtn');
        if (uploadBtn) uploadBtn.style.display = 'none';
      }

      // Play button
      const playBtn = document.getElementById('videoPlayBtn');
      if (playBtn) {
        playBtn.classList.remove('playing');
        playBtn.textContent = '▶';
        playBtn.style.display = 'flex';
        playBtn.onclick = (e) => {
          e.stopPropagation();
          const ve = document.getElementById('projectVideo');
          if (!ve) return;
          if (ve.paused) { ve.play().catch(() => {}); playBtn.classList.add('playing'); }
          else { ve.pause(); playBtn.classList.remove('playing'); playBtn.textContent = '▶'; }
        };
      }

      // Click video to toggle play/pause
      if (videoEl) {
        videoEl.onclick = () => {
          if (videoEl.paused) {
            videoEl.play().catch(() => {});
            if (playBtn) playBtn.classList.add('playing');
          } else {
            videoEl.pause();
            if (playBtn) { playBtn.classList.remove('playing'); playBtn.textContent = '▶'; }
          }
        };
        videoEl.onplay = () => { if (playBtn) playBtn.classList.add('playing'); };
        videoEl.onpause = () => { if (playBtn) { playBtn.classList.remove('playing'); playBtn.textContent = '▶'; } };
        videoEl.onended = () => { if (playBtn) { playBtn.classList.remove('playing'); playBtn.textContent = '▶'; } };
      }

      // Show sound toggle
      const soundBtn = document.getElementById('videoSoundBtn');
      if (soundBtn) {
        soundBtn.classList.add('visible');
        soundBtn.textContent = '🔇';
        soundBtn.onclick = (e) => {
          e.stopPropagation();
          const ve = document.getElementById('projectVideo');
          if (!ve) return;
          if (ve.muted) { ve.muted = false; soundBtn.textContent = '🔊'; soundBtn.title = '静音'; }
          else { ve.muted = true; soundBtn.textContent = '🔇'; soundBtn.title = '取消静音'; }
        };
      }

      close();

      // Capture thumbnail using a visible video element
      captureVideoThumbnail(newUrl, (thumbnail) => {
        if (thumbnail) item.thumbnail = thumbnail;
        saveData();
        VideoGallery.init();
        if (this.active) this.decorate();
        this.showToast(thumbnail ? '视频已设置 ✓ — 首帧封面已生成' : '视频已设置 ✓');
      });
    };

    saveBtn.addEventListener('click', () => {
      applyVideoUrl(urlInput.value.trim());
    });

    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        applyVideoUrl(urlInput.value.trim());
      }
    });

    setTimeout(() => urlInput.focus(), 150);
  },

  createPanel() {
    const panel = document.createElement('div');
    panel.className = 'edit-panel';
    panel.id = 'editPanel';
    panel.innerHTML = `
      <div class="edit-panel-inner">
        <span class="edit-panel-title">✎ 编辑模式</span>
        <button class="edit-panel-btn edit-panel-btn-save" data-action="save">💾 保存</button>
        <button class="edit-panel-btn" data-action="add-image">+ 图片项目</button>
        <button class="edit-panel-btn" data-action="add-video">+ 视频项目</button>
        <button class="edit-panel-btn edit-panel-btn-export" data-action="export-data-json">📦 导出 data.json</button>
        <button class="edit-panel-btn" data-action="export">📥 完整备份</button>
        <button class="edit-panel-btn" data-action="import">📤 导入备份</button>
        <button class="edit-panel-btn edit-panel-btn-danger" data-action="reset">重置默认</button>
        <span class="edit-panel-hint">按 E 保存并退出 | 部署前先导出 data.json</span>
      </div>
    `;
    document.body.appendChild(panel);
    this.panel = panel;

    panel.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;

      const action = btn.dataset.action;
      if (action === 'save') this.saveAndRefresh();
      if (action === 'add-image') this.addImageProject();
      if (action === 'add-video') this.addVideoProject();
      if (action === 'reset') this.confirmReset();
      if (action === 'export') this.exportData();
      if (action === 'import') this.importData();
      if (action === 'export-data-json') this.exportDataJson();
    });
  },

  createEditButton() {
    const btn = document.createElement('button');
    btn.className = 'edit-toggle-btn';
    btn.textContent = '✎';
    btn.title = '编辑模式 (E)';
    btn.addEventListener('click', () => this.toggle());
    document.body.appendChild(btn);
  },

  addImageProject() {
    const id = 'project-' + Date.now();
    imageProjects.unshift({
      id, title: '新作品', titleEn: 'New Work', year: '2026', category: '新类别',
      image: 'images/placeholder-image.svg',
      heroImage: 'images/placeholder-image.svg',
      source: '点击这里编辑创作源头描述...',
      pathway: ['步骤1', '步骤2', '步骤3', '步骤4', '步骤5', '步骤6'],
      notes: ['点击这里编辑手记...'],
    });
    saveData();
    ImageGallery.init();
    if (Editor.active) Editor.decorate();
    this.showToast('新图片项目已添加 ✓ — 点击图片更换路径');
  },

  addVideoProject() {
    const id = 'vid-' + Date.now();
    videoProjects.unshift({
      id, title: '新视频', titleEn: 'New Video', year: '2026', category: '新类别',
      thumbnail: 'images/placeholder-video.svg', videoUrl: '',
      storyboards: [
        { img: 'images/placeholder-storyboard.svg', label: 'SCENE 01' },
        { img: 'images/placeholder-storyboard.svg', label: 'SCENE 02' },
      ],
      scriptText: '',
      breakdown: [
        { label: '创意概念', text: '点击编辑...' },
        { label: '视觉语言', text: '点击编辑...' },
      ],
    });
    saveData();
    VideoGallery.init();
    if (Editor.active) Editor.decorate();
    this.showToast('新视频项目已添加 ✓ — 点击胶片设置 videos/ 路径');
  },

  deleteProject(btn) {
    const { project, id } = btn.dataset;
    if (!confirm('确定要删除这个项目吗？')) return;
    const list = project === 'image' ? imageProjects : videoProjects;
    const idx = list.findIndex(p => p.id === id);
    if (idx === -1) return;
    list.splice(idx, 1);
    saveData();
    if (project === 'image') ImageGallery.init();
    else VideoGallery.init();
    this.refreshCurrentView();
    if (this.active) this.decorate();
    this.showToast('项目已删除 ✓');
  },

  deleteStoryboard(btn) {
    const { project, id, index } = btn.dataset;
    const list = project === 'image' ? imageProjects : videoProjects;
    const item = list.find(p => p.id === id);
    if (!item || !item.storyboards) return;
    const idx = parseInt(index);
    if (idx < 0 || idx >= item.storyboards.length) return;
    item.storyboards.splice(idx, 1);
    saveData();
    if (ViewManager.currentView === 'video-project') {
      VideoProjectDetail.open(item);
    }
    if (this.active) this.decorate();
    this.showToast('分镜已删除 ✓');
  },

  addStoryboard(btn) {
    const { project, id } = btn.dataset;
    const list = project === 'image' ? imageProjects : videoProjects;
    const item = list.find(p => p.id === id);
    if (!item) return;
    if (!item.storyboards) item.storyboards = [];
    item.storyboards.push({
      img: 'images/placeholder-storyboard.svg',
      label: 'SCENE ' + String(item.storyboards.length + 1).padStart(2, '0'),
    });
    saveData();
    if (ViewManager.currentView === 'video-project') {
      VideoProjectDetail.open(item);
    }
    if (this.active) this.decorate();
    this.showToast('分镜已添加 ✓');
  },

  confirmReset() {
    if (confirm('确定要重置所有内容为默认吗？你的编辑将丢失。\n\n建议先导出备份！')) {
      resetData();
      this.refreshCurrentView();
      if (Editor.active) Editor.decorate();
      this.showToast('已重置为默认内容 ✓');
    }
  },

  exportDataJson() {
    try {
      const data = {
        _meta: {
          version: 2,
          lastModified: new Date().toISOString(),
          description: '造梦档案馆项目数据 — 替换项目文件夹中的 data.json 和 data.js 后部署'
        },
        imageProjects,
        videoProjects
      };
      const json = JSON.stringify(data, null, 2);

      // Download data.json
      const blob1 = new Blob([json], { type: 'application/json' });
      const url1 = URL.createObjectURL(blob1);
      const a1 = document.createElement('a');
      a1.href = url1;
      a1.download = 'data.json';
      document.body.appendChild(a1);
      a1.click();
      a1.remove();
      URL.revokeObjectURL(url1);

      // Download data.js
      const jsContent = 'const EMBEDDED_DATA = ' + json + ';';
      const blob2 = new Blob([jsContent], { type: 'application/javascript' });
      const url2 = URL.createObjectURL(blob2);
      const a2 = document.createElement('a');
      a2.href = url2;
      a2.download = 'data.js';
      document.body.appendChild(a2);
      a2.click();
      a2.remove();
      URL.revokeObjectURL(url2);

      // Stats for toast
      const dataUrlCount = videoProjects.filter(p => p.videoUrl && p.videoUrl.startsWith('data:')).length;
      const dataUrlImages = imageProjects.filter(p => (p.image || '').startsWith('data:') || (p.heroImage || '').startsWith('data:')).length;
      let msg = `✅ data.json + data.js 已下载！图片:${imageProjects.length} 视频:${videoProjects.length}`;
      if (dataUrlCount > 0 || dataUrlImages > 0) {
        msg += ` | ⚠ 有 ${dataUrlCount + dataUrlImages} 个内嵌媒体`;
      }
      this.showToast(msg);

      setTimeout(() => {
        alert(
          '📦 两个文件已下载：data.json 和 data.js\n\n' +
          '1. 把两个文件都放入项目文件夹替换旧文件\n' +
          '2. data.js 确保 file:// 直接打开也能加载数据\n' +
          '3. data.json 为部署环境提供数据\n' +
          '4. 图片放 images/，视频放 videos/\n' +
          '5. 部署整个项目文件夹即可'
        );
      }, 800);
    } catch (e) {
      this.showToast('❌ 导出失败: ' + e.message);
    }
  },

  exportData() {
    try {
      const data = { _meta: { version: 2, lastModified: new Date().toISOString() }, imageProjects, videoProjects };
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const now = new Date();
      const stamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}-${String(now.getMinutes()).padStart(2,'0')}`;
      a.download = `dreamarchive_backup_${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      const totalProjects = imageProjects.length + videoProjects.length;
      const withVideo = videoProjects.filter(p => p.videoUrl && p.videoUrl.length > 0).length;
      this.showToast(`✅ 备份已下载！图片:${imageProjects.length} 视频:${videoProjects.length} 有视频:${withVideo}`);
    } catch (e) {
      this.showToast('❌ 导出失败: ' + e.message);
    }
  },

  importData() {
    // Create hidden file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.style.display = 'none';
    document.body.appendChild(input);

    input.addEventListener('change', () => {
      const file = input.files[0];
      input.remove();
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);

          // Validate and restore
          let restoredImages = 0, restoredVideos = 0;

          if (data.imageProjects && Array.isArray(data.imageProjects)) {
            // Backup current before overwriting
            const backupKey = STORAGE_KEY + '_before_import';
            try { localStorage.setItem(backupKey, JSON.stringify({ imageProjects, videoProjects })); } catch(_) {}
            imageProjects = data.imageProjects;
            restoredImages = imageProjects.length;
          }

          if (data.videoProjects && Array.isArray(data.videoProjects)) {
            videoProjects = data.videoProjects;
            restoredVideos = videoProjects.length;
          }

          if (restoredImages === 0 && restoredVideos === 0) {
            this.showToast('❌ 文件中没有找到有效的作品数据');
            return;
          }

          saveData();
          ImageGallery.init();
          VideoGallery.init();
          this.refreshCurrentView();
          if (this.active) this.decorate();
          this.showToast(`✅ 已恢复！图片:${restoredImages} 视频:${restoredVideos} — 导入前的数据已自动备份`);
        } catch (e) {
          this.showToast('❌ 文件解析失败: ' + e.message);
        }
      };
      reader.onerror = () => {
        this.showToast('❌ 文件读取失败');
      };
      reader.readAsText(file);
    });

    // Handle cancel
    input.addEventListener('cancel', () => { input.remove(); });

    input.click();
  },

  showToast(msg) {
    let toast = document.getElementById('editToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'editToast';
      toast.className = 'edit-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('visible'), 2500);
  },
};

// ─── Global Event Delegation ───────────────────────────────

function initNavigation() {
  document.addEventListener('click', (e) => {
    if (Editor.active) return;
    const target = e.target.closest('[data-target]');
    if (!target) return;
    ViewManager.navigate(target.dataset.target);
  });

  const videoPlaceholder = document.getElementById('videoPlaceholder');
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
      videoPlaceholder.classList.add('hidden');
    });
  }
}

// ─── Init ──────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load data with 10s timeout
    await Promise.race([
      initDataStore(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('数据加载超时')), 10000))
    ]);
  } catch(e) {
    console.error('Init error:', e);
    // Continue anyway — landing page must show
  }

  try {
    ViewManager.init();
    LandingPage.init();
    Parallax.init();
    initNavigation();
    Editor.init();
    document.getElementById('landing').classList.add('active');
    console.log('造梦档案馆 v99 loaded — images:', imageProjects.length, 'videos:', videoProjects.length);
  } catch(e) {
    console.error('UI init error:', e);
    // Force landing visible
    document.getElementById('landing').classList.add('active');
  }
});

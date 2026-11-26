// ---------- Edit these ----------
const MESSAGE = "click the bouquet";   // text under the bouquet
const SHOW_HEART = true;               // pixel heart after the message
const BOUQUET_SPIN = 0.45;             // how fast the whole bouquet turns
const GREETING = "Hello! Happy New Year, Ms. Gian Irish T. Celis. Here’s a message for you before the year ends.";
const LETTER = [
  { head: "From me to you", t: "Before the year ends, I just want to say thank you for everything you’ve done. I wasn’t really expecting that we’d be this close—to the point where we run to each other whenever things get heavy. Honestly, when I’m with you, I can let my guard down and let my walls down because I feel safe. Thank you for staying with me and for not getting tired, especially when I was at my lowest point in life. Thank you.", cast: "none" },
  { t: "You saved my life. The first time I started telling you about my problems and what was bothering me, I was on the verge of giving up. To be honest, I wasn’t sure at the time about opening up regarding my personal problems, but I had an intuition that I’d feel safe with you. It turned out I was right, and it was the best decision I ever made. You have no idea how much that moment meant to me because it changed my whole life. Not only did I find someone who listens and doesn’t judge me, but you also made me believe in God, made me want to have a close relationship with Him, and I hope that this will continue for a long time. I wonder what 2027 has in store for us", cast: "none" },
  { t: "Also, you know what makes you beautiful? Your soul, your kind heart, and the fact that you were able to influence me and others to be close to God. Don’t let anyone ruin your beautiful soul; you’re the kindest, bravest, purest, and sweetest person I’ve met. I’m really proud of you. Despite all the problems you went through, you still manage to smile and be kind to others. I know sometimes the world isn’t nice to you, but don’t let it ruin you.", cast: "girl" },
  { t: "Be proud of yourself because you were able to heal me in many ways, and not just that I was able to push myself to be better little by little. And maybe one day, when you finally achieve your dreams, you’ll be the happiest person on this planet. You know, seeing you win in life has been a part of my dream.", cast: "girl" },
  { t: "Don’t be too hard on yourself, okay? You don’t have to figure out everything. Take your time and follow God’s perfect timing. God will provide in His perfect timing, and all of our prayers will be answered one day. Keep praying and trust Him—that’s what you taught me. And I won’t get tired of putting you in my prayers. Always, even if we drift apart, I’ll always include you in my prayers, and not just you, your family as well.", cast: "both" },
  { t: "A lot happened this year and I’m glad I was able to protect what we have and now I hope that our bond becomes a lot stronger and deeper. Now I promise that I will try to learn and rely on myself and try to figure things out on my own, but if I can’t handle it anymore, I’ll run to you. Allow me to protect you from all the negativity and all the things that will hurt you.", cast: "both" },
  { t: "When the time comes and you need savings, let me save you the way you saved me. It’s a privilege to have someone like you in my life, and a blessing to have you be a part of it.", cast: "knights" },
  { t: "And lastly, I hope that I make things easier for you, just as you make things easier for me. I hope that I make you happy the way you make me happy. When things get messy and heavy for you, just run to me. If you’re having trouble trying to figure things out, we will figure it out together. I know how important your dreams and goals are; as always, I’ll be here to support you no matter what. No matter what happens, I won’t let anyone bring you down, and I’ll protect and support you. Irish, thank you for coming into my life. You will always be the greatest gift and blessing that God has given me.", cast: "knights" }
];
const VERSES = [
  { ref: "Mark 11:24", t: "“Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.”" },
  { ref: "Isaiah 41:10", t: "“So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.”" },
  { ref: "Galatians 5:22–23", t: "“But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law”" },
  { ref: "Galatians 6:2", t: "“Carry each other’s burdens, and in this way you will fulfill the law of Christ.”" }
];
const VERSE_HINT = "Four verses for you. Tap one to open it.";
const PRAYER = "Please, God, protect this girl from everything that may hurt her.\nKeep away the people who bring tears to her eyes and the moments that make her lose hope.\nLet her heart know what peace feels like. Let her smile stay a little longer.\nShe deserves gentle days, honest love, and a life filled with happiness.\nAnd if life ever becomes too heavy, please give her the strength to keep going.\nShe deserves every beautiful thing this life has to offer, not the pain she never asked for.";
const NEWYEAR = "Happy New Year! May your 2027 be filled with blessings and guidance from God.";
const QUESTION = "Would you like to renew your contract for another year? For the year 2027?\n\nyes or yes?";
const INTRO = "First, let me start with a short story on how this all started.";
const PAGES = [
  { t: "It all began through a streak. A girl named Irish", show: "girl" },
  { t: "Decided to follow a guy named Stan on his TikTok account and ask for a streak.", show: "stan" },
  { t: "They became close friends, not knowing that their bond would grow deeper later on. Neither of them was the type of person who usually opens up or talks about their personal problems—until Irish decided to share hers with Stan. That’s where everything began. They started opening up to each other about their own struggles, not realizing they would become each other's safe space." },
  { t: "As time went on, they grew much closer until September arrived and Stan reached his lowest point in life. Irish didn’t leave him; she stayed by his side until he felt okay again. Afterward, Stan did something he had promised himself he wouldn’t do—he hurt Irish emotionally. Because of his selfishness, he didn’t think about how she would feel. Even though he apologized and explained his side, he still hurt her, yet Irish forgave him anyway.", show: "bunch" },
  { t: "Then came November, bringing an unexpected turn of events where everything Stan had built almost collapsed. Someone told Irish how Stan felt, even though Stan wasn’t even sure of his own feelings yet. Still, he gathered his courage, talked to Irish, and made everything clear. He thought everything was going to end, but it didn’t. After hearing Stan’s side, everything became clear for both of them—and they became even closer than before." }
];
const WALL_URI = "images/wall.webp";
const BG_URI = "images/background.webp";
// --------------------------------

const $ = s => document.querySelector(s);
const FPS = 30, TILT = 0.30, CAM_DIST = 4.0, PIVOT_Y = 0.2;
const OUTLINE = "#1a0f2b";

const C = h => {
  const n = parseInt(h.slice(1), 16);
  return ((255 << 24) | ((n & 255) << 16) | (((n >> 8) & 255) << 8) | ((n >> 16) & 255)) >>> 0;
};
const P = arr => arr.map(C);

// palettes are listed dark -> light
const STEM  = P(["#145233", "#1f7a45", "#3fb35a", "#7ee081"]);
const LEAF  = P(["#145233", "#1f7a45", "#3fb35a", "#7ee081"]);
const PAPER = P(["#cfae83", "#e6cba0", "#f1d9b5", "#fff4e0"]);
const RIBBN = P(["#8f2150", "#c4366a", "#ff5d8f", "#ff9fbe"]);

const GOLD_H  = ["#a86a00", "#f2b705", "#fff08a"];
const BROWN_H = ["#4a2410", "#8a4b1b", "#c98a3a"];
const DT_H = [
  { p: ["#aab4d8", "#dfe5f5", "#ffffff"], c: GOLD_H,  n: 10 }, // white
  { p: ["#c9477f", "#ff8fc0", "#ffd1e6"], c: GOLD_H,  n: 12 }, // pink
  { p: ["#d49a12", "#ffd93b", "#fff3a6"], c: BROWN_H, n: 11 }, // yellow
  { p: ["#3f69c9", "#7db4ff", "#cfe6ff"], c: GOLD_H,  n: 10 }, // blue
  { p: ["#6b49b8", "#b08cff", "#e5d1ff"], c: GOLD_H,  n: 12 }, // purple
  { p: ["#c4561a", "#ff9a3c", "#ffd2a1"], c: BROWN_H, n: 11 }, // orange
  { p: ["#b8383a", "#ff6f61", "#ffc2b8"], c: GOLD_H,  n: 10 }, // coral
];
const DAISY_TYPES = DT_H.map(d => ({ petals: P(d.p), center: P(d.c), n: d.n }));

const BG_BANDS = P(["#1b1233", "#22173f", "#2a1c4a", "#33225a", "#3d2a6b", "#4a3480"]);
const HEART_COLS = P(["#ff5d8f", "#ff8fc0", "#ffd1e6", "#ffb3d1"]);
const BURST_COLS = P(["#ff5d8f", "#ff8fc0", "#ffd1e6", "#ffffff", "#fff3a6", "#ffd93b"]);
const STAR_COLS = P(["#6b5aa8", "#ffd1e6", "#ffffff"]);
const MSG_COLORS = ["#ff5d8f", "#ff8fc0", "#ffd1e6", "#fff3a6", "#ffd1e6", "#ff8fc0"];

const HEART_SPRITE = ["##.##", "#####", ".###.", "..#.."];

const _L = [-0.45, 0.6, 0.66];
const _ln = Math.hypot(..._L);
const [LX, LY, LZ] = _L.map(v => v / _ln);

// ---------- seeded random so the bouquet is the same every load ----------
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(7);
const uniform = (a, b) => a + (b - a) * rand();

const norm = v => { const m = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / m, v[1] / m, v[2] / m]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const add = (p, d, k) => [p[0] + d[0] * k, p[1] + d[1] * k, p[2] + d[2] * k];

// ---------- scene ----------
// pts: [x, y, z, nx, ny, nz, palette, tone, twoSided, thick, group, hash]
function buildScene() {
  const pts = [];
  const neck = [0, -0.12, 0];
  const Cc = [0, 0.12, 0], D = 0.64, N = 13;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const flowers = [];

  for (let i = 0; i < N; i++) {
    const el = (88 - 60 * Math.sqrt(i / (N - 1))) * Math.PI / 180;
    const az = i * golden;
    const d = [Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az)];
    const pos = add(Cc, d, D * uniform(0.92, 1.05));
    const axis = norm(d);
    const base = add(pos, axis, -0.03);
    for (let j = 0; j < 90; j++) {
      const t = j / 89;
      pts.push([base[0] + (neck[0] - base[0]) * t, base[1] + (neck[1] - base[1]) * t,
                base[2] + (neck[2] - base[2]) * t, axis[0], 0, axis[2], STEM, -0.1, true, true]);
    }
    flowers.push({
      pos, type: DAISY_TYPES[i % DAISY_TYPES.length],
      R: uniform(0.15, 0.18), phase: uniform(0, 6.28),
      spin: uniform(0.8, 1.5) * (i % 2 ? 1 : -1),
    });
  }

  // leaves
  for (let i = 0; i < 8; i++) {
    const a = (i + 0.4) / 8 * 2 * Math.PI, c = Math.cos(a), s = Math.sin(a);
    const base = [0.26 * c, 0.30, 0.26 * s];
    const d = norm([c, 0.15, s]);
    const side = [-s, 0, c];
    const n = norm(cross(side, d));
    const L = 0.30, W = 0.07;
    for (let ti = 0; ti < 40; ti++) {
      const t = ti / 39;
      for (let wi = -8; wi <= 8; wi++) {
        const w = wi / 8, curl = 0.025 * w * w;
        const sw = W * Math.sin(Math.PI * t) * w;
        pts.push([
          base[0] + d[0] * L * t + side[0] * sw + n[0] * curl,
          base[1] + d[1] * L * t - 0.10 * t * t + n[1] * curl,
          base[2] + d[2] * L * t + side[2] * sw + n[2] * curl,
          n[0], n[1], n[2], LEAF, wi === 0 ? -0.3 : 0, true, false]);
      }
    }
  }

  // paper cone
  const y0 = -0.20, y1 = 0.30, r0 = 0.06, r1 = 0.36;
  const k = (r1 - r0) / (y1 - y0);
  const rings = 70;
  for (let i = 0; i < rings; i++) {
    const t = i / (rings - 1);
    const r = r0 + (r1 - r0) * t;
    const count = Math.max(14, Math.trunc(800 * r));
    for (let j = 0; j < count; j++) {
      const ph = (j + rand()) / count * 2 * Math.PI;
      const c = Math.cos(ph), s = Math.sin(ph);
      let y = y0 + (y1 - y0) * t;
      if (t > 0.92) y += 0.03 * Math.sin(9 * ph);
      const fold = 0.3 * (Math.abs(Math.sin(5 * ph)) - 0.6);
      const nn = norm([c, -k, s]);
      pts.push([r * c, y, r * s, nn[0], nn[1], nn[2], PAPER, fold, false, false]);
    }
  }

  // stems poking out of the bottom
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * 2 * Math.PI;
    const sx = 0.025 * Math.cos(a), sz = 0.025 * Math.sin(a);
    for (let j = 0; j < 60; j++) {
      const t = j / 59;
      pts.push([sx * (1 + 1.2 * t), -0.20 - 0.30 * t, sz * (1 + 1.2 * t),
                Math.cos(a), 0, Math.sin(a), STEM, -0.1, true, true]);
    }
  }

  // ribbon + bow
  const by = -0.12;
  const br = r0 + k * (by - y0) + 0.01;
  for (let j = 0; j < 220; j++) {
    const ph = j / 220 * 2 * Math.PI;
    for (const dy of [-0.02, -0.01, 0, 0.01, 0.02]) {
      pts.push([br * Math.cos(ph), by + dy, br * Math.sin(ph),
                Math.cos(ph), 0, Math.sin(ph), RIBBN, 0, false, false]);
    }
  }
  const knot = [0, by, br + 0.01];
  for (const side of [-1, 1]) {
    for (let j = 0; j < 90; j++) {
      const a = j / 90 * 2 * Math.PI;
      const lx = side * (0.07 + 0.07 * Math.cos(a));
      const ly = 0.04 * Math.sin(a) + 0.02 * (0.07 + 0.07 * Math.cos(a)) / 0.14;
      for (const fill of [1.0, 0.85, 0.7, 0.55, 0.4, 0.25]) {
        pts.push([knot[0] + lx * fill, knot[1] + ly * fill, knot[2] + 0.01,
                  side * 0.3, 0.2, 0.93, RIBBN, 0.1, true, false]);
      }
    }
    for (let j = 0; j < 40; j++) {
      const t = j / 39;
      for (const w of [-0.008, 0, 0.008]) {
        pts.push([knot[0] + side * 0.06 * t + w, knot[1] - 0.15 * t, knot[2] + 0.015,
                  side * 0.2, 0, 0.98, RIBBN, -0.05 + 0.05 * Math.sin(t * 9), true, false]);
      }
    }
  }
  for (const dx of [-0.015, -0.0075, 0, 0.0075, 0.015]) {
    for (const dy of [-0.015, -0.0075, 0, 0.0075, 0.015]) {
      pts.push([dx, by + dy, knot[2] + 0.02, 0, 0, 1, RIBBN, -0.15, true, false]);
    }
  }

  // twinkles floating around the bouquet
  const sparkles = [];
  for (let i = 0; i < 26; i++) {
    const a = rand() * 2 * Math.PI, rr = uniform(0.8, 1.05);
    sparkles.push([rr * Math.cos(a), uniform(-0.3, 1.0), rr * Math.sin(a), uniform(0, 6.28), uniform(1.5, 4.0)]);
  }
  return { pts, flowers, sparkles };
}

const scene = buildScene();
// tag the wrapping paper (group 1) and ribbon (group 2) so they can dissolve when the bouquet opens
{
  const hh = mulberry32(99);
  for (const p of scene.pts) p.push(p[6] === PAPER ? 1 : p[6] === RIBBN ? 2 : 0, hh());
}

// background stars + rising hearts (screen space, 0..1)
const stars = Array.from({ length: 50 }, () => [rand(), rand() * 0.9, uniform(0, 6.28), uniform(1, 3)]);
const hearts = [];
function updateHearts(dt) {
  while (hearts.length < 9) {
    hearts.push([Math.random(), 1 + Math.random() * 0.6, 0.05 + Math.random() * 0.06,
                 Math.random() * 6.28, HEART_COLS[Math.floor(Math.random() * HEART_COLS.length)]]);
  }
  for (const h of hearts) {
    h[1] -= h[2] * dt;
    if (h[1] < -0.08) {
      h[0] = Math.random(); h[1] = 1.05;
      h[4] = HEART_COLS[Math.floor(Math.random() * HEART_COLS.length)];
    }
  }
}

// ---------- app state ----------
// bouquet -> opening -> greeting -> intro -> clock -> story
let state = "bouquet";
let openP = 0, openStart = 0, curT = 0;
const parts = []; // burst particles: [x, y, vx, vy, color, life, isHeart]

// ---------- pixel buffer ----------
const canvas = $("#c");
const ctx = canvas.getContext("2d");
const msgEl = $("#msg");
const hitBtn = $("#hit");
let PX, W, H, img, buf, zbuf, obj, bg, scale, cx, cy;

function resize() {
  const iw = window.innerWidth, ih = window.innerHeight;
  PX = Math.max(3, Math.round(Math.min(ih, iw * 0.9) / 110));
  W = Math.floor(iw / PX);
  H = Math.floor(ih / PX);
  canvas.width = W; canvas.height = H;
  canvas.style.width = W * PX + "px";
  canvas.style.height = H * PX + "px";
  img = ctx.createImageData(W, H);
  buf = new Uint32Array(img.data.buffer);
  zbuf = new Float32Array(W * H);
  obj = new Uint8Array(W * H);

  // banded, dithered night-sky background
  bg = new Uint32Array(W * H);
  const B = BG_BANDS.length;
  for (let y = 0; y < H; y++) {
    const f = (y / H) * B;
    let idx = Math.min(B - 1, Math.floor(f));
    const frac = f - Math.floor(f);
    for (let x = 0; x < W; x++) {
      let b = idx;
      if (frac > 0.8 && idx < B - 1 && ((x + y) & 1) === 0) b = idx + 1;
      bg[y * W + x] = BG_BANDS[b];
    }
  }
  scale = Math.min(H * 0.84 / 1.6, W * 0.92 / 1.95);
  cx = W / 2;
  cy = H * 0.45;
  buildMessage();
  placeHit();
  resizeField();
  if (wallOn) sizeWall();
}

// clickable area over the bouquet
function placeHit() {
  const left = (window.innerWidth - W * PX) / 2;
  const w = scale * PX * 1.9, h = scale * PX * 2.0;
  hitBtn.style.left = left + cx * PX - w / 2 + "px";
  hitBtn.style.top = cy * PX - h / 2 + "px";
  hitBtn.style.width = w + "px";
  hitBtn.style.height = h + "px";
}

// ---------- message under the bouquet ----------
let msgSpans = [];
let lastShift = -1;
function buildMessage() {
  const chars = [...MESSAGE];
  const count = chars.length + (SHOW_HEART ? 2 : 0);
  let fs = Math.max(8, Math.min(PX * 8, Math.floor(window.innerWidth * 0.9 / count)));
  const u = fs / 8;
  msgEl.style.fontSize = fs + "px";
  msgEl.style.textShadow = `${u}px ${u}px 0 ${OUTLINE}`;
  msgEl.style.bottom = PX * 5 + "px";
  msgEl.innerHTML = "";
  msgSpans = chars.map(ch => {
    const s = document.createElement("span");
    s.textContent = ch;
    msgEl.appendChild(s);
    return s;
  });
  if (SHOW_HEART) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 7 6");
    svg.setAttribute("shape-rendering", "crispEdges");
    svg.style.width = 7 * u + "px";
    svg.style.height = 6 * u + "px";
    svg.style.marginLeft = 2 * u + "px";
    svg.style.filter = `drop-shadow(${u}px ${u}px 0 ${OUTLINE})`;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M1 0h2v1h-2z M4 0h2v1h-2z M0 1h7v2h-7z M1 3h5v1h-5z M2 4h3v1h-3z M3 5h1v1h-1z");
    path.setAttribute("fill", "#ff5d8f");
    svg.appendChild(path);
    msgEl.appendChild(svg);
  }
  lastShift = -1;
}
function updateMessage(t) {
  const shift = Math.floor(t * 6);
  if (shift === lastShift) return;
  lastShift = shift;
  msgSpans.forEach((s, i) => { s.style.color = MSG_COLORS[(i + shift) % MSG_COLORS.length]; });
}

// ---------- bouquet rendering ----------
function plot(x, y, z, color, isObj) {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = y * W + x;
  if (z > zbuf[i]) { zbuf[i] = z; buf[i] = color; obj[i] = isObj ? 1 : 0; }
}

function burst() {
  const ox = cx, oy = cy - scale * 0.35;
  for (let i = 0; i < 80; i++) {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
    const sp = (0.35 + Math.random() * 0.9) * scale;
    parts.push([ox, oy, Math.cos(a) * sp, Math.sin(a) * sp, BURST_COLS[Math.floor(Math.random() * BURST_COLS.length)], 1.6 + Math.random() * 1.6, Math.random() < 0.3]);
  }
}

function render(t, dt) {
  buf.set(bg);
  zbuf.fill(-1e9);
  obj.fill(0);
  const e = openP;

  // twinkling stars
  for (const [fx, fy, ph, sp] of stars) {
    const x = Math.floor(fx * W), y = Math.floor(fy * H);
    const v = Math.sin(t * sp + ph);
    if (v > 0.85) {
      plot(x, y, -60, STAR_COLS[2], false);
      plot(x - 1, y, -60, STAR_COLS[1], false); plot(x + 1, y, -60, STAR_COLS[1], false);
      plot(x, y - 1, -60, STAR_COLS[1], false); plot(x, y + 1, -60, STAR_COLS[1], false);
    } else if (v > 0.2) plot(x, y, -60, STAR_COLS[1], false);
    else plot(x, y, -60, STAR_COLS[0], false);
  }

  // rising pixel hearts
  for (const [fx, fy, , phase, col] of hearts) {
    const x = Math.floor(fx * W + Math.sin(t * 1.4 + phase) * 3);
    const y = Math.floor(fy * H);
    for (let r = 0; r < HEART_SPRITE.length; r++)
      for (let c = 0; c < 5; c++)
        if (HEART_SPRITE[r][c] === "#") plot(x + c, y + r, -55, col, false);
  }

  const ang = t * BOUQUET_SPIN;
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const ct = Math.cos(TILT), st = Math.sin(TILT);
  const bob = Math.sin(t * 2.2) * 0.014 + e * 0.05;
  const sc = scale * (1 + 0.12 * e);

  function proj(x, y, z) {
    const xr = x * ca - z * sa;
    const zr = x * sa + z * ca;
    const yp = y - PIVOT_Y + bob;
    const yt = yp * ct - zr * st;
    const zt = yp * st + zr * ct;
    const f = CAM_DIST / (CAM_DIST - zt);
    return [cx + xr * f * sc, cy - yt * f * sc, zt, f];
  }

  // stems, leaves, paper, ribbon
  for (const [x, y, z, nx, ny, nz, pal, tone, two, thick, grp, hs] of scene.pts) {
    let X = x, Y = y, Z = z;
    if (grp) {
      if (hs < e) continue; // wrapping dissolves away as the bouquet opens
      const k = 1 + 0.55 * e;
      X *= k; Z *= k; Y -= 0.22 * e * (1 + hs);
    }
    const [fx, fy, zt] = proj(X, Y, Z);
    const nxr = nx * ca - nz * sa;
    const nzr = nx * sa + nz * ca;
    const nyt = ny * ct - nzr * st;
    const nzt = ny * st + nzr * ct;
    let dot = nxr * LX + nyt * LY + nzt * LZ;
    if (two && dot < 0) dot = -dot * 0.55;
    const b = Math.min(0.999, Math.max(0, 0.25 + 0.75 * Math.max(0, dot) + tone));
    const color = pal[Math.floor(b * pal.length)];
    const px = Math.floor(fx), py = Math.floor(fy);
    plot(px, py, zt, color, true);
    if (thick) plot(px + 1, py, zt, color, true);
  }

  // spinning daisies (they swell and spin faster when the bouquet opens)
  for (const fl of scene.flowers) {
    const [fx, fy, zt, f] = proj(fl.pos[0], fl.pos[1], fl.pos[2]);
    const R = fl.R * (1 + 0.5 * e) * f * sc;
    const dim = -0.3 * (1 - Math.min(1, Math.max(0, (zt + 0.6) / 1.2)));
    const rot = fl.phase + t * fl.spin * (1 + 2.5 * e);
    const { petals, center, n } = fl.type;
    for (let row = Math.floor(fy - R) - 1; row <= Math.ceil(fy + R) + 1; row++) {
      const dy = (row + 0.5 - fy) / R;
      for (let col = Math.floor(fx - R) - 1; col <= Math.ceil(fx + R) + 1; col++) {
        const dx = (col + 0.5 - fx) / R;
        const s = Math.hypot(dx, dy);
        if (s > 1) continue;
        if (s < 0.30) {
          let color;
          if (s > 0.24) color = center[0];
          else {
            const b = 0.55 - 0.35 * dx - 0.35 * dy + dim;
            color = center[b < 0.35 ? 0 : b < 0.65 ? 1 : 2];
          }
          plot(col, row, zt + 0.06, color, true);
          continue;
        }
        const ph = Math.atan2(dy, dx);
        const l = Math.abs(Math.cos(n * (ph + rot) / 2));
        const reach = 0.42 + 0.58 * Math.pow(l, 0.8);
        if (s > reach) continue;
        const b = 0.30 + 0.45 * s + 0.28 * (l - 0.5) - 0.16 * dx - 0.16 * dy + dim;
        plot(col, row, zt + 0.04 * (1 - s), petals[b < 0.42 ? 0 : b < 0.70 ? 1 : 2], true);
      }
    }
  }

  // sparkles
  for (const [x, y, z, phase, speed] of scene.sparkles) {
    const [fx, fy, zt] = proj(x, y, z);
    const px = Math.floor(fx), py = Math.floor(fy);
    const tw = Math.sin(t * speed + phase);
    if (tw > 0.8) {
      plot(px, py, zt, STAR_COLS[2], false);
      plot(px - 1, py, zt, STAR_COLS[1], false); plot(px + 1, py, zt, STAR_COLS[1], false);
      plot(px, py - 1, zt, STAR_COLS[1], false); plot(px, py + 1, zt, STAR_COLS[1], false);
    } else if (tw > 0.3) plot(px, py, zt, STAR_COLS[1], false);
  }

  // burst of hearts and petals
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p[5] -= dt;
    if (p[5] <= 0) { parts.splice(i, 1); continue; }
    p[3] += scale * 0.9 * dt;
    p[0] += p[2] * dt; p[1] += p[3] * dt;
    const x = Math.floor(p[0]), y = Math.floor(p[1]);
    if (p[6]) {
      for (let r = 0; r < HEART_SPRITE.length; r++)
        for (let c = 0; c < 5; c++)
          if (HEART_SPRITE[r][c] === "#") plot(x + c, y + r, 90, p[4], false);
    } else {
      plot(x, y, 90, p[4], false); plot(x + 1, y, 90, p[4], false);
      plot(x, y + 1, 90, p[4], false); plot(x + 1, y + 1, 90, p[4], false);
    }
  }

  // pixel-art outline around everything solid
  const OUT = C(OUTLINE);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      if (obj[i]) continue;
      if ((x > 0 && obj[i - 1]) || (x < W - 1 && obj[i + 1]) ||
          (y > 0 && obj[i - W]) || (y < H - 1 && obj[i + W])) buf[i] = OUT;
    }
  }
}

// ---------- dialog box with typewriter ----------
const wrap = $("#wrap"), box = $("#box"), hd = $("#hd"), txt = $("#txt"), btn = $("#btn"), btn2 = $("#btn2"), vs = $("#vs");
let typer = null, skipFn = null, btnHandler = null, btn2Handler = null, segs = [];

function segment(text) {
  const out = [];
  const re = /(Ms\. Gian Irish T\. Celis|Irish|Stan)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push([text.slice(last, m.index), ""]);
    out.push([m[0], m[0].startsWith("Ms.") ? "name" : m[0].toLowerCase()]);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push([text.slice(last), ""]);
  return out;
}
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const span = (t, c) => c ? `<span class="${c}">${esc(t)}</span>` : esc(t);
function renderText(n) {
  let left = n, on = "", off = "";
  for (const [t, c] of segs) {
    const k = Math.max(0, Math.min(t.length, left));
    left -= k;
    if (k) on += span(t.slice(0, k), c);
    if (k < t.length) off += span(t.slice(k), c);
  }
  txt.innerHTML = on + '<span id="cur"></span><span class="off">' + off + "</span>";
  if (box.classList.contains("letter")) {
    const c = $("#cur");
    if (c && c.offsetTop + 36 > txt.scrollTop + txt.clientHeight) txt.scrollTop = c.offsetTop + 36 - txt.clientHeight;
  }
}
function fitText() {
  if (!wrap.classList.contains("top")) { txt.style.fontSize = ""; return; }
  let s = 30;
  txt.style.fontSize = s + "px";
  const min = box.classList.contains("letter") ? 18 : 14;
  while (s > min && txt.scrollHeight > txt.clientHeight + 1) { s -= 1; txt.style.fontSize = s + "px"; }
}

function say(text, opt) {
  clearInterval(typer);
  wrap.hidden = false;
  wrap.className = opt.mode;
  box.className = opt.cls || "";
  hd.hidden = !opt.head;
  hd.textContent = opt.head || "";
  if (!opt.keep) { box.style.animation = "none"; void box.offsetWidth; box.style.animation = ""; }
  vs.hidden = !opt.verses;
  segs = segment(text);
  const total = segs.reduce((a, s) => a + s[0].length, 0);
  btn.textContent = opt.button || "";
  btn.dataset.arrow = opt.arrow === false ? "0" : "1";
  btn.style.visibility = "hidden";
  btnHandler = opt.onButton || null;
  btn2.textContent = opt.button2 || ""; btn2.hidden = !opt.button2; btn2.style.visibility = "hidden"; btn2Handler = opt.onButton2 || null;
  renderText(0);
  fitText();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitText);
  let n = 0, done = false;
  const finish = () => {
    if (done) return;
    done = true; clearInterval(typer); typer = null; skipFn = null;
    renderText(total);
    if (opt.button) { btn.style.visibility = "visible"; if (!opt.keep) btn.focus({ preventScroll: true }); }
    if (opt.button2) btn2.style.visibility = "visible";
    if (opt.onDone) opt.onDone();
  };
  const pauses = (opt.pauses || []).map(p => ({ at: p.at, run: p.run, fired: false }));
  const resume = () => { if (!done) typer = setInterval(step, 26); };
  const hold = pz => { clearInterval(typer); typer = null; pz.fired = true; n = pz.at; renderText(n); pz.run(resume); };
  const step = () => {
    n += 2;
    const pz = pauses.find(p => !p.fired && n >= p.at);
    if (pz) { hold(pz); return; }
    renderText(n);
    if (n >= total) finish();
  };
  skipFn = () => {
    const pz = pauses.find(p => !p.fired);
    if (pz && typer) hold(pz); else finish();
  };
  typer = setInterval(step, 26);
}
box.addEventListener("click", () => { if (skipFn) skipFn(); });
btn.addEventListener("click", e => { e.stopPropagation(); if (btnHandler) btnHandler(); });
btn2.addEventListener("click", e => { e.stopPropagation(); if (btn2Handler) btn2Handler(); });


// ---------- background music (starts from the first tap, loops quietly, can be muted) ----------
const MUSIC_SRC = "music.mp3";
const MUSIC_VOL = 0.35;
const bgm = new Audio(MUSIC_SRC);
bgm.loop = true; bgm.preload = "auto"; bgm.volume = 0;
const muteBtn = $("#mute");
let musicWanted = true, musicStarted = false, fadeT = null;
function paintMute() {
  muteBtn.classList.toggle("off", !musicWanted);
  muteBtn.setAttribute("aria-label", musicWanted ? "Mute music" : "Play music");
}
function fadeTo(v, ms) {
  clearInterval(fadeT);
  const v0 = bgm.volume, t0 = performance.now();
  fadeT = setInterval(() => {
    const k = Math.min(1, (performance.now() - t0) / ms);
    bgm.volume = Math.max(0, Math.min(1, v0 + (v - v0) * k));
    if (k >= 1) { clearInterval(fadeT); if (v === 0) bgm.pause(); }
  }, 50);
}
function startMusic() {
  muteBtn.hidden = false;
  if (!musicWanted) { paintMute(); return; }
  if (!bgm.paused) { fadeTo(MUSIC_VOL, 800); paintMute(); return; }
  const p = bgm.play();
  musicStarted = true;
  if (p && p.then) p.then(() => { fadeTo(MUSIC_VOL, 2500); }).catch(() => { musicWanted = false; paintMute(); });
  paintMute();
}
muteBtn.addEventListener("click", () => {
  if (musicWanted && !bgm.paused) { musicWanted = false; fadeTo(0, 400); paintMute(); }
  else { musicWanted = true; startMusic(); }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) { if (!bgm.paused) bgm.pause(); }
  else if (musicWanted && musicStarted) { bgm.play().then(() => fadeTo(MUSIC_VOL, 800)).catch(() => {}); }
});

// ---------- flow: bouquet -> greeting -> intro ----------
hitBtn.addEventListener("click", () => {
  if (state !== "bouquet") return;
  startMusic();
  state = "opening";
  openStart = curT;
  hitBtn.hidden = true;
  msgEl.classList.add("gone");
  burst();
});
function showGreeting() {
  say(GREETING, { mode: "center", button: "OPEN FOR MORE", onButton: showIntro });
}
function showIntro() {
  state = "intro";
  say(INTRO, { mode: "center", onDone: () => setTimeout(startClock, 2000) });
}

// ---------- pixel clock that rewinds ----------
const clockEl = $("#clock"), clk = $("#clk"), kctx = clk.getContext("2d"), rw = $("#rw"), fadeEl = $("#fade");
const KS = 72, KC = 36, CLOCK_DUR = 5.2;
clk.width = KS; clk.height = KS;
let clockStart = 0;
const face = document.createElement("canvas");
face.width = KS; face.height = KS;
{
  const g = face.getContext("2d");
  for (let y = 0; y < KS; y++) for (let x = 0; x < KS; x++) {
    const d = Math.hypot(x - KC + 0.5, y - KC + 0.5);
    if (d > 31) continue;
    g.fillStyle = d > 29 ? "#ff5d8f" : d > 27.5 ? OUTLINE : (d > 24 && ((x + y) & 1)) ? "#33225a" : "#2a1c4a";
    g.fillRect(x, y, 1, 1);
  }
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * 2 * Math.PI, big = i % 3 === 0;
    const r0 = big ? 21 : 23.5, r1 = 26;
    kline(g, KC + Math.sin(a) * r0, KC - Math.cos(a) * r0, KC + Math.sin(a) * r1, KC - Math.cos(a) * r1, big ? "#fff3a6" : "#ffd1e6", big ? 2 : 1);
  }
}
function kline(g, x0, y0, x1, y1, c, th) {
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1, dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  g.fillStyle = c;
  for (;;) {
    g.fillRect(x0, y0, th, th);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}
function clockFrame(now) {
  const ct = (now - clockStart) / 1000;
  const g = kctx;
  g.clearRect(0, 0, KS, KS);
  g.drawImage(face, 0, 0);
  const w = 3 + 20 * Math.pow(ct / CLOCK_DUR, 2);
  const ang = -(3 * ct + 20 * Math.pow(ct, 3) / (3 * CLOCK_DUR * CLOCK_DUR));
  const hand = (a, L, c, th) => kline(g, KC, KC, KC + Math.sin(a) * L, KC - Math.cos(a) * L, c, th);
  // ghost trail behind the minute hand (previous positions, since time runs backwards)
  const trail = ["#c4366a", "#8f2150", "#5a1a46", "#3a1a4a"];
  for (let k = trail.length; k >= 1; k--) hand(ang + k * 0.11 * (w / 8), 22, trail[k - 1], 1);
  hand(ang / 12, 14, "#ffd1e6", 3);
  hand(ang, 22, "#ffffff", 2);
  g.fillStyle = "#ff5d8f"; g.fillRect(KC - 2, KC - 2, 4, 4);
  g.fillStyle = "#fff3a6"; g.fillRect(KC - 1, KC - 1, 2, 2);
  // sparkles orbiting backwards
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * 2 * Math.PI - ct * (1 + w / 6);
    g.fillStyle = i % 2 ? "#ffd1e6" : "#fff3a6";
    g.fillRect(Math.round(KC + Math.sin(a) * 34), Math.round(KC - Math.cos(a) * 34), 2, 2);
  }
  rw.textContent = "REWINDING" + ".".repeat(Math.floor(ct * 3) % 4);
}
function startClock() {
  wrap.hidden = true;
  state = "clock";
  clockStart = performance.now();
  clockEl.classList.add("on");
  setTimeout(endClock, CLOCK_DUR * 1000);
}
function endClock() {
  fadeEl.classList.add("on");
  setTimeout(() => {
    state = "story";
    clockEl.classList.remove("on");
    canvas.hidden = true; msgEl.hidden = true; hitBtn.hidden = true;
    $("#story").hidden = false;
    resizeField();
    fadeEl.classList.remove("on");
    setTimeout(() => showPage(0), 700);
  }, 600);
}

// ---------- story field: your grass background with daisies and gerberas planted on it ----------
const field = $("#field"), fctx = field.getContext("2d");
const bgImg = new Image();
let bgReady = false;
bgImg.onload = () => { bgReady = true; };
bgImg.src = BG_URI;
let LW = 576, LH = 324, flowers = [];
const DAISY_W = { id: "dw", pal: ["#aab4d8", "#dfe5f5", "#ffffff"], cen: GOLD_H };
const GERBS = [
  { id: "gr", pal: ["#9d1f2d", "#e63946", "#ff8a8a"], cen: ["#2b1020", "#4a2410", "#8a4b1b"] },
  { id: "go", pal: ["#c4561a", "#ff9a3c", "#ffd2a1"], cen: ["#2b1020", "#4a2410", "#8a4b1b"] },
  { id: "gp", pal: ["#c9477f", "#ff8fc0", "#ffd1e6"], cen: ["#4a2410", "#8a4b1b", "#c98a3a"] },
  { id: "gy", pal: ["#d49a12", "#ffd93b", "#fff3a6"], cen: ["#4a2410", "#8a4b1b", "#c98a3a"] },
];
const headCache = new Map();

function head(g, hx, hy, r, pal, cen, n, rot) {
  for (let dy = -r - 1; dy <= r + 1; dy++) for (let dx = -r - 1; dx <= r + 1; dx++) {
    const x = dx / r, y = dy / r, s = Math.hypot(x, y);
    if (s > 1.02) continue;
    let col;
    if (s < 0.34) {
      col = s > 0.24 ? cen[0] : (0.55 - 0.35 * x - 0.35 * y < 0.4 ? cen[1] : cen[2]);
    } else {
      const ph = Math.atan2(y, x);
      const l = Math.abs(Math.cos(n * (ph + rot) / 2));
      const reach = 0.46 + 0.54 * Math.pow(l, 0.8);
      if (s > reach) continue;
      const b = 0.30 + 0.45 * s + 0.28 * (l - 0.5) - 0.16 * (x + y);
      col = pal[b < 0.42 ? 0 : b < 0.70 ? 1 : 2];
    }
    g.fillStyle = col;
    g.fillRect(hx + dx, hy + dy, 1, 1);
  }
}
function headSprite(type, r, n, ri) {
  const key = type.id + r + "_" + ri;
  let c = headCache.get(key);
  if (!c) {
    c = document.createElement("canvas");
    c.width = c.height = r * 2 + 3;
    head(c.getContext("2d"), r + 1, r + 1, r, type.pal, type.cen, n, ri * 0.7);
    headCache.set(key, c);
  }
  return c;
}

function resizeField() {
  const iw = window.innerWidth, ih = window.innerHeight;
  const S = Math.max(iw / 576, ih / 324);
  LW = Math.floor(iw / S); LH = Math.floor(ih / S);
  field.width = LW; field.height = LH;
  field.style.width = iw + "px"; field.style.height = ih + "px";
  plant();
}
function plant() {
  const rnd = mulberry32(21);
  flowers = [];
  const n = Math.round(LW * 0.3), top = LH - 84, bot = LH - 5;
  for (let i = 0; i < n; i++) {
    const by = Math.round(top + (bot - top) * Math.pow(rnd(), 0.85));
    const dep = (by - top) / (bot - top);
    const gerb = rnd() < 0.42;
    const r = Math.round(2.4 + dep * 3.4) + (gerb ? 1 : 0);
    flowers.push({
      x: Math.round(rnd() * LW), by, r, gerb, dep,
      h: Math.round(4 + dep * 12 + rnd() * 3),
      type: gerb ? GERBS[Math.floor(rnd() * GERBS.length)] : DAISY_W,
      n: gerb ? 14 : 10, ri: Math.floor(rnd() * 3), ph: rnd() * 6.28, sw: 0.6 + rnd() * 0.8,
    });
  }
  flowers.sort((a, b) => a.by - b.by);
}
function drawField(t) {
  const g = fctx;
  g.imageSmoothingEnabled = false;
  g.fillStyle = "#3a8f4a"; g.fillRect(0, 0, LW, LH);
  if (bgReady) g.drawImage(bgImg, Math.floor((LW - 576) / 2), LH - 324);
  for (const f of flowers) {
    const sway = Math.sin(t * 1.3 + f.ph) * f.sw * (0.6 + f.dep);
    let hx = f.x;
    for (let k = 0; k <= f.h; k++) {
      const q = k / f.h, ox = Math.round(sway * q * q * 1.6);
      g.fillStyle = k % 3 === 0 ? "#3fb35a" : "#1f7a45";
      g.fillRect(f.x + ox, f.by - k, 1, 1);
      if (k === f.h) hx = f.x + ox;
      if (k === Math.round(f.h * 0.4) && f.h > 6) {
        g.fillStyle = "#3fb35a";
        g.fillRect(f.x + ox - 2, f.by - k - 1, 2, 1); g.fillRect(f.x + ox + 1, f.by - k, 2, 1);
      }
    }
    const spr = headSprite(f.type, f.r, f.n, f.ri);
    g.drawImage(spr, hx - f.r - 1, f.by - f.h - f.r - 1);
  }
}

// bunch of pixel daisies shown beside the characters on page 4
{
  const g = $("#bunch").getContext("2d");
  g.imageSmoothingEnabled = false;
  const tip = [30, 56];
  const heads = [[32, 12, 8, 0], [14, 22, 7, 1], [50, 22, 7, 2], [20, 36, 6, 3], [44, 36, 6, 4]];
  for (const [hx, hy] of heads) {
    const dx = tip[0] - hx, dy = tip[1] - hy, len = Math.max(Math.abs(dx), Math.abs(dy));
    for (let k = 0; k <= len; k++) {
      g.fillStyle = k % 3 === 0 ? "#3fb35a" : "#1f7a45";
      g.fillRect(Math.round(hx + dx * k / len), Math.round(hy + dy * k / len), 1, 1);
    }
  }
  g.fillStyle = "#3fb35a";
  for (const [lx, ly, s] of [[24, 46, -1], [38, 46, 1], [26, 40, -1], [36, 40, 1]]) {
    g.fillRect(lx, ly, 3 * s, 1); g.fillRect(lx + 3 * s, ly - 1, 2 * s, 1);
  }
  heads.forEach(([hx, hy, r, i]) => { const d = DT_H[i]; head(g, hx, hy, r, d.p, d.c, d.n, i); });
  g.fillStyle = "#8f2150"; g.fillRect(26, 52, 9, 5);
  g.fillStyle = "#ff5d8f"; g.fillRect(26, 52, 9, 3);
  g.fillStyle = "#ff9fbe"; g.fillRect(22, 50, 5, 4); g.fillRect(34, 50, 5, 4);
  g.fillStyle = "#c4366a"; g.fillRect(28, 56, 2, 8); g.fillRect(32, 56, 2, 9);
}

// ---------- story pages ----------
let pageIdx = 0;
function showPage(i) {
  pageIdx = i;
  setTod([0, 0, 1, 2, 3][i] || 0);
  if (i === 0) showPet();
  const p = PAGES[i], last = i === PAGES.length - 1;
  if (p.show === "girl") $("#girl").classList.add("in");
  if (p.show === "stan") $("#stan").classList.add("in");
  if (p.show === "bunch") $("#bunch").classList.add("in");
  say(p.t, {
    mode: "top",
    button: "NEXT",
    arrow: true,
    onButton: last ? startMemories : () => showPage(i + 1),
  });
}
const castEl = $("#cast"), storyEl = $("#story"), castTimers = [];
function startLetter() {
  unlock("story");
  wrap.hidden = true;
  castEl.classList.add("away");
  storyEl.classList.add("dim");
  setTimeout(() => {
    for (const id of ["#girl", "#stan", "#bunch", "#girl2", "#stan2", "#stan3", "#girl4", "#stan4"]) $(id).classList.remove("in", "out");
    openWall(() => showLetter(0));
  }, 700);
}
// the girl comes back alone, then both stand side by side
function setCast(mode) {
  const g = $("#girl"), s = $("#stan");
  if (mode === "girl" && !castEl.classList.contains("solo")) {
    storyEl.classList.remove("dim");
    s.classList.remove("in"); g.classList.remove("in");
    castEl.classList.remove("together");
    castEl.classList.add("nt", "solo");
    void castEl.offsetWidth;
    castEl.classList.remove("nt", "away");
    g.classList.add("in");
  } else if (mode === "both" && !castEl.classList.contains("together")) {
    castEl.classList.remove("solo");
    castEl.classList.add("together");
    castTimers.push(setTimeout(() => s.classList.add("in"), 650));
  } else if (mode === "knights" && !castEl.classList.contains("knights")) {
    castEl.classList.add("knights");
    g.classList.add("out"); s.classList.add("out");
    castTimers.push(setTimeout(() => $("#girl2").classList.add("in"), 550));
    castTimers.push(setTimeout(() => $("#stan2").classList.add("in"), 750));
  }
}
function showLetter(i) {
  setTod(i < 4 ? 4 : 5);
  const p = LETTER[i], last = i === LETTER.length - 1;
  if (p.cast && p.cast !== "none") setCast(p.cast);
  const opt = {
    mode: "top", cls: "letter", head: p.head, button: "NEXT", arrow: true,
    onButton: last ? startDaisies : () => showLetter(i + 1),
  };
  if (p.wall) {
    const at = p.t.indexOf(p.wall) + p.wall.length;
    opt.pauses = [{ at, run: resume => { wrap.hidden = true; openWall(() => { wrap.hidden = false; resume(); }); } }];
  }
  say(p.t, opt);
}
// ---------- verses -> prayer -> New Year question -> the gift ----------
function showVerses() {
  vs.innerHTML = "";
  VERSES.forEach((v, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "vb"; b.textContent = v.ref; b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", e => { e.stopPropagation(); pickVerse(i); });
    vs.appendChild(b);
  });
  say(VERSE_HINT, { mode: "top", cls: "letter", head: "Four verses", verses: true, button: "CONTINUE", arrow: true, onButton: startCandle });
}
function pickVerse(i) {
  unlock("verse");
  [...vs.children].forEach((b, k) => b.setAttribute("aria-pressed", k === i ? "true" : "false"));
  say(VERSES[i].t, { mode: "top", cls: "letter", head: VERSES[i].ref, verses: true, keep: true, button: "CONTINUE", arrow: true, onButton: startCandle });
}
function showPrayer() {
  say(PRAYER, { mode: "top", cls: "letter", head: "A prayer", button: "CONTINUE", arrow: true, onButton: showNewYear });
}
function showNewYear() {
  say(NEWYEAR, { mode: "top", cls: "letter", button: "CONTINUE", arrow: true, onButton: showQuestion });
}
function showQuestion() {
  say(QUESTION, { mode: "top", cls: "letter", button: "YES", button2: "YES", arrow: false, onButton: startContract, onButton2: startContract });
}

const girl4El = $("#girl4"), stan4El = $("#stan4"), girl2El = $("#girl2"), stan2El = $("#stan2"), stan3El = $("#stan3"), bq3 = $("#bq3"), fxEl = $("#fx"), againBtn = $("#again");
const giftTimers = [];
let giftHearts = 0, flyRaf = 0;
const HEART = '<svg viewBox="0 0 7 6" shape-rendering="crispEdges"><path fill="#ff5d8f" d="M1 0h2v1h-2z M4 0h2v1h-2z M0 1h7v2h-7z M1 3h5v1h-5z M2 4h3v1h-3z M3 5h1v1h-1z"/><path fill="#ffd1e6" d="M1 1h1v1h-1z"/></svg>';
const SPARK = '<svg viewBox="0 0 5 5" shape-rendering="crispEdges"><path fill="#ffd93b" d="M2 0h1v5h-1z M0 2h5v1h-5z"/><path fill="#fff4e0" d="M2 2h1v1h-1z"/></svg>';
function floatUp(el, glyph) {
  const r = el.getBoundingClientRect();
  const s = document.createElement("span");
  s.className = "ht"; s.innerHTML = glyph;
  s.style.left = (r.left + r.width * (0.1 + Math.random() * 0.8)) + "px";
  s.style.top = (r.top + r.height * (0.05 + Math.random() * 0.3)) + "px";
  s.style.setProperty("--dx", ((Math.random() - 0.5) * 70) + "px");
  s.addEventListener("animationend", () => s.remove());
  fxEl.appendChild(s);
}
function hop(el, n, h) {
  el.animate([{ transform: "translateY(0)" }, { transform: "translateY(-" + h + ")" }, { transform: "translateY(0)" }],
    { duration: 480, iterations: n, easing: "ease-out" });
}
function startGift() {
  wrap.hidden = true;
  const at = (ms, fn) => giftTimers.push(setTimeout(fn, ms));
  stan2El.classList.remove("in"); stan2El.classList.add("out");
  girl2El.classList.remove("in"); girl2El.classList.add("out");
  at(650, () => stan4El.classList.add("in"));
  at(850, () => girl4El.classList.add("in"));
  at(1900, () => { stan4El.classList.add("tapme"); girl4El.classList.add("tapme"); });
  // floating hearts and sparkles over both of them
  const drift = () => {
    floatUp(Math.random() < 0.5 ? stan4El : girl4El, Math.random() < 0.8 ? HEART : SPARK);
    if (Math.random() < 0.6) floatUp(Math.random() < 0.5 ? stan4El : girl4El, HEART);
  };
  at(1500, () => { for (let i = 0; i < 8; i++) giftTimers.push(setTimeout(drift, i * 110)); giftHearts = setInterval(drift, 420); });
  at(3600, () => { againBtn.hidden = false; $("#seeach").hidden = false; });
}
function flyBouquet() {
  const cr = castEl.getBoundingClientRect(), s = bq3.getBoundingClientRect();
  const fly = new Image();
  fly.src = bq3.src; fly.alt = "";
  fly.style.cssText = "position:absolute;z-index:6;max-width:none;pointer-events:none;image-rendering:auto;transform-origin:20% 85%";
  castEl.appendChild(fly);
  bq3.classList.add("pend");
  const flEl = girl2El.querySelector(".fl");
  flEl.appendChild(bq3);                                // she holds it from now on (hidden until it lands)
  const DUR = 3400, A = 0.42, B = 0.60, ROT = -30, t0 = performance.now();
  let touched = false;
  // Stan leans in with the bouquet held out; Irish leans toward him with her hand raised
  stan3El.animate([{ transform: "translateX(0) rotate(0deg)" }, { transform: "translateX(1.2vh) rotate(6deg)", offset: .3 }, { transform: "translateX(1.2vh) rotate(6deg)", offset: .55 }, { transform: "translateX(0) rotate(0deg)" }],
    { duration: DUR * 0.85, easing: "ease-in-out" });
  girl2El.animate([{ transform: "translateX(0) rotate(0deg)" }, { transform: "translateX(-1vh) rotate(-5deg)", offset: .35 }, { transform: "translateX(-1vh) rotate(-5deg)", offset: .6 }, { transform: "translateX(0) rotate(0deg)" }],
    { duration: DUR * 0.85, easing: "ease-in-out" });
  const frame = now => {
    const p = clamp((now - t0) / DUR, 0, 1);
    const d = bq3.getBoundingClientRect();               // where she finally holds it (follows her as she floats)
    const f = flEl.getBoundingClientRect();
    const w = d.width, h = d.height;
    // her raised hand: the stems rest in it
    const hx = f.left + f.width * 0.20 - w * 0.2, hy = f.top + f.height * 0.40 - h * 0.85;
    let x, y, rot = 0, W = w, Hh = h;
    if (p < A) {                                         // reaches out to her hand
      const q = easeIO(p / A);
      x = s.left + (hx - s.left) * q; y = s.top + (hy - s.top) * q + Math.sin(Math.PI * q) * s.height * 0.12;
      W = s.width + (w - s.width) * q; Hh = s.height + (h - s.height) * q;
      rot = ROT * Math.min(1, q * 1.7);
    } else if (p < B) {                                  // she takes it by the stems
      const q = (p - A) / (B - A);
      x = hx; y = hy + Math.sin(q * Math.PI) * h * 0.03; rot = ROT;
      if (!touched) {
        touched = true;
        hop(girl2El, 1, "1.2vh");
        for (let i = 0; i < 4; i++) giftTimers.push(setTimeout(() => floatUp(girl2El, i % 2 ? SPARK : HEART), i * 110));
      }
    } else {                                             // she brings it to her chest
      const q = easeIO((p - B) / (1 - B));
      x = hx + (d.left - hx) * q; y = hy + (d.top - hy) * q; rot = ROT * (1 - q);
    }
    fly.style.left = (x - cr.left) + "px"; fly.style.top = (y - cr.top) + "px";
    fly.style.width = W + "px"; fly.style.height = Hh + "px";
    fly.style.transform = "rotate(" + rot + "deg)";
    if (p < 1) { flyRaf = requestAnimationFrame(frame); return; }
    fly.remove(); bq3.classList.remove("pend");
    celebrate();
  };
  flyRaf = requestAnimationFrame(frame);
}
function celebrate() {
  hop(girl2El, 3, "5vh");
  giftTimers.push(setTimeout(() => hop(stan3El, 1, "2vh"), 700));
  const burst = () => { floatUp(girl2El, HEART); floatUp(girl2El, Math.random() < 0.5 ? HEART : SPARK); if (Math.random() < 0.6) floatUp(stan3El, HEART); };
  for (let i = 0; i < 7; i++) giftTimers.push(setTimeout(burst, i * 130));
  giftHearts = setInterval(burst, 520);
  giftTimers.push(setTimeout(() => { againBtn.hidden = false; }, 3200));
}
againBtn.addEventListener("click", () => { againBtn.hidden = true; replay(); });

// ---------- ending: stamp -> countdown -> fireworks -> the two of them -> sign-off ----------
const scrimEl = $("#scrim"), stampEl = $("#stamp"), cdEl = $("#cd"), signEl = $("#sign"), fwc = $("#fw"), fwx = fwc.getContext("2d");
let finBusy = false, fwP = [], fwRaf = 0, fwTimer = 0;
const FW_COLORS = ["#ff5d8f", "#ffd93b", "#7db4ff", "#fff4e0", "#ffd1e6", "#9dffb0"];
function fwResize() { fwc.width = innerWidth; fwc.height = innerHeight; }
addEventListener("resize", () => { if (fwTimer || fwP.length) fwResize(); });
function fwBurst() {
  const x = innerWidth * (0.12 + Math.random() * 0.76), y = innerHeight * (0.1 + Math.random() * 0.42);
  const c1 = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)], c2 = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)];
  const n = 44, big = 0.8 + Math.random() * 0.7;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + Math.random() * 0.15, sp = (1.6 + Math.random() * 1.6) * big;
    fwP.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, l: 0, max: 65 + Math.random() * 25, c: i % 2 ? c1 : c2 });
  }
  fwP.push({ x, y, vx: 0, vy: 0, l: 0, max: 6, c: "#ffffff", big: true });
}
function fwLoop() {
  fwx.clearRect(0, 0, fwc.width, fwc.height);
  for (const p of fwP) {
    p.l++; p.vx *= 0.985; p.vy = p.vy * 0.985 + 0.045; p.x += p.vx; p.y += p.vy;
    fwx.globalAlpha = Math.max(0, 1 - p.l / p.max);
    fwx.fillStyle = p.c;
    const sz = p.big ? 16 : 6;
    fwx.fillRect(Math.round(p.x / 6) * 6, Math.round(p.y / 6) * 6, sz, sz);
  }
  fwx.globalAlpha = 1;
  fwP = fwP.filter(p => p.l < p.max);
  fwRaf = (fwP.length || fwTimer) ? requestAnimationFrame(fwLoop) : 0;
}
function fwStart() { fwResize(); fwBurst(); fwTimer = setInterval(fwBurst, 420); if (!fwRaf) fwRaf = requestAnimationFrame(fwLoop); }
function fwStop() { clearInterval(fwTimer); fwTimer = 0; }
function fwClear() { fwStop(); fwP = []; cancelAnimationFrame(fwRaf); fwRaf = 0; fwx.clearRect(0, 0, fwc.width, fwc.height); }
function cdShow(text, cls) {
  cdEl.hidden = false; cdEl.className = cls || "";
  cdEl.innerHTML = text; void cdEl.offsetWidth;
}
function resetFinale() {
  finBusy = false; fwClear();
  scrimEl.classList.remove("on"); stampEl.hidden = true; stampEl.classList.remove("out"); cdEl.hidden = true; cdEl.className = ""; signEl.hidden = true; signEl.classList.remove("signed");
  nightEl.classList.remove("on"); lanternEl.hidden = true; wishEl.hidden = true; secretBtn.hidden = true; popEl.hidden = true; unlockEl.hidden = true; contractEl.hidden = true;
  candleEl.hidden = true; gameEl.hidden = true; memEl.hidden = true; matchEl.hidden = true; lbEl.hidden = true;
  petReset(); setTod(0);
  stan4El.classList.remove("tapme"); girl4El.classList.remove("tapme");
  got.clear(); achQ.length = 0; achEl.innerHTML = ""; achBusy = false;
  sigData = ""; sigGold = ""; wishText = ""; resText = ""; $("#seeach").hidden = true; $("#great").hidden = true;
  if (!bgm.paused) fadeTo(MUSIC_VOL, 800);
}

function resetGift() {
  giftTimers.forEach(clearTimeout); giftTimers.length = 0;
  clearInterval(giftHearts); cancelAnimationFrame(flyRaf);
  castEl.classList.remove("gift", "give");
  stan3El.classList.remove("in", "out");
  [girl2El, stan3El, girl4El, stan4El].forEach(e => e.getAnimations().forEach(a => a.cancel()));
  girl4El.classList.remove("in", "out"); stan4El.classList.remove("in", "out");
  fxEl.innerHTML = "";
  castEl.querySelectorAll(":scope > img").forEach(i => i.remove());
  bq3.classList.remove("pend");
  stan3El.querySelector(".fl").appendChild(bq3);
  againBtn.hidden = true;
  resetFinale();
}
function replay() {
  wrap.hidden = true;
  fadeEl.classList.add("on");
  setTimeout(() => {
    resetGift();
    $("#story").hidden = true;
    $("#cast").classList.remove("together", "solo", "away", "nt", "knights"); castTimers.forEach(clearTimeout); castTimers.length = 0; $("#story").classList.remove("dim");
    for (const id of ["#girl", "#stan", "#bunch", "#girl2", "#stan2", "#stan3", "#girl4", "#stan4"]) $(id).classList.remove("in", "out");
    canvas.hidden = false; msgEl.hidden = false; msgEl.classList.remove("gone"); hitBtn.hidden = false;
    state = "bouquet"; openP = 0; parts.length = 0;
    fadeEl.classList.remove("on");
  }, 600);
}

// ---------- the wall scene: she slowly breaks down the walls ----------
const WALL_LINE = "Honestly, when I’m with you, I can let my guard down and let my walls down because I feel safe.";
const wallEl = $("#wall"), wallc = $("#wallc"), wctx = wallc.getContext("2d"), wallbtn = $("#wallbtn"), wallp = $("#wallp");
const wallImg = new Image();
wallImg.src = WALL_URI;
const IW = 1376, IH = 768, BREACH = [815, 500], STRIKE = [885, 540], HAND = [978, 562];
const STRIKE_T0 = 1.6, STRIKE_GAP = 2.4;
let wallOn = false, wallT0 = 0, wallLast = 0, wallResume = null, wallStrikes = -1, lastStrikeT = -9, wallTimer = 0;
let debris = [], sparks = [];
const cracks = [];
{
  const r = mulberry32(5);
  for (const [x, y, a] of [[790, 420, -2.3], [850, 400, -1.7], [770, 520, -3.1], [790, 610, 2.5], [860, 625, 1.9], [740, 440, -2.7], [880, 430, -1.2]]) {
    const pts = [[x, y]];
    let px = x, py = y, ang = a;
    for (let i = 0; i < 16; i++) { ang += (r() - 0.5) * 0.9; const L = 12 + r() * 8; px += Math.cos(ang) * L; py += Math.sin(ang) * L; pts.push([px, py]); }
    cracks.push(pts);
  }
}
const STONES = ["#3a3f48", "#2a2e36", "#555b66", "#1e2128", "#6b7280"];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeIO = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

function sizeWall() { wallc.width = window.innerWidth; wallc.height = window.innerHeight; }
function openWall(resume) {
  wallResume = resume;
  wallOn = true;
  wallEl.hidden = false;
  sizeWall();
  debris = []; sparks = []; wallStrikes = -1; lastStrikeT = -9;
  wallp.textContent = WALL_LINE;
  wallbtn.style.visibility = "hidden";
  state = "wall";
  wallT0 = wallLast = performance.now();
  requestAnimationFrame(() => wallEl.classList.add("on"));
  wallTimer = setTimeout(() => { wallbtn.style.visibility = "visible"; wallbtn.focus({ preventScroll: true }); }, 10000);
}
function closeWall() {
  clearTimeout(wallTimer);
  wallEl.classList.remove("on");
  setTimeout(() => {
    wallEl.hidden = true; wallOn = false; state = "story";
    if (wallResume) { const f = wallResume; wallResume = null; f(); }
  }, 650);
}
wallbtn.addEventListener("click", closeWall);

function wallStrike(t) {
  lastStrikeT = t;
  for (let i = 0; i < 16; i++) debris.push([STRIKE[0] - 10 + Math.random() * 20, STRIKE[1] - 20 + Math.random() * 40, (Math.random() - 0.75) * 300, -(40 + Math.random() * 320), 4 + Math.random() * 7, STONES[Math.floor(Math.random() * STONES.length)], 1.2 + Math.random() * 1.2]);
  for (let i = 0; i < 26; i++) sparks.push([STRIKE[0] - 20 + Math.random() * 40, STRIKE[1] - 20 + Math.random() * 40, (Math.random() - 0.5) * 260, -(30 + Math.random() * 230), 0.8 + Math.random() * 0.9, 0.8 + Math.random() * 0.9, 3 + Math.floor(Math.random() * 3)]);
}

function drawWall(now) {
  const t = (now - wallT0) / 1000;
  const dt = Math.min(0.05, (now - wallLast) / 1000);
  wallLast = now;
  const g = wctx, VW = wallc.width, VH = wallc.height;
  const cover = VW / VH >= 1.25;
  const s0 = cover ? Math.max(VW / IW, VH / IH) : Math.min(VW / IW, VH / IH);
  const k = easeIO(Math.min(1, t / 16));
  const zoomEnd = cover ? 1.35 : 3.4;
  const s = s0 * (1 + (zoomEnd - 1) * k);
  const focal = cover ? [900, 540] : [950, 560];
  let ccx = IW / 2 + (focal[0] - IW / 2) * k, ccy = IH / 2 + (focal[1] - IH / 2) * k;
  ccx = IW * s >= VW ? clamp(ccx, VW / 2 / s, IW - VW / 2 / s) : IW / 2;
  ccy = IH * s >= VH ? clamp(ccy, VH / 2 / s, IH - VH / 2 / s) : IH / 2;

  // strikes happen on a slow rhythm
  const ks = t >= STRIKE_T0 ? Math.floor((t - STRIKE_T0) / STRIKE_GAP) : -1;
  if (ks > wallStrikes) { wallStrikes = ks; wallStrike(t); }
  const prog = clamp((t - 1) / 12, 0, 1);
  const since = t - lastStrikeT;
  const shake = 7 * Math.exp(-7 * since) * s;
  const sx = (Math.random() - 0.5) * 2 * shake, sy = (Math.random() - 0.5) * 2 * shake;

  g.setTransform(1, 0, 0, 1, 0, 0);
  g.fillStyle = "#0d0f14"; g.fillRect(0, 0, VW, VH);
  g.setTransform(s, 0, 0, s, VW / 2 - ccx * s + sx, VH / 2 - ccy * s + sy);
  if (wallImg.complete && wallImg.naturalWidth) g.drawImage(wallImg, 0, 0, IW, IH);

  // warm light pouring out of the opening, growing as the wall gives way
  g.globalCompositeOperation = "lighter";
  const gr = 110 + 120 * prog, ga = 0.12 + 0.3 * prog + 0.04 * Math.sin(t * 3);
  let rg = g.createRadialGradient(BREACH[0], BREACH[1], 0, BREACH[0], BREACH[1], gr);
  rg.addColorStop(0, `rgba(255,196,90,${ga})`); rg.addColorStop(1, "rgba(255,160,40,0)");
  g.fillStyle = rg; g.fillRect(BREACH[0] - gr, BREACH[1] - gr, gr * 2, gr * 2);
  g.globalCompositeOperation = "source-over";

  // cracks creeping across the stone
  const reveal = 0.08 + 0.92 * prog;
  g.lineCap = "square"; g.lineJoin = "miter";
  const q = v => Math.round(v / 3) * 3;
  for (const pts of cracks) {
    const n = Math.max(2, Math.ceil(pts.length * reveal));
    g.beginPath();
    for (let i = 0; i < n; i++) { const [px, py] = pts[i]; i ? g.lineTo(q(px), q(py)) : g.moveTo(q(px), q(py)); }
    g.strokeStyle = "#0b0c10"; g.lineWidth = 4; g.stroke();
    g.strokeStyle = `rgba(255,217,59,${0.15 + 0.5 * prog})`; g.lineWidth = 1.5; g.stroke();
  }

  // trickle of loose stones and golden dust from the opening
  if (Math.random() < dt * 1.4) debris.push([BREACH[0] - 40 + Math.random() * 90, BREACH[1] - 70 + Math.random() * 40, (Math.random() - 0.5) * 40, 0, 3 + Math.random() * 4, STONES[Math.floor(Math.random() * STONES.length)], 1.4]);
  if (Math.random() < dt * 16) sparks.push([BREACH[0] - 40 + Math.random() * 90, BREACH[1] - 40 + Math.random() * 120, (Math.random() - 0.5) * 30, -(40 + Math.random() * 100), 1.2 + Math.random(), 1.8, 3]);
  for (let i = debris.length - 1; i >= 0; i--) {
    const d = debris[i];
    d[6] -= dt; d[3] += 1100 * dt; d[0] += d[2] * dt; d[1] += d[3] * dt;
    if (d[6] <= 0 || d[1] > IH + 20) { debris.splice(i, 1); continue; }
    g.globalAlpha = Math.min(1, d[6] * 2);
    g.fillStyle = d[5]; g.fillRect(Math.round(d[0]), Math.round(d[1]), d[4], d[4]);
  }
  for (let i = sparks.length - 1; i >= 0; i--) {
    const p = sparks[i];
    p[4] -= dt; p[0] += p[2] * dt; p[1] += p[3] * dt; p[3] += 60 * dt;
    if (p[4] <= 0) { sparks.splice(i, 1); continue; }
    g.globalAlpha = Math.min(1, p[4] / p[5] * 1.5);
    g.fillStyle = p[4] % 0.3 > 0.15 ? "#fff3a6" : "#ffd93b";
    g.fillRect(Math.round(p[0]), Math.round(p[1]), p[6], p[6]);
  }
  g.globalAlpha = 1;

  // hammer swing just before each impact
  const nextT = STRIKE_T0 + (wallStrikes + 1) * STRIKE_GAP, dn = t - nextT;
  if (dn > -0.24 && dn < 0) {
    const u = (dn + 0.24) / 0.24;
    const a1 = (-80 - 85 * u) * Math.PI / 180;
    g.beginPath(); g.arc(HAND[0], HAND[1], 72, -80 * Math.PI / 180, a1, true);
    g.strokeStyle = "rgba(255,255,255,.75)"; g.lineWidth = 6; g.stroke();
  }
  // flash at the point of impact
  if (since < 0.35) {
    const fa = Math.exp(-9 * since) * 0.7;
    g.globalCompositeOperation = "lighter";
    rg = g.createRadialGradient(STRIKE[0], STRIKE[1], 0, STRIKE[0], STRIKE[1], 95);
    rg.addColorStop(0, `rgba(255,236,170,${fa})`); rg.addColorStop(1, "rgba(255,200,90,0)");
    g.fillStyle = rg; g.fillRect(STRIKE[0] - 95, STRIKE[1] - 95, 190, 190);
    g.globalCompositeOperation = "source-over";
  }

  // vignette
  g.setTransform(1, 0, 0, 1, 0, 0);
  const vg = g.createRadialGradient(VW / 2, VH / 2, Math.min(VW, VH) * 0.35, VW / 2, VH / 2, Math.hypot(VW, VH) * 0.62);
  vg.addColorStop(0, "rgba(5,5,12,0)"); vg.addColorStop(1, "rgba(5,5,12,.6)");
  g.fillStyle = vg; g.fillRect(0, 0, VW, VH);
}

// ---------- main loop ----------
window.addEventListener("resize", resize);
resize();

const t0 = performance.now();
let lastFrame = t0, lastDraw = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const budget = state === "story" ? 1000 / 24 : state === "wall" ? 1000 / 40 : 1000 / FPS;
  if (now - lastDraw < budget - 1) return;
  lastDraw = now;
  const dt = Math.min(0.1, (now - lastFrame) / 1000);
  lastFrame = now;
  const t = (now - t0) / 1000;
  curT = t;
  if (state === "wall") { drawWall(now); return; }
  if (state === "story") { drawField(t); return; }
  if (state === "clock") { clockFrame(now); return; }
  if (state === "opening") {
    const p = Math.min(1, (t - openStart) / 1.5);
    openP = 1 - Math.pow(1 - p, 3);
    if (p >= 1) { state = "greeting"; setTimeout(showGreeting, 300); }
  }
  updateHearts(dt);
  render(t, dt);
  ctx.putImageData(img, 0, 0);
  updateMessage(t);
}
requestAnimationFrame(frame);

// ================= v2: boot screen, achievements, daisy game, candle, contract, wish, secrets, night =================
const fx2 = $("#fx2");
function floatAt(x, y, glyph) {
  const s = document.createElement("span");
  s.className = "f2"; s.innerHTML = glyph;
  s.style.left = x + "px"; s.style.top = y + "px";
  s.style.setProperty("--dx", ((Math.random() - 0.5) * 70) + "px");
  s.addEventListener("animationend", () => s.remove());
  fx2.appendChild(s);
}
function burstAt(x, y, n) {
  for (let i = 0; i < n; i++) setTimeout(() => floatAt(x + (Math.random() - 0.5) * 50, y + (Math.random() - 0.5) * 30, Math.random() < 0.6 ? HEART : SPARK), i * 70);
}

// ---------- opening: loading screen -> title screen -> PRESS START ----------
{
  const bootEl = $("#boot"), load = $("#bootload"), title = $("#boottitle"), bar = $("#bootbar"), stars = $("#bootstars");
  for (let i = 0; i < 46; i++) {
    const s = document.createElement("i");
    s.style.left = (Math.random() * 100) + "%"; s.style.top = (Math.random() * 100) + "%";
    s.style.animationDelay = (Math.random() * 2.4) + "s";
    stars.appendChild(s);
  }
  const N = 14, cells = [];
  for (let i = 0; i < N; i++) { const c = document.createElement("i"); bar.appendChild(c); cells.push(c); }
  let k = 0, ready = false;
  const tick = setInterval(() => {
    cells[k++].classList.add("on");
    if (k >= N) { clearInterval(tick); setTimeout(() => { load.hidden = true; title.hidden = false; ready = true; $("#pstart").focus({ preventScroll: true }); }, 450); }
  }, 170);
  const go = () => {
    if (!ready) return;
    ready = false;
    try { if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === "function") DeviceOrientationEvent.requestPermission().catch(() => {}); } catch (e) {}
    startMusic();
    bootEl.classList.add("gone");
    setTimeout(() => bootEl.remove(), 800);
  };
  bootEl.addEventListener("click", go);
  addEventListener("keydown", e => { if (bootEl.isConnected && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); go(); } });
}

// ---------- achievements ----------
const ACH = [
  ["story", "Story complete"], ["memories", "Our year"], ["match", "Memory match"], ["letter", "Letter read"], ["daisies", "Daisy catcher"], ["verse", "Verse chosen"], ["candle", "Candle lit"],
  ["contract", "Contract signed"], ["wish", "Wish made"], ["yes", "Yes, yes, yes!"], ["secret", "Secret found"], ["greatest", "Greatest achievement"]
];
const achName = Object.fromEntries(ACH);
const achEl = $("#ach"), got = new Set(), achQ = [];
let achBusy = false;
const TROPHY = '<svg viewBox="0 0 9 9" shape-rendering="crispEdges"><path fill="#ffd93b" d="M2 0h5v1h-5z M2 1h5v3h-5z M3 4h3v1h-3z M4 5h1v2h-1z M2 7h5v1h-5z M0 1h1v2h-1z M1 3h1v1h-1z M8 1h1v2h-1z M7 3h1v1h-1z"/><path fill="#fff3a6" d="M3 1h1v2h-1z"/><path fill="#ff9a3c" d="M2 8h5v1h-5z"/></svg>';
function unlock(id) {
  if (got.has(id) || !achName[id]) return;
  got.add(id); achQ.push(id);
  if (!achBusy) nextAch();
}
function nextAch() {
  const id = achQ.shift();
  if (!id) { achBusy = false; achEl.innerHTML = ""; return; }
  achBusy = true;
  achEl.className = "";
  achEl.innerHTML = '<div class="at">' + TROPHY + '<div><small>ACHIEVEMENT UNLOCKED</small><b>' + achName[id] + "</b></div></div>";
  setTimeout(() => { achEl.className = "hide"; setTimeout(nextAch, 380); }, 2800);
}

// ---------- pixel flowers (used by the daisy game) ----------
function makeFlower(petal, shade, center) {
  const S = 15, c = document.createElement("canvas");
  c.width = c.height = S;
  const g = c.getContext("2d"), m = [], mid = S / 2;
  for (let y = 0; y < S; y++) { m[y] = []; for (let x = 0; x < S; x++) {
    const px = x + 0.5 - mid, py = y + 0.5 - mid;
    let v = 0;
    if (Math.hypot(px, py) < 2.3) v = 2;
    else for (let a = 0; a < 8; a++) {
      const ang = a * Math.PI / 4;
      if (Math.hypot(px - Math.cos(ang) * 3.9, py - Math.sin(ang) * 3.9) < 2.15) { v = (px + py > 2.5) ? 3 : 1; break; }
    }
    m[y][x] = v;
  } }
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const v = m[y][x];
    if (v) { g.fillStyle = v === 2 ? center : v === 3 ? shade : petal; g.fillRect(x, y, 1, 1); continue; }
    const n = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => (m[y + dy] || [])[x + dx]);
    if (n) { g.fillStyle = OUTLINE; g.fillRect(x, y, 1, 1); }
  }
  return c.toDataURL();
}
let FLOWERS = null;

// ---------- mini-game: catch the falling daisies ----------
const gameEl = $("#game"), gScoreEl = $("#gscore"), gBar = $("#gtime b");
function startDaisies() {
  unlock("letter");
  say("Catch the falling daisies! Tap as many as you can before time runs out.", { mode: "center", button: "START", onButton: runGame });
}
function runGame() {
  if (!FLOWERS) FLOWERS = [makeFlower("#ffffff", "#cdd6ee", "#ffd93b"), makeFlower("#ff8fc0", "#c9477f", "#ffd93b"), makeFlower("#ffd93b", "#d49a12", "#8a4b1b"), makeFlower("#ff9a3c", "#c4561a", "#8a4b1b")];
  wrap.hidden = true;
  gameEl.hidden = false;
  let score = 0, last = performance.now(), acc = 0, items = [];
  const DUR = 15000, t0 = last;
  const paint = () => { gScoreEl.textContent = "DAISIES " + score; };
  paint(); gBar.style.width = "100%";
  const spawn = () => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "dz"; b.setAttribute("aria-label", "Catch the daisy");
    const im = new Image(); im.src = FLOWERS[Math.floor(Math.random() * FLOWERS.length)]; im.alt = "";
    b.appendChild(im);
    const it = { b, x0: 24 + Math.random() * Math.max(10, innerWidth - 112), y: -70, v: (150 + Math.random() * 120) * Math.max(0.7, innerHeight / 800), ph: Math.random() * 6, dead: false };
    b.addEventListener("pointerdown", e => {
      e.preventDefault();
      if (it.dead) return;
      it.dead = true; score++; paint(); b.classList.add("caught");
      floatAt(it.x + 32, it.y + 20, SPARK);
      setTimeout(() => b.remove(), 320);
    });
    gameEl.appendChild(b); items.push(it);
  };
  const loop = now => {
    const dt = Math.min(50, now - last); last = now;
    const el = now - t0;
    gBar.style.width = Math.max(0, 100 - el / DUR * 100) + "%";
    if (el < DUR) { acc += dt; const gap = 540 - el / DUR * 230; while (acc > gap) { acc -= gap; spawn(); } }
    for (const it of items) {
      if (it.dead) continue;
      it.y += it.v * dt / 1000;
      it.x = it.x0 + Math.sin(it.y / 55 + it.ph) * 14;
      it.b.style.transform = "translate3d(" + it.x.toFixed(1) + "px," + it.y.toFixed(1) + "px,0) rotate(" + (Math.sin(it.y / 40 + it.ph) * 12).toFixed(1) + "deg)";
      if (it.y > innerHeight + 20) { it.dead = true; it.b.remove(); }
    }
    items = items.filter(i => !i.dead);
    if (el < DUR) { requestAnimationFrame(loop); return; }
    gameEl.querySelectorAll(".dz").forEach(d => d.remove());
    gameEl.hidden = true;
    if (score > 0) unlock("daisies");
    const msg = score === 0 ? "No daisies this time, but 2027 is still yours!" : (score === 1 ? "1 daisy" : score + " daisies") + " for 2027!";
    say(msg, { mode: "center", button: "CONTINUE", onButton: showVerses });
  };
  requestAnimationFrame(loop);
}

// ---------- light the candle (before the prayer) ----------
const candleEl = $("#candle"), cakeEl = $("#cake"), candleCap = $("#candlecap"), candleGo = $("#candlego");
function startCandle() {
  wrap.hidden = true;
  candleEl.classList.remove("lit");
  candleCap.textContent = "Tap the candle to light it for 2027.";
  candleGo.hidden = true;
  candleEl.hidden = false;
}
cakeEl.addEventListener("click", () => {
  if (candleEl.classList.contains("lit")) return;
  candleEl.classList.add("lit");
  unlock("candle");
  candleCap.textContent = "Here’s to a bright 2027.";
  const r = cakeEl.getBoundingClientRect();
  burstAt(r.left + r.width / 2, r.top + r.height * 0.08, 9);
  setTimeout(() => { candleGo.hidden = false; }, 1800);
});
candleGo.addEventListener("click", () => { candleEl.hidden = true; showPrayer(); });

// ---------- the contract she signs ----------
const contractEl = $("#contract"), sig = $("#sig"), sgx = sig.getContext("2d"), sigWrap = $("#sigwrap"), sigOk = $("#sigok");
let sigInk = 0, sigPrev = null, sigBox = null, sigData = "", sigGold = "";
function sigSetup() {
  const r = sig.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1);
  sig.width = Math.max(1, Math.round(r.width * d)); sig.height = Math.max(1, Math.round(r.height * d));
  sgx.lineCap = "round"; sgx.lineJoin = "round"; sgx.lineWidth = 3.4 * d; sgx.strokeStyle = "#2a1c4a";
  sigInk = 0; sigPrev = null; sigBox = null; sigWrap.classList.remove("has"); sigOk.disabled = true;
}
function sigPt(e) {
  const r = sig.getBoundingClientRect();
  return [(e.clientX - r.left) * sig.width / r.width, (e.clientY - r.top) * sig.height / r.height];
}
function sigGrow(p) {
  if (!sigBox) sigBox = [p[0], p[1], p[0], p[1]];
  else { sigBox[0] = Math.min(sigBox[0], p[0]); sigBox[1] = Math.min(sigBox[1], p[1]); sigBox[2] = Math.max(sigBox[2], p[0]); sigBox[3] = Math.max(sigBox[3], p[1]); }
}
sig.addEventListener("pointerdown", e => {
  e.preventDefault(); sig.setPointerCapture(e.pointerId);
  sigPrev = sigPt(e); sigGrow(sigPrev);
  sgx.beginPath(); sgx.moveTo(sigPrev[0], sigPrev[1]); sgx.lineTo(sigPrev[0] + 0.01, sigPrev[1]); sgx.stroke();
});
sig.addEventListener("pointermove", e => {
  if (!sigPrev) return;
  const p = sigPt(e);
  sgx.beginPath(); sgx.moveTo(sigPrev[0], sigPrev[1]); sgx.lineTo(p[0], p[1]); sgx.stroke();
  sigInk += Math.hypot(p[0] - sigPrev[0], p[1] - sigPrev[1]) * (sig.getBoundingClientRect().width / sig.width);
  sigPrev = p; sigGrow(p);
  if (sigInk > 50) { sigWrap.classList.add("has"); sigOk.disabled = false; }
});
const sigEnd = () => { sigPrev = null; };
sig.addEventListener("pointerup", sigEnd); sig.addEventListener("pointercancel", sigEnd);
$("#sigclear").addEventListener("click", () => { sgx.clearRect(0, 0, sig.width, sig.height); sigInk = 0; sigPrev = null; sigBox = null; sigWrap.classList.remove("has"); sigOk.disabled = true; });
function startContract() {
  wrap.hidden = true;
  contractEl.hidden = false;
  requestAnimationFrame(sigSetup);
}
sigOk.addEventListener("click", () => {
  if (sigOk.disabled) return;
  const pad = 8 * (window.devicePixelRatio || 1), b = sigBox;
  const x = Math.max(0, Math.floor(b[0] - pad)), y = Math.max(0, Math.floor(b[1] - pad));
  const w = Math.min(sig.width - x, Math.ceil(b[2] - b[0] + pad * 2)), h = Math.min(sig.height - y, Math.ceil(b[3] - b[1] + pad * 2));
  const c = document.createElement("canvas"); c.width = Math.max(1, w); c.height = Math.max(1, h);
  const g = c.getContext("2d"); g.drawImage(sig, x, y, w, h, 0, 0, w, h);
  sigData = c.toDataURL("image/png");
  g.globalCompositeOperation = "source-in"; g.fillStyle = "#ffd93b"; g.fillRect(0, 0, c.width, c.height);
  sigGold = c.toDataURL("image/png");
  contractEl.hidden = true;
  unlock("contract");
  finale();
});

// ---------- her 2027 wish ----------
const wishEl = $("#wish"), wishIn = $("#wishin"), lanternEl = $("#lantern");
let wishText = "", resText = "";
const resIn = $("#resin");
function askWish() {
  wishIn.value = ""; resIn.value = "";
  wishEl.hidden = false;
  if (window.matchMedia("(hover: hover)").matches) setTimeout(() => wishIn.focus({ preventScroll: true }), 60);
}
function sendWish(skip) {
  wishText = skip ? "" : wishIn.value.trim();
  resText = skip ? "" : resIn.value.trim();
  wishEl.hidden = true;
  if (wishText || resText) unlock("wish");
  runCountdown();
}
$("#wishgo").addEventListener("click", () => sendWish(false));
$("#wishskip").addEventListener("click", () => sendWish(true));
wishIn.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); resIn.focus(); } });
resIn.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); sendWish(false); } });

// ---------- night sky behind the characters ----------
const nightEl = $("#night");
for (let i = 0; i < 70; i++) {
  const s = document.createElement("i");
  s.style.left = (Math.random() * 100) + "%"; s.style.top = (Math.random() * 68) + "%";
  s.style.animationDelay = (Math.random() * 2.6) + "s";
  if (i % 9 === 0) s.className = "big";
  nightEl.appendChild(s);
}

// ---------- secrets: tap them, find the heart ----------
const secretBtn = $("#secret"), popEl = $("#pop");
function bubble(el) {
  const r = el.getBoundingClientRect(), b = document.createElement("div");
  b.className = "yes"; b.textContent = "Yes yes yes!";
  b.style.left = Math.min(innerWidth - 80, Math.max(80, r.left + r.width / 2)) + "px"; b.style.top = (r.top + r.height * 0.04) + "px";
  fx2.appendChild(b);
  setTimeout(() => b.remove(), 1750);
}
for (const el of [stan4El, girl4El]) {
  el.addEventListener("pointerdown", () => {
    if (!el.classList.contains("tapme") || el._jump) return;
    el._jump = true;
    hop(el, 3, "4vh");
    bubble(el);
    unlock("yes");
    const r = el.getBoundingClientRect();
    burstAt(r.left + r.width / 2, r.top + r.height * 0.15, 5);
    setTimeout(() => { el._jump = false; }, 1500);
  });
}
secretBtn.addEventListener("click", () => {
  secretBtn.hidden = true;
  popEl.innerHTML = '<img src="images/daisy-bouquet.webp" alt="A bouquet of daisies"><p>A bouquet for you, always</p>';
  popEl.hidden = false;
  unlock("secret");
  burstAt(innerWidth / 2, innerHeight * 0.42, 14);
  giftTimers.push(setTimeout(() => { popEl.hidden = true; }, 3500));
});

// ---------- you unlocked 2027 ----------
const unlockEl = $("#unlock");
const CHECK = '<svg viewBox="0 0 7 6" shape-rendering="crispEdges"><path fill="#ffd93b" d="M6 0h1v1h-1z M5 1h1v1h-1z M4 2h1v1h-1z M0 3h1v1h-1z M3 3h1v1h-1z M1 4h1v1h-1z M2 4h1v1h-1z"/></svg>';
const LOCK = '<svg viewBox="0 0 7 6" shape-rendering="crispEdges"><path fill="#4a3d70" d="M2 0h3v1h-3z M1 1h1v2h-1z M5 1h1v2h-1z M0 3h7v3h-7z"/></svg>';
function showUnlock() {
  const ul = $("#ul"); ul.innerHTML = "";
  for (const [id, name] of ACH) {
    const li = document.createElement("li"), on = got.has(id);
    li.className = on ? "" : "lock";
    li.innerHTML = (on ? CHECK : LOCK) + "<span>" + (on ? name : "???") + "</span>";
    ul.appendChild(li);
  }
  $("#ucount").textContent = got.size + " / " + ACH.length + " ACHIEVEMENTS";
  const noYes = !got.has("yes"), noSecret = !got.has("secret");
  $("#uhint").textContent = noYes && noSecret ? "Psst… try tapping them, and look for a hidden heart." : noYes ? "Psst… try tapping Stan and Irish." : noSecret ? "Psst… there is a hidden heart somewhere." : "";
  unlockEl.hidden = false;
}
$("#uok").addEventListener("click", () => { unlockEl.hidden = true; });

// ---------- the ending, in order ----------
function finale() {
  if (finBusy) return; finBusy = true;
  wrap.hidden = true;
  const at = (ms, fn) => giftTimers.push(setTimeout(fn, ms));
  // 1. the contract is renewed (stamped with her signature)
  const ss = $("#stampsig");
  if (sigData) { ss.src = sigData; ss.hidden = false; } else ss.hidden = true;
  stampEl.hidden = false; stampEl.classList.remove("out");
  at(1900, () => { stampEl.classList.add("out"); scrimEl.classList.add("on"); });
  at(2350, () => { stampEl.hidden = true; askWish(); });
}
function runCountdown() {
  const at = (ms, fn) => giftTimers.push(setTimeout(fn, ms));
  scrimEl.classList.add("on");
  at(500, () => cdShow("3"));
  at(1300, () => cdShow("2"));
  at(2100, () => cdShow("1"));
  // happy new year: the sky turns to night, fireworks, her wish floats up, the music swells
  at(2900, () => {
    cdShow("HAPPY<br>NEW YEAR!", "hny"); fwStart();
    nightEl.classList.add("on"); setTod(6);
    if (!bgm.paused) fadeTo(0.55, 2500);
    if (wishText || resText) { setLantern(); lanternEl.hidden = false; lanternEl.style.animation = "none"; void lanternEl.offsetWidth; lanternEl.style.animation = ""; }
  });
  at(3200, () => scrimEl.classList.remove("on"));
  // the two of them step out under the night sky
  at(4300, startGift);
  at(6500, () => { cdEl.classList.add("out"); fwStop(); });
  at(7100, () => { cdEl.hidden = true; });
  at(10400, () => { lanternEl.hidden = true; });
  // sign-off with her signature, a hidden heart, then "you unlocked 2027"
  at(8300, writeSign);
  at(9600, () => { if (!got.has("secret")) secretBtn.hidden = false; });
  at(14000, () => { if (!bgm.paused) fadeTo(0.25, 5000); });
  at(16500, showUnlock);
}

// ================= v3: our year photos, memory match, pixel pet, time of day, parallax + petals, handwritten sign-off =================
function sayAt(x, y, text) {
  const b = document.createElement("div");
  b.className = "yes"; b.textContent = text;
  b.style.left = Math.min(innerWidth - 60, Math.max(60, x)) + "px"; b.style.top = y + "px";
  fx2.appendChild(b);
  setTimeout(() => b.remove(), 1750);
}
function gridSVG(rows, pal) {
  let p = "";
  rows.forEach((r, y) => { for (let x = 0; x < r.length; x++) { const c = r[x]; if (c !== ".") p += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + pal[c] + '"/>'; } });
  return '<svg viewBox="0 0 ' + rows[0].length + " " + rows.length + '" shape-rendering="crispEdges">' + p + "</svg>";
}

// ---------- time of day: morning -> noon -> golden hour -> dusk -> evening -> night ----------
const TOD_BG = [
  "linear-gradient(to bottom, rgba(255,205,160,.32), rgba(255,236,200,.12) 60%, rgba(255,240,210,.05))",
  "none",
  "linear-gradient(to bottom, rgba(255,200,110,.10), rgba(255,190,90,.16))",
  "linear-gradient(to bottom, rgba(255,150,70,.30), rgba(255,175,95,.20) 60%, rgba(255,140,60,.18))",
  "linear-gradient(to bottom, rgba(90,50,140,.55), rgba(220,100,110,.38) 55%, rgba(255,130,70,.30))",
  "linear-gradient(to bottom, rgba(18,18,70,.72), rgba(55,35,100,.5) 60%, rgba(40,30,80,.4))",
  "none"
];
const todLayers = [$("#todA"), $("#todB")], todStars = $("#todstars");
let todNow = -1, todSide = 0;
for (let i = 0; i < 34; i++) {
  const s = document.createElement("i");
  s.style.left = (Math.random() * 100) + "%"; s.style.top = (Math.random() * 60) + "%"; s.style.animationDelay = (Math.random() * 2.6) + "s";
  todStars.appendChild(s);
}
function setTod(n) {
  if (n === todNow) return;
  todNow = n;
  const on = todLayers[todSide], off = todLayers[todSide ^ 1];
  todSide ^= 1;
  on.style.background = TOD_BG[n]; on.classList.add("on"); off.classList.remove("on");
  storyEl.dataset.tod = n;
  todStars.classList.toggle("on", n === 5);
}
setTod(0);

// ---------- parallax (mouse on desktop, tilt on phones) ----------
const PAR = { x: 0, y: 0, tx: 0, ty: 0, g0: null, b0: null, lx: 9, ly: 9 };
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!REDUCE) {
  addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return; PAR.tx = (e.clientX / innerWidth - 0.5) * 2; PAR.ty = (e.clientY / innerHeight - 0.5) * 2; });
  addEventListener("deviceorientation", e => {
    if (e.gamma == null || e.beta == null) return;
    if (PAR.g0 == null) { PAR.g0 = e.gamma; PAR.b0 = e.beta; }
    PAR.tx = clamp((e.gamma - PAR.g0) / 18, -1, 1); PAR.ty = clamp((e.beta - PAR.b0) / 18, -1, 1);
  });
}

// ---------- falling petals ----------
const petalC = $("#petals"), pg = petalC.getContext("2d");
const PETAL_COLS = ["#ffb3d1", "#ff8fc0", "#fff4e0", "#ffd1e6", "#ffffff"];
let petals = [], petalClear = true;
function newPetal(anywhere) {
  const d = 0.5 + Math.random() * 1.1;
  return { x: Math.random() * innerWidth, y: anywhere ? Math.random() * innerHeight : -20, d, vy: (22 + Math.random() * 26) * d * Math.max(0.7, innerHeight / 800), ph: Math.random() * 6, sw: 0.6 + Math.random() * 1.2, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 1.6, c: PETAL_COLS[Math.floor(Math.random() * PETAL_COLS.length)] };
}
function petalInit() {
  petalC.width = innerWidth; petalC.height = innerHeight;
  petals = Array.from({ length: innerWidth < 600 ? 16 : 28 }, () => newPetal(true));
}
petalInit();
addEventListener("resize", petalInit);
function petalDraw(dt) {
  pg.clearRect(0, 0, petalC.width, petalC.height);
  pg.globalAlpha = todNow >= 5 ? 0.6 : 0.9;
  for (const p of petals) {
    p.y += p.vy * dt; p.ph += dt * p.sw; p.rot += p.vr * dt;
    if (p.y > innerHeight + 20) Object.assign(p, newPetal(false));
    const x = p.x + Math.sin(p.ph) * 26 * p.d + PAR.x * 30 * p.d, s = Math.round(2 + 3 * p.d);
    pg.save(); pg.translate(Math.round(x), Math.round(p.y)); pg.rotate(p.rot);
    pg.fillStyle = p.c; pg.fillRect(-s, -s * 0.6, s * 2, s * 1.2);
    pg.fillStyle = "rgba(255,255,255,.55)"; pg.fillRect(-s, -s * 0.6, s * 0.9, s * 0.5);
    pg.restore();
  }
  pg.globalAlpha = 1;
}
let parLast = performance.now();
function parLoop(now) {
  requestAnimationFrame(parLoop);
  const dt = Math.min(0.1, (now - parLast) / 1000); parLast = now;
  if (storyEl.hidden) { if (!petalClear) { pg.clearRect(0, 0, petalC.width, petalC.height); petalClear = true; } return; }
  PAR.x += (PAR.tx - PAR.x) * 0.08; PAR.y += (PAR.ty - PAR.y) * 0.08;
  if (Math.abs(PAR.x - PAR.lx) > 0.002 || Math.abs(PAR.y - PAR.ly) > 0.002) {
    PAR.lx = PAR.x; PAR.ly = PAR.y;
    storyEl.style.setProperty("--px", PAR.x.toFixed(3)); storyEl.style.setProperty("--py", PAR.y.toFixed(3));
  }
  if (!REDUCE) { petalClear = false; petalDraw(dt); }
}
requestAnimationFrame(parLoop);

// ---------- pixel pet: a little cat that follows her taps around the grass ----------
function makeCat(kind) {
  const W = 22, H = 16, m = Array.from({ length: H }, () => Array(W).fill(0));
  const set = (x, y, v) => { if (x >= 0 && x < W && y >= 0 && y < H) m[y][x] = v; };
  const rect = (x, y, w, h, v) => { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) set(x + i, y + j, v); };
  rect(5, 6, 11, 5, 1); rect(6, 5, 9, 1, 1); rect(6, 11, 9, 1, 2); rect(8, 10, 6, 1, 2);
  [7, 9, 11, 13].forEach(x => set(x, 5, 3)); [8, 10, 12].forEach(x => set(x, 7, 3));
  rect(14, 3, 6, 6, 1); rect(15, 2, 4, 1, 1);
  set(14, 1, 1); set(14, 2, 6); set(15, 2, 1); set(19, 1, 1); set(19, 2, 6); set(18, 2, 1);
  set(16, 3, 3); set(18, 3, 3); set(16, 5, 4); set(18, 5, 4); rect(17, 6, 3, 2, 2); set(19, 6, 5);
  if (kind === "idle") { rect(3, 7, 2, 2, 1); rect(2, 4, 2, 4, 1); set(2, 3, 3); }
  else if (kind === "a") { rect(3, 7, 2, 1, 1); rect(2, 5, 2, 3, 1); set(3, 4, 3); }
  else { rect(2, 6, 3, 2, 1); rect(1, 4, 2, 3, 1); set(1, 3, 3); }
  const legs = kind === "idle" ? [6, 9, 13, 15] : kind === "a" ? [5, 8, 12, 15] : [7, 10, 13, 16];
  legs.forEach(x => { rect(x, 11, 2, 3, 1); rect(x, 13, 2, 1, 7); });
  const cols = [null, "#ff9a3c", "#ffe9cf", "#c4561a", OUTLINE, "#ff5d8f", "#ff9fbe", "#ffffff"];
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d");
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const v = m[y][x];
    if (v) { g.fillStyle = cols[v]; g.fillRect(x, y, 1, 1); continue; }
    if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => (m[y + dy] || [])[x + dx])) { g.fillStyle = OUTLINE; g.fillRect(x, y, 1, 1); }
  }
  return c.toDataURL();
}
const petEl = $("#pet"), petImg = petEl.querySelector("img");
let PET_IMG = null, petX = 0, petY = 0, petWalk = 0, petStop = 0;
function petPlace(x, y, dur) {
  petEl.style.setProperty("--dur", dur + "s");
  petEl.style.transform = "translate(" + Math.round(x) + "px," + Math.round(-y) + "px)";
}
function showPet() {
  if (!petEl.hidden) return;
  if (!PET_IMG) { PET_IMG = ["idle", "a", "b"].map(makeCat); }
  petImg.src = PET_IMG[0]; petImg.style.transform = "scaleX(1)"; petEl.style.setProperty("--fl", 1);
  petEl.hidden = false;
  petX = innerWidth * 0.1; petY = innerHeight * 0.035;
  petPlace(petX, petY, 0);
  petEl.classList.add("pop"); setTimeout(() => petEl.classList.remove("pop"), 600);
}
function petGo(cx, cy) {
  const w = petEl.getBoundingClientRect().width || 80;
  const ty = clamp(innerHeight - cy, innerHeight * 0.02, innerHeight * 0.17), tx = clamp(cx - w / 2, 0, innerWidth - w);
  const dist = Math.hypot(tx - petX, ty - petY);
  if (dist < 6) return;
  const dir = tx >= petX ? 1 : -1;
  petImg.style.transform = "scaleX(" + dir + ")"; petEl.style.setProperty("--fl", dir);
  const dur = Math.max(0.25, dist / 260);
  petX = tx; petY = ty; petPlace(tx, ty, dur);
  clearInterval(petWalk); let f = 0;
  petWalk = setInterval(() => { petImg.src = PET_IMG[1 + (f++ & 1)]; }, 140);
  clearTimeout(petStop);
  petStop = setTimeout(() => { clearInterval(petWalk); petImg.src = PET_IMG[0]; }, dur * 1000 + 40);
}
function petReset() { clearInterval(petWalk); clearTimeout(petStop); petEl.hidden = true; }
storyEl.addEventListener("pointerdown", e => { if (petEl.hidden || e.target.closest("#pet")) return; petGo(e.clientX, e.clientY); });
petEl.addEventListener("pointerdown", e => {
  e.stopPropagation();
  petEl.classList.remove("hop"); void petEl.offsetWidth; petEl.classList.add("hop");
  const r = petEl.getBoundingClientRect();
  sayAt(r.left + r.width / 2, r.top - 4, "Meow!");
  burstAt(r.left + r.width / 2, r.top, 3);
});

// ---------- our year: three real photos in pixel frames, then memory match ----------
const memEl = $("#memories"), lbEl = $("#lb"), matchEl = $("#match");
function startMemories() {
  unlock("story");
  setTod(3);
  wrap.hidden = true;
  memEl.hidden = false;
  giftTimers.push(setTimeout(() => unlock("memories"), 2200));
}
memEl.querySelectorAll(".mf").forEach(b => b.addEventListener("click", () => {
  const im = b.querySelector("img"), big = lbEl.querySelector("img");
  big.src = im.src; big.alt = im.alt; lbEl.hidden = false;
}));
lbEl.addEventListener("click", () => { lbEl.hidden = true; });
$("#memgo").addEventListener("click", () => { memEl.hidden = true; startMatch(); });

const MATCH_LINE = "“It’s a privilege to have someone like you in my life, and a blessing to have you be a part of it.”";
function startMatch() {
  say("A little memory game. Flip the cards and match the pairs.", { mode: "center", button: "START", onButton: runMatch });
}
function runMatch() {
  wrap.hidden = true;
  if (!FLOWERS) FLOWERS = [makeFlower("#ffffff", "#cdd6ee", "#ffd93b"), makeFlower("#ff8fc0", "#c9477f", "#ffd93b"), makeFlower("#ffd93b", "#d49a12", "#8a4b1b"), makeFlower("#ff9a3c", "#c4561a", "#8a4b1b")];
  const GOLD = { Y: "#ffd93b", L: "#fff3a6", D: "#a86a00", R: "#ff5d8f", B: "#7db4ff" };
  const icons = [
    '<img src="' + FLOWERS[0] + '" alt="">',
    '<img src="' + FLOWERS[1] + '" alt="">',
    HEART,
    gridSVG(["....Y....", "...YLY...", "YYYYYYYYY", ".YYYYYYY.", "..YYYYY..", "..YYYYY..", ".YYY.YYY.", ".YY...YY.", "YY.....YY"], GOLD),
    gridSVG(["Y...Y...Y", "YY.YYY.YY", "YYYYYYYYY", "YRYYBYYRY", "YYYYYYYYY", "DDDDDDDDD"], GOLD),
    gridSVG(["..YYYY..", ".YYL....", "YYL.....", "YY......", "YY......", "YYD.....", ".YYD....", "..YYYY.."], GOLD)
  ];
  const names = ["daisy", "gerbera", "heart", "star", "crown", "moon"];
  const deck = icons.flatMap((h, i) => [i, i]).map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  const grid = $("#mgrid"); grid.innerHTML = "";
  let first = null, lock = false, moves = 0, matched = 0;
  const mv = $("#mmoves"); mv.textContent = "MOVES 0";
  deck.forEach(k => {
    const c = document.createElement("button");
    c.type = "button"; c.className = "mc"; c.dataset.k = k; c.setAttribute("aria-label", "Card");
    c.innerHTML = '<span class="bk"></span><span class="fc">' + icons[k] + "</span>";
    c.addEventListener("click", () => {
      if (lock || c.classList.contains("up")) return;
      c.classList.add("up"); c.setAttribute("aria-label", names[k]);
      if (!first) { first = c; return; }
      moves++; mv.textContent = "MOVES " + moves;
      const a = first; first = null;
      if (a.dataset.k === c.dataset.k) {
        matched++; a.classList.add("done"); c.classList.add("done");
        const r = c.getBoundingClientRect(); burstAt(r.left + r.width / 2, r.top + r.height / 2, 4);
        if (matched === icons.length) {
          unlock("match");
          setTimeout(() => { matchEl.hidden = true; say(MATCH_LINE, { mode: "center", head: "A line from Stan", button: "CONTINUE", onButton: startLetter }); }, 1000);
        }
      } else {
        lock = true;
        setTimeout(() => { a.classList.remove("up"); c.classList.remove("up"); a.setAttribute("aria-label", "Card"); c.setAttribute("aria-label", "Card"); lock = false; }, 800);
      }
    });
    grid.appendChild(c);
  });
  matchEl.hidden = false;
}

// ---------- the sign-off is written by hand, one letter at a time ----------
function writeSign() {
  const l1 = signEl.querySelector(".l1"), l2 = signEl.querySelector(".l2"), sg = signEl.querySelector(".sg");
  const build = (el, t) => { el.innerHTML = ""; return [...t].map(ch => { const s = document.createElement("span"); s.className = "ch"; s.textContent = ch; el.appendChild(s); return s; }); };
  sg.classList.remove("on");
  const a = build(l1, "See you in 2027, Irish."), b = build(l2, "– Stan");
  if (sigGold) { $("#signsig").src = sigGold; signEl.classList.add("signed"); } else signEl.classList.remove("signed");
  signEl.hidden = false;
  const at = (ms, fn) => giftTimers.push(setTimeout(fn, ms));
  a.forEach((c, i) => at(300 + i * 80, () => c.classList.add("on")));
  const t2 = 300 + a.length * 80 + 350;
  b.forEach((c, i) => at(t2 + i * 110, () => c.classList.add("on")));
  at(t2 + b.length * 110 + 300, () => sg.classList.add("on"));
}

// ---------- see achievements, and the greatest one ----------
function setLantern() {
  const box = $("#lanttxt"); box.innerHTML = "";
  for (const [k, v] of [["WISH", wishText], ["RESOLUTION", resText]]) {
    if (!v) continue;
    const a = document.createElement("span"), b = document.createElement("span");
    a.className = "lk"; a.textContent = k; b.className = "lv"; b.textContent = v;
    box.appendChild(a); box.appendChild(b);
  }
}
const greatEl = $("#great");
$("#seeach").addEventListener("click", showUnlock);
$("#ulast").addEventListener("click", () => {
  greatEl.hidden = false;
  unlock("greatest");
  burstAt(innerWidth / 2, innerHeight * 0.3, 12);
});
$("#greatok").addEventListener("click", () => { greatEl.hidden = true; showUnlock(); });

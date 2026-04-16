/* ─── Navigation ───────────────────────────── */
export const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

/* ─── Personal Qualities ───────────────────── */
export const qualities = [
  { label: "Curious & Observant", icon: "🔍" },
  { label: "Continuous Learner", icon: "📚" },
  { label: "Strong Communication", icon: "💬" },
  { label: "Creative Thinker", icon: "💡" },
  { label: "Team Player", icon: "🤝" },
  { label: "Adaptable", icon: "🌱" },
];

/* ─── Education ────────────────────────────── */
export const education = [
  {
    institution: "Limkokwing University",
    location: "Malaysia",
    degree: "Bachelor of Arts Interior",
    icon: "🎓",
  },
  {
    institution: "National Institute of Business Management",
    location: "Sri Lanka",
    degree: "Foundation Studies",
    icon: "🏛️",
  },
];

/* ─── Design Philosophy Pillars ─────────────── */
export const philosophyPillars = [
  {
    number: "01",
    title: "Emotional Connection",
    description:
      "Every space should evoke feeling. I design with the emotional journey of the inhabitant at the core.",
    icon: "♥",
    color: "#D4A5A5",
  },
  {
    number: "02",
    title: "Culture & Environment",
    description:
      "Design rooted in the cultural context and natural environment of its location creates authentic, meaningful spaces.",
    icon: "🌍",
    color: "#A5C4A5",
  },
  {
    number: "03",
    title: "Traditional + Contemporary",
    description:
      "The dialogue between heritage craftsmanship and modern minimalism creates timeless, layered interiors.",
    icon: "⚡",
    color: "#A5B4C4",
  },
  {
    number: "04",
    title: "Function + Aesthetics",
    description:
      "Beauty and utility are not competing forces — they are the twin engines of great architectural thinking.",
    icon: "✦",
    color: "#C4B5A5",
  },
];

/* ─── Inspirations ─────────────────────────── */
export const inspirations = [
  {
    id: 1,
    title: "Nature & Organic Patterns",
    description:
      "Drawing from the fractal complexity of natural forms, textures, and organic geometries.",
    image: "/inspires/nature.jpeg",
    tag: "Nature",
  },
  {
    id: 2,
    title: "Cultural Heritage",
    description:
      "Traditional architecture and craft traditions offer timeless wisdom for contemporary design.",
    image: "/inspires/cultural.jpeg",
    tag: "Culture",
  },
  {
    id: 3,
    title: "Historical Design Elements",
    description:
      "The architectural vocabulary of historical periods enriches modern spatial narratives.",
    image: "/inspires/historical.jpeg",
    tag: "History",
  },
  {
    id: 4,
    title: "Natural Textures & Light",
    description:
      "The interplay of material texture and natural light transforms ordinary space into experience.",
    image: "/inspires/textures.jpeg",
    tag: "Texture",
  },
  {
    id: 5,
    title: "Traditional Crafts",
    description:
      "Handcrafted elements bring soul and human warmth to contemporary interior environments.",
    image: "/inspires/traditional.jpeg",
    tag: "Craft",
  },
];

/* ─── Design Interests ─────────────────────── */
export const designInterests = [
  {
    id: 1,
    title: "Research-Based Conceptual Design",
    description: "Evidence-driven spatial thinking rooted in deep contextual research.",
    icon: "🔬",
    gradient: "from-stone-50 to-amber-50",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 2,
    title: "Traditional & Vintage Interiors",
    description: "Celebrating the beauty of aged materials, patina, and historic proportions.",
    icon: "🏺",
    gradient: "from-amber-50 to-orange-50",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 3,
    title: "Contemporary Fusion",
    description: "Where clean modern lines meet the warmth of traditional craft and culture.",
    icon: "✦",
    gradient: "from-stone-50 to-slate-50",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 4,
    title: "Cultural Interiors",
    description: "Spaces that tell stories of identity, place, and collective memory.",
    icon: "🌿",
    gradient: "from-green-50 to-emerald-50",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 5,
    title: "Material Exploration",
    description: "Experimenting with natural and unexpected materials to create tactile experiences.",
    icon: "🪵",
    gradient: "from-amber-50 to-stone-50",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 6,
    title: "Spatial Storytelling",
    description: "Crafting environments where every element contributes to a cohesive narrative.",
    icon: "📖",
    gradient: "from-slate-50 to-stone-50",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 7,
    title: "Pattern Development",
    description: "Developing surface patterns inspired by cultural motifs and natural geometries.",
    icon: "◈",
    gradient: "from-rose-50 to-stone-50",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=600&q=75",
  },
  {
    id: 8,
    title: "Sustainable Design",
    description: "Designing responsibly with materials and systems that respect our planet.",
    icon: "♻",
    gradient: "from-emerald-50 to-teal-50",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=75",
  },
];

/* ─── Projects ─────────────────────────────── */
export type ProjectCategory = "All" | "3D Visualization" | "2D Drawings" | "Furniture";

export const projectCategories: ProjectCategory[] = [
  "All",
  "3D Visualization",
  "2D Drawings",
  "Furniture",
];

export interface ImageDetail {
  name: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  thumbnail: string;
  images: string[];
  imageCount: number;
  imageDetails?: ImageDetail[];
  featured?: boolean;
}

export const projects: Project[] = [
  /* ── 3D Visualization ── */
  {
    id: 1,
    title: "Lovi Ceylone — Airport Duty-Free Kiosk",
    category: "3D Visualization",
    description:
      "Inspired by the Sri Lankan Poruwa ceremony, this airport duty-free retail kiosk reinterprets cultural heritage through a minimalist contemporary design language. An elevated platform, wooden pillars referencing ceremonial forms, a circular moonstone-inspired wall feature, and a symbolic roof structure combine natural wood with modern materials — translating tradition into a refined airport retail experience.",
    thumbnail: "/project01/image01.jpeg",
    images: [
      "/project01/image01.jpeg",
      "/project01/image02.jpeg",
      "/project01/image03.jpeg",
      "/project01/image04.jpeg",
      "/project01/image05.jpeg",
      "/project01/image06.jpeg",
      "/project01/image07.jpeg",
      "/project01/image08.jpeg",
      "/project01/image09.jpeg",
    ],
    imageCount: 9,
    featured: true,
  },
  {
    id: 2,
    title: "Crescent SereniTea Cabana",
    category: "3D Visualization",
    description:
      "A contemporary leisure retreat nestled within a tea estate landscape, where architecture harmonises with nature. Centred around a semi-circular pool, the cabana integrates an outdoor BBQ and open-air cinema experience, an elevated deck overlooking the water, and a seamless spatial connection between built form and surrounding hills. Warm wooden finishes and neutral earth tones echo the calm beauty of the tea estate.",
    thumbnail: "/project02/image01.jpeg",
    images: [
      "/project02/image01.jpeg",
      "/project02/image02.jpeg",
      "/project02/image03.jpeg",
      "/project02/image04.jpeg",
      "/project02/image05.jpeg",
      "/project02/image06.jpeg",
      "/project02/image07.jpeg",
      "/project02/image08.jpeg",
      "/project02/image09.jpeg",
      "/project02/image10.jpeg",
      "/project02/image11.jpeg",
      "/project02/image12.jpeg",
      "/project02/image13.jpeg",
      "/project02/image14.jpeg",
      "/project02/image15.jpeg",
      "/project02/image16.jpeg",
      "/project02/image17.jpeg",
      "/project02/image18.jpeg",
      "/project02/image19.jpeg",
      "/project02/image20.jpeg",
      "/project02/image21.jpeg",
      "/project02/image22.jpeg",
      "/project02/image23.jpeg",
      "/project02/image24.jpeg",
    ],
    imageCount: 24,
    featured: true,
  },
  {
    id: 3,
    title: "SORA VITA — Residential Interior",
    category: "3D Visualization",
    description:
      "Inspired by the swallow bird and its feathers — symbolising freedom, movement, and renewal — SORA VITA is a minimalist residential interior that balances grounded stability with a sense of limitless liberation. Open, airy spatial compositions, smooth flowing forms, and organic influences are rendered in light wood, soft textures, and a muted palette of whites, soft blues, greys, and earth tones, creating a tranquil and poetic living environment.",
    thumbnail: "/project03/image01.png",
    images: [
      "/project03/image01.png",
      "/project03/image02.jpeg",
      "/project03/image03.jpeg",
      "/project03/image04.jpeg",
      "/project03/image05.jpeg",
      "/project03/image06.jpeg",
      "/project03/image07.jpeg",
      "/project03/image08.jpeg",
      "/project03/image09.jpeg",
      "/project03/image10.jpeg",
      "/project03/image11.jpeg",
      "/project03/image12.jpeg",
      "/project03/image13.jpeg",
      "/project03/image14.jpeg",
      "/project03/image15.jpeg",
      "/project03/image16.jpeg",
    ],
    imageCount: 16,
    featured: true,
  },
  {
    id: 4,
    title: "AMORE — Food Truck Design",
    category: "3D Visualization",
    description:
      "A thematic food truck designed for Viharamahadevi Park, Colombo, AMORE draws from the romantic narrative of Romeo and Juliet and the sun-drenched coastal identity of Positano, Italy. Pastel tones, Mongolian traditional patterns, and contemporary street art aesthetics layer into an immersive cultural dining experience — complete with a ground-floor kitchen, lounge seating, and an outdoor King Coconut station.",
    thumbnail: "/project04/image01.jpeg",
    images: [
      "/project04/image01.jpeg",
      "/project04/image02.jpeg",
      "/project04/image03.jpeg",
      "/project04/image04.jpeg",
      "/project04/image05.jpeg",
      "/project04/image06.jpeg",
      "/project04/image07.jpeg",
      "/project04/image08.jpeg",
      "/project04/image09.jpeg",
      "/project04/image10.jpeg",
      "/project04/image11.jpeg",
    ],
    imageCount: 11,
  },
  /* ── 2D Drawings ── */
  {
    id: 5,
    title: "The Floating Serenity — Bus Halt",
    category: "2D Drawings",
    description:
      "A biomimicry-inspired bus halt along the Kotte Road corridor in Rajagiriya, facing Diyatha Uyana Linear Park and Diyawanna Lake. Guided by the organic form of the water hyacinth, this urban pause-point features a cross-laminated timber canopy, ventilated brick walls for passive cooling, leaf-patterned flooring, integrated creeping greenery, and a solar-powered lighting and charging system — transforming a commuter halt into a restorative urban sanctuary.",
    thumbnail: "/project05/Screenshot%202026-04-17%20at%2001.26.37.png",
    images: [
      "/project05/Screenshot%202026-04-17%20at%2001.26.37.png",
      "/project05/Screenshot%202026-04-17%20at%2001.27.04.png",
      "/project05/Screenshot%202026-04-17%20at%2001.27.30.png",
    ],
    imageCount: 3,
  },
  {
    id: 6,
    title: "Bodimkarayo — Student Hostel",
    category: "2D Drawings",
    description:
      "Rooted in the narrative of Bodimkarayo — one of Sri Lanka's first realistic stage dramas from the 1950s–60s — this student hostel design translates the intimate, collective, and culturally rich boarding house life into a contemporary residential typology. The design honours shared spaces, emotional connection, and communal living, reimagining the boarding house spirit for today's student community.",
    thumbnail: "/project06/image01.png",
    images: [
      "/project06/image01.png",
      "/project06/image02.png",
      "/project06/image03.png",
      "/project06/image04.png",
      "/project06/image05.png",
      "/project06/image06.png",
    ],
    imageCount: 6,
  },
  /* ── Furniture ── */
  {
    id: 7,
    title: "Mirror Collection",
    category: "Furniture",
    description:
      "Stories woven in cane and carved in wood — five handcrafted mirrors echoing the legacy of Sri Lankan local materials and cultural heritage.",
    thumbnail: "/mirror/image01.jpeg",
    images: [
      "/mirror/image01.jpeg",
      "/mirror/image02.jpeg",
      "/mirror/image03.jpeg",
      "/mirror/image04.jpeg",
      "/mirror/image05.jpeg",
    ],
    imageCount: 5,
    imageDetails: [
      {
        name: "Manor Grace Mirror",
        description:
          "A handcrafted, foldable tabletop mirror inspired by Sri Lankan colonial Walawwa architecture. Features an arched central mirror framed in warm wood, flanked by hinged rattan panels that double as elegant jewellery organizers — perfect for dressing tables or boutique décor.",
      },
      {
        name: "Arka Mirror",
        description:
          "A handcrafted vanity mirror with a round glass front framed in traditional Sri Lankan rattan cane weaving and dark wood. The reverse displays a cultural motif of a lotus flame and elephant, symbolising purity and strength. Turned wooden posts and a solid base blend tradition with modern utility.",
      },
      {
        name: "Triple Grace Mirror",
        description:
          "A handcrafted tri-fold vanity mirror combining traditional Sri Lankan rattan cane weaving with rich wooden framing. The centre holds a full mirror while the side panels pair mirrors with cane sections designed to hang earrings — stylish, functional, and ideal for dressing tables or boutique spaces.",
      },
      {
        name: "Grand Tamarid Mirror",
        description:
          "A classic vintage-inspired piece with a dark wooden frame accented by intricate cane weaving. Its gently arched top and sturdy base lend elegant antique charm — the blend of simple structure and detailed rattan work makes it a timeless addition to traditional or retro-inspired interiors.",
      },
      {
        name: "Artisan's Reflection Mirror",
        description:
          "An elegant, handcrafted pentagonal mirror featuring a dark wood frame with intricate woven cane detailing, mounted on a sturdy round base. It combines vintage charm with natural warmth — a piece made for those who appreciate timeless artisanal craftsmanship.",
      },
    ],
    featured: true,
  },
  {
    id: 8,
    title: "Leafline Console Table",
    category: "Furniture",
    description:
      "An Art Nouveau–inspired furniture piece, the Leafline Console draws from the organic form of a half-open leaf and flowing vines. Crafted from solid mahogany with a wrought iron base, it blends natural movement with refined craftsmanship — transforming nature's elegance into a sculptural yet functional console that reflects harmony between art, nature, and design.",
    thumbnail: "/table/WhatsApp%20Image%202026-04-17%20at%2001.48.38.jpeg",
    images: ["/table/WhatsApp%20Image%202026-04-17%20at%2001.48.38.jpeg"],
    imageCount: 1,
  },
  {
    id: 9,
    title: "Heritage Lamp",
    category: "Furniture",
    description:
      "Inspired by Sri Lankan traditional art patterns combined with colonial design influences, this handcrafted lamp is crafted from wood and rattan cane. Carved details and woven surfaces allow soft light diffusion, casting warm patterned shadows — functioning as both a decorative sculptural piece and a celebration of local craftsmanship and cultural heritage.",
    thumbnail: "/lamp/WhatsApp%20Image%202026-04-17%20at%2001.53.00.jpeg",
    images: ["/lamp/WhatsApp%20Image%202026-04-17%20at%2001.53.00.jpeg"],
    imageCount: 1,
  },
];

/* ─── Videos ───────────────────────────────── */
export const videos = [
  {
    id: 1,
    title: "Residential Interior Walkthrough",
    description: "A cinematic tour through a contemporary residential interior design project.",
    thumbnail: "/project01/image03.jpeg",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with real ID
    duration: "2:34",
    category: "3D Visualization",
  },
  {
    id: 2,
    title: "Heritage Space Design Process",
    description: "Behind the scenes of conceptualizing a culturally inspired interior space.",
    thumbnail: "/project02/image04.jpeg",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with real ID
    duration: "3:12",
    category: "Process",
  },
  {
    id: 3,
    title: "Furniture Design & Craftsmanship",
    description: "Exploring the design language and material choices behind the timber collection.",
    thumbnail: "/project04/image02.jpeg",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with real ID
    duration: "1:58",
    category: "Furniture",
  },
];

/* ─── Blog Posts ───────────────────────────── */
export const blogPosts = [
  {
    id: 1,
    title: "The Dialogue Between Tradition and Modernity in Interior Space",
    excerpt:
      "Exploring how cultural heritage and contemporary minimalism can coexist to create deeply meaningful interior environments that stand the test of time.",
    category: "Design Philosophy",
    readTime: "5 min read",
    coverImage: "/project02/image06.jpeg",
    date: "March 2026",
  },
  {
    id: 2,
    title: "Material Honesty: Why Natural Surfaces Matter in Design",
    excerpt:
      "A deep dive into the philosophy of material authenticity — why exposed timber, raw stone, and natural textiles create more emotionally resonant spaces.",
    category: "Materials",
    readTime: "4 min read",
    coverImage: "/project04/image04.jpeg",
    date: "February 2026",
  },
  {
    id: 3,
    title: "Light as the Fifth Material: Designing with Natural Illumination",
    excerpt:
      "How thoughtful daylighting strategies transform the quality of interior space, creating dynamic environments that change with the rhythm of the day.",
    category: "Lighting",
    readTime: "6 min read",
    coverImage: "/project01/image06.jpeg",
    date: "January 2026",
  },
];

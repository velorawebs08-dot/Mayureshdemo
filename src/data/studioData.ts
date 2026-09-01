import { PortfolioCategory, TrustPoint, Testimonial, BranchInfo, InstagramPost } from '../types.ts';

export const STUDIO_CONFIG = {
  name: "Mayuresh Photo Wala",
  founder: "Vinayak Mharugude",
  founderImageUrl: "https://cdn.phototourl.com/free/2026-09-01-6077fb75-1248-42bf-876c-7759695cd466.jpg",
  logoUrl: "https://cdn.phototourl.com/free/2026-09-01-9308f384-0e86-41f4-80fa-6a0d8297bcd8.png",
  heroVideoUrl: "https://www.image2url.com/r2/default/videos/1788242440779-fc7a120a-2a38-48bd-a5fe-f374e7d2492c.mp4",
  whatsappNumber: "919595955220",
  whatsappLink: "https://wa.me/919595955220",
  callNumber: "+919922226779",
  callTel: "tel:+919922226779",
  instagramUrl: "https://www.instagram.com/mayuresh_photowala__/?hl=en",
  instagramHandle: "@mayuresh_photowala__",
  facebookUrl: "https://facebook.com",
  linkedinUrl: "https://linkedin.com",
  heroSubtitleLine1: "Capturing timeless moments across weddings, pre-weddings & celebrations.",
  heroSubtitleLine2: "Trusted across Sangli & beyond, wherever your story takes us.",
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Sacred Vows & Grand Royal Celebrations",
    videoUrl: "https://www.image2url.com/r2/default/videos/1788242891454-68572c14-152d-4321-ab83-9dd2e535ecfd.mp4",
    coverImage: "https://cdn.phototourl.com/member/2026-09-01-f04183a5-d140-41a1-90cf-863b3b8485f7.webp",
    photos: [
      {
        id: "w1",
        url: "https://cdn.phototourl.com/member/2026-09-01-f04183a5-d140-41a1-90cf-863b3b8485f7.webp",
        alt: "Wedding ceremony portrait 1",
        tag: "Royal Wedding",
        aspectRatio: "portrait"
      },
      {
        id: "w2",
        url: "https://cdn.phototourl.com/member/2026-09-01-5f66218a-1802-4d54-939f-d8a35b86703b.webp",
        alt: "Wedding ceremony portrait 2",
        tag: "Bridal Splendor",
        aspectRatio: "portrait"
      },
      {
        id: "w3",
        url: "https://cdn.phototourl.com/member/2026-09-01-f5574e25-292f-4a5e-b8b9-3e7a9aedd157.webp",
        alt: "Wedding ceremony portrait 3",
        tag: "Sacred Rituals",
        aspectRatio: "portrait"
      },
      {
        id: "w4",
        url: "https://cdn.phototourl.com/member/2026-09-01-ba4e35b8-132c-42ec-978e-24d945b4b628.webp",
        alt: "Wedding ceremony portrait 4",
        tag: "Varmala Moment",
        aspectRatio: "portrait"
      },
      {
        id: "w5",
        url: "https://cdn.phototourl.com/member/2026-09-01-cdb6328b-e8f7-4c38-84f4-1bc3c5697156.webp",
        alt: "Wedding ceremony portrait 5",
        tag: "Timeless Vows",
        aspectRatio: "portrait"
      }
    ]
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding",
    subtitle: "Cinematic Romance & Scenic Escapes",
    videoUrl: "https://www.image2url.com/r2/default/videos/1788242674636-85b7b40f-fb24-4900-bc0b-b7a69c54a007.mp4",
    coverImage: "https://cdn.phototourl.com/free/2026-09-01-c5590c21-7608-44e3-8194-fbbeba901c05.webp",
    photos: [
      {
        id: "pw1",
        url: "https://cdn.phototourl.com/free/2026-09-01-c5590c21-7608-44e3-8194-fbbeba901c05.webp",
        alt: "Cinematic pre-wedding portrait 1",
        tag: "Pre-Wedding Romance",
        aspectRatio: "portrait"
      },
      {
        id: "pw2",
        url: "https://cdn.phototourl.com/free/2026-09-01-f56c433d-db48-4b81-961f-dc1c6bde444b.webp",
        alt: "Cinematic pre-wedding portrait 2",
        tag: "Scenic Moments",
        aspectRatio: "portrait"
      },
      {
        id: "pw3",
        url: "https://cdn.phototourl.com/member/2026-09-01-82d90356-c31e-4b28-a903-e43e1186fe4b.webp",
        alt: "Cinematic pre-wedding portrait 3",
        tag: "Golden Hour Escape",
        aspectRatio: "portrait"
      },
      {
        id: "pw4",
        url: "https://cdn.phototourl.com/member/2026-09-01-5360b6d8-d83d-4ae1-8a33-85565e2192f5.webp",
        alt: "Cinematic pre-wedding portrait 4",
        tag: "Editorial Couple",
        aspectRatio: "portrait"
      },
      {
        id: "pw5",
        url: "https://cdn.phototourl.com/member/2026-09-01-adf78bbc-9dc4-43c4-a5ef-f6460eee270a.webp",
        alt: "Cinematic pre-wedding portrait 5",
        tag: "Timeless Connection",
        aspectRatio: "portrait"
      }
    ]
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "Maternity Grace & Tender New Beginnings",
    videoUrl: "https://www.image2url.com/r2/default/videos/1788242549062-e2358726-1ebb-48a7-862f-1d30da963f84.mp4",
    coverImage: "https://cdn.phototourl.com/member/2026-09-01-5925b5b4-3a52-4af9-a186-8c0b5d9a24ab.jpg",
    photos: [
      {
        id: "bs1",
        url: "https://cdn.phototourl.com/member/2026-09-01-5925b5b4-3a52-4af9-a186-8c0b5d9a24ab.jpg",
        alt: "Baby shower celebration portrait 1",
        tag: "Baby Shower Grace",
        aspectRatio: "portrait"
      },
      {
        id: "bs2",
        url: "https://cdn.phototourl.com/member/2026-09-01-e4ae28ef-2f5c-4a29-8cca-6f3255ad8c53.jpg",
        alt: "Baby shower celebration portrait 2",
        tag: "Tender Moments",
        aspectRatio: "portrait"
      },
      {
        id: "bs3",
        url: "https://cdn.phototourl.com/free/2026-09-01-09d55c7b-364b-4231-9d32-b039d4fc02ba.jpg",
        alt: "Baby shower celebration portrait 3",
        tag: "Joyful Celebrations",
        aspectRatio: "portrait"
      },
      {
        id: "bs4",
        url: "https://cdn.phototourl.com/free/2026-09-01-1180730e-d525-4595-a1f8-109fc8e3480b.jpg",
        alt: "Baby shower celebration portrait 4",
        tag: "Family Blessings",
        aspectRatio: "portrait"
      },
      {
        id: "bs5",
        url: "https://cdn.phototourl.com/free/2026-09-01-fe7deb5a-d5e4-4fe2-89be-684045a11147.jpg",
        alt: "Baby shower celebration portrait 5",
        tag: "New Beginnings",
        aspectRatio: "portrait"
      }
    ]
  },
  {
    id: "events",
    title: "Events",
    subtitle: "High-Profile Galas & Milestone Celebrations",
    videoUrl: "https://www.image2url.com/r2/default/videos/1788242820632-89e82d53-b4b0-44ba-903c-810ca40b1edd.mp4",
    coverImage: "https://cdn.phototourl.com/free/2026-09-01-d8825e4b-54d7-48b7-a484-5820ed1385f6.jpg",
    photos: [
      {
        id: "ev1",
        url: "https://cdn.phototourl.com/free/2026-09-01-d8825e4b-54d7-48b7-a484-5820ed1385f6.jpg",
        alt: "Event milestone celebration portrait 1",
        tag: "Grand Gala",
        aspectRatio: "portrait"
      },
      {
        id: "ev2",
        url: "https://cdn.phototourl.com/free/2026-09-01-1f88bd6b-889f-427b-b1e7-eccff0d24e47.jpg",
        alt: "Event milestone celebration portrait 2",
        tag: "Milestone Celebration",
        aspectRatio: "portrait"
      },
      {
        id: "ev3",
        url: "https://i.postimg.cc/cHMM1RY3/Events-3.jpg",
        alt: "Event milestone celebration portrait 3",
        tag: "Live Festivities",
        aspectRatio: "portrait"
      },
      {
        id: "ev4",
        url: "https://i.postimg.cc/DyYQzyWj/Events-4.jpg",
        alt: "Event milestone celebration portrait 4",
        tag: "Special Moments",
        aspectRatio: "portrait"
      },
      {
        id: "ev5",
        url: "https://i.postimg.cc/Qts1zFPL/Events-5.jpg",
        alt: "Event milestone celebration portrait 5",
        tag: "Grand Atmosphere",
        aspectRatio: "portrait"
      }
    ]
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: "tp1",
    iconName: "Camera",
    title: "Expert Photo & Video Team",
    description: "Experienced photographers and filmmakers using top-quality cameras and lenses to capture every detail."
  },
  {
    id: "tp2",
    iconName: "Sparkles",
    title: "Beautiful Color & Editing",
    description: "Every photo and video is carefully edited with natural skin tones and rich cinematic colors."
  },
  {
    id: "tp3",
    iconName: "Compass",
    title: "Travel & Destination Ready",
    description: "We travel across India and destination venues for your weddings, pre-weddings, and celebrations."
  },
  {
    id: "tp4",
    iconName: "Clock",
    title: "Fast Delivery",
    description: "Get your teaser video in just 72 hours, with quick and easy online access to your full photo album."
  },
  {
    id: "tp5",
    iconName: "ShieldCheck",
    title: "100% Privacy & Safety",
    description: "Your personal photos and family memories are always kept safe, private, and secure."
  }
];

export const STATS = [
  { value: 14, suffix: "+", label: "Years of Experience" },
  { value: 1800, suffix: "+", label: "Events & Shoots Covered" },
  { value: 35, suffix: "+", label: "Cities Covered" },
  { value: 100, suffix: "%", label: "Happy Clients" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Dr. Rohan & Snehal Patil",
    eventType: "Wedding Ceremony",
    location: "Sangli",
    quote: "The team captured our wedding beautifully. Every photo and video turned out truly stunning!",
    rating: 5
  },
  {
    id: "t2",
    clientName: "Aniket & Pooja Deshmukh",
    eventType: "Pre-Wedding Shoot",
    location: "Udaipur & Sangli",
    quote: "Super creative and friendly team. Our pre-wedding shoot looked just like a movie!",
    rating: 5
  },
  {
    id: "t3",
    clientName: "Vikramaditya & Tanvi Kadam",
    eventType: "Wedding & Reception",
    location: "Sangli",
    quote: "Amazing candid photos and very fast delivery. All our family and guests loved the album.",
    rating: 5
  },
  {
    id: "t4",
    clientName: "Priyanka & Saurabh Joshi",
    eventType: "Maternity & Family Shoot",
    location: "Kolhapur & Sangli",
    quote: "Very comfortable experience and gorgeous portraits. Truly the best team in the region.",
    rating: 5
  },
  {
    id: "t5",
    clientName: "Rajeshwar Shinde & Family",
    eventType: "Family Milestone Gala",
    location: "Sangli City",
    quote: "Very professional, polite, and top quality work. Highly recommended for any grand celebration!",
    rating: 5
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig1",
    imageUrl: "https://cdn.phototourl.com/member/2026-09-01-f04183a5-d140-41a1-90cf-863b3b8485f7.webp",
    caption: "Royal wedding moments captured with love ✨",
    likes: "2.4k",
    link: "https://www.instagram.com/mayuresh_photowala__/?hl=en"
  },
  {
    id: "ig2",
    imageUrl: "https://cdn.phototourl.com/free/2026-09-01-c5590c21-7608-44e3-8194-fbbeba901c05.webp",
    caption: "Golden hour pre-wedding love in Sangli 🌅",
    likes: "3.1k",
    link: "https://www.instagram.com/mayuresh_photowala__/?hl=en"
  },
  {
    id: "ig3",
    imageUrl: "https://cdn.phototourl.com/member/2026-09-01-5f66218a-1802-4d54-939f-d8a35b86703b.webp",
    caption: "Stunning bridal portraiture & traditional elegance 👑",
    likes: "4.2k",
    link: "https://www.instagram.com/mayuresh_photowala__/?hl=en"
  },
  {
    id: "ig4",
    imageUrl: "https://cdn.phototourl.com/member/2026-09-01-5925b5b4-3a52-4af9-a186-8c0b5d9a24ab.jpg",
    caption: "Baby shower celebrations & sweet family blessings 🌸",
    likes: "2.9k",
    link: "https://www.instagram.com/mayuresh_photowala__/?hl=en"
  },
  {
    id: "ig5",
    imageUrl: "https://cdn.phototourl.com/free/2026-09-01-f56c433d-db48-4b81-961f-dc1c6bde444b.webp",
    caption: "Scenic pre-wedding frames & unforgettable moments 💫",
    likes: "3.5k",
    link: "https://www.instagram.com/mayuresh_photowala__/?hl=en"
  },
  {
    id: "ig6",
    imageUrl: "https://cdn.phototourl.com/free/2026-09-01-d8825e4b-54d7-48b7-a484-5820ed1385f6.jpg",
    caption: "Grand celebrations & event milestones in full swing 🎉",
    likes: "3.8k",
    link: "https://www.instagram.com/mayuresh_photowala__/?hl=en"
  }
];

export const BRANCHES: BranchInfo[] = [
  {
    id: "main-branch",
    name: "Main Flagship Studio",
    address: "Ushakal Hospital Rd, near Radha Krishna Mandir, Sangli, Dattanagar, Sangli Miraj Kupwad, Maharashtra 416416",
    mapUrl: "https://maps.app.goo.gl/LLTqoadUPyivuouz7",
    phone: "09922226779",
    isMain: true
  },
  {
    id: "branch-2",
    name: "Vishrambag Studio - Suite 1",
    address: "Shop No 1, Gandhi Nagar, Vishrambag, Sangli Miraj Kupwad, Maharashtra 416416",
    mapUrl: "https://maps.app.goo.gl/Ykn8n87aG7o61PZAA",
    phone: "09922226779"
  },
  {
    id: "branch-3",
    name: "Vishrambag Studio - Suite 2",
    address: "Shop No 1, Gandhi Nagar, Vishrambag, Sangli Miraj Kupwad, Maharashtra 416416",
    mapUrl: "https://maps.app.goo.gl/Ykn8n87aG7o61PZAA",
    phone: "09623335522"
  }
];

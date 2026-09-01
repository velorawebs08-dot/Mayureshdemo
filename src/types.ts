export interface PortfolioCategory {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  coverImage: string;
  photos: {
    id: string;
    url: string;
    alt: string;
    tag: string;
    aspectRatio?: 'portrait' | 'landscape' | 'square';
  }[];
}

export interface TrustPoint {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  location: string;
  quote: string;
  rating: number;
}

export interface BranchInfo {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  phone: string;
  isMain?: boolean;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  link: string;
}

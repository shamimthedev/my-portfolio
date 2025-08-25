import Nestmart from "@/assets/images/nestmart.png";
import MangoBazar from "@/assets/images/mango-bazar.png";
import PinkCart from "@/assets/images/pinkcart.png";
import ViteCart from "@/assets/images/vitecart.png";
import Kosi from "@/assets/images/kosi.png";

const portfolioProjects = [
  {
    tech: ["React", "Redux Toolkit", "Material-UI", "Framer Motion", "Leaflet Maps"],
    title: "NestMart - Where Shopping Feels Like Home",
    results: [
      { title: "Built full-featured multipurpose eCommerce with advanced UI components." },
      { title: "Implemented Redux state management with cart persistence and user preferences." },
      { title: "Integrated interactive maps and smooth animations for premium UX." },
    ],
    git: "https://github.com/shamimthedev/nestmart-ecommerce",
    live: "https://nestmart-ecommerce.vercel.app/",
    image: Nestmart,
  },
  {
    tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "SEO Optimization"],
    title: "Chapai Mango Bazar - Premium Mango Marketplace",
    results: [
      { title: "Developed specialized mango e-commerce platform with location-based features." },
      { title: "Enhanced user experience by 40% through intuitive navigation and fast loading." },
      { title: "Implemented advanced SEO strategies for better organic search visibility." },
    ],
    git: "https://github.com/shamimthedev/chapai-mango-bazar",
    live: "https://chapaimangobazar.com/",
    image: MangoBazar,
  },
  {
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Modern Animations"],
    title: "PinkCart - Where Quality Meets Style",
    results: [
      { title: "Created modern e-commerce platform with dynamic product showcases." },
      { title: "Designed interactive hero section with smooth slider animations." },
      { title: "Implemented responsive design with sticky navigation for optimal mobile UX." },
    ],
    git: "https://github.com/shamimthedev/pinkcart-ecommerce",
    live: "https://pinkcart-nextjs.vercel.app/",
    image: PinkCart
  },
  {
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Toast Notifications"],
    title: "Kosi - Crafted for Comfort",
    results: [
      { title: "Developed premium furniture store with sophisticated product presentation." },
      { title: "Integrated Redux Toolkit for seamless cart and wishlist management." },
      { title: "Designed elegant, comfort-focused UI reflecting premium furniture branding." },
    ],
    git: "https://github.com/shamimthedev/kosi-furniture-store",
    live: "https://kosi-furniture.vercel.app/",
    image: Kosi
  },
  {
    tech: ["React", "Vite", "Tailwind CSS", "React Slick"],
    title: "ViteCart - Lightning Fast Shopping",
    results: [
      { title: "Built high-performance e-commerce with Vite for ultra-fast development." },
      { title: "Implemented smooth product carousels and modern UI components." },
      { title: "Optimized for speed with lazy loading and efficient state management." },
    ],
    git: "https://github.com/shamimthedev/vitecart-shop",
    live: "https://vitecart-shop.vercel.app/",
    image: ViteCart,
  }
];

// Additional project suggestions for future additions:
const upcomingProjects = [
  {
    tech: ["React", "Vite", "Tailwind CSS", "React Slick"],
    title: "ViteCart - Lightning Fast Shopping",
    results: [
      { title: "Built high-performance e-commerce with Vite for ultra-fast development." },
      { title: "Implemented smooth product carousels and modern UI components." },
      { title: "Optimized for speed with lazy loading and efficient state management." },
    ],
    git: "https://github.com/shamimthedev/vitecart-shop",
    live: "https://vitecart-demo.vercel.app/",
    // image: ViteCart, // When you add the image
  }
];

export { portfolioProjects, upcomingProjects };
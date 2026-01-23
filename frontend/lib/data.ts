export const PRODUCTS = [
  {
    id: 1,
    title: "Cardigan 'Luna' Oversized",
    price: "$25.00",
    description: "Un cardigan oversized perfecto para las noches frescas de verano o los días acogedores de otoño. Diseñado con una textura rica y un ajuste relajado que favorece a todos.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Ropa",
    type: "Patrón PDF",
    difficulty: "Intermedio",
    time: "15-20 Horas",
    hook: "5.0 mm"
  },
  {
    id: 2,
    title: "Top 'Summer Breeze'",
    price: "$12.00",
    description: "Ligero, aireado y lleno de estilo. Este top es un proyecto rápido que te encantará tejer y usar.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Ropa",
    type: "Patrón PDF",
    difficulty: "Fácil",
    time: "5-8 Horas",
    hook: "3.5 mm"
  },
  {
    id: 3,
    title: "Bolso 'Market' Eco",
    price: "$8.00",
    description: "Dile adiós al plástico con este bolso de mercado resistente y chic. Perfecto para tus compras o para llevar a la playa.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Accesorios",
    type: "Patrón PDF",
    difficulty: "Principiante",
    time: "3-5 Horas",
    hook: "4.0 mm"
  },
  {
    id: 4,
    title: "Bufanda 'Cozy' Chunky",
    price: "$15.00",
    description: "Abrígate con estilo. Esta bufanda utiliza puntos básicos para crear una textura increíblemente suave y cálida.",
    images: [
      "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Accesorios",
    type: "Patrón PDF",
    difficulty: "Principiante",
    time: "4-6 Horas",
    hook: "6.0 mm"
  },
  {
    id: 5,
    title: "Gorro 'Winter' PomPom",
    price: "$10.00",
    description: "Un clásico de invierno con un toque moderno. Aprende a hacer el pompom perfecto y teje este gorro en un fin de semana.",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Accesorios",
    type: "Patrón PDF",
    difficulty: "Fácil",
    time: "3-4 Horas",
    hook: "5.5 mm"
  },
  {
    id: 6,
    title: "Manta 'Heirloom'",
    price: "$30.00",
    description: "Una pieza para atesorar por generaciones. Esta manta combina diferentes puntos para un resultado espectacular.",
    images: [
      "https://images.unsplash.com/photo-1513373319109-eb154073eb0b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Hogar",
    type: "Patrón PDF",
    difficulty: "Avanzado",
    time: "30+ Horas",
    hook: "4.5 mm"
  },
];

export const getProductById = (id: string | number) => {
  return PRODUCTS.find((p) => p.id === Number(id));
};

export const getRelatedProducts = (currentId: number, category: string) => {
  return PRODUCTS.filter((p) => p.category === category && p.id !== currentId).slice(0, 3);
};

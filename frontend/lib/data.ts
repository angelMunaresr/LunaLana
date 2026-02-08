export const PRODUCTS = [
  {
    id: 1,
    title: "Mang BT21 'Born to Dance'",
    price: "$12.00",
    description: "Patrón PDF para tejer a Mang en sus dos versiones: Plushie y Llavero. Incluye instrucciones detalladas para la máscara removible.",
    images: [
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=1000&auto=format&fit=crop", // Placeholder, idealmente sería la foto real de Mang
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    category: "K-Pop",
    type: "Patrón PDF",
    difficulty: "Intermedio",
    time: "5-7 Horas",
    hook: "2.5 mm",
    isNew: true
  },
  {
    id: 2,
    title: "Wootteo Amigurumi",
    price: "$10.00",
    description: "El compañero espacial favorito. Incluye patrón para el cuerpo base y detalles bordados.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop", // Placeholder
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop"
    ],
    category: "K-Pop",
    type: "Patrón PDF",
    difficulty: "Fácil",
    time: "4-5 Horas",
    hook: "3.0 mm",
    isNew: false
  },
  {
    id: 3,
    title: "Baby Koya Plushie",
    price: "$9.00",
    description: "La versión más tierna y dormilona de Koya. Perfecto para principiantes en amigurumi.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop", // Placeholder
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Animalitos",
    type: "Patrón PDF",
    difficulty: "Principiante",
    time: "3-4 Horas",
    hook: "3.0 mm",
    isNew: true
  },
  {
    id: 4,
    title: "Osito 'Cozy' Navideño",
    price: "$8.50",
    description: "Un osito clásico con bufanda roja. Ideal para regalos de temporada.",
    images: [
      "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Temporada",
    type: "Patrón PDF",
    difficulty: "Fácil",
    time: "4-5 Horas",
    hook: "3.5 mm",
    isNew: false
  },
  {
    id: 5,
    title: "JK 'Bambi Eyes' Doll",
    price: "$15.00",
    description: "Muñeco inspirado en JK con detalles faciales expresivos. Nivel avanzado.",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop"
    ],
    category: "K-Pop",
    type: "Patrón PDF",
    difficulty: "Avanzado",
    time: "10-12 Horas",
    hook: "2.0 mm",
    isNew: true
  },
  {
    id: 6,
    title: "Conejito de Pascua Floral",
    price: "$9.50",
    description: "Conejito con corona de flores. Un proyecto delicado para primavera.",
    images: [
      "https://images.unsplash.com/photo-1513373319109-eb154073eb0b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Temporada",
    type: "Patrón PDF",
    difficulty: "Intermedio",
    time: "5-6 Horas",
    hook: "2.5 mm",
    isNew: false
  },
  {
    id: 7,
    title: "Gatito Siesta",
    price: "$8.00",
    description: "Gatito durmiendo en una cesta. Muy fácil de hacer.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Animalitos",
    type: "Patrón PDF",
    difficulty: "Principiante",
    time: "3 horas",
    hook: "3.5 mm",
    isNew: false
  }
];

export const getProductById = (id: string | number) => {
  return PRODUCTS.find((p) => p.id === Number(id));
};

export const getRelatedProducts = (currentId: number, category: string) => {
  return PRODUCTS.filter((p) => p.category === category && p.id !== currentId).slice(0, 3);
};

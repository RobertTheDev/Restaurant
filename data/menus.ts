import type IMenu from "../interfaces/Menu";

const menusData: IMenu[] = [
    {
        id: "1",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Various add-ons to complement your meal.",
        imageUrl:
            "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Add-ons",
        products: [],
        slug: "add-ons"
    },
    {
        id: "2",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Delicious appetizers to start your meal.",
        imageUrl:
            "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Antipastis",
        products: [],
        slug: "antipastis"
    },

    {
        id: "4",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Freshly baked bread varieties.",
        imageUrl:
            "https://images.unsplash.com/photo-1611871679274-5242ed4c3cd0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Breads",
        products: [],
        slug: "breads"
    },

    {
        id: "6",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Indulgent desserts to satisfy your sweet tooth.",
        imageUrl:
            "https://images.unsplash.com/photo-1641349268827-05362f5e726c?q=80&w=2732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Desserts",
        products: [],
        slug: "desserts"
    },
    {
        id: "7",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Freshly caught fish dishes.",
        imageUrl:
            "https://images.unsplash.com/photo-1625938393850-10f1f23de467?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fish",
        products: [],
        slug: "fish"
    },
    {
        id: "8",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Grilled sandwiches filled with flavorful ingredients.",
        imageUrl:
            "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Paninis",
        products: [],
        slug: "paninis"
    },
    {
        id: "9",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Classic Italian pasta dishes.",
        imageUrl:
            "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Pastas",
        products: [],
        slug: "pastas"
    },
    {
        id: "10",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Authentic Italian pizzas with various toppings.",
        imageUrl:
            "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Pizzas",
        products: [],
        slug: "pizzas"
    },
    {
        id: "11",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Fresh and healthy salad options.",
        imageUrl:
            "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Salads",
        products: [],
        slug: "salads"
    },
    {
        id: "12",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Warm and comforting soups.",
        imageUrl:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Soups",
        products: [],
        slug: "soups"
    },

    {
        id: "14",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Satisfying vegetarian options.",
        imageUrl:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Vegetarian",
        products: [],
        slug: "vegetarian"
    },
    {
        id: "15",
        createdAt: "2024-03-20T12:00:00.000Z",
        description: "Refreshing beverages to accompany your meal.",
        imageUrl:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Beverages",
        products: [],
        slug: "beverages"
    }
];

export default menusData;

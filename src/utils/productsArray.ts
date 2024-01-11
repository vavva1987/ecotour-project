export type Products = {
    id: number
    title: string
    description: string
    images: string
}

export const productsArray: Products[] = [
    {
        id: 1,
        title: 'Recycling',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        images: '../assets/icon.png',
    },
    {
        id: 2,
        title: 'Eco System',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        images: '../../assets/icon.png',
    },
    {
        id: 3,
        title: 'Water refine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        images: '../assets/icon.png',
    },
    {
        id: 4,
        title: 'Tourism',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        images: '../assets/icon.png',
    },
]

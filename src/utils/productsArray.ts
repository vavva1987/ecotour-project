export type Products = {
    id: number
    title: string
    description: string
    images: string
}

export type SectionType = {
    id: number
    title: string
    type: string
    date: string
    description: string
    images: string
}

export const productsArray: Products[] = [
    {
        id: 1,
        title: 'Recycling',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        images: '/images/icon.png',
    },
    {
        id: 2,
        title: 'Eco System',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        images: '/images/icon.png',
    },
    {
        id: 3,
        title: 'Water refine',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        images: '/images/icon.png',
    },
    {
        id: 4,
        title: 'Tourism',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
        images: '/images/icon.png',
    },
]

export const sectionArray: SectionType[] = [
    {
        id: 1,
        title: 'Blog Title',
        type: 'Environment, Go green',
        date: 'September 7, 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        images: '/images/img.png',
    },
    {
        id: 2,
        title: 'Blog Title',
        type: 'Environment, Go green',
        date: 'September 7, 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        images: '/images/img.png',
    },
    {
        id: 3,
        title: 'Blog Title',
        type: 'Environment, Go green',
        date: 'September 7, 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        images: '/images/img.png',
    },
    {
        id: 4,
        title: 'Blog Title',
        type: 'Environment, Go green',
        date: 'September 7, 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        images: '/images/img.png',
    },
]

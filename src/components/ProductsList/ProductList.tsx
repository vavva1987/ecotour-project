import { Card, CardContent } from '@mui/material'
import './ProductList.scss'

type Props = {
    id: number
    title: string
    description: string
    images: string
}

const ProductList = ({ id, title, description, images }: Props) => {
    return (
        <Card key={id}>
            <CardContent className="product-list" sx={{ variant: 'outlined' }}>
                <div className="product-img">
                    <img src={images} alt={title} />
                </div>
                <div>
                    <h2 className="product-title">{title}</h2>
                </div>
                <div>
                    <p className="product-description">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductList

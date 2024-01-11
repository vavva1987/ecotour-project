import { Card, CardContent } from '@mui/material'
import './ProductList.css'

type Props = {
    id: number
    title: string
    description: string
    images: string
}

const ProductList = ({ id, title, description, images }: Props) => {
    return (
        <Card>
            <CardContent className="product-list" sx={{ variant: 'outlined' }}>
                <div className="product-img">
                    <img src={images} alt={title} />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
            </CardContent>
        </Card>
    )
}

export default ProductList

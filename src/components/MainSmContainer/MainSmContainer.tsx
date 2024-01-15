import { Container, Grid, Typography } from '@mui/material'
import { productsArray } from 'utils/productsArray'
import ProductList from 'components/ProductsList/ProductList'
import ProductListItem from 'components/ProductsList/ProductListItem'

type Props = {}

const MainSmContainer = (props: Props) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography sx={{ display: 'block', textAlign: 'center' }}>
                <ProductListItem />
                <Grid container>
                    {productsArray.map(({ id, title, description, images }) => (
                        <ProductList
                            id={id}
                            title={title}
                            description={description}
                            images={images}
                        />
                    ))}
                </Grid>
            </Typography>
        </Container>
    )
}

export default MainSmContainer

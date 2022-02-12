import ProductItem from './ProductItem'
import classes from './Products.module.css'

const Products = (props) => {
    const PRODUCTS = [
        {
            id: 'p1',
            price: 8.99,
            title: 'A book',
            description: 'Just a book'
        },
        {
            id: 'p2',
            price: 12,
            title: 'Something',
            description: 'Who knows'
        }
    ]

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {PRODUCTS.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Products

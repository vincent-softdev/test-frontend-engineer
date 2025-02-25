
const ProductDetailPage = ({params}: {params: {id: string}}) => {
    return (
        <div>
            <h1>Product Detail {params.id}</h1>
        </div>
    );
}

export default ProductDetailPage

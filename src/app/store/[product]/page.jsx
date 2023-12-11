import Product from '@/components/store/product-page/Product';

const ProductDetailsPage = ({ params }) => {
  console.log(params, 'test');
  return (
    <div className="productDetails-page min-vh-100">
      <Product productCode={params.product} />
    </div>
  );
};

export default ProductDetailsPage;

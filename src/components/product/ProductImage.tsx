type ProductImageProps = {
    src: string;
    alt: string;
  };
  
  const ProductImage = ({ src, alt }: ProductImageProps) => (
    <div className="md:w-1/2 flex justify-center">
      <img src={src} alt={alt} className="rounded-lg max-h-[320px] object-fill" />
    </div>
  );
  
  export default ProductImage;
  
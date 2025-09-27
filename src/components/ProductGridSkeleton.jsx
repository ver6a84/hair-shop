import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductGridSkeleton({ count = 4 }) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </>
  );
}

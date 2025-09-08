import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

export interface Product {
  id: number;
  name: string;
  price: number;
  status: 'Còn hàng' | 'Hết hàng';
}

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const toggleStatus = (id: number) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, status: p.status === 'Còn hàng' ? 'Hết hàng' : 'Còn hàng' }
          : p
      )
    );
  };

  return (
    <>
      <ProductForm onAdd={addProduct} />
      <ProductTable products={products} onDelete={deleteProduct} onToggle={toggleStatus} />
    </>
  );
}

import { useState } from 'react';
import type { Product } from './ProductManager';

interface Props {
  onAdd: (product: Omit<Product, 'id'>) => void;
}

export default function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [status, setStatus] = useState<'Còn hàng' | 'Hết hàng'>('Còn hàng');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;
    onAdd({ name, price: Number(price), status });
    setName('');
    setPrice('');
    setStatus('Còn hàng');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24, display: 'flex', gap: 8, alignItems: 'center' }}>
      <input type="text" placeholder="Tên sản phẩm" value={name} onChange={e => setName(e.target.value)} style={{ width: 200, padding: '6px 8px' }} />
      <input type="number" placeholder="Giá (VND)" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} style={{ width: 150, padding: '6px 8px' }} />
      <select value={status} onChange={e => setStatus(e.target.value as 'Còn hàng' | 'Hết hàng')} style={{ width: 150, padding: '6px 8px' }}>
        <option value="Còn hàng">Còn hàng</option>
        <option value="Hết hàng">Hết hàng</option>
      </select>
      <button
        type="submit"
        style={{
          padding: '6px 12px',
          backgroundColor: '#1677ff',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        Thêm
      </button>
    </form>
  );
}

import { Table, Tag, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Product } from './ProductManager';
import { useState } from 'react';

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function ProductTable({ products, onDelete, onToggle }: Props) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    if (deleteId !== null) onDelete(deleteId);
    setIsDeleteOpen(false);
    setDeleteId(null);
  };

  const columns: ColumnsType<Product> = [
    { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name' },
    {
      title: 'Giá (VND)',
      dataIndex: 'price',
      key: 'price',
      render: (value: number) => <p>{value.toLocaleString('vi-VN') + ' đ'}</p>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: status => <Tag color={status === 'Còn hàng' ? 'green' : 'red'}>{status}</Tag>
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="default" style={{ marginRight: 8 }} onClick={() => onToggle(record.id)}>
            Đánh dấu
          </Button>
          <Button danger onClick={() => handleDeleteClick(record.id)}>
            Xóa
          </Button>
        </>
      )
    }
  ];

  return (
    <>
      <Table<Product>
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSizeOptions: ['3', '5', '10'],
          showSizeChanger: true,
          defaultPageSize: 3
        }}
      />

      <Modal title="Xác nhận xóa" open={isDeleteOpen} onOk={confirmDelete} onCancel={() => setIsDeleteOpen(false)} okText="Xóa" cancelText="Hủy" okButtonProps={{ danger: true }} centered>
        <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
      </Modal>
    </>
  );
}

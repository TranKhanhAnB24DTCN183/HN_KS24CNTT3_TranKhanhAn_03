import { Form, Input, InputNumber, Select, Button } from 'antd';
import type { Product } from './ProductManager';

interface Props {
  onAdd: (product: Omit<Product, 'id'>) => void;
}

export default function ProductForm({ onAdd }: Props) {
  const [form] = Form.useForm();

  const handleSubmit = (values: Omit<Product, 'id'>) => {
    onAdd(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="inline" onFinish={handleSubmit} style={{ marginBottom: 24 }}>
      <Form.Item name="name" rules={[{ required: true, message: 'Nhập tên sản phẩm!' }]}>
        <Input placeholder="Tên sản phẩm" />
      </Form.Item>
      <Form.Item name="price" rules={[{ required: true, message: 'Nhập giá sản phẩm!' }]}>
        <InputNumber placeholder="Giá (VND)" style={{ width: 150 }} />
      </Form.Item>
      <Form.Item name="status" initialValue="Còn hàng" rules={[{ required: true }]}>
        <Select style={{ width: 150 }}>
          <Select.Option value="Còn hàng">Còn hàng</Select.Option>
          <Select.Option value="Hết hàng">Hết hàng</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
}

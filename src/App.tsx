import { Layout, Typography } from 'antd';
import ProductManager from './components/ProductManager';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#2563eb', textAlign: 'center' }}>
        <Title level={3} style={{ color: '#fff', margin: 15 }}>
          📦 Quản Lý Sản Phẩm
        </Title>
      </Header>
      <Content style={{ padding: 24, textAlign: 'center' }}>
        <ProductManager />
      </Content>
    </Layout>
  );
}

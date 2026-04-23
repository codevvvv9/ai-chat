import {
  App as AntApp,
  Button,
  Card,
  ConfigProvider,
  Space,
  Tag,
  Typography,
  theme,
} from "antd";

const { Title, Paragraph, Text } = Typography;

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 18,
          fontFamily:
            '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
        },
      }}
    >
      <AntApp>
        <main className="app-shell">
          <Card className="app-card" variant="borderless">
            <Space direction="vertical" size={20}>
              <Tag color="blue">ai-chat / web</Tag>
              <Space direction="vertical" size={8}>
                <Title level={1} style={{ margin: 0 }}>
                  TypeScript + Vite + React + Ant Design
                </Title>
                <Paragraph className="app-description">
                  这里是 `apps/web` 的最小可运行骨架，只保留页面占位、Ant
                  Design 组件示例和基础样式，不包含任何业务逻辑。
                </Paragraph>
              </Space>
              <Space size={12} wrap>
                <Button type="primary" size="large">
                  Ant Design 按钮
                </Button>
                <Text type="secondary">
                  其余工程结构与启动方式保持不变。
                </Text>
              </Space>
            </Space>
          </Card>
        </main>
      </AntApp>
    </ConfigProvider>
  );
}

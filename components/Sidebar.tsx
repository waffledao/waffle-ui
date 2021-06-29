import { Layout, Typography } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

const Sidebar = () => (
  <Layout.Sider
    trigger={null}
    collapsedWidth={0}
    theme="light"
    width={315}
    css={{ backgroundColor: '#fff' }}
    collapsible
  >
    <div
      css={{
        overflow: 'auto',
        top: '0',
        bottom: '0',
        position: 'sticky',
        height: '100vh',
        overflowY: 'auto',
        padding: '16px',
      }}
    >
      <Typography.Title>
        Raffle
        <br />
        Waffle
      </Typography.Title>
    </div>
  </Layout.Sider>
)

export default Sidebar

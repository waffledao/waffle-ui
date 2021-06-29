import React from 'react'
import { Layout, Row, Col } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import ErrorBoundary from './ErrorBoundary'

const { Content, Sider } = Layout

const BaseContainer = ({ children }) => (
  <Layout>
    <Sider trigger={null} collapsedWidth={0} theme="light" width={315} css={{ backgroundColor: '#fff' }} collapsible>
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
        Sidebar
      </div>
    </Sider>
    <Content css={{ padding: '2rem 20px', minHeight: '100vh' }}>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
          <ErrorBoundary>
            <div css={{ margin: 'auto', maxWidth: '1750px' }}>{children}</div>
          </ErrorBoundary>
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default BaseContainer

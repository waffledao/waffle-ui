import { Layout, Row, Col } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { secondaryColor } from 'utils/constants'
import ErrorBoundary from './ErrorBoundary'

const { Content } = Layout

const BaseContainer = ({ children }) => (
  <Layout css={{ backgroundColor: secondaryColor }}>
    <Content css={{ padding: '2rem 20px', minHeight: '100vh' }}>
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 22, offset: 1 }}
          xl={{ span: 20, offset: 2 }}
          xxl={{ span: 16, offset: 4 }}
        >
          <ErrorBoundary>
            <div css={{ margin: 'auto', maxWidth: '1750px' }}>{children}</div>
          </ErrorBoundary>
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default BaseContainer

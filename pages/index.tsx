import React from 'react'
import { Row, Col, Card } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import BaseContainer from 'components/BaseContainer'
import Nav from 'components/Nav'

export default function Home() {
  return (
    <>
      <Nav sliding />
      <Nav />
      <BaseContainer>
        {[...Array(20).keys()].map(a => (
          <Row key={a} css={{ marginBottom: '1rem' }} gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Raffle Title" bordered={false}>
                Raffle content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Raffle Title" bordered={false}>
                Raffle content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Raffle Title" bordered={false}>
                Raffle content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Raffle Title" bordered={false}>
                Raffle content
              </Card>
            </Col>
          </Row>
        ))}
      </BaseContainer>
    </>
  )
}

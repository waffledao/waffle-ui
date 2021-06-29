import React from 'react'
import { Row, Col, Card } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import BaseContainer from 'components/BaseContainer'

export default function Home() {
  return (
    <BaseContainer>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Raffle Title" bordered={false}>
            Raffle content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Raffle Title" bordered={false}>
            Raffle content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Raffle Title" bordered={false}>
            Raffle content
          </Card>
        </Col>
      </Row>
    </BaseContainer>
  )
}

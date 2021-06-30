import { Divider, Row, Col, Card, Statistic, Progress, Typography } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { primaryColor } from 'utils/constants'

const RaffleCard = () => (
  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
    <Card
      cover={
        <>
          <img css={{ paddingTop: '3rem' }} alt="Crypto Kitty" src="/kitty.jpg" />
          <Divider css={{ color: primaryColor, marginBottom: 0 }} />
        </>
      }
      css={{ border: `0.75px solid ${primaryColor}`, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}
      bordered={false}
    >
      <span css={{ color: '#9FBB30', fontWeight: 600, fontSize: '1.2rem', textTransform: 'uppercase' }}>
        Open Raffle
      </span>
      <br />
      <Typography.Title level={3}>Weird CryptoKitty</Typography.Title>
      <br />
      <Row>
        <Col span={12}>
          <Statistic
            title={
              <Typography.Title
                level={5}
                css={css`
                  &.ant-typography {
                    margin-bottom: 0;
                  }
                `}
              >
                <span css={{ color: primaryColor, fontSize: '1.1rem' }}>Ticket Price</span>
              </Typography.Title>
            }
            value="0.5 ETH"
            valueStyle={{ fontWeight: 600, fontSize: '1.25rem' }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={
              <Typography.Title level={5} css={{ marginBottom: 0 }}>
                <span css={{ color: primaryColor, fontSize: '1.1rem' }}>Closes in</span>
              </Typography.Title>
            }
            value="22h 22m 28s"
            valueStyle={{ fontWeight: 600, fontSize: '1.25rem' }}
          />
        </Col>
      </Row>
      <Progress css={{ paddingRight: 0, marginTop: '1rem' }} percent={70} strokeColor={primaryColor} showInfo={false} />
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span css={{ color: primaryColor, fontWeight: 600, fontSize: '1rem' }}>Purchased</span>
        <span css={{ fontWeight: 600, fontSize: '1rem' }}>10/100</span>
      </div>
    </Card>
  </Col>
)

export default RaffleCard

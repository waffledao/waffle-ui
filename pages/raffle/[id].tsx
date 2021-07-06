import { useRouter } from 'next/router'
import { Button, Breadcrumb, Row, Col, Typography, Statistic, Progress, InputNumber } from 'antd'
import BaseContainer from 'components/BaseContainer'
import ActionButton from 'components/ActionButton'
import Nav from 'components/Nav'
import ProfileImage from 'components/ProfileImage'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { primaryColor } from 'utils/constants'

const RafflePage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Nav sliding />
      <Nav />
      <BaseContainer>
        <div css={{ marginTop: '6rem' }}>
          <Breadcrumb
            css={{ marginBottom: '2rem', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}
            separator=">"
          >
            <Breadcrumb.Item>
              <Link href="/">
                <a css={{ color: '#85755f' }}>Explore</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Weird CryptoKitty</Breadcrumb.Item>
          </Breadcrumb>
          <Row justify="start" align="middle" css={{ marginBottom: '1rem', padding: 0 }} gutter={[32, 32]}>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <ProfileImage key={1} id={1} />
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <Typography.Title level={3}>Weird CryptoKitty: {id}</Typography.Title>
              <Typography.Title level={5}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </Typography.Title>
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
              <Progress
                css={{ paddingRight: 0, marginTop: '1rem' }}
                percent={70}
                strokeColor={primaryColor}
                showInfo={false}
              />
              <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span css={{ color: primaryColor, fontWeight: 600, fontSize: '1rem' }}>Purchased</span>
                <span css={{ fontWeight: 600, fontSize: '1rem' }}>10/100</span>
              </div>
              <div css={{ textAlign: 'right', marginTop: '3rem' }}>
                <InputNumber
                  css={{ marginRight: '1rem', borderRadius: '6px' }}
                  size="large"
                  min={0}
                  max={20}
                  defaultValue={0}
                />
                <ActionButton size="large">Buy Slot</ActionButton>
              </div>
            </Col>
          </Row>
        </div>
      </BaseContainer>
    </>
  )
}

export default RafflePage

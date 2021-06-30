import { Row } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import BaseContainer from 'components/BaseContainer'
import Nav from 'components/Nav'
import RaffleCard from 'components/RaffleCard'

export default function Home() {
  return (
    <>
      <Nav sliding />
      <Nav />
      <BaseContainer>
        <div css={{ marginTop: '6rem' }}>
          <Row justify="start" align="middle" css={{ marginBottom: '1rem', padding: 0 }} gutter={[32, 32]}>
            {[...Array.from(Array(20).keys())].map(a => (
              <RaffleCard key={a} id={a} />
            ))}
          </Row>
        </div>
      </BaseContainer>
    </>
  )
}

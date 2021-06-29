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
        {[...Array.from(Array(20).keys())].map(i => (
          <Row key={i} css={{ marginBottom: '1rem' }} gutter={[64, 64]}>
            {[...Array.from(Array(3).keys())].map(a => (
              <RaffleCard key={a} />
            ))}
          </Row>
        ))}
      </BaseContainer>
    </>
  )
}

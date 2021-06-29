import { Row } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import BaseContainer from 'components/BaseContainer'
import Nav from 'components/Nav'
import RaffleCard from 'components/RaffleCard'
import Spacer from 'components/styled/Spacer'

export default function Home() {
  return (
    <>
      <Nav sliding />
      <Nav />
      <BaseContainer>
        <div css={{ marginTop: '6rem' }}>
          {[...Array.from(Array(20).keys())].map(i => (
            <Row
              key={i}
              justify="center"
              align="middle"
              css={{ marginBottom: '1rem 0', padding: 0 }}
              gutter={[
                { xs: 0, sm: 0, md: 32, lg: 32, xl: 32 },
                { xs: 0, sm: 0, md: 0, lg: 0, xl: 64 },
              ]}
            >
              {[...Array.from(Array(3).keys())].map(a => (
                <RaffleCard key={a} />
              ))}
            </Row>
          ))}
        </div>
      </BaseContainer>
    </>
  )
}

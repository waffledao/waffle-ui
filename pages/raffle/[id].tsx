import { useRouter } from 'next/router'
import { Breadcrumb } from 'antd'
import BaseContainer from 'components/BaseContainer'
import Nav from 'components/Nav'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

const RafflePage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Nav sliding />
      <Nav />
      <BaseContainer>
        <div css={{ marginTop: '6rem' }}>
          <Breadcrumb css={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }} separator=">">
            <Breadcrumb.Item>
              <Link href="/">
                <a css={{ color: '#85755f' }}>Explore</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Weird CryptoKitty</Breadcrumb.Item>
          </Breadcrumb>
          <p>Raffle ID: {id}</p>
        </div>
      </BaseContainer>
    </>
  )
}

export default RafflePage

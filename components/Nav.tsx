import React, { FunctionComponent } from 'react'
import { Button, Menu, Radio } from 'antd'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { NAV_HEIGHT, secondaryColor } from 'utils/constants'

const MenuWrapper = styled.div`
  & .ant-menu-horizontal::before {
    display: none;
  }

  & .ant-menu-horizontal::after {
    display: none;
  }
`

type NavProps = {
  sliding?: boolean
}

const MenuLogo = () => (
  <Link href="/">
    <a css={{ width: '238px', textAlign: 'center' }}>
      <img
        css={css`
          width: 32px;
          height: 32px;
        `}
        src="/waffle.png"
        alt="Waffle Raffle"
      />
    </a>
  </Link>
)

const Nav: FunctionComponent<NavProps> = ({ sliding }) => {
  const [scroll, setScroll] = React.useState(0)

  React.useEffect(() => {
    const setFromEvent = () => setScroll(window.scrollY)
    document.addEventListener('scroll', setFromEvent, {
      passive: true,
    })

    return () => {
      document.removeEventListener('scroll', setFromEvent)
    }
  }, [])

  const isScrolled = scroll > NAV_HEIGHT

  return (
    <MenuWrapper>
      <Menu
        selectable={false}
        css={{
          backgroundColor: sliding ? '#fff' : secondaryColor,
          transition: 'top 200ms ease-out',
          position: sliding ? 'fixed' : 'static',
          ...(sliding && { top: isScrolled ? '0' : `-${NAV_HEIGHT}px` }),
          ...(sliding && { color: '#fff' }),
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: '1rem 0',
          zIndex: 1000,
          border: 0,
        }}
        mode="horizontal"
      >
        <MenuLogo />
        <Menu.Item
          css={css`
            .ant-menu-horizontal > &.ant-menu-item,
            .ant-menu-horizontal > &.ant-menu-item:hover {
              border-bottom: 2px solid transparent;
            }
            padding-left: 0;
            padding-right: 0;
            margin: 0;
          `}
          key="nav"
        >
          <Radio.Group buttonStyle="solid" value="explore" defaultValue="explore">
            <Radio.Button
              css={css`
                &.ant-radio-button-wrapper:first-child {
                  border-radius: 6px 0 0 6px;
                }
              `}
              value="explore"
            >
              Explore
            </Radio.Button>
            <Radio.Button value="lottery">My Lottery</Radio.Button>
            <Radio.Button
              value="faq"
              css={css`
                &.ant-radio-button-wrapper:last-child {
                  border-radius: 0 6px 6px 0;
                }
              `}
            >
              FAQ
            </Radio.Button>
          </Radio.Group>
        </Menu.Item>
        <Menu.Item
          css={css`
            .ant-menu-horizontal > &.ant-menu-item,
            .ant-menu-horizontal > &.ant-menu-item:hover {
              border-bottom: 2px solid transparent;
            }
            width: 238px;
            text-align: center;
            padding-left: 0;
            padding-right: 0;
            margin: 0;
            .ant-menu-horizontal > &.ant-menu-item a {
              color: #fff;
            }
          `}
          key="connect"
        >
          <Button css={{ borderRadius: '6px' }} type="primary">
            Connect Wallet
          </Button>
        </Menu.Item>
      </Menu>
    </MenuWrapper>
  )
}

export default React.memo(Nav)

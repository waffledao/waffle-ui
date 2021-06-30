import React, { FunctionComponent } from 'react'
import { Menu, Radio } from 'antd'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { NAV_HEIGHT, mq, secondaryColor } from 'utils/constants'
import ActionButton from 'components/ActionButton'

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
    <a css={{ textAlign: 'center' }}>
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
  const [tab, setTab] = React.useState('explore')

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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr',
          gap: '0px 0px',
          backgroundColor: sliding ? '#fff' : secondaryColor,
          transition: 'top 200ms ease-out',
          position: sliding ? 'fixed' : 'static',
          ...(sliding && { top: isScrolled ? '0' : `-${NAV_HEIGHT}px` }),
          ...(sliding && { color: '#fff' }),
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: '1rem 0',
          zIndex: 1000,
          border: 0,
          boxShadow: sliding ? `${secondaryColor} 0px 0px 0px 1px` : '0',
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
            text-align: center;
          `}
          key="nav"
        >
          <Radio.Group
            value={tab}
            onChange={selectedTab => setTab(selectedTab.target.value)}
            buttonStyle="solid"
            defaultValue="explore"
            css={{ fontWeight: 600 }}
          >
            <Radio.Button
              css={css`
                &.ant-radio-button-wrapper:first-child {
                  border-radius: 12px 0 0 12px;
                }
                letter-spacing: 0.5px;
              `}
              value="explore"
            >
              Explore
            </Radio.Button>
            <Radio.Button css={{ letterSpacing: '0.5px' }} value="lottery">
              My Lottery
            </Radio.Button>
            <Radio.Button
              value="faq"
              css={css`
                &.ant-radio-button-wrapper:last-child {
                  border-radius: 0 12px 12px 0;
                }
                letter-spacing: 0.5px;
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
            padding-left: 0;
            padding-right: 0;
            margin: 0;
            text-align: center;
            .ant-menu-horizontal > &.ant-menu-item a {
              color: #fff;
            }
            ${mq('medium')} {
              .ant-menu-horizontal > &.ant-menu-item {
                display: none;
              }
            }
          `}
          key="connect"
        >
          <ActionButton>Connect Wallet</ActionButton>
        </Menu.Item>
      </Menu>
    </MenuWrapper>
  )
}

export default React.memo(Nav)

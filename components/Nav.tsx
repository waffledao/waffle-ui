import React, { FunctionComponent } from 'react'
import { Button, Menu, Radio } from 'antd'
import Link from 'next/link'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { NAV_HEIGHT, primaryColor, secondaryColor } from 'utils/constants'

const MenuWrapper = styled.div`
  & .ant-menu-horizontal::before {
    display: none;
  }

  & .ant-menu-horizontal::after {
    display: none;
  }
`

const MenuButton = styled(Button)`
  text-align: center;
  outline: none;
  text-decoration: none;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
`

type NavProps = {
  sliding?: boolean
}

const MenuLogo = () => (
  <Link href="/">
    <a css={{ width: '288px', textAlign: 'right' }}>
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
          `}
          key="nav"
        >
          <Radio.Group
            value={tab}
            onChange={selectedTab => setTab(selectedTab.target.value)}
            buttonStyle="solid"
            defaultValue="explore"
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
            width: 288px;
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
          <MenuButton type="primary">
            <span
              css={css`
                flex: 1 1 auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 0px 0.5rem 0px 0.25rem;
                font-size: 1rem;
                width: fit-content;
                font-weight: 500;
                border-radius: 6px;
                text-shadow: none;
                letter-spacing: 0.5px;
              `}
            >
              Connect Wallet
            </span>
          </MenuButton>
        </Menu.Item>
      </Menu>
    </MenuWrapper>
  )
}

export default React.memo(Nav)

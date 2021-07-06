import React from 'react'
import { Button } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

const ButtonWrapper = styled(props => <Button {...props} />)`
  text-align: center;
  outline: none;
  text-decoration: none;
  will-change: transform;
  transition: transform 450ms ease 0s;
  align-items: center;
  border-radius: 12px;
  user-select: none;
  font-weight: 500;
`

type ActionButtonProps = {
  children: string
  size: string
}

const ActionButton = ({ children, size }: ActionButtonProps) => (
  <ButtonWrapper size={size} type="primary">
    <span
      css={css`
        font-weight: 600;
        border-radius: 6px;
        text-shadow: none;
        letter-spacing: 0.5px;
      `}
    >
      {children}
    </span>
  </ButtonWrapper>
)

export default ActionButton

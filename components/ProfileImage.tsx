import { Divider, Col, Card, Typography } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { primaryColor } from 'utils/constants'

const ProfileImage = ({ id }) => {
  return (
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
      <Typography.Title css={{ textAlign: 'center' }} level={3}>
        Weird CryptoKitty
      </Typography.Title>
    </Card>
  )
}

export default ProfileImage

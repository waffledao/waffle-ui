import React from 'react'
import { Result } from 'antd'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <Result status="warning" title="Error" />
    }

    return this.props.children
  }
}

export default ErrorBoundary

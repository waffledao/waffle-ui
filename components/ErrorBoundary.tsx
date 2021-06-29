import React from 'react'
import { Result } from 'antd'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Result status="warning" title="Error" />
    }

    return this.props.children
  }
}

export default ErrorBoundary

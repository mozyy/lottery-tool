import { Component } from 'react';

/**
 * HOC 页面错误处理
 * @param Page 页面组件
 * @returns ReactElement
 */
export default function createErrorBoundary(Page: JSX.ElementType) {
  return class ErrorBoundary extends Component {
    state = {
      hasError: null,
    };

    static getDerivedStateFromError() {
      return {
        hasError: true,
      };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
    }
    onError(error) {
      console.log(error)
    }

    render() {
      return this.state.hasError ? <div>Something went wrong.</div> : <Page />;
    }
  };
}

import { Component } from 'react';

/**
 * HOC 页面错误处理
 * @param Page 页面组件
 * @returns ReactElement
 */
export default function createErrorBoundary(Page: JSX.ElementType) {
  return class ErrorBoundary extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      hasError: null,
    };

    static getDerivedStateFromError() {
      return {
        hasError: true,
      };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }

    // eslint-disable-next-line class-methods-use-this
    onError(error) {
      console.log(error);
    }

    render() {
      const { hasError } = this.state;
      return hasError ? <div>Something went wrong.</div> : <Page />;
    }
  };
}

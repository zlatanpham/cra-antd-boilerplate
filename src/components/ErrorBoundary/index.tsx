import * as React from 'react';

class ErrorBoundary extends React.Component<
  { fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? this.props.fallback : null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

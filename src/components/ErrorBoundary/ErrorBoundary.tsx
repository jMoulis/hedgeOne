import React from 'react';

interface Props {
  errorType?: string;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log('ErrorBoundary', error);
  }

  public render() {
    const { hasError } = this.state;
    const { children, errorType } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <h2>{errorType || ''}</h2>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;

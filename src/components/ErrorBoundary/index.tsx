import React, { Component, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
    console.log(error, errorInfo); // eslint-disable-line
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        const { children } = this.props;

        return children;
    }
}

export default ErrorBoundary;

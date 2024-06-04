import React from 'react';


function WithLogging(WrappedComponent) {
  const wrappedName = (
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    (typeof WrappedComponent === 'string' ? WrappedComponent : 'Component')
  );
  return class extends React.Component {
    static displayName = `WithLogging(${wrappedName})`;

    componentDidMount() {
      console.log(`Component ${wrappedName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${wrappedName} is going to unmount`);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}

export default WithLogging;

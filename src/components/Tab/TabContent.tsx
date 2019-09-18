import React, { Suspense } from 'react';
import { ErrorBoundary } from 'components/ErrorBoundary';

interface PropsType {
  tab: any;
}

function TabItem<PropsType>({ tab }) {
  const Component = React.lazy(() =>
    import(`components/DynamicComponent/Document`)
  );
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Component />
    </Suspense>
  );
}

interface TabButtonProps {
  componentName: string;
}

function TabContent<PropsType>({ tab }) {
  return (
    <ErrorBoundary errorType="Unable to load the module">
      <TabItem tab={tab} />
    </ErrorBoundary>
  );
}

export default TabContent;

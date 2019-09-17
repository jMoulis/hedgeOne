import React, { Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';

interface PropsType {
  tab: any;
  actions: any[];
}
function TabItem<PropsType>({ tab, actions }) {
  const Component = React.lazy(() => import(`../DynamicComponent/${tab.type}`));
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Component config={tab} actions={actions} />
    </Suspense>
  );
}

interface TabButtonProps {
  componentName: string;
}

function TabContent<PropsType>({ tab, actions }) {
  return (
    <ErrorBoundary errorType="Unable to load the module">
      <TabItem tab={tab} actions={actions} />
    </ErrorBoundary>
  );
}

export default TabContent;

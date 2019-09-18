import React from 'react';
import { connect } from 'react-redux';
import TabContent from './TabContent';
import TabListItem from './TabListItem';
import TabList from './TabList';

interface TabProps {
  tabs: any[];
  activeTab: any;
}

function Tab<TabProps>({ tabs, activeTab }) {
  return (
    <>
      <TabList>
        {tabs.map(tab => (
          <TabListItem key={tab.tabId} tab={tab} />
        ))}
      </TabList>
      {tabs.map(
        (tab, index) =>
          activeTab &&
          tab.tabId === activeTab.tabId && <TabContent key={index} tab={tab} />
      )}
    </>
  );
}

const mapStateToProps = ({ tabReducer }) => ({
  tabs: tabReducer.tabs,
  activeTab: tabReducer.activeTab,
});

export default connect(
  mapStateToProps,
  null
)(Tab);

import React from 'react';
import { connect } from 'react-redux';
import TabContent from './TabContent';
import TabListItem from './TabListItem';
import TabList from './TabList';
import { setActiveTab, setTabs } from '../../store/reducers/tabReducer';

interface TabProps {
  tabs: any[];
  activeTab: any;
}

function Tab<TabProps>({ tabs, activeTab, actions }) {
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
          tab.tabId === activeTab.tabId && (
            <TabContent key={index} tab={tab} actions={actions} />
          )
      )}
    </>
  );
}

const mapStateToProps = ({ tabReducer }) => ({
  tabs: tabReducer.tabs,
  activeTab: tabReducer.activeTab,
});
const mapDispatchToProps = dispatch => ({
  actions: {
    setActiveTabAction: tab => {
      dispatch(setActiveTab(tab));
    },
    setTabsAction: tab => {
      dispatch(setTabs(tab));
    },
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);

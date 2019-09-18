import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { connect } from 'react-redux';
import { deleteTab, setActiveTab } from 'store/reducers/tabReducer';
import TabLabel from 'components/Tab/TabLabel';
import TabCloseButton from 'components/Tab/TabCloseButton';
import { deleteForceData } from 'store/reducers/forceReducer';

interface RootType {
  isActive: boolean;
}

const Root = styled.li<RootType>`
  display: flex;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#67B7DC' : 'lightGray')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
`;

interface TabListItemType {
  activeTab: any;
  setActiveTabAction: Function;
  tab: any;
  tabs: any;
  deleteTabAction: Function;
  deleteForceDataAction: Function;
}

const TabListItem = ({
  activeTab,
  setActiveTabAction,
  tab,
  tabs,
  deleteTabAction,
  deleteForceDataAction,
}) => {
  const handleDeleteTab = tabId => {
    const deletedTabIndex = tabs.findIndex(prevTab => prevTab.tabId === tabId);
    const previousIndex = deletedTabIndex - 1;
    if (previousIndex >= 0) {
      setActiveTabAction(tabs[previousIndex]);
    }
    deleteTabAction(tabId);
    deleteForceDataAction(tabId);
  };
  return (
    <Root isActive={(activeTab && tab.tabId === activeTab.tabId) || false}>
      <TabLabel onClick={() => setActiveTabAction(tab)}>{tab.label}</TabLabel>
      <TabCloseButton type="button" onClick={() => handleDeleteTab(tab.tabId)}>
        <CloseIcon height="2rem" width="2rem" />
      </TabCloseButton>
    </Root>
  );
};

const mapStateToProps = ({ tabReducer }) => ({
  tabs: tabReducer.tabs,
  activeTab: tabReducer.activeTab,
});
const mapDispatchToProps = dispatch => ({
  deleteTabAction: tab => {
    dispatch(deleteTab(tab));
  },
  setActiveTabAction: tab => {
    dispatch(setActiveTab(tab));
  },
  deleteForceDataAction: dataId => {
    dispatch(deleteForceData(dataId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabListItem);

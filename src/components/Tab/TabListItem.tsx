import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { connect } from 'react-redux';
import { removeTab, setActiveTab } from 'store/reducers/tabReducer';
import TabLabel from './TabLabel';
import TabCloseButton from './TabCloseButton';

interface RootType {
  isActive: boolean;
}

const Root = styled.li<RootType>`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#67B7DC' : 'lightGray')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
`;

interface TabListItemType {
  activeTab: any;
  setActiveTab: any;
  tab: any;
  handleRemoveTab: Function;
}

const TabListItem = ({
  activeTab,
  setActiveTabAction,
  tab,
  tabs,
  removeTabAction,
}) => {
  const handleRemoveTab = tabId => {
    const deletedTabIndex = tabs.findIndex(prevTab => prevTab.tabId === tabId);
    const previousIndex = deletedTabIndex - 1;
    if (previousIndex >= 0) {
      setActiveTabAction(tabs[previousIndex]);
    }
    removeTabAction(tabId);
  };
  return (
    <Root isActive={(activeTab && tab.tabId === activeTab.tabId) || false}>
      <TabLabel onClick={() => setActiveTabAction(tab)}>{tab.label}</TabLabel>
      <TabCloseButton type="button" onClick={() => handleRemoveTab(tab.tabId)}>
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
  removeTabAction: tab => {
    dispatch(removeTab(tab));
  },
  setActiveTabAction: tab => {
    dispatch(setActiveTab(tab));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabListItem);

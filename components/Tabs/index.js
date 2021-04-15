import React from 'react';

import Tab from 'Components/Tabs/Tab';
import { TAB_KEYS } from 'Components/Tabs/constants';

const Tabs = ({setActiveTab, activeTab}) => TAB_KEYS.map(tab => (
  <Tab
    activeTab={activeTab}
    name={tab.name}
    onPress={() => setActiveTab(tab)}
    key={tab.id}
    tabKey={tab.tabKey}
  />
));

export default Tabs;

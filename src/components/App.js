
import React from "react";
import './../styles/App.css';

import Tabs from './Tabs';

const App = () => {
  const tabs1 = [
    { title: 'Tab 1', content: 'Content 1' },
    { title: 'Tab 2', content: 'Content 2' },
    { title: 'Tab 3', content: 'Content 3' },
  ];

  const tabs2 = [
    { title: 'Tab A', content: 'Content A' },
    { title: 'Tab B', content: 'Content B' },
    { title: 'Tab C', content: 'Content C' },
  ];

  return (
    <div>
      <Tabs tabs={tabs1} key="tabs1" />
      <Tabs tabs={tabs2} key="tabs2" />
    </div>
  );
};

export default App;








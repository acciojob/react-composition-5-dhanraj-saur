import React, { useState } from 'react';

const Tabs = ({ tabs, key }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs" key={key}>
            <ul className="tab-list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs[activeTab] && tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
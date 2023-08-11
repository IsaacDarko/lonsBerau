const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="">{children}</div> : null;
};

export default TabContent;

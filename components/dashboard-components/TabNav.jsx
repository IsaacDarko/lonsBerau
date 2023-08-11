const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleTabClick = () => {
    setActiveTab(id);
  };

  return (
    <li>
      <a
        href="#"
        className={`my-2 block px-7 pb-3 pt-4 text-sm font-medium leading-tight text-white
                ${
                  activeTab === id
                    ? "border-b border-gray-300"
                    : "hover:bg-dimBlue rounded"
                } `}
        onClick={() => handleTabClick()}
      >
        {title}
      </a>
    </li>
  );
};

export default TabNavItem;

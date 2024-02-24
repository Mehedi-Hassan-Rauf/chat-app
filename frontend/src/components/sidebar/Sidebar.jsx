import useStore from "../../zustand/useStore";
import Conversations from "./Conversations";
import SidebarFooter from "./SidebarFooter";
import SideBarHeader from "./SideBarHeader";

const Sidebar = () => {
  const { selectedConversation } = useStore();
  return (
    <div
      className={`w-full sm:w-1/3 border-r border-slate-500 px-4 py-2 ${
        selectedConversation ? "hidden" : "flex"
      } sm:flex flex-col`}
    >
      <SideBarHeader />
      <div className="divider px-3"></div>
      <Conversations />
      <SidebarFooter />
    </div>
  );
};
export default Sidebar;

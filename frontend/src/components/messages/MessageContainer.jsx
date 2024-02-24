import { FaArrowLeft } from "react-icons/fa";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useStore from "../../zustand/useStore";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useStore();

  // useEffect(() => {
  //   // cleanup function (unmounts)
  //   return () => setSelectedConversation(null);
  // }, [setSelectedConversation]);

  return (
    <div
      className={`w-full sm:w-2/3 ${
        selectedConversation ? "flex" : "hidden"
      } sm:flex flex-col`}
    >
      {/* Header */}
      <div className=" flex items-center justify-between bg-slate-500 text-xl px-4 py-4 mb-2">
        <FaArrowLeft
          className="sm:hidden text-white "
          onClick={() => {
            setSelectedConversation(null);
          }}
        />
        {selectedConversation && (
          <div>
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
        )}
      </div>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useStore();
  return (
    <div className="w-full flex items-center justify-center  h-full">
      <div className="w-full px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

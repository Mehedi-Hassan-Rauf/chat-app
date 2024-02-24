import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create()(
  persist(
    (set) => ({
      authUser: JSON.parse(localStorage.getItem("chat-user")) || null,
      setAuthUser: (authUser) => set(() => ({ authUser: authUser })),
      selectedConversation: null,
      setSelectedConversation: (selectedConversation) =>
        set(() => ({ selectedConversation: selectedConversation })),
      messages: [],
      setMessages: (messages) => set(() => ({ messages: messages })),
    }),
    {
      name: "uniqueList",
    }
  )
);

export default useStore;

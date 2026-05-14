import { Conversation } from "@/types/conversation";

import {
  MessageSquareIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";

interface Props {
  conversations: Conversation[];

  activeConversationId: string;

  onSelectConversation: (
    id: string
  ) => void;

  onNewChat: () => void;

  onDeleteConversation: (
    id: string
  ) => void;
}

export default function ChatSidebar({
  conversations,
  activeConversationId,
  onSelectConversation,
  onNewChat,
  onDeleteConversation,
}: Props) {
  return (
    <div className="w-[300px] border-r border-zinc-900 bg-black flex flex-col">

      <div className="p-4 border-b border-zinc-900">

        <button
          onClick={onNewChat}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-orange-500
            hover:bg-orange-400
            transition-colors
            text-black
            py-3
            rounded-2xl
            font-medium
          "
        >
          <PlusIcon className="w-4 h-4" />

          <span>New Chat</span>
        </button>

      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">

        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              transition-all

              ${
                activeConversationId ===
                conversation.id
                  ? "bg-orange-500/10 border-orange-500"
                  : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
              }
            `}
          >

            <button
              onClick={() =>
                onSelectConversation(
                  conversation.id
                )
              }
              className="
                flex-1
                text-left
                px-4
                py-3
                flex
                items-center
                gap-3
                text-sm
              "
            >
              <MessageSquareIcon className="w-4 h-4 flex-shrink-0" />

              <span className="truncate">
                {conversation.title}
              </span>
            </button>

            <button
              onClick={() =>
                onDeleteConversation(
                  conversation.id
                )
              }
              className="
                opacity-0
                group-hover:opacity-100
                transition-opacity
                px-3
                text-zinc-500
                hover:text-red-400
              "
            >
              <Trash2Icon className="w-4 h-4" />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
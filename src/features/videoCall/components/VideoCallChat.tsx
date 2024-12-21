import { Input } from "@/components/ui/input";
import { getRandomColor } from "@/lib/utils";
import { Send } from "lucide-react";

export function VideoCallChat() {
  const messages = [
    {
      author: "Mashaly",
      content: "Hi There",
      messageColor: getRandomColor(),
    },
    {
      author: "Mohamed",
      content: "Hello!",
      messageColor: getRandomColor(),
    },
    {
      author: "Shadi",
      content: "Awesome app!",
      messageColor: getRandomColor(),
    },
    {
      author: "Yousef",
      content: "Hi!",
      messageColor: getRandomColor(),
    },
  ];

  return (
    <div className="flex h-screen min-w-[280px] flex-col justify-between border-l bg-primary-foreground/30">
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold">Chat</h2>
        <div className="flex flex-col gap-4">
          {messages.map((message, i) => (
            <div key={i} className={`flex gap-2 text-xs`}>
              <span className="font-semibold text-[#2ab8ff]">
                {message.author}:
              </span>
              <span className="">{message.content}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="m-4 flex items-center gap-4">
        <Send className="cursor-pointer transition hover:text-muted-foreground" />
        <Input placeholder="Enter message" />
      </div>
    </div>
  );
}

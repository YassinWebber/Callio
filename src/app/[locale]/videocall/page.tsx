import { VideoCallChat } from "@/features/videoCall/components/VideoCallChat";
import VideoCallControlers from "@/features/videoCall/components/VideoCallControles";
import VideoCallPeopleAttending from "@/features/videoCall/components/VideoCallPeopleAttending";
import VideoCallsContainer from "@/features/videoCall/components/VideoCallsContainer";

export default function Page() {
  return (
    <div className="relative flex justify-between">
      <>
        <div className="fled sm:hidden"></div>
        <div className="hidden md:flex">
          <VideoCallPeopleAttending />
        </div>
      </>
      <div className="relative flex flex-1 flex-col">
        <div className="relative flex-1">
          <VideoCallsContainer />
        </div>
        <div className="absolute bottom-5 flex w-full justify-center">
          <VideoCallControlers />
        </div>
      </div>
      <>
        <div className="hidden lg:flex">
          <VideoCallChat />
        </div>
      </>
    </div>
  );
}

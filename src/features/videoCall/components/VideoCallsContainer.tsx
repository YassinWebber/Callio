export default function VideoCallsContainer() {
  return (
    <div className="grid h-full w-full grid-flow-row grid-cols-2 grid-rows-[1fr_1fr] gap-8">
      <div className="col-span-1 row-span-1 mx-auto w-full bg-red-500"></div>
      <div className="col-span-1 row-span-1 mx-auto w-full bg-red-500"></div>
      <div className="mx-auto w-full bg-red-500"></div>
      {/* <div className="col-span-1 row-span-1 mx-auto w-full bg-red-500"></div> */}
    </div>
  );
}

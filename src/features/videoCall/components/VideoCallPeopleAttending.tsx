import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function VideoCallPeopleAttending() {
  const admins = [
    {
      image: "",
      name: "Mashaly",
    },
  ];

  const guests = [
    {
      image: "",
      name: "Shadi",
    },
    {
      image: "",
      name: "Yousef",
    },
    {
      image: "",
      name: "Mohamed",
    },
  ];

  return (
    <div className="h-screen min-w-[280px] border-r bg-primary-foreground/30 p-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary">Admins</h2>
          <div className="flex flex-col gap-20">
            {admins.map((admin) => (
              <div key={admin.name} className="flex items-center gap-2">
                <Avatar className="max-h-8 max-w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-lg text-white">
                    {admin.name
                      .split(" ")
                      .map((word) => word[0].toUpperCase())
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-normal">{admin.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-primary">Guests</h2>
          <div className="flex flex-col gap-4">
            {guests.map((guest) => (
              <div key={guest.name} className="flex items-center gap-2">
                <Avatar className="max-h-8 max-w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-lg text-white">
                    {guest.name
                      .split(" ")
                      .map((word) => word[0].toUpperCase())
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-normal">{guest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

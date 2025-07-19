import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
  channels: any[];
}

export default function Channel({ channels }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-4 ">
      {channels.map((channel) => (
        <Link className="no-underline" to={`/channel/${channel.id.channelId}`}>
          <div key={channel.id.channelId}>
            <img
              src={channel.snippet.thumbnails.high.url}
              alt={channel.snippet.title}
              className="w-[120px] h-[120px] rounded-full mx-auto"
            />
            <p className="text-center font-semibold mt-2 text-dark no-underline flex items-center justify-center">
              {channel.snippet.title}
              <FaCircleCheck
                size={16}
                className="mt-[0.5px] ml-1 text-red-500"
              />
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

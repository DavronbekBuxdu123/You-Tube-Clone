import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
export default function VideoComponent({ videos }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-4 ">
      {videos?.map(
        (video: {
          id: { videoId: any };
          snippet: {
            thumbnails: { high: { url: string | undefined } };
            publishedAt: moment.MomentInput;
            title: string | any[];
            description: string | any[];
            channelId: any;
            channelTitle:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          };
        }) => (
          <div className="rounded-2xl max-w-[600px] cursor-pointer no-underline text-dark relative  ">
            <Link className="no-underline" to={`/video/${video.id.videoId}`}>
              <div className="overflow-hidden   ">
                <img
                  className="max-w-[600px] w-full h-[180px] object-cover   rounded-t-2xl transition-transform duration-[1000ms] ease-in-out hover:scale-125"
                  src={video.snippet.thumbnails.high.url}
                  alt={"photo"}
                />
              </div>
            </Link>
            <div className="bg-[#f9f5f7]  hover:bg-[#d9d2d5]  transition-all duration-[800ms] h-[200px] w-full  rounded-b-2xl py-2 px-4">
              <p className="mb-0">
                {moment(video?.snippet.publishedAt).fromNow()}{" "}
              </p>
              <div className="flex  gap-x-4 items-center">
                <Link
                  className="no-underline"
                  to={`/video/${video.id.videoId}`}
                >
                  <p className="text-[15px] lg:text-[18px] font-bold line-clamp-2  mt-2 mb-1 text-dark">
                    {video.snippet.title.slice(0, 70)}
                  </p>
                </Link>
              </div>
              <div>
                <p className=" w-full mx-auto text-[12px] line-clamp-2 text-gray-500">
                  {video.snippet.description.slice(0, 90)}
                </p>
              </div>
              <Link to={`/channel/${video.snippet.channelId}`}>
                <div className="flex gap-x-4 absolute bottom-2">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={video.snippet.thumbnails.high.url}
                    alt=""
                  />
                  <p className="flex items-center mb-0 text-dark">
                    {video.snippet.channelTitle}
                    <FaCircleCheck
                      size={16}
                      className="mt-[0.5px] ml-1 text-red-500"
                    />
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
}

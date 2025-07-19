import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../api";
import ReactPlayer from "react-player";
import parse from "html-react-parser";
import { FcLike } from "react-icons/fc";
import { MdRemoveRedEye } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import VideoCard from "./VideoCard";
import LoadingIcon from "./Loading";
interface VideoDetailType {
  id: string;
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    channelId: string;
    tags?: string[];
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount?: string;
  };
}

interface RelatedVideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
}

export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState<VideoDetailType | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(res.data.items[0]);

        const relatedRes = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        const items = relatedRes?.data?.items || [];
        setRelatedVideos(items);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="w-full mx-auto">
      {loading ? (
        <LoadingIcon />
      ) : (
        <div>
          <div className="w-full container h-auto lg:h-[500px] p-1">
            <div className="h-[300px] lg:h-[500px]">
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
              />
            </div>

            {videoDetail && (
              <>
                <div className="px-1 mt-1">
                  <p className="text-[18px] font-bold">
                    {videoDetail.snippet.title}
                  </p>
                </div>

                <div className="px-1 mt-2 flex gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <MdRemoveRedEye className="text-red-500 size-6" />
                    <p className="mb-0">
                      {videoDetail.statistics.viewCount} views
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FcLike className="text-red-500 size-6" />
                    <p className="mb-0">
                      {videoDetail.statistics.likeCount} likes
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FaComment className="text-red-500 size-6" />
                    <p className="mb-0">
                      {videoDetail.statistics.commentCount || 0} comments
                    </p>
                  </div>
                </div>

                {videoDetail.snippet.tags && (
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 px-1">
                    {videoDetail.snippet.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="border rounded-full px-2 flex items-center justify-center"
                      >
                        <p className="mb-0">#{tag}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="px-1 mt-2">
                  <p>{parse(videoDetail.snippet.description || "")}</p>
                </div>

                <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                  <div className="flex gap-x-4 absolute px-1">
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src={videoDetail.snippet.thumbnails.default.url}
                      alt="channel"
                    />
                    <p className="flex items-center mb-0 text-dark">
                      {videoDetail.snippet.channelTitle}
                      <FaCircleCheck
                        size={16}
                        className="mt-[0.5px] ml-1 text-red-500"
                      />
                    </p>
                  </div>
                </Link>
              </>
            )}
          </div>

          <div className="mt-10">
            <VideoCard videos={relatedVideos} />
          </div>
        </div>
      )}
    </div>
  );
}

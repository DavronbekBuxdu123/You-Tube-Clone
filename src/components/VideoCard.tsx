import Channel from "./Channel";
import VideoComponent from "./VideoComponent";

interface Props {
  videos: any[];
}

export default function VideoCard({ videos }: Props) {
  const channelItems = videos.filter((v) => v.id?.channelId);
  const videoItems = videos.filter((v) => v.id?.videoId);

  return (
    <div>
      {channelItems.length > 0 && <Channel channels={channelItems} />}
      {videoItems.length > 0 && <VideoComponent videos={videoItems} />}
    </div>
  );
}

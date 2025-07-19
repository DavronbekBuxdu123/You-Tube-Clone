import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../api";
import VideoCard from "./VideoCard";

export default function ChannelComponent() {
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getDate = async () => {
      try {
        const channelData = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );

        setChannelDetails(channelData.data.items);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet`
        );
        setVideos(dataVideo.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [id]);
  console.log(channelDetails);
  return (
    <div>
      <div></div>
      <VideoCard videos={videos} />
    </div>
  );
}

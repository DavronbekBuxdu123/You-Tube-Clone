import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../api";
import VideoCard from "./VideoCard";
import LoadingIcon from "./Loading";

export default function Search() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(res.data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <div className="border">
      <p className="text-xl lg:text-3xl font-bold px-[30px]">
        Search results for <span className="text-red-500">{id}</span> videos
      </p>
      {loading ? <LoadingIcon /> : <VideoCard videos={videos} />}
    </div>
  );
}

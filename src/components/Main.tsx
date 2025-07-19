import { SetStateAction, useEffect, useState } from "react";
import Category from "./Category";
import { ApiService } from "../api";
import VideoCard from "./VideoCard";

import LoadingIcon from "./Loading";
export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Music");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(res.data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);

  const categoryHandler = (category: SetStateAction<string>) =>
    setSelectedCategory(category);

  return (
    <div>
      <Category
        categoryHandler={categoryHandler}
        selectedCategory={selectedCategory}
      />
      <div className="container mx-auto mt-4 py-2 px-4">
        <h3>
          <span className="text-danger font-bold">{selectedCategory}</span>{" "}
          Videos
        </h3>
      </div>
      {loading ? <LoadingIcon /> : <VideoCard videos={videos} />}
    </div>
  );
}

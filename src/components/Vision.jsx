import { useState, useEffect } from "react";
import "./vision.css";
import loader from "../assets/loader.gif";
export default function Vision() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const width = Math.floor(Math.random() * 10) + 300;
    const height = Math.floor(Math.random() * 10) + 300;
    const imageUrl = `https://source.unsplash.com/${width}x${height}`;
    setIsLoading(false);
    setImageUrl(imageUrl);
  }, []);

  return (
    <div>
      {isLoading ? (
        <img src={loader} alt="loading" />
      ) : (
        <img className="imgVision" src={imageUrl} alt="Random" />
      )}
    </div>
  );
}

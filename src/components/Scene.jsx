import Spline from "@splinetool/react-spline";
import "./scene.css";
export default function Scene() {
  return (
    <div className="bg">
      <Spline
        scene="https://prod.spline.design/L9ahnqouX-7W99s3/scene.splinecode"
        preload="true"
      />
    </div>
  );
}

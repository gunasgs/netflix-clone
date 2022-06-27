import "./Feature.css";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
export default function Featured({ type }) {
  return (
    <div className="featured">
      <img
        src="https://assets-prd.ignimgs.com/2022/03/01/fistful-of-vengeance-1646116375050.jpg"
        alt=""
        className="feature-img"
      />
      <div className="info">
        <h2>FISTFUL OF VENGEANCE (2022)</h2>

        <span className="desc">
          Netflix martial arts movie 20 January, 2022 film about a young
          Chinatown chef who becomes entangled with a deadly Triad gang. The
          movie is a standalone addition to the Wu Assassins Netflix series.
        </span>
        <div className="buttons-feature">
          <button className="play-fea">
            <FaPlay className="me-2 " />
            <span>Play</span>
          </button>
          <button className="info-fea">
            <FaInfoCircle className="me-2 " />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

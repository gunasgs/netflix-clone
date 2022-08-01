import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const trailer =
  "https://imdb-video.media-imdb.com/vi1050657305/1434659607842-pgv4ql-1651759497734.mp4?Expires=1658984182&Signature=qdFrLVoVsJUJMsHciyipokLlXoEpNmAXR4J5BWpUr7vM8On4cVt6oK5QAeAKJRc-jnAmqf74cmC2OBR9UnFwFvxgX8UyUV5mc6Qx683fDLuGySYa6BnepWtpuVbxfmTzk6eiWLo6OHJxZv65RAVhfwOfur84O7s5tGcKbIL6sXbn~lhUUDjMOMaieHpuH~EVH8j42yUuk8KEJlDdWmqoC9kH596Zl90LbyHoXiSdzFFWF0MzBWofinqSgbq1qjqOHBtWBA3uYI~myLCQCpWHNfhR8D6TvfT3GpYNXBSHQwkmsix7g5mgBC94sY9zH6Li4fa~t0D60v7BISolgcpskw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";

function Movieplay() {
  return (
    <>
      <div className="nav">
        <div className="right-play">
          <Link to={"/netflix"}>
            <IoMdArrowRoundBack className="fs-1 ms-2 mt-2 " />
          </Link>
        </div>
      </div>
      <video src={trailer} className="video-play" autoPlay controls />
    </>
  );
}

export default Movieplay;

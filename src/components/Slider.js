import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function Slider(props) {
  const [slider, setMovie] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "https://zany-pear-clownfish-slip.cyclic.app/movies"
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);

  return (
    <div class="container-fluid slider ">
      <section class="d-flex justify-content-between   ms-3">
        <h2 className="mt-3">{props.Title}</h2>
      </section>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <section class="d-flex " style={{ width: "120em" }}>
              {slider.map((user) => (
                <div class="card">
                  <img
                    src={user.poster}
                    class="card-img-top img-fluid"
                    alt={user.name}
                  />
                </div>
              ))}
            </section>
          </div>
          <div class="carousel-item ">
            <section class="d-flex " style={{ width: "120em" }}>
              {slider.map((user) => (
                <div class="card">
                  <img
                    src={user.poster}
                    class="card-img-top img-fluid"
                    alt={user.name}
                  />
                </div>
              ))}
            </section>
          </div>
          <div class="carousel-item">
            <section class="d-flex " style={{ width: "120em" }}>
              {slider.map((user) => (
                <div class="card">
                  <img
                    src={user.poster}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div class="navi">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active tab-change-btn-1"
            aria-current="true"
            aria-label="Slide 1"
          >
            <FaAngleLeft />
          </button>
          <button
            class="tab-change-btn-2"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;

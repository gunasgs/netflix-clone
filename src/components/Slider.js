import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Slider() {
  const slider = [
    {
      image:
        "https://assets-prd.ignimgs.com/2022/05/03/interceptor-en-us-main-vertical-1651614637898.jpg",
      title: "Interceptor ",
    },
    {
      image:
        "https://pbs.twimg.com/media/FOs2aR4XwAM_Hph?format=jpg&name=900x900",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q3swb7xDY1J-x7CEfgzLGanzAa3Iskc5SA&usqp=CAU",
    },
    {
      image:
        "https://i.pinimg.com/originals/93/d3/30/93d330382e963458edb433ed100910d8.jpg",
    },
    {
      image:
        "https://c8.alamy.com/comp/2DE0GDG/movie-poster-the-haunting-of-hill-house-2018-netflix-2DE0GDG.jpg",
    },
    {
      image:
        "https://i0.wp.com/screen-connections.com/wp-content/uploads/2021/10/Red.Notice-Official.One_.Sheet_.Poster-01.jpg?resize=691%2C1024&ssl=1",
    },
    {
      image:
        "https://media.comicbook.com/2020/05/the-old-guard-1221464.jpeg?auto=webp&width=1080&height=1920&crop=1080:1920,smart",
    },
  ];
  const slider2 = [
    {
      image:
        "https://assets-prd.ignimgs.com/2022/05/03/interceptor-en-us-main-vertical-1651614637898.jpg",
      title: "Interceptor ",
    },
    {
      image:
        "https://pbs.twimg.com/media/FOs2aR4XwAM_Hph?format=jpg&name=900x900",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q3swb7xDY1J-x7CEfgzLGanzAa3Iskc5SA&usqp=CAU",
    },
    {
      image:
        "https://i.pinimg.com/originals/93/d3/30/93d330382e963458edb433ed100910d8.jpg",
    },
    {
      image:
        "https://c8.alamy.com/comp/2DE0GDG/movie-poster-the-haunting-of-hill-house-2018-netflix-2DE0GDG.jpg",
    },
    {
      image:
        "https://i0.wp.com/screen-connections.com/wp-content/uploads/2021/10/Red.Notice-Official.One_.Sheet_.Poster-01.jpg?resize=691%2C1024&ssl=1",
    },
    {
      image:
        "https://media.comicbook.com/2020/05/the-old-guard-1221464.jpeg?auto=webp&width=1080&height=1920&crop=1080:1920,smart",
    },
  ];
  return (
    <div class="container-fluid slider ms-3">
      <section class="d-flex justify-content-between margin-right mt-3 ms-3">
        <h3 class="text-white mt-5">
          <b>Trending</b>
        </h3>
      </section>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <section class="d-flex">
              {slider.map((user) => (
                <div class="card">
                  <img
                    src={user.image}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <section class="d-flex justify-content-between">
                      <div>
                        <i class="bi bi-play-circle-fill card-icon"></i>
                        <i class="bi bi-plus-circle card-icon"></i>
                      </div>
                      <div>
                        <i class="bi bi-arrow-down-circle card-icon"></i>
                      </div>
                    </section>
                    <section class="d-flex flex-column align-items-start justify-content-between">
                      <p class="netflix-card-text ">
                        {user.title}
                        <span class="border netflix-card-text p-1 text-white">
                          HD
                        </span>
                      </p>
                      <p class=" netflix-card-text text-white">22-01-2022</p>

                      <p class="netflix-card-text text-white">Thriller</p>
                    </section>
                  </div>
                </div>
              ))}
            </section>
          </div>
          <div class="carousel-item">
            <section class="d-flex">
              {slider.map((user) => (
                <div class="card">
                  <img
                    src={user.image}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <section class="d-flex justify-content-between">
                      <div>
                        <i class="bi bi-play-circle-fill card-icon"></i>
                        <i class="bi bi-plus-circle card-icon"></i>
                      </div>
                      <div>
                        <i class="bi bi-arrow-down-circle card-icon"></i>
                      </div>
                    </section>
                    <section class="d-flex align-items-center justify-content-between">
                      <p class="netflix-card-text m-0">97% match</p>
                      <span class="m-2 netflix-card-text text-white">
                        Limited Series
                      </span>{" "}
                      <span class="border netflix-card-text p-1 text-white">
                        HD
                      </span>
                    </section>
                    <span class="netflix-card-text text-white">
                      Provocative • Psychological • Thriller
                    </span>
                  </div>
                </div>
              ))}
            </section>
          </div>
          <div class="carousel-item">
            <section class="d-flex">
              {slider.map((user) => (
                <div class="card">
                  <img
                    src={user.image}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <section class="d-flex justify-content-between">
                      <div>
                        <i class="bi bi-play-circle-fill card-icon"></i>
                        <i class="bi bi-plus-circle card-icon"></i>
                      </div>
                      <div>
                        <i class="bi bi-arrow-down-circle card-icon"></i>
                      </div>
                    </section>
                    <section>
                      <div>
                        <h2>{user.title}</h2>
                      </div>
                    </section>
                  </div>
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

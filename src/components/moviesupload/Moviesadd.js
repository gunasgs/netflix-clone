import React from "react";
import Nav from "../Nav";
import { useFormik } from "formik";
import axios from "axios";
import "./moviesadd.css";
function Moviesadd() {
  let formik = useFormik({
    initialValues: {
      Title: "",
      desc: "",
      poster: "",
      type: "",
      banner: "",
      date: "",
      rating: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://netflix-app-clone-1.herokuapp.com/movies",
          values
        );
      } catch (error) {}
    },
  });
  let buttonclick = () => {
    alert("added");
  };
  return (
    <>
      <Nav />
      <div className="container-fluid mt-5">
        <div className="row  ">
          <form onSubmit={formik.handleSubmit} className="add-box">
            <div class="row g-3 mt-3">
              <div class="col-1">
                <label for="input" class="form-label">
                  Title
                </label>
              </div>
              <div class="col-4">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.Title}
                  class="form-select"
                  name="Title"
                  id="Title"
                  aria-label="Default select example"
                />
              </div>
            </div>
            <div class="row g-3 mt-3">
              <div class="col-1">
                <label for="input" class="form-label">
                  desc
                </label>
              </div>
              <div class="col-4">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.desc}
                  class="form-select"
                  name="desc"
                  id="desc"
                  aria-label="Default select example"
                />
              </div>
            </div>
            <div class="row g-3 mt-3">
              <div class="col-1">
                <label for="year" class="form-label">
                  year
                </label>
              </div>
              <div class="col-4">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.year}
                  class="form-select"
                  name="year"
                  id="year"
                  aria-label="Default select example"
                />
              </div>
            </div>

            <div class="row g-3 mt-3">
              <div class="col-1">
                <label for="rating" class="col-form-label">
                  rating
                </label>
              </div>
              <div class="col-4">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.rating}
                  class="form-select"
                  name="rating"
                  id="rating"
                  aria-label="Default select example"
                />
              </div>
            </div>
            <div class="row g-3 mt-3">
              <div class="col-1">
                <label for="poster" class="col-form-label">
                  poster
                </label>
              </div>
              <div class="col-4">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.poster}
                  class="form-select"
                  name="poster"
                  id="poster"
                  aria-label="Default select example"
                />
              </div>
            </div>

            <div className="row">
              <div class="col-lg-6 col-md-6 col-sm-6 text-center mt-5">
                <input
                  type="submit"
                  onClick={buttonclick}
                  class=" ms-5 btn btn-primary gap-2"
                  value="submit"
                />

                <button type="button" class="btn btn-warning gap-2 mx-5">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Moviesadd;

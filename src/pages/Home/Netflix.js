import Featured from "../../components/Feature";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import request from "../../request";
import "../Home/Netflix.css";
import Row from "../../components/Row";

function Netflix() {
  return (
    <>
      <Nav />
      <Featured />
      <Slider Title="Trending Now" />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />

      <Footer />
    </>
  );
}

export default Netflix;

import Link from "next/link";
import Navbar from "@/components/navbar";
export default function search({ params }: { params: { id: number } }) {
  async function getData() {
    const respon = await fetch(
      `${process.env.BASE_URL}/search/movie?query=${params.id}&api_key=${process.env.API_KEY}`
    );
    return respon.json();
  }
  async function search() {
    const data = await getData();
    const movies = data.results;
    return movies.map((movie: any, i: number) => (
      <div
        data-aos="flip-down"
        data-aos-anchor-placement="bottom-bottom"
        key={i}
        className="card card-side bg-base-100 shadow-xl w-96 relative overflow-hidden ">
        <img src="/blurry1.svg" className="absolute -z-10 "></img>
        <figure>
          <img
            className="h-52 "
            src={`${process.env.BASE_IMG}${movie.poster_path}`}
            alt="Movie"
          />
        </figure>

        <div className="card-body">
          <h2
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="500"
            className="card-title">
            {movie.title}
          </h2>
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="500">
            Rating : {movie.vote_average}
          </p>
          <div className="card-actions justify-end">
            <Link href={`/detail/${movie.id}`}>
              <button
                data-aos="zoom-in"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="500"
                className="btn btn-primary rounded-xl">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  }
  const Search = search();
  return (
    <>
      <main>
        <Navbar bg="backdrop-blur-sm bg-primary/80" position="sticky" />
        <h1 className="bg-primary ml-auto mr-2 sm:mr-20 text-center w-24 mt-10 rounded-lg shadow-md">
          Search
        </h1>
        <section className="flex flex-wrap gap-5 justify-center ">
          {Search}
        </section>
      </main>
    </>
  );
}

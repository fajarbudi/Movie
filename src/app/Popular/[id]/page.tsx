import Link from "next/link";
import Navbar from "@/app/component/navbar";
export default function Popular({ params }: { params: { id: number } }) {
  async function getData() {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&page=${params.id}`
    );
    return res.json();
  }
  async function popular1() {
    const data = await getData();
    const movies = data.results;

    return movies.map((movie: any, i: number) => (
      <div
        data-aos="flip-down"
        data-aos-anchor-placement="bottom-bottom"
        key={i}
        className="card card-side bg-base-100 shadow-xl w-96 relative overflow-hidden "
      >
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
            className="card-title"
          >
            {movie.title}
          </h2>
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="500"
          >
            Rating : {movie.vote_average}
          </p>
          <div className="card-actions justify-end">
            <Link href={`/detail/${movie.id}`}>
              <button
                data-aos="zoom-in"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="500"
                className="btn btn-primary rounded-xl"
              >
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  }
  const Popular = popular1();
  let halaman = [];
  for (let i = params.id; i <= 32; i++) {
    halaman.push(i);
  }
  let Next = params.id;
  const next = () => {
    params.id < 32 ? Next++ : (Next = 32);
  };
  next();
  let Prev = params.id;
  const prev = () => {
    params.id > 1 ? Prev-- : (Prev = 1);
  };
  prev();

  return (
    <>
      <main>
        <Navbar bg=" backdrop-blur-sm bg-primary/80" position="sticky" />

        <section className="mt-2 flex flex-wrap justify-center gap-5 ">
          {Popular}
        </section>

        {/* Pagination */}
        <div className=" flex justify-center mt-6 mb-6">
          <div className="grid bg-primary content-center rounded-l-lg border-r-2">
            <Link className="btn btn-ghost" href={`/Popular/${Prev}`}>
              Prev
            </Link>
          </div>
          <div className="grid bg-primary content-center px-2 hover:text-white">
            <Link href="/Popular/1">First</Link>
          </div>
          <div className=" flex justify-start bg-primary w-64 overflow-hidden halaman ">
            {halaman.map((hal) => (
              <Link className=" btn btn-ghost" href={`/Popular/${hal}`}>
                {hal}
              </Link>
            ))}
          </div>
          <div className="grid bg-primary content-center px-2 hover:text-white">
            <Link href="/Popular/32">Last</Link>
          </div>
          <div className="grid bg-primary content-center rounded-r-lg border-l-2">
            <Link className="btn btn-ghost" href={`/Popular/${Next}`}>
              Next
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

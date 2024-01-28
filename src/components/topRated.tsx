import Link from "next/link";
async function getData() {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
}
export default async function TopRated() {
  const data = await getData();
  const topRated = data.results;
  return topRated.map((coba: any, i: number) => (
    <div
      data-aos="flip-down"
      data-aos-anchor-placement="bottom-bottom"
      key={i}
      className="card card-side bg-base-100 shadow-xl w-96 relative overflow-hidden ">
      <img src="/blurry1.svg" className="absolute -z-10 "></img>
      <figure>
        <img
          className="h-52 "
          src={`${process.env.BASE_IMG}${coba.poster_path}`}
          alt="Movie"
        />
      </figure>

      <div className="card-body">
        <h2
          data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="500"
          className="card-title">
          {coba.title}
        </h2>
        <p
          data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="500">
          Rating : {coba.vote_average}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/detail/${coba.id}`}>
            <button
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="500"
              className="btn btn-primary">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));
}

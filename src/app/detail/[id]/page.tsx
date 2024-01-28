import Navbar from "@/components/navbar";
import Button from "@/components/Button";
import { Rampart_One } from "next/font/google";
const Font = Rampart_One({ subsets: ["latin"], weight: "400" });
export default async function page({ params }: { params: { id: number } }) {
  async function getData() {
    const res = await fetch(
      `${process.env.BASE_URL}/movie/${params.id}?api_key=${process.env.API_KEY}`
    );
    return res.json();
  }

  async function search() {
    const data = await getData();
    return (
      <>
        <div className="satu">
          <img
            className="kenburns-top"
            src={`${process.env.BASE_IMG}${data.backdrop_path}`}></img>
        </div>

        <div className="hero min-h-screen bg-gradient-to-t from-black from-40% absolute top-0">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              data-aos="fade-down-left"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1500"
              src={`${process.env.BASE_IMG}${data.poster_path}`}
              className="max-w-sm rounded-xl shadow-2xl"
            />
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500">
              <h1
                className={`text-5xl text-white font-bold mb-2 ${Font.className}`}>
                {data.title}
              </h1>
              <div className=" flex flex-row gap-4">
                <p className=" p-2 text-5x1 text-white backdrop-blur-sm bg-white/20 rounded-xl ">
                  {data.release_date}
                </p>
                <p className=" p-2 text-5x1 text-white">
                  {data.runtime} Minute |
                </p>
                <p className="py-2 text-white"> Ratting: {data.vote_average}</p>
              </div>
              <p className="py-8 text-white text-focus-in ">{data.overview}</p>
              <Button />
            </div>
          </div>
        </div>
      </>
    );
  }
  const Detail = search();
  return (
    <>
      <main className="h-screen">
        <Navbar
          bg="backdrop-blur-sm bg-black/30"
          text="text-white"
          position="absolute"
        />
        <div>{Detail}</div>
      </main>
    </>
  );
}

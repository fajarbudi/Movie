"use client";
import { useRouter } from "next/navigation";
export default function Button() {
  const router = useRouter();
  return (
    <>
      <button
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="1500"
        className="btn btn-primary"
        onClick={() => router.back()}>
        Previous
      </button>
    </>
  );
}

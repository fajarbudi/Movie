import { useEffect, useState } from "react";
export default function DarkMode() {
  const [button, setButton] = useState(false);
  const [mode, setMode] = useState("");

  const Mode = () => {
    if (!button) {
      setButton(true);

      localStorage.setItem("Theme", "dark");
    } else {
      setButton(false);

      localStorage.setItem("Theme", "cmyk");
    }
  };

  useEffect(() => {
    const Theme = localStorage.getItem("Theme");
    const html = document.querySelector("Html");
    html?.setAttribute("data-theme", `${!Theme ? "cmyk" : Theme}`);

    Theme == "dark" ? setMode("Dark") : setMode("Light");
  });

  return (
    <>
      <button className="btn btn-sm" onClick={() => Mode()}>
        {mode}
      </button>
    </>
  );
}

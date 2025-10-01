"use client";
import Digit from "components/Digit";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const getTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };

    getTime();

    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex border-4 rounded-lg px-5 pb-7 pt-5 border-zinc-700 ">
        {Object.keys(time.split("")).map((key: string) => (
          <Digit key={key} value={time[Number(key)]} />
        ))}
      </div>
    </div>
  );
}

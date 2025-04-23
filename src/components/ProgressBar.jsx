import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  useEffect(() => {
    let timerId;

    const updateProgress = (current) => {
      if (current < 100) {
        const delay = current === 90 ? 2000 : 140;

        timerId = setTimeout(() => {
          setProgressPercent(current + 1);
          updateProgress(current + 1);
        }, delay);
      }
    };

    updateProgress(0);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <section className="flex flex-col justify-center items-center gap-3">
      <h2 className="font-semibold">Progress Bar</h2>
      <div className="bg-white border-2 border-gray-400 w-md h-5 rounded-xl overflow-hidden relative flex justify-center items-center">
        <div
          className={`transition-all absolute left-0 h-full bg-green-500 z-10`}
          style={{ width: `${progressPercent}%` }}
        ></div>
        <p
          className={`text-xs z-20 ${
            progressPercent == 100 ? "text-white" : "text-black"
          } `}
        >
          {progressPercent}%
        </p>
      </div>
      <p>{progressPercent == 100 ? "Completed!" : "Loading..."}</p>
    </section>
  );
};

export default ProgressBar;

import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle-1.svg"
        alt="loading"
        width={30}
        height={30}
      />
    </div>
  );
}

export function Loader2() {
  return (
    <div className="flex-center">
      <Image
        src="/icons/loading-circle-1.svg"
        alt="loading"
        width={30}
        height={30}
      />
    </div>
  );
}

export default Loader;

import CallList from "@/components/CallList";
import React from "react";

function Previous() {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold text-purple-2">Previous</h1>
      <CallList type="ended" />
    </section>
  );
}

export default Previous;
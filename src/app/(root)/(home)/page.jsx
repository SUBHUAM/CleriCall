"use client";
import { Loader2 } from "@/components/Loader";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCall";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

function Home() {
  const now = new Date();

  const { upcomingCalls, isLoading } = useGetCalls();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[400px] w-full rounded-[20px] bg-hero bg-cover relative">
        <div className="flex h-full flex-col max-md:px-5 max-md:py-8 lg:p-11">
          {isLoading ? (
            <Loader2 />
          ) : (
            <h2 className="glassmorphism max-2-[270px] rounded py-2 text-center text-base font-normal">
              {upcomingCalls && upcomingCalls[0].state
                ? `Upcoming Meeting at : ${upcomingCalls[0].state?.startsAt.toLocaleString()}`
                : `No upcoming Meeting`}
            </h2>
          )}
          <div className="flex flex-col gap-2 pt-4">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
      <Analytics/>
    </section>
  );
}

export default Home;

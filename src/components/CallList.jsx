"use client";
import { useGetCalls } from "@/hooks/useGetCall";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MeetingCard } from "./MeetingCard";
import Loader from "./Loader";
import { useToast } from "./ui/use-toast";

const CallList = (props) => {
  const { type } = props;

  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();

  const router = useRouter();
  const [recordings, setRecodings] = useState();

  const [load, setLoad] = useState(true);

  const { toast } = useToast();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };
  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No previous";
      case "recordings":
        return "No recordings";
      case "upcoming":
        return "No upcoming Calls";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        await Promise.all(
          callRecordings?.map((meeting) => meeting.queryRecordings()) ?? []
        ).then((callData) => {
          const recordings = callData
            .filter((call) => call.recordings.length > 0)
            .flatMap((call) => call.recordings);
          setRecodings(recordings);
        });
      } catch (err) {
        console.log(err);
        toast({ title: "Try after some time" });
      }
    };
    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  const calls = getCalls();

  const noCallsMessage = getNoCallsMessage();

  if (isLoading) {
    return <Loader />;
  }
  if (type === "recordings" && load) {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    return <Loader />;
  }

  console.log(upcomingCalls);

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting) => {
          return (
            <MeetingCard
              key={meeting?.id}
              icon={
                type === "ended"
                  ? "/icons/previous.svg"
                  : type === "upcoming"
                  ? "/icons/upcoming.svg"
                  : "/icons/recordings.svg"
              }
              title={
                meeting.state?.custom?.description?.substring(0, 20) ||
                meeting.filename?.substring(0, 20) ||
                "Personal Meeting"
              }
              date={
                meeting.state?.startsAt.toLocaleString() ||
                meeting.start_time?.toLocaleString()
              }
              isPreviousMeeting={type === "ended"}
              buttonIcon1={
                type === "recordings" ? "/icons/play.svg" : undefined
              }
              handleClick={
                type === "recordings"
                  ? () => {
                      router.push(`${meeting.url}`);
                    }
                  : () => {
                      router.push(`/meeting/${meeting.id}`);
                    }
              }
              link={
                type === "recordings"
                  ? meeting.url
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`
              }
              buttonText={type === "recordings" ? "Play" : "Start"}
            />
          );
        })
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
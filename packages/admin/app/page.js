"use client";
import { Button, Input } from "@app/common";
import { useState, useEffect } from "react";

export default function Home() {
  const [traceData, setTraceData] = useState("");
  const [eventId, setEventId] = useState();
  const [traces, setTraces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/trace").then((res) => {
      res.json().then((data) => {
        setTraces(data);
      });
    });
  }, []);

  function handleAddTrace(e) {
    e.preventDefault();
    fetch("http://localhost:9000/trace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(traceData),
    });
  }

  function handleRemoveTrace(e) {
    e.preventDefault();
    if (!eventId) return;
    fetch(`http://localhost:9000/trace/${eventId}`, {
      method: "DELETE",
    });
  }
  return (
    <>
      <form
        onSubmit={handleAddTrace}
        className="flex flex-col  mx-auto border border-slate-200 p-10 items-center justify-center gap-4"
      >
        <h2>Add trace</h2>
        <Input
          value={traceData?.message}
          onChange={(e) => {
            setTraceData({ message: e.target.value });
          }}
          placeholder="Enter message error here"
        />
        <Button label="Add trace" />
      </form>

      <form
        onSubmit={handleRemoveTrace}
        className="flex flex-col  mx-auto border border-slate-200 p-10 items-center justify-center gap-4"
      >
        <h2>Remove trace</h2>
        <select
          onChange={(e) => {
            setEventId(e.target.value);
          }}
          placeholder="Enter ID"
        >
          {traces.map((trace) => {
            return (
              <option key={trace.eventId} value={trace.eventId}>
                {trace.eventId}
              </option>
            );
          })}
        </select>
        <Button variant="error" label="Remove trace" />
      </form>
    </>
  );
}

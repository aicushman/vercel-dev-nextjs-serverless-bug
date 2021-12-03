import { useEffect, useState } from "react";

export default function Index() {
  const [nodeCall, setNodeCall] = useState();
  const [pythonCall, setPythonCall] = useState();

  useEffect(async () => {
    setNodeCall(
      await fetch("/api/test", { method: "GET" }).then((res) => res.status)
    );
    setPythonCall(
      await fetch("/api/date", { method: "GET" }).then((res) => res.status)
    );
  }, []);

  return (
    <>
      <div>Node serverless function in /pages/api: {nodeCall}</div>
      <div>Python serverless function in /api: {pythonCall}</div>
    </>
  );
}

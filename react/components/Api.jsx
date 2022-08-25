import React,{ useState, useEffect } from "react";

const Api = () => {
  const [state, setState] = useState();

  useEffect(() => {
    const updateData = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setState(data);
    };
    updateData();
  }, [setState]);

  return <div className="text-3xl font-mono text-sky-900 font-bold">
    {state ? state.message : "loading..."}
    </div>;
};

export default Api;

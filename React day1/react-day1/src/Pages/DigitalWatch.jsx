import { useEffect, useState } from "react";

function DigitalWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>Digital Watch</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
export default DigitalWatch;

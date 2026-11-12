import React, { useState, useEffect, useRef } from 'react';

// Custom CountUp Component
function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="stats_section">
      <div className="container">
        <div className="stats_grid">
          
          <div className="stats_card">
            <h1>
              <CountUp end={186033} />
            </h1>
            <p>Alumni across the globe</p>
          </div>

          <div className="stats_card">
            <h1>
              <CountUp end={6400} />+
            </h1>
            <p>Founders across the globe</p>
          </div>

          <div className="stats_card">
            <h1>
              <CountUp end={7400} />+
            </h1>
            <p>CEOs across the globe</p>
          </div>

        </div>
      </div>
    </section>
  );
}

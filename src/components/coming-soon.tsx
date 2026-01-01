"use client";

import { useCallback, useEffect, useState } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_TIME = new Date("2026-01-15T12:45:00+05:30").getTime();

export const ComingSoon = () => {

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = Date.now();
    const distance = TARGET_TIME - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const tick = () => setTimeLeft(calculateTimeLeft());

    const delay = 1000 - (new Date().getTime() % 1000);
    const timeout = setTimeout(() => {
      tick();
      const interval = setInterval(tick, 1000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [calculateTimeLeft]);

  return (
    <div className="mx-auto">
      <ShaderGradientCanvas style={{ position: "absolute", zIndex: -1 }}>
        <ShaderGradient
          animate="on"
          brightness={0.8}
          cAzimuthAngle={270}
          cDistance={0.52}
          cPolarAngle={180}
          cameraZoom={15.07}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          envPreset="city"
          grain="on"
          lightType="env"
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.4}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          shader="defaults"
          type="sphere"
          uAmplitude={3.2}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={0.3}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
      <div className="text-white flex flex-col items-center justify-center min-h-screen px-6 py-8 text-center space-y-6 capitalize absolute inset-0 bg-black/30 backdrop-blur-[2px] z-0">
        <h3 className="font-noto-serif text-2xl xs:text-3xl md:text-6xl font-medium">
          The future of branding is almost here.
        </h3>
        <p className="font-noto-sans opacity-85 text-sm xs:text-lg md:text-2xl">
          Designing brand systems built to scale - launching soon
        </p>
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-6 xs:gap-8 md:gap-12 mt-10">
          <TimerBlock value={timeLeft.days} label="Days" />
          <TimerBlock value={timeLeft.hours} label="Hours" />
          <TimerBlock value={timeLeft.minutes} label="Minutes" />
          <TimerBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

const TimerBlock = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="text-center">
      <h4 className="text-6xl xs:text-7xl md:text-9xl font-noto-serif">
        {String(value).padStart(2, "0")}
      </h4>
      <span className="text-lg xs:text-xl md:text-2xl font-noto-sans opacity-85">
        {label}
      </span>
    </div>
  );
};

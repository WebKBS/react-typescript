import { useEffect, useRef, useState } from 'react';
import Container from './Ui/Container.tsx';
import {
  Timer as TimerProps,
  useTimersContext,
} from './store/timers-context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime; // 0보다 작아지면 안되므로 0을 반환
          }
          return prevTime - 50;
        });
      }, 50);

      interval.current = timer; // interval.current에 timer를 할당
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

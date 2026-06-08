import { useEffect, useState } from "react";

function calculateStatus() {
  const date = new Date();
  const day = date.getDay();
  const totalMinutes = date.getHours() * 60 + date.getMinutes();
  const daysWithService = [0, 3, 4, 5, 6];
  const opening = 1080;
  const closing = 180;
  const yesterday = (day + 6) % 7;
  const isOpen =
    (daysWithService.includes(day) && totalMinutes >= opening) ||
    (daysWithService.includes(yesterday) && totalMinutes < closing);

  return isOpen
    ? { isOpen: true, label: "Abierto ahora", detail: "Atendemos hasta las 3:00 AM" }
    : { isOpen: false, label: "Cerrado ahora", detail: "Abrimos desde las 6:00 PM" };
}

export function useBusinessStatus() {
  const [status, setStatus] = useState(calculateStatus);

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(calculateStatus()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  return status;
}

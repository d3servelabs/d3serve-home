import { useEffect, useState } from "react";

export const useInteraction = () => {
  const [interaction, setInteraction] = useState(false);

  useEffect(() => {
    const handle = () => {
      setInteraction(true);
    };

    const types = ["click", "mousemove", "keydown", "scroll", "touchstart"];

    types.forEach((type) => {
      window.addEventListener(type, handle);
    });

    return () => {
      types.forEach((type) => {
        window.removeEventListener(type, handle);
      });
    };
  }, []);

  return interaction;
};

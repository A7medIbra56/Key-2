"use client";

import { useEffect } from "react";

export default function BodyClassSetter({ classes }: { classes: string[] }) {
  useEffect(() => {
    // Add classes to body
    classes.forEach((cls) => {
      if (cls) document.body.classList.add(cls);
    });

    // Cleanup: remove classes when component unmounts
    return () => {
      classes.forEach((cls) => {
        if (cls) document.body.classList.remove(cls);
      });
    };
  }, [classes]);

  return null;
}

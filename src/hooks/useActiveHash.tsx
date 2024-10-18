import { useEffect, useState } from "react";
import { UseActiveHashReturn } from "./hook";

const useActiveHash = (initialHash: string): UseActiveHashReturn => {
  const [activeHash, setActiveHash] = useState<string>(initialHash);

  const updateHash = (hash: string) => {
    setActiveHash(hash);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hash = entry.target.id;
            updateHash(hash);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return { activeHash, updateHash };
};

export default useActiveHash;

import { useState, useEffect } from "react";

/**
 * A custom hook to check if a media query matches.
 * @param query The media query string (e.g., '(min-width: 768px)')
 * @returns boolean `true` if the query matches, `false` otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Set the initial value
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listen for changes
    const listener = () => {
      setMatches(media.matches);
    };

    // modern browsers have addEventListener and removeEventListener
    if (media.addEventListener) {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else {
      // older browsers have addListener and removeListener
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
}

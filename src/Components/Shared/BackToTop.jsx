import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const BackToTop = ({ threshold = 200, mode = "pixels", className = "" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const getThreshold = () => {
      if (mode === "half") return window.innerHeight / 2;
      if (typeof threshold === "number") return threshold;
      return 200;
    };

    const check = () => {
      const t = getThreshold();
      setVisible(window.scrollY > t);
    };

    const onScroll = () => {
      // use rAF for smoother performance
      if (!ticking) {
        window.requestAnimationFrame(() => {
          check();
          ticking = false;
        });
        ticking = true;
      }
    };

    // initial check
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", check);
    };
  }, [threshold, mode]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

        <button
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
      className={
        "fixed z-50 rounded-lg right-5 bottom-4 md:right-8 md:bottom-4 flex items-center justify-center " +
        "bg-primary/50 text-white p-3 cursor-pointer hover:bg-primary/80  shadow-lg transform transition-all duration-300 " +
        (visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-95 pointer-events-none") +
        " " +
        className
      }
    >
      <FaArrowUp />
    </button>

  );
};

export default BackToTop;

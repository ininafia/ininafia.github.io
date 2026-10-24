import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollEffects";

export default function ScrollToTop() {
  const { showScrollTop } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
    >
      <ArrowUp size={20} />
    </button>
  );
}

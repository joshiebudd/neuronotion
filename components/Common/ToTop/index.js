import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import _ from "lodash";
import Image from "next/image";

const Index = ({}) => {
  let isTop = true;
  const buttonRef = useRef(null);
  const onWindowScroll = () => {
    const newIsTop =
      scrollY < 100 ||
      scrollY > document.getElementById("footer").offsetTop - innerHeight;
    if (newIsTop !== isTop) {
      isTop = newIsTop;
      if (isTop) {
        buttonRef.current.classList.add(styles.hide);
        buttonRef.current.classList.add("hidden");
      } else {
        buttonRef.current.classList.remove(styles.hide);
        buttonRef.current.classList.remove("hidden");
      }
    }
  };
  const throttledWindowScroll = _.throttle(onWindowScroll, 100);

  const handleOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    onWindowScroll();
    window.addEventListener("scroll", throttledWindowScroll);
    return () => {
      window.removeEventListener("scroll", throttledWindowScroll);
    };
  }, []);

  return (
    <div
      className="w-full sm:w-fit fixed bottom-0 right-0 flex items-end justify-center sm:justify-end p-5"
      onClick={(e) => console.log(e)}
    >
      <Image
        ref={buttonRef}
        onClick={handleOnTop}
        className={`cursor-pointer opacity-60 hover:opacity-80 transition-all duration-300 ${styles.hide}`}
        src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/to_top.png"
        alt="To Top"
        width={60}
        height={60}
      />
    </div>
  );
};

export default Index;

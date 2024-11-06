import { CSSProperties, useEffect, useRef, useState } from "react";
import { Header } from "../header/header";
import { Lists } from "../lists/lists";
import styles from "./app.module.scss";
import clsx from "clsx";

function App() {
  const handlerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDialogElement | null>(null);
  const isHandlerDragging = useRef<boolean>(false);
  const leftPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (e.target === handlerRef.current) {
        isHandlerDragging.current = true;
      }
    }

    function handleMouseMove(e: MouseEvent) {
      e.preventDefault();
      if (
        !isHandlerDragging.current ||
        !mainRef.current ||
        !leftPanelRef.current
      ) {
        return false;
      }
      const containerOffsetLeft = mainRef.current.offsetLeft;
      const pointerRelativeXpos = e.clientX - containerOffsetLeft;
      const boxAminWidth = 250;
      const newSize = Math.max(boxAminWidth, pointerRelativeXpos - 8);
      leftPanelRef.current.style.inlineSize = `${newSize}px`;
      leftPanelRef.current.style.flexGrow = "0";
    }

    function handleMouseUp(e: MouseEvent) {
      isHandlerDragging.current = false;
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main} ref={mainRef}>
        <div
          className={clsx(styles.main__item, styles.main__left)}
          ref={leftPanelRef}
        >
          <Lists />
        </div>
        <div
          className={styles.main__handler}
          ref={handlerRef}
          draggable={false}
        ></div>
        <div className={clsx(styles.main__item, styles.main__right)}>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </main>
    </div>
  );
}

export { App };

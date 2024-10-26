"use client";

import { useRef, useState, KeyboardEvent } from "react";
import { InputHTMLAttributes } from "react";
import { useSearchStore } from "@/store/useSearchStore";
import styles from "./input.module.scss";

export default function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const [enteredValue, setEnteredValue] = useState("");
  const ref = useRef<HTMLInputElement | null>(null);
  const { keywords, addKeyword } = useSearchStore();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      ref.current === document.activeElement &&
      enteredValue.trim().length &&
      keywords.length < 5
    ) {
      addKeyword(enteredValue.trim());
      setEnteredValue("");
    } else return;
  };

  return (
    <input
      ref={ref}
      type="text"
      value={enteredValue}
      maxLength={20}
      onChange={(e) => setEnteredValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className={styles.input}
      {...rest}
    />
  );
}

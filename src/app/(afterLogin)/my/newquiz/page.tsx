"use client";

import styles from "./page.module.scss";
import Container from "@/app/(afterLogin)/_component/Container";
import TextAreaAutoSize from "react-textarea-autosize";
import Link from "next/link";
import QuizTitleSection from "../_component/QuizTitleSection";

export default function Page() {
  return (
    <form className={styles.form}>
      <Container title="질문 제목">
        <QuizTitleSection />
      </Container>
      <Container title="답변 보기 설명">
        <TextAreaAutoSize
          id="description"
          name="description"
          className={styles.description}
          placeholder="질문에 대한 답변을 적어주세요."
        ></TextAreaAutoSize>
      </Container>
      <Container title="질문 추가">
        <div className={styles.cancelSaveSection}>
          <Link href="/my/newquiz/cancel">취소</Link>
          <Link href="/my/newquiz/save">저장 및 추가</Link>
        </div>
      </Container>
    </form>
  );
}
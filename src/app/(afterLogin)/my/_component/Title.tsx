"use client";

import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();

  let title = "마이페이지"; // 기본 타이틀 설정
  // 경로에 따른 타이틀 변경
  if (pathname === "/my/newcoll") {
    title = "새 컬렉션 추가";
  } else if (pathname === "/my/newquiz") {
    title = "새 질문 추가";
  } else if (pathname === "/my") {
    title = "마이페이지";
  } else if (
    pathname.includes("/my/collections/") &&
    pathname.endsWith("/edit")
  ) {
    if (pathname.includes("/quizzes")) {
      title = "질문 수정";
    } else {
      title = "컬렉션 수정";
    }
  } else if (
    pathname.includes("/my/collections/") &&
    pathname.endsWith("/newquiz")
  ) {
    title = "새 질문 추가";
  } else if (pathname === "/my/edit") {
    title = "내 정보 수정";
  } else {
    title = "";
  }

  return <>{title}</>;
}

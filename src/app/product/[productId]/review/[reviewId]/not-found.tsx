"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
  const pathName = usePathname();
  return <div>Not Found review not found 404 - {pathName}</div>;
}

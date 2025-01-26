"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
export default function WritePage() {
  const EditorComponent = useMemo(
    () => dynamic(() => import("../components/editor"), { ssr: false }),
    []
  );
  return (
    <div className="flex flex-col h-full p-6 bg-gray-50 rounded-lg shadow-sm">
      <div className="text-2xl font-bold text-gray-800 mb-4">
        BlockNote Editor
      </div>
      <EditorComponent />
    </div>
  );
}

'use client'

import { ReactNode } from "react";

export default function Tooltip({ children, text }: { children: ReactNode, text: string }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-1 hidden group-hover:block w-max">
        <div className="bg-slate-900 text-white text-sm rounded py-2 px-4">
          {text}
        </div>
      </div>
    </div>
  );
} 
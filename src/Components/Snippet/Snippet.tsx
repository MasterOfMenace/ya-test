import React, { ReactNode } from "react";

interface SnippetProps {
  children: ReactNode;
}

export const Snippet = ({ children }: SnippetProps) => {
  return <div className="snippet">{children}</div>;
};

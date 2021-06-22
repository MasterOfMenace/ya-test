import React, { ReactNode } from "react";
import "./Snippet.scss";

interface SnippetProps {
  children: ReactNode;
}

export const Snippet = ({ children }: SnippetProps) => {
  return <div className="snippet">{children}</div>;
};

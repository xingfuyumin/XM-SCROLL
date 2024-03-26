import { ReactNode } from "react";

export interface XM_SCROLL extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children?: ReactNode;
  scrollDirection?: 'x' | 'y' | 'auto';
}
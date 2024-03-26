import { useImperativeHandle } from "react";
import { useRef } from "react";
import { useSize } from 'ahooks';

export default () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  // const scrollSize = useSize(scrollRef);
  const handleScroll = () => {
    const scrollTop = maskRef.current?.scrollTop;
    const scrollLeft = maskRef.current?.scrollLeft;
    // if (scrollRef.current) {
    //   scrollRef.current.style.top = `-${scrollTop || 0}px`;
    //   scrollRef.current.style.left = `-${scrollLeft || 0}px`;
    // }
    console.log(3);
  }
  return {
    scrollRef,
    maskRef,
    scrollSize: {
      width: 2508,
      height: 1643,
    },
    handleScroll,
  };
}
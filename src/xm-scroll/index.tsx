import React, { FC, forwardRef } from 'react';
import './index.less';
import useData from './hook';
import { XM_SCROLL } from './props';
import classnames from 'classnames';

const Index: FC<XM_SCROLL> = ({
  className, children, scrollDirection = 'auto', ...extraProps
}) => {
  const {
    scrollRef, scrollSize, maskRef, handleScroll,
  } = useData();
  return (
    <div
      className={classnames(
        'xm-scroll-container',
        className,
      )}
      {...extraProps}
    >
      <div
        className="xm-scroll-content"
        ref={scrollRef}
      >{children}</div>
      <div
        className="xm-scroll-mask"
        ref={maskRef}
        // onScroll={handleScroll}
      >
        <div className="xm-scroll-inner" style={{ width: scrollSize?.width, height: scrollSize?.height }}/>
      </div>
    </div>
  );
};

export default Index;

import React from 'react';
import './base.less';
import demoImage from './demo.png';
import { XMScroll } from '@xmzhou/scroll';

const Index = () => {
  return <XMScroll
    className="demo-root"
  >
    <img src={demoImage} />
  </XMScroll>
}

export default Index;
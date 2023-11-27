# Spline

使用 react 嵌入 spline 文件。

```jsx
// <code src="/index.tsx"></code>
import Spline from '@splinetool/react-spline';
import React from 'react';

export default function App() {
  return (
    <>
      <p>这是一只好奇的小兔子，代表我自己</p>
      <Spline scene="https://prod.spline.design/wNHNv2zF-PhddzS7/scene.splinecode" />
      <p>这是为TechUI设计的动态logo展示</p>
      <Spline scene="https://prod.spline.design/TXzErasKHY6Fb32X/scene.splinecode" />
    </>
  );
}
```

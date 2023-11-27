# Css

使用 Transition，Grid，animation 功能实现见的的交互卡片。

```jsx
import React from 'react';

import Card from './card.tsx';
import CardList from './index.tsx';

const ParentComponent = () => {
  return (
    <div>
      <h1>Grid Card List</h1>
      <CardList />
    </div>
  );
};

export default ParentComponent;
```

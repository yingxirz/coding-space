import React from 'react';

import htmlContent from './blackhole.html';

const YourComponent = () => <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;

export default YourComponent;

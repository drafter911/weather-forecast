import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
        overflow-x: hidden;
    }
    
    .ant-layout {
      height: 100%;
      overflow-y: hidden;
    }
    
    .ant-layout-content {
        height: 100%;
        padding: 24px 0;
        overflow: hidden auto;
    }
    
    .ant-layout-header {
        padding: 0;
    }

    .ant-card .ant-card-head-title {
        text-align: center;
        white-space: initial;
    }
`;

export default GlobalStyles;

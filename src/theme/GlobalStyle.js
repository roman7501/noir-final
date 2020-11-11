import { createGlobalStyle } from "styled-components";

import "sanitize.css";
import "sanitize.css/typography.css";

const Global = createGlobalStyle`

body{
    font-size: 20px;
    background: black;
    color: white;
    margin-top:0;
    padding: 0;
    
}
*{
    margin: 0;
    padding: 0;
    font-weight: 100;

}


`;

export default Global;

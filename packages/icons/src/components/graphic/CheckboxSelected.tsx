import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckboxSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.77778 4H18.2222C19.2089 4 20 4.8 20 5.77778V18.2222C20 19.2 19.2089 20 18.2222 20H5.77778C4.79111 20 4 19.2 4 18.2222V5.77778C4 4.8 4.79111 4 5.77778 4ZM5.77778 12L10.2222 16.4444L18.2222 8.44441L16.9689 7.18218L10.2222 13.9289L7.03111 10.7466L5.77778 12Z"
      fill="#48BF91"
    />
  </svg>
);
export default SvgCheckboxSelected;

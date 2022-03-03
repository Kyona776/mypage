import { mojs } from "@mojs/core";

export class Bubble extends mojs.CustomShape {
    getShape () { return '<path d="M83.0657721,87.5048737 C74.252469,95.2810178 62.6770192,99.9991713 49.9995857,99.9991713 C22.385577,99.9991713 0,77.6135943 0,49.9995857 C0,22.385577 22.385577,0 49.9995857,0 C77.6135943,0 99.9991713,22.385577 99.9991713,49.9995857 C99.9991713,50.0248803 99.9991526,50.0501705 99.999115,50.0754564 L100,94.5453117 C100,99.9979302 96.8685022,101.290527 93.0045119,97.4313174 L83.0657721,87.5048737 Z"></path>'; }
    getLength () { return 200; } // optional
  }
  
export class BubbleFlip extends mojs.CustomShape {
  getShape () {
    return '<path d="M16.9342279,87.5048737 C25.747531,95.2810178 37.3229808,99.9991713 50.0004143,99.9991713 C77.614423,99.9991713 100,77.6135943 100,49.9995857 C100,22.385577 77.614423,0 50.0004143,0 C22.3864057,0 0.000828659217,22.385577 0.000828659217,49.9995857 C0.000828659217,50.0248803 0.000847442255,50.0501705 0.000884995143,50.0754564 L0,94.5453117 C-5.64518814e-08,99.9979302 3.13149782,101.290527 6.99548809,97.4313174 L16.9342279,87.5048737 L16.9342279,87.5048737 Z"></path>'
  }
}
  
export class Check extends mojs.CustomShape {
  getShape () {
    return '<path d="M0,51.0412084 L30.5724856,79.9380913 C32.5759723,81.8317718 35.7778521,81.7755744 37.7145439,79.8221934 L100,17"></path>';
  }
  getLength () { return 175; }
}

export class Triangle extends mojs.CustomShape {
    getShape () {return '<path xmlns="http://www.w3.org/2000/svg" d="M15.16 1.77a5 5 0 0 1 4.11 1.18c1.08.9 1.73 2.16 2.45 3.34l9.06 15.01c.53.9 1.02 1.86 1.16 2.91a4.93 4.93 0 0 1-1.2 4.11 5.31 5.31 0 0 1-2.93 1.56c-.8.17-1.63.13-2.44.13H5.54a5.86 5.86 0 0 1-4.2-1.59 4.62 4.62 0 0 1-1.33-3c-.08-1.3.3-2.61.98-3.73a6698.5 6698.5 0 0 1 10.26-17 5.97 5.97 0 0 1 3.9-2.92zm.2 8.1c-.45.2-.76.6-1 1l-6.12 10.4c-.27.43-.54.9-.53 1.42-.02.43.23.83.58 1.04.41.26.9.29 1.38.3l13.21-.01c.64.01 1.41-.16 1.7-.8.27-.66-.1-1.33-.46-1.87l-6.8-10.67c-.39-.64-1.2-1.15-1.96-.8z" fill="#F34246"/>';}
} 
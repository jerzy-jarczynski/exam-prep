import sass from 'node-sass';
import {JSDOM} from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('styles', function () {
  const browserStyles = fs.readFileSync(path.resolve(__dirname, './browser-style.css'));

  const sassResult = sass.renderSync({
    // data: stylesFile,
    file: './src/style.scss'
  });
  const styles = sassResult.css.toString();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
      ${browserStyles}
      ${styles}
      </style>
    </head>
    <body>
      <div class="outside-nav">
        <h3>Outside nav</h3>
        <div class="row">
          <div class="logo">Acme no link</div>
        </div>
        <div class="row">
          <a href="#" class="logo">Acme as link</a>
        </div>
        <div class="row">
          <a href="#" class="other">Other link</a>
        </div>
      </div>

      <nav class="main-nav">
        <h3>Main nav</h3>
        <div class="row">
          <div class="logo">Acme no link</div>
        </div>
        <div class="row">
          <a href="#" class="logo">Acme as link</a>
        </div>
        <div class="row">
          <a href="#" class="other">Other link</a>
        </div>
      </nav>
    </body>
    </html>
  `;

  const hex2rgb = hex => {
    const [r, g, b] = hex.match(/\w/g).map(x => parseInt(''+x+x, 16));
    return `rgb(${r}, ${g}, ${b})`;
  };

  const parseValue = str => {
    let output = str;

    if(output === '') {
      output = 'empty string';
    } else if(/rgb\([0-9, ]+\)/.test(output)){
      const [r, g, b] = output.match(/\d+/g).map(x => ('0'+(parseInt(x).toString(16))).slice(-2));
      output = `#${r}${g}${b}`;
    }

    return output;
  };

  const rgb = {
    black: hex2rgb('#000'),
    blue: hex2rgb('#0aa'),
    green: hex2rgb('#0a0'),
    orange: hex2rgb('#f70'),
  };

  const defaultStyles = {
    color: rgb.black,
    fontWeight: '',
    borderBottomWidth: '',
    textDecoration: 'none',
  };

  const checkStyles = (elem, descr = '', specificStyles = {}) => {
    const expectedStyles = Object.assign({}, defaultStyles, specificStyles);
    const computedStyles = mockDom.getComputedStyle(elem);


    for(let key in expectedStyles){
      try{
        expect(computedStyles[key]).toBe(expectedStyles[key]);
      } catch(e) {
        console.warn(`${key} for ${descr} should be "${parseValue(expectedStyles[key])}", but is "${parseValue(computedStyles[key])}"`)
        expect(parseValue(computedStyles[key])).toBe(parseValue(expectedStyles[key]));
      }
    }
  };

  let mockDom;
  let elements;

  beforeEach(() => {
    mockDom = new JSDOM(html).window;

    elements = {
      outsideNav: {
        logoDiv: mockDom.document.querySelector('.outside-nav div.logo'),
        logoLink: mockDom.document.querySelector('.outside-nav a.logo'),
        otherLink: mockDom.document.querySelector('.outside-nav a.other'),
      },
      inNav: {
        logoDiv: mockDom.document.querySelector('.main-nav div.logo'),
        logoLink: mockDom.document.querySelector('.main-nav a.logo'),
        otherLink: mockDom.document.querySelector('.main-nav a.other'),
      },
    };
  });

  it('should not contain importants', function(){
    expect(!/!important/gi.test(styles)).toBe(true);
  });


  it('should be correct outside main-nav', function(){
    checkStyles(elements.outsideNav.logoDiv, '<div> with class "logo"', {
      color: rgb.green,
      fontWeight: 'bold',
    });
    checkStyles(elements.outsideNav.logoLink, '<a> with class "logo"', {
      color: rgb.blue,
      fontWeight: 'bold',
      textDecoration: 'underline',
    });
    checkStyles(elements.outsideNav.otherLink, '<a> without class "logo"', {
      color: rgb.blue,
      textDecoration: 'underline',
    });
  });

  it('should be correct inside main-nav', function(){
    checkStyles(elements.inNav.logoDiv, '<div> with class "logo"', {
      color: rgb.green,
      fontWeight: 'bold',
    });
    checkStyles(elements.inNav.logoLink, '<a> with class "logo"', {
      color: rgb.blue,
      fontWeight: 'bold',
      textDecoration: 'underline',
    });
    checkStyles(elements.inNav.otherLink, '<a> without class "logo"', {
      color: rgb.orange,
      textDecoration: 'none',
      borderBottomWidth: '3px',
    });
  });
});

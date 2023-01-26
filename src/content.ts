import { CSSProperties } from "react";

function getPageElements() {
  const inputs = Array.from(document.getElementsByTagName('input'));
  const textareas = Array.from(document.getElementsByTagName('textarea'));
  
  const buttons = Array.from(document.querySelectorAll(
    'button, input[type*="button" i], input[type*="submit" i], [role*="button" i]'
  ));
    
  const selects = Array.from(document.querySelectorAll(
    'select, [role*="listbox" i]'
  ));

  return {
    inputs,
    textareas,
    buttons,
    selects
  }
}

function applyStyles(
  element: HTMLElement,
  styles: CSSProperties
) {
  Object.assign(element.style, styles);
}

function getPosition(element: HTMLElement) {
  return {
    top,
    width: element.clientWidth,
    height: element.clientHeight
  }
}

function createLogoElement(element: HTMLElement) {
  const span = document.createElement('span');
  
  const { 
    direction, 
    textAlign 
  } = window.getComputedStyle(element);

  const isRightAligned = 
    direction === 'rtl' || 
    textAlign === 'right' || 
    textAlign === 'end'; 

  const logo = 
    chrome.runtime.getURL('assets/manifestIcons/icon.svg');

  applyStyles(span, {
    width: "24px",
    minWidth: "24px",
    height: "24px",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "auto",
    border: "none",
    display: "inline-block",
    visibility: "visible",
    position: "absolute",
    cursor: "pointer",
    zIndex: "998",
    padding: "0",
    transition: "none",
    pointerEvents: "all"
  });

  element.parentElement!.appendChild(span)
}

function onPageBootsrap() {
  const {
    inputs,
    textareas,
    buttons,
    selects
  } = getPageElements();

  for (const input of inputs) {
    createLogoElement(input);
  }
}

window.addEventListener('load', onPageBootsrap);

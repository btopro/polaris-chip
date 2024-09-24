import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

import {LitElement, html, css} from 'lit'

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "Flower goes here";
    this.title = "https://i.pinimg.com/originals/5f/ee/67/5fee67cc3c1d3ab72ba898f351bc0e81.jpg";

    
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

import React from 'react';
import App from "App";
import {render} from "react-dom";

class ExternalApp extends HTMLElement {
  connectedCallback() {
    render(
      <App/>, this
    );
  }
}

if (!window.customElements.get('micro-react')) {
  console.log('defining!');
  window.customElements.define('micro-react', ExternalApp);
}

// Self-invoking function to avoid polluting the global namespace
(function() {
  "use strict";

  // Simple Preact-like functions for creating component and elements
  function h(type, props, ...children) {
    return { type, props: props || {}, children };
  }

  function render(vnode, parentDom) {
    if (typeof vnode === 'string') {
      parentDom.appendChild(document.createTextNode(vnode));
      return;
    }

    const dom = document.createElement(vnode.type);
    
    for (const prop in vnode.props) {
      if (prop.startsWith('on')) {
        dom.addEventListener(prop.substring(2).toLowerCase(), vnode.props[prop]);
      } else {
        dom.setAttribute(prop, vnode.props[prop]);
      }
    }

    vnode.children.forEach(child => render(child, dom));
    parentDom.appendChild(dom);
  }

  class Component {
    constructor(props) {
      this.props = props;
      this.state = {};
    }

    setState(nextState) {
      this.state = { ...this.state, ...nextState };
      this._rerender();
    }

    _rerender() {
      const newVNode = this.render();
      this._replaceVNode(this._vnode, newVNode);
      this._vnode = newVNode;
    }

    _replaceVNode(oldVNode, newVNode) {
      const parentDom = this._parentDom;
      parentDom.innerHTML = '';
      render(newVNode, parentDom);
    }

    render() {
      return null;
    }
  }

  class ElevenLabsConvaiComponent extends Component {
    render() {
      return h('div', { class: 'elevenlabs-convai' }, 
        h('p', {}, 'Welcome to the Elevenlabs Conversational AI component!')
      );
    }
  }

  // Creating a custom HTML element with Shadow DOM
  class ElevenLabsConvaiElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.instance = new ElevenLabsConvaiComponent();
      this.instance._parentDom = this.shadowRoot;
    }

    connectedCallback() {
      this.instance._rerender();
    }

    static get observedAttributes() {
      return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      // Handle attribute changes
    }
  }

  // Define the custom element
  customElements.define('elevenlabs-convai', ElevenLabsConvaiElement);

})();

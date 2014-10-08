// return the top level document for the currecnt <script> tag (the html import)
var owner = (document._currentScript || document.currentScript).ownerDocument;

// Grab our template full of markup
var tmpl = owner.querySelector('template');

// create a prototype for a new element that extends HTMLElement
var EsriGeosearch = Object.create(HTMLElement.prototype);

// setup our Shadow DOM and clone the template
EsriGeosearch.createdCallback = function() {
  // var root = this.createShadowRoot();
  // root.appendChild(document.importNode(tmpl.content, true));

  // this is the dom element for your custom element
  this.appendChild(document.importNode(tmpl.content, true));
};

// register our new element
var EsriGeosearch = document.registerElement('esri-geosearch', {
  prototype: EsriGeosearch
});
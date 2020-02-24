import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import '@babel/polyfill';
import "./scripts/parallax.js";
import "./scripts/skills.js";
import "./scripts/reviews.js";
import "./scripts/works.js";
import "./scripts/scroll.js";
import "./scripts/fullscreen-menu";
import sendForm from './scripts/sendForm';

sendForm({
    form: document.querySelector('.js-form')
});
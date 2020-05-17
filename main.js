/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";

import { renderer } from 'node_modules/@bikeshaving/crank/dom';

function Main() {

    return (
      createElement("h1", {id: "element"}, "Hello World")
  );
}

const main = <Main />

renderer.render(main, document.body);
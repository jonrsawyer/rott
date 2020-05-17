import { renderer } from 'node_modules/@bikeshaving/crank/dom';

function Main() {

    return (
        <h1>Hello, world</h1>
  );
}

const main = <Main />

renderer.render(main, document.body);
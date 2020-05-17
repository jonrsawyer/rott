import { renderer } from '@bikeshaving/crank/dom';

function Main() {

    return (
      <p>Hello, world</p>
  );
}

const main = <Main />

renderer.render(main, document.body);
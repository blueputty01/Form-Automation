// @ts-nocheck
import Wizard from './components/Wizard';

const onClear = () => {
  let offset = 0;

  let keyForKey = '✔❌';
  wiz.fill({ offset, keyForKey });
  offset += 2 * 10;

  keyForKey = 'ABCD';
  wiz.fill({ offset, keyForKey });
  offset += 4 * 15;

  wiz.fill({ offset, keyForKey });
  offset += 4 * 20;

  keyForKey = 'ABCDEF';
  wiz.fill({ offset, keyForKey });

  keyForKey = 'ABCD';
  offset = 220;
  wiz.fill({ offset, keyForKey });
};

const wiz = new Wizard({ clear: true, onClear });

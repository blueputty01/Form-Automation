// @ts-nocheck
import Wizard from './components/Wizard';

const wiz = new Wizard({ clear: true });
let offset = 0;

let keyForKey = '✅❎';
wiz.fill({ offset, keyForKey });
offset += 2 * 10;

let keyForKey = 'ABCD';
wiz.fill({ offset, keyForKey });
offset += 4 * 15;

wiz.fill({ offset, keyForKey });
offset += 4 * 20;

wiz.fill({ offset, keyForKey });
offset += 4 * 15;

wiz.fill({ offset, keyForKey });

// @ts-nocheck
import Wizard from './components/Wizard';

const wiz = new Wizard({ clear: true });
let offset = 0;
let keyForKey = 'ABCD';
wiz.fill({ offset, keyForKey });
offset += 4 * 45;

wiz.fill({ offset, keyForKey });

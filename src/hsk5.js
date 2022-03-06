// @ts-nocheck
import Wizard from './components/Wizard';

const wiz = new Wizard();

await wiz.clear();

let offset = 0;
let keyForKey = 'ABCD';
wiz.fill({ offset, keyForKey, letters: true });
offset += 4 * 45;

wiz.fill({ offset, keyForKey, letters: true });

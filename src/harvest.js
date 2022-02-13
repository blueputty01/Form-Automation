// @ts-nocheck
import Wizard from './components/Wizard';

const wiz = new Wizard({ clear: true });
const keyForKey = 'ABCD';
wiz.fill({ offset: 0, keyForKey });
wiz.fill({ offset: 8 * 4, keyForKey });
wiz.fill({ offset: (8 + 16) * 4, keyForKey });

// @ts-nocheck
import Wizard from './components/Wizard';

const wiz = new Wizard({ clear: true });
const keyForKey = 'ABCD';
wiz.fill({ offset: 0, keyForKey });
wiz.fill({ offset: 35 * 4, keyForKey });

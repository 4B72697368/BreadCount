import { fourBitAdder } from './fourBitAdder';

import { andGate } from '../gates/and';
import { orGate } from '../gates/or';
import { notGate } from '../gates/not';

const notBCD = (a: boolean, b: boolean, c: boolean, d: boolean) => {
    return andGate(andGate(d, orGate(c, orGate(b, a))), notGate(andGate(a, andGate(notGate(b), notGate(c)))));
}

const BCDConversion = (a: boolean, b: boolean, c: boolean, d: boolean) => {
    const add_six = fourBitAdder(a, b, c, d, false, true, true, false, false);

    let new_a = false;
    new_a = orGate(andGate(add_six.sum1, notBCD(a, b, c, d)), andGate(a, notGate(notBCD(a, b, c, d))));

    let new_b = false;
    new_b = orGate(andGate(add_six.sum2, notBCD(a, b, c, d)), andGate(b, notGate(notBCD(a, b, c, d))));

    let new_c = false;
    new_c = orGate(andGate(add_six.sum3, notBCD(a, b, c, d)), andGate(c, notGate(notBCD(a, b, c, d))));

    let new_d = false;
    new_d = orGate(andGate(add_six.sum4, notBCD(a, b, c, d)), andGate(d, notGate(notBCD(a, b, c, d))));

    let carry = andGate(add_six.carry, notBCD(a, b, c, d));

    return { new_a, new_b, new_c, new_d, carry };
}

export { BCDConversion };
export default BCDConversion;
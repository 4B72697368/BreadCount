import { bitHalfAdder } from './bitHalfAdder';

import { orGate } from '../gates/or';


const bitFullAdder = (a: boolean, b: boolean, c: boolean) => {
    const sum = bitHalfAdder(bitHalfAdder(a, b).sum, c).sum;

    const carry = orGate(bitHalfAdder(a, b).carry, bitHalfAdder(bitHalfAdder(a, b).sum, c).carry);

    return { sum, carry };
};

export { bitFullAdder };
export default bitFullAdder;
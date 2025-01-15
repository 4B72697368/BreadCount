import { andGate } from '../gates/and';
import { orGate } from '../gates/or';
import { notGate } from '../gates/not';

const bitHalfAdder = (a: boolean, b: boolean) => {
    const sum: boolean = orGate(andGate(a, notGate(b)), andGate(notGate(a), b));
    const carry: boolean = andGate(a, b);

    return { sum, carry };
};

export { bitHalfAdder };
export default bitHalfAdder;
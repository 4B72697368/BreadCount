import { bitFullAdder } from './bitFullAdder';

const fourBitAdder = (a1: boolean, a2: boolean, a3: boolean, a4: boolean, b1: boolean, b2: boolean, b3: boolean, b4: boolean, carry: boolean) => {
    const sum1 = bitFullAdder(a1, b1, carry).sum;
    carry = bitFullAdder(a1, b1, carry).carry;

    const sum2 = bitFullAdder(a2, b2, carry).sum;
    carry = bitFullAdder(a2, b2, carry).carry;

    const sum3 = bitFullAdder(a3, b3, carry).sum;
    carry = bitFullAdder(a3, b3, carry).carry;

    const sum4 = bitFullAdder(a4, b4, carry).sum;
    carry = bitFullAdder(a4, b4, carry).carry;

    return { sum1, sum2, sum3, sum4, carry };
};

export { fourBitAdder };
export default fourBitAdder;
import { fourBitHolder } from '../memory/fourBitHolder';

import { fourBitAdder } from './fourBitAdder';
import { BCDConversion } from './bcdConversion';

import { notGate } from '../gates/not';

const addition = (a1: fourBitHolder, a2: fourBitHolder, a3: fourBitHolder, a4: fourBitHolder, a5: fourBitHolder, a6: fourBitHolder, a7: fourBitHolder, a8: fourBitHolder, b1: fourBitHolder, b2: fourBitHolder, b3: fourBitHolder, b4: fourBitHolder, b5: fourBitHolder, b6: fourBitHolder, b7: fourBitHolder, b8: fourBitHolder) => {
    const b1B = fourBitAdder(a1.LatchOne.value, a1.LatchTwo.value, a1.LatchThree.value, a1.LatchFour.value, b1.LatchOne.value, b1.LatchTwo.value, b1.LatchThree.value, b1.LatchFour.value, false);
    const b1D = BCDConversion(b1B.sum1, b1B.sum2, b1B.sum3, b1B.sum4);

    b1.LatchOne.S(b1D.new_a);
    b1.LatchOne.R(notGate(b1D.new_a));

    b1.LatchTwo.S(b1D.new_b);
    b1.LatchTwo.R(notGate(b1D.new_b));

    b1.LatchThree.S(b1D.new_c);
    b1.LatchThree.R(notGate(b1D.new_c));

    b1.LatchFour.S(b1D.new_d);
    b1.LatchFour.R(notGate(b1D.new_d));

    const b2B = fourBitAdder(a2.LatchOne.value, a2.LatchTwo.value, a2.LatchThree.value, a2.LatchFour.value, b2.LatchOne.value, b2.LatchTwo.value, b2.LatchThree.value, b2.LatchFour.value, b1B.carry);
    const b2D = BCDConversion(b2B.sum1, b2B.sum2, b2B.sum3, b2B.sum4);

    b2.LatchOne.S(b2D.new_a);
    b2.LatchOne.R(notGate(b2D.new_a));
    
    b2.LatchTwo.S(b2D.new_b);
    b2.LatchTwo.R(notGate(b2D.new_b));

    b2.LatchThree.S(b2D.new_c);
    b2.LatchThree.R(notGate(b2D.new_c));

    b2.LatchFour.S(b2D.new_d);
    b2.LatchFour.R(notGate(b2D.new_d));

    const b3B = fourBitAdder(a3.LatchOne.value, a3.LatchTwo.value, a3.LatchThree.value, a3.LatchFour.value, b3.LatchOne.value, b3.LatchTwo.value, b3.LatchThree.value, b3.LatchFour.value, b2B.carry);
    const b3D = BCDConversion(b3B.sum1, b3B.sum2, b3B.sum3, b3B.sum4);

    b3.LatchOne.S(b3D.new_a);
    b3.LatchOne.R(notGate(b3D.new_a));
    
    b3.LatchTwo.S(b3D.new_b);
    b3.LatchTwo.R(notGate(b3D.new_b));

    b3.LatchThree.S(b3D.new_c);
    b3.LatchThree.R(notGate(b3D.new_c));

    b3.LatchFour.S(b3D.new_d);
    b3.LatchFour.R(notGate(b3D.new_d));

    const b4B = fourBitAdder(a4.LatchOne.value, a4.LatchTwo.value, a4.LatchThree.value, a4.LatchFour.value, b4.LatchOne.value, b4.LatchTwo.value, b4.LatchThree.value, b4.LatchFour.value, b3B.carry);
    const b4D = BCDConversion(b4B.sum1, b4B.sum2, b4B.sum3, b4B.sum4);

    b4.LatchOne.S(b4D.new_a);
    b4.LatchOne.R(notGate(b4D.new_a));
    
    b4.LatchTwo.S(b4D.new_b);
    b4.LatchTwo.R(notGate(b4D.new_b));

    b4.LatchThree.S(b4D.new_c);
    b4.LatchThree.R(notGate(b4D.new_c));

    b4.LatchFour.S(b4D.new_d);
    b4.LatchFour.R(notGate(b4D.new_d));

    const b5B = fourBitAdder(a5.LatchOne.value, a5.LatchTwo.value, a5.LatchThree.value, a5.LatchFour.value, b5.LatchOne.value, b5.LatchTwo.value, b5.LatchThree.value, b5.LatchFour.value, b4B.carry);
    const b5D = BCDConversion(b5B.sum1, b5B.sum2, b5B.sum3, b5B.sum4);

    b5.LatchOne.S(b5D.new_a);
    b5.LatchOne.R(notGate(b5D.new_a));
    
    b5.LatchTwo.S(b5D.new_b);
    b5.LatchTwo.R(notGate(b5D.new_b));

    b5.LatchThree.S(b5D.new_c);
    b5.LatchThree.R(notGate(b5D.new_c));

    b5.LatchFour.S(b5D.new_d);
    b5.LatchFour.R(notGate(b5D.new_d));

    const b6B = fourBitAdder(a6.LatchOne.value, a6.LatchTwo.value, a6.LatchThree.value, a6.LatchFour.value, b6.LatchOne.value, b6.LatchTwo.value, b6.LatchThree.value, b6.LatchFour.value, b5B.carry);
    const b6D = BCDConversion(b6B.sum1, b6B.sum2, b6B.sum3, b6B.sum4);

    b6.LatchOne.S(b6D.new_a);
    b6.LatchOne.R(notGate(b6D.new_a));
    
    b6.LatchTwo.S(b6D.new_b);
    b6.LatchTwo.R(notGate(b6D.new_b));

    b6.LatchThree.S(b6D.new_c);
    b6.LatchThree.R(notGate(b6D.new_c));

    b6.LatchFour.S(b6D.new_d);
    b6.LatchFour.R(notGate(b6D.new_d));

    const b7B = fourBitAdder(a7.LatchOne.value, a7.LatchTwo.value, a7.LatchThree.value, a7.LatchFour.value, b7.LatchOne.value, b7.LatchTwo.value, b7.LatchThree.value, b7.LatchFour.value, b6B.carry);
    const b7D = BCDConversion(b7B.sum1, b7B.sum2, b7B.sum3, b7B.sum4);

    b7.LatchOne.S(b7D.new_a);
    b7.LatchOne.R(notGate(b7D.new_a));
    
    b7.LatchTwo.S(b7D.new_b);
    b7.LatchTwo.R(notGate(b7D.new_b));

    b7.LatchThree.S(b7D.new_c);
    b7.LatchThree.R(notGate(b7D.new_c));

    b7.LatchFour.S(b7D.new_d);
    b7.LatchFour.R(notGate(b7D.new_d));

    const b8B = fourBitAdder(a8.LatchOne.value, a8.LatchTwo.value, a8.LatchThree.value, a8.LatchFour.value, b8.LatchOne.value, b8.LatchTwo.value, b8.LatchThree.value, b8.LatchFour.value, b7B.carry);
    const b8D = BCDConversion(b8B.sum1, b8B.sum2, b8B.sum3, b8B.sum4);

    b8.LatchOne.S(b8D.new_a);
    b8.LatchOne.R(notGate(b8D.new_a));
    
    b8.LatchTwo.S(b8D.new_b);
    b8.LatchTwo.R(notGate(b8D.new_b));

    b8.LatchThree.S(b8D.new_c);
    b8.LatchThree.R(notGate(b8D.new_c));

    b8.LatchFour.S(b8D.new_d);
    b8.LatchFour.R(notGate(b8D.new_d));

    return { b1, b2, b3, b4, b5, b6, b7, b8 };
}

export { addition };
export default addition;
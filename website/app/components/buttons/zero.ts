import { fourBitHolder } from '../memory/fourBitHolder';

const zero = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(false);
    digitSelected.LatchOne.R(true);

    digitSelected.LatchTwo.S(false);
    digitSelected.LatchTwo.R(true);

    digitSelected.LatchThree.S(false);
    digitSelected.LatchThree.R(true);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { zero };
export default zero;
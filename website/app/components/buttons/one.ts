import { fourBitHolder } from '../memory/fourBitHolder';

const one = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(true);
    digitSelected.LatchOne.R(false);

    digitSelected.LatchTwo.S(false);
    digitSelected.LatchTwo.R(true);

    digitSelected.LatchThree.S(false);
    digitSelected.LatchThree.R(true);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { one };
export default one;
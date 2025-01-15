import { fourBitHolder } from '../memory/fourBitHolder';

const two = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(false);
    digitSelected.LatchOne.R(true);

    digitSelected.LatchTwo.S(true);
    digitSelected.LatchTwo.R(false);

    digitSelected.LatchThree.S(false);
    digitSelected.LatchThree.R(true);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { two };
export default two;
import { fourBitHolder } from '../memory/fourBitHolder';

const nine = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(true);
    digitSelected.LatchOne.R(false);

    digitSelected.LatchTwo.S(false);
    digitSelected.LatchTwo.R(true);

    digitSelected.LatchThree.S(false);
    digitSelected.LatchThree.R(true);

    digitSelected.LatchFour.S(true);
    digitSelected.LatchFour.R(false);

    return digitSelected;
}

export { nine };
export default nine;
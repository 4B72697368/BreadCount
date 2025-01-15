import { fourBitHolder } from '../memory/fourBitHolder';

const six = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(false);
    digitSelected.LatchOne.R(true);

    digitSelected.LatchTwo.S(true);
    digitSelected.LatchTwo.R(false);

    digitSelected.LatchThree.S(true);
    digitSelected.LatchThree.R(false);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { six };
export default six;
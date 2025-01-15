import { fourBitHolder } from '../memory/fourBitHolder';

const five = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(true);
    digitSelected.LatchOne.R(false);

    digitSelected.LatchTwo.S(false);
    digitSelected.LatchTwo.R(true);

    digitSelected.LatchThree.S(true);
    digitSelected.LatchThree.R(false);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { five };
export default five;
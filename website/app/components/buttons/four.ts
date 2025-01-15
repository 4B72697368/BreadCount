import { fourBitHolder } from '../memory/fourBitHolder';

const four = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(false);
    digitSelected.LatchOne.R(true);

    digitSelected.LatchTwo.S(false);
    digitSelected.LatchTwo.R(true);

    digitSelected.LatchThree.S(true);
    digitSelected.LatchThree.R(false);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { four };
export default four;
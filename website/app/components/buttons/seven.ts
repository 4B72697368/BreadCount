import { fourBitHolder } from '../memory/fourBitHolder';

const seven = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(true);
    digitSelected.LatchOne.R(false);

    digitSelected.LatchTwo.S(true);
    digitSelected.LatchTwo.R(false);

    digitSelected.LatchThree.S(true);
    digitSelected.LatchThree.R(false);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { seven };
export default seven;
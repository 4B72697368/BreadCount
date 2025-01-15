import { fourBitHolder } from '../memory/fourBitHolder';

const eight = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(false);
    digitSelected.LatchOne.R(true);

    digitSelected.LatchTwo.S(false);
    digitSelected.LatchTwo.R(true);

    digitSelected.LatchThree.S(false);
    digitSelected.LatchThree.R(true);

    digitSelected.LatchFour.S(true);
    digitSelected.LatchFour.R(false);
}

export { eight };
export default eight;
import { fourBitHolder } from '../memory/fourBitHolder';

const three = (digitSelected: fourBitHolder) => {
    digitSelected.LatchOne.S(true);
    digitSelected.LatchOne.R(false);

    digitSelected.LatchTwo.S(true);
    digitSelected.LatchTwo.R(false);

    digitSelected.LatchThree.S(false);
    digitSelected.LatchThree.R(true);

    digitSelected.LatchFour.S(false);
    digitSelected.LatchFour.R(true);
}

export { three };
export default three;
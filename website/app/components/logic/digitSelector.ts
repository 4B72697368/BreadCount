import { threeBitHolder } from '../memory/threeBitHolder';

import { andGate } from '../gates/and';
import { orGate } from '../gates/or';
import { notGate } from '../gates/not';

class digitSelector {
    private _digitSelected: threeBitHolder = new threeBitHolder();

    public get bitOne(): boolean {
        return this._digitSelected.LatchOne.value;
    }

    public get bitTwo(): boolean {
        return this._digitSelected.LatchTwo.value;
    }

    public get bitThree(): boolean {
        return this._digitSelected.LatchThree.value;
    }

    public increment(): void {
        const bitOne = this._digitSelected.LatchOne.value;
        const bitTwo = this._digitSelected.LatchTwo.value;
        const bitThree = this._digitSelected.LatchThree.value;

        this._digitSelected.LatchThree.S(orGate(andGate(bitThree, notGate(andGate(bitTwo, bitOne))), andGate(notGate(bitThree), andGate(bitTwo, bitOne))));
        this._digitSelected.LatchThree.R(orGate(andGate(bitThree, andGate(bitTwo, bitOne)), andGate(notGate(bitThree), notGate(andGate(bitTwo, bitOne)))));

        this._digitSelected.LatchTwo.S(orGate(andGate(bitTwo, notGate(bitOne)), andGate(notGate(bitTwo), bitOne)));
        this._digitSelected.LatchTwo.R(orGate(andGate(bitTwo, bitOne), andGate(notGate(bitTwo), notGate(bitOne))));

        this._digitSelected.LatchOne.S(notGate(bitOne));
        this._digitSelected.LatchOne.R(bitOne);
    }

    public decrement(): void {
        const bitOne = this._digitSelected.LatchOne.value;
        const bitTwo = this._digitSelected.LatchTwo.value;
        const bitThree = this._digitSelected.LatchThree.value;

        this._digitSelected.LatchThree.S(orGate(andGate(bitThree, notGate(andGate(notGate(bitTwo), notGate(bitOne)))), andGate(notGate(bitThree), andGate(notGate(bitTwo), notGate(bitOne)))));
        this._digitSelected.LatchThree.R(orGate(andGate(bitThree, andGate(notGate(bitTwo), notGate(bitOne))), andGate(notGate(bitThree), notGate(andGate(notGate(bitTwo), notGate(bitOne))))));

        this._digitSelected.LatchTwo.S(orGate(andGate(bitTwo, bitOne), andGate(notGate(bitTwo), notGate(bitOne))));
        this._digitSelected.LatchTwo.R(orGate(andGate(bitTwo, notGate(bitOne)), andGate(notGate(bitTwo), bitOne)));

        this._digitSelected.LatchOne.S(notGate(bitOne));
        this._digitSelected.LatchOne.R(bitOne);
    }
}

export { digitSelector };
export default digitSelector;
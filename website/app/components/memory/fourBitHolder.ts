import { latch } from './latch';

class fourBitHolder {
	public LatchOne: latch = new latch();
	public LatchTwo: latch = new latch();
	public LatchThree: latch = new latch();
	public LatchFour: latch = new latch();
}

export { fourBitHolder };
export default fourBitHolder;
import { latch } from './latch';

class threeBitHolder {
	public LatchOne: latch = new latch();
	public LatchTwo: latch = new latch();
	public LatchThree: latch = new latch();
}

export { threeBitHolder };
export default threeBitHolder;
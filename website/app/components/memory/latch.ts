class latch {
    private _value: boolean = false;

    public get value(): boolean {
        return this._value;
    }

    public S(signal: boolean): void {
        if (signal) {
            this._value = true;
        }
    }

    public R(signal: boolean): void {
        if (signal) {
            this._value = false;
        }
    }
}

export { latch };
export default latch;
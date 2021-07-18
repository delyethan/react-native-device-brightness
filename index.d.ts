declare const _default: {
    /**
    * @param num between 1 and 0.
    */
    setBrightnessLevel(num: number): void
    /**
    * @returns value between 1 and 0.
    */
    getBrightnessLevel(): Promise<number>
    /**
    * Platform Android only. 
    * @returns value between 1 and 0.
    */
    getSystemBrightnessLevel(): Promise<number>
}

export default _default
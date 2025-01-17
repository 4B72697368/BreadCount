"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"

import { digitSelector as digitSelectorClass } from "./logic/digitSelector";
import { addition } from './logic/addition';

import { fourBitHolder } from './memory/fourBitHolder';

import { zero } from './buttons/zero';
import { one } from './buttons/one';
import { two } from './buttons/two';
import { three } from './buttons/three';
import { four } from './buttons/four';
import { five } from './buttons/five';
import { six } from './buttons/six';
import { seven } from './buttons/seven';
import { eight } from './buttons/eight';
import { nine } from './buttons/nine';

let digitOne = new fourBitHolder();
let digitTwo = new fourBitHolder();
let digitThree = new fourBitHolder();
let digitFour = new fourBitHolder();
let digitFive = new fourBitHolder();
let digitSix = new fourBitHolder();
let digitSeven = new fourBitHolder();
let digitEight = new fourBitHolder();

let adderDigitOne = new fourBitHolder();
let adderDigitTwo = new fourBitHolder();
let adderDigitThree = new fourBitHolder();
let adderDigitFour = new fourBitHolder();
let adderDigitFive = new fourBitHolder();
let adderDigitSix = new fourBitHolder();
let adderDigitSeven = new fourBitHolder();
let adderDigitEight = new fourBitHolder();

const digitSelector = new digitSelectorClass();

const threeBitToDecimal = (bitOne: boolean, bitTwo: boolean, bitThree: boolean) => {
    return (bitOne ? 1 : 0) + (bitTwo ? 2 : 0) + (bitThree ? 4 : 0);
}

const fourBitToDecimal = (bitOne: boolean, bitTwo: boolean, bitThree: boolean, bitFour: boolean) => {
    return (bitOne ? 1 : 0) + (bitTwo ? 2 : 0) + (bitThree ? 4 : 0) + (bitFour ? 8 : 0);
}

function Simulation() {
    const [stateDigitOne, setDigitOne] = useState<number>(0);
    const [stateDigitTwo, setDigitTwo] = useState<number>(0);
    const [stateDigitThree, setDigitThree] = useState<number>(0);
    const [stateDigitFour, setDigitFour] = useState<number>(0);
    const [stateDigitFive, setDigitFive] = useState<number>(0);
    const [stateDigitSix, setDigitSix] = useState<number>(0);
    const [stateDigitSeven, setDigitSeven] = useState<number>(0);
    const [stateDigitEight, setDigitEight] = useState<number>(0);
    const [stateAdderDigitOne, setAdderDigitOne] = useState<number>(0);
    const [stateAdderDigitTwo, setAdderDigitTwo] = useState<number>(0);
    const [stateAdderDigitThree, setAdderDigitThree] = useState<number>(0);
    const [stateAdderDigitFour, setAdderDigitFour] = useState<number>(0);
    const [stateAdderDigitFive, setAdderDigitFive] = useState<number>(0);
    const [stateAdderDigitSix, setAdderDigitSix] = useState<number>(0);
    const [stateAdderDigitSeven, setAdderDigitSeven] = useState<number>(0);
    const [stateAdderDigitEight, setAdderDigitEight] = useState<number>(0);
    const [stateDigitSelector, setDigitSelector] = useState<number>(0);
    const [activeTab, setActiveTab] = useState('calculator')

    const add = () => {
        const sum = addition(adderDigitOne, adderDigitTwo, adderDigitThree, adderDigitFour, adderDigitFive, adderDigitSix, adderDigitSeven, adderDigitEight, digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix, digitSeven, digitEight);

        digitOne = sum.b1;
        digitTwo = sum.b2;
        digitThree = sum.b3;
        digitFour = sum.b4;
        digitFive = sum.b5;
        digitSix = sum.b6;
        digitSeven = sum.b7;
        digitEight = sum.b8;

        setDigitOne(fourBitToDecimal(sum.b1.LatchOne.value, sum.b1.LatchTwo.value, sum.b1.LatchThree.value, sum.b1.LatchFour.value));
        setDigitTwo(fourBitToDecimal(sum.b2.LatchOne.value, sum.b2.LatchTwo.value, sum.b2.LatchThree.value, sum.b2.LatchFour.value));
        setDigitThree(fourBitToDecimal(sum.b3.LatchOne.value, sum.b3.LatchTwo.value, sum.b3.LatchThree.value, sum.b3.LatchFour.value));
        setDigitFour(fourBitToDecimal(sum.b4.LatchOne.value, sum.b4.LatchTwo.value, sum.b4.LatchThree.value, sum.b4.LatchFour.value));
        setDigitFive(fourBitToDecimal(sum.b5.LatchOne.value, sum.b5.LatchTwo.value, sum.b5.LatchThree.value, sum.b5.LatchFour.value));
        setDigitSix(fourBitToDecimal(sum.b6.LatchOne.value, sum.b6.LatchTwo.value, sum.b6.LatchThree.value, sum.b6.LatchFour.value));
        setDigitSeven(fourBitToDecimal(sum.b7.LatchOne.value, sum.b7.LatchTwo.value, sum.b7.LatchThree.value, sum.b7.LatchFour.value));
        setDigitEight(fourBitToDecimal(sum.b8.LatchOne.value, sum.b8.LatchTwo.value, sum.b8.LatchThree.value, sum.b8.LatchFour.value));
    }

    const left = () => {
        digitSelector.increment();
        setDigitSelector(threeBitToDecimal(digitSelector.bitOne, digitSelector.bitTwo, digitSelector.bitThree));
    }

    const right = () => {
        digitSelector.decrement();
        setDigitSelector(threeBitToDecimal(digitSelector.bitOne, digitSelector.bitTwo, digitSelector.bitThree));
    }

    const handleKeypad = (number: number) => {
        const newDigit = new fourBitHolder();

        switch (number) {
            case 0:
                zero(newDigit);
                break;
            case 1:
                one(newDigit);
                break;
            case 2:
                two(newDigit);
                break;
            case 3:
                three(newDigit);
                break;
            case 4:
                four(newDigit);
                break;
            case 5:
                five(newDigit);
                break;
            case 6:
                six(newDigit);
                break;
            case 7:
                seven(newDigit);
                break;
            case 8:
                eight(newDigit);
                break;
            case 9:
                nine(newDigit);
                break;
        }

        switch (stateDigitSelector) {
            case 0:
                adderDigitOne = newDigit;
                setAdderDigitOne(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 1:
                adderDigitTwo = newDigit;
                setAdderDigitTwo(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 2:
                adderDigitThree = newDigit;
                setAdderDigitThree(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 3:
                adderDigitFour = newDigit;
                setAdderDigitFour(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 4:
                adderDigitFive = newDigit;
                setAdderDigitFive(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 5:
                adderDigitSix = newDigit;
                setAdderDigitSix(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 6:
                adderDigitSeven = newDigit;
                setAdderDigitSeven(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break;
            case 7:
                adderDigitEight = newDigit;
                setAdderDigitEight(fourBitToDecimal(newDigit.LatchOne.value, newDigit.LatchTwo.value, newDigit.LatchThree.value, newDigit.LatchFour.value));
                break
        }
    }

    const Calculator = () => {
        return (
            <div className="flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-96 shadow-2xl">
                    <div className="mb-6 space-y-2">
                        <div className="bg-green-800 rounded-xl p-4 text-right text-3xl font-mono text-white h-16 flex items-center justify-end">
                            {stateDigitEight}
                            {stateDigitSeven}
                            {stateDigitSix}
                            {stateDigitFive}
                            {stateDigitFour}
                            {stateDigitThree}
                            {stateDigitTwo}
                            {stateDigitOne}
                        </div>
                        <div className="bg-green-800 rounded-xl p-4 text-right text-3xl font-mono text-white h-16 flex items-center justify-between">
                            <div className="justify-self-start">Adder</div>
                            <div>
                                <span className={`${stateDigitSelector == 7 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitEight}</span>
                                <span className={`${stateDigitSelector == 6 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitSeven}</span>
                                <span className={`${stateDigitSelector == 5 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitSix}</span>
                                <span className={`${stateDigitSelector == 4 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitFive}</span>
                                <span className={`${stateDigitSelector == 3 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitFour}</span>
                                <span className={`${stateDigitSelector == 2 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitThree}</span>
                                <span className={`${stateDigitSelector == 1 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitTwo}</span>
                                <span className={`${stateDigitSelector == 0 ? 'text-blue-500' : 'text-white'}`}>{stateAdderDigitOne}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => handleKeypad(num)}
                                    className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-6 rounded-xl transition-colors"
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => handleKeypad(0)}
                                className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-6 w-1/3 rounded-xl transition-colors"
                            >
                                0
                            </button>
                        </div>

                        <div className="text-xl flex justify-between mt-4">
                            <button
                                onClick={left}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 w-1/5 rounded-xl transition-colors"
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={add}
                                className="text-2xl bg-green-500 hover:bg-green-400 text-white font-bold py-3 w-3/5 mx-2 rounded-xl transition-colors"
                            >
                                +
                            </button>
                            <button
                                onClick={right}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 w-1/5 rounded-xl transition-colors"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Data = () => {
        const [adderOpen, setAdderOpen] = useState<boolean>(false);
        const [digitsOpen, setDigitsOpen] = useState<boolean>(false);
        const [selectorOpen, setSelectorOpen] = useState<boolean>(false);
        const [openBitHolders, setOpenBitHolders] = useState<Record<string, boolean>>({});

        const toggleBitHolder = (id: string): void => {
            setOpenBitHolders(prev => ({
                ...prev,
                [id]: !prev[id]
            }));
        };

        const renderBitHolder = (digit: fourBitHolder, index: number, prefix: string) => {
            return (
                <div key={`${prefix}-${index}`} className="w-full">
                    <button
                        onClick={() => toggleBitHolder(`${prefix}-${index}`)}
                        className="flex w-full items-center justify-between rounded-lg bg-gray-700 p-3 text-white hover:bg-gray-600 transition-colors"
                    >
                        <span className="text-sm">4-Bit Holder {index}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openBitHolders[`${prefix}-${index}`] ? 'rotate-180' : ''}`} />
                    </button>

                    {openBitHolders[`${prefix}-${index}`] && (
                        <div className="mt-2 space-y-2 pl-4">
                            <div className="flex items-center justify-between rounded-md bg-gray-700 p-3 text-white">
                                <span className="text-sm">S/R Latch Bit One:</span>
                                <span className="font-mono">
                                    {digit.LatchOne.value ? '1' : '0'}
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-between rounded-md bg-gray-700 p-3 text-white">
                                <span className="text-sm">S/R Latch Bit Two:</span>
                                <span className="font-mono">
                                    {digit.LatchTwo.value ? '1' : '0'}
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-between rounded-md bg-gray-700 p-3 text-white">
                                <span className="text-sm">S/R Latch Bit Three:</span>
                                <span className="font-mono">
                                    {digit.LatchThree.value ? '1' : '0'}
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-between rounded-md bg-gray-700 p-3 text-white">
                                <span className="text-sm">S/R Latch Bit Four:</span>
                                <span className="font-mono">
                                    {digit.LatchFour.value ? '1' : '0'}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            );
        };

        return (
            <div className="w-96 space-y-4 p-6 bg-gray-800 shadow-2xl rounded-3xl max-h-[calc(100%-5rem)] overflow-y-auto">
                <div className="space-y-2">
                    <button
                        onClick={() => setAdderOpen(!adderOpen)}
                        className="flex w-full items-center justify-between rounded-xl bg-blue-600 p-4 text-white hover:bg-blue-500 transition-colors"
                    >
                        <span className="text-lg font-semibold">Adder Digits</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${adderOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {adderOpen && (
                        <div className="space-y-2 pl-4">
                            {renderBitHolder(adderDigitOne, 1, 'adder')}
                            {renderBitHolder(adderDigitTwo, 2, 'adder')}
                            {renderBitHolder(adderDigitThree, 3, 'adder')}
                            {renderBitHolder(adderDigitFour, 4, 'adder')}
                            {renderBitHolder(adderDigitFive, 5, 'adder')}
                            {renderBitHolder(adderDigitSix, 6, 'adder')}
                            {renderBitHolder(adderDigitSeven, 7, 'adder')}
                            {renderBitHolder(adderDigitEight, 8, 'adder')}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <button
                        onClick={() => setDigitsOpen(!digitsOpen)}
                        className="flex w-full items-center justify-between rounded-xl bg-green-600 p-4 text-white hover:bg-green-500 transition-colors"
                    >
                        <span className="text-lg font-semibold">Digits</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${digitsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {digitsOpen && (
                        <div className="space-y-2 pl-4">
                        <div className="space-y-2 pl-4">
                            {renderBitHolder(digitOne, 1, 'digit')}
                            {renderBitHolder(digitTwo, 2, 'digit')}
                            {renderBitHolder(digitThree, 3, 'digit')}
                            {renderBitHolder(digitFour, 4, 'digit')}
                            {renderBitHolder(digitFive, 5, 'digit')}
                            {renderBitHolder(digitSix, 6, 'digit')}
                            {renderBitHolder(digitSeven, 7, 'digit')}
                            {renderBitHolder(digitEight, 8, 'digit')}
                        </div>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <button
                        onClick={() => setSelectorOpen(!selectorOpen)}
                        className="flex w-full items-center justify-between rounded-xl bg-purple-600 p-4 text-white hover:bg-purple-500 transition-colors"
                    >
                        <span className="text-lg font-semibold">Digit Selector</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${selectorOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {selectorOpen && (
                        <div className="space-y-2 pl-4">
                            {["One", "Two", "Three"].map(bitNum => (
                                <div key={bitNum} className="flex items-center justify-between rounded-md bg-gray-700 p-3 text-white">
                                    <span className="text-sm">S/R Latch Bit {bitNum}:</span>
                                    <span className="font-mono">
                                        {bitNum === "One" ? (digitSelector.bitOne ? '1' : '0') :
                                            bitNum === "Two" ? (digitSelector.bitTwo ? '1' : '0') :
                                                (digitSelector.bitThree ? '1' : '0')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 relative">
            <button
                onClick={() => setActiveTab('calculator')}
                className={`
                absolute right-0 top-4 
                transition-all duration-300 ease-in-out
                px-6 py-2 rounded-l-xl
                flex items-center gap-2 w-32 hover:w-36
                ${activeTab === 'calculator'
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-600 text-gray-200'
                    }
            `}
            >
                Calculator
            </button>
            <button
                onClick={() => setActiveTab('data')}
                className={`
                absolute right-0 top-[4.5rem]
                transition-all duration-300 ease-in-out
                px-6 py-2 rounded-l-xl
                flex items-center gap-2 w-32 hover:w-36
                ${activeTab === 'data'
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-600 text-gray-200'
                    }
            `}
            >
                Data
            </button>

            <div className="h-screen w-screen flex justify-center items-center">
                {activeTab === 'calculator' ? <Calculator /> : <Data />}
            </div>
        </div>
    )
}

export { Simulation };
export default Simulation;
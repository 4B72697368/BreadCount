"use client"
import React, { useState } from "react";

import { fourBitHolder } from './memory/fourBitHolder';

import { addition } from './logic/addition';

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

import { digitSelector as digitSelectorClass } from "./logic/digitSelector";

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

export default function Home() {
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

    const add = () => {
        console.log(adderDigitOne);
        console.log(adderDigitTwo);
        console.log(adderDigitThree);
        console.log(adderDigitFour);
        console.log(adderDigitFive);
        console.log(adderDigitSix);
        console.log(adderDigitSeven);
        console.log(adderDigitEight);
        console.log(digitOne);
        console.log(digitTwo);
        console.log(digitThree);
        console.log(digitFour);
        console.log(digitFive);
        console.log(digitSix);
        console.log(digitSeven);
        console.log(digitEight);
        
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
        digitSelector.decrement();
        setDigitSelector(threeBitToDecimal(digitSelector.bitOne, digitSelector.bitTwo, digitSelector.bitThree));
    }

    const right = () => {
        digitSelector.increment();
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

    return (
        <div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div>
                            {stateDigitOne}
                            {stateDigitTwo}
                            {stateDigitThree}
                            {stateDigitFour}
                            {stateDigitFive}
                            {stateDigitSix}
                            {stateDigitSeven}
                            {stateDigitEight}
                        </div>
                        <div>
                            {stateAdderDigitOne}
                            {stateAdderDigitTwo}
                            {stateAdderDigitThree}
                            {stateAdderDigitFour}
                            {stateAdderDigitFive}
                            {stateAdderDigitSix}
                            {stateAdderDigitSeven}
                            {stateAdderDigitEight}
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <button onClick={() => handleKeypad(0)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">0</button>
                                <button onClick={() => handleKeypad(1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">1</button>
                                <button onClick={() => handleKeypad(2)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">2</button>
                                <button onClick={() => handleKeypad(3)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">3</button>
                                <button onClick={() => handleKeypad(4)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">4</button>
                                <button onClick={() => handleKeypad(5)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">5</button>
                                <button onClick={() => handleKeypad(6)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">6</button>
                                <button onClick={() => handleKeypad(7)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">7</button>
                                <button onClick={() => handleKeypad(8)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">8</button>
                                <button onClick={() => handleKeypad(9)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">9</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => {left()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{"<"}</button>
                            <button onClick={() => {right()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{">"}</button>
                        </div>
                        <div>
                            <button onClick={() => {add()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
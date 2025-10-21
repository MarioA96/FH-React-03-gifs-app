import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => { 
    // let result;

    // beforeEach( () => {
    //     const { result: hookValue } = renderHook( () => useCounter() );
    //     result = hookValue;
    // } );

    test('should initialize with default value of 10', () => {
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
    });

    test('should initialize with value of 20', () => {
        const initialValue = 20;
        const { result } = renderHook( () => useCounter(initialValue) );

        expect( result.current.counter ).toBe(20);
    });

    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook( ()=>useCounter() );

        act( ()=> {
            result.current.handleAdd();
        } );

        expect( result.current.counter ).toBe(11);
    });

    test('should decrement counter when handleSubstract is called', () => {
        const { result } = renderHook( ()=>useCounter() );

        act( ()=> {
            result.current.handleSubract();
        } );

        expect( result.current.counter ).toBe(9);
    });

    test('should reset counter when handleReset is called', () => {
        const initialValue = 15;
        const { result } = renderHook( ()=>useCounter(initialValue) );

        act( ()=> {
            result.current.handleAdd();
        } );
        act( ()=> {
            result.current.handleAdd();
        } );
        expect( result.current.counter ).toBe(17);

        // Reset counter to 15 because initialValue is 15, not 10
        act( ()=> {
            result.current.handleReset();
        } );
        expect( result.current.counter ).toBe(initialValue);
    });

})
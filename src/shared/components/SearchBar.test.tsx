import { describe, expect, test, vi } from "vitest"
import { SearchBar } from "./SearchBar";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('SearchBar', () => {

    test('should render searchbar correctly', () => {

        const { container } = render(<SearchBar onQuery={() => { }} />);

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onquery with the correct value after 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        // await new Promise( (resolve)=>setTimeout(resolve, 701) ); //Esta prueba es fragil
        await waitFor(() => { // Esto esta mucho mejor y es un builtin de testing library
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        })

    })

    test('should be called once with the last value', async () => {

        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1); // Solo una vez ya que tenemos un debounce
            expect(onQuery).toHaveBeenCalledWith('test');
        })

    });

    test('should onQuery be called only when clicked with an input value', () => {

        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    });

    test('should the input has the correct placecholder value', () => {

        const placecholder = 'Buscar gif';

        render(<SearchBar onQuery={() => { }} placeholder={placecholder} />);
        // screen.debug();

        expect(screen.getByPlaceholderText(placecholder)).toBeDefined();

    })

})
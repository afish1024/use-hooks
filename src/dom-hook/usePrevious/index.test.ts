import { renderHook } from '@testing-library/react-hooks'
import usePrevious from './index'

// const setUp = (val) => renderHook(
//     (state) => usePrevious(state),
//     { initialProps: val }
// )

describe('usePrevious', () => {
    it('usePrevious with should be defined', () => {
        expect(usePrevious).toBeDefined();
    });

    it('usePrevious with basic variable should work', () => {
        const { result, rerender } = renderHook((s) => usePrevious(s), {
            initialProps: 0
        })

        console.log( result.current )
        // rerender(1);
        // expect(result).toEqual(1);

        // rerender(2);
        // expect(result).toEqual(2);

        // rerender(3);
        // expect(result).toEqual(3);
    });
    
    // it('usePrevious with reference variable should work', () => {
    //     const { result, rerender } = setUp({});

    //     expect(result.current.current).toEqual({});

    //     rerender([]);
    //     expect(result.current.current).toEqual([]);
    // })
})
import { useRef, useEffect } from 'react';

export function usePrevious(value) {
    const prevRef = useRef();
    window.console.log('rerender prev');
    useEffect(() =>{
        prevRef.current = value;
    }, [value]);

    // const result = useMemo(() => prevRef.current, [value]);
    // return result;
    return prevRef.current;
}
import { useRef, useEffect, useState } from 'react';

export function useLongState(initValue) {
    const prevRef = useRef();
    window.console.log(prevRef.current ?? initValue)
    const [state, setState] = useState(prevRef.current ?? initValue);
    window.console.log(`rerender prev: ${state}`);
    useEffect(() =>{
        prevRef.current = state;
    }, [state]);

    // const result = useMemo(() => prevRef.current, [value]);
    // return result;
    return [state, setState, prevRef.current];
}
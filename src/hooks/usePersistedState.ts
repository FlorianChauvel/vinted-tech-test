import React, { useEffect, useState } from "react";

const usePersistedState = <T extends any>(value: any, key: string): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [localValue, setLocalValue] = useState(() => {
        const persistedValue = localStorage.getItem(key);
        return persistedValue ? JSON.parse(persistedValue) : value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localValue));
    }, [key, localValue]);

    return [localValue, setLocalValue];
};

export default usePersistedState;
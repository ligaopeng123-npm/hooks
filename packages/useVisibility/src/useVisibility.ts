import React, { useEffect, useState } from 'react';
import { debounce } from "@gaopeng123/utils.function";

export type VisibilityProps = {
    wait?: number;
    onVisibilitychange?: (visibility: boolean) => void;
}
export const useVisibility = (props?: VisibilityProps) => {
    const {wait, onVisibilitychange} = props || {};
    const [visibility, setVisibility] = useState(true);
    useEffect(() => {
        const _onVisibilitychange = debounce(() => {
            let visible = false
            if (document.visibilityState === 'visible') {
                visible = true;
            }
            setVisibility(visible);
            onVisibilitychange && onVisibilitychange(visible);
        }, wait || 200)
        document.addEventListener('visibilitychange', _onVisibilitychange);
        return () => {
            document.removeEventListener('visibilitychange', _onVisibilitychange);
        }
    }, []);
    return visibility;
}

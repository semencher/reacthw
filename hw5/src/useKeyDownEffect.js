import React, { useEffect } from "react";

export const useKeyDownEffect = (handle) => {
    useEffect(() => {
        document.addEventListener("keydown", handle, false);
        console.log("Subscribe!");

        return () => {
            document.removeEventListener("keydown", handle, false);
            console.log("Unsubscribe!");
        };
    }, [])

    return;
}

import { useState } from "react";
import Child from "./Child";

function ReactMemoTest() {
    const [count, setCount] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <p>count = {count}</p>

            <button onClick={() => setActive(a => !a)}>change active</button>
            <Child active={active} />
        </>
    );
}

export default ReactMemoTest
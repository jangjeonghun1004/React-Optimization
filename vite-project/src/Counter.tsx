import { useMemo, useState } from "react";

function Counter() {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0)

    const handleHeavyCalculation = (someNumber: number) => {
        console.log("Heavy Calculation");
        let result = 0;
        for(let i=0; i < 1000000000; i++) {
            result += someNumber
        }

        return result;
    };
    const reFactoryHeavyCalculation = useMemo(() => handleHeavyCalculation(count2), [count2]);

    return (
        <>
            <p>Count1 = {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <button onClick={() => setCount1(count1 - 1)}>-</button>

            <p>Count2 = {reFactoryHeavyCalculation}</p>
            <button onClick={() => setCount2(count2 + 1)}>+</button>
            <button onClick={() => setCount2(count2 - 1)}>-</button>
        </>
    );
}

export default Counter
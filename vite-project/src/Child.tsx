import React from "react"

function Child({active}: {active: boolean}) {
    console.log("Child rendered.");

    return (
        <>
            <p>Child = {active ? 'active': 'not active'}</p>
        </>
    );
}

export default React.memo(Child)
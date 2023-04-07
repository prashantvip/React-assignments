import { useState } from "react";

export const Inventory = () => {
    const [inv, setInv] = useState({
        books: 10,
        notebooks: 13,
        pens: 40,
        inkpens: 0
    });
    // Create add and remove functions here that changes the
    // state.

    const handleBooks = (value) => {
        if (inv.books + value < 0)
            return
        setInv((previousState) => {
            console.log(previousState)
            return { ...previousState, books: inv.books + value }
        })
    }

    const handlePens = (value) => {
        if (inv.pens + value < 0)
            return
        setInv((previousState) => {
            return { ...previousState, pens: inv.pens + value }
        })
    }

    const handleNotebooks = (value) => {
        if (inv.notebooks + value < 0)
            return
        setInv((previousState) => {
            return { ...previousState, notebooks: inv.notebooks + value }
        })
    }

    const handleInkpens = (value) => {
        if (inv.inkpens + value < 0)
            return
        setInv((previousState) => {
            return { ...previousState, inkpens: inv.inkpens + value }
        })
    }

    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "3px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                width: "400px",
            }}
        >
            <div className="items">
                <span>Books: </span>
                <button className="circlularButton" onClick={() => handleBooks(1)} >+</button>
                <button className="circlularButton" onClick={() => handleBooks(-1)} >-</button>
                <span>{inv.books}</span>
            </div>
            <div className="items">
                <span>Notebooks: </span>
                <button className="circlularButton" onClick={() => handleNotebooks(1)}>+</button>
                <button className="circlularButton" onClick={() => handleNotebooks(-1)}>-</button>
                <span>{inv.notebooks}</span>
            </div>
            <div className="items">
                <span>Pen: </span>
                <button className="circlularButton" onClick={() => handlePens(1)}>+</button>
                <button className="circlularButton" onClick={() => handlePens(-1)}>-</button>
                <span>{inv.pens}</span>
            </div>
            <div className="items">
                <span>Ink Pens: </span>
                <button className="circlularButton" onClick={() => handleInkpens(1)}>+</button>
                <button className="circlularButton" onClick={() => handleInkpens(-1)}>-</button>
                <span>{inv.inkpens}</span>
            </div>
            {/*calculate total and show it*/}
            total: {inv.books + inv.pens + inv.notebooks + inv.inkpens}
        </div>
    );
};
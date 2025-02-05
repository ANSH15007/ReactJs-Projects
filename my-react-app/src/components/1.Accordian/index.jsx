import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelect, setMultiSelect] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiSelect]
        const findIdxOfCurId = copyMultiple.indexOf(getCurrentId)

        if (findIdxOfCurId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIdxOfCurId, 1)

        setMultiSelect(copyMultiple)
    }
    console.log(selected, multiSelect);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable' : 'Enable'} Multi Selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id || multiSelect.indexOf(dataItem.id) !== -1 ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </div>
        </div>
    );
}
export default Accordian;

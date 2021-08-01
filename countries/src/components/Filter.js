import React from "react"

const Filter = (props) => {

    return (
        <>
        <p>Find countries using this filter:</p>
        <input onChange={props.inputHandler}></input>
        </>
    )
}

export default Filter;
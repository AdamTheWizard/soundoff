import React from 'react';



function Searchbar(props){ 
    return (
        <div className="form-container">
        <form onSubmit={props.handleSubmit}>
            <input
             type="text"
             id="search-box"
             className="search-box"
             placeholder={props.placeholder}
             onChange={props.handleChange}
            ></input>
            <input type="submit" id="submit" className="submit" value="SUBMIT"></input>
        </form>
        </div>
    )
}

export default Searchbar;
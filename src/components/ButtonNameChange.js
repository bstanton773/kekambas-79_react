import React from 'react';

export default function ButtonNameChange(props){
    
    const handleForm = (e) => {
        e.preventDefault();
        const newName = e.target.newName.value;
        props.changeName(newName);
    }

    return (
        <form onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="newName" className="form-label">New Name</label>
                <input type="text" name="newName" className="form-control" />
            </div>
            <input type="submit" className="btn btn-secondary" />
        </form>
    )
}

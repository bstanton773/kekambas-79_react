import React, {useState} from 'react';

export default function ButtonNameChange(props){
    const [buttonColor, setButtonColor] = useState('secondary')
    const handleForm = (e) => {
        e.preventDefault();
        const newName = e.target.newName.value;
        props.changeName(newName);
    }

    return (
        <>
        <form onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="newName" className="form-label">New Name</label>
                <input type="text" name="newName" className="form-control" />
            </div>
            <input type="submit" className={`btn btn-${buttonColor}`} />
        </form>
        <button className="btn btn-primary" onClick={() => {setButtonColor(buttonColor == 'secondary' ? 'warning' : 'secondary')}}>Change Above Button Color</button>
        </>
    )
}

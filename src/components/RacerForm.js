import React from 'react';


const RacerForm = (props) => {
    return (
        <form onSubmit={props.handleForm}>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <input type='text' className='form-control' name='season' placeholder='Season'></input>
                    </div>
                    <div className='col-12 col-sm-6'>
                        <input type='text' className='form-control' name='round' placeholder='Round'></input>
                    </div>
                </div>
                <div className='row'>
                    <input type='submit' className='btn btn-danger align-self-center' />
                </div>
            </div>
        </form>
    )
}

export default RacerForm;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductUpdate(props) {
    const { prodId } = useParams();
    const [prod, setProd] = useState({})
    const navigator = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${prodId}`)
            .then(res => res.json())
            .then(data => setProd(data))
    }, [])

    const handleDelete = () => {
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${props.token}`)

        fetch(`http://localhost:5000/api/products/${prodId}`, {
            method: 'DELETE',
            headers: myHeaders
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data.error){
                    props.flashMessage('The product has been deleted', 'warning')
                    navigator('/products')
                }else{
                    props.flashMessage(data.error, 'danger')
                }
            }
        )
    }

    return (
        <>
            <div>Hello this is the Product Update</div>
            <div className="card ">
                <img src={prod.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{ prod.name }</h5>
                <p className="card-text">{ prod.price }</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}

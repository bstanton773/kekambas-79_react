import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductUpdate(props) {
    const { prodId } = useParams();
    const [prod, setProd] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${prodId}`)
            .then(res => res.json())
            .then(data => setProd(data))
    }, [])

    return (
        <>
            <div>Hello this is the Product Update</div>
            <div className="card ">
                <img src={prod.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{ prod.name }</h5>
                <p className="card-text">{ prod.price }</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

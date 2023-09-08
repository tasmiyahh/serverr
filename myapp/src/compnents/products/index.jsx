import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card } from 'antd';




const Product = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {






        axios({
            url: 'http://localhost:5000/products',
            method: "get",
            withCredentials: true
        })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setproducts(response.data.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }, [])
    return (
        <div>

            
           
            <div className="card">
                {products.map((eachProduct => (
                    <div key={eachProduct._id} className="card-1" >
                        <img className="productimg" width="120px" src={eachProduct.productimage} alt="" />
                       
                        <h4>{eachProduct?.name}</h4>
                        <div className="description">{eachProduct?.description}</div>
                        <div className="price">{eachProduct?.price}/-</div>
                        <div>{eachProduct?.code}</div>


                    </div>
                )))}
            </div>
            

        </div>
    )
}

export default Product
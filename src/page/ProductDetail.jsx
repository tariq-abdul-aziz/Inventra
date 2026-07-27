import React from "react";
import { useParams, useNavigate } from "react-router";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black p-6 rounded-xl">
            <button onClick={()=> navigate(-1)} className="mb-4 text-sm text-blue-600 hover:underline cursor-pointer">← Back to Products</button>
            <h1>Product Details</h1>
            <p className="text-gray-600">Viewing SKU / ID: <span className="font-mono font-bold text-black">{id}</span></p>
        </div>
    );
};
export default ProductDetail;

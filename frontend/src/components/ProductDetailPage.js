import React, { useEffect, useState } from "react";
import axios, { formToJSON } from "axios";
import { useLocation } from "react-router-dom";
import Header from "./Header";

export default function ProductDetailPage() {
    let location = useLocation();
    const productId = location.state.product_id;
    const [productName, setProductName] = useState();
    const [productColor, setProductColor] = useState();
    const [productSize, setProductSize] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productPrice, setProductPrice] = useState();
    const [categoryName, setCategoryName] = useState();
    const [imageLocation, setImageLocation] = useState();
    useEffect(() => {
        let categoryId = 0;
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/product/${productId}`);
                const product = response.data;
                setProductName(product.name);
                setProductColor(product.color);
                setProductSize(product.size);
                setProductDescription(product.description);
                setProductPrice(product.price);
                setImageLocation(product.image_location);
                categoryId = product.category_id;
                fetchCategory();
            } catch {
                console.error("Cannot fetch data");
            }
        };
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/category/${categoryId}`);
                setCategoryName(response.data.name);
            }
            catch {
                console.error("Cannot fetch data");
            }
        }
        fetchProduct();
    }, []);
    return (
        <>
            <Header />
            <div className="py-8 px-64 ">
                <div className="flex">
                    <div>
                        <img class="h-96 max-w-lg" src={imageLocation} alt="hình ảnh sản phẩm" />
                    </div>
                    <div className="block ml-20 w-full p-10 bg-gray-100">
                        <div>
                            <p class="text-3xl text-gray-900 capitalize font-bold">{productName}</p>
                        </div>
                        <hr class="my-3 h-0.5 bg-gray-900" />
                        <div className="my-2">
                            <p class="text-2xl text-gray-900"><span className="font-semibold">Loại sản phẩm: </span>{categoryName}</p>
                        </div>
                        <div className="my-2">
                            <p class="text-2xl text-gray-900"><span className="font-semibold">Giá: </span>{productPrice} đồng</p>
                        </div>
                        <div className="my-2">
                            <p className="text-2xl text-gray-900 font-semibold">Mô tả:</p>
                            <p className="text-gray-900 text-xl">
                                {productDescription}
                            </p>
                        </div>
                        <div className="flex">
                            <div>
                                <button
                                    type="button"
                                    class="uppercase text-red-500 hover:text-white border border-red-500 hover:bg-red-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                                    Yêu thích
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    class="uppercase text-green-500 hover:text-white border border-green-500 hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
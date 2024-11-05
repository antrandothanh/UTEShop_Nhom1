import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetailPage() {
    let location = useLocation();
    console.log(location.state.from);
    useEffect(() => {
        const fetchData = async () => {
            
        }

        fetchData();
    }, []);
    return (
        <div>
            This is Product detail page
        </div>
    );
}
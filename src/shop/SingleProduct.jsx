import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("../products.json") 
            .then(res => res.json())
            .then(
                (data) => {
                    setProduct(data);
                    setLoading(false);
                },
                (err) => {
                    setError(err);
                    setLoading(false);
                }
            );
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const result = product.filter((p) => p.id === id);

    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product "} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='product-details'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className='swiper-container pro-single-top'>
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                                                        modules={[Autoplay]}
                                                        navigation={{
                                                            prevEl: ".pro-single-prev",
                                                            nextEl: ".pro-single-next",
                                                        }}
                                                        className="mySwiper">
                                                        {
                                                            result.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                        <img src={item.img} alt={item.name} />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className='pro-single-next'>
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>
                                                    <div className='pro-single-prev'>
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className='post-content'>
                                                <div>
                                                    {result.map(item => <ProductDisplay key={item.id} item={item} />)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='review'>Review</div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>Right Side</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;


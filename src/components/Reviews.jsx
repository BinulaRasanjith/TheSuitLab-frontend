import React, { useState,useEffect } from 'react';
import { Button } from "@chakra-ui/react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import pic1 from '../assets/images/rentsuits/caremal suit/1.webp'
import pic2 from '../assets/images/rentsuits/black suit/1.webp'
import pic3 from '../assets/images/rentsuits/cobolt blue suit/1.webp'
import CardContainer from "../components/ReviewCard/CardContainer";
import ReviewCard from "../components/ReviewCard/ReviewCard";

const reviewsData = [
    {
        image: pic1,
        orderId: 123456789,
        author: 'John Doe',
        comment: 'This product is amazing!',
        date: '2023-10-30',
        ratings: 4
    },
    {
        image: pic2,
        orderId: 1262334,
        author: 'Johnny',
        comment: 'This product is poor!',
        date: '2023-9-30',
        ratings: 2
    },
    {
        image: pic3,
        orderId: 1234589,
        author: 'Johnny',
        comment: 'This product is poor!',
        date: '2023-10-12',
        ratings: 2
    },
    // Add more review objects as needed
];

const Reviews = () => {

    const navigate = useNavigate();
  const [sortByDate, setSortByDate] = useState('relevant');
  const [sortedByDate, setSortedByDate] = useState([]);

  useEffect(() => {
    const sortedData = [...reviewsData].sort((a, b) => {
      if (sortByDate === 'recent') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortByDate === 'older') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });
    setSortedByDate(sortedData);
  }, [sortByDate]);

  const handleBack = () => {
    navigate('/tailor');
  };

    return (
        <>
            <div className="flex flex-row">
                <div className="flex-auto">
                    <div className='flex flex-col '>
                        <div className='flex-col m-3 shadow-lg'>
                            <div className='flex flex-col p-4'>
                                {/* back  button */}
                                <div className="flex items-center gap-4 m-6">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-primary"
                                    >
                                        <IoArrowBackCircle className="text-3xl cursor-pointer" />
                                    </button>
                                    <h1 className=' text-2xl font-semibold'>Reviews</h1>

                                    <div className="ml-32 flex w-52 ">
                                        <span className=" flex w-full items-center">Sort By</span>
                                        <select id="Sort" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        onChange={(e) => setSortByDate(e.target.value)}
                                        value={sortByDate}>
                                            <option value="">Relevant</option>
                                            <option value="recent">Recent</option>
                                            <option value="older">Older</option>
                                        </select>
                                    </div>
                                </div>
                               
                                    <CardContainer>
                                        {sortedByDate.map((review, index) => {
                                            return (
                                                <ReviewCard
                                                    key={index}
                                                    image={review.image}
                                                    author={review.author}
                                                    orderId={review.orderId}
                                                    comment={review.comment}
                                                    ratings={review.ratings}
                                                    date={review.date}
                                                />
                                            );
                                        })}
                                    </CardContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Reviews;
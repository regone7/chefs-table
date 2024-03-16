import React from 'react';
import { IoIosTime } from "react-icons/io";
import { MdLocalFireDepartment } from "react-icons/md";

const Card = ({card,handelCard}) => {
    // console.log(handelCard)
    return (
        <div>
            <div>
                <div class="card w-80  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={card.image_url} alt="" class="rounded-xl h-20 " />
                    </figure>
                    <div class="card-body  ">
                        <h2 class="card-title">{card.recipe_name}</h2>
                        <p>{card.short_description}</p>
                        <div>
                            <h1>Ingredients :6 </h1>
                            <p>{card.ingredients[0]}</p>
                            <p>{card.ingredients[1]}</p>
                            <p>{card.ingredients[3]}</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center gap-1'>
                                <IoIosTime />
                                <p>{card.preparing_time}</p>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <MdLocalFireDepartment />
                                <p>{card.calories}</p>
                            </div>
                        </div>
                        <div class="card-actions">
                            <button class="btn btn-primary rounded-full btn-sm" onClick={()=>handelCard(card)}>Want To Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
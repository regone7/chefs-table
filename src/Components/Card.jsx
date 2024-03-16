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
                        <img src={card.image_url} alt="" class="rounded-xl h-28 w-32 " />
                    </figure>
                    <div class="card-body  ">
                        <h2 class="card-title">{card.recipe_name}</h2>
                        <p>{card.short_description}</p>
                        <div>
                            <h1 className='font-semibold'>Ingredients :6 </h1>
                            <ul className='list-disc'>
                               <li>{card.ingredients[0]}</li>
                               <li>{card.ingredients[1]}</li>
                               <li>{card.ingredients[2]}</li>
                               <li>{card.ingredients[3]}</li>
                               <li>{card.ingredients[4]}</li>
                               <li>{card.ingredients[5]}</li>
                                
                            </ul>
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
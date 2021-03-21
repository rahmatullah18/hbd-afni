import React from 'react';
import Data from '../store/Data';
import ComponentCard from './ComponentCard';

const Card = () => {
    return (
        <div className="">
            <div className="row">
            {
                Data.map((dt,idx) => (
                    <div className="col-md-4 mt-5">
                    <ComponentCard data={dt} key={idx}/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Card;
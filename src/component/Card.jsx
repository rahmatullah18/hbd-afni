import React from 'react';
import Data from '../store/Data';
import ComponentCard from './ComponentCard';

const Card = () => {
    return (
        <div className="mb-5">
            <div className="row">
                {
                    Data.map((dt, idx) => (
                        <div className="col-md-4 mt-5" key={idx}>
                            <ComponentCard data={dt} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;
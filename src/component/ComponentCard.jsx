import React from 'react';

const ComponentCard = ({data}) => {
    return (
        <div id="card">
            <div id="imgBox">
                <div id="bark"></div>
                <img src={data.img} alt="gambar" />
            </div>
            <div id="details">
                <h4 id="color1" className="text-center mb-4">{data.title}</h4>
                <p>{data.text}</p>
                <p>{data.text1}</p>
                <p>{data.text2}</p>
                <p>{data.text3}</p>
                <p>{data.text4}</p>
                <p>{data.text5}</p>
                <p>{data.text6}</p>
                <p>{data.text7}</p>
                <p id="text-right">{data.text8}</p>
                <p id="text-right">{data.text9}</p>
            </div>
        </div>
    );
};

export default ComponentCard;
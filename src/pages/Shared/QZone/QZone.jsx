import React from 'react';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const QZone = () => {
    return (
        <div className='bg-light p-3 rounded-3 text-center'>
            <h3>Q-Zone</h3>
            <div>
                <img className='w-100' src={qzone1} alt="" />
                <img className='w-100' src={qzone2} alt="" />
                <img className='w-100' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;
import React from 'react';

const SumView = ({ sum }) => {
    console.log('render SumView');
    console.log('-----------------------------');
    return (
        <div>
            <h3>SumView</h3>
            {sum}
        </div>
    );
};

export default SumView;
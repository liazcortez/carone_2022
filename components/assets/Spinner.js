import React, { Fragment } from 'react';

const Spinner = ({size = 32}) => {
    return (
        <div>
            <Fragment>
                <img src={'/static/spinner.gif'} alt="my gif" height={size} width={size} />
            </Fragment>
        </div>
    )
}

export default Spinner;
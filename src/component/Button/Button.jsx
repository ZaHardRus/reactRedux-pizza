import React from 'react';
import classNames from 'classnames';

export const Button = ({ onClick,add,outline,cart, children,  }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(classNames( 'button',{
                'button--outline': outline,
                'button--add':add,
                'button--cart':cart,
            }))}>
            {children}
        </button>
    );
};
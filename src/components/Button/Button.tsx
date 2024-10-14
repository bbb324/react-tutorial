import React, { FC } from 'react';
const Button: FC = () => {
    return <button onClick={() => alert(1)}>{'abc'}</button>
}
export default Button;
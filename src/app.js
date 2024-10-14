import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './index';

const App = () => {
    useEffect(() => {
        console.log(11)
    }, [])
    return <div>
        <Button />
    </div>
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
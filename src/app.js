import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Toast } from './index';

const App = () => {
    const [toasts, setToasts] = useState([]);
    const [counter, setCounter] = useState(0);
    const addToast = (type) => {
        const newToast = {
            id: counter,
            type,
            message: `This is a ${type} message!`
        }
        setToasts(prev => [...prev, newToast]);
        setCounter(prev => prev + 1);
    }
    const removeToast = id => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }
    const buttonStyle = type => ({
        marginRight: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        cursor: 'pointer',
        backgroundColor:
            type === 'success' ? '#059669' :
                type === 'error' ? '#dc2626' :
                    type === 'warning' ? '#d97706' :
                        '#3b82f6',
        color: 'white'
    })
    return <div style={{ padding: '1rem' }}>
        <div className='abc'>
            {(['success', 'warning', 'error', 'info']).map(type => (
                <button
                    key={type}
                    onClick={() => addToast(type)}
                    style={buttonStyle(type)}
                    className={`${type}-button`}
                >{type.charAt(0).toUpperCase() + type.slice(1)} Toast</button>
            ))}
        </div>
        {toasts.map(toast => (
            <Toast key={toast.id}
                type={toast.type}
                message={toast.message}
                className={'toast-box'}
                onClose={() => removeToast(toast.id)}
            />
        ))}
    </div>
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)
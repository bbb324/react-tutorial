import React, { useState, useEffect } from 'react';
import { ToastProps, ToastType } from './Toast.types';
const Toast: React.FC<ToastProps> = ({
    message = '',
    type = 'success',
    duration = 3000,
    className = '',
    onClose
}) => {
    const [isVisible, setVisible] = useState<Boolean>(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose?.()
        }, duration)
        return () => clearTimeout(timer)
    }, [duration, onClose])

    const getTypeStyles = (type: ToastType): React.CSSProperties => {
        const styles: Record<ToastType, React.CSSProperties> = {
            success: {
                backgroundColor: '#ecfdf5',
                borderColor: '#6ee7b7',
                color: '#065f46'
            },
            error: {
                backgroundColor: '#fef2f2',
                borderColor: '#fca5a5',
                color: '#991b1b'
            },
            warning: {
                backgroundColor: '#fffbeb',
                borderColor: '#fcd34d',
                color: '#92400e'
            },
            info: {
                backgroundColor: '#eff6ff',
                borderColor: '#93c5fd',
                color: '#1e40af'
            },
        }
        return styles[type];
    }
    const typeStyles = getTypeStyles(type);
    if (!isVisible) return null;
    return <div className={className}
        style={{
            position: 'fixed',
            top: '1em',
            right: '1em',
            zIndex: 50,
            padding: '1em',
            borderRadius: '0.5rem',
            border: '1px solid',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            ...typeStyles
        }}
    >
        <span style={{ fontSize: '1.2trem' }}>
            {type === 'success' && '✅'}
            {type === 'error' && '❎'}
            {type === 'warning' && '⚠️'}
            {type === 'info' && '📢'}
        </span>
        <p style={{ margin: 0 }}>{message}</p>
        <button onClick={() => {
            setVisible(false);
            onClose?.();
        }}
            style={{
                marginLeft: '0.5rem',
                background: 'none',
                cursor: 'pointer',
                fontSize: '1.25rem',
                padding: '0.25rem',
                color: 'inhert',
                opacity: '0.7'
            }}>
            x
        </button>
        <style>
            {
                `@keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }`
            }
        </style>
    </div>
}

export default Toast;
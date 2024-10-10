import React, { useState, useEffect, useRef } from 'react';

interface ToastProps {
    message: string;
    messageClassName?: string;
    messageText?: string;
    onDisappear?: () => void;
    onPop?: () => void;
}

const Toast: React.FC<ToastProps> = ({
    message,
    messageClassName,
    messageText,
    onDisappear,
    onPop,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (isVisible) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
                if (onDisappear) {
                    onDisappear();
                }
            }, 3000); // Adjust the timeout as needed
        }

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [isVisible, onDisappear]);

    const handlePop = () => {
        setIsVisible(true);
        if (onPop) {
            onPop();
        }
    };

    return (
        <div className={`toast ${messageClassName || ''}`} style={{ display: isVisible ? 'block' : 'none' }}>
            {messageText || message}
        </div>
    );
};

export default Toast;
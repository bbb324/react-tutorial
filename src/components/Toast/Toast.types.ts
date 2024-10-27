export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    className: string;
    onClose: () => void;
}

export interface Toast {
    id: number,
    message: string;
    type: ToastType;
}
export default interface NotificationConfig {
    duration?: number;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
}
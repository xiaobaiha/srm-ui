export default interface ModalConfig {
    title?: string;
    message?: string;
    onOk?: (event: React.SyntheticEvent<{}>) => void;
    onCancel?: (event: React.SyntheticEvent<{}>) => void;
}
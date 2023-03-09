
interface ButtonProps {
    onPress: () => void;
    label: string;
}

export const Button = ({ label, onPress}: ButtonProps) => {
    return (
        <button onClick={onPress}>
            {label}
        </button>
    );
}

export default Button;

interface InputFieldProps {
    onChangeText?: (text: string) => void;
    inputValue?: string;
    placeHolder?: string;
    type?: string;
    id?: string;
}

export const InputField = ({ onChangeText = () => null, inputValue, placeHolder, type, id }: InputFieldProps) => {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            onChange={(e) => {
                onChangeText(e.target.value);
            }}
            value={inputValue}
        />
    )
};

export default InputField
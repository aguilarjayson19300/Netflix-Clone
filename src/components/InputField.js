export const InputField = ({ onChangeText, inputValue, placeHolder, type, id}) => {

    return (
            <input
                type={type}
                id={id}
                placeholder={placeHolder}
                onChange={(e) => {
                    onChangeText(e.target.value);
                }}
                value={inputValue}
            />
    )
};
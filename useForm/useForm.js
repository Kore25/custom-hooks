import { useState } from "react";

export default function useForm( initialState = {}) {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}) => {    
        setValues({
            ...values,
            [ target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}

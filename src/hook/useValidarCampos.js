import {useState} from "react";

export const useValidarCampos = (formInicial, validarForm) =>{
    const [form, setForm] = useState(formInicial);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validarForm(form));
    };

    return{
        form,
        errors,
        handleChange,
        handleBlur
    };

}


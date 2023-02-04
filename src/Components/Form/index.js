import React, { useState, useEffect } from "react";
//import { GlobalContext } from "../../Context/GlobalContext";

const initialForm = {
    name: "",
    id: null,
}

const Form = ({ updateData, createData, DataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (DataToEdit) {
            setForm(DataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [DataToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = (e) => {

        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <form className="w-50 mx-auto mt-2" onSubmit={handleSubmit}>
            <div className="row g-4 align-items-center">
                <div className="col-auto">
                    <label htmlFor="textImput" className="col-form-label">Tarea</label>
                </div>
                <div className="col-auto">
                    <input type="text" maxLength={100} name="name" placeholder="Nombre de la tarea" onChange={handleChange} id="textImput" className="form-control" aria-describedby="passwordHelpInline" value={form.name} />
                </div>
                <div className="col-auto">
                    <span id="textImputHelpLinbe" className="form-text">
                        Debe menos de 100 caracteres.
                    </span>
                </div>
                <div className="col-auto">
                    <input className="btn btn-primary me-2" type="submit" value="Enviar" />
                    <input className="btn btn-primary" type="reset" value="Limpiar" onClick={handleReset} />
                </div>
            </div>
        </form>
    )
}

export default Form;
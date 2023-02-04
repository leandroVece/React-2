import React from "react";
//import { GlobalContext } from "../../Context/GlobalContext";

const TableRow = ({ setDataToEdit, deleteData, el }) => {

    let { name, id } = el;
    return (
        <tr>
            <td>{name}</td>
            <td>
                <button className="btn btn-primary me-2" onClick={() => setDataToEdit(el)}>Editar</button>
                <button className="btn btn-primary" onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default TableRow;
import React, { useState } from "react";
import { useLocalStorage } from "./LocalStorage";



const GlobalContext = React.createContext();

const ContextProvider = (props) => {


    const [DataToEdit, setDataToEdit] = useState(null);
    const { DataTask, SaveDataTask } = useLocalStorage('task_V1', []);

    const createData = (data) => {
        data.id = Date.now();
        const lista = [...DataTask, data];
        SaveDataTask(lista);
    }

    const updateData = (data) => {
        let newData = DataTask.map((el) => (el.id === data.id ? data : el));;
        SaveDataTask(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );
        if (isDelete) {
            let newData = DataTask.filter((el) => el.id !== id);
            SaveDataTask(newData);
        } else {
            return;
        }
    };

    return (
        <GlobalContext.Provider value={{
            updateData,
            createData,
            DataToEdit,
            setDataToEdit,
            deleteData,
            DataTask,
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export { ContextProvider, GlobalContext }
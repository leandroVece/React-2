import React, { useEffect, useState } from "react";
import Table from "../Table";
import Loader from "../Loader";
import Form from "../Form";
import Modal from "../Modal";
import { useLocalStorage } from "../../Context/LocalStorage";
import TableRow from "../TableRow";
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function AppIU() {

    const [loading, setLoading] = useState(false);
    const [DataToEdit, setDataToEdit] = useState(null);
    const { DataTask, SaveDataTask } = useLocalStorage('task_V1', []);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [DataTask]);


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

        <div>
            <Modal />

            <ChangeAlertWithStorageListener />
            <Form
                updateData={updateData}
                createData={createData}
                DataToEdit={DataToEdit}
                setDataToEdit={setDataToEdit} />

            <Table
                loading={loading}
                onLoading={() => <Loader />}
            >
                {!loading && DataTask.length > 0 ? (
                    DataTask.map((x, index) => (
                        <TableRow
                            key={index}
                            el={x}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />
                    ))) : (
                    <tr>
                        <td colSpan="2">Sin datos</td>
                    </tr>
                )}
            </Table>

        </div>
    )
}

export default AppIU;
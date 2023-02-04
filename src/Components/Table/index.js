import React, {/* useContext */ } from "react";
//import { GlobalContext } from "../../Context/GlobalContext.js";
//import TableRow from "../TableRow/index.js";

const Table = (props) => {
    //const { DataTask } = useContext(GlobalContext)

    if (props.loading) {
        return props.loading && props.onLoading()
    } else
        return (
            <div className="w-50 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tarea</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                </table>
            </div>
        );
}

export default Table;
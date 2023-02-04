import { useState } from "react";

function useLocalStorage(item, initalValue) {
    const localStorageTask = localStorage.getItem(item);
    let parsedTask;

    if (!localStorageTask) {
        localStorage.setItem(item, JSON.stringify(initalValue));
        parsedTask = [];
    } else {
        parsedTask = JSON.parse(localStorageTask);
    }

    const [DataTask, setTask] = useState(parsedTask);

    const SaveDataTask = (data) => {
        const stringConvert = JSON.stringify(data);
        localStorage.setItem(item, stringConvert);
        setTask(data)
    };
    return {
        DataTask,
        SaveDataTask
    };
}

export { useLocalStorage }
import React from 'react';

function withListener(WrappedComponent) {



    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            window.addEventListener('storage', (change) => {
                if (change.key === "task_V1") {
                    setStorageChange(true);
                }
            })
        }, [])

        return (
            <WrappedComponent
                show={storageChange}
            />
        );
    }
}

export { withListener };
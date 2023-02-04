import React from 'react';
import { withListener } from './withListener';

function ChangeAlert({ show }) {
    if (show) {
        return <h5 className='w-75'>Hubo cambios! Recomendamos actualizar</h5>;
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
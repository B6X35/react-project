import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './BurgerModal.module.css';

import NavPrivate from '../NavAll/NavPrivate';

const modalRoot = document.querySelector('#modal-root');
function BurgerModal({isActive, children}) {
    if (isActive) {
        return createPortal (
        <div className={s.overlay}>
            <div className={s.modal}>
                {children}
            </div>
        </div>,
        modalRoot,
    )
}
    return null;
}

export default BurgerModal;
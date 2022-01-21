import s from './BurgerCloseButton';
import { useState } from 'react';

function BurgerCloseButton() {
const [isActive, setButton] = useState(false);

const openModal = () => {
  setButton(true);
}

return (
  {!isActive && <button type="button" onClick={openModal} className={s.btn}></button>}
{isActive && <button type="button" onClick={closeModal} className={s.btn}></button>}
)
}
export default BurgerCloseButton;
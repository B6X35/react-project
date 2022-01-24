import { createPortal } from 'react-dom';
import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import sprite from '../../images/sprite/sprite.svg';

import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

const ModalRootElement = document.querySelector('#modal-root');
const Modal = () => {
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    ModalRootElement.appendChild(element);
    return () => {
      ModalRootElement.removeChild(element);
    };
  }, []);

  return createPortal(
    <>
      <div className={s.box}>
        <div className={s.modal}>
          {/* <img src="" alt="" /> */}
          <button className={s.closeBtn}>
            <svg className={s.svg}>
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </button>
          <DailyCalorieIntake />
        </div>
      </div>
    </>,
    ModalRootElement,
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func,
};

// const modalPortal = document.querySelector('#modal-root');
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };
//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.closeModal();
//     }
//   };
//   render() {
//     const { children } = this.props;
//     return createPortal(
//       <div className={styles.box} onClick={this.handleBackdropClick}>
//         <div className={styles.modal}><button className={styles.closeBtn}><svg className={styles.svg}><use href={sprite + '#icon-close'}></use></svg>   </button></div>
//       </div>,
//       modalPortal,
//     );
//   }
// }
// export default Modal;

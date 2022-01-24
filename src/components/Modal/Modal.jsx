import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import sprite from '../../images/sprite/sprite.svg'
const modalPortal = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.box} onClick={this.handleBackdropClick}>
        <div className={styles.modal}><button className={styles.closeBtn}><svg className={styles.svg}><use href={sprite + '#icon-close'}></use></svg>   </button></div>
      </div>,
      modalPortal,
    );
  }
}
export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func,
};
















// import { useEffect, useMemo } from 'react';
// import { createPortal } from 'react-dom';
// import styles from './modal.module.css';

// const ModalRootElement = document.querySelector('#modal-root');

// const Modal = () => {
//     const element = useMemo(() => document.createElement("div"), [] );
//     useEffect(() => {
//         ModalRootElement.appendChild(element);
//         return () => {
//             ModalRootElement.removeChild(element)
//         }
    
//     } , [] );

//     return createPortal(<div className={styles.box}>
//         <div className={styles.modal}>
//             <button><img src="" alt="close"/></button>
//         </div>
//     </div>, ModalRootElement)
    

    
// }

// export default Modal;
import s from './Radiobuttons.module.css';

const Radiobuttons = ({ text = 'Группа крови*' }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{text}</p>
      <div className={s.group}>
        <div className={s.radioButtonItem}>
          <input className={s.radioItem} type="radio" id="blood1" name="ritem" value="1" />
          <label for="blood1">1</label>
        </div>
        <div className={s.radioButtonItem}>
          <input className={s.radioItem} type="radio" id="blood2" name="ritem" value="2" />
          <label for="blood2">2</label>
        </div>
        <div className={s.radioButtonItem}>
          <input className={s.radioItem} type="radio" id="blood3" name="ritem" value="3" />
          <label for="blood3">3</label>
        </div>
        <div className={s.radioButtonItem}>
          <input className={s.radioItem} type="radio" id="blood4" name="ritem" value="4" />
          <label for="blood4">4</label>
        </div>
      </div>
    </div>
  );
};

export default Radiobuttons;

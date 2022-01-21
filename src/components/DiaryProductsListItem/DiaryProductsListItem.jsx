import Input from '../SharedComponents/Input';

const DiaryProductsListItem = ({ arr = [] }) => {
  return (
    <div>
      {/* <select size="3" multiple name="hero">
        <option>Выберите героя</option>
        <option value="Чебурашка">Чебурашка</option>
        <option selected value="Крокодил Гена">
          Крокодил Гена
        </option>
        <option value="Шапокляк">Шапокляк</option>
        <option value="Крыса Лариса">Крыса Лариса</option>
      </select> */}

      <Input type="search" />
    </div>
  );
};

export default DiaryProductsListItem;

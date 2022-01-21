import Input from '../SharedComponents/Input';

const DiaryProductsListItem = ({ arr = [] }) => {
  return (
    <div>
      <Input id="data1" type="search" list="data" />

      <datalist id="data">
        {arr.map(item => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
};

export default DiaryProductsListItem;

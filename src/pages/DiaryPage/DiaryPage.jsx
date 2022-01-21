import DiaryDateCalendare from '../../components/DiaryDateCalendare';
import DiaryAddProduct from '../../components/DiaryAddProduct';
import DiaryProductList from '../../components/DiaryProductList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
    return (
        <section>
            <DiaryDateCalendare />
            <DiaryAddProduct />
            <DiaryProductList />
        </section>
    )
}

export default DiaryPage;
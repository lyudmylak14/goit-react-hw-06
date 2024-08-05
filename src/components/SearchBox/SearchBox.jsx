import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/filtersSlice';

export default function SearchBox() {
 const dispatch = useDispatch();
 const filter = useSelector(selectNameFilter) || "";

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

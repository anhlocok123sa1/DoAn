import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input placeholder="Tìm kiếm..." />
            <select name="lbgroup" id="lbgroup">
                <option value="0" selected>
                    Tất cả
                </option>
                <option value="1">Máy ảnh</option>
                <option value="2">Máy tính</option>
            </select>
            <div className={cx('action-search')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Search;

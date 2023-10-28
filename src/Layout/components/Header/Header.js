import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import {
    faArrowRight,
    faCartShopping,
    faKey,
    faMoneyBill,
    faPenToSquare,
    faPhone,
    faRefresh,
    faRightToBracket,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('container')}>
                    <div className={cx('top-left')}>
                        <p className={cx('top-header-left-icon')}>
                            <FontAwesomeIcon icon={faPhone} />
                        </p>
                        <span>Hotline:0908 77 00 95</span>
                    </div>
                    <ul className={cx('header-navbar-list')}>
                        <Link to={config.routes.checkorder} className={cx('header-navbar-item')}>
                            <li>
                                <p className={cx('header-navbar-item-icon')}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </p>
                                <span>Kiểm tra đơn hàng</span>
                            </li>
                        </Link>
                        <Link to={config.routes.cart} className={cx('header-navbar-item')}>
                            <li>
                                <p className={cx('header-navbar-item-icon')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </p>
                                <span>Giỏ hàng</span>
                            </li>
                        </Link>
                        <Link to={config.routes.login} className={cx('header-navbar-item')}>
                            <li>
                                <p className={cx('header-navbar-item-icon')}>
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                </p>
                                <span>Đăng nhập</span>
                            </li>
                        </Link>
                        <Link to={config.routes.register} className={cx('header-navbar-item')}>
                            <li>
                                <p className={cx('header-navbar-item-icon')}>
                                    <FontAwesomeIcon icon={faKey} />
                                </p>
                                <span>Đăng ký</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <Link to={config.routes.home}>
                        <div className={cx('logo')}>
                            <img src={images.banner} alt="banner" />
                        </div>
                    </Link>
                    <div className={cx('right-content')}>
                        <ul className={cx('sale-policy-list')}>
                            <li className={cx('sale-policy-item')}>
                                <p className={cx('policy-icon')}>
                                    <FontAwesomeIcon icon={faTruck} />
                                </p>
                                <span>GIAO HÀNG MIỄN PHÍ</span>
                            </li>
                            <li className={cx('sale-policy-item')}>
                                <p className={cx('policy-icon')}>
                                    <FontAwesomeIcon icon={faMoneyBill} />
                                </p>
                                <span>THANH TOÁN LINH HOẠT</span>
                            </li>
                            <li className={cx('sale-policy-item')}>
                                <p className={cx('policy-icon')}>
                                    <FontAwesomeIcon icon={faRefresh} />
                                </p>
                                <span>TRẢ HÀNG TRONG 30 NGÀY</span>
                            </li>
                        </ul>
                        <div className={cx('right-content-main')}>
                            <Search />
                            <Link to={config.routes.cart}>
                                <div className={cx('cart')}>
                                    <img src={images.cart} alt="cart" />
                                    <div>
                                        <span className={cx('count')}>0 sp </span>-
                                        <span className={cx('price')}> 0 đ</span>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

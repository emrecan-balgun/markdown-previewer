import { useSelector, useDispatch } from 'react-redux';
import { isClicked, changeIsClicked } from '../redux/markdownSlice';

function Header() {
    const clicked = useSelector(isClicked)
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(changeIsClicked(!clicked));
    }

    return (
        <div className="header">
            <h1 className="header__title">markdown previewer</h1>
            <span className="header__icon" onClick={handleClick}>?</span>
        </div>
    )
}

export default Header

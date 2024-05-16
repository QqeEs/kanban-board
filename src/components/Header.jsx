import './style/header.css'

const Header = ({ text, header, count }) => {
    return (
        <div className='header' style={header}>
            {text}
            <div className="header_count">{count}</div>
        </div>
    );
};

export default Header;
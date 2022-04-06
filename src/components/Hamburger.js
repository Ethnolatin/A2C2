const Hamburger = ({ navListDisplay, toggleNavList }) => {
    return (
        <button
            type='button'
            className='hamburger'
            onClick={() => toggleNavList()}
        >
            <div className={`threeBars ${navListDisplay ? 'arrow' : ''}`}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </button>
    )
}

export default Hamburger

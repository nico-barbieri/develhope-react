function Container(props) {
    return <div className='bg-white border-8 border-red-700 blue-title'>
    {props.children}
    </div>
}

export default Container;
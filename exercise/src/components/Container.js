function Container(props) {
    return <div className='bg-white border-8 border-red-700 p-2'>
        <h1 className="blue-title">{props.title}</h1>
        {props.children}
    </div>
}

export default Container;
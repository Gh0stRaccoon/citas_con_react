const Grid = (props) =>{
    const {direction, margin, gap} = props
    return(
        <div className="grid" style={{flexDirection: direction, margin: margin+"rem 0", gap:gap+"rem"}}>
            {props.children}
        </div>
    )
}

export default Grid;
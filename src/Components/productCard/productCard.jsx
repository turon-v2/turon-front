
export const ProductCard = ({children,  bgcolor: backgroundColor}) =>{
console.log(children, backgroundColor);
    return (
        <div className="productCard" style={{backgroundColor}}>
            {children}
        </div>
    )
}
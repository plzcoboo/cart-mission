const CartItem = ({item ,onDel,onEdit}) => {
    const {text, price ,amount,id} = item
   
    return (
        <li>
            <p><span>타이틀</span>:<strong>{text}</strong></p>
            <p><span>가격</span>:<strong>{price}</strong></p>
            <p><span>수량</span>:<strong>{amount}</strong></p>
            <p><button><i className="xi-pen" onClick={()=>onEdit(id)}></i></button>
            <button onClick={()=>onDel(id)}><i className="xi-trash"></i></button></p>          
        </li>
    );
};

export default CartItem;
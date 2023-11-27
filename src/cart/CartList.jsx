import CartItem from "./Cartitem";

const CartList = ({data,onDel,onDelAll,onEdit,total}) => {
    return (
        <div className="con2">
            <p>
                <button  className="btn"onClick={onDelAll}>전체삭제</button>
                <span className="total">
                    총금액 :  {total}
                </span>
            </p>        
            <ul className="list">
                {data.map(item => <CartItem item={item} key={item.id} onDel={onDel} onEdit={onEdit}/>)}
            </ul>
        </div>
    );
};

export default CartList;
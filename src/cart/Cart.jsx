import './style.scss'
import CartForm from './CartForm';
import CartList from './CartList';
import { useEffect, useRef, useState } from 'react';

const Cart = () => {
    const [data,setData] = useState([])
    //{id, text:'', price:1000, amount:2}
    const [isEdit, setisEdit] = useState(false);
    const no = useRef(1);
    const textRef = useRef()
    const [total , setTotal] = useState(0)
    const [cart, setCart] = useState({
        text:"", price:"", amount:"" , 
    })

    const {text , price , amount} = cart

    const changeInput = e => {
        const {name, value} = e.target
        setCart({
            ...cart ,
            [name]:value
        })
    }

    const onDel = (id) => {
       setData(data.filter(item => item.id !== id))
    }
    const onDelAll = () => {
        setData([])
    }

    const onSubmit = e => {
        e.preventDefault()
        //텍스트가 공백이고 수량이 1보다 작으면 return 처리
        if(text === "" || amount < 1) return
        if(isEdit) {
            //수정
            setData(data.map(item => item.id === cart.id ? cart : item))
            setisEdit(false)
            setCart({
                text:'',price:"",amount:""
            })
            textRef.current.focus()
        }else{
            cart.id = no.current++
            setData([
                ...data,
                cart
            ])
            setCart({
                text:'',price:"",amount:""
            })
            textRef.current.focus()
        }       
    }

    const onEdit = (id) => {
        setCart(data.find(item => item.id === id))
        setisEdit(!isEdit)
    }

    useEffect(()=>{
        setTotal(data.reduce((acc, cur) => acc + cur.price * cur.amount,0))
    },[data])

    return (
        <>
            <div className="con-box">
                <CartForm onSubmit={onSubmit} changeInput={changeInput} cart={cart} textRef={textRef} isEdit={isEdit}/>
                <CartList data={data} onDel={onDel} onDelAll={onDelAll} onEdit={onEdit} total={total}/>
            </div>
        </>
    );
};

export default Cart;

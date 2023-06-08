import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
import { useStateContext } from '@/context/StateContext';
import {BsBagCheckFill} from 'react-icons/bs'

const success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    // useState[order,setOrder] = useState(null)
    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    }, [])


  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>

        <h2>Thanks for your order!</h2>
        <p className="email-msg"> Please check your email for confirmation</p>
        <p className="if you have any questions, please contact">
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
        </p>
      </div>
    </div>
  );
}

export default success
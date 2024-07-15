import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiCartAlt, BiSearch, BiUser, BiHeart, BiLogOut, BiCart } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import Cookies from 'js-cookie';
import { getUser, logoutUser } from '@/utils/userApis';
import { createInitialsImage } from '@/utils/generateProfilePictureOnInitials';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '@/utils/productsApis';
import { decreaseQuantity, increaseQuantity, removeItem } from '@/store/cartSlice';

const Header = () => {
    const [isCartFull, setisCartFull] = useState(false);
    const [user, setUser] = useState(null);
    const [OpenUserCard, setOpenUserCard] = useState(false);
    const [OpenCartCard, setOpenCartCard] = useState(false);
    const [IsCartModified, setIsCartModified] = useState(false);
    const [CartItems, setCartItems] = useState([]);
    const [UserImage, setUserImage] = useState(null);
    const userCardRef = useRef(null);
    const cartCardRef = useRef(null);
    const toggleTimeoutRef = useRef(null);
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.items);


    useEffect(() => {
        getCartItems();
    }, [cart]);

    useEffect(() => {
        const token = Cookies.get('jwt');
        if (token) {
            getUser(token)
                .then(res => {
                    setUser(res);
                    if (res.image === null) {
                        setUserImage(createInitialsImage(res.firstname + " " + res.lastname));
                    } else {
                        setUserImage(res.image[0].formats.thumbnail.url);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    useEffect(() => {
        const handleOutsideClick = event => {
            if (
                (userCardRef.current && !userCardRef.current.contains(event.target)) ||
                (cartCardRef.current && !cartCardRef.current.contains(event.target))
            ) {
                setOpenUserCard(false);
                setOpenCartCard(false);
            }
        };

        if (OpenUserCard || OpenCartCard) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [OpenUserCard, OpenCartCard]);

    const getCartItems = () => {
        if (cart && cart.length > 0) {
            setisCartFull(true);
            const fetchCartItems = async () => {
                const itemsWithDetails = await Promise.all(
                    cart.map(async item => {
                        const productData = await getProductData(item.productId);
                        return productData;
                    })
                );
                setCartItems(itemsWithDetails);
                console.log('Cart Items:', itemsWithDetails);
            };

            fetchCartItems();
        } else {
            setCartItems([]);
            setisCartFull(false);
        }
    }

    const getProductData = async (productId) => {
        try {
            const response = await getProductById({ id: productId });
            return response.data[0];
        } catch (error) {
            console.error('Error fetching product details:', error);
            return null;
        }
    };

    const debounce = (func, delay) => {
        clearTimeout(toggleTimeoutRef.current);
        toggleTimeoutRef.current = setTimeout(func, delay);
    };

    const toggleUserCard = () => {
        if (user) {
            debounce(() => {
                setOpenUserCard(prev => !prev);
            }, 200);
        } else {
            setOpenUserCard(false);
        }
    };

    const toggleCartCard = () => {
        debounce(() => {
            setOpenCartCard(prev => !prev);
        }, 200);
    };

    const handelLogout = () => {
        logoutUser();
        setUser(null);
        setOpenUserCard(false);
    };

    const calculateTotal = () => {
        return CartItems.reduce((total, item, index) => total + item.attributes.finalPrice * cart[index].quantity, 0);
    };

    const increaseItemQuantity = (productId) => {
        console.log('Dispatching increaseQuantity for productId:', productId);
        dispatch(increaseQuantity(productId));
      };

    const decreaseItemQuantity = (productId) => {
        console.log('Dispatching decreaseQuantity for productId:', productId);
        dispatch(decreaseQuantity(productId));
    };

    const removeItemFromCart = (productId) => {
        console.log('Dispatching removeItem for productId:', productId);
        dispatch(removeItem(productId));
    }

    return (
        <div className="fixed w-screen bg-white z-50">
            <div className="container py-5 justify-between flex items-center">
                <div className="w-1/3">
                    <Image src="/assets/logo-black.svg" width={150} height={150} alt="logo" />
                </div>
                <div className="w-1/3 flex">
                    <ul className="flex gap-10 mx-auto">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/3 flex">
                    <div className="ml-auto flex gap-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <BiSearch />
                            </div>
                            <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                placeholder="Search ..."
                            />
                        </div>
                        <div className="relative">
                            <button onClick={toggleCartCard} className="bg-gray-100 text-black px-3 py-3 rounded-lg text-xl">
                                <BiCartAlt />
                            </button>
                            {isCartFull && (
                                <span className="absolute top-1 right-2 bg-red-500 text-white rounded-full px-[3px] py-[3px]"></span>
                            )}
                            {OpenCartCard && (
                                <div
                                    ref={cartCardRef}
                                    className="bg-white w-[500px] absolute top-12 right-0 rounded-lg shadow-lg border border-gray-200"
                                >
                                    <div className="flex flex-col gap-5 p-5">
                                    {isCartFull && CartItems.length > 0 ? (
                                        <div className="flex flex-col gap-4">
                                        {CartItems.map((item, index) => (
                                            <div key={index} className="flex gap-4 items-center border-b pb-3">
                                            <div className="min-w-[60px] min-h-[60px] overflow-hidden rounded-md">
                                                <Image
                                                src={item.attributes.image.data[0].attributes.formats.thumbnail.url}
                                                width={60}
                                                height={60}
                                                alt={item.attributes.title}
                                                className="object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-grow">
                                                <p className="text-sm font-bold text-gray-800">{item.attributes.name}</p>
                                                <p className="text-sm text-gray-500">
                                                <span className='line-through'>${item.attributes.price.toFixed(2)}</span> | <span className='text-black font-semibold'>${item.attributes.finalPrice.toFixed(2)}</span>
                                                </p>
                                                <div className="flex items-center text-sm text-gray-500">
                                                <button onClick={() => decreaseItemQuantity(item.id)} className="px-2">-</button>
                                                <span className="mx-2">{cart[index].quantity || 0}</span>
                                                <button onClick={() => increaseItemQuantity(item.id)} className="px-2">+</button>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() => removeItemFromCart(item.id)} className="text-red-500 text-sm mt-2">Remove</button>
                                            </div>
                                            </div>
                                        ))}
                                        <div className="flex justify-between items-center py-3">
                                            <span className="font-bold text-gray-800">Total:</span>
                                            <span className="font-bold text-gray-800">${calculateTotal().toFixed(2)}</span>
                                        </div>
                                        <button className="bg-black text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                            Go to Checkout
                                        </button>
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-500">Cart is Empty</div>
                                    )}
                                    </div>
                                </div>
                                )}
                        </div>
                        <div className="w-[1px] bg-slate-300 my-1"></div>
                        <div className="relative">
                            {user ? (
                                <button onClick={toggleUserCard} className="bg-gray-100 text-black px-3 py-3 rounded-lg text-xl">
                                    <BiUser />
                                </button>
                            ) : (
                                <a href="/auth/login-signup" className="bg-black text-white font-semibold px-3 py-2 block rounded-lg">
                                    Sign In
                                </a>
                            )}
                            {OpenUserCard && user && (
                                <div ref={userCardRef} className="bg-white w-[280px] absolute top-12 right-0 rounded-lg shadow-lg">
                                    <div className="flex flex-col gap-5 p-5">
                                        <div className="flex gap-2">
                                            {UserImage && <Image src={UserImage} width={50} height={50} alt="user" className="rounded-full" />}
                                            <div>
                                                <p className="text-lg font-bold">{user ? user.firstname + " " + user.lastname : 'Guest'}</p>
                                                <p className="text-gray-500">{user ? user.email : 'email'}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex flex-col gap-5">
                                            <a className="flex gap-2 items-center" href="#">
                                                <BiUser />
                                                <p>Profile</p>
                                            </a>
                                            <a className="flex gap-2 items-center" href="#">
                                                <BiCart />
                                                <p>Orders</p>
                                            </a>
                                            <a className="flex gap-2 items-center" href="#">
                                                <BiHeart />
                                                <p>Wishlist</p>
                                            </a>
                                            <a className="flex gap-2 items-center" href="#">
                                                <CiSettings />
                                                <p>Settings</p>
                                            </a>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <button className="flex gap-2 items-center" onClick={handelLogout}>
                                                <BiLogOut />
                                                <p>Logout</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
import '../styles/Header.module.css'
import { useState } from 'react';
import { Formik } from 'formik';
import { useFormik } from 'formik';

const Header = () => {

    const [showLogin, setShowLogin] = useState(false);

    const handleOpenLogin = () => {
        setShowLogin(true)
    }

    const handleCloseLogin = () => {
        setShowLogin(false)
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <header>
                <div
                    className="img-holder w-auto bg-charcoal">
                    <div
                        className="top-banner flex px-5 py-2 items-center justify-between">
                        <h3
                            className="font-megrim text-5xl text-teal">AniScope</h3>

                        <ul className="btn-holder flex text-sm">
                            <li className="mx-5">
                                <button
                                    type="button"
                                    className="rounded-md px-3 py-1 bg-gray-light"
                                    onClick={handleOpenLogin}>Sign in</button>
                            </li>

                            {showLogin ? (
                                <div
                                    className="inset-0 fixed flex justify-center items-center tracking-widest overflow bg-black/60 transition-all ">
                                    <div
                                        className="bg-gradient-to-br from-gray-dark to-black w-144 px-8 py-10 rounded-xl text-baby-blue transition-all shadow-lg shadow-black">
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="userHolder flex flex-col">
                                                <label
                                                    htmlFor="username"
                                                    className="mb-3 text-sm uppercase tracking-wider">Enter your username</label>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="username"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.email}
                                                    className="py-2 rounded-sm px-1 text-baby-blue bg-black bg-opacity-20 focus:shadow-blue focus:shadow-md focus:border transition-all border hover:cursor-pointer"
                                                />
                                            </div>

                                            <hr className="my-7 text-baby-blue text-opacity-15" />

                                            <div className="passHolder flex flex-col mb-10">
                                                <label
                                                    htmlFor="password"
                                                    className="mb-3 text-sm uppercase tracking-wider"
                                                    required>Enter your password</label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.password}
                                                    className="py-2 rounded-sm px-1 text-baby-blue bg-black bg-opacity-20 focus:shadow-blue focus:shadow-md focus:border transition-all border border-baby-blue hover:cursor-pointer"
                                                    required
                                                />
                                            </div>


                                            <div className="btnHolder flex justify-evenly">
                                                <button
                                                    type="submit"
                                                    onSubmit={(event) => event.preventDefault()}
                                                    className="rounded-md px-4 py-1  text-white uppercase text-sm hover:shadow-md hover:shadow-blue transition-all">Confirm</button>

                                                <button
                                                    type="button"
                                                    onClick={handleCloseLogin}
                                                    className="rounded-md px-4 py-1  text-white uppercase text-sm hover:shadow-md hover:shadow-blue transition-all">Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ) : null}
                            
                        </ul>
                    </div>

                    <img src="" alt="" className="h-48 object-cover" />
                </div>
            </header>
        </>
    )
}

export default Header;
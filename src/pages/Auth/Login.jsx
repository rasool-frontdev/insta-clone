import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../../Context/firebase";
import "./style.css";
import { HOME, LOGIN, SIGN_UP, FORGOTPASSWORD } from "../../Constant/routes";

const Login = () => {
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password === "" || email === "";

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigate(HOME);
        } catch (error) {
            setEmail("");
            setPassword("");
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = "Login - Instagram";
    }, []);

    return (
        <div className="flex justify-center gap-[30px]">
            <div className="w-[30%] h-full bg-[url('/imgs/loginLeftImg.png')]  bg-no-repeat h-full flex my-[2rem]">
                <img
                    src="/imgs/screenshot1.png"
                    alt="second bg"
                    className="w-[250px] h-[541px] ml-[158px] mt-[25px]"
                />
            </div>
            <div className="h-[399px] flex align-center justify-center mt-[3rem] w-[350px] border border-grey">
                <div>
                    <div className="flex justify-center mt-[47px] mb-[20px]">
                        <img
                            className="w-[174px] h-[50px]"
                            src="/imgs/instaLogo.png"
                            alt="logo"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <div className="text-center mb-8"></div>
                            {error && (
                                <p className="mb-4 text-xs text-red-500">
                                    {error}
                                </p>
                            )}
                            <form onSubmit={handleSubmit} method="post">
                                <div>
                                    <input
                                        type="text"
                                        aria-label="Enter your email address"
                                        placeholder="Email address"
                                        className="text-[1rem] text-gray-base w-full py-5 px-4 h-2 border
                                        border-gray-primary rounded mb-[15px] bg-gray-50"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        aria-label="Enter your password"
                                        placeholder="Password"
                                        className="text-[1rem] text-gray-base w-full py-5 px-4 h-2 border
                                border-gray-primary rounded mb-[15px] bg-gray-50"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <button
                                        disabled={isInvalid}
                                        type="submit"
                                        className={`bg-[#77C8F8] cursor-pointer text-white rounded w-full h-8 font-bold ${
                                            isInvalid && "opacity-50"
                                        }`}>
                                        Log In
                                    </button>
                                    <span className="content-none "></span>
                                </div>
                                <div>
                                    <Link
                                        to={FORGOTPASSWORD}
                                        className="flex justify-center mt-[30px] font-semibold text-sm text-[#005c98]">
                                        Forgot password?
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="mt-[60px]">
                            <div className="rounded flex align-center justify-center items-center flex-col w-full py-[23px]">
                                <p className="text-sm">
                                    Don't have an account?{` `}
                                    <Link
                                        to={SIGN_UP}
                                        className="font-bold text-[#005c98]">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>Get the app</p>

                            <div className="flex justify-center mt-[20px]">
                                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6E6D07EE-C70C-42FA-83C4-9BD1C065393F%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1">
                                    <img
                                        className="w-[134px] h-[40px] mr-[10px] cursor-pointer"
                                        src="/imgs/googlePlay.png"
                                        alt="google play"
                                    />
                                </a>
                                <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1030">
                                    <img
                                        className="w-[110x] h-[40px]"
                                        src="/imgs/microsoft.png"
                                        alt="microsoft"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import { faAngleDown, faAngleUp, faBarsStaggered, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function Navbar() {

    const [isMenHovered, setIsMenHovered] = useState(false);
    const [isWomenHovered, setIsWomenHovered] = useState(false);
    const [isIconHovered, setIsIconHovered] = useState(false);
    const [isLoginHovered, setIsLoginHovered] = useState(false);
    const [isWishlistHovered, setIsWishlistHovered] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);

    const handleMenMouseEnter = () => {
        setIsMenHovered(true);
        setIsWomenHovered(false);
    }

    const handleMenMouseLeave = () => {
        setIsMenHovered(false);
    }

    const handleWomenMouseEnter = () => {
        setIsMenHovered(false);
        setIsWomenHovered(true);
    }

    const handleWomenMouseLeave = () => {
        setIsWomenHovered(false);
    }

    const handleIconMouseEnter = () => {
        setIsIconHovered(true);
    }

    const handleIconMouseLeave = () => {
        setIsIconHovered(false);
    }

    const handleLoginMouseEnter = () => {
        setIsLoginHovered(true);
    }

    const handleLoginMouseLeave = () => {
        setIsLoginHovered(false);
    }

    const handleWishlistMouseEnter = () => {
        setIsWishlistHovered(true);
    }

    const handleWishlistMouseLeave = () => {
        setIsWishlistHovered(false);
    }

    const handleCartMouseEnter = () => {
        setIsCartHovered(true);
    }

    const handleCartMouseLeave = () => {
        setIsCartHovered(false);
    }

    return (
        <div className="navbar">

            <div className="iconBrandName">
                <div className="navbarIcon" onMouseEnter={handleIconMouseEnter} onMouseLeave={handleIconMouseLeave}>
                    <FontAwesomeIcon icon={faBarsStaggered} size="xl" />
                </div>
                {
                    isIconHovered && (
                        <div className="tooltip">
                            Collections
                        </div>
                    )
                }
                <div className="brandName">
                    Befikray
                </div>
            </div>

            <div className="navbarCategories">
                <div className="navbarMen" onMouseEnter={handleMenMouseEnter} onMouseLeave={handleMenMouseLeave}>
                    MEN {isMenHovered ? (<FontAwesomeIcon icon={faAngleUp} size="2xs" />) : (<FontAwesomeIcon icon={faAngleDown} size="2xs" />)}
                    {
                        isMenHovered && (
                            <div className="dropdownMenu">
                                <ul>
                                    <li>Plain Tshirt</li>
                                    <li>Floral Shirt</li>
                                    <li>Stripe Shirt</li>
                                    <li>Men Kurta</li>
                                    <li>Oversized T-Shirt</li>
                                    <li>Men Plain Shirt</li>
                                    <li>T-Shirt Combo</li>
                                    <li>Full Sleeve Shirt</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className="navbarWomen" onMouseEnter={handleWomenMouseEnter} onMouseLeave={handleWomenMouseLeave}>
                    WOMEN {isWomenHovered ? (<FontAwesomeIcon icon={faAngleUp} size="2xs" />) : (<FontAwesomeIcon icon={faAngleDown} size="2xs" />)}
                    {
                        isWomenHovered && (
                            <div className="dropdownMenu">
                                <ul>
                                    <li>Plain Tshirt</li>
                                    <li>Pyjama Set</li>
                                    <li>Crop Tops</li>
                                    <li>Floral Shirt</li>
                                    <li>Stripe Shirt</li>
                                    <li>Full Sleeve Shirt</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="navbarUser">
                <div className="navbarSearch">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search for Products..."
                    />
                    <button className="searchButton"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" /></button>
                </div>
                <div className="navbarLogin" onMouseEnter={handleLoginMouseEnter} onMouseLeave={handleLoginMouseLeave}>
                    <FontAwesomeIcon icon={faUser} size="xl" />
                </div>
                {
                    isLoginHovered && (
                        <div className="tooltip2">
                            Login
                        </div>
                    )
                }
                <div className="navbarWishlist" onMouseEnter={handleWishlistMouseEnter} onMouseLeave={handleWishlistMouseLeave}>
                    <FontAwesomeIcon icon={faHeart} size="xl" />
                </div>
                {
                    isWishlistHovered && (
                        <div className="tooltip3">
                            Wishlist
                        </div>
                    )
                }
                <div className="navbarCart" onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave}>
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                </div>
                {
                    isCartHovered && (
                        <div className="tooltip4">
                            Cart
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Navbar;
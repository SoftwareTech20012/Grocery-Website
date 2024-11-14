import React, { useState } from 'react';
import './homesite.css';
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaCaretDown, FaChevronLeft, FaChevronRight , FaHeart, FaRegHeart } from 'react-icons/fa';

const Groceryhome = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [wishlist, setWishlist] = useState({});
    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown when clicking outside
    const handleOutsideClick = (e) => {
        if (!e.target.closest('.location-container')) {
            setShowDropdown(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    const toggleWishlist = (index) => {
        setWishlist((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle wishlist status for the specific product
        }));
    };

    const categories = [
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0688fceaabe7d725812da35065b885ddbcff68ebee13097f3d8ebd872ba06cd2?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Dairy & Eggs",multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f382efe885d52702b0fb99cdbfde33afdd304bdd393d96b55a0c98c1a0ae28b2?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Cooking Oils", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8c4a9157e68c5dac198b42c8ec419e359a88eef680fd4a5b4e19118bb920d6?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Bakery & Snacks", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3eac5288a7b66f6d9218affd584667987828f375f3836681fe222398ea2f431d?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Beverages", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c18b9a718ef8a9decd98ea52fce5a31cacc9626ea29d018e7a6f8b26e20ad063?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Fresh Fruits & Vegetable", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f382efe885d52702b0fb99cdbfde33afdd304bdd393d96b55a0c98c1a0ae28b2?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Cooking Oils",  multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8c4a9157e68c5dac198b42c8ec419e359a88eef680fd4a5b4e19118bb920d6?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Bakery & Snacks", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c18b9a718ef8a9decd98ea52fce5a31cacc9626ea29d018e7a6f8b26e20ad063?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Fresh Fruits & Vegetable", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f382efe885d52702b0fb99cdbfde33afdd304bdd393d96b55a0c98c1a0ae28b2?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Cooking Oils",  multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8c4a9157e68c5dac198b42c8ec419e359a88eef680fd4a5b4e19118bb920d6?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Bakery & Snacks", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3eac5288a7b66f6d9218affd584667987828f375f3836681fe222398ea2f431d?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Beverages",  multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c18b9a718ef8a9decd98ea52fce5a31cacc9626ea29d018e7a6f8b26e20ad063?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Fresh Fruits & Vegetable", multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f382efe885d52702b0fb99cdbfde33afdd304bdd393d96b55a0c98c1a0ae28b2?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Cooking Oils",  multiLine: true },
      { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8c4a9157e68c5dac198b42c8ec419e359a88eef680fd4a5b4e19118bb920d6?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f", title: "Bakery & Snacks", multiLine: true }
      
    ];
    
    const CategoryItem = ({ imageUrl, title, multiLine, wrap }) => {
      const titleClasses = `${multiLine ? 'multiLineTitle' : ''} ${wrap ? 'wrapTitle' : ''}`;
      return (
        <article className="categoryItem">
          <img loading="lazy" src={imageUrl} alt={title} className="categoryImage" />
          <h2 className={titleClasses}>{title}</h2>
        </article>
      );
    };

    const topRatedProducts = [
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 1", name: "Olive Oil", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 2", name: "Egg Noodles", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 3", name: "Basket of Eggs", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 4", name: "Tomato Ketchup", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 4", name: "Tomato Ketchup", rating: 4.5, price: 500, originalPrice: 600 }
    ];
    


    const bakeryItems = [
        { imageUrl: "./assets/pngfuel 6.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 6.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 6.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 6.png", title: "Sub Category Name" },
        

    ];
   
    const beveragesItems = [
        { imageUrl: "./assets/pngfuel 11.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 11.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 11.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 11.png", title: "Sub Category Name" },
        { imageUrl: "./assets/pngfuel 11.png", title: "Sub Category Name" },
        

    ];

    const fruits = [
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 1", name: "Olive Oil", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 2", name: "Egg Noodles", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 3", name: "Basket of Eggs", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 4", name: "Tomato Ketchup", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 4", name: "Tomato Ketchup", rating: 4.5, price: 500, originalPrice: 600 }
    ];
    
    const cookings = [
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 1", name: "Olive Oil", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 2", name: "Egg Noodles", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 3", name: "Basket of Eggs", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 4", name: "Tomato Ketchup", rating: 4.5, price: 500, originalPrice: 600 },
        { imageUrl: "./assets/Rectangle 57 (2).png", alt: "Product 4", name: "Tomato Ketchup", rating: 4.5, price: 500, originalPrice: 600 }
    ];

    return (
        <>
            <header className="header">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                
                <div className="search-container">
                    <input type="text" placeholder="What are you looking for?" className="search-input" />
                    <FaSearch className="search-icon" />
                </div>
                
                <div className="location-container" onClick={toggleDropdown}>
                    <FaMapMarkerAlt />
                    <p>Select Location</p>
                    <FaCaretDown className="dropdown-icon" />
                    
                    {/* Dropdown menu */}
                    {showDropdown && (
                        <div className="dropdown">
                            <p className="dropdown-item">New York</p>
                            <p className="dropdown-item">Los Angeles</p>
                            <p className="dropdown-item">Chicago</p>
                        </div>
                    )}
                </div>
                
                <div className="header-actions">
                    <div className="login">
                        <button>Login</button>
                    </div>
                    <div className="wishlist">
                        <FaHeart />
                        <p>Wishlist</p>
                    </div>
                    <div className="cart">
                        <FaShoppingCart />
                        <p>Cart</p>
                    </div>
                </div>
            </header>

  
    {/* Banner */}

            <section className="banner">
                <div className="bannerContent">
                    
                    <img 
                        loading="lazy" 
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e828cc6a0d7b6f6269fa58ec8fa7a9debfd391384b62debf09993490f2db581b?placeholderIfAbsent=true&apiKey=f10116298b6e4a4995d37c761cfbd94f" 
                        className="backgroundImage" 
                        alt=""
                    />

                    <div className="arrow arrow-left">
                        <FaChevronLeft />
                    </div>
                    <h2 className="saleTitle">Sunday Sale!</h2>
                    <h1 className="mainHeading">Shop More, Save More!</h1>
                    <p className="subHeading">Weekend Special: Up to 30% Off</p>
                    <button className="ctaButton">
                        Shop Now
                    </button>
                    <div className="arrow arrow-right">
                        <FaChevronRight />
                    </div>
                </div>
                
            </section>


              
    {/* category */}
            <section className="categoryGrid">
    {categories.map((category, index) => (
        <CategoryItem
            key={index}
            imageUrl={category.imageUrl}
            title={category.title}
            multiLine={category.multiLine}
            wrap={category.wrap}
        />
    ))}
</section>


  
    {/* Top rated product */}

<section className="container">
<div className="headerWithArrows">
<div className="chevronIcon chevronLeft">
    <FaChevronLeft />
  </div>
                <h2 className="title">Top Rated Products</h2>
                <div className="chevronIcon chevronRight">
    <FaChevronRight />
  </div>
</div>
                <div className="productGrid">
                    {topRatedProducts.map((product, index) => (
                        <div key={index} className="productCard">
                            <img
                                src={product.imageUrl}
                                alt={product.alt}
                                className="productImage"
                                loading="lazy"
                            />
                          <div className="productDetails">
  <div className="productNameRating">
    <p className="productName">{product.name}</p>
    <span className="star">{product.rating} ⭐</span>
  </div>
  <span className="litre">1L</span>
  <span className="discountTag">5% OFF</span>
  <div className="productPriceContainer">
    <p className="productPrice">
      ${product.price} <span className="originalPrice">${product.originalPrice}</span>
    </p>
  </div>
</div>


                                <div className="productActions">
                                   
                                    {/* Wishlist icon that toggles between filled and unfilled */}
                                    <div onClick={() => toggleWishlist(index)}>
                                        {wishlist[index] ? (
                                            <FaHeart className="wishlistIcon filled" />
                                        ) : (
                                            <FaRegHeart className="wishlistIcon" />
                                        )}
                                    </div>
                                </div>
                            
                        </div>
                    ))}
                </div>
            </section>

       
         {/* Bakery & Snacks Section */}


         <section className="categorySection">
                <h2 className="bakeryhead">Bakery & Snacks</h2>
                <div className="bakeryGrid">
                    {bakeryItems.map((item, index) => (
                        <div key={index} className="bakeryCard">
                            <img src={item.imageUrl} alt={item.title} className="bakeryImage" />
                            <p className="bakeryTitle">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
  
    {/* Beverages */}


    <section className="beverageSection">
                <h2 className="beverage">Beverage</h2>
                <div className="beverageGrid">
                    {beveragesItems.map((item, index) => (
                        <div key={index} className="beverageCard">
                            <img src={item.imageUrl} alt={item.title} className="beverageImage" />
                            <p className="beverageTitle">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
  
         
  
    {/* fruits & vegetable */}

<section className="fruit">
    <div className= "headerwithfruit">
<div className="chevronIconfriut chevronLeftfruit">
    <FaChevronLeft />
  </div>
                <h2 className="fruittitle">Fruits & vegetables</h2>

                <div className="chevronIconfruit chevronRightfruit">
    <FaChevronRight />
  </div>
  </div>
                <div className="fruitGrid">
                    {fruits.map((product, index) => (
                        <div key={index} className="fruitCard">
                            <img
                                src={product.imageUrl}
                                alt={product.alt}
                                className="fruitImage"
                                loading="lazy"
                            />
                          <div className="fruitDetails">
  <div className="fruitNameRating">
    <p className="fruitName">{product.name}</p>
    <span className="fruitstar">{product.rating} ⭐</span>
  </div>
  <span className="fruitlitre">1L</span>
  <span className="fruitdiscountTag">5% OFF</span>
  <div className="fruitPriceContainer">
    <p className="fruitPrice">
      ${product.price} <span className="fruitoriginalPrice">${product.originalPrice}</span>
    </p>
  </div>
</div>


                                <div className="fruitproductActions">
                                   
                                    {/* Wishlist icon that toggles between filled and unfilled */}
                                    <div onClick={() => toggleWishlist(index)}>
                                        {wishlist[index] ? (
                                            <FaHeart className="fruitwishlistIcon filled" />
                                        ) : (
                                            <FaRegHeart className="fruitwishlistIcon" />
                                        )}
                                    </div>
                                </div>
                            
                        </div>
                    ))}
                </div>
            </section>
            
   
    {/* secondbanner */}

            <section className="secondbanner">
                <div className="secondbannerContent">
                    
                    <img 
                        loading="lazy" 
                        src="./assets/BANNER 2.png" 
                        className="secondbackgroundImage" 
                        alt=""
                    />

                    <div className="arrow arrow-lefttwo">
                        <FaChevronLeft />
                    </div>
                    {/* <h1 className="lowerHeading">Shop More, Save More!</h1>
                    <p className="secondHeading">Weekend Special: Up to 30% Off</p>
                    <button className="staButton">
                        Shop Now
                    </button> */}
                    <div className="arrow arrow-righttwo">
                        <FaChevronRight />
                    </div>
                </div>
                
            </section>
           

  
    {/* cooking oils */}
           

<section className="cooking">
<div className= "headerwithoil">
<div className="chevronIconoil chevronLeftoil">
    <FaChevronLeft />
  </div>
                <h2 className="cookingtitle">COOKING OILS</h2>
                <div className="chevronIconoil chevronRightoil">
    <FaChevronRight />
  </div>
  </div>
                <div className="cookingGrid">
                    {cookings.map((product, index) => (
                        <div key={index} className="cookingCard">
                            <img
                                src={product.imageUrl}
                                alt={product.alt}
                                className="cookingImage"
                                loading="lazy"
                            />
                          <div className="cookingDetails">
  <div className="cookingNameRating">
    <p className="cookingName">{product.name}</p>
    <span className="cookingstar">{product.rating} ⭐</span>
  </div>
  <span className="cookinglitre">1L</span>
  <span className="cookingdiscountTag">5% OFF</span>
  <div className="cookingPriceContainer">
    <p className="cookingPrice">
      ${product.price} <span className="cookingoriginalPrice">${product.originalPrice}</span>
    </p>
  </div>
</div>


                                <div className="cookingActions">
                                   
                                    {/* Wishlist icon that toggles between filled and unfilled */}
                                    <div onClick={() => toggleWishlist(index)}>
                                        {wishlist[index] ? (
                                            <FaHeart className="cookingwishlistIcon filled" />
                                        ) : (
                                            <FaRegHeart className="cookingwishlistIcon" />
                                        )}
                                    </div>
                                </div>
                            
                        </div>
                    ))}
                </div>
            </section>

  
    {/* Footer */}

            <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="path_to_logo" alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam senectus rhoncus nullam massa maecenas. Dui varius ut vel dignissim.</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-terms">
          <h4>Terms & Condition</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-app">
          <a href="#">
            <img src="path_to_google_play_image" alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </footer>
        </>
    );
};

export default Groceryhome;

import React from 'react';
import "./Home.scss"
import Cart from "./cart/Cart";
import Article from "./article/Article";
import {carts, articles} from "../../data";

const HomePage = () => {
    return (
        <main>
            <article className='hero '>
                <section className='container'>
                    <div className='hero__image'></div>
                    <div className='hero__text container--pall'>
                        <h1>
                            Next generation digital banking
                        </h1>
                        <p>
                            Then you financial life online. your easyBank account will be
                            a one-stop-shop for spending, saving, budgeting, investing and much more.
                        </p>
                        <a href="/" className='button hero__cta'>Request Invite</a>
                    </div>
                </section>
                <section className="feature">
                    <div className="feature__content container container--pall">
                        <div className="feature__grid">
                            {/* <- carts -> */}
                            {carts.map(cart => (
                                <Cart cart={cart} key={cart.id}/>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="articles">
                    <div className="article__content container container--pall">
                        <div className="article__grid">
                            {/* <- article ->  */}
                            {articles.map(article => (
                                <Article article={article} key={article.id}/>
                            ))}
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default HomePage;
import React from 'react';
import "./Article.scss"

const Article = ({article}) => {
    return (
        <>
            <a href="/" className="articleCart__item">
                <div
                    className='articleCart__image'
                    style={{backgroundImage: `url('${article.img}')`}}
                ></div>
                <div className="articleCart__text">
                    <div className="articleCart__author">{article.author}</div>
                    <div className='articleCart__title'>
                        {article.title}
                    </div>
                    <div className="articleCart__description">
                        {article.desc}
                    </div>
                </div>
            </a>
        </>
    );
};

export default Article;
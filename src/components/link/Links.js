import React from 'react';

const Links = ({title, path, className} ) => {
    return (
        <a href={path} className={className}>
            {title}
        </a>
    );
};

export default Links;
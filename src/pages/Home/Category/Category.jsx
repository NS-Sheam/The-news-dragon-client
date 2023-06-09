import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    // console.log(id);
    return (
        <div>
            {
                id && id!=0 &&
                <h2>This catagories news is: {categoryNews.length}</h2>
            }
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                    >
                </NewsCard>)
            }
        </div>
    );
};

export default Category;
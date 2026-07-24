import { useParams } from "react-router-dom";
import news from "../data/NewsData";
import banner from "../assets/newsBanner.jpg";

const NewsDetails = () => {

    const { id } = useParams();

    const article = news.find(
        (item) => item.id === Number(id)
    );

    return (

        <div className="min-h-screen bg-[#FDF6ED] p-10">

             <img
 src={article.detailImage}
 className="w-full h-[400px] object-cover rounded-xl"
/>

            <h1 className="text-5xl font-bold mt-8">

                {article.title}

            </h1>

            <p className="text-gray-500 mt-3">

                {article.category}

            </p>

            <p className="mt-6 text-lg leading-8">

                {article.description}

            </p>

           <p className="mt-6 text-lg leading-8">

                {article.content}

            </p>
        </div>

    );
};

export default NewsDetails;
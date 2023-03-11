import React  from "react";
import {useEffect, useState} from "react";
import {getTrending} from "../../redux/actions/entertainmentAction";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const {trending, trendingNumberOfPages} = useSelector(state=> state.entertainment);

    useEffect(()=>{
        dispatch(getTrending(page))
    },[page]);

    return (
        <div className="container">
            <span className="pageTitle">Trending today</span>

            <div className="trending">
                <div className="row">
                    {trending?.map((item, index)=>(
                        <div className="col-md-3" key={item.id} >
                           <SingleContent
                               id={item.id}
                               poster={item.poster_path}
                               title={item.title || item.name}
                               date={item.first_air_date || item.release_date}
                               media_type={item.media_type}
                               vote_average={item.vote_average}
                           />
                        </div>
                    ))}
                </div>
            </div>
            {
                trendingNumberOfPages > 1 ?

                    <CustomPagination page={page} setPage={setPage} numberOfPages={trendingNumberOfPages}/>

                    : ""
            }
        </div>
    );
};

export default Trending;
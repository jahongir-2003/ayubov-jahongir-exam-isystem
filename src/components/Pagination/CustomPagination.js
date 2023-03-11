import React, {useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import "./Pagination.css";

const CustomPagination = ({page, setPage, numberOfPages }) => {

    const handleChangePage = (event, newPage) => {
        window.scroll(0,0);
        setPage(newPage);
    };

    return (
        <div className="d-flex align-items-center justify-content-center my-4">
            <Pagination
                page={page}
                variant="outlined"
                shape="rounded"
                count={numberOfPages}
                onChange={handleChangePage}
            />
        </div>
    );
};

export default CustomPagination;
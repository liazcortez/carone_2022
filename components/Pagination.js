import React from 'react'
import Pagination from "@material-ui/lab/Pagination"
import { Box } from '@mui/material'

const StyledPaginatino = ({total, page, changePage, limit}) => {
    return (
        <Box display='flex' justifyContent='center' p={5}>
            <Pagination count={Math.ceil(total / limit)} page={parseInt(page)} onChange={changePage}/>
        </Box>
    )
}

export default StyledPaginatino

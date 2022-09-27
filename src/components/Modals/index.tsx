import React, {Dispatch, SetStateAction} from 'react';
import EditCart from "../EditCart";
import Box from "@mui/material/Box";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {editCell} from '../../redux/scheduleDataSlice'

interface MsProps {
    openEditCart: boolean;
    handleCloseEditCart: () => void;
    setShowRuble: Dispatch<SetStateAction<boolean>>;
    setShowPeople: Dispatch<SetStateAction<boolean>>;
    setShowClock: Dispatch<SetStateAction<boolean>>;
}

const Modals = ({openEditCart, handleCloseEditCart, setShowRuble, setShowPeople, setShowClock}: MsProps) => {
    return (
        <Box>
            <EditCart
                open={openEditCart}
                onClose={handleCloseEditCart}
            />
        </Box>
    );
};

export default Modals;
import React, {useState} from 'react';
import ScheduleButtonGroup from "../ScheduleButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ScheduleInfo from "../ScheduleInfo";
import Modals from "../Modals";
import {IDataScheduleItem} from '../Data';

interface IProps {
    data: IDataScheduleItem
}

const ScheduleCell = ({ data }: IProps) => {
    const [showControl, setShowControl] = useState(false);

    /*modals control handlers*/
    const [openEditCart, setOpenEditCart] = useState(false);
    const handleOpenEditCart = () => {
        setOpenEditCart(true);
        setShowControl(false);
    };
    const handleCloseEditCart = () => {
        setOpenEditCart(false);
    };

    /*local state for schedule info*/
    const [showRuble, setShowRuble] = useState(true)
    const [showPeople, setShowPeople] = useState(false)
    const [showClock, setShowClock] = useState(false)


    return (
        <Box
            onMouseEnter={() => setShowControl(true)}
            onMouseLeave={() => setShowControl(false)}
            sx={{
                position: 'relative',
                margin: '80px 0 0 20px',
                padding: '10px 20px',
                borderRadius: '6px',
                backgroundColor: '#e3edff',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}
            >
                <Typography  component="span">{data.begin}</Typography>
                <Typography >-</Typography>
                <Typography component="span">{data.end}</Typography>
                <Typography>(55)</Typography>
            </Box>
            <Box>
                <Typography variant='h6' component="span">{data.training}</Typography>
            </Box>
            <Box>
                <Typography component="span" >{data.coach}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '30px'
                }}
            >
                <Typography component="span">{data.hall}</Typography>
                <ScheduleInfo showRuble={showRuble} showPeople={showPeople} showClock={showClock}/>
            </Box>
            <ScheduleButtonGroup showControl={showControl} handleOpenEditCart={handleOpenEditCart}/>
            <Modals
                openEditCart={openEditCart}
                handleCloseEditCart={handleCloseEditCart}
                setShowRuble={setShowRuble}
                setShowPeople={setShowPeople}
                setShowClock={setShowClock}
            />
        </Box>
    );
};

export default ScheduleCell;
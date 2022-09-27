import React from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

interface SIProps {
    showRuble: boolean;
    showPeople: boolean;
    showClock: boolean;
}

const ScheduleInfo = ({showRuble, showPeople, showClock}: SIProps) => {
    const iconStyle = {
        borderRadius: '50%',
        backgroundColor: "#fff !important",
        padding: '2px',
        marginRight: '16px',
        color: '#000 !important'
    }

    return (
        <Box
            sx={{

            }}
        >
            <IconButton
                edge="start"
                disabled={true}
                disableRipple={true}
                sx={
                    {
                        ...iconStyle,
                        display: showRuble ? 'inline-flex' : 'none',
                    }
                }
            >
                <CurrencyRubleIcon/>
            </IconButton>
            <IconButton
                edge="start"
                disabled={true}
                disableRipple={true}
                sx={
                    {
                        ...iconStyle,
                        display: showPeople ? 'inline-flex' : 'none',
                    }
                }
            >
                <PeopleIcon/>
            </IconButton>
            <IconButton
                edge="start"
                disabled={true}
                disableRipple={true}
                sx={
                    {
                        ...iconStyle,
                        display: showClock ? 'inline-flex' : 'none',
                    }
                }
            >
                <AccessTimeIcon/>
            </IconButton>
        </Box>
    );
};

export default ScheduleInfo;
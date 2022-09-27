import {useState} from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';



interface IProps {
    showControl: boolean;
    handleOpenEditCart: () => void;
}

const ScheduleButtonGroup = ({showControl,handleOpenEditCart }:IProps) => {

    return (
        <ButtonGroup
            variant="contained"
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                display: showControl ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2px 20px',
                backgroundColor: '#ed7171',
                maxWidth: '160px',
                width: '100%'

            }}
        >
            <IconButton
                edge="start"
            >
                <ContentCopyOutlinedIcon sx={{ color: '#fff'}}/>
            </IconButton>
            <IconButton
                onClick={handleOpenEditCart}
            >
                <EditOutlinedIcon sx={{color: '#fff'}}/>
            </IconButton>
            <IconButton
                edge="end"
                color="inherit"
            >
                <DeleteForeverOutlinedIcon sx={{color: '#f6f1f1'}}/>
            </IconButton>
        </ButtonGroup>
    );
};

export default ScheduleButtonGroup;
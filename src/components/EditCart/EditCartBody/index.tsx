import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ISelect from "./ISelect";
import IRadio from "./IRadio";
import {trainingData, hallData, departmentData} from "../../Data";
import classes from './editCartBodu.module.scss';
import {editCell} from "../../../redux/scheduleDataSlice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

const EditCartBody = () => {
    const [formData, setFormData] = useState()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        /*setFormData(data)*/
    };
    /*useAppDispatch(editCell()) ;*/
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={
                {
                    display: 'grid',
                    padding: '10px 20px',
                    gap: '20px',
                }
            }
        >
            <TextField
                fullWidth
                id="checkCoach"
                label="Выберите тренера:"
                name="checkCoach"
                autoComplete="checkCoach"
                autoFocus
                sx={
                    {
                        gridColumn: '1/2',
                        gridRow: '1/2',
                    }
                }
            />
            <TextField
                id="begin-training"
                label="Начало занятия"
                type="datetime-local"
                defaultValue="2022-09-23T08:30"
                sx={
                    {
                        gridColumn: '2/3',
                        gridRow: '1/2',
                    }
                }
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="end-training"
                label="Конец занятия"
                type="datetime-local"
                defaultValue="2022-09-23T09:30"
                sx={
                    {
                        gridColumn: '2/3',
                        gridRow: '2/3'
                    }
                }
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <ISelect labelName="Выберите тренеровку:" selectData={trainingData} className={classes['selectT']}/>
            <ISelect labelName="Департамент:" selectData={departmentData} className={classes.selectD}/>
            <ISelect labelName="Выберите зал:" selectData={hallData} className={classes.selectH}/>
            <IRadio className={classes.radio} />
            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt: 3, mb: 2,
                    gridColumn: '1/3',
                    gridRow: '5/6',
                    alignSelf: 'center',
                    justifySelf: 'center',
                    width: '460px'
                }}
            >
                Изменить
            </Button>
        </Box>
    );
};

export default EditCartBody;
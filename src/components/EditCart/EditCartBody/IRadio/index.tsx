import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from "@mui/material/Checkbox";

interface IProps {
    className: string
}

const IRadio = ({className}: IProps) => {
    console.log(className)
    return (
        <FormControl className={className}>
            <FormLabel id="markers">Маркеры</FormLabel>
                <FormControlLabel value="ruble" control={<Checkbox />} label="Платная" />
                <FormControlLabel value="people" control={<Checkbox />} label="Малая группа" />
                <FormControlLabel value="clock" control={<Checkbox />} label="Запись" />
        </FormControl>
    );
}

export default IRadio;
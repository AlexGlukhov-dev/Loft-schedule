import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface IData {
    id: string;
    value: string;
    name: string
}

interface IProps {
    selectData: IData[];
    labelName: string;
    className: string;
}

const ISelect = ({selectData, labelName, className}: IProps) => {
    const [training, setTraining] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTraining(event.target.value as string);
    };
    return (
        <FormControl fullWidth className={className}>
            <InputLabel id={labelName + "-label"}>{labelName}</InputLabel>
            <Select
                labelId={labelName + "-label"}
                id={labelName}
                value={training}
                label={labelName}
                onChange={handleChange}
            >
                {selectData.map(field => <MenuItem key={field.id} value={field.value}>{field.name}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default ISelect;
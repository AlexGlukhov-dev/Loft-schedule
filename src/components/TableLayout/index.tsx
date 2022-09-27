import React from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const TableLayout = () => {
    return (
        <TableHead>
            <TableRow />
            <TableRow />
        </TableHead>
    )
};

export default TableLayout;
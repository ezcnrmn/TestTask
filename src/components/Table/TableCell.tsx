import React from 'react';
import { Segment } from './TableRow';

interface TableCellProps {
	type?: Segment;
	children: React.ReactNode;
}
const TableCell: React.FC<TableCellProps> = ({ type = 'body', children }) => {
	return type === 'body' ? <td>{children}</td> : <th>{children}</th>;
};

export default TableCell;

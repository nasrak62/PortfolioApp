import TableRow from './TableRow';

const TableBody = (props) => {
  return (
    <tbody>
      {props?.data?.map((item, index) => {
        return (
          <TableRow
            key={`TableRow-${item}-${index}`}
            item={item}
            index={index}
            {...props}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;

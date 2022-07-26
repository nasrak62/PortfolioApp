import { classes as innerClasses, StyledTable } from "./Table.style";
import { isEmpty } from "utils/lodash";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({
  data,
  setData,
  inputs = null,
  attrs,
  classes,
  onChange,
  onDelete,
  editLink = null,
  showDelete = true,
  showUpdate = true,
}) => {
  const displayClasses = { ...innerClasses, classes };

  if (isEmpty(data)) {
    return null;
  }

  return (
    <StyledTable className={displayClasses.container}>
      <TableHead
        classes={displayClasses}
        attrs={attrs}
        showDelete={showDelete}
        showUpdate={showUpdate}
      />
      <TableBody
        data={data}
        setData={setData}
        inputs={inputs}
        attrs={attrs}
        classes={displayClasses}
        onChange={onChange}
        onDelete={onDelete}
        editLink={editLink}
        showDelete={showDelete}
        showUpdate={showUpdate}
      />
    </StyledTable>
  );
};

export default Table;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./movielist.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Nav from "../Nav";
import swal from "sweetalert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "no", label: "N0", minWidth: 10 },
  { id: "Poster", label: "Poster", minWidth: 20 },
  {
    id: "Title",
    label: "Title",
    minWidth: 20,
  },
  {
    id: "Desc",
    label: "Desc",
    minWidth: 20,
  },
  {
    id: "Date",
    label: "Date",
    minWidth: 20,
  },
  {
    id: "rating",
    label: "Rating",
    minWidth: 20,
  },

  {
    id: "action",
    label: "Action",
    maxWidth: 60,
  },
];

function Movielist2() {
  const [view, setview] = useState([]);

  const getMovie = async () => {
    try {
      const res = await axios.get(
        "https://netflix-app-clone-1.herokuapp.com/movies"
      );
      setview(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  let handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://netflix-app-clone-1.herokuapp.com/movies/${id}`)
          .then(() => {
            getMovie();
          });

        swal(" movie has been deleted!", {
          icon: "success",
          timer: 3000,
        });
      } else {
      }
    });
  };
  useEffect(() => {
    getMovie();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Nav />
      <Paper
        className="table-head  css-serial"
        sx={{ width: "100%", overflow: "hidden" }}
      >
        <TableContainer sx={{ maxHeight: 545 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell>{column.label}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {view
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow role="checkbox" tabIndex={-1}>
                      <TableCell></TableCell>
                      <TableCell>
                        <img src={row.poster} className="list-img" alt="" />
                      </TableCell>
                      <TableCell>{row.Title}</TableCell>
                      <TableCell className="list-desc">{row.desc}</TableCell>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.rating}</TableCell>

                      <TableCell>
                        <div className="list-btn-head">
                          <span>
                            <button type="button" class="list-btn-edit  bttn">
                              Edit
                            </button>
                          </span>
                          <button
                            type="button"
                            className="list-btn-delete  bttn"
                            onClick={() => handleDelete(row._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={view.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default Movielist2;

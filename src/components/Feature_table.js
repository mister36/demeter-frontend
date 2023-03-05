import React, { useEffect, useState } from "react";
import * as ethers from "ethers";
import * as luxon from "luxon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Box } from "@mui/system";
import styled from "styled-components";

const TableDiv = styled.div`
    span {
        display: block;
        font-size: 1.2em;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 500;
        padding: 5px 0px;
    }
    p {
        color: #fff;
        font-weight: 500;
    }
`;
function createData(
    id,
    img,
    symboltitle,
    sgd,
    interestttle,
    interest,
    yearntitle,
    year,
    statustitle,
    status,
    timelefttitle,
    timelft,
    quantityTitle,
    quantity
) {
    return {
        id,
        img,
        symboltitle,
        sgd,
        interestttle,
        interest,
        yearntitle,
        year,
        statustitle,
        status,
        timelefttitle,
        timelft,
        quantityTitle,
        quantity,
    };
}

// const rows = [
//   createData(
//     1,
//     `${grpNft}`,
//     "Symbol",
//     "SGD / USD",
//     "Interest",
//     "3.2%",
//     "Tenor",
//     "1 year",
//     "Status",
//     "Upcoming",
//     "Time Left",
//     "5h 24m 02s",
//     "Quantity",
//     "5000 lots"
//   ),
//   createData(
//     2,
//     `${grpNft}`,
//     "Symbol",
//     "SGD / USD",
//     "Interest",
//     "3.2%",
//     "Tenor",
//     "1 year",
//     "Status",
//     "Upcoming",
//     "Time Left",
//     "5h 24m 02s",
//     "Quantity",
//     "5000 lots"
//   ),
//   createData(
//     3,
//     `${grpNft}`,
//     "Symbol",
//     "SGD / USD",
//     "Interest",
//     "3.2%",
//     "Tenor",
//     "1 year",
//     "Status",
//     "Upcoming",
//     "Time Left",
//     "5h 24m 02s",
//     "Quantity",
//     "5000 lots"
//   ),
//   createData(
//     4,
//     `${grpNft}`,
//     "Symbol",
//     "SGD / USD",
//     "Interest",
//     "3.2%",
//     "Tenor",
//     "1 year",
//     "Status",
//     "Upcoming",
//     "Time Left",
//     "5h 24m 02s",
//     "Quantity",
//     "5000 lots"
//   ),
//   createData(
//     5,
//     `${grpNft}`,
//     "Symbol",
//     "SGD / USD",
//     "Interest",
//     "3.2%",
//     "Tenor",
//     "1 year",
//     "Status",
//     "Upcoming",
//     "Time Left",
//     "5h 24m 02s",
//     "Quantity",
//     "5000 lots"
//   ),
//   createData(
//     6,
//     `${grpNft}`,
//     "Symbol",
//     "SGD / USD",
//     "Interest",
//     "3.2%",
//     "Tenor",
//     "1 year",
//     "Status",
//     "Upcoming",
//     "Time Left",
//     "5h 24m 02s",
//     "Quantity",
//     "5000 lots"
//   ),
// ];

export default function FeatureTable({ auctions, signer }) {
    const [rows, setRows] = useState([]);

    // pull extraneous data on auctions
    // useEffect(() => {
    //     if (signer && auctions) {
    //         const fillRows = async () => {
    //             Promise.all(
    //                 auctions.map(async (auction, index) => {
    //                     const bond = new ethers.Contract(
    //                         auction.auctioningToken,
    //                         bondAbi,
    //                         signer
    //                     );

    //                     const symbol = await bond.symbol();
    //                     const maturity = await bond.maturity();

    //                     const timeLeft = luxon.DateTime.fromISO(
    //                         luxon.DateTime.fromSeconds(maturity.toNumber())
    //                     )
    //                         .diffNow(["days", "hours"])
    //                         .toHuman();
    //                     // .match(/.*(?=\.)/g);

    //                     console.log("ma", maturity.toNumber());

    //                     const data = createData(
    //                         index,
    //                         // `${grpNft}`,
    //                         "Symbol",
    //                         `${symbol} / USD`,
    //                         "Interest",
    //                         "3.2%",
    //                         "Tenor",
    //                         "1 year",
    //                         "Status",
    //                         "Upcoming",
    //                         "Time Left",
    //                         timeLeft,
    //                         "Quantity",
    //                         "5000 lots"
    //                     );
    //                     return data;
    //                 })
    //             ).then((all) => {
    //                 setRows(all);
    //             });
    //         };

    //         fillRows();
    //     }
    // }, [signer, auctions]);

    useEffect(() => {
        console.log(rows);
    }, [rows]);
    return (
        <TableDiv>
            <TableContainer
                component={Paper}
                sx={{
                    background:
                        "linear-gradient(270deg, #1B2538 0%, rgba(38, 41, 56, 0.81) 120.47%)",
                    boxShadow: "0px",
                    borderRadius: "10px",
                    padding: "10px",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,.2)",
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "40px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src={row.img}
                                            alt=""
                                            className="imgwidth"
                                        />
                                        <Box>
                                            <span>{row.symboltitle}</span>
                                            <p>{row.sgd}</p>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.interestttle}</span>
                                        <p>{row.interest}</p>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.yearntitle}</span>
                                        <p>{row.year}</p>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.statustitle}</span>
                                        <p>{row.status}</p>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.timelefttitle}</span>
                                        <p>{row.timelft}</p>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        paddingRight: "40px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "15px",
                                            alignItems: "center",
                                            justifyContent: "right",
                                        }}
                                    >
                                        <Box>
                                            <span>{row.quantityTitle}</span>
                                            <p>{row.quantity}</p>
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: "3em",
                                                color: "#fff",
                                            }}
                                        >
                                            <BsArrowRightSquareFill />
                                        </Box>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableDiv>
    );
}

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

import usdr from "./usdr.svg";
import maple from "./maple.png";
import goldfinch from "./goldfinch.webp";
import ondo from "./ondo.png";

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

export default function FeatureTable({ auctions, signer }) {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows([
            createData(
                1,
                `${usdr}`,
                "Name",
                "Tangible USDR",
                "Interest",
                "9%",
                "Timeframe",
                "1 year",
                "Status",
                "Current",
                "Time Left",
                "5h 24m 02s",
                "Liquidity",
                "$2,832,247.72"
            ),
            createData(
                2,
                `${maple}`,
                "Name",
                "Maple Finance M11",
                "Interest",
                "6.64%",
                "Timeframe",
                "3 year",
                "Status",
                "Current",
                "Time Left",
                "24h 24m 02s",
                "Liquidity",
                "$32,106,329.12"
            ),
            createData(
                3,
                `${goldfinch}`,
                "Name",
                "Goldfinch Senior Pool",
                "Interest",
                "7.5%",
                "Timeframe",
                "4 year",
                "Status",
                "Current",
                "Time Left",
                "18h 24m 02s",
                "Liquidity",
                "$10,184,312.21"
            ),
            createData(
                4,
                `${ondo}`,
                "Name",
                "Ondo Finance OUSG",
                "Interest",
                "6.7%",
                "Timeframe",
                "10 year",
                "Status",
                "Current",
                "Time Left",
                "100h 24m 02s",
                "Liquidity",
                "$23,853,208.10"
            ),
        ]);
    }, []);

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
                                            style={{
                                                width: "35px",
                                                background: "white",
                                                borderRadius: "17.5px",
                                            }}
                                        />
                                        <Box>
                                            <span>{row.symboltitle}</span>
                                            <p
                                                style={{
                                                    fontWeight: "700",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                {row.sgd}
                                            </p>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.interestttle}</span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                            }}
                                        >
                                            {row.interest}
                                        </p>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.yearntitle}</span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                            }}
                                        >
                                            {row.year}
                                        </p>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.statustitle}</span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                            }}
                                        >
                                            {row.status}
                                        </p>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span>{row.timelefttitle}</span>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                            }}
                                        >
                                            {row.timelft}
                                        </p>
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

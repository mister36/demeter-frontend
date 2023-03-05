import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
const Dot = styled.div`
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
`;
const FeatureH1 = styled.h1`
    font-size: 2em;
    font-weight: 300;
`;
const Hr = styled.hr`
    background: rgba(255, 255, 255, 0.12);
    height: 2px;
    width: 100%;
    border: none;
`;
const TypoH2 = styled.h1`
    font-size: 1.1em;
    font-weight: 600;
`;
const TypoH3 = styled.h3`
    font-size: 1em;
    font-weight: 400;
    padding-top: 5px;
`;
const TimeP = styled.p`
    font-size: 0.9em;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.04);
    padding: 2px 7px;
    border-radius: 5px;
`;
function Feature_searchbar() {
    return (
        <div>
            {" "}
            <FeatureH1>Featured Auctions</FeatureH1>
            <Box
                sx={{
                    padding: "25px 0px 25px",
                }}
            >
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item md={3}>
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to left, #21232f 5.89%,rgba(40, 46, 77, .4) 86.41%)",
                                border: " 1px solid rgba(255, 255, 255, 0.12)",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "15px 20px",
                                    alignItems: "center",
                                }}
                            >
                                <TypoH2>SGD / USD</TypoH2>
                                <TimeP>5h 24m 02s</TimeP>
                            </Box>
                            <Hr></Hr>
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "15px 20px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: " rgba(255, 255, 255, 0.55)",
                                        }}
                                    >
                                        <span>3%</span>
                                        <Dot></Dot>
                                        <span>1 year</span>
                                    </Box>
                                    <TypoH3>$2,832,247.72</TypoH3>
                                </Box>
                                <Box
                                    sx={{
                                        width: "60px",
                                    }}
                                >
                                    {/* <img src={grpNft} alt="" /> */}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to left, #21232f 5.89%,rgba(40, 46, 77, .4) 86.41%)",
                                border: " 1px solid rgba(255, 255, 255, 0.12)",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "15px 20px",
                                    alignItems: "center",
                                }}
                            >
                                <TypoH2>SGD / USD</TypoH2>
                                <TimeP>5h 24m 02s</TimeP>
                            </Box>
                            <Hr></Hr>
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "15px 20px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: " rgba(255, 255, 255, 0.55)",
                                        }}
                                    >
                                        <span>3%</span>
                                        <Dot></Dot>
                                        <span>1 year</span>
                                    </Box>
                                    <TypoH3>$2,832,247.72</TypoH3>
                                </Box>
                                <Box
                                    sx={{
                                        width: "60px",
                                    }}
                                >
                                    {/* <img src={grpNft} alt="" /> */}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to left, #21232f 5.89%,rgba(40, 46, 77, .4) 86.41%)",
                                border: " 1px solid rgba(255, 255, 255, 0.12)",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "15px 20px",
                                    alignItems: "center",
                                }}
                            >
                                <TypoH2>SGD / USD</TypoH2>
                                <TimeP>5h 24m 02s</TimeP>
                            </Box>
                            <Hr></Hr>
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "15px 20px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: " rgba(255, 255, 255, 0.55)",
                                        }}
                                    >
                                        <span>3%</span>
                                        <Dot></Dot>
                                        <span>1 year</span>
                                    </Box>
                                    <TypoH3>$2,832,247.72</TypoH3>
                                </Box>
                                <Box
                                    sx={{
                                        width: "60px",
                                    }}
                                >
                                    {/* <img src={grpNft} alt="" /> */}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to left, #21232f 5.89%,rgba(40, 46, 77, .4) 86.41%)",
                                border: " 1px solid rgba(255, 255, 255, 0.12)",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "15px 20px",
                                    alignItems: "center",
                                }}
                            >
                                <TypoH2>SGD / USD</TypoH2>
                                <TimeP>5h 24m 02s</TimeP>
                            </Box>
                            <Hr></Hr>
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "15px 20px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: " rgba(255, 255, 255, 0.55)",
                                        }}
                                    >
                                        <span>3%</span>
                                        <Dot></Dot>
                                        <span>1 year</span>
                                    </Box>
                                    <TypoH3>$2,832,247.72</TypoH3>
                                </Box>
                                <Box
                                    sx={{
                                        width: "60px",
                                    }}
                                >
                                    {/* <img src={grpNft} alt="" /> */}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Feature_searchbar;

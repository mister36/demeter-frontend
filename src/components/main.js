import React, { useState, useEffect } from "react";
import * as ethers from "ethers";
import { setup, SwapService } from "@liquality/wallet-sdk";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import logo from "../images/flogo.png";
import roundlogo from "../images/roundlogo.png";

import { FiHome } from "react-icons/fi";
import styled from "styled-components";
import { TiEqualsOutline } from "react-icons/ti";
import { ImHammer2 } from "react-icons/im";
import { IoMdLock } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import { IoShapesOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import FeatureTable from "./Feature_table";
import { BiMoon } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Feature_searchbar from "./Feature_searchbar";
import Swap from "./Swap";

const setupSDK = () => {
    const { REACT_APP_ALCHEMY, REACT_APP_POLYGONSCAN, REACT_APP_INFURA } =
        process.env;
    setup({
        alchemyApiKey: REACT_APP_ALCHEMY,
        etherscanApiKey: REACT_APP_POLYGONSCAN,
        infuraProjectId: REACT_APP_INFURA,
        pocketNetworkApplicationID: "-",
        quorum: 1,
        slowGasPriceMultiplier: 1,
        averageGasPriceMultiplier: 1.5,
        fastGasPriceMultiplier: 2,
        gasLimitMargin: 2000,
    });
};

const drawerWidth = 240;
const Ul = styled.ul`
    list-style: none;
    padding: 10px 10px;
    li {
        padding: 0px 0px;
    }
    a {
        text-decoration: none;
    }
`;

const BtmHR = styled.hr`
    background: rgba(255, 255, 255, 0.12);
    height: 1px;
    width: 100%;
    border: none;
`;

const FeatureH1 = styled.h1`
    font-size: 2em;
    font-weight: 300;
`;

const Search = styled.div`
    position: relative;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.08);
    /* "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  }, */
    margin-left: 0;
    width: "100%";
    input {
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
        padding: 15px 20px 15px 45px;
        font-family: "Inter", sans-serif;
        color: #fff;
        font-size: 1.1em;
    }
`;
const SearchIcon = styled.div`
    position: absolute;
    border-radius: 5px;
    top: 23%;
    left: 10px;
    margin-left: 0;
    font-size: 1.6em;
    width: "100%";
    color: rgba(255, 255, 255, 0.5);
`;
const BtnHdr = styled.button`
    border-radius: 5px;
    font-size: 1.6em;
    color: rgba(255, 255, 255, 0.5);
    border: none;
    width: 30px;
    height: 30px;
    background: rgba(60, 62, 75, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 1.1em;
    display: grid;
    place-content: center;
    cursor: pointer;
    &:nth-child(3) {
        color: #659beb;
    }
    &:last-child {
        width: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 10px;
        gap: 5px;
        img {
            width: 20px;
            border-radius: 50%;
            height: 20px;
        }
        span {
            font-size: 0.84em;
            color: #fff;
        }
    }
`;

const drawer = (
    <Box>
        <img src={logo} alt="" className="sideBarlogo" />
        <Ul>
            <li>
                <a href="#">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            "&:hover": { backgroundColor: "#1B2538" },
                            padding: "8px 15px",
                            borderRadius: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                color: "rgba(255,255,255,0.8)",
                                fontSize: "1.1em",
                            }}
                        >
                            <FiHome />
                            <p>Home</p>
                        </Box>
                    </Box>
                </a>
            </li>
            <li>
                <a href="#">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            "&:hover": { backgroundColor: "#1B2538" },
                            padding: "8px 15px",
                            borderRadius: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                color: "rgba(255,255,255,0.8)",
                                fontSize: "1.1em",
                            }}
                        >
                            <TiEqualsOutline />
                            <p>Deals</p>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "30px",
                                height: "30px",
                                color: "rgba(255,255,255,0.6)",
                                background: "rgba(0,0,0,.15)",
                            }}
                        >
                            <span>9</span>
                        </Box>
                    </Box>
                </a>
            </li>
            <li>
                <a href="#">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            "&:hover": { backgroundColor: "#1B2538" },
                            padding: "8px 15px",
                            borderRadius: "5px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                color: "rgba(255,255,255,1)",
                                fontSize: "1.1em",
                            }}
                        >
                            <ImHammer2 />
                            <p>Auction</p>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "30px",
                                height: "30px",
                                color: "rgba(255,255,255,1)",
                                background: "rgba(0,0,0,.15)",
                            }}
                        >
                            <IoMdLock />
                        </Box>
                    </Box>
                </a>
            </li>
        </Ul>
        <Box
            sx={{
                background: " rgba(60, 62, 75, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "6px",
                margin: "0px 15px",
            }}
        >
            <Ul>
                <li>
                    <a href="#">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "15px 0px 5px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: "1.1em",
                                }}
                            >
                                <BsGrid />
                                <p>Products</p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "30px",
                                    height: "30px",
                                    color: "rgba(255,255,255,0.6)",
                                    background: "rgba(0,0,0,.15)",
                                }}
                            >
                                <IoIosArrowUp />
                            </Box>
                        </Box>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "15px 0px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: "1.1em",
                                }}
                            >
                                <SlDiamond />
                                <p>LP</p>
                            </Box>
                        </Box>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "5px 0px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    color: "rgba(255,255,255,1)",
                                    fontSize: "1.1em",
                                }}
                            >
                                <IoShapesOutline />
                                <p>Structured</p>
                            </Box>
                        </Box>
                    </a>
                </li>
            </Ul>
        </Box>
    </Box>
);

function Main(props) {
    const [signer, setSigner] = useState({});
    const [address, setAddress] = useState("");
    const [auctionContract, setAuctionContract] = useState();
    const [auctions, setAuctions] = useState([]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const tokenAddresses = {
        MATIC: "0x0000000000000000000000000000000000000000",

        WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    };

    const container =
        window !== undefined ? () => window.document.body : undefined;

    const [swapVisible, setSwapVisible] = useState(false);

    useEffect(() => {
        setupSDK();
    }, []);

    useEffect(() => {
        const getQuote = async () => {
            const quote = await SwapService.getQuote({
                srcChainId: 137,
                srcChainTokenIn: tokenAddresses.MATIC,
                srcChainTokenInAmount: ethers.BigNumber.from(10)
                    .pow(18)
                    .toString(),
                dstChainId: 137,
                dstChainTokenOut: tokenAddresses.WMATIC,
            });
            console.log(quote.minAmount);
        };

        getQuote();
    }, []);

    return (
        <div sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    background:
                        "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
                    color: "#fff",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0px 0px 0px transparent",

                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                            gap: "12px",
                        }}
                    >
                        <BtnHdr>
                            <BiMoon />
                        </BtnHdr>
                        <BtnHdr>
                            <BsBellFill />
                        </BtnHdr>
                        <BtnHdr>
                            <FaEthereum />
                        </BtnHdr>
                        <BtnHdr>
                            <img src={roundlogo} alt="" />
                            <span>{address || "0x00..00"}</span>
                        </BtnHdr>
                    </Box>
                </Toolbar>
            </AppBar>
            <div
                component="nav"
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                {/* <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            background:
                                "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
                            color: "#fff",
                            borderRight: "1px solid rgba(255, 255, 255, 0.12)",
                        },
                    }}
                >
                    {drawer}
                </Drawer> */}
                {/* <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            background:
                                "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
                            color: "#fff",
                            borderRight: " 1px solid rgba(255, 255, 255, 0.12)",
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer> */}
            </div>
            {swapVisible ? <Swap /> : null}

            <Box
                component="main"
                sx={{
                    background:
                        "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
                    color: "#fff",
                }}
            >
                {/* features section */}
                <Box
                    sx={{
                        marginLeft: "auto",
                        p: 3,
                        paddingTop: "110px",
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Feature_searchbar setSwapVisible={setSwapVisible} />
                </Box>
                <BtmHR></BtmHR>
                {/* Auctions */}
                <Box
                    sx={{
                        padding: "30px 0px",
                        marginLeft: "auto",
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <FeatureH1>Vaults</FeatureH1>

                    {/* searchbar */}
                    <Box
                        sx={{
                            width: "100%",
                            padding: "30px 0px",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Search>
                                    <SearchIcon>
                                        <BiSearch />
                                    </SearchIcon>
                                    <input
                                        type="Search"
                                        placeholder="Search..."
                                    />
                                </Search>
                            </Grid>
                            <Grid item xs={3}>
                                <Select
                                    placeholder="Upcoming Offerings"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        background: "#383b47",
                                        color: "#fff",
                                        fontWeight: "800",
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: "0.2s",
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: "rotate(-180deg)",
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: "#fff",
                                            color: "#000",
                                            padding: "0px",
                                            margin: "0px",
                                        }}
                                    >
                                        <Option
                                            sx={{
                                                background: "#fff",
                                                color: "#000",
                                            }}
                                            value="dog"
                                        >
                                            Upcoming
                                        </Option>
                                        <Option
                                            sx={{
                                                background: "#fff",
                                                color: "#000",
                                            }}
                                            value="fish"
                                        >
                                            Coming
                                        </Option>
                                        <Option
                                            sx={{
                                                background: "#fff",
                                                color: "#000",
                                            }}
                                            value="bird"
                                        >
                                            Interest
                                        </Option>
                                    </Box>
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>
                    <FeatureTable auctions={auctions} signer={signer} />
                </Box>
            </Box>
        </div>
    );
}

export default Main;

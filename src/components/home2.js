import "./home2.css"
import more from '../assets/more.png'
import eth_logo from '../assets/eth_logo.png'
import down_arrow from '../assets/down_arrow.png'
import magnify from '../assets/magnify.png'
import swap from '../assets/swap.png'

const DemeterDesktop = () => {
    return (
        <div className="background h-fill overflow-clip">
            <div className="flex flex-row justify-between h-20 items-center px-16">
                <div>
                    <p className="text-md font-bold text-white ">D</p>
                </div>
                <div className="flex flex-row space-x-8 h-10 nice-purple-color">
                    <div class="flex items-center hover:text-white">
                        <p>Lend</p>
                    </div>
                    <div class="flex items-center hover:text-white">
                        <p>Earn</p>
                    </div>
                    <div class="flex items-center hover:text-white">
                        <p>Borrow</p>
                    </div>
                    <div class="flex items-center hover:text-white">
                        <p>Pool</p>
                    </div>
                </div>
                <div className="w-96  h-8 flex items-center searchbox rounded-md justify-between px-2">
                    <img src={magnify} className="h-6 opacity-50"></img>
                    <p className="nice-purple-color font-light">
                        Lending and RWA Yield
                    </p>
                    <div></div>
                </div>
                <div className="flex flex-row items-center space-x-8">
                    <img src={more} className="h-6"></img>
                    <div className="flex flex-row items-center space-x-6">
                        <div className="flex flex-row space-x-1 items-center">
                            <img src={eth_logo} className="h-8"></img>
                            <p className="text-md font-medium text-white">Ethereum</p>
                        </div>
                    </div>
                    <button className="items-center rounded-full header-connect-button py-1 px-3">
                        <p className="text-md font-medium nice-blue-color hover:text-white">Connect</p>
                    </button>
                </div>
            </div>


            <div className="mainChunk flex flex-row border-0 border-white h-screen relative width-full justify-center px-16">
                <div className="flex self-center z-10">
                    <div className="flex flex-row space-x-40">
                        <div className="space-y-3">
                            <p className="text-white text-6xl font-medium tracking-wider">Demeter Labs</p>
                            <p className="text-white text-2xl font-normal">Safe liquidity in any season</p>
                            <p className="text-white text-2xl font-thin">Harvest RWA Yield</p>
                            <div>
                                <button className="text-white text-2xl font-normal bg-blue get-started-button w-96 px-2 py-1 rounded-full tracking-wider mt-5 ">
                                    <p>
                                        Get started 
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={swap} className="rounded-3xl h-96"></img>
                        </div>
                    </div>
                </div>
                <div className="portal1 absolute left-1/4 top-1/2 "></div>
                <div className="portal2 absolute left-1/2 top-1/3 "></div>
                <div className="portal2 absolute left-3/4 top-1/4 "></div>
                <div className="h-32 w-full glass absolute bottom-0"></div>
            </div>

            <div className="features w-screen py-8 px-16 relative space-y-8">
                <div className="flex flex-row justify-between">
                    <div className="features-l1 flex flex-col justify-between rounded-3xl px-8 py-8">
                        <p className="text-xl text-white font-semibold">Lend Tokens</p>
                        <div>
                            <p className="text-white font-md">Our self paying loans earn interest on</p>
                            <p className="text-white font-md">Real World Assets</p>
                            <p className="text-white font-md mt-8 nice-blue-color">lend Tokens</p>
                        </div>
                    </div>
                    <div className="features-l1 flex flex-col justify-between rounded-3xl px-8 py-8">
                        <p className="text-xl text-white font-semibold">Lend Tokens</p>
                        <div className="">
                            <p className="text-white font-md">Our self paying loans earn interest on</p>
                            <p className="text-white font-md">Real World Assets</p>
                            <p className="text-white font-md mt-8 nice-blue-color">lend Tokens</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between py-8">
                    <div className="justify-between features-l2 flex flex-col rounded-3xl py-6 pl-6">
                        <p className="text-white font-semibold text-2xl">Borrow Crypto</p>
                        <p className="text-white font-thin nice-purple-color">Leverage your crypto holdings to access liquidity in the asset of your choice.</p>
                        <p className="nice-blue-color">Borrow now</p>
                    </div>
                    <div className="justify-between features-l2 flex flex-col rounded-3xl py-6 pl-6">
                        <p className="text-white font-semibold text-2xl">Borrow Crypto</p>
                        <p className="text-white font-thin nice-purple-color">Leverage your crypto holdings to access liquidity in the asset of your choice.</p>
                        <p className="nice-blue-color">Borrow now</p>
                    </div>
                    <div className="justify-between features-l2 flex flex-col rounded-3xl py-6 pl-6">
                        <p className="text-white font-semibold text-2xl">Borrow Crypto</p>
                        <p className="text-white font-thin nice-purple-color">Leverage your crypto holdings to access liquidity in the asset of your choice.</p>
                        <p className="nice-blue-color">Borrow now</p>
                    </div>
                </div>

                <div className="w-full h-32 rounded-3xl giant-pill flex flex-row justify-between px-14 py-8 items-center">
                    <div className="row row-col space-y-1">
                        <p className="text-white font-bold text-2xl">Powered by the Demeter Labs Protocol</p>
                        <p className="text-white font-thin text-xl">The worlds most innovative RWA investments by a global community.</p>
                    </div>
                    <button class="w-36 h-14 border-white border rounded-2xl">
                        <p className="text-white font-thin text-lg">Learn more</p>
                    </button>
                </div>
            </div>

            <div className="w-screen">
                <div nameClass="flex flex-row">
                    <div nameClass="w-1/3">

                    </div>
                    <div className="w-2/3 flex flex-row justify-bew">
                        <div>
                            <p className="text-white text-sm font-semibold">App</p>
                            <p className="text-white text-sm font-thin">Lend</p>
                            <p className="text-white text-sm font-thin">Earn</p>
                            <p className="text-white text-sm font-thin">Borrow</p>
                            <p className="text-white text-sm font-thin">Pools</p>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Protocol</p>
                            <p className="text-white text-sm font-thin">Community</p>
                            <p className="text-white text-sm font-thin">Governance</p>
                            <p className="text-white text-sm font-thin">Developers</p>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Company</p>
                            <p className="text-white text-sm font-thin">Careers</p>
                            <p className="text-white text-sm font-thin">Blog</p>
                            <p className="text-white text-sm font-thin">Bounties</p>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Get Help</p>
                            <p className="text-white text-sm font-thin">Contact Us</p>
                            <p className="text-white text-sm font-thin">Help Center</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemeterDesktop
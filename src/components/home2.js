import "./home2.css"
import more from '../assets/more.png'
import eth_logo from '../assets/eth_logo.png'
import down_arrow from '../assets/down_arrow.png'
import magnify from '../assets/magnify.png'
import swap from '../assets/swap.png'

const DemeterDesktop = () => {
    return (
        <div className="background h-fill overflow-clip">
            <div className="flex flex-row justify-between h-20 items-center px-8">
                <div>
                    <p className="text-md font-bold text-white ">D</p>
                </div>
                <div className="flex flex-row space-x-8 h-10 buttonz">
                    <div class="flex items-center">
                        <p>Lend</p>
                    </div>
                    <div class="flex items-center">
                        <p>Earn</p>
                    </div>
                    <div class="flex items-center">
                        <p>Borrow</p>
                    </div>
                    <div class="flex items-center">
                        <p>Pool</p>
                    </div>
                </div>
                <div className="w-96  h-8 flex items-center searchbox rounded-md justify-between px-2">
                    <img src={magnify} className="h-6 opacity-50"></img>
                    <p className="text-gray-400 font-light">
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
                    <div className="flex flex-row items-center space-x-1 rounded-full header-connect-button py-1 px-3">
                        <p className="text-md font-medium connect-button">Connect</p>
                        <p className="align-text-top">|</p>
                        <img src={down_arrow} className="h-4 opacity-50"></img>
                    </div>
                </div>
            </div>


            <div className="mainChunk flex flex-row border-0 border-white h-screen relative width-full justify-center px-8">
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
                <div className="portal1 absolute left-1/4 top-1/2"></div>
                <div className="portal2 absolute left-1/2 top-1/3"></div>
                <div className="portal2 absolute left-3/4 top-1/4"></div>
            </div>


            <div className="bg-black h-screen z-20 flex">
                <div className="flex flex-row justify-around w-screen mt-12">
                    <div className="features-l1 flex flex-col justify-between rounded-3xl">
                        <p className="text-xl text-white font-semibold pl-8 pt-8">Lend Tokens</p>
                        <div className="pb-8 pl-8">
                            <p className="text-white font-md">Our self paying loans earn interest on</p>
                            <p className="text-white font-md">Real World Assets</p>
                            <p className="text-white font-md mt-8 fake-buttons">lend Tokens</p>
                        </div>
                    </div>
                    <div className="features-l1 flex flex-col justify-between rounded-3xl">
                        <p className="text-xl text-white font-semibold pl-8 pt-8">Lend Tokens</p>
                        <div className="pb-8 pl-8">
                            <p className="text-white font-md">Our self paying loans earn interest on</p>
                            <p className="text-white font-md">Real World Assets</p>
                            <p className="text-white font-md mt-8 fake-buttons">lend Tokens</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemeterDesktop
//================HOOKS=====================
import {  useState ,useContext} from 'react';
import { context } from '../Context/Context';

//================Material UI===============
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';




export default function Header(){
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
    
const {shopCourt , favorite} = useContext(context)
    const drawerWidth = 240;
const [open, setOpen] = useState(false);
const handleDrawerOpen = () => {
  setOpen(true);
};
const handleDrawerClose = () => {
  setOpen(false);
  };
return(
    <>
        <div className="bg-main-color  w-full h-10  lg:h-17  flex justify-center items-center text-center text-sm md:text-2xl transition-all duration-500  hover:duration-500 ">
            <span className="text-white text-center lg:flex lg:gap-2 lg:mb-3 text-[12px] md:text-lg">Free shipping  over $50  <span className="underline transition-all duration-500 hidden lg:block hover:duration-500 cursor-pointer hover:no-underline">| Shop Now</span></span>
        </div>
        <nav className='w-full  flex flex-row lg:flex-col lg:-mt-5 justify-center items-center text-center  border-b h-auto border sticky top-0 z-50'>
            <div className="flex flex-row items-center justify-between w-full  gap-4 bg-white h-17 relative  lg:h-21.5 overflow-hidden ">
                <button className={open === true ? 'none'  :  'lg:hidden flex justify-center ml-4 items-center'} onClick={handleDrawerOpen}  >
                    <MenuIcon />
                </button>
                <span className="flex lg:hidden text-2xl font-bold  relative md:right-20 ">LUXE</span>
                <div className='flex lg:hidden '>
                    <SearchIcon className='flex lg:hidden relative left-28 md:left-85 lg:left-12 text-gray-700 ' />
                </div> 
                <button className='text-gray-700 flex lg:hidden relative left-27 hover:text-main-color md:left-70 lg:left-12 cursor-pointer'>
                    <ShoppingBagIcon />
                    <CartBadge badgeContent={shopCourt}  color="primary" overlap="circular" />
                </button>

                <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                >
                <IconButton className='flex justify-between gap-29  font-bold text-black'>Menu <CloseIcon className='text-red-800' onClick={handleDrawerClose}/></IconButton>

                <Divider  className='mb-6'/>
                <List className='w-full text-start flex flex-col gap-3 '>
                    <ListItem disablePadding className='flex flex-col gap-6 text-start items-start '>
                        <span className="text-gray-700 text-lg transition ml-12 w-full text-start rounded hover:bg-gray-50 font-medium cursor-pointer">New Arrivals</span>
                        <span className="text-gray-700 text-lg transition ml-12 w-full text-start rounded hover:bg-gray-50 font-medium cursor-pointer">Men</span>
                        <span className="text-gray-700 text-lg transition ml-12 w-full text-start rounded hover:bg-gray-50 font-medium cursor-pointer">Women</span>
                        <span className="text-gray-700 text-lg transition ml-12 w-full text-start rounded hover:bg-gray-50 font-medium cursor-pointer">Accessories</span>
                        <span className="text-red-600 text-lg transition  ml-12 w-full hover:text-red-700  font-medium cursor-pointer">Sale</span>
                    </ListItem>
                    <Divider />
                    <button className='text-gray-700 flex flex-row gap-3 ml-5 hover:text-main-color cursor-pointer'>
                        <PersonOutlineIcon /> Account
                    </button>
                    <button className='text-gray-700 flex flex-row gap-1 ml-5 hover:text-main-color cursor-pointer'>
                        <FavoriteBorderIcon />  
                        <CartBadge badgeContent={favorite}  color="primary" overlap="circular" />
                        Wishlist
                    </button>
                </List>
                </Drawer>
                <div className=" lg:flex hidden flex-row gap-7 lg:relative lg:right-90 xl:right-90 [@media(min-width:1445px)]:right-140 [@media(min-width:2560px)]:right-210   items-center justify-center ml-32">
                    <span className="text-4xl font-bold pr-4 ">LUXE</span>
                    <span className="text-gray-700 text-lg transition hover:text-main-color lg:w-27  font-medium cursor-pointer">New Arrivals</span>
                    <span className="text-gray-700 text-lg transition hover:text-main-color font-medium cursor-pointer">Men</span>
                    <span className="text-gray-700 text-lg transition hover:text-main-color font-medium cursor-pointer">Women</span>
                    <span className="text-gray-700 text-lg transition hover:text-main-color font-medium cursor-pointer">Accessories</span>
                    <span className="text-red-600 text-lg transition hover:text-red-700  font-medium cursor-pointer">Sale</span>
                </div>
                <div className='mr-24   relative lg:right-30 xl:left-20 hidden lg:flex flex-row gap-4 '>
                    <label htmlFor="" className='relative flex right-7   flex-row items-center justify-center'>
                        <input type="text" placeholder="Search Products..." className='pl-10 flex lg:hidden xl:flex  w-64 border-gray-300 rounded-full transition-all duration-500 focus:duration-500 pr-3 border text-sm focus:outline-none focus:border-blue-600 h-8' />
                        <SearchIcon className='absolute left-3 text-gray-700 ' />
                    </label>
                    <button className='text-gray-700 hover:text-main-color cursor-pointer '>
                        <PersonOutlineIcon />
                    </button>
                    <button className='text-gray-700 hover:text-main-color cursor-pointer'>
                        <FavoriteBorderIcon />
                        <CartBadge badgeContent={favorite}  color="primary" overlap="circular" />
                    </button>
                    <button className='text-gray-700 hover:text-main-color cursor-pointer'>
                        <ShoppingBagIcon />
                        <CartBadge badgeContent={shopCourt}  color="primary" overlap="circular" />
                    </button>
                </div>
            </div>
        </nav>
    </>
 )   
}
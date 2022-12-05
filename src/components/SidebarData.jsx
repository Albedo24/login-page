import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon/>,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/',
        icon: <ArticleIcon/>,
        cName: 'nav-text',
    },
    {
        title: 'Products',
        path: '/',
        icon: <ShoppingCartIcon/>,
        cName: 'nav-text',
    },
    {
        title: 'Teams',
        path: '/',
        icon: <PeopleAltIcon/>,
        cName: 'nav-text',
    },
]
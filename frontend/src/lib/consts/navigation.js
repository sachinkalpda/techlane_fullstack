import {
    HiOutlineViewGrid,
    HiOutlineCube,

    HiOutlineQuestionMarkCircle,
    HiOutlineCog
}
from 'react-icons/hi';



export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key : 'dashboard',
        label : 'Dashboard',
        path : '/',
        icon : <HiOutlineViewGrid />
    },
    {
        key : 'models',
        label : 'Models',
        path : '/models',
        icon : <HiOutlineCube />
    }
];

export const DASHBOARD_BOTTOM_LINKS = [
    {
        key : 'settings',
        label : 'Settings',
        path : '/settings',
        icon : <HiOutlineCog />
    },
    {
        key : 'hele and support',
        label : 'Help and Support',
        path : '/help-and-support',
        icon : <HiOutlineQuestionMarkCircle />
    }
]
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClasses = 'flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 p-3 flex flex-col w-60 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />
                <span className='text-neutral-100 text-lg'>Dashboard</span>
            </div>
            <div className="flex-1 gap-0.5 flex flex-col py-8">
                {
                    DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} />
                    ))
                }
            </div>
            <div className='flex flex-col pt-2 gap-0.5 border-t border-neutral-700'>
                {
                    DASHBOARD_BOTTOM_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} />
                    ))
                }
                <Link to='/logout' className={classNames(  'text-red-500', linkClasses)}>
                    <span className='pt-0.5 text-xl'><HiOutlineLogout /></span>
                    {'Logout'}
                </Link>
            </div>
        </div>
    )
}


function SidebarLink({ item }) {
    const { pathname } = useLocation();

    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', 'text-white', linkClasses)}>
            <span className='pt-0.5 text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
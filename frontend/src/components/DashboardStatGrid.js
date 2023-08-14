
import { IoBagHandle } from 'react-icons/io5';

export default function DashboardStatGrid() {
    return (
        <div className="flex flex-wrap gap-4">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex justify-center items-center bg-sky-500">
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex item-center'>
                        <strong className='text-gray-700 font-semibold text-sm'>$34525.20</strong>
                        <span className='text-green-500 text-sm pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex justify-center items-center bg-sky-500">
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex item-center'>
                        <strong className='text-gray-700 font-semibold text-sm'>$34525.20</strong>
                        <span className='text-green-500 text-sm pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex justify-center items-center bg-sky-500">
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex item-center'>
                        <strong className='text-gray-700 font-semibold text-sm'>$34525.20</strong>
                        <span className='text-green-500 text-sm pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex justify-center items-center bg-sky-500">
                    <IoBagHandle className='text-2xl text-white' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex item-center'>
                        <strong className='text-gray-700 font-semibold text-sm'>$34525.20</strong>
                        <span className='text-green-500 text-sm pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return (
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
    )
}
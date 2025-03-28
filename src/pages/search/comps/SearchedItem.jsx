import { Link } from 'react-router-dom';

import ImgCard from '../../../components/Imgcard';
import Button from '../../../components/Button';


import styles from '../Search.module.css';

export default function SearchedItem({ item }) {
    return (
        <div className={`grid ${styles['grid-search-item']} items-center gap-4 p-3 rounded-lg border`}>
            <ImgCard imgUrl={item.image_url} imgAlt={item.name} />
            {/* <div style={{ backgroundImage: `url(${item.image_url})` }} className='bg-cover h-full w-full' ></div> */}
            <SearchedItemSecondCol item={item} />
            <SearchedItemThirdCol item={item} />
        </div>
    );
}

function SearchedItemSecondCol({ item }) {
    const freeCancel = item.free_cancel ?
        [
            <strong className='text-green-600' key={1}>Free cancellation</strong>,
            <p className='text-green-600' key={2}>You can cancel later, so lock in this great price today!</p>
        ] : null;

    return (
        <div className='flex flex-col h-full gap-1 justify-between'>
            <h3 className='text-xl font-semibold lg:font-bold text-blue-600'>{item.name}</h3>
            <p>{item.distance} from center</p>
            <p><span className='bg-green-600 text-white rounded p-1'>{item.tag}</span></p>
            <p className='font-semibold'>{item.description}</p>
            <p>{item.type}</p>
            {freeCancel}
        </div>
    );
}

function SearchedItemThirdCol({ item }) {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='flex justify-between'>
                <span className='text-lg font-semibold'>{item.rate_text}</span>
                <span className='bg-main-color text-white p-1'>{item.rate}</span>
            </div>
            <div className='flex flex-col items-end gap-2'>
                <span className='text-3xl font-semibold'>$ {item.price}</span>
                <span className='text-gray-500 text-sm'>Include taxes and fees</span>
                <Link to='/detail/1'>
                    <Button className='bg-blue-600 text-white hover:bg-blue-800 font-semibold rounded-md py-3 px-8'>
                        See availability
                    </Button>
                </Link>
            </div>
        </div>
    );
}
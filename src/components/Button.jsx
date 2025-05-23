
export default function Button({ value, children, className, isBgWhite = false, onClick }) {

    return (
        <button
            onClick={onClick}
            className={className ?? 'border border-teal-700 py-2 px-20 rounded mt-4 '
                + (isBgWhite
                    ? 'bg-white text-teal-700 hover:bg-teal-800 hover:text-white'
                    : 'bg-teal-700 text-white hover:bg-teal-800')}>
            {value ?? children ?? 'send'}
        </button>
    )
}
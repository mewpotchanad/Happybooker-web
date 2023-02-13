
export default function Searchbar(props) {
    const {value, onValueChange} = props;
    return (
        <div>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass text-gray-900" />
                </div>
                <input
                    type="text"
                    className="w-[700px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="ค้นหาหนังสือ..."
                    value={value}
                    onChange={e =>{onValueChange(e.target.value)}}
                />
                {/* <button className='absolute inset-y-0 right-0 w-16 bg-[#FEC601] rounded-lg text-white'>Search</button> */}
            </div>
        </div>
    )
}

import React from 'react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {styles} from '../../styles'
// import classNames from 'classnames'

const Header = () => {
	const navigate = useNavigate()

	return (
		<div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
			<div className="relative">
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[14rem] h-10 pl-11 pr-4 rounded-sm"
					readOnly
				/>
			</div>                
            <div className={`${styles.heroSubText}  text-black-100`}>
                    {`AdminPanel`}
            </div>
            <div 
			className={`${styles.sectionSubText} text-black-100 font-bold cursor-pointer`}
			onClick={() => navigate('/signin')}
			>
                <span>----{`>`}</span>{`Signout`}
            </div>
		</div>
	)
}

export default Header;
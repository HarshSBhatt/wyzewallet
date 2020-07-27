import React from 'react';
import * as Icon from 'react-feather';

import { Navbar, NavItem, DropdownMenu } from '../elements';
import { PlusIcon, BellIcon, MessengerIcon, CaretIcon } from '../../assets/icons';

function Header({ darkMode }) {
	return (
		<Navbar>
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} />
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu />
			</NavItem>
			<NavItem icon={<SunMoon {...{ darkMode }} />} />
		</Navbar>
	);
}
const SunMoon = ({ darkMode }) => {
	return (
		<div className="SunMoon" onClick={darkMode.toggle}>
			<div style={{ display: 'flex' }}>{darkMode.value ? <Icon.Sun color={'#ffc107'} /> : <Icon.Moon />}</div>
		</div>
	);
};
export default Header;

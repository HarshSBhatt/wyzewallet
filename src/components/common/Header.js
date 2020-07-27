import React from 'react';
import * as Icon from 'react-feather';

import { Navbar, NavItem, DropdownMenu } from '../elements';
import { PlusIcon, BellIcon, MessengerIcon, CaretIcon } from '../../assets/icons';

function Header({ darkMode }) {
	return (
		<Navbar>
			<NavItem darkMode={darkMode} icon={<SunMoon value={darkMode.value} />} />
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} />
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu />
			</NavItem>
		</Navbar>
	);
}
const SunMoon = ({ value }) => {
	return (
		<div className="SunMoon">
			<div style={{ display: 'flex' }}>{value ? <Icon.Sun color={'#ffc107'} /> : <Icon.Moon />}</div>
		</div>
	);
};
export default Header;

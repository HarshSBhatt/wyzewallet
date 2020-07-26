import React from 'react';

import { Navbar, NavItem, DropdownMenu } from '../elements';
import { PlusIcon, BellIcon, MessengerIcon, CaretIcon } from '../../assets/icons';

function Header() {
	return (
		<Navbar>
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} />
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu />
			</NavItem>
		</Navbar>
	);
}

export default Header;

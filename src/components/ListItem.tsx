import type {ReactNode} from 'react';
import type {IconType} from 'react-icons';

type Props = {
	text: ReactNode;
	icon: IconType;
};

export function ListItem({text, icon}: Props) {
	return (
		<li className="flex items-center space-x-2">
			<span>{icon({className: 'h-6 w-6'})}</span>
			<span>{text}</span>
		</li>
	);
}

import { Button, ButtonGroup } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
	const { i18n } = useTranslation();
	const current = i18n.language?.startsWith('en') ? 'en' : 'hu';

	return (
		<ButtonGroup size='xs' isAttached variant='outline'>
			<Button
				onClick={() => i18n.changeLanguage('en')}
				colorScheme={current === 'en' ? 'red' : 'gray'}
				variant={current === 'en' ? 'solid' : 'outline'}
			>
				EN
			</Button>
			<Button
				onClick={() => i18n.changeLanguage('hu')}
				colorScheme={current === 'hu' ? 'red' : 'gray'}
				variant={current === 'hu' ? 'solid' : 'outline'}
			>
				HU
			</Button>
		</ButtonGroup>
	);
};

export default LanguageToggle;

import { useTranslation } from 'react-i18next';
import TermsHu from '../content/terms.hu.jsx';
import TermsEn from '../content/terms.en.jsx';

const TermsAndConditions = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');

  return isEnglish ? <TermsEn /> : <TermsHu />;
};

export default TermsAndConditions;

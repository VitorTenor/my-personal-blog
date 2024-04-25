import { HeaderPanel, TranslateStyle } from './styles.ts';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../../../context';

export default function Header() {
  const context : AuthContextType = useContext(AuthContext);
  return (
    <HeaderPanel>
      <TranslateStyle
        onClick={() => context.changeLanguage()}
        size={'2x'}
        icon={faLanguage}
      />
    </HeaderPanel>
  );
}

/* eslint-disable react/prop-types */
import { useTheme } from '../../contexts/ThemeProvider';
import { IconLight } from '../Icons/IconLight/IconLight';
import IconDark from '../Icons/IconDark/IconDark';
import './theme_button.css';

const ThemeButton = ({width, height}) => {

 const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={() => toggleTheme()}
          className={`${theme === 'dark' ? 'dark' : 'light'} btn-theme`}>
          {theme === 'dark'
            ? <IconLight
              fill={'light'}
              width={width}
              height={height}
            />
            : <IconDark
              width={width}
              height={height}
            />
          }
        </button>
  )
}

export {ThemeButton};
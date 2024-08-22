
"use client"

import { Switch } from '@/components/ui/switch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setTheme } from '@/redux/themeSlice';

export default function ThemeSwitcher() {
   const theme = useSelector((state: RootState) => state.theme)
   const dispatch = useDispatch()

   const toggleTheme = () => {
      dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
   };
   document.documentElement.setAttribute('data-theme', theme);

   return (
      <div className="flex items-center justify-center" style={{ gap: '5px' }}>
         <div>
            <Switch
               checked={theme === 'light' ? false : true}
               onCheckedChange={toggleTheme}
            />
         </div>
      </div>
   );
}


"use client"

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

export default function ThemeSwitcher() {
   const [isDarkTheme, setIsDarkTheme] = useState(false);

   const toggleTheme = () => {
      const newTheme = !isDarkTheme ? 'dark' : 'light';
      setIsDarkTheme(!isDarkTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
   };

   return (
      <div className="flex items-center justify-center" style={{ gap: '5px' }}>
         {/* <p>{isDarkTheme ? 'Dark' : 'Light'}</p> */}
         <div>
            <Switch
               checked={isDarkTheme}
               onCheckedChange={toggleTheme}
            />
         </div>
      </div>
   );
}

import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <form className="toggle-wrapper">
            <input
                id="toggle"
                type="checkbox"
                className={`toggle-button ${theme === 'dark' ? 'dark' : ''}`}
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label htmlFor="toggle"></label>
        </form>
    );
};

export default ToggleButton;
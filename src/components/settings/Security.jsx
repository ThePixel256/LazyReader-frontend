import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);

	return (
		<SettingSection icon={Lock} title={"Seguridad"}>
			<ToggleSwitch
				label={" Autenticación de Dos Factores"}
				isOn={twoFactor}
				onToggle={() => setTwoFactor(!twoFactor)}
			/>
			<div className='mt-4'>
				<button
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					Cambiar Contraseña
				</button>
			</div>
		</SettingSection>
	);
};
export default Security;
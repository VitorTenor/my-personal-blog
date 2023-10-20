import {HeaderPanel, TranslateStyle} from "./styles.ts";
import {useTranslation} from "react-i18next";
import {AvailableLanguages} from "../../../language/languageUtil.ts";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";


export default function Header() {
    const { i18n } = useTranslation();
    const changeLanguage = () => {
        const lng = i18n.language === AvailableLanguages.PT ? AvailableLanguages.EN : AvailableLanguages.PT;
        i18n.changeLanguage(lng).then(() => ({}));
    };

    return (
        <HeaderPanel>
            <TranslateStyle onClick={() => changeLanguage()} size={"2x"} icon={faLanguage} />
        </HeaderPanel>
    );
}

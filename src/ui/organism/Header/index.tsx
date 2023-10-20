import {HeaderPanel, TranslateStyle} from "./styles.ts";
import {useTranslation} from "react-i18next";
import {AvailableLanguages} from "../../../language/languageUtil.ts";


export default function Header() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: AvailableLanguages) => {
        i18n.changeLanguage(lng).then(() => ({}));
    };

    return (
        <HeaderPanel>
            <TranslateStyle onClick={() => changeLanguage(i18n.language === AvailableLanguages.PT ? AvailableLanguages.EN : AvailableLanguages.PT)} size={"2x"} />
        </HeaderPanel>
    );
}

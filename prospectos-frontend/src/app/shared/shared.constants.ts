export class SharedConstants {
    static get PATTERN() {
        return {
            NO_CHARACTER_STRANGE: /^[ a-zA-Z0-9_áéíóúàèìòùÀÈÌÒÙñÁÉÍÓÚÑÜü\'.\s]*$/,
            DOMAIN_VALID: /\b(?:(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b|\blocalhost\b/,
            EMAIL: /[A-Za-z0-9]+@[a-z0-9]+\.[a-z]+/,
            NUMERIC: /^[0-9]{1,100}$/
        };
    }
    static get ICONS() {
        return {
            ICON_MAP_INST: 'assets/images/icons/icon-map-inst.png',
            ICON_MAP_PEOPLE_RHHH: 'assets/images/icons/icon-map-people_rrhh.png',
            ICON_MAP_PEOPLE_MATRI: 'assets/images/icons/icon-map-people_matri.png',
        };
    }

}

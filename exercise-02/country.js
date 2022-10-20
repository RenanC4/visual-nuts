class Country{
    constructor(countriesList) {
        this._countriesList = countriesList;
    }
      
    _mountCountryMap(){
        let countryMap = {};
        this._countriesList.forEach(c => {
            if(!countryMap[c.country]){
                countryMap[c.country] = c.languages.length;
            };
        });
        return countryMap;
    };

    _mountLanguageMap(){
        let languageMap = {};
        this._countriesList.forEach(c => {
            c.languages.forEach(l => {
                if(!languageMap[l]){
                 languageMap[l] = 0;
                };
                if(languageMap[l]>=0){
                    languageMap[l] = languageMap[l] + 1;
                };
            });
        });
        return languageMap;
    };

    numberOfCountriesInTheWorld(){
        return this._countriesList.length;
    };

    countryWithMostOfficialLanguagesThatSpeaksDE() {
        const countries = this._mountCountryMap(this._countriesList);
        const countriesSortedByNumberOfSpokenLanguages = Object.entries(countries).sort();
    
        let countrieWithMoreLanguagesThatSpeaksDE = [];
        countriesSortedByNumberOfSpokenLanguages.forEach(c => {
            let {country, languages} = this._countriesList.find(cl => cl.country == c[0]);
            
            if(languages.includes("de")){
                countrieWithMoreLanguagesThatSpeaksDE.push(country);
            };
        });
    
        return countrieWithMoreLanguagesThatSpeaksDE[0];
    };

    numberOfOfficialLanguages(){
        const languages = this._mountLanguageMap(this._countriesList);
        return Object.keys(languages).length;
    };

    countryWithMoreOfficialLanguages(){
        const countries = this._mountCountryMap(this._countriesList);
        const countryWithMoreOfficialLanguages = Object.entries(countries).reduce((c1, c2) => c2[1] > c1[1] ? c2 : c1);
        return countryWithMoreOfficialLanguages[0];
    };

    languageSpokenInMoreCountries(){
        const languages = this._mountLanguageMap(this._countriesList);
        const moreSpokenLanguage = Object.entries(languages).reduce((l1, l2) => l2[1] > l1[1] ? l2 : l1);
        return moreSpokenLanguage[0];
    };
};


export default Country;

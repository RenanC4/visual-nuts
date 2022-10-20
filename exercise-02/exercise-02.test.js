import Country from './country';


describe("Testing country Class public methods", () => {
    let countriesMock = [
        {
          "country": "US",
          "languages": [
            "en"
          ]
        },
        {
          "country": "BE",
          "languages": [
            "nl",
            "fr",
            "de"
          ]
        },
        {
          "country": "NL",
          "languages": [
            "nl"
          ]
        },
        {
          "country": "DE",
          "languages": [
            "de"
          ]
        },
        {
          "country": "ES",
          "languages": [
            "es"
          ]
        }
      ]

    const country = new Country(countriesMock);

    it("Should Return the number of countries provided", 
    () => {
        expect(country.numberOfCountriesInTheWorld()).toBe(5)
    });

    it("Should Return the country with more official languages", 
    () => {
        expect(country.countryWithMoreOfficialLanguages()).toBe("BE")
    });

    it("Should Return the country that speaks German with more official languages", 
    () => {
        expect(country.countryWithMostOfficialLanguagesThatSpeaksDE()).toBe("BE")
    });

    it("Should Return the language spoken in more countries", 
    () => {
        expect(country.languageSpokenInMoreCountries()).toBe("nl")
    });

    it("Should Return the number of total official languages", 
    () => {
        expect(country.numberOfOfficialLanguages()).toBe(5)
    });
  });
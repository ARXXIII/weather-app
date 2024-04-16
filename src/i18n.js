import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const systemLng = navigator.language;

let lng;

if (systemLng === 'ru-RU') {
    lng = 'ru';
    localStorage.setItem('i18nextLng', 'ru');
} else {
    lng = 'en';
    localStorage.setItem('i18nextLng', 'en');
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: false,
    lng: lng,
    resources: {
        en: {
            translation: {
                enterCity: 'Enter city',

                currLocationBtn: 'Current Location',

                currWeatherHeading: 'Now',

                todaysHighlightsHeading: "Today's Highlights",
                airQualityIndex: 'Air Quality Index',

                sunrise: 'Sunrise',
                sunset: 'Sunset',

                humidity: 'Humidity',
                pressure: 'Pressure',
                visibility: 'Visibility',
                feelsLike: 'Feels Like',

                fiveDayForecastHeading: '5 Day Forecast',

                forecastByTimeHeading: 'Today at',

                SearchBarPlaceholder: 'Moscow, RU',

                author: 'Code by AR23',
            },
        },
        ru: {
            translation: {
                enterCity: 'Введите город',

                currLocationBtn: 'Мое местоположение',

                currWeatherHeading: 'Погода сейчас',

                todaysHighlightsHeading: 'Основное сегодня',
                airQualityIndex: 'Качество воздуха',

                sunrise: 'Рассвет',
                sunset: 'Закат',

                humidity: 'Влажность',
                pressure: 'Давление',
                visibility: 'Видимость',
                feelsLike: 'Ощущается как',

                fiveDayForecastHeading: 'Прогноз на 5 дней',

                forecastByTimeHeading: 'Сегодня в',

                SearchBarPlaceholder: 'Москва, РФ',

                author: 'Разработано AR23',
            },
        }
    }
})
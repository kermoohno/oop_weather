class Weather{
    constructor(city){
        this.key = 'd4704927e8828d83ba4cc33b4483e308';
        this.city = city;
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        return await response.json()
    }

    changeCity(city){
        this.city = city;
    }
}

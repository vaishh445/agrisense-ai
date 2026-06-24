import { useEffect, useState } from "react";
import axios from "axios";
import {
  CloudSun,
  Droplets,
  Wind,
  MapPin
} from "lucide-react";

function WeatherCard() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {

      try {

        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=c1a218a58aede6f115d029f3f6e5ec4f"
        );

        setWeather(response.data);

      } catch (error) {

        console.log(
          "Weather Error:",
          error
        );

      }

    };

    fetchWeather();

  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-4">

        <CloudSun
          size={40}
          className="text-yellow-500"
        />

        <h2 className="text-3xl font-bold">
          Weather
        </h2>

      </div>

      {!weather ? (

        <div className="text-center py-10">

          <p className="text-gray-500">
            Loading Weather...
          </p>

        </div>

      ) : (

        <>

          <div className="flex items-center gap-2 text-gray-600">

            <MapPin size={18} />

            <p className="font-medium">
              {weather.name}
            </p>

          </div>

          <h1 className="text-5xl font-bold mt-4">

            {Math.round(
              weather.main.temp
            )}°C

          </h1>

          <p className="text-gray-500 text-lg mt-2">

            {weather.weather[0].main}

          </p>

          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3">

              <Droplets
                size={20}
                className="text-blue-500"
              />

              <p>
                Humidity:
                {" "}
                {weather.main.humidity}%
              </p>

            </div>

            <div className="flex items-center gap-3">

              <Wind
                size={20}
                className="text-gray-600"
              />

              <p>
                Wind:
                {" "}
                {weather.wind.speed}
                {" "}
                km/h
              </p>

            </div>

          </div>

        </>

      )}

    </div>
  );
}

export default WeatherCard;
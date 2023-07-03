import axios from "axios";

export async function getWeather(city, setError){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_ID}&lang=pt_br`

    try{
        const res = await axios.get(url);
        setError('');
        return res.data;
    } catch (err){
        setError('Cidade não encontrada. ');
        return err
    }
}
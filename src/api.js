import axios from "axios";

export async function getWeather(city, setError){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f90fe67f02a11220edae796b28b7160&lang=pt_br`

    try{
        const res = await axios.get(url);
        setError('');
        return res.data;
    } catch (err){
        setError('Cidade não encontrada. ');
        return err
    }
}
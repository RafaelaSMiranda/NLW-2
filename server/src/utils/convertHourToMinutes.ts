export default function convertHourToMinutes(time: string) {

    // 08: 00


    const [hour, minutes] = time.split(':').map(Number);
    // divide a string em dois, pelo dois pontos
    // o map number transforma as duas partes em numero

    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;



}
interface IData {
    id: string;
    value: string;
    name: string
}

export const trainingData: IData[] = [
    {
        id: '1',
        value: 'stretching',
        name: 'ABS + Stretching'
    },
    {
        id: '2',
        value: 'aquafit',
        name: 'Aqua Fitness'
    },
    {
        id: '3',
        value: 'polo',
        name: 'Водное поло'
    },
    {
        id: '4',
        value: 'bachata',
        name: 'Bachata'
    },
]

export const departmentData: IData[] = [
    {
        id: '1',
        value: 'group',
        name: 'Групповые программы'
    },
    {
        id: '2',
        value: 'gym',
        name: 'Тренажерный зал'
    },
    {
        id: '3',
        value: 'swimpool',
        name: 'Бассейн'
    },
]

export const hallData: IData[] = [
    {
        id: '1',
        value: 'hall1',
        name: 'Зал №1'
    },
    {
        id: '2',
        value: 'hall2',
        name: 'Зал №2'
    },
    {
        id: '3',
        value: 'hall3',
        name: 'Зал №3'
    },
    {
        id: '4',
        value: 'hall4',
        name: 'Зал №4'
    },
]


/*schedule data*/

export interface IDataScheduleItem {
    id: string,
    begin: string,
    end: string,
    training: string,
    coach: string,
    hall: string,
}

export const scheduleData: IDataScheduleItem[] = [
    {
        id: '1',
        begin: '08:00',
        end: '08:30',
        training: 'ABC + Stretching',
        coach: 'Шабалкина Жанна',
        hall: 'Зал №2',
    }
]

export const editScheduleItem = ():void => {

}
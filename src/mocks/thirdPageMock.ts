export const thirdPageMock = () => {
    return {
        fields: [
            {
                type: 'text',
                name: 'deviceName',
                label: 'Название устройства',
                placeholder: 'Введите название устройства',
                required: true,
            },
            {
                type: 'select',
                name: 'deviceModel',
                label: 'Модель устройства: ',
                required: true,
                options: [
                    {
                        value: 'asus',
                        label: 'Asus'
                    },
                    {
                        value: 'apple',
                        label: 'Apple'
                    },
                    {
                        value: 'samsung',
                        label: 'Samsung'
                    },
                ]
            }
        ]
    }
}
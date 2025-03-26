export const secondPageMock = () => {
    return {
        fields: [
            {
                type: 'text',
                name: 'name',
                label: 'Имя',
                placeholder: 'Введите ваше имя',
                required: true,
            },
            {
                type: 'textarea',
                name: 'feedback',
                label: 'Отзыв',
                placeholder: 'Напишите ваш отзыв',
                required: true,
            },
        ]
    }
}
export const firstPageMock = () => {
    return {
        fields: [
            {
                type: 'text',
                name: 'username',
                label: 'Логин',
                placeholder: 'Введите ваш логин',
                required: true,
            },
            {
                type: 'password',
                name: 'password',
                label: 'Пароль',
                placeholder: 'Введите ваш пароль',
                required: true,
            },
            {
                type: 'checkbox',
                name: 'remember',
                label: 'Запомнить пользователя?',
                required: true,
            },
        ]
    }
}
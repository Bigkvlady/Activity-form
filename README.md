# Activity-form - Форма добавления активности
Форма предоставляет начальные данные с дальнейшей возможностью редактировать данные 
(такие как, ФИО, сумму комерческого предложения, номер и дату подписания контракта).

Сумма комерческого предложения проходит проверку на наличие до 2-х знаков после запятой, 
заменяет "," на "." для привильного заполнения и отображения. Без прохождения проверки, подтверждения формы невозможно.

Результатом заполнения и подтверждения формы является JSON объект, который выводится в консоль.

Процесс формирования JSON объекта в реальном времени можно видеть в отдельном поле.

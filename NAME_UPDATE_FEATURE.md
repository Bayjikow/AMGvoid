# Функция обновления имени пользователя

## Описание
Реализована функция сохранения и синхронизации имени пользователя во всех частях приложения.

## Где отображается имя пользователя

### 1. **Sidebar (Боковая панель)**
- Файл: `src/App.vue`
- Строки 46-47
- Отображает имя и email в футере sidebar

```vue
<div class="user-name">{{ userStore.user.name }}</div>
<div class="user-email">{{ userStore.user.email }}</div>
```

### 2. **Dashboard (Главная страница)**
- Файл: `src/views/Dashboard.vue`
- Строка 6
- Приветствие с именем пользователя

```vue
<h1>{{ $t('dashboard.title', { name: userStore.user.name }) }}</h1>
```

### 3. **Settings (Настройки)**
- Файл: `src/views/Settings.vue`
- Строка 31
- Поле для редактирования имени и отображение текущего имени

```vue
<InputText v-model="profileName" @blur="updateUserName" />
<div class="font-bold text-lg">{{ userStore.user.name }}</div>
```

## Как работает сохранение

### 1. **User Store** (`src/stores/user.js`)

Метод `updateProfile` автоматически сохраняет имя в localStorage:

```javascript
function updateProfile(data) {
  user.value = { ...user.value, ...data }
  // Save name to localStorage if it's being updated
  if (data.name) {
    localStorage.setItem('userName', data.name)
  }
}
```

### 2. **Загрузка при инициализации**

При загрузке приложения имя восстанавливается из localStorage:

```javascript
const savedName = localStorage.getItem('userName')

const user = ref({
  name: savedName || 'Elara Vance',
  // ...
})
```

### 3. **Обновление в Settings**

Функция `updateUserName` вызывается:
- При потере фокуса поля ввода (`@blur`)
- При нажатии кнопки "Save Profile"

```javascript
function updateUserName() {
  if (profileName.value && profileName.value.trim() !== '') {
    userStore.updateProfile({ name: profileName.value.trim() })
  }
}

function saveProfile() {
  updateUserName()
  toast.add({
    severity: 'success',
    summary: t('settings.profileUpdated'),
    detail: t('settings.profileUpdatedMessage'),
    life: 3000
  })
}
```

### 4. **Реактивность**

Используется `watch` для синхронизации локального состояния с store:

```javascript
const profileName = ref(userStore.user.name)

watch(() => userStore.user.name, (newName) => {
  profileName.value = newName
})
```

## Как использовать

### Для пользователя:

1. Перейти в **Settings** (Настройки)
2. Изменить имя в поле "User Name"
3. Либо:
   - Кликнуть вне поля (потеря фокуса) - имя сохранится автоматически
   - Нажать кнопку "Save Profile" - имя сохранится с уведомлением
4. Имя обновится везде:
   - В sidebar внизу
   - На главной странице в приветствии
   - В профиле в настройках

### Для разработчика:

Чтобы использовать имя пользователя в любом компоненте:

```javascript
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

// Получить имя
const userName = userStore.user.name

// Обновить имя
userStore.updateProfile({ name: 'New Name' })
```

## Персистентность

- Имя сохраняется в `localStorage` с ключом `userName`
- Данные сохраняются даже после закрытия браузера
- При повторном входе имя загружается автоматически
- При logout имя удаляется из localStorage

## Уведомления

При сохранении профиля через кнопку "Save Profile" показывается Toast уведомление:

```javascript
toast.add({
  severity: 'success',
  summary: t('settings.profileUpdated'),
  detail: t('settings.profileUpdatedMessage'),
  life: 3000
})
```

**Переводы:**
- EN: "Profile Updated" / "Your profile has been saved successfully"
- TK: "Profil Täzelendi" / "Siziň profiliňiz üstünlikli ýatda saklandy"

## Валидация

- Проверяется, что имя не пустое
- Убираются пробелы в начале и конце (`.trim()`)
- Если поле пустое, обновление не происходит

## Тестирование

1. ✅ Изменить имя в Settings → отображается в sidebar
2. ✅ Изменить имя в Settings → отображается на Dashboard
3. ✅ Обновить страницу → имя сохраняется
4. ✅ Закрыть и открыть браузер → имя сохраняется
5. ✅ Сделать logout → имя удаляется
6. ✅ Сменить язык → имя остается неизменным


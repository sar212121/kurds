                case 'red':
                    document.documentElement.style.setProperty('--primary-color', '#F44336');
                    document.documentElement.style.setProperty('--secondary-color', '#E57373');
                    break;
                default:
                    document.documentElement.style.setProperty('--primary-color', '#FFC107');
                    document.documentElement.style.setProperty('--secondary-color', '#FFD54F');
            }
        });

        darkModeCheckbox.addEventListener('change', (e) => {
            document.body.classList.toggle('dark-mode', e.target.checked);
        });

        // Kullanıcı tercihlerini kaydetme ve yükleme
        function savePreferences() {
            const preferences = {
                fontFamily: fontFamilySelect.value,
                fontSize: fontSizeInput.value,
                colorScheme: colorSchemeSelect.value,
                darkMode: darkModeCheckbox.checked
            };
            localStorage.setItem('blogPreferences', JSON.stringify(preferences));
        }

        function loadPreferences() {
            const savedPreferences = localStorage.getItem('blogPreferences');
            if (savedPreferences) {
                const preferences = JSON.parse(savedPreferences);
                fontFamilySelect.value = preferences.fontFamily;
                fontSizeInput.value = preferences.fontSize;
                colorSchemeSelect.value = preferences.colorScheme;
                darkModeCheckbox.checked = preferences.darkMode;

                // Tercihleri uygula
                document.documentElement.style.setProperty('--font-family', preferences.fontFamily);
                document.documentElement.style.setProperty('--font-size', preferences.fontSize + 'px');
                fontSizeValue.textContent = preferences.fontSize + 'px';
                colorSchemeSelect.dispatchEvent(new Event('change'));
                darkModeCheckbox.dispatchEvent(new Event('change'));
            }
        }

        // Tercihleri kaydet
        [fontFamilySelect, fontSizeInput, colorSchemeSelect, darkModeCheckbox].forEach(element => {
            element.addEventListener('change', savePreferences);
        });

        // Sayfa yüklendiğinde tercihleri yükle
        window.addEventListener('load', loadPreferences);
    </script>
</body>
</html>

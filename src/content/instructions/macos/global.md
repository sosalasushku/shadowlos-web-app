---
platform: macos
mode: global
variants:
  - title: "V2rayU"
    steps:
      - content: |
          Скачайте и установите клиент <code>V2rayU</code>:
        buttons:
          - text: "Для Mac с процессорами Intel"
            href: "https://github.com/yanue/V2rayU/releases/download/v4.2.5/V2rayU-64.dmg"
          - text: "Для Mac с процессорами Apple"
            href: "https://github.com/yanue/V2rayU/releases/download/v4.2.5/V2rayU-arm64.dmg"
      - content: |
          Скопируйте URL:
      - content: |
          Запустите <code>V2rayU</code> — он должен появиться в области панели задач. Предоставьте все запрашиваемые разрешения.
      - content: |
          Правой кнопкой мыши нажмите на значок <code>V2rayU</code> на панели задач и выберите в выпадающем списке <kbd>Import Server from Pasteboard</kbd>. Должно появиться сообщение об успешном импорте.
      - content: |
          Снова нажмите правой кнопкой на значок <code>V2rayU</code> и выберите в самом начале <kbd>Turn v2ray-core On</kbd>.
      - content: |
          VPN должен заработать.
  - title: "Shadowrocket"
    steps:
      - content: |
          Скачайте <code>Shadowrocket</code> из App Store:
        buttons:
          - text: "Скачать"
            href: "https://apps.apple.com/ae/app/shadowrocket/id932747118"
      - content: |
          Импортируйте конфигурацию под этим сообщением на ваш iPhone.
      - content: |
          Откройте <code>Shadowrocket</code> и выберите <kbd>Поделиться через QR-код</kbd> в опции импортированного конфига.
      - content: |
          Откройте <code>Shadowrocket</code> на компьютере и нажмите на значок сканирования в верхнем левом углу. В открывшемся окне покажите камере QR-код с вашего телефона. Конфигурация должна быть добавлена.
      - content: |
          Переключите тумблер в положение <kbd>Вкл</kbd>.
      - content: |
          VPN должен заработать.
--- 
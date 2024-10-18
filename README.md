[![APP Screenshot](https://i.imgur.com/RSFLuaL.png)](https://applio.org/products/app)
<p align="center">
  The easiest voice cloning tool, now in app. Made to be simple, fast and light.
</p>

## Features
- [x] Simple integrated installation
- [x] Applio models
- [x] RVC Auto-Update
- [x] Discord Presence
- [x] Conversion
- [ ] App Auto-Update
- [ ] Train
- [ ] Translations

## Supported systems
| System      | Support Status                          |
|-------------|-----------------------------------------|
| Windows 11  | Full support                            |
| Windows 10  | Full support                        |
| macOS       | No support, working to make it possible. |
| Linux       | No support, working to make it possible. |

## Contributing to the Project

If you're a developer interested in contributing, please follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bygimenez/applio-app.git
   cd apps/dekstop
   ```
   *If you only want to collaborate on the backend, [check the appropriate repository!](https://github.com/bygimenez/applio-app-backend)*

2. **Install the dependencies**:
   ```bash
   pnpm install --filter=dekstop
   ```

3. **Navigate to the server folder**:
   ```bash
   cd python
   ```

4. **Set up the virtual environment**:
   ```bash
   py -m venv env
   ```

5. **Activate the virtual environment**:
   - On Windows:
     ```bash
     .\env\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source env/bin/activate
     ```

6. **Install the server dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

7. **Return to the root folder of the project**:
   ```bash
   cd ..
   ```

8. **Add .env file**:
   Add your supabase keys
   ```bash
   VITE_API_KEY=
   VITE_API_URL=
   ```
    ###### If you don't have a project in supabase, put anything as key, it is necessary to work.

9. **Run the application**:
   ```bash
   pnpm tauri dev --filter=dekstop
   ```

### Additional Notes
- Ensure you have [pnpm](https://pnpm.js.org/) and [Python](https://www.python.org/downloads/) installed on your system before you begin.
- To use tauri in developer mode you need to [meet the requirements listed on their website](https://tauri.app/start/prerequisites/).

## License
This project is subject to [CC BY-NC license](https://github.com/bygimenez/applio-app/blob/master/LICENSE)

### Made possible by
- [rvc-cli](https://github.com/blaisewf/rvc-cli) by [blaisewf](https://github.com/blaisewf)
- [Tauri](https://github.com/tauri-apps/tauri) by [Tauri team](https://github.com/tauri-apps)

![APP Screenshot](https://i.imgur.com/RSFLuaL.png)
<p align="center">
  This is the backend of Applio App: the easiest voice cloning tool, now in app.
</p>

> [!WARNING]  
> This is the backend of the application, here you can develop new features around RVC, the frontend is in the main repository, [visit it](https://github.com/bygimenez/applio-app) for more information.

## Prerequisites

Ensure you have the following installed:

- [Python 3.8+](https://www.python.org/downloads/)
- [Git](https://git-scm.com/)

## Development Setup

Follow these steps to set up your development environment:

### 1. Clone the repository and enter
```bash
git clone https://github.com/bygimenez/applio-app-backend.git python
```
```bash
cd python
```

### 2. Create a virtual environment
```bash
python -m venv env
```

### 3. Activate the virtual environment

- On macOS/Linux:
  ```bash
  source env/bin/activate
  ```
- On Windows:
  ```bash
  .\env\Scripts\activate
  ```

### 4. Install dependencies
```bash
pip install -r requirements.txt
```

### 5. Run the server
```bash
python server.py
```
###### If you are using the original application, skip this step.

## Contributing

We welcome contributions! Please [follow the standard GitHub flow](https://daily.dev/es/blog/contributing-to-open-source-github-a-beginners-guide): fork the repository, make your changes, and open a pull request. 

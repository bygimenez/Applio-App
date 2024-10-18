@echo off
py -m venv env

call .\env\Scripts\activate

pip install -r requirements.txt

pause

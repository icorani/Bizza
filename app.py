from flask import Flask

app = Flask (__name__)

@app.route('/')
def index():
    """Te3st main page"""
    return "Welcome to Bizza project!!"
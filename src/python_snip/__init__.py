from flask import Flask

app = Flask(__name__)
app.config.from_pyfile('flask.cfg', silent=True)

@app.route('/emps')
def home():
    return 'Hello World'
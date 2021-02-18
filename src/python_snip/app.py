from flask import Flask, jsonify, request
import cx_Oracle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
@app.route("/emps", methods=["GET"])
def hello():
    conn = cx_Oracle.connect("system", "hello", "localhost:1521/ORCL")
    cur = conn.cursor()
    rs = cur.execute("select * from emp")
    ls = []
    for row in rs:
        ls.append(row)

    # a = ''
    # for i in ls:
    #     a = a + str(i)

    return jsonify(data=ls)

@app.route("/emps/addUser", methods=["POST"])
def addUser():
    params = {
        'name': request.get_json().get('name'),
        'age': request.get_json().get('age'),
        'gender': request.get_json().get('gender')
    }
    print(params)
    conn = cx_Oracle.connect("system", "hello", "localhost:1521/ORCL")
    cur = conn.cursor()
    rs = cur.execute("insert into emp values('" + params['name'] + "','" + params['gender'] + "','" + params['age'] + "')")
    rs = cur.execute("commit")

    return jsonify(addentry=params)
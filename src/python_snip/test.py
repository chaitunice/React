import cx_Oracle

conn = cx_Oracle.connect("system", "hello", "localhost:1521/ORCL", encoding="UTF-8")
cur = conn.cursor()
rs = cur.execute("select * from emp")

ls = []
for row in rs:
    ls.append(row)

a = ''.join(str(ls))

print(a)
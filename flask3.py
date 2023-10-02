from flask import Flask
app =Flask(__name__)

@app.route("/")
def hello():
    return "welcome to come our site"

def display(username):
    return f'{username}'

app.add_url_rule("/user/<username>",'display',display) #app.add_url_rule(url,endpoint,methodname)


app.run()   
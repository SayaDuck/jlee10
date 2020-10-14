from flask import Flask
app = Flask(__name__)

@app.route("/static") 
def hello_world():
    print(__name__) 
    return "foo.html"

app.run()rm
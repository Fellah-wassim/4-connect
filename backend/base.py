from flask import Flask
from flask_cors import CORS

api = Flask(__name__)
CORS(api) 

@api.route('/profile')
def my_profile():
  response_body = {
    "name": "Wassim",
    "about" :"Hello! I'm a full stack developer that loves python and javascript"
  }

  return response_body


if __name__ == '__main__':
  api.run(host='127.0.0.1', port=5000)
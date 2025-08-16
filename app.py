from flask import Flask, render_template, flash, request
from flask_restful import reqparse, abort, Api, Resource


app = Flask(__name__)
api = Api(app)
app.config.update(RESTFUL_JSON=dict(ensure_ascii=False))  # API中文支持




# @app.route('/sidebar')
# def sidebar():
#     return render_template('sidebar.html')

@app.route('/', methods=['GET', 'POST'])
def main():
   
    print('built successfully')

    return render_template('home.html')


@app.route('/members', methods=['GET', 'POST'])
def members():
   
    print('built successfully')

    return render_template('members.html')



@app.route('/publication', methods=['GET', 'POST'])
def publication():
   
    print('built successfully')

    return render_template('publication.html')


@app.route('/project', methods=['GET', 'POST'])
def project():
    print('built successfully')

    return render_template('project.html')


@app.route('/news', methods=['GET', 'POST'])
def news():
    print('built successfully')

    return render_template('news.html')


@app.route('/resources', methods=['GET', 'POST'])
def resources():
    print('built successfully')

    return render_template('resources.html')


@app.route('/join', methods=['GET', 'POST'])
def join():
    print('built successfully')

    return render_template('join.html')


@app.route('/graduate', methods=['GET', 'POST'])
def graduate():
    print('built successfully')

    return render_template('graduate.html')


if __name__ == '__main__':
    app.config['SECRET_KEY'] = '123456789'
    app.run(host = '0.0.0.0', port=5001, debug=True)

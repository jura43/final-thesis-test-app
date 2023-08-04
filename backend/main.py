from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:jura@'+os.environ['hostname']+'/wineries'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

api = Api(app)

class GetWines(Resource):
    def get(self):
        wines = db.session.execute(db.select(WinesInWinery.ItemID, Wines.name, Wineries.name, WinesInWinery.amount).join(Wines, WinesInWinery.wine == Wines.WineID).join(Wineries, WinesInWinery.winery == Wineries.WineryID))
        wines_list = []
        for w in wines.all():
            if w[3] is not None:
                wines_list.append({'ItemID': w[0], 'name': w[1], 'winery':w[2], 'quantity': w[3]})
            else:
                wines_list.append({'ItemID': w[0], 'name': w[1], 'winery':w[2], 'quantity': "No information"})
        return  wines_list[0:1000]
    
class Test(Resource):
    def get(self):
        return "This is test page"
    
class WinesInWinery(db.Model):
    __tablename__ = 'WinesInWinery'
    ItemID = db.Column(db.Integer, primary_key=True)
    wine = db.Column(db.String)
    winery = db.Column(db.String)
    amount = db.Column(db.Integer)

class Wineries(db.Model):
    __tablename__ = 'Wineries'
    WineryID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.Integer)
    vineyard_area = db.Column(db.Integer)

class Wines(db.Model):
    __tablename__ = 'Wines'
    WineID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.Integer)

api.add_resource(GetWines, '/')
api.add_resource(Test, '/test')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
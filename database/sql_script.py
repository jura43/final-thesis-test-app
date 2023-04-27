import mysql.connector
import csv
import random

mydb = mysql.connector.connect(host="192.168.21.130", user="root", password="jura", database="wineries")
mycursor = mydb.cursor()

#City
with open('cities.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    print("Inserting cities...")
    for row in csv_reader:
        value = [row['city']]
        insert = "INSERT INTO City (name) VALUES (%s)"
        mycursor.execute(insert, value)

    mydb.commit()
    print("Done")

#WineType
with open('wine_types.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    print("Inserting wine types...")
    for row in csv_reader:
        value = [row['type']]
        insert = "INSERT INTO WineType (type) VALUES (%s)"
        mycursor.execute(insert, value)

    mydb.commit()
    print("Done")


#Wines
with open('wines.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    print("Inserting wines...")
    for row in csv_reader:
        value = [row['wine'], random.randrange(1, 7)]
        insert = "INSERT INTO Wines (name, type) VALUES (%s, %s)"
        mycursor.execute(insert, value)

    mydb.commit()
    print("Done")

#Wineries
with open('wineries.csv', mode='r', encoding="utf-8-sig") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    print("Inserting wineries...")
    for row in csv_reader:
        randomarea = random.randrange(1, 101)
        if randomarea > 15:
            value = [row['winery'], random.randrange(1, 86), random.randrange(1, 2000)]
            insert = "INSERT INTO Wineries (name, city, vineyard_area) VALUES (%s, %s, %s)"
            mycursor.execute(insert, value)
        else:
            value = [row['winery'], random.randrange(1, 86)]
            insert = "INSERT INTO Wineries (name, city) VALUES (%s, %s)"
            mycursor.execute(insert, value)

    mydb.commit()
    print("Done")

#WineInWinery
print("Inserting items...")
for i in range(1, 500000):
    randomamount = random.randrange(1, 101)
    if randomamount > 15:
        value = [random.randrange(1, 1145), random.randrange(1, 75001), random.randrange(1, 700)]
        insert = "INSERT INTO WinesInWinery (wine, winery, amount) VALUES (%s, %s, %s)"
        mycursor.execute(insert, value)
    else:
        value = [random.randrange(1, 1145), random.randrange(1, 75001)]
        insert = "INSERT INTO WinesInWinery (wine, winery) VALUES (%s, %s)"
        mycursor.execute(insert, value)

mydb.commit()
print("Done")

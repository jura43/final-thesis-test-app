# final-thesis-test-app
This app is used to measure performance of Custom Kubernetes scheduler with machine learning.
All three components are containerized.

## Frontend
Frontend is fork of [jura43/wineata](https://github.com/jura43/wineata)
Page that is used to measure scheduler scheduling technique is /shop which return 1000 items.

## Backend
Backend is written in Flask.
It fetches all data from *WinesInWinery* table does some parsing and returns first 1000 items in JSON format.

## Database
MariaDB is used for hosting database.
First I created dummy data that can be found in CSV format. Then I create Python script to enter that data into database from which I created dump. Then that dump file is being executed during container initialization. Database contests of five tables and over 500.000 records.


![Database scheme](https://i.imgur.com/ie1N9dz.png)


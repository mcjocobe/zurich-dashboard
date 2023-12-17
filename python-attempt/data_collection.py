import requests
import json


from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def get_waste_data():
    res = requests.get(
        "https://openerz.metaodi.ch/api/calendar.json?zip=8047&types=cardboard&types=paper&start=2023-12-15&sort=date&offset=0&limit=20"
    )

    return json.loads(res.text)["result"]
